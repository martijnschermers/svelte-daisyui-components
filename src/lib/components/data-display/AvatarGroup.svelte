<script lang="ts">
	import type { ImageType } from '$lib/interfaces/image.interface';
	import Avatar from '$lib/components/data-display/Avatar.svelte';

	export let avatars: ImageType[] = [];
</script>

<div class="avatar-group -space-x-6">
	{#each avatars as avatar}
		<Avatar>
			<img src={avatar.src} alt={avatar.alt} />
		</Avatar>
	{:else}
		<slot />
	{/each}
</div>
