<script lang="ts">
	export let disabled: boolean = false;
	export let bordered: boolean = false;
	export let hover: boolean = false;
</script>

<li class:disabled class:bordered class:hover-bordered={hover}><slot /></li>
