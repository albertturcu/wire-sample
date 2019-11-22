import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "@appEnv/environment";

@Injectable({ providedIn: "root" })
export class ProposalService {
  company_id = localStorage.getItem("companyId");

  constructor(private http: HttpClient) {}

  async getProposals() {
    return this.http.get(`${environment.SERVER_URL}/product/getProposals/${this.company_id}`).toPromise<any>();
  }

  async cancelProposal(proposal_id) {
    return this.http.get(`${environment.SERVER_URL}/product/cancelProposal/${proposal_id}`).toPromise<any>();
  }
}
