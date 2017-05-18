/**
 *
 * Documents
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from './styles.css';
class Documents extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(...props) {
    super(...props);
    this.gridSize = 4;
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const documentElement = document.documentElement;
    const body = document.getElementsByTagName('body')[0];
    const width = window.innerWidth || documentElement.clientWidth || body.clientWidth;

    if (width >= 3380) {
      this.setState({ gridSize: 11 });
      return;
    }
    if (width < 3380 && width >= 2824) {
      this.setState({ gridSize: 10 });
      return;
    }
    if (width < 2824 && width >= 2000) {
      this.setState({ gridSize: 8 });
      return;
    }
    if (width < 2000 && width >= 1824) {
      this.setState({ gridSize: 6 });
      return;
    }
    if (width < 1824 && width >= 1200) {
      this.setState({ gridSize: 4 });
      return;
    }
    if (width < 1200 && width >= 600) {
      this.setState({ gridSize: 3 });
      return;
    }
    if (width < 1200 && width >= 600) {
      this.setState({ gridSize: 3 });
      return;
    }
    if (width < 600 && width >= 300) {
      this.setState({ gridSize: 2 });
      return;
    }
    if (width < 300) {
      this.setState({ gridSize: 1 });
      return;
    }
    this.setState({ gridSize: 1 });
    // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  render() {
    const { documents, documentsFetching, openDocument } = this.props;
    const { gridSize } = this.state;
    return (
      <div>
        {documentsFetching ? <div style={{ textAlign: 'center' }}>
          <ProgressBar type="circular" mode="indeterminate" />
        </div> : <div >
          { documents.reduce((arr, item, index) => {
            if (index % gridSize) {
              arr[arr.length - 1].push(item);
            } else {
              arr[arr.length] = [item];
            }
            return arr;
          }, [])
            .map((item) => <div style={{ marginRight: '0rem', marginLeft: '0rem' }} className="row">
              { item.map((card, i) => {
                const padding = { padding: '10px', maxWidth: `${100 / gridSize}%` };
                return (<div style={padding} className="col-xs">
                  <Card onClick={() => openDocument(card.id)}>
                    <img width="100%" src={`hw/services/files/svg/${card.id}/content.svg`} alt="document" />
                    <CardTitle
                      theme={styles}
                      title={card.fileName}
                      subtitle={`Uploaded by ${card.owner.userName}`}
                    />
                  </Card>
                </div>);
              })}</div>)}
        </div>}

      </div>
    );
  }
}

Documents.propTypes = {};

export default Documents;
