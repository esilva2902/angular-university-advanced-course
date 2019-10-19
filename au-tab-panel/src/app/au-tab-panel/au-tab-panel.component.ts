import { 
  Component, 
  OnInit, 
  ContentChildren, 
  AfterContentInit, 
  QueryList, 
  TemplateRef, 
  AfterViewInit,
  Input

} from '@angular/core';

import { AuTabComponent } from 'app/au-tab/au-tab.component';

@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['./au-tab-panel.component.scss']
})
export class AuTabPanelComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent>;

  @Input('header-template') 
  headerTemplate: TemplateRef<any>

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    
  }

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab => tab.selected)

    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true;
    }
  }

  selectTab(tab: AuTabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

  get tabsContext() {
    return {
      tabsInstance: this.tabs
    };
  }
}
