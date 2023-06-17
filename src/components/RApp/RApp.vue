<script setup></script>

<template>
  <div class="bg-gray-100 antialiased">
    <div class="flex items-start">
      <slot name="left"></slot>

      <div>
        <slot name="top"></slot>
        <slot></slot>
        <slot name="bottom"></slot>
      </div>

      <slot name="right"></slot>
    </div>
  </div>
</template>
