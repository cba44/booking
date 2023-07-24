import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Booking } from './booking.entity';
import { BookingsService } from './bookings.service';
import { BookingDto } from './dto/booking.dto';

@Controller('bookings')
export class BookingsController {

    constructor(private bookingsService: BookingsService) { }

    @Get()
    async GetAll(): Promise<Booking[]> {
        return await this.bookingsService.findAll()
    }

    @Post()
    async create(@Body() bookingDto: BookingDto) {
        const booking = await this.bookingsService.create(bookingDto);
        if (!booking) {
            return 'error in creating event'
        }
        return 'event created successfully'
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() bookingDto: BookingDto) {
        await this.bookingsService.update(id, bookingDto)
        return "event updated";
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<number> {
        return this.bookingsService.delete(id);
    }

    @Get('mybookings/:empNo')
    async GetForEmployee(@Param('empNo') empNo: number): Promise<Booking[]> {
        return await this.bookingsService.findForEmployee(empNo);
    }

}
