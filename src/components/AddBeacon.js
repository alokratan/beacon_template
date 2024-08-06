import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Chip,
} from '@mui/material';
import { 
  Add as AddIcon, 
  Edit as EditIcon, 
  Delete as DeleteIcon,
  LocationOn as LocationIcon,
  Category as CategoryIcon,
  Bluetooth as BluetoothIcon,
  SignalCellular4Bar as SignalIcon
} from '@mui/icons-material';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import ShopIcon from '@mui/icons-material/Shop';
import ArticleIcon from '@mui/icons-material/Article';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BeaconForm from './BeaconForm';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

// Custom theme with professional colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50', // Dark blue-gray
    },
    secondary: {
      main: '#34495e', // Darker blue-gray
    },
    background: {
      default: '#ecf0f1', // Light gray
      paper: '#ffffff', // White
    },
    text: {
      primary: '#2c3e50',
      secondary: '#7f8c8d',
    },
  },
});

// Dummy data
const dummyBeacons = [
  { id: 1, organization: 'Electronic Hub', shop: 'Shoe', beaconId: 'BCN001', category: 'Retail', location: 'New York Store', signal: 'Strong', Template: 'Template A', Offer: '25% OFF', validfrom: '18/08/2024', validupto: '20/08/2024' },
  
];

const BeaconList = () => {
  const [beacons, setBeacons] = useState(dummyBeacons);
  const [openForm, setOpenForm] = useState(false);

  const handleAddBeacon = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const addBeacon = (beaconData) => {
    const newBeacon = { ...beaconData, id: beacons.length + 1, signal: 'Strong' };
    setBeacons([...beacons, newBeacon]);
  };

  const handleEditBeacon = (id) => {
    // Edit beacon logic
  };

  const handleDeleteBeacon = (id) => {
    setBeacons(beacons.filter(beacon => beacon.id !== id));
  };

  const getSignalColor = (signal) => {
    switch (signal) {
      case 'Strong': return '#27ae60'; // Green
      case 'Medium': return '#f39c12'; // Orange
      case 'Weak': return '#e74c3c'; // Red
      default: return '#95a5a6'; // Gray
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ p: 4, backgroundColor: 'background.default', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', mb: 3 }}>
          <BluetoothIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 36 }} />
          Beacon Management System
        </Typography>
        
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddBeacon}
          sx={{ mb: 3, backgroundColor: 'primary.main', '&:hover': { backgroundColor: 'primary.dark' } }}
        >
          Add New Beacon
        </Button>

        <TableContainer component={Paper} elevation={2} sx={{ backgroundColor: 'background.paper', borderRadius: 1 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.light' }}>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Company</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Shop</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Beacon ID</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Location</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Signal</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Actions</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Template</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Offer</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Valid From</TableCell>
                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 'bold' }}>Valid UpTo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {beacons.map((beacon) => (
                <TableRow key={beacon.id} hover sx={{ '&:hover': { backgroundColor: 'action.hover' } }}>
                  <TableCell>
                    <Chip
                      icon={<CorporateFareIcon />}
                      label={beacon.organization}
                      color="primary"
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      icon={<ShopIcon />}
                      label={beacon.shop}
                      color="primary"
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      icon={<BluetoothIcon />}
                      label={beacon.beaconId}
                      color="primary"
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip
                      icon={<CategoryIcon />}
                      label={beacon.category}
                      color="secondary"
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Tooltip title={beacon.location}>
                      <Chip
                        icon={<LocationIcon />}
                        label={beacon.location}
                        variant="outlined"
                        size="small"
                      />
                    </Tooltip>
                  </TableCell>
                  
                  <TableCell>
                    <Chip
                      icon={<SignalIcon />}
                      label={beacon.signal}
                      sx={{ 
                        backgroundColor: getSignalColor(beacon.signal),
                        color: '#ffffff',
                        '& .MuiChip-icon': { color: '#ffffff' }
                      }}
                      size="small"
                    />
                  </TableCell>
                  
                  <TableCell>
                    <Tooltip title="Edit">
                      <IconButton onClick={() => handleEditBeacon(beacon.id)} color="primary" size="small">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => handleDeleteBeacon(beacon.id)} color="error" size="small">
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={beacon.Template}>
                      <Chip
                        icon={<ArticleIcon />}
                        label={beacon.Template}
                        variant="outlined"
                        size="small"
                      />
                    </Tooltip>
                  </TableCell>

                  <TableCell>
                    <Tooltip title={beacon.Offer}>
                      <Chip
                        icon={<LocalOfferIcon />}
                        label={beacon.Offer}
                        variant="outlined"
                        size="small"
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={beacon.validfrom}>
                      <Chip
                        icon={<CalendarTodayIcon />}
                        label={beacon.validfrom}
                        variant="outlined"
                        size="small"
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={beacon.validupto}>
                      <Chip
                        icon={<CalendarTodayIcon />}
                        label={beacon.validupto}
                        variant="outlined"
                        size="small"
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <BeaconForm 
        open={openForm} 
        handleClose={handleCloseForm} 
        addBeacon={addBeacon}
      />
    </ThemeProvider>
  );
};

export default BeaconList;


// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Button,
//   Typography,
//   Grid,
//   Paper,
//   InputAdornment,
//   Icon,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import {
//   ContactlessRounded,
//   LocationOnOutlined,
//   LineAxisOutlined,
//   SourceOutlined,
// } from "@mui/icons-material";
// import '../assets/css/addbeacon.css'

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   maxWidth: 700,
//   margin: "0 auto",
//   background: "linear-gradient(145deg, #f3f4f6 0%, #ffffff 100%)",
//   borderRadius: "15px",
//   boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
//   border: 0,
//   borderRadius: 3,
//   boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
//   color: "white",
//   height: 48,
//   padding: "0 30px",
//   marginTop: theme.spacing(2),
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: theme.palette.primary.light,
//     },
//     "&:hover fieldset": {
//       borderColor: theme.palette.primary.main,
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: theme.palette.primary.dark,
//     },
//   },
// }));

// const AddBeacon = () => {
//   const [beaconData, setBeaconData] = useState({
//     beaconId: "",
//     location: "",
//     purpose: "",
//     contentType: "",
//     title: "",
//     description: "",
//     link: "",
//     file: null,
//   });

//   const [formFields, setFormFields] = useState([{ name: "", type: "text" }]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBeaconData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     if (name === "purpose") {
//       setFormFields(getPurposeFields(value));
//     }
//   };

//   const getPurposeFields = (purpose) => {
//     switch (purpose) {
//       case "hospital":
//         return [
//           { name: "Name", type: "text" },
//           { name: "DOB", type: "date" },
//           { name: "Sex", type: "select", options: ["Male", "Female", "Other"] },
//           { name: "Address", type: "text" },
//           { name: "Phone", type: "tel" },
//           { name: "Email", type: "email" },
//           { name: "Existing Disease", type: "text" },
//           { name: "Insurance Details", type: "text" },
//         ];
//       case "hotel":
//       case "retail":
//       case "exhibition and fair":
//         return [
//           { name: "Name", type: "text" },
//           { name: "DOB", type: "date" },
//           { name: "Sex", type: "select", options: ["Male", "Female", "Other"] },
//           { name: "Address", type: "text" },
//           { name: "Phone", type: "tel" },
//           { name: "Email", type: "email" },
//           { name: "Preferences", type: "text" },
//           {
//             name:
//               purpose === "hotel"
//                 ? "Type of Traveller"
//                 : purpose === "retail"
//                 ? "Income Group"
//                 : "Interest Areas",
//             type: "text",
//           },
//         ];
//       case "warehouse":
//         return [
//           { name: "Category", type: "text" },
//           { name: "Sub Category", type: "text" },
//           { name: "Comments", type: "textarea" },
//           { name: "Upload Document or Images", type: "file" },
//         ];
//       default:
//         return [];
//     }
//   };

//   const handleFileChange = (e) => {
//     setBeaconData((prevData) => ({
//       ...prevData,
//       file: e.target.files[0],
//     }));
//   };

//   const handleFormFieldChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedFields = [...formFields];
//     updatedFields[index] = { ...updatedFields[index], [name]: value };
//     setFormFields(updatedFields);
//   };

//   const addFormField = () => {
//     setFormFields([...formFields, { name: "", type: "text" }]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log(beaconData);
//     console.log(formFields);
//   };

//   return (
//     <StyledPaper elevation={3}>
//       <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
//         Add New Beacon
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12} container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <StyledTextField
//                 fullWidth
//                 label="Beacon ID"
//                 name="beaconId"
//                 value={beaconData.beaconId}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <ContactlessRounded color="primary" />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <StyledTextField
//                 fullWidth
//                 label="Location"
//                 name="location"
//                 value={beaconData.location}
//                 onChange={handleChange}
//                 required
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <LocationOnOutlined color="primary" />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//           </Grid>

//           <Grid item xs={12} container spacing={2}>
//             <Grid item xs={12} md={6}>
//               <FormControl fullWidth>
//                 <InputLabel>Purpose</InputLabel>
//                 <Select
//                   name="purpose"
//                   value={beaconData.purpose}
//                   onChange={handleChange}
//                   required
//                 >
//                   <MenuItem value="hospital">Hospital</MenuItem>
//                   <MenuItem value="retail">Retail</MenuItem>
//                   <MenuItem value="hotel">Hotel</MenuItem>
//                   <MenuItem value="exhibition and fair">Exhibition and Fair</MenuItem>
//                   <MenuItem value="warehouse">Warehouse</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} md={6}>
//               <FormControl fullWidth>
//                 <InputLabel>Content Type</InputLabel>
//                 <Select
//                   name="contentType"
//                   value={beaconData.contentType}
//                   onChange={handleChange}
//                   required
//                 >
//                   <MenuItem value="mediaFile">Media File</MenuItem>
//                   <MenuItem value="link">Link</MenuItem>
//                   <MenuItem value="form">Form</MenuItem>
//                   <MenuItem value="htmlContent">HTML Content</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>

//           {beaconData.contentType === "mediaFile" && (
//             <>
//               <Grid item xs={12}>
//                 <StyledTextField
//                   fullWidth
//                   label="Title"
//                   name="title"
//                   value={beaconData.title}
//                   onChange={handleChange}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         {/* <Icon>title</Icon> */}
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <StyledTextField
//                   fullWidth
//                   label="Short Description"
//                   name="description"
//                   value={beaconData.description}
//                   onChange={handleChange}
//                   multiline
//                   rows={3}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         {/* <Icon>description</Icon> */}
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <input
//                   accept="image/,video/,audio/*,application/pdf"
//                   style={{ display: "none" }}
//                   id="raised-button-file"
//                   multiple
//                   type="file"
//                   onChange={handleFileChange}
//                 />
//                 <label htmlFor="raised-button-file">
//                   <Button variant="contained" color="primary" component="span">
//                     Upload Media
//                   </Button>
//                 </label>
//               </Grid>
//             </>
//           )}

//           {beaconData.contentType === "link" && (
//             <Grid item xs={12}>
//               <StyledTextField
//                 fullWidth
//                 label="Link"
//                 name="link"
//                 value={beaconData.link}
//                 onChange={handleChange}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SourceOutlined color="primary" />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>
//           )}

//           {beaconData.contentType === "form" &&
//             formFields.map((field, index) => (
//               <Grid item xs={12} key={index}>
//                 {field.type === "select" ? (
//                   <FormControl fullWidth>
//                     <InputLabel>{field.name}</InputLabel>
//                     <Select
//                       name={field.name}
//                       value={beaconData[field.name]}
//                       onChange={(e) => handleFormFieldChange(index, e)}
//                     >
//                       {field.options.map((option) => (
//                         <MenuItem value={option} key={option}>
//                           {option}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 ) : (
//                   <StyledTextField
//                     fullWidth
//                     label={field.name}
//                     name={field.name}
//                     type={field.type}
//                     value={beaconData[field.name]}
//                     onChange={(e) => handleFormFieldChange(index, e)}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <LineAxisOutlined color="primary" />
//                         </InputAdornment>
//                       ),
//                     }}
//                   />
//                 )}
//               </Grid>
//             ))}

//           <Grid item xs={12}>
//             <StyledButton type="submit" variant="contained">
//               Submit
//             </StyledButton>
//           </Grid>
//         </Grid>
//       </form>
//     </StyledPaper>
//   );
// };

// export default AddBeacon;