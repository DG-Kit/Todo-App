# 📝 React Todo App

Một ứng dụng quản lý công việc (Todo App) hiện đại được xây dựng với React, TypeScript và Material-UI. Ứng dụng cho phép người dùng tạo, quản lý và theo dõi các công việc cần làm với giao diện đẹp mắt và trải nghiệm người dùng mượt mà.

![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.0.4-green.svg)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.2-blue.svg)

## ✨ Tính Năng

- ➕ **Thêm công việc mới** - Tạo todo mới với interface đơn giản
- ✅ **Đánh dấu hoàn thành** - Click checkbox để toggle trạng thái completed/pending
- 💾 **Lưu trữ tự động** - Dữ liệu được lưu vào localStorage, không mất khi reload trang
- 🎨 **Giao diện đẹp** - Sử dụng Material-UI components với thiết kế hiện đại
- 📱 **Responsive Design** - Tối ưu cho mọi kích thước màn hình
- ⚡ **Performance cao** - Được xây dựng với Vite để đảm bảo tốc độ tải nhanh

## 🚀 Demo

![Todo App Preview](https://via.placeholder.com/800x600?text=Todo+App+Preview)

## 🛠️ Công Nghệ Sử Dụng

### Frontend Framework
- **React 19.1.0** - Thư viện JavaScript để xây dựng giao diện người dùng
- **TypeScript 5.8.3** - JavaScript với type safety
- **Vite 7.0.4** - Build tool và dev server siêu nhanh

### UI & Styling
- **Material-UI (MUI) 7.3.2** - React component library
- **@mui/icons-material** - Material Design icons
- **@emotion/react & @emotion/styled** - CSS-in-JS styling
- **@fontsource/roboto** - Roboto font family

### State Management & Utils
- **React Hooks** - useState, useEffect cho state management
- **UUID 11.1.0** - Tạo unique identifiers cho todos
- **LocalStorage API** - Persistent data storage

### Development Tools
- **ESLint** - Code linting và formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📦 Cài Đặt

### Prerequisites
- Node.js >= 18
- npm hoặc yarn

### Hướng dẫn cài đặt

1. **Clone repository**
```bash
git clone https://github.com/YOUR_USERNAME/react-vite-todo-app.git
cd react-vite-todo-app
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy ứng dụng ở chế độ development**
```bash
npm run dev
```

4. **Mở trình duyệt và truy cập**
```
http://localhost:5173
```

## 🏗️ Scripts

```bash
npm run dev      # Chạy development server
npm run build    # Build cho production
npm run preview  # Preview production build
npm run lint     # Chạy ESLint
```

## 📁 Cấu Trúc Project

```
react-vite-todo-app/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── CreateNewTodo.tsx   # Form thêm todo mới
│   │   ├── Todo.tsx           # Component todo item
│   │   └── TodoList.tsx       # Danh sách todos
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite type declarations
├── package.json           # Dependencies và scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── .gitignore            # Git ignore rules
```

## 🔧 Cách Sử Dụng

1. **Thêm Todo Mới**
   - Nhập nội dung công việc vào ô input
   - Click nút "Thêm" để tạo todo mới

2. **Đánh Dấu Hoàn Thành**
   - Click vào icon checkbox bên phải mỗi todo
   - Todo sẽ chuyển đổi giữa trạng thái pending (⬜) và completed (✅)

3. **Lưu Trữ Tự Động**
   - Mọi thay đổi được lưu tự động vào localStorage
   - Dữ liệu sẽ được khôi phục khi mở lại ứng dụng

## 📄 Bản Quyền

Dự án này được phân phối dưới giấy phép **MIT License**. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

```
MIT License

Copyright (c) 2025 React Todo App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Tác Giả

**React Todo App Team**
- Website: [Đang cập nhật]
- Email: anhkietdang23@gmail.com
- GitHub: [DG-Kit](https://github.com/DG-Kit)

---

⭐ **Nếu bạn thấy project hữu ích, hãy cho một star để ủng hộ chúng tôi!** ⭐