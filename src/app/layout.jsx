import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen grid place-items-center text-center">
        {children}
      </body>
    </html>
  );
}
