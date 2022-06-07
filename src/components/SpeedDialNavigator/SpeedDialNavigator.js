import react, { useContext } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PiramideBrand from '../PiramideBrand/PiramideBrand';

import './SpeedDialNavigator.scss';

import { StaticContext } from '../../contexts/StaticContext';

const SpeedDialNavigator = () => {
    const { staticState: { speedDialNavigatorElements } } = useContext(StaticContext);
    return (
        <>
            <Box 
                sx={{ 
                    flexGrow: 1 
                }}>
                    <SpeedDial
                        ariaLabel="SpeedDial Navigator"
                        icon={
                            <PiramideBrand 
                                width="30"
                                height="40"
                            />
                        }
                    >
                       {
                           speedDialNavigatorElements.map(speedDialNavigatorElement => {
                               const { id, componentIcon, tooltipTitle } = speedDialNavigatorElement; 
                               return (                                          
                                   <SpeedDialAction 
                                       className="ipos-speeddial-navigator-item"
                                       key={id}
                                       icon={componentIcon}
                                       tooltipTitle={tooltipTitle}
                                   />
                               )
                           })
                       }
                    </SpeedDial>
            </Box>
        </>
    );
};

export default SpeedDialNavigator;