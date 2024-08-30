import Header from "@/components/header";
import "./globals.css";
//adding metadata in layouts ensures that all pages after
//that layout still get some meta data and we can change them
// later on
export const metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
