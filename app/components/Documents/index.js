/**
 *
 * Documents
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import ProgressBar from 'react-toolbox/lib/progress_bar';

class Documents extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { documents, documentsFetching } = this.props;
    return (
      <div>
        {documentsFetching ? <div style={{ textAlign: 'center' }}>
          <ProgressBar type="circular" mode="indeterminate" />
        </div> : <div>
          { documents.map(item)}<div style={{ marginTop: '0px' }} className="row">
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
          </div>
          <div className="row">
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
          </div>
          <div className="row">
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
            <div style={{ padding: '10px' }} className="col-xs">
              <Card>
                <CardMedia
                  aspectRatio="wide"
                  image="https://placeimg.com/800/450/nature"
                />
                <CardTitle
                  title="Title goes here"
                  subtitle="Uploaded by Sergey Zubov, 13.07.2017"
                />
              </Card>
            </div>
          </div>
        </div>}

      </div>
    );
  }
}

Documents.propTypes = {};

export default Documents;
