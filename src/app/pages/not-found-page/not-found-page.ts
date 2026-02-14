import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './not-found-page.html',
  styleUrls: ['./not-found-page.css'],
})
export class NotFoundPage {}
