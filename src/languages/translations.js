import { useMemo } from "react";

const translations = {
  "label.CREATE_ACCOUNT": "Create Account",
  "label.FORGOT_PASSWORD": "Forgot Password?",
};

const useTranslate = (key) => {
  return useMemo(() => translations[key], [key]);
};

export default useTranslate;
