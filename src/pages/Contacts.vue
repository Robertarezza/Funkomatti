<script>



import ContactForm from "../components/ContactForm.vue";
import { store } from "../store";

export default {
  components: {
 ContactForm,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
<div class="container">
  <h1 style="margin-top: 100px; font-size: 4rem; color: #f15048; max-width: min-content;" class="element-text1">Trasforma la tua immaginazione in realtà!</h1>
  <p class="animated-text" style="color: white; font-size: 1.5rem; margin-top: 20px;">
  Siamo qui per rendere unico il tuo mondo con quadretti 3D dei tuoi personaggi preferiti, stampe realistiche che li portano in vita e la personalizzazione dei tuoi Funko Pop! Hai un'idea? Contattaci e insieme daremo forma ai tuoi sogni!
</p>
  <div class="container mt-5 mb-5" style="border-top: 4px solid #f15048;">
  <div class="row mt-5">
    <!-- Colonna per il modulo -->
    <ContactForm />
  </div>
</div>
</div>
</template>

<style lang="scss" scoped>
//   animazione ingresso scritta principale
@-webkit-keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}

.element-text1 {
  -webkit-animation: bounce-in-right 1.5s both;
  animation: bounce-in-right 1.1s both; /* Per Safari e versioni più vecchie di Chrome */
}

.animated-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease-out forwards;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 768px) {
    .h1 {
        font-size: 2.5rem; 
        max-width: 100%; /* Imposta un valore percentuale corretto per max-width */
    }
  }
</style>
