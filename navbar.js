class MobileNavbar {
    constructor(menumobile, navList, navLinks) {
      this.menumobile = document.querySelector(menumobile);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.menumobile.classList.toggle(this.activeClass);
     
    }
  
    addClickEvent() {
      this.menumobile.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.menumobile) {
        this.addClickEvent();
        this.navList.style.display ="flex"

      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".menumobile",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();