// QUICK EXTRACTION SCRIPT
// Copy this entire script and paste into browser console on https://tn-ecosystem.monad.xyz/
// Make sure to scroll through all pages first to load all projects!

(() => {
  const results = [];
  const seen = new Set();
  
  // Find all clickable project elements
  const allElements = document.querySelectorAll('*');
  
  allElements.forEach(el => {
    // Skip if already processed
    if (seen.has(el)) return;
    seen.add(el);
    
    // Look for elements that might be project cards
    const text = el.textContent || '';
    const hasLinks = el.querySelectorAll('a[href]').length > 0;
    
    // Try to find project name (usually first heading or strong text)
    const heading = el.querySelector('h1, h2, h3, h4, h5, h6, strong, [class*="name"], [class*="title"]');
    const name = heading ? heading.textContent.trim() : null;
    
    if (!name || name.length < 2 || name.length > 60) return;
    
    // Skip if it's a common UI element
    if (name === 'Monad Ecosystem' || name === 'Categories' || name === 'Reset') return;
    
    // Get all links in this element
    const links = el.querySelectorAll('a[href]');
    let website = null;
    let twitter = null;
    let logo = null;
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      
      const fullHref = href.startsWith('http') ? href : `https://tn-ecosystem.monad.xyz${href}`;
      const linkText = (link.textContent || '').toLowerCase();
      const ariaLabel = (link.getAttribute('aria-label') || '').toLowerCase();
      
      if (href.includes('twitter.com') || href.includes('x.com') || 
          linkText.includes('twitter') || linkText.includes('x.com') ||
          ariaLabel.includes('twitter') || ariaLabel.includes('x.com')) {
        twitter = fullHref;
      } else if (href.startsWith('http') && 
                !href.includes('monad.xyz') && 
                !href.includes('twitter') && 
                !href.includes('x.com') &&
                !href.includes('mailto:') &&
                !href.includes('#')) {
        website = fullHref;
      }
    });
    
    // Find logo/image
    const img = el.querySelector('img');
    if (img) {
      const src = img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
      if (src && !src.includes('data:image')) {
        logo = src.startsWith('http') ? src : `https://tn-ecosystem.monad.xyz${src}`;
      }
    }
    
    // Only add if we have at least a name
    if (name && !results.find(r => r.name === name)) {
      results.push({
        name: name,
        website: website,
        twitter: twitter,
        logo: logo
      });
    }
  });
  
  // Sort by name
  results.sort((a, b) => a.name.localeCompare(b.name));
  
  console.log(`\n✅ Extracted ${results.length} projects\n`);
  console.log('='.repeat(50));
  console.log(JSON.stringify(results, null, 2));
  console.log('='.repeat(50));
  
  // Also create a simple mapping
  console.log('\n📋 Simple mapping (copy this):\n');
  const mapping = {};
  results.forEach(p => {
    const key = p.name.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    mapping[key] = {
      website: p.website,
      twitter: p.twitter,
      logo: p.logo
    };
  });
  console.log(JSON.stringify(mapping, null, 2));
  
  return results;
})();

