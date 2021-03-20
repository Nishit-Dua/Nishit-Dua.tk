import React, { Suspense } from "react";
import { Route } from "react-router-dom";

interface LazyComponentLoaderProps {
  path: string;
  pageToRender: React.LazyExoticComponent<any>;
}

const LazyComponentLoader: React.FC<LazyComponentLoaderProps> = ({
  path,
  pageToRender,
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path={path} exact component={pageToRender} />
    </Suspense>
  );
};

export { LazyComponentLoader };
