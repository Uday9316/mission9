# Extract Project Links from Monad Ecosystem

These scripts help extract website and X/Twitter links from the Monad ecosystem website.

## Quick Method: Browser Console (Easiest)

1. Open https://tn-ecosystem.monad.xyz/ in your browser
2. **Scroll through ALL pages** to load all projects (or wait for infinite scroll to load everything)
3. Open Developer Tools (F12 or Cmd+Option+I on Mac)
4. Go to the **Console** tab
5. Copy and paste the entire contents of `extract-links-better.js`
6. Press Enter to run
7. The script will output JSON with all project links
8. Copy the JSON output
9. Use it to update `data/dapps.ts` with the links

## Method 2: Manual Extraction

Since the website uses dynamic loading, you may need to:

1. Scroll through all pages to load all projects
2. Click on each project card to see the detail modal
3. Extract links from each project's detail page
4. Update the `data/dapps.ts` file manually

## Method 3: Network Tab Inspection

1. Open Developer Tools → Network tab
2. Filter by "Fetch/XHR"
3. Look for API calls that return project data
4. The API response may contain all links in JSON format

## Updating the Data

Once you have the links, update `data/dapps.ts` by adding:

```typescript
{
  id: "project-id",
  name: "Project Name",
  // ... other fields
  website: "https://project-website.com",
  twitter: "https://x.com/projecthandle",
  logo: "https://logo-url.com/logo.png"
}
```

