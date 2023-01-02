<script lang="ts">
	import { Size } from '../../interfaces/size.enum';

	export let color: string = '';
	export let size: Size = Size.Normal;
	export let checked: boolean = true;
	export let indeterminate: boolean = false;
	export let disabled: boolean = false;
</script>

<input type="checkbox" class="checkbox checkbox-{size} checkbox-{color}" {indeterminate} {disabled} {checked} />
