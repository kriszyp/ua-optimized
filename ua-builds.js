/* This file defines the different user agents that we will build on, we can modify this to 
 * create more or less user-agent profiles. It will select on the first build profile that 
 * matches the user agent string. */

define({builds:[
	{
		match: /BlackBerry.+AppleWebKit\/([\d\.]+)/,
		name: "blackberry",
		version: 400
	},
	{
		match: /iP.+AppleWebKit\/([\d\.]+)/,
		name: "ios4",
		version: 532
	},
	{
		match: /iP.+AppleWebKit\/([\d\.]+)/,
		name: "ios",
		version: 400
	},
	{
		match: /AppleWebKit\/([\d\.]+).+Mobile/,
		name: "mobile-webkit",
		version: 400
	},
	{
		match: /Chrome\/([\d\.]+)/,
		name: "chrome",
		version: 8
	},
	{
		match: /AppleWebKit\/([\d\.]+)/,
		name: "webkit",
		version: 400
	},
	{
		match: /Firefox\/([\d\.]+)/,
		name: "ff4",
		version: 4
	},
	{
		match: /Firefox\/([\d\.]+)/,
		name: "ff3",
		version: 3
	},
	{
		match: /Presto\/([\d\.]+)/,
		name: "opera11",
		version: 2.7
	},
	{
		match: /Trident\/([\d\.]+)/,
		name: "ie9",
		version: 5
	},
	{
		match: /Trident\/([\d\.]+)/,
		name: "ie8",
		version: 4
	},
	{
		match: /MSIE ([\d\.]+)/,
		name: "ie7",
		version: 7
	},
	{
		match: /\d/,
		name: "default",
		version: 0
	}
]});