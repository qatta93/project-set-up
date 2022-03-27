const express = require('express');
const cors = require('cors');
const path = require('path');

const port = 3000;

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/api', (req, res) => {
  res.json('server is running');
});

app.get(/^(?!\/api).+/gm, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});

app.listen(port, () => console.log('app is running on port 3000..'));
