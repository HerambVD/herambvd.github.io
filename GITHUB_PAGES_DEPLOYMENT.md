# GitHub Pages Deployment Guide for Heramb Devbhankar Portfolio

## Prerequisites
- GitHub account
- Git installed on your machine
- Node.js 18+ installed
- Repository cloned locally

## Step 1: Verify Repository Settings

1. Go to your GitHub repository: `https://github.com/herambvd/herambvd.github.io`
2. Click on **Settings** → **Pages**
3. Ensure the source is set to:
   - **Source:** Deploy from a branch
   - **Branch:** `master` (or `main`)
   - **Folder:** `/ (root)`
4. Note the published URL: `https://herambvd.github.io`

## Step 2: Configure Next.js for GitHub Pages

The `next.config.js` has already been configured. Key settings:

```javascript
const nextConfig = {
  // Security headers and optimization settings
  headers: async () => { ... },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  generateEtags: true,
};
```

## Step 3: Update package.json Scripts

The scripts in `package.json` are configured for GitHub Pages:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "export": "next export",
    "predeploy": "npm run build && npm run export",
    "deploy": "gh-pages -d out"
  }
}
```

## Step 4: Build and Test Locally

```bash
# Install dependencies
npm install

# Build the Next.js application
npm run build

# Export static files
npm run export

# Test locally (optional)
npm run dev
```

## Step 5: Deploy Using GitHub Actions

The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles automatic deployment:

### How it works:
1. Push changes to `master` or `upgrades-apr-2026` branch
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds the Next.js application
   - Exports static files to `out/` directory
   - Deploys to GitHub Pages
   - Submits sitemap to Google and Bing

### To verify the workflow:
1. Go to your repository
2. Click on **Actions** tab
3. Look for the "Deploy to GitHub Pages" workflow
4. Check the status of recent deployments

## Step 6: Manual Deployment (if needed)

If GitHub Actions fails or you want to deploy manually:

```bash
# Install gh-pages package (if not already installed)
npm install --save-dev gh-pages

# Build and deploy
npm run predeploy
npm run deploy
```

## Step 7: Verify Deployment

1. Check that your site is live: `https://herambvd.github.io`
2. Verify all pages load correctly:
   - Homepage: `https://herambvd.github.io/`
   - Projects: `https://herambvd.github.io/projects`
   - Contact: `https://herambvd.github.io/contact`
   - My Story: `https://herambvd.github.io/my-story`

## Step 8: SEO Verification

### Check robots.txt
- Visit: `https://herambvd.github.io/robots.txt`
- Should show your robots configuration

### Check sitemap.xml
- Visit: `https://herambvd.github.io/sitemap.xml`
- Should display your XML sitemap

### Check meta tags
- Open any page in a browser
- Right-click → "View Page Source"
- Verify presence of:
  - `<meta name="keywords" content="...">`
  - `<meta name="description" content="...">`
  - `<meta property="og:title" content="...">`
  - Schema.org JSON-LD data

## Step 9: Submit to Search Engines

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property"
3. Enter: `https://herambvd.github.io`
4. Verify ownership (recommended: DNS or HTML tag method)
5. Go to **Sitemaps** → Click "Add/test sitemap"
6. Enter: `sitemap.xml`
7. Click "Submit"

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Click "Add site"
3. Enter: `https://herambvd.github.io`
4. Verify ownership (recommended: XML file method)
5. Go to **Sitemaps** → Add sitemap URL: `https://herambvd.github.io/sitemap.xml`

### Yandex Webmaster (Optional)
1. Go to [Yandex Webmaster](https://webmaster.yandex.com)
2. Add site and follow verification steps
3. Submit sitemap

## Step 10: Monitor Search Performance

### Google Search Console Tasks:
- **Indexing:** Check if pages are indexed
- **Coverage:** Look for any crawl errors
- **Performance:** Monitor impressions and clicks
- **Core Web Vitals:** Ensure good page performance

### Google Analytics Setup:
1. Create a property for `https://herambvd.github.io`
2. Add Google Analytics tag to `<head>` in `app/layout.tsx`:
   ```jsx
   <Script
     strategy="afterInteractive"
     src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
   />
   <Script
     id="google-analytics"
     strategy="afterInteractive"
     dangerouslySetInnerHTML={{
       __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'GA_MEASUREMENT_ID');
       `,
     }}
   />
   ```

## Troubleshooting

### Issue: Site not showing on GitHub Pages
**Solution:**
- Verify Settings → Pages is configured correctly
- Check GitHub Actions workflow for errors
- Ensure `out/` folder has been generated
- Try manually deploying: `npm run predeploy && npm run deploy`

### Issue: Sitemap or robots.txt not found
**Solution:**
- Verify files exist in `public/` directory
- Check that the `out/` folder contains these files after build
- Rebuild: `npm run build && npm run export`

### Issue: Pages return 404 errors
**Solution:**
- Check that all routes are correctly configured in `app/` directory
- Verify `404.tsx` exists in `app/` directory
- Rebuild and redeploy: `npm run build && npm run export`

### Issue: Images not loading
**Solution:**
- Ensure image paths are relative (no leading slash for dynamic imports)
- Or use absolute URLs for external images
- Verify public images are in `public/` directory

### Issue: Styles not applying
**Solution:**
- Check that Tailwind CSS is properly configured
- Verify `globals.css` is imported in `app/layout.tsx`
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Rebuild: `npm run build`

## Custom Domain Setup (Optional)

If you own a custom domain (like `heramb.tech`):

1. Add `CNAME` file to `public/` directory with just your domain:
   ```
   heramb.tech
   ```

2. Go to your GitHub repository → Settings → Pages
3. Add your custom domain in the "Custom domain" field
4. GitHub will automatically check for CNAME file

5. In your domain registrar settings:
   - Point to GitHub Pages IP address: `185.199.108.153`
   - Or use the CNAME provided by GitHub

## Performance Optimization Tips

1. **Enable Gzip Compression:** Already configured in `next.config.js`
2. **Use Next.js Image Component:** For optimized images
3. **Lazy Load Components:** Use Next.js dynamic imports
4. **Minify Code:** SWC minification already enabled
5. **Cache Static Assets:** GitHub Pages automatically caches

## Maintenance Checklist

- [ ] Update `sitemap.xml` when adding new pages
- [ ] Update `robots.txt` if adding new directories
- [ ] Monitor Google Search Console for indexing issues
- [ ] Check Core Web Vitals monthly
- [ ] Update project descriptions for relevance
- [ ] Add internal links to new content
- [ ] Test all links quarterly

## Quick Reference

| Action | Command |
|--------|---------|
| Install dependencies | `npm install` |
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Export static files | `npm run export` |
| Deploy via gh-pages | `npm run deploy` |
| Lint code | `npm run lint` |

## Additional Resources

- [Next.js Export Documentation](https://nextjs.org/docs/advanced-features/static-html-export)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Bing Webmaster Tools Help](https://www.bing.com/webmasters/help)
- [MDN Web Docs - SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)

## Support & Contact

For deployment issues or questions, refer to:
- GitHub Issues for this repository
- GitHub Discussions community
- Official Next.js documentation

---

**Last Updated:** April 18, 2026
**Maintained by:** Heramb Devbhankar
