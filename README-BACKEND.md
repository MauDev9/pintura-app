# Backend Setup Guide for Contact Form

## Overview

This project uses **Vercel Serverless Functions** to handle contact form submissions. When a user submits the form, the data is sent to a serverless function that processes it and sends you an email notification.

## How It Works

```
User fills form → Frontend sends POST request → Vercel Serverless Function → Email sent to you
```

1. **User submits form** on your website
2. **Frontend** sends data to `/api/contact` endpoint
3. **Serverless function** validates and processes the data
4. **Email service** (Resend) sends you an email with the form data
5. **User** sees success/error message

## Setup Instructions

### Step 1: Choose Your Email Service

I recommend **Resend** (easy to use, free tier available):
- Sign up at: https://resend.com
- Get your API key from: https://resend.com/api-keys

**Alternative options:**
- SendGrid (free tier: 100 emails/day)
- Nodemailer with Gmail/SMTP (more complex setup)

### Step 2: Set Up Environment Variables

1. In your Vercel dashboard, go to your project settings
2. Navigate to **Environment Variables**
3. Add these variables:

```
RESEND_API_KEY=re_your_actual_api_key_here
RESEND_TO_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Important:**
- `RESEND_TO_EMAIL`: Your email where you want to receive form submissions
- `RESEND_FROM_EMAIL`: For testing, use `onboarding@resend.dev`. For production, verify your domain in Resend and use `contact@yourdomain.com`

### Step 3: Install Dependencies (if using Resend)

If you're using the Resend implementation, you need to install it:

```bash
npm install resend
```

### Step 4: Choose Your API File

You have two options:

#### Option A: Basic (No Email - Just Logs)
- Use: `/api/contact.js`
- This just logs the submission (good for testing)
- No dependencies needed

#### Option B: With Email (Recommended)
- Use: `/api/contact-with-resend.js`
- Rename it to `/api/contact.js` (replace the basic one)
- Sends actual emails using Resend
- Requires: `npm install resend`

### Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Vercel will automatically detect the `/api` folder
3. Deploy your project
4. Test the form submission

## File Structure

```
pintura-app/
├── api/
│   ├── contact.js                    # Main API endpoint (choose one)
│   └── contact-with-resend.js        # Example with email sending
├── src/
│   └── components/
│       └── ContactForm/
│           └── ContactForm.jsx       # Updated to call /api/contact
└── .env.example                      # Template for environment variables
```

## Testing Locally

1. Install dependencies:
```bash
npm install resend
```

2. Create a `.env` file (copy from `.env.example`):
```bash
RESEND_API_KEY=your_key_here
RESEND_TO_EMAIL=your-email@example.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

3. Run Vercel dev server:
```bash
npx vercel dev
```

4. Test the form at: `http://localhost:3000/contact`

## Production Deployment

1. Set environment variables in Vercel dashboard
2. Push to GitHub
3. Vercel automatically deploys
4. Test the live form

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify API endpoint is accessible
- Check Vercel function logs

### Not receiving emails?
- Verify `RESEND_API_KEY` is correct
- Check `RESEND_TO_EMAIL` is correct
- Verify your Resend account is active
- Check spam folder

### CORS errors?
- Vercel handles CORS automatically for serverless functions
- If issues persist, check function logs in Vercel dashboard

## Security Notes

- Never commit `.env` file to Git
- Keep API keys secret
- Validate all input on the backend (already done)
- Consider adding rate limiting for production

## Next Steps

1. ✅ Set up Resend account
2. ✅ Add environment variables to Vercel
3. ✅ Install Resend package
4. ✅ Use the Resend implementation
5. ✅ Test form submission
6. ✅ Deploy to production

## Questions?

The backend is now ready! When users submit the contact form, you'll receive an email with their information.

