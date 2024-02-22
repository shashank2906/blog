import React, { useState } from 'react';
import { Modal, Button, TextField, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubscribe = () => {
    // You can perform subscription logic here
    console.log('Subscribed with email:', email);
    handleClose();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Blog</div>
      <div className="navbar-links">
        <a href="#">Explore</a>
        <a onClick={handleOpen}>Subscribe</a>
      </div>
      <button className="navbar-connect">Connect</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="subscribe-modal-title"
        aria-describedby="subscribe-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            width: 350,
            height: 200,
            
            boxShadow: 24,
            p: 2,
            textAlign: 'center',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <h2 id="subscribe-modal-title">Subscribe</h2>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              onClick={handleSubscribe}
              variant="contained"
              sx={{ mt: 2, bgcolor: 'green', color: 'white' }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Modal>
    </nav>
  );
}

export default Navbar;
