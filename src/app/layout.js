import "./globals.css";

import Header from "../components/header";
import Footer from "../components/footer";

export const metadata = {
  title: "LocalShop",
  description: "Final project of the taktsoft bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
