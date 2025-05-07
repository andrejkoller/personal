export const LanguageSwitcher = () => {
  const handleLanguageChange = (lang) => {
    const currentUrl = window.location.href;
    const newUrl = currentUrl.replace(/\/(en|de)\//, `/${lang}/`);
    window.location.href = newUrl;
  };

  return (
    <ul className="language-switcher-content">
      <button
        onClick={() => handleLanguageChange("en")}
        className="language-button"
      >
        <span className="language-button-text">English</span>
      </button>
      <button
        onClick={() => handleLanguageChange("de")}
        className="language-button"
      >
        <span className="language-button-text">Deutsch</span>
      </button>
      <button
        onClick={() => handleLanguageChange("ru")}
        className="language-button"
      >
        <span className="language-button-text">Русский</span>
      </button>
    </ul>
  );
};
