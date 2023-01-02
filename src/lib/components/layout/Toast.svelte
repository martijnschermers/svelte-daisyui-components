<script lang="ts">
	export let horizontal: 'start' | 'center' | 'end' | '' = 'end';
	export let vertical: 'top' | 'middle' | 'bottom' | '' = 'bottom';
</script>

<div class="toast toast-{vertical} toast-{horizontal}">
	<slot />
</div>
