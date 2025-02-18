const easyModel = require("../models/easyModel");

// 전체 동물 리스트 가져오는 컨트롤러
const getanimals = (req, res) => {
  const animals = easyModel.allList();
  res.render("animal/index", { animals });
};

// 각 동물 페이지
const getanimal = (req, res) => {
  const animal = easyModel.idList(req.params.id);

  if (animal) {
    res.render("animal/show", { animal });
  } else {
    res.status(404).send("해당하는 유저가 없습니다."); //찾아서 해야함
  }
};

// view 밑 animal 폴더 밑 show.ejs 파일(주소아님)

// 고기 좋아하는 동물 페이지
const getLikeMeatAnimal = (req, res) => {
  console.log("요청이 들어왔습니다.");
  const likeMeat = easyModel.likemeatList();
  console.log("고기 좋아하는 동물:", likeMeat); // 로그 확인
  if (likeMeat) {
    res.render("animal/likemeat", { likeMeat });
  } else {
    res.status(404).send("해당하는 유저가 없습니다.");
  }
};

module.exports = { getanimals, getanimal, getLikeMeatAnimal };
