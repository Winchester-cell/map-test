import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css';
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
