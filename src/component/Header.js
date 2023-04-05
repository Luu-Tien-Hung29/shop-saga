import { Component } from 'react';
import {Link} from 'react-router-dom'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";
import className from "classnames/bind";
import styles from "./Header.module.scss";


const cx = className.bind(styles)
class Header extends Component {
  constructor(props){
    super()
    this.state = {
    }
  }


  render(){
    return ( 
      <div className={cx("Home")}>
          <div className={cx("iconShop")}>
            <div>
              <Link to="/" style={{ "margin-right": "15px" }}>
                <HomeIcon />
              </Link>
              <Link to="/admin">
                <AdminPanelSettingsIcon />
              </Link>
            </div>
            <div className={cx("search")}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
              />

              <Button  variant="outlined">
                <SearchIcon />
              </Button>
            </div>
            <Link to="/shop">
              <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          
                <span className={cx("number-shop")}>
                  12
                </span>
            
            </Link>
          </div>
      </div>
      
   );

  }

}

   

export default Header;