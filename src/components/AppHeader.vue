<script>
export default {
    data() {
        return {
            menu: [
                { title: "HOME", id: "home" },
                { title: "CONTATTI", id: "contacts" },
                { title: "PROGETTI", id: "projects" },
            ],
            isMenuOpen: false, // Stato per il controllo del menu
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    },
}
</script>

<template>
    <section class="header-menu">
        <!-- LOGO -->
        <div class="img-container">
            <img src="../assets/img/logo2.png" alt="business logo">
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
          <a href="#home"  @click.native="closeMenu" >Home</a>
          </li>
          <li
            class="me-3 element-text3"
            style="">
            <a href="#project" @click.native="closeMenu" >Progetti</a>
          </li>
          <li class="element-text4" style="">
            <a href="#contacts"  @click.native="closeMenu">Contattaci</a>
          </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
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
        max-width: 40%;
        filter: invert(50%) sepia(100%) saturate(500%) hue-rotate(180deg);
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

           a :active {
                color: aliceblue;
            }
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
            height: calc(100vh - 80px);
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            justify-content: center;
            align-items: center;
            text-align: center;
            opacity: 0;
            visibility: hidden;
            padding: 0;
            font-family: Comic Sans MS;

            &.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }

            li {
                margin: 20px 0;
            }
        }

        .img-container {
            width: 50%;
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
