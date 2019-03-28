import React, { Component } from 'react';
import Menu from './Menu';
import injectSheet from 'react-jss';
import LocalizedStrings from 'react-localization';
import tours from './strings/tours.json';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
let strings = new LocalizedStrings(tours)
const styles = {
  content: {
    width: '100%',
    height: '100%',
  },
  icon: {fontSize: '2em', color: '#F44336', margin: 0, opacity: 1},
  grid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '[start] 2em [title] calc(50% - 3em) [margin] 2em [second] 2em [titleSecond] calc(50% - 3em) [end]',
    minHeight: '10%'
  },
  nav: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '[start] auto [start2] auto [start3] auto [end]'
  },
  imageNav: {
    position: 'fixed',
    bottom: '2em',
    right: '15vw',
    width: '20vw',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    background: '#212121e1',
    borderRadius: '4em',
    boxShadow: '0 0.1em 2em'
  },
}

class Tours extends Component {
  state = {
    index: 0,
    imageIndex: 0,
  }
  slide(num) {
    this.setState({index: this.state.index+num, imageIndex: 0});
  }
  imageSlide(num) {
    this.setState({imageIndex: this.state.imageIndex+num})
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
    fetch(process.env.PUBLIC_URL+"tours.json")
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
      <Menu changeLang={this.changeLang.bind(this)} menu={strings.menu} imageURL={strings.content.images[this.state.index][this.state.imageIndex]} content={
        <div className={classes.content}>
          <div className={classes.imageNav}>
            <div style={{gridColumnStart: 1, gridColumnEnd: 2, marginRight: 'auto'}}>
            <IconButton disabled={this.state.imageIndex === 0} onClick={this.imageSlide.bind(this, -1)}>
              <ChevronLeftIcon className={classes.icon}/>
            </IconButton>
            </div>
            <div style={{gridColumnStart: 2, gridColumnEnd: 3 ,textAlign: 'center'}}>
              <h3>{this.state.imageIndex+1+"/"+strings.content.images[this.state.index].length}</h3>
            </div>
            <div style={{gridColumnStart: 3, gridColumnEnd: 4, marginLeft: 'auto'}}>
            <IconButton disabled={this.state.imageIndex === strings.content.images[this.state.index].length-1} onClick={this.imageSlide.bind(this, 1)}>
              <ChevronRightIcon className={classes.icon}/>
            </IconButton>
            </div>
          </div>
          <div className={classes.nav}>
          <div style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, textAlign: 'center'}}>
            <IconButton disabled={this.state.index === 0} onClick={this.slide.bind(this, -1)}>
              <ChevronLeftIcon className={classes.icon}/>
            </IconButton>
          </div>
          <div style={{gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, textAlign: 'center'}}>
            <h3>{(this.state.index+1)+"/"+strings.content.title.length}</h3>
          </div>
          <div style={{gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 1, textAlign: 'center'}}>
            <IconButton disabled={this.state.index === strings.content.title.length-1} onClick={this.slide.bind(this, 1)}>
              <ChevronRightIcon className={classes.icon}/>
            </IconButton>
          </div>
          </div>
          <h1>{strings.content.title[this.state.index]}</h1>
          <p>{strings.content.description[this.state.index]}</p>
          <div className={classes.grid}>
            <HotelOutlinedIcon className={classes.icon} style={{gridColumnStart: 'start', gridColumnEnd: 'title'}}/>
            <h3 style={{gridColumnStart: 'title', gridColumnEnd: 'end', gridRowStart: 1, margin: '0.3em'}}>{strings.content.housingTitle}</h3>
            {strings.content.housing[this.state.index].map(housing =>
              <p style={{marginTop: 0, marginBottom: '1em', gridColumnStart: 'start', gridColumnEnd: 'end'}}>{housing}</p>
            )}
            <AddCircleOutlineIcon className={classes.icon} style={{gridColumnStart: 'start', gridColumnEnd: 'title'}}/>
            <h3 style={{gridColumnStart: 'title', gridColumnEnd: 'end' , margin: '0.3em'}}>{strings.content.moreTitle}</h3>
            {strings.content.more[this.state.index].map(more =>
              <p style={{marginTop: 0, marginBottom: '1em', gridColumnStart: 'start', gridColumnEnd: 'end'}}>{more}</p>
            )}
          </div>
        </div>
      }/>
    )
  }
}

export default injectSheet(styles)(Tours);
