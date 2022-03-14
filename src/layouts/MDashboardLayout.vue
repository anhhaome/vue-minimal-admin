<script setup>
import { ref } from "vue";
import { RouterView, RouterLink, useRoute } from "vue-router";
import AppLogo from "../components/AppLogo.vue";

const props = defineProps(["items"]);

const route = useRoute();
const controlLeftSidebar = ref(false);

const isSameRoute = item => item.name === route.name || item.active;

const navigations = props.items || [
  { type: "label", name: "Overview" },
  { type: "link", name: "Introduction", href: "/dashboard", icon: "home" },
  { type: "label", name: "Components" },
  {
    type: "link",
    name: "Alert",
    href: "/dashboard/alert",
    icon: "alert-circle",
  },
  {
    type: "link",
    name: "Breadcrumb",
    href: "/dashboard/breadcrumb",
    icon: "link",
  },
  {
    type: "link",
    name: "Button",
    href: "/dashboard/button",
    icon: "play-circle",
  },
  {
    type: "link",
    name: "Checkbox",
    href: "/dashboard/checkbox",
    icon: "checkbox",
  },
  { type: "link", name: "Dialog", href: "/dashboard/dialog", icon: "browsers" },
  {
    type: "link",
    name: "Dropdown",
    href: "/dashboard/dropdown",
    icon: "caret-down",
  },
  { type: "link", name: "List", href: "/dashboard/list", icon: "list" },
  { type: "link", name: "Input", href: "/dashboard/input", icon: "brush" },
  { type: "link", name: "Table", href: "/dashboard/table", icon: "server" },
  { type: "label", name: "Pages" },
  { type: "link", name: "Error", href: "error-page", icon: "bug" },
  { type: "link", name: "Info", href: "info-page", icon: "information-circle" },
  {
    type: "link",
    name: "Success",
    href: "success-page",
    icon: "shield-checkmark",
  },
  { type: "link", name: "Warn", href: "warn-page", icon: "warning" },
  { type: "label", name: "Plugins" },
  { type: "link", name: "Database", href: "/dashboard/db", icon: "file-tray" },
  { type: "link", name: "Http", href: "/dashboard/http", icon: "cloud-done" },
  { type: "link", name: "Notification", href: "/dashboard/notification", icon: "notifications" },
  {
    type: "link",
    name: "Common Dialog",
    href: "/dashboard/common-dialog",
    icon: "browsers",
  },
];
</script>

<template>
  <!-- RIGHT SIDEBAR -->
  <input type="checkbox" class="hidden peer" id="m-control-right-sidebar" />
  <label
    for="m-control-right-sidebar"
    class="fixed top-0 left-0 w-screen h-screen z-30 hidden peer-checked:block"
  ></label>
  <div
    class="fixed h-screen w-64 top-0 right-[-16rem] shadow transition-size z-30 bg-white peer-checked:right-0 dark:bg-[#1d2432] dark:border-[#292f3d] dark:border-l"
  >
    <header
      class="bg-primary-500 text-white h-16 w-full px-4 flex justify-between items-center"
    >
      <div class="uppercase font-semibold tracking-wider">Settings</div>
      <label for="m-control-right-sidebar" class="cursor-pointer">
        <ion-icon class="text-2xl" name="close"></ion-icon>
      </label>
    </header>

    <main>
      <h5 class="px-3 h-10 flex items-center text-xs uppercase tracking-wider">
        Theme
      </h5>
      <div class="flex items-center justify-center">
        <div class="uppercase text-stone-500 pt-1 px-2 text-sm">Light</div>
        <div class="text-xl">
          <input class="hidden peer" id="m-theme-selector" type="checkbox" />
          <label
            class="inline-block bg-stone-200 rounded-full w-[2em] h-[1em] select-none align-middle dark:bg-stone-700 before:block before:w-[0.9em] before:h-[0.9em] before:m-[0.05em] before:rounded-full before:bg-white before:shadow dark:before:bg-black before:transition-size peer-checked:bg-black peer-checked:before:ml-[1.05em] dark:peer-checked:bg-white"
            for="m-theme-selector"
          ></label>
        </div>
        <div class="uppercase text-stone-500 pt-1 px-2 text-sm">Dark</div>
      </div>
    </main>
  </div>
  <!-- RIGHT SIDEBAR CLOSED -->

  <!-- WRAPPER -->
  <div>
    <!-- LEFT SIDEBAR -->
    <input
      type="checkbox"
      class="hidden peer"
      id="m-control-left-sidebar"
      v-model="controlLeftSidebar"
    />
    <label
      for="m-control-left-sidebar"
      class="fixed top-0 left-0 w-screen h-screen z-30 bg-white bg-opacity-80 hidden peer-checked:block md:hidden md:peer-checked:hidden dark:bg-black dark:bg-opacity-80"
    ></label>
    <div
      id="m-left-sidebar"
      class="z-30 bg-white border-r fixed left-[-16rem] top-0 w-64 h-screen transition-size group mactive:left-0 md:left-0 md:mactive:w-16 dark:bg-[#1d2432] dark:border-[#292f3d]"
      :active="controlLeftSidebar ? true : null"
    >
      <header
        class="h-16 w-full px-4 flex items-center justify-center border-b dark:border-[#292f3d]"
      >
        <slot name="logo">
          <AppLogo :responsive="true" />
        </slot>
      </header>

      <nav
        class="h-[calc(100vh-4rem)] w-full px-2 overflow-hidden myscroll hover:overflow-y-auto"
      >
        <template v-for="item in navigations">
          <h5
            v-if="item.type === 'label'"
            class="px-3 h-10 flex items-center text-xs uppercase tracking-wider relative my-2 after:hidden after:h-[1px] after:w-full after:bg-gray-200 after:absolute after:top-1/2 after:left-0 md:group-mactive:first:hidden md:group-mactive:after:block md:group-mactive:h-0 dark:after:bg-[#292f3d]"
          >
            <span class="md:group-mactive:hidden">{{ item.name }}</span>
          </h5>
          <RouterLink
            :to="item.href"
            v-else
            class="flex items-center my-2 h-10 rounded mactive:bg-primary-500 mactive:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
            :active="isSameRoute(item) ? true : null"
          >
            <ion-icon
              class="block text-xl px-3"
              :name="`${item.icon}${
                isSameRoute(item) ? '' : '-outline'
              }`"
            ></ion-icon>
            <span class="block md:group-mactive:hidden">{{ item.name }}</span>
          </RouterLink>
        </template>
      </nav>
    </div>
    <!-- LEFT SIDEBAR CLOSED -->

    <!-- MAIN CONTENT -->
    <div
      id="m-main-content"
      class="bg-gray-50 group ml-auto transition-size w-full md:w-[calc(100%-16rem)] md:mactive:w-[calc(100%-4rem)] dark:bg-gray-900"
      :active="controlLeftSidebar ? true : null"
    >
      <!-- TOPBAR -->
      <header
        class="fixed top-0 right-0 h-16 bg-white border-b border-gray-100 z-20 flex items-center justify-between transition-size w-full md:w-[calc(100%-16rem)] md:group-mactive:w-[calc(100%-4rem)] dark:bg-[#1d2432] dark:border-[#292f3d]"
      >
        <label
          for="m-control-left-sidebar"
          class="px-2 mx-4 flex items-center cursor-pointer"
        >
          <ion-icon class="text-xl scale-[1.1]" name="menu-outline"></ion-icon>
        </label>
        <slot name="topbar">
          <div class="h-16 px-4 flex items-center md:hidden">
            <slot name="logo">
              <AppLogo />
            </slot>
          </div>
        </slot>
        <label
          for="m-control-right-sidebar"
          class="px-2 mx-4 flex items-center cursor-pointer"
        >
          <ion-icon class="text-xl" name="settings-outline"></ion-icon>
        </label>
      </header>
      <!-- TOPBAR CLOSED -->

      <!-- CONTENT -->
      <main class="min-h-[calc(100vh-4rem)] w-full p-4 mt-16">
        <slot>
          <RouterView />
        </slot>
      </main>
    </div>
  </div>
</template>
