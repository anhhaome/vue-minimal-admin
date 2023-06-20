<script setup></script>

<template>
  <div class="bg-gray-100 text-gray-500 antialiased min-w-screen min-h-screen">
    <div class="flex items-start">
      <slot name="left"></slot>

      <div class="w-full">
        <slot name="top"></slot>
        <slot></slot>
        <slot name="bottom"></slot>
      </div>

      <slot name="right"></slot>
    </div>
  </div>
</template>
