var router = require('express').Router();

module.exports = router;

const mongoclient = require('mongodb').MongoClient; 
const ObjId = require('mongodb').ObjectId;  
const url = "mongodb+srv://kimryuna900:Dandelion2014!!@cluster0.iregywn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let mydb; 

mongoclient
  .connect(url) 
   .then(client => { 
    mydb = client.db('myboard');  
  })
  .catch(err => {
    console.log(err);
});

//list 라우터
router.get('/list', function(req, res){
  mydb
  .collection('post')
  .find()
  .toArray()
  .then(result => {  //post 컬렉션의 모든 데이터를 배열 형태로 조회해서 result 변수에 조회 결과 전달
      console.log(result);
      res.render('list.ejs', {data : result}); //ejs파일이니까 render()함수를 사용해서..!
  })
  /*sendFile은 단순히 파일의 내용을 전달하는 기능이라면
  render는 파일의 내용을 만들어 내는 기능이다.
  동적인 결과를 정적인 html 파일에 표현하는 것이기 때문에 가변적인 데이터를 출력하는 렌더링의 의미로
  별로의 render()함수가 제공되는 것이다.
  */
});

//게시물 추가,list의 추가 버튼
router.get('/enter', function(req, res){
  res.render('enter.ejs');
});

//게시물 저장
router.post('/save', function(req, res){
  console.log(req.body.title);
  console.log(req.body.content);
  console.log(req.body.someDate);
  console.log(req.body.category); // 륜아 : 카테고리 정보 추가했어요!

  mydb
  .collection('post')
  .insertOne({
    title : req.body.title,
    content : req.body.content,
    date : req.body.someDate,
    category: req.body.category  // 륜아 : 카테고리 정보 추가했어요!
  })
  .then(result => {
      console.log(result);
      console.log('데이터 추가 성공');
  });
  res.redirect("\list");  //데이터 저장 후 list로 이동
});

//게시물 삭제
router.post("/delete", function (req, res) {
  console.log(req.body._id);
  req.body._id = new ObjId(req.body._id);
  //req.body._id = new ObjectId(req.body._id);
  mydb.collection('post').deleteOne(req.body)
  .then(result=>{
      console.log('삭제 완료');
      res.status(200).send();
  })
  .catch(err => {
      console.log('삭제 과정에서 에러 발생:', err);
      res.status(500).send();
  });
})

//게시물 내용
router.get("/content/:id", function (req, res) {
  console.log(req.params.id);
  req.params.id = new ObjId(req.params.id);  //url 파라미터인 req.params.id는 몽고DB 상에 저장되어 있는 데이터 타입과 일치해야하므로 ObjectId 형태로 바꿔서 저장
  mydb
    .collection("post")
    .findOne({ _id: req.params.id })
    .then((result) => {  //result 매개변수에는 _id의 값을 검색한 결과가 넘어옴
      console.log(result);
      res.render("content.ejs", { data: result }); //그 결과를 data로 보내는거져
    });
});

//게시물에 사진 첨부
let multer = require('multer');

const path = require('path');
let storage = multer.diskStorage({
destination : function(req, file, done){
  done(null, './public/image')
},
filename : function(req, file, done){
  done(null, file.originalname)
}
})

let upload = multer({storage : storage});

let imagepath ='';
router.post('/photo', upload.single('picture'), function(req, res){
  console.log("서버에 파일 첨부하기");
  console.log(req.file.path);
  // 경로를 표준화하여 저장
  imagepath = '/' + path.normalize(req.file.path).replace(/\\/g, '/');
  console.log("표준화된 경로:", imagepath);




})