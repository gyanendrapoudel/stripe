import { data } from './data.js'

const services = document.querySelectorAll('.services li')

const ham = document.querySelector('.ham')
const aside = document.querySelector('.aside')
const xmark = document.querySelector('.xmark')
const subLinks = document.querySelector('.sub-links')
const subnav = document.querySelector('.subnav')
const header = document.querySelector('.header')
const hero = document.querySelector('.hero')



ham.addEventListener('click', () => {
  aside.classList.add('show')
})
xmark.addEventListener('click', () => {
  aside.classList.remove('show')
})

//  Creating HTML for content inside hamburger menu 

subLinks.innerHTML = `${data
  .map((item) => {
    return `<div class="level ">
    ${item.level}
    <div class="level-container">
    ${item.links
      .map((link) => {
        return `
        
            <div class="level-item">
             <span>${link.icon}</span>
             <span>${link.linksName}</span>
             </div>
           
           
      `
      })

      .join('')}
      </div>
    </div>`
  })
  .join('')}`

// console.log(subLinks.innerHTML)

//  mouseover effect on main menu 

// console.log(services)
services.forEach((service)=>{
  // console.log(service)
  service.addEventListener('mouseover',function(){
    subnav.classList.add('showSubmenu')
  })
})



// removing mouse over effect on hero section 

hero.addEventListener('mouseover',function(){
    subnav.classList.remove('showSubmenu')
})



// removing mouse over effect on header section expect on link of nav
header.addEventListener('mouseover',function(e){
  if (!e.target.classList.contains("js-service")) {
       subnav.classList.remove('showSubmenu')
  }
})

