const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemController");

// 아이템 전부 가져오기를 하는 라우터
router.get("/", itemController.getItems);

// 해당하는 아이템 가져오기를 하는 라우터
router.get("/detail/:id", itemController.getItem);

// 가장 비싼 물건 가져오기를 하는 라우터
router.get("/price", itemController.getExpensive);

module.exports = router;
