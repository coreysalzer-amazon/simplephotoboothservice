let testsRunningInNode = (typeof global !== "undefined" ? true: false),
	chakram = (testsRunningInNode ? global.chakram : window.chakram),
	expect = (testsRunningInNode ? global.expect : window.expect);

function importTest(name, path){
	describe(name, function(){
		require(path);	
	});
}

describe("[=== Simple Photobooth Service Backend API Test Cases ===]", function(){
	importTest("[=== Controllers ===]", "./controllers/index.js");
});
