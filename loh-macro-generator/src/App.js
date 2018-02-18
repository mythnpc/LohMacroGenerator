import React, { Component, componentDidMount } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import _ from 'lodash';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Card, { CardActions, CardHeader, CardText } from 'material-ui/Card';
import SortableComponent from './SortableComponent';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import NoxRecordGenerator from './NoxRecordGenerator';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});


class App extends Component {
  state = {
    value: 0,
    heroesClasses: [
      { name: 'Phillop', picked: true, class: 'knight' }, { name: 'Clause', picked: false, class: 'knight' }, { name: 'Demia', picked: false, class: 'knight' }, { name: 'Morrah', picked: false, class: 'knight' }, { name: 'Jane', picked: false, class: 'knight' }, { name: 'Ricardo', picked: false, class: 'knight' }, { name: 'Sonia', picked: false, class: 'knight' },
      { name: 'Kasel', picked: true, class: 'warrior' }, { name: 'Gau', picked: false, class: 'warrior' }, { name: 'Naila', picked: false, class: 'warrior' }, { name: 'Theo', picked: false, class: 'warrior' }, { name: 'Viska', picked: false, class: 'warrior' }, { name: 'Priscilla', picked: false, class: 'warrior' }, { name: 'Scarlet', picked: false, class: 'warrior' },
      { name: 'Roi', picked: false, class: 'assassin' }, { name: 'Epis', picked: false, class: 'assassin' }, { name: 'Reina', picked: false, class: 'assassin' }, { name: 'Fluss', picked: false, class: 'assassin' }, { name: 'Tanya', picked: false, class: 'assassin' }, { name: 'Ezekiel', picked: false, class: 'assassin' }, { name: 'Miriane', picked: false, class: 'assassin' }, { name: 'Gladi', picked: false, class: 'assassin' },
      { name: 'Selene', picked: false, class: 'archer' }, { name: 'Dimael', picked: false, class: 'archer' }, { name: 'Luna', picked: false, class: 'archer' }, { name: 'Arch', picked: false, class: 'archer' }, { name: 'Yanne', picked: false, class: 'archer' }, { name: 'Requina', picked: false, class: 'archer' },
      { name: 'Lakrak', picked: false, class: 'machinist' }, { name: 'Miruru', picked: false, class: 'machinist' }, { name: 'Rodina', picked: false, class: 'machinist' }, { name: 'Annete', picked: false, class: 'machinist' }, { name: 'Mitra', picked: false, class: 'machinist' }, { name: 'Oddy', picked: false, class: 'machinist' },
      { name: 'Cleo', picked: false, class: 'wizard' }, { name: 'Maria', picked: false, class: 'wizard' }, { name: 'Lorraine', picked: false, class: 'wizard' }, { name: 'Pavel', picked: false, class: 'wizard' }, { name: 'Aisha', picked: false, class: 'wizard' }, { name: 'Lewisia', picked: false, class: 'wizard' }, { name: 'Nyx', picked: false, class: 'wizard' }, { name: 'Ophelia', picked: false, class: 'wizard' }, { name: 'Artemia', picked: false, class: 'wizard' },
      { name: 'Frey', picked: false, class: 'priest' }, { name: 'Kaulah', picked: false, class: 'priest' }, { name: 'Rephy', picked: false, class: 'priest' }, { name: 'Baudouin', picked: false, class: 'priest' }, { name: 'Leo', picked: false, class: 'priest' }, { name: 'Laias', picked: false, class: 'priest' }, { name: 'Cassandra', picked: false, class: 'priest' }, { name: 'Mediana', picked: false, class: 'priest' }, { name: 'May', picked: false, class: 'priest' }
    ],
    selectHeroes: [],
    interval: 200
  };

  componentDidMount() {
    this.setState({ selectHeroes: _.filter(this.state.heroesClasses, x => x.picked === true) })
  }

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  onHeroesClick = (heroName) => {
    let temp = JSON.parse(JSON.stringify(this.state.heroesClasses));
    let hero = _.find(temp, x => x.name === heroName);
    //invert
    hero.picked = !hero.picked;

    let cloneSelectHeroes = JSON.parse(JSON.stringify(this.state.selectHeroes));

    //Turns to true
    if (hero.picked === true) {
      cloneSelectHeroes = cloneSelectHeroes.concat(hero)
    }

    if (hero.picked === false) {
      let heroIndex = _.findIndex(this.state.selectHeroes, x => x.name === heroName);
      cloneSelectHeroes.splice(heroIndex, 1);
    }

    this.setState({
      heroesClasses: temp,
      selectHeroes: cloneSelectHeroes
    })
  }

  onSortUpdate = (newList) => {
    this.setState({
      selectHeroes: newList
    })
  }

  handleTextChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: "#2196f3", height: 48 }}>
          <div style={{ margin: "auto auto" }}>KR Nox Record Generator</div>
        </AppBar>
        <div className="Container" style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>

          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="interval"
              label="Interval"
              margin="normal"
              value={this.state.interval}
              onChange={this.handleTextChange('interval')}
            />
          </form>

          <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "#2196f3" }}>
              <Tabs scrollable scrollableButtons="auto" value={value} onChange={this.handleTabChange}>
                <Tab label="Knight" href="#basic-tabs" />
                <Tab label="Warrior" />
                <Tab label="Assassin" />
                <Tab label="Archer" />
                <Tab label="Machinist" />
                <Tab label="Wizard" />
                <Tab label="Priest" />
              </Tabs>
            </AppBar>
            {value === 0 && <TabContainer heroes={this.state.heroesClasses} class="knight" onClick={(heroName) => this.onHeroesClick(heroName)} />}
            {value === 1 && <TabContainer heroes={this.state.heroesClasses} class="warrior" onClick={(heroName) => this.onHeroesClick(heroName)} />}
            {value === 2 && <TabContainer heroes={this.state.heroesClasses} class="assassin" onClick={(heroName) => this.onHeroesClick(heroName)} />}
            {value === 3 && <TabContainer heroes={this.state.heroesClasses} class="archer" onClick={(heroName) => this.onHeroesClick(heroName)} />}
            {value === 4 && <TabContainer heroes={this.state.heroesClasses} class="machinist" onClick={(heroName) => this.onHeroesClick(heroName)} />}
            {value === 5 && <TabContainer heroes={this.state.heroesClasses} class="wizard" onClick={(heroName) => this.onHeroesClick(heroName)} />}
            {value === 6 && <TabContainer heroes={this.state.heroesClasses} class="priest" onClick={(heroName) => this.onHeroesClick(heroName)} />}
          </div>
          <div style={{ marginTop: 20 }}>
            <AppBar position="static" style={{ backgroundColor: "#2196f3", height: 48 }}>
              <div style={{ margin: "auto auto" }}>Ordering</div>
            </AppBar>
            <SortableComponent chosenHeroes={this.state.selectHeroes} onSortUpdate={this.onSortUpdate} />
          </div>
          <NoxRecordGenerator chosenHeroes={this.state.selectHeroes} interval={this.state.interval} />

        </div >
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};



function TabContainer(props) {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      {props.heroes.filter(x => x.class === props.class).map(x => {
        return (
          <Button onClick={() => { props.onClick(x.name) }} variant="raised" style={{ width: 100, height: 50, margin: 10, backgroundColor: x.picked ? 'lightblue' : 'grey' }}>
            {x.name}
          </Button>);
      })}
    </div>
  );
}



TabContainer.propTypes = {
};

export default withStyles(styles)(App);
