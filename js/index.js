////////////////아티클 박스들////////////////////////////
const articleBox = document.querySelectorAll('.article__box');
const articleBoxImg = document.querySelectorAll('.article__box--img');

for (let i = 0; i < articleBox.length; i++) {
  articleBox[i].addEventListener('mouseover', e => {
    articleBox[i].classList.add('active');
    articleBoxImg[i].src = `../img/fav-box-icon${[i + 1]}.png`;
  });
  articleBox[i].addEventListener('mouseleave', e => {
    articleBox[i].classList.remove('active');
    articleBoxImg[i].src = `../img/fav-box-icon${[i + 1]}_black.png`;
  });
}
