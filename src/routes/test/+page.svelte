<script lang="ts">
	import { fade } from 'svelte/transition';

	let altContent: boolean = false;

	function changeContent() {
		altContent = !altContent;
	}
</script>

{#if !altContent}
	<button transition:fade on:click={changeContent}>Button</button>
{:else}
	<button transition:fade on:click={changeContent}>Another Button</button>
{/if}
