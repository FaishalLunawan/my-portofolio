<script>
  import { onMount } from 'svelte';
  
  let circles = [];
  let mouseX = 0;
  let mouseY = 0;
  let isHovering = false;
  
  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    
    if (!isHovering) {
      // Add new circle at cursor position
      circles.push({
        id: Date.now(),
        x: mouseX,
        y: mouseY,
        size: Math.random() * 40 + 30,
        color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)` // Warna biru-hijau
      });
      
      // Limit the number of circles
      if (circles.length > 8) {
        circles = circles.slice(1);
      }
    }
  }
  
  function handleMouseEnter() {
    isHovering = true;
  }
  
  function handleMouseLeave() {
    isHovering = false;
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div 
  class="background-container"
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  {#each circles as circle (circle.id)}
    <div
      class="floating-circle"
      style="
        left: {circle.x}px;
        top: {circle.y}px;
        width: {circle.size}px;
        height: {circle.size}px;
        background: {circle.color};
        opacity: {0.3 + (circle.size / 100)};
      "
    />
  {/each}
  
  <!-- Static background gradients -->
  <div class="static-gradient static-gradient-1" />
  <div class="static-gradient static-gradient-2" />
  <div class="static-gradient static-gradient-3" />
</div>

<style>
  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
  }
  
  .floating-circle {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-out;
    filter: blur(40px);
    mix-blend-mode: soft-light;
    animation: float 6s ease-in-out infinite;
  }
  
  .static-gradient {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.15;
    mix-blend-mode: overlay;
  }
  
  .static-gradient-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(45deg, #4ecdc4, #44a08d);
    top: 10%;
    left: 10%;
    animation: float-static 8s ease-in-out infinite;
  }
  
  .static-gradient-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #96ceb4, #45b7d1);
    bottom: 20%;
    right: 15%;
    animation: float-static 10s ease-in-out infinite reverse;
  }
  
  .static-gradient-3 {
    width: 350px;
    height: 350px;
    background: linear-gradient(45deg, #ffeaa7, #fdcf6b);
    top: 50%;
    left: 70%;
    animation: float-static 12s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  
  @keyframes float-static {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
</style>