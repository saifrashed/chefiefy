import React from 'react';
import PrivateRoute from './PrivateRoute';

/**
 * This HOC component can be wrapped around each
 * page component that should be locked with authentication.
 *
 * @param Component
 * @returns Child component but wrapped with PrivateRoute.
 */
const withPrivateRoute = (Component: React.ComponentType<any>) => {
    const WrappedComponent = (props: any) => (
        <PrivateRoute>
            <Component {...props} />
        </PrivateRoute>
    );

    return WrappedComponent;
};

export default withPrivateRoute;