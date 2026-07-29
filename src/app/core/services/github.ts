import { Service, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Service()
export class Github {
    private http = inject(HttpClient); 
    private readonly baseUrl = 'https://api.github.com/users';
    private readonly token = 'xxxxxx';
    private useAuth:Boolean = false;
    
    private get getHeaders(): HttpHeaders{
        let headers = new HttpHeaders()
        if(this.useAuth){
            headers = headers.set('Authorization', this.token);
        }
        return headers
    }

    getUserData(username:String) {
        return this.http.get(`${this.baseUrl}/${username}`, {headers : this.getHeaders})
    }

    getUseRepositories(username:String){
        return this.http.get(`${this.baseUrl}/${username}/repos`, {headers : this.getHeaders})
    }
}
