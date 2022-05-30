export default function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  if (sections.length) {
    const halfWindowHeight = window.innerHeight * 0.7

    function scrollAnimation() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - halfWindowHeight) < 0
        if (isSectionVisible) {
          section.classList.add('active')
        }
      })
    }
    scrollAnimation()
    window.addEventListener('scroll', scrollAnimation)
  }
}