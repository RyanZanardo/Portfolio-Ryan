window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky" , window.scrollY > 0);
  });
  

/*======= Responsive navigation menu =========*/
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation')

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
})
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
})
/*======= Final Responsive navigation menu =========*/




let sections = document.querySelectorAll('section'); // Seleciona todas as seções
let navlinks = document.querySelectorAll('.nav-itens a'); // Seleciona todos os links do menu

window.addEventListener('scroll', () => {
  let currentSection = null; // Variável para armazenar a seção atualmente visível
  let middleOfScreen = window.innerHeight / 10; // Obtém o valor do meio da tela

  // Percorre todas as seções para verificar qual está visível
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let offsetBottom = offset + height;

    if (top >= offset && top <= offsetBottom) {
      currentSection = sec;
    }
  });

  // Remove a classe "activetwo" de todos os links
  navlinks.forEach(link => {
    link.classList.remove('activetwo');
  });

  // Se uma seção estiver visível e a posição de rolagem estiver além do meio da tela, adiciona a classe "activetwo" ao link correspondente
  if (currentSection) {
    let currentLinkId = currentSection.getAttribute('id');
    let currentLink = document.querySelector('.nav-itens a[href="#' + currentLinkId + '"]');
    if (currentLink) {
      // Verifica se a posição de rolagem está além do meio da tela
      if (window.scrollY >= middleOfScreen) {
        currentLink.classList.add('activetwo');
      }
    }
  }
});






window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length;i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }else {
      reveals[i].classList.remove('active');
    }
  }
}