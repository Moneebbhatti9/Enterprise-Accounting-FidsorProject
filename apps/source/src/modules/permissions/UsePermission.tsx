import React, { createContext, useContext, ReactNode } from 'react';

interface PermissionContextProps {
  userRole: string; // Assuming userRole is a string, you can adjust the type accordingly
}

const PermissionContext = createContext<PermissionContextProps | undefined>(
  undefined
);

interface PermissionProviderProps {
  children: ReactNode;
  userRole: string; // Adjust the type accordingly
}

export const PermissionProvider: React.FC<PermissionProviderProps> = ({
  children,
  userRole,
}) => {
  return (
    <PermissionContext.Provider value={{ userRole }}>
      {children}
    </PermissionContext.Provider>
  );
};

interface UsePermissionProps {
  permittedRole: string; // Adjust the type accordingly
}

export const usePermission = ({ permittedRole }: UsePermissionProps) => {
  const context = useContext(PermissionContext);

  if (!context) {
    throw new Error('usePermission must be used within a PermissionProvider');
  }

  const { userRole } = context;

  const hasPermission = () => {
    // Perform your role-based permission check
    return userRole === permittedRole;
  };

  return { hasPermission };
};
