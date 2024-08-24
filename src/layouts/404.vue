<template>
  <div class="flex min-h-screen flex-col">
    <NotFoundHeader />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer class="mt-auto" />
  </div>
</template>
