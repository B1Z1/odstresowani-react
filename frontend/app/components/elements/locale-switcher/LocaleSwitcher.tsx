import React from 'react';
import { NextRouter, useRouter } from 'next/router';
import { ApiLocale } from 'app/api/utils/locale/ApiLocale';
import { apiParseLocale } from 'app/api/utils/locale/apiParseLocale';
import { CustomLink } from 'app/components/elements/link/CustomLink';

type LocaleNames = { [key in ApiLocale]: string }
type LocaleLinks = { [key in ApiLocale]: ApiLocale }

const localeNames: LocaleNames = {
    [ApiLocale.PL]: 'English',
    [ApiLocale.EN]: 'Polski'
};

const localeLinks: LocaleLinks = {
    [ApiLocale.EN]: ApiLocale.PL,
    [ApiLocale.PL]: ApiLocale.EN
};

export function LocaleSwitcher() {
    const { locale }: NextRouter = useRouter();
    const parsedLocale: ApiLocale = apiParseLocale(locale);
    const localeLink: ApiLocale = localeLinks[parsedLocale];
    const localeName: string = localeNames[parsedLocale];

    return (
        <CustomLink href="/" locale={ localeLink }>
            { localeName }
        </CustomLink>
    );
}