import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "@appEnv/environment";

@Injectable({ providedIn: "root" })
export class UserService {

  constructor(private http: HttpClient) {}

  async getUserById(user_id: number): Promise<any> {
    return this.http.get<any>(`${environment.SERVER_URL}/api/getUser/${user_id}`).toPromise<any>()
  }
}
