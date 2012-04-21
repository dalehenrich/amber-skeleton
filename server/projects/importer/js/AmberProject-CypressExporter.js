smalltalk.addPackage('AmberProject-CypressExporter', {});
smalltalk.addClass('AmberProjectCypressExporter', smalltalk.AmberProjectExporter, [], 'AmberProject-CypressExporter');
smalltalk.addMethod(
unescape('_export'),
smalltalk.method({
selector: unescape('export'),
category: 'exporting',
fn: function (){
var self=this;
var package=nil;
(package=smalltalk.send((smalltalk.Package || Package), "_named_", [smalltalk.send(self, "_packageName", [])]));
smalltalk.send([smalltalk.send((smalltalk.Exporter || Exporter), "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_packageName", [])]), "__comma", [".js"])]),smalltalk.send((smalltalk.StrippedExporter || StrippedExporter), "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathJs", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_packageName", [])]), "__comma", [".deploy.js"])]),smalltalk.send((smalltalk.ChunkExporter || ChunkExporter), "__minus_gt", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(package, "_commitPathSt", []), "__comma", [unescape("/")]), "__comma", [smalltalk.send(self, "_packageName", [])]), "__comma", [".st"])])], "_do_", [(function(commitStrategy){var fileContents=nil;
(fileContents=smalltalk.send(smalltalk.send(smalltalk.send(commitStrategy, "_key", []), "_new", []), "_exportPackage_", [smalltalk.send(self, "_packageName", [])]));return smalltalk.send(self, "_ajaxPutAt_data_", [smalltalk.send(commitStrategy, "_value", []), fileContents]);})]);
return self;},
args: [],
source: unescape('export%0A%0A%09%7C%20package%20%7C%0A%09package%20%3A%3D%20Package%20named%3A%20self%20packageName.%0A%09%7B%09%0A%09%09Exporter%20%09%09%09-%3E%20%28package%20commitPathJs%2C%20%27/%27%2C%20self%20packageName%2C%20%27.js%27%29.%0A%09%09StrippedExporter%20%09-%3E%20%28package%20commitPathJs%2C%20%27/%27%2C%20self%20packageName%2C%20%27.deploy.js%27%29.%0A%20%09%09ChunkExporter%20%09-%3E%20%28package%20commitPathSt%2C%20%27/%27%2C%20self%20packageName%2C%20%27.st%27%29%0A%09%7D%20do%3A%20%5B%3AcommitStrategy%7C%20%7C%20fileContents%20%7C%0A%09%09fileContents%20%3A%3D%20%28commitStrategy%20key%20new%20exportPackage%3A%20self%20packageName%29.%0A%09%09self%20ajaxPutAt%3A%20commitStrategy%20value%20data%3A%20%20fileContents%5D%0A%20%20%20%20%20%20%20%20%20%09%09%09%09%09%09'),
messageSends: ["named:", "packageName", "do:", unescape("-%3E"), unescape("%2C"), "commitPathJs", "commitPathSt", "exportPackage:", "new", "key", "ajaxPutAt:data:", "value"],
referencedClasses: ["Package", "Exporter", "StrippedExporter", "ChunkExporter"]
}),
smalltalk.AmberProjectCypressExporter);


smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.AmberProjectExporter || AmberProjectExporter), "_exporters", []), "_at_put_", [smalltalk.symbolFor("cypress"), self]);
return self;},
args: [],
source: unescape('initialize%0A%0A%09%28AmberProjectExporter%20exporters%29%0A%09%09%20at%3A%20%23cypress%20put%3A%20self'),
messageSends: ["at:put:", "exporters"],
referencedClasses: ["AmberProjectExporter"]
}),
smalltalk.AmberProjectCypressExporter.klass);


