import React from "react";
import { NavLink } from "react-router-dom";

import "./dialogs.css";
// const GialogsItems = (props) => {
//   let path = "/dialogs/" + props.id;
//   return (
//     <div className="dialog">
//       <NavLink to={path}>{props.dialogs.name}</NavLink>
//     </div>
//   );
// };
// const Message = (props) => {
//   return <div className="message">{props.message}</div>;
// };

const Dialogs = (props) => {
  // let qw= props.dialogs.map((item)=>{
  //   return(
  //     item.id
  //   )
  // })
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        <div>
          {props.dialogs.map((item) => {
            return (
              <div>
                <NavLink to={item.patch}>{item.name}</NavLink>
              </div>
            );
          })}
        </div>
      </div>
      <div className="messages"></div>
    </div>
  );
};
export default Dialogs;
