// Vercel Serverless Function to handle contact form submissions
import { Resend } from 'resend';
import { generateContactEmailHTML, generateContactEmailText } from './emailTemplate.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        error: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RESEND_TO_EMAIL;

    if (!apiKey || !recipientEmail) {
      console.error('Missing environment variables');
      return res.status(500).json({ 
        error: 'Server configuration error' 
      });
    }

    // Initialize Resend and send email
    const resend = new Resend(apiKey);
    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - RenovaPro Painting LLC`,
      html: generateContactEmailHTML({ name, email, phone, message }),
      text: generateContactEmailText({ name, email, phone, message })
    });

    if (emailResult.error) {
      console.error('Resend error:', emailResult.error);
      return res.status(500).json({ 
        error: 'Failed to send email. Please try again later.' 
      });
    }

    return res.status(200).json({ 
      success: true,
      message: 'Form submitted successfully. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
}
