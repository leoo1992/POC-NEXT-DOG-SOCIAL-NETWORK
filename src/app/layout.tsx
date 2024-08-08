import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/UX/Header/";
import Footer from "@/components/UX/Footer";
import { UserContextProvider } from "@/context/user-context";
import userGet from "@/actions/user-get";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Rede social para cachorros.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: user } = await userGet();

  return (
    <html lang="pt-BR">
      <body className={type_second.variable}>
        <UserContextProvider user={user}>
          <div className="App">
            <Header />
            <main className="AppBody">{children}</main>
            <Footer />
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
