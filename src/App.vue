<script setup>
import RugoLogo from './assets/images/logo.svg'
import { NAVS } from './constants'

// const navs = [
//   { title: 'Overview' },
//   {
//     title: 'Dashboard',
//     icon: 'Squares2X2Icon',
//     children: [
//       { title: 'Simple', icon: 'CheckBadgeIcon', action: '/' },
//       { title: 'Complex', icon: 'ClipboardDocumentCheckIcon', action: '/' }
//     ]
//   },
//   {
//     title: 'Analytic',
//     icon: 'ChartBarSquareIcon',
//     children: [
//       { title: 'Simple', icon: 'CheckBadgeIcon', action: '/' },
//       { title: 'Complex', icon: 'ClipboardDocumentCheckIcon', action: '/' }
//     ]
//   },
//   { title: 'Explorer', icon: 'MagnifyingGlassIcon', action: '/' },
//   { title: 'UI Components' },
//   {
//     title: 'Common',
//     icon: 'RectangleGroupIcon',
//     children: [
//       { title: 'Button', action: '/' },
//       { title: 'Input', action: '/' },
//       { title: 'Grid', action: '/' },
//       { title: 'Typography', action: '/' }
//     ]
//   },
//   {
//     title: 'Hyper Table',
//     icon: 'CalculatorIcon',
//     action: ROUTE.HYPER_TABLE
//   },
//   { title: 'Personal' },
//   { title: 'Profile', icon: 'UserIcon', action: '/' },
//   { title: 'Secure', icon: 'LockClosedIcon', action: '/' },
//   { title: 'Logout', icon: 'ArrowLeftOnRectangleIcon', action: '/' }
// ]
</script>

<template>
  <RApp>
    <template #left>
      <RSideNavPanel :data="NAVS">
        <template #header>
          <RListItem>
            <template #start>
              <RugoLogo class="w-8 h-8" />
            </template>

            <RHeading type="h1" class="ml-2">Rugo Vue</RHeading>
          </RListItem>
        </template>

        <template #footer>
          <div class="text-center w-full text-xs text-gray-500">
            Copyright &copy; 2023 - @rugo-vn/vue
          </div>
        </template>
      </RSideNavPanel>
    </template>

    <template #top>
      <RTopPanel></RTopPanel>
    </template>

    <div class="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <RouterView />
    </div>
  </RApp>
</template>
