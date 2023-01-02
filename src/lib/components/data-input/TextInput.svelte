<script lang="ts">
	import { Color } from '../../enums/color.enum';
	import { Size } from '../../enums/size.enum';

	export let placeholder: string = '';
	export let color: Color = Color.Neutral;
	export let size: Size = Size.Md;
	export let bordered: boolean = false;
	export let ghost: boolean = false;
	export let disabled: boolean = false;
</script>

<input
	type="text"
	class="input w-full max-w-xs {$$props.class ? $$props.class : ''}"
	class:input-primary={color == Color.Primary}
	class:input-secondary={color == Color.Secondary}
	class:input-accent={color == Color.Accent}
	class:input-info={color == Color.Info}
	class:input-success={color == Color.Success}
	class:input-warning={color == Color.Warning}
	class:input-error={color == Color.Error}
	class:input-xs={size == Size.Xs}
	class:input-sm={size == Size.Sm}
	class:input-md={size == Size.Md}
	class:input-lg={size == Size.Lg}
	class:input-ghost={ghost}
	class:input-bordered={bordered}
	{placeholder}
	{disabled}
/>
