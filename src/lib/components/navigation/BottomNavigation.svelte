<script lang="ts">
	import { Size, type SizeStrings } from '$lib/enums/size.enum';
	import type { ButtonType } from '$lib/interfaces/button.interface';

	export let buttons: ButtonType[] = [];
	export let size: Size | SizeStrings = Size.Md;
</script>

<div
	class="btm-nav {$$props.class ? $$props.class : ''}"
	class:btm-nav-xs={size == Size.Xs}
	class:btm-nav-sm={size == Size.Sm}
	class:btm-nav-md={size == Size.Md}
	class:btm-nav-lg={size == Size.Lg}
>
	{#each buttons as button}
		<button disabled={button.disabled} class:active={button.active} class="text-{button.color}">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={button.svgPath} />
			</svg>
			{#if button.text}
				<span class="btm-nav-label">{button.text}</span>
			{/if}
		</button>
	{:else}
		<slot />
	{/each}
</div>
