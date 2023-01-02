<script lang="ts">
	export let rotate: boolean = false;
	export let flip: boolean = false;
</script>

<label class="swap {$$props.class ? $$props.class : ''}" class:swap-rotate={rotate} class:swap-flip={flip}>
	<input type="checkbox" />
	<div class="swap-on"><slot name="on" /></div>
	<div class="swap-off"><slot name="off" /></div>
</label>
