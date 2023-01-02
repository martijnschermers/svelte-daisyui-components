<script lang="ts">
	export let name: string;
	export let mask: 'star' | 'star-2' | 'heart' = 'star';
	export let checked: number = 5;
	export let index: number = 5;
	export let half: boolean = false;

	index += 1;

	//TODO: give star appropiate half mask: 1 or 2
</script>

<input type="radio" {name} checked={checked === index} class="mask mask-{mask}" />
