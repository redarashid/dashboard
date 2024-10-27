import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./page/dashboard/Dashboard";
import Team from "./page/team/Team";
import Contacts from "./page/contacts/Contacts";
import Bar from "./page/bar/Bar";
import Calendar from "./page/calendar/Calendar";
import Faq from "./page/faq/Faq";
import Form from "./page/form/Form";
import Geography from "./page/geography/Geography";
import Invoices from "./page/invoices/Invoices";
import Line from "./page/line/Line";
import Pie from "./page/pie/Pie";
import NotFound from "./page/notFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="bar" element={<Bar />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="form" element={<Form />} />
      <Route path="geography" element={<Geography />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="line" element={<Line />} />
      <Route path="pie" element={<Pie />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
