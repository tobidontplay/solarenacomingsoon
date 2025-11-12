# Partner Form Email Setup Guide

The partner application form is now integrated into your landing page! Here's how to set it up to receive emails:

## Option 1: Web3Forms (Recommended - Free & Easy)

1. **Go to [Web3Forms](https://web3forms.com/)**
2. **Enter your email** where you want to receive applications
3. **Click "Create Access Key"**
4. **Copy the access key** they provide
5. **Update the code:**
   - Open: `src/components/PartnerForm.tsx`
   - Find line 23: `access_key: "YOUR_WEB3FORMS_ACCESS_KEY"`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key

**Features:**
- ✅ Free forever (up to 250 submissions/month)
- ✅ No signup required
- ✅ Instant email delivery
- ✅ Spam protection included
- ✅ Works immediately

## Option 2: Formspree (Alternative)

1. **Go to [Formspree](https://formspree.io/)**
2. **Sign up** for a free account
3. **Create a new form**
4. **Copy your form endpoint** (looks like `https://formspree.io/f/YOUR_FORM_ID`)
5. **Update the code:**
   - Open: `src/components/PartnerForm.tsx`
   - Replace the entire fetch URL on line 18 with your Formspree endpoint
   - Remove the `access_key` field from the body

**Features:**
- ✅ Free tier: 50 submissions/month
- ✅ Dashboard to view submissions
- ✅ Email notifications
- ✅ Export to CSV

## Option 3: Custom Backend (Advanced)

If you want full control, you can create your own backend endpoint:

1. Create an API endpoint (e.g., using Vercel Functions, Netlify Functions, or your own server)
2. Use a service like SendGrid, Mailgun, or AWS SES to send emails
3. Update the fetch URL in `PartnerForm.tsx` to point to your endpoint

## Testing the Form

After setup:
1. Run `npm run dev`
2. Click "Apply Now" button
3. Fill out the form
4. Submit
5. Check your email inbox!

## What Information You'll Receive

Each submission will include:
- **Name**: Applicant's name
- **Email**: Their contact email
- **Community Name**: Their project/community name
- **Twitter/X Handle**: Their social media
- **Discord Server**: Their Discord invite link
- **Community Size**: Approximate member count
- **Message**: Why they want to partner

## Current Status

⚠️ **Action Required**: You need to add your Web3Forms access key to make the form functional.

The form is already integrated and styled - it just needs the access key to start working!

## Need Help?

If you have any issues:
1. Check the browser console for errors
2. Verify your access key is correct
3. Make sure you're not hitting rate limits
4. Test with a simple email first

---

**Quick Start (Web3Forms):**
1. Visit https://web3forms.com/
2. Enter your email
3. Get access key
4. Paste it in `src/components/PartnerForm.tsx` line 23
5. Done! 🎉
