<script lang="ts">
    let { speed = 25 } = $props();
    
    const techSkills = [
        "JavaScript",
        "TypeScript", 
        "React",
        "Vue.js",
        "Svelte",
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "AWS",
        "Git",
        "REST API",
        "GraphQL",
        "Tailwind CSS",
        "SASS",
        "Jest"
    ];

    let isPaused = $state(false);
    let duplicatedSkills = $derived([...techSkills, ...techSkills]);
</script>

<div 
    class="overflow-hidden relative py-3 bg-gradient-to-br from-green-900 to-gray-900 dark:from-gray-900 dark:to-blue-900 text-white dark:text-gray-200"
>
    <!-- Gradient overlay -->
    <!-- <div class="absolute bg-gradient-to-r from-green-500 to-transparent z-10"></div> -->
    <!-- <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-500 to-transparent z-10"></div> -->
    
    <!-- Running skills -->
    <div 
        class="simple-skills flex whitespace-nowrap items-center {isPaused ? '' : 'animate-scroll-simple'}"
        style="animation-duration: {isPaused ? '0s' : `${speed}s`}"
    >
        {#each duplicatedSkills as skill, index (skill + index)}
            <div class="inline-flex items-center mx-6 font-medium text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                {skill}
            </div>
            
            <!-- Don't add dot after the very last item -->
            {#if index < duplicatedSkills.length - 1}
                <div class="w-1 h-1 bg-white/50 rounded-full mx-4"></div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .animate-scroll-simple {
        animation-name: scrollSimple;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes scrollSimple {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    
    .simple-skills-running {
        position: relative;
        overflow: hidden;
    }
    
    .simple-skills {
        display: flex;
        white-space: nowrap;
        align-items: center;
    }
</style>