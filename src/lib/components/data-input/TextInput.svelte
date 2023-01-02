<script lang="ts">
	import { Color } from '$lib/enums/color.enum';
	import { Size } from '$lib/enums/size.enum';

	export let placeholder: string = '';
	export let name: string = 'text-input';
	export let color: Color = Color.Neutral;
	export let size: Size = Size.Md;
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
		{name}
		{placeholder}
		{disabled}
	/>
	{#if $$slots['label-3'] || $$slots['label-4']}
		<label class="label">
			<span class="label-text-alt"><slot name="label-3" /></span>
			<span class="label-text-alt"><slot name="label-4" /></span>
		</label>
	{/if}
</div>
