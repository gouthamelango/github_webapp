import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class Graph {
    private http = inject(HttpClient)
    private baseURL = "https://github-contributions-api.jogruber.de/v4"

    getContributionGraph(username:String, year : String = 'last'){
        return this.http.get(`${this.baseURL}/${username}?y=${year}`)
    }
}
