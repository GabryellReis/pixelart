const root = document.getElementById("root");
const ul = document.querySelector(".container");
const p = document.getElementById("range");
const range = document.getElementById("size");
const colors = document.querySelector('#palet');
const eraser = document.querySelector('.eraser') 

eraser.value = "#ffffff"
eraser.addEventListener('click', () => {
  localStorage.setItem('currentColor', eraser.value)
})

range.addEventListener("change", () => {
  p.innerText = `Sua pixel art tem ${range.value}x${range.value} pixels`;
});

p.innerText = `Sua pixel art tem ${range.value}x${range.value} pixels`;


function createColors() {
  let color = "";
  for (let i = 0; i < 3; i += 1) {
    const hexaGen = Math.floor(Math.random() * 100);
    color += hexaGen;
  }
  return color;
}
createColors();

function generatePalet() {
  colors.innerHTML = ' '
  for(let i = 0; i < 6; i += 1) {
    const colorPalet = document.createElement('input');
    colorPalet.setAttribute('type', 'color')
    colorPalet.value = `#${createColors()}`
    colorPalet.addEventListener('click', () => {
      localStorage.setItem('currentColor', colorPalet.value)
    })
    colorPalet.addEventListener('change', () => {
      localStorage.setItem('currentColor', colorPalet.value)
    })
    colors.appendChild(colorPalet)
  }
}
generatePalet(  )

function criarPixelList() {
  ul.innerHTML = " ";
  ul.style.setProperty("--size", range.value);
  for (let i = 0; i < range.value * range.value; i += 1) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    div.addEventListener('click', () => {
      const local = localStorage.getItem('currentColor')
      div.style.background = local
    })
    ul.appendChild(div);
  }
}
criarPixelList()
