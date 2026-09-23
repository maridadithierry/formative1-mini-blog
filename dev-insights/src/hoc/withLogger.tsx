import { useEffect, type ComponentType } from "react";

function withLogger<P>(
  WrappedComponent: ComponentType<P>,
  componentName: string
) {
  return function LoggedComponent(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`);

      return () => {
        console.log(`${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
}

export default withLogger;