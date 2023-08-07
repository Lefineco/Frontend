<script setup lang="ts">

</script>

<template>
  <div class="flex  flex-col  justify-center divide-y divide-gray-700">
    <div
    class="flex gap-5  lg:gap-0 flex-col  lg:flex-row items-start md:items-center w-full justify-between py-12 px-7  lg:px-14"
    >
      <div class="md:text-center  lg:text-start">
        <p class="text-sm">
          Personal information
        </p>
        <p class="text-xs text-gray-600 font-bold">
          Update your photo and personal details.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-6 max-lg:w-full">
        <UInput icon="i-ph-user-fill" :ui="{ wrapper: 'relative w-full lg:w-[250px] xl:w-[401px]' }" class="  h-12" placeholder="Username" />
        <UInput icon="i-ph-envelope" :ui="{ wrapper: 'relative w-full lg:w-[250px] xl:w-[401px]' }" class=" h-12" placeholder="Email" />
      </div>
    </div>
    <div
      class="flex gap-5  lg:gap-0 flex-col  lg:flex-row items-start md:items-center w-full justify-between py-12 px-7  lg:px-14"
    >
      <div class="md:text-center  lg:text-start">
        <p class="text-sm">
          Password Settings
        </p>
        <p class="text-xs text-gray-600 font-bold">
          Update your photo and personal details.
        </p>
      </div>
      <div class="flex flex-col lg:flex-row items-center gap-6 max-lg:w-full">
        <UInput icon="i-ph-lock" :ui="{ wrapper: 'relative w-full lg:w-[250px] xl:w-[401px]' }" class=" h-12" placeholder="Old Password" />
        <UInput icon="i-ph-lock" :ui="{ wrapper: 'relative lg:w-[250px] w-full xl:w-[401px]' }" class="  h-12" placeholder="New Password" />
      </div>
    </div>
  </div>
</template>
