export default defineConfig({
  base: '/Mywebsite/', // Replace with your repo name if deploying to GitHub Pages
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
