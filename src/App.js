import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
import store from "./utils/store";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header></Header>
        <Body></Body>
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer></MainContainer>
      },
      {
        path: "watch",
        element: <WatchPage></WatchPage>
      }
    ]
  }
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
}

export default App;
