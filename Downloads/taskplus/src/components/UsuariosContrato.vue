<template lang="pt-br">
  <div>
    <header class="menu-container">
      <div class="menu-buttons">
        <nav class="main-menu">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/contrato">Hire</router-link></li>
            <li><router-link to="/sobrenos">About Us</router-link></li>
            <!-- <li><router-link to="/cadastrar">Sign Up</router-link></li> -->
          </ul>
        </nav>
      </div>
    </header>

    <div class="slideshow-container">
      <transition :name="transitionName">
        <img
          key="image-{{ currentIndex }}"
          class="img"
          :src="images[currentIndex]"
          alt="Imagem do slideshow"
          @click="openModal(currentIndex)"
          width="450"
          height="450"
        />
      </transition>
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

    <transition name="modal">
      <div v-if="isModalVisible" class="modal-overlay">
        <div class="modal-content">
          <h3>{{ personInfo[currentIndex].name }}</h3>
          <ul>
            <li v-for="(info, index) in personInfo[currentIndex].descriptionList" :key="index">
              {{ info }}
            </li>
          </ul>
          <button class="hire-btn">Contratar</button>
          <button class="close-btn" @click="closeModal">Fechar</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/images/encanador.png",
        "images/personaltrainer.jpeg",
        "/images/barbeiro.jpeg",
        "/images/kyuhayatolouco.jpg",
      ],
      personInfo: [
        {
          name: "Jonathan Medeiros",
          descriptionList: [
            "32 anos",
            "Encanador",
            "7 anos de experiência na área",
            "Pretensão Salarial: R$1700,00",
          ],
        },
        { name: "Douglas Cardoso", descriptionList: [
          "27 anos",
          "Personal Trainer",
          "3 anos de experiência na área",
          "Pretensão Salarial: R$600,00",
        ] },
        { name: "Charles Xaves", descriptionList: [
          "29 anos",
          "Barbeiro",
          "9 anos de experiência na área",
          "Valores no perfil",
            ] },
        { name: "Ewerson Alves", descriptionList: [
          "26 anos",
          "Programador",
          "4 anos de experiência na área",
          "Pretensão Salarial: R$2200,00",
        ] },
      ],
      currentIndex: 0,
      isModalVisible: false,
      direction: "next",
    };
  },
  methods: {
    nextImage() {
      this.direction = "next";
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.direction = "prev";
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    openModal(index) {
      this.currentIndex = index;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style lang="css">
.slideshow-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.img {
  border: solid rgb(255, 255, 255) 3px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.img:hover {
  transform: scale(1.05);
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.btn-buttons button {
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  transition: background-color 0.2s;
}

.btn-buttons button:hover {
  background-color: #fff;
  color: #000;
}

.modal-enter-active,
.modal-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from {
  transform: scale(0.8);
  opacity: 0;
}

.modal-leave-to {
  transform: scale(0.8);
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
}

.modal-content ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.modal-content ul li {
  padding: 4px 0;
  font-size: 20px;
}

.hire-btn {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-btn {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
