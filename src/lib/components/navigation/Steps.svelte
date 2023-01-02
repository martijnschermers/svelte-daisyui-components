<script lang="ts">
	import type { StepType } from '$lib/interfaces/step.interface';
	import Step from '$lib/components/navigation/Step.svelte';

	export let steps: StepType[] = [];
	export let vertical: boolean = false;
	export let responsive: boolean = false;
</script>

<ul
	class="steps {$$props.class ? $$props.class : ''}"
	class:steps-vertical={vertical || responsive}
	class:lg:steps-horizontal={responsive}
>
	{#each steps as step}
		<Step data={step.data} color={step.color}>{step.text}</Step>
	{:else}
		<slot />
	{/each}
</ul>
