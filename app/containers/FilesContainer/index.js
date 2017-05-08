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
import { List, ListSubHeader} from 'react-toolbox/lib/list';
import { ListItem} from 'react-toolbox/lib/list';

import styles from './styles.css'
import slinkIcon from './webpack.svg';

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
                caption={<h2>
                  <object style={{ verticalAlign: 'middle' }} type="image/svg+xml" data={slinkIcon} />
                  Slink</h2>}
              />
              <ListItem
                theme={styles}
                leftIcon={<span >{' '}</span>}
                caption='#longlogntag'
                rightIcon='more_vert'
              />
              <ListItem
                leftIcon='share'
                caption='#design'
              />
              <ListItem
                leftIcon='share'
                caption='#material'
              />
              <ListItem
                leftIcon={<span >{' '}</span>}
                caption='#newmarkup'
                rightIcon='more_vert'
              />
              <ListItem
                leftIcon='share'
                caption='#shared'
              />
              <ListItem
                leftIcon='group'
                caption='#people'
                rightIcon='more_vert'
              />
              <ListItem
                leftIcon={<span >{' '}</span>}
                caption='#pen'
                rightIcon='more_vert'
              />
              <ListItem
                leftIcon={<span >{' '}</span>}
                caption='#slink'
                rightIcon='more_vert'
              />
            </List>
          </div>
          <div style={{ height: '100vh' }} className="col-xs-12 col-sm-9 col-md-10 col-lg-10">
            <div style={{ height: '100%' }} className="box">Responsive</div>
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
