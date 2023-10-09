import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default {
  plugins: [react(), svgr()],
  server: {
    port: 3001,
  },
  test: {
    environment: "jsdom",
  },
}
