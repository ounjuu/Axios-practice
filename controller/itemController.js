const itemModel = require("../models/itemModel");

// 아이템 가져오는 컨트롤러
const getItems = (req, res) => {
  const items = itemModel.getAllitems();
  res.render("items/index", { items });
};
// view 밑의 users 밑에 index.ejs

// 해당하는 아이템 가져오기
const getItem = (req, res) => {
  const item = itemModel.getItemsById(req.params.id);
  if (item) {
    res.render("items/show", { item });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다."); //찾아서 해야함
  }
};

// 해당하는 아이템 가져오기
const getExpensive = (req, res) => {
  const mostExpensive = itemModel.getMostExpensive();
  res.render("items/mostitem", { mostExpensive });
};

module.exports = { getItems, getItem, getExpensive };
