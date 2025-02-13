const express = require("express");
const app = express();

const port = 3000;
const path = require("path"); // path 모듈

// body-parser
// x-www-form-urlencoded 방식, 객체 형태로 결과가 나옴
app.use(express.urlencoded({ extended: true }));
// json 형식으로 받을 것임
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// set이 get 위에 와야 함
app.set("view engine", "ejs"); // ejs 파일 html로 변경해줌
app.set("views", "./views"); // ejs 파일 위치 설정
app.set("views", path.join(__dirname, "/views"));

let data = [];
let logindata = [];
let name = [];
let query = [];
// post 요청은 req.body

let ida = "ejej";
let pwa = "ej1";
app.get("/", (req, res) => {
  res.render("axiosget");
});

app.get("/axio", (req, res) => {
  res.render("axiospost");
});

// axiosget
app.get("/axiosget", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post("/axiospost", (req, res) => {
  if (req.body.id === ida && req.body.pw === pwa) {
    res.send("성공");
  } else {
    res.send("실패");
  }
  console.log(req.body, "dfdfd");
});

// 연습
app.get("/getpost", (req, res) => {
  res.render("form");
});

app.get("/getform", (req, res) => {
  console.log(req.query);
  res.send("서버에서 보내는 메세지");
});

app.post("/postform", (req, res) => {
  if (req.body.id === req.body.pw) {
    res.send("같아용");
  } else {
    res.send("달라용");
  }
  console.log(req.body, "dfdfd");
});

// 연습끝
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
