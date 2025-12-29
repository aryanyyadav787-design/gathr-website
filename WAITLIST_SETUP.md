# 📧 Waitlist Email Setup Guide for GATHR

Your waitlist form is now set up to collect emails! Follow these steps to activate it:

## Step 1: Get Your Web3Forms Access Key (FREE)

1. **Go to**: https://web3forms.com
2. **Click** "Get Started" or "Create Access Key"
3. **Enter your email**: `aryan.y.yadav787@gmail.com` (or `iamaryan718@gmail.com`)
4. **Verify your email** by clicking the link they send
5. **Copy your Access Key** (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

## Step 2: Add Your Access Key to the Code

1. Open `App.tsx`
2. Find line ~175 where it says:
   ```tsx
   formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY');
   ```
3. **Replace** `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key:
   ```tsx
   formData.append('access_key', 'a1b2c3d4-e5f6-7890-abcd-ef1234567890');
   ```

## Step 3: Enable Auto-Reply (Optional but Recommended)

To send automatic "Thank you" emails to users who join:

1. **Log in to Web3Forms**: https://web3forms.com/dashboard
2. **Go to Settings** for your access key
3. **Enable "Auto Reply"**
4. **Customize the auto-reply email**:
   ```
   Subject: Welcome to GATHR Waitlist! 🎉
   
   Hi there!
   
   Thanks for joining the GATHR waitlist! You're one step closer to finding your tribe based on music taste and real interests.
   
   We're launching soon to a limited group of users, and you'll be among the first to know.
   
   Stay tuned!
   
   The GATHR Team
   ```

## Step 4: Test It!

1. **Run your app**: `npm run dev`
2. **Go to**: http://localhost:3000
3. **Submit your email** in the waitlist form
4. **Check your inbox** - you should receive:
   - ✅ A notification email (to you) about the new signup
   - ✅ An auto-reply sent to the person who signed up

## What Happens When Someone Signs Up?

✅ **You receive an email** at your registered Web3Forms email with:
- The person's email address
- Timestamp
- Subject: "New Waitlist Signup for GATHR!"

✅ **They receive an auto-reply** (if you set it up) with your custom thank you message

## Free Tier Limits

- ✅ **250 submissions per month** (FREE)
- ✅ Unlimited access keys
- ✅ Auto-reply included
- ✅ No credit card required

If you need more than 250/month, you can upgrade or use multiple access keys.

## Alternative: Google Sheets Integration

Want to also save emails to a Google Sheet?

1. In Web3Forms dashboard, enable **Google Sheets Integration**
2. Connect your Google account
3. All signups will automatically be added to a spreadsheet!

## Need Help?

- Web3Forms Docs: https://docs.web3forms.com
- Alternative: You can also use **Formspree** (similar service)

---

**That's it!** Your Gathr waitlist is ready to collect emails! 🚀
