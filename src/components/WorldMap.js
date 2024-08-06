import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';

const WorldMap = ({ beacons }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '400px', backgroundColor: '#1e2a3a' }}>
      <Typography variant="h6" sx={{ color: '#fff', position: 'absolute', top: 10, left: 10 }}>
        Real-Time
      </Typography>
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Simplified world map path */}
        <path
          d="M150,100 Q200,50 250,100 T350,100 T450,100 T550,100 T650,100 T750,100 Q800,50 850,100 L850,400 Q800,450 750,400 T650,400 T550,400 T450,400 T350,400 T250,400 Q200,450 150,400 Z"
          fill="#2c3e50"
          stroke="#34495e"
          strokeWidth="2"
        />
        
        {beacons.map((beacon, index) => (
          <Tooltip key={index} title={`${beacon.name}: ${beacon.type}`} arrow>
            <circle
              cx={beacon.x}
              cy={beacon.y}
              r="6"
              fill="#3498db"
              stroke="#fff"
              strokeWidth="2"
            />
          </Tooltip>
        ))}
      </svg>
    </Box>
  );
};

export default WorldMap;