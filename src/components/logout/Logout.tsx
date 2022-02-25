import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { logout } from "../../features/userSlice";

function Logout() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onClick = () => {
    console.log("logout:");
    dispatch(logout());
  };

  return (
    <div>
      <div>Logout {user}</div>
      <Button onClick={onClick}>Logout</Button>
    </div>
  );
}

export default Logout;
