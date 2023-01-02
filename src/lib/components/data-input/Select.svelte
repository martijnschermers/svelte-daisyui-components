<script lang="ts">
	import { Color } from '$lib/enums/color.enum';
	import { Size } from '$lib/enums/size.enum';

	export let name: string = 'select';
	export let options: string[] = [];
	export let color: Color | string = Color.Neutral;
	export let size: Size | string = Size.Md;
	export let disabled: boolean = false;
	export let bordered: boolean = false;
	export let ghost: boolean = false;

    let classes = $$props.class ? $$props.class : ''; 
</script>

<div class="form-control {classes}">
	{#if $$slots['label-1'] || $$slots['label-2']}
		<label class="label">
			<span class="label-text"><slot name="label-1" /> </span>
			<span class="label-text"><slot name="label-2" /> </span>
		</label>
	{/if}
	<select
		class="select {classes}"
		class:select-primary={color == Color.Primary}
		class:select-secondary={color == Color.Secondary}
		class:select-accent={color == Color.Accent}
		class:select-info={color == Color.Info}
		class:select-success={color == Color.Success}
		class:select-warning={color == Color.Warning}
		class:select-error={color == Color.Error}
		class:select-xs={size == Size.Xs}
		class:select-sm={size == Size.Sm}
		class:select-md={size == Size.Md}
		class:select-lg={size == Size.Lg}
		class:select-bordered={bordered}
		class:select-ghost={ghost}
		{name}
		{disabled}
	>
		{#each options as option, index}
			{#if index == 0}
				<option disabled selected>{option}</option>
			{:else}
				<option value={index}>{option}</option>
			{/if}
		{:else}
			<slot />
		{/each}
	</select>
	{#if $$slots['label-3'] || $$slots['label-4']}
		<label class="label">
			<span class="label-text"><slot name="label-3" /> </span>
			<span class="label-text"><slot name="label-4" /> </span>
		</label>
	{/if}
</div>
