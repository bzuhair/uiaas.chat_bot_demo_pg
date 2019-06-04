import React, { PureComponent } from 'react';


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
        <div key={item.bank_name} style={{ borderTop: border, paddingTop: padding }}>
          <span style={{ marginRight: '12px' }}>{item.logo}</span>
          <span style={{ width: '580px', display: 'inline-block' }}>{name}</span>
          <span>Linked 2/5/19</span>
        </div>
      );
    });
    return (
      <div className="account-list-container">
        <div className="title">Linked Accounts</div>
        <div className="list" style={{ borderLeft: 'solid 6px #000000' }}>
          {list}
        </div>
      </div>
    );
  }
}

export default AccountList;
