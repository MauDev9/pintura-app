// Vercel Serverless Function to handle contact form submissions with Resend
// Get API key from: https://resend.com/api-keys

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'your-email@example.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - We Paint J&J`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #7ca85b, #6a9a4a); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #7ca85b; }
              .message-box { background: white; padding: 15px; border-left: 4px solid #7ca85b; margin-top: 10px; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
                <p>We Paint J&J</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span> ${name}
                </div>
                <div class="field">
                  <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                <div class="field">
                  <span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a>
                </div>
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
                </div>
                <div class="footer">
                  <p>Submitted at: ${new Date().toLocaleString()}</p>
                  <p>You can reply directly to this email to contact ${name}.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission - We Paint J&J

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
      `
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

