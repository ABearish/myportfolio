const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, `../public/`), function(err) {
  if (err) {
    res.status(500).send(err);
  }
}));

const cors = require('cors');
app.use(cors());

app.get('/public/Resume.pdf', (req, res) => {
  res.status(301).redirect('/Resume.pdf')
})

app.get('/*', (req,res) => {
  res.sendFile(path.resolve(__dirname ,'../public/index.html'));
});


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
