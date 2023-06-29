<script setup>
import { useForm } from 'vee-validate'

const props = defineProps({
  value: { type: Object }
})

const emit = defineEmits(['submit'])
const { resetForm, submitForm, handleSubmit } = useForm({
  initialValues: props.value || {}
})

const onSubmit = handleSubmit((values) => {
  emit('submit', values)
})
</script>

<template>
  <form @submit="onSubmit">
    <slot :reset="resetForm" :submit="submitForm"></slot>
  </form>
</template>
