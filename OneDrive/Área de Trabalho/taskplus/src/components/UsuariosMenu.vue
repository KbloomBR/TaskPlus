<template lang="pt-br">
  <div>
    <!-- Cabeçalho com menu -->
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

    <div 
      @mouseover="pauseAutoplay" 
      @mouseleave="resumeAutoplay" 
      class="carousel-wrapper"
    >
      <carousel ref="carousel" :perPage="1" :navigationEnabled="true">
        <slide v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Imagem do Carousel" />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        "https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+1",
        "https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+2",
        "https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+3", 
      ],
      autoplayInterval: null,
    };
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.$refs.carousel.goToPage((this.$refs.carousel.currentPage + 1) % this.images.length);
      }, 2500); 
    },
    pauseAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    resumeAutoplay() {
      this.startAutoplay();
    },
  },
  mounted() {
    this.startAutoplay(); 
  },
  beforeDestroy() {
    this.pauseAutoplay();
  },
};
</script>

<style lang="css">

body {
  background-color: rgb(0, 0, 0);
  background-repeat: no-repeat;
  background-size: cover;
  animation: fadein 1s;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

body#out {
  animation: fadeout 2s;
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.under {
  position: absolute;
  bottom: 0%;
  right: 1%;
  color: rgb(255, 255, 255);
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

.menu-buttons li {
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

.menu-buttons li:hover {
  background-color: #ffffff;
  border: 1px solid #000000;
}

.menu-buttons li:hover a {
  color: #000000;
}

.menu-buttons {
  overflow: hidden;
  max-width: 100%;
  border-bottom: none;
  color: rgb(0, 0, 0);
}

.carousel-wrapper {
  margin: 20px auto;
  max-width: 800px;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid #ffffff;
}

.carousel img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
