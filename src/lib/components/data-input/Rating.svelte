<script lang="ts">
	import Star from '$lib/components/data-input/Star.svelte';

	export let name: string;
	export let mask: 'star' | 'star-2' | 'heart' = 'star';
	export let half: boolean = false;
	export let hidden: boolean = false;
	export let amount: number = 5;
	export let checked: number = 5;

	if (half) {
		amount *= 2;
	}
</script>

<div class="rating {$$props.class ? $$props.class : ''}" class:rating-half={half}>
	{#if hidden}
		<input type="radio" {name} class="rating-hidden" />
	{/if}

	{#each { length: amount } as _, index}
		<Star {name} {mask} {checked} {half} {index} />
	{/each}
</div>
