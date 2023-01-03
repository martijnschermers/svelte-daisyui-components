<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let color: Color | ColorStrings = Color.Neutral;
</script>

<div
	class="navbar bg-base-100 {$$props.class ? $$props.class : ''}"
	class:bg-primary={color == Color.Primary}
	class:text-primary-content={color == Color.Primary}
	class:bg-secondary={color == Color.Secondary}
	class:text-secondary-content={color == Color.Secondary}
	class:bg-accent={color == Color.Accent}
	class:text-accent-content={color == Color.Accent}
	class:bg-info={color == Color.Info}
	class:text-info-content={color == Color.Info}
	class:bg-success={color == Color.Success}
	class:text-success-content={color == Color.Success}
	class:bg-warning={color == Color.Warning}
	class:text-warning-content={color == Color.Warning}
	class:bg-error={color == Color.Error}
	class:text-error-content={color == Color.Error}
>
	<div class="navbar-start">
		<slot />
	</div>
	<div class="navbar-center">
		<slot name="center" />
	</div>
	<div class="navbar-end">
		<slot name="end" />
	</div>
</div>
