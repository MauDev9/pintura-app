# Environment Setup Guide

## ✅ Step 1: Get Your Resend API Key

1. Go to https://resend.com
2. Sign up for a free account (3,000 emails/month free!)
3. Once logged in, go to: https://resend.com/api-keys
4. Click "Create API Key"
5. Give it a name (e.g., "Pintura App")
6. Copy your API key (starts with `re_`)

## ✅ Step 2: Set Environment Variables in Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Environment Variables**
3. Add these three variables:

```
RESEND_API_KEY = re_your_actual_api_key_here
RESEND_TO_EMAIL = your-email@example.com
RESEND_FROM_EMAIL = onboarding@resend.dev
```

**Important Notes:**
- `RESEND_TO_EMAIL`: Your email where you want to receive form submissions
- `RESEND_FROM_EMAIL`: 
  - For testing: Use `onboarding@resend.dev` (works immediately)
  - For production: Verify your domain in Resend and use `contact@yourdomain.com`

4. Make sure to select **Production**, **Preview**, and **Development** environments
5. Click **Save**

### Option B: Via Vercel CLI

```bash
npx vercel env add RESEND_API_KEY
npx vercel env add RESEND_TO_EMAIL
npx vercel env add RESEND_FROM_EMAIL
```

## ✅ Step 3: Test Locally (Optional)

1. Create a `.env` file in the root directory:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_TO_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

2. Run Vercel dev:
```bash
npx vercel dev
```

3. Test the form at: `http://localhost:3000/contact`

## ✅ Step 4: Deploy

1. Push your code to GitHub:
```bash
git add .
git commit -m "Add Resend email integration"
git push origin main
```

2. Vercel will automatically deploy
3. Test the live form on your deployed site

## 🔍 Verify It's Working

1. Submit a test form on your website
2. Check your email inbox (and spam folder)
3. You should receive a beautifully formatted email with the form data

## 🐛 Troubleshooting

### Not receiving emails?
- ✅ Check spam folder
- ✅ Verify `RESEND_TO_EMAIL` is correct
- ✅ Check Vercel function logs: Vercel Dashboard → Your Project → Functions → View Logs
- ✅ Make sure API key is correct (starts with `re_`)

### Getting errors?
- Check Vercel function logs for detailed error messages
- Verify all environment variables are set correctly
- Make sure Resend account is active

## 📧 Email Format

You'll receive emails that look like this:

```
┌─────────────────────────────────┐
│  New Contact Form Submission    │
│  We Paint J&J                   │
├─────────────────────────────────┤
│  Name: John Doe                 │
│  Email: john@example.com        │
│  Phone: (555) 123-4567          │
│                                 │
│  Message:                       │
│  I need painting services...    │
│                                 │
│  Submitted at: [timestamp]      │
└─────────────────────────────────┘
```

You can reply directly to the email to contact the customer!

