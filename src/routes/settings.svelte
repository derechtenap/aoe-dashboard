<script>
	import { steam64id, boards } from '../stores/settingsStore';

	// Handle which leaderboards are used app wide
	const handleChange = (id, event) => {
		$boards.forEach((board) => {
			if (id === board.id) {
				console.info(`Set ${board.name} to ${event.target.checked}`);
				board.isChecked = event.target.checked;
			}
		});
	};

	steam64id.useLocalStorage();
</script>

<svelte:head>
	<title>Settings &ndash; AOE Dashboard</title>
</svelte:head>

<h1 class="mb-10 text-4xl font-bold tracking-widest">Settings</h1>
<p class="mb-5 font-bold">You're changes are saved automatically.</p>

<h2 class="mt-10 mb-5 rounded p-5 text-xl tracking-widest dark:bg-gray-800">Leaderboards</h2>
<p class="mb-5">Select the Leaderboards in which you are interested in.</p>
<div class="flex flex-col">
	{#each $boards as leaderboard}
		<div>
			<input
				class="mr-3"
				type="checkbox"
				name={leaderboard.id}
				id={leaderboard.id}
				bind:checked={leaderboard.isChecked}
				on:change={(event) => handleChange(leaderboard.id, event)}
			/>
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
	placeholder={$steam64id}
	bind:value={$steam64id}
/>
<label for="steam64id">Steam64ID</label>
