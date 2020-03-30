import React from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import ShareIcon from '@material-ui/icons/Share';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const actions = [
  { icon: <LinkedInIcon />, name: 'LinkedIn' },
  { icon: <FacebookIcon />, name: 'Facebook' },
  { icon: <TwitterIcon />, name: 'Twitter' },
  { icon: <WhatsAppIcon />, name: 'Whatsapp' },
];

export default function SpeedDials() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        <SpeedDial
          ariaLabel="SpeedDial example"
          icon={<ShareIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="right"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
    </div>
  );
}