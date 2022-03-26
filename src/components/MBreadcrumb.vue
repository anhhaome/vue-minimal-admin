<script setup>
defineProps(['items']);
defineEmits(['navigate']);
</script>

<template>
  <div class="inline-flex items-center">
    <component
      v-for="(item, index) in items"
      :is="item.href ? 'RouterLink' : 'a'"
      class="text-sm inline-flex items-center mactive:text-stone-400 dark:mactive:text-stone-500 cursor-pointer"
      :to="item.href"
      :active="item.active || null"
      :key="item.text"
      @click="$emit('navigate', item)"
    >
      <ion-icon
        class="mr-2"
        :name="index === 0 ? 'home' : 'chevron-forward'"
      ></ion-icon>
      <span v-if="item.text" class="mr-2">{{ item.text }}</span>
    </component>
  </div>
</template>
