"use client"
import { Box, Container, Typography, useTheme, alpha } from "@mui/material"
import Image from "next/image"
import { Link, usePathname } from "~/i18n/navigation"
import { useTranslations } from "next-intl"
import HeaderSearch from "./HeaderSearch"
import HeaderAuth from "./HeaderAuth"
import HeaderSettings from "./HeaderSettings"
import menuItems from "./menuItems"

export default function Header() {
    const t = useTranslations("Header")
    const theme = useTheme()
    const pathname = usePathname()

    return (
        <Box
            sx={{
                zIndex: 2,
                position: "sticky",
                top: 0,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "background.default",
                justifyContent: "center",
                alignItems: "center",
                userSelect: "none",
                borderBottom: "1px solid",
                borderColor: "divider",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
        >
            <Container
                sx={{
                    height: "100%",
                    display: "flex",
                    height: "70px",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                }}
            >
                {/* Left */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: { xs: "20px", md: "40px" },
                        height: "100%",
                    }}
                >
                    <Link
                        href={"/"}
                        style={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Image src="/favicon.ico" width={"45"} height={"45"} alt="logo" priority />
                    </Link>

                    {/* Menu Items */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        {menuItems.map((item) => {
                            const isActive = item.label === "Homepage" ? pathname === item.href : pathname.startsWith(item.href)
                            const Icon = item.icon

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    style={{
                                        textDecoration: "none",
                                        height: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "42px",
                                            display: "flex",
                                            alignItems: "center",
                                            position: "relative",
                                            px: 2,
                                            mx: 0.5,
                                            borderRadius: "21px",
                                            backgroundColor: isActive ? alpha(theme.palette.primary.main, 0.1) : "transparent",
                                            transition: "all 0.3s ease",

                                            "&:hover": {
                                                backgroundColor: isActive
                                                    ? alpha(theme.palette.primary.main, 0.15)
                                                    : alpha(theme.palette.text.tertiary, 0.8),
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                            }}
                                        >
                                            <Icon
                                                sx={{
                                                    fontSize: 20,
                                                    color: isActive ? "primary.main" : "text.secondary",
                                                    transition: "color 0.3s ease",
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    color: isActive ? "primary.main" : "text.secondary",
                                                    fontSize: "13px",
                                                    fontWeight: isActive ? 600 : 500,
                                                    letterSpacing: "0.2px",
                                                    transition: "color 0.3s ease",
                                                }}
                                            >
                                                {t(item.label)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Link>
                            )
                        })}
                    </Box>
                </Box>

                {/* Right */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <HeaderSearch />
                    <HeaderSettings />
                    <HeaderAuth />
                </Box>
            </Container>
        </Box>
    )
}

