<script lang="ts">
	import { Size } from '../../enums/size.enum';
	import type { Button as ButtonInterface } from '../../interfaces/button.interface';
	import Button from '../actions/Button.svelte';

	export let buttons: ButtonInterface[] = [];
	export let size: Size | string = Size.Md;
</script>

<div class="btn-group">
	{#each buttons as button}
		<Button {size} disabled={button.disabled} active={button.active}>{button.title}</Button>
	{:else}
		<slot />
	{/each}
</div>
