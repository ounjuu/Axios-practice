const animal = [
  {
    id: 1,
    name: "호랑이",
    like: "고기",
  },
  {
    id: 2,
    name: "코끼리",
    like: "모든것",
  },
  {
    id: 3,
    name: "악어",
    like: "풀",
  },
];

// 1. 전부다 가져와서 리스트 만들기
const allList = () => {
  return animal;
};
// 2. 각자 상세 페이지 만들기
const idList = (id) => {
  return animal.find((x) => {
    return Number(x.id) === Number(id); // ID 비교
  });
};
// 3. 고기를 좋아하는 동물만 나오게 하기

const likemeatList = () => {
  return animal.filter((x) => {
    return x.like === "고기";
  });
};

// 해당 파일에서 만든 함수 내보내기
module.exports = { allList, idList, likemeatList };
