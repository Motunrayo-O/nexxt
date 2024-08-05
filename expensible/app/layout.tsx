import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { expensibleTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import AuthProvider from "./auth/Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryClientContextProvider from "./QueryClientProvider";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "Vineets Pyramid Scheme",
  description: "Expensible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={expensibleTheme}>
          <CssBaseline />
          <QueryClientContextProvider>
            <body className={inter.className}>
              <AuthProvider>
                <div>
                  <NavBar />
                  <main className="helo h-screen">{children}</main>
                </div>
              </AuthProvider>
            </body>
          </QueryClientContextProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </html>
  );
}
