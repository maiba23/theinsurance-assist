import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Loading from "./components/shared/Loading";
import { ApplicationContext } from "./context/store";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Insurance = lazy(() => import("./pages/insurance"));
const Contact = lazy(() => import("./pages/contact"));
const Terms = lazy(() => import("./pages/terms"));
const Book = lazy(() => import("./pages/book"));
const GetPolicy = lazy(() => import("./pages/get-policy"));
const GetReview = lazy(() => import("./pages/get-review"));
const GetQuote = lazy(() => import("./pages/get-quote"));
const Apply = lazy(() => import("./pages/apply"));
const PersonalInfo = lazy(() => import("./pages/personal-info"));
const HealthInfo = lazy(() => import("./pages/health-info"));
const NotFound = lazy(() => import("./pages/404"));

// import Home from "./pages/home";
// import About from "./pages/about";
// import Insurance from "./pages/insurance";
// import Contact from "./pages/contact";
// import Terms from "./pages/terms";
// import Book from "./pages/book";
// import GetPolicy from "./pages/get-policy";
// import GetReview from "./pages/get-review";
// import Apply from "./pages/applyte";
// import NotFound from "./pages/404";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
    let top = 0;
    document.getElementById("root").addEventListener("scroll", function (e) {
      if (Math.abs(e.target.scrollTop - top) > 0) {
        top = e.target.scrollTop;
        AOS.refresh();
      }
    });
  }, []);
  return (
    <ApplicationContext>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/insurance" component={Insurance} />
            <Route path="/contact" component={Contact} />
            <Route path="/terms" component={Terms} />
            <Route path="/book" component={Book} />
            <Route path="/get-policy" component={GetPolicy} />
            <Route path="/get-review" component={GetReview} />
            <Route path="/get-quote" component={GetQuote} />
            <Route path="/apply" component={Apply} />
            <Route path="/personal-info" component={PersonalInfo} />
            <Route path="/health-info" component={HealthInfo} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApplicationContext>
  );
}

export default App;
