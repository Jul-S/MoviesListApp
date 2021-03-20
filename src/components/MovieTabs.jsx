import React from "react";

const MovieTabs = (props) => {
  const { sort_by } = props;

return (
<ul className="tabs nav nav-pills">
  <li className="nav-item">
    <div className="nav-link active">
      Popular
    </div>
  </li>
  <li className="nav-item">
    <div className="nav-link">
      Vote
    </div>
  </li>
  <li className="nav-item">
    <div className="nav-link">
      Title
    </div>
  </li>
</ul>
)
}