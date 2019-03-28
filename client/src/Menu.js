import React, { Component } from 'react';
import injectSheet from 'react-jss';
import logo from './img/logo.svg';
import Image from 'material-ui-image';
import { withRouter } from 'react-router-dom';

const styles = {
  gridSystem: {
    display: 'grid',
    minHeight: '100vh',
    gridTemplateColumns: '[first] 10% [second] 10% [third] 10% [fourth] 10% [fifth] 10% [sixth] 10% [seventh] 10% [eighth] 10% [nineth] 10% [tenth] 10%',
    gridTemplateRows: '[base] 2.5vw [row1] 5vw [row2] 2.5vw [content] auto [row3]',
  },
  logoBox: {
    gridColumnStart: 2,
    gridColumnEnd: 5,
    gridRowStart: 2,
    gridRowEnd: 3,
  },
  logo: {
    height: "80%",
    display: 'block',
    margin: 'auto',
  },

  background: {
    gridColumnStart: 1,
    gridColumnEnd: 6,
    gridRowStart: 1,
    gridRowEnd: "row3",
    background: '#212121',
    "-webkit-box-shadow": "5px 0px 10px 0px rgba(0,0,0,0.1)",
    "-moz-box-shadow": "5px 0px 10px 0px rgba(0,0,0,0.1)",
    "box-shadow": "5px 0px 10px 0px rgba(0,0,0,0.1)",
  },
  menu: {
    display: 'grid',
    gridColumnStart: 5,
    gridColumnEnd: 11,
    gridRowStart: 2,
    gridRowEnd: 3,
    zIndex: 1,
    gridTemplateColumns: '16.66% 16.66% 16.66% 16.66% 16.66% 16.66%',
    gridTemplateRows: '100%',
  },
  navButton: {
    textAlign: 'center',
  },
  nav: {
    transition: 'color ease 0.2s',
    cursor: 'pointer',
    "&:hover": {
      transition: 'color ease 0.2s',
      color: 'white',
    }
  },
  image: {
    gridColumnStart: 6,
    gridColumnEnd: 11,
    gridRowStart: 1,
    gridRowEnd: "row3",
    overflow: 'hidden',
    background: '#212121',
    zIndex: -1,
  },
  content: {
    gridRowStart: "content",
    gridRowEnd: 'row3',
    gridColumnStart: 2,
    gridColumnEnd: 5,
    minHeight: '100%'
  },
}

class Menu extends Component {
  hop(url) {
    this.props.history.push(url);
  }
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.gridSystem}>
        <div className={classes.menu}>
          <div className={classes.navButton}>
            <h3 className={classes.nav} onClick={this.hop.bind(this, "/")}>{this.props.menu.main}</h3>
          </div>
          <div className={classes.navButton}>
            <h3 className={classes.nav} onClick={this.hop.bind(this, "/tours")}>{this.props.menu.tours}</h3>
          </div>
          <div className={classes.navButton}>
            <h3 className={classes.nav} onClick={this.hop.bind(this, "/about")}>{this.props.menu.about}</h3>
          </div>
          <div className={classes.navButton}>
            <h3 className={classes.nav} onClick={this.hop.bind(this, "/contacts")}>{this.props.menu.contacts}</h3>
          </div>
          <div className={classes.navButton}>
            <h3 className={classes.nav} onClick={this.hop.bind(this, "/reserve")}>{this.props.menu.reserve}</h3>
          </div>
          <div className={classes.navButton}>
            <h3 className={classes.nav} style={{color: "black"}} onClick={this.props.changeLang}>{this.props.menu.lang}</h3>
          </div>
        </div>
        <div className={classes.background}>
        </div>
        <div className={classes.content}>
          {this.props.content}
        </div>
        <div className={classes.image}>
          <img src={process.env.PUBLIC_URL+"/images/"+this.props.imageURL} style={{objectFit: "cover", height: '100%', width: '100%'}}/>
        </div>
        <div className={classes.logoBox}>
          <img className={classes.logo} src={logo}/>
        </div>
      </div>
    )
  }
}

Menu.defaultProps = {
  content: "kek",
}

export default withRouter(injectSheet(styles)(Menu));
