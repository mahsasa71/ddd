let inputUser = document.querySelector('#userInput')
let inputPass = document.querySelector('#passInput')
let leftEye = document.querySelector('.lefteye')
let rightEye = document.querySelector('.righteye')
let form = document.querySelector('.f1')
let submitButton = document.querySelector('#sub')

let leftEyeLeft = 110
let leftEyeTop = 75
let leftEyePaddingTop = 0
let leftEyePaaddingLeft = 0

let rightEyeLeft = 175
let rightEyeTop = 75
let rightEyePaddingTop = 0
let rightEyePaaddingLeft = 0


let currentUserLook = 0

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

inputPass.addEventListener('blur',()=>{
    if(inputPass.value.length<10){
Toast.fire({
          title: "passwod must be 10 character at least",
  icon: "error"

})
    }
})

inputPass.addEventListener('focus', () => {
    console.log('pass focus')
    leftEyePaaddingLeft = 0
    rightEyePaaddingLeft = 0
    leftEye.style.paddingLeft = '0px'
    rightEye.style.paddingLeft = '0px'

    leftEye.style.top = leftEyeTop + 'px'
    leftEye.style.left = leftEyeLeft + 'px'
    rightEye.style.top = rightEyeTop + 'px'
    rightEye.style.left = rightEyeLeft + 'px'

    let eyePosition = setInterval(() => {
        if (leftEyeTop === 60) {
            clearInterval(eyePosition)
        }
        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'
        leftEyeTop--
        leftEyeLeft++
        rightEyeTop--
        rightEyeLeft--
    }, 10)
})

inputPass.addEventListener('blur', () => {
    console.log('pass blur')
    leftEyePaaddingLeft = 0
    rightEyePaaddingLeft = 0
    leftEye.style.paddingLeft = '0px'
    rightEye.style.paddingLeft = '0px'

    let eyePosition = setInterval(() => {
        if (leftEyeTop === 75) {
            clearInterval(eyePosition)
        }
        leftEye.style.top = leftEyeTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.top = rightEyeTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'
        leftEyeTop++
        leftEyeLeft--
        rightEyeTop++
        rightEyeLeft++
    }, 10)
})

inputUser.addEventListener('focus', () => {
    console.log('user focus')

    leftEyePaaddingLeft = currentUserLook
    rightEyePaaddingLeft = currentUserLook
    leftEye.style.paddingLeft = leftEyePaaddingLeft + 'px'
    rightEye.style.paddingLeft = rightEyePaaddingLeft + 'px'

    let eyePosition = setInterval(() => {
        if (leftEyePaddingTop === 10) {
            clearInterval(eyePosition)
        }
        leftEye.style.paddingTop = leftEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'
        leftEyePaddingTop++
        leftEyeLeft--
        rightEyePaddingTop++
        rightEyeLeft--
    }, 10)
})
inputUser.addEventListener('blur', () => {
    console.log('user blur')


    leftEye.style.paddingLeft = '0px'
    rightEye.style.paddingLeft = '0px'


    let eyePosition = setInterval(() => {
        if (leftEyePaddingTop === 0) {
            clearInterval(eyePosition)
        }
        leftEye.style.paddingTop = leftEyePaddingTop + 'px'
        leftEye.style.left = leftEyeLeft + 'px'
        rightEye.style.paddingTop = rightEyePaddingTop + 'px'
        rightEye.style.left = rightEyeLeft + 'px'
        leftEyePaddingTop--
        leftEyeLeft++
        rightEyePaddingTop--
        rightEyeLeft++
    }, 10)

if(inputUser.value.length<8){
Toast.fire({
      title: "userName must be 8 character at least",
  icon: "error"

});

}

})



inputUser.addEventListener('keydown', (e) => {
    console.log('user typing', e)


    if (e.keyCode !== 8 && leftEyePaaddingLeft > 20) return

    if (e.keyCode == 8) {
        leftEyePaaddingLeft = Math.max(0, leftEyePaaddingLeft - 1)
        rightEyePaaddingLeft = Math.max(0, rightEyePaaddingLeft - 1)
    } else {
        leftEyePaaddingLeft++
        rightEyePaaddingLeft++
    }

    currentUserLook = leftEyePaaddingLeft

    leftEye.style.paddingLeft = leftEyePaaddingLeft + 'px'
    rightEye.style.paddingLeft = rightEyePaaddingLeft + 'px'


    if (inputUser.value.length === 0) {
        leftEyePaaddingLeft = 0
        rightEyePaaddingLeft = 0
        currentUserLook = 0
        leftEye.style.paddingLeft = '0px'
        rightEye.style.paddingLeft = '0px'
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(inputPass.value.length<10 || inputUser.value.length<8){
        Toast.fire({
                      title: "please fill the form correctly!",
  icon: "error"

        })

    }else{
        Toast.fire({
                                  title: "you are logged in successfully!",
  icon: "success"
        })
    }
})

