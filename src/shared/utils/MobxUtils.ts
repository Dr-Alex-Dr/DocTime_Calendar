import { observer } from 'mobx-react';
import { IReactComponent } from 'mobx-react/dist/types/IReactComponent';

export function createObserver<T extends IReactComponent>(component: T, displayName: string): T {
  const ObserverComponent = observer(component);

  ObserverComponent.displayName = `Observer${displayName}`;

  return ObserverComponent;
}
