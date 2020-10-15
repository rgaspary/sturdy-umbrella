console.log('this');

document.addEventListener("keydown", function (e) {
  if (e.which === 123) {
    require('remote').getCurrentWindow().toggleDevTools();
  } else if (e.which === 116) {
    location.reload();
  }
});

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})