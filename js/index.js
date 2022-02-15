//burger menu
const sidebar = document.getElementById('sidebar')
const burger = document.getElementById('burger')
const closed = document.getElementById('closed')
const opened = document.getElementById('opened')
const logo = document.querySelector('.logo')
const logoText = document.querySelector('.logo__text')
const categoryItem = document.querySelectorAll('.category__item')
const categoryItemText = document.querySelectorAll('.category__item__text')

burger.addEventListener('click', () => {
  if (closed.style.display !== 'none') {
    opened.style.display = 'block'
    closed.style.display = 'none'
    sidebar.classList.add('opened')
    burger.classList.add('opened')
    logo.classList.add('opened')
    logoText.classList.add('opened')
    categoryItem.forEach(el => {
      el.classList.add('opened')
    })
    categoryItemText.forEach(el => {
      el.classList.add('opened')
    })
  } else {
    opened.style.display = 'none'
    closed.style.display = 'block'
    sidebar.classList.remove('opened')
    burger.classList.remove('opened')
    logo.classList.remove('opened')
    logoText.classList.remove('opened')
    categoryItem.forEach(el => {
      el.classList.remove('opened')
    })
    categoryItemText.forEach(el => {
      el.classList.remove('opened')
    })
  }
})

//change header title when following links
const ulLinks = document.getElementById('category')
const headerTitle = document.getElementById('header__title')

ulLinks.addEventListener('click', (event) => {
  headerTitle.textContent = event.target.textContent
})
logo.addEventListener('click', () => {
  headerTitle.textContent = 'Каталог'
})
