import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Author } from '../../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  #httpClient = inject(HttpClient);

  getAuthors = () => this.#httpClient.get<Author[]>(`${environment.apiUrl}/authors`);
}
