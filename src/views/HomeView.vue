<template>
  <v-container class="mt-5">
    <v-row justify="center">
      <v-col cols="12">
        <p class="subtitle-1">
          As horas iguais sempre despertaram a curiosidade das pessoas, sendo
          associadas a mensagens especiais do universo, anjos ou sinais do
          destino. Aqui, você vai descobrir o significado por trás de cada
          horário e entender o que o seu momento atual pode estar tentando
          comunicar para você. Explore e conecte-se com esses sinais misteriosos
          que aparecem no seu dia a dia.
        </p>

        <hours-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import HoursList from "@/components/HoursList.vue";
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    HoursList,
  },
});
</script>
