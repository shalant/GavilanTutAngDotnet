import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';

@Component({
  selector: 'app-theaters-form',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './theaters-form.component.html',
  styleUrl: './theaters-form.component.css'
})

export class TheatersFormComponent implements OnInit {

  @Input()
  model?: TheaterDTO

  @Output()
  postForm = new EventEmitter<TheaterCreationDTO>()

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [Validators.required]}]
  })

  ngOnInit(): void {
    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if(field.hasError('required')) {
      return "the name field is required";
    }

    return "";
  }

  saveChanges() {
    const theater = this.form.value as TheaterCreationDTO;

    this.postForm.emit(theater);
  }
}
