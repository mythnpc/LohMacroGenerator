import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import _ from 'lodash';
import List, { ListItem, ListItemText } from 'material-ui/List';

const SortableItem = SortableElement(({ value }) => <ListItem button divider> <ListItemText primary={value} /></ListItem>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <List style={{ backgroundColor: "lightgrey" }}>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value.name} />
      ))}
    </List>
  );
});


class SortableComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: this.props.chosenHeroes
      };
    }
  
    componentWillReceiveProps(nextProps) {
      this.setState({ items: nextProps.chosenHeroes })
    }
  
  
    onSortEnd = ({ oldIndex, newIndex }) => {

      let newState = arrayMove(this.state.items, oldIndex, newIndex);  
      this.setState({
        items: newState,
      });

      this.props.onSortUpdate(newState);

    };
    
    render() {
      return <SortableList items={this.state.items} onSortEnd={this.onSortEnd}/>;
    }
  }

  export default SortableComponent;