<script setup lang="ts">
interface Props {
	data: {
		name: string
		avatar: string
		createDate: string
		description: string
	}
}

defineProps<Props>()
</script>

<template>
	<div class="w-full flex flex-col rounded-[30px] bg-[#7B7A7A1A] border border-[#7b7a7a1a]">
		<div class="flex flex-row items-start p-2">
			<div class="flex flex-row justify-between w-full p-4">
				<div class="flex flex-row gap-2">
					<div>
						<UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" size="xl" />
					</div>
					<div class="flex flex-col">
						<span class="text-lg">{{ data.name }}</span>
						<span class="text-xs text-gray-500">Recommended</span>
					</div>
				</div>
				<div>
					<p class="text-sm text-[#ffffff80]">
						{{ data.createDate }}
					</p>
				</div>
			</div>
		</div>
		<div>
			<p class="text-sm !ml-[25px] mb-2">
				{{ data.description }}
			</p>
		</div>
		<div class="flex p-4 flex-row items-center justify-center space-x-4">
			<img
				class="w-full h-[240px] object-cover rounded-md border !border-[#7b7a7a1a]"
				src="https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
			>
			<img
				class="w-full h-[240px] object-cover rounded-md border !border-[#7b7a7a1a]"
				src="https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
			>
		</div>
	</div>
</template>
