<script lang="ts">
	import { Size, type SizeStrings } from '$lib/enums/size.enum';
	import type { LinkType } from '$lib/interfaces/link.interface';

	export let links: LinkType[] = [];
	export let size: Size | SizeStrings = Size.Sm;
</script>

<div
	class="breadcrumbs text-sm {$$props.class ? $$props.class : ''}"
	class:max-w-xs={size == Size.Xs}
	class:max-w-sm={size == Size.Sm}
	class:max-w-md={size == Size.Md}
	class:max-w-lg={size == Size.Lg}
>
	<ul>
		{#each links as link}
			<li>
				<a href={link.href}>
					{#if link.svgPath}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="w-4 h-4 mr-2 stroke-current"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d={link.svgPath}
							/>
						</svg>
					{/if}
					{link.text}
				</a>
			</li>
		{:else}
			<slot />
		{/each}
	</ul>
</div>
