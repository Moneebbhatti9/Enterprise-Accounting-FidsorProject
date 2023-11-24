import { styled } from '@mui/system';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';
import Tabs from '@mui/base/Tabs';

export const ParentTab = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTab = styled(Tab)`
  color: #000;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  height: 20px;
  padding: 10px 12px;
  margin: 6px 6px;
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  line-height: 1px;

  &:hover {
    background-color: #ecf0f3;
  }

  &:focus {
    color: #ecf0f3;
    outline: 3px solid #ecf0f3;
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: #000;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: #fff;
  border-radius: 7px;
`;

export const StyledTabsList = styled(TabsList)`
  width: 200px;
  background-color: #ECF0F3;
  border-radius: 5px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: center;
  align-content: space-between; 
  box-shadow: 0px 4px 30px  #EEEEEE;
  margin-top: 15px;
  };
  `;
