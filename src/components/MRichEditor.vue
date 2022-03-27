<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { onMounted } from 'vue';
import { ref } from 'vue';

defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'insertImage']);

const editor = ref(null);

const editorOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], 
      [{ header: 1 }, { header: 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
      ['image']
    ]
  }
}

const imageHandler = function(){
  emit('insertImage', editor.value.getQuill());
};

const onEditorReady = function(quill){
  quill.getModule("toolbar").addHandler("image", imageHandler);
}

onMounted(() => {
  const quill = editor.value.getQuill();
  quill.root.setAttribute('spellcheck', false);
});

</script>

<template>
  <QuillEditor
    class="m-rich-editor"
    ref="editor"
    contentType="html"
    :options="editorOptions"
    :content="modelValue"
    @update:content="event => $emit('update:modelValue', event)"
    @ready="onEditorReady($event)"
  />
</template>

<style lang="scss">

.m-rich-editor {
  .ql-editor {
    font-family: PoppinsVN, sans-serif;;
    font-size: .825rem;
    max-height: 500px;
  }
}

</style>