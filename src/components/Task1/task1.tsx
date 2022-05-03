import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import './task1.scss';

const Task1 = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const inputDisplayRef = useRef<HTMLParagraphElement | null>(null);
  const countDisplayRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    console.log('Input Change');

    if (inputDisplayRef.current) {
      const inputDisplay = inputDisplayRef.current;
      inputDisplay.innerText = inputValue;
    }
    document.title = inputValue;
  }, [inputValue]);

  useEffect(() => {
    console.log('Changing Count');

    if (countDisplayRef.current) {
      const countDisplay = countDisplayRef.current;
      countDisplay.style.fontSize = `${count.toString()}px`;
    }
  }, [count]);

  useEffect(() => {
    console.log('Render');
  });

  useEffect(() => {
    console.log('First Render');
    setCount(16);
  }, []);

  return (
    <section className="task">

      <button
        className="button"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <p
        className="text"
        ref={countDisplayRef}
      >
        Count:&nbsp;
        {count}
      </p>

      <input
        type="text"
        className="input"
        value={inputValue}
        onChange={(e:ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />

      <p
        className="text"
        ref={inputDisplayRef}
      />

    </section>
  );
};

export default Task1;
