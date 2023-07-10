<script setup>
import { RButton, RHeading, RIconButton, RPanel } from '@rugo-vn/vue';
import ComponentViewTemplate from '../../components/ComponentViewTemplate.vue';
</script>

<template>
  <ComponentViewTemplate title="Button" :components="['RButton', 'RIconButton']">
    <template #row-1>
      <div class="-mb-2">
        <RHeading level="4" class="mb-2">Normal Button</RHeading>

        <p class="mb-4">
          <code>(size = "md") - default</code>
        </p>

        <RButton class="mr-2 mb-2" variant="primary" size="md">Primary Button</RButton>
        <RButton class="mr-2 mb-2" variant="secondary" size="md">Secondary Button</RButton>
        <RButton class="mr-2 mb-2" size="md">Default Button</RButton>
        <RButton class="mr-2 mb-2" variant="none" size="md">None Button</RButton>
        <RButton class="mr-2 mb-2" variant="success">Success Button</RButton>
        <RButton class="mr-2 mb-2" variant="danger">Danger Button</RButton>
        <RButton class="mr-2 mb-2" variant="info">Info Button</RButton>
        <RButton class="mr-2 mb-2" variant="warn">Warn Button</RButton>
      </div>
    </template>

    <template #row-2>
      <div class="-mb-2">
        <RHeading level="4" class="mb-2">Large Button</RHeading>

        <p class="mb-4">
          <code>(size = "lg")</code>
        </p>

        <RButton class="mr-2 mb-2" variant="primary" size="lg">Primary Button</RButton>
        <RButton class="mr-2 mb-2" variant="secondary" size="lg">Secondary Button</RButton>
        <RButton class="mr-2 mb-2" size="lg">Default Button</RButton>
        <RButton class="mr-2 mb-2" variant="none" size="lg">None Button</RButton>
        <RButton class="mr-2 mb-2" size="lg" variant="success">Success Button</RButton>
        <RButton class="mr-2 mb-2" size="lg" variant="danger">Danger Button</RButton>
        <RButton class="mr-2 mb-2" size="lg" variant="info">Info Button</RButton>
        <RButton class="mr-2 mb-2" size="lg" variant="warn">Warn Button</RButton>
      </div>
    </template>

    <template #row-3>
      <div class="-mb-2">
        <RHeading level="4" class="mb-2">Icon Button</RHeading>

        <p class="mb-4">
          <code>(size = "md") - default</code>
        </p>

        <RIconButton class="mr-2 mb-2" variant="primary" icon="PuzzlePieceIcon" />
        <RIconButton class="mr-2 mb-2" variant="secondary" icon="DocumentTextIcon" />
        <RIconButton class="mr-2 mb-2" icon="GiftIcon" />
        <RIconButton class="mr-2 mb-2" variant="none" icon="CommandLineIcon" />
        <RIconButton class="mr-2 mb-2" variant="success" icon="ChatBubbleBottomCenterIcon" />
        <RIconButton class="mr-2 mb-2" variant="danger" icon="StarIcon" />
        <RIconButton class="mr-2 mb-2" variant="info" icon="BriefcaseIcon" />
        <RIconButton class="mr-2 mb-2" variant="warn" icon="CreditCardIcon" />

        <p class="mt-2 mb-4">
          <code>(size = "lg")</code>
        </p>

        <RIconButton class="mr-2 mb-2" size="lg" variant="primary" icon="PuzzlePieceIcon" />
        <RIconButton class="mr-2 mb-2" size="lg" variant="secondary" icon="DocumentTextIcon" />
        <RIconButton class="mr-2 mb-2" size="lg" icon="GiftIcon" />
        <RIconButton class="mr-2 mb-2" size="lg" variant="none" icon="CommandLineIcon" />
        <RIconButton
          class="mr-2 mb-2"
          size="lg"
          variant="success"
          icon="ChatBubbleBottomCenterIcon"
        />
        <RIconButton class="mr-2 mb-2" size="lg" variant="danger" icon="StarIcon" />
        <RIconButton class="mr-2 mb-2" size="lg" variant="info" icon="BriefcaseIcon" />
        <RIconButton class="mr-2 mb-2" size="lg" variant="warn" icon="CreditCardIcon" />
      </div>
    </template>

    <template #row-4>
      <div class="-mb-2">
        <RHeading level="4" class="mb-2">Rounded Icon Button</RHeading>

        <p class="mb-4">
          <code>(size = "md") - default</code>
        </p>

        <RIconButton class="mr-2 mb-2 rounded-full" variant="primary" icon="PuzzlePieceIcon" />
        <RIconButton class="mr-2 mb-2 rounded-full" variant="secondary" icon="DocumentTextIcon" />
        <RIconButton class="mr-2 mb-2 rounded-full" icon="GiftIcon" />
        <RIconButton class="mr-2 mb-2 rounded-full" variant="none" icon="CommandLineIcon" />
        <RIconButton
          class="mr-2 mb-2 rounded-full"
          variant="success"
          icon="ChatBubbleBottomCenterIcon"
        />
        <RIconButton class="mr-2 mb-2 rounded-full" variant="danger" icon="StarIcon" />
        <RIconButton class="mr-2 mb-2 rounded-full" variant="info" icon="BriefcaseIcon" />
        <RIconButton class="mr-2 mb-2 rounded-full" variant="warn" icon="CreditCardIcon" />

        <p class="mt-2 mb-4">
          <code>(size = "lg")</code>
        </p>

        <RIconButton
          class="mr-2 mb-2 rounded-full"
          size="lg"
          variant="primary"
          icon="PuzzlePieceIcon"
        />
        <RIconButton
          class="mr-2 mb-2 rounded-full"
          size="lg"
          variant="secondary"
          icon="DocumentTextIcon"
        />
        <RIconButton class="mr-2 mb-2 rounded-full" size="lg" icon="GiftIcon" />
        <RIconButton
          class="mr-2 mb-2 rounded-full"
          size="lg"
          variant="none"
          icon="CommandLineIcon"
        />
        <RIconButton
          class="mr-2 mb-2 rounded-full"
          size="lg"
          variant="success"
          icon="ChatBubbleBottomCenterIcon"
        />
        <RIconButton class="mr-2 mb-2 rounded-full" size="lg" variant="danger" icon="StarIcon" />
        <RIconButton class="mr-2 mb-2 rounded-full" size="lg" variant="info" icon="BriefcaseIcon" />
        <RIconButton
          class="mr-2 mb-2 rounded-full"
          size="lg"
          variant="warn"
          icon="CreditCardIcon"
        />
      </div>
    </template>
  </ComponentViewTemplate>
</template>
