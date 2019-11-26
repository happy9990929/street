let getSiblings = function (el) {
    //取出父層第一個子元素
    let sibling = el.parentNode.firstChild;
    //建立一個siblings空陣列
    let siblings = [];

    //如果有sibling子元素執行迴圈
    while (sibling) {
        //節點類型為元素節點 且 sibling不等於自己 就push到siblings
        if (sibling.nodeType === 1 && sibling != el) {
            siblings.push(sibling);
        }
        //找siblings下一個同層元素
        sibling = sibling.nextSibling;
    }
    //執行至無同層元素回傳至陣列
    return siblings;
}



//street
const nav_street = document.getElementById('street');
const hover_street = document.querySelector('[data-action="street"]');
nav_street.addEventListener('mouseover', function(){
    show(hover_street);
    getSiblings(this).map(function(e){
        e.style.opacity = '0.2';
    })
});
nav_street.addEventListener('mouseout', function(){
    hide(hover_street);
    getSiblings(this).map(function(e){
        e.style.opacity = '1';
    })
});

//accessories
const nav_accessories = document.getElementById('accessories');
const hover_accessories = document.querySelector('[data-action="accessories"]');
const accessoriesImg = hover_accessories.querySelector('img');
let imgCount = 0; //img number
nav_accessories.addEventListener('mouseover', function(e){
    show(hover_accessories);
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

    nav_accessories.addEventListener('mousemove', function(event){
        let x = event.clientX;
        let y = event.clientY;
        //圖片隨著移動的位置 = 滑鼠當前位置 - 剛進來時的座標 + 圖片本來的座標位置
        accessoriesImg.style.left = accessoriesImgX + x - StartX + 'px';
        accessoriesImg.style.top = accessoriesImgY + y - StartY + 'px';
    })
    getSiblings(this).map(function(e){
        e.style.opacity = '0.2';
    })
});
nav_accessories.addEventListener('mouseout', function(){
    hide(hover_accessories);
    getSiblings(this).map(function(e){
        e.style.opacity = '1';
    })
});

//magazine
const nav_magazine = document.getElementById('magazine');
const hover_magazine = document.querySelector('[data-action="magazine"]');
nav_magazine.addEventListener('mouseover', function(){
    show(hover_magazine);
    getSiblings(this).map(function(e){
        e.style.opacity = '0.2';
    })
});
nav_magazine.addEventListener('mousemove', function(e){
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
    magazineImg.style.left = x - (magazineImgWidth / 2) + 'px';
    magazineImg.style.top = y - (magazineImgHeight / 2) + 'px';
});
nav_magazine.addEventListener('mouseout', function(){
    hide(hover_magazine);
    hover_magazine.innerHTML = '';
    getSiblings(this).map(function(e){
        e.style.opacity = '1';
    })
});

//video
const nav_video = document.getElementById('video');
const hover_video = document.querySelector('[data-action="video"]');
const video = hover_video.querySelector('video');
nav_video.addEventListener('mouseover', function(){
    show(hover_video);
    video.play();
    getSiblings(this).map(function(e){
        e.style.opacity = '0.2';
    })
});
nav_video.addEventListener('mouseout', function(){
    hide(hover_video);
    video.pause();
    getSiblings(this).map(function(e){
        e.style.opacity = '1';
    })
});

//swagUp
const nav_swagUp = document.getElementById('swagUp');
const hover_swagUp = document.querySelector('[data-action="swagUp"]');
let bling;
nav_swagUp.addEventListener('mouseover', function(){
    show(hover_swagUp);
    letterBling();
    getSiblings(this).map(function(e){
        e.style.opacity = '0.2';
    })
});
nav_swagUp.addEventListener('mouseout', function(){
    hide(hover_swagUp);
    clearInterval(bling);
    getSiblings(this).map(function(e){
        e.style.opacity = '1';
    })
});

function letterBling(){
    const letters = hover_swagUp.querySelector('ul');
    let letter = letters.children;
    bling = setInterval(function(){
        for (let i = 0; i < letter.length; i++) {
            setTimeout(function(){
                letter[i].style.opacity = '1';
            }, 150*i);
            setTimeout(function(){
                letter[i].style.opacity = '0.25';
            }, 150*i + 150);
        }
    }, letter.length*150);
    
}

//what do you want
const nav_what = document.getElementById('what');
const hover_what = document.querySelector('[data-action="what"]');
const marquee2 = document.getElementById('marquee2');
marquee2.innerHTML =  document.getElementById('marquee').innerHTML;
const what_title = document.getElementById('what_title');

let speed = 1;
let timer;
function marqueeGo(){
    //若marquee2的寬小於myDiv的scrollLeft，表示捲軸已經過了第一行
    //所以讓Div的scrollLeft再回到原來的位置；反之 則繼續往右跑   
    if(marquee2.offsetWidth <= hover_what.scrollLeft){
        hover_what.scrollLeft = 0;
    }else{
        hover_what.scrollLeft++;
    }
}
nav_what.addEventListener('mouseover', function(){
    what_title.style.opacity = 0;
    show(hover_what);
    timer=setInterval(marqueeGo,speed);
    getSiblings(this).map(function(e){
        e.style.opacity = '0.2';
    })
})
nav_what.addEventListener('mouseout', function(){
    what_title.style.opacity = 1;
    hide(hover_what);
    clearInterval(timer);
    getSiblings(this).map(function(e){
        e.style.opacity = '1';
    })
})


function show(obj){
    obj.style.display = 'block';
}
function hide(obj){
    obj.style.display = 'none';
}













