<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let data: string | number = '';
	export let color: Color | ColorStrings = Color.Neutral;
</script>

<li
	class="step {$$props.class ? $$props.class : ''}"
	class:step-primary={color == Color.Primary}
	class:step-secondary={color == Color.Secondary}
	class:step-accent={color == Color.Accent}
	class:step-info={color == Color.Info}
	class:step-success={color == Color.Success}
	class:step-warning={color == Color.Warning}
	class:step-error={color == Color.Error}
	data-content={data}
>
	<slot />
</li>
