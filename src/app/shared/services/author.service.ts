import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthorDTO } from '../../dtos/author.dto';
import { Author } from '../../models/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  #httpClient = inject(HttpClient);

  getAuthors = (): Observable<Author[]> => this.#httpClient.get<AuthorDTO[]>(`${environment.apiUrl}/authors`);
}
