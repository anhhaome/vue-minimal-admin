<script setup>
import { inject, ref } from "vue";
import { RouterView } from "vue-router";
import { MConfirmDialog, MInputDialog, MNotification } from "@rugo-vn/vue";

// dialog
const confirmDialog = ref(null);
const inputDialog = ref(null);

const mDialog = inject("mdialog");

mDialog.register({
  confirm: confirmDialog,
  input: inputDialog,
});

// notification
const notification = ref(null);
const mNoti = inject("mnoti");
mNoti.register(notification);

// dashboard
const admin = inject('madmin');
admin.clearNavs();

const navs = [
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
  {
    type: "link",
    name: "Editor",
    href: "/dashboard/editor",
    icon: "create",
  },
  { type: "link", name: "List", href: "/dashboard/list", icon: "list" },
  {
    type: "link",
    name: "Loader",
    href: "/dashboard/loader",
    icon: "reload",
  },
  { type: "link", name: "Input", href: "/dashboard/input", icon: "brush" },
  {
    type: "link",
    name: "Pagination",
    href: "/dashboard/pagination",
    icon: "copy",
  },
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
  {
    type: "link",
    name: "Notification",
    href: "/dashboard/notification",
    icon: "notifications",
  },
  {
    type: "link",
    name: "Common Dialog",
    href: "/dashboard/common-dialog",
    icon: "browsers",
  }
];

for (let item of navs)
  admin.navs.push(item);
</script>

<template>
  <RouterView />

  <MConfirmDialog ref="confirmDialog" />
  <MInputDialog ref="inputDialog" />

  <MNotification ref="notification" />
</template>
