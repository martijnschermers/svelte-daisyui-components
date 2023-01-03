<script lang="ts">
	import { Horizontal, type HorizontalStrings } from '$lib/enums/horizontal.enum';
	import { Vertical, type VerticalStrings } from '$lib/enums/vertical.enum';

	export let horizontal: Horizontal | HorizontalStrings = Horizontal.End;
	export let vertical: Vertical | VerticalStrings = Vertical.Bottom;
</script>

<div
	class="toast {$$props.class ? $$props.class : ''}"
	class:toast-start={horizontal == 'start'}
	class:toast-center={horizontal == 'center'}
	class:toast-end={horizontal == 'end'}
	class:toast-top={vertical == 'top'}
	class:toast-middle={vertical == 'middle'}
	class:toast-bottom={vertical == 'bottom'}
>
	<slot />
</div>
