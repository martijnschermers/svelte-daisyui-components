<script lang="ts">
	import { Color, type ColorStrings } from '../../enums/color.enum';

	export let color: Color | ColorStrings = Color.Neutral;
</script>

<div
	class="mockup-phone"
	class:border-primary={color == Color.Primary}
	class:border-secondary={color == Color.Secondary}
	class:border-accent={color == Color.Accent}
	class:border-info={color == Color.Info}
	class:border-success={color == Color.Success}
	class:border-warning={color == Color.Warning}
	class:border-error={color == Color.Error}
>
	<div class="camera" />
	<div class="display">
		<div class="artboard artboard-demo phone-1">
			<slot />
		</div>
	</div>
</div>
