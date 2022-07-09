import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <br/>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          time={faker.date.past().toISOString()}
          content={faker.address.streetName()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          time={faker.date.past().toISOString()}
          content={faker.address.streetName()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          time={faker.date.past().toISOString()}
          content={faker.address.streetName()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          time={faker.date.past().toISOString()}
          content={faker.address.streetName()}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
