
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
  <h1>关于我们</h1>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
