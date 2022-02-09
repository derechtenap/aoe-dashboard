<script>
	// Placeholder values
	let games = 0;
	let wins = 0;
	let losses = 0;
	let streak = 0;
	let name = 'profile_name';
	import { steam64id } from '../stores/settingsStore';
</script>

<h2 class="text-center text-2xl">
	{$steam64id}
</h2>
<img
	class="mx-auto mt-5 mb-10 rounded-xl"
	src="https:via.placeholder.com/128"
	alt={`${$steam64id}\'s Steam avatar`}
/>
<ul>
	<li class="flex justify-between">Games played <var class="not-italic">{games}</var></li>
	<li class="flex justify-between">Wins<var class="not-italic">{wins}</var></li>
	<li class="flex justify-between">Losses<var class="not-italic">{losses}</var></li>
	<li class="flex justify-between">Streak<var class="not-italic">{streak}</var></li>
</ul>
