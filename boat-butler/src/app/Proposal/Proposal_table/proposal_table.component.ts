import { Component } from '@angular/core';

export interface Proposal {
  name: string;
  boat_type: string;
  service: string;
  boat_location: string;
  job_type: string;
}

@Component({
  selector: '<proposal-table></proposal-table>',
  templateUrl: './proposal_table.component.html',
  styleUrls: ['./proposal_table.component.scss']
})
export class ProposalTableComponent {
  constructor() {}
  displayedColumns = ['name', 'boat_type', 'service', 'boat_location', 'job_type', 'actions'];
  dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: Proposal[] = [
  {name: 'Hydrogen', boat_type: 'Motor boat', service: 'Engine Repair', boat_location: 'Copenhangen', job_type: 'Normal'},
];