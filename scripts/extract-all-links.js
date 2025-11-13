/**
 * Automated script to extract all project links from Monad Ecosystem
 * Run: node scripts/extract-all-links.js
 * 
 * Requires: npm install puppeteer
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function extractProjectLinks() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    console.log('Navigating to Monad Ecosystem...');
    await page.goto('https://tn-ecosystem.monad.xyz/', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for projects to load
    await page.waitForTimeout(3000);
    
    // Scroll to load all projects
    console.log('Scrolling to load all projects...');
    await autoScroll(page);
    
    // Extract project data
    console.log('Extracting project data...');
    const projects = await page.evaluate(() => {
      const results = [];
      
      // Find all project cards - try multiple selectors
      const cardSelectors = [
        'article',
        '[class*="card"]',
        '[class*="project"]',
        'div[role="article"]'
      ];
      
      let cards = [];
      for (const selector of cardSelectors) {
        const found = document.querySelectorAll(selector);
        if (found.length > 5) {
          cards = Array.from(found);
          break;
        }
      }
      
      // Fallback: find by structure
      if (cards.length === 0) {
        const allDivs = Array.from(document.querySelectorAll('div'));
        cards = allDivs.filter(div => {
          const hasHeading = div.querySelector('h1, h2, h3, h4, h5, h6');
          const hasLinks = div.querySelectorAll('a[href]').length > 0;
          return hasHeading && hasLinks;
        });
      }
      
      cards.forEach(card => {
        try {
          // Get name
          const nameEl = card.querySelector('h1, h2, h3, h4, h5, h6, [class*="name"], [class*="title"]');
          const name = nameEl ? nameEl.textContent.trim() : null;
          if (!name || name.length < 2) return;
          
          // Get all links
          const links = card.querySelectorAll('a[href]');
          let website = null;
          let twitter = null;
          
          links.forEach(link => {
            const href = link.getAttribute('href');
            const text = (link.textContent || '').toLowerCase();
            const ariaLabel = (link.getAttribute('aria-label') || '').toLowerCase();
            
            if (href.includes('twitter.com') || href.includes('x.com') || 
                text.includes('twitter') || text.includes('x.com') ||
                ariaLabel.includes('twitter')) {
              twitter = href.startsWith('http') ? href : `https://${href.replace(/^\/+/, '')}`;
            } else if (href.startsWith('http') && 
                      !href.includes('monad.xyz') && 
                      !href.includes('twitter') && 
                      !href.includes('x.com')) {
              website = href;
            }
          });
          
          // Get logo
          const img = card.querySelector('img');
          const logo = img ? (img.getAttribute('src') || img.getAttribute('data-src') || '') : null;
          
          if (name) {
            results.push({
              name: name,
              website: website || null,
              twitter: twitter || null,
              logo: logo ? (logo.startsWith('http') ? logo : `https://tn-ecosystem.monad.xyz${logo}`) : null
            });
          }
        } catch (e) {
          console.error('Error processing card:', e);
        }
      });
      
      return results;
    });
    
    // Remove duplicates
    const unique = projects.filter((p, index, self) => 
      index === self.findIndex(proj => proj.name === p.name)
    );
    
    console.log(`\nExtracted ${unique.length} projects\n`);
    
    // Save to file
    const outputPath = path.join(__dirname, 'extracted-links.json');
    fs.writeFileSync(outputPath, JSON.stringify(unique, null, 2));
    console.log(`Saved to ${outputPath}`);
    
    // Also create a mapping for easy integration
    const mapping = {};
    unique.forEach(p => {
      const key = p.name.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-');
      mapping[key] = {
        website: p.website,
        twitter: p.twitter,
        logo: p.logo
      };
    });
    
    const mappingPath = path.join(__dirname, 'links-mapping.json');
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
    console.log(`Saved mapping to ${mappingPath}`);
    
    return unique;
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

// Run if called directly
if (require.main === module) {
  extractProjectLinks()
    .then(() => {
      console.log('\nDone! Check extracted-links.json and links-mapping.json');
      process.exit(0);
    })
    .catch(error => {
      console.error('Failed:', error);
      process.exit(1);
    });
}

module.exports = { extractProjectLinks };

