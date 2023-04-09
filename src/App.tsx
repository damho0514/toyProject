import { MainProvider } from "./providers/MainProvider";
import { MainRoutes } from "./routes";

export default function App() {
  return (
    <MainProvider>
      <MainRoutes />
    </MainProvider>
  );
}
