const express = require('express');
const app = express();


const port = process.env.PORT || 4567;

app.get('/', (req, res) => {
  res.send('Welcome to express API')
})
// app.get('/bonjour/:name', (req, res) => {
//   res.send(`reoucouc ${req.params.name}`)
// })

app.listen(port, () => console.log(`[SERVER]listening on port ${port}`))
