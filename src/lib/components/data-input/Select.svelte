<script lang="ts">
	import { Color } from '../../enums/color.enum';
	import { Size } from '../../enums/size.enum';

	export let options: string[];
	export let color: Color | string = Color.Neutral;
	export let size: Size | string = Size.Md;
	export let disabled: boolean = false;
	export let bordered: boolean = false;
	export let ghost: boolean = false;
</script>

<div class="form-control w-full max-w-xs">
	<label class="label">
		<span class="label-text"><slot name="top-label-1" /> </span>
		<span class="label-text"><slot name="top-label-2" /> </span>
	</label>
	<select
		class="select w-full max-w-xs"
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
		{disabled}
	>
		<option disabled selected><slot /></option>
		{#each options as option}
			<option>{option}</option>
		{/each}
	</select>
	{#if $$slots['bottom-label-1'] || $$slots['bottom-label-2']}
		<label class="label">
			<span class="label-text"><slot name="bottom-label-1" /> </span>
			<span class="label-text"><slot name="bottom-label-2" /> </span>
		</label>
	{/if}
</div>
