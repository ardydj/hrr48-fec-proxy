const express = require('express')
const app = express();
const port = 3001;
const path = require('path');
const cors = require('cors');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('proxy'))
app.use('/listing/:itemId', express.static(path.join(__dirname, 'index.html')))
app.use(cors());

app.get('/', (req, res) => {
  res.redirect('/listing/1');
})

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
})