<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let active: boolean = false;
	export let outline: boolean = false;
	export let wide: boolean = false;
	export let glass: boolean = false;
	export let disabled: boolean = false;
	export let square: boolean = false;
	export let circle: boolean = false;
	export let block: boolean = false;
	export let loading: boolean = false;
	export let animation: boolean = true;
	export let responsive: boolean = false;
	export let link: boolean = false;
</script>

<button
	class="btn {$$props.class ? $$props.class : ''}"
	class:btn-xs={responsive || size == Size.Xs}
	class:btn-sm={size == Size.Sm}
	class:btn-md={size == Size.Md}
	class:btn-lg={size == Size.Lg}
	class:sm:btn-sm={responsive}
	class:md:btn-md={responsive}
	class:lg:btn-lg={responsive}
	class:btn-primary={color == Color.Primary}
	class:btn-secondary={color == Color.Secondary}
	class:btn-accent={color == Color.Accent}
	class:btn-info={color == Color.Info}
	class:btn-success={color == Color.Success}
	class:btn-warning={color == Color.Warning}
	class:btn-error={color == Color.Error}
	class:btn-wide={wide}
	class:btn-link={link}
	class:btn-active={active}
	class:btn-outline={outline}
	class:btn-square={square}
	class:btn-circle={circle}
	class:btn-block={block}
	class:no-animation={!animation}
	class:glass
	class:loading
	on:click
	on:change
	{disabled}
	{...$$restProps}
>
	<slot />
</button>
