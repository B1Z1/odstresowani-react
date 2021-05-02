import { ApiLocale } from 'app/api/utils/locale/ApiLocale';

export function apiParseLocale(locale: string | undefined): ApiLocale {
    if (!locale) {
        return ApiLocale.PL;
    }

    return ApiLocale[locale.toUpperCase()] || ApiLocale.PL;
}
