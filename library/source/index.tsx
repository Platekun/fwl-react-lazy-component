import useComputeOnce from '@future-widget-lab/react-use-compute-once';
import React, { Suspense, lazy } from 'react';

interface ILazyProps<TProps extends unknown = unknown> {
  getComponent: () => Promise<{ default: React.FC<TProps> }>;
  fallback: React.ReactElement;
}

const Lazy: React.FC<ILazyProps> = (props) => {
  const LazyComponent = useComputeOnce(() => {
    return lazy(props.getComponent);
  });

  return (
    <Suspense fallback={props.fallback}>
      <LazyComponent />
    </Suspense>
  );
};

export default Lazy;
export type { ILazyProps };
