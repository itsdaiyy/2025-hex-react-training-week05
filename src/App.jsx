import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

import { checkLogin } from "./services/apiAuth";

import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import ClientPage from "./pages/ClientPage";

function App() {
  // 儲存使用者認證狀態
  const [isAuth, setIsAuth] = useState(false);
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await checkLogin();
      if (res?.success) setIsAuth(true);
    })();
  }, []);

  return (
    <div className="my-5">
      <ClientPage
        setIsScreenLoading={setIsScreenLoading}
        isScreenLoading={isScreenLoading}
      />
      {isAuth ? (
        <AdminDashboard setIsScreenLoading={setIsScreenLoading} />
      ) : (
        <Login setIsAuth={setIsAuth} />
      )}

      {isScreenLoading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.3)",
            zIndex: 999,
          }}
        >
          <ReactLoading type="spin" color="black" width="4rem" height="4rem" />
        </div>
      )}
      <Toaster />
    </div>
  );
}

export default App;
