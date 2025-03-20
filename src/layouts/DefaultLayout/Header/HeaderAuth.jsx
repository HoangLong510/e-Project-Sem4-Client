'use client'
import {
    Button
} from '@mui/material'
import React from 'react'
import Image from 'next/image';
import { Link, usePathname } from '~/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function HeaderAuth() {
    const t = useTranslations("Header")
    const pathname = usePathname()

    return (
        <>
            <Link href={{ pathname: '/auth/login', query: { redirectTo: pathname } }} style={{ marginLeft: '10px' }} >
                <Button
                    variant='contained'
                    startIcon={
                        <Image
                            src="/assets/icons/login-dark.svg"
                            alt="login-icon"
                            width={25}
                            height={25}
                        />
                    }
                    sx={{
                        textTransform: 'none'
                    }}
                >
                    {t("SignIn")}
                </Button>
            </Link>
        </>
    )
}
