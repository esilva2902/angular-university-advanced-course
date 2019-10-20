import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuTabPanelComponent } from './au-tab-panel/au-tab-panel.component';
import { AuTabComponent } from './au-tab/au-tab.component';

describe('AppComponent', () => {

  let appComponent: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el: DebugElement,
      tabPanel: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AuTabPanelComponent,
        AuTabComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    tabPanel = el.query(By.css('#tab-panel'));

    fixture.detectChanges();

  });

  it('should create the app', async(() => {
    expect(appComponent).toBeTruthy();
  }));

  it('should create the tab panel', async(() => {
    expect(tabPanel).toBeTruthy();
  }));

  it ('should find only one tab inside the tab container', async(() => {
    const tabs = tabPanel.queryAll(By.css('.tab'));
    expect(tabs).toBeTruthy();
    expect(tabs.length).toBe(1);

  }));

  it ('should find the login tab as active', async(() => {
    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected'));
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.nativeElement.textContent).toBe('Login');
  }));

  it ('should switch to the contact tab', async(() => {
    // Query all the buttons (li):
    const tabButtons = tabPanel.queryAll(By.css('.tab-panel-buttons li'));

    // Simulate a click from user:
    tabButtons[2].nativeElement.click();

    fixture.detectChanges();

    // Verify if the Login tab is selected:
    const selectedButton = tabPanel.query(By.css('.tab-panel-buttons li.selected'));
    expect(selectedButton).toBeTruthy();
    expect(selectedButton.nativeElement.textContent).toBe('Contact');

    /**
     * We have added a fake class to contact's input whose name is contact-email. 
     * Therefore, retrieve that input via that class:
     */
    const tabs = tabPanel.queryAll(By.css('.tab'));
    const contactInput = tabs[0].query(By.css('.contact-email'));

    // Make an assertion, if the retrieve element is not null:
    expect(contactInput).toBeTruthy();
  }));

});
