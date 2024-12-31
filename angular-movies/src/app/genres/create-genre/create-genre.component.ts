import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { Router, RouterLink } from '@angular/router';
import { firstLetterShouldBeUppercase } from '../../shared/functions/validations';
import { GenreCreationDTO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  standalone: true,
  imports: [MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, GenresFormComponent],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})

export class CreateGenreComponent {

  router = inject(Router);
  genresService = inject(GenresService)

  saveChanges(genre: GenreCreationDTO) {
  // save changes
    this.genresService.create(genre).subscribe(() => {
      this.router.navigate(['/genres']);
    })
  }


}
