import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  create(createTravelDto: CreateTravelDto) {
    return 'This action adds a new travel';
  }
private trips = [{id: 1, name: 'to china',price:9000},{id: 2, name: 'to Morocco',price:4000}];
  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    const trip = this.trips.find(t => t.id === id);
    return trip || `Travel with ID ${id} not found`;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
