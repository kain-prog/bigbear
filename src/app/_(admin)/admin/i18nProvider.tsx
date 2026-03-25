import polyglotI18nProvider from 'ra-i18n-polyglot';
import pt from 'ra-language-pt-br';

const translations: any = { pt };

export const i18nProvider = polyglotI18nProvider(
    locale => translations[locale],
    'pt',
    [{ locale: 'pt', name: 'Português (Brasil)' }],
);