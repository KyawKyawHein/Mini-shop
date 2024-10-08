import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import ReactQueryClientProvider from "./components/ReactQueryClientProvider";
import { Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body className={inter.className}>
          <section className="relative p-1 min-h-screen">
            <Sidebar />
            <Box className="p-1">
            {children}
            </Box>
          </section>
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
