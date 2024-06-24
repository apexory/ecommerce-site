searchInput.addEventListener('keyup', (event) => {
    if(event.keyCode == 13) {
        if(event.target.value == '') return;
        window.location.href = `/?search=${event.target.value}`
    }
})