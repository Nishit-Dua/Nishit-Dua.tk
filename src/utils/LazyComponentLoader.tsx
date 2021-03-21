import React, { Suspense } from "react";
import { Route } from "react-router-dom";

interface LazyComponentLoaderProps {
  path: string;
  children: React.LazyExoticComponent<any>;
}

const LazyComponentLoader: React.FC<LazyComponentLoaderProps> = ({
  path,
  children,
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path={path} exact={true} component={children} />
    </Suspense>
  );
};

export { LazyComponentLoader };
