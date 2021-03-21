import React, { Suspense } from "react";
import { Route } from "react-router-dom";

interface LazyComponentLoaderProps {
  path: string;
  children: React.LazyExoticComponent<any>;
}
// !Sadly had to depricate, as framer-motion doesn't work with suspense :(
const LazyComponentLoader: React.FC<LazyComponentLoaderProps> = ({
  path,
  children,
}) => {
  // ! Convert Pages to Lazy import Before using again.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path={path} exact={true} component={children} />
    </Suspense>
  );
};

export { LazyComponentLoader };
