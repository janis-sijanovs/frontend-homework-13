import { type } from 'os';
import {
  createElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import './task2.scss';

const Task2 = () => {
  const initialStringArray: string[] = [];
  const [valueArray, setvalueArray] = useState(initialStringArray);
  const [count, setCount] = useState(0);

  const focusRef = useRef<HTMLInputElement | null>(null);
  const arrayInputRef = useRef<HTMLInputElement | null>(null);
  const disabledButtonRef = useRef<HTMLButtonElement | null>(null);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const boxAdderOutputRef = useRef<HTMLDivElement | null>(null);
  const boxAdderTemplateRef = useRef<HTMLDivElement | null>(null);

  const arrayInputHandler = () => {
    if (arrayInputRef.current) {
      const arrayInput = arrayInputRef.current;
      if (arrayInput.value) {
        setvalueArray([...valueArray].concat(arrayInput.value));
        arrayInput.value = '';
      }
      arrayInput.focus();
    }
  };

  const boxAdderHandler = () => {
    if (selectRef.current) {
      const select = selectRef.current;

      if (select.value) {
        if (boxAdderOutputRef.current) {
          const boxAdderOutput = boxAdderOutputRef.current;

          if (boxAdderTemplateRef.current) {
            const boxAdderTemplate = boxAdderTemplateRef.current;
            boxAdderTemplate.style.backgroundColor = select.value;
            boxAdderOutput.appendChild(boxAdderTemplate.cloneNode());
          }
        }

        select.value = '';
      }
    }
  };

  useEffect(() => {
    if (focusRef.current) {
      const focus = focusRef.current;
      focus.focus();
    }

    if (disabledButtonRef.current) {
      const disabledButton = disabledButtonRef.current;

      setTimeout(() => {
        disabledButton.disabled = false;
      }, 5000);
    }
  }, []);

  return (
    <section className="task">

      <input
        type="text"
        className="input"
        placeholder="Write Something"
        ref={focusRef}
      />

      <div className="flex">

        <input
          type="text"
          className="input"
          placeholder="Write Something"
          ref={arrayInputRef}
        />

        <button
          className="button"
          onClick={() => arrayInputHandler()}
        >
          Submit
        </button>
      </div>

      <p className="text">{valueArray.join(', ')}</p>

      <button
        className="button"
        ref={disabledButtonRef}
        disabled
      >
        Poga
      </button>

      <button
        className="button"
        onClick={() => setCount(count + 1)}
      >
        Count:&nbsp;
        {count}
      </button>

      <div className="box">{(+count * 2).toString()}</div>

      <div className="flex">
        <button
          className="button"
          onClick={() => boxAdderHandler()}
        >
          +
        </button>

        <select
          className="input"
          ref={selectRef}
          defaultValue=""
        >
          <option value="" disabled>Select Color</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>

      <div className="flex" ref={boxAdderOutputRef}>
        <template>
          <div className="box" ref={boxAdderTemplateRef} />
        </template>
      </div>

    </section>
  );
};

export default Task2;
