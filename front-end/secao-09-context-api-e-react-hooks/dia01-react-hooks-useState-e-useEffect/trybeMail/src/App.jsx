import { useState, useEffect } from 'react';
import './App.css';
import EmailList from './components/EmailList';
import emails from './services/data';
import { READ, UNREAD } from './constants';
import ControlBtns from './components/ControlBtns';

function App() {
  const [emailList, setEmailList] = useState(emails);

  const setEmailStatus = (id, newStatus) => {
    const updateStatus = emailList.map((email) => {
      if (email.id === id) {
        return { ...email, status: newStatus };
      }
      return email;
    });
    setEmailList(updateStatus);
  };

  const allRead = () => {
    const updateStatus = emailList.map((email) => {
      return { ...email, status: READ };
    });
    setEmailList(updateStatus);
  };

  const allUnread = () => {
    const updateStatus = emailList.map((email) => {
      return { ...email, status: UNREAD };
    });
    setEmailList(updateStatus);
  };

  useEffect(() => {
    const allEmailsRead = emailList.every((email) => email.status === READ);
    if (allEmailsRead) {
      alert('Parabéns! Você leu todas suas mensagens!');
    }
  }, [emailList]);

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
        <ControlBtns allRead={ allRead } allUnread={ allUnread } />
        <EmailList emails={ emails } setEmailStatus={ setEmailStatus } />
      </header>
    </div>
  );
}

export default App;
