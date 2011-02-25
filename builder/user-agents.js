module.exports = [
	{
		match: /BlackBerry.+AppleWebKit\/([\d\.]+)/,
		name: "BlackBerry",
		version: 400
	},
	{
		match: /iP.+AppleWebKit\/([\d\.]+)/,
		name: "Newer iOS device",
		version: 532
	},
	{
		match: /iP.+AppleWebKit\/([\d\.]+)/,
		name: "iOS device",
		version: 400
	},
	{
		match: /AppleWebKit\/([\d\.]+).+Mobile/,
		name: "Other mobile WebKit",
		version: 400
	},
	{
		match: /Chrome\/([\d\.]+)/,
		name: "Chrome",
		version: 8
	},
	{
		match: /AppleWebKit\/([\d\.]+)/,
		name: "Desktop WebKit",
		version: 400
	},
	{
		match: /Firefox\/([\d\.]+)/,
		name: "Firefox 4",
		version: 4
	},
	{
		match: /Firefox\/([\d\.]+)/,
		name: "Firefox 3",
		version: 3
	},
	{
		match: /Presto\/([\d\.]+)/,
		name: "Opera 11",
		version: 2.7
	},
	{
		match: /Trident\/([\d\.]+)/,
		name: "IE 9",
		version: 5
	},
	{
		match: /Trident\/([\d\.]+)/,
		name: "IE 8",
		version: 4
	},
	{
		match: /MSIE ([\d\.]+)/,
		name: "IE 7",
		version: 7
	},
	{
		match: /\d/,
		name: "Any other old browser",
		version: 0
	}
];