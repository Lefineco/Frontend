<script setup lang="ts">
const commandPaletteRef = ref()

const suggestions = [
	{ id: 'youtube', label: 'YouTube', icon: 'i-simple-icons-youtube' },
	{ id: 'vimeo', label: 'Vimeo', icon: 'i-simple-icons-vimeo' },
]

const groups = [{
	key: 'suggestions',
	label: 'Suggestions',
	inactive: 'Application',
	commands: suggestions,
}, {
	key: 'commands',
	label: 'Commands',
	inactive: 'Command',
}]

</script>

<template>
	<UCommandPalette
		ref="commandPaletteRef" :groups="groups" icon="" :autoselect="false"
		placeholder="Search for apps and commands"
	/>
</template>
