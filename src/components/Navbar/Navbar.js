import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));


  return (
    <AppBar position="static" color="inherit">
      <div>
        <Toolbar>
          {user?.result ? (
            <div>
              <Avatar alt={user?.result.name} src={user?.result.imageUrl}>
                {user?.result.name.charAt(0)}
              </Avatar>
              <Typography variant="h6">{user?.result.name}</Typography>
              <Button variant="contained" color="secondary" onClick={() => { }}>logout</Button>
          </div>
          ) : (
              <Button>Signin</Button>
          )}
        </Toolbar>
      </div>
    </AppBar>
  )
}

export default Navbar