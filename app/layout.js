import "./globals.css";
import { UserProvider } from "@/utils/UserContext";

export const metadata = {
  title: "CopOfficial",
  description: "Online Crime Reporting Site for People",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><UserProvider>{children}</UserProvider></body>
    </html>
  );
}
