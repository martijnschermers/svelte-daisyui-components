<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let name: string = 'textarea';
	export let placeholder: string = '';
	export let color: Color | ColorStrings = Color.Neutral;
	export let bordered: boolean = false;
	export let ghost: boolean = false;
	export let disabled: boolean = false;
</script>

<textarea
	class="textarea"
	class:textarea-primary={color == Color.Primary}
	class:textarea-secondary={color == Color.Secondary}
	class:textarea-accent={color == Color.Accent}
	class:textarea-info={color == Color.Info}
	class:textarea-success={color == Color.Success}
	class:textarea-warning={color == Color.Warning}
	class:textarea-error={color == Color.Error}
	class:textarea-bordered={bordered}
	class:textarea-ghost={ghost}
	{placeholder}
	{disabled}
	{name}
	{...$$restProps}
/>
