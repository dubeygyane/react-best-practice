import { lazy, Suspense } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
const DashBoard = lazy(() => import("./pages/dashboard/Dashboard.jsx"));
const FirstComponent = lazy(() =>
  import("./pages/dashboard/FirstComponent.jsx")
);
const SecondComponent = lazy(() =>
  import("./pages/dashboard/SecondComponent.jsx")
);
const Home = lazy(() =>
  import("./pages/dashboard/Home.jsx")
);

const router = createBrowserRouter([
  
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <DashBoard />
      </Suspense>
    ),
    children: [
      {
        path: "/dashboard/first",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <FirstComponent />
          </Suspense>
        ),
      },
      {
        path: "/dashboard/second",
        element: (
          <Suspense fallback={<div>loading...</div>}>
            <SecondComponent />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Suspense fallback={<div>loading...</div>}>
    <Home />
  </Suspense>
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
