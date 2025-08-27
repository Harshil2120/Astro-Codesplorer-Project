# Deploying to Cloudflare Pages

This guide will help you deploy your Astro blog to Cloudflare Pages.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI**: Install the Cloudflare CLI tool
3. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## Installation

### 1. Install Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Login to Cloudflare

```bash
wrangler login
```

This will open your browser to authenticate with Cloudflare.

## Deployment Methods

### Method 1: Manual Deployment (Recommended for testing)

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**:
   ```bash
   npm run deploy
   ```

   Or for preview environment:
   ```bash
   npm run deploy:preview
   ```

### Method 2: Automatic Deployment via Git (Recommended for production)

1. **Push your code to GitHub/GitLab**

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages"
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your repository

3. **Configure build settings**:
   - **Framework preset**: None (or Astro if available)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty if project is in root)

4. **Environment variables** (if needed):
   - Add any environment variables your app requires

5. **Deploy**: Click "Save and Deploy"

## Configuration Files

### wrangler.toml
This file configures your Cloudflare Pages project:
- `name`: Your project name
- `compatibility_date`: Cloudflare Workers compatibility date
- `compatibility_flags`: Node.js compatibility for server-side rendering

### astro.config.mjs
Your Astro configuration is already set up for Cloudflare:
- Uses `@astrojs/cloudflare` adapter
- Output mode set to 'server' for SSR

## Environment Variables

If your app uses environment variables, add them in the Cloudflare Pages dashboard:

1. Go to your project settings
2. Navigate to "Environment variables"
3. Add your variables for Production and/or Preview environments

## Custom Domains

To add a custom domain:

1. Go to your project settings in Cloudflare Pages
2. Navigate to "Custom domains"
3. Add your domain
4. Update your DNS settings as instructed

## Troubleshooting

### Common Issues

1. **Build fails**: Check your build logs in the Cloudflare dashboard
2. **404 errors**: Ensure your `astro.config.mjs` has the correct adapter configuration
3. **Environment variables not working**: Verify they're set in the Cloudflare dashboard

### Debug Commands

```bash
# Test build locally
npm run build

# Preview locally
npm run preview

# Check Wrangler configuration
wrangler pages project list
```

## Performance Optimization

1. **Enable Cloudflare's CDN**: Automatically enabled
2. **Use Cloudflare Images**: For image optimization
3. **Enable Brotli compression**: Automatically handled
4. **Set appropriate cache headers**: Configure in your Astro components

## Monitoring

- **Analytics**: Available in Cloudflare dashboard
- **Performance**: Use Cloudflare's built-in performance monitoring
- **Error tracking**: Check function logs in the dashboard

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Cloudflare Adapter](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
