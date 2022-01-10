import { UserDto, LoanDto } from '../types'

export var users: UserDto[] = [
  {
    id: 1,
    fullname: 'Jhon Doe',
    balance: 1000,
  }
]

export var loans: LoanDto[] = [
  {
    id: 1,
    user_id: 1,
    total_amount: 250,
    paid_amount: 0,
    remaining_amount: 250,
    status: 'ACTIVE',
    paid_dues: 1,
    total_dues: 12,
  }
]