<script>
	const navItems = [
		{
			name: 'Search Player',
			href: '/search/'
		},
		{
			name: 'Settings',
			href: '/settings/'
		}
	];
</script>

<nav class="flex justify-between rounded p-5 text-xl dark:bg-gray-800 dark:text-gray-300">
	<a class="font-bold tracking-widest dark:text-white" href="/">AOE Dashboard</a>
	<div>
		{#each navItems as item}
			<a class="mr-5 last:mr-0" href={item.href}>{item.name}</a>
		{/each}
	</div>
</nav>
