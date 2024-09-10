
<script>
export default {
  name: "LoadingPage",
};
</script>



<template>
    <div class="loading-page">
      <img src="../assets/img/logo2.png" alt="Logo" class="loading-logo" />
    </div>
  </template>


  <style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff; /* Puoi anche rendere trasparente il background */
  z-index: 9999;
}

.loading-logo {
  width: 200px;
  height: 100px;
  opacity: 0.7;
  animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
}
</style>