import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppProvider from '@providers/AppProvider';
import store, { persistor } from '@store/index';
import Router, { routes as appRoutes } from '@routes/index';
import Loader from '@components/atoms/Loader';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={<Loader size="large" />} persistor={persistor}>
				<AppProvider>
					<Router routes={appRoutes} />
				</AppProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
