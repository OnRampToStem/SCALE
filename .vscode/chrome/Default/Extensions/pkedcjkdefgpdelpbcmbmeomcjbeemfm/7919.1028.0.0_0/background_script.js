'use strict';gb("mr.TestProvider");var Hu,ou,Iu=gb("mr.Init"),ffa=function(a){void 0!==a.use_views_dialog&&Iu.info("Using the "+(a.use_views_dialog?"Views (Harmony)":"WebUI")+" dialog.");void 0!==a.enable_cast_sink_query&&Iu.info("Native Cast MRP is "+(a.enable_cast_sink_query?"disabled":"enabled")+".");void 0!==a.enable_dial_sink_query&&Iu.info("Native DIAL MRP is "+(a.enable_dial_sink_query?"disabled":"enabled")+".");void 0!==a.use_mirroring_service&&Iu.info("Native Mirroring Service is "+(a.use_mirroring_service?"enabled":"disabled")+
".")};$p().init();Hu=new vb("MediaRouter.Provider.WakeDuration");ou=new zu;
var gfa=(new Promise(function(a,b){switch(window.location.host){case "enhhojjnijigcajfphajepfemndkmdlo":a();break;case "pkedcjkdefgpdelpbcmbmeomcjbeemfm":chrome.management.get("enhhojjnijigcajfphajepfemndkmdlo",function(c){chrome.runtime.lastError||!c.enabled?a():b(Error("Dev extension is enabled"))});break;default:b(Error("Unknown extension id"))}})).then(function(){return chrome.mojoPrivate&&chrome.mojoPrivate.requireAsync?new Promise(function(a){chrome.mojoPrivate.requireAsync("media_router_bindings").then(function(b){mojo=b.getMojoExports&&
b.getMojoExports();b.start().then(function(c){a({mrService:b,mrInstanceId:c.instance_id||c,mrConfig:c.config})})})}):Promise.reject(Error("No mojo service loaded"))}).then(function(a){if(!a.mrService)throw Error("Failed to get MR service");var b=a.mrInstanceId;if(!b)throw Error("Failed to get MR instance ID.");Iu.info("MR instance ID: "+b);ffa(a.mrConfig);var c=a.mrService;if(!ou)throw Error("providerManager not initialized.");c.setHandlers(ou);Ol(b)&&(Hu.g="MediaRouter.Provider.FirstWakeDuration");
chrome.runtime.onSuspend.addListener(Hu.end.bind(Hu));Aaa(b);Dca();b=Wea();window.addEventListener("unhandledrejection",function(d){d=d.reason;d.stack||(d=Error(d));Iu.error("Unhandled promise rejection.",d)});ou.initialize(c,b,a.mrConfig)}).then(void 0,function(a){Iu.K(a.message);throw a;});[].concat(n([nu(),ku()].concat(n(qo()),n([vs(),rs()])))).forEach(function(a){Ml(a)});nu().addListener();ku().addListener();chrome.runtime.onStartup.addListener(function(){});gfa.then(void 0,function(){return window.close()});