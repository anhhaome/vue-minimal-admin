<script setup>
defineProps({
  data: true
});
</script>
<template>
  <pre>{{ JSON.stringify(data, 0, 2) }}</pre>
</template>
