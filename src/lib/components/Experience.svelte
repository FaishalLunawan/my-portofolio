<script lang="ts">
  import { Timeline, TimelineItem, Button, Heading } from "flowbite-svelte";
  import { CaretUpOutline } from "flowbite-svelte-icons";
</script>


<section id="projects" class="max-w-6xl mx-auto px-10 py-10 bg-white dark:bg-gray-900 rounded-2xl">
 <div class="flex items-center justify-center pb-5">
    <Heading class="text-6xl font-bold text-center text-green-600 dark:text-white">Experience</Heading>
  </div>
<Timeline order="vertical">
  <TimelineItem title="Full Stack Developer" date="PT.Pinus Pintar Teknologi, 2024-2025">
    {#snippet orientationSlot()}
      <span class="bg-primary-200 dark:bg-primary-900 absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
        <CaretUpOutline class="shrink-0 h-6 w-6" />
        <!-- <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" /> -->
      </span>
    {/snippet}
    <p class="mb-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
    Full-Stack Engineer skilled in building data-intensive services and internal applications. Developed the core application
for Sidra DB, a cloud-based DBaaS product, managing the complete lifecycle from UI to API and database, enhancing
data accessibility and operational efficiency. Complemented this by engineering a secure, company-wide NFC
Attendance System from concept to deployment
</p>
  </TimelineItem>
    <TimelineItem title="IoT Developer" date="CV.Omah IoT, 2023-2023">
    {#snippet orientationSlot()}
      <span class="bg-primary-200 dark:bg-primary-900 absolute -left-4 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900">
        <CaretUpOutline class="shrink-0 h-6 w-6" />
        <!-- <CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" /> -->
      </span>
    {/snippet}
    <p class="mb-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
   Create and implement applications or systems that connect devices, sensors, and networks to collect and
exchange data.Work with microcontrollers, sensors, and embedded systems, ensuring they communicate properly with server
Analyze system performance, identify bottlenecks, and improve reliability, speed, and energy efficiency.
</p>
  </TimelineItem>
</Timeline>
</section>