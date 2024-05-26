const express = require('express')
const app = express()
app.use(express.static(__dirname+'/style'))
app.set('view engine','ejs');
app.get('/', function (req, res) {
    res.render('list')
  })
  
app.listen(1000,()=>{console.log("서버가 실행되었습니다.")})