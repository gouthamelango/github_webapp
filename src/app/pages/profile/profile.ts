import { Component, inject } from '@angular/core';
import { ProfileSidebar } from './components/profile-sidebar/profile-sidebar';
import { ProfileTabs } from './components/profile-tabs/profile-tabs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [ProfileSidebar, ProfileTabs],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  private route = inject(ActivatedRoute)

  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params['username'])
    })
  }
}
