smalltalk.addPackage('AmberProjectImporter', {});
smalltalk.addClass('AmberProjectBrowser', smalltalk.Browser, [], 'AmberProjectImporter');
smalltalk.addMethod(
unescape('_commitPackage'),
smalltalk.method({
selector: unescape('commitPackage'),
category: 'actions',
fn: function (){
var self=this;
(($receiver = self['@selectedPackage']) != nil && $receiver != undefined) ? (function(){var exporter=nil;
return (exporter=smalltalk.send((smalltalk.AmberProjectImporter || AmberProjectImporter), "_exporterForPackage_", [self['@selectedPackage']]));})() : nil;
return self;},
args: [],
source: unescape('commitPackage%0A%09selectedPackage%20ifNotNil%3A%20%5B%20%7C%20exporter%20%7C%0A%09%09exporter%20%3A%3D%20AmberProjectImporter%20exporterForPackage%3A%20selectedPackage.%0A%09%5D'),
messageSends: ["ifNotNil:", "exporterForPackage:"],
referencedClasses: ["AmberProjectImporter"]
}),
smalltalk.AmberProjectBrowser);



smalltalk.addClass('AmberProjectExporter', smalltalk.Object, ['packageName', 'prefix'], 'AmberProjectImporter');
smalltalk.addMethod(
unescape('_ajaxPutAt_data_'),
smalltalk.method({
selector: unescape('ajaxPutAt%3Adata%3A'),
category: 'private',
fn: function (anURL, aString){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [anURL, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["PUT"]),smalltalk.send("data", "__minus_gt", [aString]),smalltalk.send("contentType", "__minus_gt", [unescape("text/plain%3Bcharset%3DUTF-8")]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("PUT request failed at:  ", "__comma", [anURL])]);})])])]);
return self;},
args: ["anURL", "aString"],
source: unescape('ajaxPutAt%3A%20anURL%20data%3A%20aString%0A%09jQuery%20%0A%09%09ajax%3A%20anURL%09options%3A%20%23%7B%09%27type%27%20-%3E%20%27PUT%27.%0A%09%09%09%09%09%09%09%09%27data%27%20-%3E%20aString.%0A%09%09%09%09%09%09%09%09%27contentType%27%20-%3E%20%27text/plain%3Bcharset%3DUTF-8%27.%0A%09%09%09%09%09%09%09%09%27error%27%20-%3E%20%5Bwindow%20alert%3A%20%27PUT%20request%20failed%20at%3A%20%20%27%2C%20anURL%5D%20%7D'),
messageSends: ["ajax:options:", unescape("-%3E"), "alert:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.AmberProjectExporter);

smalltalk.addMethod(
unescape('_export'),
smalltalk.method({
selector: unescape('export'),
category: 'exporting',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('export%0A%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.AmberProjectExporter);

smalltalk.addMethod(
unescape('_packageName'),
smalltalk.method({
selector: unescape('packageName'),
category: 'accessing',
fn: function (){
var self=this;
return self['@packageName'];
return self;},
args: [],
source: unescape('packageName%0A%0A%09%5EpackageName'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AmberProjectExporter);

smalltalk.addMethod(
unescape('_packageName_'),
smalltalk.method({
selector: unescape('packageName%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@packageName']=aString);
return self;},
args: ["aString"],
source: unescape('packageName%3A%20aString%0A%0A%09packageName%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AmberProjectExporter);

smalltalk.addMethod(
unescape('_prefix'),
smalltalk.method({
selector: unescape('prefix'),
category: 'accessing',
fn: function (){
var self=this;
(($receiver = self['@prefix']) == nil || $receiver == undefined) ? (function(){return (self['@prefix']="");})() : $receiver;
return self['@prefix'];
return self;},
args: [],
source: unescape('prefix%0A%0A%09prefix%20ifNil%3A%20%5B%20prefix%20%3A%3D%20%27%27%20%5D.%0A%09%5Eprefix'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.AmberProjectExporter);

smalltalk.addMethod(
unescape('_prefix_'),
smalltalk.method({
selector: unescape('prefix%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@prefix']=aString);
return self;},
args: ["aString"],
source: unescape('prefix%3A%20aString%0A%0A%09prefix%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.AmberProjectExporter);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'printing',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [smalltalk.send(self, "_prefix", [])]), "__comma", [" : "]), "__comma", [smalltalk.send(self, "_packageName", [])]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('printString%0A%0A%09%5Esuper%20printString%2C%20%27%28%27%2C%20self%20prefix%2C%20%27%20%3A%20%27%2C%20self%20packageName%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString", "prefix", "packageName"],
referencedClasses: []
}),
smalltalk.AmberProjectExporter);


smalltalk.addMethod(
unescape('_for_'),
smalltalk.method({
selector: unescape('for%3A'),
category: 'not yet classified',
fn: function (aType){
var self=this;
try{((($receiver = smalltalk.send(aType, "__eq_eq", [smalltalk.symbolFor("cypress")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_for_', fn: function(){return smalltalk.send((smalltalk.AmberProjectCypressExporter || AmberProjectCypressExporter), "_new", [])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_for_', fn: function(){return smalltalk.send((smalltalk.AmberProjectCypressExporter || AmberProjectCypressExporter), "_new", [])}})})();})]));
(function(){throw({name: 'stReturn', selector: '_for_', fn: function(){return smalltalk.send((smalltalk.AmberProjectStandardExporter || AmberProjectStandardExporter), "_new", [])}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_for_'){return e.fn()} throw(e)}},
args: ["aType"],
source: unescape('for%3A%20aType%0A%09%22%20%23st%2C%20%23js%20--%3E%20AmberProjectStandardExporter%22%0A%09%22%20%23cypress%20--%3E%20AmberProjectCypressExporter%22%0A%0A%09aType%20%3D%3D%20%23cypress%0A%09%09ifTrue%3A%20%5B%20%5EAmberProjectCypressExporter%20new%20%5D.%0A%09%5EAmberProjectStandardExporter%20new'),
messageSends: ["ifTrue:", unescape("%3D%3D"), "new"],
referencedClasses: ["AmberProjectCypressExporter", "AmberProjectStandardExporter"]
}),
smalltalk.AmberProjectExporter.klass);


smalltalk.addClass('AmberProjectCypressExporter', smalltalk.AmberProjectExporter, [], 'AmberProjectImporter');


smalltalk.addClass('AmberProjectStandardExporter', smalltalk.AmberProjectExporter, [], 'AmberProjectImporter');
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
smalltalk.AmberProjectStandardExporter);



smalltalk.addClass('AmberProjectImporter', smalltalk.Object, [], 'AmberProjectImporter');
smalltalk.AmberProjectImporter.comment=unescape('%23%23%20AmberProjectImporter%0A%0AAdd%20flexibility%20to%20your%20project%20structure.%0A%0AAmberProjectImporter%20allows%20you%20to%20store%20code%20in%20arbitrary%20locations%20on%20disk.%0A%0A%23%23%23%20Installation%0A%0AInclude%20the%20%60AmberProjectImporter.js%60%20file%20in%20your%20standard%20Amber%20load%20script%20in%20your%20%60index.html%60%20file%3A%0A%0A%60%60%60html%0A%3Chtml%3E%20%0A%20%20%3Chead%3E%20%0A%20%20%20%20%3Cscript%20src%3D%22js/amber.js%22%20type%3D%22text/javascript%22%3E%3C/script%3E%0A%20%20%3C/head%3E%0A%20%20%3Cbody%3E%0A%20%20%20%20%3Cscript%20type%3D%22text/javascript%22%3E%0A%20%20%20%20%20%20loadAmber%28%7B%0A%20%20%20%20%20%20%20%20files%3A%20%5B%20%27AmberProjectImporter.js%27%20%5D%2C%0A%20%20%20%20%20%20%20%20prefix%3A%20%27projects/hello/js%27%2C%0A%20%20%20%20%20%20%20%20ready%3A%20function%28%29%20%7B%7D%0A%20%20%20%20%20%20%20%20%7D%29%3B%20%0A%20%20%20%20%3C/script%3E%0A%20%20%3C/body%3E%20%0A%3C/html%3E%0A%60%60%60%0A')

smalltalk.AmberProjectImporter.klass.iVarNames = ['packageRegistry'];
smalltalk.addMethod(
unescape('_exporterForPackage_'),
smalltalk.method({
selector: unescape('exporterForPackage%3A'),
category: 'registry',
fn: function (packageName){
var self=this;
return smalltalk.send(smalltalk.send(self, "_packageRegistry", []), "_at_ifAbsent_", [packageName, (function(){return (function($rec){smalltalk.send($rec, "_packageName_", [packageName]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AmberProjectStandardExporter || AmberProjectStandardExporter), "_new", []));})]);
return self;},
args: ["packageName"],
source: unescape('exporterForPackage%3A%20packageName%0A%0A%09%5Eself%20packageRegistry%20at%3A%20packageName%20ifAbsent%3A%20%5B%28AmberProjectStandardExporter%20new%29%20packageName%3A%20packageName%3B%20yourself%5D'),
messageSends: ["at:ifAbsent:", "packageRegistry", "packageName:", "yourself", "new"],
referencedClasses: ["AmberProjectStandardExporter"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_get_url_onSuccess_'),
smalltalk.method({
selector: unescape('get%3Aurl%3AonSuccess%3A'),
category: 'private',
fn: function (type, ajaxUrl, successBlock){
var self=this;
try{((($receiver = smalltalk.send(type, "__eq_eq", [smalltalk.symbolFor("st")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_get_url_onSuccess_', fn: function(){return smalltalk.send(self, "_getSt_onSuccess_", [ajaxUrl, successBlock])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_get_url_onSuccess_', fn: function(){return smalltalk.send(self, "_getSt_onSuccess_", [ajaxUrl, successBlock])}})})();})]));
((($receiver = smalltalk.send(type, "__eq_eq", [smalltalk.symbolFor("js")])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (function(){throw({name: 'stReturn', selector: '_get_url_onSuccess_', fn: function(){return smalltalk.send(self, "_getJs_onSuccess_", [ajaxUrl, successBlock])}})})();})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (function(){throw({name: 'stReturn', selector: '_get_url_onSuccess_', fn: function(){return smalltalk.send(self, "_getJs_onSuccess_", [ajaxUrl, successBlock])}})})();})]));
smalltalk.send(self, "_error_", [smalltalk.send("Unknown type: ", "__comma", [smalltalk.send(type, "_printString", [])])]);
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_get_url_onSuccess_'){return e.fn()} throw(e)}},
args: ["type", "ajaxUrl", "successBlock"],
source: unescape('get%3A%20type%20url%3A%20ajaxUrl%20onSuccess%3A%20successBlock%0A%09%0A%09type%20%3D%3D%20%23st%20ifTrue%3A%20%5B%20%5Eself%20%20getSt%3A%20ajaxUrl%20onSuccess%3A%20successBlock%20%5D.%0A%09type%20%3D%3D%20%23js%20ifTrue%3A%20%5B%20%5Eself%20%20getJs%3A%20ajaxUrl%20onSuccess%3A%20successBlock%20%5D.%0A%09self%20error%3A%20%27Unknown%20type%3A%20%27%2C%20type%20printString'),
messageSends: ["ifTrue:", unescape("%3D%3D"), "getSt:onSuccess:", "getJs:onSuccess:", "error:", unescape("%2C"), "printString"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_getJs_onSuccess_'),
smalltalk.method({
selector: unescape('getJs%3AonSuccess%3A'),
category: 'private',
fn: function (ajaxUrl, successBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_getScript_onSuccess_", [ajaxUrl, successBlock]);
return self;},
args: ["ajaxUrl", "successBlock"],
source: unescape('getJs%3A%20ajaxUrl%20onSuccess%3A%20successBlock%0A%0A%09jQuery%20%0A%09%09getScript%3A%20ajaxUrl%0A%09%09onSuccess%3A%20successBlock'),
messageSends: ["getScript:onSuccess:"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_getSt_onSuccess_'),
smalltalk.method({
selector: unescape('getSt%3AonSuccess%3A'),
category: 'private',
fn: function (ajaxUrl, successBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [ajaxUrl, smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("complete", "__minus_gt", [(function(jqXHR, textStatus){return ((($receiver = smalltalk.send(smalltalk.send(jqXHR, "_readyState", []), "__eq", [(4)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var chunks=nil;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(jqXHR, "_responseText", []), "_readStream", [])]);return smalltalk.send(successBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var chunks=nil;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(jqXHR, "_responseText", []), "_readStream", [])]);return smalltalk.send(successBlock, "_value", []);})]));})])])]);
return self;},
args: ["ajaxUrl", "successBlock"],
source: unescape('getSt%3A%20ajaxUrl%20onSuccess%3A%20successBlock%0A%0A%09jQuery%20%0A%09%09ajax%3A%20ajaxUrl%0A%20%20%20%20%20%20%20%20%09options%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%20%20%20%20%09%09%09%27complete%27%20-%3E%20%5B%3AjqXHR%20%3AtextStatus%20%7C%20%0A%09%09%09jqXHR%20readyState%20%3D%204%20ifTrue%3A%20%5B%20%7C%20chunks%20%7C%0A%09%09%09%09Importer%20new%20import%3A%20jqXHR%20responseText%20readStream.%0A%09%09%09%09successBlock%20value%20%20%5D%5D%0A%09%09%7D'),
messageSends: ["ajax:options:", unescape("-%3E"), "ifTrue:", unescape("%3D"), "readyState", "import:", "new", "readStream", "responseText", "value"],
referencedClasses: ["Importer"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_import_subDir_packages_extension_prefix_'),
smalltalk.method({
selector: unescape('import%3AsubDir%3Apackages%3Aextension%3Aprefix%3A'),
category: 'private',
fn: function (type, packageSubDir, packageNameList, extension, prefix){
var self=this;
var loadBlock=nil;
(loadBlock=(function(index){var packageName=nil;
var next=nil;
(packageName=smalltalk.send(packageNameList, "_at_", [index]));return smalltalk.send(self, "_get_url_onSuccess_", [type, smalltalk.send(smalltalk.send(smalltalk.send(prefix, "__comma", [packageSubDir]), "__comma", [packageName]), "__comma", [extension]), (function(){smalltalk.send((smalltalk.Package || Package), "_init_", [packageName]);smalltalk.send(self, "_registerPackage_type_prefix_", [packageName, type, smalltalk.send(prefix, "__comma", [packageSubDir])]);(next=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = next).klass === smalltalk.Number) ? $receiver <=smalltalk.send(packageNameList, "_size", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(packageNameList, "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [next]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [next]);})]));})]);}));
((($receiver = ((($receiver = smalltalk.send(packageNameList, "_size", [])).klass === smalltalk.Number) ? $receiver >=(1) : smalltalk.send($receiver, "__gt_eq", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [(1)]);})]));
return self;},
args: ["type", "packageSubDir", "packageNameList", "extension", "prefix"],
source: unescape('import%3A%20type%20subDir%3A%20packageSubDir%20packages%3A%20packageNameList%20extension%3A%20extension%20prefix%3A%20prefix%0A%0A%09%7C%20loadBlock%20%7C%0A%09loadBlock%20%3A%3D%20%5B%3Aindex%20%7C%20%7C%20packageName%20next%20%7C%0A%09%09packageName%20%3A%3D%20packageNameList%20at%3A%20index.%0A%09%09self%20%0A%09%09%09get%3A%20type%0A%09%09%09url%3A%20%28prefix%2C%20packageSubDir%2C%20packageName%2C%20extension%29%20%0A%09%09%09onSuccess%3A%20%5B%20%0A%09%09%09%09Package%20init%3A%20packageName.%0A%09%09%09%09self%20registerPackage%3A%20packageName%20type%3A%20type%20prefix%3Aprefix%2C%20packageSubDir.%0A%09%09%09%09next%20%3A%3D%20index%20+%201.%0A%09%09%09%09next%20%3C%3D%20packageNameList%20size%0A%09%09%09%09%09ifTrue%3A%20%5B%20loadBlock%20value%3A%20next%20%5D%5D%5D.%0A%09packageNameList%20size%20%3E%3D%201%20%0A%09%09ifTrue%3A%20%5B%20loadBlock%20value%3A%201%20%5D%0A'),
messageSends: ["at:", "get:url:onSuccess:", unescape("%2C"), "init:", "registerPackage:type:prefix:", unescape("+"), "ifTrue:", unescape("%3C%3D"), "size", "value:", unescape("%3E%3D")],
referencedClasses: ["Package"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_importDeployJsPackages_prefix_'),
smalltalk.method({
selector: unescape('importDeployJsPackages%3Aprefix%3A'),
category: 'importing',
fn: function (packageNameList, prefix){
var self=this;
smalltalk.send(self, "_import_subDir_packages_extension_prefix_", [smalltalk.symbolFor("js"), unescape("js/"), packageNameList, ".deploy.js", prefix]);
return self;},
args: ["packageNameList", "prefix"],
source: unescape('importDeployJsPackages%3A%20packageNameList%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importDeployJsPackages%3A%20%23%28%27AmberProjectPage%27%29%0A%09%09prefix%3A%27%27%22%0A%0A%09self%20%0A%09%09import%3A%20%23js%20%0A%09%09subDir%3A%20%27js/%27%20%0A%09%09packages%3A%20packageNameList%20%0A%09%09extension%3A%20%27.deploy.js%27%20%0A%09%09prefix%3A%20prefix'),
messageSends: ["import:subDir:packages:extension:prefix:"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_importJsPackages_prefix_'),
smalltalk.method({
selector: unescape('importJsPackages%3Aprefix%3A'),
category: 'importing',
fn: function (packageNameList, prefix){
var self=this;
smalltalk.send(self, "_import_subDir_packages_extension_prefix_", [smalltalk.symbolFor("js"), unescape("js/"), packageNameList, ".js", prefix]);
return self;},
args: ["packageNameList", "prefix"],
source: unescape('importJsPackages%3A%20packageNameList%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importJsPackages%3A%20%23%28%27AmberProjectPage%27%29%0A%09%09prefix%3A%27%27%22%0A%0A%09self%20%0A%09%09import%3A%20%23js%20%0A%09%09subDir%3A%20%27js/%27%20%0A%09%09packages%3A%20packageNameList%20%0A%09%09extension%3A%20%27.js%27%20%0A%09%09prefix%3A%20prefix'),
messageSends: ["import:subDir:packages:extension:prefix:"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_importStPackages_prefix_'),
smalltalk.method({
selector: unescape('importStPackages%3Aprefix%3A'),
category: 'importing',
fn: function (packageNameList, prefix){
var self=this;
smalltalk.send(self, "_import_subDir_packages_extension_prefix_", [smalltalk.symbolFor("st"), unescape("st/"), packageNameList, ".st", prefix]);
return self;},
args: ["packageNameList", "prefix"],
source: unescape('importStPackages%3A%20packageNameList%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importStPackages%3A%20%23%28%27AmberProjectPage%27%29%0A%09%09prefix%3A%27%27%22%0A%0A%09self%20%0A%09%09import%3A%20%23st%20%0A%09%09subDir%3A%20%27st/%27%20%0A%09%09packages%3A%20packageNameList%20%0A%09%09extension%3A%20%27.st%27%20%0A%09%09prefix%3A%20prefix'),
messageSends: ["import:subDir:packages:extension:prefix:"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", ["I was initialized"]);})((smalltalk.Transcript || Transcript));
return self;},
args: [],
source: unescape('initialize%0A%0A%09Transcript%20cr%3B%20show%3A%20%27I%20was%20initialized%27'),
messageSends: ["cr", "show:"],
referencedClasses: ["Transcript"]
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
unescape('_registerPackage_type_prefix_'),
smalltalk.method({
selector: unescape('registerPackage%3Atype%3Aprefix%3A'),
category: 'registry',
fn: function (packageName, type, prefix){
var self=this;
smalltalk.send(smalltalk.send(self, "_packageRegistry", []), "_at_put_", [packageName, (function($rec){smalltalk.send($rec, "_packageName_", [packageName]);smalltalk.send($rec, "_prefix_", [prefix]);return smalltalk.send($rec, "_yourself", []);})(smalltalk.send((smalltalk.AmberProjectExporter || AmberProjectExporter), "_for_", [type]))]);
return self;},
args: ["packageName", "type", "prefix"],
source: unescape('registerPackage%3A%20packageName%20type%3A%20type%20prefix%3A%20prefix%0A%0A%09self%20packageRegistry%20at%3A%20packageName%20put%3A%20%28%28AmberProjectExporter%20for%3A%20type%29%20packageName%3A%20packageName%3B%20prefix%3A%20prefix%3B%20yourself%29'),
messageSends: ["at:put:", "packageRegistry", "packageName:", "prefix:", "yourself", "for:"],
referencedClasses: ["AmberProjectExporter"]
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


