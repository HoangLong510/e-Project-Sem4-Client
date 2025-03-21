import { getTranslations } from 'next-intl/server';
import React from 'react'

export async function generateMetadata({ params }) {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: "MetaData" });

    return {
        title: t("LoginTitle"),
        description: t("LoginDescription"),
    };
}

export default function LoginLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}
