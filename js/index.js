// =================header drop down======================
function dp_menu() {
  let click = document.getElementById('drop-content');
  if (click.style.display === 'none') {
    click.style.display = 'block';
  } else {
    click.style.display = 'none';
  }
}

// ============사이드메뉴============
const icons = document.querySelectorAll('.icon');
let mySidenav = document.getElementById('mySidenav');
icons.forEach(icon => {
  icon.addEventListener('click', event => {
    icon.classList.toggle('open');
    mySidenav.classList.toggle('SlideNav');
    h_wrap.classList.toggle('hamberger');
  });
});
