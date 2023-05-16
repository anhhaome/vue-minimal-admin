<script setup>
import IconLockup from '../../components/IconLockup.vue';
import { useAppStore } from '../../stores/app';

const appStore = useAppStore();
appStore.view = 'RTree';

const root = { name: 'Simple Root Node', level: '1' };
const tree = {
  name: 'Simple Root Node',
  level: '1',
  children: [
    {
      id: 1,
      name: `Child Node #1.1`,
      level: '1.1',
    },
    {
      id: 2,
      name: `Child Node #1.2`,
      level: '1.2',
    },
  ],
  expanded: true,
};

const delay = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 500));

const load = (node) =>
  delay([
    {
      id: 1,
      name: `Child Node #${node.level}.1`,
      level: node.level + '.1',
    },
    {
      id: 2,
      name: `Child Node #${node.level}.2`,
      level: node.level + '.2',
    },
  ]);

const doAction = (action, node) => {
  alert(`Do "${action}" at ${node.name}`);
};
</script>

<template>
  <RPanel>
    <RHeading type="h3">Simple</RHeading>

    <RTree :node="root" :load="load"></RTree>

    <RHeading class="mt-4" type="h3">Custom Head Slot</RHeading>

    <RTree :node="tree" @clickNode="doAction('click', $event)">
      <template #heading="{ toggleNode, isShowed }">
        <button
          :class="`text-sm rounded-md px-[.15rem] flex items-center justify-center`"
          :variant="isShowed ? 'secondary' : 'primary'"
          @click="toggleNode"
        >
          <IconLockup :name="isShowed ? `chevron-down` : `chevron-forward`" />
        </button>
      </template>

      <template #ending>
        <div></div>
      </template>
    </RTree>

    <RHeading class="mt-4" type="h3">Custom End Slot</RHeading>

    <RTree :node="root" :load="load" @clickNode="doAction('click', $event)">
      <template #ending="{ toggleNode, isShowed, node }">
        <RButton
          class="text-sm w-[1.5rem!important] h-[1.5rem!important] rounded-md p-[0!important] items-center justify-center"
          :variant="isShowed ? 'secondary' : 'primary'"
          @click="toggleNode"
        >
          <IconLockup :name="isShowed ? `eye-off` : `eye`" />
        </RButton>

        <RButton
          class="text-sm w-[1.5rem!important] h-[1.5rem!important] rounded-md p-[0!important] items-center justify-center ml-2"
          variant="info"
          @click="doAction('move up', node)"
        >
          <IconLockup name="chevron-up" />
        </RButton>

        <RButton
          class="text-sm w-[1.5rem!important] h-[1.5rem!important] rounded-md p-[0!important] items-center justify-center ml-2"
          variant="info"
          @click="doAction('move down', node)"
        >
          <IconLockup name="chevron-down" />
        </RButton>

        <RButton
          class="text-sm w-[1.5rem!important] h-[1.5rem!important] rounded-md p-[0!important] items-center justify-center ml-2"
          variant="danger"
          @click="doAction('delete', node)"
        >
          <IconLockup name="trash" />
        </RButton>
      </template>
    </RTree>
  </RPanel>
</template>
