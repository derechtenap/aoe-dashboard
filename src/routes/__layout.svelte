<script>
	import '../main.css';
	import Nav from '$lib/Nav.svelte';
	import Profile from '$lib/Profile.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Nav />
<div class="my-8 sm:grid sm:grid-cols-12 sm:gap-6">
	<aside
		class="rounded p-5 dark:bg-gray-800 dark:text-gray-300 sm:col-span-5 lg:col-span-4 xl:col-span-3 2xl:col-span-2"
	>
		<Profile />
	</aside>
	<main class="my-8 sm:col-span-7 sm:my-0 lg:col-span-8 xl:col-span-9 2xl:col-span-10">
		<slot />
	</main>
</div>
<Footer />
