<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Horizontal, type HorizontalStrings } from '$lib/enums/horizontal.enum';
	import { Vertical, type VerticalStrings } from '$lib/enums/vertical.enum';

	export let color: Color | ColorStrings = Color.Secondary;
	export let horizontal: Horizontal | HorizontalStrings = Horizontal.End;
	export let vertical: Vertical | VerticalStrings = Vertical.Top;
	export let badge: boolean = true;
	export let responsive: boolean = false;
</script>

<div class="indicator {$$props.class ? $$props.class : ''}">
	<span
		class="indicator-item"
		class:indicator-start={horizontal == 'start' || responsive}
		class:indicator-center={horizontal == 'center'}
		class:lg:indicator-center={responsive}
		class:indicator-end={horizontal == 'end'}
		class:xl:indicator-end={responsive}
		class:indicator-top={vertical == 'top'}
		class:indicator-middle={vertical == 'middle'}
		class:sm:indicator-middle={responsive}
		class:indicator-bottom={vertical == 'bottom'}
		class:md:indicator-bottom={responsive}
		class:badge-primary={color == Color.Primary}
		class:badge-secondary={color == Color.Secondary}
		class:badge-accent={color == Color.Accent}
		class:badge-ghost={color == Color.Ghost}
		class:badge-info={color == Color.Info}
		class:badge-success={color == Color.Success}
		class:badge-warning={color == Color.Warning}
		class:badge-error={color == Color.Error}
		class:badge
	>
		<slot name="badge" />
	</span>
	<slot />
</div>
