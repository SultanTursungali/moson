import React from "react";
import Header from "./components/Header";
import LanguageSwitcher from "@/app/ui/LanguageSwitcher";
import { LanguageProvider } from "@/app/context/LangContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-black text-white">
        <LanguageProvider>
          <Header />
          <div className="w-full flex justify-center top-[90px] md:top-[155px] fixed z-51">
            <LanguageSwitcher />
          </div>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
