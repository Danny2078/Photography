# Setup Instructions for Repository Owner

This document contains step-by-step instructions for making the Photography Room 7209 Booking System publicly accessible at **7209booking.com**.

## ✅ Changes Already Completed

The following changes have been made to your repository:

1. **Renamed `Booking.html` to `index.html`** - This is the standard name for the main page of a website
2. **Created `CNAME` file** - Contains the custom domain `7209booking.com`
3. **Added `README.md`** - Comprehensive documentation for users and developers
4. **Added `.gitignore`** - To exclude unnecessary system and editor files

## 📋 Steps You Need to Complete

### Step 1: Make the Repository Public

The repository is currently private. To make it public:

1. Go to your repository on GitHub: https://github.com/Danny2078/Photography
2. Click on **Settings** (top right of the repository page)
3. Scroll down to the **Danger Zone** section at the bottom
4. Click **Change visibility**
5. Select **Make public**
6. Type the repository name to confirm
7. Click **I understand, change repository visibility**

**⚠️ Important**: Once public, anyone can see your repository code. Make sure there are no secrets or sensitive data committed.

### Step 2: Enable GitHub Pages

After making the repository public:

1. Stay in **Settings**
2. In the left sidebar, click **Pages** (under "Code and automation")
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**:
   - Select the branch: `main` or `master` (whichever is your default branch)
   - Select the folder: `/ (root)`
5. Click **Save**

GitHub will now deploy your website. This may take a few minutes.

### Step 3: Configure Custom Domain (7209booking.com)

#### Option A: If You Own the Domain 7209booking.com

1. **In GitHub Pages Settings**:
   - Under **Custom domain**, enter: `7209booking.com`
   - Click **Save**
   - Wait for the DNS check to complete

2. **Configure DNS with Your Domain Provider**:
   - Log in to your domain registrar (GoDaddy, Namecheap, etc.)
   - Go to DNS settings for `7209booking.com`
   - Add the following DNS records:

   **For Apex Domain (7209booking.com):**
   - Type: `A`
   - Host/Name: `@` or leave blank
   - Value/Points to: `185.199.108.153`
   - TTL: `3600` or `Auto`
   
   Add three more A records with these IPs:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

   **For www Subdomain (optional):**
   - Type: `CNAME`
   - Host/Name: `www`
   - Value/Points to: `danny2078.github.io`
   - TTL: `3600` or `Auto`

3. **Wait for DNS Propagation**:
   - DNS changes can take 24-48 hours to fully propagate
   - Check status: https://www.whatsmydns.net/#A/7209booking.com

#### Option B: If You Don't Own the Domain Yet

1. **Purchase the Domain**:
   - Go to a domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
   - Search for and purchase `7209booking.com`
   - Follow the same DNS configuration steps as Option A

#### Option C: Use GitHub Pages Default Domain (Free)

If you don't want to purchase a custom domain:

1. Remove the `CNAME` file from the repository:
   ```bash
   git rm CNAME
   git commit -m "Remove custom domain"
   git push
   ```

2. Your website will be available at: `https://danny2078.github.io/Photography/`

### Step 4: Verify the Website

After completing the above steps:

1. **Check GitHub Pages Status**:
   - Go to Settings → Pages
   - You should see: "Your site is live at https://7209booking.com"

2. **Test the Website**:
   - Visit https://7209booking.com (or your GitHub Pages URL)
   - Try creating a student account
   - Try booking a session
   - Test the admin login

3. **Enable HTTPS** (Recommended):
   - In Settings → Pages
   - Check the box "Enforce HTTPS"
   - This ensures secure connections

## 🔍 Verification Checklist

- [ ] Repository is public
- [ ] GitHub Pages is enabled
- [ ] Website is accessible (at GitHub Pages URL or custom domain)
- [ ] Student registration works
- [ ] Booking functionality works
- [ ] Admin login works
- [ ] HTTPS is enforced (if using custom domain)

## 🆘 Troubleshooting

### Website Shows 404 Error
- Ensure GitHub Pages is enabled
- Verify the correct branch is selected
- Check that `index.html` exists in the root of the repository

### Custom Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation (use https://www.whatsmydns.net)
- Check that CNAME file contains only the domain name (no protocol or slashes)
- Ensure "Enforce HTTPS" is unchecked initially (enable after DNS works)

### Changes Not Appearing
- GitHub Pages can take a few minutes to rebuild
- Try clearing your browser cache
- Check the Actions tab for build status

### Security Warnings
- GitHub may show a warning if DNS isn't configured correctly
- This is normal during initial setup
- It will resolve once DNS propagates

## 📞 Need Help?

If you encounter issues:

1. **GitHub Pages Documentation**: https://docs.github.com/en/pages
2. **Custom Domain Setup**: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. **GitHub Community Forum**: https://github.community/

## 🎉 After Setup

Once your website is live:

1. **Update README.md** if needed with the final URL
2. **Share the link** with students and teachers
3. **Test all features** thoroughly
4. **Change default admin passwords** for security
5. **Monitor usage** and bookings

---

**Current Status**: The code changes are complete. Follow the steps above to make the website publicly accessible at 7209booking.com.
