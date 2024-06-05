<template>
  <component :is="icon" :width="size" :height="size" :fill="color" />
</template>

<script>
import { icons } from "../icons";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: "black",
    },
  },
  created() {
    debugger;
  },
  computed: {
    icon() {
      debugger;
      return icons[this.name] || null;
    },
  },
};
</script>

<style scoped>
/* Add any styles if necessary */
</style>
