smalltalk.addPackage('AmberProject-CypressExporter', {});
smalltalk.addClass('AmberProjectCypressExporter', smalltalk.AmberProjectExporter, [], 'AmberProject-CypressExporter');
smalltalk.addMethod(
unescape('_export'),
smalltalk.method({
selector: unescape('export'),
category: 'exporting',
fn: function (){
var self=this;
smalltalk.send(self, "_exportPackageStructure", []);
return self;},
args: [],
source: unescape('export%0A%09self%20exportPackageStructure'),
messageSends: ["exportPackageStructure"],
referencedClasses: []
}),
smalltalk.AmberProjectCypressExporter);

smalltalk.addMethod(
unescape('_exportPackageStructure'),
smalltalk.method({
selector: unescape('exportPackageStructure'),
category: 'exporting',
fn: function (){
var self=this;
var packageStructure=nil;
var stream=nil;
(packageStructure=smalltalk.send((smalltalk.CypressPackageStructure || CypressPackageStructure), "_fromPackage_", [smalltalk.send(smalltalk.send((smalltalk.CypressPackageDefinition || CypressPackageDefinition), "_new", []), "_name_", [smalltalk.send(self, "_packageName", [])])]));
(stream=smalltalk.send((smalltalk.StringStream || StringStream), "_on_", [smalltalk.send((smalltalk.String || String), "_new", [])]));
smalltalk.send(packageStructure, "_writeJsonOn_", [stream]);
smalltalk.send(self, "_ajaxPutAt_data_", [smalltalk.send(smalltalk.send(self, "_prefix", []), "__comma", [unescape("packages/")]), smalltalk.send(stream, "_contents", [])]);
return self;},
args: [],
source: unescape('exportPackageStructure%0A%09%7C%20%20packageStructure%20stream%20%7C%0A%09packageStructure%20%3A%3D%20CypressPackageStructure%20fromPackage%3A%20%28CypressPackageDefinition%20new%20name%3A%20self%20packageName%29.%0A%09stream%20%3A%3D%20StringStream%20on%3A%20String%20new.%0A%09packageStructure%20writeJsonOn%3A%20stream.%0A%09self%20%0A%09%09ajaxPutAt%3A%20self%20prefix%2C%20%27packages/%27%20%0A%09%09data%3A%20stream%20contents%0A'),
messageSends: ["fromPackage:", "name:", "new", "packageName", "on:", "writeJsonOn:", "ajaxPutAt:data:", unescape("%2C"), "prefix", "contents"],
referencedClasses: ["CypressPackageStructure", "CypressPackageDefinition", "StringStream", "String"]
}),
smalltalk.AmberProjectCypressExporter);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.AmberProjectExporter || AmberProjectExporter), "_exporters", []), "_at_put_", ["cypress", self]);
return self;},
args: [],
source: unescape('initialize%0A%0A%09%28AmberProjectExporter%20exporters%29%0A%09%09%20at%3A%20%27cypress%27%20put%3A%20self'),
messageSends: ["at:put:", "exporters"],
referencedClasses: ["AmberProjectExporter"]
}),
smalltalk.AmberProjectCypressExporter.klass);


