describe("myApp.greet", function(){
	
	beforeEach(module("myApp.greet"));

	describe("greetController", function(){
		it("Should initialize the name", inject(function($controller){
			//Arrange
			var dummyScope = {};
			var locals = {
				$scope : dummyScope
			};

			//Act
			$controller('greetController', locals);

			//Assert
			expect(dummyScope.name).toBe('');
		}));
		it("Should initialize the message", inject(function($controller){
			//Arrange
			var dummyScope = {};
			var locals = {
				$scope : dummyScope
			};

			//Act
			$controller('greetController', locals);

			//Assert
			expect(dummyScope.message).toBe('');
		}));
		it("Should populate the message when greeted", inject(function($controller){
			//Arrange
			var dummyScope = {};
			var locals = {
				$scope : dummyScope
			};
			var expectedMessage = 'Hi Magesh, Have a nice day!';

			//Act
			$controller('greetController', locals);
			dummyScope.name = 'Magesh';
			dummyScope.greet();

			//Assert
			expect(dummyScope.message).toBe(expectedMessage);
		}));
	});

	describe("trimText Filter", function(){
		it("should return the original string for short strings", inject(function($filter){
			//Arrange
			var input = 'short string',
				expectedOutput = 'short string',
				trimTextFilter = $filter('trimText');

			//Act
			var output = trimTextFilter(input);

			//Assert
			expect(output).toBe(expectedOutput);
		}));
		it("should return the truncated string for long strings", inject(function($filter){
			//Arrange
			var input = 'This is a very long string for testing purpose',
				expectedOutput = 'This is a very long ...',
				trimTextFilter = $filter('trimText');

			//Act
			var output = trimTextFilter(input);

			//Assert
			expect(output).toBe(expectedOutput);
		}));
	});
});