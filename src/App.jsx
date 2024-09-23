import useTranslate from "./languages/translations";

const App = () => {
  const t = useTranslate;
  return (
    <>
      <div>{t("label.CREATE_ACCOUNT")}</div>
      <div>{t("label.FORGOT_PASSWORD")}</div>
    </>
  );
};

export default App;
