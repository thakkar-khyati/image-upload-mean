import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-all-profile',
  templateUrl: './all-profile.component.html',
  styleUrls: ['./all-profile.component.css']
})
export class AllProfileComponent implements OnInit{

  profiles:profile[]=[]

  constructor(private profileService:ProfileService){}

  ngOnInit(): void {
    this.getAllProfiles()
  }

  getAllProfiles =()=>{
    this.profileService.getProfiles().subscribe({
      next:(res)=>{
        this.profiles = res
      }
    })
  } 
}
