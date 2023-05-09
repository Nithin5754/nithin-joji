// open hamburger menu mobile section
const openEl=document.querySelector('.hamburger-open')

const mobileSection=document.querySelector('.mobile-section-list')
const closeel=document.querySelector('.close-hamburger')



openEl.addEventListener('click',()=>{
  mobileSection.classList.toggle('hidden')
})

// close btn mobile section

closeel.addEventListener('click',()=>{
  mobileSection.classList.toggle('hidden')
})


// mobile list

const mobileLists=document.querySelectorAll('.mobile-list');

mobileLists.forEach((mobilelist)=>{
  mobilelist.addEventListener('click',()=>{
    mobileSection.classList.toggle('hidden')
  })
})


const filtercomponents=(filter)=>{
  const components=document.querySelectorAll('.components');
  components.forEach((component)=>{
    if(filter==='all'){
      component.style.display='block';
    }else if( component.classList.contains(filter)){
      component.style.display='block';
    }else{
      component.style.display='none';
    }
  })
}

const defaultFilter='clone';
filtercomponents(defaultFilter)
const filterBtns=document.querySelectorAll('.filter-btn');
filterBtns.forEach((filterBtn)=>{
  filterBtn.addEventListener('click',(e)=>{
    const filter=e.target.dataset.filter;
    filtercomponents(filter);
  })
})



// about-me-skills-eucation-experience
const getaboutme=(filter)=>{
  const componentlists =document.querySelectorAll('.componentlist')
  componentlists.forEach((componentlist)=>{
   if(componentlist.classList.contains(filter)){
    componentlist.style.display='block';
   }else{
    componentlist.style.display='none'
   }
  })
}
const defaultlist='skills';
getaboutme(defaultlist)
const filterLists=document.querySelectorAll('.fliter-list')
filterLists.forEach((filterlist)=>{
  filterlist.addEventListener('click',(e)=>{
  const  filter=e.target.dataset.filter;
     getaboutme(filter);
  })
})