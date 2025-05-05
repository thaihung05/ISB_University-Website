const navToggleShowBtn = document.getElementById('navbar-toggler-show');
const navToggleCloseBtn = document.getElementById('navbar-toggler-close');
const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarDiv = document.querySelector('.navbar');

navToggleShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.style.display = "flex";
});

navToggleCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.style.display = "none";
});

// hide navbar
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        navbarDiv.style.display = "none";
    } else {
        navbarDiv.style.display = "";
    }
});
//back to top
// Khi người dùng cuộn xuống 20px từ đầu trang, hiển thị nút
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}
let back = document.getElementById("backToTop");
back.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Khi người dùng nhấp vào nút, cuộn lên đầu trang
function topFunction() {
    document.body.scrollTop = 0; // Cho Safari
    document.documentElement.scrollTop = 0; // Cho Chrome, Firefox, IE và Opera
}

//Titile animation-changin'
//Cắt chuỗi thành từng ký tự
const text=document.querySelector(".header-content h1");
const strText=text.textContent;
const splitText=strText.split("");
console.log(splitText);
text.textContent="";
for (let i=0; i<splitText.length;i++)
{
    text.innerHTML += "<span>"+splitText[i]+"</span>";
}

let char =0;
let timer = setInterval(onTick,50);
function onTick()
{
    const span=text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char===splitText.length){
        complete();
        return;
    }
}
function complete()
{
    clearInterval(timer);
    timer = null;
}

//3 func for 3 numbers
//Auto Counting Number
const counterEl=document.querySelector('.counter');
let counterNumber= 0;
const updateCounter = setInterval (function(){
    counterNumber++;
    counterEl.textContent=counterNumber;
    if (counterNumber>=1000)
    {
        clearInterval(updateCounter);
        counterEl.style.color='white';
    }

},1)
const counterEl2=document.querySelector('.counter2');
let counterNumber2= 0;
const updateCounter2 = setInterval (function(){
    counterNumber2++;
    counterEl2.textContent=counterNumber2;
    if (counterNumber2>=1500)
    {
        clearInterval(updateCounter2);
        counterEl2.style.color='white';
    }

},1)
const counterEl3=document.querySelector('.counter3');
let counterNumber3= 0;
const updateCounter3 = setInterval (function(){
    counterNumber3++;
    counterEl3.textContent=counterNumber;
    if (counterNumber3>=1001)
    {
        clearInterval(updateCounter3);
        counterEl3.style.color='white';
    }

},1)