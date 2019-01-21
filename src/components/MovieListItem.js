import React from 'react';
import { Card, CardTitle, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  cardMedia: {
    maxHeight: 394,
    overflow: 'hidden'
  },
  card: {
    cursor: 'pointer',
    height: 400,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%'
  }
};

export default class MovieListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseOver: false
    };
  }

  render() {
    const { _id, genre, name } = this.props;

    return (
      <Card
        style={styles.card}
        onMouseOver={() => this.setState({ isMouseOver: true })}
        onMouseLeave={() => this.setState({ isMouseOver: false })}
      >
        <CardMedia
          style={styles.cardMedia}
          overlay={<CardTitle title={name} subtitle={genre} />}
        >
        </CardMedia>
      </Card>
    );
  }
}

//<Link
//className="list-item"
//to={{
//pathname: `/view/${this.props_id}`,
//state: { _id, genre, name }
//}}
//>
//</Link>
