<script>
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
	<li class="flex justify-between">Games played <var class="not-italic">0</var></li>
	<li class="flex justify-between">Wins<var class="not-italic">0</var></li>
	<li class="flex justify-between">Losses<var class="not-italic">0</var></li>
	<li class="flex justify-between">
		Current Streak<var class="not-italic">0</var>
	</li>
</ul>
