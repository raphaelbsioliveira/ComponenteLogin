const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', (req, res) => {
  console.log("resposta",req.body);
  if(req.body.email == 'alex@gmail.com' && req.body.password == '123456'){
    res.json({
      email: 'alex@gmail.com',
      password: '123456'
    });
  }
  res.status(401).json({message: 'email ou senha incorreto!'})
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));