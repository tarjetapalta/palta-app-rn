export type Roles = 'user' | 'business';

export type Currencies = 'peso_activa' | 'fiscal_credit' | 'peso';

export interface User {
  data: {
    _id: string;
    uid: string;
    name: string;
    lastname: string;
    email: string;
    role: Roles;
    token: string;
    dni: string;
    cuit: string;
    address: string;
    wallets: {
      amount: number;
      currency: Currencies;
      currencyLabel: string;
      fees:
        | []
        | {
            takenFrom: string;
            percent: number;
          }[];
    }[];
  };
  message: string;
}
