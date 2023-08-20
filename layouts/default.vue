<template>
  <div class="h-full w-full">
    <LayoutHeader />
    <div class="flex h-full items-start overflow-y-auto">
      <LayoutSidebar class="w-20 p-4" />
      <slot />
    </div>
  </div>
</template>
