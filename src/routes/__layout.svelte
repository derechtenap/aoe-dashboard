<script>
	import '../main.css';
	import Nav from '$lib/Nav.svelte';
	import Profile from '$lib/Profile.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav />
<div class="my-8 grid  grid-cols-5  gap-32">
	<aside class="col-span-1 rounded p-5 dark:bg-gray-800 dark:text-gray-300">
		<Profile />
	</aside>
	<main class="col-auto">
		<slot />
	</main>
</div>
<Footer />
