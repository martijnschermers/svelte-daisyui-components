<script lang="ts">
	import { Size } from '../../enums/size.enum';

	export let size: Size | string = Size.Md;
	export let vertical: boolean = false;
</script>

<div class="form-control">
	{#if $$slots.label}
		<label class="label">
			<span class="label-text"><slot name="label" /></span>
		</label>
	{/if}
	<label
		class="input-group input-group-{size}"
		class:input-group-vertical={vertical}
		class:input-group-xs={size == Size.Xs}
		class:input-group-sm={size == Size.Sm}
		class:input-group-md={size == Size.Md}
		class:input-group-lg={size == Size.Lg}
	>
		<slot />
	</label>
</div>
