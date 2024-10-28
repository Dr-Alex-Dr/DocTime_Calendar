import { useEffect } from 'react';
import { api } from './shared/api/schedule/Api';

export const App = () => {
  useEffect(() => {
    const scheduleApi = new api();
    scheduleApi.appsDoctorsApiHandlersAll().then((res) => {
      console.log(res);
    });
  }, []);

  return <div>work</div>;
};
