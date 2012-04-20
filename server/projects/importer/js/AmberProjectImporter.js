smalltalk.addPackage('AmberProjectImporter', {});
smalltalk.addClass('AmberProjectImporter', smalltalk.Object, [], 'AmberProjectImporter');

smalltalk.addMethod(
unescape('_importSTPackage_prefix_'),
smalltalk.method({
selector: unescape('importSTPackage%3Aprefix%3A'),
category: 'not yet classified',
fn: function (packageName, prefix){
var self=this;
smalltalk.send(self, "_get_onComplete_", [smalltalk.send(smalltalk.send(prefix, "__comma", [packageName]), "__comma", [".st"]), (function(jqXHR, textStatus){return ((($receiver = smalltalk.send(smalltalk.send(jqXHR, "_readyState", []), "__eq", [(4)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));return smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));return smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);})]));})]);
return self;},
args: ["packageName", "prefix"],
source: unescape('importSTPackage%3A%20packageName%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importSTPackage%3A%20%27AmberProjectImporter%27%20%0A%09%09prefix%3A%20%27st/%27%22%0A%0A%09self%20get%3A%20prefix%2C%20packageName%2C%20%27.st%27%20onComplete%3A%20%5B%3AjqXHR%20%3AtextStatus%20%7C%20%0A%09%09%09jqXHR%20readyState%20%3D%204%20ifTrue%3A%20%5B%20%7Cchunks%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09chunks%20%3A%3D%20jqXHR%20responseText.%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09Importer%20new%20import%3A%20chunks%20readStream%20%5D%5D'),
messageSends: ["get:onComplete:", unescape("%2C"), "ifTrue:", unescape("%3D"), "readyState", "responseText", "import:", "new", "readStream"],
referencedClasses: ["Importer"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_importSTPackages_prefix_'),
smalltalk.method({
selector: unescape('importSTPackages%3Aprefix%3A'),
category: 'not yet classified',
fn: function (packageNameList, prefix){
var self=this;
var loadBlock=nil;
(loadBlock=(function(index){var packageName=nil;
var next=nil;
(packageName=smalltalk.send(packageNameList, "_at_", [index]));(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [smalltalk.send("import ", "__comma", [packageName])]);})((smalltalk.Transcript || Transcript));return smalltalk.send(self, "_get_onComplete_", [smalltalk.send(smalltalk.send(prefix, "__comma", [packageName]), "__comma", [".st"]), (function(jqXHR, textStatus){return ((($receiver = smalltalk.send(smalltalk.send(jqXHR, "_readyState", []), "__eq", [(4)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var chunks=nil;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(jqXHR, "_responseText", []), "_readStream", [])]);(next=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = next).klass === smalltalk.Number) ? $receiver <=smalltalk.send(packageNameList, "_size", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(packageNameList, "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [next]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [next]);})]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var chunks=nil;
smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(smalltalk.send(jqXHR, "_responseText", []), "_readStream", [])]);(next=((($receiver = index).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return ((($receiver = ((($receiver = next).klass === smalltalk.Number) ? $receiver <=smalltalk.send(packageNameList, "_size", []) : smalltalk.send($receiver, "__lt_eq", [smalltalk.send(packageNameList, "_size", [])]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [next]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [next]);})]));})]));})]);}));
((($receiver = ((($receiver = smalltalk.send(packageNameList, "_size", [])).klass === smalltalk.Number) ? $receiver >=(1) : smalltalk.send($receiver, "__gt_eq", [(1)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(loadBlock, "_value_", [(1)]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(loadBlock, "_value_", [(1)]);})]));
return self;},
args: ["packageNameList", "prefix"],
source: unescape('importSTPackages%3A%20packageNameList%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importSTPackages%3A%20%23%28%27AmberProjectPage%27%29%0A%09%09prefix%3A%20%27st/%27%22%0A%0A%09%7C%20loadBlock%20%7C%0A%09loadBlock%20%3A%3D%20%5B%3Aindex%20%7C%20%7C%20packageName%20next%20%7C%0A%09%09packageName%20%3A%3D%20packageNameList%20at%3A%20index.%0ATranscript%20cr%3B%20show%3A%20%27import%20%27%2C%20packageName.%0A%09%09self%20get%3A%20prefix%2C%20packageName%2C%20%27.st%27%20%20onComplete%3A%20%5B%3AjqXHR%20%3AtextStatus%20%7C%20%0A%09%09%09jqXHR%20readyState%20%3D%204%20ifTrue%3A%20%5B%20%7C%20chunks%20%7C%0A%09%09%09%09Importer%20new%20import%3A%20jqXHR%20responseText%20readStream.%0A%09%09%09%09next%20%3A%3D%20index%20+%201.%0A%09%09%09%09next%20%3C%3D%20packageNameList%20size%0A%09%09%09%09%09ifTrue%3A%20%5B%20loadBlock%20value%3A%20next%20%5D%20%20%5D%5D%5D.%0A%09packageNameList%20size%20%3E%3D%201%20%0A%09%09ifTrue%3A%20%5B%20loadBlock%20value%3A%201%20%5D%0A'),
messageSends: ["at:", "cr", "show:", unescape("%2C"), "get:onComplete:", "ifTrue:", unescape("%3D"), "readyState", "import:", "new", "readStream", "responseText", unescape("+"), unescape("%3C%3D"), "size", "value:", unescape("%3E%3D")],
referencedClasses: ["Transcript", "Importer"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_get_onComplete_'),
smalltalk.method({
selector: unescape('get%3AonComplete%3A'),
category: 'not yet classified',
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


