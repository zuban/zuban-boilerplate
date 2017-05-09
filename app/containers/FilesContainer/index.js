/*
 *
 * FilesContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectFilesContainer from './selectors';
import Footer from '../../components/Footer';
import { List, ListSubHeader } from 'react-toolbox/lib/list';
import { ListItem } from 'react-toolbox/lib/list';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import styles from './styles.css';
import slinkIcon from './webpack.svg';

import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
// import Link from 'react-toolbox/lib/link';
import {Link} from 'react-router'

export class FilesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="FilesContainer"
          meta={[
            { name: 'description', content: 'Description of FilesContainer' },
          ]}
        />
        <div className="row">
          <div
            style={{ padding: '0px', background: '#f7f9fa', height: '100vh' }}
            className="col-xs-12 col-sm-3 col-md-2 col-lg-2"
          >
            <List selectable>
              <ListSubHeader
                caption={<h2 style={{ marginLeft: '9px', marginTop: '8px' }}>
                  <object style={{ verticalAlign: 'middle' }} type="image/svg+xml" data={slinkIcon} />
                  Slink</h2>}
              />
              <ListItem
                theme={styles}
                leftIcon="group"
                caption="#people"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#longlogntag"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon="share"
                caption="#design"
              />
              <ListItem
                theme={styles}
                leftIcon="share"
                caption="#material"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#newmarkup"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon="share"
                caption="#shared"
              />
              <ListItem
                theme={styles}
                leftIcon="group"
                caption="#people"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#pen"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#slink"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon="group"
                caption="#people"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#longlogntag"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon="share"
                caption="#design"
              />
              <ListItem
                theme={styles}
                leftIcon="share"
                caption="#material"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#newmarkup"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon="share"
                caption="#shared"
              />
              <ListItem
                theme={styles}
                leftIcon="group"
                caption="#people"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#pen"
                rightIcon="more_vert"
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption="#slink"
                rightIcon="more_vert"
              />
            </List>
          </div>
          <div
            style={{ height: '100vh', paddingRight: '0rem', paddingLeft: '0rem' }}
            className="col-xs-12 col-sm-9 col-md-10 col-lg-10"
          >
            <AppBar title="Documents view">
              <Navigation type="horizontal">
                <Link href="http://" label="Inbox" icon="inbox" />
                <Link href="http://" active label="Profile" icon="person" />
              </Navigation>
            </AppBar>
            <div style={{ marginTop: '0px' }} className="row">
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
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

FilesContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  FilesContainer: makeSelectFilesContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilesContainer);
