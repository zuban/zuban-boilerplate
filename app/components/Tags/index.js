/**
 *
 * Tags
 *
 */

import React from 'react';
import { List, ListSubHeader, ListItem } from 'react-toolbox/lib/list';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import styles from './styles.css';
import slinkIcon from './webpack.svg';

class Tags extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getTag(item, userId) {
    let leftIcon = item.users.length > 0 ? 'group' : <span >{' '}</span>;
    let rightIcon = 'more_vert';
    if (item.owner.id !== parseInt(userId)) {
      leftIcon = 'share';
      rightIcon = null;
    }
    return (<ListItem
      onClick={() => this.props.selectTag(item)}
      theme={styles}
      leftIcon={leftIcon}
      caption={`#${item.value}`}
      rightIcon={rightIcon}
    />);
  }
  render() {
    const { tagsFetching, tags, userName, userId } = this.props;
    return (
      <div
        style={{ padding: '0px', background: '#f7f9fa' }}
        className="col-xs-12 col-sm-3 col-md-2 col-lg-2"
      >
        <List selectable>
          <ListSubHeader
            caption={<h2 style={{ marginLeft: '9px', marginTop: '8px' }}>
              <object style={{ verticalAlign: 'middle' }} type="image/svg+xml" data={slinkIcon} />
              Slink</h2>}
          />
          {tagsFetching ? <div style={{ textAlign: 'center' }}>
            <ProgressBar type="circular" mode="indeterminate" />
          </div> :
            tags.map((item) => this.getTag(item, userId))}
          <ListItem
            theme={styles}
            leftIcon="share"
            caption="#design"
          />

        </List>
      </div>
    );
  }
}

Tags.propTypes = {};

export default Tags;
