<script setup>
import { ref } from "vue";

import MPanel from "../../components/MPanel.vue";
import MDialog from "../../components/MDialog.vue";
import MLink from "../../components/MLink.vue";
import MButton from "../../components/MButton.vue";

const demoContent = `
<h1 class="text-2xl">This is a dialog</h1>
<p class="my-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus quam, malesuada in lectus at, finibus pharetra ante. Donec eget augue libero. Praesent feugiat eleifend dui, eget suscipit lectus gravida nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut commodo leo, efficitur rutrum metus. Phasellus malesuada nunc non magna ultrices, quis scelerisque sem sodales. Aliquam nec tincidunt tortor. Integer aliquet sagittis erat, vitae commodo odio suscipit ut. In hac habitasse platea dictumst. Suspendisse elementum ligula a neque semper egestas.
</p>
<p class="my-4">
  Cras feugiat magna id leo ullamcorper, in commodo tortor tristique. Praesent facilisis nisi et lectus dictum, eu aliquet elit aliquam. Aenean dignissim, ligula quis rhoncus dignissim, felis sapien ultrices risus, non aliquam leo odio sit amet libero. Sed a neque facilisis, tempor mi nec, dictum mi. Vivamus id velit sed neque aliquet volutpat a ut libero. Aenean non libero ut magna iaculis maximus. Pellentesque ac magna scelerisque, efficitur justo a, vestibulum felis. Etiam iaculis eget orci at tempor. In quis orci in lacus tempor sodales et venenatis metus. Integer efficitur gravida risus, vel ornare turpis aliquam vestibulum. Curabitur metus tellus, tincidunt in molestie pretium, mattis eu ipsum. Curabitur facilisis molestie augue eu pretium. Sed auctor, nibh id pretium vestibulum, odio dolor pellentesque quam, sit amet blandit ligula metus eget dui. Pellentesque ac elit eget turpis dictum venenatis.
</p>
<p class="my-4">
  Vestibulum ullamcorper mi sed vestibulum tempus. Nulla quis iaculis justo. Praesent facilisis porttitor risus, non posuere mi fermentum a. Vestibulum vel lectus ut magna mollis accumsan. In orci dui, interdum ac condimentum quis, consectetur ac tellus. Nunc sollicitudin mauris consequat, pellentesque neque ut, lacinia urna. Sed laoreet laoreet leo, nec sagittis ligula ultrices vel. Donec id sagittis odio.
</p>
<p class="my-4">
  Nulla enim quam, finibus vitae pharetra non, malesuada vel leo. Quisque ultrices augue nunc, sit amet sodales risus commodo quis. Cras dictum ante quis urna sagittis, vitae ullamcorper enim aliquam. Sed vel fermentum risus. In semper sed massa non elementum. Vivamus convallis imperdiet libero a mollis. Donec eget lobortis odio. Praesent rutrum dui at vehicula auctor. Duis convallis vehicula nibh, vitae lobortis velit rutrum ut. Nulla semper libero vitae maximus dictum.
</p>
<p class="my-4">
  Nullam in ipsum sapien. Vestibulum nibh arcu, tincidunt sed justo non, lobortis malesuada est. In porttitor mauris quis consequat aliquet. Praesent bibendum iaculis ultrices. Integer tincidunt ante et mi luctus, eget ullamcorper augue laoreet. Pellentesque ante mi, elementum sed sapien sed, ultricies faucibus lacus. Nam id ante nisl. Aenean fermentum neque nulla, ac fermentum eros ultricies nec. Nulla faucibus nunc vulputate euismod congue. Etiam ac enim sed justo bibendum vehicula ut eu magna. Nunc congue tempor velit non tincidunt. Curabitur non massa sit amet mauris bibendum auctor. Pellentesque gravida tortor ac ex auctor scelerisque.
</p>
<p class="my-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus quam, malesuada in lectus at, finibus pharetra ante. Donec eget augue libero. Praesent feugiat eleifend dui, eget suscipit lectus gravida nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut commodo leo, efficitur rutrum metus. Phasellus malesuada nunc non magna ultrices, quis scelerisque sem sodales. Aliquam nec tincidunt tortor. Integer aliquet sagittis erat, vitae commodo odio suscipit ut. In hac habitasse platea dictumst. Suspendisse elementum ligula a neque semper egestas.
</p>
<p class="my-4">
  Cras feugiat magna id leo ullamcorper, in commodo tortor tristique. Praesent facilisis nisi et lectus dictum, eu aliquet elit aliquam. Aenean dignissim, ligula quis rhoncus dignissim, felis sapien ultrices risus, non aliquam leo odio sit amet libero. Sed a neque facilisis, tempor mi nec, dictum mi. Vivamus id velit sed neque aliquet volutpat a ut libero. Aenean non libero ut magna iaculis maximus. Pellentesque ac magna scelerisque, efficitur justo a, vestibulum felis. Etiam iaculis eget orci at tempor. In quis orci in lacus tempor sodales et venenatis metus. Integer efficitur gravida risus, vel ornare turpis aliquam vestibulum. Curabitur metus tellus, tincidunt in molestie pretium, mattis eu ipsum. Curabitur facilisis molestie augue eu pretium. Sed auctor, nibh id pretium vestibulum, odio dolor pellentesque quam, sit amet blandit ligula metus eget dui. Pellentesque ac elit eget turpis dictum venenatis.
</p>
<p class="my-4">
  Vestibulum ullamcorper mi sed vestibulum tempus. Nulla quis iaculis justo. Praesent facilisis porttitor risus, non posuere mi fermentum a. Vestibulum vel lectus ut magna mollis accumsan. In orci dui, interdum ac condimentum quis, consectetur ac tellus. Nunc sollicitudin mauris consequat, pellentesque neque ut, lacinia urna. Sed laoreet laoreet leo, nec sagittis ligula ultrices vel. Donec id sagittis odio.
</p>
<p class="my-4">
  Nulla enim quam, finibus vitae pharetra non, malesuada vel leo. Quisque ultrices augue nunc, sit amet sodales risus commodo quis. Cras dictum ante quis urna sagittis, vitae ullamcorper enim aliquam. Sed vel fermentum risus. In semper sed massa non elementum. Vivamus convallis imperdiet libero a mollis. Donec eget lobortis odio. Praesent rutrum dui at vehicula auctor. Duis convallis vehicula nibh, vitae lobortis velit rutrum ut. Nulla semper libero vitae maximus dictum.
</p>
<p class="my-4">
  Nullam in ipsum sapien. Vestibulum nibh arcu, tincidunt sed justo non, lobortis malesuada est. In porttitor mauris quis consequat aliquet. Praesent bibendum iaculis ultrices. Integer tincidunt ante et mi luctus, eget ullamcorper augue laoreet. Pellentesque ante mi, elementum sed sapien sed, ultricies faucibus lacus. Nam id ante nisl. Aenean fermentum neque nulla, ac fermentum eros ultricies nec. Nulla faucibus nunc vulputate euismod congue. Etiam ac enim sed justo bibendum vehicula ut eu magna. Nunc congue tempor velit non tincidunt. Curabitur non massa sit amet mauris bibendum auctor. Pellentesque gravida tortor ac ex auctor scelerisque.
</p>
<p class="my-4">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus quam, malesuada in lectus at, finibus pharetra ante. Donec eget augue libero. Praesent feugiat eleifend dui, eget suscipit lectus gravida nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam ut commodo leo, efficitur rutrum metus. Phasellus malesuada nunc non magna ultrices, quis scelerisque sem sodales. Aliquam nec tincidunt tortor. Integer aliquet sagittis erat, vitae commodo odio suscipit ut. In hac habitasse platea dictumst. Suspendisse elementum ligula a neque semper egestas.
</p>
<p class="my-4">
  Cras feugiat magna id leo ullamcorper, in commodo tortor tristique. Praesent facilisis nisi et lectus dictum, eu aliquet elit aliquam. Aenean dignissim, ligula quis rhoncus dignissim, felis sapien ultrices risus, non aliquam leo odio sit amet libero. Sed a neque facilisis, tempor mi nec, dictum mi. Vivamus id velit sed neque aliquet volutpat a ut libero. Aenean non libero ut magna iaculis maximus. Pellentesque ac magna scelerisque, efficitur justo a, vestibulum felis. Etiam iaculis eget orci at tempor. In quis orci in lacus tempor sodales et venenatis metus. Integer efficitur gravida risus, vel ornare turpis aliquam vestibulum. Curabitur metus tellus, tincidunt in molestie pretium, mattis eu ipsum. Curabitur facilisis molestie augue eu pretium. Sed auctor, nibh id pretium vestibulum, odio dolor pellentesque quam, sit amet blandit ligula metus eget dui. Pellentesque ac elit eget turpis dictum venenatis.
</p>
<p class="my-4">
  Vestibulum ullamcorper mi sed vestibulum tempus. Nulla quis iaculis justo. Praesent facilisis porttitor risus, non posuere mi fermentum a. Vestibulum vel lectus ut magna mollis accumsan. In orci dui, interdum ac condimentum quis, consectetur ac tellus. Nunc sollicitudin mauris consequat, pellentesque neque ut, lacinia urna. Sed laoreet laoreet leo, nec sagittis ligula ultrices vel. Donec id sagittis odio.
</p>
<p class="my-4">
  Nulla enim quam, finibus vitae pharetra non, malesuada vel leo. Quisque ultrices augue nunc, sit amet sodales risus commodo quis. Cras dictum ante quis urna sagittis, vitae ullamcorper enim aliquam. Sed vel fermentum risus. In semper sed massa non elementum. Vivamus convallis imperdiet libero a mollis. Donec eget lobortis odio. Praesent rutrum dui at vehicula auctor. Duis convallis vehicula nibh, vitae lobortis velit rutrum ut. Nulla semper libero vitae maximus dictum.
</p>
<p class="my-4">
  Nullam in ipsum sapien. Vestibulum nibh arcu, tincidunt sed justo non, lobortis malesuada est. In porttitor mauris quis consequat aliquet. Praesent bibendum iaculis ultrices. Integer tincidunt ante et mi luctus, eget ullamcorper augue laoreet. Pellentesque ante mi, elementum sed sapien sed, ultricies faucibus lacus. Nam id ante nisl. Aenean fermentum neque nulla, ac fermentum eros ultricies nec. Nulla faucibus nunc vulputate euismod congue. Etiam ac enim sed justo bibendum vehicula ut eu magna. Nunc congue tempor velit non tincidunt. Curabitur non massa sit amet mauris bibendum auctor. Pellentesque gravida tortor ac ex auctor scelerisque.
</p>
`;

const customDialogHandler = ref(null);
const handleDialogClick = function () {
  customDialogHandler.value.show();
};
</script>

<template>
  <h1 class="text-3xl mt-4 font-semibold">Dialog</h1>

  <MPanel>
    <h2 class="text-xl mb-2">Simple</h2>

    <div class="mb-4">
      <MDialog>
        <div v-html="demoContent"></div>
      </MDialog>
    </div>

    <h2 class="text-xl mb-2">Nested</h2>

    <div class="mb-4">
      <MDialog>
        <MDialog>
          <MDialog>
            <MDialog>
              <div v-html="demoContent"></div>
            </MDialog>

            <div v-html="demoContent"></div>
          </MDialog>
        </MDialog>
      </MDialog>
    </div>

    <h2 class="text-xl mb-2 mt-8">Props</h2>

    <div class="mb-4">
      <MDialog label="Custom label for open dialog" variant="secondary">
        <div v-html="demoContent"></div>
      </MDialog>
    </div>

    <h2 class="text-xl mb-2 mt-8">Slots</h2>

    <div class="mb-4">
      <MDialog
        :disableHotKey="true"
      >
        <template #open="openProps">
          <MLink @click="openProps.click()">Custom open slot</MLink>
        </template>

        <div v-html="demoContent"></div>
      </MDialog>
    </div>

    <h2 class="text-xl mb-2 mt-8">Programatic</h2>

    <div class="mb-4">
      <MButton variant="success" @click="handleDialogClick"
        >Open dialog from another position</MButton
      >

      <MDialog :label="false" ref="customDialogHandler">
        <div v-html="demoContent"></div>
      </MDialog>
    </div>
  </MPanel>
</template>
