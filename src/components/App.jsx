import user from './Profile/user.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json'
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json'
import { Transactions } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        userName={user.userName}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions transactions={transactions} />
    </div>
  );
};
