const readyBtn = document.querySelector(".btn");

readyBtn.addEventListener("click", function () {
  function createGhost() {
    const bgElement = document.getElementById("bg");
    const ghostElement = document.createElement("span");

    // ghostElement 에 인라인 요소로 들어가야 할 디자인 설정해주기
    ghostElement.style.position = "absolute";
    ghostElement.style.top = "0";
    ghostElement.style.left = "50%";
    // 문자열 'px'를 붙여야 스타일에 적용됨!
    ghostElement.style.width = GHOST_WIDTH + "px";
    ghostElement.style.height = GHOST_HEIGHT + "px";

    let randomLeft = randomRange(46, BG_WIDTH - GHOST_WIDTH - BG_RIGHT_TREE);
    ghostElement.style.left = randomLeft + "px";

    // 따옴표로 묶어줘서, 문자열로 보내줘야 적용됨!
    ghostElement.style.background = "url('../images/ghost.png') no-repeat";

    bgElement.appendChild(ghostElement);
    // appendChild()메소드의 파라미터 값은 요소를 생성한 변수명을 넣어야 함.

    // 고스트의 top 값이 계속 변하면서 내려오는 함수
    const ghostDown = setInterval(function () {
      // 1. 고스트에게 접근
      // 2. 고스트의 탑 값 가져오기
      // 3. 고스트의 탑 값에 계속 + 10 + px
      // 4. 그 값을 계속 할당
      // 5. 배경 끝에 오면 더이상 가지 않음. 멈춤.

      const ghostTop = splitFnWithOutPx(ghostElement.style.top);
      const ghostTopAddNum = ghostTop /* 0 */ + 1;

      const ghostLeftNum = splitFnWithOutPx(ghostElement.style.left);
      const heroLeft2 = getComputedStyle(heroElement).left;
      const heroLeft2Num = splitFnWithOutPx(heroLeft2);

      const ghostTopNum = splitFnWithOutPx(ghostElement.style.top);
      const heroTop = getComputedStyle(heroElement).bottom; // 3
      const heroTopNum = BG_HEIGHT - HERO_HEIGHT - splitFnWithOutPx(heroTop); //443
      console.log(ghostTopNum);

      if (ghostTopAddNum > BG_HEIGHT - GHOST_HEIGHT) {
        // ghostElement.remove();
        clearInterval(ghostDown);
      } // 주기적으로 더해지는 값이랑, 땅에 도착했을 때 탑 값이 딱 떨어져야 함 (10단위니까 10단위로)
      ghostElement.style.top = ghostTopAddNum + "px";

      if (ghostTopNum > BG_HEIGHT - (GHOST_HEIGHT + HERO_WIDTH)) {
        if (
          // ghostLeftNum >= heroLeft2Num &&
          // heroLeft2Num <= ghostLeftNum + GHOST_WIDTH
          ghostLeftNum < heroLeft2Num &&
          heroLeft2Num < ghostLeftNum + GHOST_HEIGHT
        ) {
          ghostElement.style.backgroundPosition = "-45px";

          const soundEffect = new Audio("../audio/dying.wav");
          soundEffect.play();

          // 죽은 유령은 3초 후 사라짐.
          setTimeout(function () {
            return ghostElement.remove();
          }, 3000);
        }
        setTimeout(function () {
          return ghostElement.remove();
        }, 3000);
      }
    }, 10);
  }

  setInterval(createGhost, 2000);
});
