const express = require('express');
const PORT = process.env.PORT || 3000
const app = express();

// Maybe cookie / body parsers here

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/bundle.js'));
});

// Double back on this - need a catch-all for re-requests
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
// })

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

