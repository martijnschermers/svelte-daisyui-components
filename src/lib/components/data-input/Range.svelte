<script lang="ts">
	import { Size, type SizeStrings } from '$lib/enums/size.enum';
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let value: number;
	export let max: number = 100;
	export let min: number = 0;
	export let step: number = 25;
	export let steps: boolean = false;
	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
</script>

<input
	type="range"
	class="range {$$props.class ? $$props.class : ''}"
	class:range-xs={size == Size.Xs}
	class:range-sm={size == Size.Sm}
	class:range-md={size == Size.Md}
	class:range-lg={size == Size.Lg}
	class:range-primary={color == Color.Primary}
	class:range-secondary={color == Color.Secondary}
	class:range-accent={color == Color.Accent}
	class:range-info={color == Color.Info}
	class:range-success={color == Color.Success}
	class:range-warning={color == Color.Warning}
	class:range-error={color == Color.Error}
	{min}
	{max}
	{value}
	{step}
/>
{#if steps}
	<div class="w-full flex justify-between text-xs px-2">
		{#each { length: (min + max) / step + 1 } as _measure}
			<span>|</span>
		{/each}
	</div>
{/if}
