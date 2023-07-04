import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants.shared';
import { Experience } from '../experience.interface';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  public static readonly API_ENDPOINT = Constants.API_ENDPOINT + '/experiences';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllExperiences(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(ExperienceService.API_ENDPOINT);
  }

  public getExperienceBySlug(slug: string): Observable<Experience> {
    return this.httpClient.get<Experience>(ExperienceService.API_ENDPOINT + '/' + slug);
  }
}
