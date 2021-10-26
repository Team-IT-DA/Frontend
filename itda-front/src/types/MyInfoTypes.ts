export interface IUserInfo {
    name: string;
    telephone: string; //number로 받으면 맨 앞의 0이 8진수 리터럴로 인식됨. string => number 변환할 것.
    email: string;
    password: string;
  }

 export interface IUserInputDate {
    name: string;
    telephone: string;
    email: string;
    password: string;
    newPassword: string;
    newPasswordConfirm: string;
  }
