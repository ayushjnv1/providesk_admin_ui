import ROUTE from 'routes/constants';
import { ROLES } from 'routes/roleConstants';

import DashboardIcon from '@mui/icons-material/Dashboard';
import DomainIcon from '@mui/icons-material/Domain';
import CategoryIcon from '@mui/icons-material/Category';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GroupIcon from '@mui/icons-material/Group';

export const getSidebarConfig = (role: string) => {
  const employeeAccessSidebar = [
    {
      label: 'Dashboard',
      icon: <DashboardIcon fontSize='large' />,
      path: ROUTE.DASHBOARD,
    },
    {
      label: 'Ticket',
      icon: <ConfirmationNumberIcon fontSize='large' />,
      path: ROUTE.TICKET,
    },
  ];

  const adminAccessSidebar = [
    ...employeeAccessSidebar,
    {
      label: 'Department',
      icon: <DomainIcon fontSize='large' />,
      path: ROUTE.DEPARTMENT,
    },
    {
      label: 'Categories',
      icon: <CategoryIcon fontSize='large' />,
      path: ROUTE.CATEGORY,
    },
    {
      label: 'Employees',
      icon: <GroupIcon fontSize='large' />,
      path: ROUTE.USERS,
    },
  ];

  const superAdminAccessSidebar = [
    ...employeeAccessSidebar,
    {
      label: 'Organization',
      icon: <ApartmentIcon fontSize='large' />,
      path: ROUTE.ORGANIZATION,
    },
  ];

  const departmentHeadAccessSidebar = [
    ...employeeAccessSidebar,
    {
      label: 'Employees',
      icon: <GroupIcon fontSize='large' />,
      path: ROUTE.USERS,
    },
  ];

  switch (role) {
    case ROLES.SUPER_ADMIN:
      return superAdminAccessSidebar;
    case ROLES.ADMIN:
      return adminAccessSidebar;
    case ROLES.DEPARTMENT_HEAD:
      return departmentHeadAccessSidebar;
    case ROLES.EMPLOYEE:
      return employeeAccessSidebar;
    default:
      return [];
  }
};
