const modal = () => {
  const modalButton = document.querySelectorAll('.more')
  const modal = document.querySelector('.modal')
  const overlay = modal.querySelector('.overlay')
  const modalClose = document.querySelector('.modal__close')

  modalButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      modal.classList.remove('hidden')
    })
  })

  overlay.addEventListener('click', () => {
    modal.classList.add('hidden')
  })

  modalClose.addEventListener('click', () => {
    modal.classList.add('hidden')
  })
}
modal()