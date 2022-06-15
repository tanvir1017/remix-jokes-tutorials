import { Outlet } from "@remix-run/react";

const Jokes = () => {
  return (
    <div>
      <h2>This is jokes part</h2>
      <Outlet />
    </div>
  );
};

export default Jokes;
