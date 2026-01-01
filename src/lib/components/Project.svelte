<script lang="ts">
	import { Card, Button, Badge, Modal, Heading } from 'flowbite-svelte';
	// Types
	interface Project {
		id: number;
		title: string;
		description: string;
		fullDescription: string;
		image: string;
		technologies: string[];
		githubUrl?: string;
		liveUrl?: string;
		featured: boolean;
		features: string[];
		status: 'Completed' | 'In Development';
	}

	// Data projects
	const projects: Project[] = [
		{
			id: 1,
			title: "MineSafe (Mining Indutry Safety Enchanted)",
			description: "A comprehensive safety vest for mining operations with real-time monitoring and alert features.",
			fullDescription: "I secured funding from the Indonesian Ministry of Education through the PKM KC program to develop MINESAFE, an innovative safety vest. Equipped with integrated poisonous gas detection, real-time location tracking, and health monitoring capabilities. MINESAFE is expected to decrease accident rates in the mining sector.",
			image: "images/minesafe.webp",
			technologies: ["C", "Javascript", "HTML", "CSS", "Python"],
			// githubUrl: "https://github.com/username/minesafe",
			// liveUrl: "https://minesafe-demo.com",
			featured: true,
			features: ["Real-time monitoring", "Gas hazard alert", "Health monitoring", "Dashboard analytics","Location tracking"],
			status: "Completed"
		},
		{
			id: 2,
			title: "SIDRA DB",
			description: "We provide fully-managed database services, handling the complexity so you can focus on building your application.",
			fullDescription: "Sidra is a Database as a Service (DBaaS) specifically developed to meet data management needs in a Cloud environment. This service allows businesses and developers to easily provision, operate, and manage databases without the hassle of complex infrastructure, such as server provisioning, software installation, or routine maintenance.",
			image: "images/sidra.webp",
			technologies: ["Svelte", "Typescript", "Tailwind", "HTML", "CSS", "Golang"],
			// githubUrl: "https://github.com/username/minesafe",
			// liveUrl: "https://minesafe-demo.com",
			featured: false,
			features: ["PostgressSQL", "MongoDB", "Redis", "MySQL"],
			status: "In Development"
		},
		{
			id: 3,
			title: "Warehouse Management System",
			description: "A Warehouse Management System (WMS) is a specialized software platform designed to control, optimize, and automate the daily operations of a warehouse or distribution center..",
			fullDescription: "A Warehouse Management System (WMS) is a robust software application and associated processes designed to provide complete visibility and control over the entire inventory and operations within a warehouse or distribution center, from the moment goods arrive at the receiving dock until they ship out to customers.",
			image: "images/wms.webp",
			technologies: ["Node.js", "Typescript", "javascript", "Tailwind", "CSS", "Next.js"],
			// githubUrl: "https://github.com/username/minesafe",
			// liveUrl: "https://minesafe-demo.com",
			featured: false,
			features: ["inventory", "management"],
			status: "In Development"
		}
			

	
	];

	// State management
	let showFeaturedOnly: boolean = false;
	let selectedProject: Project | null = null;
	let showModal: boolean = false;

	// Computed values
	$: filteredProjects = showFeaturedOnly 
		? projects.filter(project => project.featured)
		: projects;

	// Functions
	function openProjectModal(project: Project): void {
		selectedProject = project;
		showModal = true;
	}

	function closeModal(): void {
		showModal = false;
		selectedProject = null;
	}
</script>

<section id="projects" class="py-20 bg-white dark:bg-gray-900 rounded-2xl">
	<div class=" mx-auto px-6">
		<!-- Header Section -->
		<div class="text-center mb-10">
			<h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
				My <span class="text-green-600 dark:text-blue-700">Projects</span>
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				Here are some of my recent projects that showcase my skills and experience.
			</p>
			
			<!-- Filter Buttons -->
			<div class="flex justify-center gap-4 mt-8">
				<Button 
					color={!showFeaturedOnly ? 'green' : 'gray'} 
					onclick={() => showFeaturedOnly = false}
					class="transition-all duration-300"
				>
					All Projects ({projects.length})
				</Button>
				<Button 
					color={showFeaturedOnly ? 'green' : 'gray'} 
					onclick={() => showFeaturedOnly = true}
					class="transition-all duration-300"
				>
					Featured Only ({projects.filter(p => p.featured).length})
				</Button>
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredProjects as project (project.id)}
				<Card 
					class="group relative transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col h-full w-full"
				    img="{project.image}" >
					<div class="p-6 flex flex-col flex-grow">
						<!-- Badge -->
						<div class="flex justify-between items-start mb-3">
							{#if project.featured}
								<Badge color="yellow" class="mb-2">
									Featured
								</Badge>
							{/if}
							<Badge color={project.status === 'Completed' ? 'green' : 'blue'} size="small">
								{project.status}
							</Badge>
						</div>

						<!-- Title & Description -->
						<a class="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-blue-400 transition-colors" onclick={() => openProjectModal(project)}>
							{project.title}
						</a>
						<p class="mb-4 flex-grow font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
							{project.description}
						</p>

						<!-- Technologies -->
						<div class="mb-4">
							<div class="flex flex-wrap gap-1">
								{#each project.technologies.slice(0, 3) as tech}
									<Badge color="gray" size="small" class="text-xs">
										{tech}
									</Badge>
								{/each}
								{#if project.technologies.length > 3}
									<Badge color="gray" size="small" class="text-xs">
										+{project.technologies.length - 3} more
									</Badge>
								{/if}
							</div>
						</div>

						<!-- Action Buttons -->
						<!-- <div class="flex justify-between items-center mt-auto pt-4 border-t border-gray-200 dark:border-gray-600">
							
							<Button 
								size="sm"
								color="blue" 
								onclick={() => openProjectModal(project)}
								class="transition-all duration-300"
							>
								Read More →
							</Button>
						</div> -->
					</div>
				</Card>
			{/each}
		</div>
	</div>

	<!-- Project Detail Modal -->
	{#if showModal && selectedProject}
		<Modal 
			
			open={showModal} 
			onclose={closeModal}
			size="xl"
			class="max-h-screen overflow-y-auto"
		>
			<div class="space-y-6">
				<!-- Header -->
				<div class="flex flex-wrap justify-between items-start gap-4">
					<div>
						<div class="flex flex-wrap gap-2 mb-3">
							{#if selectedProject.featured}
								<Badge color="yellow">
									Featured Project
								</Badge>
							{/if}
							<Badge color={selectedProject.status === 'Completed' ? 'green' : 'blue'}>
								{selectedProject.status}
							</Badge>
						</div>
						<h3 class="text-2xl font-bold text-gray-900 dark:text-white">
							{selectedProject.title}
						</h3>
					</div>
					<!-- <div class="flex gap-3">
						{#if selectedProject.githubUrl}
							<a 
								href={selectedProject.githubUrl} 
								target="_blank"
								class="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
							>
								GitHub
							</a>
						{/if}
						{#if selectedProject.liveUrl}
							<a 
								href={selectedProject.liveUrl} 
								target="_blank"
								class="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
							>
								Live Demo
							</a>
						{/if}
					</div> -->
				</div>

				<!-- Project Image -->
				<div class="items-center ">
					<img 
						src={selectedProject.image} 
						alt={selectedProject.title}
						class="lg:w-1/2 lg:float-right lg:mr-10 w-100 h-100 object-cover rounded-2xl mb-10"
					/>
					<div>
						<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h4>
						<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
							{selectedProject.fullDescription}
						</p>
					</div>
				</div>

				<!-- Features -->
				{#if selectedProject.features}
					<div>
						<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-2">
							{#each selectedProject.features as feature}
								<div class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
									✓ {feature}
								</div>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Technologies -->
				<div>
					<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
					<div class="flex flex-wrap gap-2">
						{#each selectedProject.technologies as tech}
							<Badge color="green" class="text-sm">
								{tech}
							</Badge>
						{/each}
					</div>
				</div>
			</div>

			<!-- Modal Footer -->
			<!-- <div slot="footer" class="flex justify-end gap-3">
				<Button color="gray" onclick={closeModal}>
					Close
				</Button>
				{#if selectedProject.liveUrl}
					<Button color="blue" onclick={() => window.open(selectedProject!.liveUrl, '_blank')}>
						Visit Project
					</Button>
				{/if}
			</div> -->
		</Modal>
	{/if}
</section>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		line-clamp: 3;
	}
</style>