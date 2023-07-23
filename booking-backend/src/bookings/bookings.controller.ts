import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {

    constructor(private bookingsService: BookingsService) { }

    @Post()
    async create(@Body() createBookingDto: CreateBookingDto) {
        const booking = await this.bookingsService.create(createBookingDto);
        if (!booking) {
            return 'error in creating todo'
        }
        return 'todo created successfully'
    }
}
