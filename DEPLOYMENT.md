# 🚀 Deployment Guide for gptard.wtf

## Quick Deploy Options

### Option 1: Vercel (Easiest - Recommended)

1. **Deploy Now**:
   ```bash
   vercel --prod
   ```

2. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name: `gptard-wtf`
   - Confirm deployment

3. **Set Environment Variables**:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `OPENAI_API_KEY` = `your_openai_api_key_here`

4. **Add Custom Domain**:
   - Go to Settings → Domains
   - Add: `gptard.wtf`
   - Update DNS records as shown

### Option 2: Netlify (Static Frontend Only)

1. **Build and Deploy**:
   ```bash
   npm run build
   # Drag dist/ folder to Netlify
   ```

2. **Set Environment Variables**:
   - Site Settings → Environment Variables
   - Add: `OPENAI_API_KEY`

### Option 3: Traditional Web Server

1. **Upload Files**:
   - Upload `dist/` contents to web root
   - Upload `server.js`, `package.json` to server

2. **Install Dependencies**:
   ```bash
   npm install --production
   ```

3. **Start Server**:
   ```bash
   npm start
   ```

## DNS Configuration for gptard.wtf

### If using Vercel:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### If using traditional server:
```
Type: A
Name: @
Value: [Your Server IP]

Type: CNAME
Name: www
Value: gptard.wtf
```

## SSL Certificate

### Let's Encrypt (Free):
```bash
# Install certbot
sudo apt install certbot

# Get certificate
sudo certbot --nginx -d gptard.wtf -d www.gptard.wtf
```

### Or purchase SSL from domain provider

## Environment Variables Needed

```env
OPENAI_API_KEY=sk-proj-your-openai-key-here
```

## Testing Checklist

- [ ] Site loads at gptard.wtf
- [ ] Wallet connection works
- [ ] AI chat responds
- [ ] Credit system functions
- [ ] Payment flow works
- [ ] Mobile responsive
- [ ] SSL certificate active

## Troubleshooting

### Common Issues:
1. **Site not loading**: Check DNS propagation (can take 24-48 hours)
2. **API errors**: Verify OPENAI_API_KEY is set correctly
3. **Wallet not connecting**: Ensure HTTPS is enabled
4. **Build errors**: Check Node.js version (use 16+)

### Support:
- Check browser console for errors
- Verify all environment variables
- Test on different browsers
- Check mobile responsiveness

## Next Steps After Deployment

1. **Monitor Performance**: Set up analytics
2. **Backup**: Regular backups of your code
3. **Updates**: Plan for regular updates
4. **Marketing**: Share your live site!
5. **Community**: Engage with users

---

**Your site will be live at: https://gptard.wtf** 🎉
