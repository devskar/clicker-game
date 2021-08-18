import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  CSS_HIGHLIGHT_COLOR_VARIABLE,
  CSS_HIGHLIGHT_EXAMPLE_COLORS,
} from '../../const';

interface Props {}

const HighlightColorPicker: React.FC<Props> = () => {
  const [currentHighlightColor, setCurrentHighlightColor] = useState('gold');

  useEffect(() => {
    document.documentElement.style.setProperty(
      CSS_HIGHLIGHT_COLOR_VARIABLE,
      currentHighlightColor,
    );
  }, [currentHighlightColor]);

  const [highlightExampleColorDiv, setHighlightExampleColorDiv] = useState(
    () => {
      const nodes: JSX.Element[] = [];

      let colorVariables = [
        currentHighlightColor,
        ...CSS_HIGHLIGHT_EXAMPLE_COLORS,
      ];

      colorVariables.forEach((highlightExampleColor) => {
        const highlightExampleColorDiv = (
          <div
            style={{ backgroundColor: highlightExampleColor }}
            onClick={() => {
              setCurrentHighlightColor(highlightExampleColor);
            }}
          />
        );

        nodes.push(highlightExampleColorDiv);
      });
      return nodes;
    },
  );

  return (
    <div className='settingsGroup'>
      <label>
        <FormattedMessage id='colors' />
      </label>
      <div id='settingsColorDiv'>{highlightExampleColorDiv}</div>
    </div>
  );
};

export default HighlightColorPicker;
