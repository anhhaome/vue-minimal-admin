<script setup>
import uniqid from 'uniqid';
import katex from 'katex';
import Quill from 'quill';
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue';

const DELAY_INPUT = 500;

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'insertImage']);

const localId = uniqid();
let quill;

const createDelayCall = () => {
  let timeout;
  let lastArgs;

  return (fn, now = false, ...args) => {
    if (now && timeout) {
      fn(...(args.length ? args : lastArgs));
      clearTimeout(timeout);
      return;
    }

    clearTimeout(timeout);
    lastArgs = args;

    timeout = setTimeout(() => {
      clearTimeout(timeout);
      fn(...args);
    }, DELAY_INPUT);
  };
};

const imageHandler = function () {
  emit('insertImage', (url) => {
    quill.focus();
    nextTick(() => {
      const selection = quill.getSelection();
      quill.insertEmbed(selection ? selection.index : 0, 'image', url);
    });
  });
};

const setHTML = (html) => {
  // render formula
  const newDiv = document.createElement('div');
  newDiv.innerHTML = html;
  for (const child of newDiv.querySelectorAll('.ql-formula')) {
    katex.render(child.getAttribute('data-value'), child);
  }

  if (quill) quill.root.innerHTML = newDiv.innerHTML;
};

const getHTML = () => {
  const raw = quill?.root.innerHTML ?? '';

  // remove formula
  const newDiv = document.createElement('div');
  newDiv.innerHTML = raw;
  for (const child of newDiv.querySelectorAll('.ql-formula'))
    child.innerHTML = child.getAttribute('data-value');

  for (const img of document.querySelectorAll('img')) {
    if (img.nextSibling && img.nextSibling.tagName === 'EM') {
      img.setAttribute('alt', img.nextSibling.innerText);
    } else {
      img.removeAttribute('alt');
    }
  }

  return newDiv.innerHTML;
};

const delayCall = createDelayCall();
const handleTextChange = () =>
  delayCall(() => {
    const raw = getHTML();
    console.log(raw);
    emit('update:modelValue', raw);
  });

const setContents = (content = '') => {
  setHTML(content);
};

onMounted(() => {
  quill = new Quill(`#${localId}`, {
    theme: 'snow',
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike', 'code'],
        [{ header: 1 }, { header: 2 }, 'code-block'],
        [{ align: '' }, { align: 'center' }, { align: 'right' }],
        [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
        ['image', 'formula'],
      ],
    },
  });

  setContents(props.modelValue);

  quill.getModule('toolbar').addHandler('image', imageHandler);

  quill.on('text-change', handleTextChange);

  quill.root.setAttribute('spellcheck', false);
});

onBeforeUnmount(() => {
  quill = null;
  document.getElementById(localId).innerHTML = '';
});

const syncValue = () => {
  if (getHTML() !== props.modelValue) {
    setHTML(props.modelValue || '');
  }
};

watch(() => [props.modelValue], syncValue);

nextTick(() => {
  syncValue();
});
</script>

<template>
  <div class="r-rich-editor">
    <div :id="localId"></div>
  </div>
</template>
