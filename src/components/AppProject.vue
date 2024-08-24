<script>
import { store } from "../store";

import AppCardHome from "../components/AppCardHome.vue";
console.log(store);

export default {
  components: {

    AppCardHome,
  },
  data() {
    return {
      store,
      currentIndex: 0,
    };
  },
  computed: {},
  methods: {
    nextImage() {
    if (this.store.projects.length) {
      this.currentIndex = (this.currentIndex + 1) % this.store.projects.length;
    }
  },
  prevImage() {
    if (this.store.projects.length) {
      this.currentIndex = (this.currentIndex - 1 + this.store.projects.length) % this.store.projects.length;
    }
  }
}
};
</script>

<template>
   <div class="carousel" id="project">
      <div class="list bg-none" >
            <div v-for="(project, index) in store.projects" :key="index" class="item" :class="{ active: currentIndex === index, previous: (currentIndex - 1 + store.projects.length) % store.projects.length === index, next: (currentIndex + 1) % store.projects.length === index }">
              <div class="cont-img">
              <img :src="project.img" alt="Carosello Immagine"  class="immagini"/>
            </div>
            </div>
      </div>
        <div class="list-text bg-none" >
               <div v-for="(project, index) in store.projects" :key="index" class="item" :class="{ active: currentIndex === index, previous: (currentIndex - 1 + store.projects.length) % store.projects.length === index, next: (currentIndex + 1) % store.projects.length === index }">
                <div class="content ">
                  <h2 class="title">{{ project.title }}</h2>
                  <p class="text">{{ project.text }}</p>
              </div>
            </div>
       </div>
      </div>   
<!-- Controlli del Carosello -->
        <div class="arrows mb-5">
            <i class="fa-solid fa-circle-arrow-left prev"  @click="prevImage"></i>
           <i class="fa-solid fa-circle-arrow-right next" @click="nextImage"></i>
          </div>
        
</template>

<style lang="scss" scoped >
.carousel {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.list,
.list-text {
  position: relative;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item,
.item-text {
  position: absolute;
  width: 500px;
  height: 100%;
  transition: all 3s cubic-bezier(0, 0, 0.2, 1);
  overflow: hidden;
  opacity: 0;
}

.cont-img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Copre interamente il contenitore */
  transition: transform 0.3s ease;
}

.item.active,
.item-text.active {
  opacity: 1;
  transform: scale(1);
  z-index: 2;
}

.item.previous
 {
  left: 45%;
  opacity: 0.8;
  transform: scale(0.5);
  z-index: 1;
}

// .item-text.previous {
//   left: 45%;
//   opacity: 0;
//   transform: scale(0.5);
//   z-index: 1;
// }

.item.next,
.item-text.next {
  right: 45%;
  opacity: 0.5;
  transform: scale(0.5);
  z-index: 1;
}


.content {
  text-align: center;
  padding: 0 20px;
}

.title {
  font-size: 2rem;
  color: #f15048;
  margin-bottom: 0.5rem;
}

.text {
  font-size: 1.2rem;
  color: #333;
  color: #f15048;
}

.arrows {
  display: flex;
  justify-content: center;
  background-color: transparent;
  transform: translateY(-50%);
}

.arrows i {
  background-color: #f15048;
  cursor: pointer;
  font-size: 2rem;
  color: white;
  border-radius: 50%;
  margin: 0 10px;
}

@media (max-width: 768px) {
  .carousel {
    height: 70vh;
  }

  .item,
  .item-text {
    width: 80%;
    height: 100%;
  }

  .item.previous,
  .item-text.previous {
    left: 30%;
    transform: scale(0.4);
  }

  .item.next,
  .item-text.next {
    right: 30%;
    transform: scale(0.4);
  }
}

@media (max-width: 425px) {
  .item,
  .item-text {
    width: 60%;
    height: 100%;
  }

  .item.previous,
  .item-text.previous {
    left: 40%;
    transform: scale(0.3);
  }

  .item.next,
  .item-text.next {
    right: 40%;
    transform: scale(0.3);
  }
}


</style>