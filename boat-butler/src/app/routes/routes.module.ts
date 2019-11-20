import { NgModule } from '@angular/core';
import { RoutesRoutingModule } from './routes-routing.module';
import { CommonModule } from '@angular/common';

const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [CommonModule, RoutesRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class RoutesModule {}
