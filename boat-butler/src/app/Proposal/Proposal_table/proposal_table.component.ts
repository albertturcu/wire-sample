import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { Proposal } from "../../core/Interfaces/proposal";
import { ProposalService } from "app/core/services/proposal.service";
import { Router } from "@angular/router";

@Component({
  selector: "<proposal-table></proposal-table>",
  templateUrl: "./proposal_table.component.html",
  styleUrls: ["./proposal_table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProposalTableComponent implements OnInit {
  @Input() dataSource;
  constructor(
    private proposalService: ProposalService,
    private ref: ChangeDetectorRef,
    private router: Router
  ) {}
  displayedColumns = [
    "name",
    "boat_type",
    "service",
    "boat_location",
    "job_type",
    "actions"
  ];

  ngOnInit() {
    
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl(".", { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }

  async cancelProposal(proposal_id) {
    await this.proposalService.cancelProposal(proposal_id);
    this.dataSource = this.dataSource.map(
      (ds: any) => ds.proposal_id !== proposal_id
    );
    this.reload("proposal");
    this.ref.markForCheck();
  }
}
