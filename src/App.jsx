import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Feed from './layout/Feed';

import { AppContext } from './context/apiContext';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Feed /> },
      { path: '/search-result/:searchQuery', element: <Feed /> },
      { path: '/video/:id', element: <h1>video</h1> },
    ],
  },
]);

function App() {
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  );
}

export default App;
