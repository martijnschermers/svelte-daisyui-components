<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let value: number | string = 100;
	export let max: number | string = 100;
	export let color: Color | ColorStrings = Color.Neutral;
</script>

<progress
	class="progress w-56 {$$props.class ? $$props.class : ''}"
	class:progress-primary={color == Color.Primary}
	class:progress-secondary={color == Color.Secondary}
	class:progress-accent={color == Color.Accent}
	class:progress-info={color == Color.Info}
	class:progress-success={color == Color.Success}
	class:progress-warning={color == Color.Warning}
	class:progress-error={color == Color.Error}
	{value}
	{max}
    {...$$restProps}
/>
