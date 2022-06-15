import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/index.css";
export const links: LinksFunction = () => {
  return [{ rel: "StyleSheet", href: stylesUrl }];
};
export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
