# Photography Room 7209 Booking System

A web-based booking system for Photography Room 7209.

## Live Site

Visit: [https://7209booking.com](https://7209booking.com)

## Custom Domain DNS Setup Guide

This site is configured to use the custom domain `7209booking.com` with GitHub Pages. To complete the setup, you need to configure DNS records at your domain registrar.

### Step 1: Add DNS Records at Your Registrar

For an **apex domain** (7209booking.com), add these **A records**:

| Type | Host/Name | Value/Points To |
|------|-----------|-----------------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

For **www subdomain** (optional, for www.7209booking.com), add a **CNAME record**:

| Type | Host/Name | Value/Points To |
|------|-----------|-----------------|
| CNAME | www | Danny2078.github.io |

### Step 2: Verify DNS Propagation

After adding records, check propagation (may take up to 48 hours):

```bash
# On Mac/Linux/Git Bash
dig 7209booking.com +short

# Expected output (all 4 GitHub IPs):
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

Or use Windows:
```cmd
nslookup 7209booking.com
```

### Step 3: Enable HTTPS in GitHub

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", verify `7209booking.com` is shown
3. Wait for DNS check to pass (green checkmark)
4. Check "Enforce HTTPS" once available

### Provider-Specific Instructions

<details>
<summary><b>GoDaddy</b></summary>

1. Sign in → My Products → DNS for 7209booking.com
2. Click "Add" under Records
3. For apex domain: Add A record, Host: `@`, Points to: each GitHub IP
4. Click Save

</details>

<details>
<summary><b>Namecheap</b></summary>

1. Dashboard → Domain List → Manage → Advanced DNS
2. Click "Add New Record"
3. For apex: Type: A Record, Host: @, Value: GitHub IP
4. Repeat for all 4 IPs

</details>

<details>
<summary><b>Cloudflare</b></summary>

1. DNS → Add record
2. For apex: Type: A, Name: @, IPv4: GitHub IP
3. **Important**: Set Proxy status to "DNS only" (grey cloud, NOT orange)
4. GitHub validation fails if Cloudflare proxy is enabled

</details>

<details>
<summary><b>Squarespace Domains (formerly Google Domains)</b></summary>

1. Log in to Squarespace Domains → Select your domain → DNS
2. Click "Add Record"
3. Add A records with Host: @ and each GitHub IP
4. Save changes

*Note: Google Domains was transferred to Squarespace in 2023.*

</details>

### Troubleshooting

| Issue | Solution |
|-------|----------|
| DNS check failing | Wait up to 48 hours; ensure records are correct |
| Cloudflare issues | Disable proxy (orange cloud → grey cloud) |
| HTTPS not available | Wait for DNS check to pass first |
| Mixed content errors | Ensure all resources use HTTPS |

### Repository Files

- `Booking.html` - Main booking application
- `config.js` - Configuration settings
- `CNAME` - Custom domain configuration (already set to `7209booking.com`)
- `password-generator.html` - Utility for generating password hashes

## License

© Photography Room 7209 Booking System
