export type MemberType = {
  id: number;
  title: string;
  image: string;
  name: string;
  email: string;
};

export type ActivityType = {
  id: number;
  title: string;
  defaultChecked: boolean;
};

export type ApplicationType = {
  id: number;
  title: string;
  defaultChecked: boolean;
};

export type CountryDataType = {
  member: MemberType[];
  notification: {
    activity: ActivityType[];
    application: ApplicationType[];
  };
  preferences: {
    payment: PaymentType[];
    payouts: PayoutsType[];
  };
};

export type PayoutsType = {
  id: number;
  title: string;
  description: string;
  defaultChecked: boolean;
};

export type PaymentType = {
  id: number;
  title: string;
  description: string;
  defaultChecked: boolean;
};

export type AccountDataType = {
  member: MemberType[];
  notification: {
    activity: ActivityType[];
    application: ApplicationType[];
  };
  preferences: {
    payment: PaymentType[];
    payouts: PayoutsType[];
  };
};
