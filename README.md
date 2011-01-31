ua-optimized is an AMD plugin to enable branching to different built JavaScript layers
with built-in known sets of features to create highly optimized applications created
with feature detection. This allows one to write modules using feature detection
and then uses UA sniffing only as a build-time optimization to determine features
(the correct way to use UA sniffing, as it abstracts it away from correct code writing).
To use ua-optimized, load your application entry point module using ua-optimized
as a plugin:

    require(["ua-optimized!my-app"]);