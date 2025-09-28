// Page
import Page from "./components/sections/Page";
// Header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";
// Main

export default function App() {
  return (
    <div className="">
      <Page>
        <Header>
          <Navigation />
          <Hero />
          <Reviews />
        </Header>
      </Page>
    </div>
  );
}
