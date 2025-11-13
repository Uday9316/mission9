/**
 * Script to extract project links from Monad Ecosystem website
 * Run this in browser console on https://tn-ecosystem.monad.xyz/
 * 
 * Instructions:
 * 1. Open https://tn-ecosystem.monad.xyz/ in your browser
 * 2. Open browser DevTools (F12)
 * 3. Go to Console tab
 * 4. Paste and run this script
 * 5. Copy the output JSON
 */

(function() {
  const projects = [];
  
  // Find all project cards
  const cards = document.querySelectorAll('[class*="card"], [data-project], article, .project-card');
  
  // Alternative: look for elements containing project names
  const projectElements = Array.from(document.querySelectorAll('*')).filter(el => {
    const text = el.textContent || '';
    return text.includes('0x') || text.includes('AUSD') || text.includes('Alchemy');
  });
  
  // Try to find project cards by common patterns
  const allCards = document.querySelectorAll('div, article, section');
  
  allCards.forEach((card, index) => {
    // Look for project name
    const nameElement = card.querySelector('h2, h3, [class*="name"], [class*="title"]');
    if (!nameElement) return;
    
    const name = nameElement.textContent.trim();
    if (!name || name.length < 2) return;
    
    // Look for links within the card
    const links = card.querySelectorAll('a[href]');
    let website = null;
    let twitter = null;
    let logo = null;
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      // Check for website link (not twitter, not internal)
      if (href.includes('twitter.com') || href.includes('x.com')) {
        twitter = href.startsWith('http') ? href : `https://${href.replace(/^\/+/, '')}`;
      } else if (href.includes('http') && !href.includes('monad.xyz') && !href.includes('twitter.com') && !href.includes('x.com')) {
        website = href;
      }
    });
    
    // Look for images (logos)
    const images = card.querySelectorAll('img');
    images.forEach(img => {
      const src = img.getAttribute('src') || img.getAttribute('data-src');
      if (src && (src.includes('logo') || src.includes('icon') || src.includes('avatar'))) {
        logo = src.startsWith('http') ? src : `https://tn-ecosystem.monad.xyz${src}`;
      }
    });
    
    if (name) {
      projects.push({
        name: name,
        website: website,
        twitter: twitter,
        logo: logo,
        element: card.outerHTML.substring(0, 200) // First 200 chars for debugging
      });
    }
  });
  
  // Output results
  console.log('Found projects:', projects.length);
  console.log(JSON.stringify(projects, null, 2));
  
  // Also try to find by data attributes
  console.log('\n=== Alternative Method: Looking for data attributes ===');
  const dataProjects = Array.from(document.querySelectorAll('[data-name], [data-project-id], [data-slug]'));
  console.log('Found data attributes:', dataProjects.length);
  
  return projects;
})();

