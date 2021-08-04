//import logo from './logo.svg';
import './App.css';
import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import FriendList from './components/FriendList';
import { TransactionHistory } from './components/TransactionHistory';
import user_data from './api/user.json';
import statisticalData from './api/statistical-data.json';
import friendsData from './api/friends.json';
import transactions from './api/transactions.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">

       <div className="Component">
          <Profile
            name={user_data.name}
            tag={user_data.tag}
            location={user_data.location}
            avatar={user_data.avatar}
            stats={user_data.stats}
          />
        </div>


        <div className="Component">
          <Statistics title="Upload stats" stats={statisticalData} />
          <Statistics stats={statisticalData} />
        </div>

        <div className="Component">
            <FriendList friends={friendsData} />
        </div>

        <div className="Component">
          <TransactionHistory items={transactions} />
        </div>

      </header>
    </div>
  );
}

export default App;

/*
<div className="Profile">
          <Profile
            name={user_data.name}
            tag={user_data.tag}
            location={user_data.location}
            avatar={user_data.avatar}
            stats={user_data.stats}
          />
        </div>


 <div className="Statistics">
          <Statistics title="Upload stats" stats={statisticalData} />
          <Statistics stats={statisticalData} />
        </div>

 <div className="Friends">
            <FriendList friends={friendsData} />
        </div>

  <div className="TransactionHistory">
          <TransactionHistory items={transactions} />
        </div>

*/
