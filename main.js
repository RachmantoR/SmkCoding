window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("bg-nav-down", this.window.scrollY > 0)
})