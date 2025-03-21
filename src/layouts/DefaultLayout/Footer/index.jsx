"use client"
import { Box, Container, Divider, Typography, Grid, Link, IconButton, useTheme, useMediaQuery } from "@mui/material"
import { useTranslations } from "next-intl"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import CheckIcon from "@mui/icons-material/Check"
import React from "react"

export default function Footer() {
    const t = useTranslations("Footer")
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [copied, setCopied] = React.useState(false)

    return (
        <Box
            sx={{
                width: "100%",
                paddingTop: "30px",
                paddingBottom: "30px",
                backgroundColor: 'background.default',
                justifyContent: 'center',
                alignItems: 'center',
                userSelect: 'none',
                borderTop: '1px solid #000',
                borderColor: 'text.tertiary'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6} justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Typography
                            gutterBottom
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: 600,
                                position: "relative",
                                display: "inline-block",
                                marginBottom: "20px",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: -8,
                                    left: 0,
                                    width: "40px",
                                    height: "3px",
                                    backgroundColor: "primary.main",
                                },
                            }}
                        >
                            {t("Introduce")}
                        </Typography>
                        <Typography
                            variant="body2"
                            dangerouslySetInnerHTML={{ __html: t("IntroduceValue") }}
                            sx={{
                                textAlign: "justify",
                                lineHeight: 1.8,
                                color: theme.palette.text.secondary,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography
                            gutterBottom
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: 600,
                                position: "relative",
                                display: "inline-block",
                                marginBottom: "20px",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: -8,
                                    left: 0,
                                    width: "40px",
                                    height: "3px",
                                    backgroundColor: "primary.main",
                                },
                            }}
                        >
                            {t("Contact")}
                        </Typography>
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    mb: 2.5,
                                    transition: "transform 0.2s",
                                    "&:hover": {
                                        transform: "translateX(5px)",
                                    },
                                }}
                            >
                                <LocationOnIcon sx={{ mr: 1.5, color: "primary.main", mt: 0.3 }} />
                                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                    {t("AddressValue")}
                                </Typography>
                            </Box>

                            <Link
                                href={`mailto:aptech.fpt@fe.edu.vn`}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2.5,
                                    color: theme.palette.text.secondary,
                                    textDecoration: "none",
                                    transition: "all 0.2s",
                                    "&:hover": {
                                        color: "primary.main",
                                        transform: "translateX(5px)",
                                    },
                                }}
                            >
                                <EmailIcon sx={{ mr: 1.5, color: "primary.main", mt: 0.3 }} />
                                <Typography variant="body2" sx={{ textDecoration: 'underline' }}>aptech.fpt@fe.edu.vn</Typography>
                            </Link>

                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 2.5,
                                    transition: "transform 0.2s",
                                    "&:hover": {
                                        transform: "translateX(5px)",
                                    },
                                }}
                            >
                                <PhoneIcon sx={{ mr: 1.5, color: "primary.main", mt: 0.3 }} />
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                                        (+84) 911 659 131
                                    </Typography>
                                    <IconButton
                                        size="small"
                                        onClick={() => {
                                            navigator.clipboard.writeText("+84911659131")
                                            setCopied(true)
                                            setTimeout(() => setCopied(false), 2000)
                                        }}
                                        sx={{
                                            padding: "2px",
                                            backgroundColor: copied ? "primary.main" : "rgba(0, 0, 0, 0.04)",
                                            transition: "all 0.2s",
                                            "&:hover": {
                                                backgroundColor: copied ? "primary.main" : "rgba(0, 0, 0, 0.08)",
                                            },
                                        }}
                                        aria-label="Copy phone number"
                                    >
                                        {copied ? (
                                            <CheckIcon fontSize="small" sx={{ color: "#fff", fontSize: "16px" }} />
                                        ) : (
                                            <ContentCopyIcon fontSize="small" sx={{ fontSize: "16px" }} />
                                        )}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <Typography
                            gutterBottom
                            sx={{
                                textTransform: "uppercase",
                                fontWeight: 600,
                                position: "relative",
                                display: "inline-block",
                                marginBottom: "20px",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: -8,
                                    left: 0,
                                    width: "40px",
                                    height: "3px",
                                    backgroundColor: "primary.main",
                                },
                            }}
                        >
                            {t("Map")}
                        </Typography>
                        <Box
                            sx={{
                                overflow: "hidden",
                                borderRadius: "12px",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01)",
                                    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
                                },
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.836183466759!2d106.71085757898392!3d10.84539481395111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529564f2b4679%3A0x92c1b5bfdc78c98!2zRlBUIEFwdGVjaCBW4bqhbiBQaMO6Yw!5e0!3m2!1svi!2sus!4v1742491192891!5m2!1svi!2sus"
                                width="100%"
                                height={isMobile ? "250" : "300"}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Divider sx={{ margin: "40px 0px 30px 0px", opacity: 0.6 }} />

            <Container>
                <Box
                    sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "4px",
                    }}
                >
                    © {new Date().getFullYear()} {t("AllRightsReservedBy")}
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: 'bold',
                            color: "primary.main",
                            fontSize: "14px",
                        }}
                    >
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

