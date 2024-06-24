import './styles/style.scss';
import { Calendar } from '../pages/Calendar';
import { Provider } from "react-redux";
import { store } from './store';
import { Login } from '../pages/Login/login';
import { Registration } from '../pages/Registration/registration';

// потом заменить на нормальный Provider
const App = () => {
    return (
      <Provider store={store}>
        <div>
          <Registration />  
        </div>
      </Provider>
    )
}

export default App;