// nav
function showNav(obj) {
  const navItems = document.querySelectorAll('.navItem');
  navItems.forEach((item) => {
    item.style.opacity = '.2';
    if (item.id === obj) {
      item.style.opacity = '1';
    }
  });
}

function originNav() {
  const navItems = document.querySelectorAll('.navItem');
  navItems.forEach((item) => {
    item.style.opacity = '1';
  });
}

//street
const nav_street = document.getElementById('street');
const hover_street = document.getElementById('showStreet');
nav_street.addEventListener('mouseenter', function () {
  hover_street.style.display = 'block';
});
nav_street.addEventListener('mouseleave', function () {
  hover_street.style.display = 'none';
});

//accessories
const nav_accessories = document.getElementById('accessories');
const hover_accessories = document.getElementById('showAccessories');
const accessoriesImg = hover_accessories.querySelector('img');
let imgCount = 0; // 計算第幾張
nav_accessories.addEventListener('mouseenter', function (e) {
  hover_accessories.style.display = 'block';
  imgCount += 1;
  switch (imgCount) {
    case 1:
      accessoriesImg.setAttribute('src', './images/cap.png');
      accessoriesImg.style.top = '100px';
      accessoriesImg.style.left = '200px';
      break;
    case 2:
      accessoriesImg.setAttribute('src', './images/shoes.png');
      accessoriesImg.style.top = '300px';
      accessoriesImg.style.left = '900px';
      break;
    case 3:
      accessoriesImg.setAttribute('src', './images/glass.png');
      accessoriesImg.style.top = '50px';
      accessoriesImg.style.left = '1100px';
      imgCount = 0;
      break;
  }
  //滑鼠剛進來的座標位置
  let StartX = e.clientX;
  let StartY = e.clientY;
  //目前圖片的座標位置
  const accessoriesImgX = parseInt(accessoriesImg.style.left);
  const accessoriesImgY = parseInt(accessoriesImg.style.top);

  nav_accessories.addEventListener('mousemove', function (event) {
    let x = event.clientX;
    let y = event.clientY;
    //圖片隨著移動的位置 = 滑鼠當前位置 - 剛進來時的座標 + 圖片本來的座標位置
    accessoriesImg.style.left = accessoriesImgX + x - StartX + 'px';
    accessoriesImg.style.top = accessoriesImgY + y - StartY + 'px';
  });
});
nav_accessories.addEventListener('mouseleave', function () {
  hover_accessories.style.display = 'none';
});

//magazine
const nav_magazine = document.getElementById('magazine');
const hover_magazine = document.getElementById('showMagazine');
nav_magazine.addEventListener('mouseenter', function () {
  hover_magazine.style.display = 'block';
});
nav_magazine.addEventListener('mousemove', function (e) {
  //亂數取得img number
  let randomImg = Math.floor(Math.random() * 27 + 1);
  const magazineImg = document.createElement('img');
  magazineImg.setAttribute('src', `./images/magazine/photo${randomImg}.jpg`);
  let x = e.clientX;
  let y = e.clientY;
  hover_magazine.appendChild(magazineImg);
  let magazineImgWidth = magazineImg.clientWidth;
  let magazineImgHeight = magazineImg.clientHeight;
  //圖片在滑鼠中間
  magazineImg.style.left = x - magazineImgWidth / 2 + 'px';
  magazineImg.style.top = y - magazineImgHeight / 2 + 'px';
});
nav_magazine.addEventListener('mouseout', function () {
  hover_magazine.style.display = 'none';
  hover_magazine.innerHTML = '';
});

//video
const nav_video = document.getElementById('video');
const hover_video = document.getElementById('showVideo');
const video = hover_video.querySelector('video');
nav_video.addEventListener('mouseover', function () {
  hover_video.style.display = 'block';
  video.play();
});
nav_video.addEventListener('mouseout', function () {
  hover_video.style.display = 'none';
  video.pause();
});

//swagUp
const nav_swagUp = document.getElementById('swagUp');
const hover_swagUp = document.getElementById('showSwagUp');
let bling;
nav_swagUp.addEventListener('mouseover', function () {
  hover_swagUp.style.display = 'block';
  letterBling();
});
nav_swagUp.addEventListener('mouseout', function () {
  hover_swagUp.style.display = 'none';
  clearInterval(bling);
});

function letterBling() {
  const letters = hover_swagUp.querySelector('ul');
  let letter = letters.children;
  bling = setInterval(function () {
    for (let i = 0; i < letter.length; i++) {
      setTimeout(function () {
        letter[i].style.opacity = '1';
      }, 150 * i);
      setTimeout(function () {
        letter[i].style.opacity = '0.25';
      }, 150 * i + 150);
    }
  }, letter.length * 150);
}

//what do you want
const nav_what = document.getElementById('what');
const hover_what = document.getElementById('showWhat');
const marquee2 = document.getElementById('marquee2');
marquee2.innerHTML = document.getElementById('marquee').innerHTML;
const what_title = document.getElementById('what_title');

let speed = 1;
let timer;
function marqueeGo() {
  //若marquee2的寬小於myDiv的scrollLeft，表示捲軸已經過了第一行
  //所以讓Div的scrollLeft再回到原來的位置；反之 則繼續往右跑
  if (marquee2.offsetWidth <= hover_what.scrollLeft) {
    hover_what.scrollLeft = 0;
  } else {
    hover_what.scrollLeft++;
  }
}
nav_what.addEventListener('mouseover', function () {
  what_title.style.opacity = 0;
  hover_what.style.display = 'block';
  timer = setInterval(marqueeGo, speed);
});
nav_what.addEventListener('mouseout', function () {
  what_title.style.opacity = 1;
  hover_what.style.display = 'none';
  clearInterval(timer);
});
