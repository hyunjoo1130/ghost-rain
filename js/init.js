document.addEventListener("keydown", function (e) {
  // 지움선은, html 업그레이드로 '우리 이제 keyCode 안쓰려고해' 를 알려주는 것. 그러나 없어진 것은 아니다.

  const heroLeft = getComputedStyle(heroElement).left; // 382px
  // getComputedStyle(element)로 해당 태그 CSS style 요소를 가져올 수 있다.
  // heroElement.style.left 는 해당 태그 인라인 스타일 요소여야 가져올 수 있다.

  const heroLeftWithoutPx = Number(heroLeft.split("px")[0]); // 382
  // split 사용하여 숫자와 'px'을 분리함. 문자열로 추출됨.
  // 그래서 Number()를 사용하여, 숫자로 변환.

  // 방향키를 누르고 있지 않을 때는, 용사가 정면을 바라보게 하는 이벤트함수
  document.addEventListener("keyup", function (e) {
    heroElement.className = "stop";
  });

  // 용사의 left가 0보다 작아지거나 or 765(BG_WIDTH - HERO_WIDTH)보다 커질 때
  if (
    (heroLeftWithoutPx - 12 <= 0 && e.keyCode === 37) ||
    (heroLeftWithoutPx + 12 > BG_WIDTH - HERO_WIDTH && e.keyCode === 39)
  ) {
    // return.. 함수를 종료
    return;
  }

  if (e.keyCode === 37) {
    // 왼쪽키
    heroElement.style.left = heroLeftWithoutPx - 10 + "px";
    heroElement.className = "left";

    // console.log("용사 왼쪽 값 : ", heroLeftWithoutPx - 1);
  } else if (e.keyCode === 39) {
    // 오른쪽키
    heroElement.style.left = heroLeftWithoutPx + 10 + "px";
    heroElement.className = "right";

    // console.log("용사 오른쪽 값 : ", heroLeftWithoutPx + 1);
  }
});

// ★keycode.info 사이트 활용. keycode 다 알 수 있음
