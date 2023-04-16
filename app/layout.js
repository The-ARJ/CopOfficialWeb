import "./globals.css";

export const metadata = {
  title: "CopOfficial",
  description: "Online Crime Reporting Site for People",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
