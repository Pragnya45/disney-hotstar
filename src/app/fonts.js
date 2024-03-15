import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--FONT-FAMILY",
});

export const inter_init = inter.variable;
