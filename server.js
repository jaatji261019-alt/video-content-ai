const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text/plain').send('Video Content AI server is running.');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'video-content-ai'
  });
});

app.listen(PORT, () => {
  console.log('==============================================');
  console.log(' Video Content AI server started successfully');
  console.log(` Listening on port: ${PORT}`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` Health check: http://localhost:${PORT}/health`);
  console.log('==============================================');
});
