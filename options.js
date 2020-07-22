document.addEventListener('DOMContentLoaded', async function () {
  const { pathname } = await browser.storage.local.get(['pathname'])

  document.querySelector("#pathname").value = pathname || null
})

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault()

  await browser.storage.local.set({
    pathname: document.querySelector("#pathname").value
  })

  document.querySelector('.alert').classList.remove('d-none')
})
