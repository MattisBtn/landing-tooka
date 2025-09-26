export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "slate",
      neutral: "zinc",
    },
    button: {
      defaultVariants: {
        size: "lg",
        color: "primary"
      },
      slots: {
        base: "font-semibold transition-all duration-300 ease-in-out inline-flex items-center justify-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 rounded-xl px-6 py-3 group",
        trailingIcon: "ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1"
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: "bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 shadow-lg shadow-slate-900/20 hover:shadow-lg hover:shadow-slate-900/25"
        },
        {
          color: "primary",
          variant: "outline",
          class: "bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-sm hover:shadow-md"
        }
      ]
    },
    input: {
      defaultVariants: {
        size: "sm",
      },
    },
    selectMenu: {
      defaultVariants: {
        size: "sm",
      },
    },
    textarea: {
      defaultVariants: {
        size: "sm",
      },
    },
    inputMenu: {
      defaultVariants: {
        size: "sm",
      },
    },
  },
  // Force light mode
  colorMode: {
    preference: 'light',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
});
