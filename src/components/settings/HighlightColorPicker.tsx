import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Color,
  CSS_HIGHLIGHT_COLORS,
  CSS_HIGHLIGHT_COLOR_VARIABLE,
  IPC_HIGHLIGHTCOLOR_GET,
  IPC_HIGHLIGHTCOLOR_REPLY,
  IPC_HIGHLIGHTCOLOR_UPDATE,
} from '../../const';

interface Props {}

const HighlightColorPicker: React.FC<Props> = () => {
  const [currentHighlightColor, setCurrentHighlightColor] = useState(
    CSS_HIGHLIGHT_COLORS[0],
  );
  const [highlightExampleColorDivs, setHighlightExampleColorDivs] = useState([
    <div></div>,
  ]);

  useEffect(() => {
    console.log('Registering Listener');
    ipcRenderer.on(IPC_HIGHLIGHTCOLOR_REPLY, (_, color: Color) => {
      setCurrentHighlightColor(color);
      console.log('Set highlight color');
      console.log({ currentHighlightColor });
    });
    ipcRenderer.send(IPC_HIGHLIGHTCOLOR_GET);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      CSS_HIGHLIGHT_COLOR_VARIABLE,
      currentHighlightColor,
    );
    ipcRenderer.send(IPC_HIGHLIGHTCOLOR_UPDATE, currentHighlightColor);
  }, [currentHighlightColor]);

  // DIV UPDATE
  useEffect(() => {
    const nodes: JSX.Element[] = [];

    CSS_HIGHLIGHT_COLORS.forEach((highlightColor, idx) => {
      const highlightExampleColorDiv = (
        <div
          key={idx}
          style={{ backgroundColor: highlightColor }}
          className={
            currentHighlightColor == highlightColor
              ? 'highlightColorSelected'
              : ''
          }
          onClick={() => {
            setCurrentHighlightColor(highlightColor);
          }}
        />
      );

      nodes.push(highlightExampleColorDiv);
    });
    setHighlightExampleColorDivs(nodes);
  }, [currentHighlightColor]);

  return (
    <div className='settingsGroup'>
      <label>
        <FormattedMessage id='colors' />
      </label>
      <div id='settingsColorDiv'>{highlightExampleColorDivs}</div>
    </div>
  );
};

export default HighlightColorPicker;
