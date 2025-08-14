# 🚀 Deployment Guide - GitHub Pages

This guide will walk you through deploying your Modi Law Firm website to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Repository with your project code
- Node.js 18+ installed locally

## 🔧 Setup Steps

### 1. Repository Configuration

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Click **Save**

### 3. Enable GitHub Actions

1. In the same **Settings** tab
2. Click **Actions** → **General** (left sidebar)
3. Under **Actions permissions**, select **Allow all actions and reusable workflows**
4. Click **Save**

### 4. Automatic Deployment

Once configured, every push to your main branch will automatically:
1. Build your Next.js project
2. Generate static files
3. Deploy to GitHub Pages

Your site will be available at: `https://[username].github.io/[repository-name]`

## 🛠️ Manual Deployment

If you prefer manual deployment:

```bash
# Build and deploy
npm run deploy

# Or build separately
npm run export
gh-pages -d out
```

## 📁 What Gets Deployed

The deployment process:
1. Builds your Next.js app with `output: 'export'`
2. Generates static files in the `out/` directory
3. Pushes the `out/` directory to the `gh-pages` branch
4. GitHub Pages serves these static files

## 🔍 Troubleshooting

### Common Issues:

1. **Build fails**: Check for TypeScript errors or missing dependencies
2. **Page not found**: Ensure `basePath` is correctly set in `next.config.js`
3. **Assets not loading**: Verify `assetPrefix` configuration
4. **Actions not running**: Check repository permissions and Actions settings

### Check Deployment Status:

1. Go to **Actions** tab in your repository
2. Look for the latest workflow run
3. Check for any error messages in the build logs

## 📱 Testing Your Deployment

1. Wait for the GitHub Actions workflow to complete
2. Visit your GitHub Pages URL
3. Test all pages and functionality
4. Check mobile responsiveness
5. Verify all assets are loading correctly

## 🔄 Updating Your Site

To update your deployed site:

1. Make your changes locally
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```
3. GitHub Actions will automatically rebuild and redeploy
4. Wait a few minutes for the changes to appear

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure all dependencies are properly installed
4. Check the Next.js documentation for static export issues

---

**Happy Deploying! 🎉**
