import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './Redux/store';

import { QueryClient , QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '545px',
  lg: '720px',
  xl: '909px',
  xll : "1035px" ,
  xxl : "1172px" ,
  xxxl : "1415px",
  xxxxl: "1460px" ,
 '2xl': '1536px',
}

const theme = extendTheme({ breakpoints })

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
     <React.StrictMode>
       <ChakraProvider theme={theme}>
          <App />
       </ChakraProvider>
     </React.StrictMode>
     </QueryClientProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

