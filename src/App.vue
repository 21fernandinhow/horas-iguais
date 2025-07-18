<template>
  <v-app>
    <!-- Aqui você chama o seu componente de header -->
    <app-header />

    <v-main>
      <router-view />
    </v-main>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppHeader from "@/components/AppHeader.vue"; // IMPORTA o componente
import AppFooter from "./components/AppFooter.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppHeader, // REGISTRA para poder usar no template
    AppFooter,
  },
});
</script>
