const express = require("express");
const router = express.Router();
const careersController = require("../controller/careersController");

// 아이템 전부 가져오기를 하는 라우터
router.get("/", careersController.getAllList);

router.get("/male", careersController.getMaleList);
router.get("/female", careersController.getFemaleList);
router.get("/sameCareers", careersController.getSameCareersList);
router.get("/movielist", careersController.getMovieList);
router.get("/dramalist", careersController.getDramaList);

module.exports = router;
