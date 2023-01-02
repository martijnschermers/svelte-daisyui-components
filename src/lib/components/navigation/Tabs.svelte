<script lang="ts">
	import type { Tab as TabInterface } from '../../interfaces/tab.interface';
	import Tab from './Tab.svelte';

	export let tabs: TabInterface[] = [];
	export let boxed: boolean = false;
</script>

<div class="tabs {$$props.class ? $$props.class : ''}" class:tabs-boxed={boxed}>
	{#each tabs as tab}
		<Tab href={tab.href} active={tab.active} size={tab.size}>{tab.text}</Tab>
	{:else}
		<slot />
	{/each}
</div>
