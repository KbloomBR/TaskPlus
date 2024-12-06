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
    <p class="info">O site Task+ foi criado com o intuito de reunir pessoas com diferentes habilidades que estejam
         querendo ofertá-las, oferecendo serviços remunerados para pessoas que precisem de ajuda com problemas
          como: Infiltração, Infestação de insetos, Jardinagem, Pintura, Assentamento de piso, etc.
           A equipe criadora do site, MangueTown, se empenhou ao longo do ano para fazer essa plataforma
            que facilitará a vida de muitos, sempre pensando em formas de como ajudar o usuário com um
             design intuitivo e cores simples.
            </p>
    </div>
</template>
<script>
export default {};
</script>
<style lang="css">

.info {
  font-style: italic;
  font-weight: bolder;
  width: 30%;
  margin: 6% auto;
  padding: 20px;
  background-color: rgba(106, 106, 106, 0.421);
  border: solid 1px rgb(185, 173, 173);
  font-size: 22px;
  color: rgb(222, 222, 222);
  border-radius: 13px;
  text-align: center;
}

</style>
