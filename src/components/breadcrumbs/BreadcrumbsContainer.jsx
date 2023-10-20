import { Link, NavLink, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { HomeRounded } from '@mui/icons-material';


export const BreadcrumbsContainer = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(crumb => crumb !== '');

  const crumbs = pathSegments.map((_, i) => {
    const pathToCrumb = `/${pathSegments.slice(0, i + 1).join('/')}`;
    const decodedCrumb = decodeURIComponent(pathSegments[i]); 
    
    return (
      <>
        <NavLink to={pathToCrumb} className="white">{decodedCrumb}</NavLink>
        {i < pathSegments.length - 1 ? ' / ' : ''}
      </>
    );
  });

  return (
      <Box className="section alignCenter smallText white">
          <Box className="section alignCenter white">
              <Link to="/" className="section alignCenter white" >
                  <HomeRounded style={{ fontSize:"1rem" }}/>  Home
              </Link>
          </Box>

          <Box className="section alignCenter"> / </Box>

          <Box className="section alignCenter">
            {crumbs}
          </Box>
      </Box>
  );
};
