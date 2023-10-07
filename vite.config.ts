import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  server: {
    port: 3001,
  },
  test: {
    environment: "jsdom",
  },
}
