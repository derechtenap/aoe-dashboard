<script>
	import { steam64id } from '../stores/settingsStore';
</script>

<svelte:head>
	<title>AOE Dashboard</title>
</svelte:head>

{#if $steam64id}
	<h1 class="mb-10 text-4xl font-bold tracking-widest">Latest Match</h1>
	<h2 class="mb-10 text-3xl font-bold tracking-widest">Match History</h2>
{:else}
	<div class="flex flex-col items-center justify-center w-full h-full pattern rounded p-10">
		<h1 class="text-4xl uppercase tracking-widest mb-4">No data found!</h1>
		<p class="text-xl mb-10">Click on the icon below, to search a new Player...</p>
		<span
			class="inline-flex rounded-full dark:bg-gray-700 dark:text-white hover:dark:bg-gray-600 duration-500 opacity-75"
			><a href="/search/">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-16 w-16"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</span>
	</div>
{/if}
