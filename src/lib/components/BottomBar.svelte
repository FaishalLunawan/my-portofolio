<script lang="ts">
  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { FireOutline, SchoolAltOutline, UserCircleSolid, RocketOutline, ThumbsUpOutline, StarOutline } from "flowbite-svelte-icons";
</script>

<BottomNav position="fixed" classes={{ inner: " grid grid-cols-3 w-auto" }}>
  <BottomNavItem btnName="Profile" href="#profile">
    <UserCircleSolid class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Project" href="#project">
    <ThumbsUpOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  <BottomNavItem btnName="Certificate" href="#certificate">
    <StarOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
  </BottomNavItem>
  
</BottomNav>
