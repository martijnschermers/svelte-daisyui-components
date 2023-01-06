<script lang="ts">
	import Star from '$lib/components/data-input/Star.svelte';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let name: string = 'star';
	export let size: Size | SizeStrings = Size.Md;
	export let mask: 'star' | 'star-2' | 'heart' = 'star';
	export let half: boolean = false;
	export let hidden: boolean = false;
	export let amount: number = 5;
	export let checked: number = 5;

	if (half) {
		amount *= 2;
		checked *= 2;
	}
</script>

<div
	class="rating {$$props.class ? $$props.class : ''}"
	class:rating-xs={size == Size.Xs}
	class:rating-sm={size == Size.Sm}
	class:rating-md={size == Size.Md}
	class:rating-lg={size == Size.Lg}
	class:rating-half={half}
	{...$$restProps}
>
	{#if hidden}
		<input type="radio" {name} class="rating-hidden" />
	{/if}

	{#each { length: amount } as _, index}
		<Star {name} {mask} {checked} {half} {index} />
	{/each}
</div>
