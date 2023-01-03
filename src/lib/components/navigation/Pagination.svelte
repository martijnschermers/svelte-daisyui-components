<script lang="ts">
	import { Size, type SizeStrings } from '$lib/enums/size.enum';
	import type { ButtonType } from '$lib/interfaces/button.interface';
	import Button from '$lib/components/actions/Button.svelte';
	import ButtonGroup from '$lib/components/layout/ButtonGroup.svelte';

	export let buttons: ButtonType[] = [];
	export let size: Size | SizeStrings = Size.Md;
</script>

<ButtonGroup>
	{#each buttons as button}
		<Button on:click on:change {size} disabled={button.disabled} active={button.active}>{button.title}</Button>
	{:else}
		<slot />
	{/each}
</ButtonGroup>
