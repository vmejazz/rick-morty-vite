import "./App.css";
import { Content, Header } from "./components";

export const App = () => {
  return (
    <div className="appWrapper">
      <div className="App">
        <Header />
        <Content />
      </div>
    </div>
  );
};
