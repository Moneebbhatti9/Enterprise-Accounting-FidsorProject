// Create a context
import { getAllVendors } from 'libs/services/VendorService/VendorService';
import React, { createContext, useContext, useState } from 'react';
type VendorContextType = {
    accountData: any; 
    fetchAccounts: () => Promise<void>;
  };
  
  const VendorContext = createContext<VendorContextType>({
    accountData: [],
    fetchAccounts: async () => {}, 
  });

export const useVendorContext = () => useContext(VendorContext);

interface VendorProviderProps {
    children: React.ReactNode;
  }
  
  export const VendorProvider: React.FC<VendorProviderProps> = ({ children }) => {
    const [accountData, setAccountData] = useState<any[]>([]); 
    const fetchAccounts = async () => {
      try {
        const data = await getAllVendors();
        console.log(data);
        const reversedData = data.reverse();
        setAccountData(reversedData);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
  
    return (
      <VendorContext.Provider value={{ accountData, fetchAccounts }}>
        {children}
      </VendorContext.Provider>
    );
  };