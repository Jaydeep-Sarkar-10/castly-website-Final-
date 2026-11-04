import React, { useState, useEffect } from 'react';

const TextType = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "_",
  texts = [],
  deletingSpeed = 50,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  const words = texts.length > 0 ? texts : text;

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (variableSpeedEnabled) {
        setTypingSpeedState(
          Math.floor(Math.random() * (variableSpeedMax - variableSpeedMin + 1)) +
            variableSpeedMin
        );
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeedState
    );

    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    loopNum,
    words,
    typingSpeedState,
    deletingSpeed,
    pauseDuration,
    variableSpeedEnabled,
    variableSpeedMax,
    variableSpeedMin,
  ]);

  const renderText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, i) => (
      <React.Fragment key={i}>
        {i % 2 !== 0 ? <span className="text-middle-gray">{line}</span> : line}
        {i < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <span>
      {renderText(displayText)}
      {showCursor && (
        <span
          style={{
            animation: `blink ${cursorBlinkDuration}s step-end infinite`,
          }}
        >
          {cursorCharacter}
        </span>
      )}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .text-middle-gray {
          font-family: var(--font-canela, 'Canela', 'Instrument Serif', Georgia, serif);
          font-style: italic;
          font-weight: 700;
          color: var(--text-secondary);
        }
      `}</style>
    </span>
  );
};

export default TextType;
