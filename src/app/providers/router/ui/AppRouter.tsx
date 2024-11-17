// import { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import { routeConfig } from "shared/config/routeConfig/routeConfig";
// import { PageLoader } from "widgets/PageLoader/index";

// const AppRouter = () => {
//   return (
//     <Suspense fallback={<PageLoader />}>
//       <Routes>
//         {Object.values(routeConfig).map(({ path, element }) => (
//           <Route
//             key={path}
//             path={path}
//             element={<div className="page-wrapper">{element}</div>}
//           />
//         ))}
//       </Routes>
//     </Suspense>
//   );
// };

// export default AppRouter;

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
