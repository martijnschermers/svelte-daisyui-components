<script lang="ts">
	export let href: string;
    export let active: boolean = false; 
	export let disabled: boolean = false;
	export let bordered: boolean = false;
	export let hover: boolean = false;
</script>

<li class:disabled class:bordered class:hover-bordered={hover}><a class:active {href}><slot /></a></li>
