import { Component } from '@angular/core';
import { ProfileSidebar } from './components/profile-sidebar/profile-sidebar';
import { ProfileTabs } from './components/profile-tabs/profile-tabs';
@Component({
  selector: 'app-profile',
  imports: [ProfileSidebar, ProfileTabs],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
