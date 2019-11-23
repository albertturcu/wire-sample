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
import { MatDialog } from '@angular/material/dialog';
import { CancelDialog } from '../../Modals/Cancel_modal/cancel-modal.component';

@Component({
  selector: "<proposal-table></proposal-table>",
  templateUrl: "./proposal_table.component.html",
  styleUrls: ["./proposal_table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProposalTableComponent implements OnInit {
  @Input() dataSource;
  constructor(
    public dialog: MatDialog
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

  async openDialog(proposal_id): Promise<any> {
    const dialogRef = this.dialog.open(CancelDialog, {
      width: '250px',
      data: {
        id: proposal_id,
      }
    });
    await dialogRef.afterClosed().toPromise()
  }
}
