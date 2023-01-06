<script lang="ts">
	import { Position, type PositionStrings } from '$lib/enums/position.enum';

	export let position: Position | PositionStrings = Position.Bottom;
	export let open: boolean = false;
	export let hover: boolean = false;
	export let end: boolean = false;
</script>

<div
	class="dropdown {$$props.class ? $$props.class : ''}"
	class:dropdown-top={position == Position.Top}
	class:dropdown-bottom={position == Position.Bottom}
	class:dropdown-left={position == Position.Left}
	class:dropdown-right={position == Position.Right}
	class:dropdown-end={end}
	class:dropdown-hover={hover}
	class:dropdown-open={open}
>
	<label for="" tabindex="0" class="btn m-1"><slot name="label" /></label>
	<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
		<slot />
	</ul>
</div>
