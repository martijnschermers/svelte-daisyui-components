<script lang="ts">
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

    export let id: string = 'input-group'; 
	export let size: Size | SizeStrings = Size.Md;
	export let vertical: boolean = false;
</script>

<div class="form-control">
	{#if $$slots.label}
		<label for={id} class="label">
			<span class="label-text"><slot name="label" /></span>
		</label>
	{/if}
	<label
        for={id}
		class="input-group {$$props.class ? $$props.class : ''}"
		class:input-group-vertical={vertical}
		class:input-group-xs={size == Size.Xs}
		class:input-group-sm={size == Size.Sm}
		class:input-group-md={size == Size.Md}
		class:input-group-lg={size == Size.Lg}
	>
		<slot />
	</label>
</div>
