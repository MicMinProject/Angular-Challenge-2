import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  httpClient = inject(HttpClient);
  categoriesColors: string[] = ['btn py-1 btn-primary mx-3', 'btn py-1 btn-secondary', 'btn py-1 btn-success mx-3', 'btn py-1 btn-danger'];
  categories$: Observable<string[]> = this.httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
  products$: Observable<any[]> = this.httpClient.get<any[]>('https://fakestoreapi.com/products')
}
