<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let checked: boolean = true;
</script>

{#each { length: 2 } as _, index}
	<input
		type="radio"
		class="radio {$$props.class ? $$props.class : ''}"
		class:radio-xs={size == Size.Xs}
		class:radio-sm={size == Size.Sm}
		class:radio-md={size == Size.Md}
		class:radio-lg={size == Size.Lg}
		class:radio-primary={color == Color.Primary}
		class:radio-secondary={color == Color.Secondary}
		class:radio-accent={color == Color.Accent}
		class:radio-info={color == Color.Info}
		class:radio-success={color == Color.Success}
		class:radio-warning={color == Color.Warning}
		class:radio-error={color == Color.Error}
		checked={index == 0 ? checked : !checked}
		{...$$restProps}
	/>
{/each}
