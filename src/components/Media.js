// import React, { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   IconButton,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';
// import ReactPlayer from 'react-player';

// const DisplayMedia = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const slides = [
//     'https://img.freepik.com/free-photo/building-decorated-indian-republic-day_23-2151142432.jpg?t=st=1720515073~exp=1720518673~hmac=dcce4d9a4ef02d41cab84556f4556962f061c4c7f1b98f23e3ea88b7854b5c9c&w=1380',
//     'https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297217.jpg?t=st=1720515143~exp=1720518743~hmac=73c954c1907627b29a2edc31be05e6c9c30e1baaa68bd044cf5e2d78dabd804c&w=1060',
//     'https://img.freepik.com/free-photo/taj-mahal-agra-india_53876-47058.jpg?t=st=1720515170~exp=1720518770~hmac=e838246151a6a2be1c21f8be65a3cebfdac5f588d66c945c2e9ee7b7b289d638&w=1060',
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <Card sx={{ maxWidth: '100%', m: 2 }}>
//       <CardContent>
//         <Typography variant="h4" component="h1" gutterBottom align="center">
//           Monument Info
//         </Typography>

//         <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 2 }}>
//           <ReactPlayer
//             url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//             width="100%"
//             height="100%"
//             controls
//             style={{ position: 'absolute', top: 0, left: 0 }}
//           />
//         </Box>

//         <Typography variant="body1" paragraph>
//           This is a short description of the content. It provides context and information about the media player above and the slideshow below.
//         </Typography>

//         <Box 
//           sx={{ 
//             position: 'relative',
//             paddingTop: '56.25%', // This creates a 16:9 aspect ratio
//             mb: 2,
//             overflow: 'hidden',
//             borderRadius: 2,
//             boxShadow: 3,
//           }}
//         >
//           <Box
//             component="img"
//             src={slides[currentSlide]}
//             alt={`Slide ${currentSlide + 1}`}
//             sx={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//             }}
//           />
//           <IconButton
//             onClick={prevSlide}
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: 10,
//               transform: 'translateY(-50%)',
//               bgcolor: 'rgba(255, 255, 255, 0.5)',
//               '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
//             }}
//           >
//             <ChevronLeft />
//           </IconButton>
//           <IconButton
//             onClick={nextSlide}
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               right: 10,
//               transform: 'translateY(-50%)',
//               bgcolor: 'rgba(255, 255, 255, 0.5)',
//               '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
//             }}
//           >
//             <ChevronRight />
//           </IconButton>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default DisplayMedia;


import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ReactPlayer from 'react-player';

const DisplayMedia = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const slides = [
    'https://img.freepik.com/free-photo/building-decorated-indian-republic-day_23-2151142432.jpg?t=st=1720515073~exp=1720518673~hmac=dcce4d9a4ef02d41cab84556f4556962f061c4c7f1b98f23e3ea88b7854b5c9c&w=1380',
    'https://img.freepik.com/free-photo/view-world-monument-celebrate-world-heritage-day_23-2151297217.jpg?t=st=1720515143~exp=1720518743~hmac=73c954c1907627b29a2edc31be05e6c9c30e1baaa68bd044cf5e2d78dabd804c&w=1060',
    'https://img.freepik.com/free-photo/taj-mahal-agra-india_53876-47058.jpg?t=st=1720515170~exp=1720518770~hmac=e838246151a6a2be1c21f8be65a3cebfdac5f588d66c945c2e9ee7b7b289d638&w=1060',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box sx={{ maxWidth: '100%', m: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Monument Info
      </Typography>

      <Box sx={{ position: 'relative', paddingTop: '56.25%', mb: 2 }}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          width="100%"
          height="100%"
          controls
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </Box>

      <Typography variant="body1" paragraph>
        This is a short description of the content. It provides context and information about the media player above and the slideshow below.
      </Typography>

      <Box 
        sx={{ 
          position: 'relative',
          paddingTop: '56.25%', // This creates a 16:9 aspect ratio
          mb: 2,
          overflow: 'hidden',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          component="img"
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            bgcolor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DisplayMedia;
