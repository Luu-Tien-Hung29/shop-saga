import { Component,Fragment} from 'react'
// import {bindActionCreators} from 'redux'
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./conatiner/Home";
import Admin from "./conatiner/Admin";
import Shop from "./conatiner/Shop";
import Header from "./component/Header";

import {getData} from './store/action' 

class App extends Component {
  
    state = {
      list : [],
    }

  render() {
    return (
      <div className="App">
        <Fragment>
          <CssBaseline />
          <Container>
            <Box sx={{ bgcolor: "#cfe8fc", height: "auto" }}>
              <Header/>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Box>
          </Container>
        </Fragment>
      </div>
    );
  }
// componentDidMount() {
//     this.props.getDataDefault();
// }
}
   
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getDataDefault: () => dispatch(getData())
  }
}
 
const mapStateToProps = state => {
  return { ...state.listProduct };
};

export default connect(mapDispatchToProps,mapStateToProps)(App);
