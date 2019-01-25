import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Row, Col } from 'react-bootstrap';
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
  },
  movieColumn: {
    marginBottom: 20
  }
};

export default class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { _id, genre, name, image_url } = this.props;

    return (
      <Link
        to={{
          pathname: `/view/${_id}`,
          state: {
            _id,
            name,
            genre
          }
        }}
      >
        <Row>
          <Col style={styles.movieColumn} xs={12} sm={4} md={3} lg={3}>
            <Card style={styles.card}>
              <CardMedia style={styles.cardMedia} image={image_url}>
                <img style={styles.bgImage} src={image_url} />
              </CardMedia>
            </Card>
          </Col>
        </Row>
      </Link>
    );
  }
}
