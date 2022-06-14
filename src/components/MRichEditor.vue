<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'insertImage']);

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
  emit('insertImage', this.quill);
};

const onEditorReady = function(quill){
  quill.getModule("toolbar").addHandler("image", imageHandler);
  quill.root.setAttribute('spellcheck', false);
}

</script>

<template>
  <div class="m-rich-editor">
    <QuillEditor
      contentType="html"
      :options="editorOptions"
      :content="modelValue || ''"
      @update:content="event => $emit('update:modelValue', event)"
      @ready="onEditorReady($event)"
    />
  </div>
</template>

<style lang="scss">

.m-rich-editor {
  .ql-toolbar {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .ql-container {
    border-radius: 0 0 0.5rem 0.5rem;
    
    .ql-editor {
      font-family: PoppinsVN, sans-serif;;
      font-size: .825rem;
      max-height: 500px;
      padding: 0.75rem;

      img {
        max-width: 50%;
        margin: 1em auto;
        @apply border rounded-lg;
      }

      p {
        margin: 1em 0;
      }

      :first-child {
        margin-top: 0;
      }

      :last-child {
        margin-bottom: 0;
      }
    }
  }
}

</style>