// Import StrictMode từ React để phát hiện các vấn đề tiềm ẩn trong ứng dụng
import { StrictMode } from 'react'
// Import createRoot từ react-dom/client để tạo root cho React 18
import { createRoot } from 'react-dom/client'
// Import file CSS global cho toàn bộ ứng dụng
import './index.css'
// Import component App chính của ứng dụng
import App from './App.tsx'

// Tạo root element và render ứng dụng React
// document.getElementById('root')!: 
// - Lấy element có id="root" từ HTML
// - ! là non-null assertion operator, báo cho TypeScript biết element này không null
createRoot(document.getElementById('root')!).render(
  // StrictMode wrapper để:
  // - Phát hiện các side effects không mong muốn
  // - Cảnh báo về các API deprecated
  // - Kích hoạt các checks và warnings bổ sung
  <StrictMode>
    {/* Component App chính của ứng dụng */}
    <App />
  </StrictMode>,
)
