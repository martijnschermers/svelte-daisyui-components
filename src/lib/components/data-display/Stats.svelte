<script lang="ts">
	import { Color } from '../../enums/color.enum';
	import type { Stat as StatInterface } from '../../interfaces/stat.interface';
	import Button from '../actions/Button.svelte';
	import Stat from './Stat.svelte';

	export let stats: StatInterface[] = [];
	export let color: Color | string = Color.Neutral;
	export let vertical: boolean = false;
	export let centered: boolean = false;
	export let responsive: boolean = false;
</script>

<div
	class="stats shadow"
	class:stats-vertical={vertical || responsive}
	class:lg:stats-horizontal={responsive}
	class:bg-primary={color == Color.Primary}
	class:text-primary-content={color == Color.Primary}
	class:bg-secondary={color == Color.Secondary}
	class:text-secondary-content={color == Color.Secondary}
	class:bg-accent={color == Color.Accent}
	class:text-accent-content={color == Color.Accent}
	class:bg-info={color == Color.Info}
	class:text-info-content={color == Color.Info}
	class:bg-success={color == Color.Success}
	class:text-success-content={color == Color.Success}
	class:bg-warning={color == Color.Warning}
	class:text-warning-content={color == Color.Warning}
	class:bg-error={color == Color.Error}
	class:text-error-content={color == Color.Error}
>
	{#each stats as stat}
		<Stat class={centered ? 'place-items-center' : ''}>
			<img slot="image" src={stat.image?.src} alt={stat.image?.alt} />
			<div slot="title">{stat.title}</div>
			<div slot="value">{stat.value}</div>
			<div slot="description">{stat.description}</div>
			<div slot="actions">
				{#if stat.actions}
					{#each stat.actions as action}
						<Button />
					{/each}
				{/if}
			</div>
		</Stat>
	{:else}
		<slot />
	{/each}
</div>
