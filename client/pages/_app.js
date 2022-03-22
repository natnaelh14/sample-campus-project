import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoutes";
import { useRouter } from "next/router";
import { SubscriptionContext } from "../context/SubscriptionContext";
import { nextLocalStorage } from '../utils/utils';
const noAuthRequired = [
  "/",
  "/login",
  "/register/who-are-you",
  "/register/user-info",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [subMarket, setSubMarket] = useState(nextLocalStorage()?.getItem('submarket'));
  const [subscription, setSubscription] = useState(nextLocalStorage()?.getItem('subscription'));

  useEffect(() => {
    nextLocalStorage()?.setItem('submarket', JSON.stringify(subMarket))
    nextLocalStorage()?.setItem('subscription', JSON.stringify(subscription))
  }, [subMarket, subscription])
  return (
    <SubscriptionContext.Provider value={{subMarket, setSubMarket, subscription, setSubscription}}>
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
    </SubscriptionContext.Provider>
  );
}

export default MyApp;
