<script lang="ts">
	import Indicator from '$lib/components/layout/Indicator.svelte';
</script>

<Indicator color="primary">
    <div slot="badge">Required</div>
	<input type="text" placeholder="Your email address" class="input input-bordered" />
</Indicator>
