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
    topic: 'pure pipe vs impure pipe',
    points: [
      'impure pipe is triggered for every change detection cycle',

    ]
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
    topic: 'why DI is loose coupling?',
    points: [''],
  },
  {
    topic: 'what is the entry point of angular application',
    points: [
      'The entry point of an Angular application is the main.ts file, which bootstraps the root module (usually AppModule) and starts the application.',
    ],

  },
  {
    topic: 'what is the use of package.json, package-lock.json and angular.json',
    points: [
      'package.json - It contains metadata about the project, including dependencies, scripts, and other configurations.',
      'package-lock.json - It locks the versions of dependencies to ensure consistent installs across different environments.',
      'package.json is used to manage project dependencies, while package-lock.json ensures that the exact versions of those dependencies are installed.',
      'angular.json - It contains configuration settings for the Angular CLI, such as build options, file replacements, and project structure.',
      'angular.json is used to configure the Angular CLI for building, serving, and testing the application.',
      ''
    ],

  },
  {
    topic: 'difference between constructor and ngOnInit in Angular',
    points: [
      'The constructor is a TypeScript feature used to initialize class members and inject dependencies, while ngOnInit is a lifecycle hook that is called after the component has been initialized, allowing for additional setup.',
      'The constructor is called when the component is created, while ngOnInit is called after the component has been initialized and its inputs have been set.',
    ],
  },
  {
    topic: 'difference between promise and observable in Angular',
    points: [
      'A Promise is a one-time asynchronous operation that resolves to a single value, while an Observable can emit multiple values over time and can be cancelled.',
      'Promises are eager, meaning they start executing immediately, while Observables are lazy and only execute when subscribed to.',
      'Promises cannot be cancelled, while Observables can be unsubscribed to stop receiving values.',
      'Promises are part of the JavaScript language, while Observables are part of the RxJS library used in Angular.',
      'Promises are typically used for single asynchronous operations, while Observables are used for streams of data that can change over time.',
      'Promises are simpler to use for single values, while Observables provide more powerful operators for handling complex asynchronous scenarios.',
      ''
    ],
  },
  {
    topic: 'what are the directives and explain the types of directives in Angular',
    points: [
      'Directives are classes that add behavior to elements in Angular applications.',
      'There are three types of directives in Angular:',
      '1. Components: Directives with a template that define a view.',
      '2. Structural Directives: Change the DOM layout by adding or removing elements (e.g., *ngIf, *ngFor).',
      '3. Attribute Directives: Change the appearance or behavior of an element (e.g., ngClass, ngStyle).',

    ],

  },
  {
    topic: 'what is data binding in Angular',
    points: [
      'Data binding is the process of synchronizing data between the model (component class) and the view (template).',
      'There are four types of data binding in Angular:',
      '1. Interpolation: Binding data from the component to the template using {{}} syntax.',
      '2. Property Binding: Binding data to an element property using square brackets [] syntax.',
      '3. Event Binding: Listening to events and executing methods in the component using parentheses () syntax.',
      '4. Two-way Binding: Combining property and event binding using [(ngModel)] syntax.',

    ],
  },
  {
    topic: 'what is the dependency injection in Angular',
    points: [
      'Dependency Injection (DI) is a design pattern used in Angular to manage the dependencies of components and services.',
      'It allows components to receive their dependencies from an external source rather than creating them internally.',
      'DI promotes modularity, testability, and reusability of code by decoupling components from their dependencies.',
      'In Angular, DI is implemented using providers, which can be registered at different levels (root, module, or component).',
      'Components can inject services or other dependencies through their constructors.',
    ],
  },
  {
    topic: 'what is service worker and its role in Angular',
    points: [
      'A Service Worker is a script that runs in the background of a web application, allowing it to intercept network requests and cache resources.',
      'In Angular, Service Workers are used to enable Progressive Web App (PWA) features such as offline support, caching, and background synchronization.',
      'Service Workers can cache static assets, API responses, and other resources to improve performance and provide a better user experience.',
      'Angular provides built-in support for Service Workers through the @angular/service-worker package, which simplifies the implementation of PWA features.',
    ],
  },
  {
    topic: 'what is eager loading and lazy loading in Angular',
    points: [
      'Eager loading is the process of loading all modules and their dependencies at the start of the application, which can lead to longer initial load times.',
      'Lazy loading is a technique where modules are loaded on demand, only when they are needed, which improves initial load time and performance.',
      'In Angular, lazy loading is implemented using the loadChildren property in the routing configuration, allowing specific modules to be loaded only when their routes are activated.',
      'Lazy loading helps reduce the size of the initial bundle and improves the overall performance of the application.',
    ],
  },
  {
    topic: 'how do you pass headers to httpclent in Angular',
    points: [
      'In Angular, you can pass headers to HttpClient requests by using the HttpHeaders class.',
      'You can create an instance of HttpHeaders and set the desired headers, then pass it as an options object in the HttpClient request.',
      `code::
      import { HttpClient, HttpHeaders } from '@angular/common/http';

      const headers = new HttpHeaders({ 'Authorization': 'Bearer token' });

      this.http.get('api/endpoint', { headers }).subscribe(response => {
        console.log(response);
      });
      `,
    ],
  },
  {
    topic: 'what is safe navigation operator in Angular',
    points: [
      'The safe navigation operator (?.) is used in Angular templates to prevent errors when accessing properties of an object that may be null or undefined.',
      'It allows you to safely access nested properties without throwing an error if the object is not defined.',
      `code::
      <div>{{ user?.profile?.name }}</div>
      `,
      'If user or profile is null or undefined, the expression will evaluate to undefined instead of throwing an error.',
    ],
  },
  {
    topic: 'What is content projection, Angular Universal, ng-content, and ng-template?',
    points: [
      'Content Projection: A pattern in Angular that allows you to pass content from a parent component into a child component. It is commonly used to create reusable components that can accept dynamic content.',
      'Angular Universal: A technology for server-side rendering (SSR) of Angular applications. It allows Angular apps to be rendered on the server, improving performance and SEO.',
      'ng-content: An Angular directive used for content projection. It acts as a placeholder in a component\'s template where dynamic content from the parent component will be inserted.',
      `code::
      // Parent component template
      <app-card>
        <p>This content will be projected!</p>
      </app-card>

      // Child component template
      <div class="card">
        <ng-content></ng-content>
      </div>
      `,
      'ng-template: An Angular directive that defines a template that can be rendered dynamically. It is not rendered by default, but can be used with structural directives like *ngIf or *ngFor.',
      `code::
      <ng-template #myTemplate>
        <p>This is a template!</p>
      </ng-template>

      <div *ngIf="show; else myTemplate">
        <p>Show is true!</p>
      </div>
      `,
    ],
  },
];
export default angular;
