<script setup lang="ts">
interface Props {
  data?: any // FIXME: any
  title: string
  to: string // TODO: route path type
  all?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="category">
    <div class="head" :class="all && 'justify-start'">
      <p class="title">
        {{ title }}
      </p>
      <UButton
        v-if="!all && (data?.length ?? 0) > 4"
        trailing
        variant="soft"
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
    @apply flex justify-between items-start;

    .title {
        @apply md:text-xl font-medium;
    }
  }
  .content {
    @apply py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4;
  }
}
</style>
