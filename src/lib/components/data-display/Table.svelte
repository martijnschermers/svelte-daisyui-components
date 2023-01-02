<script lang="ts">
	import type { Row as RowInterface } from '../../interfaces/row.interface';
	import Row from './Row.svelte';

	export let head: string[] = [];
	export let rows: RowInterface[] = [];
	export let compact: boolean = false;
	export let zebra: boolean = false;
</script>

<div class="overflow-x-auto {$$props.class ? $$props.class : ''}">
	<table class="table w-full" class:table-zebra={zebra} class:table-compact={compact}>
		<thead>
			<tr>
				{#each head as column}
					<th>{column}</th>
				{:else}
					<slot name="head" />
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each rows as row}
				<Row columns={row.columns} active={row.active} hover={row.hover} />
			{:else}
				<slot name="body" />
			{/each}
		</tbody>
	</table>
</div>

