import "./reset.css";
import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ROUTES } from "./routes/routes";
import {
  BlogPage,
  AboutPage,
  HomePage,
  ProgramPage,
  ProjectsPage,
  ServicesPage,
  SkillPage,
  DetailPage,
  SearchResults,
  NotFound,
} from "./pages";
import Root from "./layout/Root";
import { ThemeArea } from "./context/ThemeContext";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<NotFound />}>
      <Route path={ROUTES.home.path} element={<HomePage />} />,
      <Route path={ROUTES.projects.path} element={<ProjectsPage />} />,
      <Route path={ROUTES.services.path} element={<ServicesPage />} />,
      <Route path={ROUTES.skills.path} element={<SkillPage />} />,
      <Route path={ROUTES.about.path} element={<AboutPage />} />,
      <Route path={ROUTES.searchResults.path} element={<SearchResults />} />,
    </Route>
  )
);
function App() {
  return (
    <ThemeArea>
      <RouterProvider router={router} />
    </ThemeArea>
  );
}

export default App;
