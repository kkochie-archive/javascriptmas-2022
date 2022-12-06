// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

function getRandomNumberOfTacos() {
  /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */

  // Get random number of tacos between 1 - 10. Fill tray with 🌮.
  return Array(Math.floor(Math.random() * 10) + 1).fill(" 🌮 ")
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`
    })
    .join("")
}

document.getElementById("tray").innerHTML = putTacosOnTray()
