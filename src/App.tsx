import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import { Header } from "./components/header";
import { Hero } from "./components/hero";

function App() {
  return (
    <ThemeProvider>
      <main>
        <Header />
        <Hero />
      </main>
    </ThemeProvider>
  );
}

export default App;
