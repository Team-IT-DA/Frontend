import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./router/";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
