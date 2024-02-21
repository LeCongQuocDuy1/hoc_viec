import { Routes, Route } from "react-router-dom";
import { Dashboard, Home, Blog, LearningPath } from "./pages";
import path from "./ultils/path";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={path.DASHBOARD} element={<Dashboard />}>
                    <Route path={path.HOME} element={<Home />} />
                    <Route
                        path={path.LEARNING_PATH}
                        element={<LearningPath />}
                    />
                    <Route path={path.BLOG} element={<Blog />} />

                    <Route path={path.STAR} element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
