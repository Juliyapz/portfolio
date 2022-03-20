const accordion = document.querySelector('.feature-list')
const accordionBtn = accordion.querySelectorAll('.feature__link')

accordionBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    accordionBtn.forEach((button) => {
      button.classList.remove('feature__link_active')
      button.nextElementSibling.classList.add('hidden')
    })
    btn.classList.toggle('feature__link_active')
    btn.nextElementSibling.classList.toggle('hidden')
  })
})