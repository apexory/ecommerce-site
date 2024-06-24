document.addEventListener('click', (event) => {
    if(event.target.parentNode.id == 'sortMenu' && event.target.tagName == 'P') {
        let spanTag = event.target.parentNode.parentNode.getElementsByTagName('span')[0]
        spanTag.textContent = event.target.textContent + ' -'; 
        event.target.parentNode.style.opacity = 0; event.target.parentNode.style.zIndex = -1;
    }

    if(event.target.parentNode.id == 'sort' && event.target.tagName == 'SPAN') {
        let sort = event.target.parentNode.getElementsByTagName('div')[0]
        if(getComputedStyle(sort).opacity == 0) {sort.style.opacity = 1; sort.style.zIndex = 1
        } else { sort.style.opacity = 0; sort.style.zIndex = -1 }
    }
})
