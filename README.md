# Dev Insights Mini Blog

A simple internal mini blog built with **React, TypeScript, and Vite**. The project demonstrates reusable React components, TypeScript type safety, styling, conditional rendering, and basic React performance optimization.

## 🚀 Features

* Built with React and TypeScript
* Fast development setup using Vite
* Reusable `Header`, `PostList`, and `Post` components
* Displays multiple blog posts
* TypeScript interfaces for type safety
* Responsive and modern styling
* Conditional styling for blog content
* Uses unique React `key` values when rendering lists
* Uses `React.memo` to optimize the `Post` component
* Includes a `withLogger` Higher-Order Component (HOC)
* Clean and organized project structure

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* CSS
* HTML5
* JavaScript/JSX

## 📁 Project Structure

```text
dev-insights/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Post.tsx
│   │   └── PostList.tsx
│   ├── hoc/
│   │   └── withLogger.tsx
│   ├── types/
│   │   └── Post.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <https://github.com/maridadithierry/formative1-mini-blog.git>
```

Navigate into the project:

```bash
cd dev-insights
```

Install the dependencies:

```bash
npm install
```

## ▶️ Running the Project

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🧩 React Components

### Header

The `Header` component provides the main navigation and title for the Mini Blog.

### PostList

The `PostList` component manages and displays a collection of blog posts.

### Post

The `Post` component is reusable and receives a post through props. It is optimized using `React.memo`.

### withLogger

The `withLogger` Higher-Order Component adds logging behavior to components. It logs when a wrapped component is mounted and unmounted.

## 🔷 TypeScript

TypeScript is used to define the structure of blog posts and component props.

Example:

```tsx
interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
}
```

This helps catch type-related errors during development and makes the code easier to maintain.

## ⚡ Performance Optimization

The `Post` component uses `React.memo` to avoid unnecessary re-renders when its props have not changed.

The project also uses unique `key` values when rendering lists so React can efficiently identify individual elements.

## 🎨 Styling

The application uses CSS to create a clean, responsive blog interface.

Styling includes:

* Responsive layouts
* Blog post cards
* Hover effects
* Typography
* Spacing and layout
* Conditional styling

## 📚 What I Learned

Through this project, I practiced:

* Building React applications with Vite
* Using TypeScript with React
* Creating reusable components
* Passing and typing props
* Rendering lists with `.map()`
* Using React `key` values
* Applying conditional styling
* Using `React.memo` for optimization
* Creating and using Higher-Order Components
* Organizing a React project
