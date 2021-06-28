let nowIndex = 1;


const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);
bottomBtn03.addEventListener('click', moveC);

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

//move first image.
function moveA()
{
    imageSlider.style.transform = 'translate(0px)'
    nowIndex =1;
}

//move second image.
function moveB()
{
    imageSlider.style.transform = 'translate(-1060px)'
    nowIndex =2;
}

//move third image.
function moveC()
{
    imageSlider.style.transform = 'translate(-2120px)'
    nowIndex =3;
}


function moveLeft()
{
    if(nowIndex ==1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);

}

function moveRight()
{
    if(nowIndex ==3)
    {
        nowIndex =3;
    }

    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);

}


function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
    }
}
