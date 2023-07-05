import React, { useEffect } from "react";
import "./App.css";

// i18next
import { useTranslation } from "react-i18next";

// components
import AppRoutes from "./AppRoutes";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getAuthenticatedUser } from "./features/authentication/redux/authSlice";
import LanguageSwitcher from "./features/common/components/LanguageSwitcher";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  const isAuthenticated = useAppSelector(
    (state: any) => state.auth.isAuthenticated
  );

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    if (isAuthenticated === true) {
      dispatch(getAuthenticatedUser());
    }
  }, []);
  return (
    <div className="App">
      <AppRoutes />
      <LanguageSwitcher />
    </div>
  );
};

export default App;
