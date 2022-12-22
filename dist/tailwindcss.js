// const icon = document.querySelector('.icon')
// const options = document.querySelector('.options')

// icon.addEventListener('click', () => {
//     if(options.classList.contains('hidden')){
//         options.classList.remove('hidden')
//         // options.classList.add('block')
//         console.log(options.classList)
//      }
//     else{
//         // options.classList.remove('block')
//         options.classList.add('hidden')
//         console.log('without hidden')
//     }
// })

// <svg class="w-10  relative top-40 right-80 mr-10  rounded-lg burger bg-red-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />     
//             </svg>
window.addEventListener('offline',(e) => {
    console.log(e)
})
const input = document.querySelector('.input')
input.addEventListener('focusin', () => {
    input.style.border = '1px solid green'
})

const p = document.querySelector('.error')
input.addEventListener('focusout', validation )
input.addEventListener('keypress', validation )



function validation(){
    console.log('focusing out')
    input.style.textTransform = 'capitalize'
    if(input.value == '' || input.value.length < 5){
        input.style.border = '1px solid red'
        p.textContent = 'an error has occured'
    }else if(input.value && input.value.length > 5 ){
        input.style.border = '1px solid blue'
        p.style.textTransform = 'capitalize'
        p.textContent = input.value
    }
}
window.addEventListener('dblclick', () => {
    p.textContent = ''
})