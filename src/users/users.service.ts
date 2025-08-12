import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      {
        name: 'Ashraful',
        aeg: 18,
      },
      {
        name: 'Hasan',
        aeg: 18,
      },
      {
        name: 'Safin',
        aeg: 18,
      },
    ];
  }
}
