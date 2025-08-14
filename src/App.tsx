import { env } from "./config/env";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <p>API Base URL: {env.VITE_API_BASE_URL}</p>
    </>
  );
}

export default App;
