import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MoviesService } from '../movies.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthorizedComponent } from "../../security/authorized/authorized.component";

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    GenericListComponent, MatButtonModule,
    MatIconModule, RouterLink, SweetAlert2Module,
    AuthorizedComponent
],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})

export class MoviesListComponent {

  @Input({required: true})
  movies!: any[];    

  @Output()
  deleted = new EventEmitter<void>();

  moviesService = inject(MoviesService);

  delete(id: number) {
    this.moviesService.delete(id).subscribe(() => {
      this.deleted.emit();
    })
  }



}
