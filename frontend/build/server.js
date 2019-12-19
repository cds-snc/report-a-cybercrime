module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "56f9acab378dbf406f16";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/*!***************************!*\
  !*** ./build/assets.json ***!
  \***************************/
/*! exports provided: client, , default */
/***/ (function(module) {

module.exports = {"client":{"js":"http://localhost:3001/static/js/bundle.js"},"":{"svg":["http://localhost:3001/static/media/rcmpbrandingeng.753068ac.svg","http://localhost:3001/static/media/rcmpbrandingfre.16af643f.svg","http://localhost:3001/static/media/upload.447b6090.svg"]}};

/***/ }),

/***/ "./locale/en/messages.js":
/*!*******************************!*\
  !*** ./locale/en/messages.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */module.exports={languageData:{"plurals":function(n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}},messages:{": Add files":": Add files",": Clues about the suspect":": Clues about the suspect",": Contact information":": Contact information",": Impact of the scam":": Impact of the scam",": Money lost":": Money lost",": Review report":": Review report",": What happened":": What happened","<0>Amount of money</0>":"<0>Amount of money</0>","<0>Currency</0>":"<0>Currency</0>","<0>Email address</0>":"<0>Email address</0>","<0>Full name</0>":"<0>Full name</0>","<0>How did it start?</0>":"<0>How did it start?</0>","<0>How did you pay the scammer?</0>":"<0>How did you pay the scammer?</0>","<0>IP address</0>":"<0>IP address</0>","<0>Language of communications</0>":"<0>Language of communications</0>","<0>Mailing address</0>":"<0>Mailing address</0>","<0>Name</0>":"<0>Name</0>","<0>Phone number</0>":"<0>Phone number</0>","<0>Website link</0>":"<0>Website link</0>","<0>What happened?</0>":"<0>What happened?</0>","<0>When did it start?</0>":"<0>When did it start?</0>","<0>\u25C0</0> <1>Back to</1> <2>{children}</2>":function(a){return["<0>\u25C0</0> <1>Back to</1> <2>",a("children"),"</2>"]},"ALPHA":"ALPHA","About the suspect":"About the suspect","Add clues about the suspect":"Add clues about the suspect","Add file":"Add file","Amount":"Amount","Any information about where, when, and how the scam took place is helpful for police.":"Any information about where, when, and how the scam took place is helpful for police.","Any information that was used by the scammer can help police identify suspects.":"Any information that was used by the scammer can help police identify suspects.","Are you reporting a scam that happened to you?":"Are you reporting a scam that happened to you?","Attach any supporting files":"Attach any supporting files","Attach supporting files":"Attach supporting files","Canadian dollar":"Canadian dollar","Cancel report":"Cancel report","Cash":"Cash","Contact information":"Contact information","Contacted by":"Contacted by","Credit card":"Credit card","Currency":"Currency","Date":"Date","Describe the scam":"Describe the scam","Describe what happened":"Describe what happened","Description":"Description","Device or account hacked":"Device or account hacked","Did the scam happened to you":"Did the scam happened to you","Did you lose any money as part of this scam?":"Did you lose any money as part of this scam?","Do you have any information on where the scam came from?":"Do you have any information on where the scam came from?","Do you have documents, screenshots, or receipts?":"Do you have documents, screenshots, or receipts?","E-transfer":"E-transfer","Edit":"Edit","Edit contact info":"Edit contact info","Edit contact information":"Edit contact information","Edit files attached":"Edit files attached","Edit impact":"Edit impact","Edit money lost":"Edit money lost","Edit scam event":"Edit scam event","Edit scammer details":"Edit scammer details","Edit scammer information":"Edit scammer information","Edit timeframe":"Edit timeframe","Edit what happened":"Edit what happened","Email":"Email","Email address":"Email address","English":"English","Enter your contact information":"Enter your contact information","Euro":"Euro","File name":"File name","Files attached":"Files attached","For example: April 28, 2019":"For example: April 28, 2019","French":"French","Gift card":"Gift card","IP address":"IP address","Include any messages, conversations, receipts, or other evidence that shows what happened.":"Include any messages, conversations, receipts, or other evidence that shows what happened.","Information stolen":"Information stolen","Language of correspondence":"Language of correspondence","Mailing address":"Mailing address","Money lost":"Money lost","Name":"Name","Next":"Next","Next: Contact information":"Next: Contact information","Next: Review report":"Next: Review report","No":"No","No impact":"No impact","Other":"Other","Other currency":"Other currency","Other language":"Other language","Other method":"Other method","Other method of payment":"Other method of payment","Page not found":"Page not found","Payment method":"Payment method","Phone number":"Phone number","Please attach one file at a time.":"Please attach one file at a time.","Please fill out all fields":"Please fill out all fields","Privacy":"Privacy","Prototype 1":"Prototype 1","Prototype 2":"Prototype 2","Remove file":"Remove file","Report a scam":"Report a scam","Report now \u276F":"Report now \u276F","Reputation damaged":"Reputation damaged","Review report information":"Review report information","Safety threatened":"Safety threatened","Skip to main content":"Skip to main content","Sorry, the page you were trying to view does not exist.":"Sorry, the page you were trying to view does not exist.","Step {activeStep} of {totalSteps}":function(a){return["Step ",a("activeStep")," of ",a("totalSteps")]},"Submit report \xA0 \u276F":"Submit report \xA0 \u276F","Telephone":"Telephone","Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate these crimes.":"Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate these crimes.","Tell us about the money lost":"Tell us about the money lost","Tell us how much money was lost":"Tell us how much money was lost","Terms and Conditions":"Terms and Conditions","Thank you for reporting":"Thank you for reporting","The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.":"The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.","The police will not get your money back, but understanding the impact of the scam can help build a case.":"The police will not get your money back, but understanding the impact of the scam can help build a case.","This site will change as we test ideas.":"This site will change as we test ideas.","U.S. dollar":"U.S. dollar","Warning! This is a prototype. It won't actually submit your report to the RCMP.":"Warning! This is a prototype. It won't actually submit your report to the RCMP.","Website":"Website","Wellbeing affected":"Wellbeing affected","What happened":"What happened","Would you like to be contacted, should the police need more information?":"Would you like to be contacted, should the police need more information?","Yes":"Yes","You will be asked to:":"You will be asked to:","Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.":"Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.","confirmationPage.ImpactTitle":"Impact","confirmationPage.contactIntro":"Provide your contact details so that we can send you a confirmation of your report.","confirmationPage.contactTitle":"Contact","confirmationPage.impactIntro":"Tell us how the scam impacted you so that we can better support other people who are affected.","confirmationPage.scamIntro":"Tell us about your experience so we can stop it from happening again.","confirmationPage.scamTitle":"Scam","confirmationPage.suspectIntro":"Share any details you may know so that police can try to identify suspects.","confirmationPage.suspectTitle":"Suspect","confirmationPage.timeFrameIntro":"If you can, give us an idea of when the scam took place so that police are able to look into it.","confirmationPage.timeFrameTitle":"Timeframe","confirmationPage.title":"Review your report","contact information":"contact information","contactinfoPage.backButton":"the impact","contactinfoPage.emailAddress":"Email address","contactinfoPage.fullName":"Full name","contactinfoPage.intro":"We will use this to send you a confirmation email and to link your report to other reports in your area.","contactinfoPage.postCode":"Postal code","contactinfoPage.title":"Leave your contact information","fileUpload.added":"File added","fileUpload.removed":"File removed","impactPage.backButton":"the suspect","impactPage.detail":"What was the impact of the scam?","impactPage.example":"For example: the amount of money, the information taken, what else was affected","impactPage.intro":"You're not the only one affected by this scam. Help protect others by telling us how the scam affected you.","impactPage.summary":"Tell us more about how it impacted you.","impactPage.title":"Impact caused by the scam","landingPage.intro":"Scams can happen to anyone. They\u2019re not always easy to recognize and new ones are invented every day.","landingPage.nextButton":"Report now \u276F","landingPage.required0":"Before you start, gather what you can about the scam:","landingPage.required1":"Dates when it took place","landingPage.required2":"Descriptions of what happened","landingPage.required3":"Details on where it came from","landingPage.required4":"Documents, screenshots, or receipts","landingPage.summary":"Your report helps the RCMP learn about these crimes and helps police across Canada catch cybercriminals.","landingPage.title":"Report a scam","loading...":"loading...","money lost":"money lost","nextStepsPage.helpResource":"Where you can get help","nextStepsPage.helpResource1":"Talk to someone and get support","nextStepsPage.helpResource2":"Find tips to protect yourself in the future","nextStepsPage.helpResource3":"Follow what scams are trending","nextStepsPage.nextStepDetail":"The RCMP will analyze your report and combine it with others that are similar to help police across Canada track down cybercriminals.","nextStepsPage.nextStepSummary":"What happens next","nextStepsPage.otherReportOption":"You have other reporting options","nextStepsPage.otherReportOption1":"Report directly to the place where the scam happened.","nextStepsPage.otherReportOption2":"Report to your financial institution, if you lost money.","nextStepsPage.otherReportOption3":"Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.","nextStepsPage.summary":"We've sent you an email with a summary of your report. Your reference number is <0>#NC300234234</0>.","nextStepsPage.title":"Thank you for reporting","previous page":"previous page","scammerDetail.addFileButtom":"Add file","scammerDetail.backButton":"the scam","scammerDetail.detail1":"Who the scammer claimed to be","scammerDetail.detail2":"Where they asked you to send things","scammerDetail.detail3":"What language they used to communicate","scammerDetail.detail4":"Any screenshots, messages, or receipts","scammerDetail.details":"Think about including things such as:","scammerDetail.fileDescription":"Describe what this file shows","scammerDetail.intro":"Any clues about the source of the scam can help police track down the scammer.","scammerDetail.reminder":"Remember to include any email addresses, phone numbers, or website links","scammerDetail.removeFileButton":"Remove file","scammerDetail.summary":"What do you know about where the scam came from?","scammerDetail.title":"Add suspect clues","start page":"start page","supporting files":"supporting files","suspect clues":"suspect clues","timeFramePage.backButton":"the start page","timeFramePage.endDate":"Approximate end","timeFramePage.endDateExample":"For example: 2019-04-28","timeFramePage.intro":"It\u2019s okay if you don\u2019t know exactly when it took place. You can give your best guess or leave this blank.","timeFramePage.startDate":"Approximate start","timeFramePage.startDateExample":"For example: 2019-04-28","timeFramePage.title":"When did the scam happen?","what happened":"what happened","whatHappendPage.backButton":"the timeframe","whatHappendPage.details1":"Think about including things such as:","whatHappendPage.details2":"Which app, website, or device you were using","whatHappendPage.details3":"How the scammer contacted you","whatHappendPage.details4":"What they promised, threatened, or stole","whatHappendPage.hint":"Tell us about it in your own words.","whatHappendPage.intro1":"What happened is not your fault. Scammers use a number of techniques to get what they want.","whatHappendPage.summary":"<0>What happened?</0>","whatHappendPage.title":"Describe what happened","your contact information":"your contact information","{0, plural, one {# file attached} other {# files attached}}":function(a){return[a("0","plural",{one:["#"," file attached"],other:["#"," files attached"]})]},"{startDate} to {endDate}":function(a){return[a("startDate")," to ",a("endDate")]},"\u276E \xA0 Report another scam":"\u276E \xA0 Report another scam"}};

/***/ }),

/***/ "./locale/fr/messages.js":
/*!*******************************!*\
  !*** ./locale/fr/messages.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */module.exports={languageData:{"plurals":function(n,ord){if(ord)return n==1?"one":"other";return n>=0&&n<2?"one":"other"}},messages:{": Add files":" : Ajouter des fichiers",": Clues about the suspect":" : Renseignements sur le suspect",": Contact information":" : Coordonn\xE9es",": Impact of the scam":" : R\xE9percussions de la fraude",": Money lost":" : Argent perdu",": Review report":" : R\xE9vision du rapport",": What happened":" : Description de la fraude","<0>Amount of money</0>":"<0>Montant d'argent</0>","<0>Currency</0>":"<0>Devise</0>","<0>Email address</0>":"<0>Adresse courriel</0>","<0>Full name</0>":"<0>Nom complet</0>","<0>How did it start?</0>":"<0>De quelle fa\xE7on l'incident a-t-il commenc\xE9?</0>","<0>How did you pay the scammer?</0>":"<0>Comment avez-vous pay\xE9 le fraudeur?</0>","<0>IP address</0>":"<0>Adresse IP</0>","<0>Language of communications</0>":"<0>Langue de communication</0>","<0>Mailing address</0>":"<0>Adresse postale</0>","<0>Name</0>":"<0>Nom</0>","<0>Phone number</0>":"<0>Num\xE9ro de t\xE9l\xE9phone</0>","<0>Website link</0>":"<0>Lien vers un site Web</0>","<0>What happened?</0>":"<0>Que s'est-il pass\xE9?</0>","<0>When did it start?</0>":"<0>\xC0 quel moment l'incident a-t-il commenc\xE9?</0>","<0>\u25C0</0> <1>Back to</1> <2>{children}</2>":function(a){return["<0>\u25C0</0> <1>Retourner</1> <2>",a("children"),"</2>"]},"ALPHA":"ALPHA","About the suspect":"\xC0 propos du suspect","Add clues about the suspect":"Fournissez des renseignements sur le suspect","Add file":"Ajouter un fichier","Amount":"Montant d'argent","Any information about where, when, and how the scam took place is helpful for police.":"Tout renseignement sur le lieu, le moment et le d\xE9roulement de l'incident est utile pour la police.","Any information that was used by the scammer can help police identify suspects.":"Tout renseignement fourni par le fraudeur peut aider la police \xE0 trouver des suspects.","Are you reporting a scam that happened to you?":"\xCAtes-vous la personne vis\xE9e par la fraude que vous signalez?","Attach any supporting files":"Joindre des documents li\xE9s \xE0 la fraude","Attach supporting files":"Joignez des documents li\xE9s \xE0 l'incident","Canadian dollar":"Dollar canadien","Cancel report":"Annuler le rapport","Cash":"En argent comptant","Contact information":"Coordonn\xE9es","Contacted by":"Contact\xE9 par","Credit card":"Par carte de cr\xE9dit","Currency":"Devise","Date":"Date","Describe the scam":"D\xE9crire la fraude","Describe what happened":"D\xE9crivez ce qui s'est pass\xE9","Description":"Description","Device or account hacked":"Piratage d'appareil ou de compte","Did the scam happened to you":"\xCAtes-vous la personne vis\xE9e?","Did you lose any money as part of this scam?":"Avez-vous perdu de l'argent suite \xE0 cette fraude?","Do you have any information on where the scam came from?":"Avez-vous des renseignements sur l'auteur de la fraude?","Do you have documents, screenshots, or receipts?":"Avez-vous des documents, des captures d'\xE9cran ou des re\xE7us?","E-transfer":"Par transfert \xE9lectronique d'argent","Edit":"Modifier","Edit contact info":"Modifier les coordonn\xE9es","Edit contact information":"Modifier vos coordonn\xE9es","Edit files attached":"Modifier les fichiers joints","Edit impact":"Modifier les r\xE9percussions","Edit money lost":"Modifier le montant d'argent perdu","Edit scam event":"Modifier l'incidence de fraude","Edit scammer details":"Modifier les renseignements sur le fraudeur","Edit scammer information":"Modifier les information reli\xE9es au fraudeur","Edit timeframe":"Modifier les dates","Edit what happened":"Modifier la description de ce qui s'est pass\xE9","Email":"Par courriel","Email address":"Adresse de courriel","English":"Anglais","Enter your contact information":"Entrez vos coordonn\xE9es","Euro":"Euro","File name":"Nom du fichier","Files attached":"Fichiers joints","For example: April 28, 2019":"Par exemple: 28 avril 2019","French":"Fran\xE7ais","Gift card":"Sous forme de carte-cadeau","IP address":"Adresse IP","Include any messages, conversations, receipts, or other evidence that shows what happened.":"Vous pouvez inclure  des messages, des conversations, des re\xE7us, ou tout autre \xE9l\xE9ment de preuve li\xE9 \xE0 la fraude.","Information stolen":"Vol de renseignements","Language of correspondence":"Langue de correspondance","Mailing address":"Adresse postale","Money lost":"Perte d'argent","Name":"Nom","Next":"\xC9tape suivante","Next: Contact information":"\xC9tape suivante : Coordonn\xE9es","Next: Review report":"\xC9tape suivante : R\xE9vision du rapport","No":"Non","No impact":"Aucune r\xE9percussion","Other":"Autre","Other currency":"Autre monnaie","Other language":"Autre langue","Other method":"Autre m\xE9thode","Other method of payment":"Autre m\xE9thode de paiement","Page not found":"Page introuvable","Payment method":"Mode de paiement","Phone number":"Num\xE9ro de t\xE9l\xE9phone","Please attach one file at a time.":"Veuillez joindre un fichier \xE0 la fois.","Please fill out all fields":"Veuillez remplir tous les champs","Privacy":"Confidentialit\xE9","Prototype 1":"Prototype 1","Prototype 2":"Prototype 2","Remove file":"Supprimer le fichier","Report a scam":"Signalez une fraude","Report now \u276F":"Signaler maintenant \u276F","Reputation damaged":"R\xE9putation compromise","Review report information":"R\xE9visez les renseignements signal\xE9s","Safety threatened":"S\xE9curit\xE9 mise en danger","Skip to main content":"Aller au contenu principal","Sorry, the page you were trying to view does not exist.":"D\xE9sol\xE9, la page que vous essayiez de voir n'existe pas.","Step {activeStep} of {totalSteps}":function(a){return["\xC9tape ",a("activeStep")," de ",a("totalSteps")]},"Submit report \xA0 \u276F":"Envoyer le rapport  \u276F","Telephone":"Au t\xE9l\xE9phone","Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate these crimes.":"Informez le Groupe national de coordination contre la cybercriminalit\xE9 de la GRC de l'incidence d'une fraude pour aider les services de police partout au Canada avec leurs enqu\xEAtes.","Tell us about the money lost":"Indiquez le montant d'argent qui a \xE9t\xE9 perdu","Tell us how much money was lost":"Indiquer le montant d'argent que vous avez perdu","Terms and Conditions":"Avis","Thank you for reporting":"Merci de votre signalement","The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.":"Le <0>Groupe national de coordination contre la cybercriminalit\xE9 de la GRC</0> \xE9valuera l'information et la combinera avec d'autres rapports pour aider la police \xE0 trouver les fraudeurs.","The police will not get your money back, but understanding the impact of the scam can help build a case.":"La police ne r\xE9cup\xE9rera pas votre argent, mais comprendre les r\xE9percussions de la fraude peut l'aider \xE0 monter un dossier.","This site will change as we test ideas.":"Le site changera \xE0 mesure que nous testons des id\xE9es.","U.S. dollar":"Dollar am\xE9ricain","Warning! This is a prototype. It won't actually submit your report to the RCMP.":"Attention! Ce site est un prototype. Vos renseignements ne seront pas r\xE9ellement transmis \xE0 la GRC.","Website":"Sur un site web","Wellbeing affected":"Bien-\xEAtre affect\xE9","What happened":"Ce qui s'est pass\xE9","Would you like to be contacted, should the police need more information?":"Aimeriez-vous que la police fasse un suivi aupr\xE8s de vous si elle a besoin de plus d'information?","Yes":"Oui","You will be asked to:":"Vous pourrez :","Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.":"Votre num\xE9ro de r\xE9f\xE9rence est le <0>#NC300234234</0>. Conservez ce num\xE9ro dans vos dossiers pour ajouter des informations plus tard.","confirmationPage.ImpactTitle":"R\xE9percussions","confirmationPage.contactIntro":"Indiquez vos coordonn\xE9es afin que nous puissions vous envoyer une confirmation de votre rapport.","confirmationPage.contactTitle":"Contact","confirmationPage.impactIntro":"Dites-nous en quoi l\u2019escroquerie vous a touch\xE9 afin que nous puissions mieux aider les autres personnes touch\xE9es.","confirmationPage.scamIntro":"Parlez-nous de votre exp\xE9rience afin que nous puissions emp\xEAcher que cela se reproduise.","confirmationPage.scamTitle":"Arnaque","confirmationPage.suspectIntro":"Partagez tous les d\xE9tails que vous pouvez conna\xEEtre afin que la police puisse essayer d'identifier les suspects.","confirmationPage.suspectTitle":"Suspecte","confirmationPage.timeFrameIntro":"Si vous le pouvez, donnez-nous une id\xE9e du moment o\xF9 l'escroquerie a eu lieu afin que la police puisse enqu\xEAter.","confirmationPage.timeFrameTitle":"Plage de temps","confirmationPage.title":"R\xE9visez votre rapport","contact information":"\xE0 vos coordonn\xE9es","contactinfoPage.backButton":"l'impact","contactinfoPage.emailAddress":"Adresse e-mail","contactinfoPage.fullName":"Nom complet","contactinfoPage.intro":"Nous allons utiliser cela pour vous envoyer un email de confirmation et pour lier votre rapport \xE0 d'autres rapports dans votre r\xE9gion.","contactinfoPage.postCode":"Code postal","contactinfoPage.title":"Laissez vos coordonn\xE9es","fileUpload.added":"Fichier ajout\xE9","fileUpload.removed":"Fichier supprim\xE9","impactPage.backButton":"le suspect","impactPage.detail":"Quel a \xE9t\xE9 l'impact de l'escroquerie?","impactPage.example":"Par exemple: le montant d'argent, l'information prise, quoi d'autre a \xE9t\xE9 affect\xE9","impactPage.intro":"Vous n'\xEAtes pas le seul concern\xE9 par cette arnaque. Aidez \xE0 prot\xE9ger les autres en nous expliquant comment l\u2019escroquerie vous a affect\xE9.","impactPage.summary":"Dites-nous en plus sur l'impact que cela a eu sur vous.","impactPage.title":"Impact caus\xE9 par l'escroquerie","landingPage.intro":"N'importe qui peut \xEAtre victime d'une fraude. De nouvelles fraudes sont invent\xE9es chaque jour, et elles ne sont pas toujours facile \xE0 reconna\xEEtre.","landingPage.nextButton":"Signaler maintenant \u276F","landingPage.required0":"Avant de commencer, recueillez les informations que vous pouvez au sujet de la fraude :","landingPage.required1":"Dates auxquelles la fraude a eu lieu","landingPage.required2":"Descriptions de ce qui s'est pass\xE9","landingPage.required3":"D\xE9tails sur l'origine de la fraude","landingPage.required4":"Documents, captures d'\xE9crans ou re\xE7us","landingPage.summary":"Votre signalement aide la GRC \xE0 en apprendre plus sur ces crimes. Il aidera aussi les services de police partout au Canada \xE0 trouver les cybercriminels.","landingPage.title":"Signalez une fraude","loading...":"chargement en cours...","money lost":"\xE0 l'argent perdu","nextStepsPage.helpResource":"O\xF9 pouvez-vous obtenir de l'aide?","nextStepsPage.helpResource1":"Parler \xE0 quelqu'un et obtenir de l'aide","nextStepsPage.helpResource2":"Trouvez des astuces pour vous prot\xE9ger dans le futur","nextStepsPage.helpResource3":"Suivez les tendances des arnaques","nextStepsPage.nextStepDetail":"La GRC analysera votre rapport et le combinera avec d'autres documents semblables pour aider la police \xE0 travers le Canada \xE0 traquer les cybercriminels.","nextStepsPage.nextStepSummary":"Qu'est-ce qui se passe ensuite","nextStepsPage.otherReportOption":"Vous avez d'autres options de rapport","nextStepsPage.otherReportOption1":"Rendez-vous directement \xE0 l'endroit o\xF9 l'escroquerie s'est produite.","nextStepsPage.otherReportOption2":"Pr\xE9sentez-vous \xE0 votre institution financi\xE8re si vous avez perdu de l'argent.","nextStepsPage.otherReportOption3":"Signaler aux bureaux de cr\xE9dit, <0> Equifax </0> et <1> TransUnion </1>, si votre identit\xE9 a \xE9t\xE9 vol\xE9e","nextStepsPage.summary":"Nous vous avons envoy\xE9 un courrier \xE9lectronique avec un r\xE9sum\xE9 de votre rapport. Votre num\xE9ro de r\xE9f\xE9rence est <0>#NC300234234</0>.","nextStepsPage.title":"Merci d'avoir signal\xE9","previous page":"\xE0 la page pr\xE9c\xE9dente","scammerDetail.addFileButtom":"Ajouter le fichier","scammerDetail.backButton":"l'arnaque","scammerDetail.detail1":"Qui l'escroc a pr\xE9tendu \xEAtre","scammerDetail.detail2":"O\xF9 ils vous ont demand\xE9 d'envoyer des choses","scammerDetail.detail3":"Quelle langue ils utilisaient pour communiquer","scammerDetail.detail4":"Des captures d'\xE9cran, des messages ou des re\xE7us","scammerDetail.details":"Pensez \xE0 inclure des choses telles que:","scammerDetail.fileDescription":"D\xE9crivez ce que ce fichier montre","scammerDetail.intro":"Tout indice sur la source de l\u2019escroquerie peut aider la police \xE0 retrouver l\u2019escroc.","scammerDetail.reminder":"N'oubliez pas d'inclure vos adresses \xE9lectroniques, num\xE9ros de t\xE9l\xE9phone ou liens de sites Web.","scammerDetail.removeFileButton":"Effacer le fichier","scammerDetail.summary":"Que savez-vous sur l'origine de l'arnaque","scammerDetail.title":"Ajouter des indices suspects","start page":"\xE0 la premi\xE8re page","supporting files":"aux documents li\xE9s \xE0 l'incident","suspect clues":"aux renseignements sur le suspect","timeFramePage.backButton":"la page de d\xE9marrage","timeFramePage.endDate":"Fin approximative","timeFramePage.endDateExample":"Par exemple: 2019-04-28","timeFramePage.intro":"Ce n\u2019est pas grave si vous ne savez pas exactement quand cela a eu lieu. Vous pouvez donner votre meilleure estimation ou laisser ce champ vide.","timeFramePage.startDate":"D\xE9but approximatif","timeFramePage.startDateExample":"Par exemple: 2019-04-28","timeFramePage.title":"Quand l'escroquerie est-elle arriv\xE9e?","what happened":"\xE0 ce qui s'est pass\xE9","whatHappendPage.backButton":"Le d\xE9lai","whatHappendPage.details1":"Pensez \xE0 inclure des choses telles que:","whatHappendPage.details2":"Quel app, site Web ou appareil que vous utilisiez","whatHappendPage.details3":"Comment l'escroc vous a contact\xE9","whatHappendPage.details4":"Ce qu'ils ont promis, menac\xE9 ou vol\xE9","whatHappendPage.hint":"Parlez-nous en vos propres mots","whatHappendPage.intro1":"Ce qui s'est pass\xE9 n'est pas de ta faute. Les escrocs utilisent un certain nombre de techniques pour obtenir ce qu'ils veulent.","whatHappendPage.summary":"Qu'est-il arriv\xE9?","whatHappendPage.title":"D\xE9crivez ce qui s'est pass\xE9","your contact information":"\xE0 vos coordonn\xE9es","{0, plural, one {# file attached} other {# files attached}}":function(a){return[a("0","plural",{one:["#"," fichier joint"],other:["#"," fichiers joints"]})]},"{startDate} to {endDate}":function(a){return[a("startDate")," au ",a("endDate")]},"\u276E \xA0 Report another scam":"\u276E \xA0 Signaler une autre fraude"}};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				"[HMR] Consider using the NamedModulesPlugin for module names."
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/* eslint-disable node/no-unsupported-features/node-builtins */
var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?300":
/*!*********************************!*\
  !*** (webpack)/hot/poll.js?300 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if (true) {
	var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if (module.hot.status() === "idle") {
			module.hot
				.check(true)
				.then(function(updatedModules) {
					if (!updatedModules) {
						if (fromUpdate) log("info", "[HMR] Update applied.");
						return;
					}
					__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
					checkForUpdate(true);
				})
				.catch(function(err) {
					var status = module.hot.status();
					if (["abort", "fail"].indexOf(status) >= 0) {
						log("warning", "[HMR] Cannot apply update.");
						log("warning", "[HMR] " + (err.stack || err.message));
						log("warning", "[HMR] You need to restart the application!");
					} else {
						log(
							"warning",
							"[HMR] Update failed: " + (err.stack || err.message)
						);
					}
				});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {}

/* WEBPACK VAR INJECTION */}.call(this, "?300"))

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./src/theme/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet-async */ "react-helmet-async");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_topbanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topbanner */ "./src/components/topbanner/index.js");
/* harmony import */ var _components_phase_banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/phase-banner */ "./src/components/phase-banner/index.js");
/* harmony import */ var _components_warning_banner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/warning-banner */ "./src/components/warning-banner/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_skip_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/skip-link */ "./src/components/skip-link/index.js");
/**@jsx jsx **/

















var _ref =  false ? undefined : {
  name: "fb80mx-App",
  styles: "html,body{height:100%;}body{margin:0;padding:0;}#root{display:flex;flex-direction:column;height:100%;}@font-face{font-family:'robotobold';src:url('fonts/roboto-bold.woff2') format('woff2'),url('fonts/roboto-bold.woff') format('woff');font-weight:bold;font-style:normal;}label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFMkIiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9BcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgSTE4biB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEhvbWUgfSBmcm9tICcuL0hvbWUnXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQtYXN5bmMnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBHRVRfTEFOR1VBR0VfUVVFUlkgfSBmcm9tICcuL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5pbXBvcnQgeyBUb3BCYW5uZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9wYmFubmVyJ1xuaW1wb3J0IHsgUGhhc2VCYW5uZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcGhhc2UtYmFubmVyJ1xuaW1wb3J0IHsgV2FybmluZ0Jhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy93YXJuaW5nLWJhbm5lcidcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXInXG5pbXBvcnQgeyBGb290ZXJMaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IFNraXBMaW5rIH0gZnJvbSAnLi9jb21wb25lbnRzL3NraXAtbGluaydcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8STE4bj5cbiAgICB7KHsgaTE4biB9KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UXVlcnkgcXVlcnk9e0dFVF9MQU5HVUFHRV9RVUVSWX0+XG4gICAgICAgICAgeyh7IGRhdGE6IHsgbGFuZ3VhZ2UgfSB9KSA9PiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICAgICAgPGh0bWwgbGFuZz17bGFuZ3VhZ2V9IC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpMThuKSByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx0aXRsZSBsYW5nPXtsYW5ndWFnZX0+e2kxOG4uXygnUmVwb3J0IGEgc2NhbScpfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9tYW5pZmVzdC5qc29uXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgICAgICAgICBzaXplcz1cIjE5MngxOTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICAgICAgICAgY29uc3QgYXBwSW5zaWdodHMgPSByZXF1aXJlKFwiYXBwbGljYXRpb25pbnNpZ2h0c1wiKTtcbiAgICAgICAgICAgICAgICAgIGFwcEluc2lnaHRzLnNldHVwKFwiZDllNzJlMTQtYTRmOC00NjdjLWJkOGItYjRlM2E2ZjBjMjI5XCIpO1xuICAgICAgICAgICAgICAgICAgYXBwSW5zaWdodHMuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgd2luZG93Ll9fQVBPTExPX1NUQVRFX189JHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UsXG4gICAgICAgICAgICAgIH0pfWB9XG4gICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAoXG4gICAgICAgICAgICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2Utd29ya2VyLmpzJylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgICAgPEdsb2JhbFxuICAgICAgICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICNyb290IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogdXJsKCdmb250cy9yb2JvdG8tYm9sZC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICAgICAgICAgICAgICAgICB1cmwoJ2ZvbnRzL3JvYm90by1ib2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICA8U2tpcExpbmsgaW52aXNpYmxlIGhyZWY9XCIjbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+U2tpcCB0byBtYWluIGNvbnRlbnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9Ta2lwTGluaz5cblxuICAgICAgICAgICAgICAgICAgPFdhcm5pbmdCYW5uZXIgLz5cbiAgICAgICAgICAgICAgICAgIDxQaGFzZUJhbm5lciBwaGFzZT17PFRyYW5zPkFMUEhBPC9UcmFucz59IHBoYXNlQ29sb3I9XCJwdXJwbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlRoaXMgc2l0ZSB3aWxsIGNoYW5nZSBhcyB3ZSB0ZXN0IGlkZWFzLjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1BoYXNlQmFubmVyPlxuICAgICAgICAgICAgICAgICAgPFRvcEJhbm5lciBsYW5nPXtsYW5ndWFnZX0gYmc9XCJibGFja1wiIC8+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPENvbnRlbnQgaWQ9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgICA8SG9tZSAvPlxuICAgICAgICAgICAgICAgIDwvQ29udGVudD5cblxuICAgICAgICAgICAgICAgIDxGb290ZXIgYmc9XCJibGFja1wiPlxuICAgICAgICAgICAgICAgICAgPEZvb3RlckxpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdlbidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2h0dHBzOi8vZGlnaXRhbC5jYW5hZGEuY2EvbGVnYWwvcHJpdmFjeS8nXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdodHRwczovL251bWVyaXF1ZS5jYW5hZGEuY2EvdHJhbnNwYXJlbmNlL2NvbmZpZGVudGlhbGl0ZS8nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlByaXZhY3k8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9Gb290ZXJMaW5rPlxuICAgICAgICAgICAgICAgICAgPEZvb3RlckxpbmtcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdlbidcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2h0dHBzOi8vZGlnaXRhbC5jYW5hZGEuY2EvbGVnYWwvdGVybXMvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaHR0cHM6Ly9udW1lcmlxdWUuY2FuYWRhLmNhL3RyYW5zcGFyZW5jZS9hdmlzLydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+VGVybXMgYW5kIENvbmRpdGlvbnM8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9Gb290ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvRm9vdGVyPlxuICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUXVlcnk+XG4gICAgICApXG4gICAgfX1cbiAgPC9JMThuPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdfQ== */"
};

var App = function App() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["I18n"], null, function (_ref2) {
    var i18n = _ref2.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
      query: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__["GET_LANGUAGE_QUERY"]
    }, function (_ref3) {
      var language = _ref3.data.language;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_helmet_async__WEBPACK_IMPORTED_MODULE_7__["Helmet"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("html", {
        lang: language
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("meta", {
        charset: "utf-8"
      }), "console.log(i18n) return (", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("title", {
        lang: language
      }, i18n._('Report a scam')), ")", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("link", {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "/apple-touch-icon.png"
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("script", null, "const appInsights = require(\"applicationinsights\"); appInsights.setup(\"d9e72e14-a4f8-467c-bd8b-b4e3a6f0c229\"); appInsights.start();"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("script", null, "\n              window.__APOLLO_STATE__=".concat(JSON.stringify({
        language: language
      }))),  false ? undefined : null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["Global"], {
        styles: _ref
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(emotion_theming__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
        theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"]
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_skip_link__WEBPACK_IMPORTED_MODULE_15__["SkipLink"], {
        invisible: true,
        href: "#main"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
        id: "Skip to main content"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_warning_banner__WEBPACK_IMPORTED_MODULE_11__["WarningBanner"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_phase_banner__WEBPACK_IMPORTED_MODULE_10__["PhaseBanner"], {
        phase: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
          id: "ALPHA"
        }),
        phaseColor: "purple"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
        id: "This site will change as we test ideas."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_topbanner__WEBPACK_IMPORTED_MODULE_9__["TopBanner"], {
        lang: language,
        bg: "black"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_14__["Content"], {
        id: "main"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Home__WEBPACK_IMPORTED_MODULE_6__["Home"], null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_footer__WEBPACK_IMPORTED_MODULE_12__["Footer"], {
        bg: "black"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_13__["FooterLink"], {
        href: language === 'en' ? 'https://digital.canada.ca/legal/privacy/' : 'https://numerique.canada.ca/transparence/confidentialite/'
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
        id: "Privacy"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_13__["FooterLink"], {
        href: language === 'en' ? 'https://digital.canada.ca/legal/terms/' : 'https://numerique.canada.ca/transparence/avis/'
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
        id: "Terms and Conditions"
      })))));
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageNotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageNotFound */ "./src/PageNotFound.js");
/* harmony import */ var _RootLandingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RootLandingPage */ "./src/RootLandingPage.js");
/* harmony import */ var _p1_FileUploadPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./p1/FileUploadPage */ "./src/p1/FileUploadPage.js");
/* harmony import */ var _p1_SuspectInfoYesNoPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./p1/SuspectInfoYesNoPage */ "./src/p1/SuspectInfoYesNoPage.js");
/* harmony import */ var _p1_ScamInfoPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./p1/ScamInfoPage */ "./src/p1/ScamInfoPage.js");
/* harmony import */ var _p1_MoneyLostPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./p1/MoneyLostPage */ "./src/p1/MoneyLostPage.js");
/* harmony import */ var _p1_ConfirmationPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./p1/ConfirmationPage */ "./src/p1/ConfirmationPage.js");
/* harmony import */ var _p1_SuspectInfoPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./p1/SuspectInfoPage */ "./src/p1/SuspectInfoPage.js");
/* harmony import */ var _p1_ContactInfoPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./p1/ContactInfoPage */ "./src/p1/ContactInfoPage.js");
/* harmony import */ var _p1_MoneyLostYesNoPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./p1/MoneyLostYesNoPage */ "./src/p1/MoneyLostYesNoPage.js");
/* harmony import */ var _p1_ThankYou__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./p1/ThankYou */ "./src/p1/ThankYou.js");
/* harmony import */ var _p1_WillBeContactedYesNoPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./p1/WillBeContactedYesNoPage */ "./src/p1/WillBeContactedYesNoPage.js");
/* harmony import */ var _p1_LandingPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./p1/LandingPage */ "./src/p1/LandingPage.js");
/* harmony import */ var _p1_FileUploadYesNoPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./p1/FileUploadYesNoPage */ "./src/p1/FileUploadYesNoPage.js");
/* harmony import */ var _p2_LandingPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./p2/LandingPage */ "./src/p2/LandingPage.js");
/* harmony import */ var _p2_WhatHappenedPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./p2/WhatHappenedPage */ "./src/p2/WhatHappenedPage.js");
/* harmony import */ var _p2_ContactInfoPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./p2/ContactInfoPage */ "./src/p2/ContactInfoPage.js");
/* harmony import */ var _p2_ScammerDetailsPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./p2/ScammerDetailsPage */ "./src/p2/ScammerDetailsPage.js");
/* harmony import */ var _p2_ConfirmationPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./p2/ConfirmationPage */ "./src/p2/ConfirmationPage.js");
/* harmony import */ var _p2_NextSteps__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./p2/NextSteps */ "./src/p2/NextSteps.js");
/* harmony import */ var _p2_TimeFramePage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./p2/TimeFramePage */ "./src/p2/TimeFramePage.js");
/* harmony import */ var _p2_ImpactStatementPage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./p2/ImpactStatementPage */ "./src/p2/ImpactStatementPage.js");


























var Root =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s00",
  label: "Root"
})( false ? undefined : {
  name: "b35c62",
  styles: "margin:20pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQjBCIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZCB9IGZyb20gJy4vUGFnZU5vdEZvdW5kJ1xuaW1wb3J0IHsgUm9vdExhbmRpbmdQYWdlIH0gZnJvbSAnLi9Sb290TGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBGaWxlVXBsb2FkUGFnZSB9IGZyb20gJy4vcDEvRmlsZVVwbG9hZFBhZ2UnXG5pbXBvcnQgeyBTdXNwZWN0aW5mbyB9IGZyb20gJy4vcDEvU3VzcGVjdEluZm9ZZXNOb1BhZ2UnXG5pbXBvcnQgeyBTY2FtSW5mb1BhZ2UgfSBmcm9tICcuL3AxL1NjYW1JbmZvUGFnZSdcbmltcG9ydCB7IE1vbmV5TG9zdFBhZ2UgfSBmcm9tICcuL3AxL01vbmV5TG9zdFBhZ2UnXG5pbXBvcnQgeyBDb25maXJtYXRpb25QYWdlIH0gZnJvbSAnLi9wMS9Db25maXJtYXRpb25QYWdlJ1xuaW1wb3J0IHsgU3VzcGVjdEluZm9QYWdlIH0gZnJvbSAnLi9wMS9TdXNwZWN0SW5mb1BhZ2UnXG5pbXBvcnQgeyBDb250YWN0SW5mb1BhZ2UgfSBmcm9tICcuL3AxL0NvbnRhY3RJbmZvUGFnZSdcbmltcG9ydCB7IExvc2VNb25leSB9IGZyb20gJy4vcDEvTW9uZXlMb3N0WWVzTm9QYWdlJ1xuaW1wb3J0IHsgVGhhbmtZb3UgfSBmcm9tICcuL3AxL1RoYW5rWW91J1xuaW1wb3J0IHsgV2lsbGJlY29udGFjdGVkIH0gZnJvbSAnLi9wMS9XaWxsQmVDb250YWN0ZWRZZXNOb1BhZ2UnXG5pbXBvcnQgeyBMYW5kaW5nUGFnZSB9IGZyb20gJy4vcDEvTGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBGaWxlc1RvVXBsb2FkIH0gZnJvbSAnLi9wMS9GaWxlVXBsb2FkWWVzTm9QYWdlJ1xuaW1wb3J0IHsgTGFuZGluZ1BhZ2UgYXMgUDJMYW5kaW5nUGFnZSB9IGZyb20gJy4vcDIvTGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBXaGF0SGFwcGVuZWRQYWdlIGFzIFAyV2hhdEhhcHBlbmVkUGFnZSB9IGZyb20gJy4vcDIvV2hhdEhhcHBlbmVkUGFnZSdcbmltcG9ydCB7IENvbnRhY3RJbmZvUGFnZSBhcyBQMkNvbnRhY3RJbmZvUGFnZSB9IGZyb20gJy4vcDIvQ29udGFjdEluZm9QYWdlJ1xuaW1wb3J0IHsgU2NhbW1lckRldGFpbHNQYWdlIGFzIFAyU2NhbW1lckRldGFpbHNQYWdlIH0gZnJvbSAnLi9wMi9TY2FtbWVyRGV0YWlsc1BhZ2UnXG5pbXBvcnQgeyBDb25maXJtYXRpb25QYWdlIGFzIFAyQ29uZmlybWF0aW9uUGFnZSB9IGZyb20gJy4vcDIvQ29uZmlybWF0aW9uUGFnZSdcbmltcG9ydCB7IE5leHRTdGVwcyBhcyBQMk5leHRTdGVwcyB9IGZyb20gJy4vcDIvTmV4dFN0ZXBzJ1xuaW1wb3J0IHsgVGltZUZyYW1lUGFnZSBhcyBQMlRpbWVGcmFtZVBhZ2UgfSBmcm9tICcuL3AyL1RpbWVGcmFtZVBhZ2UnXG5pbXBvcnQgeyBJbXBhY3RTdGF0ZW1lbnRQYWdlIGFzIFAySW1wYWN0U3RhdGVtZW50UGFnZSB9IGZyb20gJy4vcDIvSW1wYWN0U3RhdGVtZW50UGFnZSdcblxuY29uc3QgUm9vdCA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbjogMjBwdDtcbmBcbmNvbnN0IFNjcmVlbiA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbi10b3A6IDA7XG5gXG5cbmNvbnN0IFNjcm9sbFRvVG9wID0gKHsgY2hpbGRyZW4sIGxvY2F0aW9uIH0pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCA2MCksIFtsb2NhdGlvbi5wYXRobmFtZV0pXG4gIHJldHVybiBjaGlsZHJlblxufVxuXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPFJvb3Q+XG4gICAgPFNjcmVlbj5cbiAgICAgIDxSb3V0ZXIgcHJpbWFyeT17ZmFsc2V9PlxuICAgICAgICA8U2Nyb2xsVG9Ub3AgZGVmYXVsdD5cbiAgICAgICAgICA8UGFnZU5vdEZvdW5kIGRlZmF1bHQgLz5cbiAgICAgICAgICA8Um9vdExhbmRpbmdQYWdlIHBhdGg9XCIvXCIgLz5cblxuICAgICAgICAgIDxMYW5kaW5nUGFnZSBwYXRoPVwiL3AxXCIgLz5cbiAgICAgICAgICA8U2NhbUluZm9QYWdlIHBhdGg9XCIvcDEvc2NhbWluZm9cIiAvPlxuICAgICAgICAgIDxTdXNwZWN0aW5mbyBwYXRoPVwiL3AxL3N1c3BlY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxTdXNwZWN0SW5mb1BhZ2UgcGF0aD1cIi9wMS9zdXNwZWN0aW5mb1wiIC8+XG4gICAgICAgICAgPExvc2VNb25leSBwYXRoPVwiL3AxL21vbmV5bG9zdHF1ZXN0aW9uXCIgLz5cbiAgICAgICAgICA8TW9uZXlMb3N0UGFnZSBwYXRoPVwiL3AxL21vbmV5bG9zdFwiIC8+XG4gICAgICAgICAgPEZpbGVzVG9VcGxvYWQgcGF0aD1cIi9wMS91cGxvYWRmaWxlc3F1ZXN0aW9uXCIgLz5cbiAgICAgICAgICA8RmlsZVVwbG9hZFBhZ2UgcGF0aD1cIi9wMS91cGxvYWRmaWxlc1wiIC8+XG4gICAgICAgICAgPFdpbGxiZWNvbnRhY3RlZCBwYXRoPVwiL3AxL2NvbnRhY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxDb250YWN0SW5mb1BhZ2UgcGF0aD1cIi9wMS9jb250YWN0aW5mb1wiIC8+XG4gICAgICAgICAgPENvbmZpcm1hdGlvblBhZ2UgcGF0aD1cIi9wMS9jb25maXJtYXRpb25cIiAvPlxuICAgICAgICAgIDxUaGFua1lvdSBwYXRoPVwiL3AxL3RoYW5reW91XCIgLz5cblxuICAgICAgICAgIDxQMkxhbmRpbmdQYWdlIHBhdGg9XCIvcDJcIiAvPlxuICAgICAgICAgIDxQMldoYXRIYXBwZW5lZFBhZ2UgcGF0aD1cIi9wMi93aGF0aGFwcGVuZWRcIiAvPlxuICAgICAgICAgIDxQMkNvbnRhY3RJbmZvUGFnZSBwYXRoPVwiL3AyL2NvbnRhY3RpbmZvXCIgLz5cbiAgICAgICAgICA8UDJTY2FtbWVyRGV0YWlsc1BhZ2UgcGF0aD1cIi9wMi9zY2FtbWVyZGV0YWlsc1wiIC8+XG4gICAgICAgICAgPFAyQ29uZmlybWF0aW9uUGFnZSBwYXRoPVwiL3AyL2NvbmZpcm1hdGlvblwiIC8+XG4gICAgICAgICAgPFAyTmV4dFN0ZXBzIHBhdGg9XCIvcDIvbmV4dHN0ZXBzXCIgLz5cbiAgICAgICAgICA8UDJUaW1lRnJhbWVQYWdlIHBhdGg9XCIvcDIvdGltZWZyYW1lXCIgLz5cbiAgICAgICAgICA8UDJJbXBhY3RTdGF0ZW1lbnRQYWdlIHBhdGg9XCIvcDIvaW1wYWN0XCIgLz5cbiAgICAgICAgPC9TY3JvbGxUb1RvcD5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
});

var Screen =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s01",
  label: "Screen"
})( false ? undefined : {
  name: "8kn4zf",
  styles: "margin-top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvSG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QjRCIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvSG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZCB9IGZyb20gJy4vUGFnZU5vdEZvdW5kJ1xuaW1wb3J0IHsgUm9vdExhbmRpbmdQYWdlIH0gZnJvbSAnLi9Sb290TGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBGaWxlVXBsb2FkUGFnZSB9IGZyb20gJy4vcDEvRmlsZVVwbG9hZFBhZ2UnXG5pbXBvcnQgeyBTdXNwZWN0aW5mbyB9IGZyb20gJy4vcDEvU3VzcGVjdEluZm9ZZXNOb1BhZ2UnXG5pbXBvcnQgeyBTY2FtSW5mb1BhZ2UgfSBmcm9tICcuL3AxL1NjYW1JbmZvUGFnZSdcbmltcG9ydCB7IE1vbmV5TG9zdFBhZ2UgfSBmcm9tICcuL3AxL01vbmV5TG9zdFBhZ2UnXG5pbXBvcnQgeyBDb25maXJtYXRpb25QYWdlIH0gZnJvbSAnLi9wMS9Db25maXJtYXRpb25QYWdlJ1xuaW1wb3J0IHsgU3VzcGVjdEluZm9QYWdlIH0gZnJvbSAnLi9wMS9TdXNwZWN0SW5mb1BhZ2UnXG5pbXBvcnQgeyBDb250YWN0SW5mb1BhZ2UgfSBmcm9tICcuL3AxL0NvbnRhY3RJbmZvUGFnZSdcbmltcG9ydCB7IExvc2VNb25leSB9IGZyb20gJy4vcDEvTW9uZXlMb3N0WWVzTm9QYWdlJ1xuaW1wb3J0IHsgVGhhbmtZb3UgfSBmcm9tICcuL3AxL1RoYW5rWW91J1xuaW1wb3J0IHsgV2lsbGJlY29udGFjdGVkIH0gZnJvbSAnLi9wMS9XaWxsQmVDb250YWN0ZWRZZXNOb1BhZ2UnXG5pbXBvcnQgeyBMYW5kaW5nUGFnZSB9IGZyb20gJy4vcDEvTGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBGaWxlc1RvVXBsb2FkIH0gZnJvbSAnLi9wMS9GaWxlVXBsb2FkWWVzTm9QYWdlJ1xuaW1wb3J0IHsgTGFuZGluZ1BhZ2UgYXMgUDJMYW5kaW5nUGFnZSB9IGZyb20gJy4vcDIvTGFuZGluZ1BhZ2UnXG5pbXBvcnQgeyBXaGF0SGFwcGVuZWRQYWdlIGFzIFAyV2hhdEhhcHBlbmVkUGFnZSB9IGZyb20gJy4vcDIvV2hhdEhhcHBlbmVkUGFnZSdcbmltcG9ydCB7IENvbnRhY3RJbmZvUGFnZSBhcyBQMkNvbnRhY3RJbmZvUGFnZSB9IGZyb20gJy4vcDIvQ29udGFjdEluZm9QYWdlJ1xuaW1wb3J0IHsgU2NhbW1lckRldGFpbHNQYWdlIGFzIFAyU2NhbW1lckRldGFpbHNQYWdlIH0gZnJvbSAnLi9wMi9TY2FtbWVyRGV0YWlsc1BhZ2UnXG5pbXBvcnQgeyBDb25maXJtYXRpb25QYWdlIGFzIFAyQ29uZmlybWF0aW9uUGFnZSB9IGZyb20gJy4vcDIvQ29uZmlybWF0aW9uUGFnZSdcbmltcG9ydCB7IE5leHRTdGVwcyBhcyBQMk5leHRTdGVwcyB9IGZyb20gJy4vcDIvTmV4dFN0ZXBzJ1xuaW1wb3J0IHsgVGltZUZyYW1lUGFnZSBhcyBQMlRpbWVGcmFtZVBhZ2UgfSBmcm9tICcuL3AyL1RpbWVGcmFtZVBhZ2UnXG5pbXBvcnQgeyBJbXBhY3RTdGF0ZW1lbnRQYWdlIGFzIFAySW1wYWN0U3RhdGVtZW50UGFnZSB9IGZyb20gJy4vcDIvSW1wYWN0U3RhdGVtZW50UGFnZSdcblxuY29uc3QgUm9vdCA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbjogMjBwdDtcbmBcbmNvbnN0IFNjcmVlbiA9IHN0eWxlZCgnZGl2JylgXG4gIG1hcmdpbi10b3A6IDA7XG5gXG5cbmNvbnN0IFNjcm9sbFRvVG9wID0gKHsgY2hpbGRyZW4sIGxvY2F0aW9uIH0pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHdpbmRvdy5zY3JvbGxUbygwLCA2MCksIFtsb2NhdGlvbi5wYXRobmFtZV0pXG4gIHJldHVybiBjaGlsZHJlblxufVxuXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPFJvb3Q+XG4gICAgPFNjcmVlbj5cbiAgICAgIDxSb3V0ZXIgcHJpbWFyeT17ZmFsc2V9PlxuICAgICAgICA8U2Nyb2xsVG9Ub3AgZGVmYXVsdD5cbiAgICAgICAgICA8UGFnZU5vdEZvdW5kIGRlZmF1bHQgLz5cbiAgICAgICAgICA8Um9vdExhbmRpbmdQYWdlIHBhdGg9XCIvXCIgLz5cblxuICAgICAgICAgIDxMYW5kaW5nUGFnZSBwYXRoPVwiL3AxXCIgLz5cbiAgICAgICAgICA8U2NhbUluZm9QYWdlIHBhdGg9XCIvcDEvc2NhbWluZm9cIiAvPlxuICAgICAgICAgIDxTdXNwZWN0aW5mbyBwYXRoPVwiL3AxL3N1c3BlY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxTdXNwZWN0SW5mb1BhZ2UgcGF0aD1cIi9wMS9zdXNwZWN0aW5mb1wiIC8+XG4gICAgICAgICAgPExvc2VNb25leSBwYXRoPVwiL3AxL21vbmV5bG9zdHF1ZXN0aW9uXCIgLz5cbiAgICAgICAgICA8TW9uZXlMb3N0UGFnZSBwYXRoPVwiL3AxL21vbmV5bG9zdFwiIC8+XG4gICAgICAgICAgPEZpbGVzVG9VcGxvYWQgcGF0aD1cIi9wMS91cGxvYWRmaWxlc3F1ZXN0aW9uXCIgLz5cbiAgICAgICAgICA8RmlsZVVwbG9hZFBhZ2UgcGF0aD1cIi9wMS91cGxvYWRmaWxlc1wiIC8+XG4gICAgICAgICAgPFdpbGxiZWNvbnRhY3RlZCBwYXRoPVwiL3AxL2NvbnRhY3RpbmZvcXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxDb250YWN0SW5mb1BhZ2UgcGF0aD1cIi9wMS9jb250YWN0aW5mb1wiIC8+XG4gICAgICAgICAgPENvbmZpcm1hdGlvblBhZ2UgcGF0aD1cIi9wMS9jb25maXJtYXRpb25cIiAvPlxuICAgICAgICAgIDxUaGFua1lvdSBwYXRoPVwiL3AxL3RoYW5reW91XCIgLz5cblxuICAgICAgICAgIDxQMkxhbmRpbmdQYWdlIHBhdGg9XCIvcDJcIiAvPlxuICAgICAgICAgIDxQMldoYXRIYXBwZW5lZFBhZ2UgcGF0aD1cIi9wMi93aGF0aGFwcGVuZWRcIiAvPlxuICAgICAgICAgIDxQMkNvbnRhY3RJbmZvUGFnZSBwYXRoPVwiL3AyL2NvbnRhY3RpbmZvXCIgLz5cbiAgICAgICAgICA8UDJTY2FtbWVyRGV0YWlsc1BhZ2UgcGF0aD1cIi9wMi9zY2FtbWVyZGV0YWlsc1wiIC8+XG4gICAgICAgICAgPFAyQ29uZmlybWF0aW9uUGFnZSBwYXRoPVwiL3AyL2NvbmZpcm1hdGlvblwiIC8+XG4gICAgICAgICAgPFAyTmV4dFN0ZXBzIHBhdGg9XCIvcDIvbmV4dHN0ZXBzXCIgLz5cbiAgICAgICAgICA8UDJUaW1lRnJhbWVQYWdlIHBhdGg9XCIvcDIvdGltZWZyYW1lXCIgLz5cbiAgICAgICAgICA8UDJJbXBhY3RTdGF0ZW1lbnRQYWdlIHBhdGg9XCIvcDIvaW1wYWN0XCIgLz5cbiAgICAgICAgPC9TY3JvbGxUb1RvcD5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvU2NyZWVuPlxuICA8L1Jvb3Q+XG4pXG4iXX0= */"
});

var ScrollToTop = function ScrollToTop(_ref) {
  var children = _ref.children,
      location = _ref.location;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    return window.scrollTo(0, 60);
  }, [location.pathname]);
  return children;
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Root, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Screen, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Router"], {
    primary: false
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ScrollToTop, {
    "default": true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PageNotFound__WEBPACK_IMPORTED_MODULE_3__["PageNotFound"], {
    "default": true
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RootLandingPage__WEBPACK_IMPORTED_MODULE_4__["RootLandingPage"], {
    path: "/"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_LandingPage__WEBPACK_IMPORTED_MODULE_15__["LandingPage"], {
    path: "/p1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_ScamInfoPage__WEBPACK_IMPORTED_MODULE_7__["ScamInfoPage"], {
    path: "/p1/scaminfo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_SuspectInfoYesNoPage__WEBPACK_IMPORTED_MODULE_6__["Suspectinfo"], {
    path: "/p1/suspectinfoquestion"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_SuspectInfoPage__WEBPACK_IMPORTED_MODULE_10__["SuspectInfoPage"], {
    path: "/p1/suspectinfo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_MoneyLostYesNoPage__WEBPACK_IMPORTED_MODULE_12__["LoseMoney"], {
    path: "/p1/moneylostquestion"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_MoneyLostPage__WEBPACK_IMPORTED_MODULE_8__["MoneyLostPage"], {
    path: "/p1/moneylost"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_FileUploadYesNoPage__WEBPACK_IMPORTED_MODULE_16__["FilesToUpload"], {
    path: "/p1/uploadfilesquestion"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_FileUploadPage__WEBPACK_IMPORTED_MODULE_5__["FileUploadPage"], {
    path: "/p1/uploadfiles"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_WillBeContactedYesNoPage__WEBPACK_IMPORTED_MODULE_14__["Willbecontacted"], {
    path: "/p1/contactinfoquestion"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_ContactInfoPage__WEBPACK_IMPORTED_MODULE_11__["ContactInfoPage"], {
    path: "/p1/contactinfo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_ConfirmationPage__WEBPACK_IMPORTED_MODULE_9__["ConfirmationPage"], {
    path: "/p1/confirmation"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p1_ThankYou__WEBPACK_IMPORTED_MODULE_13__["ThankYou"], {
    path: "/p1/thankyou"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_LandingPage__WEBPACK_IMPORTED_MODULE_17__["LandingPage"], {
    path: "/p2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_WhatHappenedPage__WEBPACK_IMPORTED_MODULE_18__["WhatHappenedPage"], {
    path: "/p2/whathappened"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_ContactInfoPage__WEBPACK_IMPORTED_MODULE_19__["ContactInfoPage"], {
    path: "/p2/contactinfo"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_ScammerDetailsPage__WEBPACK_IMPORTED_MODULE_20__["ScammerDetailsPage"], {
    path: "/p2/scammerdetails"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_ConfirmationPage__WEBPACK_IMPORTED_MODULE_21__["ConfirmationPage"], {
    path: "/p2/confirmation"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_NextSteps__WEBPACK_IMPORTED_MODULE_22__["NextSteps"], {
    path: "/p2/nextsteps"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_TimeFramePage__WEBPACK_IMPORTED_MODULE_23__["TimeFramePage"], {
    path: "/p2/timeframe"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_p2_ImpactStatementPage__WEBPACK_IMPORTED_MODULE_24__["ImpactStatementPage"], {
    path: "/p2/impact"
  })))));
};

/***/ }),

/***/ "./src/LanguageSwitcher.js":
/*!*********************************!*\
  !*** ./src/LanguageSwitcher.js ***!
  \*********************************/
/*! exports provided: LanguageSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitcher", function() { return LanguageSwitcher; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button-link */ "./src/components/button-link/index.js");






var LanguageSwitcherStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('section', {
  target: "e18gtgoj0",
  label: "LanguageSwitcherStyle"
})( false ? undefined : {
  name: "1nbyjzx",
  styles: "align-content:right;display:block-inline;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvTGFuZ3VhZ2VTd2l0Y2hlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNK0MiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9MYW5ndWFnZVN3aXRjaGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsnXG5cbmNvbnN0IExhbmd1YWdlU3dpdGNoZXJTdHlsZSA9IHN0eWxlZCgnc2VjdGlvbicpYFxuICBhbGlnbi1jb250ZW50OiByaWdodDtcbiAgZGlzcGxheTogYmxvY2staW5saW5lO1xuYFxuXG5jb25zdCBsYW5ndWFnZU5hbWVzID0ge1xuICBlbjogJ0VuZ2xpc2gnLFxuICBmcjogJ0ZyYW7Dp2FpcycsXG59XG5cbmV4cG9ydCBjb25zdCBMYW5ndWFnZVN3aXRjaGVyID0gcHJvcHMgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8TGFuZ3VhZ2VTd2l0Y2hlclN0eWxlPlxuICAgICAgICA8QnV0dG9uTGluayBvbkNsaWNrPXsoKSA9PiBjbGllbnQud3JpdGVEYXRhKHsgZGF0YTogcHJvcHMgfSl9PlxuICAgICAgICAgIHtsYW5ndWFnZU5hbWVzW3Byb3BzLmxhbmd1YWdlXX1cbiAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgPC9MYW5ndWFnZVN3aXRjaGVyU3R5bGU+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuTGFuZ3VhZ2VTd2l0Y2hlci5wcm9wVHlwZXMgPSB7XG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var languageNames = {
  en: 'English',
  fr: 'Français'
};
var LanguageSwitcher = function LanguageSwitcher(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["ApolloConsumer"], null, function (client) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LanguageSwitcherStyle, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
      onClick: function onClick() {
        return client.writeData({
          data: props
        });
      }
    }, languageNames[props.language]));
  });
};
LanguageSwitcher.propTypes = {
  language: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};

/***/ }),

/***/ "./src/LanguageSwitching.js":
/*!**********************************!*\
  !*** ./src/LanguageSwitching.js ***!
  \**********************************/
/*! exports provided: LanguageSwitching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitching", function() { return LanguageSwitching; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _locale_fr_messages_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../locale/fr/messages.js */ "./locale/fr/messages.js");
/* harmony import */ var _locale_fr_messages_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_locale_fr_messages_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _locale_en_messages_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../locale/en/messages.js */ "./locale/en/messages.js");
/* harmony import */ var _locale_en_messages_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_locale_en_messages_js__WEBPACK_IMPORTED_MODULE_8__);


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      {\n        language @client\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var catalogs = {
  fr: _locale_fr_messages_js__WEBPACK_IMPORTED_MODULE_7___default.a,
  en: _locale_en_messages_js__WEBPACK_IMPORTED_MODULE_8___default.a
};
var LanguageSwitching = function LanguageSwitching(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18nProvider"], {
      language: data.language,
      catalogs: catalogs
    }, loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
      id: "loading..."
    })) : null, error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["P"], {
      color: "crimson",
      fontWeight: "bolder"
    }, "Error") : null, children);
  });
};
LanguageSwitching.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};

/***/ }),

/***/ "./src/PageNotFound.js":
/*!*****************************!*\
  !*** ./src/PageNotFound.js ***!
  \*****************************/
/*! exports provided: PageNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TrackPageViews */ "./src/TrackPageViews.js");







var CenterContent =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "ehtzcln0",
  label: "CenterContent"
})( false ? undefined : {
  name: "xi606m",
  styles: "text-align:center;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvUGFnZU5vdEZvdW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9tQyIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1BhZ2VOb3RGb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSDEgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgUCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4vVHJhY2tQYWdlVmlld3MnXG5cbmNvbnN0IENlbnRlckNvbnRlbnQgPSBzdHlsZWQoJ2RpdicpYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBQYWdlTm90Rm91bmQgPSAoKSA9PiAoXG4gIDxDZW50ZXJDb250ZW50PlxuICAgIDxIMT5cbiAgICAgIDxUcmFucz5QYWdlIG5vdCBmb3VuZDwvVHJhbnM+XG4gICAgPC9IMT5cbiAgICA8UD5cbiAgICAgIDxUcmFucz5Tb3JyeSwgdGhlIHBhZ2UgeW91IHdlcmUgdHJ5aW5nIHRvIHZpZXcgZG9lcyBub3QgZXhpc3QuPC9UcmFucz5cbiAgICA8L1A+XG5cbiAgICA8VHJhY2tQYWdlVmlld3MgLz5cbiAgPC9DZW50ZXJDb250ZW50PlxuKVxuIl19 */"
});

var PageNotFound = function PageNotFound() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CenterContent, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Page not found"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
    id: "Sorry, the page you were trying to view does not exist."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null));
};

/***/ }),

/***/ "./src/RootLandingPage.js":
/*!********************************!*\
  !*** ./src/RootLandingPage.js ***!
  \********************************/
/*! exports provided: RootLandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootLandingPage", function() { return RootLandingPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");


/**@jsx jsx */




var RootLandingPage = function RootLandingPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    maxWidth: ['300px', null, '400px']
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_4__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report a scam"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_2__["ButtonsContainerLanding"], null));
};

/***/ }),

/***/ "./src/TrackPageViews.js":
/*!*******************************!*\
  !*** ./src/TrackPageViews.js ***!
  \*******************************/
/*! exports provided: TrackPageViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPageViews", function() { return TrackPageViews; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "@babel/runtime/helpers/typeof");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/component-component */ "@reach/component-component");
/* harmony import */ var _reach_component_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_component_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_4__);





var GA = process.env.RAZZLE_GOOGLE_ANALYTICS_ID;
react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.initialize(GA, {
  testMode:  false ? undefined : true
});
react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.set({
  anonymizeIp: true
});

var logPageView = function logPageView(path) {
  if ((typeof window === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(window)) === 'object') {
    react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.pageview(path);
  }
};

var TrackPageViews = function TrackPageViews() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_4__["Location"], null, function (_ref) {
    var location = _ref.location;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_reach_component_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
      didMount: function didMount() {
        return logPageView(location.pathname);
      },
      didUpdate: function didUpdate() {
        return logPageView(location.pathname);
      }
    });
  });
};

/***/ }),

/***/ "./src/components/TextInput/index.js":
/*!*******************************************!*\
  !*** ./src/components/TextInput/index.js ***!
  \*******************************************/
/*! exports provided: TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../input */ "./src/components/input/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme/index.js");



var TextInput = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  type: 'text',
  colors: 'inputField',
  fontSize: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSizes
})(_input__WEBPACK_IMPORTED_MODULE_0__["Input"]);

/***/ }),

/***/ "./src/components/backbutton/index.js":
/*!********************************************!*\
  !*** ./src/components/backbutton/index.js ***!
  \********************************************/
/*! exports provided: BackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return BackButton; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link */ "./src/components/link/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


/** @jsx jsx **/




var _ref =  false ? undefined : {
  name: "1i6bz6t-BackButton",
  styles: "margin-bottom:2.5rem;a{text-decoration:none;border-bottom:1px solid;padding-bottom:3px;span{font-size:19px;}span:first-of-type{font-size:12px;position:relative;bottom:3px;}}label:BackButton;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9iYWNrYnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFZIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9iYWNrYnV0dG9uL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICoqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2xpbmsnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBCYWNrQnV0dG9uID0gKHsgcm91dGUgPSAnJywgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXtjc3NgXG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm90dG9tOiAzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIHRvPXtyb3V0ZX0gdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgPFRyYW5zPlxuICAgICAgICA8c3BhbiBhcmlhLWxhYmVsPVwiIFwiPiYjOTY2NDs8L3NwYW4+IDxzcGFuPkJhY2sgdG88L3NwYW4+eycgJ31cbiAgICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9MaW5rPlxuICA8L2Rpdj5cbilcblxuQmFja0J1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cbiJdfQ== */"
};

var BackButton = function BackButton(_ref2) {
  var _ref2$route = _ref2.route,
      route = _ref2$route === void 0 ? '' : _ref2$route,
      children = _ref2.children;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    type: "button",
    to: route,
    textAlign: "left"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "<0>\u25C0</0> <1>Back to</1> <2>{children}</2>",
    values: {
      children: children
    },
    components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
      "aria-label": " "
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", null)]
  })));
};
BackButton.propTypes = {
  route: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/***/ }),

/***/ "./src/components/button-link/index.js":
/*!*********************************************!*\
  !*** ./src/components/button-link/index.js ***!
  \*********************************************/
/*! exports provided: ButtonLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return ButtonLink; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");







var BaseButtonLink =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('button', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__["cleanProps"])(prop);
  },
  target: "e1hrp17d0",
  label: "BaseButtonLink"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";background:none;border:none;color:white;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";text-decoration:underline;&:hover{cursor:pointer;}&:focus{outline:3px solid ", function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.focusColor;
}, ";}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9idXR0b24tbGluay9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRRSIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IGZvbnRTaXplLCBmb250V2VpZ2h0LCBsaW5lSGVpZ2h0LCBzcGFjZSwgY29sb3IgfSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuUHJvcHMnXG5cbmNvbnN0IEJhc2VCdXR0b25MaW5rID0gc3R5bGVkKCdidXR0b24nLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNhbnN9O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAzcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZm9jdXNDb2xvcn07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkxpbmsgPSBwcm9wcyA9PiAoXG4gIDxCYXNlQnV0dG9uTGlua1xuICAgIGZvbnRTaXplPXtbMSwgbnVsbCwgMl19XG4gICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXG4gICAgbGluZUhlaWdodD17WzEsIG51bGwsIDJdfVxuICAgIGNvbG9yPVwid2hpdGVcIlxuICAgIHsuLi5wcm9wc31cbiAgLz5cbilcblxuQnV0dG9uTGluay5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cbiJdfQ== */"));

var ButtonLink = function ButtonLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BaseButtonLink, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [1, null, 2],
    fontWeight: "normal",
    lineHeight: [1, null, 2],
    color: "white"
  }, props));
};
ButtonLink.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};

/***/ }),

/***/ "./src/components/button/index.js":
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var BaseButton =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('button', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_4__["cleanProps"])(prop);
  },
  target: "ei70dpk0",
  label: "BaseButton"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontBold;
}, ";margin:0;border:0;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUUiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvclN0eWxlLFxuICBjb2xvcixcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5jb25zdCBCYXNlQnV0dG9uID0gc3R5bGVkKCdidXR0b24nLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udEJvbGR9O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7Y29sb3JTdHlsZX07XG4gICR7Y29sb3J9O1xuICAke3NwYWNlfTtcbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHByb3BzID0+IChcbiAgPEJhc2VCdXR0b25cbiAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxuICAgIGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX1cbiAgICBjb2xvcnM9XCJidXR0b25cIlxuICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDNdfVxuICAgIHB5PXsxfVxuICAgIHB4PXtbMiwgbnVsbCwgM119XG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59XG4iXX0= */"));

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BaseButton, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    fontWeight: "normal",
    lineHeight: [2, null, 3],
    colors: "button",
    marginTop: [2, null, 3],
    py: 1,
    px: [2, null, 3]
  }, props));
};
Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};

/***/ }),

/***/ "./src/components/buttons-container/index.js":
/*!***************************************************!*\
  !*** ./src/components/buttons-container/index.js ***!
  \***************************************************/
/*! exports provided: ButtonsContainer, ButtonsContainerLanding, ButtonsContainerYesNo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainer", function() { return ButtonsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainerLanding", function() { return ButtonsContainerLanding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsContainerYesNo", function() { return ButtonsContainerYesNo; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button */ "./src/components/button/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link */ "./src/components/link/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);


/** @jsx jsx */






var _ref =  false ? undefined : {
  name: "m8mp1z-ButtonsContainer",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:ButtonsContainer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlkiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2J1dHRvbnMtY29udGFpbmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBMaW5rLCBCdXR0b25MaW5rIH0gZnJvbSAnLi4vbGluaydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSAoe1xuICBzdWJtaXQgPSBmYWxzZSxcbiAgbGFuZGluZyA9IGZhbHNlLFxuICBjYW5jZWwgPSB0cnVlLFxuICBidXR0b25MaW5rID0gdHJ1ZSxcbiAgcm91dGUgPSAnJyxcbiAgY2FuY2VsUm91dGUgPSAnL3AyLycsXG4gIG5leHRQYWdlID0gJycsXG4gIG9uQ2xpY2sgPSAoKSA9PiB7fSxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICB7YnV0dG9uTGluayA9PT0gZmFsc2UgPyAoXG4gICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICB7c3VibWl0ID09PSB0cnVlID8gKFxuICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnUmVwb3J0IG5vdycgPyAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtuZXh0UGFnZSA9PT0gJ1NjYW1tZXIgZGV0YWlscycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBDbHVlcyBhYm91dCB0aGUgc3VzcGVjdDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnTW9uZXkgbG9zdCcgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBNb25leSBsb3N0PC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdSZXBvcnQgbm93JyA/IChcbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnSW1wYWN0IG9mIHNjYW0nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogSW1wYWN0IG9mIHRoZSBzY2FtPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdXaGF0IGhhcHBlbmVkJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFdoYXQgaGFwcGVuZWQ8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1N1cHBvcnRpbmcgZmlsZXMnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQWRkIGZpbGVzPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdDb250YWN0IGluZm8nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQ29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnQ29uZmlybSBpbmZvcm1hdGlvbicgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBSZXZpZXcgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogKFxuICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgICAge2xhbmRpbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgPEJ1dHRvbkxpbmsgY29sb3I9XCJibGFja1wiIG1iPXtbMywgbnVsbCwgNV19IHRvPXtyb3V0ZX0+XG4gICAgICAgICAgICA8VHJhbnM+UmVwb3J0IG5vdyDina88L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz4g4p2uICZuYnNwOyBSZXBvcnQgYW5vdGhlciBzY2FtPC9UcmFucz5cbiAgICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApfVxuXG4gICAge2NhbmNlbCA9PT0gdHJ1ZSA/IChcbiAgICAgIDxDb250YWluZXIgbXQ9XCIxLjlyZW1cIiBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfT5cbiAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz17Y2FuY2VsUm91dGV9IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKSA6IG51bGx9XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lckxhbmRpbmcgPSAoKSA9PiAoXG4gIDxDb250YWluZXJcbiAgICBtdD1cIjFyZW1cIlxuICAgIG1iPVwiNHJlbVwiXG4gICAgZGlzcGxheT17WydmbGV4JywgJ2Jsb2NrJywgJ2ZsZXgnXX1cbiAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz1cIi9wMVwiPlxuICAgICAgICA8VHJhbnM+UHJvdG90eXBlIDE8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz1cIi9wMlwiPlxuICAgICAgICA8VHJhbnM+UHJvdG90eXBlIDI8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbnNDb250YWluZXJZZXNObyA9ICh7XG4gIHllc1JvdXRlID0gJycsXG4gIG5vUm91dGUgPSAnJyxcbiAgbWFyZ2luQiA9ICcxMGVtJyxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAyLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWFyZ2luLWJvdHRvbTogJHttYXJnaW5CfTtcbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXt5ZXNSb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz17bm9Sb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ObzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5CdXR0b25zQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uTGluazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWxSb3V0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5kaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbmV4dFBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5CdXR0b25zQ29udGFpbmVyWWVzTm8ucHJvcFR5cGVzID0ge1xuICB5ZXNSb3V0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBub1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1hcmdpbkI6IFByb3BUeXBlcy5zdHJpbmcsXG59XG4iXX0= */"
};

var ButtonsContainer = function ButtonsContainer(_ref3) {
  var _ref3$submit = _ref3.submit,
      submit = _ref3$submit === void 0 ? false : _ref3$submit,
      _ref3$landing = _ref3.landing,
      landing = _ref3$landing === void 0 ? false : _ref3$landing,
      _ref3$cancel = _ref3.cancel,
      cancel = _ref3$cancel === void 0 ? true : _ref3$cancel,
      _ref3$buttonLink = _ref3.buttonLink,
      buttonLink = _ref3$buttonLink === void 0 ? true : _ref3$buttonLink,
      _ref3$route = _ref3.route,
      route = _ref3$route === void 0 ? '' : _ref3$route,
      _ref3$cancelRoute = _ref3.cancelRoute,
      cancelRoute = _ref3$cancelRoute === void 0 ? '/p2/' : _ref3$cancelRoute,
      _ref3$nextPage = _ref3.nextPage,
      nextPage = _ref3$nextPage === void 0 ? '' : _ref3$nextPage,
      _ref3$onClick = _ref3.onClick,
      onClick = _ref3$onClick === void 0 ? function () {} : _ref3$onClick;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    alignItems: "center",
    css: _ref
  }, buttonLink === false ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    onClick: onClick
  }, submit === true ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Submit report \xA0 \u276F"
  }) : nextPage === 'Report now' ? '' : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Next"
  }), nextPage === 'Scammer details' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Clues about the suspect"
  }) : nextPage === 'Money lost' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Money lost"
  }) : nextPage === 'Report now' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report now \u276F"
  }) : nextPage === 'Impact of scam' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Impact of the scam"
  }) : nextPage === 'What happened' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": What happened"
  }) : nextPage === 'Supporting files' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Add files"
  }) : nextPage === 'Contact info' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Contact information"
  }) : nextPage === 'Confirm information' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: ": Review report"
  }) : null)) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, landing === true ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: route
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report now \u276F"
  })) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    color: "black",
    mb: [3, null, 5],
    to: route
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "\u276E \xA0 Report another scam"
  }))), cancel === true ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1.9rem",
    ml: ['3rem', '0', '3rem']
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    type: "button",
    color: "black",
    to: cancelRoute,
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Cancel report"
  }))) : null);
};

var _ref2 =  false ? undefined : {
  name: "ew7vhc-ButtonsContainerLanding",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;width:100%;}}label:ButtonsContainerLanding;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR1kiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2J1dHRvbnMtY29udGFpbmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBMaW5rLCBCdXR0b25MaW5rIH0gZnJvbSAnLi4vbGluaydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSAoe1xuICBzdWJtaXQgPSBmYWxzZSxcbiAgbGFuZGluZyA9IGZhbHNlLFxuICBjYW5jZWwgPSB0cnVlLFxuICBidXR0b25MaW5rID0gdHJ1ZSxcbiAgcm91dGUgPSAnJyxcbiAgY2FuY2VsUm91dGUgPSAnL3AyLycsXG4gIG5leHRQYWdlID0gJycsXG4gIG9uQ2xpY2sgPSAoKSA9PiB7fSxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICB7YnV0dG9uTGluayA9PT0gZmFsc2UgPyAoXG4gICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICB7c3VibWl0ID09PSB0cnVlID8gKFxuICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnUmVwb3J0IG5vdycgPyAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtuZXh0UGFnZSA9PT0gJ1NjYW1tZXIgZGV0YWlscycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBDbHVlcyBhYm91dCB0aGUgc3VzcGVjdDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnTW9uZXkgbG9zdCcgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBNb25leSBsb3N0PC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdSZXBvcnQgbm93JyA/IChcbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnSW1wYWN0IG9mIHNjYW0nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogSW1wYWN0IG9mIHRoZSBzY2FtPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdXaGF0IGhhcHBlbmVkJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFdoYXQgaGFwcGVuZWQ8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1N1cHBvcnRpbmcgZmlsZXMnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQWRkIGZpbGVzPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdDb250YWN0IGluZm8nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQ29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnQ29uZmlybSBpbmZvcm1hdGlvbicgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBSZXZpZXcgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogKFxuICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgICAge2xhbmRpbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgPEJ1dHRvbkxpbmsgY29sb3I9XCJibGFja1wiIG1iPXtbMywgbnVsbCwgNV19IHRvPXtyb3V0ZX0+XG4gICAgICAgICAgICA8VHJhbnM+UmVwb3J0IG5vdyDina88L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz4g4p2uICZuYnNwOyBSZXBvcnQgYW5vdGhlciBzY2FtPC9UcmFucz5cbiAgICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApfVxuXG4gICAge2NhbmNlbCA9PT0gdHJ1ZSA/IChcbiAgICAgIDxDb250YWluZXIgbXQ9XCIxLjlyZW1cIiBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfT5cbiAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz17Y2FuY2VsUm91dGV9IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKSA6IG51bGx9XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lckxhbmRpbmcgPSAoKSA9PiAoXG4gIDxDb250YWluZXJcbiAgICBtdD1cIjFyZW1cIlxuICAgIG1iPVwiNHJlbVwiXG4gICAgZGlzcGxheT17WydmbGV4JywgJ2Jsb2NrJywgJ2ZsZXgnXX1cbiAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz1cIi9wMVwiPlxuICAgICAgICA8VHJhbnM+UHJvdG90eXBlIDE8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz1cIi9wMlwiPlxuICAgICAgICA8VHJhbnM+UHJvdG90eXBlIDI8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbnNDb250YWluZXJZZXNObyA9ICh7XG4gIHllc1JvdXRlID0gJycsXG4gIG5vUm91dGUgPSAnJyxcbiAgbWFyZ2luQiA9ICcxMGVtJyxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAyLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWFyZ2luLWJvdHRvbTogJHttYXJnaW5CfTtcbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXt5ZXNSb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz17bm9Sb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ObzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5CdXR0b25zQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uTGluazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWxSb3V0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5kaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbmV4dFBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5CdXR0b25zQ29udGFpbmVyWWVzTm8ucHJvcFR5cGVzID0ge1xuICB5ZXNSb3V0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBub1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1hcmdpbkI6IFByb3BUeXBlcy5zdHJpbmcsXG59XG4iXX0= */"
};

var ButtonsContainerLanding = function ButtonsContainerLanding() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    justifyContent: "space-between",
    alignItems: "center",
    css: _ref2
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: "/p1"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Prototype 1"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: "/p2"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Prototype 2"
  }))));
};
var ButtonsContainerYesNo = function ButtonsContainerYesNo(_ref4) {
  var _ref4$yesRoute = _ref4.yesRoute,
      yesRoute = _ref4$yesRoute === void 0 ? '' : _ref4$yesRoute,
      _ref4$noRoute = _ref4.noRoute,
      noRoute = _ref4$noRoute === void 0 ? '' : _ref4$noRoute,
      _ref4$marginB = _ref4.marginB,
      marginB = _ref4$marginB === void 0 ? '10em' : _ref4$marginB;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    alignItems: "center",
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("button,div[name='buttonlink-container'] a{padding:0.7rem 2.5rem;text-align:center;}div[name='buttonlink-container'] a:first-of-type{margin-right:1rem;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;width:100%;}}margin-bottom:", marginB, ";label:ButtonsContainerYesNo;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SVkiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2J1dHRvbnMtY29udGFpbmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBMaW5rLCBCdXR0b25MaW5rIH0gZnJvbSAnLi4vbGluaydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbnNDb250YWluZXIgPSAoe1xuICBzdWJtaXQgPSBmYWxzZSxcbiAgbGFuZGluZyA9IGZhbHNlLFxuICBjYW5jZWwgPSB0cnVlLFxuICBidXR0b25MaW5rID0gdHJ1ZSxcbiAgcm91dGUgPSAnJyxcbiAgY2FuY2VsUm91dGUgPSAnL3AyLycsXG4gIG5leHRQYWdlID0gJycsXG4gIG9uQ2xpY2sgPSAoKSA9PiB7fSxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICB7YnV0dG9uTGluayA9PT0gZmFsc2UgPyAoXG4gICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICB7c3VibWl0ID09PSB0cnVlID8gKFxuICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnUmVwb3J0IG5vdycgPyAoXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHJhbnM+TmV4dDwvVHJhbnM+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtuZXh0UGFnZSA9PT0gJ1NjYW1tZXIgZGV0YWlscycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBDbHVlcyBhYm91dCB0aGUgc3VzcGVjdDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnTW9uZXkgbG9zdCcgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBNb25leSBsb3N0PC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdSZXBvcnQgbm93JyA/IChcbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnSW1wYWN0IG9mIHNjYW0nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogSW1wYWN0IG9mIHRoZSBzY2FtPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdXaGF0IGhhcHBlbmVkJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFdoYXQgaGFwcGVuZWQ8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1N1cHBvcnRpbmcgZmlsZXMnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQWRkIGZpbGVzPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdDb250YWN0IGluZm8nID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogQ29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnQ29uZmlybSBpbmZvcm1hdGlvbicgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBSZXZpZXcgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogKFxuICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgICAge2xhbmRpbmcgPT09IHRydWUgPyAoXG4gICAgICAgICAgPEJ1dHRvbkxpbmsgY29sb3I9XCJibGFja1wiIG1iPXtbMywgbnVsbCwgNV19IHRvPXtyb3V0ZX0+XG4gICAgICAgICAgICA8VHJhbnM+UmVwb3J0IG5vdyDina88L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz4g4p2uICZuYnNwOyBSZXBvcnQgYW5vdGhlciBzY2FtPC9UcmFucz5cbiAgICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApfVxuXG4gICAge2NhbmNlbCA9PT0gdHJ1ZSA/IChcbiAgICAgIDxDb250YWluZXIgbXQ9XCIxLjlyZW1cIiBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfT5cbiAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz17Y2FuY2VsUm91dGV9IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKSA6IG51bGx9XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lckxhbmRpbmcgPSAoKSA9PiAoXG4gIDxDb250YWluZXJcbiAgICBtdD1cIjFyZW1cIlxuICAgIG1iPVwiNHJlbVwiXG4gICAgZGlzcGxheT17WydmbGV4JywgJ2Jsb2NrJywgJ2ZsZXgnXX1cbiAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz1cIi9wMVwiPlxuICAgICAgICA8VHJhbnM+UHJvdG90eXBlIDE8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz1cIi9wMlwiPlxuICAgICAgICA8VHJhbnM+UHJvdG90eXBlIDI8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICA8L0NvbnRhaW5lcj5cbilcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbnNDb250YWluZXJZZXNObyA9ICh7XG4gIHllc1JvdXRlID0gJycsXG4gIG5vUm91dGUgPSAnJyxcbiAgbWFyZ2luQiA9ICcxMGVtJyxcbn0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgIGNzcz17Y3NzYFxuICAgICAgYnV0dG9uLFxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAyLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWFyZ2luLWJvdHRvbTogJHttYXJnaW5CfTtcbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXt5ZXNSb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ZZXM8L1RyYW5zPlxuICAgICAgPC9CdXR0b25MaW5rPlxuICAgIDwvQ29udGFpbmVyPlxuICAgIDxDb250YWluZXIgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCI+XG4gICAgICA8QnV0dG9uTGluayB0ZXh0QWxpZ249XCJjZW50ZXJcIiB0bz17bm9Sb3V0ZX0+XG4gICAgICAgIDxUcmFucz5ObzwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5CdXR0b25zQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgYnV0dG9uTGluazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWxSb3V0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYnV0dG9uVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5kaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuYm9vbCxcbiAgbmV4dFBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufVxuXG5CdXR0b25zQ29udGFpbmVyWWVzTm8ucHJvcFR5cGVzID0ge1xuICB5ZXNSb3V0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBub1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1hcmdpbkI6IFByb3BUeXBlcy5zdHJpbmcsXG59XG4iXX0= */"))
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: yesRoute
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Yes"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    name: "buttonlink-container"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["ButtonLink"], {
    textAlign: "center",
    to: noRoute
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "No"
  }))));
};
ButtonsContainer.propTypes = {
  buttonLink: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  cancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  cancelRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  buttonTitle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  route: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  landing: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  submit: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  nextPage: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
ButtonsContainerYesNo.propTypes = {
  yesRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  noRoute: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  marginB: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};

/***/ }),

/***/ "./src/components/checkbox/index.js":
/*!******************************************!*\
  !*** ./src/components/checkbox/index.js ***!
  \******************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input */ "./src/components/input/index.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text */ "./src/components/text/index.js");
/* harmony import */ var _unique_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unique-id */ "./src/components/unique-id/index.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../theme */ "./src/theme/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */








var mq = _theme__WEBPACK_IMPORTED_MODULE_10__["BREAKPOINTS"].map(function (bp) {
  return "@media (min-width: ".concat(bp, ")");
});
var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["label"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_unique_id__WEBPACK_IMPORTED_MODULE_8__["UniqueID"], null, function (id) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      display: "block",
      position: "relative",
      pl: 6,
      mt: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_input__WEBPACK_IMPORTED_MODULE_5__["Input"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      type: "checkbox",
      position: "absolute",
      left: "0",
      top: "0",
      zIndex: "1",
      m: 0,
      css: function css(theme) {
        return {
          height: theme.checkboxes.size,
          width: theme.checkboxes.size,
          opacity: 0,
          zoom: '1',
          ':checked + span:after': {
            opacity: '1'
          },
          ':focus + span:before': {
            boxShadow: "0 0 0 3px ".concat(theme.colors.yellow)
          }
        };
      }
    }, props, {
      id: id
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_text__WEBPACK_IMPORTED_MODULE_7__["Text"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      m: 0,
      p: 0,
      pr: 2,
      pl: 2,
      display: "block",
      color: "black",
      css: function css(theme) {
        var _before, _after;

        return {
          height: theme.checkboxes.labelSize,
          '::before': (_before = {
            content: '""',
            display: 'block',
            border: "2px solid ".concat(theme.colors.black),
            background: 'transparent'
          }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, mq[0], {
            width: theme.fontSizes[3],
            height: theme.fontSizes[3]
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, mq[2], {
            width: theme.fontSizes[4],
            height: theme.fontSizes[4]
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, "top", '0'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, "left", '0'), _before),
          '::after': (_after = {
            content: '""',
            border: 'solid',
            color: theme.colors.black,
            background: 'transparent',
            borderTopColor: 'transparent',
            position: 'absolute',
            top: '8px'
          }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, mq[0], {
            left: '5px',
            width: "".concat(9 * props.checkscale, "px"),
            height: "".concat(3 * props.checkscale, "px"),
            borderWidth: '0 0 3px 3px'
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, mq[2], {
            left: '6px',
            width: "".concat(11 * props.checkscale, "px"),
            height: "".concat(5 * props.checkscale, "px"),
            borderWidth: '0 0 4px 4px'
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "transform", 'rotate(-45deg)'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "zoom", '1'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "opacity", '0'), _after)
        };
      },
      htmlFor: id
    }, props), label));
  });
};
Checkbox.defaultProps = {
  fontWeight: '400',
  fontSize: [2, null, 3],
  lineHeight: [2, null, 3],
  checkscale: '1'
};
Checkbox.propTypes = _objectSpread({
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["color"].propTypes);

/***/ }),

/***/ "./src/components/container/index.js":
/*!*******************************************!*\
  !*** ./src/components/container/index.js ***!
  \*******************************************/
/*! exports provided: Container, Content, InfoCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCard", function() { return InfoCard; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");






var Container =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('div', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_5__["cleanProps"])(prop);
  },
  target: "ern13v50",
  label: "Container"
})(styled_system__WEBPACK_IMPORTED_MODULE_4__["alignItems"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["alignContent"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["justifyContent"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flex"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexWrap"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexBasis"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexDirection"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["width"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["maxWidth"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["height"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["maxHeight"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["justifySelf"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["alignSelf"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["borders"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["borderColor"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["textAlign"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["position"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["top"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["bottom"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["left"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["right"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["zIndex"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NFIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHtcbiAgYWxpZ25JdGVtcyxcbiAgYWxpZ25Db250ZW50LFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleFdyYXAsXG4gIGZsZXhCYXNpcyxcbiAgZmxleERpcmVjdGlvbixcbiAgd2lkdGgsXG4gIG1heFdpZHRoLFxuICBoZWlnaHQsXG4gIG1heEhlaWdodCxcbiAgY29sb3IsXG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBmbGV4LFxuICBqdXN0aWZ5U2VsZixcbiAgZGlzcGxheSxcbiAgYWxpZ25TZWxmLFxuICBzcGFjZSxcbiAgdGV4dEFsaWduLFxuICBwb3NpdGlvbixcbiAgdG9wLFxuICByaWdodCxcbiAgYm90dG9tLFxuICBsZWZ0LFxuICB6SW5kZXgsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gICR7YWxpZ25JdGVtc31cbiAgJHthbGlnbkNvbnRlbnR9XG4gICR7anVzdGlmeUNvbnRlbnR9XG4gICR7ZmxleH1cbiAgJHtmbGV4V3JhcH1cbiAgJHtmbGV4QmFzaXN9XG4gICR7ZmxleERpcmVjdGlvbn1cbiAgJHt3aWR0aH1cbiAgJHttYXhXaWR0aH1cbiAgJHtoZWlnaHR9XG4gICR7bWF4SGVpZ2h0fVxuICAke2NvbG9yfVxuICAke2Rpc3BsYXl9XG4gICR7c3BhY2V9XG4gICR7anVzdGlmeVNlbGZ9XG4gICR7YWxpZ25TZWxmfVxuICAke2JvcmRlcnN9XG4gICR7Ym9yZGVyQ29sb3J9XG4gICR7dGV4dEFsaWdufVxuICAke3Bvc2l0aW9ufVxuICAke3RvcH1cbiAgJHtib3R0b219XG4gICR7bGVmdH1cbiAgJHtyaWdodH1cbiAgJHt6SW5kZXh9XG5gXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHByb3BzID0+IChcbiAgPG1haW5cbiAgICBjc3M9e2Nzc2BcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIGB9XG4gID5cbiAgICA8Q29udGFpbmVyIG09XCJhdXRvXCIgd2lkdGg9e1s5IC8gMTAsIG51bGwsIDQgLyA1XX0gey4uLnByb3BzfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9tYWluPlxuKVxuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBJbmZvQ2FyZCA9IHByb3BzID0+IChcbiAgPENvbnRhaW5lclxuICAgIGJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiXG4gICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICBwYWRkaW5nPVwiMTBweFwiXG4gICAgYmFja2dyb3VuZENvbG9yPVwiaW5mb0NhcmRcIlxuICAgIHsuLi5wcm9wc31cbiAgLz5cbilcbiJdfQ== */");

var _ref =  false ? undefined : {
  name: "l044st-Content",
  styles: "flex:1 0 auto;label:Content;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVZIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IHtcbiAgYWxpZ25JdGVtcyxcbiAgYWxpZ25Db250ZW50LFxuICBqdXN0aWZ5Q29udGVudCxcbiAgZmxleFdyYXAsXG4gIGZsZXhCYXNpcyxcbiAgZmxleERpcmVjdGlvbixcbiAgd2lkdGgsXG4gIG1heFdpZHRoLFxuICBoZWlnaHQsXG4gIG1heEhlaWdodCxcbiAgY29sb3IsXG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBmbGV4LFxuICBqdXN0aWZ5U2VsZixcbiAgZGlzcGxheSxcbiAgYWxpZ25TZWxmLFxuICBzcGFjZSxcbiAgdGV4dEFsaWduLFxuICBwb3NpdGlvbixcbiAgdG9wLFxuICByaWdodCxcbiAgYm90dG9tLFxuICBsZWZ0LFxuICB6SW5kZXgsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZCgnZGl2Jywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gICR7YWxpZ25JdGVtc31cbiAgJHthbGlnbkNvbnRlbnR9XG4gICR7anVzdGlmeUNvbnRlbnR9XG4gICR7ZmxleH1cbiAgJHtmbGV4V3JhcH1cbiAgJHtmbGV4QmFzaXN9XG4gICR7ZmxleERpcmVjdGlvbn1cbiAgJHt3aWR0aH1cbiAgJHttYXhXaWR0aH1cbiAgJHtoZWlnaHR9XG4gICR7bWF4SGVpZ2h0fVxuICAke2NvbG9yfVxuICAke2Rpc3BsYXl9XG4gICR7c3BhY2V9XG4gICR7anVzdGlmeVNlbGZ9XG4gICR7YWxpZ25TZWxmfVxuICAke2JvcmRlcnN9XG4gICR7Ym9yZGVyQ29sb3J9XG4gICR7dGV4dEFsaWdufVxuICAke3Bvc2l0aW9ufVxuICAke3RvcH1cbiAgJHtib3R0b219XG4gICR7bGVmdH1cbiAgJHtyaWdodH1cbiAgJHt6SW5kZXh9XG5gXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHByb3BzID0+IChcbiAgPG1haW5cbiAgICBjc3M9e2Nzc2BcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIGB9XG4gID5cbiAgICA8Q29udGFpbmVyIG09XCJhdXRvXCIgd2lkdGg9e1s5IC8gMTAsIG51bGwsIDQgLyA1XX0gey4uLnByb3BzfT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9tYWluPlxuKVxuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBJbmZvQ2FyZCA9IHByb3BzID0+IChcbiAgPENvbnRhaW5lclxuICAgIGJvcmRlcj1cIjJweCBzb2xpZCBibGFja1wiXG4gICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcbiAgICBwYWRkaW5nPVwiMTBweFwiXG4gICAgYmFja2dyb3VuZENvbG9yPVwiaW5mb0NhcmRcIlxuICAgIHsuLi5wcm9wc31cbiAgLz5cbilcbiJdfQ== */"
};

var Content = function Content(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("main", {
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Container, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    m: "auto",
    width: [9 / 10, null, 4 / 5]
  }, props), props.children));
};
Content.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var InfoCard = function InfoCard(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Container, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    border: "2px solid black",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "infoCard"
  }, props));
};

/***/ }),

/***/ "./src/components/file-upload/index.css":
/*!**********************************************!*\
  !*** ./src/components/file-upload/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#uploader:focus + label {\n  outline: 3px solid #ffbf47;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/components/file-upload/index.js":
/*!*********************************************!*\
  !*** ./src/components/file-upload/index.js ***!
  \*********************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../label */ "./src/components/label/index.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../input */ "./src/components/input/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */







__webpack_require__(/*! ./index.css */ "./src/components/file-upload/index.css");

var FileUpload = function FileUpload(_ref) {
  var onChange = _ref.onChange,
      accept = _ref.accept,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["onChange", "accept"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_input__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    type: "file",
    id: "uploader",
    name: "uploader",
    accept: accept,
    onChange: onChange,
    width: "0"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_label__WEBPACK_IMPORTED_MODULE_7__["Label"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    colors: "button",
    padding: 1,
    htmlFor: "uploader"
  }, props), props.children));
};
FileUpload.defaultProps = {
  accept: undefined,
  fontWeight: '400',
  fontSize: [2, null, 3],
  lineHeight: [2, null, 3]
};
FileUpload.propTypes = _objectSpread({
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
}, styled_system__WEBPACK_IMPORTED_MODULE_6__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_6__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_6__["color"].propTypes);

/***/ }),

/***/ "./src/components/footer/index.js":
/*!****************************************!*\
  !*** ./src/components/footer/index.js ***!
  \****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _wordmark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wordmark */ "./src/components/wordmark/index.js");
/* harmony import */ var _unordered_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unordered-list */ "./src/components/unordered-list/index.js");

/** @jsx jsx **/






var _ref =  false ? undefined : {
  name: "1fi05lw-Footer",
  styles: "flex-shrink:0;label:Footer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJnQiIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLyoqIEBqc3gganN4ICoqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29udGFpbmVyJ1xuaW1wb3J0IFdvcmRNYXJrIGZyb20gJy4uL3dvcmRtYXJrJ1xuaW1wb3J0IHsgVWwgfSBmcm9tICcuLi91bm9yZGVyZWQtbGlzdCdcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBiZyB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGJnPXtiZ31cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgd2lkdGg9ezF9XG4gICAgICAgIGhlaWdodD17NTV9XG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBkYXRhLXRlc3RpZD1cImJhY2tncm91bmQtY29sb3JcIlxuICAgICAgICBtPVwiYXV0byBhdXRvIDAgYXV0b1wiXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIGZsZXg9XCIxIDEgYXV0b1wiPlxuICAgICAgICAgIDxVbCBsaXN0U3R5bGVUeXBlPVwibm9uZVwiIG1iPXswfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L1VsPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciBtcj17M30gd2lkdGg9e1snNGVtJywgbnVsbCwgJzZlbSddfT5cbiAgICAgICAgICA8V29yZE1hcmtcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBmbGFnPVwiI2ZmZlwiXG4gICAgICAgICAgICB0ZXh0PVwiI2ZmZlwiXG4gICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGJnOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5Gb290ZXIuZGVmYXVsdFByb3BzID0geyBiZzogJ2JsYWNrJyB9XG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "16h5ezl-Footer",
  styles: "display:block;label:Footer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNvQiIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLyoqIEBqc3gganN4ICoqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29udGFpbmVyJ1xuaW1wb3J0IFdvcmRNYXJrIGZyb20gJy4uL3dvcmRtYXJrJ1xuaW1wb3J0IHsgVWwgfSBmcm9tICcuLi91bm9yZGVyZWQtbGlzdCdcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBiZyB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXI+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGJnPXtiZ31cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgd2lkdGg9ezF9XG4gICAgICAgIGhlaWdodD17NTV9XG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBkYXRhLXRlc3RpZD1cImJhY2tncm91bmQtY29sb3JcIlxuICAgICAgICBtPVwiYXV0byBhdXRvIDAgYXV0b1wiXG4gICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIGZsZXg9XCIxIDEgYXV0b1wiPlxuICAgICAgICAgIDxVbCBsaXN0U3R5bGVUeXBlPVwibm9uZVwiIG1iPXswfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L1VsPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPENvbnRhaW5lciBtcj17M30gd2lkdGg9e1snNGVtJywgbnVsbCwgJzZlbSddfT5cbiAgICAgICAgICA8V29yZE1hcmtcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBmbGFnPVwiI2ZmZlwiXG4gICAgICAgICAgICB0ZXh0PVwiI2ZmZlwiXG4gICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuRm9vdGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGJnOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5Gb290ZXIuZGVmYXVsdFByb3BzID0geyBiZzogJ2JsYWNrJyB9XG4iXX0= */"
};

var Footer = function Footer(props) {
  var bg = props.bg;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    bg: bg,
    display: "flex",
    flexDirection: "row",
    width: 1,
    height: 55,
    alignItems: "center",
    "data-testid": "background-color",
    m: "auto auto 0 auto",
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    flex: "1 1 auto"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_unordered_list__WEBPACK_IMPORTED_MODULE_4__["Ul"], {
    listStyleType: "none",
    mb: 0
  }, props.children)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    mr: 3,
    width: ['4em', null, '6em']
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_wordmark__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "100%",
    flag: "#fff",
    text: "#fff",
    css: _ref2
  }))));
};
Footer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  bg: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
Footer.defaultProps = {
  bg: 'black'
};

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/*! exports provided: Header, H1, H2, H3, H4, H5, H6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presets */ "./src/components/header/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return _presets__WEBPACK_IMPORTED_MODULE_5__["H6"]; });




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Header =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "eoh9q0q0",
  label: "Header"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0UiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvbnRTaXplLFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZSxcbiAgY29sb3IsXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQoJ3NwYW4nLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNhbnN9O1xuICBtYXJnaW46IDA7XG4gICR7Zm9udFNpemV9O1xuICAke2xpbmVIZWlnaHR9O1xuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7Zm9udFdlaWdodH07XG4gICR7dGV4dEFsaWdufTtcbmBcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgYXM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxufVxuXG5leHBvcnQgeyBIMSwgSDIsIEgzLCBINCwgSDUsIEg2IH0gZnJvbSAnLi9wcmVzZXRzJ1xuIl19 */"));
Header.propTypes = _objectSpread({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"].propTypes);


/***/ }),

/***/ "./src/components/header/presets.js":
/*!******************************************!*\
  !*** ./src/components/header/presets.js ***!
  \******************************************/
/*! exports provided: H1, H2, H3, H4, H5, H6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H4", function() { return H4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H5", function() { return H5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H6", function() { return H6; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/header/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var H1 = function H1(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h1",
    fontSize: [5, null, 7],
    lineHeight: [5, null, 7],
    mb: "2rem",
    fontWeight: "bold"
  }, props), props.children);
};
H1.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H2 = function H2(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h2",
    fontSize: [5, null, 6],
    lineHeight: [5, null, 6],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H2.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H3 = function H3(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h3",
    fontSize: [4, null, 5],
    lineHeight: [4, null, 5],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H3.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H4 = function H4(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h4",
    fontSize: [3, null, 4],
    lineHeight: [3, null, 4],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H4.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H5 = function H5(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h5",
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H5.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var H6 = function H6(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Header"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    as: "h6",
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: 4,
    fontWeight: "bold"
  }, props), props.children);
};
H6.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/***/ }),

/***/ "./src/components/input/index.js":
/*!***************************************!*\
  !*** ./src/components/input/index.js ***!
  \***************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Input =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('input', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__["cleanProps"])(prop);
  },
  target: "e8tni2c0",
  label: "Input"
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["zIndex"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9pbnB1dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QkUiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcbmltcG9ydCB7XG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBoZWlnaHQsXG4gIHdpZHRoLFxuICBjb2xvcixcbiAgY29sb3JTdHlsZSxcbiAgc3BhY2UsXG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBkaXNwbGF5LFxuICBwb3NpdGlvbixcbiAgdG9wLFxuICByaWdodCxcbiAgYm90dG9tLFxuICBsZWZ0LFxuICB6SW5kZXgsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZCgnaW5wdXQnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7aGVpZ2h0fTtcbiAgJHt3aWR0aH07XG4gICR7c3BhY2V9O1xuICAke2JvcmRlcnN9O1xuICAke2JvcmRlckNvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtwb3NpdGlvbn07XG4gICR7Y29sb3JTdHlsZX07XG4gICR7Y29sb3J9O1xuICAke3RvcH07XG4gICR7cmlnaHR9O1xuICAke2JvdHRvbX07XG4gICR7bGVmdH07XG4gICR7ekluZGV4fTtcbmBcbiJdfQ== */"));

/***/ }),

/***/ "./src/components/label/index.js":
/*!***************************************!*\
  !*** ./src/components/label/index.js ***!
  \***************************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Label =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_1__["cleanProps"])(prop);
  },
  target: "edxrpbg0",
  label: "Label"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["zIndex"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9sYWJlbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkUiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2xhYmVsL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcbmltcG9ydCB7XG4gIGZvbnRTaXplLFxuICBmb250V2VpZ2h0LFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZSxcbiAgY29sb3IsXG4gIGNvbG9yU3R5bGUsXG4gIGRpc3BsYXksXG4gIGJvcmRlcixcbiAgYm9yZGVyQ29sb3IsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHBvc2l0aW9uLFxuICB6SW5kZXgsXG4gIHRvcCxcbiAgcmlnaHQsXG4gIGJvdHRvbSxcbiAgbGVmdCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkKCdsYWJlbCcsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gICR7Zm9udFNpemV9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke2xpbmVIZWlnaHR9O1xuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7Y29sb3JTdHlsZX07XG4gICR7ZGlzcGxheX07XG4gICR7Ym9yZGVyfTtcbiAgJHtib3JkZXJDb2xvcn07XG4gICR7d2lkdGh9O1xuICAke2hlaWdodH07XG4gICR7cG9zaXRpb259O1xuICAke3pJbmRleH07XG4gICR7dG9wfTtcbiAgJHtyaWdodH07XG4gICR7Ym90dG9tfTtcbiAgJHtsZWZ0fTtcbmBcbiJdfQ== */"));

/***/ }),

/***/ "./src/components/layout/index.js":
/*!****************************************!*\
  !*** ./src/components/layout/index.js ***!
  \****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");



var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_2__["Container"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    maxWidth: "650px",
    margin: "auto"
  }, props));
};

/***/ }),

/***/ "./src/components/link/index.js":
/*!**************************************!*\
  !*** ./src/components/link/index.js ***!
  \**************************************/
/*! exports provided: Link, ButtonLink, ButtonAnchor, A, FooterLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonLink", function() { return ButtonLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonAnchor", function() { return ButtonAnchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLink", function() { return FooterLink; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_asAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/asAnchor */ "./src/utils/asAnchor.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../list-item */ "./src/components/list-item/index.js");


/** @jsx jsx */





var BaseLink = Object(_utils_asAnchor__WEBPACK_IMPORTED_MODULE_2__["asAnchor"])(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Link"]);
var BaseAnchor = Object(_utils_asAnchor__WEBPACK_IMPORTED_MODULE_2__["asAnchor"])('a');
var Link = function Link(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BaseLink, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: 4,
    colors: "link"
  }, props), props.children);
};
Link.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

var _ref =  false ? undefined : {
  name: "wx0uq0-ButtonLink",
  styles: "text-decoration:none;label:ButtonLink;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9saW5rL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DWSIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgYXNBbmNob3IgfSBmcm9tICcuLi8uLi91dGlscy9hc0FuY2hvcidcbmltcG9ydCB7IExpbmsgYXMgUmVhY2hMaW5rIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExpIH0gZnJvbSAnLi4vbGlzdC1pdGVtJ1xuXG5jb25zdCBCYXNlTGluayA9IGFzQW5jaG9yKFJlYWNoTGluaylcbmNvbnN0IEJhc2VBbmNob3IgPSBhc0FuY2hvcignYScpXG5cbmV4cG9ydCBjb25zdCBMaW5rID0gcHJvcHMgPT4gKFxuICA8QmFzZUxpbmtcbiAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgIGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX1cbiAgICBtYj17NH1cbiAgICBjb2xvcnM9XCJsaW5rXCJcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQmFzZUxpbms+XG4pXG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkxpbmsgPSBwcm9wcyA9PiAoXG4gIDxCYXNlTGlua1xuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIGNvbG9ycz1cImJ1dHRvblwiXG4gICAgbXQ9e1syLCBudWxsLCAzXX1cbiAgICBweT17MX1cbiAgICBweD17WzIsIG51bGwsIDNdfVxuICAgIHsuLi5wcm9wc31cbiAgICBjc3M9e2Nzc2BcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBgfVxuICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L0Jhc2VMaW5rPlxuKVxuXG5CdXR0b25MaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b25BbmNob3IgPSBwcm9wcyA9PiAoXG4gIDxCYXNlQW5jaG9yXG4gICAgZm9udFNpemU9e1syLCBudWxsLCAzXX1cbiAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcbiAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgY29sb3JzPVwiYnV0dG9uXCJcbiAgICBtdD17WzIsIG51bGwsIDNdfVxuICAgIHB5PXsxfVxuICAgIHB4PXtbMiwgbnVsbCwgM119XG4gICAgey4uLnByb3BzfVxuICAgIGNzcz17Y3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGB9XG4gICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQmFzZUFuY2hvcj5cbilcblxuQnV0dG9uQW5jaG9yLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBBID0gcHJvcHMgPT4gKFxuICA8QmFzZUFuY2hvclxuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIG1iPXs0fVxuICAgIGNvbG9ycz1cImxpbmtcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9CYXNlQW5jaG9yPlxuKVxuXG5BLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJMaW5rID0gcHJvcHMgPT4gKFxuICA8TGkgbWw9ezN9IG1iPXswfSBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCI+XG4gICAgPEJhc2VBbmNob3JcbiAgICAgIGZvbnRTaXplPXtbMSwgbnVsbCwgMl19XG4gICAgICBsaW5lSGVpZ2h0PXtbMSwgbnVsbCwgMl19XG4gICAgICBjb2xvcnM9XCJmb290ZXJMaW5rXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9CYXNlQW5jaG9yPlxuICA8L0xpPlxuKVxuXG5Gb290ZXJMaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG4iXX0= */"
};

var ButtonLink = function ButtonLink(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BaseLink, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    fontWeight: "normal",
    lineHeight: [2, null, 3],
    colors: "button",
    mt: [2, null, 3],
    py: 1,
    px: [2, null, 3]
  }, props, {
    css: _ref,
    display: "inline-block"
  }), props.children);
};
ButtonLink.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

var _ref2 =  false ? undefined : {
  name: "17bm8z4-ButtonAnchor",
  styles: "text-decoration:none;label:ButtonAnchor;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9saW5rL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEWSIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgYXNBbmNob3IgfSBmcm9tICcuLi8uLi91dGlscy9hc0FuY2hvcidcbmltcG9ydCB7IExpbmsgYXMgUmVhY2hMaW5rIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IExpIH0gZnJvbSAnLi4vbGlzdC1pdGVtJ1xuXG5jb25zdCBCYXNlTGluayA9IGFzQW5jaG9yKFJlYWNoTGluaylcbmNvbnN0IEJhc2VBbmNob3IgPSBhc0FuY2hvcignYScpXG5cbmV4cG9ydCBjb25zdCBMaW5rID0gcHJvcHMgPT4gKFxuICA8QmFzZUxpbmtcbiAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgIGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX1cbiAgICBtYj17NH1cbiAgICBjb2xvcnM9XCJsaW5rXCJcbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQmFzZUxpbms+XG4pXG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkxpbmsgPSBwcm9wcyA9PiAoXG4gIDxCYXNlTGlua1xuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIGNvbG9ycz1cImJ1dHRvblwiXG4gICAgbXQ9e1syLCBudWxsLCAzXX1cbiAgICBweT17MX1cbiAgICBweD17WzIsIG51bGwsIDNdfVxuICAgIHsuLi5wcm9wc31cbiAgICBjc3M9e2Nzc2BcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBgfVxuICAgIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L0Jhc2VMaW5rPlxuKVxuXG5CdXR0b25MaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b25BbmNob3IgPSBwcm9wcyA9PiAoXG4gIDxCYXNlQW5jaG9yXG4gICAgZm9udFNpemU9e1syLCBudWxsLCAzXX1cbiAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcbiAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgY29sb3JzPVwiYnV0dG9uXCJcbiAgICBtdD17WzIsIG51bGwsIDNdfVxuICAgIHB5PXsxfVxuICAgIHB4PXtbMiwgbnVsbCwgM119XG4gICAgey4uLnByb3BzfVxuICAgIGNzcz17Y3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGB9XG4gICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQmFzZUFuY2hvcj5cbilcblxuQnV0dG9uQW5jaG9yLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBBID0gcHJvcHMgPT4gKFxuICA8QmFzZUFuY2hvclxuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIG1iPXs0fVxuICAgIGNvbG9ycz1cImxpbmtcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9CYXNlQW5jaG9yPlxuKVxuXG5BLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXJMaW5rID0gcHJvcHMgPT4gKFxuICA8TGkgbWw9ezN9IG1iPXswfSBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCI+XG4gICAgPEJhc2VBbmNob3JcbiAgICAgIGZvbnRTaXplPXtbMSwgbnVsbCwgMl19XG4gICAgICBsaW5lSGVpZ2h0PXtbMSwgbnVsbCwgMl19XG4gICAgICBjb2xvcnM9XCJmb290ZXJMaW5rXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9CYXNlQW5jaG9yPlxuICA8L0xpPlxuKVxuXG5Gb290ZXJMaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG4iXX0= */"
};

var ButtonAnchor = function ButtonAnchor(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BaseAnchor, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    fontWeight: "normal",
    lineHeight: [2, null, 3],
    colors: "button",
    mt: [2, null, 3],
    py: 1,
    px: [2, null, 3]
  }, props, {
    css: _ref2,
    display: "inline-block"
  }), props.children);
};
ButtonAnchor.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
var A = function A(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BaseAnchor, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: 4,
    colors: "link"
  }, props), props.children);
};
A.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
var FooterLink = function FooterLink(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_list_item__WEBPACK_IMPORTED_MODULE_5__["Li"], {
    ml: 3,
    mb: 0,
    display: "inline-block"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(BaseAnchor, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [1, null, 2],
    lineHeight: [1, null, 2],
    colors: "footerLink"
  }, props), props.children));
};
FooterLink.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

/***/ }),

/***/ "./src/components/list-item/index.js":
/*!*******************************************!*\
  !*** ./src/components/list-item/index.js ***!
  \*******************************************/
/*! exports provided: ListItem, Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./src/components/list-item/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["Li"]; });




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ListItem =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('li', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "e58ogiq0",
  label: "ListItem"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9saXN0LWl0ZW0vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUUiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2xpc3QtaXRlbS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGZvbnRTaXplLFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZSxcbiAgY29sb3IsXG4gIGZvbnRXZWlnaHQsXG4gIGRpc3BsYXksXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBzdHlsZWQoJ2xpJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgbWFyZ2luOiAwO1xuICAke2ZvbnRTaXplfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7Y29sb3J9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke2Rpc3BsYXl9O1xuYFxuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4ubGluZUhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbiAgLi4uZGlzcGxheS5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCB7IExpIH0gZnJvbSAnLi9wcmVzZXRzJ1xuIl19 */"));
ListItem.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["display"].propTypes);


/***/ }),

/***/ "./src/components/list-item/presets.js":
/*!*********************************************!*\
  !*** ./src/components/list-item/presets.js ***!
  \*********************************************/
/*! exports provided: Li */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Li", function() { return Li; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/list-item/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var Li = function Li(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["ListItem"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: [0, null, 1],
    fontWeight: "normal"
  }, props), props.children);
};
Li.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/***/ }),

/***/ "./src/components/paragraph/index.js":
/*!*******************************************!*\
  !*** ./src/components/paragraph/index.js ***!
  \*******************************************/
/*! exports provided: Paragraph, P, Lead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./src/components/paragraph/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lead", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["Lead"]; });




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Paragraph =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('p', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "e14egob10",
  label: "Paragraph"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9wYXJhZ3JhcGgvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUUiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3BhcmFncmFwaC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuUHJvcHMnXG5cbmV4cG9ydCBjb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoJ3AnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNhbnN9O1xuICBtYXJnaW46IDA7XG4gICR7Zm9udFNpemV9O1xuICAke2xpbmVIZWlnaHR9O1xuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7Zm9udFdlaWdodH07XG4gICR7dGV4dEFsaWdufTtcbmBcblxuUGFyYWdyYXBoLnByb3BUeXBlcyA9IHtcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxufVxuXG5leHBvcnQgeyBQLCBMZWFkIH0gZnJvbSAnLi9wcmVzZXRzJ1xuIl19 */"));
Paragraph.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"].propTypes);


/***/ }),

/***/ "./src/components/paragraph/presets.js":
/*!*********************************************!*\
  !*** ./src/components/paragraph/presets.js ***!
  \*********************************************/
/*! exports provided: P, Lead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lead", function() { return Lead; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/paragraph/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var P = function P(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Paragraph"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    mb: 4,
    color: "black"
  }, props), props.children);
};
P.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};
var Lead = function Lead(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Paragraph"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [3, null, 4],
    lineHeight: [3, null, 4],
    mb: 4,
    color: "black"
  }, props), props.children);
};
Lead.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/***/ }),

/***/ "./src/components/phase-banner/index.js":
/*!**********************************************!*\
  !*** ./src/components/phase-banner/index.js ***!
  \**********************************************/
/*! exports provided: PhaseBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhaseBanner", function() { return PhaseBanner; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);


/** @jsx jsx */

var phasebanner =  false ? undefined : {
  name: "1uu74ur-phasebanner",
  styles: "background-color:#f4f4f4;font-family:robotoregular,sans-serif;padding:1.2rem 0.9rem;span:first-of-type{padding:2px 8px;border:2px solid;font-size:0.8rem;margin-right:0.5rem;}span:last-of-type{font-size:0.85rem;margin-right:0.6rem;}label:phasebanner;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9waGFzZS1iYW5uZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXVCIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9waGFzZS1iYW5uZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcblxuY29uc3QgcGhhc2ViYW5uZXIgPSBjc3NgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIGZvbnQtZmFtaWx5OiByb2JvdG9yZWd1bGFyLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxLjJyZW0gMC45cmVtO1xuXG4gIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZzogMnB4IDhweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuXG4gIHNwYW46bGFzdC1vZi10eXBlIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFBoYXNlQmFubmVyID0gKCkgPT4gKFxuICA8ZGl2IGNzcz17cGhhc2ViYW5uZXJ9PlxuICAgIDxzcGFuPkFMUEhBPC9zcGFuPlxuICAgIDxzcGFuPlxuICAgICAgPFRyYW5zPlRoaXMgc2l0ZSB3aWxsIGNoYW5nZSBhcyB3ZSB0ZXN0IGlkZWFzLjwvVHJhbnM+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbilcbiJdfQ== */"
};
var PhaseBanner = function PhaseBanner() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: phasebanner
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", null, "ALPHA"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "This site will change as we test ideas."
  })));
};

/***/ }),

/***/ "./src/components/radio-button/index.js":
/*!**********************************************!*\
  !*** ./src/components/radio-button/index.js ***!
  \**********************************************/
/*! exports provided: RadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return RadioButton; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input */ "./src/components/input/index.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text */ "./src/components/text/index.js");
/* harmony import */ var _unique_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../unique-id */ "./src/components/unique-id/index.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../theme */ "./src/theme/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */








var mq = _theme__WEBPACK_IMPORTED_MODULE_10__["BREAKPOINTS"].map(function (bp) {
  return "@media (min-width: ".concat(bp, ")");
});
var RadioButton = function RadioButton(_ref) {
  var label = _ref.label,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["label"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_unique_id__WEBPACK_IMPORTED_MODULE_8__["UniqueID"], null, function (id) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      display: "block",
      position: "relative",
      pl: 6,
      mt: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_input__WEBPACK_IMPORTED_MODULE_5__["Input"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      type: "radio",
      position: "absolute",
      left: "0",
      top: "0",
      zIndex: "1",
      m: 0,
      css: function css(theme) {
        return {
          height: theme.radioButtons.size,
          width: theme.radioButtons.size,
          opacity: 0,
          zoom: '1',
          ':checked + span:after': {
            opacity: '1'
          },
          ':focus + span:before': {
            boxShadow: "0 0 0 3px ".concat(theme.colors.focusColor)
          }
        };
      }
    }, props, {
      id: id
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_text__WEBPACK_IMPORTED_MODULE_7__["Text"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
      m: 0,
      p: 0,
      pr: 2,
      pl: 2,
      display: "block",
      color: "black",
      css: function css(theme) {
        var _before, _after;

        return {
          height: theme.checkboxes.labelSize,
          '::before': (_before = {
            content: '""',
            display: 'block',
            borderRadius: '50%',
            border: "2px solid ".concat(theme.colors.black),
            background: 'transparent'
          }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, mq[0], {
            width: theme.fontSizes[3],
            height: theme.fontSizes[3]
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, mq[2], {
            width: theme.fontSizes[4],
            height: theme.fontSizes[4]
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, "top", '0'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_before, "left", '0'), _before),
          '::after': (_after = {
            boxSizing: 'border-box',
            content: '""',
            display: 'block',
            border: "2px solid ".concat(theme.colors.white),
            borderRadius: '50%',
            background: 'white'
          }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, mq[0], {
            width: theme.fontSizes[3],
            height: theme.fontSizes[3],
            backgroundColor: "".concat(theme.colors.black)
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, mq[2], {
            width: theme.fontSizes[4],
            height: theme.fontSizes[4],
            backgroundColor: "".concat(theme.colors.black)
          }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "zoom", '1'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "opacity", '0'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "position", 'absolute'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "top", '2px'), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_after, "left", '2px'), _after)
        };
      },
      htmlFor: id
    }, props), label));
  });
};
RadioButton.defaultProps = {
  fontWeight: '400',
  fontSize: [2, null, 3],
  lineHeight: [2, null, 3],
  checkscale: '1'
};
RadioButton.propTypes = _objectSpread({
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired
}, styled_system__WEBPACK_IMPORTED_MODULE_9__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_9__["color"].propTypes);

/***/ }),

/***/ "./src/components/skip-link/index.js":
/*!*******************************************!*\
  !*** ./src/components/skip-link/index.js ***!
  \*******************************************/
/*! exports provided: SkipLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipLink", function() { return SkipLink; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link */ "./src/components/link/index.js");



/** @jsx jsx */



var makeInvisible =  false ? undefined : {
  name: "1iurvt2-makeInvisible",
  styles: "left:-999px;position:absolute;top:auto;overflow:hidden;z-index:-999;:focus,:active{background-color:white;left:auto;top:auto;height:auto;overflow:auto;z-index:999;}label:makeInvisible;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9za2lwLWxpbmsvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS3lCIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9za2lwLWxpbmsvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEEgfSBmcm9tICcuLi9saW5rJ1xuXG5jb25zdCBtYWtlSW52aXNpYmxlID0gY3NzYFxuICBsZWZ0OiAtOTk5cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAtOTk5O1xuICA6Zm9jdXMsXG4gIDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdG9wOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB6LWluZGV4OiA5OTk7XG4gIH1cbmBcbmV4cG9ydCBjb25zdCBTa2lwTGluayA9ICh7IGludmlzaWJsZSwgLi4ucmVzdCB9KSA9PiAoXG4gIDxBIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCIgY3NzPXtpbnZpc2libGUgPyBtYWtlSW52aXNpYmxlIDogbnVsbH0gey4uLnJlc3R9IC8+XG4pXG5cblNraXBMaW5rLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW52aXNpYmxlOiBmYWxzZSxcbn1cblNraXBMaW5rLnByb3BUeXBlcyA9IHtcbiAgaW52aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn1cbiJdfQ== */"
};
var SkipLink = function SkipLink(_ref) {
  var invisible = _ref.invisible,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["invisible"]);

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["A"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    backgroundColor: "white",
    css: invisible ? makeInvisible : null
  }, rest));
};
SkipLink.defaultProps = {
  invisible: false
};
SkipLink.propTypes = {
  invisible: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./src/components/stepper/index.js":
/*!*****************************************!*\
  !*** ./src/components/stepper/index.js ***!
  \*****************************************/
/*! exports provided: Steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return Steps; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text */ "./src/components/text/index.js");


/**@jsx jsx */





var _ref =  false ? undefined : {
  name: "5z8dir-Steps",
  styles: "span{font-weight:500;font-size:24px;color:#6f777b;}label:Steps;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9zdGVwcGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNZIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9zdGVwcGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi90ZXh0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuXG5leHBvcnQgY29uc3QgU3RlcHMgPSAoeyBhY3RpdmVTdGVwLCB0b3RhbFN0ZXBzIH0pID0+IChcbiAgPENvbnRhaW5lclxuICAgIGNzcz17Y3NzYFxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICM2Zjc3N2I7XG4gICAgICB9XG4gICAgYH1cbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgbWFyZ2luQm90dG9tPVwiMTBweFwiXG4gID5cbiAgICB7JyAnfVxuICAgIDxUZXh0PlxuICAgICAgPFRyYW5zPlxuICAgICAgICBTdGVwIHthY3RpdmVTdGVwfSBvZiB7dG90YWxTdGVwc31cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9UZXh0PlxuICA8L0NvbnRhaW5lcj5cbilcblxuU3RlcHMucHJvcFR5cGVzID0ge1xuICB0b3RhbFN0ZXBzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGFjdGl2ZVN0ZXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
};

var Steps = function Steps(_ref2) {
  var activeStep = _ref2.activeStep,
      totalSteps = _ref2.totalSteps;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: _ref,
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px"
  }, ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_text__WEBPACK_IMPORTED_MODULE_4__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Step {activeStep} of {totalSteps}",
    values: {
      activeStep: activeStep,
      totalSteps: totalSteps
    }
  })));
};
Steps.propTypes = {
  totalSteps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  activeStep: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};

/***/ }),

/***/ "./src/components/text-area/index.js":
/*!*******************************************!*\
  !*** ./src/components/text-area/index.js ***!
  \*******************************************/
/*! exports provided: StyledTextArea, TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledTextArea", function() { return StyledTextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return TextArea; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var StyledTextArea =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()('textarea', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_6__["cleanProps"])(prop);
  },
  target: "e1vd0c6m0",
  label: "StyledTextArea"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["borders"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy90ZXh0LWFyZWEvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJFIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy90ZXh0LWFyZWEvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7XG4gIGRpc3BsYXksXG4gIGZvbnRTaXplLFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZSxcbiAgY29sb3IsXG4gIGNvbG9yU3R5bGUsXG4gIGZvbnRXZWlnaHQsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIGJvcmRlcnMsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFRleHRBcmVhID0gc3R5bGVkKCd0ZXh0YXJlYScsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgJHtkaXNwbGF5fTtcbiAgJHtmb250U2l6ZX07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yU3R5bGV9O1xuICAke2NvbG9yfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHt3aWR0aH07XG4gICR7aGVpZ2h0fTtcbiAgJHtib3JkZXJzfVxuYFxuU3R5bGVkVGV4dEFyZWEucHJvcFR5cGVzID0ge1xuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5jb2xvclN0eWxlLnByb3BUeXBlcyxcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbiAgLi4ud2lkdGgucHJvcFR5cGVzLFxuICAuLi5oZWlnaHQucHJvcFR5cGVzLFxufVxuXG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBwcm9wcyA9PiAoXG4gIDxTdHlsZWRUZXh0QXJlYVxuICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgZm9udFNpemU9e1syLCBudWxsLCAzXX1cbiAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgY29sb3JzPVwidGV4dEFyZWFcIlxuICAgIHdpZHRoPXtbJzMwMHB4JywgbnVsbCwgJzUwMHB4J119XG4gICAgaGVpZ2h0PXtbJzIwMHB4JywgbnVsbCwgJzMwMHB4J119XG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L1N0eWxlZFRleHRBcmVhPlxuKVxuXG5UZXh0QXJlYS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufVxuIl19 */");
StyledTextArea.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_5__["display"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["colorStyle"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["color"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["width"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["height"].propTypes);
var TextArea = function TextArea(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledTextArea, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    display: "block",
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    colors: "textArea",
    width: ['300px', null, '500px'],
    height: ['200px', null, '300px']
  }, props), props.children);
};
TextArea.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

/***/ }),

/***/ "./src/components/text/index.js":
/*!**************************************!*\
  !*** ./src/components/text/index.js ***!
  \**************************************/
/*! exports provided: StyledSpan, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSpan", function() { return StyledSpan; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presets */ "./src/components/text/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _presets__WEBPACK_IMPORTED_MODULE_3__["Text"]; });




var StyledSpan =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('span', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_2__["cleanProps"])(prop);
  },
  target: "e1fxharu0",
  label: "StyledSpan"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["zIndex"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy90ZXh0L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCRSIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdGV4dC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgZGlzcGxheSxcbiAgYm9yZGVyLFxuICBib3JkZXJDb2xvcixcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgcG9zaXRpb24sXG4gIHpJbmRleCxcbiAgdG9wLFxuICByaWdodCxcbiAgYm90dG9tLFxuICBsZWZ0LFxuICB0ZXh0QWxpZ24sXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFNwYW4gPSBzdHlsZWQoJ3NwYW4nLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNhbnN9O1xuICBtYXJnaW46IDA7XG4gICR7Zm9udFNpemV9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke2xpbmVIZWlnaHR9O1xuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7ZGlzcGxheX07XG4gICR7Ym9yZGVyfTtcbiAgJHtib3JkZXJDb2xvcn07XG4gICR7d2lkdGh9O1xuICAke2hlaWdodH07XG4gICR7cG9zaXRpb259O1xuICAke3pJbmRleH07XG4gICR7dG9wfTtcbiAgJHtyaWdodH07XG4gICR7Ym90dG9tfTtcbiAgJHtsZWZ0fTtcbiAgJHt0ZXh0QWxpZ259XG5gXG5leHBvcnQgeyBUZXh0IH0gZnJvbSAnLi9wcmVzZXRzJ1xuIl19 */");


/***/ }),

/***/ "./src/components/text/presets.js":
/*!****************************************!*\
  !*** ./src/components/text/presets.js ***!
  \****************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/components/text/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["StyledSpan"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    display: "block",
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    color: "black"
  }, props), props.children);
};
Text.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
};

/***/ }),

/***/ "./src/components/topbanner/index.js":
/*!*******************************************!*\
  !*** ./src/components/topbanner/index.js ***!
  \*******************************************/
/*! exports provided: TopBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBanner", function() { return TopBanner; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link */ "./src/components/link/index.js");
/* harmony import */ var _LanguageSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LanguageSwitcher */ "./src/LanguageSwitcher.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _images_rcmpbrandingeng_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../images/rcmpbrandingeng.svg */ "./src/images/rcmpbrandingeng.svg");
/* harmony import */ var _images_rcmpbrandingeng_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_rcmpbrandingeng_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_rcmpbrandingfre_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../images/rcmpbrandingfre.svg */ "./src/images/rcmpbrandingfre.svg");
/* harmony import */ var _images_rcmpbrandingfre_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_rcmpbrandingfre_svg__WEBPACK_IMPORTED_MODULE_8__);

/** @jsx jsx **/










var _ref =  false ? undefined : {
  name: "kbhbfc-TopBanner",
  styles: "text-align:right;label:TopBanner;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy90b3BiYW5uZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURvQiIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdG9wYmFubmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuLyoqIEBqc3gganN4ICoqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgeyBBIH0gZnJvbSAnLi4vbGluaydcbmltcG9ydCB7IExhbmd1YWdlU3dpdGNoZXIgfSBmcm9tICcuLi8uLi9MYW5ndWFnZVN3aXRjaGVyJ1xuaW1wb3J0IHsgR0VUX0xBTkdVQUdFX1FVRVJZIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCByY21wYnJhbmRpbmdlbmcgZnJvbSAnLi4vLi4vaW1hZ2VzL3JjbXBicmFuZGluZ2VuZy5zdmcnXG5pbXBvcnQgcmNtcGJyYW5kaW5nZnJlIGZyb20gJy4uLy4uL2ltYWdlcy9yY21wYnJhbmRpbmdmcmUuc3ZnJ1xuXG5leHBvcnQgY29uc3QgVG9wQmFubmVyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGJnIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfTEFOR1VBR0VfUVVFUll9PlxuICAgICAgeyh7IGRhdGE6IHsgbGFuZ3VhZ2UgfSB9KSA9PiAoXG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBiZz17Ymd9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIHdpZHRoPXsxfVxuICAgICAgICAgIGhlaWdodD17WzYwLCBudWxsLCA2MF19XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxDb250YWluZXIgbWw9ezN9IHdpZHRoPXtbMjUwLCBudWxsLCAzMDBdfT5cbiAgICAgICAgICAgIDxBXG4gICAgICAgICAgICAgIGNvbG9ycz1cImZvb3RlckxpbmtcIlxuICAgICAgICAgICAgICBocmVmPXtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9PT0gJ2ZyJ1xuICAgICAgICAgICAgICAgICAgPyAnaHR0cDovL3d3dy5yY21wLWdyYy5nYy5jYS9mcidcbiAgICAgICAgICAgICAgICAgIDogJ2h0dHA6Ly93d3cucmNtcC1ncmMuZ2MuY2EvZW4nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17bGFuZ3VhZ2UgPT09ICdmcicgPyByY21wYnJhbmRpbmdmcmUgOiByY21wYnJhbmRpbmdlbmd9XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAnZnInXG4gICAgICAgICAgICAgICAgICAgID8gJ0dlbmRhcm1lcmllIHJveWFsZSBkdSBDYW5hZGEnXG4gICAgICAgICAgICAgICAgICAgIDogJ1JveWFsIENhbmFkaWFuIE1vdW50ZWQgUG9saWNlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICBmbGV4PVwiMSAxIGF1dG9cIlxuICAgICAgICAgICAgbXI9ezN9XG4gICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ2VuJyA/IG51bGwgOiA8TGFuZ3VhZ2VTd2l0Y2hlciBsYW5ndWFnZT1cImVuXCIgLz59XG4gICAgICAgICAgICB7bGFuZ3VhZ2UgPT09ICdmcicgPyBudWxsIDogPExhbmd1YWdlU3dpdGNoZXIgbGFuZ3VhZ2U9XCJmclwiIC8+fVxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9RdWVyeT5cbiAgKVxufVxuXG5Ub3BCYW5uZXIucHJvcFR5cGVzID0ge1xuICBsYW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJnOiBQcm9wVHlwZXMuc3RyaW5nLFxufVxuXG5Ub3BCYW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBiZzogJ2JsYWNrJyxcbn1cbiJdfQ== */"
};

var TopBanner = function TopBanner(props) {
  var bg = props.bg;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_6__["GET_LANGUAGE_QUERY"]
  }, function (_ref2) {
    var language = _ref2.data.language;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      bg: bg,
      display: "flex",
      flexDirection: "row",
      width: 1,
      height: [60, null, 60],
      alignItems: "center",
      "data-testid": "background-color"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      ml: 3,
      width: [250, null, 300]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
      colors: "footerLink",
      href: language === 'fr' ? 'http://www.rcmp-grc.gc.ca/fr' : 'http://www.rcmp-grc.gc.ca/en'
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
      src: language === 'fr' ? _images_rcmpbrandingfre_svg__WEBPACK_IMPORTED_MODULE_8___default.a : _images_rcmpbrandingeng_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
      width: "300px",
      alt: language === 'fr' ? 'Gendarmerie royale du Canada' : 'Royal Canadian Mounted Police'
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      flex: "1 1 auto",
      mr: 3,
      css: _ref
    }, language === 'en' ? null : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_5__["LanguageSwitcher"], {
      language: "en"
    }), language === 'fr' ? null : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_5__["LanguageSwitcher"], {
      language: "fr"
    })));
  });
};
TopBanner.propTypes = {
  lang: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  bg: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
TopBanner.defaultProps = {
  bg: 'black'
};

/***/ }),

/***/ "./src/components/unique-id/index.js":
/*!*******************************************!*\
  !*** ./src/components/unique-id/index.js ***!
  \*******************************************/
/*! exports provided: UniqueID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueID", function() { return UniqueID; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);









var counter = 0;
var UniqueID =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UniqueID, _Component);

  function UniqueID() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UniqueID);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(UniqueID)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      id: counter++
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UniqueID, [{
    key: "render",
    value: function render() {
      return this.props.children('id-' + this.state.id);
    }
  }]);

  return UniqueID;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(UniqueID, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

/***/ }),

/***/ "./src/components/unordered-list/index.js":
/*!************************************************!*\
  !*** ./src/components/unordered-list/index.js ***!
  \************************************************/
/*! exports provided: UnorderedList, Ul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnorderedList", function() { return UnorderedList; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./presets */ "./src/components/unordered-list/presets.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return _presets__WEBPACK_IMPORTED_MODULE_4__["Ul"]; });




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var UnorderedList =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()('ul', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return Object(_utils_cleanProps__WEBPACK_IMPORTED_MODULE_3__["cleanProps"])(prop);
  },
  target: "ecicgo50",
  label: "UnorderedList"
})("font-family:", function (_ref) {
  var theme = _ref.theme;
  return theme.fontSans;
}, ";margin:0;padding:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy91bm9yZGVyZWQtbGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRSIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb250U2l6ZSwgbGluZUhlaWdodCwgc3BhY2UsIGNvbG9yLCBmb250V2VpZ2h0IH0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuUHJvcHMnXG5cbmV4cG9ydCBjb25zdCBVbm9yZGVyZWRMaXN0ID0gc3R5bGVkKCd1bCcsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgJHtmb250U2l6ZX07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke2NvbG9yfTtcbmBcblVub3JkZXJlZExpc3QucHJvcFR5cGVzID0ge1xuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCB7IFVsIH0gZnJvbSAnLi9wcmVzZXRzJ1xuIl19 */"));
UnorderedList.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["color"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"].propTypes);


/***/ }),

/***/ "./src/components/unordered-list/presets.js":
/*!**************************************************!*\
  !*** ./src/components/unordered-list/presets.js ***!
  \**************************************************/
/*! exports provided: Ul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ul", function() { return Ul; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/components/unordered-list/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);




/** @jsx jsx **/


var Ul = function Ul(props) {
  var listStyleType = props.listStyleType,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["listStyleType"]);

  var paddingValue;
  if (listStyleType === 'none') paddingValue = 0;else paddingValue = [5, null, 6];
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(___WEBPACK_IMPORTED_MODULE_3__["UnorderedList"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [2, null, 3],
    lineHeight: [2, null, 3],
    pl: paddingValue,
    mb: 4,
    css:
    /*#__PURE__*/
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"])("list-style-type:", listStyleType, ";label:Ul;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy91bm9yZGVyZWQtbGlzdC9wcmVzZXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCYyIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QvcHJlc2V0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFVub3JkZXJlZExpc3QgfSBmcm9tICcuJ1xuLyoqIEBqc3gganN4ICoqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5leHBvcnQgY29uc3QgVWwgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbGlzdFN0eWxlVHlwZSwgLi4ucmVzdCB9ID0gcHJvcHNcbiAgdmFyIHBhZGRpbmdWYWx1ZVxuXG4gIGlmIChsaXN0U3R5bGVUeXBlID09PSAnbm9uZScpIHBhZGRpbmdWYWx1ZSA9IDBcbiAgZWxzZSBwYWRkaW5nVmFsdWUgPSBbNSwgbnVsbCwgNl1cblxuICByZXR1cm4gKFxuICAgIDxVbm9yZGVyZWRMaXN0XG4gICAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgICAgcGw9e3BhZGRpbmdWYWx1ZX1cbiAgICAgIG1iPXs0fVxuICAgICAgY3NzPXtjc3NgXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogJHtsaXN0U3R5bGVUeXBlfTtcbiAgICAgIGB9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Vbm9yZGVyZWRMaXN0PlxuICApXG59XG5cblVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGlzdFN0eWxlVHlwZTogJ2Rpc2MnLFxufVxuXG5VbC5wcm9wVHlwZXMgPSB7XG4gIGxpc3RTdHlsZVR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufVxuIl19 */"))
  }, rest), props.children);
};
Ul.defaultProps = {
  listStyleType: 'disc'
};
Ul.propTypes = {
  listStyleType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

/***/ }),

/***/ "./src/components/warning-banner/index.js":
/*!************************************************!*\
  !*** ./src/components/warning-banner/index.js ***!
  \************************************************/
/*! exports provided: WarningBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningBanner", function() { return WarningBanner; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container */ "./src/components/container/index.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text */ "./src/components/text/index.js");


/* eslint-disable react/no-unescaped-entities */

/** @jsx jsx **/




var bannerStyle =  false ? undefined : {
  name: "1uytqke-bannerStyle",
  styles: "display:flex;flex-direction:column;justify-content:center;label:bannerStyle;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93YXJuaW5nLWJhbm5lci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRdUIiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dhcm5pbmctYmFubmVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tdW5lc2NhcGVkLWVudGl0aWVzICovXG4vKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vdGV4dCdcblxuY29uc3QgYmFubmVyU3R5bGUgPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgV2FybmluZ0Jhbm5lciA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBiZyB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJcbiAgICAgIGRhdGEtdGVzdGlkPVwiYmFja2dyb3VuZC1jb2xvclwiXG4gICAgICBjc3M9e2Jhbm5lclN0eWxlfVxuICAgICAgYmc9e2JnfVxuICAgICAgaGVpZ2h0PXtbNTAsIG51bGwsIDYwXX1cbiAgICA+XG4gICAgICA8VGV4dCBwYWRkaW5nTGVmdD1cIjEwcHhcIiBwYWRkaW5nUmlnaHQ9XCIxMHB4XCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIDxUcmFucz5cbiAgICAgICAgICBXYXJuaW5nISBUaGlzIGlzIGEgcHJvdG90eXBlLiBJdCB3b24ndCBhY3R1YWxseSBzdWJtaXQgeW91ciByZXBvcnQgdG9cbiAgICAgICAgICB0aGUgUkNNUC5cbiAgICAgICAgPC9UcmFucz5cbiAgICAgIDwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5XYXJuaW5nQmFubmVyLnByb3BUeXBlcyA9IHtcbiAgYmc6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbldhcm5pbmdCYW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBiZzogJ3llbGxvdycsXG59XG4iXX0= */"
};
var WarningBanner = function WarningBanner(props) {
  var bg = props.bg;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    "data-testid": "background-color",
    css: bannerStyle,
    bg: bg,
    height: [50, null, 60]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_text__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    paddingLeft: "10px",
    paddingRight: "10px",
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Warning! This is a prototype. It won't actually submit your report to the RCMP."
  })));
};
WarningBanner.propTypes = {
  bg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
WarningBanner.defaultProps = {
  bg: 'yellow'
};

/***/ }),

/***/ "./src/components/wordmark/index.js":
/*!******************************************!*\
  !*** ./src/components/wordmark/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var FipFlag =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()('path', {
  target: "e1jalzb70",
  label: "FipFlag"
})("fill:", function (props) {
  return props.flag;
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93b3JkbWFyay9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJOEIiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dvcmRtYXJrL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEZpcEZsYWcgPSBzdHlsZWQoJ3BhdGgnKWBcbiAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy5mbGFnfTtcbmBcblxuY29uc3QgRmlwVGV4dCA9IHN0eWxlZCgncGF0aCcpYFxuICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRleHR9O1xuYFxuXG5jb25zdCBXb3JkbWFyayA9ICh7XG4gIHdpZHRoID0gJzEwZW0nLFxuICBmbGFnID0gJyNGMDAnLFxuICB0ZXh0ID0gJyMwMDAnLFxuICBsYW5nID0gJ2VuJyxcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPHN2Z1xuICAgIHJvbGU9XCJpbWdcIlxuICAgIGFyaWEtbGFiZWw9e1xuICAgICAgbGFuZyA9PT0gJ2VuJ1xuICAgICAgICA/ICdTeW1ib2wgb2YgdGhlIEdvdmVybm1lbnQgb2YgQ2FuYWRhJ1xuICAgICAgICA6ICdTeW1ib2xlIGR1IGdvdXZlcm5lbWVudCBkdSBDYW5hZGEnXG4gICAgfVxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZlcnNpb249XCIxLjFcIlxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICB2aWV3Qm94PVwiMCAwIDE0MyAzNFwiXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaW5ZTWluIG1lZXRcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxnIGlkPVwid21tc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSwgLTEpXCI+XG4gICAgICA8RmlwRmxhZ1xuICAgICAgICBjbGFzc05hbWU9XCJmaXBmbGFnXCJcbiAgICAgICAgZmxhZz17ZmxhZ31cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJmbGFnXCJcbiAgICAgICAgZD1cIk0xMzcuOSwxLjJoNS4ydjEwLjRoLTUuMlYxLjJ6IE0xMjguOSw2LjRsLTAuMywwLjFjMCwwLDEuOCwxLjUsMS44LDEuNmMwLjEsMC4xLDAuMiwwLjEsMC4xLDAuNCBjLTAuMSwwLjMtMC4yLDAuNi0wLjIsMC42czEuNi0wLjMsMS44LTAuNGMwLjIsMCwwLjMsMCwwLjMsMC4yYzAsMC4yLTAuMSwxLjktMC4xLDEuOWgwLjVjMCwwLTAuMS0xLjgtMC4xLTEuOSBjMC0wLjIsMC4xLTAuMiwwLjMtMC4yYzAuMiwwLDEuOCwwLjQsMS44LDAuNHMtMC4xLTAuNC0wLjItMC42Yy0wLjEtMC4zLDAtMC4zLDAuMS0wLjRjMC4xLTAuMSwxLjgtMS42LDEuOC0xLjZsLTAuMy0wLjEgYy0wLjItMC4xLTAuMS0wLjItMC4xLTAuM3MwLjMtMS4xLDAuMy0xLjFzLTAuOCwwLjItMC45LDAuMmMtMC4xLDAtMC4yLDAtMC4yLTAuMXMtMC4yLTAuNS0wLjItMC41cy0wLjksMS0xLDEuMSBjLTAuMiwwLjItMC40LDAtMC4zLTAuMmMwLTAuMiwwLjUtMi4zLDAuNS0yLjNzLTAuNSwwLjMtMC43LDAuNHMtMC4zLDAuMS0wLjMtMC4xYy0wLjEtMC4yLTAuNy0xLjMtMC43LTEuNGMwLDAtMC42LDEuMi0wLjcsMS40IHMtMC4yLDAuMi0wLjMsMC4xYy0wLjItMC4xLTAuNy0wLjQtMC43LTAuNHMwLjUsMi4xLDAuNSwyLjNzLTAuMSwwLjMtMC4zLDAuMmwtMS0xLjFjMCwwLTAuMSwwLjMtMC4yLDAuNGMwLDAuMS0wLjEsMC4yLTAuMiwwLjEgYy0wLjIsMC0xLTAuMi0xLTAuMnMwLjMsMSwwLjQsMS4xQzEyOS4xLDYuMSwxMjkuMSw2LjMsMTI4LjksNi40eiBNMTIyLjIsMS4yaDUuMnYxMC40aC01LjJWMS4yelwiXG4gICAgICAvPlxuICAgICAgPEZpcFRleHRcbiAgICAgICAgY2xhc3NOYW1lPVwiZmlwdGV4dFwiXG4gICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgIGRhdGEtdGVzdGlkPVwidGV4dFwiXG4gICAgICAgIGQ9XCJNMTQ0LjIsMzIuNGMtMC40LDAuOS0xLjIsMS4yLTEuNywxLjJjLTAuNiwwLTIuNC0wLjEtMi40LTQuOGMwLDAsMC05LjUsMC0xMC4xYzAtMy4xLTIuNC01LjYtOC42LTUuNiBjLTYuNywwLTYuOCwzLjMtNi44LDQuMWMtMC4xLDAuOSwwLjQsMS45LDIuMSwxLjljMS41LDAsMS45LTEuNywyLjEtMi4zYzAuMi0wLjcsMC4zLTIuNywzLTIuN2MyLjMsMCwzLjcsMiwzLjgsNC45IGMwLDAuNSwwLDAuOCwwLDEuMWMwLDAuMiwwLDAuMywwLDAuNWwwLDBsMCwwdjAuMWMtMC4yLDEtMC43LDEuNS0xLjYsMS45Yy0xLjIsMC42LTQuNywxLjEtNS4xLDEuMmMtMS40LDAuMy01LjMsMS4zLTUuMiw1LjQgYzAuMSw0LDQuMSw1LjQsNi45LDUuM2MyLjctMC4xLDQuMy0xLjIsNS0xLjhjMC40LTAuMywwLjQtMC4zLDAuNywwLjFjMC40LDAuNCwxLjcsMS43LDQuOCwxLjdjMy4yLDAsMy42LTEuNSwzLjgtMiBDMTQ1LjEsMzIuMiwxNDQuNCwzMS45LDE0NC4yLDMyLjR6IE0xMzEuNywzMy41Yy0yLjgsMC0zLjUtMi4zLTMuNS0zLjVjMC0xLjEsMC42LTMuNCwzLjQtNWMwLDAsMS4zLTAuOCwzLjgtMS44IGMwLjEsMCwwLjIsMCwwLjIsMHMwLjEsMC4xLDAuMSwwLjJsMCwwbDAsMHYwLjFsMCwwbDAsMHYwLjFsMCwwbDAsMGwwLDB2NC4yQzEzNS43LDMxLjEsMTM0LjEsMzMuNSwxMzEuNywzMy41eiBNMTIyLjUsMzMuNCBjLTAuNC0wLjEtMi45LDAuMi0yLjktNy40czAtMjMuOSwwLTIzLjljMC0wLjMsMC0xLjEtMC45LTEuMWMtMC45LDAtNi45LDAuMy03LjMsMC40Yy0wLjQsMC0wLjcsMC41LDAsMC41IGMwLjcsMC4xLDMuOSwwLjMsMy45LDUuNmMwLDIuNiwwLDUuMiwwLDcuMWMwLDAuMSwwLDAuMiwwLDAuMmMwLDAuMiwwLDAuMy0wLjEsMC40YzAsMCwwLDAsMCwwLjFsMCwwYy0wLjEsMC4xLTAuMiwwLTAuNS0wLjIgYy0wLjUtMC40LTIuOC0xLjgtNS43LTEuOGMtNC43LDAtMTAuNSwzLjQtMTAuNSwxMC40YzAsNy41LDUuMywxMS4xLDEwLjgsMTEuMWMyLjcsMCw0LjYtMS4yLDUuMy0xLjZjMC44LTAuNSwwLjctMC40LDAuOCwwLjMgYzAuMSwwLjUsMCwxLjUsMS40LDEuNGMxLjUtMC4yLDUuMS0wLjYsNS44LTAuN0MxMjMuMywzMy45LDEyMy4xLDMzLjUsMTIyLjUsMzMuNHogTTExMC4xLDMzLjdjLTQuNCwwLTYuNy01LjItNi43LTEwLjIgYzAtNS41LDMuMS05LjIsNi40LTljNC4zLDAuMyw1LjQsMy43LDUuNSw5LjhjMCwwLjQsMCwwLjgsMCwxLjNDMTE1LjIsMzEuNiwxMTIuNywzMy43LDExMC4xLDMzLjd6IE05OC40LDMyLjQgYy0wLjQsMC45LTEuMiwxLjItMS43LDEuMmMtMC42LDAtMi40LTAuMS0yLjQtNC44YzAsMCwwLTkuNSwwLTEwLjFjMC0zLjEtMi40LTUuNi04LjYtNS42Yy02LjcsMC02LjgsMy4zLTYuOCw0LjEgYy0wLjEsMC45LDAuNCwxLjksMi4xLDEuOWMxLjUsMCwxLjktMS43LDIuMS0yLjNjMC4yLTAuNywwLjMtMi43LDMtMi43YzIuMywwLDMuOCwyLDMuOCw1djAuMWMwLDAuMSwwLDAuMiwwLDAuMnYwLjMgYzAsMC4xLDAsMC4zLDAsMC40Yy0wLjEsMS41LTAuNSwyLTEuNywyLjZjLTEuMiwwLjYtNC43LDEuMS01LjEsMS4yYy0xLjQsMC4zLTUuMywxLjMtNS4yLDUuNGMwLjEsNCw0LjEsNS40LDYuOSw1LjMgYzIuNy0wLjEsNC4zLTEuMiw1LTEuOGMwLjQtMC4zLDAuNC0wLjMsMC43LDAuMWMwLjQsMC40LDEuNywxLjcsNC44LDEuN2MzLjIsMCwzLjYtMS41LDMuOC0yQzk5LjMsMzIuMiw5OC43LDMxLjksOTguNCwzMi40eiAgTTg2LDMzLjVjLTIuOCwwLTMuNS0yLjMtMy41LTMuNWMwLTEuMSwwLjYtMy40LDMuNC01YzAsMCwxLjMtMC44LDMuOC0xLjhjMC4xLDAsMC4yLDAsMC4yLDB2MC4xbDAsMGwwLDBjMCwwLjEsMCwwLjIsMCwwLjR2LTAuMSBjMCwwLDAsMCwwLDAuMXY0LjJDODkuOSwzMS4xLDg4LjMsMzMuNSw4NiwzMy41eiBNNzYuNCwzMy40Yy0wLjgtMC4yLTIuMi0xLjEtMi4yLTUuNXYtOGMwLTEuOSwwLjItNi44LTcuMy02LjggYy0zLjksMC02LjEsMi02LjMsMi4xYy0wLjMsMC4zLTAuNSwwLjQtMC42LTAuMWMtMC4xLTAuNC0wLjMtMS0wLjQtMS40Yy0wLjEtMC4zLTAuMy0wLjYtMS0wLjVjLTAuNywwLjEtNS4xLDAuOC01LjksMSBjLTAuNywwLjItMC41LDAuNSwwLDAuNmMwLjUsMC4xLDIuOSwwLjMsMi45LDQuNHMwLDguNiwwLDguNmMwLDUtMSw1LjQtMS45LDUuN2MtMS4yLDAuMy0wLjYsMC43LTAuMSwwLjdjMCwwLDguOSwwLDkuMSwwIGMwLjYsMCwwLjktMC42LTAuMy0wLjhjLTEuMi0wLjItMi4zLTAuOS0yLjMtNC44YzAtMC40LDAtNC43LDAtNS41YzAtMi4xLTAuNS04LjUsNS4zLTguNmM0LjEtMC4xLDQuNSwzLjMsNC41LDUuNXY4LjUgYzAsMy41LTEsNC42LTIuMiw0LjhjLTEuMSwwLjItMC45LDAuNy0wLjMsMC43YzAuMiwwLDkuMywwLDkuMywwQzc3LjIsMzQuMiw3Ny43LDMzLjcsNzYuNCwzMy40eiBNNTIuMSwzMi40IGMtMC40LDAuOS0xLjIsMS4yLTEuNywxLjJjLTAuNiwwLTIuNC0wLjEtMi40LTQuOGMwLDAsMC05LjUsMC0xMC4xYzAtMy4xLTIuNC01LjYtOC42LTUuNmMtNi43LDAtNi44LDMuMy02LjgsNC4xIGMtMC4xLDAuOSwwLjQsMS45LDIuMSwxLjljMS41LDAsMS45LTEuNywyLjEtMi4zYzAuMi0wLjcsMC4zLTIuNywzLTIuN2MyLjMsMCwzLjcsMiwzLjgsNC45YzAsMC41LDAsMC44LDAsMS4xIGMwLDAuMiwwLDAuNC0wLjEsMC41djAuMWwwLDBjLTAuMiwxLTAuNywxLjUtMS42LDEuOWMtMS4yLDAuNi00LjcsMS4xLTUuMSwxLjJjLTEuNCwwLjMtNS4zLDEuMy01LjIsNS40YzAuMSw0LDQuMSw1LjQsNi45LDUuMyBjMi43LTAuMSw0LjMtMS4yLDUtMS44YzAuNC0wLjMsMC40LTAuMywwLjcsMC4xYzAuNCwwLjQsMS43LDEuNyw0LjgsMS43YzMuMiwwLDMuNi0xLjUsMy44LTJDNTMsMzIuMiw1Mi4zLDMxLjksNTIuMSwzMi40eiAgTTM5LjYsMzMuNWMtMi44LDAtMy41LTIuMy0zLjUtMy41czAuNi0zLjQsMy40LTVjMCwwLDEuMy0wLjgsMy44LTEuOGMwLjEsMCwwLjIsMCwwLjIsMHMwLjEsMC4xLDAuMSwwLjJsMCwwbDAsMGwwLDAgYzAsMCwwLDAuMSwwLDAuMmwwLDBsMCwwdjAuMWwwLDBsMCwwbDAsMHY0LjJDNDMuNiwzMS4xLDQyLDMzLjUsMzkuNiwzMy41eiBNMzAsMjQuOGMtMSwzLjItMi45LDguNC05LjgsOC42IEMxMywzMy41LDguNywyOC42LDguNSwxOS41QzguMiw5LjgsMTIuNCwyLjQsMTguOSwyLjJjNy4zLTAuMSw5LjksOC42LDEwLDkuOWMwLjEsMSwxLjQsMC45LDEuNC0wLjFjMC0wLjUtMC42LTkuMS0wLjgtMTAuMSBjLTAuMi0xLTEtMC42LTEuMi0wLjJDMjguMiwyLDI4LjQsMS40LDI4LDIuM2MtMC40LDAuOS0xLjUsMC40LTEuOSwwLjNjLTEuMi0wLjUtMy41LTEuNy03LjItMS42Yy04LjUsMC4yLTE3LjIsNi41LTE3LDE3LjUgYzAuMiwxMC43LDguOCwxNi43LDE2LjgsMTYuNmM3LjMtMC4xLDExLjQtNC43LDEyLjYtMTBDMzEuNywyMy44LDMwLjQsMjMuNSwzMCwyNC44elwiXG4gICAgICAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pXG5cbldvcmRtYXJrLnByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZsYWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmc6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRtYXJrXG4iXX0= */"));

var FipText =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()('path', {
  target: "e1jalzb71",
  label: "FipText"
})("fill:", function (props) {
  return props.text;
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy93b3JkbWFyay9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFROEIiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3dvcmRtYXJrL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEZpcEZsYWcgPSBzdHlsZWQoJ3BhdGgnKWBcbiAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy5mbGFnfTtcbmBcblxuY29uc3QgRmlwVGV4dCA9IHN0eWxlZCgncGF0aCcpYFxuICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRleHR9O1xuYFxuXG5jb25zdCBXb3JkbWFyayA9ICh7XG4gIHdpZHRoID0gJzEwZW0nLFxuICBmbGFnID0gJyNGMDAnLFxuICB0ZXh0ID0gJyMwMDAnLFxuICBsYW5nID0gJ2VuJyxcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPHN2Z1xuICAgIHJvbGU9XCJpbWdcIlxuICAgIGFyaWEtbGFiZWw9e1xuICAgICAgbGFuZyA9PT0gJ2VuJ1xuICAgICAgICA/ICdTeW1ib2wgb2YgdGhlIEdvdmVybm1lbnQgb2YgQ2FuYWRhJ1xuICAgICAgICA6ICdTeW1ib2xlIGR1IGdvdXZlcm5lbWVudCBkdSBDYW5hZGEnXG4gICAgfVxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZlcnNpb249XCIxLjFcIlxuICAgIHdpZHRoPXt3aWR0aH1cbiAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICB2aWV3Qm94PVwiMCAwIDE0MyAzNFwiXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaW5ZTWluIG1lZXRcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIDxnIGlkPVwid21tc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMSwgLTEpXCI+XG4gICAgICA8RmlwRmxhZ1xuICAgICAgICBjbGFzc05hbWU9XCJmaXBmbGFnXCJcbiAgICAgICAgZmxhZz17ZmxhZ31cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJmbGFnXCJcbiAgICAgICAgZD1cIk0xMzcuOSwxLjJoNS4ydjEwLjRoLTUuMlYxLjJ6IE0xMjguOSw2LjRsLTAuMywwLjFjMCwwLDEuOCwxLjUsMS44LDEuNmMwLjEsMC4xLDAuMiwwLjEsMC4xLDAuNCBjLTAuMSwwLjMtMC4yLDAuNi0wLjIsMC42czEuNi0wLjMsMS44LTAuNGMwLjIsMCwwLjMsMCwwLjMsMC4yYzAsMC4yLTAuMSwxLjktMC4xLDEuOWgwLjVjMCwwLTAuMS0xLjgtMC4xLTEuOSBjMC0wLjIsMC4xLTAuMiwwLjMtMC4yYzAuMiwwLDEuOCwwLjQsMS44LDAuNHMtMC4xLTAuNC0wLjItMC42Yy0wLjEtMC4zLDAtMC4zLDAuMS0wLjRjMC4xLTAuMSwxLjgtMS42LDEuOC0xLjZsLTAuMy0wLjEgYy0wLjItMC4xLTAuMS0wLjItMC4xLTAuM3MwLjMtMS4xLDAuMy0xLjFzLTAuOCwwLjItMC45LDAuMmMtMC4xLDAtMC4yLDAtMC4yLTAuMXMtMC4yLTAuNS0wLjItMC41cy0wLjksMS0xLDEuMSBjLTAuMiwwLjItMC40LDAtMC4zLTAuMmMwLTAuMiwwLjUtMi4zLDAuNS0yLjNzLTAuNSwwLjMtMC43LDAuNHMtMC4zLDAuMS0wLjMtMC4xYy0wLjEtMC4yLTAuNy0xLjMtMC43LTEuNGMwLDAtMC42LDEuMi0wLjcsMS40IHMtMC4yLDAuMi0wLjMsMC4xYy0wLjItMC4xLTAuNy0wLjQtMC43LTAuNHMwLjUsMi4xLDAuNSwyLjNzLTAuMSwwLjMtMC4zLDAuMmwtMS0xLjFjMCwwLTAuMSwwLjMtMC4yLDAuNGMwLDAuMS0wLjEsMC4yLTAuMiwwLjEgYy0wLjIsMC0xLTAuMi0xLTAuMnMwLjMsMSwwLjQsMS4xQzEyOS4xLDYuMSwxMjkuMSw2LjMsMTI4LjksNi40eiBNMTIyLjIsMS4yaDUuMnYxMC40aC01LjJWMS4yelwiXG4gICAgICAvPlxuICAgICAgPEZpcFRleHRcbiAgICAgICAgY2xhc3NOYW1lPVwiZmlwdGV4dFwiXG4gICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgIGRhdGEtdGVzdGlkPVwidGV4dFwiXG4gICAgICAgIGQ9XCJNMTQ0LjIsMzIuNGMtMC40LDAuOS0xLjIsMS4yLTEuNywxLjJjLTAuNiwwLTIuNC0wLjEtMi40LTQuOGMwLDAsMC05LjUsMC0xMC4xYzAtMy4xLTIuNC01LjYtOC42LTUuNiBjLTYuNywwLTYuOCwzLjMtNi44LDQuMWMtMC4xLDAuOSwwLjQsMS45LDIuMSwxLjljMS41LDAsMS45LTEuNywyLjEtMi4zYzAuMi0wLjcsMC4zLTIuNywzLTIuN2MyLjMsMCwzLjcsMiwzLjgsNC45IGMwLDAuNSwwLDAuOCwwLDEuMWMwLDAuMiwwLDAuMywwLDAuNWwwLDBsMCwwdjAuMWMtMC4yLDEtMC43LDEuNS0xLjYsMS45Yy0xLjIsMC42LTQuNywxLjEtNS4xLDEuMmMtMS40LDAuMy01LjMsMS4zLTUuMiw1LjQgYzAuMSw0LDQuMSw1LjQsNi45LDUuM2MyLjctMC4xLDQuMy0xLjIsNS0xLjhjMC40LTAuMywwLjQtMC4zLDAuNywwLjFjMC40LDAuNCwxLjcsMS43LDQuOCwxLjdjMy4yLDAsMy42LTEuNSwzLjgtMiBDMTQ1LjEsMzIuMiwxNDQuNCwzMS45LDE0NC4yLDMyLjR6IE0xMzEuNywzMy41Yy0yLjgsMC0zLjUtMi4zLTMuNS0zLjVjMC0xLjEsMC42LTMuNCwzLjQtNWMwLDAsMS4zLTAuOCwzLjgtMS44IGMwLjEsMCwwLjIsMCwwLjIsMHMwLjEsMC4xLDAuMSwwLjJsMCwwbDAsMHYwLjFsMCwwbDAsMHYwLjFsMCwwbDAsMGwwLDB2NC4yQzEzNS43LDMxLjEsMTM0LjEsMzMuNSwxMzEuNywzMy41eiBNMTIyLjUsMzMuNCBjLTAuNC0wLjEtMi45LDAuMi0yLjktNy40czAtMjMuOSwwLTIzLjljMC0wLjMsMC0xLjEtMC45LTEuMWMtMC45LDAtNi45LDAuMy03LjMsMC40Yy0wLjQsMC0wLjcsMC41LDAsMC41IGMwLjcsMC4xLDMuOSwwLjMsMy45LDUuNmMwLDIuNiwwLDUuMiwwLDcuMWMwLDAuMSwwLDAuMiwwLDAuMmMwLDAuMiwwLDAuMy0wLjEsMC40YzAsMCwwLDAsMCwwLjFsMCwwYy0wLjEsMC4xLTAuMiwwLTAuNS0wLjIgYy0wLjUtMC40LTIuOC0xLjgtNS43LTEuOGMtNC43LDAtMTAuNSwzLjQtMTAuNSwxMC40YzAsNy41LDUuMywxMS4xLDEwLjgsMTEuMWMyLjcsMCw0LjYtMS4yLDUuMy0xLjZjMC44LTAuNSwwLjctMC40LDAuOCwwLjMgYzAuMSwwLjUsMCwxLjUsMS40LDEuNGMxLjUtMC4yLDUuMS0wLjYsNS44LTAuN0MxMjMuMywzMy45LDEyMy4xLDMzLjUsMTIyLjUsMzMuNHogTTExMC4xLDMzLjdjLTQuNCwwLTYuNy01LjItNi43LTEwLjIgYzAtNS41LDMuMS05LjIsNi40LTljNC4zLDAuMyw1LjQsMy43LDUuNSw5LjhjMCwwLjQsMCwwLjgsMCwxLjNDMTE1LjIsMzEuNiwxMTIuNywzMy43LDExMC4xLDMzLjd6IE05OC40LDMyLjQgYy0wLjQsMC45LTEuMiwxLjItMS43LDEuMmMtMC42LDAtMi40LTAuMS0yLjQtNC44YzAsMCwwLTkuNSwwLTEwLjFjMC0zLjEtMi40LTUuNi04LjYtNS42Yy02LjcsMC02LjgsMy4zLTYuOCw0LjEgYy0wLjEsMC45LDAuNCwxLjksMi4xLDEuOWMxLjUsMCwxLjktMS43LDIuMS0yLjNjMC4yLTAuNywwLjMtMi43LDMtMi43YzIuMywwLDMuOCwyLDMuOCw1djAuMWMwLDAuMSwwLDAuMiwwLDAuMnYwLjMgYzAsMC4xLDAsMC4zLDAsMC40Yy0wLjEsMS41LTAuNSwyLTEuNywyLjZjLTEuMiwwLjYtNC43LDEuMS01LjEsMS4yYy0xLjQsMC4zLTUuMywxLjMtNS4yLDUuNGMwLjEsNCw0LjEsNS40LDYuOSw1LjMgYzIuNy0wLjEsNC4zLTEuMiw1LTEuOGMwLjQtMC4zLDAuNC0wLjMsMC43LDAuMWMwLjQsMC40LDEuNywxLjcsNC44LDEuN2MzLjIsMCwzLjYtMS41LDMuOC0yQzk5LjMsMzIuMiw5OC43LDMxLjksOTguNCwzMi40eiAgTTg2LDMzLjVjLTIuOCwwLTMuNS0yLjMtMy41LTMuNWMwLTEuMSwwLjYtMy40LDMuNC01YzAsMCwxLjMtMC44LDMuOC0xLjhjMC4xLDAsMC4yLDAsMC4yLDB2MC4xbDAsMGwwLDBjMCwwLjEsMCwwLjIsMCwwLjR2LTAuMSBjMCwwLDAsMCwwLDAuMXY0LjJDODkuOSwzMS4xLDg4LjMsMzMuNSw4NiwzMy41eiBNNzYuNCwzMy40Yy0wLjgtMC4yLTIuMi0xLjEtMi4yLTUuNXYtOGMwLTEuOSwwLjItNi44LTcuMy02LjggYy0zLjksMC02LjEsMi02LjMsMi4xYy0wLjMsMC4zLTAuNSwwLjQtMC42LTAuMWMtMC4xLTAuNC0wLjMtMS0wLjQtMS40Yy0wLjEtMC4zLTAuMy0wLjYtMS0wLjVjLTAuNywwLjEtNS4xLDAuOC01LjksMSBjLTAuNywwLjItMC41LDAuNSwwLDAuNmMwLjUsMC4xLDIuOSwwLjMsMi45LDQuNHMwLDguNiwwLDguNmMwLDUtMSw1LjQtMS45LDUuN2MtMS4yLDAuMy0wLjYsMC43LTAuMSwwLjdjMCwwLDguOSwwLDkuMSwwIGMwLjYsMCwwLjktMC42LTAuMy0wLjhjLTEuMi0wLjItMi4zLTAuOS0yLjMtNC44YzAtMC40LDAtNC43LDAtNS41YzAtMi4xLTAuNS04LjUsNS4zLTguNmM0LjEtMC4xLDQuNSwzLjMsNC41LDUuNXY4LjUgYzAsMy41LTEsNC42LTIuMiw0LjhjLTEuMSwwLjItMC45LDAuNy0wLjMsMC43YzAuMiwwLDkuMywwLDkuMywwQzc3LjIsMzQuMiw3Ny43LDMzLjcsNzYuNCwzMy40eiBNNTIuMSwzMi40IGMtMC40LDAuOS0xLjIsMS4yLTEuNywxLjJjLTAuNiwwLTIuNC0wLjEtMi40LTQuOGMwLDAsMC05LjUsMC0xMC4xYzAtMy4xLTIuNC01LjYtOC42LTUuNmMtNi43LDAtNi44LDMuMy02LjgsNC4xIGMtMC4xLDAuOSwwLjQsMS45LDIuMSwxLjljMS41LDAsMS45LTEuNywyLjEtMi4zYzAuMi0wLjcsMC4zLTIuNywzLTIuN2MyLjMsMCwzLjcsMiwzLjgsNC45YzAsMC41LDAsMC44LDAsMS4xIGMwLDAuMiwwLDAuNC0wLjEsMC41djAuMWwwLDBjLTAuMiwxLTAuNywxLjUtMS42LDEuOWMtMS4yLDAuNi00LjcsMS4xLTUuMSwxLjJjLTEuNCwwLjMtNS4zLDEuMy01LjIsNS40YzAuMSw0LDQuMSw1LjQsNi45LDUuMyBjMi43LTAuMSw0LjMtMS4yLDUtMS44YzAuNC0wLjMsMC40LTAuMywwLjcsMC4xYzAuNCwwLjQsMS43LDEuNyw0LjgsMS43YzMuMiwwLDMuNi0xLjUsMy44LTJDNTMsMzIuMiw1Mi4zLDMxLjksNTIuMSwzMi40eiAgTTM5LjYsMzMuNWMtMi44LDAtMy41LTIuMy0zLjUtMy41czAuNi0zLjQsMy40LTVjMCwwLDEuMy0wLjgsMy44LTEuOGMwLjEsMCwwLjIsMCwwLjIsMHMwLjEsMC4xLDAuMSwwLjJsMCwwbDAsMGwwLDAgYzAsMCwwLDAuMSwwLDAuMmwwLDBsMCwwdjAuMWwwLDBsMCwwbDAsMHY0LjJDNDMuNiwzMS4xLDQyLDMzLjUsMzkuNiwzMy41eiBNMzAsMjQuOGMtMSwzLjItMi45LDguNC05LjgsOC42IEMxMywzMy41LDguNywyOC42LDguNSwxOS41QzguMiw5LjgsMTIuNCwyLjQsMTguOSwyLjJjNy4zLTAuMSw5LjksOC42LDEwLDkuOWMwLjEsMSwxLjQsMC45LDEuNC0wLjFjMC0wLjUtMC42LTkuMS0wLjgtMTAuMSBjLTAuMi0xLTEtMC42LTEuMi0wLjJDMjguMiwyLDI4LjQsMS40LDI4LDIuM2MtMC40LDAuOS0xLjUsMC40LTEuOSwwLjNjLTEuMi0wLjUtMy41LTEuNy03LjItMS42Yy04LjUsMC4yLTE3LjIsNi41LTE3LDE3LjUgYzAuMiwxMC43LDguOCwxNi43LDE2LjgsMTYuNmM3LjMtMC4xLDExLjQtNC43LDEyLjYtMTBDMzEuNywyMy44LDMwLjQsMjMuNSwzMCwyNC44elwiXG4gICAgICAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pXG5cbldvcmRtYXJrLnByb3BUeXBlcyA9IHtcbiAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZsYWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmc6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmRtYXJrXG4iXX0= */"));

var Wordmark = function Wordmark(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '10em' : _ref$width,
      _ref$flag = _ref.flag,
      flag = _ref$flag === void 0 ? '#F00' : _ref$flag,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '#000' : _ref$text,
      _ref$lang = _ref.lang,
      lang = _ref$lang === void 0 ? 'en' : _ref$lang,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["width", "flag", "text", "lang"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    role: "img",
    "aria-label": lang === 'en' ? 'Symbol of the Government of Canada' : 'Symbole du gouvernement du Canada',
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    width: width,
    height: "100%",
    viewBox: "0 0 143 34",
    preserveAspectRatio: "xMinYMin meet"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("g", {
    id: "wmms",
    transform: "translate(-1, -1)"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FipFlag, {
    className: "fipflag",
    flag: flag,
    "data-testid": "flag",
    d: "M137.9,1.2h5.2v10.4h-5.2V1.2z M128.9,6.4l-0.3,0.1c0,0,1.8,1.5,1.8,1.6c0.1,0.1,0.2,0.1,0.1,0.4 c-0.1,0.3-0.2,0.6-0.2,0.6s1.6-0.3,1.8-0.4c0.2,0,0.3,0,0.3,0.2c0,0.2-0.1,1.9-0.1,1.9h0.5c0,0-0.1-1.8-0.1-1.9 c0-0.2,0.1-0.2,0.3-0.2c0.2,0,1.8,0.4,1.8,0.4s-0.1-0.4-0.2-0.6c-0.1-0.3,0-0.3,0.1-0.4c0.1-0.1,1.8-1.6,1.8-1.6l-0.3-0.1 c-0.2-0.1-0.1-0.2-0.1-0.3s0.3-1.1,0.3-1.1s-0.8,0.2-0.9,0.2c-0.1,0-0.2,0-0.2-0.1s-0.2-0.5-0.2-0.5s-0.9,1-1,1.1 c-0.2,0.2-0.4,0-0.3-0.2c0-0.2,0.5-2.3,0.5-2.3s-0.5,0.3-0.7,0.4s-0.3,0.1-0.3-0.1c-0.1-0.2-0.7-1.3-0.7-1.4c0,0-0.6,1.2-0.7,1.4 s-0.2,0.2-0.3,0.1c-0.2-0.1-0.7-0.4-0.7-0.4s0.5,2.1,0.5,2.3s-0.1,0.3-0.3,0.2l-1-1.1c0,0-0.1,0.3-0.2,0.4c0,0.1-0.1,0.2-0.2,0.1 c-0.2,0-1-0.2-1-0.2s0.3,1,0.4,1.1C129.1,6.1,129.1,6.3,128.9,6.4z M122.2,1.2h5.2v10.4h-5.2V1.2z"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(FipText, {
    className: "fiptext",
    text: text,
    "data-testid": "text",
    d: "M144.2,32.4c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6 c-6.7,0-6.8,3.3-6.8,4.1c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9 c0,0.5,0,0.8,0,1.1c0,0.2,0,0.3,0,0.5l0,0l0,0v0.1c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4 c0.1,4,4.1,5.4,6.9,5.3c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2 C145.1,32.2,144.4,31.9,144.2,32.4z M131.7,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8 c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0v0.1l0,0l0,0v0.1l0,0l0,0l0,0v4.2C135.7,31.1,134.1,33.5,131.7,33.5z M122.5,33.4 c-0.4-0.1-2.9,0.2-2.9-7.4s0-23.9,0-23.9c0-0.3,0-1.1-0.9-1.1c-0.9,0-6.9,0.3-7.3,0.4c-0.4,0-0.7,0.5,0,0.5 c0.7,0.1,3.9,0.3,3.9,5.6c0,2.6,0,5.2,0,7.1c0,0.1,0,0.2,0,0.2c0,0.2,0,0.3-0.1,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.2,0-0.5-0.2 c-0.5-0.4-2.8-1.8-5.7-1.8c-4.7,0-10.5,3.4-10.5,10.4c0,7.5,5.3,11.1,10.8,11.1c2.7,0,4.6-1.2,5.3-1.6c0.8-0.5,0.7-0.4,0.8,0.3 c0.1,0.5,0,1.5,1.4,1.4c1.5-0.2,5.1-0.6,5.8-0.7C123.3,33.9,123.1,33.5,122.5,33.4z M110.1,33.7c-4.4,0-6.7-5.2-6.7-10.2 c0-5.5,3.1-9.2,6.4-9c4.3,0.3,5.4,3.7,5.5,9.8c0,0.4,0,0.8,0,1.3C115.2,31.6,112.7,33.7,110.1,33.7z M98.4,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.8,2,3.8,5v0.1c0,0.1,0,0.2,0,0.2v0.3 c0,0.1,0,0.3,0,0.4c-0.1,1.5-0.5,2-1.7,2.6c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C99.3,32.2,98.7,31.9,98.4,32.4z  M86,33.5c-2.8,0-3.5-2.3-3.5-3.5c0-1.1,0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0v0.1l0,0l0,0c0,0.1,0,0.2,0,0.4v-0.1 c0,0,0,0,0,0.1v4.2C89.9,31.1,88.3,33.5,86,33.5z M76.4,33.4c-0.8-0.2-2.2-1.1-2.2-5.5v-8c0-1.9,0.2-6.8-7.3-6.8 c-3.9,0-6.1,2-6.3,2.1c-0.3,0.3-0.5,0.4-0.6-0.1c-0.1-0.4-0.3-1-0.4-1.4c-0.1-0.3-0.3-0.6-1-0.5c-0.7,0.1-5.1,0.8-5.9,1 c-0.7,0.2-0.5,0.5,0,0.6c0.5,0.1,2.9,0.3,2.9,4.4s0,8.6,0,8.6c0,5-1,5.4-1.9,5.7c-1.2,0.3-0.6,0.7-0.1,0.7c0,0,8.9,0,9.1,0 c0.6,0,0.9-0.6-0.3-0.8c-1.2-0.2-2.3-0.9-2.3-4.8c0-0.4,0-4.7,0-5.5c0-2.1-0.5-8.5,5.3-8.6c4.1-0.1,4.5,3.3,4.5,5.5v8.5 c0,3.5-1,4.6-2.2,4.8c-1.1,0.2-0.9,0.7-0.3,0.7c0.2,0,9.3,0,9.3,0C77.2,34.2,77.7,33.7,76.4,33.4z M52.1,32.4 c-0.4,0.9-1.2,1.2-1.7,1.2c-0.6,0-2.4-0.1-2.4-4.8c0,0,0-9.5,0-10.1c0-3.1-2.4-5.6-8.6-5.6c-6.7,0-6.8,3.3-6.8,4.1 c-0.1,0.9,0.4,1.9,2.1,1.9c1.5,0,1.9-1.7,2.1-2.3c0.2-0.7,0.3-2.7,3-2.7c2.3,0,3.7,2,3.8,4.9c0,0.5,0,0.8,0,1.1 c0,0.2,0,0.4-0.1,0.5v0.1l0,0c-0.2,1-0.7,1.5-1.6,1.9c-1.2,0.6-4.7,1.1-5.1,1.2c-1.4,0.3-5.3,1.3-5.2,5.4c0.1,4,4.1,5.4,6.9,5.3 c2.7-0.1,4.3-1.2,5-1.8c0.4-0.3,0.4-0.3,0.7,0.1c0.4,0.4,1.7,1.7,4.8,1.7c3.2,0,3.6-1.5,3.8-2C53,32.2,52.3,31.9,52.1,32.4z  M39.6,33.5c-2.8,0-3.5-2.3-3.5-3.5s0.6-3.4,3.4-5c0,0,1.3-0.8,3.8-1.8c0.1,0,0.2,0,0.2,0s0.1,0.1,0.1,0.2l0,0l0,0l0,0 c0,0,0,0.1,0,0.2l0,0l0,0v0.1l0,0l0,0l0,0v4.2C43.6,31.1,42,33.5,39.6,33.5z M30,24.8c-1,3.2-2.9,8.4-9.8,8.6 C13,33.5,8.7,28.6,8.5,19.5C8.2,9.8,12.4,2.4,18.9,2.2c7.3-0.1,9.9,8.6,10,9.9c0.1,1,1.4,0.9,1.4-0.1c0-0.5-0.6-9.1-0.8-10.1 c-0.2-1-1-0.6-1.2-0.2C28.2,2,28.4,1.4,28,2.3c-0.4,0.9-1.5,0.4-1.9,0.3c-1.2-0.5-3.5-1.7-7.2-1.6c-8.5,0.2-17.2,6.5-17,17.5 c0.2,10.7,8.8,16.7,16.8,16.6c7.3-0.1,11.4-4.7,12.6-10C31.7,23.8,30.4,23.5,30,24.8z"
  })));
};

Wordmark.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  flag: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Wordmark);

/***/ }),

/***/ "./src/images/rcmpbrandingeng.svg":
/*!****************************************!*\
  !*** ./src/images/rcmpbrandingeng.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rcmpbrandingeng.753068ac.svg";

/***/ }),

/***/ "./src/images/rcmpbrandingfre.svg":
/*!****************************************!*\
  !*** ./src/images/rcmpbrandingfre.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rcmpbrandingfre.16af643f.svg";

/***/ }),

/***/ "./src/images/upload.svg":
/*!*******************************!*\
  !*** ./src/images/upload.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/upload.447b6090.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cdssnc_logdriver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cdssnc/logdriver */ "@cdssnc/logdriver");
/* harmony import */ var _cdssnc_logdriver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cdssnc_logdriver__WEBPACK_IMPORTED_MODULE_3__);




var server = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer(_server__WEBPACK_IMPORTED_MODULE_1__["default"]);
var currentApp = _server__WEBPACK_IMPORTED_MODULE_1__["default"];

var _require = __webpack_require__(/*! process */ "process"),
    env = _require.env;

var port = function port() {
  return parseInt(env.RAZZLE_PORT || env.PORT || process.env.RAZZLE_PORT || "3000" || 3000, 10);
};

var _port = port();

server.listen(_port, function (error) {
  if (error) {
    _cdssnc_logdriver__WEBPACK_IMPORTED_MODULE_3__["Logger"].error(error);
  }

  _cdssnc_logdriver__WEBPACK_IMPORTED_MODULE_3__["Logger"].info("\uD83D\uDE80 started on port ".concat(_port));
});

if (true) {
  _cdssnc_logdriver__WEBPACK_IMPORTED_MODULE_3__["Logger"].info('✅  Server-side HMR Enabled!');
  module.hot.accept(/*! ./server */ "./src/server.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server */ "./src/server.js");
(function () {
    _cdssnc_logdriver__WEBPACK_IMPORTED_MODULE_3__["Logger"].info('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);

    var newApp = __webpack_require__(/*! ./server */ "./src/server.js")["default"];

    server.on('request', newApp);
    currentApp = newApp;
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this));
}

/***/ }),

/***/ "./src/p1/ConfirmationPage.js":
/*!************************************!*\
  !*** ./src/p1/ConfirmationPage.js ***!
  \************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");
/** @jsx jsx */
















var scamEventSummary = function scamEventSummary(client) {
  var _getScamInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getScamInfo"])(client),
      howWereYouContacted = _getScamInfo.howWereYouContacted,
      otherMethodOfContact = _getScamInfo.otherMethodOfContact,
      whenWereYouContacted = _getScamInfo.whenWereYouContacted,
      scamDetails = _getScamInfo.scamDetails;

  if (otherMethodOfContact) {
    howWereYouContacted = howWereYouContacted.concat(otherMethodOfContact);
  }

  howWereYouContacted = howWereYouContacted ? howWereYouContacted.filter(function (s) {
    return s !== 'other';
  }) : '';
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref2) {
    var i18n = _ref2.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "What happened"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit scam event'),
      type: "button",
      color: "black",
      to: "/p1/scaminfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }))), scamDetails ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Description"
    }), ":", ' '), scamDetails) : null, whenWereYouContacted ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Date"
    }), ":", ' '), whenWereYouContacted) : null, howWereYouContacted ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Contacted by"
    }), ":", ' '), howWereYouContacted.map(function (i) {
      return i18n._(i);
    }).join(', ')) : null);
  });
};

var lostMoneySummary = function lostMoneySummary(client) {
  var _getLostMoney = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getLostMoney"])(client),
      lostAmount = _getLostMoney.lostAmount,
      lostCurrency = _getLostMoney.lostCurrency,
      lostOtherCurrency = _getLostMoney.lostOtherCurrency,
      lostMethodsOfPayment = _getLostMoney.lostMethodsOfPayment,
      lostOtherMethodOfPayment = _getLostMoney.lostOtherMethodOfPayment;

  if (lostOtherMethodOfPayment) {
    lostMethodsOfPayment = lostMethodsOfPayment.concat(lostOtherMethodOfPayment);
  }

  lostMethodsOfPayment = lostMethodsOfPayment.filter(function (s) {
    return s !== 'other';
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref3) {
    var i18n = _ref3.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Money lost"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit money lost'),
      type: "button",
      color: "black",
      to: "/p1/moneylost",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }))), lostAmount ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Amount"
    }), ":", ' '), lostAmount) : null, lostCurrency || lostOtherCurrency ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Currency"
    }), ":", ' '), lostOtherCurrency ? lostOtherCurrency : i18n._(lostCurrency)) : null, lostMethodsOfPayment ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Payment method"
    }), ":", ' '), lostMethodsOfPayment.map(function (i) {
      return i18n._(i);
    }).join(', ')) : null);
  });
};

var suspectInfoSummary = function suspectInfoSummary(client) {
  var _getSuspectInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getSuspectInfo"])(client),
      suspectName = _getSuspectInfo.suspectName,
      suspectAddress = _getSuspectInfo.suspectAddress,
      suspectLanguage = _getSuspectInfo.suspectLanguage,
      otherSuspectLanguage = _getSuspectInfo.otherSuspectLanguage,
      suspectPhone = _getSuspectInfo.suspectPhone,
      suspectEmail = _getSuspectInfo.suspectEmail,
      suspectWebsite = _getSuspectInfo.suspectWebsite,
      suspectIP = _getSuspectInfo.suspectIP;

  if (otherSuspectLanguage) {
    suspectLanguage = suspectLanguage.concat(otherSuspectLanguage);
  }

  suspectLanguage = suspectLanguage.filter(function (s) {
    return s !== 'Other language';
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref4) {
    var i18n = _ref4.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "About the suspect"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit scammer details'),
      type: "button",
      color: "black",
      to: "/p1/suspectinfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }))), suspectName ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Name"
    }), ":", ' '), suspectName) : null, suspectEmail ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Email address"
    }), ":", ' '), suspectEmail) : null, suspectPhone ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Phone number"
    }), ":", ' '), suspectPhone) : null, suspectWebsite ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Website"
    }), ":", ' '), suspectWebsite) : null, suspectAddress ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Mailing address"
    }), ":", ' '), suspectAddress) : null, suspectIP ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "IP address"
    }), ":", ' '), suspectIP) : null, suspectLanguage ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Language of correspondence"
    }), ":", ' '), suspectLanguage.map(function (i) {
      return i18n._(i);
    }).join(', ')) : null);
  });
};

var fileUploadSummary = function fileUploadSummary(client) {
  var files = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getFiles"])(client);
  var fileList = files.join(', ');
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
    fontSize: [3, null, 4],
    marginTop: [3, null, 4],
    marginBottom: [1, null, 1]
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Files attached"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref5) {
    var i18n = _ref5.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit files attached'),
      type: "button",
      color: "black",
      to: "/p1/uploadfiles",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }));
  })), files.length ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "File name"
  }), ":", ' '), fileList) : null);
};

var contactInfoSummary = function contactInfoSummary(client) {
  var _getContactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getContactInfo"])(client),
      userIsTheVictim = _getContactInfo.userIsTheVictim,
      contactInfoName = _getContactInfo.contactInfoName,
      contactInfoEmail = _getContactInfo.contactInfoEmail,
      contactInfoPhone = _getContactInfo.contactInfoPhone;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref6) {
    var i18n = _ref6.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], {
      fontSize: [3, null, 4],
      marginTop: [3, null, 4],
      marginBottom: [1, null, 1]
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Contact information"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
      "aria-label": i18n._('Edit contact info'),
      type: "button",
      color: "black",
      to: "/p1/contactinfo",
      textAlign: "center"
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Edit"
    }))), contactInfoName ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Name"
    }), ":", ' '), contactInfoName) : null, contactInfoEmail ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Email"
    }), ":", ' '), contactInfoEmail) : null, contactInfoPhone ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Phone number"
    }), ":", ' '), contactInfoPhone) : null, userIsTheVictim ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_7__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "Did the scam happened to you"
    }), ":", ' '), i18n._(userIsTheVictim)) : null);
  });
};

var randLetter = function randLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return letters[Math.floor(Math.random() * letters.length)];
};

var randDigit = function randDigit() {
  return Math.floor(Math.random() * 10);
};

var randomizeString = function randomizeString(s) {
  return s ? s.replace(/[a-z]/g, function () {
    return randLetter();
  }).replace(/[A-Z]/g, function () {
    return randLetter().toUpperCase();
  }).replace(/[0-9]/g, function () {
    return randDigit();
  }) : s;
};

var submit = function submit(client, submitReport) {
  var scamInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getScamInfo"])(client);
  var lostMoney = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getLostMoney"])(client);
  var suspectInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getSuspectInfo"])(client);
  var files = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getFiles"])(client);
  var contactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getContactInfo"])(client);
  var surveyInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["getSurveyInfo"])(client);
  var suspectName = suspectInfo.suspectName,
      suspectAddress = suspectInfo.suspectAddress,
      suspectLanguage = suspectInfo.suspectLanguage,
      otherSuspectLanguage = suspectInfo.otherSuspectLanguage,
      suspectPhone = suspectInfo.suspectPhone,
      suspectEmail = suspectInfo.suspectEmail,
      suspectWebsite = suspectInfo.suspectWebsite,
      suspectIP = suspectInfo.suspectIP;
  suspectName = randomizeString(suspectName);
  suspectAddress = randomizeString(suspectAddress);
  suspectPhone = randomizeString(suspectPhone);
  suspectEmail = randomizeString(suspectEmail);
  suspectWebsite = randomizeString(suspectWebsite);
  suspectIP = randomizeString(suspectIP);
  var userIsTheVictim = contactInfo.userIsTheVictim,
      contactInfoName = contactInfo.contactInfoName,
      contactInfoEmail = contactInfo.contactInfoEmail,
      contactInfoPhone = contactInfo.contactInfoPhone;
  contactInfoName = randomizeString(contactInfoName);
  contactInfoEmail = randomizeString(contactInfoEmail);
  contactInfoPhone = randomizeString(contactInfoPhone);
  var data = {
    source: 'p1',
    scamInfo: scamInfo,
    lostMoney: lostMoney,
    suspectInfo: {
      suspectName: suspectName,
      suspectAddress: suspectAddress,
      suspectLanguage: suspectLanguage,
      otherSuspectLanguage: otherSuspectLanguage,
      suspectPhone: suspectPhone,
      suspectEmail: suspectEmail,
      suspectWebsite: suspectWebsite,
      suspectIP: suspectIP
    },
    files: files,
    contactInfo: {
      userIsTheVictim: userIsTheVictim,
      contactInfoName: contactInfoName,
      contactInfoEmail: contactInfoEmail,
      contactInfoPhone: contactInfoPhone
    },
    surveyInfo: surveyInfo
  };
  submitReport({
    variables: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('thankyou');
};

var _ref =  false ? undefined : {
  name: "1qfzjid-ConfirmationPage",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:ConfirmationPage;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvQ29uZmlybWF0aW9uUGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1ZGdCIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvQ29uZmlybWF0aW9uUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciwgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBIMSwgSDIgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi4vVHJhY2tQYWdlVmlld3MnXG5pbXBvcnQgeyBTdGVwcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RlcHBlcidcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHtcbiAgU1VCTUlUX1JFUE9SVF9NVVRBVElPTixcbiAgZ2V0U2NhbUluZm8sXG4gIGdldExvc3RNb25leSxcbiAgZ2V0U3VzcGVjdEluZm8sXG4gIGdldEZpbGVzLFxuICBnZXRDb250YWN0SW5mbyxcbiAgZ2V0U3VydmV5SW5mbyxcbn0gZnJvbSAnLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB7IEJhY2tCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tidXR0b24nXG5cbmNvbnN0IHNjYW1FdmVudFN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGhvd1dlcmVZb3VDb250YWN0ZWQsXG4gICAgb3RoZXJNZXRob2RPZkNvbnRhY3QsXG4gICAgd2hlbldlcmVZb3VDb250YWN0ZWQsXG4gICAgc2NhbURldGFpbHMsXG4gIH0gPSBnZXRTY2FtSW5mbyhjbGllbnQpXG5cbiAgaWYgKG90aGVyTWV0aG9kT2ZDb250YWN0KSB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCA9IGhvd1dlcmVZb3VDb250YWN0ZWQuY29uY2F0KG90aGVyTWV0aG9kT2ZDb250YWN0KVxuICB9XG4gIGhvd1dlcmVZb3VDb250YWN0ZWQgPSBob3dXZXJlWW91Q29udGFjdGVkXG4gICAgPyBob3dXZXJlWW91Q29udGFjdGVkLmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gICAgOiAnJ1xuICByZXR1cm4gKFxuICAgIDxJMThuPlxuICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNF19IG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfT5cbiAgICAgICAgICAgIDxUcmFucz5XaGF0IGhhcHBlbmVkPC9UcmFucz57JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IHNjYW0gZXZlbnQnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICB0bz1cIi9wMS9zY2FtaW5mb1wiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUcmFucz5FZGl0PC9UcmFucz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0gyPlxuICAgICAgICAgIHtzY2FtRGV0YWlscyA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5EZXNjcmlwdGlvbjwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c2NhbURldGFpbHN9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7d2hlbldlcmVZb3VDb250YWN0ZWQgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RGF0ZSA8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3doZW5XZXJlWW91Q29udGFjdGVkfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtob3dXZXJlWW91Q29udGFjdGVkID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkNvbnRhY3RlZCBieTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7aG93V2VyZVlvdUNvbnRhY3RlZC5tYXAoaSA9PiBpMThuLl8oaSkpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvSTE4bj5cbiAgKVxufVxuXG5jb25zdCBsb3N0TW9uZXlTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBsb3N0QW1vdW50LFxuICAgIGxvc3RDdXJyZW5jeSxcbiAgICBsb3N0T3RoZXJDdXJyZW5jeSxcbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCxcbiAgICBsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQsXG4gIH0gPSBnZXRMb3N0TW9uZXkoY2xpZW50KVxuXG4gIGlmIChsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQpIHtcbiAgICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmNvbmNhdChsb3N0T3RoZXJNZXRob2RPZlBheW1lbnQpXG4gIH1cbiAgbG9zdE1ldGhvZHNPZlBheW1lbnQgPSBsb3N0TWV0aG9kc09mUGF5bWVudC5maWx0ZXIocyA9PiBzICE9PSAnb3RoZXInKVxuICByZXR1cm4gKFxuICAgIDxJMThuPlxuICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEgyXG4gICAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHJhbnM+TW9uZXkgbG9zdDwvVHJhbnM+eycgJ31cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2kxOG4uXygnRWRpdCBtb25leSBsb3N0Jyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgdG89XCIvcDEvbW9uZXlsb3N0XCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSDI+XG4gICAgICAgICAge2xvc3RBbW91bnQgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+QW1vdW50PC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtsb3N0QW1vdW50fVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtsb3N0Q3VycmVuY3kgfHwgbG9zdE90aGVyQ3VycmVuY3kgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q3VycmVuY3k8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2xvc3RPdGhlckN1cnJlbmN5ID8gbG9zdE90aGVyQ3VycmVuY3kgOiBpMThuLl8obG9zdEN1cnJlbmN5KX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7bG9zdE1ldGhvZHNPZlBheW1lbnQgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UGF5bWVudCBtZXRob2Q8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2xvc3RNZXRob2RzT2ZQYXltZW50Lm1hcChpID0+IGkxOG4uXyhpKSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9JMThuPlxuICApXG59XG5cbmNvbnN0IHN1c3BlY3RJbmZvU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgc3VzcGVjdE5hbWUsXG4gICAgc3VzcGVjdEFkZHJlc3MsXG4gICAgc3VzcGVjdExhbmd1YWdlLFxuICAgIG90aGVyU3VzcGVjdExhbmd1YWdlLFxuICAgIHN1c3BlY3RQaG9uZSxcbiAgICBzdXNwZWN0RW1haWwsXG4gICAgc3VzcGVjdFdlYnNpdGUsXG4gICAgc3VzcGVjdElQLFxuICB9ID0gZ2V0U3VzcGVjdEluZm8oY2xpZW50KVxuXG4gIGlmIChvdGhlclN1c3BlY3RMYW5ndWFnZSkge1xuICAgIHN1c3BlY3RMYW5ndWFnZSA9IHN1c3BlY3RMYW5ndWFnZS5jb25jYXQob3RoZXJTdXNwZWN0TGFuZ3VhZ2UpXG4gIH1cbiAgc3VzcGVjdExhbmd1YWdlID0gc3VzcGVjdExhbmd1YWdlLmZpbHRlcihzID0+IHMgIT09ICdPdGhlciBsYW5ndWFnZScpXG5cbiAgcmV0dXJuIChcbiAgICA8STE4bj5cbiAgICAgIHsoeyBpMThuIH0pID0+IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxIMlxuICAgICAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpblRvcD17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRyYW5zPkFib3V0IHRoZSBzdXNwZWN0PC9UcmFucz57JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IHNjYW1tZXIgZGV0YWlscycpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIHRvPVwiL3AxL3N1c3BlY3RpbmZvXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSDI+XG5cbiAgICAgICAgICB7c3VzcGVjdE5hbWUgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TmFtZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdE5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7c3VzcGVjdEVtYWlsID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkVtYWlsIGFkZHJlc3M8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3RFbWFpbH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtzdXNwZWN0UGhvbmUgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UGhvbmUgbnVtYmVyPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0UGhvbmV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7c3VzcGVjdFdlYnNpdGUgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+V2Vic2l0ZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdFdlYnNpdGV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7c3VzcGVjdEFkZHJlc3MgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgIDxUcmFucz5NYWlsaW5nIGFkZHJlc3M8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3RBZGRyZXNzfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtzdXNwZWN0SVAgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+SVAgYWRkcmVzczwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdElQfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtzdXNwZWN0TGFuZ3VhZ2UgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+TGFuZ3VhZ2Ugb2YgY29ycmVzcG9uZGVuY2U8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3RMYW5ndWFnZS5tYXAoaSA9PiBpMThuLl8oaSkpLmpvaW4oJywgJyl9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvSTE4bj5cbiAgKVxufVxuXG5jb25zdCBmaWxlVXBsb2FkU3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXMoY2xpZW50KVxuICBjb25zdCBmaWxlTGlzdCA9IGZpbGVzLmpvaW4oJywgJylcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SDJcbiAgICAgICAgZm9udFNpemU9e1szLCBudWxsLCA0XX1cbiAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgPlxuICAgICAgICA8VHJhbnM+RmlsZXMgYXR0YWNoZWQ8L1RyYW5zPnsnICd9XG4gICAgICAgIDxJMThuPlxuICAgICAgICAgIHsoeyBpMThuIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IGZpbGVzIGF0dGFjaGVkJyl9XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgICAgdG89XCIvcDEvdXBsb2FkZmlsZXNcIlxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9fVxuICAgICAgICA8L0kxOG4+XG4gICAgICA8L0gyPlxuICAgICAge2ZpbGVzLmxlbmd0aCA/IChcbiAgICAgICAgPFRleHQ+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIDxUcmFucz5GaWxlIG5hbWU8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIHtmaWxlTGlzdH1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuY29uc3QgY29udGFjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICB1c2VySXNUaGVWaWN0aW0sXG4gICAgY29udGFjdEluZm9OYW1lLFxuICAgIGNvbnRhY3RJbmZvRW1haWwsXG4gICAgY29udGFjdEluZm9QaG9uZSxcbiAgfSA9IGdldENvbnRhY3RJbmZvKGNsaWVudClcblxuICByZXR1cm4gKFxuICAgIDxJMThuPlxuICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEgyXG4gICAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHJhbnM+Q29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+eycgJ31cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2kxOG4uXygnRWRpdCBjb250YWN0IGluZm8nKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICB0bz1cIi9wMS9jb250YWN0aW5mb1wiXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUcmFucz5FZGl0PC9UcmFucz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0gyPlxuXG4gICAgICAgICAge2NvbnRhY3RJbmZvTmFtZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtjb250YWN0SW5mb05hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7Y29udGFjdEluZm9FbWFpbCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5FbWFpbDwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7Y29udGFjdEluZm9FbWFpbH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7Y29udGFjdEluZm9QaG9uZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2NvbnRhY3RJbmZvUGhvbmV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3VzZXJJc1RoZVZpY3RpbSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5EaWQgdGhlIHNjYW0gaGFwcGVuZWQgdG8geW91PC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtpMThuLl8odXNlcklzVGhlVmljdGltKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9JMThuPlxuICApXG59XG5cbmNvbnN0IHJhbmRMZXR0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGxldHRlcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKVxuICByZXR1cm4gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXR0ZXJzLmxlbmd0aCldXG59XG5jb25zdCByYW5kRGlnaXQgPSAoKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcblxuY29uc3QgcmFuZG9taXplU3RyaW5nID0gcyA9PlxuICBzXG4gICAgPyBzXG4gICAgICAgIC5yZXBsYWNlKC9bYS16XS9nLCAoKSA9PiByYW5kTGV0dGVyKCkpXG4gICAgICAgIC5yZXBsYWNlKC9bQS1aXS9nLCAoKSA9PiByYW5kTGV0dGVyKCkudG9VcHBlckNhc2UoKSlcbiAgICAgICAgLnJlcGxhY2UoL1swLTldL2csICgpID0+IHJhbmREaWdpdCgpKVxuICAgIDogc1xuXG5jb25zdCBzdWJtaXQgPSAoY2xpZW50LCBzdWJtaXRSZXBvcnQpID0+IHtcbiAgbGV0IHNjYW1JbmZvID0gZ2V0U2NhbUluZm8oY2xpZW50KVxuICBsZXQgbG9zdE1vbmV5ID0gZ2V0TG9zdE1vbmV5KGNsaWVudClcbiAgbGV0IHN1c3BlY3RJbmZvID0gZ2V0U3VzcGVjdEluZm8oY2xpZW50KVxuICBsZXQgZmlsZXMgPSBnZXRGaWxlcyhjbGllbnQpXG4gIGxldCBjb250YWN0SW5mbyA9IGdldENvbnRhY3RJbmZvKGNsaWVudClcbiAgY29uc3Qgc3VydmV5SW5mbyA9IGdldFN1cnZleUluZm8oY2xpZW50KVxuXG4gIGxldCB7XG4gICAgc3VzcGVjdE5hbWUsXG4gICAgc3VzcGVjdEFkZHJlc3MsXG4gICAgc3VzcGVjdExhbmd1YWdlLFxuICAgIG90aGVyU3VzcGVjdExhbmd1YWdlLFxuICAgIHN1c3BlY3RQaG9uZSxcbiAgICBzdXNwZWN0RW1haWwsXG4gICAgc3VzcGVjdFdlYnNpdGUsXG4gICAgc3VzcGVjdElQLFxuICB9ID0gc3VzcGVjdEluZm9cbiAgc3VzcGVjdE5hbWUgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdE5hbWUpXG4gIHN1c3BlY3RBZGRyZXNzID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RBZGRyZXNzKVxuICBzdXNwZWN0UGhvbmUgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdFBob25lKVxuICBzdXNwZWN0RW1haWwgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdEVtYWlsKVxuICBzdXNwZWN0V2Vic2l0ZSA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0V2Vic2l0ZSlcbiAgc3VzcGVjdElQID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RJUClcblxuICBsZXQge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gY29udGFjdEluZm9cbiAgY29udGFjdEluZm9OYW1lID0gcmFuZG9taXplU3RyaW5nKGNvbnRhY3RJbmZvTmFtZSlcbiAgY29udGFjdEluZm9FbWFpbCA9IHJhbmRvbWl6ZVN0cmluZyhjb250YWN0SW5mb0VtYWlsKVxuICBjb250YWN0SW5mb1Bob25lID0gcmFuZG9taXplU3RyaW5nKGNvbnRhY3RJbmZvUGhvbmUpXG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICBzb3VyY2U6ICdwMScsXG4gICAgc2NhbUluZm8sXG4gICAgbG9zdE1vbmV5LFxuICAgIHN1c3BlY3RJbmZvOiB7XG4gICAgICBzdXNwZWN0TmFtZSxcbiAgICAgIHN1c3BlY3RBZGRyZXNzLFxuICAgICAgc3VzcGVjdExhbmd1YWdlLFxuICAgICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgICBzdXNwZWN0UGhvbmUsXG4gICAgICBzdXNwZWN0RW1haWwsXG4gICAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICAgIHN1c3BlY3RJUCxcbiAgICB9LFxuICAgIGZpbGVzLFxuICAgIGNvbnRhY3RJbmZvOiB7XG4gICAgICB1c2VySXNUaGVWaWN0aW0sXG4gICAgICBjb250YWN0SW5mb05hbWUsXG4gICAgICBjb250YWN0SW5mb0VtYWlsLFxuICAgICAgY29udGFjdEluZm9QaG9uZSxcbiAgICB9LFxuICAgIHN1cnZleUluZm8sXG4gIH1cbiAgc3VibWl0UmVwb3J0KHsgdmFyaWFibGVzOiBkYXRhIH0pXG4gIG5hdmlnYXRlKCd0aGFua3lvdScpXG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtYXRpb25QYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8QmFja0J1dHRvbiByb3V0ZT1cIi9wMS9jb250YWN0aW5mb1wiPlxuICAgICAgICA8VHJhbnM+Y29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICA8L0JhY2tCdXR0b24+XG4gICAgICA8U3RlcHMgYWN0aXZlU3RlcD17Nn0gdG90YWxTdGVwcz17Nn0gLz5cbiAgICAgIDxIMT5cbiAgICAgICAgPFRyYW5zPlJldmlldyByZXBvcnQgaW5mb3JtYXRpb248L1RyYW5zPlxuICAgICAgPC9IMT5cbiAgICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IHtcbiAgICAgICAgICBjbGllbnQud3JpdGVEYXRhKHtcbiAgICAgICAgICAgIGRhdGE6IHsgZG9uZUZvcm1zOiB0cnVlIH0sXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtzY2FtRXZlbnRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICAgIHtsb3N0TW9uZXlTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICAgIHtzdXNwZWN0SW5mb1N1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge2ZpbGVVcGxvYWRTdW1tYXJ5KGNsaWVudCl9XG4gICAgICAgICAgICAgIHtjb250YWN0SW5mb1N1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKVxuICAgICAgICB9fVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cblxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPE11dGF0aW9uIG11dGF0aW9uPXtTVUJNSVRfUkVQT1JUX01VVEFUSU9OfT5cbiAgICAgICAgICAgICAge3N1Ym1pdFJlcG9ydCA9PiAoXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHN1Ym1pdChjbGllbnQsIHN1Ym1pdFJlcG9ydCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5TdWJtaXQgcmVwb3J0ICZuYnNwOyDina88L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L011dGF0aW9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIlxuICAgICAgICAgIG10PVwiMS45cmVtXCJcbiAgICAgICAgICBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9wMVwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuIl19 */"
};

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_12__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_14__["BackButton"], {
    route: "/p1/contactinfo"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_11__["Steps"], {
    activeStep: 6,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Review report information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_10__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    client.writeData({
      data: {
        doneForms: true
      }
    });
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, scamEventSummary(client), lostMoneySummary(client), suspectInfoSummary(client), fileUploadSummary(client), contactInfoSummary(client));
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    mt: "1rem",
    mb: "4rem",
    display: ['flex', 'block', 'flex'],
    alignItems: "center",
    css: _ref
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
      mutation: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_13__["SUBMIT_REPORT_MUTATION"]
    }, function (submitReport) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        name: "buttonlink-container",
        mt: "1rem"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "submit",
        onClick: function onClick() {
          return submit(client, submitReport);
        }
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
        id: "Submit report \xA0 \u276F"
      })));
    });
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    name: "buttonlink-container",
    mt: "1.9rem",
    ml: ['3rem', '0', '3rem']
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    type: "button",
    color: "black",
    to: "/p1",
    textAlign: "center"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Cancel report"
  })))));
};

/***/ }),

/***/ "./src/p1/ContactInfoPage.js":
/*!***********************************!*\
  !*** ./src/p1/ContactInfoPage.js ***!
  \***********************************/
/*! exports provided: ContactInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoPage", function() { return ContactInfoPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_ContactInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/ContactInfoForm */ "./src/p1/forms/ContactInfoForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */









var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      contactInfo: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('confirmation');
};

var ContactInfoPage = function ContactInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_8__["BackButton"], {
    route: "/p1/contactinfoquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "previous page"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_4__["Steps"], {
    activeStep: 5,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Enter your contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ContactInfoForm__WEBPACK_IMPORTED_MODULE_6__["ContactInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p1/FileUploadPage.js":
/*!**********************************!*\
  !*** ./src/p1/FileUploadPage.js ***!
  \**********************************/
/*! exports provided: FileUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadPage", function() { return FileUploadPage; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/upload.svg */ "./src/images/upload.svg");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_images_upload_svg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");








/**@jsx jsx */




















var _ref =  false ? undefined : {
  name: "17tuhvv-FileUploadInternal",
  styles: "display:flex;justify-content:center;img{width:1rem;margin-right:0.6rem;}label:FileUploadInternal;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvRmlsZVVwbG9hZFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZvQiIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0ZpbGVVcGxvYWRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgxLCBIMiwgSDUgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgU3RlcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0ZXBwZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBnZXREb25lRm9ybXMsIGdldEZpbGVzIH0gZnJvbSAnLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB1cGxvYWQgZnJvbSAnLi4vaW1hZ2VzL3VwbG9hZC5zdmcnXG5pbXBvcnQgeyBCYWNrQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9iYWNrYnV0dG9uJ1xuXG5jbGFzcyBGaWxlVXBsb2FkSW50ZXJuYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogZ2V0RmlsZXMocHJvcHMuY2xpZW50KS5tYXAobmFtZSA9PiAoeyBuYW1lIH0pKSxcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogdGhpcy5zdGF0ZS5maWxlcy5jb25jYXQoZS50YXJnZXQuZmlsZXNbMF0pIH0pXG4gIH1cblxuICByZW1vdmVGaWxlID0gaW5kZXggPT4ge1xuICAgIGxldCBuZXdGaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXNcbiAgICBuZXdGaWxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiBuZXdGaWxlcyB9KVxuICB9XG5cbiAgc3VibWl0QW5kTmF2aWdhdGUgPSBjbGllbnQgPT4ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5zdGF0ZS5maWxlcy5tYXAoZmlsZSA9PiBmaWxlLm5hbWUpXG4gICAgY29uc3QgZGF0YSA9IHsgZmlsZXMgfVxuICAgIGNsaWVudC53cml0ZURhdGEoeyBkYXRhIH0pIC8vIFRPRE86IGFjdHVhbGx5IHVwbG9hZCBmaWxlc1xuICAgIG5hdmlnYXRlKGdldERvbmVGb3JtcyhjbGllbnQpID8gJ2NvbmZpcm1hdGlvbicgOiAnY29udGFjdGluZm9xdWVzdGlvbicpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmaWxlcyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgICAgICA8QmFja0J1dHRvbiByb3V0ZT1cIi9wMS91cGxvYWRmaWxlc3F1ZXN0aW9uXCI+XG4gICAgICAgICAgPFRyYW5zPnByZXZpb3VzIHBhZ2U8L1RyYW5zPlxuICAgICAgICA8L0JhY2tCdXR0b24+XG4gICAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXs0fSB0b3RhbFN0ZXBzPXs2fSAvPlxuICAgICAgICA8SDE+XG4gICAgICAgICAgPFRyYW5zPkF0dGFjaCBzdXBwb3J0aW5nIGZpbGVzPC9UcmFucz5cbiAgICAgICAgPC9IMT5cbiAgICAgICAgPFA+XG4gICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgSW5jbHVkZSBhbnkgbWVzc2FnZXMsIGNvbnZlcnNhdGlvbnMsIHJlY2VpcHRzLCBvciBvdGhlciBldmlkZW5jZVxuICAgICAgICAgICAgdGhhdCBzaG93cyB3aGF0IGhhcHBlbmVkLlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvUD5cbiAgICAgICAgPFA+XG4gICAgICAgICAgPFRyYW5zPlBsZWFzZSBhdHRhY2ggb25lIGZpbGUgYXQgYSB0aW1lLjwvVHJhbnM+XG4gICAgICAgIDwvUD5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDVdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIDUsIDVdfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydmbGV4LXN0YXJ0JywgJ2NlbnRlcicsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGaWxlVXBsb2FkXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIHdpZHRoPXtbJ2F1dG8nLCAnMTAwJScsICdhdXRvJ119XG4gICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjEuNXJlbVwiXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XCIxLjVyZW1cIlxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbT1cIjAuNnJlbVwiXG4gICAgICAgICAgICBwYWRkaW5nVG9wPVwiMC42cmVtXCJcbiAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIGFsdD1cInVwbG9hZCBpY29uXCIgc3JjPXt1cGxvYWR9IC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPFRyYW5zPkFkZCBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+IDwvVHJhbnM+XG4gICAgICAgIDwvUD5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPEkxOG4+XG4gICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNV19PlxuICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgb25lOiAnIyBmaWxlIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9JMThuPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtmaWxlcy5tYXAoKGYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPXtbJ2F1dG8nLCAnMTAwJScsICdhdXRvJ119XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwibGVmdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpbkxlZnQ9XCIwcmVtXCI+e2YubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8SDU+RGVzY3JpYmUgd2hhdCB0aGlzIGZpbGUgc2hvd3M8L0g1PlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHdpZHRoPVwiNTBweCBcIiBoZWlnaHQ9XCIxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAvLyBmbG9hdD1cInJpZ2h0XCJcblxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJjcmltc29uXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlJlbW92ZSBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgICAgICAgICAgbWI9XCI0cmVtXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdEFuZE5hdmlnYXRlKGNsaWVudCl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDogQ29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbXQ9XCIxLjlyZW1cIiBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvcDEvXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuRmlsZVVwbG9hZEludGVybmFsLnByb3BUeXBlcyA9IHtcbiAgY2xpZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBGaWxlVXBsb2FkUGFnZSA9ICgpID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPEZpbGVVcGxvYWRJbnRlcm5hbCBjbGllbnQ9e2NsaWVudH0gLz59XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "oujgny-FileUploadInternal",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:FileUploadInternal;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvRmlsZVVwbG9hZFBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUt3QiIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0ZpbGVVcGxvYWRQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IEgxLCBIMiwgSDUgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZpbGUtdXBsb2FkJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgU3RlcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0ZXBwZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBnZXREb25lRm9ybXMsIGdldEZpbGVzIH0gZnJvbSAnLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB1cGxvYWQgZnJvbSAnLi4vaW1hZ2VzL3VwbG9hZC5zdmcnXG5pbXBvcnQgeyBCYWNrQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9iYWNrYnV0dG9uJ1xuXG5jbGFzcyBGaWxlVXBsb2FkSW50ZXJuYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaWxlczogZ2V0RmlsZXMocHJvcHMuY2xpZW50KS5tYXAobmFtZSA9PiAoeyBuYW1lIH0pKSxcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlczogdGhpcy5zdGF0ZS5maWxlcy5jb25jYXQoZS50YXJnZXQuZmlsZXNbMF0pIH0pXG4gIH1cblxuICByZW1vdmVGaWxlID0gaW5kZXggPT4ge1xuICAgIGxldCBuZXdGaWxlcyA9IHRoaXMuc3RhdGUuZmlsZXNcbiAgICBuZXdGaWxlcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiBuZXdGaWxlcyB9KVxuICB9XG5cbiAgc3VibWl0QW5kTmF2aWdhdGUgPSBjbGllbnQgPT4ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5zdGF0ZS5maWxlcy5tYXAoZmlsZSA9PiBmaWxlLm5hbWUpXG4gICAgY29uc3QgZGF0YSA9IHsgZmlsZXMgfVxuICAgIGNsaWVudC53cml0ZURhdGEoeyBkYXRhIH0pIC8vIFRPRE86IGFjdHVhbGx5IHVwbG9hZCBmaWxlc1xuICAgIG5hdmlnYXRlKGdldERvbmVGb3JtcyhjbGllbnQpID8gJ2NvbmZpcm1hdGlvbicgOiAnY29udGFjdGluZm9xdWVzdGlvbicpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmaWxlcyB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICAgICAgICA8QmFja0J1dHRvbiByb3V0ZT1cIi9wMS91cGxvYWRmaWxlc3F1ZXN0aW9uXCI+XG4gICAgICAgICAgPFRyYW5zPnByZXZpb3VzIHBhZ2U8L1RyYW5zPlxuICAgICAgICA8L0JhY2tCdXR0b24+XG4gICAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXs0fSB0b3RhbFN0ZXBzPXs2fSAvPlxuICAgICAgICA8SDE+XG4gICAgICAgICAgPFRyYW5zPkF0dGFjaCBzdXBwb3J0aW5nIGZpbGVzPC9UcmFucz5cbiAgICAgICAgPC9IMT5cbiAgICAgICAgPFA+XG4gICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgSW5jbHVkZSBhbnkgbWVzc2FnZXMsIGNvbnZlcnNhdGlvbnMsIHJlY2VpcHRzLCBvciBvdGhlciBldmlkZW5jZVxuICAgICAgICAgICAgdGhhdCBzaG93cyB3aGF0IGhhcHBlbmVkLlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvUD5cbiAgICAgICAgPFA+XG4gICAgICAgICAgPFRyYW5zPlBsZWFzZSBhdHRhY2ggb25lIGZpbGUgYXQgYSB0aW1lLjwvVHJhbnM+XG4gICAgICAgIDwvUD5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG1hcmdpblRvcD17WzIsIG51bGwsIDVdfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIDUsIDVdfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17WydmbGV4LXN0YXJ0JywgJ2NlbnRlcicsICdmbGV4LXN0YXJ0J119XG4gICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGaWxlVXBsb2FkXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIHdpZHRoPXtbJ2F1dG8nLCAnMTAwJScsICdhdXRvJ119XG4gICAgICAgICAgICBwYWRkaW5nTGVmdD1cIjEuNXJlbVwiXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ9XCIxLjVyZW1cIlxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbT1cIjAuNnJlbVwiXG4gICAgICAgICAgICBwYWRkaW5nVG9wPVwiMC42cmVtXCJcbiAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIGFsdD1cInVwbG9hZCBpY29uXCIgc3JjPXt1cGxvYWR9IC8+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPFRyYW5zPkFkZCBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L0ZpbGVVcGxvYWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+IDwvVHJhbnM+XG4gICAgICAgIDwvUD5cbiAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgPEkxOG4+XG4gICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgPEgyIGZvbnRTaXplPXtbMywgbnVsbCwgNV19PlxuICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBmaWxlcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgb25lOiAnIyBmaWxlIGF0dGFjaGVkJyxcbiAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvSDI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9JMThuPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIHtmaWxlcy5tYXAoKGYsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIHdpZHRoPXtbJ2F1dG8nLCAnMTAwJScsICdhdXRvJ119XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzIsIG51bGwsIDNdfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwibGVmdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpbkxlZnQ9XCIwcmVtXCI+e2YubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8SDU+RGVzY3JpYmUgd2hhdCB0aGlzIGZpbGUgc2hvd3M8L0g1PlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHdpZHRoPVwiNTBweCBcIiBoZWlnaHQ9XCIxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAvLyBmbG9hdD1cInJpZ2h0XCJcblxuICAgICAgICAgICAgICAgIG1hcmdpblRvcD17MH1cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJjcmltc29uXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlJlbW92ZSBmaWxlPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgICAgICAgICAgbWI9XCI0cmVtXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnN1Ym1pdEFuZE5hdmlnYXRlKGNsaWVudCl9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDogQ29udGFjdCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbXQ9XCIxLjlyZW1cIiBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvcDEvXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuRmlsZVVwbG9hZEludGVybmFsLnByb3BUeXBlcyA9IHtcbiAgY2xpZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBGaWxlVXBsb2FkUGFnZSA9ICgpID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPEZpbGVVcGxvYWRJbnRlcm5hbCBjbGllbnQ9e2NsaWVudH0gLz59XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG4iXX0= */"
};

var FileUploadInternal =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FileUploadInternal, _Component);

  function FileUploadInternal(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FileUploadInternal);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(FileUploadInternal).call(this, props));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onChange", function (e) {
      _this.setState({
        files: _this.state.files.concat(e.target.files[0])
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "removeFile", function (index) {
      var newFiles = _this.state.files;
      newFiles.splice(index, 1);

      _this.setState({
        files: newFiles
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "submitAndNavigate", function (client) {
      var files = _this.state.files.map(function (file) {
        return file.name;
      });

      var data = {
        files: files
      };
      client.writeData({
        data: data
      }); // TODO: actually upload files

      Object(_reach_router__WEBPACK_IMPORTED_MODULE_10__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__["getDoneForms"])(client) ? 'confirmation' : 'contactinfoquestion');
    });

    _this.state = {
      files: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_23__["getFiles"])(props.client).map(function (name) {
        return {
          name: name
        };
      })
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FileUploadInternal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var files = this.state.files;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_20__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_19__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_25__["BackButton"], {
        route: "/p1/uploadfilesquestion"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "previous page"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_21__["Steps"], {
        activeStep: 4,
        totalSteps: 6
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_15__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Attach supporting files"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Include any messages, conversations, receipts, or other evidence that shows what happened."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Please attach one file at a time."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
        marginTop: [2, null, 5],
        marginBottom: [2, 5, 5],
        display: "flex",
        flexDirection: "row",
        justifyContent: ['flex-start', 'center', 'flex-start'],
        textAlign: "center"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_18__["FileUpload"], {
        onChange: this.onChange,
        width: ['auto', '100%', 'auto'],
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingBottom: "0.6rem",
        paddingTop: "0.6rem",
        css: _ref
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
        alt: "upload icon",
        src: _images_upload_svg__WEBPACK_IMPORTED_MODULE_24___default.a
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: "Add file"
      })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_22__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
        id: ""
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("hr", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["I18n"], null, function (_ref3) {
        var i18n = _ref3.i18n;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_15__["H2"], {
          fontSize: [3, null, 5]
        }, i18n._("{0, plural, one {# file attached} other {# files attached}}", {
          0: files.length
        }));
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], null, files.map(function (f, index) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          width: ['auto', '100%', 'auto'],
          marginBottom: [2, null, 3],
          key: index,
          display: "flex",
          flexDirection: "column",
          alignItems: "left"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_14__["Text"], {
          marginLeft: "0rem"
        }, f.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("form", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_15__["H5"], null, "Describe what this file shows"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("textarea", {
          width: "50px ",
          height: "100px"
        }, ' ')), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("br", null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_16__["Button"] // float="right"
        , {
          marginTop: 0,
          backgroundColor: "crimson",
          type: "button",
          onClick: function onClick() {
            return _this2.removeFile(index);
          }
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Remove file"
        })));
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          mt: "1rem",
          mb: "4rem",
          display: ['flex', 'block', 'flex'],
          alignItems: "center",
          css: _ref2
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          mt: "1rem"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_16__["Button"], {
          onClick: function onClick() {
            return _this2.submitAndNavigate(client);
          },
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Next: Contact information"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_13__["Container"], {
          mt: "1.9rem",
          ml: ['3rem', '0', '3rem']
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_17__["Link"], {
          type: "button",
          color: "black",
          to: "/p1/",
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_11__["Trans"], {
          id: "Cancel report"
        })))));
      }));
    }
  }]);

  return FileUploadInternal;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

FileUploadInternal.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
};
var FileUploadPage = function FileUploadPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(FileUploadInternal, {
      client: client
    });
  });
};

/***/ }),

/***/ "./src/p1/FileUploadYesNoPage.js":
/*!***************************************!*\
  !*** ./src/p1/FileUploadYesNoPage.js ***!
  \***************************************/
/*! exports provided: FilesToUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesToUpload", function() { return FilesToUpload; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/**@jsx jsx */







var FilesToUpload = function FilesToUpload() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_3__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_7__["BackButton"], {
    route: "/p1/suspectinfo"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "suspect clues"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_4__["Steps"], {
    activeStep: 4,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Do you have documents, screenshots, or receipts?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_6__["ButtonsContainerYesNo"], {
    yesRoute: "/p1/uploadfiles",
    noRoute: "/p1/contactinfoquestion",
    marginB: "9.1em"
  }));
};

/***/ }),

/***/ "./src/p1/LandingPage.js":
/*!*******************************!*\
  !*** ./src/p1/LandingPage.js ***!
  \*******************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");


/* eslint-disable react/no-unescaped-entities */












var LandingPage = function LandingPage(props) {
  var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_4__["parse"](props.location.search),
      surveyID = _queryString$parse.surveyID,
      ResponseID = _queryString$parse.ResponseID;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_12__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_6__["H1"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Report a scam"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
    return client.writeData({
      data: {
        doneForms: false,
        scamInfo: JSON.stringify({}),
        lostMoney: JSON.stringify({}),
        suspectInfo: JSON.stringify({}),
        files: [],
        contactInfo: JSON.stringify({}),
        surveyInfo: JSON.stringify({
          surveyID: surveyID ? surveyID : '',
          ResponseID: ResponseID ? ResponseID : ''
        })
      }
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate these crimes."
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "You will be asked to:"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_unordered_list__WEBPACK_IMPORTED_MODULE_7__["Ul"], {
    fontSize: [8, null, 8]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_8__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Describe the scam"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_8__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell us how much money was lost"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_8__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Add clues about the suspect"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_8__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Attach any supporting files"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_buttons_container__WEBPACK_IMPORTED_MODULE_9__["ButtonsContainer"], {
    buttonLink: true,
    cancel: false,
    landing: true,
    route: "/p1/scaminfo"
  }));
};
LandingPage.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/***/ }),

/***/ "./src/p1/MoneyLostPage.js":
/*!*********************************!*\
  !*** ./src/p1/MoneyLostPage.js ***!
  \*********************************/
/*! exports provided: MoneyLostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyLostPage", function() { return MoneyLostPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/MoneyLostForm */ "./src/p1/forms/MoneyLostForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/* eslint-disable react/no-unescaped-entities */

/** @jsx jsx */











var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      lostMoney: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getDoneForms"])(client) ? 'confirmation' : 'suspectinfoquestion');
};

var MoneyLostPage = function MoneyLostPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p1/moneylostquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "previous page"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_4__["Steps"], {
    activeStep: 2,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Tell us about the money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "The police will not get your money back, but understanding the impact of the scam can help build a case."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_MoneyLostForm__WEBPACK_IMPORTED_MODULE_7__["MoneyLostForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p1/MoneyLostYesNoPage.js":
/*!**************************************!*\
  !*** ./src/p1/MoneyLostYesNoPage.js ***!
  \**************************************/
/*! exports provided: LoseMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoseMoney", function() { return LoseMoney; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/**@jsx jsx */







var LoseMoney = function LoseMoney() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_3__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_7__["BackButton"], {
    route: "/p1/scaminfo"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "what happened"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_4__["Steps"], {
    activeStep: 2,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Did you lose any money as part of this scam?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_6__["ButtonsContainerYesNo"], {
    yesRoute: "../moneylost",
    noRoute: "../suspectinfoquestion"
  }));
};

/***/ }),

/***/ "./src/p1/ScamInfoPage.js":
/*!********************************!*\
  !*** ./src/p1/ScamInfoPage.js ***!
  \********************************/
/*! exports provided: ScamInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamInfoPage", function() { return ScamInfoPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/ScamInfoForm */ "./src/p1/forms/ScamInfoForm.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */











var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      scamInfo: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getDoneForms"])(client) ? 'confirmation' : 'moneylostquestion');
};

var ScamInfoPage = function ScamInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p1"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "start page"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_7__["Steps"], {
    activeStep: 1,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Describe what happened"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Any information about where, when, and how the scam took place is helpful for police."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_5__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ScamInfoForm__WEBPACK_IMPORTED_MODULE_6__["ScamInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p1/SuspectInfoPage.js":
/*!***********************************!*\
  !*** ./src/p1/SuspectInfoPage.js ***!
  \***********************************/
/*! exports provided: SuspectInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspectInfoPage", function() { return SuspectInfoPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_SuspectInfoForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/SuspectInfoForm */ "./src/p1/forms/SuspectInfoForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */











var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      suspectInfo: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getDoneForms"])(client) ? 'confirmation' : 'uploadfilesquestion');
};

var SuspectInfoPage = function SuspectInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p1/suspectinfoquestion"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "previous page"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_4__["Steps"], {
    activeStep: 3,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Add clues about the suspect"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Any information that was used by the scammer can help police identify suspects."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_SuspectInfoForm__WEBPACK_IMPORTED_MODULE_7__["SuspectInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p1/SuspectInfoYesNoPage.js":
/*!****************************************!*\
  !*** ./src/p1/SuspectInfoYesNoPage.js ***!
  \****************************************/
/*! exports provided: Suspectinfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suspectinfo", function() { return Suspectinfo; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/**@jsx jsx */







var Suspectinfo = function Suspectinfo() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_4__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_7__["BackButton"], {
    route: "/p1/moneylost"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "money lost"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_5__["Steps"], {
    activeStep: 3,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Do you have any information on where the scam came from?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_3__["ButtonsContainerYesNo"], {
    yesRoute: "/p1/suspectinfo",
    noRoute: "/p1/uploadfilesquestion",
    marginB: "6em"
  }));
};

/***/ }),

/***/ "./src/p1/ThankYou.js":
/*!****************************!*\
  !*** ./src/p1/ThankYou.js ***!
  \****************************/
/*! exports provided: ThankYou */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYou", function() { return ThankYou; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/**@jsx jsx */









var ThankYou = function ThankYou() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["I18n"], null, function () {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
      query: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__["GET_LANGUAGE_QUERY"]
    }, function (_ref) {
      var language = _ref.data.language;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_7__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], null, function (client) {
        return client.writeData({
          data: {
            doneForms: false,
            scamInfo: JSON.stringify({}),
            lostMoney: JSON.stringify({}),
            suspectInfo: JSON.stringify({}),
            files: [],
            contactInfo: JSON.stringify({})
          }
        });
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "Thank you for reporting"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.",
        components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
          href: language === 'en' ? 'http://www.rcmp-grc.gc.ca/en/the-national-cybercrime-coordination-unit-nc3' : 'http://www.rcmp-grc.gc.ca/fr/groupe-national-coordination-cybercriminalite-gncc'
        })]
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.",
        components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null)]
      })));
    });
  });
};

/***/ }),

/***/ "./src/p1/WillBeContactedYesNoPage.js":
/*!********************************************!*\
  !*** ./src/p1/WillBeContactedYesNoPage.js ***!
  \********************************************/
/*! exports provided: Willbecontacted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Willbecontacted", function() { return Willbecontacted; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/**@jsx jsx */







var Willbecontacted = function Willbecontacted() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_3__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_7__["BackButton"], {
    route: "/p1/uploadfiles"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "supporting files"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_4__["Steps"], {
    activeStep: 5,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Would you like to be contacted, should the police need more information?"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_6__["ButtonsContainerYesNo"], {
    yesRoute: "/p1/contactinfo",
    noRoute: "/p1/confirmation",
    marginB: "6em"
  }));
};

/***/ }),

/***/ "./src/p1/forms/ContactInfoForm.js":
/*!*****************************************!*\
  !*** ./src/p1/forms/ContactInfoForm.js ***!
  \*****************************************/
/*! exports provided: ContactInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoForm", function() { return ContactInfoForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_radio_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/radio-button */ "./src/components/radio-button/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/TextInput */ "./src/components/TextInput/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */














var TextInputAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_11__["TextInput"]);
var RadioButtonAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_13__["finalFormAdapter"])(_components_radio_button__WEBPACK_IMPORTED_MODULE_9__["RadioButton"]);

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "eq8i0xc0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "1iud02x",
  styles: "margin-bottom:8pt;font-size:1.25rem;display:block;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvQ29udGFjdEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCcUMiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9Db250YWN0SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldENvbnRhY3RJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgVGV4dElucHV0QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dElucHV0KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZpY3RpbU9wdGlvbnMgPSBbaTE4bk1hcmsoJ1llcycpLCBpMThuTWFyaygnTm8nKV1cblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdEluZm9Gb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRDb250YWN0SW5mbyhjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9OYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkZ1bGwgbmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvTmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9FbWFpbFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbCBhZGRyZXNzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvUGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGhvbmUgbnVtYmVyPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb1Bob25lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkFyZSB5b3UgcmVwb3J0aW5nIGEgc2NhbSB0aGF0IGhhcHBlbmVkIHRvIHlvdT88L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICB2aWN0aW1PcHRpb25zLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSYWRpb0J1dHRvbkFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3AxL2NvbmZpcm1hdGlvbicpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ6IFJldmlldyByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBtdD1cIjEuOXJlbVwiXG4gICAgICAgICAgICAgICAgbWw9e1snM3JlbScsICcwJywgJzNyZW0nXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDEvXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuQ29udGFjdEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eq8i0xc1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvQ29udGFjdEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCbUMiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9Db250YWN0SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldENvbnRhY3RJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgVGV4dElucHV0QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dElucHV0KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZpY3RpbU9wdGlvbnMgPSBbaTE4bk1hcmsoJ1llcycpLCBpMThuTWFyaygnTm8nKV1cblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdEluZm9Gb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRDb250YWN0SW5mbyhjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9OYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkZ1bGwgbmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvTmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9FbWFpbFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbCBhZGRyZXNzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvUGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGhvbmUgbnVtYmVyPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb1Bob25lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkFyZSB5b3UgcmVwb3J0aW5nIGEgc2NhbSB0aGF0IGhhcHBlbmVkIHRvIHlvdT88L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICB2aWN0aW1PcHRpb25zLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSYWRpb0J1dHRvbkFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3AxL2NvbmZpcm1hdGlvbicpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ6IFJldmlldyByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBtdD1cIjEuOXJlbVwiXG4gICAgICAgICAgICAgICAgbWw9e1snM3JlbScsICcwJywgJzNyZW0nXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDEvXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuQ29udGFjdEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var victimOptions = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Yes'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('No')];

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "16f3afe-ContactInfoForm",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:ContactInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvQ29udGFjdEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJc0IiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9Db250YWN0SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpbmsnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGV4dElucHV0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldENvbnRhY3RJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgVGV4dElucHV0QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dElucHV0KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZpY3RpbU9wdGlvbnMgPSBbaTE4bk1hcmsoJ1llcycpLCBpMThuTWFyaygnTm8nKV1cblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuXG5leHBvcnQgY29uc3QgQ29udGFjdEluZm9Gb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRDb250YWN0SW5mbyhjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9OYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkZ1bGwgbmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvTmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9FbWFpbFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbCBhZGRyZXNzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb0VtYWlsXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRhY3RJbmZvUGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGhvbmUgbnVtYmVyPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb1Bob25lXCJcbiAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkFyZSB5b3UgcmVwb3J0aW5nIGEgc2NhbSB0aGF0IGhhcHBlbmVkIHRvIHlvdT88L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICB2aWN0aW1PcHRpb25zLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcklzVGhlVmljdGltXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtSYWRpb0J1dHRvbkFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgICBtdD1cIjFyZW1cIlxuICAgICAgICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIiBtdD1cIjFyZW1cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL3AxL2NvbmZpcm1hdGlvbicpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPk5leHQ6IFJldmlldyByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbmFtZT1cImJ1dHRvbmxpbmstY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBtdD1cIjEuOXJlbVwiXG4gICAgICAgICAgICAgICAgbWw9e1snM3JlbScsICcwJywgJzNyZW0nXX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHR5cGU9XCJidXR0b25cIiBjb2xvcj1cImJsYWNrXCIgdG89XCIvcDEvXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuQ29udGFjdEluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
};

var ContactInfoForm = function ContactInfoForm(_ref2) {
  var _onSubmit = _ref2.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_14__["getContactInfo"])(client),
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref3) {
        var handleSubmit = _ref3.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoName"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Full name</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoName",
          id: "contactInfoName",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoEmail"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Email address</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoEmail",
          id: "contactInfoEmail",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "contactInfoPhone"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Phone number</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "contactInfoPhone",
          id: "contactInfoPhone",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("legend", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_10__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Are you reporting a scam that happened to you?"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref4) {
          var i18n = _ref4.i18n;
          return victimOptions.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "userIsTheVictim",
              component: RadioButtonAdapter,
              type: "radio",
              value: key,
              label: i18n._(key)
            }));
          });
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          mt: "1rem",
          mb: "4rem",
          display: ['flex', 'block', 'flex'],
          alignItems: "center",
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          name: "buttonlink-container",
          mt: "1rem"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          onClick: function onClick() {
            return Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/p1/confirmation');
          },
          type: "submit"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Next: Review report"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          name: "buttonlink-container",
          mt: "1.9rem",
          ml: ['3rem', '0', '3rem']
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_8__["Link"], {
          type: "button",
          color: "black",
          to: "/p1/",
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Cancel report"
        })))));
      }
    });
  });
};
ContactInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/p1/forms/MoneyLostForm.js":
/*!***************************************!*\
  !*** ./src/p1/forms/MoneyLostForm.js ***!
  \***************************************/
/*! exports provided: MoneyLostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyLostForm", function() { return MoneyLostForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_radio_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/radio-button */ "./src/components/radio-button/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/TextInput */ "./src/components/TextInput/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");


/** @jsx jsx */













var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_11__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]);
var RadioButtonAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_11__["finalFormAdapter"])(_components_radio_button__WEBPACK_IMPORTED_MODULE_7__["RadioButton"]);
var TextInputAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_11__["finalFormAdapter"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_8__["TextInput"]);
var methodsOfPayment = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Cash'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Credit card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('E-transfer'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Gift card'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other method')];
var currencies = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Canadian dollar'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('U.S. dollar'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Euro'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other currency')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e1bdcfe50",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvTW9uZXlMb3N0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3FDIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvTW9uZXlMb3N0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldExvc3RNb25leSB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFJhZGlvQnV0dG9uQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoUmFkaW9CdXR0b24pXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5cbmNvbnN0IG1ldGhvZHNPZlBheW1lbnQgPSBbXG4gIGkxOG5NYXJrKCdDYXNoJyksXG4gIGkxOG5NYXJrKCdDcmVkaXQgY2FyZCcpLFxuICBpMThuTWFyaygnRS10cmFuc2ZlcicpLFxuICBpMThuTWFyaygnR2lmdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdPdGhlciBtZXRob2QnKSxcbl1cblxuY29uc3QgY3VycmVuY2llcyA9IFtcbiAgaTE4bk1hcmsoJ0NhbmFkaWFuIGRvbGxhcicpLFxuICBpMThuTWFyaygnVS5TLiBkb2xsYXInKSxcbiAgaTE4bk1hcmsoJ0V1cm8nKSxcbiAgaTE4bk1hcmsoJ090aGVyIGN1cnJlbmN5JyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBNb25leUxvc3RGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRMb3N0TW9uZXkoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEFtb3VudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbW91bnQgb2YgbW9uZXk8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q3VycmVuY3k8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmxvc3RDdXJyZW5jeSAmJlxuICAgICAgICAgICAgdmFsdWVzLmxvc3RDdXJyZW5jeS5pbmRleE9mKCdPdGhlciBjdXJyZW5jeScpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RPdGhlckN1cnJlbmN5XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIGN1cnJlbmN5PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RPdGhlckN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb3N0T3RoZXJDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkhvdyBkaWQgeW91IHBheSB0aGUgc2NhbW1lcj88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHNPZlBheW1lbnQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudCAmJlxuICAgICAgICAgICAgdmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50LmluZGV4T2YoJ090aGVyIG1ldGhvZCcpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBtZXRob2Qgb2YgcGF5bWVudDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBjYW5jZWxSb3V0ZT1cIi9wMS9cIlxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIlNjYW1tZXIgZGV0YWlsc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuTW9uZXlMb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "e1bdcfe51",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvTW9uZXlMb3N0Rm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q21DIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvTW9uZXlMb3N0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBSYWRpb0J1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldExvc3RNb25leSB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFJhZGlvQnV0dG9uQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoUmFkaW9CdXR0b24pXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5cbmNvbnN0IG1ldGhvZHNPZlBheW1lbnQgPSBbXG4gIGkxOG5NYXJrKCdDYXNoJyksXG4gIGkxOG5NYXJrKCdDcmVkaXQgY2FyZCcpLFxuICBpMThuTWFyaygnRS10cmFuc2ZlcicpLFxuICBpMThuTWFyaygnR2lmdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdPdGhlciBtZXRob2QnKSxcbl1cblxuY29uc3QgY3VycmVuY2llcyA9IFtcbiAgaTE4bk1hcmsoJ0NhbmFkaWFuIGRvbGxhcicpLFxuICBpMThuTWFyaygnVS5TLiBkb2xsYXInKSxcbiAgaTE4bk1hcmsoJ0V1cm8nKSxcbiAgaTE4bk1hcmsoJ090aGVyIGN1cnJlbmN5JyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBNb25leUxvc3RGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiAoXG4gICAgICA8Rm9ybVxuICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRMb3N0TW9uZXkoY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdEFtb3VudFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BbW91bnQgb2YgbW9uZXk8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvc3RBbW91bnRcIlxuICAgICAgICAgICAgICAgIGlkPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q3VycmVuY3k8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0Q3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmxvc3RDdXJyZW5jeSAmJlxuICAgICAgICAgICAgdmFsdWVzLmxvc3RDdXJyZW5jeS5pbmRleE9mKCdPdGhlciBjdXJyZW5jeScpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RPdGhlckN1cnJlbmN5XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIGN1cnJlbmN5PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RPdGhlckN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb3N0T3RoZXJDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8RmllbGRzZXQ+XG4gICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkhvdyBkaWQgeW91IHBheSB0aGUgc2NhbW1lcj88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZHNPZlBheW1lbnQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RNZXRob2RzT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5sb3N0TWV0aG9kc09mUGF5bWVudCAmJlxuICAgICAgICAgICAgdmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50LmluZGV4T2YoJ090aGVyIG1ldGhvZCcpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBtZXRob2Qgb2YgcGF5bWVudDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb3N0T3RoZXJNZXRob2RPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBjYW5jZWxSb3V0ZT1cIi9wMS9cIlxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIlNjYW1tZXIgZGV0YWlsc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuTW9uZXlMb3N0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var validate = function validate() {
  return {};
};

var MoneyLostForm = function MoneyLostForm(_ref) {
  var _onSubmit = _ref.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_10__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_12__["getLostMoney"])(client),
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref2) {
        var handleSubmit = _ref2.handleSubmit,
            values = _ref2.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostAmount"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Amount of money</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostAmount",
          id: "lostAmount",
          component: TextInputAdapter,
          height: "25px",
          width: "200px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("legend", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Currency</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref3) {
          var i18n = _ref3.i18n;
          return currencies.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "lostCurrency",
              component: RadioButtonAdapter,
              type: "radio",
              value: key,
              label: i18n._(key)
            }));
          });
        })), values.lostCurrency && values.lostCurrency.indexOf('Other currency') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostOtherCurrency"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Other currency"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostOtherCurrency",
          id: "lostOtherCurrency",
          component: TextInputAdapter,
          height: "25px",
          width: "200px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("legend", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>How did you pay the scammer?</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref4) {
          var i18n = _ref4.i18n;
          return methodsOfPayment.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "lostMethodsOfPayment",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        }))), values.lostMethodsOfPayment && values.lostMethodsOfPayment.indexOf('Other method') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "lostOtherMethodOfPayment"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_9__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Other method of payment"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "lostOtherMethodOfPayment",
          id: "lostOtherMethodOfPayment",
          component: TextInputAdapter,
          height: "25px",
          width: "200px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_13__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          cancelRoute: "/p1/",
          nextPage: "Scammer details"
        }));
      }
    });
  });
};
MoneyLostForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ }),

/***/ "./src/p1/forms/ScamInfoForm.js":
/*!**************************************!*\
  !*** ./src/p1/forms/ScamInfoForm.js ***!
  \**************************************/
/*! exports provided: ScamInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScamInfoForm", function() { return ScamInfoForm; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/TextInput */ "./src/components/TextInput/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");









/** @jsx jsx */













var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_14__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_16__["TextArea"]);
var TextInputAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_19__["finalFormAdapter"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_17__["TextInput"]);
var howContacted = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Telephone'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Email'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Website'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["i18nMark"])('Other')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default()('label', {
  target: "e5ctwc80",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvU2NhbUluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCcUMiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9TY2FtSW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTY2FtSW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgVGV4dElucHV0QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dElucHV0KVxuXG5jb25zdCBob3dDb250YWN0ZWQgPSBbXG4gIGkxOG5NYXJrKCdUZWxlcGhvbmUnKSxcbiAgaTE4bk1hcmsoJ0VtYWlsJyksXG4gIGkxOG5NYXJrKCdXZWJzaXRlJyksXG4gIGkxOG5NYXJrKCdPdGhlcicpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5cbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGxvY2FsT25TdWJtaXQgPSAoY2xpZW50LCBkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBvblN1Ym1pdCB9ID0gdGhpcy5wcm9wc1xuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0U2NhbUluZm8oY2xpZW50KX1cbiAgICAgICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHRoaXMubG9jYWxPblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICAgICAgcmVuZGVyPXsoe1xuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgIC8vIHJlc2V0LFxuICAgICAgICAgICAgICAvLyBzdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAvLyBwcmlzdGluZSxcbiAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAvLyBpbnZhbGlkLFxuICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s1LCBudWxsLCA2XX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldoYXQgaGFwcGVuZWQ/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2NhbURldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2hlbiBkaWQgaXQgc3RhcnQ/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImRhcmtHcmF5XCIgbXQ9XCI2cHhcIiBtYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkZvciBleGFtcGxlOiBBcHJpbCAyOCwgMjAxOTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndoZW5XZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkhvdyBkaWQgaXQgc3RhcnQ/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaG93Q29udGFjdGVkLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdPdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlcjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyTWV0aG9kT2ZDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkodmFsaWRhdGUodmFsdWVzKSkgPT09IEpTT04uc3RyaW5naWZ5KHt9KSA/IChcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5QbGVhc2UgZmlsbCBvdXQgYWxsIGZpZWxkczwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIGNhbmNlbFJvdXRlPVwiL3AxL1wiXG4gICAgICAgICAgICAgICAgICBuZXh0UGFnZT1cIk1vbmV5IGxvc3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cblNjYW1JbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default()('fieldset', {
  target: "e5ctwc81",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvU2NhbUluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDbUMiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9TY2FtSW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTY2FtSW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuY29uc3QgVGV4dElucHV0QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dElucHV0KVxuXG5jb25zdCBob3dDb250YWN0ZWQgPSBbXG4gIGkxOG5NYXJrKCdUZWxlcGhvbmUnKSxcbiAgaTE4bk1hcmsoJ0VtYWlsJyksXG4gIGkxOG5NYXJrKCdXZWJzaXRlJyksXG4gIGkxOG5NYXJrKCdPdGhlcicpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5cbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7fVxufVxuZXhwb3J0IGNsYXNzIFNjYW1JbmZvRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGxvY2FsT25TdWJtaXQgPSAoY2xpZW50LCBkYXRhKSA9PiB7XG4gICAgY29uc3QgeyBvblN1Ym1pdCB9ID0gdGhpcy5wcm9wc1xuICAgIG9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAgICB7Y2xpZW50ID0+IChcbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0U2NhbUluZm8oY2xpZW50KX1cbiAgICAgICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHRoaXMubG9jYWxPblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICAgICAgcmVuZGVyPXsoe1xuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXG4gICAgICAgICAgICAgIC8vIHJlc2V0LFxuICAgICAgICAgICAgICAvLyBzdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAvLyBwcmlzdGluZSxcbiAgICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgICAvLyBpbnZhbGlkLFxuICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1EZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s1LCBudWxsLCA2XX0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPldoYXQgaGFwcGVuZWQ/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2NhbURldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2hlbiBkaWQgaXQgc3RhcnQ/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImRhcmtHcmF5XCIgbXQ9XCI2cHhcIiBtYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zPkZvciBleGFtcGxlOiBBcHJpbCAyOCwgMjAxOTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndoZW5XZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgIDxsZWdlbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkhvdyBkaWQgaXQgc3RhcnQ/PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaG93Q29udGFjdGVkLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG93V2VyZVlvdUNvbnRhY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgICAgICB7dmFsdWVzLmhvd1dlcmVZb3VDb250YWN0ZWQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZC5pbmRleE9mKCdPdGhlcicpID4gLTEgPyAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlcjwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyTWV0aG9kT2ZDb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkodmFsaWRhdGUodmFsdWVzKSkgPT09IEpTT04uc3RyaW5naWZ5KHt9KSA/IChcbiAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5QbGVhc2UgZmlsbCBvdXQgYWxsIGZpZWxkczwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIGNhbmNlbFJvdXRlPVwiL3AxL1wiXG4gICAgICAgICAgICAgICAgICBuZXh0UGFnZT1cIk1vbmV5IGxvc3RcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cblNjYW1JbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var validate = function validate() {
  return {};
};

var ScamInfoForm =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ScamInfoForm, _Component);

  function ScamInfoForm() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ScamInfoForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(ScamInfoForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "localOnSubmit", function (client, data) {
      var onSubmit = _this.props.onSubmit;
      onSubmit(client, data);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ScamInfoForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_11__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
          initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_20__["getScamInfo"])(client),
          onSubmit: function onSubmit(data) {
            return _this2.localOnSubmit(client, data);
          },
          validate: validate,
          render: function render(_ref) {
            var handleSubmit = _ref.handleSubmit,
                values = _ref.values;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("form", {
              onSubmit: handleSubmit
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "scamDetails"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_18__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "<0>What happened?</0>",
              components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "scamDetails",
              id: "scamDetails",
              component: TextAreaAdapter,
              height: "100px",
              width: "100%"
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "whenWereYouContacted"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_18__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "<0>When did it start?</0>",
              components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_18__["Text"], {
              color: "darkGray",
              mt: "6px",
              mb: "8px"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "For example: April 28, 2019"
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "whenWereYouContacted",
              id: "whenWereYouContacted",
              component: TextInputAdapter,
              height: "25px",
              width: "300px"
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("legend", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_18__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "<0>How did it start?</0>",
              components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("strong", null)]
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["I18n"], null, function (_ref2) {
              var i18n = _ref2.i18n;
              return howContacted.map(function (key) {
                return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(CheckboxStyle, {
                  key: key
                }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
                  name: "howWereYouContacted",
                  component: CheckboxAdapter,
                  type: "checkbox",
                  value: key,
                  label: i18n._(key)
                }));
              });
            }))), values.howWereYouContacted && values.howWereYouContacted.indexOf('Other') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("label", {
              htmlFor: "otherMethodOfContact"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_18__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Other"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "otherMethodOfContact",
              id: "otherMethodOfContact",
              component: TextAreaAdapter,
              height: "50px",
              width: "300px"
            }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_18__["Text"], null, JSON.stringify(validate(values)) === JSON.stringify({}) ? '' : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_18__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_12__["Trans"], {
              id: "Please fill out all fields"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_15__["ButtonsContainer"], {
              buttonLink: false,
              cancel: true,
              cancelRoute: "/p1/",
              nextPage: "Money lost"
            }));
          }
        });
      });
    }
  }]);

  return ScamInfoForm;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
ScamInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
};

/***/ }),

/***/ "./src/p1/forms/SuspectInfoForm.js":
/*!*****************************************!*\
  !*** ./src/p1/forms/SuspectInfoForm.js ***!
  \*****************************************/
/*! exports provided: SuspectInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspectInfoForm", function() { return SuspectInfoForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/TextInput */ "./src/components/TextInput/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */












var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_11__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]);
var TextInputAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_11__["finalFormAdapter"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_9__["TextInput"]);
var languages = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('English'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('French'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Other language')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e11k9m370",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvU3VzcGVjdEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCcUMiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9TdXNwZWN0SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0U3VzcGVjdEluZm8gfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dElucHV0QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dElucHV0KVxuXG5jb25zdCBsYW5ndWFnZXMgPSBbXG4gIGkxOG5NYXJrKCdFbmdsaXNoJyksXG4gIGkxOG5NYXJrKCdGcmVuY2gnKSxcbiAgaTE4bk1hcmsoJ090aGVyIGxhbmd1YWdlJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBTdXNwZWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldFN1c3BlY3RJbmZvKGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3ROYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdE5hbWVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RFbWFpbFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbCBhZGRyZXNzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0RW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdEVtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0UGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGhvbmUgbnVtYmVyPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0UGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdFBob25lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0V2Vic2l0ZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XZWJzaXRlIGxpbms8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RXZWJzaXRlXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RXZWJzaXRlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0QWRkcmVzc1wiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWlsaW5nIGFkZHJlc3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0SVBcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SVAgYWRkcmVzczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdElQXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RJUFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TGFuZ3VhZ2Ugb2YgY29tbXVuaWNhdGlvbnM8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlcy5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdExhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgIHZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UuaW5kZXhPZignT3RoZXIgbGFuZ3VhZ2UnKSA+IC0xID8gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBsYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJTdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgY2FuY2VsUm91dGU9XCIvcDEvXCJcbiAgICAgICAgICAgICAgbmV4dFBhZ2U9XCJTdXBwb3J0aW5nIGZpbGVzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5TdXNwZWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "e11k9m371",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvZm9ybXMvU3VzcGVjdEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCbUMiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9TdXNwZWN0SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0U3VzcGVjdEluZm8gfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgVGV4dElucHV0QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dElucHV0KVxuXG5jb25zdCBsYW5ndWFnZXMgPSBbXG4gIGkxOG5NYXJrKCdFbmdsaXNoJyksXG4gIGkxOG5NYXJrKCdGcmVuY2gnKSxcbiAgaTE4bk1hcmsoJ090aGVyIGxhbmd1YWdlJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBTdXNwZWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldFN1c3BlY3RJbmZvKGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9KSA9PiAoXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3ROYW1lXCI+XG4gICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TmFtZTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdE5hbWVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RFbWFpbFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5FbWFpbCBhZGRyZXNzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0RW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdEVtYWlsXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0UGhvbmVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UGhvbmUgbnVtYmVyPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0UGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdFBob25lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0V2Vic2l0ZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XZWJzaXRlIGxpbms8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RXZWJzaXRlXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RXZWJzaXRlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0QWRkcmVzc1wiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWlsaW5nIGFkZHJlc3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdXNwZWN0SVBcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SVAgYWRkcmVzczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdElQXCJcbiAgICAgICAgICAgICAgICBpZD1cInN1c3BlY3RJUFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TGFuZ3VhZ2Ugb2YgY29tbXVuaWNhdGlvbnM8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlcy5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdExhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0NoZWNrYm94QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAge3ZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UgJiZcbiAgICAgICAgICAgIHZhbHVlcy5zdXNwZWN0TGFuZ3VhZ2UuaW5kZXhPZignT3RoZXIgbGFuZ3VhZ2UnKSA+IC0xID8gKFxuICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5PdGhlciBsYW5ndWFnZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwib3RoZXJTdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgY2FuY2VsUm91dGU9XCIvcDEvXCJcbiAgICAgICAgICAgICAgbmV4dFBhZ2U9XCJTdXBwb3J0aW5nIGZpbGVzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5TdXNwZWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var validate = function validate() {
  return {};
};

var SuspectInfoForm = function SuspectInfoForm(_ref) {
  var _onSubmit = _ref.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_10__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_12__["getSuspectInfo"])(client),
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref2) {
        var handleSubmit = _ref2.handleSubmit,
            values = _ref2.values;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectName"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Name</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectName",
          id: "suspectName",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectEmail"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Email address</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectEmail",
          id: "suspectEmail",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectPhone"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Phone number</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectPhone",
          id: "suspectPhone",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectWebsite"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Website link</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectWebsite",
          id: "suspectWebsite",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectAddress"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Mailing address</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectAddress",
          id: "suspectAddress",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "suspectIP"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>IP address</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "suspectIP",
          id: "suspectIP",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("legend", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Language of communications</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref3) {
          var i18n = _ref3.i18n;
          return languages.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "suspectLanguage",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        }))), values.suspectLanguage && values.suspectLanguage.indexOf('Other language') > -1 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("label", {
          htmlFor: "otherSuspectLanguage"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "Other language"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "otherSuspectLanguage",
          id: "otherSuspectLanguage",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        }))) : '', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_7__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          cancelRoute: "/p1/",
          nextPage: "Supporting files"
        }));
      }
    });
  });
};
SuspectInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

/***/ }),

/***/ "./src/p2/ConfirmationPage.js":
/*!************************************!*\
  !*** ./src/p2/ConfirmationPage.js ***!
  \************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _ConfirmationSummary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConfirmationSummary */ "./src/p2/ConfirmationSummary.js");
/* harmony import */ var _forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/ConfirmationForm */ "./src/p2/forms/ConfirmationForm.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");




/** @jsx jsx */











var randLetter = function randLetter() {
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return letters[Math.floor(Math.random() * letters.length)];
};

var randDigit = function randDigit() {
  return Math.floor(Math.random() * 10);
};

var randomizeString = function randomizeString(s) {
  return s ? s.replace(/[a-z]/g, function () {
    return randLetter();
  }).replace(/[A-Z]/g, function () {
    return randLetter().toUpperCase();
  }).replace(/[0-9]/g, function () {
    return randDigit();
  }) : s;
};

function postData() {
  return _postData.apply(this, arguments);
}

function _postData() {
  _postData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var url,
        data,
        response,
        _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
            data = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            _context2.next = 4;
            return fetch(url, {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              credentials: 'same-origin',
              headers: {
                'Content-Type': 'application/json'
              },
              redirect: 'follow',
              referrer: 'no-referrer',
              body: JSON.stringify(data)
            });

          case 4:
            response = _context2.sent;
            _context2.next = 7;
            return response;

          case 7:
            return _context2.abrupt("return", _context2.sent);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _postData.apply(this, arguments);
}

var submit =
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(client, submitReportP2) {
    var timeFrame, whatHappened, scammerDetails, impact, p2ContactInfo, surveyInfo, fullName, email, phone, postalCode, data, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            timeFrame = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getTimeFrame"])(client);
            whatHappened = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getWhatHappened"])(client);
            scammerDetails = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getScammerDetails"])(client);
            impact = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getImpact"])(client);
            p2ContactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getP2ContactInfo"])(client);
            surveyInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getSurveyInfo"])(client);
            fullName = p2ContactInfo.fullName, email = p2ContactInfo.email, phone = p2ContactInfo.phone, postalCode = p2ContactInfo.postalCode;
            fullName = randomizeString(fullName);
            email = randomizeString(email);
            phone = randomizeString(phone);
            postalCode = randomizeString(postalCode);
            data = {
              source: 'p2',
              timeFrame: timeFrame,
              whatHappened: whatHappened,
              impact: impact,
              scammerDetails: scammerDetails,
              contactInfo: {
                fullName: fullName,
                email: email,
                phone: phone,
                postalCode: postalCode
              },
              surveyInfo: surveyInfo
            };
            _context.prev = 12;
            _context.next = 15;
            return postData('/submit', data);

          case 15:
            results = _context.sent;
            console.log("POST status: ".concat(results.statusText));
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](12);
            console.error(_context.t0);

          case 22:
            submitReportP2({
              variables: data
            });
            Object(_reach_router__WEBPACK_IMPORTED_MODULE_4__["navigate"])('nextsteps');

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[12, 19]]);
  }));

  return function submit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_12__["BackButton"], {
    route: "/p2/contactinfo"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    id: "your contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_7__["Steps"], {
    activeStep: 6,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
    id: "confirmationPage.title",
    defaults: "Review your report"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_ConfirmationSummary__WEBPACK_IMPORTED_MODULE_10__["ConfirmationSummary"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_11__["ConfirmationForm"], {
    onSubmit: submit
  }));
};

/***/ }),

/***/ "./src/p2/ConfirmationSummary.js":
/*!***************************************!*\
  !*** ./src/p2/ConfirmationSummary.js ***!
  \***************************************/
/*! exports provided: ConfirmationSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationSummary", function() { return ConfirmationSummary; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */










var SectionHeader = function SectionHeader(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_5__["H2"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    fontSize: [3, null, 4],
    marginTop: [2, null, 3],
    marginBottom: [1, null, 1]
  }, props));
};

var EditButton = function EditButton(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_8__["Link"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "button",
    color: "black",
    textAlign: "center"
  }, props), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "Edit"
  }));
};

var timeFrameSummary = function timeFrameSummary(client) {
  var _getTimeFrame = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getTimeFrame"])(client),
      startDate = _getTimeFrame.startDate,
      endDate = _getTimeFrame.endDate;

  startDate = startDate.slice(0, 10);
  endDate = endDate.slice(0, 10);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.timeFrameTitle",
    defaults: "Timeframe"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref) {
    var i18n = _ref.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit timeframe'),
      to: "/p2/timeframe"
    });
  })), startDate ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "{startDate} to {endDate}",
    values: {
      startDate: startDate,
      endDate: endDate
    }
  })) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.timeFrameIntro",
    defaults: "If you can, give us an idea of when the scam took place so that police are able to look into it."
  })));
};

var whatHappenedSummary = function whatHappenedSummary(client) {
  var _getWhatHappened = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getWhatHappened"])(client),
      whatHappened = _getWhatHappened.whatHappened;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.scamTitle",
    defaults: "Scam"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref2) {
    var i18n = _ref2.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit what happened'),
      to: "/p2/whathappened"
    });
  })), whatHappened ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, whatHappened) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.scamIntro",
    defaults: "Tell us about your experience so we can stop it from happening again."
  })));
};

var scammerSummary = function scammerSummary(client) {
  var _getScammerDetails = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getScammerDetails"])(client),
      scammerDetails = _getScammerDetails.scammerDetails,
      files = _getScammerDetails.files,
      fileDescriptions = _getScammerDetails.fileDescriptions;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.suspectTitle",
    defaults: "Suspect"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref3) {
    var i18n = _ref3.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit scammer information'),
      to: "/p2/scammerdetails"
    });
  })), scammerDetails !== '' || files.length > 0 || fileDescriptions.length > 0 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, scammerDetails), files ? files.map(function (file, index) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["Container"], {
      key: index
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["StyledSpan"], {
      fontSize: [2, null, 3],
      fontWeight: "bold"
    }, file, ":"), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["StyledSpan"], {
      fontSize: [2, null, 3]
    }, fileDescriptions[index]));
  }) : null) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.suspectIntro",
    defaults: "Share any details you may know so that police can try to identify suspects."
  })));
};

var impactSummary = function impactSummary(client) {
  var _getImpact = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getImpact"])(client),
      howWereYouAffected = _getImpact.howWereYouAffected,
      otherImpact = _getImpact.otherImpact,
      damage = _getImpact.damage;

  if (howWereYouAffected.indexOf('Other impact') > -1) {
    howWereYouAffected = howWereYouAffected.filter(function (impact) {
      return impact != 'Other impact';
    });
    howWereYouAffected.push(otherImpact);
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref4) {
    var i18n = _ref4.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "confirmationPage.ImpactTitle",
      defaults: "Impact"
    }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit impact'),
      to: "/p2/impact"
    })), howWereYouAffected.length > 0 || damage != '' ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, howWereYouAffected.map(function (i) {
      return i18n._(i);
    }).join(', ')), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, damage)) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
      id: "confirmationPage.impactIntro",
      defaults: "Tell us how the scam impacted you so that we can better support other people who are affected."
    })));
  });
};

var contactSummary = function contactSummary(client) {
  var _getP2ContactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getP2ContactInfo"])(client),
      fullName = _getP2ContactInfo.fullName,
      email = _getP2ContactInfo.email,
      phone = _getP2ContactInfo.phone,
      postalCode = _getP2ContactInfo.postalCode;

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(SectionHeader, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.contactTitle",
    defaults: "Contact"
  }), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["I18n"], null, function (_ref5) {
    var i18n = _ref5.i18n;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(EditButton, {
      "aria-label": i18n._('Edit contact information'),
      to: "/p2/contactinfo"
    });
  })), (fullName + email + phone + postalCode).length > 0 ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, fullName), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, email), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, phone), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, postalCode)) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_3__["Trans"], {
    id: "confirmationPage.contactIntro",
    defaults: "Provide your contact details so that we can send you a confirmation of your report."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", null));
};

var ConfirmationSummary = function ConfirmationSummary() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    client.writeData({
      data: {
        doneForms: true
      }
    });
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, timeFrameSummary(client), whatHappenedSummary(client), scammerSummary(client), impactSummary(client), contactSummary(client));
  });
};

/***/ }),

/***/ "./src/p2/ContactInfoPage.js":
/*!***********************************!*\
  !*** ./src/p2/ContactInfoPage.js ***!
  \***********************************/
/*! exports provided: ContactInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoPage", function() { return ContactInfoPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_ContactInfoForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/ContactInfoForm */ "./src/p2/forms/ContactInfoForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */










var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      contactInfo: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/p2/confirmation');
};

var ContactInfoPage = function ContactInfoPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_9__["BackButton"], {
    route: "/p2/impact"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "contactinfoPage.backButton",
    defaults: "the impact"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_5__["Steps"], {
    activeStep: 5,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "contactinfoPage.title",
    defaults: "Leave your contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "contactinfoPage.intro",
    defaults: "We will use this to send you a confirmation email and to link your report to other reports in your area."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ContactInfoForm__WEBPACK_IMPORTED_MODULE_7__["ContactInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p2/ImpactStatementPage.js":
/*!***************************************!*\
  !*** ./src/p2/ImpactStatementPage.js ***!
  \***************************************/
/*! exports provided: ImpactStatementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactStatementPage", function() { return ImpactStatementPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _forms_ImpactStatementInfoForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/ImpactStatementInfoForm */ "./src/p2/forms/ImpactStatementInfoForm.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/* eslint-disable react/no-unescaped-entities */











var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      impact: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getDoneForms"])(client) ? 'confirmation' : 'contactinfo');
};

var ImpactStatementPage = function ImpactStatementPage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p2/scammerdetails"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "impactPage.backButton",
    defaults: "the suspect"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_stepper__WEBPACK_IMPORTED_MODULE_6__["Steps"], {
    activeStep: 4,
    totalSteps: 6
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "impactPage.title",
    defaults: "Impact caused by the scam"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "impactPage.intro",
    defaults: "You're not the only one affected by this scam. Help protect others by telling us how the scam affected you."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_8__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_forms_ImpactStatementInfoForm__WEBPACK_IMPORTED_MODULE_7__["ImpactStatementInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p2/LandingPage.js":
/*!*******************************!*\
  !*** ./src/p2/LandingPage.js ***!
  \*******************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");


/* eslint-disable react/no-unescaped-entities */













var LandingPage = function LandingPage(props) {
  var _queryString$parse = query_string__WEBPACK_IMPORTED_MODULE_5__["parse"](props.location.search),
      surveyID = _queryString$parse.surveyID,
      ResponseID = _queryString$parse.ResponseID;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_12__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_13__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_7__["H1"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.title",
    defaults: "Report a scam"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloConsumer"], null, function (client) {
    return client.writeData({
      data: {
        doneForms: false,
        scamInfo: JSON.stringify({}),
        lostMoney: JSON.stringify({}),
        suspectInfo: JSON.stringify({}),
        files: [],
        contactInfo: JSON.stringify({}),
        timeFrame: JSON.stringify({}),
        whatHappened: JSON.stringify({}),
        scammerDetails: JSON.stringify({}),
        impact: JSON.stringify({}),
        tellUsMore: JSON.stringify({}),
        surveyInfo: JSON.stringify({
          surveyID: surveyID ? surveyID : '',
          ResponseID: ResponseID ? ResponseID : ''
        })
      }
    });
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.intro",
    defaults: "Scams can happen to anyone. They\u2019re not always easy to recognize and new ones are invented every day."
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_container__WEBPACK_IMPORTED_MODULE_10__["InfoCard"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.required0",
    defaults: "Before you start, gather what you can about the scam:"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_unordered_list__WEBPACK_IMPORTED_MODULE_8__["Ul"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_9__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.required1",
    defaults: "Dates when it took place"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_9__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.required2",
    defaults: "Descriptions of what happened"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_9__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.required3",
    defaults: "Details on where it came from"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_list_item__WEBPACK_IMPORTED_MODULE_9__["Li"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.required4",
    defaults: "Documents, screenshots, or receipts"
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["P"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.summary",
    defaults: "Your report helps the RCMP learn about these crimes and helps police across Canada catch cybercriminals."
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_buttons_container__WEBPACK_IMPORTED_MODULE_11__["ButtonsContainer"], {
    cancel: false,
    buttonLink: false,
    nextPage: "Report now",
    onClick: function onClick() {
      return Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('/p2/timeframe');
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "landingPage.nextButton",
    defaults: "Report now \u276F"
  })));
};
LandingPage.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

/***/ }),

/***/ "./src/p2/NextSteps.js":
/*!*****************************!*\
  !*** ./src/p2/NextSteps.js ***!
  \*****************************/
/*! exports provided: NextSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextSteps", function() { return NextSteps; });
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/link */ "./src/components/link/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "./src/components/container/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/** @jsx jsx */












var NextSteps = function NextSteps() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["I18n"], null, function () {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_10__["Query"], {
      query: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__["GET_LANGUAGE_QUERY"]
    }, function (_ref) {
      var language = _ref.data.language;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_10__["ApolloConsumer"], null, function (client) {
        return client.writeData({
          data: {
            doneForms: false,
            scamInfo: JSON.stringify({}),
            lostMoney: JSON.stringify({}),
            suspectInfo: JSON.stringify({}),
            files: [],
            contactInfo: JSON.stringify({}),
            timeFrame: JSON.stringify({}),
            whatHappened: JSON.stringify({}),
            scammerDetails: JSON.stringify({}),
            impact: JSON.stringify({}),
            tellUsMore: JSON.stringify({})
          }
        });
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_2__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.title",
        defaults: "Thank you for reporting"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.summary",
        defaults: "We've sent you an email with a summary of your report. Your reference number is <0>#NC300234234</0>",
        components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null)]
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["InfoCard"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.helpResource",
        defaults: "Where you can get help"
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_5__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
        href: language === 'en' ? 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-eng.htm' : 'http://www.rcmp-grc.gc.ca/ccaps-spcca/vic-fra.htm'
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.helpResource1",
        defaults: "Talk to someone and get support"
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
        href: language === 'en' ? 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-eng.htm' : 'http://www.rcmp-grc.gc.ca/to-ot/tis-set/cyber-tips-conseils-fra.htm'
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.helpResource2",
        defaults: "Find tips to protect yourself in the future"
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
        href: language === 'en' ? 'http://www.antifraudcentre.ca/index-eng.htm' : 'http://www.antifraudcentre.ca/index-fra.htm'
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.helpResource3",
        defaults: "Follow what scams are trending"
      })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.nextStepSummary",
        defaults: "What happens next"
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: ""
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.nextStepDetail",
        defaults: "The RCMP will analyze your report and combine it with others that are similar to help police across Canada track down cybercriminals."
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_3__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.otherReportOption",
        defaults: "You have other reporting options"
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_5__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.otherReportOption1",
        defaults: "Report directly to the place where the scam happened."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.otherReportOption2",
        defaults: "Report to your financial institution, if you lost money."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_1__["Trans"], {
        id: "nextStepsPage.otherReportOption3",
        defaults: "Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.",
        components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
          href: language === 'en' ? 'https://www.consumer.equifax.ca/personal/' : 'https://www.consumer.equifax.ca/personnel/'
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_link__WEBPACK_IMPORTED_MODULE_4__["A"], {
          href: language === 'en' ? 'https://www.transunion.ca/' : 'https://www.transunion.ca/fr'
        })]
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_8__["TrackPageViews"], null));
    });
  });
};

/***/ }),

/***/ "./src/p2/ScammerDetailsPage.js":
/*!**************************************!*\
  !*** ./src/p2/ScammerDetailsPage.js ***!
  \**************************************/
/*! exports provided: ScammerDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScammerDetailsPage", function() { return ScammerDetailsPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_ScammerDetailsForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/ScammerDetailsForm */ "./src/p2/forms/ScammerDetailsForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */











var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      scammerDetails: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getDoneForms"])(client) ? 'confirmation' : 'impact');
};

var ScammerDetailsPage = function ScammerDetailsPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p2/whathappened"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "scammerDetail.backButton",
    defaults: "the scam"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_5__["Steps"], {
    activeStep: 3,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "scammerDetail.title",
    defaults: "Add suspect clues"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "scammerDetail.intro",
    defaults: "Any clues about the source of the scam can help police track down the scammer."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_6__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ScammerDetailsForm__WEBPACK_IMPORTED_MODULE_7__["ScammerDetailsForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p2/TimeFramePage.js":
/*!*********************************!*\
  !*** ./src/p2/TimeFramePage.js ***!
  \*********************************/
/*! exports provided: TimeFramePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFramePage", function() { return TimeFramePage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _forms_TimeFrameInfoForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/TimeFrameInfoForm */ "./src/p2/forms/TimeFrameInfoForm.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");












var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      timeFrame: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__["getDoneForms"])(client) ? 'confirmation' : 'whathappened');
};

var TimeFramePage = function TimeFramePage() {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["Layout"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_backbutton__WEBPACK_IMPORTED_MODULE_9__["BackButton"], {
    route: "/p2"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "timeFramePage.backButton",
    defaults: "the start page"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_stepper__WEBPACK_IMPORTED_MODULE_10__["Steps"], {
    activeStep: 1,
    totalSteps: 6
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "timeFramePage.title",
    defaults: "When did the scam happen?"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "timeFramePage.intro",
    defaults: "It\u2019s okay if you don\u2019t know exactly when it took place. You can give your best guess or leave this blank."
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TrackPageViews__WEBPACK_IMPORTED_MODULE_7__["TrackPageViews"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_forms_TimeFrameInfoForm__WEBPACK_IMPORTED_MODULE_6__["TimeFrameInfoForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p2/WhatHappenedPage.js":
/*!************************************!*\
  !*** ./src/p2/WhatHappenedPage.js ***!
  \************************************/
/*! exports provided: WhatHappenedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatHappenedPage", function() { return WhatHappenedPage; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _forms_WhatHappenedForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/WhatHappenedForm */ "./src/p2/forms/WhatHappenedForm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


/** @jsx jsx */













var submitAndNavigate = function submitAndNavigate(client, data) {
  client.writeData({
    data: {
      whatHappened: JSON.stringify(data)
    }
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__["getDoneForms"])(client) ? 'confirmation' : '/p2/scammerdetails');
};

var WhatHappenedPage = function WhatHappenedPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_10__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_12__["BackButton"], {
    route: "/p2/timeframe"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "whatHappendPage.backButton",
    defaults: "the timeframe"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_7__["Steps"], {
    activeStep: 2,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "whatHappendPage.title",
    defaults: "Describe what happened"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "whatHappendPage.intro1",
    defaults: "What happened is not your fault. Scammers use a number of techniques to get what they want."
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "whatHappendPage.details1",
    defaults: "Think about including things such as:"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_5__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "whatHappendPage.details2",
    defaults: "Which app, website, or device you were using"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "whatHappendPage.details3",
    defaults: "How the scammer contacted you"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_6__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "whatHappendPage.details4",
    defaults: "What they promised, threatened, or stole"
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_8__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_WhatHappenedForm__WEBPACK_IMPORTED_MODULE_9__["WhatHappenedForm"], {
    onSubmit: submitAndNavigate
  }));
};

/***/ }),

/***/ "./src/p2/forms/ConfirmationForm.js":
/*!******************************************!*\
  !*** ./src/p2/forms/ConfirmationForm.js ***!
  \******************************************/
/*! exports provided: ConfirmationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationForm", function() { return ConfirmationForm; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/** @jsx jsx */







var ConfirmationForm = function ConfirmationForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
      mutation: _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_6__["SUBMIT_P2_REPORT_MUTATION"]
    }, function (submitReportP2) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_6__["getTellUsMore"])(client),
        onSubmit: function onSubmit() {
          return props.onSubmit(client, submitReportP2);
        },
        render: function render(_ref) {
          var handleSubmit = _ref.handleSubmit;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
            onSubmit: handleSubmit
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_5__["ButtonsContainer"], {
            buttonLink: false,
            cancel: true,
            submit: true
          }));
        }
      });
    });
  }));
};
ConfirmationForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};

/***/ }),

/***/ "./src/p2/forms/ContactInfoForm.js":
/*!*****************************************!*\
  !*** ./src/p2/forms/ContactInfoForm.js ***!
  \*****************************************/
/*! exports provided: ContactInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoForm", function() { return ContactInfoForm; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/TextInput */ "./src/components/TextInput/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */









var TextInputAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_8__["finalFormAdapter"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_5__["TextInput"]);

var validate = function validate() {
  return {};
};

var ContactInfoForm = function ContactInfoForm(_ref) {
  var _onSubmit = _ref.onSubmit;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_9__["getP2ContactInfo"])(client),
      onSubmit: function onSubmit(data) {
        return _onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref2) {
        var handleSubmit = _ref2.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "fullName"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "contactinfoPage.fullName",
          defaults: "Full name"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "fullName",
          id: "fullName",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "email"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "contactinfoPage.emailAddress",
          defaults: "Email address"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "email",
          id: "email",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "postalCode"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "contactinfoPage.postCode",
          defaults: "Postal code"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "postalCode",
          id: "postalCode",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_4__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          nextPage: "Confirm information"
        }));
      }
    });
  });
};
ContactInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/p2/forms/ImpactStatementInfoForm.js":
/*!*************************************************!*\
  !*** ./src/p2/forms/ImpactStatementInfoForm.js ***!
  \*************************************************/
/*! exports provided: ImpactStatementInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpactStatementInfoForm", function() { return ImpactStatementInfoForm; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/checkbox */ "./src/components/checkbox/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");


/** @jsx jsx */











var CheckboxAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_10__["finalFormAdapter"])(_components_checkbox__WEBPACK_IMPORTED_MODULE_6__["Checkbox"]);
var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_10__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_9__["TextArea"]);
var howWereYouAffected = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Device or account hacked'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Information stolen'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Money lost'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Reputation damaged'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Safety threatened'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Wellbeing affected'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('No impact')];

var CheckboxStyle =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "eemyvxu0",
  label: "CheckboxStyle"
})( false ? undefined : {
  name: "vqpvxt",
  styles: "margin-bottom:8pt;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJxQyIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IEJ1dHRvbnNDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbnMtY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldEltcGFjdCB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5jb25zdCBob3dXZXJlWW91QWZmZWN0ZWQgPSBbXG4gIGkxOG5NYXJrKCdEZXZpY2Ugb3IgYWNjb3VudCBoYWNrZWQnKSxcbiAgaTE4bk1hcmsoJ0luZm9ybWF0aW9uIHN0b2xlbicpLFxuICBpMThuTWFyaygnTW9uZXkgbG9zdCcpLFxuICBpMThuTWFyaygnUmVwdXRhdGlvbiBkYW1hZ2VkJyksXG4gIGkxOG5NYXJrKCdTYWZldHkgdGhyZWF0ZW5lZCcpLFxuICBpMThuTWFyaygnV2VsbGJlaW5nIGFmZmVjdGVkJyksXG4gIGkxOG5NYXJrKCdObyBpbXBhY3QnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5leHBvcnQgY29uc3QgSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldEltcGFjdChjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s1LCBudWxsLCA2XX0+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJpbXBhY3RQYWdlLmRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdoYXQgd2FzIHRoZSBpbXBhY3Qgb2YgdGhlIHNjYW0/XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBob3dXZXJlWW91QWZmZWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VBZmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGFtYWdlXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiaW1wYWN0UGFnZS5zdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFRlbGwgdXMgbW9yZSBhYm91dCBob3cgaXQgaW1wYWN0ZWQgeW91LlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImRhcmtHcmF5XCIgbXQ9XCI2cHhcIiBtYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiaW1wYWN0UGFnZS5leGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlOiB0aGUgYW1vdW50IG9mIG1vbmV5LCB0aGUgaW5mb3JtYXRpb24gdGFrZW4sXG4gICAgICAgICAgICAgICAgICAgIHdoYXQgZWxzZSB3YXMgYWZmZWN0ZWRcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cImRhbWFnZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIkNvbnRhY3QgaW5mb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eemyvxu1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JtQyIsImZpbGUiOiIvVXNlcnMva2V2aW55YW5nL3Byb2plY3RzL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IEJ1dHRvbnNDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbnMtY29udGFpbmVyJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dCdcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldEltcGFjdCB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0QXJlYUFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRBcmVhKVxuXG5jb25zdCBob3dXZXJlWW91QWZmZWN0ZWQgPSBbXG4gIGkxOG5NYXJrKCdEZXZpY2Ugb3IgYWNjb3VudCBoYWNrZWQnKSxcbiAgaTE4bk1hcmsoJ0luZm9ybWF0aW9uIHN0b2xlbicpLFxuICBpMThuTWFyaygnTW9uZXkgbG9zdCcpLFxuICBpMThuTWFyaygnUmVwdXRhdGlvbiBkYW1hZ2VkJyksXG4gIGkxOG5NYXJrKCdTYWZldHkgdGhyZWF0ZW5lZCcpLFxuICBpMThuTWFyaygnV2VsbGJlaW5nIGFmZmVjdGVkJyksXG4gIGkxOG5NYXJrKCdObyBpbXBhY3QnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5leHBvcnQgY29uc3QgSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldEltcGFjdChjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBwcm9wcy5vblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s1LCBudWxsLCA2XX0+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJpbXBhY3RQYWdlLmRldGFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFdoYXQgd2FzIHRoZSBpbXBhY3Qgb2YgdGhlIHNjYW0/XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBob3dXZXJlWW91QWZmZWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VBZmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGFtYWdlXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiaW1wYWN0UGFnZS5zdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIFRlbGwgdXMgbW9yZSBhYm91dCBob3cgaXQgaW1wYWN0ZWQgeW91LlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImRhcmtHcmF5XCIgbXQ9XCI2cHhcIiBtYj1cIjhweFwiPlxuICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwiaW1wYWN0UGFnZS5leGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIEZvciBleGFtcGxlOiB0aGUgYW1vdW50IG9mIG1vbmV5LCB0aGUgaW5mb3JtYXRpb24gdGFrZW4sXG4gICAgICAgICAgICAgICAgICAgIHdoYXQgZWxzZSB3YXMgYWZmZWN0ZWRcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBpZD1cImRhbWFnZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0QXJlYUFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIkNvbnRhY3QgaW5mb1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIC8+XG4gICAgKX1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcblxuSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var validate = function validate() {
  return {};
};

var ImpactStatementInfoForm = function ImpactStatementInfoForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_11__["getImpact"])(client),
      onSubmit: function onSubmit(data) {
        return props.onSubmit(client, data);
      },
      validate: validate,
      render: function render(_ref) {
        var handleSubmit = _ref.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Fieldset, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("legend", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "impactPage.detail",
          defaults: "What was the impact of the scam?"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref2) {
          var i18n = _ref2.i18n;
          return howWereYouAffected.map(function (key) {
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(CheckboxStyle, {
              key: key
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
              name: "howWereYouAffected",
              component: CheckboxAdapter,
              type: "checkbox",
              value: key,
              label: i18n._(key)
            }));
          });
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "damage"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "impactPage.summary",
          defaults: "Tell us more about how it impacted you."
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          color: "darkGray",
          mt: "6px",
          mb: "8px"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "impactPage.example",
          defaults: "For example: the amount of money, the information taken, what else was affected"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], {
          name: "damage",
          id: "damage",
          component: TextAreaAdapter,
          height: "50px",
          width: "100%"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_7__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          nextPage: "Contact info"
        }));
      }
    });
  });
};
ImpactStatementInfoForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/p2/forms/ScammerDetailsForm.js":
/*!********************************************!*\
  !*** ./src/p2/forms/ScammerDetailsForm.js ***!
  \********************************************/
/*! exports provided: ScammerDetailsFormWrapped, ScammerDetailsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScammerDetailsFormWrapped", function() { return ScammerDetailsFormWrapped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScammerDetailsForm", function() { return ScammerDetailsForm; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/container */ "./src/components/container/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/button */ "./src/components/button/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/header */ "./src/components/header/index.js");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/paragraph */ "./src/components/paragraph/index.js");
/* harmony import */ var _components_unordered_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/unordered-list */ "./src/components/unordered-list/index.js");
/* harmony import */ var _components_list_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/list-item */ "./src/components/list-item/index.js");
/* harmony import */ var _components_file_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/file-upload */ "./src/components/file-upload/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/upload.svg */ "./src/images/upload.svg");
/* harmony import */ var _images_upload_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_upload_svg__WEBPACK_IMPORTED_MODULE_20__);



/** @jsx jsx */



















var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_18__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_10__["TextArea"]);

var _ref =  false ? undefined : {
  name: "2p9dvp-ScammerDetailsFormWrapped",
  styles: "display:flex;justify-content:center;img{width:1rem;margin-right:0.6rem;}label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvU2NhbW1lckRldGFpbHNGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFKMEIiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMi9mb3Jtcy9TY2FtbWVyRGV0YWlsc0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDIsIEgzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBVbCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QnXG5pbXBvcnQgeyBMaSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1pdGVtJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFNjYW1tZXJEZXRhaWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB1cGxvYWQgZnJvbSAnLi4vLi4vaW1hZ2VzL3VwbG9hZC5zdmcnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsaWVudCB9ID0gcHJvcHNcbiAgY29uc3QgY2FjaGVkID0gZ2V0U2NhbW1lckRldGFpbHMoY2xpZW50KVxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKGNhY2hlZC5maWxlcy5tYXAoZmlsZSA9PiAoeyBuYW1lOiBmaWxlIH0pKSlcbiAgY29uc3QgW2ZpbGVEZXNjcmlwdGlvbnMsIHNldEZpbGVEZXNjcmlwdGlvbnNdID0gdXNlU3RhdGUoXG4gICAgY2FjaGVkLmZpbGVEZXNjcmlwdGlvbnMsXG4gIClcbiAgY29uc3QgW3NjYW1tZXJEZXRhaWxzLCBzZXRTY2FtbWVyRGV0YWlsc10gPSB1c2VTdGF0ZShjYWNoZWQuc2NhbW1lckRldGFpbHMpXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcbiAgaTE4bk1hcmsoJ2ZpbGVVcGxvYWQucmVtb3ZlZCcpXG4gIGkxOG5NYXJrKCdmaWxlVXBsb2FkLmFkZGVkJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykuZm9jdXMoKVxuICAgIH1cbiAgfSwgW3N0YXR1c10pXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdzY2FtbWVyRGV0YWlscycpIHtcbiAgICAgIHNldFNjYW1tZXJEZXRhaWxzKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQuaW5kZXhPZignZmlsZS1kZXNjcmlwdGlvbicpID4gLTEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlkLnN1YnN0cmluZygxNykpXG4gICAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsZURlc2NyaXB0aW9ucykpXG4gICAgICBuZXdGaWxlRGVzY3JpcHRpb25zW2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgc2V0U3RhdHVzKCdmaWxlVXBsb2FkLmFkZGVkJylcbiAgICAgIHNldEZpbGVzKGZpbGVzLmNvbmNhdChlLnRhcmdldC5maWxlc1swXSkpXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKGZpbGVEZXNjcmlwdGlvbnMuY29uY2F0KCcnKSlcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmVGaWxlID0gaW5kZXggPT4ge1xuICAgIGxldCBuZXdGaWxlcyA9IGZpbGVzLmZpbHRlcigoXywgZmlsZUluZGV4KSA9PiBpbmRleCAhPSBmaWxlSW5kZXgpXG4gICAgbGV0IG5ld0ZpbGVEZXNjcmlwdGlvbnMgPSBmaWxlRGVzY3JpcHRpb25zLmZpbHRlcihcbiAgICAgIChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleCxcbiAgICApXG4gICAgc2V0RmlsZXMobmV3RmlsZXMpXG4gICAgc2V0RmlsZURlc2NyaXB0aW9ucyhuZXdGaWxlRGVzY3JpcHRpb25zKVxuICAgIHNldFN0YXR1cygnZmlsZVVwbG9hZC5yZW1vdmVkJylcbiAgfVxuXG4gIGNvbnN0IGxvY2FsU3VibWl0ID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2NhbW1lckRldGFpbHMsXG4gICAgICBmaWxlczogZmlsZXMubWFwKGYgPT4gZi5uYW1lKSxcbiAgICAgIGZpbGVEZXNjcmlwdGlvbnMsXG4gICAgfVxuICAgIHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBsb2NhbFN1Ym1pdChjbGllbnQpfVxuICAgICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIFRoaW5rIGFib3V0IGluY2x1ZGluZyB0aGluZ3Mgc3VjaCBhczpcbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDxVbD5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmRldGFpbDFcIj5cbiAgICAgICAgICAgICAgICAgICAgV2hvIHRoZSBzY2FtbWVyIGNsYWltZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT57JyAnfVxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsMlwiPlxuICAgICAgICAgICAgICAgICAgICBXaGVyZSB0aGV5IGFza2VkIHlvdSB0byBzZW5kIHRoaW5nc1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsM1wiPlxuICAgICAgICAgICAgICAgICAgICBXaGF0IGxhbmd1YWdlIHRoZXkgdXNlZCB0byBjb21tdW5pY2F0ZVxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsNFwiPlxuICAgICAgICAgICAgICAgICAgICBBbnkgc2NyZWVuc2hvdHMsIG1lc3NhZ2VzLCBvciByZWNlaXB0c1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICA8L1VsPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5zdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2hhdCBkbyB5b3Uga25vdyBhYm91dCB3aGVyZSB0aGUgc2NhbSBjYW1lIGZyb20/XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGFya0dyYXlcIiBtdD1cIjZweFwiIG1iPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwucmVtaW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciB0byBpbmNsdWRlIGFueSBlbWFpbCBhZGRyZXNzZXMsIHBob25lIG51bWJlcnMsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZSBsaW5rc1xuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGlucHV0PXt7IHZhbHVlOiBzY2FtbWVyRGV0YWlscywgb25DaGFuZ2UgfX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2FtbWVyRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICBpZD1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCA1LCA1XX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiMC42cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A9XCIwLjZyZW1cIlxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwidXBsb2FkIGljb25cIiBzcmM9e3VwbG9hZH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmFkZEZpbGVCdXR0b21cIj5BZGQgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0gbGluZUhlaWdodD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0gyPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5fKHN0YXR1cyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEgzIG1hcmdpblRvcD17WzQsIG51bGwsIDVdfSBmb250U2l6ZT17WzIsIG51bGwsIDRdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5maWxlRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpYmUgd2hhdCB0aGlzIGZpbGUgc2hvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IGZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5yZW1vdmVGaWxlQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmUgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICAgIG5leHRQYWdlPVwiSW1wYWN0IG9mIHNjYW1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gIClcbn1cblxuU2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZC5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGllbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgY2xpZW50PXtjbGllbnR9IHsuLi5wcm9wc30gLz59XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG4iXX0= */"
};

var _ref2 =  false ? undefined : {
  name: "5uezzw-ScammerDetailsFormWrapped",
  styles: ":focus{outline:0px solid transparent;}label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvU2NhbW1lckRldGFpbHNGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1MZ0MiLCJmaWxlIjoiL1VzZXJzL2tldmlueWFuZy9wcm9qZWN0cy9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMi9mb3Jtcy9TY2FtbWVyRGV0YWlsc0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0QXJlYSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdGV4dC1hcmVhJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDIsIEgzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5pbXBvcnQgeyBVbCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QnXG5pbXBvcnQgeyBMaSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1pdGVtJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFNjYW1tZXJEZXRhaWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB1cGxvYWQgZnJvbSAnLi4vLi4vaW1hZ2VzL3VwbG9hZC5zdmcnXG5cbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNsaWVudCB9ID0gcHJvcHNcbiAgY29uc3QgY2FjaGVkID0gZ2V0U2NhbW1lckRldGFpbHMoY2xpZW50KVxuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKGNhY2hlZC5maWxlcy5tYXAoZmlsZSA9PiAoeyBuYW1lOiBmaWxlIH0pKSlcbiAgY29uc3QgW2ZpbGVEZXNjcmlwdGlvbnMsIHNldEZpbGVEZXNjcmlwdGlvbnNdID0gdXNlU3RhdGUoXG4gICAgY2FjaGVkLmZpbGVEZXNjcmlwdGlvbnMsXG4gIClcbiAgY29uc3QgW3NjYW1tZXJEZXRhaWxzLCBzZXRTY2FtbWVyRGV0YWlsc10gPSB1c2VTdGF0ZShjYWNoZWQuc2NhbW1lckRldGFpbHMpXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcbiAgaTE4bk1hcmsoJ2ZpbGVVcGxvYWQucmVtb3ZlZCcpXG4gIGkxOG5NYXJrKCdmaWxlVXBsb2FkLmFkZGVkJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykuZm9jdXMoKVxuICAgIH1cbiAgfSwgW3N0YXR1c10pXG5cbiAgY29uc3Qgb25DaGFuZ2UgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdzY2FtbWVyRGV0YWlscycpIHtcbiAgICAgIHNldFNjYW1tZXJEZXRhaWxzKGUudGFyZ2V0LnZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQuaW5kZXhPZignZmlsZS1kZXNjcmlwdGlvbicpID4gLTEpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKGUudGFyZ2V0LmlkLnN1YnN0cmluZygxNykpXG4gICAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmlsZURlc2NyaXB0aW9ucykpXG4gICAgICBuZXdGaWxlRGVzY3JpcHRpb25zW2luZGV4XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgc2V0U3RhdHVzKCdmaWxlVXBsb2FkLmFkZGVkJylcbiAgICAgIHNldEZpbGVzKGZpbGVzLmNvbmNhdChlLnRhcmdldC5maWxlc1swXSkpXG4gICAgICBzZXRGaWxlRGVzY3JpcHRpb25zKGZpbGVEZXNjcmlwdGlvbnMuY29uY2F0KCcnKSlcbiAgICB9XG4gIH1cblxuICBjb25zdCByZW1vdmVGaWxlID0gaW5kZXggPT4ge1xuICAgIGxldCBuZXdGaWxlcyA9IGZpbGVzLmZpbHRlcigoXywgZmlsZUluZGV4KSA9PiBpbmRleCAhPSBmaWxlSW5kZXgpXG4gICAgbGV0IG5ld0ZpbGVEZXNjcmlwdGlvbnMgPSBmaWxlRGVzY3JpcHRpb25zLmZpbHRlcihcbiAgICAgIChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleCxcbiAgICApXG4gICAgc2V0RmlsZXMobmV3RmlsZXMpXG4gICAgc2V0RmlsZURlc2NyaXB0aW9ucyhuZXdGaWxlRGVzY3JpcHRpb25zKVxuICAgIHNldFN0YXR1cygnZmlsZVVwbG9hZC5yZW1vdmVkJylcbiAgfVxuXG4gIGNvbnN0IGxvY2FsU3VibWl0ID0gY2xpZW50ID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgc2NhbW1lckRldGFpbHMsXG4gICAgICBmaWxlczogZmlsZXMubWFwKGYgPT4gZi5uYW1lKSxcbiAgICAgIGZpbGVEZXNjcmlwdGlvbnMsXG4gICAgfVxuICAgIHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Db25zdW1lcj5cbiAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG9uU3VibWl0PXsoKSA9PiBsb2NhbFN1Ym1pdChjbGllbnQpfVxuICAgICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0IH0pID0+IChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8UD5cbiAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIFRoaW5rIGFib3V0IGluY2x1ZGluZyB0aGluZ3Mgc3VjaCBhczpcbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDxVbD5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmRldGFpbDFcIj5cbiAgICAgICAgICAgICAgICAgICAgV2hvIHRoZSBzY2FtbWVyIGNsYWltZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT57JyAnfVxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsMlwiPlxuICAgICAgICAgICAgICAgICAgICBXaGVyZSB0aGV5IGFza2VkIHlvdSB0byBzZW5kIHRoaW5nc1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsM1wiPlxuICAgICAgICAgICAgICAgICAgICBXaGF0IGxhbmd1YWdlIHRoZXkgdXNlZCB0byBjb21tdW5pY2F0ZVxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsNFwiPlxuICAgICAgICAgICAgICAgICAgICBBbnkgc2NyZWVuc2hvdHMsIG1lc3NhZ2VzLCBvciByZWNlaXB0c1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICA8L1VsPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5zdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgV2hhdCBkbyB5b3Uga25vdyBhYm91dCB3aGVyZSB0aGUgc2NhbSBjYW1lIGZyb20/XG4gICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGFya0dyYXlcIiBtdD1cIjZweFwiIG1iPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwucmVtaW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciB0byBpbmNsdWRlIGFueSBlbWFpbCBhZGRyZXNzZXMsIHBob25lIG51bWJlcnMsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZSBsaW5rc1xuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGlucHV0PXt7IHZhbHVlOiBzY2FtbWVyRGV0YWlscywgb25DaGFuZ2UgfX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2FtbWVyRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICBpZD1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCA1LCA1XX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiMC42cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A9XCIwLjZyZW1cIlxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwidXBsb2FkIGljb25cIiBzcmM9e3VwbG9hZH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmFkZEZpbGVCdXR0b21cIj5BZGQgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0gbGluZUhlaWdodD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0gyPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5fKHN0YXR1cyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEgzIG1hcmdpblRvcD17WzQsIG51bGwsIDVdfSBmb250U2l6ZT17WzIsIG51bGwsIDRdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5maWxlRGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpYmUgd2hhdCB0aGlzIGZpbGUgc2hvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IGZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5yZW1vdmVGaWxlQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW1vdmUgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgYnV0dG9uTGluaz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICAgIG5leHRQYWdlPVwiSW1wYWN0IG9mIHNjYW1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQXBvbGxvQ29uc3VtZXI+XG4gIClcbn1cblxuU2NhbW1lckRldGFpbHNGb3JtV3JhcHBlZC5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGllbnQ6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gPFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgY2xpZW50PXtjbGllbnR9IHsuLi5wcm9wc30gLz59XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG4iXX0= */"
};

var ScammerDetailsFormWrapped = function ScammerDetailsFormWrapped(props) {
  var client = props.client;
  var cached = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_19__["getScammerDetails"])(client);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cached.files.map(function (file) {
    return {
      name: file
    };
  })),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cached.fileDescriptions),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      fileDescriptions = _useState4[0],
      setFileDescriptions = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(cached.scammerDetails),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      scammerDetails = _useState6[0],
      setScammerDetails = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      status = _useState8[0],
      setStatus = _useState8[1];

  Object(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["i18nMark"])('fileUpload.removed');
  Object(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["i18nMark"])('fileUpload.added');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (status) {
      document.getElementById('status').focus();
    }
  }, [status]);

  var onChange = function onChange(e) {
    if (e.target.id === 'scammerDetails') {
      setScammerDetails(e.target.value);
    } else if (e.target.id.indexOf('file-description') > -1) {
      var index = Number(e.target.id.substring(17));
      var newFileDescriptions = JSON.parse(JSON.stringify(fileDescriptions));
      newFileDescriptions[index] = e.target.value;
      setFileDescriptions(newFileDescriptions);
    } else if (e.target.files && e.target.files[0]) {
      setStatus('fileUpload.added');
      setFiles(files.concat(e.target.files[0]));
      setFileDescriptions(fileDescriptions.concat(''));
    }
  };

  var removeFile = function removeFile(index) {
    var newFiles = files.filter(function (_, fileIndex) {
      return index != fileIndex;
    });
    var newFileDescriptions = fileDescriptions.filter(function (_, fileIndex) {
      return index != fileIndex;
    });
    setFiles(newFiles);
    setFileDescriptions(newFileDescriptions);
    setStatus('fileUpload.removed');
  };

  var localSubmit = function localSubmit(client) {
    var data = {
      scammerDetails: scammerDetails,
      files: files.map(function (f) {
        return f.name;
      }),
      fileDescriptions: fileDescriptions
    };
    props.onSubmit(client, data);
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Form"], {
      onSubmit: function onSubmit() {
        return localSubmit(client);
      },
      render: function render(_ref3) {
        var handleSubmit = _ref3.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_14__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.details",
          defaults: "Think about including things such as:"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_unordered_list__WEBPACK_IMPORTED_MODULE_15__["Ul"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.detail1",
          defaults: "Who the scammer claimed to be"
        })), ' ', Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.detail2",
          defaults: "Where they asked you to send things"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.detail3",
          defaults: "What language they used to communicate"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_list_item__WEBPACK_IMPORTED_MODULE_16__["Li"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.detail4",
          defaults: "Any screenshots, messages, or receipts"
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
          htmlFor: "scammerDetails"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.summary",
          defaults: "What do you know about where the scam came from?"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
          color: "darkGray",
          mt: "6px",
          mb: "8px"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.reminder",
          defaults: "Remember to include any email addresses, phone numbers, or website links"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
          input: {
            value: scammerDetails,
            onChange: onChange
          },
          name: "scammerDetails",
          id: "scammerDetails",
          component: TextAreaAdapter,
          height: "100px",
          width: "100%"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], {
          marginTop: [2, null, 5],
          marginBottom: [2, 5, 5],
          display: "flex",
          flexDirection: "row",
          justifyContent: ['flex-start', 'center', 'flex-start'],
          textAlign: "center"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_file_upload__WEBPACK_IMPORTED_MODULE_17__["FileUpload"], {
          onChange: onChange,
          width: ['auto', '100%', 'auto'],
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "0.6rem",
          paddingTop: "0.6rem",
          css: _ref
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("img", {
          alt: "upload icon",
          src: _images_upload_svg__WEBPACK_IMPORTED_MODULE_20___default.a
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
          id: "scammerDetail.addFileButtom",
          defaults: "Add file"
        })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["I18n"], null, function (_ref4) {
          var i18n = _ref4.i18n;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_13__["H2"], {
            fontSize: [4, null, 5],
            lineHeight: [4, null, 5]
          }, i18n._("{0, plural, one {# file attached} other {# files attached}}", {
            0: files.length
          })), status ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], {
            tabindex: -1,
            id: "status",
            css: _ref2
          }, i18n._(status)) : null);
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_8__["Container"], null, files.map(function (f, index) {
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
            key: index
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_13__["H3"], {
            marginTop: [4, null, 5],
            fontSize: [2, null, 4]
          }, f.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("label", {
            htmlFor: "file-description-".concat(index)
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_12__["Text"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
            id: "scammerDetail.fileDescription",
            defaults: "Describe what this file shows"
          }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_7__["Field"], {
            input: {
              value: fileDescriptions[index],
              onChange: onChange
            },
            name: "file-description-".concat(index),
            id: "file-description-".concat(index),
            component: TextAreaAdapter,
            height: "50px"
          })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
            "float": "right",
            backgroundColor: "crimson",
            type: "button",
            onClick: function onClick() {
              return removeFile(index);
            }
          }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_6__["Trans"], {
            id: "scammerDetail.removeFileButton",
            defaults: "Remove file"
          })));
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_9__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          nextPage: "Impact of scam"
        }));
      }
    });
  });
};
ScammerDetailsFormWrapped.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  client: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};
var ScammerDetailsForm = function ScammerDetailsForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(ScammerDetailsFormWrapped, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      client: client
    }, props));
  });
};

/***/ }),

/***/ "./src/p2/forms/TimeFrameInfoForm.js":
/*!*******************************************!*\
  !*** ./src/p2/forms/TimeFrameInfoForm.js ***!
  \*******************************************/
/*! exports provided: TimeFrameInfoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameInfoForm", function() { return TimeFrameInfoForm; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "@babel/runtime/helpers/assertThisInitialized");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");
/* harmony import */ var _components_TextInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/TextInput */ "./src/components/TextInput/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");










/** @jsx jsx */










var TextInputAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_17__["finalFormAdapter"])(_components_TextInput__WEBPACK_IMPORTED_MODULE_16__["TextInput"]);

var TimeFrameInfoFormWrapped =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TimeFrameInfoFormWrapped, _Component);

  function TimeFrameInfoFormWrapped() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TimeFrameInfoFormWrapped);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(TimeFrameInfoFormWrapped)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "localOnSubmit", function (client, data) {
      var onSubmit = _this.props.onSubmit;
      onSubmit(client, data);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TimeFrameInfoFormWrapped, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Form"], {
          initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_18__["getTimeFrame"])(client),
          onSubmit: function onSubmit(data) {
            return _this2.localOnSubmit(_this2.props.client, data);
          },
          render: function render(_ref) {
            var handleSubmit = _ref.handleSubmit;
            return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("form", {
              onSubmit: handleSubmit
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("label", {
              htmlFor: "startDate"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_14__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_8__["Trans"], {
              id: "timeFramePage.startDate",
              defaults: "Approximate start"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_14__["Text"], {
              color: "darkGray",
              mt: "6px",
              mb: "8px"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_8__["Trans"], {
              id: "timeFramePage.startDateExample",
              defaults: "For example: 2019-04-28"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "startDate",
              id: "startDate",
              component: TextInputAdapter,
              height: "25px",
              width: "300px"
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("label", {
              htmlFor: "endDate"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_14__["Text"], {
              marginTop: [5, null, 6]
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("strong", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_8__["Trans"], {
              id: "timeFramePage.endDate",
              defaults: "Approximate end"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_14__["Text"], {
              color: "darkGray",
              mt: "6px",
              mb: "8px"
            }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_8__["Trans"], {
              id: "timeFramePage.endDateExample",
              defaults: "For example: 2019-04-28"
            }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_13__["Field"], {
              name: "endDate",
              id: "endDate",
              component: TextInputAdapter,
              height: "25px",
              width: "300px"
            })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_15__["ButtonsContainer"], {
              cancel: true,
              buttonLink: false,
              nextPage: "What happened"
            }));
          }
        });
      });
    }
  }]);

  return TimeFrameInfoFormWrapped;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

TimeFrameInfoFormWrapped.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
var TimeFrameInfoForm = function TimeFrameInfoForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_12__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(TimeFrameInfoFormWrapped, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      client: client
    }, props));
  });
};

/***/ }),

/***/ "./src/p2/forms/WhatHappenedForm.js":
/*!******************************************!*\
  !*** ./src/p2/forms/WhatHappenedForm.js ***!
  \******************************************/
/*! exports provided: WhatHappenedForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatHappenedForm", function() { return WhatHappenedForm; });
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_text_area__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/text-area */ "./src/components/text-area/index.js");
/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/text */ "./src/components/text/index.js");
/* harmony import */ var _utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/finalFormAdapter */ "./src/utils/finalFormAdapter.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _components_buttons_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/buttons-container */ "./src/components/buttons-container/index.js");


/** @jsx jsx */









var TextAreaAdapter = Object(_utils_finalFormAdapter__WEBPACK_IMPORTED_MODULE_7__["finalFormAdapter"])(_components_text_area__WEBPACK_IMPORTED_MODULE_5__["TextArea"]);
var WhatHappenedForm = function WhatHappenedForm(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloConsumer"], null, function (client) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      initialValues: Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_8__["getWhatHappened"])(client),
      onSubmit: function onSubmit(data) {
        return props.onSubmit(client, data);
      },
      render: function render(_ref) {
        var handleSubmit = _ref.handleSubmit;
        return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("form", {
          onSubmit: handleSubmit
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "whatHappened"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          marginTop: [5, null, 6]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "whatHappendPage.summary",
          defaults: "<0>What happened?</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          color: "darkGray",
          mt: "6px",
          mb: "8px"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "whatHappendPage.hint",
          defaults: "Tell us about it in your own words."
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Field"], {
          name: "whatHappened",
          id: "whatHappened",
          component: TextAreaAdapter,
          height: "100px",
          width: "100%"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_buttons_container__WEBPACK_IMPORTED_MODULE_9__["ButtonsContainer"], {
          buttonLink: false,
          cancel: true,
          nextPage: "Scammer details"
        }));
      }
    });
  });
};
WhatHappenedForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LanguageSwitching__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LanguageSwitching */ "./src/LanguageSwitching.js");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet-async */ "react-helmet-async");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var express_request_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! express-request-language */ "express-request-language");
/* harmony import */ var express_request_language__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(express_request_language__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./App */ "./src/App.js");














var AWS = __webpack_require__(/*! aws-sdk */ "aws-sdk");

var uuidv4 = __webpack_require__(/*! uuid/v4 */ "uuid/v4");


var assets, publicDir;
var _process$env = process.env,
    S3_ACCESS_ID = _process$env.S3_ACCESS_ID,
    S3_ACCESS_SECRET = _process$env.S3_ACCESS_SECRET,
    S3_BUCKET = _process$env.S3_BUCKET,
    RAZZLE_SERVER_SIDE_API_URI = _process$env.RAZZLE_SERVER_SIDE_API_URI;
var s3;

if (!S3_ACCESS_ID || !S3_ACCESS_SECRET || !S3_BUCKET) {
  console.log('\nWARNING: Missing S3 config. will not upload to S3\n');
} else {
  s3 = new AWS.S3({
    accessKeyId: S3_ACCESS_ID,
    secretAccessKey: S3_ACCESS_SECRET
  });
}

var uploadData = function uploadData(data) {
  var params = {
    Bucket: S3_BUCKET,
    Key: uuidv4(),
    // File name you want to save as in S3
    Body: JSON.stringify(data, null, 4)
  }; // Uploading files to the bucket

  if (s3) {
    s3.upload(params, function (err, data) {
      if (err) {
        throw err;
      }

      console.log("File uploaded successfully. ".concat(data.Location));
    });
  }
};

if (false) {} else {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
  publicDir = "/Users/kevinyang/projects/report-a-cybercrime/frontend/public";
}

var server = express__WEBPACK_IMPORTED_MODULE_10___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_10___default.a["static"](publicDir)).use(express_request_language__WEBPACK_IMPORTED_MODULE_11___default()({
  languages: ['en', 'fr']
})).get('/assets', function (_req, res) {
  res.status(200).send(JSON.stringify(assets));
}).get('/monitoring/alive', function (_req, res) {
  res.status(200).send('yes');
}).use('/public', express__WEBPACK_IMPORTED_MODULE_10___default.a["static"](__dirname + '/public')).use('/static', express__WEBPACK_IMPORTED_MODULE_10___default.a["static"]('static')).use(express__WEBPACK_IMPORTED_MODULE_10___default.a.json()).get('/monitoring/ready', function (_req, res) {
  res.status(200).send('yes');
}).post('/submit', function (req, res) {
  var data = req.body;
  uploadData(data);
  res.send('POST response');
}).get('/*',
/*#__PURE__*/
function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    var cache, client, helmetContext, markup, helmet;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"](); // Add defaults for form fields

            cache.writeData({
              data: {
                language: req.language,
                doneForms: false,
                scamInfo: JSON.stringify({}),
                lostMoney: JSON.stringify({}),
                suspectInfo: JSON.stringify({}),
                files: [],
                contactInfo: JSON.stringify({}),
                timeFrame: JSON.stringify({}),
                whatHappened: JSON.stringify({}),
                scammerDetails: JSON.stringify({}),
                impact: JSON.stringify({}),
                tellUsMore: JSON.stringify({}),
                surveyInfo: JSON.stringify({})
              }
            });
            client = new apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
              ssrMode: true,
              link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
                uri: RAZZLE_SERVER_SIDE_API_URI,
                fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default.a
              }),
              cache: cache,
              resolvers: {}
            });
            helmetContext = {};
            _context.prev = 4;
            _context.next = 7;
            return Object(react_apollo__WEBPACK_IMPORTED_MODULE_7__["renderToStringWithData"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_9__["HelmetProvider"], {
              context: helmetContext
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
              client: client
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_12__["ServerLocation"], {
              url: req.url
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LanguageSwitching__WEBPACK_IMPORTED_MODULE_8__["LanguageSwitching"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_13__["default"], null))))));

          case 7:
            markup = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            // eslint-disable-next-line no-console
            console.error('Data fetching during SSR Failed:', _context.t0);

          case 13:
            helmet = helmetContext.helmet;
            res.set({
              'Content-Language': req.language
            }).status(200).send("<!DOCTYPE html>\n      <html ".concat(helmet.htmlAttributes.toString(), ">\n        <head>\n          ").concat(helmet.title.toString(), " ").concat(helmet.meta.toString(), "\n          ").concat(helmet.link.toString(), "\n          ").concat(assets.client.css ? "<link rel=\"stylesheet\" href=\"".concat(assets.client.css, "\">") : '', "\n          ").concat( false ? undefined : "<script src=\"".concat(assets.client.js, "\" defer crossorigin></script>"), "\n        </head>\n        <body ").concat(helmet.bodyAttributes.toString(), ">\n          <div id=\"root\">").concat(markup, "</div>\n        </body>\n      </html>"));

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: BREAKPOINTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
var FONT_SIZES = ['12rem', '14px', '16px', '19px', '24px', '27px', '36px', '48px', '80px'];
var LINE_HEIGHTS = [15 / 12, 20 / 14, 20 / 16, 25 / 19, 30 / 24, 30 / 27, 40 / 36, 50 / 48, 80 / 80];
var SPACING = ['0px', '5px', '10px', '15px', '20px', '30px', '40px', '50px'];
var BREAKPOINTS = ['320px', '641px', '769px'];
var colors = {
  white: '#FFF',
  black: '#000',
  blue: '#003a66',
  lightBlue: '#2b8cc4',
  purple: '#4c2c92',
  yellow: '#ffbf47',
  focusColor: '#ffbf47',
  infoCard: '#e8e8e8',
  crimson: '#dc143c',
  green: '#008000',
  darkGreen: '#00692f',
  darkGray: '#767676'
};
var theme = {
  fontSans: 'robotoregular, sans-serif',
  fontSizes: FONT_SIZES,
  lineHeights: LINE_HEIGHTS,
  space: SPACING,
  breakpoints: BREAKPOINTS,
  checkboxes: {
    size: '24px',
    labelSize: '28px'
  },
  radioButtons: {
    size: '24px',
    labelSize: '28px'
  },
  colors: colors,
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em'
    }
  },
  colorStyles: {
    link: {
      color: colors.blue,
      '&:focus': {
        backgroundColor: colors.focusColor,
        outline: "3px solid ".concat(colors.focusColor)
      },
      '&:visited': {
        color: colors.purple
      },
      '&:hover': {
        color: colors.lightBlue
      }
    },
    button: {
      cursor: 'pointer',
      color: colors.white,
      backgroundColor: colors.green,
      '&:focus': {
        outline: "3px solid ".concat(colors.focusColor)
      },
      '&:hover': {
        backgroundColor: colors.darkGreen
      }
    },
    footerLink: {
      color: '#FFF',
      '&:focus': {
        outline: "3px solid ".concat(colors.focusColor)
      }
    },
    inputField: {
      color: colors.black,
      '&:focus': {
        outline: "3px solid ".concat(colors.focusColor)
      }
    },
    textArea: {
      color: colors.black,
      '&:focus': {
        outline: "3px solid ".concat(colors.focusColor)
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/utils/asAnchor.js":
/*!*******************************!*\
  !*** ./src/utils/asAnchor.js ***!
  \*******************************/
/*! exports provided: asAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asAnchor", function() { return asAnchor; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled-base */ "@emotion/styled-base");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cleanProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cleanProps */ "./src/utils/cleanProps.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var asAnchor = function asAnchor(AnchorType) {
  var Anchor = function Anchor(props) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(AnchorType, props, props.children);
  };

  Anchor.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
  };

  var StyledAnchor =
  /*#__PURE__*/
  _emotion_styled_base__WEBPACK_IMPORTED_MODULE_1___default()(Anchor, {
    shouldForwardProp: function shouldForwardProp(prop) {
      return Object(_cleanProps__WEBPACK_IMPORTED_MODULE_4__["cleanProps"])(prop);
    },
    target: "exrd7iu0",
    label: "StyledAnchor"
  })("font-family:", function (_ref) {
    var theme = _ref.theme;
    return theme.fontSans;
  }, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvdXRpbHMvYXNBbmNob3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JJIiwiZmlsZSI6Ii9Vc2Vycy9rZXZpbnlhbmcvcHJvamVjdHMvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvdXRpbHMvYXNBbmNob3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7XG4gIGZvbnRTaXplLFxuICBsaW5lSGVpZ2h0LFxuICBzcGFjZSxcbiAgZm9udFdlaWdodCxcbiAgY29sb3JTdHlsZSxcbiAgZGlzcGxheSxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuL2NsZWFuUHJvcHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBhc0FuY2hvciA9IEFuY2hvclR5cGUgPT4ge1xuICBjb25zdCBBbmNob3IgPSBwcm9wcyA9PiA8QW5jaG9yVHlwZSB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0FuY2hvclR5cGU+XG5cbiAgQW5jaG9yLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgfVxuXG4gIGNvbnN0IFN0eWxlZEFuY2hvciA9IHN0eWxlZChBbmNob3IsIHtcbiAgICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxuICB9KWBcbiAgICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gICAgbWFyZ2luOiAwO1xuICAgICR7Zm9udFNpemV9O1xuICAgICR7bGluZUhlaWdodH07XG4gICAgJHtzcGFjZX07XG4gICAgJHtjb2xvclN0eWxlfTtcbiAgICAke2ZvbnRXZWlnaHR9O1xuICAgICR7ZGlzcGxheX07XG4gIGBcblxuICBTdHlsZWRBbmNob3IucHJvcFR5cGVzID0ge1xuICAgIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlcyxcbiAgICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gICAgLi4uY29sb3JTdHlsZS5wcm9wVHlwZXMsXG4gICAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gICAgLi4uZGlzcGxheS5wcm9wVHlwZXMsXG4gIH1cblxuICByZXR1cm4gU3R5bGVkQW5jaG9yXG59XG4iXX0= */"));

  StyledAnchor.propTypes = _objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_3__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_3__["display"].propTypes);
  return StyledAnchor;
};

/***/ }),

/***/ "./src/utils/cleanProps.js":
/*!*********************************!*\
  !*** ./src/utils/cleanProps.js ***!
  \*********************************/
/*! exports provided: cleanProps, styledSystemProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanProps", function() { return cleanProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styledSystemProps", function() { return styledSystemProps; });
var cleanProps = function cleanProps(prop) {
  if (!styledSystemProps.includes(prop) && prop !== 'as') return true;
  return false;
};
var styledSystemProps = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'color', 'bg', 'backgroundColor', 'width', 'fontSize', 'fontWeight', 'lineHeight', 'textAlign', 'fontStyle', 'letterSpacing', 'display', 'maxWidth', 'minWidth', 'height', 'minHeight', 'maxHeight', 'size', 'verticalAlign', 'alignItems', 'alignContent', 'justifyItems', 'justifyContent', 'flexWrap', 'flexBasis', 'flexDirection', 'flex', 'justifySelf', 'alignSelf', 'order', 'gridGap', 'gridColumnGap', 'gridRowGap', 'gridColumn', 'gridRow', 'gridAutoFlow', 'gridAutoColumns', 'gridAutoRows', 'gridTemplateColumns', 'gridTemplateRows', 'gridTemplateAreas', 'gridArea', 'border', 'borderWidth', 'borderStyle', 'borderColor', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'borderRadius', 'borders', 'boxShadow', 'opacity', 'overflow', 'background', 'backgroundImage', 'backgroundSize', 'backgroundPosition', 'backgroundRepeat', 'position', 'zIndex', 'top', 'right', 'bottom', 'left', 'buttons', 'textStyles', 'colorStyles', 'colors'];

/***/ }),

/***/ "./src/utils/finalFormAdapter.js":
/*!***************************************!*\
  !*** ./src/utils/finalFormAdapter.js ***!
  \***************************************/
/*! exports provided: finalFormAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalFormAdapter", function() { return finalFormAdapter; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var finalFormAdapter = function finalFormAdapter(Input) {
  var FinalFormInput = function FinalFormInput(_ref) {
    var input = _ref.input,
        rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["input"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Input, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, input, rest));
  };

  FinalFormInput.propTypes = {
    input: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape(_objectSpread({
      value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired,
      onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
      onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
    }, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontSize"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["fontWeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["lineHeight"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["space"].propTypes, {}, styled_system__WEBPACK_IMPORTED_MODULE_5__["color"].propTypes))
  };
  return FinalFormInput;
};

/***/ }),

/***/ "./src/utils/queriesAndMutations.js":
/*!******************************************!*\
  !*** ./src/utils/queriesAndMutations.js ***!
  \******************************************/
/*! exports provided: GET_LANGUAGE_QUERY, FLAGGINGS_WITHIN, GET_STATS_QUERY, FLAG_IDENTIFIER_MUTATION, SUBMIT_REPORT_MUTATION, UPLOAD_FILE_MUTATION, getDoneForms, getSurveyInfo, getScamInfo, getLostMoney, getSuspectInfo, getFiles, getContactInfo, getTimeFrame, getWhatHappened, getScammerDetails, getImpact, getP2ContactInfo, getTellUsMore, SUBMIT_P2_REPORT_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LANGUAGE_QUERY", function() { return GET_LANGUAGE_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAGGINGS_WITHIN", function() { return FLAGGINGS_WITHIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATS_QUERY", function() { return GET_STATS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLAG_IDENTIFIER_MUTATION", function() { return FLAG_IDENTIFIER_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_REPORT_MUTATION", function() { return SUBMIT_REPORT_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FILE_MUTATION", function() { return UPLOAD_FILE_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDoneForms", function() { return getDoneForms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSurveyInfo", function() { return getSurveyInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScamInfo", function() { return getScamInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLostMoney", function() { return getLostMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuspectInfo", function() { return getSuspectInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiles", function() { return getFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContactInfo", function() { return getContactInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeFrame", function() { return getTimeFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWhatHappened", function() { return getWhatHappened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScammerDetails", function() { return getScammerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImpact", function() { return getImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getP2ContactInfo", function() { return getP2ContactInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTellUsMore", function() { return getTellUsMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMIT_P2_REPORT_MUTATION", function() { return SUBMIT_P2_REPORT_MUTATION; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "@babel/runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject20() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation submitReportP2(\n    $source: String!\n    $timeFrame: timeFrame!\n    $whatHappened: whatHappened!\n    $impact: impact!\n    $scammerDetails: scammerDetails!\n    $contactInfo: P2ContactInfoInput!\n    $surveyInfo: surveyInfo!\n  ) {\n    submitReportP2(\n      source: $source\n      timeFrame: $timeFrame\n      whatHappened: $whatHappened\n      impact: $impact\n      scammerDetails: $scammerDetails\n      contactInfo: $contactInfo\n      surveyInfo: $surveyInfo\n    ) {\n      reportID\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        tellUsMore\n      }\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        contactInfo\n      }\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        impact\n      }\n    "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        scammerDetails\n      }\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        whatHappened\n      }\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        timeFrame\n      }\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        contactInfo\n      }\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        files\n      }\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        suspectInfo\n      }\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        lostMoney\n      }\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        scamInfo\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        surveyInfo\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      query readCache {\n        doneForms\n      }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation uploadFile($file: Upload!, $fileDescription: String!) {\n    uploadFile(file: $file, fileDescription: $fileDescription) {\n      success\n      errorMessage\n      md5\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation submitReport(\n    $source: String!\n    $scamInfo: scamInfoInput!\n    $lostMoney: lostMoneyInput!\n    $suspectInfo: suspectInfoInput!\n    $files: [String]!\n    $contactInfo: contactInfoInput!\n    $surveyInfo: surveyInfo!\n  ) {\n    submitReport(\n      source: $source\n      scamInfo: $scamInfo\n      lostMoney: $lostMoney\n      suspectInfo: $suspectInfo\n      files: $files\n      contactInfo: $contactInfo\n      surveyInfo: $surveyInfo\n    ) {\n      reportID\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  mutation flagIdentifier($identifier: String) {\n    flagIdentifier(identifier: $identifier) {\n      identifier\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query GetStats {\n    stats {\n      reportCount\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query($identifier: String!, $startDate: DateTime!, $endDate: DateTime!) {\n    stats {\n      flaggingsWithin(\n        identifier: $identifier\n        startDate: $startDate\n        endDate: $endDate\n      ) {\n        identifier\n        summaryTotal\n        summary {\n          date\n          total\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  query GetLanguage {\n    language @client\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_LANGUAGE_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var FLAGGINGS_WITHIN = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var GET_STATS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var FLAG_IDENTIFIER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());
var SUBMIT_REPORT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());
var UPLOAD_FILE_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject6());
var getDoneForms = function getDoneForms(client) {
  var _client$readQuery = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject7())
  }),
      doneForms = _client$readQuery.doneForms;

  return doneForms;
};
var getSurveyInfo = function getSurveyInfo(client) {
  var _client$readQuery2 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject8())
  }),
      surveyInfo = _client$readQuery2.surveyInfo;

  var _JSON$parse = JSON.parse(surveyInfo),
      surveyID = _JSON$parse.surveyID,
      ResponseID = _JSON$parse.ResponseID;

  return {
    surveyID: surveyID ? surveyID : '',
    ResponseID: ResponseID ? ResponseID : ''
  };
}; // P1 cache queries

var getScamInfo = function getScamInfo(client) {
  var _client$readQuery3 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject9())
  }),
      scamInfo = _client$readQuery3.scamInfo;

  var _JSON$parse2 = JSON.parse(scamInfo),
      howWereYouContacted = _JSON$parse2.howWereYouContacted,
      otherMethodOfContact = _JSON$parse2.otherMethodOfContact,
      whenWereYouContacted = _JSON$parse2.whenWereYouContacted,
      scamDetails = _JSON$parse2.scamDetails;

  return {
    howWereYouContacted: howWereYouContacted ? howWereYouContacted : [],
    otherMethodOfContact: otherMethodOfContact ? otherMethodOfContact : '',
    whenWereYouContacted: whenWereYouContacted ? whenWereYouContacted : '',
    scamDetails: scamDetails ? scamDetails : ''
  };
};
var getLostMoney = function getLostMoney(client) {
  var _client$readQuery4 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject10())
  }),
      lostMoney = _client$readQuery4.lostMoney;

  var _JSON$parse3 = JSON.parse(lostMoney),
      lostAmount = _JSON$parse3.lostAmount,
      lostCurrency = _JSON$parse3.lostCurrency,
      lostOtherCurrency = _JSON$parse3.lostOtherCurrency,
      lostMethodsOfPayment = _JSON$parse3.lostMethodsOfPayment,
      lostOtherMethodOfPayment = _JSON$parse3.lostOtherMethodOfPayment;

  return {
    lostAmount: lostAmount ? lostAmount : '',
    lostCurrency: lostCurrency ? lostCurrency : '',
    lostOtherCurrency: lostOtherCurrency ? lostOtherCurrency : '',
    lostMethodsOfPayment: lostMethodsOfPayment ? lostMethodsOfPayment : [],
    lostOtherMethodOfPayment: lostOtherMethodOfPayment ? lostOtherMethodOfPayment : ''
  };
};
var getSuspectInfo = function getSuspectInfo(client) {
  var _client$readQuery5 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject11())
  }),
      suspectInfo = _client$readQuery5.suspectInfo;

  var _JSON$parse4 = JSON.parse(suspectInfo),
      suspectName = _JSON$parse4.suspectName,
      suspectAddress = _JSON$parse4.suspectAddress,
      suspectLanguage = _JSON$parse4.suspectLanguage,
      otherSuspectLanguage = _JSON$parse4.otherSuspectLanguage,
      suspectPhone = _JSON$parse4.suspectPhone,
      suspectEmail = _JSON$parse4.suspectEmail,
      suspectWebsite = _JSON$parse4.suspectWebsite,
      suspectIP = _JSON$parse4.suspectIP;

  return {
    suspectName: suspectName ? suspectName : '',
    suspectAddress: suspectAddress ? suspectAddress : '',
    suspectLanguage: suspectLanguage ? suspectLanguage : [],
    otherSuspectLanguage: otherSuspectLanguage ? otherSuspectLanguage : '',
    suspectPhone: suspectPhone ? suspectPhone : '',
    suspectEmail: suspectEmail ? suspectEmail : '',
    suspectWebsite: suspectWebsite ? suspectWebsite : '',
    suspectIP: suspectIP ? suspectIP : ''
  };
};
var getFiles = function getFiles(client) {
  var _client$readQuery6 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject12())
  }),
      files = _client$readQuery6.files;

  return files ? files : [];
};
var getContactInfo = function getContactInfo(client) {
  var _client$readQuery7 = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject13())
  }),
      contactInfo = _client$readQuery7.contactInfo;

  var _JSON$parse5 = JSON.parse(contactInfo),
      userIsTheVictim = _JSON$parse5.userIsTheVictim,
      contactInfoName = _JSON$parse5.contactInfoName,
      contactInfoEmail = _JSON$parse5.contactInfoEmail,
      contactInfoPhone = _JSON$parse5.contactInfoPhone;

  return {
    userIsTheVictim: userIsTheVictim ? userIsTheVictim : '',
    contactInfoName: contactInfoName ? contactInfoName : '',
    contactInfoEmail: contactInfoEmail ? contactInfoEmail : '',
    contactInfoPhone: contactInfoPhone ? contactInfoPhone : ''
  };
}; // P2 cache queries

var getTimeFrame = function getTimeFrame(client) {
  var queryResult = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject14())
  });

  var _JSON$parse6 = JSON.parse(queryResult.timeFrame),
      startDate = _JSON$parse6.startDate,
      endDate = _JSON$parse6.endDate;

  return {
    startDate: startDate ? startDate : '',
    endDate: endDate ? endDate : ''
  };
};
var getWhatHappened = function getWhatHappened(client) {
  var queryResult = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject15())
  });

  var _JSON$parse7 = JSON.parse(queryResult.whatHappened),
      whatHappened = _JSON$parse7.whatHappened;

  return {
    whatHappened: whatHappened ? whatHappened : ''
  };
};
var getScammerDetails = function getScammerDetails(client) {
  var queryResult = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject16())
  });

  var _JSON$parse8 = JSON.parse(queryResult.scammerDetails),
      scammerDetails = _JSON$parse8.scammerDetails,
      files = _JSON$parse8.files,
      fileDescriptions = _JSON$parse8.fileDescriptions;

  return {
    scammerDetails: scammerDetails ? scammerDetails : '',
    files: files ? files : [],
    fileDescriptions: fileDescriptions ? fileDescriptions : []
  };
};
var getImpact = function getImpact(client) {
  var queryResult = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject17())
  });

  var _JSON$parse9 = JSON.parse(queryResult.impact),
      howWereYouAffected = _JSON$parse9.howWereYouAffected,
      otherImpact = _JSON$parse9.otherImpact,
      damage = _JSON$parse9.damage;

  return {
    howWereYouAffected: howWereYouAffected ? howWereYouAffected : [],
    otherImpact: otherImpact ? otherImpact : '',
    damage: damage ? damage : ''
  };
};
var getP2ContactInfo = function getP2ContactInfo(client) {
  var queryResult = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject18())
  });

  var _JSON$parse10 = JSON.parse(queryResult.contactInfo),
      fullName = _JSON$parse10.fullName,
      email = _JSON$parse10.email,
      phone = _JSON$parse10.phone,
      postalCode = _JSON$parse10.postalCode;

  return {
    fullName: fullName ? fullName : '',
    email: email ? email : '',
    phone: phone ? phone : '',
    postalCode: postalCode ? postalCode : ''
  };
};
var getTellUsMore = function getTellUsMore(client) {
  var queryResult = client.readQuery({
    query: graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject19())
  });

  var _JSON$parse11 = JSON.parse(queryResult.tellUsMore),
      tellUsMore = _JSON$parse11.tellUsMore;

  return {
    tellUsMore: tellUsMore ? tellUsMore : ''
  };
};
var SUBMIT_P2_REPORT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject20());

/***/ }),

/***/ 0:
/*!**************************************************************************!*\
  !*** multi razzle-dev-utils/prettyNodeErrors webpack/hot/poll?300 ./src ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! razzle-dev-utils/prettyNodeErrors */"razzle-dev-utils/prettyNodeErrors");
__webpack_require__(/*! webpack/hot/poll?300 */"./node_modules/webpack/hot/poll.js?300");
module.exports = __webpack_require__(/*! /Users/kevinyang/projects/report-a-cybercrime/frontend/src */"./src/index.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/assertThisInitialized" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/helpers/typeof":
/*!************************************************!*\
  !*** external "@babel/runtime/helpers/typeof" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@cdssnc/logdriver":
/*!************************************!*\
  !*** external "@cdssnc/logdriver" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@cdssnc/logdriver");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled-base":
/*!***************************************!*\
  !*** external "@emotion/styled-base" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "@lingui/react":
/*!********************************!*\
  !*** external "@lingui/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@lingui/react");

/***/ }),

/***/ "@reach/component-component":
/*!*********************************************!*\
  !*** external "@reach/component-component" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/component-component");

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-request-language":
/*!*******************************************!*\
  !*** external "express-request-language" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-request-language");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "razzle-dev-utils/prettyNodeErrors":
/*!****************************************************!*\
  !*** external "razzle-dev-utils/prettyNodeErrors" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("razzle-dev-utils/prettyNodeErrors");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-helmet-async":
/*!*************************************!*\
  !*** external "react-helmet-async" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet-async");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map