import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ActorsFormComponent } from "../actors-form/actors-form.component";
import { ActorCreationDTO } from '../actors.models';

@Component({
  selector: 'app-create-actor',
  imports: [MatIconModule, MatButtonModule, RouterLink, ActorsFormComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})

export class CreateActorComponent {

  saveChanges(actor: ActorCreationDTO) {
    console.log('creating the actor', actor);
  }
}
