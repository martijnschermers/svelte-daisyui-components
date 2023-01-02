<script lang="ts">
	export let value: number;

    let initialValue = value;
	setInterval(() => {
        value > 0 && value < 100 ? value-- : value = initialValue;
	}, 1000);
</script>

<span class="countdown {$$props.class ? $$props.class : ''}">
	<span style:--value={value} />
</span>
