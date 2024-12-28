import { Component, Input, numberAttribute } from '@angular/core';
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';
import { TheatersFormComponent } from "../theaters-form/theaters-form.component";

@Component({
  selector: 'app-edit-theater',
  imports: [TheatersFormComponent],
  templateUrl: './edit-theater.component.html',
  styleUrl: './edit-theater.component.css'
})

export class EditTheaterComponent {

  @Input({transform: numberAttribute})
    id!: number;

  model: TheaterDTO = {name: 'Acropolis', id: 1, latitude: 18.46968, longitude: -69.9394};

  saveChanges(theater: TheaterCreationDTO) {
    console.log('editing theater', theater);
  }

}
