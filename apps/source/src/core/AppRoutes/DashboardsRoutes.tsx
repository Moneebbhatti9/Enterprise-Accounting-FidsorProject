import React from 'react';
import { RoutePermittedRole, Permissions } from '@crema/constants/AppEnums';

import {
  AllAccount,
  ArchiveAccounts,
  Assets,
  Equity,
  Expenses,
  Income,
  Liability,
} from 'libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts';
import {
  FinancialStatements,
  Taxes,
  Payroll,
  Customers,
  Vendors,
  DetailedReporting,
} from 'libs/modules/src/lib/Reports';
import Customer from '../../modules/dashboards/Salespayment/Customers';
const AddEmployee = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Payroll/Employee/AddEmployee/index'
    )
);
const AddBusinessDetails = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Payroll/RunPayroll/PayrollSetup/PayrollScreens/AddBusinessDetails'
    )
);
const PayrollSchedule = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Payroll/RunPayroll/PayrollSetup/PayrollScreens/PayrollSchedule'
    )
);
const CompanySignatory = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Payroll/RunPayroll/PayrollSetup/PayrollScreens/CompanySignatory'
    )
);
const VendorTypes = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Admin/Settings/VendorTypes/VendorTypes'
    )
);
const CurrencyTypes = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Admin/Settings/Currency/Currency'
    )
);
const CountryConfiguration = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Admin/Configuration/Country/Country'
    )
);
const AdminNotifications = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Admin/Settings/Notifications/Notifications'
    )
);
const AdminMessages = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Admin/Settings/Messages/Messages'
    )
);
const SendStatement = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/SendStatement'
    )
);
const BalanceSheet = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/FinancialStatements/BalanceSheet'
    )
);
// const CreateInvoice = React.lazy(
//   () => import('../../../../../apps/source/src/modules/invoice/AddInvoice')
// );
const CreateInvoice = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Invoices/screens/CreateInvoice'
    )
);
const ProfitLoss = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/FinancialStatements/ProfitLoss'
    )
);
const CashFlow = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/FinancialStatements/CashFlow'
    )
);
const SalesTaxReport = React.lazy(
  () =>
    import('../../../../../libs/modules/src/lib/Reports/Taxes/SalesTaxReport')
);
const Form1099K = React.lazy(
  () => import('../../../../../libs/modules/src/lib/Reports/Taxes/Form-1099K')
);
const BenefitsDeductionReport = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/Payroll/BenefitsDeductionReport'
    )
);
const IncomeByCustomer = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/Customers/IncomeByCustomer'
    )
);
const AgedReceivables = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/Customers/AgedReceivables'
    )
);
const PurchasesByVendor = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/Vendors/PurchasesByVendor'
    )
);
const AgedPayables = React.lazy(
  () =>
    import('../../../../../libs/modules/src/lib/Reports/Vendors/AgedPayables')
);
const AccountBalances = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/DetailedReporting/AccountBalances'
    )
);
const TrialBalance = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/DetailedReporting/TrialBalance'
    )
);
const AccountTransaction = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Reports/DetailedReporting/AccountTransactions'
    )
);

const ViewEmployee = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Payroll/Employee/ViewEmployee/index'
    )
);

const EditEmployee = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Payroll/Employee/EditEmployee/index'
    )
);
const CustomerViewPage = React.lazy(
  () =>
    import('../../modules/dashboards/Salespayment/Estimates/CustomerViewPage')
);

const Launchpad = React.lazy(
  () => import('../../../../../libs/modules/src/lib/Launchpad')
);
const ProfessionalInvoicing = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Launchpad/screens/ProfessionalInvoicing'
    )
);
const AcceptPayment = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Launchpad/screens/AcceptPayment'
    )
);
const BetterBookKeeping = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Launchpad/screens/BetterBookKeeping'
    )
);
const AddJournelTransactions = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Accounts/transactions/AllTransactions/TranasactionsOptions/AddJournelTransactions'
    )
);
const UploadBankStatement = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Accounts/transactions/AllTransactions/TranasactionsOptions/UploadBankStatement'
    )
);
const ReliablePayroll = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const ProductServicesPurchases = React.lazy(
  () => import('../../modules/dashboards/Purchases/Productservices')
);
const Dashboard = React.lazy(
  () => import('../../modules/dashboards/Dashboard/Dashboard')
);

const AddCustomer = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/AddCustomer'
    )
);
const EditCustomer = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/EditCustomer'
    )
);
const ViewCustomer = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/ViewCustomer'
    )
);
const ManageAccountants = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/addAnAccountant/ManageAccountants/index'
    )
);

// const Customerstatements = React.lazy(
//   () =>
//     import(
//       //'../../modules/dashboards/Salespayment/Customerstatements/invoice/Listing'
//       '../../modules/errorPages/ComingSoon'
//     )
// );
const Estimates = React.lazy(
  () => import('../../modules/dashboards/Salespayment/Estimates/Estimates')
);

const CreateEstimatePage = React.lazy(
  () =>
    import('../../modules/dashboards/Salespayment/Estimates/CreateEstimatePage')
);

const CreateBillPage = React.lazy(
  () => import('../../modules/dashboards/Purchases/Bills/CreateBillPage')
);

const ViewEstimate = React.lazy(
  () => import('../../modules/dashboards/Salespayment/Estimates/ViewEstimates')
);
const EditEstimate = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Estimates/EditEstimate'
    )
);
const Invoices = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Invoices'
    )
);
const ViewInvoices = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Invoices/screens/ViewInvoice'
    )
);
const EditInvoices = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Invoices/screens/EditInvoice'
    )
);
const Paymentsetup = React.lazy(
  () =>
    import('../../modules/dashboards/Salespayment/Paymentsetup/invoice/Listing')
);
const Productservices = React.lazy(
  () => import('../../modules/dashboards/Salespayment/Productservices')
);
const AddProductServices = React.lazy(
  () => import('../../modules/dashboards/Salespayment/Productservices')
);

const Productservicespurchases = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/productservicessales/AddProductServices'
    )
);

const Bills = React.lazy(
  () => import('../../modules/dashboards/Purchases/Bills/Bills')
);
const ViewBills = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/Bills/ViewBills'
    )
);
const AddBills = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/Bills/AddBills'
    )
);
const EditBills = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/Bills/EditBills'
    )
);
const Productservices1 = React.lazy(
  () => import('../../modules/dashboards/Salespayment/Productservices')
);
const ViewProductservicesSales = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/ProductServices/ViewProductServices'
    )
);
const EditroductservicesSales = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/ProductServices/EditProductServices'
    )
);
const AddProductservicesSales = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/ProductServices/AddProductServices'
    )
);
const AddProductservicesPurchases = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/ProductServices/AddProductServices'
    )
);
const ViewProductservicesPurchases = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/ProductServices/ViewProducts'
    )
);
const EditProductservicesPurchases = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/ProductServices/EditProductServices'
    )
);
const Vendor = React.lazy(
  () => import('../../modules/dashboards/Purchases/Vendors')
);
const AddVendor = React.lazy(
  // () => import('../../modules/dashboards/Purchases/Vendors/screens/AddVendor')
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/Vendors/AddVendor/screens/AddVendor'
    )
);
const ViewVendor = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/Vendors/ViewVendors'
    )
);
const EditVendor = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/Vendors/EditVendor'
    )
);
const Transactions = React.lazy(
  () => import('../../modules/dashboards/Accounting/Tranasactions/index')
);

const EditTransactions = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Accounts/transactions/EditTranasaction'
    )
);
const HireAddAccountant = React.lazy(
  () => import('../../modules/dashboards/Accounting/HireAddAccountant/index')
);
const Chartofaccounts = React.lazy(
  () => import('../../modules/dashboards/Accounting/ChartOfAccounts/index')
);
const ViewAccount = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts/AllAccount/ViewAccount'
    )
);
const EditAccount = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts/AllAccount/EditAccount'
    )
);
const HireABookkeeper = React.lazy(
  () => import('../../modules/dashboards/Accounting/HireABookkeeper/index')
);
const Employees = React.lazy(
  () => import('../../modules/dashboards/Payroll/Employees')
);
const PayrollTransactions = React.lazy(
  () => import('../../modules/dashboards/Payroll/PayrollTransactions')
);
const RunPayroll = React.lazy(
  () => import('../../modules/dashboards/Payroll/RunPayroll')
);
const PayrollReports = React.lazy(
  () => import('../../modules/dashboards/Payroll/Reports')
);
const ChatApp = React.lazy(() => import('../../modules/apps/Chat'));
// const Taxes = React.lazy(
//   () => import('../../modules/dashboards/Payroll/Taxes')
// );
const Timesheets = React.lazy(
  () => import('../../../../../libs/modules/src/lib/Payroll/Timesheet/index')
);
const Translations = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const Billing = React.lazy(() => import('../../modules/errorPages/ComingSoon'));
const Language = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const Notifications = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const Businesses = React.lazy(
  () =>
    import('../../../../../libs/modules/src/lib/dashboards/Setting/Businesses')
);
const AddBusinesses = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/dashboards/Setting/Businesses/AddBusiness/AddBusiness'
    )
);
const EditBusinesses = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/dashboards/Setting/Businesses/EditBusiness/EditBusiness'
    )
);
const ViewBusinesses = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/dashboards/Setting/Businesses/ViewBusiness/ViewBusiness'
    )
);
const AddSimpleBusinesses = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/dashboards/Setting/Businesses/AddBusiness/AddBusinessSimple'
    )
);
// const FAQ = React.lazy(
//   () => import('../../../../source-toolkit/src/modules/extraPages/FAQ')
// );
// const ContactUs = React.lazy(
//   () => import('../../../../source-toolkit/src/modules/extraPages/ContactUs')
// );
const InvoiceSettings = React.lazy(
  () => import('../../modules/invoice/Settings')
);
const Users = React.lazy(
  () =>
    import(
      //'../../modules/settings/users'
      '../../modules/errorPages/ComingSoon'
    )
);
const SMTPConfiguration = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const TimeZone = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const ImportAccount = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts/AllAccount/ImportAccount/index'
    )
);
const ImportCustomer = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Customer/ImportCustomer'
    )
);
const SidebarUser = React.lazy(
  () => import('../../../../../libs/modules/src/lib/Accounting/Users/index')
);
const AddUser = React.lazy(
  () =>
    import('../../../../../libs/modules/src/lib/Accounting/Users/AddUser/index')
);
const AssignPermissions = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Users/AssignPermissions/AssignPermissions'
    )
);
const Roles = React.lazy(
  () =>
    import('../../../../../libs/modules/src/lib/Accounting/Users/Roles/Roles')
);
const ArchiveAccount = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts/ArchiveAccounts'
    )
);
const Customerstatements = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/CustomerStatements/index'
    )
);
const ComingSoon = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const Configuration = React.lazy(
  () => import('../../modules/dashboards/Configuration/index')
);
const City = React.lazy(
  () =>
    import(
      //'../../modules/dashboards/Configuration/City/Admin/Listing'
      '../../modules/errorPages/ComingSoon'
    )
);
const Country = React.lazy(
  () =>
    import(
      //'../../modules/dashboards/Configuration/Country'
      '../../modules/errorPages/ComingSoon'
    )
);
const Currency = React.lazy(
  () => import('../../modules/errorPages/ComingSoon')
);
const Settings = React.lazy(
  () => import('../../modules/dashboards/Setting/index')
);
const Reports = React.lazy(() => import('../../modules/dashboards/Reports'));
const HealthCare = React.lazy(
  () => import('../../modules/dashboards/HealthCare')
);
const ECommerce = React.lazy(
  () => import('../../modules/dashboards/ECommerce')
);
const CRM = React.lazy(() => import('../../modules/dashboards/CRM'));
const Crypto = React.lazy(() => import('../../modules/dashboards/Crypto'));
const Analytics = React.lazy(
  () => import('../../modules/dashboards/Analytics')
);
const Academy = React.lazy(() => import('../../modules/dashboards/Academy'));
const Metrics = React.lazy(() => import('../../modules/dashboards/Metrics'));
const Widgets = React.lazy(() => import('../../modules/dashboards/Widgets'));
const ImportCSV = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Purchases/Vendors/ImportVendor'
    )
);
// const GoogleContacts = React.lazy(
//   () =>
//     import(
//       '../../../../../libs/modules/src/lib/vendors/ImportOptions/ImportGoogle'
//     )
// );
const Recurringinvoices = React.lazy(
  () =>
    import(
      //'../../../../../libs/modules/src/lib/vendors/ImportOptions/ImportGoogle'
      '../../modules/errorPages/ComingSoon'
    )
);
const PricingDetail = React.lazy(
  () => import('../../modules/extraPages/Pricing/Detail')
);
const BankingDetail = React.lazy(
  () => import('../../modules/extraPages/BankingInformation/BankDetails')
);
const AdminSettings = React.lazy(
  () => import('../../modules/dashboards/Admin/Setting/index')
);
const AdminConfigurations = React.lazy(
  () => import('../../modules/dashboards/Admin/Configurations/index')
);
const DateTypes = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Admin/Settings/Date/Date'
    )
);
const CustomerStatementDetails = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/CustomerStatements/ViewPage'
    )
);

export const dashBoardConfigs = [
  {
    permittedRole: [RoutePermittedRole.User],
    path: '/comingsoon',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/customerstatements/details',
    element: <CustomerStatementDetails />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/launchpad',
    element: <Launchpad />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/setup/employees/add',
    element: <AddEmployee />,
  },
  // {
  //   permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
  //   path: '/payroll/setup/employees/new',
  //   element: <AddEmployee />,
  // },
  {
    path: '/hr/setup/business-details',
    element: <AddBusinessDetails />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/setup/payroll-frequency',
    element: <PayrollSchedule />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/setup/company-signatory',
    element: <CompanySignatory />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/employees/view/:id',
    element: <ViewEmployee />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/employees/edit/:id',
    element: <EditEmployee />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: 'salespayment/customer/edit/:id',
    element: <EditCustomer />,
  },
  // {
  //   permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
  //   path: 'salespayment/customer/edit',
  //   element: <EditCustomer />,
  // },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: 'salespayment/customer/view/:id',
    element: <ViewCustomer />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/productservices/view/:id',
    element: <ViewProductservicesSales />,
  },
  // {
  //   permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
  //   path: '/accounting/chartofaccounts/view/:id',
  //   element: <ViewAccount />,
  // },
  // {
  //   permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
  //   path: '/accounting/chartofaccounts/edit/:id',
  //   element: <EditAccount />,
  // },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/productservices/edit/:id',
    element: <EditroductservicesSales />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/productservices/add',
    element: <AddProductservicesSales />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/productservices/view/:id',
    element: <ViewProductservicesPurchases />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/productservices/edit/:id',
    element: <EditProductservicesPurchases />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/productservices/add',
    element: <AddProductservicesPurchases />,
  },

  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/bills/view/:id',
    element: <ViewBills />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/bills/edit/:id',
    element: <EditBills />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/vendors/view/:id',
    element: <ViewVendor />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/vendors/edit/:id',
    element: <EditVendor />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/launchpad/professional-invoicing',
    element: <ProfessionalInvoicing />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/launchpad/professional-invoicing/acceptpayment',
    element: <AcceptPayment />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/launchpad/better-bookkeeping',
    element: <BetterBookKeeping />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/launchpad/reliable-payroll',
    element: <ReliablePayroll />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/archiveaccount',
    element: <ArchiveAccount />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/addaccountant/manageaccountants',
    element: <ManageAccountants />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/importaccount',
    element: <ImportAccount />,
  },

  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/customer/importcustomer',
    element: <ImportCustomer />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/quotations',
    element: <Estimates />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/sendstatement',
    element: <SendStatement />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/quotations/createquotation',
    element: <CreateEstimatePage />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/quotations/customerview',
    element: <CustomerViewPage />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/quotations/view/:id',
    element: <ViewEstimate />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/quotations/edit/:id',
    element: <EditEstimate />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/transactions',
    element: <Transactions />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/transactions/addjourneltransaction',
    element: <AddJournelTransactions />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/transactions/edit',
    element: <EditTransactions />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/transactions/uploadbankstatement',
    element: <UploadBankStatement />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/invoices',
    element: <Invoices />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/invoices/view/:id',
    element: <ViewInvoices />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/invoices/edit/:id',
    element: <EditInvoices />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/invoices/createinvoice',
    element: <CreateInvoice />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/paymentsetup',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/recurringinvoices',
    element: <Recurringinvoices />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/invoicesettings',
    element: <InvoiceSettings />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/customerstatements',
    element: <Customerstatements />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/customer',
    element: <Customer />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/customer/addcustomer',
    element: <AddCustomer />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/bills/add',
    element: <AddBills />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/productservices',
    element: <Productservices1 />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/productservices/addproductservices',
    element: <AddProductServices />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/salespayment/productservices/addproductservices',
    element: <AddProductServices />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/productservices',
    element: <ProductServicesPurchases />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/vendors',
    element: <Vendor />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/purchaseorder',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/payment',
    element: <ComingSoon />,
  },
  {
    path: '/purchases/vendors/add',
    element: <AddVendor />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/vendors/csv',
    element: <ImportCSV />,
  },
  // {
  //   permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
  //   path: '/purchases/vendors/googlecontacts',
  //   element: <GoogleContacts />,
  // },

  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/bills',
    element: <Bills />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/purchases/bills/createbill',
    element: <CreateBillPage />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/configuration',
    element: (
      <Configuration>
        <City />
      </Configuration>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/configuration/city',
    element: (
      <Configuration>
        <City />
      </Configuration>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/configuration/country',
    element: (
      <Configuration>
        <Country />
      </Configuration>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/configuration/currency',
    element: (
      <Configuration>
        <Currency />
      </Configuration>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/paymentcashvoucher',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/pettycashvoucher',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/trialbalance',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/transactions',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/reconciliation',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts',
    element: (
      <Chartofaccounts>
        <AllAccount />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/all-account',
    element: (
      <Chartofaccounts>
        <AllAccount />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/assets',
    element: (
      <Chartofaccounts>
        <Assets />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/liabilities',
    element: (
      <Chartofaccounts>
        <Liability />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/income',
    element: (
      <Chartofaccounts>
        <Income />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/expenses',
    element: (
      <Chartofaccounts>
        <Expenses />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/equity',
    element: (
      <Chartofaccounts>
        <Equity />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/chartofaccounts/archive-accounts',
    element: (
      <Chartofaccounts>
        <ArchiveAccounts />
      </Chartofaccounts>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/addaccountant',
    element: <HireAddAccountant />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/accounting/hireabookkeeper',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings',
    element: (
      <Settings>
        <Users />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/users',
    element: (
      <Settings>
        <Users />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/translations',
    element: (
      <Settings>
        <Translations />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/smtpconfiguration',
    element: (
      <Settings>
        <SMTPConfiguration />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/languagesettings',
    element: (
      <Settings>
        <Language />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/timezonesettings',
    element: (
      <Settings>
        <TimeZone />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/billing',
    element: (
      <Settings>
        <Billing />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/notifications',
    element: (
      <Settings>
        <Notifications />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/businesses',
    element: (
      <Settings>
        <Businesses />
      </Settings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/businesses/add',
    element: <AddBusinesses />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/businesses/view/:id',
    element: <ViewBusinesses />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/settings/businesses/edit/:id',
    element: <EditBusinesses />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/businesses/add',
    element: <AddSimpleBusinesses />,
  },
  // {
  //   permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
  //   path: '/faqs',
  //   element: <FAQ />,
  // },
  // {
  //   permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
  //   path: '/contact-us',
  //   element: <ContactUs />,
  // },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/subscribe',
    element: <PricingDetail />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/bankingInformation',
    element: <BankingDetail />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports',
    element: (
      <Reports>
        <FinancialStatements />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/customer-statements',
    element: (
      <Reports>
        <Customerstatements />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/financial-statements',
    element: (
      <Reports>
        <FinancialStatements />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/financial-statements/profit-and-loss',
    element: <ProfitLoss />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/financial-statements/balance-sheet',
    element: <BalanceSheet />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/financial-statements/cash-flow',
    element: <CashFlow />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/taxes',
    element: (
      <Reports>
        <Taxes />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/taxes/sales-tax-report',
    element: <SalesTaxReport />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/taxes/form-1099k',
    element: <Form1099K />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/payroll',
    element: (
      <Reports>
        <Payroll />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/payroll/wage-and-tax-reports',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/payroll/payroll-benefits-and-deduction-report',
    element: <BenefitsDeductionReport />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/customers',
    element: (
      <Reports>
        <Customers />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/customers/income-by-customer',
    element: <IncomeByCustomer />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/customers/aged-receivables',
    element: <AgedReceivables />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/vendors',
    element: (
      <Reports>
        <Vendors />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/vendors/purchases-by-vendor',
    element: <PurchasesByVendor />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/vendors/aged-payables',
    element: <AgedPayables />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/detailed-reporting',
    element: (
      <Reports>
        <DetailedReporting />
      </Reports>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/detailed-reporting/account-balances',
    element: <AccountBalances />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/detailed-reporting/trial-balance',
    element: <TrialBalance />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/reports/detailed-reporting/account-transactions',
    element: <AccountTransaction />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/runpayroll',
    element: <RunPayroll />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/leaves',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/reports',
    element: <PayrollReports />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/calendar',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/employees',
    element: <Employees />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/timesheets',
    element: <Timesheets />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/payrolltransactions',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/hr/taxes',
    element: <ComingSoon />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/users/user',
    element: <SidebarUser />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/users/user/add',
    element: <AddUser />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/user/assignpermission',
    element: <AssignPermissions />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/user/roles',
    element: <Roles />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/dashboards/crypto',
    element: <Crypto />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/academy',
    element: <Academy />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/analytics',
    element: <Analytics />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/e-commerce',
    element: <ECommerce />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/crm',
    element: <CRM />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/health-care',
    element: <HealthCare />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/metrics',
    element: <Metrics />,
  },
  {
    permittedRole: RoutePermittedRole.User,
    path: '/dashboards/widgets',
    element: <Widgets />,
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/settings',
    element: (
      <AdminSettings>
        {/* <AdminSMTPConfiguration /> */}
        <ComingSoon />
      </AdminSettings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/settings/smtp-configurations',
    element: (
      <AdminSettings>
        {/* <AdminSMTPConfiguration /> */}
        <ComingSoon />
      </AdminSettings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/settings/vendor-types',
    element: (
      <AdminSettings>
        {/* <AdminSMTPConfiguration /> */}
        <VendorTypes />
      </AdminSettings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/settings/currency-types',
    element: (
      <AdminSettings>
        <CurrencyTypes />
      </AdminSettings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/settings/date-types',
    element: (
      <AdminSettings>
        <DateTypes />
      </AdminSettings>
    ),
  },

  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/settings/notifications',
    element: (
      <AdminSettings>
        <AdminNotifications />
      </AdminSettings>
    ),
  },

  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/settings/messages',
    element: (
      <AdminSettings>
        <AdminMessages />
      </AdminSettings>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/configurations',
    element: (
      <AdminConfigurations>
        {/* <AdminCountry /> */}
        <ComingSoon />
      </AdminConfigurations>
    ),
  },
  {
    permittedRole: [RoutePermittedRole.User, RoutePermittedRole.Admin],
    path: '/admin/configurations/country',
    element: (
      <AdminConfigurations>
        {/* <AdminCountry /> */}
        <CountryConfiguration />
      </AdminConfigurations>
    ),
  },
];
