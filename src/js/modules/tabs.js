import { active } from "browser-sync";

const tabs = (headerSelector, tabSelector, contentSelector, activeClass)=>{

const header = document.querySelector(headerSelector),
      tab = documentdocument.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

const hideTabContent = ()=>{
content.forEach(item=>{
    item.style.display = 'none';
});

tab.forEach(item=>{
    item.classList.remove(activeClass);
});
};

const showTabContent = (i=0)=>{
   content[i].style.display= 'block';
   tab[i].classList.add(activeClass);
};

hideTabContent();
showTabContent();

header.addEventListener ('click', (e)=>{
const target = e.target;
if(target.classList.contains(tabSelector.replace(/\./, ""))|| 
target.parentNode.classList.contains(tabSelector.replace(/\./, "")
){
    

}

});


};

export default tabs;