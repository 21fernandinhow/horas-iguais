<template>
  <v-container class="mt-5 mb-3">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 font-weight-bold mb-4">
          {{
            hourParam
              ? `${hourParam} - Significado e Mensagem`
              : "Hora não encontrada"
          }}
        </h2>
        <p v-if="hourData" class="subtitle-1" style="text-align: justify">
          {{ hourData.description }}
        </p>
        <p v-else class="subtitle-1 text-error">
          Não encontramos o significado para esta hora.
        </p>
      </v-col>
    </v-row>

    <hr style="margin: 2rem 0rem" />

    <v-row justify="end">
      <router-link to="/">
        <v-btn plain> Voltar </v-btn>
      </router-link>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

interface HourData {
  hour: string;
  description: string;
}

export default Vue.extend({
  name: "HourView",
  data() {
    return {
      hourData: null as HourData | null,
      hourParam: "",
    };
  },
  created() {
    this.hourParam = this.$route.params.hora; // pega o parâmetro da rota

    fetch("/data.json")
      .then(async (res) => {
        if (!res.ok) throw new Error("Erro na resposta da API");
        const data: HourData[] = await res.json();

        const found = data.find((item) => item.hour === this.hourParam);
        this.hourData = found || null;
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      });
  },
});
</script>
