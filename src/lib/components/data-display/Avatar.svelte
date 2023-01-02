<script lang="ts">
	import { Color } from '../../enums/color.enum';

	export let ring: Color | string = '';
	export let online: boolean = false;
	export let offline: boolean = false;
</script>

<div
	class="avatar rounded-full {$$props.class ? $$props.class : ''}"
	class:online
	class:offline
	class:placeholder={$$slots.placeholder}
	class:ring
	class:ring-offset-base-100={ring}
	class:ring-offset-2={ring}
	class:ring-primary={ring == Color.Primary}
	class:ring-secondary={ring == Color.Secondary}
	class:ring-accent={ring == Color.Accent}
	class:ring-info={ring == Color.Info}
	class:ring-success={ring == Color.Success}
	class:ring-warning={ring == Color.Warning}
	class:ring-error={ring == Color.Error}
>
	{#if $$slots.placeholder && !$$slots.default}
		<div class="bg-neutral-focus text-neutral-content rounded-full w-24">
			<span class="text-3xl"><slot name="placeholder" /></span>
		</div>
	{:else}
		<div class="w-24 rounded">
			<slot />
		</div>
	{/if}
</div>
