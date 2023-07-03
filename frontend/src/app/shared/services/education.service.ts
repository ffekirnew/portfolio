import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants.shared';
import { Observable } from 'rxjs';
import { Education } from '../education.interface';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  public static readonly API_ENDPOINT = Constants.API_ENDPOINT + '/educations';

  constructor(
    private httpService: HttpClient
  ) { }

  public getAllEducations(): Observable<Education[]> {
    return this.httpService.get<Education[]>(EducationService.API_ENDPOINT);
  }

  public getEducationBySlug(slug: string): Observable<Education> {
    return this.httpService.get<Education>(EducationService.API_ENDPOINT + '/' + slug);
  }
}
