import './styles/index.scss';
import 'moment/locale/ru';
import { ReceptionPage } from '../pages/Reception';
import { createObserver } from '../shared/utils/MobxUtils';

export const App = createObserver(() => {
  return <ReceptionPage />;
}, 'App');
