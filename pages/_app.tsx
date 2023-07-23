import '@/styles/global.css'
import '@/styles/index.scss'
import '@/styles/remlIcon.scss'
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
// css
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
