const angular = [
    {
        topic: 'ANGULAR CLI (COMMAND LINE INTERFACE)',
        points: [
            'Angular CLI is a powerful command-line tool that helps you:',
            '✅ Create new Angular projects',
            '✅ Generate components, services, modules, and more',
            '✅ Build and serve applications',
            '✅ Run unit and end-to-end tests',
            '✅ Perform production builds with optimizations',
            '🔹 Installing Angular CLI - npm install -g @angular/cli',
            '🔹 Check installed version - ng version',
            'hr::',
            'h:: 🚀 Common Angular CLI Commands',
            'ng new my-app - Creates a new Angular project named my-app',
            'cd my-app - Navigate into project folder',
            'ng serve - Builds & serves the app at http://localhost:4200/',
            'ng build - Builds the app (output to dist/)',
            'ng build --prod - Production build with optimizations',
            'ng generate component my-component - Generates a new component',
            'ng generate service my-service - Generates a new service',
            'ng generate module my-module - Generates a new module',
            'ng test - Runs unit tests with Karma',
            'ng e2e - Runs end-to-end tests',
            'ng lint - Lints the code',
            'ng add <package> - Adds a package and updates config',
            'ng update - Updates dependencies to latest versions',
            'hr::',
            'h:: ⚙️ Key Angular CLI Files',
            'angular.json - Configuration for CLI build, serve, test',
            'package.json - Manages dependencies & scripts',
            'tsconfig.json - TypeScript compiler settings',
            'src/environments/ - Different environment configurations',
            'hr::',
            'h:: 🔥 Advanced Usage',
            '✅ Serve with different port: ng serve --port 4201',
            '✅ Enable production mode: ng build --configuration=production',
            '✅ Generate with schematics (e.g., Material Design): ng add @angular/material',
            '✅ Update Angular to latest: ng update @angular/cli @angular/core',
            'hr::',
            'h:: 🔥 1️⃣ Angular CLI Workflow Diagram',
            'Here’s a visual overview of how Angular CLI commands fit together:',
            `code::
            [Angular CLI] ──┬── ng new my-app
                │      └─ Generates folder structure & boilerplate code
                │
                ├── ng serve
                │      └─ Compiles app & serves at localhost:4200
                │
                ├── ng generate component/service/module
                │      └─ Adds new features (updates app.module.ts)
                │
                ├── ng build (--prod)
                │      └─ Builds optimized bundle in /dist
                │
                ├── ng test / ng lint / ng e2e
                │      └─ Runs tests & static analysis
                │
                └── ng update / ng add
                       └─ Manages dependencies & schematics

            `,
            'h:: 📁 2️⃣ Angular Project Folder Structure (ng new)',
            `code::
            my-app/
            ├── e2e/                # End-to-end tests
            ├── node_modules/       # Installed npm packages
            ├── src/                # Application source code
            │   ├── app/            # App root module and components
            │   ├── assets/         # Static assets (images, icons, etc.)
            │   ├── environments/   # Env configs (dev/prod)
            │   ├── index.html      # Main HTML file
            │   ├── main.ts         # App bootstrap entry point
            │   ├── polyfills.ts    # Browser compatibility
            │   ├── styles.css      # Global styles
            │   └── test.ts         # Unit test entry point
            ├── angular.json        # Angular CLI configuration
            ├── package.json        # Dependencies & scripts
            ├── tsconfig.json       # TypeScript compiler settings
            ├── karma.conf.js       # Test runner configuration
            └── README.md           # Project documentation

            `,
            'h:: npm install vs ng add',
            'ng add works only for Angular libraries (or npm packages) that provide schematics.',
            '✅ npm install → Just installs a package.',
            '✅ ng add → Installs a package and configures it with schematics (if available).',
            'h:: npm install',
            '📦 What it does - Installs a package from npm registry into node_modules and updates package.json.',
            '🔧 Usage - npm install package-name,  npm install (to install from package.json)',
            '🏗 Angular integration - Just adds dependencies; you need to manually configure them in angular.json or code.',
            '📚 Examples - npm install bootstrap (you’ll need to add styles/scripts manually)',
            '🎯 When to use - For general npm packages (Angular or not)',
            '🚀 Extra feature - None',
            'h:: ng add',
            '📦 What it does - Installs a package and runs its Angular schematic to configure the app.',
            '🔧 Usage - ng add package-name',
            '🏗 Angular integration - Automatically configures the project (e.g., updates angular.json, adds modules, styles, scripts).',
            '📚 Examples - ng add @angular/material (sets up themes, animations, modules, etc.)',
            '🎯 When to use - For Angular libraries that provide schematics',
            '🚀 Extra feature - Runs schematics (automated project configuration)',
        ]
    },
    {
        topic: 'MODULE',
        points: [
            'modules group related components, directives, pipes, and services, thereby simplifying the structure and maintainability of the application.',
            'A module in Angular is defined using the @NgModule() decorator ',
            `code::
            // app.module.ts
            import { NgModule } from '@angular/core';
            import { BrowserModule } from '@angular/platform-browser';
            import { AppComponent } from './app.component';

            @NgModule({
                declarations: [AppComponent],
                imports: [BrowserModule],
                bootstrap: [AppComponent]
            })
            export class AppModule {}
            `,
            'h:: ✅ NgModule Metadata',
            'declarations - Components, directives, pipes that belong to this module',
            'imports - Other modules whose exported classes are needed',
            'providers - Services used in this module (DI)',
            'bootstrap - Root component to bootstrap (only in AppModule)',
            'exports - Items that should be available to other modules',
            'h:: ✅ Types of Modules',
            'Root Module - Typically AppModule. Bootstraps the Angular app.',
            'Feature Module - Used to encapsulate specific features.',
            'Shared Module - Reusable components, pipes, directives (no services).',
            'Core Module - Singleton services (loaded once in root).',
            'Routing Module - Holds only routing configuration.'
        ]
    },
    {
        topic: 'DIRECTIVE',
        points: [
            'A Directive is a Angular feature',
            'that allows you to attach custom behavior or logic to elements in the DOM.',
            '2 types of directives:',
            '"Structural Directive" - it used to change the structure of the DOM by adding or removing the elements dynamically in the DOM. (*ngIf, *ngFor)',
            '"Attribute Directive" - it used to modify their appearance/behavior of the DOM element with custom attributes (ngClass, ngStyle). mainly used for style changes',
            '"component attribute" - it used to define our templates'
        ]
    },
    {
        topic: 'CUSTOM DIRECTIVE',
        points: [
            'A custom directive is a user-defined directive that encapsulates custom behavior or logic and can be reused to manipulate DOM elements in an Angular application.',
            'we can create custom directive when you we logic or behavior that’s not provided by built-in directives like ngIf, ngFor, etc.',
            '"@Directive" decorator helps defines the custom direcive',
            'helps to keep components clean by moving logic into directives.',
            'declare it inside the "declarations" array for module based component',
            'declare it inside the "imports" array for standalone component',
            `code::
                import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

                @Directive({
                selector: '[appCustomHighlight]'
                })
                export class CustomHighlightDirective {
                constructor(private el: ElementRef, private renderer: Renderer2) {
                    this.setBackground('yellow');
                }
                
                @HostListener('mouseenter') onMouseEnter() {
                    this.setBackground('lightgreen');
                }
                
                @HostListener('mouseleave') onMouseLeave() {
                    this.setBackground('yellow');
                }
                
                private setBackground(color: string) {
                    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
                }
                }

                <p appCustomHighlight>This text will change background color on hover.</p>
            `
        ]
    },
    {
        topic: 'PIPE',
        points: [
            'A pipe in Angular is used to transform or format data in templates without changing the original data.',
            'Built-in pipes – date, uppercase, currency, async, etc.',
            'SYNTAX - {{ value | pipeName : arg1 : arg2 : arg3 }}',
            '| - pipe operator, pipeName - name of the pipe, : - optional arguments',
            'Pipes can accept one or more arguments after the pipe name, separated by : (colon)',
            `code::
                <!-- Syntax: date:'format':'timezone' -->
                <p>{{ birthday | date:'fullDate' }}</p> <!-- fullDate is an argument -->
                <p>{{ birthday | date:'shortTime' }}</p>            
            `
        ]
    },
    {
        topic: 'CUSTOM PIPE',
        points: [
            'Custom pipes are user-defined functions/class. we can create it when built-in pipes don’t cover your use case.',
            'that encapsulates data transformation logic to transform input data into a desired output format and reuse it throughout your Angular application',
            'Custom pipes can be used to perform various operations on data, such as formatting strings, filtering arrays, or performing complex calculations.',
            '"@Pipe" decorator helps defines the custom pipe',
            '"PipeTransform" interface defines the transform method',
            '"Optional arguments" allow dynamic behavior in pipes',
            'declare it inside the "declarations" array for module based component',
            'declare it inside the "imports" array for standalone component',
            `code::
                import { Pipe, PipeTransform } from '@angular/core';

                @Pipe({
                name: 'formatText'
                })
                export class FormatTextPipe implements PipeTransform {
                transform(value: string, caseStyle: string = 'upper'): string {
                    if (!value) return '';
                    switch (caseStyle.toLowerCase()) {
                    case 'lower':
                        return value.toLowerCase();
                    case 'capitalize':
                        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                    default: // upper
                        return value.toUpperCase();
                    }
                }
                }

                <p>{{ 'hello world' | formatText }}</p>               <!-- Output: HELLO WORLD -->
                <p>{{ 'hello world' | formatText:'lower' }}</p>       <!-- Output: hello world -->
                <p>{{ 'hello world' | formatText:'capitalize' }}</p>  <!-- Output: Hello world -->

            
            `
        ]
    },
    {
        topic: 'COMPONENT',
        points: [
            'Components are the basic build blocks of angular application',
            'Components are responsible for rendering the UI elements into the application',
            'Components are responsible for handling data binding, life cycle hooks and managing dependencies',
            '3 main things of a compoents',
            'VIEW - place to write our html code for UI',
            'TYPESCRIPT CLASS - defines properties, methods, and event handlers that the template can use.',
            'STYLE - used to write our styles for the html',
            'Each component contains a reusable piece of UI functionality and can be composed together to create complex applications.'
        ]
    },
    {
        topic: 'SERVICE',
        points: [
            'A Service is a reusable and injectable class.',
            'It encapsulates business logic, shared data, or utility functions that can be injected and used by different parts of the application(components or other services) using "Dependency Injection".',
            '"@Injectable" decorator helps to create a service class',
            '"providers" array property register the services helps to creates a new instance of the service in both module and component level or we can create global instance with "providedIn: \'root\'"',
            `code::
            import { Injectable } from '@angular/core';

            @Injectable({
            providedIn: 'root'  // Singleton service provided globally
            })
            export class DataService {
                getData() {
                    return ['Angular', 'React', 'Vue'];
                }
            }

            or

            import { Injectable } from '@angular/core';

            @Injectable()
            export class CounterService {
            counter = 0;
                increment() {
                    this.counter++;
                }
            }

            `,
            'hr::', 'hr::',

        ]
    },
    {
        topic: 'DEPENDENCY INJECTION (DI)',
        points: [
            'Dependency Injection (DI) is a design pattern',
            'It allows components to receive their dependencies from external sources rather than creating them internally',
            'DI inject services, values, or other external dependencies into components, directives, pipes, or other services.',
            '"Constructor" is most common place to inject the DI',
            'In Angular, DI is a core mechanism for managing dependencies, promoting loose coupling, reusability, and testability. ',
            'Angular supports multiple DI types:',
            'h:: constructor injection (default):',
            'The constructor of the class (component, service, etc.) takes dependencies as parameters.',
            'Angular automatically injects these dependencies when creating the class instance.',
            'Benefits: Clear, concise, and Angular manages injection during instantiation.',
            `code::
            constructor(private dataService: DataService) {}
            `,
            'h:: property injection(Less Common):',
            'The dependency is assigned to a public property of the class.',
            'This can be done manually or with Angular’s @Input or custom decorators.',
            'Note: Angular’s DI system primarily uses constructor injection. Property injection is rare and often seen in unit testing or special cases.',
            `code::
            @Input() myService: MyService;
            `,
            'advanced decorators like',
            'h:: Optional Injection:',
            'Use @Optional() decorator to make a dependency optional.',
            'If the service isn’t provided, Angular will inject null instead of throwing an error.',
            `code::
            constructor(@Optional() private logger?: LoggerService) {}
            `,
            'h:: Self Injection:',
            'Use @Self() to inject a dependency only from the current injector, not from parent injectors.',
            `code::
            constructor(@Self() private myService: MyService) {}
            `,
            'h:: SkipSelf Injection:',
            'Use @SkipSelf() to inject a dependency from the parent injector, skipping the current one.',
            `code::
            constructor(@SkipSelf() private parentService: ParentService) {}
            `,
            'h:: Host Injection:',
            'Use @Host() to inject a dependency from the host element’s injector.',
            `code::
            constructor(@Host() private hostService: HostService) {}
            `,
            'hr::', 'hr::',
            'h:: loose coupling:',
            'Loose coupling means that components, classes, or modules are independent of each other.',
            'Each part has minimal knowledge of others, so changes in one component won’t break others.',
            'It promotes flexibility, reusability, and easier testing.'
        ]
    },
    {
        topic: 'DATA BINDING',
        points: [
            'Data binding in Angular synchronizes data between the component(class) and the template(view), using one-way (interpolation, property binding, event binding) and two-way ([(ngModel)]) binding to keep the UI and logic in sync.',
            'It allows seamless synchronization between the component and the view.',
            'h:: Types of Data Binding:',
            'h:: String Interpolation  (One-way binding from class to view):',
            'Inserts component data directly into the template using {{ }}.',
            'Class ➡️ View (uni-directional flow)',
            `code::
            <h1>Welcome, {{ userName }}</h1>
            `,
            'h:: Property Binding (One-way binding from class to element property)',
            'Binds a DOM property of an HTML element to a component property.',
            'Class ➡️ Element (uni-directional flow)',
            `code:: 
            <img [src]="imageUrl" alt="Image">
            `,
            'h:: Event Binding (One-way binding from view to class):',
            'Binds a DOM event (like click) to a method in the component.',
            'View ➡️ Class (uni-directional flow)',
            `code::
            <button (click)="onClick()">Click Me</button>
            `,
            'h::  Two-way Binding:',
            'Combines property and event binding for synchronization in both directions.',
            'View ⬄️ Class (bi-directional flow)',
            'Uses [(ngModel)] syntax.',
            `code::
            <input [(ngModel)]="userName">
            <p>Your name is: {{ userName }}</p>
            `
        ]
    },
    {
        topic: 'ROUTING',
        points: [
            'Routing in Angular allows navigation between different views (components) based on the URL.',
            'It Provides Single Page Application (SPA) navigation without reloading the entire page, using RouterModule, RouterOutlet, and RouterLink.',
            'h:: RouterModule',
            'Angular’s built-in module that handles routing configuration.',
            'Imported in AppModule or feature modules.',
            `code::
            import { RouterModule } from '@angular/router';
            `,
            'h:: Routes Configuration',
            'Routes are defined as an array of objects mapping path to component.',
            `code::
            const routes: Routes = [
                { path: '', component: HomeComponent },
                { path: 'about', component: AboutComponent },
                { path: '**', component: PageNotFoundComponent }  // Wildcard for 404
              ];
              
            `,
            'h:: RouterOutlet',
            'Acts as a placeholder in the template where routed components are displayed.',
            `code::
            <router-outlet></router-outlet>
            `,
            'h:: RouterLink',
            'Creates navigation links without a full page reload.',
            `code::
            <a routerLink="/about">About</a>
            `,
            'hr::',
            'h:: pathMatch',
            'full - ',
            'hr::',
            'h:: types of route data passing:',
            'params',
            'query params',
            'data (static data)',
            'state (dynamic data)',
            'fragment (# - jumps to specific section of a html page)',
            'resolve'
        ]
    },
    {
        topic: 'WILD CARD ROUTE or FALLBACK',
        points: [
            'When a user navigates to a non-existent URL, Angular should display a "Page Not Found" (404) component.',
            'the path value should be double star(**)',
            "Use a wildcard route (path: '**') to catch all unmatched routes.",
            'Place it at the end of the route definitions to avoid catching valid paths.',
            'This ensures good user experience and proper error handling.',
            "In Angular, a path: '**' wildcard route is used to handle 404 errors by displaying a fallback component for unmatched URLs.",
            "{ path: '**', component: PageNotFoundComponent }"
        ]
    },
    {
        topic: 'LAZY LOADING',
        points: [
            'Lazy loading is a design pattern',
            'It loads the feature module or stand-alone components on-demand which means only when they are required, rather than loading everything upfront.',
            'It reduces the initial bundle size, improving performance and load time.',
            'It uses "loadChildren" property in the configuration and "RouterModule.forChild(routes)" method in the imports array.'
        ]
    },
    {
        topic: 'CHANGE DETECTION',
        points: [
            'Change Detection is Angular’s mechanism to track and update the view (DOM) whenever the component’s data changes.',
            'It ensures that the UI is always in sync with the component’s state.',
            'Angular runs change detection after any asynchronous events like user input, HTTP calls, timers, or promises.',
            'It checks component properties and updates the DOM if the data has changed.',
            'It use two strategies: Default and OnPush',
            'h:: Default Strategy (CheckAlways):',
            'Its a default strategy',
            'Angular checks all components from top to bottom whenever a change occurs.',
            'Easy but can be less performant in large apps.',
            'h:: OnPush Strategy:',
            'Its a manual detection strategy',
            'Angular checks the component only when: @Input() properties change their reference, An event originated inside the component (like a button click), Observable emits a new value or manually trigger change detection (ChangeDetectorRef.detectChanges())',
            'Improves performance by skipping unnecessary checks.',
            'To achieve this, we should assign "ChangeDetectionStrategy.OnPush" to the "changeDetection" property to the component\'s metadata',
            `code::
            import { ChangeDetectionStrategy, Component } from '@angular/core';

            @Component({
              selector: 'app-my',
              templateUrl: './my.component.html',
              changeDetection: ChangeDetectionStrategy.OnPush
            })
            export class MyComponent {
                constructor(private cd: ChangeDetectorRef) {}

                someMethod() {
                // Manually trigger check
                this.cd.detectChanges();
                }
            }
            `
        ]
    },
    {
        topic: 'VIEW ENCAPSULATION',
        points: [
            'View Encapsulation in Angular controls whether component styles apply(scoped) only to the component’s view or affect the entire app',
            'Prevents style conflicts between components.',
            'Its coming with options like Emulated (default), ShadowDom, and None.',
            'To achieve this, we should assign "ViewEncapsulation.Emulated" to the "encapsulation" property to the component\'s metadata',
            'h:: Emulated (Default):',
            'Angular simulates Shadow DOM behavior by adding unique attributes to component elements and styles.',
            'Styles are scoped to the component but rendered in the global DOM.',
            'Provides style encapsulation without relying on browser support.',
            'h:: ShadowDom:',
            'Uses the native Shadow DOM API provided by modern browsers.',
            'Styles are truly encapsulated inside the Shadow DOM boundary—no leakage in or out.',
            'Requires browser support for Shadow DOM (modern browsers only).',
            'h:: None:',
            'No encapsulation — styles are global and apply to the entire application.',
            'Styles from this component can affect other components.',
            'Useful for global styles or third-party libraries.',
            `code::
            import { Component, ViewEncapsulation } from '@angular/core';

            @Component({
              selector: 'app-example',
              templateUrl: './example.component.html',
              styleUrls: ['./example.component.css'],
              encapsulation: ViewEncapsulation.Emulated  // or ShadowDom, None
            })
            export class ExampleComponent { }
            
            `,
        ]
    },
    {
        topic: 'HTTP CLIENT MODULE',
        points: [
            'HttpClientModule is an Angular module that provides a simplified and powerful way to make HTTP requests (GET, POST, PUT, DELETE, etc.) from your Angular app to backend APIs or servers.',
            'It builts with RxJS observables for powerful and flexible async data handling."',
            'It imports "HttpClientModule" in our app module (or any module where you want to use HTTP):',
            `code::
            import { HttpClientModule } from '@angular/common/http';

            @NgModule({
            imports: [
                HttpClientModule,
                // other imports
            ],
            })
            export class AppModule { }
            `,
            'It injects "HttpClient" service into your component or service',
            `code::
            import { HttpClient } from '@angular/common/http';

            constructor(private http: HttpClient) { }

            getData() {
            return this.http.get('https://api.example.com/data');
            }
            `

        ]
    },
    {
        topic: 'HTTP INTERCEPTOR',
        points: [
            'An HTTP Interceptor is a service that intercepts and modifies HTTP requests or responses globally before they are handled by the application.',
            'Useful for authentication, adding headers, logging, handling errors, or modifying requests/responses without changing every HTTP call manually.',
            'It acts like middleware in the HTTP request/response pipeline.',
            'Interceptors implement the "HttpInterceptor" interface and "intercept" method with two main parametors "HttpRequest" and "HttpHandler"',
            'NEED TO DO FURTHER CHECK'
        ]
    },
    {
        topic: 'AUTH GUARD',
        points: [
            'An Auth Guard is a service that controls access to routes based on authentication or authorization logic.',
            'It prevents unauthorized users from navigating to protected routes.',
            'Implements the CanActivate interface (or related ones like CanActivateChild, CanLoad).',
            'Runs before route activation to decide whether navigation should proceed.',
            'Returns true (allow navigation) or false (block navigation), or a UrlTree to redirect.',
            `code::
            import { Injectable } from '@angular/core';
            import { CanActivate, Router } from '@angular/router';

            @Injectable({
            providedIn: 'root'
            })
            export class AuthGuard implements CanActivate {

            constructor(private router: Router) { }

            canActivate(): boolean {
                const isLoggedIn = !!localStorage.getItem('token'); // simple check
                if (!isLoggedIn) {
                this.router.navigate(['/login']);
                return false;
                }
                return true;
            }
            }

            const routes = [
                { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
            ];
            `
        ]
    },
    {
        topic: 'RESOLVE GUARD',
        points: []
    },
    {
        topic: 'ROUTER EVENTS',
        points:[]
    },
    {
        topic: 'NGRX',
        points: [
            'NgRx is a state management library for Angular, inspired by Redux (used in React).',
            'It helps to manage application state globally in a predictable, scalable, testable and reactive way using RxJS.',
            'NgRx uses concepts such as actions, reducers, effects, and selectors to manipulate the state',
            'hr::',
            'NgRx is unidirectional, reactive data flow',
            'Components dispatch actions',
            'Reducers update the state in the store',
            'Selectors query data for components',
            'Effects handle side tasks outside the store',
            'hr::',
            'h:: Store',
            'A centralized container that holds the entire application state in one place.',
            'State is read-only, and only updated via actions and reducers.',
            'Acts like an in-memory database.',
            'h:: Actions',
            "Actions are plain objects that describe what happened (e.g., 'Add Product', 'Load Data'). They trigger changes in the store.",
            'h:: Reducers',
            "Reducers are pure functions that take the current state and an action, and return a new state. They decide how the state should change in response to actions.",
            'h:: Selectors',
            'Selectors are functions used to query specific slices of the state from the store.',
            "They allow components to subscribe to state reactively.",
            "h:: Effects",
            'Effects handle side effects (e.g., HTTP requests) in response to actions.',
            'They listen for specific actions, perform tasks, and then dispatch new actions with the results.'

        ]
    },
    {
        topic: 'STANDALONE COMPONENT',
        points: [
            'Standalone Component is a self-contained component',
            'It doesn’t need to be declared in any Angular module (NgModule).',
            'It declares its own dependencies',
            'Simplifies code structure, making it modular and maintainable.',
            'Better suited for lazy-loaded or shared components.',
            'lazy load component is only possible with standalone component'
        ]
    },
    {
        topic: 'SIGNALS',
        points: [
            'Signals are a reactive state management feature introduced in Angular (v16) to track and update values reactively in a simpler way',
            'Similar to how observables or state management libraries work.',
            'They help manage state reactively without the need for manual subscriptions or RxJS.',
            'hr::',
            'h:: 🔑 Key Points About Signals',
            '✅ "Signal is a reactive value": It holds data and automatically updates the view when the value changes.',
            '✅ "Reactive & Declarative": Like BehaviorSubject but simpler and more integrated with Angular’s change detection.',
            '✅ "No manual subscriptions": Components automatically re-render when a signal’s value changes.',
            '✅ "Fine-grained reactivity": Reduces unnecessary change detection cycles.',
            'hr::',
            'Signals in Angular are reactive state containers that automatically track dependencies and update the view without manual subscriptions, making state management more declarative and efficient.',
            'hr::',
            `code::
            import { Component, signal, computed, effect } from '@angular/core';

            @Component({
            selector: 'app-counter',
            template: \`
                <p>Counter: {{ counter() }}</p>
                <button (click)="increment()">Increment</button>
            \`,
            })
            export class CounterComponent {
                counter = signal(0);  // Initialize a signal

                increment() {
                    this.counter.set(this.counter() + 1);  // Update the signal
                }

                // Optional: computed signal
                doubleCounter = computed(() => this.counter() * 2);

                constructor() {
                    // Optional: side effects
                    effect(() => console.log('Counter updated:', this.counter()));
                }
            }

            `,
            'hr::',
            'h:: Angular Signal Methods',
            'Signal methods include get(), set(), update(), computed(), and effect(), allowing for reactive and declarative state management.',
            'const mySignal = signal(0)',
            'h:: 1️⃣ mySignal() – Getter',
            'Retrieves the current value of the signal.',
            'Can be used in templates or component logic.',
            'Example: console.log(mySignal());',
            'h:: 2️⃣ mySignal.set(newValue) – Setter',
            'Updates the signal’s value.',
            'Automatically triggers view updates or computed signals.',
            'Example: mySignal.set(5);',
            'h:: 3️⃣ mySignal.update(updaterFn) – Update by Function',
            'Updates the signal’s value based on its current value.',
            'Useful for incrementing, toggling, etc.',
            'Example: mySignal.update(value => value + 1);',
            'h:: 4️⃣ computed(() => ...) – Derived Signals',
            'Creates a new signal that depends on other signals.',
            'Auto-updates when dependencies change.',
            'Example: double = computed(() => mySignal() * 2);',
            'h::  5️⃣ effect(() => {...}) – Side Effects',
            'Runs whenever a dependent signal changes.',
            'Used for logging, API calls, or triggering side effects.',
            'Example: effect(() => console.log(\'Value changed:\', mySignal()));'
        ]
    },
    {
        topic: 'NEW ANGULAR UPDATES',
        points: [
            '"@if" - '
        ]
    },
    {
        topic: 'RXJS (Reactive Extensions for JavaScript)',
        points: [
            'In Angular applications, RxJS (Reactive Extensions for JavaScript) is a powerful library used for handling asynchronous and event-based programming using observables.',
            'RxJS provides a wide range of operators that enable you to manipulate, transform, combine, and manage observables in a flexible and functional way.',
            'These operators make it easier to work with data streams and asynchronous operations in a reactive manner.',
            'hr::',
            'RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using observables.',
            'It provides a powerful and flexible way to handle asynchronous data streams, such as: User interactions (clicks, inputs), HTTP requests, WebSocket streams, Intervals and timers',
            'hr::',
            '"RxJS is a reactive programming library that enables handling asynchronous data streams using Observables, providing powerful operators for managing complex event flows in Angular and JavaScript."',
            '"RxJS lets you work with streams of data as Observables, using a rich set of operators for transforming, filtering, combining, and handling errors, while Promises handle a single async result."',

            'hr::',
            'h:: 🔑 Key Concepts:',
            '"Observable": Represents a stream of data over time.',
            '"Observer": Consumes data from the Observable.',
            '"Operators": Functions like map, filter, mergeMap, switchMap, used to transform and combine streams.',
            '"Subscription": Activates the Observable stream and listens for data emissions.',
            '"Subject": A special type of Observable that allows multicasting to multiple Observers.',
            'hr::',
            'h:: 🔥 Keywords',
            '✅ Reactive programming',
            '✅ Observables & Operators',
            '✅ Asynchronous data handling',
            '✅ Streams',
            '✅ Multicasting with Subjects',
            '✅ Angular & RxJS',
            'hr::',
            'h:: 📚 Basic RxJS Example',
            `code::
            import { Observable } from 'rxjs';

            // Create an Observable
            const observable = new Observable(observer => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
            });

            // Subscribe to the Observable
            observable.subscribe({
                next: value => console.log(value),
                complete: () => console.log('Done')
            });

            Output:
            Hello  
            World  
            Done
            `,
            'h:: 📚 Common RxJS Operators',
            'Here are some must-know operators for interviews:',
            '"map": Transforms emitted values.',
            '"filter": Filters values based on a condition.',
            '"mergeMap": Flattens and merges inner observables.',
            '"switchMap": Switches to a new observable, cancelling the previous.',
            '"concatMap": Concatenates inner observables in order.',
            '"debounceTime": Delays emissions to avoid rapid triggers.',
            '"take": Takes a set number of emissions.',
            '"catchError": Catches and handles errors.',
            'hr::',
            '📚h:: Real-Life Use Cases in Angular (RxJS)',
            '🔸 HTTP Requests with HttpClient:',
            `code::
            import { HttpClient } from '@angular/common/http';
            import { Component } from '@angular/core';

            @Component({
            selector: 'app-example',
            template: \`...\`
            })
            export class ExampleComponent {
                constructor(private http: HttpClient) {}

                fetchData() {
                    this.http.get('/api/data')
                    .subscribe(data => console.log(data));
                }
            }

            `,
            '🔸 Reactive Forms Value Changes:',
            `code::
            this.myForm.get('name')?.valueChanges
            .pipe(debounceTime(300))
            .subscribe(value => console.log('Form value changed:', value));
            `,
            '🔸 Event Streams (e.g., Button Clicks):',
            `code::
            import { fromEvent } from 'rxjs';
            const button = document.querySelector('button');
            fromEvent(button, 'click')
            .subscribe(() => console.log('Button clicked!'));
            `,
            'h:: 🎨 RxJS Workflow Diagram',
            `code::
            +--------------+
            |   Observable  |
            +--------------+
                   |
                   v
            +--------------+
            |    Operator   |
            | (map, filter) |
            +--------------+
                   |
                   v
            +--------------+
            |  Subscription |
            +--------------+
                   |
                   v
            +--------------+
            |    Observer   |
            |  (next, err)  |
            +--------------+
 
            
            `,
            '✅ Stream starts from Observable, goes through Operators for transformation, is activated with Subscription, and data is handled by an Observer.',
            'h:: 📚 Subjects and Multicasting',
            '🔸 Subject acts as both an Observable and an Observer. It multicasts to multiple subscribers.',
            `code::
            import { Subject } from 'rxjs';

            const subject = new Subject<number>();

            // Subscriber 1
            subject.subscribe(value => console.log('Observer A:', value));

            // Subscriber 2
            subject.subscribe(value => console.log('Observer B:', value));

            // Emit values
            subject.next(1);
            subject.next(2);

            OUTPUT:

            Observer A: 1
            Observer B: 1
            Observer A: 2
            Observer B: 2

            `,
            '🔸 Multicasting with Subject: All observers get the same emitted values.',
            'h:: 🎨 Angular + RxJS Flowchart',
            `code::
            [User Event / HTTP Request] 
                        ↓
                [Observable Created]
                        ↓
                [Pipe Operators]  ←--- map, filter, debounceTime, switchMap...
                        ↓
                [Subscription Activated]
                        ↓
            [Observer (Component/Service) Receives Data]
                        ↓
                [Update UI / State]

            `
        ]
    },
    {
        topic: 'OBSERVABLES',
        points: [
            'Observables provide support for data sharing between publishers and subscribers in an angular application. ',
            'It is referred to as a better technique for event handling, asynchronous programming, and handling multiple values as compared to techniques like promises.',
            'In Angular, Observables are a key part of RxJS (Reactive Extensions for JavaScript), enabling asynchronous programming with streams of data.',
            'hr::',
            '✅ Observables represent streams of data that can be observed over time.',
            '✅ They are lazy (they don’t run until subscribed) and asynchronous (great for events, HTTP calls).',
            '✅ Observables can emit: Single or multiple values, Over time or immediately, Error or completion signals',
            'h:: 🌟 Observable Key Concepts',
            'Observable: The data source (stream).',
            'Observer: The consumer of the data (next, error, complete).',
            'Subscription: Activates the observable stream.',
            'Operators: Functions like map, filter, switchMap to manipulate data streams.',
            `code::
            import { Observable } from 'rxjs';

            const observable = new Observable(subscriber => {
              subscriber.next('A');
              subscriber.next('B');
              subscriber.complete();
            });
            
            observable.subscribe({
              next: value => console.log(value),
              complete: () => console.log('Done')
            });

            output:
            A
            B
            Done
            `,
            'hr::',
            'h:: 🏆 Benefits of Observables',
            'Handle async events (user clicks, HTTP requests).',
            'Support complex data flows with operators.',
            'Allow cancellation with unsubscribe.',
            'Powerful error handling with catchError.',
            'hr::',
            'h:: Hot vs Cold Observables',
            'h:: Cold Observables:',
            'Definition: Created anew for each subscriber.',
            'Starts Emitting: When a subscriber subscribes.',
            'Example: new Observable()',
            'Use Cases: HTTP calls, isolated async tasks.',
            'h:: Hot Observables:',
            'Definition: Shared among subscribers.',
            'Starts Emitting: Emits regardless of subscription.',
            'Example: Subject, BehaviorSubject, fromEvent',
            'Use Cases: UI events (clicks), WebSocket streams.',
            'h:: 🔹 Cold Observable Example:',
            `code::
            const cold$ = new Observable(subscriber => {
                subscriber.next(Math.random());
              });
              
              cold$.subscribe(value => console.log('A:', value));
              cold$.subscribe(value => console.log('B:', value));

              output:
              A: 0.123
              B: 0.789
            `,
            'h:: 🔹 Hot Observable Example:',
            `code::
            import { Subject } from 'rxjs';
            const subject = new Subject<number>();

            subject.subscribe(value => console.log('A:', value));
            subject.next(Math.random());
            subject.subscribe(value => console.log('B:', value));
            subject.next(Math.random());

            output:
            A: 0.456
            A: 0.789
            B: 0.789
            `,
            'hr::',
            'h:: 🌐 Angular’s HttpClient with Observables',
            'Angular’s HttpClient returns observables for HTTP calls.',
            `code::
            import { HttpClient } from '@angular/common/http';

            constructor(private http: HttpClient) {}

            fetchData() {
            this.http.get('/api/data')
                .subscribe(data => console.log('Data:', data));
            }

            `,
            '✅ Operators like map, catchError, and switchMap can be used on the HTTP observable to process data and handle errors.',
            'hr::',
            ''
        ]
    },
    {
        topic: 'PROMISE VS OBSERVABLES',
        points: [
            'Promises handle one asynchronous result, while Observables handle streams of data over time, support cancellation, and offer rich transformation operators.',
            'hr::',
            'A Promise represents a single future value and is immediately executed, while an Observable represents a stream of values that can be lazily processed, transformed, and canceled, enabling more complex and reactive asynchronous patterns.',
            'hr::',
            'h:: Promises',
            'Emissions: Single value.',
            'Execution: Eager (immediate).',
            'Cancellation: Not cancelable.',
            'Operators: Limited (then, catch).',
            'Multicasting: No (one consumer).',
            'Use Cases: One-time async (HTTP).',
            'Error Handling: Error Handling',
            'h:: Observables',
            'Emissions: Multiple values over time.',
            'Execution: Lazy (starts on subscribe).',
            'Cancellation: Can unsubscribe to cancel.',
            'Operators: Rich (map, filter, mergeMap, etc.).',
            'Multicasting: Yes (Subjects).',
            'Use Cases: Streams (HTTP, UI events, WebSockets).',
            'Error Handling: catchError, retry, etc.'
        ]
    },
    {
        topic: 'OPTIMIZATION',
        points: [
            'Angular optimization techniques, which help improve performance, scalability, and user experience.',
            'Angular optimizations include OnPush change detection, lazy loading, trackBy for lists, async pipes, and production builds to deliver faster and more efficient apps.',
            'h:: 1️⃣ Change Detection Strategy',
            'Use ChangeDetectionStrategy.OnPush to limit checks to only when input properties change or an event occurs.',
            'Reduces unnecessary checks and improves performance for large apps.',
            `code::
            @Component({
                selector: 'app-optimized',
                templateUrl: './optimized.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
              })
              export class OptimizedComponent { }
              
            `,
            'h:: 2️⃣ Lazy Loading Modules',
            'Load feature modules only when needed, reducing initial bundle size.',
            'Achieved via loadChildren in the router.',
            `code::
            const routes: Routes = [
                { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
              ];
              
            `,
            'h:: 3️⃣ Standalone Components with Lazy Loading',
            'Angular 15+ supports standalone components, reducing module overhead.',
            'Can also be lazy loaded with loadComponent.',
            `code::
            { path: 'dashboard', loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent) }
            `,
            'h:: 4️⃣ *TrackBy in ngFor',
            'Use trackBy to improve rendering performance when iterating lists.',
            `code::
            <li *ngFor="let item of items; trackBy: trackById">{{ item.name }}</li>

            trackById(index: number, item: Item) {
                return item.id;
              }
              
            `,
            'h:: 5️⃣ Pure Pipes',
            'Angular pipes are pure by default; avoid recalculations if inputs haven’t changed.',
            'Use pure: false only if necessary for impure pipes.',
            'h:: 6️⃣ Preloading Strategies',
            'Use built-in strategies like PreloadAllModules or custom strategies to preload routes after the app is stable.',
            `code::
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });

            `,
            'h:: 7️⃣ Use Observables & Async Pipe',
            'Combine RxJS streams with async pipe to manage subscriptions efficiently.',
            'Avoid manual unsubscribe.',
            `code::
            <div *ngIf="data$ | async as data">{{ data }}</div>
            `,
            'h:: 8️⃣ Production Build',
            'Always build with --prod flag to enable optimizations like AOT, minification, and tree-shaking.',
            `code::
            ng build --prod
            `,
            'h:: 9️⃣ Bundle Size Optimization',
            'Use lazy loading, tree-shaking, and code splitting.',
            'Monitor with source-map-explorer or webpack-bundle-analyzer.',
            'h:: 🔟 Service Worker & PWA',
            'Use Angular Service Worker (@angular/pwa) to enable offline caching and faster loading.',
            'hr::',
            'h:: 🔥 Extra Tips',
            '✅ Avoid memory leaks by unsubscribing or using async pipe.',
            '✅ Optimize images and static assets.',
            '✅ Use server-side rendering (SSR) with Angular Universal for initial page load optimization.',
            'h:: 📊 1️⃣ Diagram Summarizing Angular Optimization',
            `code::
            +--------------------------------------------------+
            |             🔥 Angular Optimization             |
            +--------------------------------------------------+
            | 🌐 Change Detection: OnPush                     |
            | 📦 Lazy Loading: Modules & Standalone Components |
            | 🔄 TrackBy: Improve *ngFor performance           |
            | 🌀 Observables & Async Pipe                      |
            | 📈 Preloading Strategies                         |
            | 🔒 Production Build (--prod)                     |
            | 📉 Bundle Size Optimization                      |
            | 🚀 Service Worker & PWA                          |
            | 💾 SSR with Angular Universal                    |
            +--------------------------------------------------+

            `,
            'h:: ✅ 2️⃣ Angular Performance Audit Checklist',
            '🔹 Component Level:',
            '✅ Use OnPush change detection where possible',
            '✅ Avoid unnecessary bindings or watchers',
            '✅ Track long lists with trackBy',
            '✅ Minimize use of ngClass/ngStyle with complex logic',
            '🔹 Template Level:',
            '✅ Use async pipe to manage subscriptions',
            '✅ Avoid complex expressions in templates',
            '✅ Optimize images and static assets',
            '🔹 Routing & Module Level:',
            '✅ Use lazy loading for feature modules',
            '✅ Implement preloading strategies',
            '✅ Break large modules into smaller ones',
            '🔹 Build & Deployment:',
            '✅ Build with --prod (enables AOT, minification, tree-shaking)',
            '✅ Monitor bundle size with source-map-explorer or webpack-bundle-analyzer',
            '✅ Enable Service Worker & PWA features',
            '🔹 Server Side:',
            '✅ Consider Angular Universal for SSR',
            '✅ Optimize server APIs to reduce client load',
            'hr::',
            'h:: 🌐 3️⃣ Real-World Example: Combine Multiple Optimizations',
            `code::
            // app-routing.module.ts
            const routes: Routes = [
            { path: 'dashboard', loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent) },
            { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }
            ];

            @NgModule({
            imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
            exports: [RouterModule]
            })
            export class AppRoutingModule { }

            `,
            `code::
            // dashboard.component.ts
            @Component({
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            })
            export class DashboardComponent {
                data$ = this.dataService.getData(); // Observable used with async pipe
            }

            `,
            `code::
            <!-- dashboard.component.html -->
            <ul>
            <li *ngFor="let item of items$ | async; trackBy: trackById">
                {{ item.name }}
            </li>
            </ul>
            `,
            `code::
            // production build command
            // Angular CLI
            ng build --prod
            `,
            `code::
            # Optional: Analyze bundle size
            npx source-map-explorer dist/main.*.js
            `,
            'hr::',
            'Angular optimizations include OnPush change detection, lazy loading (modules and standalone components), preloading, trackBy in *ngFor, efficient use of observables and async pipes, production builds with tree-shaking, and PWA/SSR support for the fastest, most scalable applications.',
            'hr::',
            'h:: 📘 Mini Angular Optimization Cheat Sheet',
            '🔹 "Change Detection" - Use OnPush where possible to limit unnecessary checks.',
            '🔹 "Lazy Loading" - Lazy load feature modules or standalone components using loadChildren and loadComponent.',
            '🔹 "Preloading" - Use PreloadAllModules or custom strategies to improve user experience.',
            '🔹 "Rendering Lists" - Use trackBy in *ngFor to improve diffing performance.',
            '🔹 "Observables" - Use async pipe to manage subscriptions and avoid manual unsubscribe.',
            '🔹 "Build Optimization" - Always build with --prod, enables AOT, minification, tree-shaking.',
            '🔹 "Bundle Size" - Use source-map-explorer or webpack-bundle-analyzer to monitor and reduce size.',
            '🔹 "Service Worker" - Add PWA support for caching and offline capabilities.',
            '🔹 "SSR (Angular Universal)" - Use for faster initial render and SEO optimization.',
            '🔹 "Assets" - Optimize images, use CDNs, lazy load images/videos where possible.',
            'h:: 🎨 Visual Diagram Comparing Change Detection Strategies',
            `code::
            +-------------------------------------------------------------+
            |                  🔄 Change Detection in Angular              |
            +------------------+------------------+-----------------------+
            | Strategy         | Default          | OnPush                |
            +------------------+------------------+-----------------------+
            | Checks All Components | Yes          | No (only on input change or event) |
            | Performance Cost   | Higher          | Lower (faster)       |
            | Suitable for       | Small apps      | Large apps with immutable data |
            | Usage              | Automatic       | Add \`ChangeDetectionStrategy.OnPush\` |
            +-------------------------------------------------------------+

            `,
            'hr::',
            'h:: 💡 How to Measure Angular Performance',
            '1️⃣ Using Chrome DevTools:',
            'Open DevTools → Performance tab → Record interactions.',
            'Look for long tasks, rendering time, and scripting cost.',
            '2️⃣ Using Lighthouse (Built-in or Online):',
            'Open Chrome DevTools → Lighthouse tab.',
            'Run audit for Performance, Best Practices, Accessibility, SEO.',
            'Focus on metrics like First Contentful Paint (FCP), Time to Interactive (TTI), and Largest Contentful Paint (LCP).',
            '3️⃣ Using source-map-explorer:',
            `code::
            npm install -g source-map-explorer
            ng build --prod
            npx source-map-explorer dist/main.*.js
            `,
            'Visualize bundle sizes and identify large modules.',
            '4️⃣ Angular DevTools (Chrome Extension):',
            'Inspect component trees, change detection cycles, and detect performance bottlenecks.',
            'hr::',
            '"Angular performance optimization combines OnPush change detection, lazy loading, trackBy, async pipes, production builds, SSR, and PWA caching. Monitoring tools like Lighthouse, DevTools, and source-map-explorer help measure and improve performance."',
            'hr::',
        ]
    },
    {
        topic: 'IVY (ANGULAR\'S RENDERING ENGINE)',
        points: [
            '"Angular performance optimization combines OnPush change detection, lazy loading, trackBy, async pipes, production builds, SSR, and PWA caching. Monitoring tools like Lighthouse, DevTools, and source-map-explorer help measure and improve performance."',
            '" It improves performance, reduces bundle size, and enhances debugging."',
            'h:: 🔸 Key Features of Ivy',
            '"Tree-Shaking" - Removes unused code to reduce bundle size.',
            '"Faster Compilation" - Speeds up both AOT (Ahead-of-Time) and JIT (Just-in-Time) compilation.',
            '"Incremental Builds" - Recompiles only changed parts of the app.',
            '"Better Debugging" - Generates more human-readable code, easier to debug with tools.',
            '"mproved Type Checking" - Template type checking for early error detection.',
            '"Lazy Loading Enhancements" - Smaller bundles for lazily loaded modules.',
            'h:: 🔸 How Ivy Works',
            'Compiles components locally, reducing the scope of recompilation.',
            'Generates ngFactory and ngTypeDefs for templates and types.',
            'Uses incremental DOM to optimize rendering.',
            'Supports dynamic component rendering and runtime i18n (internationalization).',
            'h:: 🔸 Benefits of Ivy',
            '✅ Smaller bundle sizes due to tree-shaking.',
            '✅ Improved build and rebuild times.',
            '✅ Better runtime performance.',
            '✅ More powerful and flexible debugging tools.',
            '✅ Seamless backwards compatibility with existing Angular code.',
            'h:: 🔸 Ivy vs ViewEngine',
            'h:: ViewEngine',
            '"Compilation" - Full app recompilation',
            '"Tree Shaking" - Basic',
            '"Debugging" - Complex',
            '"Rendering" - Verbose, generated code',
            '"Bundle Size" - Larger',
            '"Performance" - Slower in some cases',
            'h:: Ivy',
            '"Compilation" - Local & incremental',
            '"Tree Shaking" - Advanced',
            '"Debugging" - Better (more readable)',
            '"Rendering" - Incremental DOM',
            '"Bundle Size" - Smaller',
            '"Performance" - Improved',
            'hr::',
            'h:: 🔸 Common Interview Q&A',
            '❓ "What’s the difference between Ivy and the previous compiler?"',
            '👉 Ivy uses local compilation and generates more efficient code, while the older ViewEngine compiled the whole app and generated verbose output.',
            '❓ "How does Ivy improve performance?"',
            '"👉 Ivy’s incremental DOM reduces overhead and updates only what’s necessary. Tree-shaking eliminates unused code, resulting in faster load times."',
            '❓ "Is Ivy backwards compatible?"',
            '👉 Yes! It works with existing code without changes, and libraries built with ViewEngine can work with Ivy.',
            'hr::',
            'h:: 🔸 Real-World Example',
            'When you build your Angular app (v9+), Ivy is enabled by default:  -  ng build --prod',
            'Ivy optimizes the build, generates efficient code, and applies tree-shaking.',
            'h:: 🔸 Bonus – Interview One-Liner',
            '"Ivy is Angular\'s modern rendering engine that makes apps faster, lighter, and easier to debug by using incremental DOM, tree-shaking, and advanced compilation strategies."'
        ]
    },
    {
        topic: 'ANGULAR COMPILER - AOT, JIT',
        points: [
            '"AOT compiles Angular code at build time, resulting in faster performance, smaller bundles, and fewer runtime errors—ideal for production. JIT compiles at runtime, better suited for development with dynamic changes."',
            'h:: AOT (Ahead-of-Time)',
            'When Compilation Happens - During build time (before the browser runs it)',
            'Purpose - Pre-compiles Angular HTML templates & TypeScript into efficient JavaScript',
            'Output - Highly optimized JavaScript code',
            'Angular CLI Command - ng build --prod',
            'h:: JIT (Just-in-Time)',
            'When Compilation Happens - During runtime (in the browser)',
            'Purpose - Compiles templates & TypeScript in the browser, at runtime',
            'Output - Compiled code happens on-the-fly',
            'Angular CLI Command - ng serve',
            'hr::',
            'h:: 🔸 Key Differences',
            'h:: 🔥 AOT',
            'Performance - Faster load, optimized',
            'Bundle Size - Smaller, tree-shaken',
            'Template Errors - Caught during build',
            'Use Cases - Production builds',
            'Security - More secure (XSS mitigations)',
            'h:: ⚡ JIT',
            'Performance - Slower load, as compilation happens at runtime',
            'Bundle Size - Larger, contains extra compiler code',
            'Template Errors - Caught during runtime',
            'Use Cases - Development builds',
            'Security - Less secure',
            'h:: 🔸 Real-World Example',
            `code::
            # JIT (default for development)
            ng serve, ng build (default)

            # AOT (default for production)
            ng build --prod, ng build --aot
            `,
            'In JIT, Angular compiles the templates and code in the browser when the app starts.',
            'In AOT, Angular compiles everything at build time, so the browser just loads ready-to-run JavaScript.',
            'h:: 🔸 Advantages of AOT',
            '✅ Faster app startup (no runtime compilation)',
            '✅ Smaller bundles (tree-shaking of unused code)',
            '✅ Early detection of template errors',
            '✅ Better security (template expressions are precompiled and sanitized)',
            'h:: 🔸 Advantages of JIT',
            '✅ Easier and faster development builds',
            '✅ Supports dynamic templates or runtime compilation (rarely used in modern Angular)',

        ]
    },
    {
        topic: 'UNIT TESTING',
        points: [
            ' Unit testing is a type of software testing where individual units/components (like a function, service, or component) are tested in isolation to ensure they work correctly.',
            'h:: 🔸 Purpose of Unit Testing',
            'Verify correct behavior of a unit (component/service/directive/pipe).',
            'Detect bugs early during development.',
            'Improve code quality and maintainability.',
            'Facilitate refactoring and future enhancements.',
            'h:: Key Tools in Angular',
            'Jasmine - Testing framework providing describe, it, expect.',
            'Karma - Test runner used to launch browsers and run tests.',
            'TestBed - Angular testing utility to configure testing modules.',
            'ng test - Angular CLI command to run unit tests.',
            'h:: 🔸 Key Concepts',
            '✅ Arrange, Act, Assert (AAA) – structure of unit tests',
            '✅ Mocks and Spies – simulate dependencies',
            '✅ TestBed – sets up an Angular testing module for isolated tests',
            '✅ Asynchronous Testing – handle observables, promises, async code',
            '✅ Code Coverage – measure how much code is covered by tests',
            'hr::',
            '"Jasmine provides functions like describe, it, beforeEach, expect, and spyOn to structure and assert unit tests. It supports spies for mocking, async handling with done or fakeAsync, and selective running with fit or xit."',
            '🔸 Unit tests focus on testing individual units of code (like functions, services, or components) in isolation, ensuring they work correctly without depending on external parts.',
            '🔸 Integration tests check how multiple units of code work together, making sure that services and components integrate properly and produce the expected results when combined.',
            '🔸 End-to-end (e2e) tests simulate a real user journey by testing the entire application from start to finish, verifying that everything works together as expected, including backend, UI, and user interactions.',


        ]
    },
    {
        topic: 'COMMUNICATION (DATA SHARING)',
        points: [
            'In Angular, components and services often need to share data or communicate with each other. This is achieved through multiple communication techniques, depending on the relationship between the communicating parts.',
            'In Angular, data sharing can happen from parent to child using @Input(), from child to parent with @Output() and EventEmitter, between siblings using a shared service with Observables, and across the app using state management solutions like NgRx or Signals.',
            'h:: 🔸 1️⃣ Parent to Child Communication',
            '✅ @Input() Decorator',
            'Allows a parent component to pass data down to its child component via property binding.',
            `code::
            <child-component [childData]="parentData"></child-component>

            @Input() childData: string;

            `,
            'h:: 🔸 2️⃣ Child to Parent Communication',
            '✅ @Output() Decorator with EventEmitter',
            'Allows a child component to send data or events up to its parent.',
            `code::
            @Output() notifyParent = new EventEmitter<string>();

            <button (click)="notifyParent.emit('Data from child')">Send</button>

            `,
            '🔸h::  3️⃣ Sibling Communication',
            '✅ Shared Service with Observable/Subject',
            'When components are not directly related (siblings), a shared service can facilitate communication.',
            'The service can use Subjects or BehaviorSubjects to hold and broadcast shared data.',
            'h:: 🔸 4️⃣ Across the Application (Unrelated Components (Global Communication))',
            '✅ State Management Tools (e.g., NgRx, Signals)',
            'For complex applications, NgRx or Signals can be used to manage and share data across multiple components and modules in a reactive, scalable way.',
            'Use a global event bus or shared service to manage state or events.',
            'you can also use NgRx or RxJS Subjects/BehaviorSubjects.'

        ]
    },
    {
        topic: 'ROUTE DATA SHARING',
        points: [
            'In Angular, Routes can carry and share data in multiple ways, both static and dynamic:',
            'h:: 🔸 1️⃣ Static Data Sharing (via data property in routes)',
            'The data property in the Route configuration can hold static information (like page titles, roles, or flags) that components can access via the ActivatedRoute.',
            `code::
            const routes: Routes = [
                { 
                  path: 'dashboard',
                  component: DashboardComponent,
                  data: { title: 'Dashboard', requiresAuth: true }
                }
              ];

              constructor(private route: ActivatedRoute) {
                this.route.data.subscribe(data => {
                  console.log(data.title);  // 'Dashboard'
                });
              }
              
            `,
            'h:: 🔸 2️⃣ Dynamic Data Sharing (via Route Parameters)',
            'Route parameters (:id, :slug, etc.) allow passing dynamic values through the URL.',
            `code::
            const routes: Routes = [
                { path: 'product/:id', component: ProductComponent }
              ];

              constructor(private route: ActivatedRoute) {
                this.route.params.subscribe(params => {
                  console.log(params['id']);  // Dynamic product ID
                });
              }
              
            `,
            'h:: 🔸 3️⃣ Query Parameters',
            'Query params provide flexible data sharing through URL:',
            'Example URL: /products?page=2&sort=price',
            `code::
            this.route.queryParams.subscribe(params => {
                console.log(params['page']);  // '2'
              });
              
            `,
            'h:: 🔸 4️⃣ State Transfer via Navigation Extras',
            'Angular’s Router.navigate() can pass state objects during navigation.',
            `code::
            this.router.navigate(['/details'], { state: { product: { id: 1, name: 'Book' } } });

            const product = history.state.product;

            `
        ]
    },
    {
        topic: 'INTERFACE',
        points: [
            '✅ An interface in TypeScript (and Angular) is a blueprint that defines the structure of an object or class.',
            '✅ It specifies what properties and methods an object should have, without providing implementation.',
            '✅ Interfaces promote type safety and code clarity.',
            'h:: 📘 Key Characteristics',
            '🔸 No runtime impact – used purely at compile time for type checking.',
            '🔸 Defines shape, not behavior.',
            '🔸 Can extend multiple interfaces to combine types.',
            'h:: 🌟 Why Use Interfaces in Angular?',
            '✅ Strong typing for models (like Product, User, Order).',
            '✅ Improves developer productivity and reduces bugs.',
            '✅ Helps in service responses and component inputs/outputs.',
            '✅ Defines contracts for classes and services.',
            'hr::',
            '"An interface in Angular is a blueprint that defines the structure of data, ensuring type safety and clarity. It allows developers to define consistent data models, improving maintainability and reducing runtime errors."',
            'hr::',
            `code::
            // Define an interface
            export interface Product {
                id: number;
                name: string;
                price: number;
                description?: string;  // optional
            }

            // Using the interface
            const product: Product = {
                id: 1,
                name: "Book",
                price: 100
            };

            `
        ]
    },
    {
        topic: 'TEMPLATE REFERENCE',
        points: [
            '✅ A template reference variable (also called template ref) is a variable declared in the template (HTML) that gives you a reference to a DOM element, a component, or a directive.',
            '✅ It allows you to interact with elements or call methods from within the template.',
            'h:: 📘 Syntax',
            `code::
            <input #myInput type="text">
            <button (click)="log(myInput.value)">Log Value</button>

            @ViewChild('myInput') input: ElementRef

            Here, #myInput is a template ref referring to the <input> element.
            @ViewChild available in typescript class, Programmatic access

            `,
            'h:: 🔸 Where can we use it?',
            'Access native DOM elements (e.g., <input> value or element properties).',
            'Access Angular components (e.g., call a child component’s method).',
            'Access directives (e.g., working with ngModel, ngForm).',
            'h:: 🔨 Example: Access Child Component',
            `code::
            <child-component #childComp></child-component>
            <button (click)="childComp.doSomething()">Call Child Method</button>

            `,
            '"Template reference variables in Angular allow us to create a local variable in the template that refers to a DOM element, a component, or a directive, making it easy to interact with them directly from the template."',
            '"Template reference variables provide a way to refer to elements, components, or directives directly from the template, useful for quick access and interaction. For programmatic access in TypeScript, we use @ViewChild, which offers more flexibility but requires class code."'
        ]
    },
    {
        topic: 'APPLICATION BOOTSTRAP',
        points: [
            '✅ Bootstrapping is how Angular starts your app.',
            '✅ It begins at main.ts, loading AppModule.',
            '✅ AppModule declares AppComponent, which replaces <app-root>.',
            '✅ The platformBrowserDynamic().bootstrapModule(AppModule) command kicks everything off!',
            'h:: Main Components of Bootstrapping',
            'main.ts - Entry point of the Angular application.',
            'AppModule - The root module (NgModule) which declares components, imports modules, and sets up providers.',
            'AppComponent - The root component that gets loaded into the DOM.',
            'platformBrowserDynamic - Function that bootstraps the Angular module (used for dynamic JIT compilation).',
            'hr::',
            'h:: 🔥 How Bootstrapping Works',
            '1️⃣ main.ts tells Angular to bootstrap the AppModule.',
            '2️⃣ AppModule declares the AppComponent (the root component).',
            '3️⃣ Angular replaces the <app-root></app-root> tag in index.html with the AppComponent template.'
        ]
    },
    {
        topic: 'ANGULAR FORMS',
        points: [
            'Angular provides two powerful ways to handle forms:',
            '1️⃣ Template-driven forms – Simple and declarative.',
            '2️⃣ Reactive forms – More powerful, flexible, and scalable.',
            'h:: 1️⃣ Template-driven Forms',
            'Defined in the HTML using Angular directives like ngModel.',
            'Easy to set up but less scalable for complex forms.',
            '✅ Suitable for simple forms',
            '✅ Requires FormsModule',
            `code::
            <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
                <input name="username" ngModel required>
                <input type="password" name="password" ngModel required>
                <button type="submit">Submit</button>
            </form>

            onSubmit(form: NgForm) {
                console.log(form.value); // { username: '...', password: '...' }
              }
              
            `,
            'h:: 2️⃣ Reactive Forms',
            'Defined in TypeScript using FormGroup, FormControl, and FormBuilder.',
            'Scalable, testable, and easier to work with dynamic forms.',
            '✅ Requires ReactiveFormsModule',
            '✅ Powerful for complex forms and custom validations.',
            `code::
            import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

            form = new FormGroup({
                username: new FormControl('', Validators.required),
                password: new FormControl('', Validators.required)
            });

            OR using FormBuilder:

            constructor(private fb: FormBuilder) {}

            form = this.fb.group({
                username: ['', Validators.required],
                password: ['', Validators.required]
            });

            onSubmit() {
                console.log(this.form.value);
            }
              

            <form [formGroup]="form" (ngSubmit)="onSubmit()">
                <input formControlName="username">
                <input type="password" formControlName="password">
                <button type="submit">Submit</button>
            </form>



            `,
            'h:: 🔑 Common Concepts',
            'h:: Template-driven',
            'Form Setup - HTML',
            'Validation - Directives',
            'Scalability - Less',
            'Use - Simple forms',
            'Modules - FormsModule',
            'h:: Reactive',
            'Form Setup - TypeScript',
            'Validation - Validators',
            'Scalability - High',
            'Use - Complex forms',
            'Modules - ReactiveFormsModule',
            'h:: 🔥 Custom Validators',
            `code::

            import { AbstractControl, ValidatorFn } from '@angular/forms';

            export function customValidator(): ValidatorFn {
                return (control: AbstractControl) => {
                    return control.value === 'admin' ? { 'invalidName': true } : null;
                };
            }

            this.form = this.fb.group({
                username: ['', [Validators.required, customValidator()]]
            });

            `,
            'h:: 🏗 Summary',
            '✅ Angular provides Template-driven and Reactive Forms.',
            '✅ Template-driven is simple but less scalable.',
            '✅ Reactive forms are powerful, testable, and better for dynamic/complex forms.',
            '✅ Custom validators and async validations are easy in Reactive Forms.',
            'h:: 🛠 Custom Async Validators in Angular',
            'An async validator checks the validity of a form control asynchronously (e.g., via an HTTP call) and returns a Promise or Observable.',
            'Check if a username or email is already taken (by querying a backend).',
            'Validate data against external systems.'
        ]
    },
    {
        topic: 'PACKAGE.JSON, PACKAGE-LOCK.JSON, ANGULAR.JSON',
        points: [
            'h:: 📦 1️⃣ package.json',
            'This file is the heart of the project’s dependencies and configurations.',
            'Project metadata, dependencies, and scripts.',
            '✅ Lists dependencies, devDependencies, and scripts.',
            '✅ Defines project metadata (name, version, etc.).',
            '✅ Specifies compatible Node versions.',
            '🔑 Key Points:',
            'dependencies: Required for running the app',
            'devDependencies: Needed for development (e.g., TypeScript, testing tools).',
            'scripts: Shortcuts for common commands.',
            'h:: 🔒 2️⃣ package-lock.json',
            'This file locks exact versions of installed packages and their dependencies.',
            'Exact versions of installed dependencies.',
            '✅ Ensures consistent installs across environments.',
            '✅ Generated automatically by npm install.',
            '🔑 Key Points:',
            'Not meant for manual editing.',
            'Helps maintain exact dependency versions.',
            'h:: ⚙️ 3️⃣ angular.json',
            'This is Angular CLI’s workspace configuration file.',
            'Angular CLI configuration (build, serve, paths).',
            '✅ Controls project structure, build settings, and CLI options.',
            '✅ Configures build targets, assets, styles, and scripts.',
            '🔑 Key Points:',
            'build.options: Controls paths, assets, styles, scripts.',
            'serve.options: Configures dev server.',
            'defaultProject: Default app for CLI commands.'
        ]
    },
    {
        topic: 'COMPONENT INTERACTION',
        points: [
            'event emitter, view child, query list, hostlistener, host binding'
        ]
    },
    {
        topic: 'DOM MANIPULATION & VIEW QUERIES',
        points: [
            'Angular’s design prefers declarative templates and data binding over direct DOM manipulation. However, there are cases where you may need to interact with the DOM directly.',
            'h:: ✅ Options for DOM Manipulation:',
            '1️⃣ Renderer2 – Safe, platform-agnostic way.',
            '2️⃣ ElementRef – Direct access to native elements (use with caution).',
            '3️⃣ ViewChild/ViewChildren – Access elements and components in the view.',
            'hr::',
            'h:: 🔹 Renderer2 Example',
            `code::
            import { Renderer2, ElementRef } from '@angular/core';

            constructor(private renderer: Renderer2, private el: ElementRef) {}

            ngOnInit() {
                const div = this.el.nativeElement.querySelector('div');
                this.renderer.setStyle(div, 'color', 'blue');
            }

            `,
            'h:: ✅ Why Renderer2?',
            'Ensures platform compatibility (browser, server-side rendering).',
            'More secure than direct DOM access.',
            'hr::',
            'h:: 🔹 ElementRef Example',
            `code::
            @ViewChild('myDiv') myDiv!: ElementRef;

            ngAfterViewInit() {
                this.myDiv.nativeElement.style.backgroundColor = 'yellow';
            }

            <div #myDiv>I'm a div!</div>

            `,
            '"⚠️ Caution: ElementRef exposes native elements, which can introduce security risks (like XSS)."',
            'hr::',
            'h:: 👀 2️⃣ View Queries',
            '✅ View Queries allow you to get references to:',
            'Template elements (DOM elements, components, directives).',
            'Dynamic elements (created via *ngIf, *ngFor).',
            'hr::',
            'h:: 🔹 Key Decorators:',
            '@ViewChild() - Query a single element/component/directive.',
            '@ViewChildren() - Query multiple elements/components/directives.',
            '@ContentChild() - Query projected content (from ng-content).',
            '@ContentChildren() - Query multiple projected items.',
            'h:: 🔹 @ViewChild() Example',
            `code::
            @ViewChild('myButton') button!: ElementRef;

            ngAfterViewInit() {
                this.button.nativeElement.textContent = 'Clicked!';
            }

            <button #myButton>Click me</button>

            `,
            'h:: 🔹 @ViewChildren() Example',
            `code::
            @ViewChildren('items') items!: QueryList<ElementRef>;

            ngAfterViewInit() {
                this.items.forEach(item => {
                    item.nativeElement.style.fontWeight = 'bold';
                });
            }


            <ul>
             <li #items *ngFor="let item of data">{{ item }}</li>
            </ul>


            `,
            'h:: 🔹 Lifecycle Hooks',
            'ngAfterViewInit() – When view (and its children) are initialized.',
            'ngAfterContentInit() – When projected content (ng-content) is initialized.',
            'hr::',
            'h:: 🔑 Summary Table',
            'DOM Manipulation - Renderer2, ElementRef, RendererFactory2',
            'View Queries - @ViewChild(), @ViewChildren(), @ContentChild(), @ContentChildren()',
            'Best Practice - Use Renderer2 and queries instead of raw DOM APIs for security and compatibility',

            'hr::',
            'Here’s a simple visualization showing how Renderer2, ElementRef, View Queries, and TemplateRef/ViewContainerRef fit together:',
            `code::
            [Angular Component]
            |
            ├── View Queries:
            │      ├─ @ViewChild('ref') ──> [Native Element] or [Component Instance]
            │      ├─ @ViewChildren('ref') ──> [QueryList of Elements]
            │      └─ @ContentChild / @ContentChildren ──> [Projected Content]
            |
            ├── DOM Manipulation:
            │      ├─ Renderer2 ──> Safe manipulation (add styles, attributes, classes)
            │      └─ ElementRef ──> Direct nativeElement access (use carefully)
            |
            └── Dynamic DOM:
                   ├─ TemplateRef ──> Embedded template reference
                   └─ ViewContainerRef ──> Insert or remove views dynamically
      
            `,
            'h:: 🔨 Complete Code Example',
            `code::
            import { Component, ElementRef, Renderer2, ViewChild, ViewChildren, QueryList, TemplateRef, ViewContainerRef, AfterViewInit, ContentChild } from '@angular/core';

            @Component({
            selector: 'app-demo',
            template: \`
                <h2 #header>Angular DOM & View Queries Demo</h2>
                <button #myButton (click)="changeButton()">Click Me</button>
                <ul>
                <li #items *ngFor="let item of data">{{ item }}</li>
                </ul>

                <ng-template #dynamicTemplate>
                <p>This is a dynamically added paragraph!</p>
                </ng-template>

                <ng-content></ng-content>
            \`
            })
            export class DemoComponent implements AfterViewInit {
            @ViewChild('header') header!: ElementRef;
            @ViewChild('myButton') button!: ElementRef;
            @ViewChildren('items') items!: QueryList<ElementRef>;
            @ViewChild('dynamicTemplate') template!: TemplateRef<any>;
            @ContentChild('projectedContent') projected!: ElementRef;

            data = ['Item 1', 'Item 2', 'Item 3'];

            constructor(private renderer: Renderer2, private viewContainer: ViewContainerRef) {}

            ngAfterViewInit() {
                // ElementRef: Direct DOM access (use carefully)
                this.header.nativeElement.style.color = 'blue';

                // Renderer2: Safer DOM manipulation
                this.renderer.setStyle(this.button.nativeElement, 'backgroundColor', 'green');

                // ViewChildren: Apply style to all list items
                this.items.forEach(item => {
                this.renderer.setStyle(item.nativeElement, 'fontWeight', 'bold');
                });

                // Dynamically add TemplateRef content
                this.viewContainer.createEmbeddedView(this.template);

                // Access projected content (from ng-content)
                if (this.projected) {
                this.renderer.setStyle(this.projected.nativeElement, 'border', '1px solid red');
                }
            }

            changeButton() {
                this.button.nativeElement.textContent = 'Clicked!';
            }
            }

            🔹 Parent Component with ng-content:

            <app-demo>
                <p #projectedContent>Projected content here!</p>
            </app-demo>


            `,
            'h:: 🔍 ViewContainerRef & TemplateRef',
            '✅ TemplateRef',
            'Represents a reference to an <ng-template>.',
            'Defines "what to render" but doesn’t render by itself.',
            '✅ ViewContainerRef',
            'Represents a container where one or more views (from TemplateRef) can be inserted or removed dynamically.',
            'Defines "where to render".',
            `code::
            @ViewChild('template') template!: TemplateRef<any>;
            constructor(private viewContainer: ViewContainerRef) {}

            // Add dynamic view
            this.viewContainer.createEmbeddedView(this.template);

            // Clear all dynamic views
            this.viewContainer.clear();

            `,
            'h:: ✅ Key Takeaways',
            '"Renderer2" - Safe DOM manipulation (styles, classes, attributes)',
            '"ElementRef" - Direct DOM access (caution: security risks)',
            '"@ViewChild/@ViewChildren" - Access view elements/components/directives',
            '"@ContentChild/@ContentChildren" - Access projected content',
            '"TemplateRef" - Blueprint of a template',
            '"ViewContainerRef" - Dynamic insertion/removal of views',
            '"Lifecycle Hooks" - Use ngAfterViewInit/ngAfterContentInit to access DOM elements/queries',
            'hr::',
            'h:: further checks',
            '🏗 Build a mini-app demonstrating all concepts?',
            '🎨 Show a diagram of dynamic view rendering?',
            '📚 Include unit tests for DOM queries and dynamic views?'
        ]
    },
    {
        topic: '@ DECORATORS',
        points: [
            'Angular’s decorators are metadata markers that define how classes, properties, and parameters participate in Angular’s DI, templating, and view/query systems, with @Component, @Directive, @Pipe, @Injectable, and others.',
            'h:: 🌟 Class Decorators',
            'These are used to declare classes as Angular entities.',
            '✅ @NgModule – Declares a class as an Angular module, defining components, services, etc.',
            '✅ @Component – Declares a class as a component, specifying selector, template, etc.',
            '✅ @Directive – Declares a class as a directive for custom behavior on DOM elements.',
            '✅ @Pipe – Declares a class as a pipe, defining a transformation for displayed values.',
            '✅ @Injectable – Declares a class as injectable for the DI system.',
            '🌟 h:: Property Decorators',
            'Used to decorate properties of classes.',
            '✅ @Input() – Marks a property as an input property, accepting data from a parent.',
            '✅ @Output() – Marks a property as an output property, emitting events to parent.',
            '✅ @HostBinding() – Binds a property to a host element\'s property/attribute.',
            '✅ @ContentChild() – Queries a single content child projected into the component.',
            '✅ @ContentChildren() – Queries multiple content children projected into the component.',
            '✅ @ViewChild() – Queries a single child view within the component\'s template.',
            '✅ @ViewChildren() – Queries multiple child views within the component\'s template.',
            '✅ @Self() – Specifies that the dependency should be resolved from the local injector.',
            '✅ @Optional() – Marks the dependency as optional for DI (null if not found).',
            '✅ @SkipSelf() – Skips the local injector and looks in the parent injector.',
            '✅ @Host() – Restricts DI to look only at the host component.',
            'h:: 🌟 Parameter Decorators',
            'Used on constructor parameters for DI.',
            '✅ @Inject() – Specifies a custom provider token for DI.',
            '✅ @Attribute() – Injects a host element attribute value.',
            'hr::',
            'h:: 🔥 Unique or Advanced Decorators',
            '🔸 @ContentChild / @ContentChildren – For projected content.',
            '🔸 @Self / @SkipSelf / @Host / @Optional – For fine-grained DI control.',
            '🔸 @Inject – When using InjectionToken or class-based tokens.'
        ]
    },
    {
        topic: 'DESIGN SYSTEM',
        points: [
            'A Design System is a collection of reusable components, patterns, styles, and guidelines that ensure consistency across a UI.',
            '🔹 It includes:',
            'UI components (buttons, inputs, cards)',
            'Color palettes, typography',
            'Layout grids, spacing',
            'Usage guidelines and accessibility rules',
            'Component documentation',
            'h:: 🎨 Why Use a Design System in Angular?',
            'Benefits:',
            '✅ **Consistency** - Same look and feel across pages/modules',
            '⚡ **Speed** - Reuse tested, styled components ',
            '🧪 **Testability** - Pre-tested, modular components ',
            '📐 **Scalability** - Easily extend UI with unified rules',
            '♿ **Accessibility** - Shared a11y standards across components',
            'Popular Angular Design Systems - Angular Material, PrimeNG, NG-ZORRO, Clarity, Nebular',
            'Build your own - Use ng generate library, SCSS tokens, Storybook'

        ]
    },
    {
        topic: 'Angular architecture',
        points: [
            'h:: ** Design System is in above **',
            'h:: 1. 🧠 State Management System',
            'Purpose: Handles application-level state, data flow, and side effects.',
            'Tool/Library:',
            'NgRx - Redux-style state management for Angular',
            'NGXS - Simpler, decorator-based state system',
            'Akita - Entity state management',
            'RxJS Services - Lightweight reactive approach',
            '➡️ Comparable in scope and complexity to a design system.',
            'h:: 2. 🔐 Authentication & Authorization System',
            'Purpose: Manages user identity, roles, permissions, access control.',
            'Tools/Concepts:',
            'Auth0 / Firebase Auth - OAuth, JWT-based identity',
            'Angular Route Guards - Protect routes',
            'Role-based Component Control - Based on user roles/claims',
            '➡️ Sits outside of design system but just as critical.',
            'h:: . 🌐 Internationalization (i18n) & Localization',
            'Purpose: Enables multi-language support and culture-specific formatting.',
            'Tools:',
            'Angular i18n - Built-in translation system',
            'ngx-translate - More flexible and dynamic alternative',
            'ICU Message Formatting - Complex message templates',
            '➡️ Typically maintained separately, like a design system.',
            'h:: 4. 🛠️ Build & DevOps Tooling',
            'Purpose: Automates builds, deploys, linting, formatting, testing.',
            'Tools:',
            'Angular CLI / Nx - Project scaffolding, mono-repo management',
            'Webpack / Vite - Module bundling and optimizations',
            'Husky + Lint-Staged - Pre-commit hooks',
            'Docker - Containerized deployments',
            '➡️ Parallel ecosystem managing dev workflow.',
            'h:: 5. 🧪 Testing Strategy',
            'Purpose: Ensures application correctness, reliability, and quality.',
            'Types:',
            'Unit Tests - Jasmine + Karma / Jest',
            'Integration Tests - TestBed / Spectator',
            'E2E Tests - Cypress / Playwright',
            'Visual Regression - Percy / Chromatic',
            '➡️ Fully separate concern from design systems, but often interlinked in workflows.',
            'h:: 6. 🧬 API Integration Layer',
            'Purpose: Abstracts backend communication, error handling, and services.',
            'Tools:',
            'Angular HttpClient - Core API tool',
            'API Services - Encapsulate endpoints, often generated from Swagger',
            'Interceptors - Global headers, error handling',
            'GraphQL - Apollo client integration',
            '➡️ A core architectural pillar in parallel with UI/UX systems.',
            'h:: 7. 🧩 Micro Frontend Architecture',
            'Purpose: Splits large apps into independently deployable modules.',
            'Techniques:',
            'Module Federation - Load apps at runtime',
            'Web Components - Isolate parts of the app',
            'Nx Plugins - Monorepo tooling support',
            '➡️ A strategic decision just like implementing a design system.',
            'hr::',
            'h:: 🧠 Summary: Concepts Parallel to a Design System',
            'Domain: 🎨 Design System',
            'Role in Architecture: Unified UI/UX components & style',
            'hr::',
            'Domain: 🧠 State Management',
            'Role in Architecture: Application state & data flow',
            'hr::',
            'Domain: 🔐 Auth System',
            'Role in Architecture: Identity, login, role access',
            'hr::',
            'Domain: 🌐 i18n',
            'Role in Architecture: Multi-language support',
            'hr::',
            'Domain: 🛠️ Build/Tooling',
            'Role in Architecture: CI/CD, lint, bundle, test',
            'hr::',
            'Domain: 🧪 Testing Strategy',
            'Role in Architecture: Quality and regression coverage',
            'hr::',
            'Domain: 🌉 API Layer',
            'Role in Architecture: Communication with backend',
            'hr::',
            'Domain: 🧩 Micro Frontends',
            'Role in Architecture: App modularization strategy',
            'hr::',

        ]
    },
    {
        topic: 'ROUTERLINKACTIVE (routerLinkActive)',
        points: [
            'In Angular, routerLinkActive is a directive that adds a class to an element when the associated route is active',
            'commonly used to highlight navigation links.',
            'h:: ✅ Basic Usage',
            `code::
            <a routerLink="/home" routerLinkActive="active">Home</a>
            `,
            'When the route is /home, this <a> element will get the class active.',
            'h:: ✅ Example with Multiple Classes',
            `code::
            <a routerLink="/dashboard" routerLinkActive="active-link bold-link">Dashboard</a>
            `,
            'h:: ✅ Usage with <li> or Custom Tag',
            'Apply it to the parent of the <a> tag:',
            `code::
            <li routerLinkActive="active">
                <a routerLink="/about">About</a>
            </li>

            `,
            'h:: ✅ Exact Matching',
            'By default, routerLinkActive matches child routes too. Use [routerLinkActiveOptions] to only match exact path.',
            `code::
            <a routerLink="/home" routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }">
             Home
            </a>
            `,
            'h:: ✅ Inside Component HTML Example',
            `code::
            <nav>
                <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
                <a routerLink="/users" routerLinkActive="active">Users</a>
            </nav>

            .active {
                font-weight: bold;
                color: #1976d2;
              }
              
            `
        ]
    },
    {
        topic: 'TYPESCRIPT ROLE IN ANGULAR',
        points: [
            'TypeScript is the backbone of Angular, and it significantly enhances Angular development. ',
            'h:: ✅ 1. Static Typing',
            'TypeScript adds types to JavaScript, allowing you to catch errors at compile time instead of runtime.',
            `code::
            let name: string = 'Angular';
            name = 42; // ❌ Error in TypeScript, but JS would allow it
            `,
            '✔ Helps prevent bugs early',
            '✔ IDEs give better auto-completion and refactoring',
            'h:: ✅ 2. Object-Oriented Programming (OOP)',
            'Angular is built using classes, interfaces, inheritance, and access modifiers — all features supported and enhanced by TypeScript.',
            `code::
            export class User {
                constructor(public name: string, public age: number) {}
              }
              
            `,
            '✔ Improves code structure',
            '✔ Easy to model real-world entities',
            'h:: ✅ 3. Decorators',
            'Angular relies heavily on decorators (a TypeScript feature) to define metadata.',
            `code::
            @Component({
                selector: 'app-hello',
                templateUrl: './hello.component.html'
              })
              export class HelloComponent {}
              
            `,
            '✔ @Component, @Injectable, @Input, @Output — all use decorators',
            '✔ Without TypeScript, Angular’s metadata model wouldn’t work',
            'h:: ✅ 4. Interfaces',
            'Interfaces define contracts for classes, services, and data structures.',
            `code::
            interface User {
                id: number;
                name: string;
              }
              
              const user: User = { id: 1, name: 'Alice' };
              
            `,
            '✔ Ensures consistency in objects',
            '✔ Great for HTTP responses and models',
            'h:: ✅ 5. Advanced Tooling and IDE Support',
            'Better IntelliSense/autocomplete',
            'Refactoring support (rename, extract)',
            'Error checking as you type',
            'h:: ✅ 6. Improved Maintainability',
            'In large apps, TypeScript helps:',
            'Navigate code easily',
            'Understand types and contracts',
            'Avoid runtime bugs',
            'Collaborate with large teams',
            'h:: ✅ 7. Async/Await and Promises',
            'TypeScript supports modern async/await syntax, which is clean and easy to work with.',
            `code::
                async ngOnInit() {
                    const data = await this.apiService.getData();
                }
              
            `,
            'h:: ✅ 8. Compatibility with JavaScript',
            'TypeScript is a superset of JavaScript — you can write JS code and gradually introduce types.'
        ]
    },
    {
        topic: 'All Angular built-in Directives',
        points: [
            'h:: ✅ 1. Structural Directives',
            'They change the DOM structure by adding or removing elements.',
            '*ngIf -  Conditionally include an element',
            '*ngFor - Repeat an element for each item in a list',
            '*ngSwitch, *ngSwitchCase, *ngSwitchDefault - Multiple condition rendering (like switch-case)',
            '*ngTemplateOutlet - Dynamically insert templates',
            'h:: ✅ 2. Attribute Directives',
            'They change the appearance or behavior of an element, component, or directive.',
            'ngClass - Dynamically add/remove CSS classes',
            'ngStyle - Dynamically set styles',
            'ngModel - Two-way data binding (FormsModule required)',
            'ngModelGroup - Group multiple form fields in template-driven forms',
            'ngForm - Applied to <form> element in template-driven forms',
            'h:: ✅ 3. Form Directives',
            '✅ Template-Driven Forms:',
            'ngModel - Two-way binding',
            'ngForm - Represents the form',
            'ngModelGroup - Group inside form',
            'required, minlength, maxlength, pattern - Built-in validators',
            '✅ Reactive Forms:',
            'formControlName - Binds input to FormControl',
            'formGroup - Binds a FormGroup to a form',
            'formArrayName - For dynamic sets of controls',
            'formGroupName - Nested FormGroup',
            'h:: ✅ 4. Router Directives',
            'routerLink - Link to a route',
            'routerLinkActive - Add CSS class when route is active',
            '[routerLinkActiveOptions] - Customize match behavior (e.g., { exact: true })', ,
            '<router-outlet> - Placeholder for routed component',
            'router-outlet - Required to render routed components',
            'h:: ✅ 5. Ng-container / Template Directives',
            '<ng-container> - Logical container (does not render DOM)',
            '<ng-template> - Define template block',
            '<ng-content> - Project content (used in components)',
            'ngTemplateOutlet - Render template dynamically',
            'h:: ✅ 6. Content Projection Directives (for components)',
            '<ng-content> - Project external content into component',
            '<ng-content select="..."> - Project into specific slot (multi-slot)',
            'h:: ✅ 7. Custom Directives',
            'You can also create your own directives using:',
            `code::
            @Directive({
                selector: '[yourCustomDirective]'
              })
              
            `,
            'h:: ✅ 8. Common HTML Attribute Directives Angular Recognizes',
            'Some standard HTML attributes are enhanced by Angular:',
            'required, disabled, readonly - Enhanced Behavior: Work with binding [required], [disabled]',
            'checked, selected, value - Sync with [(ngModel)] or [formControl]'
        ]
    },
    {
        topic: 'ActivatedRoute in Angular',
        points: [
            'ActivatedRoute is a service provided by Angular’s Router module that gives access to information about the current route — like route parameters, query parameters, route data, and more.',
            'h:: snapshot',
            'Static snapshot of route at load time',
            'route.snapshot.paramMap.get(\'id\')',
            'ActivatedRouteSnapshot is a static snapshot of the route at a specific moment in time — typically used when you want immediate access to route information without subscribing to observables.',
            'h:: paramMap',
            'Observable of route parameters',
            'route.paramMap.subscribe(...)',
            'h:: queryParamMap',
            'Observable of query parameters',
            'route.queryParamMap.subscribe(...)',
            'h:: data',
            'Static route data from config',
            'route.data.subscribe(...)',
            'h:: url',
            'Observable of route segments',
            'route.url.subscribe(...)',
            'h:: fragment',
            'Observable of URL fragment',
            'route.fragment.subscribe(...)',
            'h:: parent, firstChild',
            'To navigate route tree',
            'route.parent.paramMap.get(...)',
        ]
    },
    {
        topic: 'Angular in-built services',
        points: [
            'Here\'s a complete list of inbuilt (built-in) Angular services categorized by functionality. These services are provided by Angular itself and are available for injection into your components, services, directives, etc.',
            'h:: ✅ 1. Routing Services',
            'Router - For navigation, URL manipulation',
            'ActivatedRoute - Access route info like params, query params',
            'ActivatedRouteSnapshot - Static snapshot of route data',
            'RouterOutlet - Acts as a placeholder for routed components',
            'RouteReuseStrategy - Customize how routes are cached/reused',
            'h:: ✅ 2. HTTP Services (from @angular/common/http)',
            'HttpClient - Perform HTTP requests (GET, POST, etc.)',
            'HttpHeaders - Set HTTP headers',
            'HttpParams - Set URL query parameters',
            'HttpInterceptor - Intercept and modify HTTP requests/responses',
            'HttpBackend - Low-level HTTP backend service',
            '📦 Available only when HttpClientModule is imported.',
            'h:: ✅ 3. Form Services',
            'FormBuilder - Simplify reactive form creation',
            'Validators - Provides built-in form validators',
            'FormGroup, FormControl, FormArray - Represent form structure in reactive forms',
            'h:: ✅ 4. Dependency Injection Services',
            'Injector - Access services manually',
            'InjectionToken - Create custom injection tokens',
            'Optional, Inject, SkipSelf, Self, Host - DI resolution modifiers',
            'h:: ✅ 5. Browser and Platform Services',
            'PlatformLocation - Access browser URL, history, etc.',
            'DOCUMENT - Inject global document object',
            'Location - Control browser navigation (back, forward)',
            'NgZone - Run code inside or outside Angular\'s zone',
            'Renderer2 - Safe DOM manipulation (used in directives)',
            'h:: ✅ 6. Change Detection and Application State',
            'ChangeDetectorRef - Manually trigger change detection',
            'ApplicationRef - Interact with Angular\'s component tree',
            'ViewContainerRef - Dynamically add components/views',
            'TemplateRef - Reference to a template block (<ng-template>)',
            'ElementRef - Direct reference to a DOM element',
            'h:: ✅ 7. Animation Services (if using @angular/animations)',
            'AnimationBuilder - Build animations programmatically',
            'AnimationPlayer - Control playback of animations',
            'h:: ✅ 8. i18n (Internationalization)',
            'LOCALE_ID - Token to set locale',
            'CurrencyPipe, DatePipe, DecimalPipe - Locale-based formatting',
            'h:: ✅ 9. Testing Utilities (Used in test files)',
            'TestBed - Configure testing modules and components',
            'HttpTestingController - Mock HTTP requests',
            'h:: ✅ 10. Others / Miscellaneous',
            'Title - Set the document title',
            'Meta - Set meta tags for SEO',
            'TransferState - Server-to-client state transfer (SSR)',
            'KeyValuePipe - Used for rendering objects in templates'
        ]
    },
    {
        topic: 'CORE ANGULAR FEATURES',
        points: [
            'Angular offers a rich ecosystem with many powerful features beyond just components and services. Here’s a comprehensive breakdown of core Angular features grouped by category — useful for interviews, development, or architecture planning.',
            'h:: ✅ 1. Core Building Blocks',
            'Components - UI blocks defined with a template and logic',
            'Modules - Logical units that group components, services',
            'Templates - HTML + Angular syntax (*ngIf, {{ }})',
            'Directives - Add behavior to DOM (structural & attribute)',
            'Pipes - Format data in templates (date, currency, etc.)',
            'Services - Logic, data access, and business rules (DI-based)',
            'h:: ✅ 2. Data Binding & View Control',
            'Interpolation - {{ title }}',
            'Property Binding - [src]="imageUrl"',
            'Event Binding - (click)="doSomething()"',
            'Two-Way Binding - [(ngModel)]="user.name"',
            'h:: ✅ 3. Forms',
            'Template-driven - Uses ngModel, easier for simple forms',
            'Reactive forms - Full control using FormGroup, FormControl',
            'Form Validation - Built-in, custom, async validators',
            'h:: ✅ 4. Routing and Navigation',
            'RouterModule - Define routes using path-component mapping',
            'Route Parameters - :id, queryParams, fragments',
            'Guards - Protect routes (CanActivate, CanLoad, etc.)',
            'Lazy Loading - Load modules only when needed',
            'Nested Routes - Routes inside routes (<router-outlet>)',
            'Resolvers - Pre-fetch data before route activates',
            'h:: ✅ 5. Dependency Injection (DI)',
            'Hierarchical Injector - DI tree at module/component levels',
            'Providers - Register services for injection',
            'Injection Tokens - Inject values that aren\'t classes',
            'h:: ✅ 6. Lifecycle Hooks',
            'ngOnInit() - Run after component initializes',
            'ngOnChanges() - Respond to input changes',
            'ngAfterViewInit() - Run after component view initialized',
            'ngOnDestroy() - Cleanup before component is destroyed',
            'h:: ✅ 7. Change Detection',
            'Default - Automatically checks the component tree',
            'OnPush - Checks only on input changes (performance boost)',
            'ChangeDetectorRef - Manual control over detection cycle',
            'h:: ✅ 8. Asynchronous Programming',
            'Observables (RxJS) - Core to Angular for events/data streams',
            'AsyncPipe - Subscribes/unsubscribes automatically in template',
            'HttpClient - Makes HTTP requests, returns Observables',
            'h:: ✅ 9. Testing Tools',
            'TestBed - Setup Angular environment in tests',
            'Karma - Test runner',
            'Jasmine - Assertion library',
            'HttpTestingController - Mock HTTP requests in unit tests',
            'h:: ✅ 10. Performance Features',
            'Lazy Loading Modules - Loads modules on-demand',
            'Change Detection Strategies - Optimize rendering',
            'Standalone Components - Fewer module dependencies',
            'Tree Shaking - Removes unused code in build',
            'Differential Loading - Modern vs legacy browser bundles',
            'h:: ✅ 11. Build Tools & CLI',
            'Angular CLI - Scaffold projects, serve, build, test, lint',
            'AOT Compilation - Precompiles templates for speed',
            'ESLint - Code linting (via CLI config)',
            'Webpack (under the hood) - Bundling and optimization',
            'h:: ✅ 12. Internationalization (i18n)',
            'i18n tags - Built-in support for translation',
            'LOCALE_ID - Set locale for currency, date, etc.',
            'Angular localize - For runtime translation loading',
            'h:: ✅ 13. Security Features',
            'Sanitization - Prevents XSS in bindings',
            'DomSanitizer - Bypass Angular\'s security if needed carefully',
            'Route Guards - Prevent unauthorized access',
            'Http Interceptors - Add auth tokens, handle global errors',
            'h:: ✅ 14. Advanced Features',
            'Custom Directives - Define your own DOM behavior',
            'Dynamic Component Loading - Insert components at runtime',
            'ViewChild / ContentChild - Access elements/components',
            'Standalone Components - No need for NgModules (Angular 14+)',
            'Signals - New reactive primitive in Angular 17+',

        ]
    },
    {
        topic: ' Angular Ecosystem',
        points: [
            'h:: ✅ 1. Angular Core Framework',
            '@angular/core - Components, DI, lifecycle hooks, change detection',
            '@angular/common - Common directives/pipes like NgIf, NgFor, etc.',
            '@angular/forms - Template-driven and reactive form modules',
            '@angular/router - Routing, navigation, route guards, resolvers',
            '@angular/animations - Support for animations using triggers and states',
            'h:: ✅ 2. Angular CLI & Tooling',
            'Angular CLI - Project scaffolding, build, serve, test, lint',
            'ng update - Seamless dependency upgrade',
            'ng add - Add libraries (e.g., Angular Material)',
            'ng lint, ng test, ng build - Core commands for dev lifecycle',
            'h:: ✅ 3. UI Component Libraries',
            'Angular Material - Google\'s official Material Design UI kit',
            'NG Bootstrap - Bootstrap components without jQuery',
            'PrimeNG - Feature-rich component library',
            'Nebular - Customizable and modular UI components',
            'Clarity - VMware’s UI framework (UX + accessibility)',
            'h:: ✅ 4. State Management',
            'RxJS - Reactive programming backbone of Angular',
            'NgRx - Redux-style global state management',
            'Akita - Entity-based, simple state management',
            'NGXS - Simpler alternative to NgRx',
            'Signals (Angular 17+) - Fine-grained reactivity system',
            'h:: ✅ 5. Testing Frameworks',
            'Jasmine - Unit testing framework ',
            'Karma - Test runner',
            'TestBed - Angular testing environment setup',
            'Protractor (deprecated) - End-to-end testing',
            'Cypress / Playwright - Modern E2E testing alternatives',
            'h:: Modern E2E testing alternatives',
            'Webpack - Module bundler (used under the hood)',
            'Angular DevTools - Chrome DevTools extension for Angular',
            'esbuild / Vite - Faster modern bundlers (community)',
            'AOT Compilation - Precompiles templates for faster runtime',
            'Tree Shaking - Removes unused code from final bundle',
            'h:: ✅ 7. Code Quality & Standards',
            'ESLint - Linting for TypeScript and Angular',
            'Prettier - Code formatting ',
            'Husky + Lint Staged - Run checks before committing',
            'Style Guide - Angular official style guide for clean code',
            'h:: ✅ 8. Deployment & SSR',
            'Angular Universal - Server-side rendering (SEO, performance)',
            'Firebase Hosting - Angular + Firebase integration',
            'Vercel / Netlify - Cloud deployment (Jamstack style)',
            'Docker	- Containerize Angular apps for deployment',
            'h:: ✅ 9. Internationalization (i18n) and Accessibility',
            'Angular i18n - Built-in translation and localization',
            'ngx-translate - Community-powered runtime translation',
            'ARIA & a11y - Built-in accessibility support with Angular Material',
            'h:: ✅ 10. Learning, Documentation & Community',
            'Angular.io - Official documentation and tutorials',
            'StackBlitz - Online Angular playground',
            'Dev.to, Medium - Blog posts and tutorials',
            'YouTube Channels - Angular Nation, Fireship, Academind, etc.',
            'Reddit, Discord, Gitter - Community support forums',
            'h:: ✅ 11. Extensions & Dev Tools',
            'Angular DevTools - Inspect component tree, detect change detection',
            'Augury (deprecated) - Previously used devtools',
            'Previously used devtools - Angular Essentials, ESLint, Angular Snippets',
            `code::
            ┌──────────────┐      ┌────────────┐      ┌──────────────┐
            │ Angular Core │────▶│ UI Libraries│────▶│ Design Systems│
            └──────────────┘      └────────────┘      └──────────────┘
                │                    │                    │
                ▼                    ▼                    ▼
            ┌────────────┐     ┌────────────┐       ┌─────────────┐
            │ State Mgmt │     │ Testing    │       │ DevTools    │
            └────────────┘     └────────────┘       └─────────────┘
                │                    │                    │
                ▼                    ▼                    ▼
            ┌────────────┐     ┌────────────┐       ┌─────────────┐
            │ CLI/Build  │     │ Deployment │       │ Lint/Format │
            └────────────┘     └────────────┘       └─────────────┘

            `
        ]
    },
    {
        topic: 'dynamic components',
        points: []
    },
    {
        topic: 'Web Workers in Angular',
        points: []
    },
];
export default angular;
// ngrx, optimization, rxjs, observable, subject, data transfer, 404 ** , 


