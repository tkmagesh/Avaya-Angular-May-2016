var program = (function(){
	function addSync(x,y){
		console.log(`     [Service] processing ${x} and ${y}`);
		let result = x + y;
		console.log(`     [Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[Consumer] triggering addSync`);
		let result = addSync(x,y);
		console.log(`[Consumer] result = ${result}`);
	}

	function addAsync(x,y, onResult){
		console.log(`     [Service] processing ${x} and ${y}`);
		setTimeout(function(){
			let result = x + y;
			console.log(`     [Service] returning result`);
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncClient(x,y){
		console.log(`[Consumer] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[Consumer] result = ${result}`);
		});
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient
	};
})();