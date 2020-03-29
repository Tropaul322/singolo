
//Скролл active
var navigationScroll = function(){
    document.addEventListener('scroll', onScroll)
}
var onScroll = function(){
    const header = document.querySelector('.header-1');
    const curPos = window.scrollY + header.offsetHeight;
    const sections = document.querySelectorAll('body>section');
    const links = document.querySelectorAll('.header__nav-1 a')
    sections.forEach((section)=>{
        if (section.offsetTop <= curPos && (section.offsetTop +section.offsetHeight)>curPos){
            links.forEach((link)=>{
                link.classList.remove('active')
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            })
        }
    })
}
navigationScroll();

//Класс active для HEADER
const menu = document.querySelector('.header__nav-1')
menu.addEventListener('click', (event) => { 
         event.target.classList.add('active');
})
;

//Анимация для затемнения экрана телефонов, при нажатии наних.
document.querySelector('.phone').addEventListener('click', function(){
    document.querySelector('.screen1').classList.toggle('black');
    
})
document.querySelector('.phone1').addEventListener('click', function(){
    document.querySelector('.screen2').classList.toggle('black')
})


//Бордер для картинок.
const IMG = document.querySelector('.portfolio__gallary-2')
IMG.addEventListener('click', (event)=>{
    IMG.querySelectorAll('img').forEach(el => el.classList.remove('border2'))
    event.target.classList.add('border2')
})
const BUT = document.querySelector('.portfolio__buttons-2')
BUT.addEventListener('click', (event)=>{
    BUT.querySelectorAll('div').forEach(el => el.classList.remove('border3'))
    event.target.classList.add('border3')
})

//Создание модального окна.
var btn1 = document.querySelector(".submit-3");
btn1.addEventListener('click', (event) => {
    const name12 = document.querySelector('.name1').value.toString();
    const email = document.querySelector('.email1').value;
    if(name12 == '' || email == ''){
        document.querySelector('.message-block-req').classList.remove('invs')
    }else {
        const subject = document.querySelector('.subject').value.toString();
        const description = document.querySelector('.description').value.toString();
    if (subject != '' || description != ''){
        document.querySelector('.sub-res').innerText = 'Тема: ' + subject;
        document.querySelector('.desc-res').innerText = 'Описание: ' + description;
    } else {
        document.querySelector('.sub-res').innerText = 'Без темы!';
        document.querySelector('.desc-res').innerText = 'Без описания!';
    }
    document.querySelector('.message-block').classList.remove('invs')
    }
    
    event.preventDefault()
})
//Кнопка выключения окна.
const close1 = document.querySelectorAll('.close');
close1.forEach(el => el.addEventListener('click', () => {
    document.querySelector('.sub-res').innerText = '';
    document.querySelector('.desc-res').innerText = '';
    document.querySelector('.subject').value = '';
    document.querySelector('.description').value = '';
    document.querySelector('.message-block').classList.add('invs');
    document.querySelector('.message-block-req').classList.add('invs')
}))

//ПОЛУЧЕНИЕ РАНДОМНОГО ARRAY
let arry = [1,2,3,4,5,6,7,8,9,10,11,12]
let shuffe = function(arr){
    let newPos, temp;
    for (let i =arr.length-1; i >0 ; i--){
        newPos = Math.floor(Math.random()*(i+1))
        temp = arr[i];
        arr[i]=arr[newPos];
        arr[newPos]=temp;
}
return arr
}

//РАНДОМНЫЕ КАРТИНКИ НА ТАБАХ
var n = document.querySelector('.button-2:nth-child(2)')
n.addEventListener('click', function(){
       shuffe(arry)
       var b = document.querySelectorAll('.photo-21');
       for (var i = 0; i < b.length; i++){
        b[i].style.opacity = '0%';
            setTimeout(function(){
                for (var i = 0; i < b.length; i++){
                b[i].src = 'assets/img/'+ arry[i] + '.jpg';
                b[i].style.opacity = '100%';
            }}, 400)
        }
})
var n = document.querySelector('.button-2:nth-child(3)')
n.addEventListener('click', function(){
    shuffe(arry)
       var b = document.querySelectorAll('.photo-21');
       for (var i = 0; i < b.length; i++){
        b[i].style.opacity = '0%';
            setTimeout(function(){
                for (var i = 0; i < b.length; i++){
                b[i].src = 'assets/img/'+ arry[i] + '.jpg';
                b[i].style.opacity = '100%';
            }}, 400)
        }
})
var n = document.querySelector('.button-2:nth-child(4)')
n.addEventListener('click', function(){
    shuffe(arry)
       var b = document.querySelectorAll('.photo-21');
       for (var i = 0; i < b.length; i++){
        b[i].style.opacity = '0%';
            setTimeout(function(){
                for (var i = 0; i < b.length; i++){
                b[i].src = 'assets/img/'+ arry[i] + '.jpg';
                b[i].style.opacity = '100%';
            }}, 400)
        }   
})
var n = document.querySelector('.button-2:nth-child(1)')
n.addEventListener('click', function(){ 
   var b = document.querySelectorAll('.photo-21');
   var y = 0;
   for (var i = 1; i < b.length+1; i++){
        b[y].src = 'assets/img/'+ i + '.jpg';
        y++
       }
   }
)

//КАРУСЕЛЬ
const slide = document.querySelector('.slider__wrapper-1')
const imgs= document.querySelectorAll('.slider__wrapper-1 img');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let count = 1;
const size = imgs[0].clientWidth;
slide.style.transform = 'translateX('+(-size*count) + 'px)';
next.addEventListener('click', ()=>{
    if(count >= imgs.length-1)return;
   slide.style.transition = 'transform 0.6s ease-in-out';
    count++;
    slide.style.transform = 'translateX('+(-size*count) + 'px';
    if (count === 2){
        document.querySelector('.screen2').style.display = 'none'
        document.querySelector('.screen1').style.display = 'none'
    } else {
        document.querySelector('.screen2').style.display = 'block'
        document.querySelector('.screen1').style.display = 'block'
    }
    document.querySelector('.screen1').classList.remove('black');
    document.querySelector('.screen2').classList.remove('black');
    
console.log(count)

})
prev.addEventListener('click', ()=>{
    if(count <= 0)return;
    slide.style.transition = 'transform 0.6s ease-in-out';
    count--;
    slide.style.transform = 'translateX('+(-size*count) + 'px';
    if (count === 0){
        document.querySelector('.screen2').style.display = 'none'
        document.querySelector('.screen1').style.display = 'none'
    } else {
        document.querySelector('.screen2').style.display = 'block'
        document.querySelector('.screen1').style.display = 'block'
    }
    document.querySelector('.screen1').classList.remove('black');
    document.querySelector('.screen2').classList.remove('black');
    console.log(count)
})
slide.addEventListener('transitionend', ()=>{
    if (imgs[count].id === 'last'){
        slide.style.transition = 'none';
        count = imgs.length-2;
        slide.style.transform = 'translateX('+(-size*count) + 'px';
     }
     if (imgs[count].id === 'first'){
        slide.style.transition = 'none';
        count = imgs.length-3;
        slide.style.transform = 'translateX('+(-size*count) + 'px';
     }
})

//Hamburger menu
document.querySelector('.hamburger').addEventListener('click', ()=>{
    document.querySelector('.opacity-1').style.display='block'
    document.querySelector('.opacity-1').style.transform =  'translateX(278px)';
    document.querySelector('.opacity-1').style.opacity = '50%';
    document.querySelector('.navigation').style.transform = 'translateX(0)';
    document.querySelector('body').style.overflow = 'hidden'
})
document.querySelector('.hamburger-1').addEventListener('click', ()=>{
    document.querySelector('.opacity-1').style.display='none';
    document.querySelector('.opacity-1').style.transform =  'translateX(835px)';
    document.querySelector('.opacity-1').style.opacity = '0%';
    document.querySelector('.navigation').style.transform = 'translateX(-279px)';
    document.querySelector('body').style.overflow = 'visible'
})


var navigation1 = document.querySelector('.header__nav-12');
navigation1.addEventListener('click',(event) =>{
    navigation1.querySelectorAll('li>a').forEach(el => el.classList.remove('active'));
    navigation1.querySelectorAll('li>a').forEach(el => el.classList.add('act'));
    event.target.classList.add('active');
    event.target.classList.remove('act')
    document.querySelector('.navigation').style.transform = 'translateX(-279px)';
    document.querySelector('.opacity-1').style.transform =  'translateX(835px)';
    document.querySelector('body').style.overflow = 'visible'  
})
