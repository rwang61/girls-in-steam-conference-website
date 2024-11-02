import React, { useState } from 'react';
import './../styles/Agenda.css';
import { ToggleButton } from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Timeline from './Timeline';

export default function Agenda() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      id="Agenda"
      className={`agenda-background ${selected ? 'collapsed' : 'expanded'}`} // Apply class based on selected state
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
              <IoIosArrowDown className="arrow-icon" />
            ) : (
              <IoIosArrowUp className="arrow-icon" />
            )}
          </ToggleButton>
        </div>

        {/* Conditionally render the Timeline based on the selected state */}
        {selected ? (
          <>
            <div className="schedule-content">
              <Timeline />
            </div>
          </>
        ) : (
          <p>DEFAULT</p>
        )}
      </div>
    </div>
  );
}
