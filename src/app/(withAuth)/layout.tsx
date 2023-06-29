import "../globals.css";
import { Inter } from "next/font/google";
import MainContainer from "./common/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BeeReign",
  description:
    "Beekeeping traceability and inventory management solution for beekeepers and commercial companies.",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
