const angular = [
  {
    topic: 'AngularJS vs Angular',
    points: [
      'JS - Modal View Controller:javascript:not mobile friendly:routeProvider:no lazy, 2+ MVVM (Modal Veiw view-modal): typescript:mobile friendly:route Config',
    ],
  },
  {
    topic: 'Component creation',
    points: ['ng generate component component-name'],
  },
  {
    topic: 'Ways to do component based communication',
    points: ['viewChild, Data Service, input/output'],
  },
  {
    topic: 'Interpolation',
    points: ['binding data with curly braces {{data}}'],
  },
  {
    topic: 'Independent component communication',
    points: ['Subject, BehaviourSubject'],
  },
  {
    topic: 'ViewChild, ViewChildren, ContentChildren, ContentChild',
    points: [''],
  },
  {
    topic: 'Observable vs Promises',
    points: [
      'Promise handles a single event and cancelling is not there;Promise starts immediately',
      'ob - multiple events and cancelling is avail;Observable only starts if you subscribe to it',
      `code::
        const numberPromise = new Promise((resolve) => { resolve(5);});

        numberPromise.then(value => console.log(value)); // Print 5

        const numberObservable = new Observable((observer) => { observer.next(5); observer.next(10);});

        numberObservable.subscribe(value => console.log(value)); // Print 5 and 10
      `,
    ],
  },
  {
    topic: "What's  Observable?",
    points: [
      'Observer - won\'t interact with the Observer object;Observers allow you to "push" new data into an observable sequence "Write-only"',
      'Observable - An Observable is what we can use to listen, aka subscribe, to new changes that are emitted by an Observer. "Read-only"',
      'Subject - A Subject is simply an Observer and Observable. You can push new values as well as subscribe to it. "Read & Write"',
      'Operators - Pure function (map, filter, pipe)',
    ],
  },
  {
    topic: 'Directive Vs Component',
    points: [
      'Attribute Directives are responsible for manipulating the appearance - ngclass, ngstyle',
      'Structural Directives are responsible for changing the structure of the DOM - ngif,ngfor',
      'Components [2 types Built-In Directives and custom directives]',
    ],
  },
  {
    topic: 'Meta data in component',
    points: ['selector, templateUrl, StyleUrls, etc..'],
  },
  {
    topic: 'Life cycle hooks',
    points: [
      'Onchanges, Oninit, ngDocheck, ngAfterContentInit, ngContentChecked, ngAfterViewInit, ngAfterViewChecked, onDestroy',
    ],
  },
  {
    topic: 'Constructor vs ngOnInit()',
    points: [
      'const-should initialize class members, Dependency Injection; init-actual work code',
    ],
  },
  {
    topic: 'Dependency Injection',
    points: ['Other methods are injected in constructor'],
  },
  {
    topic: 'Routing, Child routing',
    points: [''],
  },
  {
    topic: 'Lazy loading',
    points: [''],
  },
  {
    topic: 'Route Guards',
    points: [
      "CanActivate - { path: 'home', component: HomeComponent, canActivate : [AuthGuard] } if we added in routing, it will validate parent auth",
      ' CanActivateChild - if we added in parent routing, it will validate parent & child auth',
      `code::
      {path: 'dashboard',canActivate: [AuthGuard], canActivateChild: [AuthGuard], component: DashboardComponent,children: [{ path: ':id', component: InfoComponent}]}
      `,
      'CanLoad',
      `code::
      {path: "admin", loadChildren:'./admin/admin.module#AdminModule', canLoad:[AuthGuardLazyLoad]} lazy module will't get download if auth false.
      `,
      'CanDeactivate',
      'Resolve',
      `code::
      { path: ':id', component: EditComponent, resolve: {data: ResolveGuard} }
      `,
    ],
  },
  {
    topic: 'Auth Guard',
    points: ['Service file for Route Guard'],
  },
  {
    topic: 'Project location environment setup',
    points: ['Node, NPM, CLI installation, Yarn, etc..'],
  },
  {
    topic: 'Interface',
    points: [
      'Declared objects need to have value in component, otherwise it will through error message - export class HeaderMenuComponent implements OnInit',
    ],
  },
  {
    topic: 'JWT (JSON Web Tokens)',
    points: [
      'JSON Web Token is a standard used to create access tokens for an application.',
      'It works this way: the server generates a token that certifies the user identity, and sends it to the client.',
      'The client will send the token back to the server for every subsequent request',
    ],
  },
  {
    topic: 'Template reference (#reference)',
    points: [
      'Template variables help you use data from one part of a template in another part of the template.',
    ],
  },
  {
    topic: 'Disadvantage in Angular',
    points: [''],
  },
  {
    topic: 'What is pipe',
    points: [
      'Transform values in an Angular template',
      `code::
      import { Pipe, PipeTransform } from '@angular/core'; 

                @Pipe ({ name: 'Multiplier' })

                export class MultiplierPipe implements PipeTransform {

                   transform(value: number, multiply: number): number { return mul * value }

                }

                <p>Multiplier: {{2 | Multiplier: 10}}</p>
      `,
    ],
  },
  {
    topic: 'Custom directive',
    points: [
      'Directives are to alter the behavior/appearance of an element',
      `code::
  import { Directive, ElementRef, Renderer } from "@angular/core";

  @Directive({ selector: '[app-ch-color]'})

  export class bgDirective {

      constructor(private el: ElementRef, private renderer: Renderer){

          this.renderer.setElementStyle(this.el.nativeElement, 'color', color);

      }

  }

  <div app-ch-color>Hello </div>
  `,
    ],
  },
  {
    topic: 'Property binding',
    points: [
      'One way binding ex: <button [disabled]="buttonDisabled"></button>',
    ],
  },
  {
    topic: 'Template directives',
    points: ['ngIf, NgStyle, etc'],
  },
  {
    topic: 'Multiple routing is possible?',
    points: ['yes, through router-outlet'],
  },
  {
    topic: 'How application bootstraps',
    points: [
      'Loading of Anugular app with level is called bootstrapping',
      `code::
  index.html,

  Load Angular, Other Libraries, and App Code

  Execute main.ts File

  Load App-Level Module

  Load App-Level Component

  Process Template
  `,
    ],
  },
  {
    topic: 'AOT vs JIT compilation',
    points: [
      'JIT(just-in-time) -  ng-build; we can debug the code, not all codes are converted',
      "AOT(ahead-of-time) - ng-build--prod; can't debug the code, before download code conversion happen",
    ],
  },
  {
    topic: 'RxJS',
    points: ['Behaviour Subject'],
  },
  {
    topic: 'Types of forms and difference',
    points: ['Template Driven Forms vs Reactive Forms'],
  },
  {
    topic: 'Pipe VS directive',
    points: [
      'Pipes are for formatting data, and directives are to alter the behavior/appearance of an element',
    ],
  },
  {
    topic: 'Can we use promise without RxJS',
    points: ["yes, fetch('my-api-goes-here').then(resp => resp.json());"],
  },
  {
    topic: 'ZoneJS',
    points: [
      'A Zone is an execution context that persists across async tasks. All the async tasks such as setTimeout, Promise, XHRs',
    ],
  },
  {
    topic: 'NgZone',
    points: [
      'Zone and NgZone is used to automatically trigger change detection as a result of async operations',
    ],
  },
  {
    topic: 'Change Detection',
    points: [
      'Change Detection means updating the DOM whenever data is changed.',
    ],
  },
  {
    topic: 'ChangeDetetorRef',
    points: [
      'Change Detection means updating the DOM whenever data is changed another component',
    ],
  },
  {
    topic: 'Change Detection Strategy.onPush',
    points: [''],
  },
  {
    topic:
      'for Root():ModuleWithProviders [returns an NgModule and its provider dependencies.',
    points: [''],
  },
  {
    topic: 'resolve in angular',
    points: [
      'Resolver acts like middleware, which can be executed before a component is loaded',
      `code::
  const routes: Routes = [{ path: '**', component: CalendarComponent, children : [], resolve  : { chat: CalendarService }}];
  `,
    ],
  },
  {
    topic: 'How to pass data via URL',
    points: [''],
  },
  {
    topic: 'useValue vs useClass vs useExisting vs useFactory',
    points: [''],
  },
  {
    topic: 'Jasmine unit test',
    points: [
      'Jasmine is a tool in the "Javascript Testing Framework", while Karma is grouped under "Browser Testing"',
    ],
  },
  {
    topic: 'PWA Progressive web apps',
    points: [''],
  },
  {
    topic: 'how to create Different environments',
    points: [''],
  },
  {
    topic: ' Http Interceptor',
    points: [''],
  },
  {
    topic: 'How will you handle the header commonly',
    points: [''],
  },
  {
    topic: 'what is a service ?',
    points: [''],
  },
  {
    topic: 'Dependency Injection',
    points: [''],
  },
  {
    topic: 'Shared module',
    points: [''],
  },
  {
    topic:
      'Creating shared modules allows you to organize/streamline your code. commonly used directives, pipes, and components into one module',
    points: [''],
  },
  {
    topic: 'how typescript is changing to javascript',
    points: [''],
  },
  {
    topic: 'Grunt vs Gulp vs webpack',
    points: [
      ' webpack - Webpack and Browserify do pretty much the same job, which is processing your code to be used in a target environmen',
      ' grunt/gulp - task runners to automate everything;',
    ],
  },
  {
    topic: 'Feature of Angular in latest verison8. Event Emitter ?',
    points: [''],
  },
  {
    topic: 'Providers in Component.',
    points: [''],
  },
  {
    topic: 'Forkjoin() – Rxjs',
    points: ['Trigger the response after multiple API call ends.'],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
  {
    topic: '',
    points: [''],
  },
];
export default angular;
