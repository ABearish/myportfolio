const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, `../public/`), function(err) {
  if (err) {
    res.status(500).send(err);
  }
}));

app.get('/*', (req,res) => {
  res.sendFile(path.resolve(__dirname ,'../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
