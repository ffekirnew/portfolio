import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants.shared';
import { Project } from '../project.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public static readonly API_ENDPOINT = Constants.API_ENDPOINT + '/projects';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(ProjectService.API_ENDPOINT);
  }

  public getProjectBySlug(slug: string): Observable<Project> {
    return this.httpClient.get<Project>(ProjectService.API_ENDPOINT + '/' + slug);
  }
}
