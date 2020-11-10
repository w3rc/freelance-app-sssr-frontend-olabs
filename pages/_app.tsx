import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import store from '../store/store';


function MyApp({ Component, pageProps }: { Component: React.FC; pageProps: any; }) {
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>);
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
