import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import _ from 'lodash';
import List, { ListItem, ListItemText } from 'material-ui/List';

class TabContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.chosenHeroes
        };

        return (
            <div style={{ backgroundColor: "lightgrey" }}>
                {this.props.heroes.filter(x => x.class === props.class).map(x => {
                    return (
                        <Button onClick={() => { props.onClick(x.name) }} variant="raised" style={{ width: 100, height: 50, margin: 10, backgroundColor: x.picked ? 'lightblue' : 'grey' }}>
                            {x.name}
                        </Button>);
                })}
            </div>
        );
    }
}

TabContainer.propTypes = {
};

export default TabContainer;