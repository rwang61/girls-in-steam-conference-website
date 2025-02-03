import React, { useState } from 'react';
import './../styles/Agenda.css';
import { ToggleButton } from '@mui/material';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import SimpleTimeline from './SimpleTimeline';
import ComplicatedTimeline from './ComplicatedTimeline';

export default function Agenda() {
  const [selected, setSelected] = useState(false);

  return (
    <div id="Agenda" className={`agenda-background ${selected ? 'expanded' : 'collapsed'}`}>
      <div>
        <div className="agenda-header">
          <h2>AGENDA</h2>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => setSelected((prevSelected) => !prevSelected)}
            className="custom-toggle-button"
            disableRipple>
            {selected ? (
              <IoIosArrowUp className="arrow-icon" />
            ) : (
              <IoIosArrowDown className="arrow-icon" />
            )}
          </ToggleButton>
        </div>

        {selected ? (
          <div className="schedule-content">
            <SimpleTimeline />
          </div>
        ) : (
          <div className="schedule-content">
            <ComplicatedTimeline />
          </div>
        )}
      </div>
    </div>
  );
}
