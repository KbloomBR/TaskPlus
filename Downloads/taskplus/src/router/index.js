import UsuariosMenu from "@/components/UsuariosMenu.vue";
import UsuariosContrato from "@/components/UsuariosContrato.vue";
import UsuariosCadastrar from "@/components/UsuariosCadastro.vue";
import SobreNos from "@/components/SobreNos.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: UsuariosMenu,
  },
  {
    path: "/contrato",
    component: UsuariosContrato,
  },
  {
    path: "/cadastrar",
    component: UsuariosCadastrar,

  },
  {
    path: "/sobrenos",
    component: SobreNos
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});


export default router;
