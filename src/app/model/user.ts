import {UserTypes} from '../util/user-types.enum';

export class User {
  constructor(public id: number | null,
              public firstName: string,
              public lastName: string,
              public nic: string,
              public userType: UserTypes){
  }
}
