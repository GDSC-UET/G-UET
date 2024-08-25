export default defineAppConfig({
  ui: {
    strategy: 'override',
    primary: 'blue',
    gray: 'cool',
    horizontalNavigation: {
      before:
        'before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-transparent dark:hover:before:bg-transparent'
    }
  }
})
