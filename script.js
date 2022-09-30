const form = document.querySelector('form')

form.addEventListener("submit", e => {
  e.preventDefault()
  
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value

  console.log(`Email: ${email}`, `Password: ${password}`)
})