import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {
  const [advice, setAdvice] = useState({ id: -1, advice: '' });
  const [isLoading, setIsLoading] = useState(false);

  console.log('advice: ', advice);

  useEffect(() => {
    fetch('	https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(advice => setAdvice(advice.slip));
  }, []);

  function handleGenerateAdvice() {
    setIsLoading(true);
    fetch('	https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(advice => {
        setAdvice(advice.slip);
        setIsLoading(false);
      });
  }

  return (
    <div className="App">
      <Card
        headerText={`Advice #${advice.id}`}
        content={`"${advice.advice}"`}
        onButtonClick={handleGenerateAdvice}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
