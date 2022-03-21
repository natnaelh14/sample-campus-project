import Layout from "../components/Layout";
import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoutes";
import { useRouter } from "next/router";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const noAuthRequired = [
  "/",
  "/login",
  "/register/who-are-you",
  "/register/user-info",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Layout>
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          )}
        </Layout>
      </AuthContextProvider>
    </Provider>
  );
}

export default MyApp;
