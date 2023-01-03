<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let href: string;
	export let color: Color | ColorStrings = Color.Neutral;
	export let hover: boolean = false;
</script>

<a
	{href}
	class="link {$$props.class ? $$props.class : ''}"
	class:link-primary={color == Color.Primary}
	class:link-secondary={color == Color.Secondary}
	class:link-accent={color == Color.Accent}
	class:link-info={color == Color.Info}
	class:link-success={color == Color.Success}
	class:link-warning={color == Color.Warning}
	class:link-error={color == Color.Error}
	class:link-hover={hover}
>
	<slot />
</a>
