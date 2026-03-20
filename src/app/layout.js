import { Rubik } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Ip tracker",
  description: "Ip tracker",
  icons: {
    icon: "/assets/images/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable}antialiased`}>{children}</body>
    </html>
  );
}
