<script setup>
import { ref } from 'vue';
import TreeLoader from './TreeLoader.vue';

const props = defineProps(['node', 'load']);
/* the `node` should has:
 * - `id`
 * - `name`
 * - `parent`
 */

defineEmits(['clickNode']);

const children = ref([]);
const isShowed = ref(false);
const isLoading = ref(false);

const toggleNode = async () => {
  if (isShowed.value) {
    isShowed.value = false;
    return;
  }

  children.value = [];
  isShowed.value = true;

  if (props.node.children) {
    children.value = props.node.children;
  } else if (props.load) {
    isLoading.value = true;
    children.value = await props.load(props.node);
    isLoading.value = false;
  }
};

if (props.node.expanded) toggleNode();
</script>

<template>
  <div v-if="node">
    <div
      class="flex justify-between items-center px-2 select-none cursor-pointer"
    >
      <div class="mr-1 h-full">
        <slot
          name="heading"
          :toggleNode="toggleNode"
          :isShowed="isShowed"
          :node="node"
        >
          [<a
            class="text-primary-500 underline cursor-pointer"
            @click="toggleNode"
            >{{ isShowed ? 'Hide' : 'Show' }}</a
          >]
        </slot>
      </div>
      <div
        class="flex-1 hover:bg-secondary-100 px-2 py-1 mr-1"
        @click="$emit('clickNode', node)"
      >
        {{ node.name }}
      </div>
      <div>
        <slot
          name="ending"
          :toggleNode="toggleNode"
          :isShowed="isShowed"
          :node="node"
        >
          [<a
            class="text-primary-500 underline cursor-pointer"
            @click="toggleNode"
            >{{ isShowed ? 'Hide' : 'Show' }}</a
          >]
        </slot>
      </div>
    </div>

    <div v-if="isShowed" class="ml-2">
      <div v-if="isLoading" class="w-10 h-5 text-black">
        <svg
          version="1.1"
          id="L5"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 25 100 50"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
        >
          <circle fill="currentColor" stroke="none" cx="6" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 15 ; 0 -15; 0 15"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="currentColor" stroke="none" cx="30" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 10 ; 0 -10; 0 10"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="currentColor" stroke="none" cx="54" cy="50" r="6">
            <animateTransform
              attributeName="transform"
              dur="1s"
              type="translate"
              values="0 5 ; 0 -5; 0 5"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </div>

      <div
        v-for="item in children"
        :key="item.id"
        class="relative before:w-2 before:h-[1px] before:bg-secondary-300 before:block before:absolute before:top-3 before:left-0 after:w-[1px] after:h-[calc(0.75rem+1px)] after:bg-secondary-300 after:block after:absolute after:top-0 after:left-[-1px] last:border-transparent border-l border-secondary-300 pl-1 ml-2"
      >
        <TreeLoader
          :node="item"
          :load="load"
          :slots="$slots"
          @clickNode="$emit('clickNode', $event)"
        >
          <template
            #heading="{
              toggleNode: toggleNodeSecondary,
              isShowed: isShowedSecondary,
              node: nodeSecondary,
            }"
          >
            <slot
              name="heading"
              :toggleNode="toggleNodeSecondary"
              :isShowed="isShowedSecondary"
              :node="nodeSecondary"
            >
              [<a
                class="text-primary-500 underline cursor-pointer"
                @click="toggleNodeSecondary"
                >{{ isShowedSecondary ? 'Hide' : 'Show' }}</a
              >]
            </slot>
          </template>

          <template
            #ending="{
              toggleNode: toggleNodeSecondary,
              isShowed: isShowedSecondary,
              node: nodeSecondary,
            }"
          >
            <slot
              name="ending"
              :toggleNode="toggleNodeSecondary"
              :isShowed="isShowedSecondary"
              :node="nodeSecondary"
            >
              [<a
                class="text-primary-500 underline cursor-pointer"
                @click="toggleNodeSecondary"
                >{{ isShowedSecondary ? 'Hide' : 'Show' }}</a
              >]
            </slot>
          </template>
        </TreeLoader>
      </div>

      <div
        v-if="!isLoading && children.length === 0"
        class="text-xs italic text-gray-500 border text-center rounded p-.5"
      >
        Empty
      </div>
    </div>
  </div>
</template>
