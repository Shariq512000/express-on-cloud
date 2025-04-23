import express from 'express';
const app = express()
const port = process.env.PORT || 5001;

/// 192.168.200.121:5000

app.get('/' , (req , res) => {
    console.log(req.ip);
    res.send("Hello World")
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
