'use client'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { IconButton, Tooltip, useColorScheme } from '@mui/material'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function HeaderSearch() {
    const t = useTranslations("Header")
    let darkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const { mode } = useColorScheme();

    if (mode && mode !== 'system') {
        darkMode = mode === 'dark'
    }

    return (
        <>
            <Tooltip title={t("Search")}>
                <IconButton>
                    <Image
                        src={!darkMode ? "/assets/icons/search-light.svg" : "/assets/icons/search-dark.svg"}
                        alt="search-svgrepo-com"
                        width={26}
                        height={26}
                    />
                </IconButton>
            </Tooltip>
        </>
    )
}
