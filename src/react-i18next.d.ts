// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import En from "locales/en/translations.json";
import De from "locales/de/translations.json";


// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    En: typeof En;
    De: typeof De;
  }
}
// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'De';
    // custom resources type
    resources: {
        En: typeof En;
        De: typeof De;
    };
  }
}