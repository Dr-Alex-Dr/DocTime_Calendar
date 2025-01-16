import './styles/index.scss';
import 'moment/locale/ru';
import { ReceptionPage } from '../pages/Reception';
import { createObserver } from '../shared/utils/MobxUtils';

export const App = createObserver(() => {
  return (
    <div>
      <img style={{ paddingBottom: 12, width: '100%' }} src="./src/images/Header.svg" />
      <div style={{ display: 'flex' }}>
        <img style={{ paddingBottom: 12 }} src="./src/images/Frame 74.svg" />
        <ReceptionPage />
      </div>
    </div>
  );
}, 'App');
