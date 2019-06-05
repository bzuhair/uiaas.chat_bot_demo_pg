import React, { PureComponent } from 'react';
import Linked from '../svg/Linked';


class AccountList extends PureComponent {
  render() {
    const { accounts } = this.props;

    const list = accounts.map((item, idx) => {
      const name = item.bank_name;
      let border = '';
      let padding = '';
      if (idx !== 0) {
        border = 'solid 1px #868686';
        padding = '18px';
      }

      return (
        <div className="list-item" key={item.bank_name} style={{ borderTop: border, paddingTop: padding }}>
          <div className="list-left"><span className="list-logo">{item.logo}</span></div>
          <div className="list-right">
            <span className="list-info">{name}</span>
            <div style={{ width: '50%' }}><Linked /><span className="list-date">Linked 2/5/19</span></div>
          </div>
        </div>
      );
    });
    return (
      <div className="account-list-container">
        <div className="title">Linked accounts</div>
        <div className="list">
          {list}
        </div>
      </div>
    );
  }
}

export default AccountList;
