<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import Project from '$lib/components/Project.svelte';
	import SkillsRunningText from '$lib/components/SkillsRunningText.svelte';
	import Background from '$lib/components/Background.svelte';
  import BottomBar from '$lib/components/BottomBar.svelte';
	
	// Use Flowbite's dark mode store
	import { DarkMode } from 'flowbite-svelte';

</script>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
  <!-- Background Component -->
  <Background />
  
  <div class="relative z-10">
    <!-- Tombol Dark Mode -->
    <div class="flex relative z-20 justify-end p-4">
      <DarkMode class="text-green-400 dark:text-blue-400 border dark:border-gray-800" />
    </div>

    <!-- Hero Section -->
    <section id="profile" class="flex flex-col items-center justify-center gap-8 px-8 py-20 text-left md:flex-row md:gap-40 relative z-10">
      <div class="relative z-10 w-auto text-center md:text-left backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/20">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Hi, I'm Faishal Lunawan 👋</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400">Fullstack Web Developer</p>
        <p class="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
          “I'm a Full Stack Developer with experience in backend, frontend, and IoT-related systems, where I build applications and systems that connect devices, UI, and servers.”</p>
        <Button class="mt-6 bg-gradient-to-br from-green-900 to-gray-900 dark:from-gray-900 dark:to-blue-900 hover:scale-105 transition-transform duration-200"  href="https://www.linkedin.com/in/faishal-lunawan/" size="lg">
          Contact Me
        </Button>
      </div>			
    </section>
  </div>
</div>
<div>
		<section id="skills">
			<SkillsRunningText />
		</section>
        
		<!-- Projects Section -->
		<section class=" py-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative z-10">
			<div class="max-w-6xl mx-auto">
				<Project />
			</div>
		</section>

    
    <BottomBar />
		<!-- Footer -->
		<!-- <footer class="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative z-10"> -->
</div>		
