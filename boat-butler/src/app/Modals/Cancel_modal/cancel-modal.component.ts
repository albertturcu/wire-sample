import { Component, Inject, ChangeDetectorRef } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProposalService } from "app/core/services/proposal.service";
import { Router } from '@angular/router';

@Component({
  selector: "cancel-modal",
  templateUrl: "./cancel-modal.componenet.html"
})
export class CancelDialog {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<CancelDialog>,
    private proposalService: ProposalService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: ChangeDetectorRef,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  async onYesClick(proposal_id: number) {
    await this.proposalService.cancelProposal(proposal_id);
    this.reload("proposal");
    this.ref.markForCheck();
  }

  async reload(url: string): Promise<boolean> {
    await this.router.navigateByUrl(".", { skipLocationChange: true });
    return this.router.navigateByUrl(url);
  }
}
