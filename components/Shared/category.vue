<script setup lang="ts">
import type { RouteRecordName } from '~/types'

interface Props {
  length: number
  title: string
  to: RouteRecordName
  all?: boolean
}

withDefaults(defineProps<Props>(), {
  length: 0,
})
</script>

<template>
  <div class="category">
    <div class="head">
      <p class="title">
        {{ title }}
      </p>
      <UButton
        v-if="!all && length > 4"
        trailing
        variant="link"
        color="gray"
        icon="i-ph-arrow-right"
        v-bind="{ to }"
      >
        Daha Fazla
      </UButton>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.category {
  @apply w-full;

  .head {
    @apply flex gap-2 items-start;

    .title {
        @apply md:text-lg font-medium;
    }
  }
  .content {
    @apply py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
  }
}
</style>
