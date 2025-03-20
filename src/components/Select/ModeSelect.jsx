"use client";
import React from "react";
import { useColorScheme } from "@mui/material/styles";
import {
    Box,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTranslations } from "next-intl";

export default function ModeSelect() {
    const t = useTranslations("Header");

    const { mode, setMode } = useColorScheme();

    if (!mode) {
        return null;
    }

    const handleChange = (event, newAlignment) => {
        setMode(newAlignment);
    };

    return (
        <ToggleButtonGroup sx={{ width: '100%', textTransform: 'capitalize' }}
            color="primary"
            value={mode}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value="light" sx={{ width: '100%', textTransform: 'capitalize' }}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: 1 }}>
                    <LightModeIcon />
                    <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>{t("Light")}</Typography>
                </Box>
            </ToggleButton>
            <ToggleButton value="system" sx={{ width: '100%', textTransform: 'capitalize' }}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: 1 }}>
                    <SettingsBrightnessOutlinedIcon />
                    <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>{t("System")}</Typography>
                </Box>
            </ToggleButton>
            <ToggleButton value="dark" sx={{ width: '100%', textTransform: 'capitalize' }}>
                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: "center", gap: 1 }}>
                    <DarkModeIcon />
                    <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>{t("Dark")}</Typography>
                </Box>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
