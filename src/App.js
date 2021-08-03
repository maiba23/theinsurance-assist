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
const NotFound = lazy(() => import("./pages/404"));

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
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ApplicationContext>
  );
}

export default App;
