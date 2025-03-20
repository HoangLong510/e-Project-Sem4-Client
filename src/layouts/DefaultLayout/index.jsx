import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({ children }) {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Content */}
            <Box sx={{
                width: "100%",
                zIndex: 1,
                bgcolor: 'text.tertiary'
            }}>
                {children}
            </Box>

            {/* Footer */}
            <Footer />
        </>
    );
}
