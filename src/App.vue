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
    };
  },
  mounted() {
    // Aggiungi un listener per verificare quando la finestra è completamente caricata
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loading = false; // Nasconde la pagina di caricamento dopo 1 secondo
      }, 3000); // Simula il caricamento di risorse con un timeout di 1 secondo
    });
  },
};
</script>

<template>
  <div>
    <!-- Mostra la pagina di caricamento se loading è true -->
    <Loadingpage v-if="loading" />
    
    <!-- Se il caricamento è completo, mostra il contenuto dell'app -->
    <div v-else class="background-container">
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
