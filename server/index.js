const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, `../public/`)));

app.get('/public/Resume.pdf', (req, res) => {
  res.status(301).redirect('/Resume.pdf')
})


app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
