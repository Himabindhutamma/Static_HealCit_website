import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

const MBFormButton = (props) => {
  return (
    <>
      <Button variant={props.variant} type={props.type} style={props.style} className={props.className}
              disabled={props.disabled }
              fullWidth={props.fullWidth} size={props.size} onClick={props.onClick} color={props.color}
      >
        {props.children}
      </Button>
    </>
  );
};

export default MBFormButton;
