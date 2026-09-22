const express = require('express');
const app = express();
const PORT = 9000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD Dashboard</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #0f172a;
          color: #e2e8f0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card {
          background: #1e293b;
          border-radius: 16px;
          padding: 40px 60px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          text-align: center;
          border: 1px solid #334155;
        }
        .badge {
          display: inline-block;
          background: #22c55e;
          color: #052e16;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.85em;
          font-weight: bold;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 2.2em;
          margin-bottom: 10px;
          color: #f1f5f9;
        }
        p {
          color: #94a3b8;
          margin: 8px 0;
        }
        .stats {
          display: flex;
          gap: 20px;
          margin-top: 25px;
          justify-content: center;
        }
        .stat {
          background: #0f172a;
          padding: 15px 20px;
          border-radius: 10px;
          min-width: 100px;
        }
        .stat-value {
          font-size: 1.5em;
          font-weight: bold;
          color: #38bdf8;
        }
        .stat-label {
          font-size: 0.75em;
          color: #64748b;
          text-transform: uppercase;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">● BUILD PASSING</div>
        <h1>🎯 Jenkins CI/CD Pipeline</h1>
        <p>Deployed automatically from GitHub--Done by Anil Manda</p>
        <p style="font-size:0.9em; margin-top:15px;">Last deployed: ${new Date().toLocaleString()}</p>
        <div class="stats">
          <div class="stat">
            <div class="stat-value">v3</div>
            <div class="stat-label">Version</div>
          </div>
          <div class="stat">
            <div class="stat-value">Node.js</div>
            <div class="stat-label">Stack</div>
          </div>
          <div class="stat">
            <div class="stat-value">✓</div>
            <div class="stat-label">Tests</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});
