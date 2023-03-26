// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import en from "locales/en/translations.json";
import de from "locales/de/translations.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      en: typeof en;
      de: typeof de;
    };
    // other
  }
}