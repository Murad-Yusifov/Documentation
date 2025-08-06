import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "./context/Context";

export const metadata: Metadata = {
  title: "Special PortFolio",
  description: "Special PortFolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
       <AppProvider>
         {children}
       </AppProvider>
      </body>
    </html>
  );
}
