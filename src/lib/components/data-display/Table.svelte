<script lang="ts">
	import type { RowType } from '$lib/interfaces/row.interface';
	import Row from '$lib/components/data-display/Row.svelte';

	export let head: string[] = [];
	export let rows: RowType[] = [];
	export let compact: boolean = false;
	export let zebra: boolean = false;
</script>

<div class="overflow-x-auto {$$props.class ? $$props.class : ''}">
	<table class="table w-full" class:table-zebra={zebra} class:table-compact={compact}>
		{#if head.length}
			<thead>
				<tr>
					{#each head as column}
						<th>{column}</th>
					{/each}
				</tr>
			</thead>
		{:else}
			<slot name="head" />
		{/if}
		<tbody>
			{#each rows as row}
				<Row columns={row.columns} active={row.active} hover={row.hover} />
			{:else}
				<slot />
			{/each}
		</tbody>
	</table>
</div>
