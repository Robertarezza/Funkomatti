// /api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validazione semplice
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Tutti i campi sono obbligatori.' });
    }

    // Configura Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'hotmail', // Può essere Gmail o un altro provider SMTP
      auth: {
        user: process.env.EMAIL_USER, // Usa variabili d'ambiente
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email, // Mittente (inserito nel form)
      to: 'roey_r88@hotmail.it', // Il tuo indirizzo email
      subject: `Nuovo messaggio da ${name}`,
      text: message,
    };

    try {
      // Invia l'email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: 'Email inviata con successo!' });
    } catch (error) {
      console.error('Errore durante l\'invio dell\'email:', error);
      return res.status(500).json({ success: false, message: 'Errore durante l\'invio dell\'email.' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Metodo non consentito.' });
  }
}
