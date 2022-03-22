import Layout from "../components/Layout";
import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoutes";
import { useRouter } from "next/router";

const noAuthRequired = [
  "/",
  "/login",
  "/register/who-are-you",
  "/register/user-info",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
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
  );
}

export default MyApp;
