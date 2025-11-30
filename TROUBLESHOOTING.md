# Troubleshooting: Not Receiving Emails

## Quick Checklist

### ✅ Step 1: Verify Environment Variables in Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Make sure you have ALL THREE variables:
   - `RESEND_API_KEY` = `re_xxxxx...` (your actual key)
   - `RESEND_TO_EMAIL` = `your-actual-email@example.com`
   - `RESEND_FROM_EMAIL` = `onboarding@resend.dev`

3. **IMPORTANT**: Make sure you selected all 3 environments:
   - ✅ Production
   - ✅ Preview  
   - ✅ Development

### ✅ Step 2: Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click on **"Functions"** tab (or "Deployments" → Latest → "Functions")
3. Find `/api/contact`
4. Click on it to see the logs
5. Look for errors (red text)

**Common errors you might see:**
- `RESEND_API_KEY is not defined` → Environment variable not set
- `Invalid API key` → Wrong API key
- `Email sending failed` → Check Resend dashboard

### ✅ Step 3: Verify Your Resend API Key

1. Go to https://resend.com/api-keys
2. Make sure your API key is **active** (not deleted/revoked)
3. Copy it again and verify it matches what's in Vercel
4. The key should start with `re_`

### ✅ Step 4: Check Your Email

1. Check **spam/junk folder**
2. Check **promotions tab** (Gmail)
3. Search for: "We Paint J&J" or "Contact Form"
4. Wait a few minutes (sometimes there's a delay)

### ✅ Step 5: Test Resend Account

1. Go to https://resend.com/emails
2. Check if there are any failed emails
3. Look for error messages

### ✅ Step 6: Redeploy After Adding Variables

**CRITICAL**: After adding/changing environment variables, you MUST redeploy:

1. Go to Vercel → Deployments
2. Click the three dots (⋯) on the latest deployment
3. Click **"Redeploy"**
4. Wait for it to finish

**Why?** Environment variables are only loaded when the function is deployed!

## Common Issues & Solutions

### Issue 1: "Environment variable not found"
**Solution**: 
- Make sure variables are set in Vercel
- Redeploy after adding them
- Check variable names are EXACTLY: `RESEND_API_KEY`, `RESEND_TO_EMAIL`, `RESEND_FROM_EMAIL`

### Issue 2: "Invalid API key"
**Solution**:
- Get a fresh API key from Resend
- Make sure you copied the ENTIRE key (starts with `re_`)
- No extra spaces before/after

### Issue 3: "Email sent but not received"
**Solution**:
- Check spam folder
- Verify `RESEND_TO_EMAIL` is correct
- Check Resend dashboard for delivery status

### Issue 4: Form shows success but no email
**Solution**:
- Check Vercel function logs (most important!)
- The form might be working, but email sending is failing
- Look for error messages in logs

## How to Check if It's Working

1. **Submit the form** on your website
2. **Check Vercel logs** immediately:
   - Go to Functions → `/api/contact` → Logs
   - You should see: "Form submission received" or error messages
3. **Check Resend dashboard**:
   - Go to https://resend.com/emails
   - You should see the email attempt (success or failure)

## Still Not Working?

Share with me:
1. What you see in Vercel function logs
2. What error messages (if any) appear
3. Whether the form shows "success" or "error" message

