import React, { useEffect, useState } from 'react';
import { useUrlSearchParams } from 'use-url-search-params';
import AppContentView from '@crema/components/AppContentView';
import generateRoutes from '@crema/helpers/RouteGenerator';
import { Layouts } from '@crema/components/AppLayout';
import { useAuthUser } from '@crema/hooks/AuthHooks';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '@crema/context/LayoutContextProvider';
import { useSidebarActionsContext } from '@crema/context/SidebarContextProvider';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../AppRoutes';
import { useRoutes } from 'react-router-dom';
import routesConfig from '../AppRoutes/routeconfig';
import { getAllBusinesses } from 'libs/services/BusinessService/BusinessService';
const AppLayout = () => {
  const { navStyle } = useLayoutContext();
  const { user, isAuthenticated } = useAuthUser();
  const { updateNavStyle } = useLayoutActionsContext();
  const { updateMenuStyle, setSidebarBgImage } = useSidebarActionsContext();
  const AppLayout = Layouts[navStyle];
  const [params] = useUrlSearchParams();
  const generatedRoutes = generateRoutes({
    isAuthenticated: isAuthenticated,
    userRole: user?.role,
    unAuthorizedStructure,
    authorizedStructure,
    anonymousStructure,
  });
  const routes = useRoutes(generatedRoutes);
  const [haveBusiness, setHaveBusiness] = useState(false);

  const fetchBusiness = async (reloadCount = 3) => {
    try {
      const data = await getAllBusinesses();
      if (data.length > 0) {
        setHaveBusiness(true);
      } else {
        console.log('I am empty');
      }
      console.log(data);
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  };

  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout as string);
    if (params.menuStyle) updateMenuStyle(params.menuStyle as string);
    if (params.sidebarImage) setSidebarBgImage(true);
    if (isAuthenticated) {
      fetchBusiness();
    }
  }, [
    params,
    setSidebarBgImage,
    updateNavStyle,
    updateMenuStyle,
    isAuthenticated,
  ]);

  return (
    <>
      {isAuthenticated && haveBusiness ? (
        <AppLayout routes={routes} routesConfig={routesConfig} />
      ) : (
        <AppContentView routes={routes} />
      )}
    </>
  );
};

export default AppLayout;
