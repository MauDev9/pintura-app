// Email template helper for contact form submissions

export function generateContactEmailHTML({ name, email, phone, message }) {
  const timestamp = new Date().toLocaleString();
  const escapedMessage = message.replace(/\n/g, '<br>').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escapedName = name.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escapedEmail = email.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escapedPhone = phone.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0; 
            padding: 0; 
            background-color: #f4f4f4;
          }
          .container { 
            max-width: 600px; 
            margin: 0 auto; 
            padding: 20px; 
          }
          .header { 
            background: linear-gradient(135deg, #7ca85b, #6a9a4a); 
            color: white; 
            padding: 20px; 
            border-radius: 8px 8px 0 0; 
          }
          .content { 
            background: #f9f9f9; 
            padding: 20px; 
            border-radius: 0 0 8px 8px; 
          }
          .field { 
            margin-bottom: 15px; 
          }
          .label { 
            font-weight: bold; 
            color: #7ca85b; 
          }
          .message-box { 
            background: white; 
            padding: 15px; 
            border-left: 4px solid #7ca85b; 
            margin-top: 10px; 
          }
          .footer { 
            margin-top: 20px; 
            padding-top: 20px; 
            border-top: 1px solid #ddd; 
            font-size: 12px; 
            color: #666; 
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>RenovaPro Painting LLC</p>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${escapedName}
            </div>
            <div class="field">
              <span class="label">Email:</span> <a href="mailto:${escapedEmail}">${escapedEmail}</a>
            </div>
            <div class="field">
              <span class="label">Phone:</span> <a href="tel:${escapedPhone}">${escapedPhone}</a>
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="message-box">
                ${escapedMessage}
              </div>
            </div>
            <div class="footer">
              <p>Submitted at: ${timestamp}</p>
              <p>You can reply directly to this email to contact ${escapedName}.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function generateContactEmailText({ name, email, phone, message }) {
  const timestamp = new Date().toLocaleString();
  
  return `
New Contact Form Submission - RenovaPro Painting LLC

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Submitted at: ${timestamp}
  `.trim();
}

