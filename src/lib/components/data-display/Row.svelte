<script lang="ts">
	export let columns: string[] = [];
	export let hover: boolean = false;
	export let active: boolean = false;
</script>

<tr class:active class:hover>
	{#each columns as column, index}
		{#if index == 0}
			<th>{column}</th>
		{:else}
			<td>{column}</td>
		{/if}
	{/each}
</tr>
