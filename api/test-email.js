// Simple test endpoint to verify email sending works
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get environment variables
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    // Check if everything is set
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'RESEND_API_KEY no está configurado',
        debug: 'Ve a Vercel → Settings → Environment Variables'
      });
    }

    if (!toEmail) {
      return res.status(500).json({ 
        error: 'RESEND_TO_EMAIL no está configurado',
        debug: 'Ve a Vercel → Settings → Environment Variables'
      });
    }

    // Initialize Resend
    const resend = new Resend(apiKey);

    // Send test email
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'TEST - Formulario de Contacto Funciona!',
      html: `
        <h2>✅ ¡El formulario funciona!</h2>
        <p>Si recibes este email, significa que la configuración está correcta.</p>
        <p><strong>API Key:</strong> ${apiKey.substring(0, 10)}... (configurado)</p>
        <p><strong>To Email:</strong> ${toEmail}</p>
        <p><strong>From Email:</strong> ${fromEmail}</p>
        <p><strong>Hora:</strong> ${new Date().toLocaleString()}</p>
      `,
      text: `TEST - El formulario funciona! Hora: ${new Date().toLocaleString()}`
    });

    if (result.error) {
      return res.status(500).json({ 
        error: 'Error al enviar email',
        details: result.error
      });
    }

    return res.status(200).json({ 
      success: true,
      message: 'Email de prueba enviado exitosamente!',
      emailId: result.data?.id,
      sentTo: toEmail
    });

  } catch (error) {
    return res.status(500).json({ 
      error: 'Error en el servidor',
      details: error.message
    });
  }
}

