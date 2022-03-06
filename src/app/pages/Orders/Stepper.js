import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Pending - Waiting to be assigned',
  'Transporter assigned- In Transit',
  'Driver Assigned- In Transit',
  'Completed',
];

export default function HorizontalLabelPositionBelowStepper(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props?.step} orientation="vertical" >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}