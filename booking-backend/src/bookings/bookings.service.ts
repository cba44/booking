import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingDto } from './dto/booking.dto';
import { Booking } from './booking.entity';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
    ) { }

    async findAll(): Promise<Booking[]> {
        return this.bookingRepository.find();
    }

    async create(bookingDto: BookingDto): Promise<Booking> {
        const createdBooking = this.bookingRepository.create(bookingDto);
        return await this.bookingRepository.save(createdBooking);
    }

    async update(id: number, bookingDto: BookingDto): Promise<Booking> {
        const foundBooking = await this.bookingRepository.findOneBy({ id })

        if (!foundBooking) {
            throw new HttpException(
                `Booking with id ${id} not found.`,
                HttpStatus.NOT_FOUND,
            );
        }

        foundBooking.title = bookingDto.title;
        foundBooking.employeeNo = bookingDto.employeeNo;
        foundBooking.start = bookingDto.start;
        foundBooking.end = bookingDto.end;
        return await this.bookingRepository.save(foundBooking);
    }

    async remove(id: number): Promise<void> {
        await this.bookingRepository.delete(id);
    }

    async delete(id: number): Promise<number> {
        let foundBooking = await this.bookingRepository.findOneBy({ id });

        if (!foundBooking) {
            throw new HttpException(
                `Event with id ${id} not found.`,
                HttpStatus.NOT_FOUND,
            );
        }

        await this.bookingRepository.delete(id);
        return foundBooking.id;
    }

    async findForEmployee(empNo: number): Promise<Booking[]> {
        return this.bookingRepository.findBy({employeeNo: empNo})
    }
}