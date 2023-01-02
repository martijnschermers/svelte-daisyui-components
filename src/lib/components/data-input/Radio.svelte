<script lang="ts">
	import { Size } from "../../enums/size.enum";

    export let size: Size = Size.Normal;
    export let color: string = '';
    export let disabled: boolean = false; 
</script>

<input type="radio" name="radio-1" class="radio" {disabled} checked />
<input type="radio" name="radio-1" class="radio" {disabled} />
