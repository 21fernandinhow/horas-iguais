<template>
  <v-footer color="#3c3c3c" dark>
    <v-container class="text-center">
      <span>
        Desenvolvido por
        <a
          href="https://tudoaqui.click/founder"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          Fernando Carvalho
        </a>
      </span>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer-link {
  font-weight: bold;
  text-decoration: none;
  color: inherit; /* mantém a cor do tema */
  transition: text-decoration 0.2s ease;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
