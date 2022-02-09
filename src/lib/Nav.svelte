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

<nav
	class="rounded px-5 py-5 text-xl dark:bg-gray-800 dark:text-gray-300 sm:flex sm:items-center sm:justify-between sm:py-0"
>
	<a class="p-5 font-bold tracking-widest dark:text-white" href="/">AOE Dashboard</a>
	<div class="mt-4 flex flex-col sm:mt-0 sm:flex-row">
		{#each navItems as item}
			<a
				class="rounded p-5 last:mr-0 hover:animate-pulse hover:dark:bg-gray-700 sm:mr-5"
				href={item.href}>{item.name}</a
			>
		{/each}
	</div>
</nav>
