<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let name: string = 'file-input';
	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let bordered: boolean = false;
	export let ghost: boolean = false;
	export let disabled: boolean = false;
</script>

<div class="form-control w-full max-w-xs">
	{#if $$slots['label-1'] || $$slots['label-2']}
		<label class="label">
			<span class="label-text"><slot name="label-1" /></span>
			<span class="label-text-alt"><slot name="label-2" /></span>
		</label>
	{/if}
	<input
		type="file"
		class="file-input w-full max-w-xs"
		class:file-input-xs={size == Size.Xs}
		class:file-input-sm={size == Size.Sm}
		class:file-input-md={size == Size.Md}
		class:file-input-lg={size == Size.Lg}
		class:file-input-primary={color == Color.Primary}
		class:file-input-secondary={color == Color.Secondary}
		class:file-input-accent={color == Color.Accent}
		class:file-input-info={color == Color.Info}
		class:file-input-success={color == Color.Success}
		class:file-input-warning={color == Color.Warning}
		class:file-input-error={color == Color.Error}
		class:file-input-bordered={bordered}
		class:file-input-ghost={ghost}
		{disabled}
		{name}
		{...$$restProps}
	/>
	{#if $$slots['label-3'] || $$slots['label-4']}
		<label class="label">
			<span class="label-text-alt"><slot name="label-3" /></span>
			<span class="label-text-alt"><slot name="label-4" /></span>
		</label>
	{/if}
</div>
