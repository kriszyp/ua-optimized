var http = require("http");
var client = http.createClient(80, "dante.dojotoolkit.org");
var userAgents;
// create a define to get the builds from the 
define = function(builds){
	userAgents = builds.builds;
};
require("../ua-builds");
var request = client.request("GET", "/hasjs/tests/results.data", {
	Host: "dante.dojotoolkit.org"
});
console.log("Requesting current test results");
request.on("error", function(error){
	throw error;
});
request.end();
request.on("response", function(response){
	var body = [];
	response.on("data", function(chunk){
		body.push(chunk);
	});
	var tests = [];
	response.on("end", function(){
		console.log("processing features");
		body = body.join("");
		body.replace(/{[^}]+}/g, function(test){
			test = JSON.parse(test);
			userAgents.some(function(agent){
				var match = test.useragent.match(agent.match);
				if(match){
					var version = match[1];
					if(parseFloat(version) >= agent.version){
						var has = agent.has || (agent.has = {});
						for(var i in test){
							var result = test[i] == "true";
							if(i in has){
								if(has[i] !== result){
									has[i] = "unknown"; // conflict results, mark it as unknown
								}
							}else{
								has[i] = result; // store result
							}
						}
						agent.count = (agent.count || 0) + 1; // increment
						return true;
					}
				}
			});
			
		});
		userAgents.forEach(function(agent){
			agent.match = agent.match.toString();
		});
		require("fs").writeFile('profiles.js', 'define({"profiles":' + JSON.stringify(userAgents) + "});", function (err) {
			if (err) throw err;
			console.log('Done');
		});
	});
});
