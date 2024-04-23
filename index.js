import {data} from './data.js'

const services = document.querySelectorAll('.services li')
const ham = document.querySelector('.ham');
const aside = document.querySelector('.aside');
const xmark = document.querySelector('.xmark')
const subLinks = document.querySelector('.sub-links')


ham.addEventListener('click',()=>{
   aside.classList.add('show')
})
xmark.addEventListener('click', () => {
  aside.classList.remove('show')

})

subLinks.innerHTML=`${data.map((item)=>{
    return `<div class="level ">
    ${item.level}
    <div class="level-container">
    ${item.links
      .map((link) => {
        return `
        
            <div class="level-item ">
             <span>${link.icon}</span>
             <span>${link.linksName}</span>
             </div>
           
           
      `
      })
      
      .join('')}
      </div>
    </div>`
}).join('')}`

console.log(subLinks.innerHTML)


// mouse over effect

 


 