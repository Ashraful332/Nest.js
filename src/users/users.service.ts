import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return ['Ashraful', 'Hasan', 'Safin', 'Pathan'];
  }
}
