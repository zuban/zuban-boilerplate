/**
 *
 * Documents
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from './styles.css'
class Documents extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { documents, documentsFetching } = this.props;
    return (
      <div>
        {documentsFetching ? <div style={{ textAlign: 'center' }}>
          <ProgressBar type="circular" mode="indeterminate" />
        </div> : <div >
          { documents.reduce((arr, item, index) => {
            if (index % 4) {
              arr[arr.length - 1].push(item);
            } else {
              arr[arr.length] = [item];
            }
            return arr;
          }, [])
            .map((item) => <div style={{ marginRight: '0rem', marginLeft: '0rem' }} className="row">
              { item.map((card, i) => {
                const padding = { padding: '10px', maxWidth: '25%' };
                return (<div style={padding} className="col-xs">
                  <Card>
                    <img width="100%" src={`hw/services/files/svg/${card.id}/content.svg`} alt="Card image cap" />
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
