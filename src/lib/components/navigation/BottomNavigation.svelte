<script lang="ts">
	import { Size } from '../../enums/size.enum';
	import type { Button } from '../../interfaces/button.interface';

	export let buttons: Button[];
	export let size: Size | string = Size.Md;

	//TODO: extract button to external component instead of interface
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
			{#if button.title}
				<span class="btm-nav-label">{button.title}</span>
			{/if}
		</button>
	{/each}
</div>
