//Mobile menu
function openOverlayMenu() {
  document.querySelector(".menu__overlay").style.top = "0px";
}

function closeOverlayMenu() {
  document.querySelector(".menu__overlay").style.top = "-100vh";
}

//Scroll to last article 
function scrolling(event) {
  event.preventDefault();
  document.getElementById('target').scrollIntoView({
    behavior: "smooth",
    block: 'nearest'
  });
}

//Lang
function changeLangRu() {
  document.querySelector('.button__item.eng').style.display = 'none';
  document.querySelector('.button__item.ru').style.display = 'flex';
}

function changeLangEng() {
  document.querySelector('.button__item.ru').style.display = 'none';
  document.querySelector('.button__item.eng').style.display = 'flex';
}

function changeLangRuMobile() {
  document.querySelector('.button__item.eng').style.display = 'none';
  document.querySelector('.button__item.ru').style.display = 'flex';
}

function changeLangEngMobile() {
  document.querySelector('.button__item.ru').style.display = 'none';
  document.querySelector('.button__item.eng').style.display = 'flex';
}