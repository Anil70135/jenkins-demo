const express = require('express');
const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body style="font-family:Arial;text-align:center;padding-top:80px;background:#667eea;color:white;">
        <h1>🚀 Node.js App Deployed via Jenkins!</h1>
        <p>Server time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
