import * as Localization from "expo-localization";
import i18n from "i18n-js";
import vi from "./languages/vi.json";
import en from "./languages/en.json";

i18n.fallbacks = true;
i18n.translations = { vi, en };
i18n.locale = Localization.locale;
i18n.defaultLocale = "vi";

export default i18n;
