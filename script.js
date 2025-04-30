const ImgColections = document.querySelectorAll('.images img')
const PopupImg = document.querySelector('.popup img')
const Popup = document.querySelector('.popup')
const PopupSpan = document.querySelector('.popup span')
const Rightarrow = document.querySelector('.arrow.right')
const leftArrow = document.querySelector('.arrow.left')

let count = 0

function openImg() {
  ImgColections.forEach((img, index) => {
    img.onclick = () => {
      Popup.style.display = 'block'
      PopupImg.src = img.getAttribute('src')
      count = index
    }
  })
}
function closeImg() {
  PopupSpan.onclick = () => {
    Popup.style.display = 'none'
  }
}

Rightarrow.onclick = () => {
  if (count < ImgColections.length - 1) {
    count++
    console.log(count)
    PopupImg.src = ImgColections[count].src
  }
}

leftArrow.onclick = () => {
  if (count > 0) {
    count--
    PopupImg.src = ImgColections[count].src
  }
}

openImg()
closeImg()
