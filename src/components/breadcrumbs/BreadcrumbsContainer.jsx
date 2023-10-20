import { HomeRounded } from '@mui/icons-material';
import { HomeMiniRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { alignCenter } from '../../custom/Display';
import { White, Orange, SmallText } from '../../custom/Typography';


export const BreadcrumbsContainer = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(crumb => crumb !== '');

  const crumbs = pathSegments.map((_, i) => {
    const pathToCrumb = `/${pathSegments.slice(0, i + 1).join('/')}`;
    const decodedCrumb = decodeURIComponent(pathSegments[i]); 
    
    return (
      <>
        <NavLink to={pathToCrumb} style={{ ...White }} >{decodedCrumb}</NavLink>
        {i < pathSegments.length - 1 ? ' / ' : ''}
      </>
    );
  });

  return (
      <Box sx={{ ...alignCenter, ...SmallText, ...White, padding: "0 1rem", gap: "0.3rem" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link to="/" style={{  ...White, display: "flex", alignItems: "center", gap: "0.5rem"}} >
                  <HomeRounded style={{ fontSize:"1rem" }}/>  Home
              </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}> / </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>{crumbs}</Box>
      </Box>
  );
};
