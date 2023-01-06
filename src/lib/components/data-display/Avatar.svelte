<script lang="ts">
	import { Color, type ColorStrings } from '$lib/enums/color.enum';

	export let ring: Color | ColorStrings = '';
	export let rounded: boolean = false;
	export let online: boolean = false;
	export let offline: boolean = false;
</script>

<div
	class="avatar {$$props.class ? $$props.class : ''}"
	class:placeholder={$$slots.placeholder}
	class:online
	class:offline
>
	{#if $$slots.placeholder && !$$slots.default}
		<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
			<span class="text-3xl"><slot name="placeholder" /></span>
		</div>
	{:else}
		<div
			class="w-24 rounded"
			class:rounded-full={rounded}
			class:ring-offset-base-100={ring}
			class:ring-offset-2={ring}
			class:ring-primary={ring == Color.Primary}
			class:ring-secondary={ring == Color.Secondary}
			class:ring-accent={ring == Color.Accent}
			class:ring-info={ring == Color.Info}
			class:ring-success={ring == Color.Success}
			class:ring-warning={ring == Color.Warning}
			class:ring-error={ring == Color.Error}
			class:ring
		>
			<slot />
		</div>
	{/if}
</div>
