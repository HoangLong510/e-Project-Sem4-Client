import { NextIntlClientProvider, Locale, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "~/i18n/routing";
import { getTranslations } from "next-intl/server";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "~/theme";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export async function generateMetadata({ params }) {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: "MetaData" });

    return {
        title: {
            template: "%s | " + process.env.NEXT_PUBLIC_APP_NAME,
            default:
                t("HomepageTitle") + " | " + process.env.NEXT_PUBLIC_APP_NAME,
        },
        description: t("HomepageDescription"),
    };
}

export default async function RootLayout({ children, params }) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body>
                <NextIntlClientProvider>
                    <AppRouterCacheProvider>
                        <InitColorSchemeScript defaultMode="light" attribute="class" />
                        <ThemeProvider theme={theme} defaultMode="light">
                            <CssBaseline />
                            {children}
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
