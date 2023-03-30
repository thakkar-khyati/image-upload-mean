import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { profile } from '../models/profile.model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles: profile[] = [];
  readonly url = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  getProfiles():Observable<profile[]>{
    return this.http.get<profile[]>(this.url)
  }

  addProfile(name:string , image:File):void{
    const profileData = new FormData();
    profileData.append("name", name);
    profileData.append("image", image, name);
    this.http.post<{profile:profile}>(this.url,profileData).subscribe({
    next:(res)=>{
      console.log(res)
      console.log('profile added successfully')
    }
   })
  }

  
}
