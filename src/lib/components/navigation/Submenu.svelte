<script lang="ts">
	import ListItem from '$lib/components/navigation/ListItem.svelte';
	import type { LinkType } from '$lib/interfaces/link.interface';

	export let items: LinkType[] = [];
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li tabindex="0">
	<span><slot name="label" /></span>
	<ul class="bg-base-100">
		{#each items as item}
			<ListItem href={item.href}>{item.text}</ListItem>
		{:else}
			<slot />
		{/each}
	</ul>
</li>
