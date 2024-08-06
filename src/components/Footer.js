import React, { useState } from 'react';
import {
  Box,
  Container,
  IconButton,
  Tooltip,
  Snackbar,
  Typography,
} from '@mui/material';
import {
  WhatsApp,
  Instagram,
  Facebook,
  LinkedIn,
  ContentCopy,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFAA33',
  color: 'black',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  marginTop: 'auto',
}));

const Footer = ({ config }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const defaultConfig = {
    whatsapp: { enabled: true, url: 'https://wa.me/?text=' },
    instagram: { enabled: true, url: 'https://www.instagram.com/' },
    facebook: {
      enabled: true,
      url: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    linkedin: {
      enabled: true,
      url: 'https://www.linkedin.com/sharing/share-offsite/?url=',
    },
    copyLink: { enabled: true },
  };

  const footerConfig = { ...defaultConfig, ...config };

  const currentUrl =
    typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform) => {
    const shareUrl =
      footerConfig[platform].url + encodeURIComponent(currentUrl);
    window.open(shareUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setSnackbarOpen(true);
    });
  };

  const renderShareButton = (platform, icon) => {
    if (!footerConfig[platform].enabled) return null;

    return (
      <Tooltip title={`Share on ${platform}`}>
        <IconButton
          color="inherit"
          onClick={() => handleShare(platform)}
          aria-label={`Share on ${platform}`}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <StyledFooter component="footer">
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <Typography variant="body1" sx={{ color: 'black' }}>
            Get more updates on :
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            {renderShareButton('whatsapp', <WhatsApp sx={{ color: 'black' }} />)}
            {renderShareButton('instagram', <Instagram sx={{ color: 'black' }} />)}
            {renderShareButton('facebook', <Facebook sx={{ color: 'black' }} />)}
            {renderShareButton('linkedin', <LinkedIn sx={{ color: 'black' }} />)}
            {footerConfig.copyLink.enabled && (
              <Tooltip title="Copy link">
                <IconButton
                  onClick={handleCopyLink}
                  aria-label="Copy link"
                  sx={{ color: 'black' }}
                >
                  <ContentCopy />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        message="Link copied to clipboard"
        autoHideDuration={2000}
      />
    </StyledFooter>
  );
};

export default Footer;
