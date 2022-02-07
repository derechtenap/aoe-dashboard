<script>
	import leaderboards from '../json/leaderboards.json';
</script>

<svelte:head>
	<title>Settings &ndash; AOE Dashboard</title>
</svelte:head>

<h1 class="mb-10 text-4xl font-bold tracking-widest">Settings</h1>

<h2 class="mt-10 mb-5 rounded p-5 text-xl tracking-widest dark:bg-gray-800">Leaderboards</h2>
<p class="mb-5">Select the Leaderboards in which you are interested in.</p>
<div class="flex flex-col">
	{#each leaderboards as leaderboard}
		<div>
			<input class="mr-3" type="checkbox" name={leaderboard.id} id={leaderboard.id} />
			<label for={leaderboard.id}>{leaderboard.name}</label>
		</div>
	{/each}
</div>
<h3 class="mt-10 mb-5 rounded p-5 text-xl tracking-widest dark:bg-gray-800">Steam64ID</h3>
<p class="mb-5">
	You can insert a <span class="font-mono">Steam64ID</span> to track a specific player.
	Alternatively you can use the
	<a class="font-bold hover:underline" href="/search/">Search Player</a> site.
</p>
<input
	class="mr-3 rounded px-2 py-1 dark:bg-gray-200 dark:text-gray-900"
	type="text"
	name="steam64id"
	id="steam64id"
	placeholder="76561197984749679"
/>
<label for="steam64id">Steam64ID</label>

<button
	class="mt-14 block rounded p-2 font-bold uppercase hover:bg-white hover:text-black dark:bg-gray-200 dark:text-gray-900"
	type="submit"
>
	Submit changes
</button>
