import * as React from 'react';
import './App.css';
import {Box, Breadcrumbs} from '@mui/material'
import Link from '@mui/material/Link'
import SignUp from './components/SignUp';
import TodaysStocks from './components/TodaysStocks';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {selected: "SignUp"}
  };

  handleClick (val) {
    this.setState({selected: val})
  };

  render() {

    const selected = this.state.selected;
    let view;

    switch(selected) {
      case "SignUp":
        view =  <SignUp/>;
        break;
      case "TodaysStocks":
        view = <TodaysStocks/>
        break;
      default:
        break;
    }

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2em'
        }}
      >
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" onClick={() => this.handleClick("SignUp")}>
            Signup
          </Link>
          <Link underline="hover" color="inherit" onClick={() => this.handleClick("TodaysStocks")}>
            Todays Stocks
          </Link>
        </Breadcrumbs >
        {view}
      </Box>
    );
  };
}

export default App;
