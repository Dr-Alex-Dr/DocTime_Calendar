import './styles/index.scss';
import 'moment/locale/ru';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReceptionPage } from '../pages/Reception';
import { TasksPage } from '../pages/Tasks';
import { createObserver } from '../shared/utils/MobxUtils';
import { Layout } from './Layout';

export const App = createObserver(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ReceptionPage />} />
          <Route path="tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}, 'App');
