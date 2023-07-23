import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bookings' })
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    name: 'employee_no',
  })
  employeeNo: number;

  @Column({
    name: 'start_time',
  })
  start: string;

  @Column({
    name: 'end_time'
  })
  end: string;
}