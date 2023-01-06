<script lang="ts">
	import {
		Select,
		Checkbox,
		Radio,
		Range,
		Rating,
		Textarea,
		Toggle,
		FileInput,
		TextInput
	} from '$lib';

	let options: string[] = ['Choose a option', 'option1', 'option2', 'option3'];
</script>

<h1 class="header">Data Input</h1>

<div class="components">
	<Checkbox checked="true" color="primary" />

	<FileInput />

	<Radio />

	<Range value="5" />

	<Rating />

	<Select color="primary" {options} />

	<TextInput placeholder="Type here" color="secondary" />

	<Textarea placeholder="Bio" color="info" />

	<Toggle />
</div>
