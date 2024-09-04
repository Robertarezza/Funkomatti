<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Configura l'email dell'amministratore
    $adminEmail = 'roberta.rezza@gmail.com';
    
    // Recupera e sanitizza i dati del modulo
    $userEmail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $userName = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $userMessage = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Verifica se l'email è valida
    if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Email non valida.";
        exit;
    }

    // Messaggio per l'utente
    $userMessageBody = '
      <html>
        <head>
          <title>Grazie per averci contattato</title>
        </head>
        <body>
          <h1>Grazie per averci contattato</h1>
          <p>La tua richiesta è stata inoltrata. Ti risponderemo al più presto.</p>
          <p>Lo Staff</p>
        </body>
      </html>
    ';

    // Messaggio per l'amministratore
    $adminMessageBody = "
      <html>
        <head>
          <title>Contatto dal sito web</title>
        </head>
        <body>
          <h1>Contatto dal sito web</h1>
          <ul>
            <li>Nome: $userName</li>
            <li>Email: $userEmail</li>
            <li>Messaggio: $userMessage</li>
          </ul>
        </body>
      </html>
    ";

    // Intestazioni dell'email
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: $adminEmail\r\n";
    $headers .= "Reply-To: $adminEmail\r\n";

    // Invio dell'email all'utente
    if (mail($userEmail, 'Richiesta di contatto effettuata con successo', $userMessageBody, $headers)) {
        // Invio dell'email all'amministratore
        if (mail($adminEmail, 'Richiesta di contatto dal sito web', $adminMessageBody, $headers)) {
            http_response_code(200);
            echo "Messaggio inviato con successo.";
        } else {
            http_response_code(500);
            echo "Errore nell'invio del messaggio all'amministratore.";
        }
    } else {
        http_response_code(500);
        echo "Errore nell'invio del messaggio all'utente.";
    }
} else {
    http_response_code(405);
    echo "Metodo non supportato.";
}
?>
