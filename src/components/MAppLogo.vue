<script setup>
defineProps(['icon', 'text', "size", "responsive"]); // null, 'lg'
</script>

<template>
  <div class="flex items-center overflow-hidden justify-center">
    <img
      :class="`${size === 'lg' ? 'w-10 h-10' : 'w-7 h-7'}`"
      alt="Mintailor Logo Only"
      :src="icon"
    />
    <img
      :class="`${size === 'lg' ? 'ml-4 h-9' : 'ml-4 h-6'} w-auto
      ${responsive ? 'md:group-mactive:hidden' : ''}
      dark:invert`"
      alt="Mintailor Text Only"
      :src="text"
    />
  </div>
</template>
