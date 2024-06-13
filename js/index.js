const bgMusic = document.getElementById("bgMusic");
const react_root = document.getElementById("music");
const music_top = document.getElementById("music_img_page_stop");
function toggleMusic() {
  if (bgMusic.paused) {
    playBackgroundMusic();
  }

  else {
    pauseBackgroundMusic();
  }
}

// 播放音乐
function playBackgroundMusic() {
  bgMusic.play();
  react_root.classList.add("musicRotate");
  music_top.style.display="none";
}

// 暂停音乐
function pauseBackgroundMusic() {
  bgMusic.pause();
  react_root.classList.remove("musicRotate");
  music_top.style.display="block";
}

var ad = document.querySelector('.max-one');
var adDisplay =  setTimeout(function () {
    ad.style.display = 'none';
}, 11500);
//  clearTimeout(adDisplay)

setTimeout(function () {
  bjTwo.classList.add('top-bj-twot');
  Yun.classList.add('zj-topt')
}, 12000);
var ac = document.querySelector('.logo');
setTimeout(function () {
    ac.style.display = 'none';
}, 11000);
function bottomone() {
    var image = document.getElementById('max-two');
    image.style.display = 'none';

}
const But = document.getElementById("But")
const two_page = document.getElementById("max-two")
But.onclick=function (){
    two_page.style.display = "none";
    // 播放音乐
    bgMusic.play()
}
const Buttwo = document.getElementById("Buttwo")
Buttwo.onclick=function (){
    maxFive.style.display = "none";
}
const Butsix = document.getElementById("Butsix")
Butsix.onclick=function (){
    maxTen.style.display = "none";
}
const Buteight = document.getElementById("Buteight")
Buteight.onclick=function (){
    maxSix.style.display = "";
}
var bjTwo = document.getElementsByClassName("top-bj-two")[0];
var Yun = document.getElementsByClassName("zj-top")[0];

var twoBottom = document.getElementsByClassName("two-bottom")[0];
var maxTwo = document.getElementsByClassName("max-two")[0];
var oneBj = document.getElementsByClassName("three-top-one")[0];
var ganTan = document.getElementsByClassName("gantan")[0];
var imgOne = document.getElementsByClassName("two-one-img")[0];
var Ten = document.getElementsByClassName("ten")[0];
var imgTwo = document.getElementsByClassName("two-two-img")[0];
var wzOne = document.getElementsByClassName("wz-one")[0];
var imgThree= document.getElementsByClassName("top-three-img")[0];
var tjOne= document.getElementsByClassName("tj-one")[0];
var wzTwo= document.getElementsByClassName("wz-two")[0];
var tjTwo= document.getElementsByClassName("tj-two")[0];
var tjThree= document.getElementsByClassName("tj-three")[0];
var gantanOne= document.getElementsByClassName("gantan-one")[0];
var gantanTwo= document.getElementsByClassName("gantan-two")[0];
var maxThree= document.getElementsByClassName("max-three")[0];
var imgFour= document.getElementsByClassName("top-four-img")[0];
var wzThree= document.getElementsByClassName("four-wz-one")[0];
var txOne= document.getElementsByClassName("four-tx-one")[0];
var wzFour= document.getElementsByClassName("four-wz-two")[0];
var txTwo= document.getElementsByClassName("four-tx-three")[0];
var imgFive= document.getElementsByClassName("bottom-four-img")[0];
var txThree= document.getElementsByClassName("four-tx-two")[0];
var wzFive= document.getElementsByClassName("four-wz-three")[0];
var maxFour= document.getElementsByClassName("max-four")[0];
var imgSix= document.getElementsByClassName("wz-four-img")[0];
var imgSeven= document.getElementsByClassName("wz-four-imgtwo")[0];
var maxSix= document.getElementsByClassName("max-six")[0];
var maxFive= document.getElementsByClassName("max-five")[0];
var maxSeven= document.getElementsByClassName("max-seven")[0];
var bottomThree= document.getElementsByClassName("bottom-three")[0];
var maxEight= document.getElementsByClassName("max-eight")[0];
var maxNine= document.getElementsByClassName("max-nine")[0];
var Baoxiang= document.getElementsByClassName("eleven-zj-tp")[0];
var Baoxiangone= document.getElementsByClassName("eleven-zj-tp1")[0];
var maxEleven= document.getElementsByClassName("max-eleven")[0];


const Butthree = document.getElementById("Butthree")
Butthree.onclick = function () {
  maxSix.style.display = 'none';
  maxSeven.style.display = '';
}

const Butfour = document.getElementById("Butfour")
Butfour.onclick = function () {
  maxSix.style.display = 'none';
  maxEight.style.display = '';
}

const Butfive = document.getElementById("Butfive")
Butfive.onclick = function () {
  maxSix.style.display = 'none';
  maxNine.style.display = '';
}

var maxTwelve= document.getElementsByClassName("max-twelve")[0];

var twelveBj= document.getElementsByClassName("twelve-tp")[0];
var twelveBj1= document.getElementsByClassName("twelve-one-img")[0];
var twelveBj2= document.getElementsByClassName("twelve-two-img")[0];
var twelveBj3= document.getElementsByClassName("twelve-three-img")[0];
var twelvetp= document.getElementsByClassName("twelve-zj")[0];
var twelvetp1= document.getElementsByClassName("twelve-left")[0];
var twelvetp2= document.getElementsByClassName("twelve-right")[0];
var twelvetp3= document.getElementsByClassName('twelve-top-left-max')[0];
var twelvetp4= document.getElementsByClassName('twelve-top-right-max')[0];
var twelvetp5= document.getElementsByClassName('twelve-top-three-tp')[0];
var twelvetp6= document.getElementsByClassName('twelve-top-three-tp1')[0];
var twelvetp7= document.getElementsByClassName('twelve-top-three-tp2')[0];
var twelvetp8= document.getElementsByClassName('twelve-top-three-tp3')[0];
var thirteenOne = document.getElementsByClassName('thirteen-one')[0];
var elevenTp1= document.getElementsByClassName('eleven-one-tp4')[0];
var elevenTp2= document.getElementsByClassName('eleven-one-tp2')[0];


const Butseven = document.getElementById("Butseven")
Butseven.onclick = function () {
  Baoxiang.style.display = 'none';
  Baoxiangone.classList.add('eleven-zj-tp1t');
  elevenTp1.classList.add('eleven-one-tp4t');
  elevenTp2.classList.add('eleven-one-tp2t');

  setTimeout(() => {
    maxEleven.style.display = 'none';
    twelveBj.classList.add('twelve-tpt')
  }, 3000);
  setTimeout(() => {
    twelveBj1.classList.add('twelve-one-imgt')
  }, 4300);
  setTimeout(() => {
    twelveBj2.classList.add('twelve-two-imgt')
  }, 5600);
  setTimeout(() => {
    twelveBj3.classList.add('twelve-three-imgt')
  }, 6900);
  setTimeout(() => {
    twelvetp.classList.add('twelve-zjt')
  }, 8200);
  setTimeout(() => {
    twelvetp1.classList.add('twelve-leftt')
  }, 9500);
  setTimeout(() => {
    twelvetp2.classList.add('twelve-rightt')
  }, 10800);
  setTimeout(() => {
    twelvetp3.classList.add('twelve-top-left-maxt')
  }, 12100);
  setTimeout(() => {
    twelvetp4.classList.add('twelve-top-right-maxt')
  }, 13400);
  setTimeout(() => {
    twelvetp5.classList.add('twelve-top-three-tpt')
  }, 14700);
  setTimeout(() => {
    twelvetp6.classList.add('twelve-top-three-tp1t')
  }, 16000);
  setTimeout(() => {
    twelvetp7.classList.add('twelve-top-three-tp2t')
  }, 17300);
  setTimeout(() => {
    twelvetp8.classList.add('twelve-top-three-tp3t')
  }, 18600);
  setTimeout(() => {
    maxTwelve.style.display = 'none'
  }, 20600);
  setTimeout(() => {
    thirteenOne.classList.add('thirteen-onet');
  }, 21100);
}

twoBottom.onclick = function () {
    maxTwo.style.display = 'none';
  
    oneBj.classList.add('top-one-bjt');
    setTimeout(() => {
        ganTan.classList.add('gantant');
    
      }, 1000);
      setTimeout(() => {
        imgOne.classList.add('two-one-imgt');
    
      }, 2000);
      setTimeout(() => {
        Ten.classList.add('tent');
    
      }, 3000);
      setTimeout(() => {
        imgTwo.classList.add('two-two-imgt');
        wzOne.classList.add('wz-onet');
    
      }, 4000);
      setTimeout(() => {
        imgThree.classList.add('top-three-imgt');
    
      }, 5000);
      setTimeout(() => {
        tjOne.classList.add('tj-onet');
        tjTwo.classList.add('tj-twot');
        tjThree.classList.add('tj-threet');
        gantanOne.classList.add('gantan-onet');
      }, 6000);
      setTimeout(() => {
        wzTwo.classList.add('wz-twot');
      }, 7000);
      setTimeout(() => {
        maxThree.style.display='none';
      }, 10000);
      setTimeout(() => {
        imgFour.classList.add('top-four-imgt');
      }, 11000);
      setTimeout(() => {
        imgFive.classList.add('bottom-four-imgt');
      }, 12000);
      setTimeout(() => {
        wzThree.classList.add('four-wz-onet');
        txOne.classList.add('four-tx-onet');
      }, 13000);
      setTimeout(() => {
        wzFour.classList.add('four-wz-twot');
        txTwo.classList.add('four-tx-threet');
      }, 14000);
      setTimeout(() => {
        wzFive.classList.add('four-wz-threet');
        txThree.classList.add('four-tx-twot');
      }, 15000);
      setTimeout(() => {
        imgSix.classList.add('wz-four-imgt');
        imgSeven.classList.add('wz-four-imgtwot')
      }, 16000);
      setTimeout(() => {
        maxFour.style.display='none';
      }, 19000);
      setTimeout(() => {
        zImg.classList.add('expanded');
      }, 20000);
      setTimeout(() => {
        pTow.classList.add('p-towt')
      }, 21000);
}

var zImg = document.getElementsByClassName("z-img")[0];
var pOne = document.getElementsByClassName("p-one")[0];
var pTow = document.getElementsByClassName("p-tow")[0];
var yzImg = document.getElementsByClassName("yz-img")[0];
var butThree = document.getElementsByClassName("bottom-three")[0];
var sevenBj = document.getElementsByClassName("seven-top-bj")[0];
var sevenBjtwo = document.getElementsByClassName("seven-bottom-bj")[0];

var seventopTp = document.getElementsByClassName("seven-top-tp")[0];
var seventopTp1 = document.getElementsByClassName("seven-top-tp1")[0];
var seventopTp2 = document.getElementsByClassName("seven-top-tp2")[0];
var seventopTp3 = document.getElementsByClassName("seven-top-tp3")[0];
var sevenbottomTp1 = document.getElementsByClassName("seven-bottom-tp1")[0];
var sevenbottomTp2 = document.getElementsByClassName("seven-bottom-tp2")[0];
var seventopTp4 = document.getElementsByClassName("seven-top-tp4")[0];
var maxTen = document.getElementsByClassName("max-ten")[0];


Butthree.onclick = function () {
  maxSix.style.display = 'none';
  maxSeven.style.display = '';

  sevenBj.classList.add('seven-top-bjt');
  setTimeout(() => {
    sevenBjtwo.classList.add('seven-bottom-bjt')
  }, 1300);
  setTimeout(() => {
    seventopTp.classList.add('seven-top-tpt');
    seventopTp1.classList.add('seven-top-tp1t');
  }, 2600);
  setTimeout(() => {
    seventopTp2.classList.add('seven-top-tp2t');
  }, 3900);
  setTimeout(() => {
    seventopTp3.classList.add('seven-top-tp3t');
  }, 5200);
  setTimeout(() => {
    seventopTp4.classList.add('seven-top-tp4t');
  }, 6500);
  setTimeout(() => {
    sevenbottomTp1.classList.add('seven-bottom-tp1t');
    sevenbottomTp2.classList.add('seven-bottom-tp2t');
  }, 7800);
  setTimeout(() => {
    maxSeven.style.display ='none';
  }, 11800);
}


var eighttopTp1 = document.getElementsByClassName("eight-top-tp1")[0];
var eightbottomTp1 = document.getElementsByClassName("eight-bottom-tp1")[0];
var eighttopTp2 = document.getElementsByClassName("eight-top-tp2")[0];
var eighttopTp3 = document.getElementsByClassName("eight-top-tp3")[0];
var eighttopTp4 = document.getElementsByClassName("eight-top-tp4")[0];
var eightbottomTp2 = document.getElementsByClassName("eight-bottom-tp2")[0];
var eightbottomTp5 = document.getElementsByClassName("eight-bottom-tp5")[0];
var eightbottomTp3 = document.getElementsByClassName("eight-bottom-tp3")[0];


Butfour.onclick = function () {
  maxSix.style.display = 'none';
  maxEight.style.display = '';

  eighttopTp1.classList.add('eight-top-tp1t');
  setTimeout(() => {
    eightbottomTp1.classList.add('eight-bottom-tp1t');
  }, 1300);
  setTimeout(() => {
    eighttopTp2.classList.add('eight-top-tp2t');
    eighttopTp3.classList.add('eight-top-tp3t');
  }, 2600);
  setTimeout(() => {
    eighttopTp4.classList.add('eight-top-tp4t');
  }, 3900);
  setTimeout(() => {
    eightbottomTp2.classList.add('eight-bottom-tp2t');
  }, 5200);
  setTimeout(() => {
    eightbottomTp5.classList.add('eight-bottom-tp5t');
    eightbottomTp3.classList.add('eight-bottom-tp3t');
  }, 6500);
  setTimeout(() => {
    maxEight.style.display ='none';
  }, 10500);
}


var ninetopTp = document.getElementsByClassName("nine-top-tp")[0];
var ninebottomTp1 = document.getElementsByClassName("nine-bottom-tp1")[0];
var ninetopTp1 = document.getElementsByClassName("nine-top-tp1")[0];
var ninetopTp2 = document.getElementsByClassName("nine-top-tp2")[0];
var ninebottomTp2 = document.getElementsByClassName("nine-bottom-tp2")[0];
var ninebottomTp3 = document.getElementsByClassName("nine-bottom-tp3")[0];
var ninebottomTp4 = document.getElementsByClassName("nine-bottom-tp4")[0];
var nineTp2 = document.getElementsByClassName("nine-tp2")[0];
var nineTp3 = document.getElementsByClassName("nine-tp3")[0];
var nineTp4 = document.getElementsByClassName("nine-tp4")[0];
var nineTp5 = document.getElementsByClassName("nine-tp5")[0];
var nineTp6 = document.getElementsByClassName("nine-tp6")[0];
var nineTp7 = document.getElementsByClassName("nine-tp7")[0];
var ninebottomTp5 = document.getElementsByClassName("nine-bottom-tp5")[0];




Butfive.onclick = function () {
  maxSix.style.display = 'none';
  maxNine.style.display = '';

  ninetopTp.classList.add('nine-top-tpt');
  setTimeout(() => {
    ninebottomTp1.classList.add('nine-bottom-tp1t');
  }, 1300);
  setTimeout(() => {
    ninetopTp1.classList.add('nine-top-tp1t');
    nineTp2.classList.add('nine-tp');
    nineTp3.classList.add('nine-tp');
    nineTp4.classList.add('nine-tp');
    nineTp5.classList.add('nine-tp');
    nineTp6.classList.add('nine-tp');
    nineTp7.classList.add('nine-tp');
  }, 2600);
  setTimeout(() => {
    ninetopTp2.classList.add('nine-top-tp2t');
  }, 3900);
  setTimeout(() => {
    ninebottomTp2.classList.add('nine-bottom-tp2t');
  }, 5200);
  setTimeout(() => {
    ninebottomTp3.classList.add('nine-bottom-tp3t');
  }, 6500);
  setTimeout(() => {
    ninebottomTp4.classList.add('nine-bottom-tp4t');
    ninebottomTp5.classList.add('nine-bottom-tp5t');
  }, 7800);
  setTimeout(() => {
    maxNine.style.display ='none';
  }, 11800);
}
var progressbar = {
  init: function () {
    var fill = document.getElementById('fill');
    var count = 0;
    //通过间隔定时器实现百分比文字效果,通过计算CSS动画持续时间进行间隔设置
    var timer = setInterval(function (e) {
      count++;
      fill.innerHTML = count + '%';
      if (count === 100) clearInterval(timer);
    }, 100);
  }
};
progressbar.init();
// window.location.reload();
const Butten = document.getElementById("Butten")
Butten.onclick =function (){
  window.location.reload();
}