<template>
  <button
    ref="button"
    :class="['button', size, variant]"
    :disabled="disabled"
    :type="type"
  >
    <BaseSpinner :size="size" v-if="loading" />
    <slot v-else />
  </button>
</template>

<script lang="ts" setup>
const button = ref<HTMLElement | null>(null);
const loading = ref(false);

const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'constract';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }>(),
  {
    disabled: false,
    size: 'md',
    variant: 'primary',
    type: 'button',
  }
);

const disabled = ref(props.disabled);

const focus = () => button.value?.focus();

const setLoad = (load = false) => {
  loading.value = load;
  disabled.value = load;
};

defineExpose({
  focus,
  setLoad,
});
</script>

<style lang="postcss" scoped>
.button {
  @apply inline-flex items-center justify-center rounded-md border border-transparent font-semibold transition-all outline-none focus:ring-offset-black focus:ring-2 focus:ring-offset-2 active:scale-90 disabled:cursor-not-allowed disabled:opacity-75 disabled:active:scale-100;

  &.sm {
    @apply px-2.5 py-2 text-xs;
  }

  &.md {
    @apply px-3 py-2.5 text-sm;
  }

  &.lg {
    @apply px-4 py-2.5 text-sm;
  }

  &.primary {
    @apply bg-primary text-white shadow-sm hover:opacity-80 focus:ring-primary;
  }

  &.secondary {
    @apply bg-primary/20 text-white/80 shadow-sm hover:bg-primary/30 focus:ring-primary/20;
  }

  &.constract {
    @apply border border-black/10 bg-white/20 text-white shadow-sm hover:opacity-80 focus:ring-black/10;
  }
}
</style>
