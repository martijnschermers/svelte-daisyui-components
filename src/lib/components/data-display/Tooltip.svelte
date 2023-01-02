<script lang="ts">
	import { Color } from '../../enums/color.enum';
	import { Position } from '../../enums/position.enum';

	export let tip: string;
	export let color: Color | string = Color.Neutral;
	export let position: Position | string = Position.Top;
	export let open: boolean = false;
</script>

<div
	class="tooltip {$$props.class ? $$props.class : ''}"
	class:tooltip-bottom={position == Position.Bottom}
	class:tooltip-top={position == Position.Top}
	class:tooltip-left={position == Position.Left}
	class:tooltip-right={position == Position.Right}
	class:tooltip-primary={color == Color.Primary}
	class:tooltip-secondary={color == Color.Secondary}
	class:tooltip-accent={color == Color.Accent}
	class:tooltip-info={color == Color.Info}
	class:tooltip-success={color == Color.Success}
	class:tooltip-warning={color == Color.Warning}
	class:tooltip-error={color == Color.Error}
	class:tooltip-open={open}
	data-tip={tip}
>
	<slot />
</div>
