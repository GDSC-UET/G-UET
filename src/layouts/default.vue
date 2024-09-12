<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <div class="flex-grow">
      <slot />
    </div>
    <Footer class="mt-auto" />
  </div>
</template>
