import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public navLinks: any[] = [
    { id: 1, content: '/app-link-1', label: 'Flex Layout'},
    { id: 2, content: '/app-link-2', label: 'Link 2'}
  ];
}

@Component({
  selector: 'app-link-1',
  template: '<app-flex-layout></app-flex-layout>',
  styleUrls: ['../components/flex-layout/flex-layout.component.css']
})
export class Link1Component { title = 'Link 1'; }

@Component({
  selector: 'app-link-2',
  template: 'Link 2 loaded',
  styleUrls: ['./home.component.css']
})
export class Link2Component { title = 'Link 2'; }
