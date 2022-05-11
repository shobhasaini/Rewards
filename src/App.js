import './App.css';
import Records from './data/transaction-log.json';
import MonthlyRewards from './components/monthly-rewards';

function App() {
  const records = Records;
  return (
    <div className="App">
      <MonthlyRewards records={records}/>
    </div>
  );
}

export default App;
