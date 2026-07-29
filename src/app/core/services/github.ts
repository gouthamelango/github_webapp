import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class Github {
    private http = inject(HttpClient); 
    private readonly baseUrl = 'https://api.github.com/users';

    getUserData(username:String) {
        return this.http.get(`${this.baseUrl}/${username}`)
    }
}
