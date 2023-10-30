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
      <Box className="section-container a-center breadcrumbs text-sm white">
          <Box className="section-container a-center d-block">
              <Link to="/" className="section-container a-center white">
                  <HomeRounded className="fs-1"/>  Home
              </Link>
          </Box>

          <Box className="section-container a-center">
            /{crumbs}
          </Box>
      </Box>
  );
};
