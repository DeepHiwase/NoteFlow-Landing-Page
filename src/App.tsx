// Page
import Page from "./components/sections/Page";
// Sections
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";

export default function App() {
  return (
    <div className="">
      <Page>
        <Header>
          <Navigation />
        </Header>
      </Page>
    </div>
  );
}
