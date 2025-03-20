'use client'
import { Box, Divider, Drawer, IconButton, Tooltip, Typography, useColorScheme, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import LocaleSelect from '~/components/Select/LocaleSelect'
import ModeSelect from '~/components/Select/ModeSelect'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslations } from 'next-intl'

export default function HeaderSettings() {
    const t = useTranslations("Header")

    let darkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const { mode } = useColorScheme();

    if (mode && mode !== 'system') {
        darkMode = mode === 'dark'
    }

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Tooltip title={t("Settings")}>
                <IconButton onClick={toggleDrawer(true)}>
                    <Image
                        src={!darkMode ? "/assets/icons/setting-light.svg" : "/assets/icons/setting-dark.svg"}
                        alt="setting-icon"
                        width={26}
                        height={26}
                    />
                </IconButton>
            </Tooltip>
            <Drawer
                open={open}
                onClose={toggleDrawer(false)}
                anchor='right'
            >
                <Box sx={{ width: 300 }} role="presentation">
                    <Box sx={{
                        height: '65px',
                        width: '100%',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography sx={{
                            fontWeight: 500,
                            color: 'text.secondary',
                            userSelect: 'none'
                        }}>
                            {t("Settings")}
                        </Typography>

                        <IconButton onClick={toggleDrawer(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider />

                    <Box sx={{
                        width: '100%',
                        padding: '20px'
                    }}>
                        <Typography sx={{
                            mb: 1,
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'text.secondary',
                            userSelect: 'none'
                        }}>
                            {t("Mode")}
                        </Typography>

                        <ModeSelect />
                    </Box>

                    <Divider />

                    <Box sx={{
                        width: '100%',
                        padding: '20px'
                    }}>
                        <Typography sx={{
                            mb: 1,
                            fontSize: '14px',
                            fontWeight: 500,
                            color: 'text.secondary',
                            userSelect: 'none'
                        }}>
                            {t("Languages")}
                        </Typography>

                        <LocaleSelect />
                    </Box>

                    <Divider />
                </Box>
            </Drawer>
        </>
    )
}
