import {Layout} from "../components/HOCs/Layout/Layout";
import ContextWrapper from "../../core/ContextWrapper";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Routes} from "../../constants/Routes";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <ContextWrapper>
                <Layout>
                    {Routes.map((route, idx) => (
                        <Route path={route.path} key={idx} exact>
                            <route.page />
                        </Route>
                    ))}
                </Layout>
            </ContextWrapper>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
