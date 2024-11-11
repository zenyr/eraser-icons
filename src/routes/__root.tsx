import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import App from "../App";

export const Route = createRootRoute({
  component: () => (
    <App>
      <Outlet />
      {process.env.NODE_ENV !== "production" && <TanStackRouterDevtools />}
    </App>
  ),
});
