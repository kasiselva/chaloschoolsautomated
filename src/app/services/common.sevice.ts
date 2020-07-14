import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {
   constructor(private http: HttpClient) { }
   private headers = new HttpHeaders({ 'Content-Type': 'application/json'});
   fielmasterUrl = 'http://localhost:3000/fieldmaster';
   controldataUrl = 'http://localhost:3000/controlsdata';
   public getFieldMasterList(): Observable<any> {
     return this.http.get(this.fielmasterUrl);
   }

   public getControlsDataList(): Observable<any> {
    return this.http.get(this.controldataUrl);
  }

  public addFieldMaster(data) {
    return this.http.post(this.fielmasterUrl,data);
  }
  public updateFieldMaster(data) {
    const url = `${this.fielmasterUrl}/${data.id}`;
      return this.http.put(url,JSON.stringify(data), {headers: this.headers})
  }
  public deleteFieldMaster(id) {
    const url = `${this.fielmasterUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
  }
}