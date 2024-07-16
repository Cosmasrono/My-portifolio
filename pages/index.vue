<template>
  <div class="dark:bg-slate-700 bg-gray-200 min-h-screen ease-zoom-in">
    <UCard class="mt-2 dark:bg-slate-800 bg-gray-200">
      <template #header>
        <div class="flex justify-between items-center flex-row">
          <h1 class="text-2xl font-bold v-font text-gray-900 dark:text-gray-100">My Projects</h1>
          <!-- tabs -->
          <div class="flex space-x-2">
            <div v-for="tab in tabs" :key="tab.name">
              <UButton
                @click="setActiveTab(tab)"
                :class="{
                  'ring-2 ring-blue-600 transition duration-500 ease-in-out capitalize': isTabActive(tab),
                  'bg-transparent dark:bg-transparent': !isTabActive(tab),
                }"
                class="text-gray-900 dark:text-gray-100"
              >
                <div
                  class="flex justify-center items-center"
                  :class="{ 'text-blue-600': isTabActive(tab) }"
                >
                  <span>
                    <Icon
                      :name="tab.name === 'React' ? 'vscode-icons:file-type-reactjs' : 'logos:vue'"
                      class="h-5 w-5"
                    />
                    {{ tab.name }}
                  </span>
                  <Icon
                    :name="isTabActive(tab) ? 'uil:arrow-down' : 'uil:arrow-up'"
                    class="h-5 w-5"
                  />
                </div>
              </UButton>
            </div>
          </div>
        </div>
      </template>
      <template #default>
        <div class="mt-3" />
        <i class="text-center text-sm italic text-gray-700 dark:text-gray-300">Click on the image to view more details</i>
        <div :class="{ 'ease-zoom-in': isReact_Nextjs }" v-if="isReact_Nextjs">
          <DeReactLayout />
        </div>
        <div :class="{ 'ease-zoom-in': isVue_Nuxtjs }" v-if="isVue_Nuxtjs">
          <Delayout />
        </div>
        <div class="mb-3" />
      </template>
      <template #footer>
        <div class="flex justify-start">
          <NuxtLink
            target="__blank"
            class="bg-transparent px-2 text-gray-900 dark:text-gray-100 shadow-none group justify-center items-center flex dark:bg-transparent ring-1 ring-gray-400 hover:bg-gray-300 hover:dark:bg-gray-600 hover:ring-2 hover:ring-gray-500 transition duration-500 ease-in-out hover:opacity-70 py-1 rounded-md"
            to="https://github.com/Cosmasrono?tab=repositories/"
          >
            <Icon name="uil:github" class="mr-2 h-5 w-5" />
            <span>View all on Github</span>
            <Icon name="uil:arrow-right" class="mr-2 h-5 w-5" />
          </NuxtLink>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const tabs = ref([
  { name: "React", isActive: true },
  { name: "Vue", isActive: false },
]);
const isVue_Nuxtjs = ref(false);
const isReact_Nextjs = ref(true);

const activeTab = ref<{ name: string; isActive: boolean }>(tabs.value[0]);

const setActiveTab = (tab: { name: string; isActive: boolean }) => {
  activeTab.value = tab;
};

const isTabActive = (tab: { name: string; isActive: boolean }) => {
  return tab.name === activeTab.value.name;
};
watchEffect(() => {
  if (activeTab.value.name === "React") {
    isReact_Nextjs.value = true;
    isVue_Nuxtjs.value = false;
  } else {
    isReact_Nextjs.value = false;
    isVue_Nuxtjs.value = true;
  }
});
</script>

<style scoped>
.ease-zoom-in {
  animation: zoom-in 0.5s;
}

.ease-zoom-out {
  animation: zoom-out 0.5s;
}

@keyframes zoom-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
