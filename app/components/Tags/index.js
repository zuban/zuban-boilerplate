/**
*
* Tags
*
*/

import React from 'react';
// import styled from 'styled-components';
import { List, ListSubHeader } from 'react-toolbox/lib/list';
import { ListItem } from 'react-toolbox/lib/list';
import styles from './styles.css';
import slinkIcon from './webpack.svg';
class Tags extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
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
    );
  }
}

Tags.propTypes = {

};

export default Tags;
