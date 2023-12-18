const loginForm = document.querySelector('.login-form')
// const inp_username = document.querySelector('#username')
// const inp_password = document.querySelector('#password')

loginForm.addEventListener('submit', hdlLogin)


// โจทย์ : ให้สร้าง code เพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form ดังนี้
// 1. ทุก input ต้องไม่ใส่ค่าว่าง
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร


// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง เพื่อใส่ค่าอีกครั้ง
// ถ้า validate ผ่านให้ไปที่ https://www.example.com

const validateInput= (inputObj) => {
  console.log(inputObj)
}

const hdlLogin = e => {
  e.preventDefault()
  console.log(loginForm.elements)
  let allInput = loginForm.elements
  let inputObj = {}
  for(let el of loginForm.elements) {
    inputObj[el.id] = el.value
  }
  validateInput(inputObj)

  // console.log(allInput[0].value)
  // console.log(allInput['username'].id)
  // console.log(allInput['username'].value)
  
  // console.log(allInput['role'].id)
  // console.log(allInput['role'].value)
  // console.log(inp_username.value)
  // console.log(inp_password.value)
  
}

