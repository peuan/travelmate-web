import * as React from "react";
import "../styles/globals.css";
import ThemeRegistry from "../theme/themeRegistry/ThemeRegistry";
import MainLayout from "./layouts/main";

export const metadata = {
  title: "Travel Mate",
  description: "Travel Mate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry>
          <MainLayout>{children}</MainLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
