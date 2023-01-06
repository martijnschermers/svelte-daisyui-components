<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let value: number | string;
	export let size: string = '4rem';
	export let thickness: string = '.4rem';
	export let color: Color | ColorStrings = Color.Neutral;
	export let background: Color | ColorStrings = '';
	export let border: Color | ColorStrings = '';
</script>

<div
	class="radial-progress {$$props.class ? $$props.class : ''}"
	class:border-4={border}
	class:bg-primary={background == Color.Primary}
	class:border-primary={border == Color.Primary}
	class:text-primary-content={color == Color.Primary}
	class:bg-secondary={background == Color.Secondary}
	class:border-secondary={border == Color.Secondary}
	class:text-secondary-content={color == Color.Secondary}
	class:bg-accent={background == Color.Accent}
	class:border-accent={border == Color.Accent}
	class:text-accent-content={color == Color.Accent}
	class:bg-info={background == Color.Info}
	class:border-info={border == Color.Info}
	class:text-info-content={color == Color.Info}
	class:bg-success={background == Color.Success}
	class:border-success={border == Color.Success}
	class:text-success-content={color == Color.Success}
	class:bg-warning={background == Color.Warning}
	class:border-warning={border == Color.Warning}
	class:text-warning-content={color == Color.Warning}
	class:bg-error={background == Color.Error}
	class:border-error={border == Color.Error}
	class:text-error-content={color == Color.Error}
	style="--value:{value}; --size: {size}; --thickness: {thickness};"
>
	{value}%
</div>

