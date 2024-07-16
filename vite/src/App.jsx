import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './components/Form';
import ItemList from './components/ItemList';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Item Manager</h1>
      <Form />
      <ItemList />
    </div>
  </Provider>
);

export default App;