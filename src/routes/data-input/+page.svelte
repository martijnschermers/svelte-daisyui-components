<script lang="ts">
	import { Select, Checkbox, Radio, Range, Rating } from '$lib';

	let options: string[] = ['Choose a option', 'option1', 'option2', 'options3'];
</script>

<!-- Tested -->
<Select disabled={true} bordered={true} ghost={false} {options}>
	<p slot="label-1">Label 1</p>
	<p slot="label-2">Label 2</p>
	<p slot="label-3">Label 3</p>
	<p slot="label-4">Label 4</p>
</Select>

<Checkbox indeterminate={true} color="primary" size="lg" />

<Radio />

<Range value={10} step={10} steps={true} />

<Rating half={true} amount={10} />
