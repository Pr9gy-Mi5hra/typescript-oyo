import '@/styles/globals.css';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;


// import "@/styles/globals.css";
// import { AppProps } from 'next/app';

// const App = ({ Component, pageProps }: AppProps) => {
//   return <Component {...pageProps} />;
// };

// export default App;

