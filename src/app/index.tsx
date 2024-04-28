import './styles/style.scss';
import { Calendar } from '../pages/Calendar';
import { Provider } from "react-redux";
import { store } from './store';

// потом заменить на нормальный Provider
const App = () => {
    return (
      <Provider store={store}>
        <div>
          <Calendar />  
        </div>
      </Provider>
    )
}

export default App;