const githubUserTime = require('github-user-time')

const API_TOKEN = '6753c641fa1530'

search.addEventListener('click', () => {
  name = username.value

  if (!name) return

  info.innerHTML = ''

  githubUserTime(name, API_TOKEN)
    .then(res => {
      info.innerHTML = `${res.timezone} ${res.time}`
    })
    .catch(error => {
      alert(error.message)
    })
})
