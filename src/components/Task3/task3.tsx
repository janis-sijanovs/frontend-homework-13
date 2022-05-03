import {
  useRef,
  useState,
} from 'react';
import './task3.scss';

const Task3 = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const cornerBoxRef = useRef<HTMLDivElement | null>(null);
  const targetBoxRef = useRef<HTMLDivElement | null>(null);
  const targetContainerRef = useRef<HTMLDivElement | null>(null);

  const changeColor = () => {
    if (boxRef.current) {
      const box = boxRef.current;
      box.style.backgroundColor = 'gold';
    }
  };

  const duplicateBox = () => {
    if (targetBoxRef.current && targetContainerRef.current) {
      const targetContainer = targetContainerRef.current;
      const targetBox = targetBoxRef.current;
      targetContainer.appendChild(targetBox.cloneNode());
    }
  };

  const moveToCorner = () => {
    if (cornerBoxRef.current) {
      const cornerBox = cornerBoxRef.current;
      cornerBox.style.position = 'absolute';
      cornerBox.style.right = '0';
      cornerBox.style.top = '0';
      cornerBox.innerText = "I'm in the corner now";
    }
  };

  return (
    <div className="task">

      {/* <CardList /> */}
      <div
        className="box"
        ref={boxRef}
      />
      <button
        className="button"
        onClick={() => changeColor()}
      >
        To Gold
      </button>

      <div
        className="container"
        ref={targetContainerRef}
      >
        <div
          className="box"
          ref={targetBoxRef}
        />
      </div>

      <button
        className="button"
        onClick={() => duplicateBox()}
      >
        Clone
      </button>

      <div className="relative-box">
        <div
          className="box"
          ref={cornerBoxRef}
        />

        <button
          className="button"
          onClick={() => moveToCorner()}
        >
          Move To Corner
        </button>
      </div>
    </div>
  );
};

export default Task3;
