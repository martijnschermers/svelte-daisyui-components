<script lang="ts">
	import type { Color, ColorStrings } from '$lib/enums/color.enum';

	export let color: Color | ColorStrings = '';
	export let bordered: boolean = true;
</script>

<div class="mockup-window bg-{color}" class:border={bordered} class:bordered-base-300={bordered}>
	<div class="flex justify-center px-4 py-16 bordered-t" class:bordered-base-300={bordered}>
		<slot />
	</div>
</div>
