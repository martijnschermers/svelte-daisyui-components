<script lang="ts">
	export let button: boolean = false;
</script>

<div class="indicator">
	<span class="indicator-item" class:badge={!button}><slot name="indicator" /></span>
	<slot name="content" />
</div>
