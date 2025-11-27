import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  theme:{
    container:{
      center:true,
      padding: {
        DEFAULT:'1rem',
        sm: '2rem',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar