<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let outline: boolean = false;
</script>

<span
	class="badge {$$props.class ? $$props.class : ''}"
	class:badge-outline={outline}
	class:badge-xs={size == Size.Xs}
	class:badge-sm={size == Size.Sm}
	class:badge-md={size == Size.Md}
	class:badge-lg={size == Size.Lg}
	class:badge-primary={color == Color.Primary}
	class:badge-secondary={color == Color.Secondary}
	class:badge-accent={color == Color.Accent}
	class:badge-ghost={color == Color.Ghost}
	class:badge-info={color == Color.Info}
	class:badge-success={color == Color.Success}
	class:badge-warning={color == Color.Warning}
	class:badge-error={color == Color.Error}
>
	<slot />
</span>
