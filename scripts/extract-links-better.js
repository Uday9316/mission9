/**
 * Better extraction script - looks for common patterns in the Monad ecosystem site
 * Run in browser console on https://tn-ecosystem.monad.xyz/
 */

(async function() {
  const results = [];
  
  // Wait for page to fully load
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Method 1: Look for project cards with links
  const selectors = [
    'article',
    '[class*="card"]',
    '[class*="project"]',
    '[class*="item"]',
    'div[role="article"]',
    '[data-testid*="project"]'
  ];
  
  let cards = [];
  for (const selector of selectors) {
    const found = document.querySelectorAll(selector);
    if (found.length > 10) {
      cards = Array.from(found);
      console.log(`Found ${cards.length} elements with selector: ${selector}`);
      break;
    }
  }
  
  // If no cards found, try getting all clickable divs
  if (cards.length === 0) {
    cards = Array.from(document.querySelectorAll('div')).filter(div => {
      const text = div.textContent || '';
      const hasName = /^[A-Z0-9][a-zA-Z0-9\s]+$/.test(text.trim().split('\n')[0]);
      const hasLinks = div.querySelectorAll('a[href]').length > 0;
      return hasName && hasLinks && text.length < 500;
    });
  }
  
  cards.forEach((card, index) => {
    try {
      // Get project name - usually in heading or first text node
      const headings = card.querySelectorAll('h1, h2, h3, h4, h5, h6, [class*="name"], [class*="title"]');
      let name = null;
      
      if (headings.length > 0) {
        name = headings[0].textContent.trim();
      } else {
        // Try first line of text
        const text = card.textContent || '';
        const firstLine = text.split('\n').find(line => line.trim().length > 0 && line.trim().length < 50);
        if (firstLine && /^[A-Z]/.test(firstLine.trim())) {
          name = firstLine.trim();
        }
      }
      
      if (!name || name.length < 2 || name.length > 50) return;
      
      // Find all links in the card
      const links = card.querySelectorAll('a[href]');
      let website = null;
      let twitter = null;
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        const text = link.textContent.toLowerCase();
        const ariaLabel = link.getAttribute('aria-label')?.toLowerCase() || '';
        
        if (href.includes('twitter.com') || href.includes('x.com') || text.includes('twitter') || text.includes('x.com') || ariaLabel.includes('twitter')) {
          twitter = href.startsWith('http') ? href : `https://${href.replace(/^\/+/, '')}`;
        } else if (href.startsWith('http') && !href.includes('monad.xyz') && !href.includes('twitter') && !href.includes('x.com')) {
          if (!website || href.length < website.length) { // Prefer shorter URLs (main sites)
            website = href;
          }
        }
      });
      
      // Find logo/image
      const images = card.querySelectorAll('img');
      let logo = null;
      images.forEach(img => {
        const src = img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
        if (src && !src.includes('data:image')) {
          logo = src.startsWith('http') ? src : `https://tn-ecosystem.monad.xyz${src}`;
        }
      });
      
      // Get description
      const descElement = card.querySelector('[class*="desc"], [class*="description"], p');
      const description = descElement ? descElement.textContent.trim() : null;
      
      if (name) {
        results.push({
          name: name,
          website: website,
          twitter: twitter,
          logo: logo,
          description: description?.substring(0, 200)
        });
      }
    } catch (e) {
      console.error('Error processing card:', e);
    }
  });
  
  // Remove duplicates
  const unique = results.filter((project, index, self) => 
    index === self.findIndex(p => p.name === project.name)
  );
  
  console.log(`\n=== Extracted ${unique.length} projects ===\n`);
  console.log(JSON.stringify(unique, null, 2));
  
  // Also create a mapping object for easy lookup
  const mapping = {};
  unique.forEach(p => {
    const key = p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    mapping[key] = {
      website: p.website,
      twitter: p.twitter,
      logo: p.logo
    };
  });
  
  console.log('\n=== Mapping Object (for easy copy-paste) ===\n');
  console.log(JSON.stringify(mapping, null, 2));
  
  return unique;
})();

