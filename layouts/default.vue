<template>
  <LayoutHeader />
  <div class="grid grid-cols-3 gap-4">
    <LayoutSidebar class="col-span-1 w-[130px]  p-4" />
    <slot class="col-span-2 bg-gray-300 p-4" />
  </div>
</template>
