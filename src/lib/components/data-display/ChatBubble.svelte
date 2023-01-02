<script lang="ts">
	import { Color } from '$lib/enums/color.enum';

    export let color: Color | string = Color.Neutral;
	export let end: boolean = false;
</script>

<div class="chat {$$props.class ? $$props.class : ''}" class:chat-end={end} class:chat-start={!end}>
	{#if $$slots.image}
		<div class="chat-image avatar">
			<div class="w-10 rounded-full">
				<slot name="image" />
			</div>
		</div>
	{/if}
	<div
		class="chat-bubble"
		class:chat-bubble-primary={color == Color.Primary}
		class:chat-bubble-secondary={color == Color.Secondary}
		class:chat-bubble-accent={color == Color.Accent}
		class:chat-bubble-info={color == Color.Info}
		class:chat-bubble-success={color == Color.Success}
		class:chat-bubble-warning={color == Color.Warning}
		class:chat-bubble-error={color == Color.Error}
	>
		<slot />
	</div>
</div>
