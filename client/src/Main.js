import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Menu from './Menu';
import main from './strings/main.json'
import LocalizedStrings from 'react-localization';
import LandscapeOutlinedIcon from '@material-ui/icons/LandscapeOutlined';
import DirectionsWalkOutlinedIcon from '@material-ui/icons/DirectionsWalkOutlined'
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined'
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import {Link} from 'react-router-dom'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

let strings = new LocalizedStrings(main);

const styles = {
  content: {
    width: '100%',
    height: '100%',
  },
  icon: {fontSize: '2em', color: '#F44336', margin: 0},
  grid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '[start] 2em [title] calc(50% - 3em) [margin] 2em [second] 2em [titleSecond] calc(50% - 3em) [end]',
    minHeight: '10%'
  },
  contacts: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: "[start] 2em [title] auto [button] auto [end]",
  },
  link: {
    textDecoration: 'none',
  },
  linkText: {
    transition: '0.3s ease color',
    "&:hover": {
      color: 'white',
      transition: '0.3s ease color',
    }
  },
  navButton: {
    textAlign: 'center',
  },
  nav: {
    transition: 'color ease 0.2s',
    cursor: 'pointer',
    color: '#F44336',
    "&:hover": {
      transition: 'color ease 0.2s',
      color: 'white',
    }
  },
}

class Main extends Component {
  changeLang() {
    if (strings.getLanguage() == "ru") {
      strings.setLanguage('en');
      this.setState({});
    }
    else {
      strings.setLanguage('ru');
      this.setState({});
    }
  }
  componentWillMount() {
    fetch(process.env.PUBLIC_URL+"main.json")
    .then(res => res.json())
    .then(string => {
      strings.setContent(string);
      return 0;
    })
    .then(() => this.setState({}))
  }
  render() {
    const classes = this.props.classes;
    return(
      <Menu changeLang={this.changeLang.bind(this)} imageURL={strings.imageURL} menu={strings.menu} content={
        <div className={classes.content}>
          <div>
            <h1>{strings.content.title}</h1>
            <h2>{strings.content.promo}</h2>
            <p style={{marginBottom: '2em'}}>{strings.content.paragraph}</p>
          </div>
          <div className={classes.grid}>
          <LandscapeOutlinedIcon className={classes.icon} style={{gridColumnStart: 'start', gridColumnEnd: 'title'}}/>
          <h3 style={{gridColumnStart: 'title', margin: '0.3em'}}>{strings.content.first}</h3>
          <p style={{gridColumnStart: 'start', gridColumnEnd: 'margin', marginTop: 0, marginBottom: '2em'}}>{strings.content.firstText}</p>
          <DirectionsWalkOutlinedIcon className={classes.icon} style={{gridColumnStart: 'start', gridColumnEnd: 'title'}}/>
          <h3 style={{gridColumnStart: 'title', margin: '0.3em'}}>{strings.content.third}</h3>
          <p style={{gridColumnStart: 'start', gridColumnEnd: 'margin', marginTop: 0, marginBottom: '2em'}}>{strings.content.thirdText}</p>
          <VerifiedUserOutlinedIcon className={classes.icon} style={{gridRowStart: 1, gridColumnStart: 'second', gridColumnEnd: 'titleSecond'}}/>
          <h3 style={{gridRowStart: 1, gridColumnStart: 'titleSecond', margin: '0.3em'}}>{strings.content.second}</h3>
          <p style={{gridRowStart: 2, gridColumnStart: 'second', gridColumnEnd: 'end', marginTop: 0, marginBottom: '2em'}}>{strings.content.secondText}</p>
          <MonetizationOnOutlinedIcon className={classes.icon} style={{gridRowStart: 3, gridColumnStart: 'second', gridColumnEnd: 'titleSecond'}}/>
          <h3 style={{gridRowStart: 3, gridColumnStart: 'titleSecond', margin: '0.3em'}}>{strings.content.fourth}</h3>
          <p style={{gridRowStart: 4, gridColumnStart: 'second', gridColumnEnd: 'end', marginTop: 0, marginBottom: '2em'}}>{strings.content.fourthText}</p>
          </div>
        </div>
      }/>
    )
  }
}

export default  injectSheet(styles)(Main);

class Abot extends Component {
  changeLang() {
    if (strings.getLanguage() == "ru") {
      strings.setLanguage('en');
      this.setState({});
    }
    else {
      strings.setLanguage('ru');
      this.setState({});
    }
  }
  componentWillMount() {
    fetch(process.env.PUBLIC_URL+"main.json")
    .then(res => res.json())
    .then(string => {
      strings.setContent(string);
      return 0;
    })
    .then(() => this.setState({}))
  }
  render() {
    const classes = this.props.classes;
    return(
      <Menu changeLang={this.changeLang.bind(this)} imageURL={strings.about.imageURL} menu={strings.menu} content={
        <div className={classes.content}>
          <h1>{strings.about.title}</h1>
          <h2>{strings.about.promo}</h2>
          <p>{strings.about.paragraph}</p>
          <h2>{strings.about.title2}</h2>
          <p>{strings.about.paragraph2}</p>
        </div>
      }/>
    )
  }
}

export const About = injectSheet(styles)(Abot);

class Contact extends Component {
  changeLang() {
    if (strings.getLanguage() == "ru") {
      strings.setLanguage('en');
      this.setState({});
    }
    else {
      strings.setLanguage('ru');
      this.setState({});
    }
  }
  componentWillMount() {
    fetch(process.env.PUBLIC_URL+"main.json")
    .then(res => res.json())
    .then(string => {
      strings.setContent(string);
      return 0;
    })
    .then(() => this.setState({}))
  }
  render() {
    const classes = this.props.classes;
    return(
      <Menu changeLang={this.changeLang.bind(this)} imageURL={strings.contacts.imageURL} menu={strings.menu} content={
        <div className={classes.content}>
          <h1>{strings.contacts.title}</h1>
          <h2>{strings.contacts.promo}</h2>
          <div className={classes.contacts}>

            <PhoneOutlinedIcon className={classes.icon} style={{gridRowStart: 1}}/>
            <h3 style={{margin: '0.3em'}}>{strings.contacts.numberTitle}</h3>
            <a className={classes.link} href={"tel:"+strings.contacts.number1}><h3 className={classes.linkText} style={{gridColumnStart: 'button', margin: '0.3em', textAlign: 'right'}}>{strings.contacts.call}</h3></a>
            <p style={{gridColumnStart: 'start', gridColumnEnd: 'end', margin: '0.3em'}}>{strings.contacts.number1}</p>
            <p style={{gridColumnStart: 'start', gridColumnEnd: 'end', margin: '0.3em'}}>{strings.contacts.number2}</p>
            <p style={{gridColumnStart: 'start', gridColumnEnd: 'end', margin: '0.3em', marginBottom: '2em'}}>{strings.contacts.number3}</p>

            <MailOutlinedIcon className={classes.icon}/>
            <h3 style={{margin: '0.3em'}}>{strings.contacts.emailTitle}</h3>
            <a className={classes.link} href={"mailto:"+strings.contacts.email}><h3 className={classes.linkText} style={{gridColumnStart: 'button', margin: '0.3em', textAlign: 'right'}}>{strings.contacts.message}</h3></a>
            <p style={{gridColumnStart: 'start', gridColumnEnd: 'end', margin: '0.3em', marginBottom: '2em'}}>{strings.contacts.email}</p>

            <PublicOutlinedIcon className={classes.icon}/>
            <h3 style={{margin: '0.3em'}}>{strings.contacts.facebookTitle}</h3>
            <a className={classes.link} href={"https://www.facebook.com/"+strings.contacts.facebook}><h3 className={classes.linkText} style={{gridColumnStart: 'button', margin: '0.3em', textAlign: 'right'}}>{strings.contacts.follow}</h3></a>
            <p style={{gridColumnStart: 'start', gridColumnEnd: 'end', margin: '0.3em'}}>{strings.contacts.facebook}</p>

          </div>
        </div>
      }/>
    )
  }
}

export const Contacts = injectSheet(styles)(Contact);


class Reserv extends Component {

  state = {
    name: "",
    number: "",
    message: "",
    send: false,
    error: "",
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  submit() {
    if (this.state.name.length >= 3 && this.state.number.length >= 5) {
      fetch("https://api.telegram.org/bot581414807:AAGDzTHTl4ya2gyj8NZ2F6KxDXgF8GfV0yA/sendMessage?chat_id=-266345564&text="+"Автообновление! К вам обратился(ась) "+this.state.name+". \n Контакт: "+this.state.number+". \n Сообщение: "+this.state.message);
      this.setState({send: true, error: ""});
    }
    else {
      this.setState({error: strings.reserve.error});
    }
  }
  changeLang() {
    if (strings.getLanguage() == "ru") {
      strings.setLanguage('en');
      this.setState({});
    }
    else {
      strings.setLanguage('ru');
      this.setState({});
    }
  }
  componentWillMount() {
    fetch(process.env.PUBLIC_URL+"main.json")
    .then(res => res.json())
    .then(string => {
      strings.setContent(string);
      return 0;
    })
    .then(() => this.setState({}))
  }
  render() {
    const classes = this.props.classes;
    return(
      <Menu changeLang={this.changeLang.bind(this)} imageURL={strings.reserve.imageURL} menu={strings.menu}  content={
        <div className={classes.content}>
          <h1>{strings.reserve.title}</h1>
          <h2>{strings.reserve.promo}</h2>
          <h3 style={{marginBottom: 0}}>{strings.reserve.name}</h3>
          <input
          name="name"
          type="text"
          placeholder={strings.reserve.placeholderName}
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          />
          <h3 style={{marginBottom: 0}}>{strings.reserve.number}</h3>
          <input
          required
          name="number"
          type="text"
          placeholder={strings.reserve.placeholderNumber}
          value={this.state.number}
          onChange={this.handleChange.bind(this)}
          />
          <h3 style={{marginBottom: 0}}>{strings.reserve.message}</h3>
          <textArea
          rows="3"
          name="message"
          type="text"
          required
          placeholder={strings.reserve.placeholderMessage}
          value={this.state.message}
          onChange={this.handleChange.bind(this)}
          />
          <div className={classes.contacts} style={{marginTop: '1em'}}>
            <SendOutlinedIcon className={classes.icon} style={{margin: 0}}/>
            <h3 onClick={this.state.send ? {} : this.submit.bind(this)} className={classes.nav} style={{margin: '0.3em', gridColumnStart: "title"}}>{!this.state.send ? strings.reserve.send : strings.reserve.thanks}</h3>
            <p style={{margin: '0.3em'}}>{this.state.error}</p>
          </div>
        </div>
      }/>
      )
    }
}

export const Reserve = injectSheet(styles)(Reserv);
