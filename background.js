browser.browserAction.onClicked.addListener(async function (tab) {
  const { pathname } = await browser.storage.local.get(['pathname'])
  const url = new URL(tab.url)

  url.pathname = pathname || 'admin'

  browser.tabs.update(tab.id, { url: url.href })
})
