<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import SkillsRunningText from '$lib/components/SkillsRunningText.svelte';
	import Background from '$lib/components/Background.svelte';
  import Experience from '$lib/components/Experience.svelte';
	import BottomBar from '$lib/components/BottomBar.svelte';

	import { DarkMode, Dropdown, DropdownItem, Button, Heading } from 'flowbite-svelte';
	import { blur } from 'svelte/transition';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

  const linkedInUrl = 'https://www.linkedin.com/in/faishal-lunawan/';
  // const githubUrl = 'https://github.com/FaishalLunawan';
  const email = 'faishallunawan@gmail.com';
  const resumeUrl = 'https://drive.google.com/file/d/1ek2agcP2ywDtPUNDLzpBSfdoAWSmK2kP/view?usp=sharing'
</script>

<div class="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
	<Background />

	<div class="relative z-10">
		<div class="relative z-20 flex justify-end p-4">
			<DarkMode class="border text-green-400 dark:border-gray-800 dark:text-blue-400" />
		</div>
		<section
			id="profile"
			class="relative z-10 flex flex-col items-center justify-center gap-8 px-8 py-20 text-left md:flex-row md:gap-40"
		>
			<div
				class="relative z-10 w-auto rounded-2xl border border-white/20 bg-white/70 p-8 text-center shadow-lg backdrop-blur-sm md:text-left dark:border-gray-700/20 dark:bg-gray-800/70"
			>
				<h1 class="text-4xl font-bold text-gray-900 dark:text-white">Hi, I'm Faishal Lunawan 👋</h1>
				<p class="mt-4 text-lg text-gray-600 dark:text-gray-400">Fullstack Web Developer</p>
				<p class="mt-2 max-w-md text-gray-500 dark:text-gray-400">
					“I'm a Full Stack Developer with experience in backend, frontend, and IoT-related systems,
					where I build applications and systems that connect devices, UI, and servers.”
				</p>
		
				<Button class="mt-6 bg-gradient-to-br from-green-900 to-green-900/50 duration-200 hover:scale-105 dark:from-gray-900 dark:to-blue-900 dark:hover:outline dark:hover:outline-blue-800">Contact me<ChevronDownOutline/></Button>
	
  <Dropdown simple transition={blur} transitionParams={{ duration: 800 }} class="absolute left-0 mt-2 w-48" >
    <!-- LinkedIn with SVG -->
    <DropdownItem 
      href={linkedInUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      class="flex items-center px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20"
    >
      <svg class="w-5 h-5 mr-3 text-[#0077B5]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      <span>LinkedIn</span>
    </DropdownItem>
    
    <!-- GitHub -->
    <!-- <DropdownItem 
      href={githubUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      class="flex items-center px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900/20"
    >
      <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
      </svg>
      <span>GitHub</span>
    </DropdownItem> -->
    
    <!-- Email -->
    <DropdownItem 
      href={`mailto:${email}`}
      class="flex items-center px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20"
    >
      <svg class="w-5 h-5 mr-3 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
      <span>Email</span>
    </DropdownItem>
    
    <!-- Resume -->
    <DropdownItem 
      href={resumeUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      class="flex items-center px-4 py-2 hover:bg-green-50 dark:hover:bg-green-900/20"
    >
      <svg class="w-5 h-5 mr-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
      <span>Resume</span>
    </DropdownItem>
  </Dropdown>
		</div>
		</section>
	</div>
</div>
<div>
	<section id="skills">
		<SkillsRunningText />
	</section>

	<!-- Projects Section -->
	<section
		id="project"
		class=" bg-green-900/60 py-5 backdrop-blur-sm dark:bg-gray-800/80"
	>
		<div class="mx-auto max-w-6xl">
			<Project />
		</div>
	</section>

  <section id="experience" class=" bg-green-900/50 py-5 backdrop-blur-sm dark:bg-gray-700/80">
    <Experience />
  </section>

	<!-- <BottomBar /> -->
	<!-- Footer -->
	<!-- <footer class="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative z-10"> -->
</div>
