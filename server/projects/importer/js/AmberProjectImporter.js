smalltalk.addPackage('AmberProjectImporter', {});
smalltalk.addClass('AmberProjectImporter', smalltalk.Object, [], 'AmberProjectImporter');
smalltalk.AmberProjectImporter.comment=unescape('%23%23%20AmberProjectImporter%0A%0AAdd%20flexibility%20to%20your%20project%20structure.%0A%0AAmberProjectImporter%20allows%20you%20to%20store%20code%20in%20arbitrary%20locations%20on%20disk.%0A%0A%23%23%23%20Installation%0A%0AInclude%20the%20%60AmberProjectImporter.js%60%20file%20in%20your%20standard%20Amber%20load%20script%20in%20your%20%60index.html%60%20file%3A%0A%0A%60%60%60html%0A%3Chtml%3E%20%0A%20%20%3Chead%3E%20%0A%20%20%20%20%3Cscript%20src%3D%22js/amber.js%22%20type%3D%22text/javascript%22%3E%3C/script%3E%0A%20%20%3C/head%3E%0A%20%20%3Cbody%3E%0A%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%3E%0A%20%20%20%20%20%20loadAmber%28%7B%0A%20%20%20%20%20%20%20%20files%3A%20%5B%20%27AmberProjectImporter.js%27%20%5D%2C%0A%20%20%20%20%20%20%20%20prefix%3A%20%27projects/hello/js%27%2C%0A%20%20%20%20%20%20%20%20ready%3A%20function%28%29%20%7B%7D%0A%20%20%20%20%20%20%20%20%7D%29%3B%20%0A%20%20%20%20%3C/script%3E%0A%20%20%3C/body%3E%20%0A%3C/html%3E%0A%60%60%60%0A')

smalltalk.AmberProjectImporter.klass.iVarNames = ['packageRegistry'];
smalltalk.addMethod(
unescape('_get_onComplete_'),
smalltalk.method({
selector: unescape('get%3AonComplete%3A'),
category: 'importing',
fn: function (ajaxUrl, completeBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [ajaxUrl, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("complete", "__minus_gt", [(function(jqXHR, textStatus){return smalltalk.send(completeBlock, "_value_value_", [jqXHR, textStatus]);})])])]);
return self;},
args: ["ajaxUrl", "completeBlock"],
source: unescape('get%3A%20ajaxUrl%20onComplete%3A%20completeBlock%0A%09jQuery%20%0A%09%09ajax%3A%20ajaxUrl%0A%20%20%20%20%20%20%20%20%09options%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%20%20%20%20%09%09%09%27complete%27%20-%3E%20%5B%20%3AjqXHR%20%3AtextStatus%20%7C%20%20completeBlock%20value%3A%20jqXHR%20value%3A%20textStatus%5D%0A%09%09%7D'),
messageSends: ["ajax:options:", unescape("-%3E"), "value:value:"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_importSTPackage_prefix_'),
smalltalk.method({
selector: unescape('importSTPackage%3Aprefix%3A'),
category: 'importing',
fn: function (packageName, prefix){
var self=this;
smalltalk.send(self, "_get_onComplete_", [smalltalk.send(smalltalk.send(smalltalk.send(prefix, "__comma", [unescape("st/")]), "__comma", [packageName]), "__comma", [".st"]), (function(jqXHR, textStatus){return ((($receiver = smalltalk.send(smalltalk.send(jqXHR, "_readyState", []), "__eq", [(4)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);return smalltalk.send(self, "_registerPackage_at_", [packageName, prefix]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);return smalltalk.send(self, "_registerPackage_at_", [packageName, prefix]);})]));})]);
return self;},
args: ["packageName", "prefix"],
source: unescape('importSTPackage%3A%20packageName%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importSTPackage%3A%20%27AmberProjectImporter%27%20%0A%09%09prefix%3A%20%27%27%22%0A%0A%09self%20get%3A%20prefix%2C%20%27st/%27%2C%20packageName%2C%20%27.st%27%20onComplete%3A%20%5B%3AjqXHR%20%3AtextStatus%20%7C%20%0A%09%09%09jqXHR%20readyState%20%3D%204%20ifTrue%3A%20%5B%20%7Cchunks%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09chunks%20%3A%3D%20jqXHR%20responseText.%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09Importer%20new%20import%3A%20chunks%20readStream.%0A%09%09%09%09self%20registerPackage%3A%20packageName%20at%3A%20prefix%20%5D%5D'),
messageSends: ["get:onComplete:", unescape("%2C"), "ifTrue:", unescape("%3D"), "readyState", "responseText", "import:", "new", "readStream", "registerPackage:at:"],
referencedClasses: ["Importer"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_importSTPackages_prefix_'),
smalltalk.method({
selector: unescape('importSTPackages%3Aprefix%3A'),
category: 'importing',
fn: function (packageNameList, prefix){
var self=this;
var loadBlock=nil;
(loadBlock=(function(index){var packageName=nil;
var next=nil;
(packageName=smalltalk.send(packageNameList, "_at_", [index]));return smalltalk.send(self, "_get_onComplete_", [smalltalk.send(smalltalk.send(smalltalk.send(prefix, "__comma", [unescape("st/")]), "__comma", [packageName]), "__comma", [".st"]), (function(jqXHR, textStatus){return ((($receiver = smalltalk.send(smalltalk.send(jqXHR, "_readyState", []), "__eq", [(4)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var chunks=nil;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(jqXHR, "_responseText", []), "_readStream", [])]);smalltalk.send(self, "_registerPackage_at_", [packageName, prefix]);(next=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = next).klass === smalltalk.Number) ? $receiver <=smalltalk.send(packageNameList, "_size", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(packageNameList, "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [next]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [next]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var chunks=nil;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(jqXHR, "_responseText", []), "_readStream", [])]);smalltalk.send(self, "_registerPackage_at_", [packageName, prefix]);(next=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = next).klass === smalltalk.Number) ? $receiver <=smalltalk.send(packageNameList, "_size", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(packageNameList, "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [next]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [next]);})]));})]));})]);}));
((($receiver = ((($receiver = smalltalk.send(packageNameList, "_size", [])).klass === smalltalk.Number) ? $receiver >=(1) : smalltalk.send($receiver, "__gt_eq", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [(1)]);})]));
return self;},
args: ["packageNameList", "prefix"],
source: unescape('importSTPackages%3A%20packageNameList%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importSTPackages%3A%20%23%28%27AmberProjectPage%27%29%0A%09%09prefix%3A%27%27%22%0A%0A%09%7C%20loadBlock%20%7C%0A%09loadBlock%20%3A%3D%20%5B%3Aindex%20%7C%20%7C%20packageName%20next%20%7C%0A%09%09packageName%20%3A%3D%20packageNameList%20at%3A%20index.%0A%09%09self%20get%3A%20prefix%2C%20%27st/%27%2C%20packageName%2C%20%27.st%27%20%20onComplete%3A%20%5B%3AjqXHR%20%3AtextStatus%20%7C%20%0A%09%09%09jqXHR%20readyState%20%3D%204%20ifTrue%3A%20%5B%20%7C%20chunks%20%7C%0A%09%09%09%09Importer%20new%20import%3A%20jqXHR%20responseText%20readStream.%0A%09%09%09%09self%20registerPackage%3A%20packageName%20at%3A%20prefix.%0A%09%09%09%09next%20%3A%3D%20index%20+%201.%0A%09%09%09%09next%20%3C%3D%20packageNameList%20size%0A%09%09%09%09%09ifTrue%3A%20%5B%20loadBlock%20value%3A%20next%20%5D%20%20%5D%5D%5D.%0A%09packageNameList%20size%20%3E%3D%201%20%0A%09%09ifTrue%3A%20%5B%20loadBlock%20value%3A%201%20%5D%0A'),
messageSends: ["at:", "get:onComplete:", unescape("%2C"), "ifTrue:", unescape("%3D"), "readyState", "import:", "new", "readStream", "responseText", "registerPackage:at:", unescape("+"), unescape("%3C%3D"), "size", "value:", unescape("%3E%3D")],
referencedClasses: ["Importer"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_packageRegistry'),
smalltalk.method({
selector: unescape('packageRegistry'),
category: 'registry',
fn: function (){
var self=this;
(($receiver = self['@packageRegistry']) == nil || $receiver == undefined) ? (function(){return (self['@packageRegistry']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@packageRegistry'];
return self;},
args: [],
source: unescape('packageRegistry%0A%09%22AmberProjectImporter%20packageRegistry%22%0A%0A%09packageRegistry%20ifNil%3A%20%5B%20packageRegistry%20%3A%3D%20Dictionary%20new%20%5D.%0A%09%5EpackageRegistry'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_prefixForPackage_'),
smalltalk.method({
selector: unescape('prefixForPackage%3A'),
category: 'registry',
fn: function (packageName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_packageRegistry", []), "_at_ifAbsent_", [packageName, (function(){return "";})]);
return self;},
args: ["packageName"],
source: unescape('prefixForPackage%3A%20packageName%0A%0A%09%5Eself%20packageRegistry%20at%3A%20packageName%20ifAbsent%3A%20%5B%27%27%5D'),
messageSends: ["at:ifAbsent:", "packageRegistry"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_registerPackage_at_'),
smalltalk.method({
selector: unescape('registerPackage%3Aat%3A'),
category: 'registry',
fn: function (packageName, prefix){
var self=this;
smalltalk.send(smalltalk.send(self, "_packageRegistry", []), "_at_put_", [packageName, prefix]);
return self;},
args: ["packageName", "prefix"],
source: unescape('registerPackage%3A%20packageName%20at%3A%20prefix%0A%0A%09self%20packageRegistry%20at%3A%20packageName%20put%3A%20prefix'),
messageSends: ["at:put:", "packageRegistry"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_resetRegistry'),
smalltalk.method({
selector: unescape('resetRegistry'),
category: 'registry',
fn: function (){
var self=this;
(self['@packageRegistry']=nil);
return self;},
args: [],
source: unescape('resetRegistry%0A%0A%09packageRegistry%20%3A%3D%20nil'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);


