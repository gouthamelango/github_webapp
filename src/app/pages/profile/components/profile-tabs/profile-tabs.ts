import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Overview} from '../../tabs/overview/overview'
import { Repositories } from '../../tabs/repositories/repositories';
import { Projects } from '../../tabs/projects/projects';
import { Packages } from '../../tabs/packages/packages';
import { Stars } from '../../tabs/stars/stars';

@Component({
  selector: 'app-profile-tabs',
  imports: [Overview, Repositories, Projects, Packages, Stars],
  templateUrl: './profile-tabs.html',
  styleUrl: './profile-tabs.css',
})
export class ProfileTabs {

  selectedTab = 'overview';
  constructor(private route : ActivatedRoute) {}

    ngOnInit(){
      this.route.queryParams.subscribe( (params)=>{
        this.selectedTab = params['tab'] || 'overview'
        console.log(this.selectedTab)
      })
    }
    
}
