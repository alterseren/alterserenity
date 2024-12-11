const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')

const style = document.createElement('style')
style.innerHTML = `
  .burger.open span:nth-child(1) { transform: translateY(11px) rotate(45deg); }
  .burger.open span:nth-child(2) { opacity: 0; }
  .burger.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
  .nav.open { display: flex; }
`
document.head.appendChild(style)

burger.addEventListener('click', () => {
  nav.classList.toggle('open')
  burger.classList.toggle('open')
})

const modal = document.getElementById('contact-modal')
const openModalBtn = document.getElementById('open-modal')
const closeModalBtn = document.querySelector('.modal-close')

openModalBtn.addEventListener('click', e => {
  e.preventDefault()
  modal.style.display = 'flex'
})

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})

// Масив об'єктів для карток
const cardsData = [
  {
    title: 'Оптимізація звітів про помилки',
    description:
      'Дозвольте людям швидко подавати звіти про помилки, не турбуючись про складні деталі проблеми.',
    image: 'img/card-sm.png',
    alt: 'Bug template',
  },
  {
    title: 'Стандартизуйте запити операцій',
    description:
      'Налаштуйте шаблони з конкретними інструкціями, заповнюваними за паролями.',
    image: 'img/card-sm4.png',
    alt: 'KYC request',
  },
  {
    title: 'Створіть ІТ-довідкову службу',
    description:
      'Перетворіть будь-яке повідомлення в #ask-IT-канал в IT-квиток, реагуючи 🛠 emoji.',
    image: 'img/card-sm2.png',
    alt: 'IT ticket',
  },
  {
    title: 'Підвищення успіху клієнтів',
    description:
      'Додавайте лінійні запити до сильних каналів Slack, щоб отримати максимальну віддачу важливим клієнтам.',
    image: 'img/card-sm5.png',
    alt: 'Thread',
  },
  {
    title: 'Централізуйте прийом запитів на дані',
    description:
      'Ефективніше керуйте запитами та запитаннями до команди Data Science.',
    image: 'img/card-sm3.png',
    alt: 'Data science request',
  },
  {
    title: 'Керуйте запитами відділу кадрів',
    description:
      'Створюйте приватні запити через DM для конфіденційних запитів, доступ до яких має лише ви та ваша команда.',
    image: 'img/card-sm6.png',
    alt: 'Private Ask',
  },
]

// Функція для створення картки
function createCard(card) {
  const cardDiv = document.createElement('div')
  cardDiv.classList.add('card-sm')
  cardDiv.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <img src="${card.image}" alt="${card.alt}">
    `
  return cardDiv
}

function renderCards(cards) {
  const container = document.getElementById('cards-container')
  const columnsCount = 3
  const columns = Array.from({ length: columnsCount }, () =>
    document.createElement('div')
  )
  columns.forEach(column => column.classList.add('column-cards-sm'))
  cards.forEach((card, index) => {
    columns[index % columnsCount].appendChild(createCard(card))
  })

  columns.forEach(column => container.appendChild(column))
}

renderCards(cardsData)

// свайпер

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 3,
    },
  },
})
