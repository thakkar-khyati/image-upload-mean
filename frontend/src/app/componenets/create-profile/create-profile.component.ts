import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

  form!: FormGroup;
  profile!: profile
  imageData:String=''

  constructor(private profileService:ProfileService){}

  ngOnInit(): void {
  
    this.form = new FormGroup({
      name:new FormControl(null),
      image:new FormControl(null),
    })

    this.profileService.getProfiles()
  }

  onSubmit(){
    this.profileService.addProfile(this.form.value.name, this.form.value.image)
    location.reload()
    this.form.reset()
    this.imageData =''
  }

  onFileSelect(event:any){
    const file = event.target.files[0];
    this.form.patchValue({image:file})
    const allowedFileTypes =['image/png','image/jpeg','image/jpg']
    if(file && allowedFileTypes.includes(file.type)){
      const reader = new FileReader();
      reader.onload = ()=>{
        this.imageData = reader.result as string
      }
      reader.readAsDataURL(file);
    }
  }
}
