import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNavLinks, getServiceLinks } from "@/config/constants";

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  // Pre-computed link arrays from centralized config
  const menuItems = getNavLinks(t).map((link) => ({
    ...link,
    hasDropdown: link.key === "services",
  }));
  const servicesLinks = getServiceLinks(t);

  return (
    <header className="fixed top-0 w-full bg-[rgb(229,229,223)]/90 backdrop-blur-md shadow-sm z-50 border-b border-(--color-primary)/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center transition-transform hover:scale-[1.02] duration-300"
        >
          <img
            src="/src/assets/images/Logo Aqua.png"
            alt="Logo Aqua"
            className="h-full w-20 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                to={item.path}
                className="text-(--color-bg-dark) hover:text-(--color-primary) transition-colors font-semibold text-sm relative py-2"
                onClick={() =>
                  item.hasDropdown && setIsServicesOpen(!isServicesOpen)
                }
              >
                {item.label}
                {item.hasDropdown && (
                  <span
                    className={`ml-1 inline-block transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                )}
              </Link>

              {item.hasDropdown && isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-(--color-bg-light) rounded-xl shadow-xl border border-(--color-primary)/10 py-3 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col">
                    {servicesLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="px-5 py-3 text-sm font-medium text-(--color-bg-dark) hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-all"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-(--color-bg-dark) hover:text-(--color-primary) transition-colors px-3 py-1 rounded-lg hover:bg-(--color-primary)/10"
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </button>

          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center font-semibold transition-all duration-300 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] bg-(--color-primary) text-white hover:bg-(--color-primary-hover) px-6 py-2.5 text-sm"
          >
            {t("header.cta")}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-(--color-bg-dark) text-2xl focus:outline-none p-2 rounded-lg hover:bg-(--color-primary)/10 transition-colors"
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[rgb(229,229,223)] border-t border-(--color-primary)/20">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-(--color-bg-dark) hover:text-(--color-primary) hover:bg-(--color-primary)/10 transition-all font-medium py-3 px-4 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center font-semibold transition-all duration-300 rounded-xl bg-(--color-primary) text-white hover:bg-(--color-primary-hover) py-4 text-base w-full shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("header.cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
