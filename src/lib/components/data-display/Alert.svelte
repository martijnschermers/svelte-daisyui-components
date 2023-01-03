<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let color: Color | ColorStrings = Color.Neutral;

	let path: string;
	switch (color) {
		case Color.Error:
			path = 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z';
			break;

		case Color.Info:
			path = 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
			break;

		case Color.Success:
			path = 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
			break;

		case Color.Warning:
			path =
				'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z';
			break;
		default:
			path = 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
			break;
	}
</script>

<div
	class="alert shadow-lg {$$props.class ? $$props.class : ''}"
	class:alert-info={color == Color.Info}
	class:alert-success={color == Color.Success}
	class:alert-warning={color == Color.Warning}
	class:alert-error={color == Color.Error}
>
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="stroke-current flex-shrink-0 h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={path} />
		</svg>
		<span><slot /></span>
	</div>
	<div class="flex-none">
		<slot name="actions" />
	</div>
</div>
