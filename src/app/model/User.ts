export class User {
  constructor(public id: number | null,
              public firstName: string,
              public lastName: string,
              public nic: string,
              // public userType: UserType,
              public userType: string,
              public mobile: string,
              public username: string,
              public password: string
  ) {
  }
}
