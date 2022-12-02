const BG_WIDTH = 800;
const BG_HEIGHT = 500;
const BG_RIGHT_TREE = 41;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;

const heroElement = document.getElementById("hero");

const splitFnWithOutPx = (value) => {
  return Number(value.split("px")[0]);
};

const heroLeft = getComputedStyle(heroElement).left; // 382px
// getComputedStyle(element)로 해당 태그 CSS style 요소를 가져올 수 있다.
// heroElement.style.left 는 해당 태그 인라인 스타일 요소여야 가져올 수 있다.

const heroLeftWithoutPx = Number(heroLeft.split("px")[0]); // 382
// split 사용하여 숫자와 'px'을 분리함. 문자열로 추출됨.
// 그래서 Number()를 사용하여, 숫자로 변환.

// 랜덤범위를 지정해주는 함수
function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
  // min 과 max 사이의 랜덤범위숫자를 정해줌
}
