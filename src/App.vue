<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import Loadingpage from './components/Loadingpage.vue'; // Importa la pagina di caricamento
import { ref, onMounted } from 'vue'; // Importa ref e onMounted per gestire lo stato

export default {
  components: {
    AppHeader,
    AppFooter,
    Loadingpage, // Aggiungi LoadingPage ai componenti
  },
  data() {
    return {
      store,
      loading: true, // Stato di caricamento iniziale
      isVisible: true, // Stato di visibilità della loading page
    };
  },
  mounted() {
    // Simula un tempo di caricamento
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false; // Nasconde il contenuto della loading page
        setTimeout(() => {
          this.isVisible = false; // Dopo la transizione, rimuovi la loading page dal DOM
        }, 1000); // 1 secondo di transizione
      }, 2000); // Simula un caricamento di 2 secondi
    });
  },
};
</script>


<template>
  <div>
    <!-- Passa isVisible come prop al componente LoadingPage -->
    <Loadingpage :isVisible="isVisible" />

    <!-- Mostra il contenuto dell'app dopo che il caricamento è completato -->
    <div v-if="!loading" class="background-container">
      <AppHeader />
      <main>
        <router-view></router-view>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss">
.background-container {
  min-height: 100vh;
  background-image: url('../src/assets/img/sfondo53.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
