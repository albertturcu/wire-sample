import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "@appEnv/environment";

@Injectable({ providedIn: "root" })
export class JobService {
  company_id = localStorage.getItem("companyId");

  constructor(private http: HttpClient) {}

  async getJobs(): Promise<any> {
    return this.http.get(`${environment.SERVER_URL}/product/getJobs/${this.company_id}`).toPromise<any>();
  }
}
