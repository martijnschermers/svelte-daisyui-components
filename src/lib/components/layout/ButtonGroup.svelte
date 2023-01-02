<script lang="ts">
	import type { Button as ButtonInterface } from '$lib/interfaces/button.interface';
	import Button from '../actions/Button.svelte';

	export let buttons: ButtonInterface[] = [];
	export let vertical: boolean = false;
	export let responsive: boolean = false;
</script>

<div
	class="btn-group"
	class:btn-group-vertical={vertical || responsive}
	class:lg:btn-group-horizontal={responsive}
>
	{#each buttons as button}
		<Button>{button.title}</Button>
	{:else}
		<slot />
	{/each}
</div>
