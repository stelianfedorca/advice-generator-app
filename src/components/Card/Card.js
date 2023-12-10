import './Card.css';

import patternDivider from '../../assets/images/pattern-divider-desktop.svg';
import iconDice from '../../assets/images/icon-dice.svg';

export function Card({ headerText, content, isLoading, onButtonClick, style }) {
  return (
    <div className="max-width-wrapper" style={style}>
      <div className="card">
        <header>
          <h1>{headerText}</h1>
        </header>
        {isLoading ? <div className="loader"></div> : <p>{content}</p>}
        {/* <div className="something"></div> */}
        {/* <img src={patternDivider} alt="" className="divider" /> */}
      </div>
      <button className="dice-button" onClick={onButtonClick}>
        <img src={iconDice} alt="" />
      </button>
    </div>
  );
}
