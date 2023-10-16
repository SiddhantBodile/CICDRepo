const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <style>
        body {
          background-color: #000; /* Black background color */
          color: #fff; /* White text color */
          font-family: 'Arial', sans-serif;
        }
        .container {
          text-align: center;
          padding: 10%;
        }
        h1 {
          font-size: 3rem;
          font-family: 'Courier New', monospace;
        }
        p {
          font-size: 1.5rem;
          font-family: 'Courier New', monospace;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Siddhant Bodile's DevOps Learning Page</h1>
        <p>DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the software development life cycle and provide continuous delivery with high software quality. Basic DevOps technologies include:</p>
        <ul>
          <li>Version Control (e.g., Git)</li>
          <li>Continuous Integration (CI) and Continuous Deployment (CD)</li>
          <li>Containerization (e.g., Docker)</li>
          <li>Orchestration (e.g., Kubernetes)</li>
          <li>Infrastructure as Code (IaC)</li>
          <li>Automation and Monitoring</li>
        </ul>
        <p>Start your DevOps learning journey now!</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

