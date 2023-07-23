import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './booking.entity';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
    ) { }

    findAll(): Promise<Booking[]> {
        return this.bookingRepository.find();
    }

    async create(bookingDto: CreateBookingDto): Promise<Booking> {
        const createdBooking = this.bookingRepository.create(bookingDto);
        return await this.bookingRepository.save(createdBooking);
    }

    // findOne(id: number): Promise<Booking | null> {
    //     return this.usersRepository.findOneBy({ id });
    // }

    // async remove(id: number): Promise<void> {
    //     await this.usersRepository.delete(id);
    // }
}