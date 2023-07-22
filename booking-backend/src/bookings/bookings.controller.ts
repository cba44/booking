import { Body, Controller, Post } from '@nestjs/common';
import { CreateBookingDto } from '../dto/create-booking.dto';

@Controller('bookings')
export class BookingsController {
    @Post()
    create(@Body() createCatDto: CreateBookingDto) {
        console.log(createCatDto.title)
        return 'This action adds a new event';
    }
}
