import { Component, OnInit } from "@angular/core";
import { ProposalService } from "app/core/services/proposal.service";
import { JobService } from "app/core/services/job.service";
import { UserService } from "app/core/services/user.service";

@Component({
  selector: "<app-proposals></app-proposals>",
  templateUrl: "./proposal.component.html",
  styleUrls: ["./proposal.component.scss"]
})
export class ProposalsComponent implements OnInit {
  pendingProposals = [];
  acceptedProposals = [];
  cancelledProposals = [];

  proposals: any;
  jobs: any;

  constructor(
    private proposalService: ProposalService,
    private userService: UserService,
    private jobService: JobService
  ) {}

  async ngOnInit() {
    this.proposals = await this.proposalService.getProposals();
    this.jobs = await this.jobService.getJobs();
    await this.separateProposals(this.proposals.proposal);
  }

  async separateProposals(proposals: any) {
    proposals.forEach(proposal => {
      switch (proposal.status) {
        case "pending":
          this.jobs.jobs.forEach(async job => {
            if (job._id === proposal.job_id) {
              let user = await this.userService.getUserById(job.user_id);
              job.user = user.user[0];
              job.proposal_id = proposal._id;
              job.status = proposal.status;
              this.pendingProposals = [...this.pendingProposals, job];
            }
          });
          break;
        case "cancelled":
          this.jobs.jobs.forEach(async job => {
            if (job._id === proposal.job_id) {
              let user = await this.userService.getUserById(job.user_id);
              job.user = user.user[0];
              job.proposal_id = proposal._id;
              job.status = proposal.status;
              this.cancelledProposals = [...this.cancelledProposals, job];
            }
          });
          break;
        case "accepted":
          this.jobs.jobs.forEach(async job => {
            if (job._id === proposal.job_id) {
              let user = await this.userService.getUserById(job.user_id);
              job.user = user.user[0];
              job.proposal_id = proposal._id;
              job.status = proposal.status; 
              this.acceptedProposals = [...this.acceptedProposals, job];
            }
          });
          break;
      }
    });
  }
}
