export interface IValidation {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
  telephone?: number | string;
  authCode?: string;
}

export interface ISignUp {
  name: string;
  email: string;
  password: string;
  authCode?: string;
  telephone: number;
}
