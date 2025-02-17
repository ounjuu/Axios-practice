const careersModel = require("../models/careersModel");

// 모든 배우 리스트 가져오는 컨트롤러
const getAllList = (req, res) => {
  const allActor = careersModel.getAllactor();
  res.render("careers/index", { allActor });
};

// 남자 배우 리스트 가져오는 컨트롤러
const getMaleList = (req, res) => {
  const maleList = careersModel.getMale();
  if (maleList) {
    res.render("careers/showmale", { maleList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 여자 배우 리스트 가져오는 컨트롤러
const getFemaleList = (req, res) => {
  const femaleList = careersModel.getFemale();
  if (femaleList) {
    res.render("careers/showfemale", { femaleList });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 여자 배우 리스트 가져오는 컨트롤러
const getSameCareersList = (req, res) => {
  const sameCareers = careersModel.getSameCareers();
  if (sameCareers) {
    res.render("careers/samecareers", { sameCareers });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 영화 테이블 리스트 가져오는 컨트롤러
const getMovieList = (req, res) => {
  const movies = careersModel.getMovies();
  if (movies) {
    res.render("careers/movies", { movies });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

// 드라마 테이블 리스트 가져오는 컨트롤러
const getDramaList = (req, res) => {
  const Dramas = careersModel.getDramas();
  if (Dramas) {
    res.render("careers/dramas", { Dramas });
  } else {
    res.status(404).send("해당하는 아이템이 없습니다.");
  }
};

module.exports = {
  getAllList,
  getMaleList,
  getFemaleList,
  getSameCareersList,
  getMovieList,
  getDramaList,
};
