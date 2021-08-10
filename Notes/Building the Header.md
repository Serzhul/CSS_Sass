# Building the Header

# CSS 기본 세팅

- 처음 CSS를 세팅할 때 margin과 padding을 초기화한다.
    - 기본적으로 브라우저가 갖고 있는 값들이 있기 때문에 이를 초기화하기 위함
- 또한 box-sizing을 border-box로 설정한다.
    - width 혹은 height에 border값을 추가해서 계산하지 않는다. (좀 더 직관적으로 계산할 수 있다.)

```css
* {
  margin: 0;
  padding: 0;
}
```

## Body 및 header 세팅

```css
body {
  font-family: "Lato", sans-serif; /* 구글 폰트 삽입 */
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  color: #777;
}

.header {
  height: 95vh; /* 95% of viewport*/
  background-image: url("../img/hero.jpg"); /* css 폴더 기준 */
  background-size: cover; /* 뷰포트나 요소의 너비가 어떻든 box 안에 위치하도록 조정해줌*/
	background-position: top; /* 뷰포트의 크기가 조정될 때 이미지의 상단 부분은 잘리지 않고 고정되게 세팅해줌
  /* center, bottom 은 각각 중단, 하단에 위치하도록 해 해당 부분으로 이미지 중심이 잡히도록 만들어줌 */
}
```

- body의 모든 child elements는 해당 속성을 상속받음 (default 속성이라고 봐도 무방)
- font-family의 Lato는 google fonts에서 일반적으로 많이 쓰이는 속성이며, html에서 삽입함
- line-height 속성은 일반적으로 font-size 크기에 비례. 위 예시는 font-size의 1.7배를 의미

- header 클래스의 95vh는 뷰포트의 높이의 95%를 의미함.
- background-imag는 url을 사용하여 이미지의 주소를 입력하는데, css가 들어있는 폴더 기준으로 현재 경로가 설정된다.
- background-size에서 cover은 뷰포트나 요소의 너비에 관계없이 해당 이미지가 box안에 위치하도록 조정해준다.
- gradient를 입히기 위해선 background-image에 linear-gradient를 추가함

### Linear-gradient

- 방향(각도), 색1, 색2 순서대로 입력할 수 있음 (방향(각도)은 생략 가능 , default ⇒ to bottom)
- 방향은 2가지를 조합해서 입력할 수도 있음
- opacity를 조정하기 위해선 해당 속성값에 마우스를 올려놓으면 color picker가 활성화되고, 상단의 color code를 클릭하면 rgba, hexa decimal 등으로 전환이 가능하다. 이 때, color 옆의 opacity bar를 조절하면 자동으로 수정된 값으로 변경된다.

### Clip-path

- clip-path CSS 속성은 요소의 특정부분을 클리핑해서 보여준다. 어떤 부분은 보여주고 어떤 부분은 보여주지 않을지 설정할 수 있다.
- 기본 모양은 총 5가지가 있다 inset(사각형), circle(원형), ellipse(타원형), polygon(다각형), path(임의의 모양 설정)

```css
clip-path: polygon(0 0, 0 100%, 100% 100%, 0 100%)
```

- 각각의 좌표에는 x축과, y축방향으로 설정할 크기가 들어가며 이를 조정함에 따라 클리핑할 영역의 크기를 조절할 수 있다.
- 입력된 순서대로 기준점이 움직이므로 다양한 도형의 모양으로 클리핑 할 수 있다.
- clippy라는 clip-path maker 툴을 이용해 좀 더 쉽게 구현할 수 있다.

# Center the elements

- 어떤 요소든 가운데에 위치하게 하는 가장 쉬운 방법은 `transform`, `top` 그리고 `left` 속성을 사용하는 것이다.

## input logo

```html
<header class="header">
      <div class="logo-box">
        <img src="img/logo-white.png" alt="Logo" class="logo" />
      </div>
    </header>
```

```css
.logo-box {
  position: absolute;
  top: 40px;
  left: 40px;
}
```

- 위 코드에서 logo-box 클래스 요소는 header 요소 자식 요소로 들어가 있다. 따라서 logo-box 클래스의 CSS값 역시 부모 요소인 header 클래스의 위치를 기준으로 포지셔닝 된다.
    - 따라서 부모 요소의 position 속성값을 relative로 바꿔줘야 자식 요소들이 부모 요소를 기준으로 top left bottom right 값을 설정했을 때 제대로 적용된다.

## input title

```html
<h1 class="heading-primary">
        <span class="heading-primary-main">OUTDOORS</span>
        <span class="heading-primary-sub">is where life lives</span>
      </h1>
```

- 메인 화면의 타이틀을 삽입시켜주기 위해 새롭게 h1 태그 요소 안에 텍스트를 삽입한다(h1는 SEO에서 중요한 정보를 제공하는 역할을 한다.).  이 때, 텍스트 요소를 제어하기 위해 span 요소를 사용해서 텍스트를 보여준다.

```css
.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: red;
  transform: translate(-50%, -50%);
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;
}

.heading-primary-main {
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
}

.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
}
```

- 타이틀이 들어가는 클래스들에 display block 속성을 부여한 이유는, 줄바꿈이 발생하지 않기 때문인데, span 태그는 기본적으로 inline 속성이라 그렇다. 이를 임의로 block으로 바꿔줌으로써 main title과 sub title의 줄바꿈이 발생한다.
- letter-spacing은 자간을 의미한다.
- 이제 main과 sub title을 감쌀  div 요소를 선언해주고 text-box라 정의한다. 이 때, 단순히 top, left 값을 50%로 정의하면 요소의 좌측 상단 모서리가 top, left 값의 기준이 된다. 따라서 transform: translate로 이를 보완해줄 수 있다.

# CSS Animations

```css

@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
```

```css
.heading-primary-main {
  display: block;
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 35px;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;

  /*animation-iteration-count: 3;*/
  /* animation-delay: 3s */
}

.heading-primary-sub {
  display: block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 17.4px;
  animation-name: moveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}
```

- CSS에서 애니메이션을 만들기 위해선 @keyframes 를 사용해서 만든다. 이름을 선언하고 그 안에 0% ~ 100% 까지의 프레임 동안 동작하기 위한 css속성을 설정해서 만든다.
- 그 후 만든 애니메이션 이름을 동작하기 위한 요소의 css 속성으로 넣어준다.
- 애니메이션 관련 속성은 다음과 같다
    - animation-name : 애니메이션 이름 불러오기
    - animation-duration : 애니메이션 지속시간 설정
    - animation-timing-function : 애니메이션 타이밍 함수 종류 설정 (추후 내용 보강)
    - animation-iteration-count : 반복횟수 설정 (디폴트 : 1)
    - animation-delay : 애니메이션 딜레이 설정

## Complex animated button

```css
.btn:link,
.btn:visited {
  /* Pseudo class */
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  transition: all 0.2s;
  position: relative;
}

.btn-white {
  background-color: #fff;
  color: #777;
  border-radius: 100px;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
  content: ""; /* 가상요소 입력시 항상 content 속성은 빼먹으면 안된다. */
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btn-white::after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
}
```

- 자식 요소를 absolute로 위치를 제어할 때는 부모 요소는 position 속성이 relative로 되어 있어야 한다.
- box shadow, pseudo class, transform 등 자주 사용되는 요소들에 대해선 따로 정리할 것
- 핵심은 애니메이션을 만들고 적용하는 방법에 대해서 숙달하는 것