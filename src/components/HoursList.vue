<template>
  <div>
    <hour-badge
      v-for="item in hoursData"
      :key="item.hour"
      :hour="item.hour"
      class="mr-3"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HourBadge from "@/components/HourBadge.vue";

interface HourData {
  hour: string;
  description: string;
}

export default Vue.extend({
  name: "HoursList",
  components: {
    HourBadge,
  },
  data() {
    return {
      hoursData: [] as HourData[],
    };
  },
  created() {
    fetch("/data.json")
      .then(async (res) => {
        if (!res.ok) throw new Error("Erro na resposta da API");
        const data = await res.json();
        this.hoursData = data;
      })
      .catch((err) => {
        console.error("Erro ao buscar dados:", err);
      });
  },
});
</script>
