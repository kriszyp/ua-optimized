/*
 * ua-optimized is an AMD plugin to enable branching to different built JavaScript layers
*/
define(["./ua-builds"], function(uaBuilds){
	if(define.isBuilt){
		// if we are in a build, we sniff the user agent and use it find the appropriate layer 
		// with baked-in known feature-set 
		var ua = navigator.userAgent;
		var layer = "", version;
		uaBuilds = uaBuilds.builds;
		for(var i = 0; i < uaBuilds.length; i++){
			var build = uaBuilds[i];
			var match = ua.match(build.match);
			if(match){
				var version = match[1];
				if(parseFloat(version) >= build.version){
					layer = "-" + build.name;
					break;
				}
			}
		}
	}
	// AMD plugin, provides load method
	return {
		load: function(id, parentRequire, loaded, config){
			// loading a module, branching to different layer based on UA
			parentRequire([id + (define.isBuilt ? layer // if it is built, we use the UA-specific version  
				: "") // not built, just point to the specified module
				], loaded);
		},
		write: function(pluginName, moduleName, write){
			// at build time we trigger new builds for each UA
			var map = loadUAToFeatureMap("ua-features.json");
			for(var i in map){
				triggerNewBuild(moduleName + '_' + i, {
					config: {
						has: map[i]
					}
				});
			}
			// trigger default build with no known feature information
			triggerNewBuild(moduleName, {
				config: {
				}
			});
			
		}
	};
});

