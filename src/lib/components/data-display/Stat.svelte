<div class="stat {$$props.class ? $$props.class : ''}">
	{#if $$slots.image}
		<div class="stat-figure text-secondary">
			<div class="avatar online">
				<div class="w-16 rounded-full">
					<slot name="image" />
				</div>
			</div>
		</div>
	{/if}

	<div class="stat-title"><slot name="title" /></div>
	<div class="stat-value"><slot name="value" /></div>
	<div class="stat-desc"><slot name="description" /></div>
	<div class="stat-actions"><slot name="actions" /></div>
</div>

