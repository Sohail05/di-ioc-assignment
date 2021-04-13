import 'dotenv/config'

import { Container } from './container';
const container = new Container();
/*
  REMEMBER: Controller -> Service -> Repository
  make sure to export the instance of the container here.
*/

// Don't touch the repository!
export class UserRepository {
  public getUsers() {
    return []
  }
}

export class UserService {
  constructor(private _userRepository: UserRepository = container.get<UserRepository>(UserRepository.name)) { }

  getUsers() {
    return this._userRepository.getUsers();
  }
}
export class UserController {
  constructor(private _userService: UserService = container.get<UserService>(UserService.name)) { }

  index() {
    return this._userService.getUsers();
  }

}


container.bind(UserRepository.name).to(UserRepository)
container.bind(UserService.name).to(UserService)