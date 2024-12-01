<template lang="pt-br">
  <div>
    <header class="menu-container">
      <div class="menu-buttons">
        <nav class="main-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/contrato">Hire</router-link></li>
            <li><router-link to="/sobrenos">About Us</router-link></li>
            <li><router-link to="/cadastrar">Sign Up</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="slideshow-container">
      <img class="img" :src="images[currentIndex]" alt="Imagem do slideshow" width="450" height="450" />
    </div>
    <header class="btn-container">
      <div class="btn-buttons">
        <nav class="btn-menu">
          <ul>
            <button @click="prevImage">Anterior</button>
            <button class="btn-img" @click="nextImage">Próxima</button>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("../assets/gustavo.jpeg"),
        require("../assets/arthur.jpeg"),
        require("../assets/acordaian.jpeg"),
        require("../assets/albuquerque.jpeg"),
        require("../assets/veras.png"),
        require("../assets/henrique.jpeg"),
      ],
      currentIndex: 0,
    };
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style lang="css">
.slideshow-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.img {
  border: solid rgb(255, 255, 255) 3px;
  border-radius: 10px;
}

.menu-container {
  display: flex;
  justify-content: flex-end;
  color: rgb(0, 0, 0);
}

.menu-buttons ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  color: rgb(0, 0, 0);
}

.menu-buttons button {
  margin: 0 5px;
  padding: 0px 1px;
  cursor: pointer;
  background-color: #000000;
  border: 1px solid #ffffff;
  border-radius: 5px;
  transition: all 0.2s ease;
  color: white;
}

.menu-buttons a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  display: block;
  padding: 15px;
}

.menu-buttons button:hover {
  background-color: #ffffff;
  border: 1px solid #000000;
}

.menu-buttons button:hover a {
  color: #000000;
}

.menu-buttons {
  overflow: hidden;
  max-width: 100%;
  border-bottom: none;
  color: rgb(0, 0, 0);
}
</style>
