<script setup>
import logoOnly from "../assets/images/logo-only.svg";
import textOnly from "../assets/images/text-only.svg";

defineProps(["size", "responsive"]); // null, 'lg'
</script>

<template>
  <div class="flex items-center overflow-hidden justify-center">
    <img
      :class="`${size === 'lg' ? 'w-10 h-10' : 'w-7 h-7'}`"
      :src="logoOnly"
      alt="Mintailor Logo Only"
    />
    <img
      :class="`${size === 'lg' ? 'ml-4 h-9' : 'ml-4 h-6'} w-auto
      ${responsive ? 'md:group-mactive:hidden' : ''}
      dark:invert`"
      :src="textOnly"
      alt="Mintailor Text Only"
    />
  </div>
</template>
