const nav = document.querySelector('nav')

const blackList = ['example', 'w3schools']

const aClick = e => {
  // ถ้าใครเข้า link ที่เป็น blacklist ให้ alert('Stop') แล้วไปที่ wikipedia แทน
  // ถ้าไม่ตรง blacklist ให้ไปตามปกติ
  e.preventDefault()
  console.log(e.target.href)
  let foundItem = blackList.find(el => e.target.href.includes(el))
  if(!foundItem) {
    return location.assign(e.target.href) 
  }
  alert(`Stop to go ${foundItem}`)
  window.location.assign('https://wikipedia.org')
}

for(let el of nav.children) {
    el.addEventListener('click', aClick)
}