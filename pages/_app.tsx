import '@/styles/global.css'
import '@/styles/index.scss'
import '@/styles/remlIcon.scss'
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
