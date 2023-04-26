import React from "react";
import { Route, Routes } from "react-router-dom";

// Import all components
import Login from "./components/Login";
import ApmntList from "./components/ApmntList";
import BookApmnt from "./components/BookApmnt";
import DocApmntEdit from "./components/DocApmntEdit";
import PtntApmntEdit from "./components/PtntApmntEdit";

import DocProfileNew from "./components/DocProfileNew";
import PtntProfileNew from "./components/PtntProfileNew";
import DocProfileEdit from "./components/DocProfileEdit";
import PtntProfileEdit from "./components/PtntProfileEdit";
import DocProfile from "./components/DocProfile";
import PtntProfile from "./components/PtntProfile";

import DocList from "./components/DocList";

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/aList" element={<ApmntList />} />
          <Route path="/book/:name" element={<BookApmnt />} />          
          <Route path="/dApmntEdit/:id" element={<DocApmntEdit />} />          
          <Route path="/pApmntEdit/:id" element={<PtntApmntEdit />} />

          <Route path="/dProfileNew" element={<DocProfileNew />} />
          <Route path="/pProfileNew" element={<PtntProfileNew />} />
          <Route path="/dProfile/:name" element={<DocProfile />} />
          <Route path="/pProfile/:name" element={<PtntProfile />} />
          <Route path="/dProfileEdit/:id" element={<DocProfileEdit />} />
          <Route path="/pProfileEdit/:id" element={<PtntProfileEdit />} />

          <Route path="/dList" element={<DocList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
