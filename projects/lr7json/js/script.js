const header = document.querySelector('header')
const section = document.querySelector('.hero-card-container')

const requestURL = 'https://semegenkep.github.io/json/example.json'

fetch(requestURL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    return response.json()
  })
  .then(data => {
    populateHeader(data)
    showHeroes(data)
  })
  .catch(error => console.error('Fetch error:', error))

function populateHeader(data) {
  const title = document.createElement('h1')
  title.textContent = data.squadName
  header.appendChild(title)

  const info = document.createElement('p')
  info.textContent = `Hometown: ${data.homeTown} | Formed: ${data.formed}`
  header.appendChild(info)
}

function showHeroes(data) {
  data.members.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('hero-card')

    const name = document.createElement('h2')
    name.textContent = member.name

    const details = document.createElement('p')
    details.textContent = `Age: ${member.age} | Secret Identity: ${member.secretIdentity}`

    const powers = document.createElement('ul')
    powers.textContent = 'Superpowers:'
    member.powers.forEach(power => {
      const li = document.createElement('li')
      li.textContent = power
      powers.appendChild(li)
    })

    card.appendChild(name)
    card.appendChild(details)
    card.appendChild(powers)

    section.appendChild(card)
  })
}
