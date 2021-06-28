//썸네일.

let imgData = [
    'img/plant_01.png',
    'img/plant_02.png',
    'img/plant_03.png',
    'img/plant_04.png',
    'img/plant_05.png',
    'img/plant_06.png',
    'img/plant_07.png',
    'img/plant_08.png',
    'img/plant_09.png',
    'img/plant_10.png',
    'img/plant_11.png',
    'img/plant_12.png',
    'img/plant_13.png',
    'img/plant_14.png',
    'img/plant_15.png',
    'img/plant_16.png'

];


let imgName = [
    '암석주선인장',
    '극락조화',
    '아가베다틸리오',
    '황금사',
    '보검',
    '야자수',
    '안투리움',
    '와룡',
    '변엽목',
    '북두각',
    '카나리야자',
    '용설란',
    '팔손이',
    '금호',
    '장군',
    '용신목'
];

let myPhotos = document.querySelectorAll('.thumbnail');
/*console.log(myPhotos);*/
let imgTag = document.querySelectorAll('.imgTag');
let myTitle= document.querySelectorAll('.textField');



for(let i = 0; i < myPhotos.length; i++)
{
    imgTag[i].src = imgData[i];
    myTitle[i].textContent = imgName[i];

    myPhotos[i].addEventListener('mouseover', overFn);
    myPhotos[i].addEventListener('mouseout', outFn);
}

function overFn(e)
{
    e.path[1].querySelector('.imgTag').classList.add('on');
    e.path[0].classList.add('on');
}

function outFn(e)
{
    e.path[1].querySelector('.imgTag').classList.remove('on');
    e.path[0].classList.remove('on');
}