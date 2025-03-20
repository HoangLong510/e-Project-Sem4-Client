"use client";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "~/i18n/navigation";

export default function LocaleSelect() {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const handleChange = (event, newAlignment) => {
        router.replace(pathname, { locale: newAlignment, scroll: false });
    };

    return (
        <ToggleButtonGroup sx={{ width: '100%', textTransform: 'capitalize' }}
            color="primary"
            value={locale}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="en" sx={{ width: '100%', textTransform: 'capitalize' }}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: 1 }}>
                    <Image
                        src="/assets/icons/flags/united-kingdom-uk-svgrepo-com.svg"
                        alt="united-kingdom-uk-svgrepo-com"
                        width={25}
                        height={25}
                    />
                    <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>English</Typography>
                </Box>
            </ToggleButton>
            <ToggleButton value="vi" sx={{ width: '100%', textTransform: 'capitalize' }}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: 1 }}>
                    <Image
                        src="/assets/icons/flags/flag-for-vietnam-svgrepo-com.svg"
                        alt="flag-for-vietnam-svgrepo-com"
                        width={25}
                        height={25}
                    />
                    <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>Vietnamese</Typography>
                </Box>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
