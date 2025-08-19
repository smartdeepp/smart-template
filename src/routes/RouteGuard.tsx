// import { ReactNode } from 'react';
// import { Navigate } from 'react-router';

// const PublicRouteGuard = ({ children }: { children: ReactNode }) => {
//   const { isAuthenticated } = useUserStore();

//   if (isAuthenticated) {
//     return <Navigate to={ROUTE.ROOT} />;
//   }
//   return children;
// };

// const PrivateRouteGuard = ({ children }: { children: ReactNode }) => {
//   const { isAuthenticated } = useUserStore();

//   if (!isAuthenticated) {
//     return <Navigate to={ROUTE.SIGNIN} />;
//   }
//   return children;
// };

// function RoleBasedComponent({
//   requiredRoles,
//   children,
//   fallback,
// }: {
//   children: ReactNode;
//   fallback?: ReactNode;
//   requiredRoles: Roles[];
// }) {
//   const { user } = useUserStore();
//   const hasAccess = requiredRoles.includes(user!.user_role);

//   return hasAccess ? children : fallback ? fallback : null;
// }

// export { PublicRouteGuard, PrivateRouteGuard, RoleBasedComponent };
