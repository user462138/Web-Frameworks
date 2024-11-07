import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { DataProvider } from './components/DataContext.tsx'
import { ThemeProvider } from './components/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </DataProvider>,
)
