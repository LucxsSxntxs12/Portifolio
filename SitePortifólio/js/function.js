const menu = document.querySelector(".nav-mobile h3");

var buton = true;
menu.addEventListener("click", () => {
  if (buton) {
    menu.parentElement.childNodes[5].classList.add("vizu");
    buton = false;
  } else if (!buton) {
    menu.parentElement.childNodes[5].classList.remove("vizu");
    buton = true;
  }
});

function navegar(indentificador, pagina) {
  indentificador.addEventListener("click", function (e) {
    e.preventDefault();

    let offsetTop = pagina.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

    if (buton == false) {
      menu.parentElement.childNodes[5].classList.remove("vizu");
    }
  });
}

{
  let contato = document.getElementById("contato");
  let contatoMenu = document.getElementById("contato1");
  let contatoSection = document.querySelector("section.contato");

  let projeto = document.getElementById("projeto");
  let projetoMenu = document.getElementById("projeto1");
  let projetoSection = document.querySelector("section.projetos");

  navegar(contatoMenu, contatoSection);
  navegar(projeto, projetoSection);
  navegar(contato, contatoSection);
  navegar(projetoMenu, projetoSection);
}
