import { Component, signal, Input } from '@angular/core';
import { Github } from '../../../../core/services/github';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-sidebar',
  imports: [CommonModule],
  templateUrl: './profile-sidebar.html',
  styleUrl: './profile-sidebar.css',
})
export class ProfileSidebar {
  
  constructor(private github : Github){}
  user = signal<any>(null);

  @Input() githubUsername:String = ''
  
  ngOnInit(){
    this.github.getUserData(this.githubUsername).subscribe((response)=>{
      console.log(response)
      this.user.set(response)
    })
  }

}
