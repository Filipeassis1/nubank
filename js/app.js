function scrollHeader() {
    const nav = document.getElementById('header');
    
    if (nav) { 
        
        // Verifica se o elemento existe
        if (window.scrollY >= 50) {
            nav.classList.add('active-header');
        } else {
            nav.classList.remove('active-header');
        }
    }
}

window.addEventListener('scroll', scrollHeader);
