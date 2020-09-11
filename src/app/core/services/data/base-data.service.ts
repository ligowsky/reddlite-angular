import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseDataService {
  protected backendUrl = environment.backendUrl;
  protected url: string;

  constructor() {}
}
