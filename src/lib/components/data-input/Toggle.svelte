<script lang="ts">
	import { Color } from '$lib/enums/color.enum';
	import { Size } from '$lib/enums/size.enum';

	export let color: Color | string = Color.Primary;
	export let size: Size | string = Size.Md;
	export let disabled: boolean = false;
	export let indeterminate: boolean = false;
	export let checked: boolean = true;
</script>

<toggle
	type="checkbox"
	class="toggle"
	class:toggle-primary={color == Color.Primary}
	class:toggle-secondary={color == Color.Secondary}
	class:toggle-accent={color == Color.Accent}
	class:toggle-info={color == Color.Info}
	class:toggle-success={color == Color.Success}
	class:toggle-warning={color == Color.Warning}
	class:toggle-error={color == Color.Error}
	class:toggle-xs={size == Size.Xs}
	class:toggle-sm={size == Size.Sm}
	class:toggle-md={size == Size.Md}
	class:toggle-lg={size == Size.Lg}
	{indeterminate}
	{disabled}
	{checked}
/>
