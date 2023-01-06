<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
</script>

<input
	type="checkbox"
	class="checkbox {$$props.class ? $$props.class : ''}"
	class:checkbox-xs={size == Size.Xs}
	class:checkbox-sm={size == Size.Sm}
	class:checkbox-md={size == Size.Md}
	class:checkbox-lg={size == Size.Lg}
	class:checkbox-primary={color == Color.Primary}
	class:checkbox-secondary={color == Color.Secondary}
	class:checkbox-accent={color == Color.Accent}
	class:checkbox-info={color == Color.Info}
	class:checkbox-success={color == Color.Success}
	class:checkbox-warning={color == Color.Warning}
	class:checkbox-error={color == Color.Error}
	{...$$restProps}
/>
