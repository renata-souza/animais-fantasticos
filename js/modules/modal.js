export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const modal = document.querySelector('[data-modal="container"]')
  
  if(botaoAbrir && botaoFechar && modal) {
    const toggleModal = (event) => {
      event.preventDefault();
      modal.classList.toggle('ativo')  
    }

    const cliqueFora = (event) => {
      if (event.target === modal)
        toggleModal(event);
    }
  
    botaoAbrir.addEventListener('click', toggleModal);
    botaoFechar.addEventListener('click', toggleModal);
    modal.addEventListener('click', cliqueFora)
  }
}
