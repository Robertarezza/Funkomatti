<script>
export default {
    data() {
        return {
            menu: [
                { title: "HOME", routeName: "home" },
                { title: "CONTACTS", routeName: "contacts" },
                { title: "ABOUT", routeName: "about" },
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
            <li v-for="item in menu" :key="item.routeName">
                <router-link 
                    :to="{ name: item.routeName }" 
                    class="nav-link p-3" 
                    @click.native="closeMenu">
                    {{ item.title }}
                </router-link>
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
    //background-color: white;
    //box-shadow: 2px 2px 10px #888888;
   background-color: #054a59;
    //border-radius: 20px;
    padding: 0 20px;
   // margin-top: 20px;

    .img-container {
        width: 50%;
        //line-height: 75px;
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
            
           
        }
        
        .router-link-active {
            color: rgb(174, 174, 187);
            font-weight: 600;
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
            right: 0;
            background-color: white;
            width: 100%;
            height: calc(100vh - 80px);
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;

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
</style>
