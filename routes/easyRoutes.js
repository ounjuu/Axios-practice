const express = require("express");
const router = express.Router();
const easyController = require("../controller/easyController");

// 아이템 전부 가져오기를 하는 라우터
router.get("/", easyController.getanimals);
router.get("/getanimal/:id", easyController.getanimal);
router.get("/likemeat", easyController.getLikeMeatAnimal);

module.exports = router;
