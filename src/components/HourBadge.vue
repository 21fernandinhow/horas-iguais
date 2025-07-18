<template>
  <router-link :to="`/hora/${hour}`" class="hour-badge">
    {{ hour }}
  </router-link>
</template>

<script lang="ts">
export default {
  name: "HourBadge",
  props: {
    hour: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.hour-badge {
  display: inline-block;
  background-color: #e0e0e0;
  color: #333;
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}
.hour-badge:hover {
  background-color: #cfcfcf;
}
</style>
