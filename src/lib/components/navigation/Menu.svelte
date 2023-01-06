<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import type { LinkType } from '$lib/interfaces/link.interface';
	import ListItem from '$lib/components/navigation/ListItem.svelte';

	export let items: LinkType[] = [];
	export let color: Color | ColorStrings = Color.Primary;
	export let rounded: boolean = false;
	export let compact: boolean = false;
	export let responsive: boolean = false;
	export let horizontal: boolean = false;
</script>

<ul
	class="menu bg-base-100 w-56 {$$props.class ? $$props.class : ''}"
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
	class:rounded-box={rounded}
	class:menu-compact={compact || responsive}
	class:lg:menu-normal={responsive}
	class:menu-horizontal={horizontal}
>
	{#if $$slots.title}
		<li class="menu-title">
			<span><slot name="title" /></span>
		</li>
	{/if}

	{#each items as item}
		<ListItem href={item.href}>{item.text}</ListItem>
	{:else}
		<slot />
	{/each}
</ul>
