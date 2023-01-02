<script lang="ts">
	import type { ButtonType } from '$lib/interfaces/button.interface';
	import Button from '$lib/components/actions/Button.svelte';

	export let buttons: ButtonType[] = [];
	export let vertical: boolean = false;
	export let responsive: boolean = false;
</script>

<div
	class="btn-group {$$props.class ? $$props.class : ''}"
	class:btn-group-vertical={vertical || responsive}
	class:lg:btn-group-horizontal={responsive}
>
	{#each buttons as button}
		<Button on:click on:change>{button.title}</Button>
	{:else}
		<slot />
	{/each}
</div>
