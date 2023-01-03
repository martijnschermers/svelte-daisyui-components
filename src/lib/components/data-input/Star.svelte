<script lang="ts">
	export let name: string = 'star';
	export let mask: 'star' | 'star-2' | 'heart' = 'star';
	export let checked: number = 5;
	export let index: number = 5;
	export let half: boolean = false;

	index += 1;
</script>

<input
	type="radio"
	class="mask"
	class:mask-star={mask === 'star'}
	class:mask-star-2={mask === 'star-2'}
	class:mask-heart={mask === 'heart'}
	checked={checked === index}
	{name}
/>
