export interface LoanDto {
  id: number;
  user_id: number;
  total_amount: number;
  paid_amount: number;
  remaining_amount: number;
  status: 'ACTIVE' | 'FINISHED' | 'DEFAULTER';
  paid_dues: number;
  total_dues: number;
}