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

 //Creating HTML for content inside hamburger menu 

subLinks.innerHTML = `${data
  .map((item) => {
    return `<div class="level ">
    ${item.level}
    <div class="level-container">

     ${
    item.links
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






//  mouseover effect on main menu 

// console.log(services)
services.forEach((service)=>{
  // console.log(service)
  service.addEventListener('mouseover',function(e){
    subnav.classList.add('showSubmenu')
    const text = e.target.textContent
    const textPos = e.target.getBoundingClientRect()
   
    console.log(textPos)
    // DOMRect {x: 593.3125, y: 19.1875,.. according to target > depending on where you are hovering

    const x = textPos.x-textPos.width;
    //  left position for that target
    const y = textPos.top + textPos.height + 10
    // top position  for  that target
     console.log(x)
    // making submenu dynamic 
    subnav.style.left = `${x}px`
    subnav.style.top = `${y}px`

    
    const navItem = data.find(({level})=>level===text);
  
    const {level, links} = navItem
    let subnavHTML;
    if(links){
        subnav.classList.add('showSubmenu')
        subnavHTML = links.map((link)=>{
        return `<div class="subnav-link">
                  <span>${link.icon}</span>
                  <span>${link.linksName}</span>
                </div>`
      }).join('')
     

      if(links.length===2){
      subnav.classList.add('col2')
    }

     if (links.length === 3) {
         if(subnav.classList.contains('col2')){
          subnav.classList.remove('col2');
         }
       subnav.classList.add('col3')
     }
    
    subnav.innerHTML = subnavHTML
 

    } else{
      // if there is pricing  and it does not have other links then this works
     subnav.classList.remove('showSubmenu')
    }
    
    

  })


})


// removing mouse over effect on hero section 

hero.addEventListener('mouseover',function(){
    subnav.classList.remove('showSubmenu')
    console.log('hello from hero')
})



// removing mouse over effect on header section expect on link of nav
header.addEventListener('mouseover',function(e){
  if (!e.target.classList.contains("js-service")) {
       subnav.classList.remove('showSubmenu')
         console.log('hello from heder')
  }

})

