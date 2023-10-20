import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';

const breadcrumbNameMap = {
  '/home': 'Home',
  '/rooms': 'Rooms',
  '/room/:id': 'Room Details',
};

// function ListItemLink(props) {
//   const { to, open, ...other } = props;
//   const primary = breadcrumbNameMap[to];

//   let icon = null;
//   if (open != null) {
//     icon = open ? <ExpandLess /> : <ExpandMore />;
//   }

//   return (
//     <li>
//       <ListItem button component={RouterLink} to={to} {...other}>
//         <ListItemText primary={primary} />
//         {icon}
//       </ListItem>
//     </li>
//   );
// }

// ListItemLink.propTypes = {
//   open: PropTypes.bool,
//   to: PropTypes.string.isRequired,
// };

function LinkRouter(props) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log(pathnames)

  return (
    <Breadcrumbs>
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        console.log(last)
        console.log(to)

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}{value}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}{value}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default function BreadcrumbsContainer() {
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', width: 360 }}>
        <Routes>
            <Route path="*" element={<Page />} />
        </Routes>
        
        {/* <Box
          sx={{
            bgcolor: 'background.paper',
            mt: 1,
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <List>
            <ListItemLink to="/home" open={open} onClick={handleClick} />
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink sx={{ pl: 4 }} to="/rooms/" />
              </List>
            </Collapse>
            <ListItemLink to="/home" />
            <ListItemLink to="/home" />
          </List>
        </Box> */}
      </Box>
  );
}