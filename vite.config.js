import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        reservation: resolve(__dirname, 'reservation.html'),
        gallery: resolve(__dirname, 'gallery.html')
      }
    }
  }
})