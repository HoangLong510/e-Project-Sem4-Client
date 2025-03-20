import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import DefaultLayout from "~/layouts/DefaultLayout";

export default function Home() {
    const t = useTranslations("Homepage");

    return (
        <DefaultLayout>
            <Container>
                <p style={{ padding: "5px" }}>Top</p>
                {Array.from({ length: 15 }).map((_, i) => {
                    return (
                        <p key={i} style={{ padding: "5px" }}>
                            {t("Homepage")}
                        </p>
                    );
                })}
                <p style={{ padding: "5px" }}>Bottom</p>
            </Container>
        </DefaultLayout>
    );
}
