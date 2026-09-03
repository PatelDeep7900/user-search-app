# User Search App

A React + TypeScript app that fetches users from a public API, lets you search through them, and view detailed profile information — with client-side routing.

## Features

- **Fetches users** from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API
- **Search/filter** users by name in real time
- **User detail view** showing basic info, address, and company details for a selected user
- **Client-side routing** with React Router:
  - `/` redirects to `/users`
  - `/users` — searchable user list
  - `/users/:id` — individual user detail page
  - Any unmatched route — custom 404 page
- **Back navigation** — a back button appears in the header when viewing a user's detail page
- **Loading & error states** via a reusable `StatusMessage` component and animated `Loader`
- **Reusable data-fetching hook** (`useFetch`) with typed generics for loading/error/data state
- **Data-driven detail rendering** — the detail page layout (sections, icons, fields) is defined in a config model (`UserDtlModel`) and rendered dynamically via dot-path field lookup

## Tech Stack

- [React](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — static typing
- [Vite](https://vitejs.dev/) — build tool and dev server
- [React Router](https://reactrouter.com/) — client-side routing
- [react-icons](https://react-icons.github.io/react-icons/) — icon set (Material Design icons)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — fake REST API for user data

## Project Structure

```
src/
├── api/
│   └── user.ts                     # API endpoint URLs/helpers
├── assets/                         # Static assets (images, svgs)
├── components/
│   ├── Header.tsx                   # App header with conditional back button
│   ├── Loader.tsx                   # Loading spinner
│   ├── SearchBar.tsx                # Search input with icon
│   ├── StatusMessage.tsx            # Loading/error state display
│   └── UserCard.tsx                 # Clickable user summary card (links to detail page)
├── hooks/
│   └── useFetch.tsx                 # Generic typed data-fetching hook
├── model/
│   └── UserDtlModel.ts              # Config-driven layout for the user detail page
├── pages/
│   ├── NotFoundPage.tsx             # 404 page
│   ├── UserDetailPage.tsx           # Single user's full details
│   └── UserTypeList.tsx             # Searchable list of all users
├── style/                           # Component-scoped CSS files
├── types/
│   └── user.ts                      # User, UserDetail, and UserDetailModel interfaces
├── App.tsx                          # Root component with route definitions
└── main.tsx                         # App entry point (wraps App in BrowserRouter)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)
- An internet connection (the app fetches live data from JSONPlaceholder)

### Installation

1. Clone or download this repository
2. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

Then open the URL shown in your terminal (typically `http://localhost:5173`) in your browser.

### Building for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder.

## How It Works

- **Browsing users**: On load, the app fetches the user list from JSONPlaceholder and displays each as a clickable card with name and email.
- **Searching**: Type into the search bar to filter the list by name.
- **Viewing details**: Click a user card to navigate to `/users/:id`, which fetches that user's full record and displays it grouped into Basic Details, Address Details, and Company Details sections.
- **Navigating back**: While on a detail page, a back arrow appears in the header to return to the user list.
- **Handling errors/unknown routes**: Network errors show an inline message; visiting an undefined route shows a 404 page with a link back home.

## Type Definitions

```typescript
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
```

## License

This project is open source and available for personal or educational use.