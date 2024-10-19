<script>
export default {
  data() {
    return {
      isMenuOpen: false,  // Per aprire/chiudere il menu
      activeLink: 'home', // Per tracciare il link attivo
      sectionIds: ['home', 'project', 'contacts'], // Id delle sezioni da osservare
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll); // Aggiungi evento scroll
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll); // Rimuovi evento scroll
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    
    closeMenu(link) {
      this.activeLink = link; // Aggiorna il link attivo quando viene cliccato
      this.isMenuOpen = false;
    },
    
    scrollToSection(sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        // Animazione manuale dello scroll
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth' // Scroll animato
        });
      }
    },
    
    onScroll() {
      const sections = this.sectionIds.map(id => document.getElementById(id)); // Sezioni da osservare
      const windowScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Se la sezione è visibile a metà nello schermo
        if (windowScrollY >= sectionTop - windowHeight / 2 && windowScrollY < sectionTop + sectionHeight) {
          this.activeLink = section.id; // Aggiorna il link attivo
        }
      });
    },
  },
};
</script>

<template>
    <section class="header-menu">
        <!-- LOGO -->
        <div class="img-container">
            <img src="../assets/img/logo-5.png" alt="business logo">
        </div>
        
        <!-- HAMBURGER ICON -->
        <div class="hamburger-menu" @click="toggleMenu">
            <div :class="{ 'bar1': true, 'change': isMenuOpen }"></div>
            <div :class="{ 'bar2': true, 'change': isMenuOpen }"></div>
            <div :class="{ 'bar3': true, 'change': isMenuOpen }"></div>
        </div>

        <!-- MENU LIST ITEM -->
        <ul class="menu-list align-items-center" :class="{ 'active': isMenuOpen }">
          <li class="me-3 element-text2">
            <a href="#home" 
               :class="{ active: activeLink === 'home' }" 
               @click.native="closeMenu('home')">Home</a>
          </li>
          <li class="me-3 element-text3">
            <a href="#project" 
               :class="{ active: activeLink === 'project' }" 
               @click.native="closeMenu('project')">Progetti</a>
          </li>
          <li class="element-text4">
            <a href="#contacts" 
               :class="{ active: activeLink === 'contacts' }" 
               @click.native="closeMenu('contacts')">Contattaci</a>
          </li>
        </ul>
  
    </section>
</template>

<style lang="scss" scoped>

.menu-list a {
  text-decoration: none;
  color: black;
}

.menu-list a.active {
  text-decoration: underline;
  color: aliceblue;
}

.header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    position: fixed;
    width: 100%;
    z-index: 100;
    /* background-color: #054a59; */
    padding: 0 20px;
    font-family: Comic Sans MS;
    backdrop-filter: blur(30px);
    box-shadow: 0 0 30px rgba(227, 228, 237, 0.37);

    .img-container {
        width: 50%;
    }

    img {
        max-width: 11%;
       // filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(180deg);
    }

    .hamburger-menu {
        display: none;  // Sarà visibile solo sui dispositivi mobili
        flex-direction: column;
        cursor: pointer;
        margin-right: 20px;

        .bar1, .bar2, .bar3 {
            width: 25px;
            height: 3px;
            background-color: #333;
            margin: 5px 0;
            transition: 0.4s;
        }

        &.change .bar1 {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        &.change .bar2 {
            opacity: 0;
        }

        &.change .bar3 {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }

    ul {
        display: flex;
        margin-bottom: 0;
        list-style: none;

        li {
            margin: 0 10px;
            color: #f15048;
            font-weight: 800;
            text-decoration: none;
        }

        a {
            color: #f15048;
            font-weight: 600;
        }
          a:active,
          a:focus {
            text-decoration: underline;
                color: aliceblue;
            }
            
       
    }

    @media (max-width: 765px) {
        .hamburger-menu {
            display: flex; // Rendi l'icona hamburger visibile su schermi piccoli
        }

        ul {
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background-color: #054a59;
            width: 100%;
            height: calc(100vh - 458px);
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            justify-content: center;
            align-items: center;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            padding: 0;
            font-family: Comic Sans MS;
            align-content: center;

            &.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }

            li {
                margin: 20px 0;
                text-align: center;
                
               
            }
     
        }

        .img-container {
            width: 50%;
        }
        .element-text2 {
       // border-right: 4px solid white; 
        padding-right: 0px; 
        font-size: 1.5rem;
        margin: 0;
    }
    .element-text3 {
       // border-right: 4px solid white; 
        padding-right: 0px; 
        font-size: 1.5rem;
        margin: 0;
    }
    .element-text4 {
       // border-right: 4px solid white; 
        padding-right: 0px; 
        font-size: 1.5rem;
        margin: 0;
    }
    }
}

.element-text1 {
       max-width: min-content; 
       font-size: 5rem; 
       color: #f15048;
       font-family: Comic Sans MS;
    }

    .list_home {
        list-style-type: none; 
        color: #f15048;
        font-family: Comic Sans MS;
    }

    .element-text2 {
       // border-right: 4px solid white;
         padding-right: 30px; 
         font-size: 1.5rem
    }

    .element-text2:hover {
      color: white;
    }
    .element-text3 a:hover {
      color: white;
    }
    .element-text4:hover {
      color: white;
    }


    .element-text4 {
        font-size: 1.5rem
    }

    .element-text3 {
       // border-right: 4px solid white; 
        padding-right: 30px; 
        font-size: 1.5rem
    }

    a {
        text-decoration: none;
    }
</style>
