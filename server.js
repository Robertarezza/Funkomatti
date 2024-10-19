import dotenv from 'dotenv'; // Importa dotenv
import express from 'express';
import bodyParser from 'body-parser';
import { MailSlurp } from 'mailslurp-client';
import cors from 'cors'; // Aggiungi cors
const app = express();
dotenv.config();

// Configura il middleware
app.use(cors()); // Abilita CORS per tutte le richieste
app.use(bodyParser.json());

// Configura MailSlurp con la tua API Key
const mailslurp = new MailSlurp({ apiKey: process.env.MAILSLURP_API_KEY });

// Endpoint per ricevere i dati del modulo
app.post('/invia-messaggio', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Invia l'email usando MailSlurp
    const sendEmail = await mailslurp.sendEmail('user-0e65c4dc-fd57-40ba-97a6-d88ae144e948@mailslurp.biz', {
      to: ['roey_r88@hotmail.it'],  // Inserisci qui la tua email di ricezione
      subject: `Nuovo messaggio da ${name}`,
      body: `Hai ricevuto un nuovo messaggio da ${name} (${email}):\n\n${message}`,
    });

    console.log('Email inviata con successo:', sendEmail);
    res.status(200).send('Messaggio inviato con successo');
 
    
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    res.status(500).send('Errore nell\'invio del messaggio');
  }
});

// Avvia il server
app.listen(3001, () => {
  console.log('Server in ascolto sulla porta 5173');
});
