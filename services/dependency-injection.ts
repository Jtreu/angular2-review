/*

	Dependency Injection
	
		- Object A needs Object B to function correctly. Here is what we could do:
			1 Object A could create a new object B and work with that.
				- Cons:
					- If the structure of our service (in this case object B) changes, then the result isn't
						reflected in the instance that we create in object A. As a result, we would have to
						change the object B in both object A and whatever other component is using object B.

			2 Inject Object B inside Object A.
				- Injection meas that the constructor of Object A is told that we need an instance of this service
					or object. 

	bootstrap(AppComponent, [DataService]); // Singleton service

	// or

	providers: [DataService] // multiple instance injections
*/