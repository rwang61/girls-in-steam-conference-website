import React, { useState } from 'react';
import './../styles/Agenda.css';
import { ToggleButton } from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import SimpleTimeline from './SimpleTimeline';

export default function Agenda() {
  // Start with selected state as true to show the content initially
  const [selected, setSelected] = useState(true);

  return (
    <div
      id="Agenda"
      className={`agenda-background ${selected ? 'expanded' : 'collapsed'}`} // Apply class based on selected state
    >
      <div>
        <div className="agenda-header">
          <h2 className="shadow-text">AGENDA</h2>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => setSelected((prevSelected) => !prevSelected)}
            className="custom-toggle-button"
            disableRipple>
            {selected ? (
              <IoIosArrowUp className="arrow-icon" /> // Show "up" arrow when expanded
            ) : (
              <IoIosArrowDown className="arrow-icon" /> // Show "down" arrow when collapsed
            )}
          </ToggleButton>
        </div>

        {/* Conditionally render the Timeline based on the selected state */}
        {selected ? (
          <div className="schedule-content">
            <SimpleTimeline />
          </div>
        ) : (
          <p>DEFAULT</p>
        )}
      </div>
    </div>
  );
}
