<script setup>
import moment from 'moment';
import { useAppStore } from '../../stores/app';
import colors from 'tailwindcss/colors';
import { onMounted, onUnmounted, reactive } from 'vue';

const appStore = useAppStore();
appStore.view = 'RGridMap';

const startDate = moment('2010-08-23').startOf('year');
const today = moment();
const endDate = moment('2050-01-01').endOf('year');

const colorNames = Object.keys(colors);

const data = reactive([]);
let cursor = moment(startDate);
let currentYear;

const randomValue = (ls) => {
  return ls[Math.floor(Math.random() * ls.length)];
};

while (cursor.isBefore(endDate)) {
  const cursorYear = cursor.get('year');
  if (cursorYear !== currentYear) {
    data.push([]);
    currentYear = cursorYear;
  }

  const lastBatch = data[data.length - 1];

  lastBatch.push({
    from: moment(cursor).startOf('week').toDate(),
    to: moment(cursor).endOf('week').toDate(),
    color: cursor.isBefore(today) ? colors['gray']['300'] : false,
  });

  cursor = cursor.add(1, 'week');
}

const labels = {
  left: (i) => {
    const year = moment(startDate).add(i, 'years').get('year');
    if (year % 5 === 0) return year;
  },
};

const onSelect = (ls) => {
  console.log(ls);
};

let loop;
onMounted(() => {
  loop = setInterval(() => {
    const cell = randomValue(randomValue(data));
    cell.color = colors[randomValue(colorNames)]['500'];
  }, 1000);
});

onUnmounted(() => {
  clearInterval(loop);
});
</script>

<template>
  <RPanel>
    <RGridMap
      :data="data"
      class="text-[18px]"
      :labels="labels"
      @select="onSelect"
    ></RGridMap>
  </RPanel>
</template>
