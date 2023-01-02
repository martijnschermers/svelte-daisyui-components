<script lang="ts">
	import { Size } from '$lib/enums/size.enum';

	export let value: number;
	export let max: number = 100;
	export let min: number = 0;
	export let step: number = 1;
	export let color: string = '';
	export let size: Size = Size.Normal;
</script>

<input type="range" class="range" {min} {max} {value} {step} />
