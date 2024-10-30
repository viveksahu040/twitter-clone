/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  port : 5000,
  proxy :{
    "/api":{
      target: "http://localhost:5173",
      changeOrigin : true,
    }
  }
  
})*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Port for Vite dev server
    proxy: {
      "/api": {
        target: "http://localhost:5000",  // Target your backend port here
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ""),  // Optional if your backend doesn't use /api prefix
      }
    }
  }
});
