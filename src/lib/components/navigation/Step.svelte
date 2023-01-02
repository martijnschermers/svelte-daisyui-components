<script lang="ts">
	import { Color } from '../../enums/color.enum';

	export let data: string = '';
	export let color: Color | string = Color.Neutral;
</script>

<li
	data-content={data}
	class="step {$$props.class ? $$props.class : ''}"
	class:step-primary={color == Color.Primary}
	class:step-secondary={color == Color.Secondary}
	class:step-accent={color == Color.Accent}
	class:step-info={color == Color.Info}
	class:step-success={color == Color.Success}
	class:step-warning={color == Color.Warning}
	class:step-error={color == Color.Error}
>
	<slot />
</li>
