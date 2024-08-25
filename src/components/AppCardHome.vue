<script>
import { store } from "../store";


export default {
  components: {

  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
    <div v-for="(item, index) in store.CardHome" :key="index" class="col-md-5 col-xs-6 mb-3">
      <div class="card p-3 rounded element-class">
        <i :class="[item.icon, 'animated-icon']" style="font-size: xxx-large"></i>
        <p class="mt-4">{{ item.title }}</p>
        <p style="text-align: center">{{ item.text }}</p>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  
  .card {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 298px;
    width: 80%;
    flex-wrap: wrap;
    background-color: #333333;
    color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  // Animazione icon
  @-webkit-keyframes text-shadow-pop-bottom {
    0% {
      text-shadow: 0 0 #555555;
      -webkit-transform: translateY(0);
              transform: translateY(0);
    }
    100% {
      text-shadow: 0 8px #555555;
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
    }
  }
  
  @keyframes text-shadow-pop-bottom {
    0% {
      text-shadow: 0 0 #555555;
      transform: translateY(0);
    }
    100% {
      text-shadow: 0 8px #555555;
      transform: translateY(-8px);
    }
  }
  
  .element-class:hover .animated-icon {
    animation: text-shadow-pop-bottom 0.5s forwards;
    -webkit-animation: text-shadow-pop-bottom 0.5s forwards;
  }
  </style>
  