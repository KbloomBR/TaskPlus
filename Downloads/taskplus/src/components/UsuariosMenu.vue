<template lang="pt-br">
  <div>
    <header class="menu-container">
      <div class="menu-buttons">
        <nav class="main-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/contrato">Hire</router-link></li>
            <li><router-link to="/sobrenos">About Us</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="header-section">
      <h1 class="display-1 text-center body-bg font-weight-bolder">TASKPLUS</h1>
      <h2 class="text-center font-weight-bolder">Venha conhecer diferentes tipos de pessoas e serviços!</h2>
    </div>

    <div class="carousel-wrapper">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        controls
        indicators
        fade
        :interval="2000"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="Saude"
          img-src="/images/motoristaparticular.jpg"
          class="carousel-container"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Serviços de casa"
          img-src="/images/eletricista.jpg"
          class="carousel-container"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Saúde"
          img-src="/images/personaltrainer.jpeg"
          class="carousel-container"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0
    }
  },
  methods: {
    onSlideStart() {
      // Optional method for slide start event
    },
    onSlideEnd() {
      // Optional method for slide end event
    }
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;700&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: black;
  font-family: 'Open Sans', sans-serif;
}

h1 {
  color: #198754;
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(25, 135, 84, 0.5);
}

h2 {
  font-family: 'Montserrat', sans-serif;
  color: #ffffff;
  font-size: 1.5rem;
  letter-spacing: 1px;
}

.header-section {
  margin-bottom: 4rem;
  padding: 2rem 0;
}

.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

#app {
  min-height: 100vh;
}

.menu-container {
  display: flex;
  justify-content: flex-end;
}

.menu-buttons ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.menu-buttons li {
  margin: 0 5px;
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

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 400px;
  overflow: hidden;
  background-color: #000;
  border-radius: 10px;
  text-align: center;
}

.carousel-container img {
  margin: auto;
  height: 100%;
  object-fit: contain;
}
</style>