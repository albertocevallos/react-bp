import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router";

//routes
const Home = lazy(() => import("./routes/Home"));
// import Home from "./routes/Home";

//components

//styles
import "./styles/main.css";

export default function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="*"
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    </Suspense>
  );
}
