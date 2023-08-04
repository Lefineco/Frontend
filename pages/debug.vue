<script setup lang="ts">
const url = ref('')
const result = ref()
const iframe = ref<HTMLIFrameElement | null>(null)
async function submit() {
  const { data } = await useFetch('/api/video', {
    key: 'video',
    method: 'post',
    body: {
      url: url.value,
    },
  })

  result.value = data
}

const escaped = (html: string) => `data:text/html;charset=utf-8,${escape(JSON.stringify(html))}`

computed(() => {
  if (iframe.value && result.value)
    iframe.value.srcdoc = result.value
})
</script>

<template>
  <div class="w-full h-full flex flex-col gap-2 justify-center items-center">
    <iframe ref="iframe" class="h-96 w-96" src="javascript:void(0);" frameborder="0" />
    <UInput v-model="url" />
    <UButton label="submit" @click="submit()" />
  </div>
</template>
