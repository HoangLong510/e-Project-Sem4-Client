import {
    Box,
    Container,
    Typography
} from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Link } from '~/i18n/navigation'
import menuItems from './menuItems'
import { useTranslations } from 'next-intl'
import HeaderSearch from './HeaderSearch'
import HeaderAuth from './HeaderAuth'
import HeaderSettings from './HeaderSettings'

export default function Header() {
    const t = useTranslations("Header")

    return (
        <Box sx={{
            zIndex: 2,
            position: 'sticky',
            top: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'background.default',
            justifyContent: 'center',
            alignItems: 'center',
            userSelect: 'none',
            borderBottom: '1px solid #000',
            borderColor: 'text.tertiary'
        }}>
            <Container sx={{
                height: '100%',
                display: 'flex',
                height: '65px',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            }}>
                {/* Left */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '40px',
                    height: '100%'
                }}>
                    <Link href={'/'} style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Image src='/favicon.ico'
                            width={'45'}
                            height={'45'}
                            alt='logo'
                            priority
                        />
                    </Link>

                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        gap: '40px',
                        height: '100%'
                    }}>
                        {menuItems.map(item => {
                            return (
                                <Link href={item.href} key={item.label} style={{ textDecoration: 'none', height: '100%', display: 'flex', alignItems: 'center' }}>
                                    <Typography
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            color: 'text.secondary',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                            "&:hover": {
                                                color: 'primary.main',
                                            }
                                        }}
                                    >
                                        {t(item.label)}
                                    </Typography>
                                </Link>
                            )
                        })}
                    </Box>
                </Box>

                {/* Right */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <HeaderSearch />
                    <HeaderSettings />
                    <HeaderAuth />
                </Box>
            </Container>
        </Box>
    )
}
