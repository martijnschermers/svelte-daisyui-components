<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let focusColor: Color | ColorStrings = Color.Neutral;
	export let bordered: boolean = false;
	export let arrow: boolean = false;
	export let plus: boolean = false;
	export let open: boolean = false;
	export let close: boolean = false;

    let classes = `bg-${color} text-${color}-content group-focus:bg-${focusColor} group-focus:text-${focusColor}-content`;
</script>

<div
	tabindex="0"
	class="collapse {$$props.class ? $$props.class : ''}"
	class:collapse-arrow={arrow}
	class:border={bordered}
	class:collapse-plus={plus}
	class:collapse-open={open}
	class:collapse-close={close}
	class:group={color && focusColor}
>
	<div class="collapse-title text-xl font-medium {classes}">
		<slot name="title" />
	</div>
	<div class="collapse-content {classes}">
		<slot />
	</div>
</div>
