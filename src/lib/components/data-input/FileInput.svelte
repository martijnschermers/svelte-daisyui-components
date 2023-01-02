<script lang="ts">
	import type { Size } from '../../enums/size.enum';

	export let label: string;
	export let size: Size;
	export let color: string;
	export let bordered: boolean = false;
	export let disabled: boolean = false;
</script>

{#if label}
	<div class="form-control w-full max-w-xs">
		<label for="" class="label">
			<span class="label-text">{label}</span>
		</label>

		<input
			type="file"
			class="file-input file-input-{color} file-input-{size} w-full max-w-xs"
			class:file-input-bordered={bordered}
			{disabled}
		/>
	</div>
{:else}
	<input
		type="file"
		class="file-input file-input-{color} file-input-{size} w-full max-w-xs"
		class:file-input-bordered={bordered}
		{disabled}
	/>
{/if}
