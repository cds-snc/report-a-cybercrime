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
/******/ 	var hotCurrentHash = "9019d5bd05464ce7d51f";
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

/* eslint-disable */module.exports={languageData:{"plurals":function(n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}},messages:{": Add files":": Add files",": Clues about the suspect":": Clues about the suspect",": Contact information":": Contact information",": Impact of the scam":": Impact of the scam",": Money lost":": Money lost",": Review report":": Review report",": What happened":": What happened","<0>Amount of money</0>":"<0>Amount of money</0>","<0>Approximate end</0>":"<0>Approximate end</0>","<0>Approximate start</0>":"<0>Approximate start</0>","<0>Currency</0>":"<0>Currency</0>","<0>Email address</0>":"<0>Email address</0>","<0>Full name</0>":"<0>Full name</0>","<0>How did it start?</0>":"<0>How did it start?</0>","<0>How did you pay the scammer?</0>":"<0>How did you pay the scammer?</0>","<0>IP address</0>":"<0>IP address</0>","<0>Language of communications</0>":"<0>Language of communications</0>","<0>Mailing address</0>":"<0>Mailing address</0>","<0>Name</0>":"<0>Name</0>","<0>Phone number</0>":"<0>Phone number</0>","<0>Postal code</0>":"<0>Postal code</0>","<0>Tell us more about how it impacted you.</0>":"<0>Tell us more about how it impacted you.</0>","<0>Website link</0>":"<0>Website link</0>","<0>What do you know about where the scam came from?</0>":"<0>What do you know about where the scam came from?</0>","<0>What happened?</0>":"<0>What happened?</0>","<0>What happens next</0>":"<0>What happens next</0>","<0>What was the impact of the scam?</0>":"<0>What was the impact of the scam?</0>","<0>When did it start?</0>":"<0>When did it start?</0>","<0>Where you can get help</0>":"<0>Where you can get help</0>","<0>You have other reporting options</0>":"<0>You have other reporting options</0>","<0>\u25C0</0> <1>Back to</1> <2>{children}</2>":function(a){return["<0>\u25C0</0> <1>Back to</1> <2>",a("children"),"</2>"]},"ALPHA":"ALPHA","About the suspect":"About the suspect","Add clues about the suspect":"Add clues about the suspect","Add file":"Add file","Add suspect clues":"Add suspect clues","Amount":"Amount","Any clues about the source of the scam can help police track down the scammer.":"Any clues about the source of the scam can help police track down the scammer.","Any information about where, when, and how the scam took place is helpful for police.":"Any information about where, when, and how the scam took place is helpful for police.","Any information that was used by the scammer can help police identify suspects.":"Any information that was used by the scammer can help police identify suspects.","Any screenshots, messages, or receipts":"Any screenshots, messages, or receipts","Are you reporting a scam that happened to you?":"Are you reporting a scam that happened to you?","Attach any supporting files":"Attach any supporting files","Attach supporting files":"Attach supporting files","Canadian dollar":"Canadian dollar","Cancel report":"Cancel report","Cash":"Cash","Contact":"Contact","Contact information":"Contact information","Contacted by":"Contacted by","Credit card":"Credit card","Currency":"Currency","Date":"Date","Describe the scam":"Describe the scam","Describe what happened":"Describe what happened","Describe what this file shows":"Describe what this file shows","Description":"Description","Device or account hacked":"Device or account hacked","Did the scam happened to you":"Did the scam happened to you","Did you lose any money as part of this scam?":"Did you lose any money as part of this scam?","Do you have any information on where the scam came from?":"Do you have any information on where the scam came from?","Do you have documents, screenshots, or receipts?":"Do you have documents, screenshots, or receipts?","E-transfer":"E-transfer","Edit":"Edit","Edit contact info":"Edit contact info","Edit contact information":"Edit contact information","Edit files attached":"Edit files attached","Edit impact":"Edit impact","Edit money lost":"Edit money lost","Edit scam event":"Edit scam event","Edit scammer details":"Edit scammer details","Edit scammer information":"Edit scammer information","Edit timeframe":"Edit timeframe","Edit what happened":"Edit what happened","Email":"Email","Email address":"Email address","English":"English","Enter your contact information":"Enter your contact information","Euro":"Euro","File name":"File name","Files attached":"Files attached","Find tips to protect yourself in the future":"Find tips to protect yourself in the future","Follow what scams are trending":"Follow what scams are trending","For example: 2019-04-28":"For example: 2019-04-28","For example: April 28, 2019":"For example: April 28, 2019","For example: the amount of money, the information taken, what else was affected":"For example: the amount of money, the information taken, what else was affected","French":"French","Gift card":"Gift card","How the scammer contacted you":"How the scammer contacted you","IP address":"IP address","If you can, give us an idea of when the scam took place so that police are able to look into it.":"If you can, give us an idea of when the scam took place so that police are able to look into it.","Impact":"Impact","Impact caused by the scam":"Impact caused by the scam","Include any messages, conversations, receipts, or other evidence that shows what happened.":"Include any messages, conversations, receipts, or other evidence that shows what happened.","Information stolen":"Information stolen","It\u2019s okay if you don\u2019t know exactly when it took place. You can give your best guess or leave this blank.":"It\u2019s okay if you don\u2019t know exactly when it took place. You can give your best guess or leave this blank.","Language of correspondence":"Language of correspondence","Leave your contact information":"Leave your contact information","Mailing address":"Mailing address","Money lost":"Money lost","Name":"Name","Next":"Next","Next: Contact information":"Next: Contact information","Next: Review report":"Next: Review report","No":"No","No impact":"No impact","Other":"Other","Other currency":"Other currency","Other language":"Other language","Other method":"Other method","Other method of payment":"Other method of payment","Page not found":"Page not found","Payment method":"Payment method","Phone number":"Phone number","Please attach one file at a time.":"Please attach one file at a time.","Please fill out all fields":"Please fill out all fields","Privacy":"Privacy","Prototype 1":"Prototype 1","Prototype 2":"Prototype 2","Provide your contact details so that we can send you a confirmation of your report.":"Provide your contact details so that we can send you a confirmation of your report.","Remember to include any email addresses, phone numbers, or website links":"Remember to include any email addresses, phone numbers, or website links","Remove file":"Remove file","Report a scam":"Report a scam","Report directly to the place where the scam happened.":"Report directly to the place where the scam happened.","Report now \u276F":"Report now \u276F","Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.":"Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.","Report to your financial institution, if you lost money.":"Report to your financial institution, if you lost money.","Reputation damaged":"Reputation damaged","Review report information":"Review report information","Review your report":"Review your report","Safety threatened":"Safety threatened","Scam":"Scam","Share any details you may know so that police can try to identify suspects.":"Share any details you may know so that police can try to identify suspects.","Sorry, the page you were trying to view does not exist.":"Sorry, the page you were trying to view does not exist.","Step {activeStep} of {totalSteps}":function(a){return["Step ",a("activeStep")," of ",a("totalSteps")]},"Submit report \xA0 \u276F":"Submit report \xA0 \u276F","Suspect":"Suspect","Talk to someone and get support":"Talk to someone and get support","Telephone":"Telephone","Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate these crimes.":"Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate these crimes.","Tell us about it in your own words.":"Tell us about it in your own words.","Tell us about the money lost":"Tell us about the money lost","Tell us about your experience so we can stop it from happening again.":"Tell us about your experience so we can stop it from happening again.","Tell us how much money was lost":"Tell us how much money was lost","Tell us how the scam impacted you so that we can better support other people who are affected.":"Tell us how the scam impacted you so that we can better support other people who are affected.","Terms and Conditions":"Terms and Conditions","Thank you for reporting":"Thank you for reporting","The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.":"The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.","The RCMP will analyze your report and combine it with others that are similar to help police across Canada track down cybercriminals.":"The RCMP will analyze your report and combine it with others that are similar to help police across Canada track down cybercriminals.","The police will not get your money back, but understanding the impact of the scam can help build a case.":"The police will not get your money back, but understanding the impact of the scam can help build a case.","Think about including things such as:":"Think about including things such as:","This site will change as we test ideas.":"This site will change as we test ideas.","Timeframe":"Timeframe","U.S. dollar":"U.S. dollar","Warning! This is a prototype. It won't actually submit your report to the RCMP.":"Warning! This is a prototype. It won't actually submit your report to the RCMP.","We will use this to send you a confirmation email and to link your report to other reports in your area.":"We will use this to send you a confirmation email and to link your report to other reports in your area.","We've sent you an email with a summary of your report. Your reference number is <0>#NC300234234</0>.":"We've sent you an email with a summary of your report. Your reference number is <0>#NC300234234</0>.","Website":"Website","Wellbeing affected":"Wellbeing affected","What happened":"What happened","What happened is not your fault. Scammers use a number of techniques to get what they want.":"What happened is not your fault. Scammers use a number of techniques to get what they want.","What language they used to communicate":"What language they used to communicate","What they promised, threatened, or stole":"What they promised, threatened, or stole","What was the impact of the scam?":"What was the impact of the scam?","When did the scam happen?":"When did the scam happen?","Where they asked you to send things":"Where they asked you to send things","Which app, website, or device you were using":"Which app, website, or device you were using","Who the scammer claimed to be":"Who the scammer claimed to be","Would you like to be contacted, should the police need more information?":"Would you like to be contacted, should the police need more information?","Yes":"Yes","You will be asked to:":"You will be asked to:","You're not the only one affected by this scam. Help protect others by telling us how the scam affected you.":"You're not the only one affected by this scam. Help protect others by telling us how the scam affected you.","Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.":"Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.","confirmationPage.ImpactTitle":"Impact","confirmationPage.contactIntro":"Provide your contact details so that we can send you a confirmation of your report.","confirmationPage.contactTitle":"Contact","confirmationPage.impactIntro":"Tell us how the scam impacted you so that we can better support other people who are affected.","confirmationPage.scamIntro":"Tell us about your experience so we can stop it from happening again.","confirmationPage.scamTitle":"Scam","confirmationPage.suspectIntro":"Share any details you may know so that police can try to identify suspects.","confirmationPage.suspectTitle":"Suspect","confirmationPage.timeFrameIntro":"If you can, give us an idea of when the scam took place so that police are able to look into it.","confirmationPage.timeFrameTitle":"Timeframe","confirmationPage.title":"Review your report","contact information":"contact information","fileUpload.added":"File added","fileUpload.removed":"File removed","landingPage.intro":"Scams can happen to anyone. They\u2019re not always easy to recognize and new ones are invented every day.","landingPage.nextButton":"Report now \u276F","landingPage.required0":"Before you start, gather what you can about the scam:","landingPage.required1":"Dates when it took place","landingPage.required2":"Descriptions of what happened","landingPage.required3":"Details on where it came from","landingPage.required4":"Documents, screenshots, or receipts","landingPage.summary":"Your report helps the RCMP learn about these crimes and helps police across Canada catch cybercriminals.","landingPage.title":"Report a scam","loading...":"loading...","money lost":"money lost","nextStepsPage.helpResource":"Where you can get help","nextStepsPage.helpResource1":"Talk to someone and get support","nextStepsPage.helpResource2":"Find tips to protect yourself in the future","nextStepsPage.helpResource3":"Follow what scams are trending","nextStepsPage.nextStepDetail":"The RCMP will analyze your report and combine it with others that are similar to help police across Canada track down cybercriminals.","nextStepsPage.nextStepSummary":"What happens next","nextStepsPage.otherReportOption":"You have other reporting options","nextStepsPage.otherReportOption1":"Report directly to the place where the scam happened.","nextStepsPage.otherReportOption2":"Report to your financial institution, if you lost money.","nextStepsPage.otherReportOption3":"Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.","nextStepsPage.referenceNumber":"#NC300234234","nextStepsPage.summary":"We've sent you an email with a summary of your report. Your reference number is <0>#NC300234234</0>.","nextStepsPage.title":"Thank you for reporting","previous page":"previous page","scammerDetail.addFileButtom":"Add file","scammerDetail.backButton":"the scam","scammerDetail.detail1":"Who the scammer claimed to be","scammerDetail.detail2":"Where they asked you to send things","scammerDetail.detail3":"What language they used to communicate","scammerDetail.detail4":"Any screenshots, messages, or receipts","scammerDetail.details":"Think about including things such as:","scammerDetail.fileDescription":"Describe what this file shows","scammerDetail.intro":"Any clues about the source of the scam can help police track down the scammer.","scammerDetail.reminder":"Remember to include any email addresses, phone numbers, or website links","scammerDetail.removeFileButton":"Remove file","scammerDetail.summary":"What do you know about where the scam came from?","scammerDetail.title":"Add suspect clues","start page":"start page","supporting files":"supporting files","suspect clues":"suspect clues","the impact":"the impact","the scam":"the scam","the start page":"the start page","the suspect":"the suspect","the timeframe":"the timeframe","timeFramePage.backButton":"the start page","timeFramePage.endDate":"Approximate end","timeFramePage.endDateExample":"For example: 2019-04-28","timeFramePage.intro":"It\u2019s okay if you don\u2019t know exactly when it took place. You can give your best guess or leave this blank.","timeFramePage.startDate":"Approximate start","timeFramePage.startDateExample":"For example: 2019-04-28","timeFramePage.title":"When did the scam happen?","what happened":"what happened","whatHappendPage.backButton":"the timeframe","whatHappendPage.details1":"Think about including things such as:","whatHappendPage.details2":"Which app, website, or device you were using","whatHappendPage.details3":"How the scammer contacted you","whatHappendPage.details4":"What they promised, threatened, or stole","whatHappendPage.hint":"Tell us about it in your own words.","whatHappendPage.intro1":"What happened is not your fault. Scammers use a number of techniques to get what they want.","whatHappendPage.summary":"<0>What happened?</0>","whatHappendPage.title":"Describe what happened","your contact information":"your contact information","{0, plural, one {# file attached} other {# files attached}}":function(a){return[a("0","plural",{one:["#"," file attached"],other:["#"," files attached"]})]},"{startDate} to {endDate}":function(a){return[a("startDate")," to ",a("endDate")]},"\u276E \xA0 Report another scam":"\u276E \xA0 Report another scam"}};

/***/ }),

/***/ "./locale/fr/messages.js":
/*!*******************************!*\
  !*** ./locale/fr/messages.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */module.exports={languageData:{"plurals":function(n,ord){if(ord)return n==1?"one":"other";return n>=0&&n<2?"one":"other"}},messages:{": Add files":" : Ajouter des fichiers",": Clues about the suspect":" : Renseignements sur le suspect",": Contact information":" : Coordonn\xE9es",": Impact of the scam":" : R\xE9percussions de la fraude",": Money lost":" : Argent perdu",": Review report":" : R\xE9vision du rapport",": What happened":" : Description de la fraude","<0>Amount of money</0>":"<0>Montant d'argent</0>","<0>Approximate end</0>":"<0>Date de fin approximative</0>","<0>Approximate start</0>":"<0>Date de d\xE9but approximative</0>","<0>Currency</0>":"<0>Devise</0>","<0>Email address</0>":"<0>Adresse courriel</0>","<0>Full name</0>":"<0>Nom complet</0>","<0>How did it start?</0>":"<0>De quelle fa\xE7on l'incident a-t-il commenc\xE9?</0>","<0>How did you pay the scammer?</0>":"<0>Comment avez-vous pay\xE9 le fraudeur?</0>","<0>IP address</0>":"<0>Adresse IP</0>","<0>Language of communications</0>":"<0>Langue de communication</0>","<0>Mailing address</0>":"<0>Adresse postale</0>","<0>Name</0>":"<0>Nom</0>","<0>Phone number</0>":"<0>Num\xE9ro de t\xE9l\xE9phone</0>","<0>Postal code</0>":"<0>Code postal</0>","<0>Tell us more about how it impacted you.</0>":"Parlez-nous davantage de comment cette fraude vous a affect\xE9.","<0>Website link</0>":"<0>Lien vers un site Web</0>","<0>What do you know about where the scam came from?</0>":"<0>Que savez-vous sur l'origine de la fraude?</0>","<0>What happened?</0>":"<0>Que s'est-il pass\xE9?</0>","<0>What happens next</0>":"<0>Que se passe-t-il ensuite?</0>","<0>What was the impact of the scam?</0>":"<0>Quelles ont \xE9t\xE9 les r\xE9percussions de la fraude?</0>","<0>When did it start?</0>":"<0>\xC0 quel moment l'incident a-t-il commenc\xE9?</0>","<0>Where you can get help</0>":"<0>Obtenez de l'aide :</0>","<0>You have other reporting options</0>":"<0>Vous avez d'autres options de signalement</0>","<0>\u25C0</0> <1>Back to</1> <2>{children}</2>":function(a){return["<0>\u25C0</0> <1>Retourner</1> <2>",a("children"),"</2>"]},"ALPHA":"ALPHA","About the suspect":"\xC0 propos du suspect","Add clues about the suspect":"Fournissez des renseignements sur le suspect","Add file":"Ajouter un fichier","Add suspect clues":"Fournissez des renseignements sur le suspect","Amount":"Montant d'argent","Any clues about the source of the scam can help police track down the scammer.":"Tout indice concernant la source de la fraude peut aider la police \xE0 retrouver le fraudeur.","Any information about where, when, and how the scam took place is helpful for police.":"Tout renseignement sur le lieu, le moment et le d\xE9roulement de l'incident est utile pour la police.","Any information that was used by the scammer can help police identify suspects.":"Tout renseignement fourni par le fraudeur peut aider la police \xE0 trouver des suspects.","Any screenshots, messages, or receipts":"Des captures d'\xE9cran, des messages ou des re\xE7us","Are you reporting a scam that happened to you?":"\xCAtes-vous la personne vis\xE9e par la fraude que vous signalez?","Attach any supporting files":"Joindre des documents li\xE9s \xE0 la fraude","Attach supporting files":"Joignez des documents li\xE9s \xE0 l'incident","Canadian dollar":"Dollar canadien","Cancel report":"Annuler le rapport","Cash":"En argent comptant","Contact":"Coordonn\xE9es","Contact information":"Coordonn\xE9es","Contacted by":"Contact\xE9 par","Credit card":"Par carte de cr\xE9dit","Currency":"Devise","Date":"Date","Describe the scam":"D\xE9crire la fraude","Describe what happened":"D\xE9crivez ce qui s'est pass\xE9","Describe what this file shows":"D\xE9crivez ce que ce fichier indique","Description":"Description","Device or account hacked":"Piratage d'appareil ou de compte","Did the scam happened to you":"\xCAtes-vous la personne vis\xE9e?","Did you lose any money as part of this scam?":"Avez-vous perdu de l'argent suite \xE0 cette fraude?","Do you have any information on where the scam came from?":"Avez-vous des renseignements sur l'auteur de la fraude?","Do you have documents, screenshots, or receipts?":"Avez-vous des documents, des captures d'\xE9cran ou des re\xE7us?","E-transfer":"Par transfert \xE9lectronique d'argent","Edit":"Modifier","Edit contact info":"Modifier les coordonn\xE9es","Edit contact information":"Modifier vos coordonn\xE9es","Edit files attached":"Modifier les fichiers joints","Edit impact":"Modifier les r\xE9percussions","Edit money lost":"Modifier le montant d'argent perdu","Edit scam event":"Modifier l'incidence de fraude","Edit scammer details":"Modifier les renseignements sur le fraudeur","Edit scammer information":"Modifier les information reli\xE9es au fraudeur","Edit timeframe":"Modifier les dates","Edit what happened":"Modifier la description de ce qui s'est pass\xE9","Email":"Par courriel","Email address":"Adresse de courriel","English":"Anglais","Enter your contact information":"Entrez vos coordonn\xE9es","Euro":"Euro","File name":"Nom du fichier","Files attached":"Fichiers joints","Find tips to protect yourself in the future":"Trouvez des conseils pour vous prot\xE9ger \xE0 l'avenir","Follow what scams are trending":"Tenez-vous \xE0 jour sur les fraudes les plus communes","For example: 2019-04-28":"Par exemple : 2019-04-28","For example: April 28, 2019":"Par exemple: 28 avril 2019","For example: the amount of money, the information taken, what else was affected":"Par exemple : le montant d'argent impliqu\xE9, les informations prises ou toute autre r\xE9percussion","French":"Fran\xE7ais","Gift card":"Sous forme de carte-cadeau","How the scammer contacted you":"La fa\xE7on dont le fraudeur a communiqu\xE9 avec vous","IP address":"Adresse IP","If you can, give us an idea of when the scam took place so that police are able to look into it.":"Si vous le pouvez, donnez-nous une id\xE9e du moment o\xF9 la fraude a eu lieu pour que la police soit en mesure d'enqu\xEAter \xE0 son sujet.","Impact":"R\xE9percussions","Impact caused by the scam":"R\xE9percussions de la fraude","Include any messages, conversations, receipts, or other evidence that shows what happened.":"Vous pouvez inclure  des messages, des conversations, des re\xE7us, ou tout autre \xE9l\xE9ment de preuve li\xE9 \xE0 la fraude.","Information stolen":"Vol de renseignements","It\u2019s okay if you don\u2019t know exactly when it took place. You can give your best guess or leave this blank.":"Ce n'est pas grave si vous ne connaissez pas le moment exacte de la fraude. Vous pouvez donner une approximation ou laisser le champ vide.","Language of correspondence":"Langue de correspondance","Leave your contact information":"Entrez vos coordonn\xE9es","Mailing address":"Adresse postale","Money lost":"Perte d'argent","Name":"Nom","Next":"\xC9tape suivante","Next: Contact information":"\xC9tape suivante : Coordonn\xE9es","Next: Review report":"\xC9tape suivante : R\xE9vision du rapport","No":"Non","No impact":"Aucune r\xE9percussion","Other":"Autre","Other currency":"Autre monnaie","Other language":"Autre langue","Other method":"Autre m\xE9thode","Other method of payment":"Autre m\xE9thode de paiement","Page not found":"Page introuvable","Payment method":"Mode de paiement","Phone number":"Num\xE9ro de t\xE9l\xE9phone","Please attach one file at a time.":"Veuillez joindre un fichier \xE0 la fois.","Please fill out all fields":"Veuillez remplir tous les champs","Privacy":"Confidentialit\xE9","Prototype 1":"Prototype 1","Prototype 2":"Prototype 2","Provide your contact details so that we can send you a confirmation of your report.":"Fournissez-nous vos coordonn\xE9es pour que nous puissions vous envoyer la confirmation de la r\xE9ception de votre rapport.","Remember to include any email addresses, phone numbers, or website links":"Indiquez toutes les adresses courriel, les num\xE9ros de t\xE9l\xE9phone ou les sites Web utilis\xE9s par le fraudeur.","Remove file":"Supprimer le fichier","Report a scam":"Signalez une fraude","Report directly to the place where the scam happened.":"Signaler l'incident directement \xE0 l'endroit o\xF9 la fraude a eu lieu.","Report now \u276F":"Signaler maintenant \u276F","Report to the credit bureaus, <0>Equifax</0> and <1>TransUnion</1>, if your identity was stolen.":"Signaler la fraude aux agences d'\xE9valuation du cr\xE9dit, \xE0 savoir <0>Equifax</0> and <1>TransUnion</1>, en cas de vol d'identit\xE9.","Report to your financial institution, if you lost money.":"Signaler l'incident \xE0 votre institution financi\xE8re si vous avez fait parvenir de l'argent au fraudeur.","Reputation damaged":"R\xE9putation compromise","Review report information":"R\xE9visez les renseignements signal\xE9s","Review your report":"R\xE9visez votre rapport","Safety threatened":"S\xE9curit\xE9 mise en danger","Scam":"Fraude","Share any details you may know so that police can try to identify suspects.":"Partagez tous les d\xE9tails que vous connaissez afin que la police puisse essayer d'identifier des suspects.","Sorry, the page you were trying to view does not exist.":"D\xE9sol\xE9, la page que vous essayiez de voir n'existe pas.","Step {activeStep} of {totalSteps}":function(a){return["\xC9tape ",a("activeStep")," de ",a("totalSteps")]},"Submit report \xA0 \u276F":"Envoyer le rapport  \u276F","Suspect":"Suspect","Talk to someone and get support":"Parlez \xE0 quelqu'un et obtenez du soutien","Telephone":"Au t\xE9l\xE9phone","Tell the RCMP's National Cybercrime Coordination Unit about a scam to help police across Canada investigate these crimes.":"Informez le Groupe national de coordination contre la cybercriminalit\xE9 de la GRC de l'incidence d'une fraude pour aider les services de police partout au Canada avec leurs enqu\xEAtes.","Tell us about it in your own words.":"Racontez-nous l'histoire dans vos propres mots","Tell us about the money lost":"Indiquez le montant d'argent qui a \xE9t\xE9 perdu","Tell us about your experience so we can stop it from happening again.":"Racontez-nous votre exp\xE9rience afin que nous puissions emp\xEAcher la situation de se reproduire.","Tell us how much money was lost":"Indiquer le montant d'argent que vous avez perdu","Tell us how the scam impacted you so that we can better support other people who are affected.":"Dites-nous comment la fraude vous a affect\xE9 afin que nous puissions mieux soutenir les autres personnes touch\xE9es.","Terms and Conditions":"Avis","Thank you for reporting":"Merci de votre signalement","The <0>RCMP's National Cybercrime Coordination Unit</0> will assess the information and combine it with other reports to help police catch scammers.":"Le <0>Groupe national de coordination contre la cybercriminalit\xE9 de la GRC</0> \xE9valuera l'information et la combinera avec d'autres rapports pour aider la police \xE0 trouver les fraudeurs.","The RCMP will analyze your report and combine it with others that are similar to help police across Canada track down cybercriminals.":"La GRC analysera votre rapport et le combinera \xE0 d'autres rapports semblables afin d'aider les services partout au Canada \xE0 d\xE9pister les cybercriminels.","The police will not get your money back, but understanding the impact of the scam can help build a case.":"La police ne r\xE9cup\xE9rera pas votre argent, mais comprendre les r\xE9percussions de la fraude peut l'aider \xE0 monter un dossier.","Think about including things such as:":"Pensez \xE0 inclure des d\xE9tails tels que :","This site will change as we test ideas.":"Le site changera \xE0 mesure que nous testons des id\xE9es.","Timeframe":"Dates","U.S. dollar":"Dollar am\xE9ricain","Warning! This is a prototype. It won't actually submit your report to the RCMP.":"Attention! Ce site est un prototype. Vos renseignements ne seront pas r\xE9ellement transmis \xE0 la GRC.","We will use this to send you a confirmation email and to link your report to other reports in your area.":"Nous utiliserons cette information pour vous envoyer un courriel de confirmation et pour associer votre rapport \xE0 d'autres rapports dans votre r\xE9gion.","We've sent you an email with a summary of your report. Your reference number is <0>#NC300234234</0>.":"Nous vous avons envoy\xE9 un courriel avec un r\xE9sum\xE9 de votre rapport. Votre num\xE9ro de r\xE9f\xE9rence est le <0>#NC300234234</0>.","Website":"Sur un site web","Wellbeing affected":"Bien-\xEAtre affect\xE9","What happened":"Ce qui s'est pass\xE9","What happened is not your fault. Scammers use a number of techniques to get what they want.":"Ce qui s'est pass\xE9 n'est pas de votre faute. Les fraudeurs utilisent plusieurs techniques pour obtenir ce qu'ils veulent.","What language they used to communicate":"La langue utilis\xE9e par le fraudeur pour communiquer avec vous","What they promised, threatened, or stole":"Ce que le fraudeur a promis, a vol\xE9 ou a menac\xE9 de faire","What was the impact of the scam?":"Quelles ont \xE9t\xE9 les r\xE9percussions de la fraude?","When did the scam happen?":"Quand la fraude a-t-elle eu lieu?","Where they asked you to send things":"L'endroit o\xF9 le fraudeur vous ont demand\xE9 d'envoyer des choses","Which app, website, or device you were using":"L'application, le site Web ou l'appareil que vous utilisiez","Who the scammer claimed to be":"La personne ou l'organisation que le fraudeur a pr\xE9tendu \xEAtre","Would you like to be contacted, should the police need more information?":"Aimeriez-vous que la police fasse un suivi aupr\xE8s de vous si elle a besoin de plus d'information?","Yes":"Oui","You will be asked to:":"Vous pourrez :","You're not the only one affected by this scam. Help protect others by telling us how the scam affected you.":"Vous n'\xEAtes pas la seule personne affect\xE9e par cette fraude. Aidez-nous \xE0 prot\xE9ger les autres en nous expliquant comment la fraude vous a affect\xE9.","Your reference number is <0>#NC300234234</0>. Keep this number for your records or to add more information later.":"Votre num\xE9ro de r\xE9f\xE9rence est le <0>#NC300234234</0>. Conservez ce num\xE9ro dans vos dossiers pour ajouter des informations plus tard.","confirmationPage.ImpactTitle":"R\xE9percussions","confirmationPage.contactIntro":"Indiquez vos coordonn\xE9es afin que nous puissions vous envoyer une confirmation de votre rapport.","confirmationPage.contactTitle":"Contact","confirmationPage.impactIntro":"Dites-nous en quoi l\u2019escroquerie vous a touch\xE9 afin que nous puissions mieux aider les autres personnes touch\xE9es.","confirmationPage.scamIntro":"Parlez-nous de votre exp\xE9rience afin que nous puissions emp\xEAcher que cela se reproduise.","confirmationPage.scamTitle":"Arnaque","confirmationPage.suspectIntro":"Partagez tous les d\xE9tails que vous pouvez conna\xEEtre afin que la police puisse essayer d'identifier les suspects.","confirmationPage.suspectTitle":"Suspecte","confirmationPage.timeFrameIntro":"Si vous le pouvez, donnez-nous une id\xE9e du moment o\xF9 l'escroquerie a eu lieu afin que la police puisse enqu\xEAter.","confirmationPage.timeFrameTitle":"Plage de temps","confirmationPage.title":"R\xE9visez votre rapport","contact information":"\xE0 vos coordonn\xE9es","fileUpload.added":"Fichier ajout\xE9","fileUpload.removed":"Fichier supprim\xE9","landingPage.intro":"N'importe qui peut \xEAtre victime d'une fraude. De nouvelles fraudes sont invent\xE9es chaque jour, et elles ne sont pas toujours facile \xE0 reconna\xEEtre.","landingPage.nextButton":"Signaler maintenant \u276F","landingPage.required0":"Avant de commencer, recueillez les informations que vous pouvez au sujet de la fraude :","landingPage.required1":"Dates auxquelles la fraude a eu lieu","landingPage.required2":"Descriptions de ce qui s'est pass\xE9","landingPage.required3":"D\xE9tails sur l'origine de la fraude","landingPage.required4":"Documents, captures d'\xE9crans ou re\xE7us","landingPage.summary":"Votre signalement aide la GRC \xE0 en apprendre plus sur ces crimes. Il aidera aussi les services de police partout au Canada \xE0 trouver les cybercriminels.","landingPage.title":"Signalez une fraude","loading...":"chargement en cours...","money lost":"\xE0 l'argent perdu","nextStepsPage.helpResource":"O\xF9 pouvez-vous obtenir de l'aide?","nextStepsPage.helpResource1":"Parler \xE0 quelqu'un et obtenir de l'aide","nextStepsPage.helpResource2":"Trouvez des astuces pour vous prot\xE9ger dans le futur","nextStepsPage.helpResource3":"Suivez les tendances des arnaques","nextStepsPage.nextStepDetail":"La GRC analysera votre rapport et le combinera avec d'autres documents semblables pour aider la police \xE0 travers le Canada \xE0 traquer les cybercriminels.","nextStepsPage.nextStepSummary":"Qu'est-ce qui se passe ensuite","nextStepsPage.otherReportOption":"Vous avez d'autres options de rapport","nextStepsPage.otherReportOption1":"Rendez-vous directement \xE0 l'endroit o\xF9 l'escroquerie s'est produite.","nextStepsPage.otherReportOption2":"Pr\xE9sentez-vous \xE0 votre institution financi\xE8re si vous avez perdu de l'argent.","nextStepsPage.otherReportOption3":"Signaler aux bureaux de cr\xE9dit, <0> Equifax </0> et <1> TransUnion </1>, si votre identit\xE9 a \xE9t\xE9 vol\xE9e","nextStepsPage.referenceNumber":"# NC300234234","nextStepsPage.summary":"Nous vous avons envoy\xE9 un courrier \xE9lectronique avec un r\xE9sum\xE9 de votre rapport. Votre num\xE9ro de r\xE9f\xE9rence est <0>#NC300234234</0>.","nextStepsPage.title":"Merci d'avoir signal\xE9","previous page":"\xE0 la page pr\xE9c\xE9dente","scammerDetail.addFileButtom":"Ajouter le fichier","scammerDetail.backButton":"l'arnaque","scammerDetail.detail1":"Qui l'escroc a pr\xE9tendu \xEAtre","scammerDetail.detail2":"O\xF9 ils vous ont demand\xE9 d'envoyer des choses","scammerDetail.detail3":"Quelle langue ils utilisaient pour communiquer","scammerDetail.detail4":"Des captures d'\xE9cran, des messages ou des re\xE7us","scammerDetail.details":"Pensez \xE0 inclure des choses telles que:","scammerDetail.fileDescription":"D\xE9crivez ce que ce fichier montre","scammerDetail.intro":"Tout indice sur la source de l\u2019escroquerie peut aider la police \xE0 retrouver l\u2019escroc.","scammerDetail.reminder":"N'oubliez pas d'inclure vos adresses \xE9lectroniques, num\xE9ros de t\xE9l\xE9phone ou liens de sites Web.","scammerDetail.removeFileButton":"Effacer le fichier","scammerDetail.summary":"Que savez-vous sur l'origine de l'arnaque","scammerDetail.title":"Ajouter des indices suspects","start page":"\xE0 la premi\xE8re page","supporting files":"aux documents li\xE9s \xE0 l'incident","suspect clues":"aux renseignements sur le suspect","the impact":"aux r\xE9percussions","the scam":"\xE0 la fraude","the start page":"\xE0 la premi\xE8re page","the suspect":"au suspect","the timeframe":"aux dates de la fraude","timeFramePage.backButton":"la page de d\xE9marrage","timeFramePage.endDate":"Fin approximative","timeFramePage.endDateExample":"Par exemple: 2019-04-28","timeFramePage.intro":"Ce n\u2019est pas grave si vous ne savez pas exactement quand cela a eu lieu. Vous pouvez donner votre meilleure estimation ou laisser ce champ vide.","timeFramePage.startDate":"D\xE9but approximatif","timeFramePage.startDateExample":"Par exemple: 2019-04-28","timeFramePage.title":"Quand l'escroquerie est-elle arriv\xE9e?","what happened":"\xE0 ce qui s'est pass\xE9","whatHappendPage.backButton":"Le d\xE9lai","whatHappendPage.details1":"Pensez \xE0 inclure des choses telles que:","whatHappendPage.details2":"Quel app, site Web ou appareil que vous utilisiez","whatHappendPage.details3":"Comment l'escroc vous a contact\xE9","whatHappendPage.details4":"Ce qu'ils ont promis, menac\xE9 ou vol\xE9","whatHappendPage.hint":"Parlez-nous en vos propres mots","whatHappendPage.intro1":"Ce qui s'est pass\xE9 n'est pas de ta faute. Les escrocs utilisent un certain nombre de techniques pour obtenir ce qu'ils veulent.","whatHappendPage.summary":"Qu'est-il arriv\xE9?","whatHappendPage.title":"D\xE9crivez ce qui s'est pass\xE9","your contact information":"\xE0 vos coordonn\xE9es","{0, plural, one {# file attached} other {# files attached}}":function(a){return[a("0","plural",{one:["#"," fichier joint"],other:["#"," fichiers joints"]})]},"{startDate} to {endDate}":function(a){return[a("startDate")," au ",a("endDate")]},"\u276E \xA0 Report another scam":"\u276E \xA0 Signaler une autre fraude"}};

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
/**@jsx jsx **/
















var _ref =  false ? undefined : {
  name: "fb80mx-App",
  styles: "html,body{height:100%;}body{margin:0;padding:0;}#root{display:flex;flex-direction:column;height:100%;}@font-face{font-family:'robotobold';src:url('fonts/roboto-bold.woff2') format('woff2'),url('fonts/roboto-bold.woff') format('woff');font-weight:bold;font-style:normal;}label:App;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRTJCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKkBqc3gganN4ICoqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgR2xvYmFsLCBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSG9tZSB9IGZyb20gJy4vSG9tZSdcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldC1hc3luYydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEdFVF9MQU5HVUFHRV9RVUVSWSB9IGZyb20gJy4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB7IFRvcEJhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy90b3BiYW5uZXInXG5pbXBvcnQgeyBQaGFzZUJhbm5lciB9IGZyb20gJy4vY29tcG9uZW50cy9waGFzZS1iYW5uZXInXG5pbXBvcnQgeyBXYXJuaW5nQmFubmVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3dhcm5pbmctYmFubmVyJ1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvb3RlcidcbmltcG9ydCB7IEZvb3RlckxpbmsgfSBmcm9tICcuL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFpbmVyJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxJMThuPlxuICAgIHsoeyBpMThuIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxRdWVyeSBxdWVyeT17R0VUX0xBTkdVQUdFX1FVRVJZfT5cbiAgICAgICAgICB7KHsgZGF0YTogeyBsYW5ndWFnZSB9IH0pID0+IChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8aHRtbCBsYW5nPXtsYW5ndWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkxOG4pIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRpdGxlIGxhbmc9e2xhbmd1YWdlfT57aTE4bi5fKCdSZXBvcnQgYSBzY2FtJyl9PC90aXRsZT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICAgICAgICAgIHNpemVzPVwiMTkyeDE5MlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcHBJbnNpZ2h0cyA9IHJlcXVpcmUoXCJhcHBsaWNhdGlvbmluc2lnaHRzXCIpO1xuICAgICAgICAgICAgICAgICAgYXBwSW5zaWdodHMuc2V0dXAoXCJkOWU3MmUxNC1hNGY4LTQ2N2MtYmQ4Yi1iNGUzYTZmMGMyMjlcIik7XG4gICAgICAgICAgICAgICAgICBhcHBJbnNpZ2h0cy5zdGFydCgpO1xuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICB3aW5kb3cuX19BUE9MTE9fU1RBVEVfXz0ke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSxcbiAgICAgICAgICAgICAgfSl9YH1cbiAgICAgICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IChcbiAgICAgICAgICAgICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZS13b3JrZXIuanMnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgI3Jvb3Qge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyb2JvdG9ib2xkJztcbiAgICAgICAgICAgICAgICAgICAgc3JjOiB1cmwoJ2ZvbnRzL3JvYm90by1ib2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgICAgICAgICAgIHVybCgnZm9udHMvcm9ib3RvLWJvbGQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgIDxXYXJuaW5nQmFubmVyIC8+XG4gICAgICAgICAgICAgICAgICA8UGhhc2VCYW5uZXIgcGhhc2U9ezxUcmFucz5BTFBIQTwvVHJhbnM+fSBwaGFzZUNvbG9yPVwicHVycGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5UaGlzIHNpdGUgd2lsbCBjaGFuZ2UgYXMgd2UgdGVzdCBpZGVhcy48L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9QaGFzZUJhbm5lcj5cbiAgICAgICAgICAgICAgICAgIDxUb3BCYW5uZXIgbGFuZz17bGFuZ3VhZ2V9IGJnPVwiYmxhY2tcIiAvPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIGJnPVwiYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxGb290ZXJMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAnZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdodHRwczovL2RpZ2l0YWwuY2FuYWRhLmNhL2xlZ2FsL3ByaXZhY3kvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaHR0cHM6Ly9udW1lcmlxdWUuY2FuYWRhLmNhL3RyYW5zcGFyZW5jZS9jb25maWRlbnRpYWxpdGUvJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5Qcml2YWN5PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTGluaz5cbiAgICAgICAgICAgICAgICAgIDxGb290ZXJMaW5rXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAnZW4nXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdodHRwczovL2RpZ2l0YWwuY2FuYWRhLmNhL2xlZ2FsL3Rlcm1zLydcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2h0dHBzOi8vbnVtZXJpcXVlLmNhbmFkYS5jYS90cmFuc3BhcmVuY2UvYXZpcy8nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlRlcm1zIGFuZCBDb25kaXRpb25zPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvRm9vdGVyTGluaz5cbiAgICAgICAgICAgICAgICA8L0Zvb3Rlcj5cbiAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1F1ZXJ5PlxuICAgICAgKVxuICAgIH19XG4gIDwvSTE4bj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXX0= */"
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
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_warning_banner__WEBPACK_IMPORTED_MODULE_11__["WarningBanner"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_phase_banner__WEBPACK_IMPORTED_MODULE_10__["PhaseBanner"], {
        phase: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
          id: "ALPHA"
        }),
        phaseColor: "purple"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_2__["Trans"], {
        id: "This site will change as we test ideas."
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_topbanner__WEBPACK_IMPORTED_MODULE_9__["TopBanner"], {
        lang: language,
        bg: "black"
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_container__WEBPACK_IMPORTED_MODULE_14__["Content"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_Home__WEBPACK_IMPORTED_MODULE_6__["Home"], null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_footer__WEBPACK_IMPORTED_MODULE_12__["Footer"], {
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEIwQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBSb290TGFuZGluZ1BhZ2UgfSBmcm9tICcuL1Jvb3RMYW5kaW5nUGFnZSdcbmltcG9ydCB7IEZpbGVVcGxvYWRQYWdlIH0gZnJvbSAnLi9wMS9GaWxlVXBsb2FkUGFnZSdcbmltcG9ydCB7IFN1c3BlY3RpbmZvIH0gZnJvbSAnLi9wMS9TdXNwZWN0SW5mb1llc05vUGFnZSdcbmltcG9ydCB7IFNjYW1JbmZvUGFnZSB9IGZyb20gJy4vcDEvU2NhbUluZm9QYWdlJ1xuaW1wb3J0IHsgTW9uZXlMb3N0UGFnZSB9IGZyb20gJy4vcDEvTW9uZXlMb3N0UGFnZSdcbmltcG9ydCB7IENvbmZpcm1hdGlvblBhZ2UgfSBmcm9tICcuL3AxL0NvbmZpcm1hdGlvblBhZ2UnXG5pbXBvcnQgeyBTdXNwZWN0SW5mb1BhZ2UgfSBmcm9tICcuL3AxL1N1c3BlY3RJbmZvUGFnZSdcbmltcG9ydCB7IENvbnRhY3RJbmZvUGFnZSB9IGZyb20gJy4vcDEvQ29udGFjdEluZm9QYWdlJ1xuaW1wb3J0IHsgTG9zZU1vbmV5IH0gZnJvbSAnLi9wMS9Nb25leUxvc3RZZXNOb1BhZ2UnXG5pbXBvcnQgeyBUaGFua1lvdSB9IGZyb20gJy4vcDEvVGhhbmtZb3UnXG5pbXBvcnQgeyBXaWxsYmVjb250YWN0ZWQgfSBmcm9tICcuL3AxL1dpbGxCZUNvbnRhY3RlZFllc05vUGFnZSdcbmltcG9ydCB7IExhbmRpbmdQYWdlIH0gZnJvbSAnLi9wMS9MYW5kaW5nUGFnZSdcbmltcG9ydCB7IEZpbGVzVG9VcGxvYWQgfSBmcm9tICcuL3AxL0ZpbGVVcGxvYWRZZXNOb1BhZ2UnXG5pbXBvcnQgeyBMYW5kaW5nUGFnZSBhcyBQMkxhbmRpbmdQYWdlIH0gZnJvbSAnLi9wMi9MYW5kaW5nUGFnZSdcbmltcG9ydCB7IFdoYXRIYXBwZW5lZFBhZ2UgYXMgUDJXaGF0SGFwcGVuZWRQYWdlIH0gZnJvbSAnLi9wMi9XaGF0SGFwcGVuZWRQYWdlJ1xuaW1wb3J0IHsgQ29udGFjdEluZm9QYWdlIGFzIFAyQ29udGFjdEluZm9QYWdlIH0gZnJvbSAnLi9wMi9Db250YWN0SW5mb1BhZ2UnXG5pbXBvcnQgeyBTY2FtbWVyRGV0YWlsc1BhZ2UgYXMgUDJTY2FtbWVyRGV0YWlsc1BhZ2UgfSBmcm9tICcuL3AyL1NjYW1tZXJEZXRhaWxzUGFnZSdcbmltcG9ydCB7IENvbmZpcm1hdGlvblBhZ2UgYXMgUDJDb25maXJtYXRpb25QYWdlIH0gZnJvbSAnLi9wMi9Db25maXJtYXRpb25QYWdlJ1xuaW1wb3J0IHsgTmV4dFN0ZXBzIGFzIFAyTmV4dFN0ZXBzIH0gZnJvbSAnLi9wMi9OZXh0U3RlcHMnXG5pbXBvcnQgeyBUaW1lRnJhbWVQYWdlIGFzIFAyVGltZUZyYW1lUGFnZSB9IGZyb20gJy4vcDIvVGltZUZyYW1lUGFnZSdcbmltcG9ydCB7IEltcGFjdFN0YXRlbWVudFBhZ2UgYXMgUDJJbXBhY3RTdGF0ZW1lbnRQYWdlIH0gZnJvbSAnLi9wMi9JbXBhY3RTdGF0ZW1lbnRQYWdlJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luOiAyMHB0O1xuYFxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMDtcbmBcblxuY29uc3QgU2Nyb2xsVG9Ub3AgPSAoeyBjaGlsZHJlbiwgbG9jYXRpb24gfSkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDYwKSwgW2xvY2F0aW9uLnBhdGhuYW1lXSlcbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4gKFxuICA8Um9vdD5cbiAgICA8U2NyZWVuPlxuICAgICAgPFJvdXRlciBwcmltYXJ5PXtmYWxzZX0+XG4gICAgICAgIDxTY3JvbGxUb1RvcCBkZWZhdWx0PlxuICAgICAgICAgIDxQYWdlTm90Rm91bmQgZGVmYXVsdCAvPlxuICAgICAgICAgIDxSb290TGFuZGluZ1BhZ2UgcGF0aD1cIi9cIiAvPlxuXG4gICAgICAgICAgPExhbmRpbmdQYWdlIHBhdGg9XCIvcDFcIiAvPlxuICAgICAgICAgIDxTY2FtSW5mb1BhZ2UgcGF0aD1cIi9wMS9zY2FtaW5mb1wiIC8+XG4gICAgICAgICAgPFN1c3BlY3RpbmZvIHBhdGg9XCIvcDEvc3VzcGVjdGluZm9xdWVzdGlvblwiIC8+XG4gICAgICAgICAgPFN1c3BlY3RJbmZvUGFnZSBwYXRoPVwiL3AxL3N1c3BlY3RpbmZvXCIgLz5cbiAgICAgICAgICA8TG9zZU1vbmV5IHBhdGg9XCIvcDEvbW9uZXlsb3N0cXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxNb25leUxvc3RQYWdlIHBhdGg9XCIvcDEvbW9uZXlsb3N0XCIgLz5cbiAgICAgICAgICA8RmlsZXNUb1VwbG9hZCBwYXRoPVwiL3AxL3VwbG9hZGZpbGVzcXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxGaWxlVXBsb2FkUGFnZSBwYXRoPVwiL3AxL3VwbG9hZGZpbGVzXCIgLz5cbiAgICAgICAgICA8V2lsbGJlY29udGFjdGVkIHBhdGg9XCIvcDEvY29udGFjdGluZm9xdWVzdGlvblwiIC8+XG4gICAgICAgICAgPENvbnRhY3RJbmZvUGFnZSBwYXRoPVwiL3AxL2NvbnRhY3RpbmZvXCIgLz5cbiAgICAgICAgICA8Q29uZmlybWF0aW9uUGFnZSBwYXRoPVwiL3AxL2NvbmZpcm1hdGlvblwiIC8+XG4gICAgICAgICAgPFRoYW5rWW91IHBhdGg9XCIvcDEvdGhhbmt5b3VcIiAvPlxuXG4gICAgICAgICAgPFAyTGFuZGluZ1BhZ2UgcGF0aD1cIi9wMlwiIC8+XG4gICAgICAgICAgPFAyV2hhdEhhcHBlbmVkUGFnZSBwYXRoPVwiL3AyL3doYXRoYXBwZW5lZFwiIC8+XG4gICAgICAgICAgPFAyQ29udGFjdEluZm9QYWdlIHBhdGg9XCIvcDIvY29udGFjdGluZm9cIiAvPlxuICAgICAgICAgIDxQMlNjYW1tZXJEZXRhaWxzUGFnZSBwYXRoPVwiL3AyL3NjYW1tZXJkZXRhaWxzXCIgLz5cbiAgICAgICAgICA8UDJDb25maXJtYXRpb25QYWdlIHBhdGg9XCIvcDIvY29uZmlybWF0aW9uXCIgLz5cbiAgICAgICAgICA8UDJOZXh0U3RlcHMgcGF0aD1cIi9wMi9uZXh0c3RlcHNcIiAvPlxuICAgICAgICAgIDxQMlRpbWVGcmFtZVBhZ2UgcGF0aD1cIi9wMi90aW1lZnJhbWVcIiAvPlxuICAgICAgICAgIDxQMkltcGFjdFN0YXRlbWVudFBhZ2UgcGF0aD1cIi9wMi9pbXBhY3RcIiAvPlxuICAgICAgICA8L1Njcm9sbFRvVG9wPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgPC9TY3JlZW4+XG4gIDwvUm9vdD5cbilcbiJdfQ== */"
});

var Screen =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1qid8s01",
  label: "Screen"
})( false ? undefined : {
  name: "8kn4zf",
  styles: "margin-top:0;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkI0QiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9Ib21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQHJlYWNoL3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgUGFnZU5vdEZvdW5kIH0gZnJvbSAnLi9QYWdlTm90Rm91bmQnXG5pbXBvcnQgeyBSb290TGFuZGluZ1BhZ2UgfSBmcm9tICcuL1Jvb3RMYW5kaW5nUGFnZSdcbmltcG9ydCB7IEZpbGVVcGxvYWRQYWdlIH0gZnJvbSAnLi9wMS9GaWxlVXBsb2FkUGFnZSdcbmltcG9ydCB7IFN1c3BlY3RpbmZvIH0gZnJvbSAnLi9wMS9TdXNwZWN0SW5mb1llc05vUGFnZSdcbmltcG9ydCB7IFNjYW1JbmZvUGFnZSB9IGZyb20gJy4vcDEvU2NhbUluZm9QYWdlJ1xuaW1wb3J0IHsgTW9uZXlMb3N0UGFnZSB9IGZyb20gJy4vcDEvTW9uZXlMb3N0UGFnZSdcbmltcG9ydCB7IENvbmZpcm1hdGlvblBhZ2UgfSBmcm9tICcuL3AxL0NvbmZpcm1hdGlvblBhZ2UnXG5pbXBvcnQgeyBTdXNwZWN0SW5mb1BhZ2UgfSBmcm9tICcuL3AxL1N1c3BlY3RJbmZvUGFnZSdcbmltcG9ydCB7IENvbnRhY3RJbmZvUGFnZSB9IGZyb20gJy4vcDEvQ29udGFjdEluZm9QYWdlJ1xuaW1wb3J0IHsgTG9zZU1vbmV5IH0gZnJvbSAnLi9wMS9Nb25leUxvc3RZZXNOb1BhZ2UnXG5pbXBvcnQgeyBUaGFua1lvdSB9IGZyb20gJy4vcDEvVGhhbmtZb3UnXG5pbXBvcnQgeyBXaWxsYmVjb250YWN0ZWQgfSBmcm9tICcuL3AxL1dpbGxCZUNvbnRhY3RlZFllc05vUGFnZSdcbmltcG9ydCB7IExhbmRpbmdQYWdlIH0gZnJvbSAnLi9wMS9MYW5kaW5nUGFnZSdcbmltcG9ydCB7IEZpbGVzVG9VcGxvYWQgfSBmcm9tICcuL3AxL0ZpbGVVcGxvYWRZZXNOb1BhZ2UnXG5pbXBvcnQgeyBMYW5kaW5nUGFnZSBhcyBQMkxhbmRpbmdQYWdlIH0gZnJvbSAnLi9wMi9MYW5kaW5nUGFnZSdcbmltcG9ydCB7IFdoYXRIYXBwZW5lZFBhZ2UgYXMgUDJXaGF0SGFwcGVuZWRQYWdlIH0gZnJvbSAnLi9wMi9XaGF0SGFwcGVuZWRQYWdlJ1xuaW1wb3J0IHsgQ29udGFjdEluZm9QYWdlIGFzIFAyQ29udGFjdEluZm9QYWdlIH0gZnJvbSAnLi9wMi9Db250YWN0SW5mb1BhZ2UnXG5pbXBvcnQgeyBTY2FtbWVyRGV0YWlsc1BhZ2UgYXMgUDJTY2FtbWVyRGV0YWlsc1BhZ2UgfSBmcm9tICcuL3AyL1NjYW1tZXJEZXRhaWxzUGFnZSdcbmltcG9ydCB7IENvbmZpcm1hdGlvblBhZ2UgYXMgUDJDb25maXJtYXRpb25QYWdlIH0gZnJvbSAnLi9wMi9Db25maXJtYXRpb25QYWdlJ1xuaW1wb3J0IHsgTmV4dFN0ZXBzIGFzIFAyTmV4dFN0ZXBzIH0gZnJvbSAnLi9wMi9OZXh0U3RlcHMnXG5pbXBvcnQgeyBUaW1lRnJhbWVQYWdlIGFzIFAyVGltZUZyYW1lUGFnZSB9IGZyb20gJy4vcDIvVGltZUZyYW1lUGFnZSdcbmltcG9ydCB7IEltcGFjdFN0YXRlbWVudFBhZ2UgYXMgUDJJbXBhY3RTdGF0ZW1lbnRQYWdlIH0gZnJvbSAnLi9wMi9JbXBhY3RTdGF0ZW1lbnRQYWdlJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luOiAyMHB0O1xuYFxuY29uc3QgU2NyZWVuID0gc3R5bGVkKCdkaXYnKWBcbiAgbWFyZ2luLXRvcDogMDtcbmBcblxuY29uc3QgU2Nyb2xsVG9Ub3AgPSAoeyBjaGlsZHJlbiwgbG9jYXRpb24gfSkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gd2luZG93LnNjcm9sbFRvKDAsIDYwKSwgW2xvY2F0aW9uLnBhdGhuYW1lXSlcbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4gKFxuICA8Um9vdD5cbiAgICA8U2NyZWVuPlxuICAgICAgPFJvdXRlciBwcmltYXJ5PXtmYWxzZX0+XG4gICAgICAgIDxTY3JvbGxUb1RvcCBkZWZhdWx0PlxuICAgICAgICAgIDxQYWdlTm90Rm91bmQgZGVmYXVsdCAvPlxuICAgICAgICAgIDxSb290TGFuZGluZ1BhZ2UgcGF0aD1cIi9cIiAvPlxuXG4gICAgICAgICAgPExhbmRpbmdQYWdlIHBhdGg9XCIvcDFcIiAvPlxuICAgICAgICAgIDxTY2FtSW5mb1BhZ2UgcGF0aD1cIi9wMS9zY2FtaW5mb1wiIC8+XG4gICAgICAgICAgPFN1c3BlY3RpbmZvIHBhdGg9XCIvcDEvc3VzcGVjdGluZm9xdWVzdGlvblwiIC8+XG4gICAgICAgICAgPFN1c3BlY3RJbmZvUGFnZSBwYXRoPVwiL3AxL3N1c3BlY3RpbmZvXCIgLz5cbiAgICAgICAgICA8TG9zZU1vbmV5IHBhdGg9XCIvcDEvbW9uZXlsb3N0cXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxNb25leUxvc3RQYWdlIHBhdGg9XCIvcDEvbW9uZXlsb3N0XCIgLz5cbiAgICAgICAgICA8RmlsZXNUb1VwbG9hZCBwYXRoPVwiL3AxL3VwbG9hZGZpbGVzcXVlc3Rpb25cIiAvPlxuICAgICAgICAgIDxGaWxlVXBsb2FkUGFnZSBwYXRoPVwiL3AxL3VwbG9hZGZpbGVzXCIgLz5cbiAgICAgICAgICA8V2lsbGJlY29udGFjdGVkIHBhdGg9XCIvcDEvY29udGFjdGluZm9xdWVzdGlvblwiIC8+XG4gICAgICAgICAgPENvbnRhY3RJbmZvUGFnZSBwYXRoPVwiL3AxL2NvbnRhY3RpbmZvXCIgLz5cbiAgICAgICAgICA8Q29uZmlybWF0aW9uUGFnZSBwYXRoPVwiL3AxL2NvbmZpcm1hdGlvblwiIC8+XG4gICAgICAgICAgPFRoYW5rWW91IHBhdGg9XCIvcDEvdGhhbmt5b3VcIiAvPlxuXG4gICAgICAgICAgPFAyTGFuZGluZ1BhZ2UgcGF0aD1cIi9wMlwiIC8+XG4gICAgICAgICAgPFAyV2hhdEhhcHBlbmVkUGFnZSBwYXRoPVwiL3AyL3doYXRoYXBwZW5lZFwiIC8+XG4gICAgICAgICAgPFAyQ29udGFjdEluZm9QYWdlIHBhdGg9XCIvcDIvY29udGFjdGluZm9cIiAvPlxuICAgICAgICAgIDxQMlNjYW1tZXJEZXRhaWxzUGFnZSBwYXRoPVwiL3AyL3NjYW1tZXJkZXRhaWxzXCIgLz5cbiAgICAgICAgICA8UDJDb25maXJtYXRpb25QYWdlIHBhdGg9XCIvcDIvY29uZmlybWF0aW9uXCIgLz5cbiAgICAgICAgICA8UDJOZXh0U3RlcHMgcGF0aD1cIi9wMi9uZXh0c3RlcHNcIiAvPlxuICAgICAgICAgIDxQMlRpbWVGcmFtZVBhZ2UgcGF0aD1cIi9wMi90aW1lZnJhbWVcIiAvPlxuICAgICAgICAgIDxQMkltcGFjdFN0YXRlbWVudFBhZ2UgcGF0aD1cIi9wMi9pbXBhY3RcIiAvPlxuICAgICAgICA8L1Njcm9sbFRvVG9wPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgPC9TY3JlZW4+XG4gIDwvUm9vdD5cbilcbiJdfQ== */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xhbmd1YWdlU3dpdGNoZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTStDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL0xhbmd1YWdlU3dpdGNoZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQnV0dG9uTGluayB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24tbGluaydcblxuY29uc3QgTGFuZ3VhZ2VTd2l0Y2hlclN0eWxlID0gc3R5bGVkKCdzZWN0aW9uJylgXG4gIGFsaWduLWNvbnRlbnQ6IHJpZ2h0O1xuICBkaXNwbGF5OiBibG9jay1pbmxpbmU7XG5gXG5cbmNvbnN0IGxhbmd1YWdlTmFtZXMgPSB7XG4gIGVuOiAnRW5nbGlzaCcsXG4gIGZyOiAnRnJhbsOnYWlzJyxcbn1cblxuZXhwb3J0IGNvbnN0IExhbmd1YWdlU3dpdGNoZXIgPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxMYW5ndWFnZVN3aXRjaGVyU3R5bGU+XG4gICAgICAgIDxCdXR0b25MaW5rIG9uQ2xpY2s9eygpID0+IGNsaWVudC53cml0ZURhdGEoeyBkYXRhOiBwcm9wcyB9KX0+XG4gICAgICAgICAge2xhbmd1YWdlTmFtZXNbcHJvcHMubGFuZ3VhZ2VdfVxuICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICA8L0xhbmd1YWdlU3dpdGNoZXJTdHlsZT5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5MYW5ndWFnZVN3aXRjaGVyLnByb3BUeXBlcyA9IHtcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL1BhZ2VOb3RGb3VuZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvUGFnZU5vdEZvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBIMSB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgeyBQIH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFRyYWNrUGFnZVZpZXdzIH0gZnJvbSAnLi9UcmFja1BhZ2VWaWV3cydcblxuY29uc3QgQ2VudGVyQ29udGVudCA9IHN0eWxlZCgnZGl2JylgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFBhZ2VOb3RGb3VuZCA9ICgpID0+IChcbiAgPENlbnRlckNvbnRlbnQ+XG4gICAgPEgxPlxuICAgICAgPFRyYW5zPlBhZ2Ugbm90IGZvdW5kPC9UcmFucz5cbiAgICA8L0gxPlxuICAgIDxQPlxuICAgICAgPFRyYW5zPlNvcnJ5LCB0aGUgcGFnZSB5b3Ugd2VyZSB0cnlpbmcgdG8gdmlldyBkb2VzIG5vdCBleGlzdC48L1RyYW5zPlxuICAgIDwvUD5cblxuICAgIDxUcmFja1BhZ2VWaWV3cyAvPlxuICA8L0NlbnRlckNvbnRlbnQ+XG4pXG4iXX0= */"
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





var GA = "UA-130179934-1";
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYmFja2J1dHRvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRWSIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2JhY2tidXR0b24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vbGluaydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IEJhY2tCdXR0b24gPSAoeyByb3V0ZSA9ICcnLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e2Nzc2BcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcblxuICAgICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9XG4gID5cbiAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgdG89e3JvdXRlfSB0ZXh0QWxpZ249XCJsZWZ0XCI+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIDxzcGFuIGFyaWEtbGFiZWw9XCIgXCI+JiM5NjY0Ozwvc3Bhbj4gPHNwYW4+QmFjayB0bzwvc3Bhbj57JyAnfVxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuICAgICAgPC9UcmFucz5cbiAgICA8L0xpbms+XG4gIDwvZGl2PlxuKVxuXG5CYWNrQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufVxuIl19 */"
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
}, ";}" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9uLWxpbmsvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUUiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9idXR0b24tbGluay9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgZm9udFNpemUsIGZvbnRXZWlnaHQsIGxpbmVIZWlnaHQsIHNwYWNlLCBjb2xvciB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuY29uc3QgQmFzZUJ1dHRvbkxpbmsgPSBzdHlsZWQoJ2J1dHRvbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IDNweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5mb2N1c0NvbG9yfTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uTGluayA9IHByb3BzID0+IChcbiAgPEJhc2VCdXR0b25MaW5rXG4gICAgZm9udFNpemU9e1sxLCBudWxsLCAyXX1cbiAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcbiAgICBsaW5lSGVpZ2h0PXtbMSwgbnVsbCwgMl19XG4gICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuXG5CdXR0b25MaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufVxuIl19 */"));

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
}, ";margin:0;border:0;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVFIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1xuICBmb250U2l6ZSxcbiAgZm9udFdlaWdodCxcbiAgbGluZUhlaWdodCxcbiAgc3BhY2UsXG4gIGNvbG9yU3R5bGUsXG4gIGNvbG9yLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuUHJvcHMnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IEJhc2VCdXR0b24gPSBzdHlsZWQoJ2J1dHRvbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250Qm9sZH07XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtjb2xvclN0eWxlfTtcbiAgJHtjb2xvcn07XG4gICR7c3BhY2V9O1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gcHJvcHMgPT4gKFxuICA8QmFzZUJ1dHRvblxuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIGNvbG9ycz1cImJ1dHRvblwiXG4gICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgM119XG4gICAgcHk9ezF9XG4gICAgcHg9e1syLCBudWxsLCAzXX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pXG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn1cbiJdfQ== */"));

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJZIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IExpbmssIEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9ICh7XG4gIHN1Ym1pdCA9IGZhbHNlLFxuICBsYW5kaW5nID0gZmFsc2UsXG4gIGNhbmNlbCA9IHRydWUsXG4gIGJ1dHRvbkxpbmsgPSB0cnVlLFxuICByb3V0ZSA9ICcnLFxuICBjYW5jZWxSb3V0ZSA9ICcvcDIvJyxcbiAgbmV4dFBhZ2UgPSAnJyxcbiAgb25DbGljayA9ICgpID0+IHt9LFxufSkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgbXQ9XCIxcmVtXCJcbiAgICBtYj1cIjRyZW1cIlxuICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgPlxuICAgIHtidXR0b25MaW5rID09PSBmYWxzZSA/IChcbiAgICAgIDxDb250YWluZXIgbXQ9XCIxcmVtXCI+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgIHtzdWJtaXQgPT09IHRydWUgPyAoXG4gICAgICAgICAgICA8VHJhbnM+U3VibWl0IHJlcG9ydCAmbmJzcDsg4p2vPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdSZXBvcnQgbm93JyA/IChcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25leHRQYWdlID09PSAnU2NhbW1lciBkZXRhaWxzJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IENsdWVzIGFib3V0IHRoZSBzdXNwZWN0PC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdNb25leSBsb3N0JyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IE1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1JlcG9ydCBub3cnID8gKFxuICAgICAgICAgICAgPFRyYW5zPlJlcG9ydCBub3cg4p2vPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdJbXBhY3Qgb2Ygc2NhbScgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBJbXBhY3Qgb2YgdGhlIHNjYW08L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1doYXQgaGFwcGVuZWQnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogV2hhdCBoYXBwZW5lZDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnU3VwcG9ydGluZyBmaWxlcycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBBZGQgZmlsZXM8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ0NvbnRhY3QgaW5mbycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBDb250YWN0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdDb25maXJtIGluZm9ybWF0aW9uJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFJldmlldyByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICB7bGFuZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25MaW5rIGNvbG9yPVwiYmxhY2tcIiBtYj17WzMsIG51bGwsIDVdfSB0bz17cm91dGV9PlxuICAgICAgICAgICAgPFRyYW5zPiDina4gJm5ic3A7IFJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICl9XG5cbiAgICB7Y2FuY2VsID09PSB0cnVlID8gKFxuICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPXtjYW5jZWxSb3V0ZX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogbnVsbH1cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBjb25zdCBCdXR0b25zQ29udGFpbmVyTGFuZGluZyA9ICgpID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AxXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMTwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AyXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMjwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lclllc05vID0gKHtcbiAgeWVzUm91dGUgPSAnJyxcbiAgbm9Sb3V0ZSA9ICcnLFxuICBtYXJnaW5CID0gJzEwZW0nLFxufSkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgbXQ9XCIxcmVtXCJcbiAgICBtYj1cIjRyZW1cIlxuICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDIuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXJnaW4tYm90dG9tOiAke21hcmdpbkJ9O1xuICAgIGB9XG4gID5cbiAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgPEJ1dHRvbkxpbmsgdGV4dEFsaWduPVwiY2VudGVyXCIgdG89e3llc1JvdXRlfT5cbiAgICAgICAgPFRyYW5zPlllczwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXtub1JvdXRlfT5cbiAgICAgICAgPFRyYW5zPk5vPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Db250YWluZXI+XG4pXG5cbkJ1dHRvbnNDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBidXR0b25MaW5rOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNhbmNlbFJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidXR0b25UaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzdWJtaXQ6IFByb3BUeXBlcy5ib29sLFxuICBuZXh0UGFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkJ1dHRvbnNDb250YWluZXJZZXNOby5wcm9wVHlwZXMgPSB7XG4gIHllc1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vUm91dGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWFyZ2luQjogUHJvcFR5cGVzLnN0cmluZyxcbn1cbiJdfQ== */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdZIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IExpbmssIEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9ICh7XG4gIHN1Ym1pdCA9IGZhbHNlLFxuICBsYW5kaW5nID0gZmFsc2UsXG4gIGNhbmNlbCA9IHRydWUsXG4gIGJ1dHRvbkxpbmsgPSB0cnVlLFxuICByb3V0ZSA9ICcnLFxuICBjYW5jZWxSb3V0ZSA9ICcvcDIvJyxcbiAgbmV4dFBhZ2UgPSAnJyxcbiAgb25DbGljayA9ICgpID0+IHt9LFxufSkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgbXQ9XCIxcmVtXCJcbiAgICBtYj1cIjRyZW1cIlxuICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgPlxuICAgIHtidXR0b25MaW5rID09PSBmYWxzZSA/IChcbiAgICAgIDxDb250YWluZXIgbXQ9XCIxcmVtXCI+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgIHtzdWJtaXQgPT09IHRydWUgPyAoXG4gICAgICAgICAgICA8VHJhbnM+U3VibWl0IHJlcG9ydCAmbmJzcDsg4p2vPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdSZXBvcnQgbm93JyA/IChcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25leHRQYWdlID09PSAnU2NhbW1lciBkZXRhaWxzJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IENsdWVzIGFib3V0IHRoZSBzdXNwZWN0PC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdNb25leSBsb3N0JyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IE1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1JlcG9ydCBub3cnID8gKFxuICAgICAgICAgICAgPFRyYW5zPlJlcG9ydCBub3cg4p2vPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdJbXBhY3Qgb2Ygc2NhbScgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBJbXBhY3Qgb2YgdGhlIHNjYW08L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1doYXQgaGFwcGVuZWQnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogV2hhdCBoYXBwZW5lZDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnU3VwcG9ydGluZyBmaWxlcycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBBZGQgZmlsZXM8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ0NvbnRhY3QgaW5mbycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBDb250YWN0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdDb25maXJtIGluZm9ybWF0aW9uJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFJldmlldyByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICB7bGFuZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25MaW5rIGNvbG9yPVwiYmxhY2tcIiBtYj17WzMsIG51bGwsIDVdfSB0bz17cm91dGV9PlxuICAgICAgICAgICAgPFRyYW5zPiDina4gJm5ic3A7IFJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICl9XG5cbiAgICB7Y2FuY2VsID09PSB0cnVlID8gKFxuICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPXtjYW5jZWxSb3V0ZX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogbnVsbH1cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBjb25zdCBCdXR0b25zQ29udGFpbmVyTGFuZGluZyA9ICgpID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AxXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMTwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AyXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMjwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lclllc05vID0gKHtcbiAgeWVzUm91dGUgPSAnJyxcbiAgbm9Sb3V0ZSA9ICcnLFxuICBtYXJnaW5CID0gJzEwZW0nLFxufSkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgbXQ9XCIxcmVtXCJcbiAgICBtYj1cIjRyZW1cIlxuICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDIuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXJnaW4tYm90dG9tOiAke21hcmdpbkJ9O1xuICAgIGB9XG4gID5cbiAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgPEJ1dHRvbkxpbmsgdGV4dEFsaWduPVwiY2VudGVyXCIgdG89e3llc1JvdXRlfT5cbiAgICAgICAgPFRyYW5zPlllczwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXtub1JvdXRlfT5cbiAgICAgICAgPFRyYW5zPk5vPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Db250YWluZXI+XG4pXG5cbkJ1dHRvbnNDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBidXR0b25MaW5rOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNhbmNlbFJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidXR0b25UaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzdWJtaXQ6IFByb3BUeXBlcy5ib29sLFxuICBuZXh0UGFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkJ1dHRvbnNDb250YWluZXJZZXNOby5wcm9wVHlwZXMgPSB7XG4gIHllc1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vUm91dGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWFyZ2luQjogUHJvcFR5cGVzLnN0cmluZyxcbn1cbiJdfQ== */"
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"])("button,div[name='buttonlink-container'] a{padding:0.7rem 2.5rem;text-align:center;}div[name='buttonlink-container'] a:first-of-type{margin-right:1rem;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;width:100%;}}margin-bottom:", marginB, ";label:ButtonsContainerYesNo;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlZIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IExpbmssIEJ1dHRvbkxpbmsgfSBmcm9tICcuLi9saW5rJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9ICh7XG4gIHN1Ym1pdCA9IGZhbHNlLFxuICBsYW5kaW5nID0gZmFsc2UsXG4gIGNhbmNlbCA9IHRydWUsXG4gIGJ1dHRvbkxpbmsgPSB0cnVlLFxuICByb3V0ZSA9ICcnLFxuICBjYW5jZWxSb3V0ZSA9ICcvcDIvJyxcbiAgbmV4dFBhZ2UgPSAnJyxcbiAgb25DbGljayA9ICgpID0+IHt9LFxufSkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgbXQ9XCIxcmVtXCJcbiAgICBtYj1cIjRyZW1cIlxuICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH1cbiAgPlxuICAgIHtidXR0b25MaW5rID09PSBmYWxzZSA/IChcbiAgICAgIDxDb250YWluZXIgbXQ9XCIxcmVtXCI+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgIHtzdWJtaXQgPT09IHRydWUgPyAoXG4gICAgICAgICAgICA8VHJhbnM+U3VibWl0IHJlcG9ydCAmbmJzcDsg4p2vPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdSZXBvcnQgbm93JyA/IChcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUcmFucz5OZXh0PC9UcmFucz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge25leHRQYWdlID09PSAnU2NhbW1lciBkZXRhaWxzJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IENsdWVzIGFib3V0IHRoZSBzdXNwZWN0PC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdNb25leSBsb3N0JyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IE1vbmV5IGxvc3Q8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1JlcG9ydCBub3cnID8gKFxuICAgICAgICAgICAgPFRyYW5zPlJlcG9ydCBub3cg4p2vPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdJbXBhY3Qgb2Ygc2NhbScgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBJbXBhY3Qgb2YgdGhlIHNjYW08L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ1doYXQgaGFwcGVuZWQnID8gKFxuICAgICAgICAgICAgPFRyYW5zPjogV2hhdCBoYXBwZW5lZDwvVHJhbnM+XG4gICAgICAgICAgKSA6IG5leHRQYWdlID09PSAnU3VwcG9ydGluZyBmaWxlcycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBBZGQgZmlsZXM8L1RyYW5zPlxuICAgICAgICAgICkgOiBuZXh0UGFnZSA9PT0gJ0NvbnRhY3QgaW5mbycgPyAoXG4gICAgICAgICAgICA8VHJhbnM+OiBDb250YWN0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgICApIDogbmV4dFBhZ2UgPT09ICdDb25maXJtIGluZm9ybWF0aW9uJyA/IChcbiAgICAgICAgICAgIDxUcmFucz46IFJldmlldyByZXBvcnQ8L1RyYW5zPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICkgOiAoXG4gICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgICB7bGFuZGluZyA9PT0gdHJ1ZSA/IChcbiAgICAgICAgICA8QnV0dG9uTGluayBjb2xvcj1cImJsYWNrXCIgbWI9e1szLCBudWxsLCA1XX0gdG89e3JvdXRlfT5cbiAgICAgICAgICAgIDxUcmFucz5SZXBvcnQgbm93IOKdrzwvVHJhbnM+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25MaW5rIGNvbG9yPVwiYmxhY2tcIiBtYj17WzMsIG51bGwsIDVdfSB0bz17cm91dGV9PlxuICAgICAgICAgICAgPFRyYW5zPiDina4gJm5ic3A7IFJlcG9ydCBhbm90aGVyIHNjYW08L1RyYW5zPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICl9XG5cbiAgICB7Y2FuY2VsID09PSB0cnVlID8gKFxuICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPXtjYW5jZWxSb3V0ZX0gdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPFRyYW5zPkNhbmNlbCByZXBvcnQ8L1RyYW5zPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApIDogbnVsbH1cbiAgPC9Db250YWluZXI+XG4pXG5cbmV4cG9ydCBjb25zdCBCdXR0b25zQ29udGFpbmVyTGFuZGluZyA9ICgpID0+IChcbiAgPENvbnRhaW5lclxuICAgIG10PVwiMXJlbVwiXG4gICAgbWI9XCI0cmVtXCJcbiAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnYmxvY2snLCAnZmxleCddfVxuICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfVxuICA+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AxXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMTwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPVwiL3AyXCI+XG4gICAgICAgIDxUcmFucz5Qcm90b3R5cGUgMjwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lclllc05vID0gKHtcbiAgeWVzUm91dGUgPSAnJyxcbiAgbm9Sb3V0ZSA9ICcnLFxuICBtYXJnaW5CID0gJzEwZW0nLFxufSkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgbXQ9XCIxcmVtXCJcbiAgICBtYj1cIjRyZW1cIlxuICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgY3NzPXtjc3NgXG4gICAgICBidXR0b24sXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDIuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXJnaW4tYm90dG9tOiAke21hcmdpbkJ9O1xuICAgIGB9XG4gID5cbiAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiPlxuICAgICAgPEJ1dHRvbkxpbmsgdGV4dEFsaWduPVwiY2VudGVyXCIgdG89e3llc1JvdXRlfT5cbiAgICAgICAgPFRyYW5zPlllczwvVHJhbnM+XG4gICAgICA8L0J1dHRvbkxpbms+XG4gICAgPC9Db250YWluZXI+XG4gICAgPENvbnRhaW5lciBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIj5cbiAgICAgIDxCdXR0b25MaW5rIHRleHRBbGlnbj1cImNlbnRlclwiIHRvPXtub1JvdXRlfT5cbiAgICAgICAgPFRyYW5zPk5vPC9UcmFucz5cbiAgICAgIDwvQnV0dG9uTGluaz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9Db250YWluZXI+XG4pXG5cbkJ1dHRvbnNDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBidXR0b25MaW5rOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNhbmNlbFJvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidXR0b25UaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBzdWJtaXQ6IFByb3BUeXBlcy5ib29sLFxuICBuZXh0UGFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59XG5cbkJ1dHRvbnNDb250YWluZXJZZXNOby5wcm9wVHlwZXMgPSB7XG4gIHllc1JvdXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vUm91dGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbWFyZ2luQjogUHJvcFR5cGVzLnN0cmluZyxcbn1cbiJdfQ== */"))
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
})(styled_system__WEBPACK_IMPORTED_MODULE_4__["alignItems"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["alignContent"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["justifyContent"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flex"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexWrap"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexBasis"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["flexDirection"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["width"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["maxWidth"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["height"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["maxHeight"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["display"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["justifySelf"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["alignSelf"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["borders"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["borderColor"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["textAlign"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["position"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["top"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["bottom"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["left"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["right"], " ", styled_system__WEBPACK_IMPORTED_MODULE_4__["zIndex"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DRSIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQge1xuICBhbGlnbkl0ZW1zLFxuICBhbGlnbkNvbnRlbnQsXG4gIGp1c3RpZnlDb250ZW50LFxuICBmbGV4V3JhcCxcbiAgZmxleEJhc2lzLFxuICBmbGV4RGlyZWN0aW9uLFxuICB3aWR0aCxcbiAgbWF4V2lkdGgsXG4gIGhlaWdodCxcbiAgbWF4SGVpZ2h0LFxuICBjb2xvcixcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGZsZXgsXG4gIGp1c3RpZnlTZWxmLFxuICBkaXNwbGF5LFxuICBhbGlnblNlbGYsXG4gIHNwYWNlLFxuICB0ZXh0QWxpZ24sXG4gIHBvc2l0aW9uLFxuICB0b3AsXG4gIHJpZ2h0LFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHpJbmRleCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgJHthbGlnbkl0ZW1zfVxuICAke2FsaWduQ29udGVudH1cbiAgJHtqdXN0aWZ5Q29udGVudH1cbiAgJHtmbGV4fVxuICAke2ZsZXhXcmFwfVxuICAke2ZsZXhCYXNpc31cbiAgJHtmbGV4RGlyZWN0aW9ufVxuICAke3dpZHRofVxuICAke21heFdpZHRofVxuICAke2hlaWdodH1cbiAgJHttYXhIZWlnaHR9XG4gICR7Y29sb3J9XG4gICR7ZGlzcGxheX1cbiAgJHtzcGFjZX1cbiAgJHtqdXN0aWZ5U2VsZn1cbiAgJHthbGlnblNlbGZ9XG4gICR7Ym9yZGVyc31cbiAgJHtib3JkZXJDb2xvcn1cbiAgJHt0ZXh0QWxpZ259XG4gICR7cG9zaXRpb259XG4gICR7dG9wfVxuICAke2JvdHRvbX1cbiAgJHtsZWZ0fVxuICAke3JpZ2h0fVxuICAke3pJbmRleH1cbmBcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gcHJvcHMgPT4gKFxuICA8bWFpblxuICAgIGNzcz17Y3NzYFxuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgYH1cbiAgPlxuICAgIDxDb250YWluZXIgbT1cImF1dG9cIiB3aWR0aD17WzkgLyAxMCwgbnVsbCwgNCAvIDVdfSB7Li4ucHJvcHN9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICA8L21haW4+XG4pXG5cbkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEluZm9DYXJkID0gcHJvcHMgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgYm9yZGVyPVwiMnB4IHNvbGlkIGJsYWNrXCJcbiAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgIHBhZGRpbmc9XCIxMHB4XCJcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XCJpbmZvQ2FyZFwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuIl19 */");

var _ref =  false ? undefined : {
  name: "l044st-Content",
  styles: "flex:1 0 auto;label:Content;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvY29udGFpbmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFWSIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqKi9cbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQge1xuICBhbGlnbkl0ZW1zLFxuICBhbGlnbkNvbnRlbnQsXG4gIGp1c3RpZnlDb250ZW50LFxuICBmbGV4V3JhcCxcbiAgZmxleEJhc2lzLFxuICBmbGV4RGlyZWN0aW9uLFxuICB3aWR0aCxcbiAgbWF4V2lkdGgsXG4gIGhlaWdodCxcbiAgbWF4SGVpZ2h0LFxuICBjb2xvcixcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGZsZXgsXG4gIGp1c3RpZnlTZWxmLFxuICBkaXNwbGF5LFxuICBhbGlnblNlbGYsXG4gIHNwYWNlLFxuICB0ZXh0QWxpZ24sXG4gIHBvc2l0aW9uLFxuICB0b3AsXG4gIHJpZ2h0LFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHpJbmRleCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKCdkaXYnLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgJHthbGlnbkl0ZW1zfVxuICAke2FsaWduQ29udGVudH1cbiAgJHtqdXN0aWZ5Q29udGVudH1cbiAgJHtmbGV4fVxuICAke2ZsZXhXcmFwfVxuICAke2ZsZXhCYXNpc31cbiAgJHtmbGV4RGlyZWN0aW9ufVxuICAke3dpZHRofVxuICAke21heFdpZHRofVxuICAke2hlaWdodH1cbiAgJHttYXhIZWlnaHR9XG4gICR7Y29sb3J9XG4gICR7ZGlzcGxheX1cbiAgJHtzcGFjZX1cbiAgJHtqdXN0aWZ5U2VsZn1cbiAgJHthbGlnblNlbGZ9XG4gICR7Ym9yZGVyc31cbiAgJHtib3JkZXJDb2xvcn1cbiAgJHt0ZXh0QWxpZ259XG4gICR7cG9zaXRpb259XG4gICR7dG9wfVxuICAke2JvdHRvbX1cbiAgJHtsZWZ0fVxuICAke3JpZ2h0fVxuICAke3pJbmRleH1cbmBcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gcHJvcHMgPT4gKFxuICA8bWFpblxuICAgIGNzcz17Y3NzYFxuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgYH1cbiAgPlxuICAgIDxDb250YWluZXIgbT1cImF1dG9cIiB3aWR0aD17WzkgLyAxMCwgbnVsbCwgNCAvIDVdfSB7Li4ucHJvcHN9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICA8L21haW4+XG4pXG5cbkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEluZm9DYXJkID0gcHJvcHMgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgYm9yZGVyPVwiMnB4IHNvbGlkIGJsYWNrXCJcbiAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxuICAgIHBhZGRpbmc9XCIxMHB4XCJcbiAgICBiYWNrZ3JvdW5kQ29sb3I9XCJpbmZvQ2FyZFwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKVxuIl19 */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCZ0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgV29yZE1hcmsgZnJvbSAnLi4vd29yZG1hcmsnXG5pbXBvcnQgeyBVbCB9IGZyb20gJy4uL3Vub3JkZXJlZC1saXN0J1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGJnIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgYmc9e2JnfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICB3aWR0aD17MX1cbiAgICAgICAgaGVpZ2h0PXs1NX1cbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGRhdGEtdGVzdGlkPVwiYmFja2dyb3VuZC1jb2xvclwiXG4gICAgICAgIG09XCJhdXRvIGF1dG8gMCBhdXRvXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgZmxleD1cIjEgMSBhdXRvXCI+XG4gICAgICAgICAgPFVsIGxpc3RTdHlsZVR5cGU9XCJub25lXCIgbWI9ezB9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvVWw+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyIG1yPXszfSB3aWR0aD17Wyc0ZW0nLCBudWxsLCAnNmVtJ119PlxuICAgICAgICAgIDxXb3JkTWFya1xuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGZsYWc9XCIjZmZmXCJcbiAgICAgICAgICAgIHRleHQ9XCIjZmZmXCJcbiAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgYmc6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7IGJnOiAnYmxhY2snIH1cbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "16h5ezl-Footer",
  styles: "display:block;label:Footer;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZm9vdGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Db0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXInXG5pbXBvcnQgV29yZE1hcmsgZnJvbSAnLi4vd29yZG1hcmsnXG5pbXBvcnQgeyBVbCB9IGZyb20gJy4uL3Vub3JkZXJlZC1saXN0J1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGJnIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgYmc9e2JnfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICB3aWR0aD17MX1cbiAgICAgICAgaGVpZ2h0PXs1NX1cbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGRhdGEtdGVzdGlkPVwiYmFja2dyb3VuZC1jb2xvclwiXG4gICAgICAgIG09XCJhdXRvIGF1dG8gMCBhdXRvXCJcbiAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgZmxleD1cIjEgMSBhdXRvXCI+XG4gICAgICAgICAgPFVsIGxpc3RTdHlsZVR5cGU9XCJub25lXCIgbWI9ezB9PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvVWw+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8Q29udGFpbmVyIG1yPXszfSB3aWR0aD17Wyc0ZW0nLCBudWxsLCAnNmVtJ119PlxuICAgICAgICAgIDxXb3JkTWFya1xuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGZsYWc9XCIjZmZmXCJcbiAgICAgICAgICAgIHRleHQ9XCIjZmZmXCJcbiAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgYmc6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkZvb3Rlci5kZWZhdWx0UHJvcHMgPSB7IGJnOiAnYmxhY2snIH1cbiJdfQ== */"
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
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNFIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvaGVhZGVyL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NsZWFuUHJvcHMnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZCgnc3BhbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgJHtmb250U2l6ZX07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHt0ZXh0QWxpZ259O1xuYFxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBhczogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCB7IEgxLCBIMiwgSDMsIEg0LCBINSwgSDYgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
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
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["zIndex"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJFIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGZvbnRXZWlnaHQsXG4gIGhlaWdodCxcbiAgd2lkdGgsXG4gIGNvbG9yLFxuICBjb2xvclN0eWxlLFxuICBzcGFjZSxcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGRpc3BsYXksXG4gIHBvc2l0aW9uLFxuICB0b3AsXG4gIHJpZ2h0LFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHpJbmRleCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcblxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkKCdpbnB1dCcsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICAke2ZvbnRTaXplfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHtoZWlnaHR9O1xuICAke3dpZHRofTtcbiAgJHtzcGFjZX07XG4gICR7Ym9yZGVyc307XG4gICR7Ym9yZGVyQ29sb3J9O1xuICAke2Rpc3BsYXl9O1xuICAke3Bvc2l0aW9ufTtcbiAgJHtjb2xvclN0eWxlfTtcbiAgJHtjb2xvcn07XG4gICR7dG9wfTtcbiAgJHtyaWdodH07XG4gICR7Ym90dG9tfTtcbiAgJHtsZWZ0fTtcbiAgJHt6SW5kZXh9O1xuYFxuIl19 */"));

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
}, ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["zIndex"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGFiZWwvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JFIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGFiZWwvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGZvbnRXZWlnaHQsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgY29sb3JTdHlsZSxcbiAgZGlzcGxheSxcbiAgYm9yZGVyLFxuICBib3JkZXJDb2xvcixcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgcG9zaXRpb24sXG4gIHpJbmRleCxcbiAgdG9wLFxuICByaWdodCxcbiAgYm90dG9tLFxuICBsZWZ0LFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQoJ2xhYmVsJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yfTtcbiAgJHtjb2xvclN0eWxlfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtib3JkZXJ9O1xuICAke2JvcmRlckNvbG9yfTtcbiAgJHt3aWR0aH07XG4gICR7aGVpZ2h0fTtcbiAgJHtwb3NpdGlvbn07XG4gICR7ekluZGV4fTtcbiAgJHt0b3B9O1xuICAke3JpZ2h0fTtcbiAgJHtib3R0b219O1xuICAke2xlZnR9O1xuYFxuIl19 */"));

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ1kiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9saW5rL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBhc0FuY2hvciB9IGZyb20gJy4uLy4uL3V0aWxzL2FzQW5jaG9yJ1xuaW1wb3J0IHsgTGluayBhcyBSZWFjaExpbmsgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTGkgfSBmcm9tICcuLi9saXN0LWl0ZW0nXG5cbmNvbnN0IEJhc2VMaW5rID0gYXNBbmNob3IoUmVhY2hMaW5rKVxuY29uc3QgQmFzZUFuY2hvciA9IGFzQW5jaG9yKCdhJylcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBwcm9wcyA9PiAoXG4gIDxCYXNlTGlua1xuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIG1iPXs0fVxuICAgIGNvbG9ycz1cImxpbmtcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9CYXNlTGluaz5cbilcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uTGluayA9IHByb3BzID0+IChcbiAgPEJhc2VMaW5rXG4gICAgZm9udFNpemU9e1syLCBudWxsLCAzXX1cbiAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcbiAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgY29sb3JzPVwiYnV0dG9uXCJcbiAgICBtdD17WzIsIG51bGwsIDNdfVxuICAgIHB5PXsxfVxuICAgIHB4PXtbMiwgbnVsbCwgM119XG4gICAgey4uLnByb3BzfVxuICAgIGNzcz17Y3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGB9XG4gICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQmFzZUxpbms+XG4pXG5cbkJ1dHRvbkxpbmsucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkFuY2hvciA9IHByb3BzID0+IChcbiAgPEJhc2VBbmNob3JcbiAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxuICAgIGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX1cbiAgICBjb2xvcnM9XCJidXR0b25cIlxuICAgIG10PXtbMiwgbnVsbCwgM119XG4gICAgcHk9ezF9XG4gICAgcHg9e1syLCBudWxsLCAzXX1cbiAgICB7Li4ucHJvcHN9XG4gICAgY3NzPXtjc3NgXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYH1cbiAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9CYXNlQW5jaG9yPlxuKVxuXG5CdXR0b25BbmNob3IucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEEgPSBwcm9wcyA9PiAoXG4gIDxCYXNlQW5jaG9yXG4gICAgZm9udFNpemU9e1syLCBudWxsLCAzXX1cbiAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgbWI9ezR9XG4gICAgY29sb3JzPVwibGlua1wiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L0Jhc2VBbmNob3I+XG4pXG5cbkEucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RlckxpbmsgPSBwcm9wcyA9PiAoXG4gIDxMaSBtbD17M30gbWI9ezB9IGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIj5cbiAgICA8QmFzZUFuY2hvclxuICAgICAgZm9udFNpemU9e1sxLCBudWxsLCAyXX1cbiAgICAgIGxpbmVIZWlnaHQ9e1sxLCBudWxsLCAyXX1cbiAgICAgIGNvbG9ycz1cImZvb3RlckxpbmtcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0Jhc2VBbmNob3I+XG4gIDwvTGk+XG4pXG5cbkZvb3RlckxpbmsucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cbiJdfQ== */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGluay9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRFkiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9saW5rL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBhc0FuY2hvciB9IGZyb20gJy4uLy4uL3V0aWxzL2FzQW5jaG9yJ1xuaW1wb3J0IHsgTGluayBhcyBSZWFjaExpbmsgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTGkgfSBmcm9tICcuLi9saXN0LWl0ZW0nXG5cbmNvbnN0IEJhc2VMaW5rID0gYXNBbmNob3IoUmVhY2hMaW5rKVxuY29uc3QgQmFzZUFuY2hvciA9IGFzQW5jaG9yKCdhJylcblxuZXhwb3J0IGNvbnN0IExpbmsgPSBwcm9wcyA9PiAoXG4gIDxCYXNlTGlua1xuICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgbGluZUhlaWdodD17WzIsIG51bGwsIDNdfVxuICAgIG1iPXs0fVxuICAgIGNvbG9ycz1cImxpbmtcIlxuICAgIHsuLi5wcm9wc31cbiAgPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9CYXNlTGluaz5cbilcblxuTGluay5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uTGluayA9IHByb3BzID0+IChcbiAgPEJhc2VMaW5rXG4gICAgZm9udFNpemU9e1syLCBudWxsLCAzXX1cbiAgICBmb250V2VpZ2h0PVwibm9ybWFsXCJcbiAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgY29sb3JzPVwiYnV0dG9uXCJcbiAgICBtdD17WzIsIG51bGwsIDNdfVxuICAgIHB5PXsxfVxuICAgIHB4PXtbMiwgbnVsbCwgM119XG4gICAgey4uLnByb3BzfVxuICAgIGNzcz17Y3NzYFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGB9XG4gICAgZGlzcGxheT1cImlubGluZS1ibG9ja1wiXG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvQmFzZUxpbms+XG4pXG5cbkJ1dHRvbkxpbmsucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkFuY2hvciA9IHByb3BzID0+IChcbiAgPEJhc2VBbmNob3JcbiAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxuICAgIGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX1cbiAgICBjb2xvcnM9XCJidXR0b25cIlxuICAgIG10PXtbMiwgbnVsbCwgM119XG4gICAgcHk9ezF9XG4gICAgcHg9e1syLCBudWxsLCAzXX1cbiAgICB7Li4ucHJvcHN9XG4gICAgY3NzPXtjc3NgXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYH1cbiAgICBkaXNwbGF5PVwiaW5saW5lLWJsb2NrXCJcbiAgPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9CYXNlQW5jaG9yPlxuKVxuXG5CdXR0b25BbmNob3IucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEEgPSBwcm9wcyA9PiAoXG4gIDxCYXNlQW5jaG9yXG4gICAgZm9udFNpemU9e1syLCBudWxsLCAzXX1cbiAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgbWI9ezR9XG4gICAgY29sb3JzPVwibGlua1wiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAge3Byb3BzLmNoaWxkcmVufVxuICA8L0Jhc2VBbmNob3I+XG4pXG5cbkEucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cblxuZXhwb3J0IGNvbnN0IEZvb3RlckxpbmsgPSBwcm9wcyA9PiAoXG4gIDxMaSBtbD17M30gbWI9ezB9IGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIj5cbiAgICA8QmFzZUFuY2hvclxuICAgICAgZm9udFNpemU9e1sxLCBudWxsLCAyXX1cbiAgICAgIGxpbmVIZWlnaHQ9e1sxLCBudWxsLCAyXX1cbiAgICAgIGNvbG9ycz1cImZvb3RlckxpbmtcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0Jhc2VBbmNob3I+XG4gIDwvTGk+XG4pXG5cbkZvb3RlckxpbmsucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbn1cbiJdfQ== */"
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
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFFIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvbGlzdC1pdGVtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgZm9udFdlaWdodCxcbiAgZGlzcGxheSxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IHN0eWxlZCgnbGknLCB7XG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG59KWBcbiAgZm9udC1mYW1pbHk6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNhbnN9O1xuICBtYXJnaW46IDA7XG4gICR7Zm9udFNpemV9O1xuICAke2xpbmVIZWlnaHR9O1xuICAke3NwYWNlfTtcbiAgJHtjb2xvcn07XG4gICR7Zm9udFdlaWdodH07XG4gICR7ZGlzcGxheX07XG5gXG5cbkxpc3RJdGVtLnByb3BUeXBlcyA9IHtcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5saW5lSGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbn1cblxuZXhwb3J0IHsgTGkgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
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
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvcGFyYWdyYXBoL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFFIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvcGFyYWdyYXBoL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1xuICBmb250U2l6ZSxcbiAgbGluZUhlaWdodCxcbiAgc3BhY2UsXG4gIGNvbG9yLFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZCgncCcsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgJHtmb250U2l6ZX07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yfTtcbiAgJHtmb250V2VpZ2h0fTtcbiAgJHt0ZXh0QWxpZ259O1xuYFxuXG5QYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFdlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCB7IFAsIExlYWQgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvcGhhc2UtYmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl1QiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3BoYXNlLWJhbm5lci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuXG5jb25zdCBwaGFzZWJhbm5lciA9IGNzc2BcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgZm9udC1mYW1pbHk6IHJvYm90b3JlZ3VsYXIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEuMnJlbSAwLjlyZW07XG5cbiAgc3BhbjpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nOiAycHggOHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgc3BhbjpsYXN0LW9mLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgUGhhc2VCYW5uZXIgPSAoKSA9PiAoXG4gIDxkaXYgY3NzPXtwaGFzZWJhbm5lcn0+XG4gICAgPHNwYW4+QUxQSEE8L3NwYW4+XG4gICAgPHNwYW4+XG4gICAgICA8VHJhbnM+VGhpcyBzaXRlIHdpbGwgY2hhbmdlIGFzIHdlIHRlc3QgaWRlYXMuPC9UcmFucz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuKVxuIl19 */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvc3RlcHBlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTWSIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3N0ZXBwZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29udGFpbmVyJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uL3RleHQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5cbmV4cG9ydCBjb25zdCBTdGVwcyA9ICh7IGFjdGl2ZVN0ZXAsIHRvdGFsU3RlcHMgfSkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgY3NzPXtjc3NgXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzZmNzc3YjtcbiAgICAgIH1cbiAgICBgfVxuICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICBtYXJnaW5Cb3R0b209XCIxMHB4XCJcbiAgPlxuICAgIHsnICd9XG4gICAgPFRleHQ+XG4gICAgICA8VHJhbnM+XG4gICAgICAgIFN0ZXAge2FjdGl2ZVN0ZXB9IG9mIHt0b3RhbFN0ZXBzfVxuICAgICAgPC9UcmFucz5cbiAgICA8L1RleHQ+XG4gIDwvQ29udGFpbmVyPlxuKVxuXG5TdGVwcy5wcm9wVHlwZXMgPSB7XG4gIHRvdGFsU3RlcHM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgYWN0aXZlU3RlcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufVxuIl19 */"
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
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_5__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_5__["borders"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdGV4dC1hcmVhL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CRSIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3RleHQtYXJlYS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgZGlzcGxheSxcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBjb2xvcixcbiAgY29sb3JTdHlsZSxcbiAgZm9udFdlaWdodCxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgYm9yZGVycyxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgU3R5bGVkVGV4dEFyZWEgPSBzdHlsZWQoJ3RleHRhcmVhJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgbWFyZ2luOiAwO1xuICAke2Rpc3BsYXl9O1xuICAke2ZvbnRTaXplfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7Y29sb3JTdHlsZX07XG4gICR7Y29sb3J9O1xuICAke2ZvbnRXZWlnaHR9O1xuICAke3dpZHRofTtcbiAgJHtoZWlnaHR9O1xuICAke2JvcmRlcnN9XG5gXG5TdHlsZWRUZXh0QXJlYS5wcm9wVHlwZXMgPSB7XG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yU3R5bGUucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZvbnRXZWlnaHQucHJvcFR5cGVzLFxuICAuLi53aWR0aC5wcm9wVHlwZXMsXG4gIC4uLmhlaWdodC5wcm9wVHlwZXMsXG59XG5cbmV4cG9ydCBjb25zdCBUZXh0QXJlYSA9IHByb3BzID0+IChcbiAgPFN0eWxlZFRleHRBcmVhXG4gICAgZGlzcGxheT1cImJsb2NrXCJcbiAgICBmb250U2l6ZT17WzIsIG51bGwsIDNdfVxuICAgIGxpbmVIZWlnaHQ9e1syLCBudWxsLCAzXX1cbiAgICBjb2xvcnM9XCJ0ZXh0QXJlYVwiXG4gICAgd2lkdGg9e1snMzAwcHgnLCBudWxsLCAnNTAwcHgnXX1cbiAgICBoZWlnaHQ9e1snMjAwcHgnLCBudWxsLCAnMzAwcHgnXX1cbiAgICB7Li4ucHJvcHN9XG4gID5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvU3R5bGVkVGV4dEFyZWE+XG4pXG5cblRleHRBcmVhLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG4iXX0= */");
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
}, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["display"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["border"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["position"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["zIndex"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["top"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["right"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["bottom"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["left"], ";", styled_system__WEBPACK_IMPORTED_MODULE_1__["textAlign"],  false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdGV4dC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QkUiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy90ZXh0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQge1xuICBmb250U2l6ZSxcbiAgZm9udFdlaWdodCxcbiAgbGluZUhlaWdodCxcbiAgc3BhY2UsXG4gIGNvbG9yLFxuICBkaXNwbGF5LFxuICBib3JkZXIsXG4gIGJvcmRlckNvbG9yLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBwb3NpdGlvbixcbiAgekluZGV4LFxuICB0b3AsXG4gIHJpZ2h0LFxuICBib3R0b20sXG4gIGxlZnQsXG4gIHRleHRBbGlnbixcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSdcbmltcG9ydCB7IGNsZWFuUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9jbGVhblByb3BzJ1xuXG5leHBvcnQgY29uc3QgU3R5bGVkU3BhbiA9IHN0eWxlZCgnc3BhbicsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4gY2xlYW5Qcm9wcyhwcm9wKSxcbn0pYFxuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2Fuc307XG4gIG1hcmdpbjogMDtcbiAgJHtmb250U2l6ZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7bGluZUhlaWdodH07XG4gICR7c3BhY2V9O1xuICAke2NvbG9yfTtcbiAgJHtkaXNwbGF5fTtcbiAgJHtib3JkZXJ9O1xuICAke2JvcmRlckNvbG9yfTtcbiAgJHt3aWR0aH07XG4gICR7aGVpZ2h0fTtcbiAgJHtwb3NpdGlvbn07XG4gICR7ekluZGV4fTtcbiAgJHt0b3B9O1xuICAke3JpZ2h0fTtcbiAgJHtib3R0b219O1xuICAke2xlZnR9O1xuICAke3RleHRBbGlnbn1cbmBcbmV4cG9ydCB7IFRleHQgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */");


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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdG9wYmFubmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy90b3BiYW5uZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG4vKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IEEgfSBmcm9tICcuLi9saW5rJ1xuaW1wb3J0IHsgTGFuZ3VhZ2VTd2l0Y2hlciB9IGZyb20gJy4uLy4uL0xhbmd1YWdlU3dpdGNoZXInXG5pbXBvcnQgeyBHRVRfTEFOR1VBR0VfUVVFUlkgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHJjbXBicmFuZGluZ2VuZyBmcm9tICcuLi8uLi9pbWFnZXMvcmNtcGJyYW5kaW5nZW5nLnN2ZydcbmltcG9ydCByY21wYnJhbmRpbmdmcmUgZnJvbSAnLi4vLi4vaW1hZ2VzL3JjbXBicmFuZGluZ2ZyZS5zdmcnXG5cbmV4cG9ydCBjb25zdCBUb3BCYW5uZXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgYmcgfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnkgcXVlcnk9e0dFVF9MQU5HVUFHRV9RVUVSWX0+XG4gICAgICB7KHsgZGF0YTogeyBsYW5ndWFnZSB9IH0pID0+IChcbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIGJnPXtiZ31cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgd2lkdGg9ezF9XG4gICAgICAgICAgaGVpZ2h0PXtbNjAsIG51bGwsIDYwXX1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImJhY2tncm91bmQtY29sb3JcIlxuICAgICAgICA+XG4gICAgICAgICAgPENvbnRhaW5lciBtbD17M30gd2lkdGg9e1syNTAsIG51bGwsIDMwMF19PlxuICAgICAgICAgICAgPEFcbiAgICAgICAgICAgICAgY29sb3JzPVwiZm9vdGVyTGlua1wiXG4gICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgIGxhbmd1YWdlID09PSAnZnInXG4gICAgICAgICAgICAgICAgICA/ICdodHRwOi8vd3d3LnJjbXAtZ3JjLmdjLmNhL2ZyJ1xuICAgICAgICAgICAgICAgICAgOiAnaHR0cDovL3d3dy5yY21wLWdyYy5nYy5jYS9lbidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtsYW5ndWFnZSA9PT0gJ2ZyJyA/IHJjbXBicmFuZGluZ2ZyZSA6IHJjbXBicmFuZGluZ2VuZ31cbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPT09ICdmcidcbiAgICAgICAgICAgICAgICAgICAgPyAnR2VuZGFybWVyaWUgcm95YWxlIGR1IENhbmFkYSdcbiAgICAgICAgICAgICAgICAgICAgOiAnUm95YWwgQ2FuYWRpYW4gTW91bnRlZCBQb2xpY2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9BPlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIGZsZXg9XCIxIDEgYXV0b1wiXG4gICAgICAgICAgICBtcj17M31cbiAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhbmd1YWdlID09PSAnZW4nID8gbnVsbCA6IDxMYW5ndWFnZVN3aXRjaGVyIGxhbmd1YWdlPVwiZW5cIiAvPn1cbiAgICAgICAgICAgIHtsYW5ndWFnZSA9PT0gJ2ZyJyA/IG51bGwgOiA8TGFuZ3VhZ2VTd2l0Y2hlciBsYW5ndWFnZT1cImZyXCIgLz59XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgKX1cbiAgICA8L1F1ZXJ5PlxuICApXG59XG5cblRvcEJhbm5lci5wcm9wVHlwZXMgPSB7XG4gIGxhbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYmc6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cblRvcEJhbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJnOiAnYmxhY2snLFxufVxuIl19 */"
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
}, ";margin:0;padding:0;", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUUiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy91bm9yZGVyZWQtbGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvbnRTaXplLCBsaW5lSGVpZ2h0LCBzcGFjZSwgY29sb3IsIGZvbnRXZWlnaHQgfSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjbGVhblByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2xlYW5Qcm9wcydcblxuZXhwb3J0IGNvbnN0IFVub3JkZXJlZExpc3QgPSBzdHlsZWQoJ3VsJywge1xuICBzaG91bGRGb3J3YXJkUHJvcDogcHJvcCA9PiBjbGVhblByb3BzKHByb3ApLFxufSlgXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAke2ZvbnRTaXplfTtcbiAgJHtsaW5lSGVpZ2h0fTtcbiAgJHtzcGFjZX07XG4gICR7Zm9udFdlaWdodH07XG4gICR7Y29sb3J9O1xuYFxuVW5vcmRlcmVkTGlzdC5wcm9wVHlwZXMgPSB7XG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4ubGluZUhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbn1cblxuZXhwb3J0IHsgVWwgfSBmcm9tICcuL3ByZXNldHMnXG4iXX0= */"));
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
    Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"])("list-style-type:", listStyleType, ";label:Ul;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdW5vcmRlcmVkLWxpc3QvcHJlc2V0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvY29tcG9uZW50cy91bm9yZGVyZWQtbGlzdC9wcmVzZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgVW5vcmRlcmVkTGlzdCB9IGZyb20gJy4nXG4vKiogQGpzeCBqc3ggKiovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5cbmV4cG9ydCBjb25zdCBVbCA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBsaXN0U3R5bGVUeXBlLCAuLi5yZXN0IH0gPSBwcm9wc1xuICB2YXIgcGFkZGluZ1ZhbHVlXG5cbiAgaWYgKGxpc3RTdHlsZVR5cGUgPT09ICdub25lJykgcGFkZGluZ1ZhbHVlID0gMFxuICBlbHNlIHBhZGRpbmdWYWx1ZSA9IFs1LCBudWxsLCA2XVxuXG4gIHJldHVybiAoXG4gICAgPFVub3JkZXJlZExpc3RcbiAgICAgIGZvbnRTaXplPXtbMiwgbnVsbCwgM119XG4gICAgICBsaW5lSGVpZ2h0PXtbMiwgbnVsbCwgM119XG4gICAgICBwbD17cGFkZGluZ1ZhbHVlfVxuICAgICAgbWI9ezR9XG4gICAgICBjc3M9e2Nzc2BcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiAke2xpc3RTdHlsZVR5cGV9O1xuICAgICAgYH1cbiAgICAgIHsuLi5yZXN0fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L1Vub3JkZXJlZExpc3Q+XG4gIClcbn1cblxuVWwuZGVmYXVsdFByb3BzID0ge1xuICBsaXN0U3R5bGVUeXBlOiAnZGlzYycsXG59XG5cblVsLnByb3BUeXBlcyA9IHtcbiAgbGlzdFN0eWxlVHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG59XG4iXX0= */"))
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2FybmluZy1iYW5uZXIvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXVCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd2FybmluZy1iYW5uZXIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby11bmVzY2FwZWQtZW50aXRpZXMgKi9cbi8qKiBAanN4IGpzeCAqKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lcidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi90ZXh0J1xuXG5jb25zdCBiYW5uZXJTdHlsZSA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBXYXJuaW5nQmFubmVyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGJnIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lclxuICAgICAgZGF0YS10ZXN0aWQ9XCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAgICAgIGNzcz17YmFubmVyU3R5bGV9XG4gICAgICBiZz17Ymd9XG4gICAgICBoZWlnaHQ9e1s1MCwgbnVsbCwgNjBdfVxuICAgID5cbiAgICAgIDxUZXh0IHBhZGRpbmdMZWZ0PVwiMTBweFwiIHBhZGRpbmdSaWdodD1cIjEwcHhcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFRyYW5zPlxuICAgICAgICAgIFdhcm5pbmchIFRoaXMgaXMgYSBwcm90b3R5cGUuIEl0IHdvbid0IGFjdHVhbGx5IHN1Ym1pdCB5b3VyIHJlcG9ydCB0b1xuICAgICAgICAgIHRoZSBSQ01QLlxuICAgICAgICA8L1RyYW5zPlxuICAgICAgPC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbldhcm5pbmdCYW5uZXIucHJvcFR5cGVzID0ge1xuICBiZzogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuV2FybmluZ0Jhbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJnOiAneWVsbG93Jyxcbn1cbiJdfQ== */"
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
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd29yZG1hcmsvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSThCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd29yZG1hcmsvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgRmlwRmxhZyA9IHN0eWxlZCgncGF0aCcpYFxuICBmaWxsOiAke3Byb3BzID0+IHByb3BzLmZsYWd9O1xuYFxuXG5jb25zdCBGaXBUZXh0ID0gc3R5bGVkKCdwYXRoJylgXG4gIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGV4dH07XG5gXG5cbmNvbnN0IFdvcmRtYXJrID0gKHtcbiAgd2lkdGggPSAnMTBlbScsXG4gIGZsYWcgPSAnI0YwMCcsXG4gIHRleHQgPSAnIzAwMCcsXG4gIGxhbmcgPSAnZW4nLFxuICAuLi5wcm9wc1xufSkgPT4gKFxuICA8c3ZnXG4gICAgcm9sZT1cImltZ1wiXG4gICAgYXJpYS1sYWJlbD17XG4gICAgICBsYW5nID09PSAnZW4nXG4gICAgICAgID8gJ1N5bWJvbCBvZiB0aGUgR292ZXJubWVudCBvZiBDYW5hZGEnXG4gICAgICAgIDogJ1N5bWJvbGUgZHUgZ291dmVybmVtZW50IGR1IENhbmFkYSdcbiAgICB9XG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgd2lkdGg9e3dpZHRofVxuICAgIGhlaWdodD1cIjEwMCVcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTQzIDM0XCJcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pbllNaW4gbWVldFwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPGcgaWQ9XCJ3bW1zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xLCAtMSlcIj5cbiAgICAgIDxGaXBGbGFnXG4gICAgICAgIGNsYXNzTmFtZT1cImZpcGZsYWdcIlxuICAgICAgICBmbGFnPXtmbGFnfVxuICAgICAgICBkYXRhLXRlc3RpZD1cImZsYWdcIlxuICAgICAgICBkPVwiTTEzNy45LDEuMmg1LjJ2MTAuNGgtNS4yVjEuMnogTTEyOC45LDYuNGwtMC4zLDAuMWMwLDAsMS44LDEuNSwxLjgsMS42YzAuMSwwLjEsMC4yLDAuMSwwLjEsMC40IGMtMC4xLDAuMy0wLjIsMC42LTAuMiwwLjZzMS42LTAuMywxLjgtMC40YzAuMiwwLDAuMywwLDAuMywwLjJjMCwwLjItMC4xLDEuOS0wLjEsMS45aDAuNWMwLDAtMC4xLTEuOC0wLjEtMS45IGMwLTAuMiwwLjEtMC4yLDAuMy0wLjJjMC4yLDAsMS44LDAuNCwxLjgsMC40cy0wLjEtMC40LTAuMi0wLjZjLTAuMS0wLjMsMC0wLjMsMC4xLTAuNGMwLjEtMC4xLDEuOC0xLjYsMS44LTEuNmwtMC4zLTAuMSBjLTAuMi0wLjEtMC4xLTAuMi0wLjEtMC4zczAuMy0xLjEsMC4zLTEuMXMtMC44LDAuMi0wLjksMC4yYy0wLjEsMC0wLjIsMC0wLjItMC4xcy0wLjItMC41LTAuMi0wLjVzLTAuOSwxLTEsMS4xIGMtMC4yLDAuMi0wLjQsMC0wLjMtMC4yYzAtMC4yLDAuNS0yLjMsMC41LTIuM3MtMC41LDAuMy0wLjcsMC40cy0wLjMsMC4xLTAuMy0wLjFjLTAuMS0wLjItMC43LTEuMy0wLjctMS40YzAsMC0wLjYsMS4yLTAuNywxLjQgcy0wLjIsMC4yLTAuMywwLjFjLTAuMi0wLjEtMC43LTAuNC0wLjctMC40czAuNSwyLjEsMC41LDIuM3MtMC4xLDAuMy0wLjMsMC4ybC0xLTEuMWMwLDAtMC4xLDAuMy0wLjIsMC40YzAsMC4xLTAuMSwwLjItMC4yLDAuMSBjLTAuMiwwLTEtMC4yLTEtMC4yczAuMywxLDAuNCwxLjFDMTI5LjEsNi4xLDEyOS4xLDYuMywxMjguOSw2LjR6IE0xMjIuMiwxLjJoNS4ydjEwLjRoLTUuMlYxLjJ6XCJcbiAgICAgIC8+XG4gICAgICA8RmlwVGV4dFxuICAgICAgICBjbGFzc05hbWU9XCJmaXB0ZXh0XCJcbiAgICAgICAgdGV4dD17dGV4dH1cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJ0ZXh0XCJcbiAgICAgICAgZD1cIk0xNDQuMiwzMi40Yy0wLjQsMC45LTEuMiwxLjItMS43LDEuMmMtMC42LDAtMi40LTAuMS0yLjQtNC44YzAsMCwwLTkuNSwwLTEwLjFjMC0zLjEtMi40LTUuNi04LjYtNS42IGMtNi43LDAtNi44LDMuMy02LjgsNC4xYy0wLjEsMC45LDAuNCwxLjksMi4xLDEuOWMxLjUsMCwxLjktMS43LDIuMS0yLjNjMC4yLTAuNywwLjMtMi43LDMtMi43YzIuMywwLDMuNywyLDMuOCw0LjkgYzAsMC41LDAsMC44LDAsMS4xYzAsMC4yLDAsMC4zLDAsMC41bDAsMGwwLDB2MC4xYy0wLjIsMS0wLjcsMS41LTEuNiwxLjljLTEuMiwwLjYtNC43LDEuMS01LjEsMS4yYy0xLjQsMC4zLTUuMywxLjMtNS4yLDUuNCBjMC4xLDQsNC4xLDUuNCw2LjksNS4zYzIuNy0wLjEsNC4zLTEuMiw1LTEuOGMwLjQtMC4zLDAuNC0wLjMsMC43LDAuMWMwLjQsMC40LDEuNywxLjcsNC44LDEuN2MzLjIsMCwzLjYtMS41LDMuOC0yIEMxNDUuMSwzMi4yLDE0NC40LDMxLjksMTQ0LjIsMzIuNHogTTEzMS43LDMzLjVjLTIuOCwwLTMuNS0yLjMtMy41LTMuNWMwLTEuMSwwLjYtMy40LDMuNC01YzAsMCwxLjMtMC44LDMuOC0xLjggYzAuMSwwLDAuMiwwLDAuMiwwczAuMSwwLjEsMC4xLDAuMmwwLDBsMCwwdjAuMWwwLDBsMCwwdjAuMWwwLDBsMCwwbDAsMHY0LjJDMTM1LjcsMzEuMSwxMzQuMSwzMy41LDEzMS43LDMzLjV6IE0xMjIuNSwzMy40IGMtMC40LTAuMS0yLjksMC4yLTIuOS03LjRzMC0yMy45LDAtMjMuOWMwLTAuMywwLTEuMS0wLjktMS4xYy0wLjksMC02LjksMC4zLTcuMywwLjRjLTAuNCwwLTAuNywwLjUsMCwwLjUgYzAuNywwLjEsMy45LDAuMywzLjksNS42YzAsMi42LDAsNS4yLDAsNy4xYzAsMC4xLDAsMC4yLDAsMC4yYzAsMC4yLDAsMC4zLTAuMSwwLjRjMCwwLDAsMCwwLDAuMWwwLDBjLTAuMSwwLjEtMC4yLDAtMC41LTAuMiBjLTAuNS0wLjQtMi44LTEuOC01LjctMS44Yy00LjcsMC0xMC41LDMuNC0xMC41LDEwLjRjMCw3LjUsNS4zLDExLjEsMTAuOCwxMS4xYzIuNywwLDQuNi0xLjIsNS4zLTEuNmMwLjgtMC41LDAuNy0wLjQsMC44LDAuMyBjMC4xLDAuNSwwLDEuNSwxLjQsMS40YzEuNS0wLjIsNS4xLTAuNiw1LjgtMC43QzEyMy4zLDMzLjksMTIzLjEsMzMuNSwxMjIuNSwzMy40eiBNMTEwLjEsMzMuN2MtNC40LDAtNi43LTUuMi02LjctMTAuMiBjMC01LjUsMy4xLTkuMiw2LjQtOWM0LjMsMC4zLDUuNCwzLjcsNS41LDkuOGMwLDAuNCwwLDAuOCwwLDEuM0MxMTUuMiwzMS42LDExMi43LDMzLjcsMTEwLjEsMzMuN3ogTTk4LjQsMzIuNCBjLTAuNCwwLjktMS4yLDEuMi0xLjcsMS4yYy0wLjYsMC0yLjQtMC4xLTIuNC00LjhjMCwwLDAtOS41LDAtMTAuMWMwLTMuMS0yLjQtNS42LTguNi01LjZjLTYuNywwLTYuOCwzLjMtNi44LDQuMSBjLTAuMSwwLjksMC40LDEuOSwyLjEsMS45YzEuNSwwLDEuOS0xLjcsMi4xLTIuM2MwLjItMC43LDAuMy0yLjcsMy0yLjdjMi4zLDAsMy44LDIsMy44LDV2MC4xYzAsMC4xLDAsMC4yLDAsMC4ydjAuMyBjMCwwLjEsMCwwLjMsMCwwLjRjLTAuMSwxLjUtMC41LDItMS43LDIuNmMtMS4yLDAuNi00LjcsMS4xLTUuMSwxLjJjLTEuNCwwLjMtNS4zLDEuMy01LjIsNS40YzAuMSw0LDQuMSw1LjQsNi45LDUuMyBjMi43LTAuMSw0LjMtMS4yLDUtMS44YzAuNC0wLjMsMC40LTAuMywwLjcsMC4xYzAuNCwwLjQsMS43LDEuNyw0LjgsMS43YzMuMiwwLDMuNi0xLjUsMy44LTJDOTkuMywzMi4yLDk4LjcsMzEuOSw5OC40LDMyLjR6ICBNODYsMzMuNWMtMi44LDAtMy41LTIuMy0zLjUtMy41YzAtMS4xLDAuNi0zLjQsMy40LTVjMCwwLDEuMy0wLjgsMy44LTEuOGMwLjEsMCwwLjIsMCwwLjIsMHYwLjFsMCwwbDAsMGMwLDAuMSwwLDAuMiwwLDAuNHYtMC4xIGMwLDAsMCwwLDAsMC4xdjQuMkM4OS45LDMxLjEsODguMywzMy41LDg2LDMzLjV6IE03Ni40LDMzLjRjLTAuOC0wLjItMi4yLTEuMS0yLjItNS41di04YzAtMS45LDAuMi02LjgtNy4zLTYuOCBjLTMuOSwwLTYuMSwyLTYuMywyLjFjLTAuMywwLjMtMC41LDAuNC0wLjYtMC4xYy0wLjEtMC40LTAuMy0xLTAuNC0xLjRjLTAuMS0wLjMtMC4zLTAuNi0xLTAuNWMtMC43LDAuMS01LjEsMC44LTUuOSwxIGMtMC43LDAuMi0wLjUsMC41LDAsMC42YzAuNSwwLjEsMi45LDAuMywyLjksNC40czAsOC42LDAsOC42YzAsNS0xLDUuNC0xLjksNS43Yy0xLjIsMC4zLTAuNiwwLjctMC4xLDAuN2MwLDAsOC45LDAsOS4xLDAgYzAuNiwwLDAuOS0wLjYtMC4zLTAuOGMtMS4yLTAuMi0yLjMtMC45LTIuMy00LjhjMC0wLjQsMC00LjcsMC01LjVjMC0yLjEtMC41LTguNSw1LjMtOC42YzQuMS0wLjEsNC41LDMuMyw0LjUsNS41djguNSBjMCwzLjUtMSw0LjYtMi4yLDQuOGMtMS4xLDAuMi0wLjksMC43LTAuMywwLjdjMC4yLDAsOS4zLDAsOS4zLDBDNzcuMiwzNC4yLDc3LjcsMzMuNyw3Ni40LDMzLjR6IE01Mi4xLDMyLjQgYy0wLjQsMC45LTEuMiwxLjItMS43LDEuMmMtMC42LDAtMi40LTAuMS0yLjQtNC44YzAsMCwwLTkuNSwwLTEwLjFjMC0zLjEtMi40LTUuNi04LjYtNS42Yy02LjcsMC02LjgsMy4zLTYuOCw0LjEgYy0wLjEsMC45LDAuNCwxLjksMi4xLDEuOWMxLjUsMCwxLjktMS43LDIuMS0yLjNjMC4yLTAuNywwLjMtMi43LDMtMi43YzIuMywwLDMuNywyLDMuOCw0LjljMCwwLjUsMCwwLjgsMCwxLjEgYzAsMC4yLDAsMC40LTAuMSwwLjV2MC4xbDAsMGMtMC4yLDEtMC43LDEuNS0xLjYsMS45Yy0xLjIsMC42LTQuNywxLjEtNS4xLDEuMmMtMS40LDAuMy01LjMsMS4zLTUuMiw1LjRjMC4xLDQsNC4xLDUuNCw2LjksNS4zIGMyLjctMC4xLDQuMy0xLjIsNS0xLjhjMC40LTAuMywwLjQtMC4zLDAuNywwLjFjMC40LDAuNCwxLjcsMS43LDQuOCwxLjdjMy4yLDAsMy42LTEuNSwzLjgtMkM1MywzMi4yLDUyLjMsMzEuOSw1Mi4xLDMyLjR6ICBNMzkuNiwzMy41Yy0yLjgsMC0zLjUtMi4zLTMuNS0zLjVzMC42LTMuNCwzLjQtNWMwLDAsMS4zLTAuOCwzLjgtMS44YzAuMSwwLDAuMiwwLDAuMiwwczAuMSwwLjEsMC4xLDAuMmwwLDBsMCwwbDAsMCBjMCwwLDAsMC4xLDAsMC4ybDAsMGwwLDB2MC4xbDAsMGwwLDBsMCwwdjQuMkM0My42LDMxLjEsNDIsMzMuNSwzOS42LDMzLjV6IE0zMCwyNC44Yy0xLDMuMi0yLjksOC40LTkuOCw4LjYgQzEzLDMzLjUsOC43LDI4LjYsOC41LDE5LjVDOC4yLDkuOCwxMi40LDIuNCwxOC45LDIuMmM3LjMtMC4xLDkuOSw4LjYsMTAsOS45YzAuMSwxLDEuNCwwLjksMS40LTAuMWMwLTAuNS0wLjYtOS4xLTAuOC0xMC4xIGMtMC4yLTEtMS0wLjYtMS4yLTAuMkMyOC4yLDIsMjguNCwxLjQsMjgsMi4zYy0wLjQsMC45LTEuNSwwLjQtMS45LDAuM2MtMS4yLTAuNS0zLjUtMS43LTcuMi0xLjZjLTguNSwwLjItMTcuMiw2LjUtMTcsMTcuNSBjMC4yLDEwLjcsOC44LDE2LjcsMTYuOCwxNi42YzcuMy0wLjEsMTEuNC00LjcsMTIuNi0xMEMzMS43LDIzLjgsMzAuNCwyMy41LDMwLDI0Ljh6XCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbilcblxuV29yZG1hcmsucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmxhZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yZG1hcmtcbiJdfQ== */"));

var FipText =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_2___default()('path', {
  target: "e1jalzb71",
  label: "FipText"
})("fill:", function (props) {
  return props.text;
}, ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd29yZG1hcmsvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUThCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvd29yZG1hcmsvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY29uc3QgRmlwRmxhZyA9IHN0eWxlZCgncGF0aCcpYFxuICBmaWxsOiAke3Byb3BzID0+IHByb3BzLmZsYWd9O1xuYFxuXG5jb25zdCBGaXBUZXh0ID0gc3R5bGVkKCdwYXRoJylgXG4gIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGV4dH07XG5gXG5cbmNvbnN0IFdvcmRtYXJrID0gKHtcbiAgd2lkdGggPSAnMTBlbScsXG4gIGZsYWcgPSAnI0YwMCcsXG4gIHRleHQgPSAnIzAwMCcsXG4gIGxhbmcgPSAnZW4nLFxuICAuLi5wcm9wc1xufSkgPT4gKFxuICA8c3ZnXG4gICAgcm9sZT1cImltZ1wiXG4gICAgYXJpYS1sYWJlbD17XG4gICAgICBsYW5nID09PSAnZW4nXG4gICAgICAgID8gJ1N5bWJvbCBvZiB0aGUgR292ZXJubWVudCBvZiBDYW5hZGEnXG4gICAgICAgIDogJ1N5bWJvbGUgZHUgZ291dmVybmVtZW50IGR1IENhbmFkYSdcbiAgICB9XG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgd2lkdGg9e3dpZHRofVxuICAgIGhlaWdodD1cIjEwMCVcIlxuICAgIHZpZXdCb3g9XCIwIDAgMTQzIDM0XCJcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pbllNaW4gbWVldFwiXG4gICAgey4uLnByb3BzfVxuICA+XG4gICAgPGcgaWQ9XCJ3bW1zXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xLCAtMSlcIj5cbiAgICAgIDxGaXBGbGFnXG4gICAgICAgIGNsYXNzTmFtZT1cImZpcGZsYWdcIlxuICAgICAgICBmbGFnPXtmbGFnfVxuICAgICAgICBkYXRhLXRlc3RpZD1cImZsYWdcIlxuICAgICAgICBkPVwiTTEzNy45LDEuMmg1LjJ2MTAuNGgtNS4yVjEuMnogTTEyOC45LDYuNGwtMC4zLDAuMWMwLDAsMS44LDEuNSwxLjgsMS42YzAuMSwwLjEsMC4yLDAuMSwwLjEsMC40IGMtMC4xLDAuMy0wLjIsMC42LTAuMiwwLjZzMS42LTAuMywxLjgtMC40YzAuMiwwLDAuMywwLDAuMywwLjJjMCwwLjItMC4xLDEuOS0wLjEsMS45aDAuNWMwLDAtMC4xLTEuOC0wLjEtMS45IGMwLTAuMiwwLjEtMC4yLDAuMy0wLjJjMC4yLDAsMS44LDAuNCwxLjgsMC40cy0wLjEtMC40LTAuMi0wLjZjLTAuMS0wLjMsMC0wLjMsMC4xLTAuNGMwLjEtMC4xLDEuOC0xLjYsMS44LTEuNmwtMC4zLTAuMSBjLTAuMi0wLjEtMC4xLTAuMi0wLjEtMC4zczAuMy0xLjEsMC4zLTEuMXMtMC44LDAuMi0wLjksMC4yYy0wLjEsMC0wLjIsMC0wLjItMC4xcy0wLjItMC41LTAuMi0wLjVzLTAuOSwxLTEsMS4xIGMtMC4yLDAuMi0wLjQsMC0wLjMtMC4yYzAtMC4yLDAuNS0yLjMsMC41LTIuM3MtMC41LDAuMy0wLjcsMC40cy0wLjMsMC4xLTAuMy0wLjFjLTAuMS0wLjItMC43LTEuMy0wLjctMS40YzAsMC0wLjYsMS4yLTAuNywxLjQgcy0wLjIsMC4yLTAuMywwLjFjLTAuMi0wLjEtMC43LTAuNC0wLjctMC40czAuNSwyLjEsMC41LDIuM3MtMC4xLDAuMy0wLjMsMC4ybC0xLTEuMWMwLDAtMC4xLDAuMy0wLjIsMC40YzAsMC4xLTAuMSwwLjItMC4yLDAuMSBjLTAuMiwwLTEtMC4yLTEtMC4yczAuMywxLDAuNCwxLjFDMTI5LjEsNi4xLDEyOS4xLDYuMywxMjguOSw2LjR6IE0xMjIuMiwxLjJoNS4ydjEwLjRoLTUuMlYxLjJ6XCJcbiAgICAgIC8+XG4gICAgICA8RmlwVGV4dFxuICAgICAgICBjbGFzc05hbWU9XCJmaXB0ZXh0XCJcbiAgICAgICAgdGV4dD17dGV4dH1cbiAgICAgICAgZGF0YS10ZXN0aWQ9XCJ0ZXh0XCJcbiAgICAgICAgZD1cIk0xNDQuMiwzMi40Yy0wLjQsMC45LTEuMiwxLjItMS43LDEuMmMtMC42LDAtMi40LTAuMS0yLjQtNC44YzAsMCwwLTkuNSwwLTEwLjFjMC0zLjEtMi40LTUuNi04LjYtNS42IGMtNi43LDAtNi44LDMuMy02LjgsNC4xYy0wLjEsMC45LDAuNCwxLjksMi4xLDEuOWMxLjUsMCwxLjktMS43LDIuMS0yLjNjMC4yLTAuNywwLjMtMi43LDMtMi43YzIuMywwLDMuNywyLDMuOCw0LjkgYzAsMC41LDAsMC44LDAsMS4xYzAsMC4yLDAsMC4zLDAsMC41bDAsMGwwLDB2MC4xYy0wLjIsMS0wLjcsMS41LTEuNiwxLjljLTEuMiwwLjYtNC43LDEuMS01LjEsMS4yYy0xLjQsMC4zLTUuMywxLjMtNS4yLDUuNCBjMC4xLDQsNC4xLDUuNCw2LjksNS4zYzIuNy0wLjEsNC4zLTEuMiw1LTEuOGMwLjQtMC4zLDAuNC0wLjMsMC43LDAuMWMwLjQsMC40LDEuNywxLjcsNC44LDEuN2MzLjIsMCwzLjYtMS41LDMuOC0yIEMxNDUuMSwzMi4yLDE0NC40LDMxLjksMTQ0LjIsMzIuNHogTTEzMS43LDMzLjVjLTIuOCwwLTMuNS0yLjMtMy41LTMuNWMwLTEuMSwwLjYtMy40LDMuNC01YzAsMCwxLjMtMC44LDMuOC0xLjggYzAuMSwwLDAuMiwwLDAuMiwwczAuMSwwLjEsMC4xLDAuMmwwLDBsMCwwdjAuMWwwLDBsMCwwdjAuMWwwLDBsMCwwbDAsMHY0LjJDMTM1LjcsMzEuMSwxMzQuMSwzMy41LDEzMS43LDMzLjV6IE0xMjIuNSwzMy40IGMtMC40LTAuMS0yLjksMC4yLTIuOS03LjRzMC0yMy45LDAtMjMuOWMwLTAuMywwLTEuMS0wLjktMS4xYy0wLjksMC02LjksMC4zLTcuMywwLjRjLTAuNCwwLTAuNywwLjUsMCwwLjUgYzAuNywwLjEsMy45LDAuMywzLjksNS42YzAsMi42LDAsNS4yLDAsNy4xYzAsMC4xLDAsMC4yLDAsMC4yYzAsMC4yLDAsMC4zLTAuMSwwLjRjMCwwLDAsMCwwLDAuMWwwLDBjLTAuMSwwLjEtMC4yLDAtMC41LTAuMiBjLTAuNS0wLjQtMi44LTEuOC01LjctMS44Yy00LjcsMC0xMC41LDMuNC0xMC41LDEwLjRjMCw3LjUsNS4zLDExLjEsMTAuOCwxMS4xYzIuNywwLDQuNi0xLjIsNS4zLTEuNmMwLjgtMC41LDAuNy0wLjQsMC44LDAuMyBjMC4xLDAuNSwwLDEuNSwxLjQsMS40YzEuNS0wLjIsNS4xLTAuNiw1LjgtMC43QzEyMy4zLDMzLjksMTIzLjEsMzMuNSwxMjIuNSwzMy40eiBNMTEwLjEsMzMuN2MtNC40LDAtNi43LTUuMi02LjctMTAuMiBjMC01LjUsMy4xLTkuMiw2LjQtOWM0LjMsMC4zLDUuNCwzLjcsNS41LDkuOGMwLDAuNCwwLDAuOCwwLDEuM0MxMTUuMiwzMS42LDExMi43LDMzLjcsMTEwLjEsMzMuN3ogTTk4LjQsMzIuNCBjLTAuNCwwLjktMS4yLDEuMi0xLjcsMS4yYy0wLjYsMC0yLjQtMC4xLTIuNC00LjhjMCwwLDAtOS41LDAtMTAuMWMwLTMuMS0yLjQtNS42LTguNi01LjZjLTYuNywwLTYuOCwzLjMtNi44LDQuMSBjLTAuMSwwLjksMC40LDEuOSwyLjEsMS45YzEuNSwwLDEuOS0xLjcsMi4xLTIuM2MwLjItMC43LDAuMy0yLjcsMy0yLjdjMi4zLDAsMy44LDIsMy44LDV2MC4xYzAsMC4xLDAsMC4yLDAsMC4ydjAuMyBjMCwwLjEsMCwwLjMsMCwwLjRjLTAuMSwxLjUtMC41LDItMS43LDIuNmMtMS4yLDAuNi00LjcsMS4xLTUuMSwxLjJjLTEuNCwwLjMtNS4zLDEuMy01LjIsNS40YzAuMSw0LDQuMSw1LjQsNi45LDUuMyBjMi43LTAuMSw0LjMtMS4yLDUtMS44YzAuNC0wLjMsMC40LTAuMywwLjcsMC4xYzAuNCwwLjQsMS43LDEuNyw0LjgsMS43YzMuMiwwLDMuNi0xLjUsMy44LTJDOTkuMywzMi4yLDk4LjcsMzEuOSw5OC40LDMyLjR6ICBNODYsMzMuNWMtMi44LDAtMy41LTIuMy0zLjUtMy41YzAtMS4xLDAuNi0zLjQsMy40LTVjMCwwLDEuMy0wLjgsMy44LTEuOGMwLjEsMCwwLjIsMCwwLjIsMHYwLjFsMCwwbDAsMGMwLDAuMSwwLDAuMiwwLDAuNHYtMC4xIGMwLDAsMCwwLDAsMC4xdjQuMkM4OS45LDMxLjEsODguMywzMy41LDg2LDMzLjV6IE03Ni40LDMzLjRjLTAuOC0wLjItMi4yLTEuMS0yLjItNS41di04YzAtMS45LDAuMi02LjgtNy4zLTYuOCBjLTMuOSwwLTYuMSwyLTYuMywyLjFjLTAuMywwLjMtMC41LDAuNC0wLjYtMC4xYy0wLjEtMC40LTAuMy0xLTAuNC0xLjRjLTAuMS0wLjMtMC4zLTAuNi0xLTAuNWMtMC43LDAuMS01LjEsMC44LTUuOSwxIGMtMC43LDAuMi0wLjUsMC41LDAsMC42YzAuNSwwLjEsMi45LDAuMywyLjksNC40czAsOC42LDAsOC42YzAsNS0xLDUuNC0xLjksNS43Yy0xLjIsMC4zLTAuNiwwLjctMC4xLDAuN2MwLDAsOC45LDAsOS4xLDAgYzAuNiwwLDAuOS0wLjYtMC4zLTAuOGMtMS4yLTAuMi0yLjMtMC45LTIuMy00LjhjMC0wLjQsMC00LjcsMC01LjVjMC0yLjEtMC41LTguNSw1LjMtOC42YzQuMS0wLjEsNC41LDMuMyw0LjUsNS41djguNSBjMCwzLjUtMSw0LjYtMi4yLDQuOGMtMS4xLDAuMi0wLjksMC43LTAuMywwLjdjMC4yLDAsOS4zLDAsOS4zLDBDNzcuMiwzNC4yLDc3LjcsMzMuNyw3Ni40LDMzLjR6IE01Mi4xLDMyLjQgYy0wLjQsMC45LTEuMiwxLjItMS43LDEuMmMtMC42LDAtMi40LTAuMS0yLjQtNC44YzAsMCwwLTkuNSwwLTEwLjFjMC0zLjEtMi40LTUuNi04LjYtNS42Yy02LjcsMC02LjgsMy4zLTYuOCw0LjEgYy0wLjEsMC45LDAuNCwxLjksMi4xLDEuOWMxLjUsMCwxLjktMS43LDIuMS0yLjNjMC4yLTAuNywwLjMtMi43LDMtMi43YzIuMywwLDMuNywyLDMuOCw0LjljMCwwLjUsMCwwLjgsMCwxLjEgYzAsMC4yLDAsMC40LTAuMSwwLjV2MC4xbDAsMGMtMC4yLDEtMC43LDEuNS0xLjYsMS45Yy0xLjIsMC42LTQuNywxLjEtNS4xLDEuMmMtMS40LDAuMy01LjMsMS4zLTUuMiw1LjRjMC4xLDQsNC4xLDUuNCw2LjksNS4zIGMyLjctMC4xLDQuMy0xLjIsNS0xLjhjMC40LTAuMywwLjQtMC4zLDAuNywwLjFjMC40LDAuNCwxLjcsMS43LDQuOCwxLjdjMy4yLDAsMy42LTEuNSwzLjgtMkM1MywzMi4yLDUyLjMsMzEuOSw1Mi4xLDMyLjR6ICBNMzkuNiwzMy41Yy0yLjgsMC0zLjUtMi4zLTMuNS0zLjVzMC42LTMuNCwzLjQtNWMwLDAsMS4zLTAuOCwzLjgtMS44YzAuMSwwLDAuMiwwLDAuMiwwczAuMSwwLjEsMC4xLDAuMmwwLDBsMCwwbDAsMCBjMCwwLDAsMC4xLDAsMC4ybDAsMGwwLDB2MC4xbDAsMGwwLDBsMCwwdjQuMkM0My42LDMxLjEsNDIsMzMuNSwzOS42LDMzLjV6IE0zMCwyNC44Yy0xLDMuMi0yLjksOC40LTkuOCw4LjYgQzEzLDMzLjUsOC43LDI4LjYsOC41LDE5LjVDOC4yLDkuOCwxMi40LDIuNCwxOC45LDIuMmM3LjMtMC4xLDkuOSw4LjYsMTAsOS45YzAuMSwxLDEuNCwwLjksMS40LTAuMWMwLTAuNS0wLjYtOS4xLTAuOC0xMC4xIGMtMC4yLTEtMS0wLjYtMS4yLTAuMkMyOC4yLDIsMjguNCwxLjQsMjgsMi4zYy0wLjQsMC45LTEuNSwwLjQtMS45LDAuM2MtMS4yLTAuNS0zLjUtMS43LTcuMi0xLjZjLTguNSwwLjItMTcuMiw2LjUtMTcsMTcuNSBjMC4yLDEwLjcsOC44LDE2LjcsMTYuOCwxNi42YzcuMy0wLjEsMTEuNC00LjcsMTIuNi0xMEMzMS43LDIzLjgsMzAuNCwyMy41LDMwLDI0Ljh6XCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbilcblxuV29yZG1hcmsucHJvcFR5cGVzID0ge1xuICB3aWR0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmxhZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZzogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yZG1hcmtcbiJdfQ== */"));

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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0NvbmZpcm1hdGlvblBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdWRnQiIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9Db25maXJtYXRpb25QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IEgxLCBIMiB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgVHJhY2tQYWdlVmlld3MgfSBmcm9tICcuLi9UcmFja1BhZ2VWaWV3cydcbmltcG9ydCB7IFN0ZXBzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdGVwcGVyJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge1xuICBTVUJNSVRfUkVQT1JUX01VVEFUSU9OLFxuICBnZXRTY2FtSW5mbyxcbiAgZ2V0TG9zdE1vbmV5LFxuICBnZXRTdXNwZWN0SW5mbyxcbiAgZ2V0RmlsZXMsXG4gIGdldENvbnRhY3RJbmZvLFxuICBnZXRTdXJ2ZXlJbmZvLFxufSBmcm9tICcuLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHsgQmFja0J1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYmFja2J1dHRvbidcblxuY29uc3Qgc2NhbUV2ZW50U3VtbWFyeSA9IGNsaWVudCA9PiB7XG4gIGxldCB7XG4gICAgaG93V2VyZVlvdUNvbnRhY3RlZCxcbiAgICBvdGhlck1ldGhvZE9mQ29udGFjdCxcbiAgICB3aGVuV2VyZVlvdUNvbnRhY3RlZCxcbiAgICBzY2FtRGV0YWlscyxcbiAgfSA9IGdldFNjYW1JbmZvKGNsaWVudClcblxuICBpZiAob3RoZXJNZXRob2RPZkNvbnRhY3QpIHtcbiAgICBob3dXZXJlWW91Q29udGFjdGVkID0gaG93V2VyZVlvdUNvbnRhY3RlZC5jb25jYXQob3RoZXJNZXRob2RPZkNvbnRhY3QpXG4gIH1cbiAgaG93V2VyZVlvdUNvbnRhY3RlZCA9IGhvd1dlcmVZb3VDb250YWN0ZWRcbiAgICA/IGhvd1dlcmVZb3VDb250YWN0ZWQuZmlsdGVyKHMgPT4gcyAhPT0gJ290aGVyJylcbiAgICA6ICcnXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA0XX0gbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19PlxuICAgICAgICAgICAgPFRyYW5zPldoYXQgaGFwcGVuZWQ8L1RyYW5zPnsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgc2NhbSBldmVudCcpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIHRvPVwiL3AxL3NjYW1pbmZvXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSDI+XG4gICAgICAgICAge3NjYW1EZXRhaWxzID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkRlc2NyaXB0aW9uPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzY2FtRGV0YWlsc31cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHt3aGVuV2VyZVlvdUNvbnRhY3RlZCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5EYXRlIDwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7d2hlbldlcmVZb3VDb250YWN0ZWR9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2hvd1dlcmVZb3VDb250YWN0ZWQgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+Q29udGFjdGVkIGJ5PC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtob3dXZXJlWW91Q29udGFjdGVkLm1hcChpID0+IGkxOG4uXyhpKSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9JMThuPlxuICApXG59XG5cbmNvbnN0IGxvc3RNb25leVN1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIGxvc3RBbW91bnQsXG4gICAgbG9zdEN1cnJlbmN5LFxuICAgIGxvc3RPdGhlckN1cnJlbmN5LFxuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50LFxuICAgIGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCxcbiAgfSA9IGdldExvc3RNb25leShjbGllbnQpXG5cbiAgaWYgKGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudCkge1xuICAgIGxvc3RNZXRob2RzT2ZQYXltZW50ID0gbG9zdE1ldGhvZHNPZlBheW1lbnQuY29uY2F0KGxvc3RPdGhlck1ldGhvZE9mUGF5bWVudClcbiAgfVxuICBsb3N0TWV0aG9kc09mUGF5bWVudCA9IGxvc3RNZXRob2RzT2ZQYXltZW50LmZpbHRlcihzID0+IHMgIT09ICdvdGhlcicpXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDJcbiAgICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFucz5Nb25leSBsb3N0PC9UcmFucz57JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IG1vbmV5IGxvc3QnKX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICB0bz1cIi9wMS9tb25leWxvc3RcIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9IMj5cbiAgICAgICAgICB7bG9zdEFtb3VudCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5BbW91bnQ8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2xvc3RBbW91bnR9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge2xvc3RDdXJyZW5jeSB8fCBsb3N0T3RoZXJDdXJyZW5jeSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5DdXJyZW5jeTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7bG9zdE90aGVyQ3VycmVuY3kgPyBsb3N0T3RoZXJDdXJyZW5jeSA6IGkxOG4uXyhsb3N0Q3VycmVuY3kpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtsb3N0TWV0aG9kc09mUGF5bWVudCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5QYXltZW50IG1ldGhvZDwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7bG9zdE1ldGhvZHNPZlBheW1lbnQubWFwKGkgPT4gaTE4bi5fKGkpKS5qb2luKCcsICcpfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0kxOG4+XG4gIClcbn1cblxuY29uc3Qgc3VzcGVjdEluZm9TdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgbGV0IHtcbiAgICBzdXNwZWN0TmFtZSxcbiAgICBzdXNwZWN0QWRkcmVzcyxcbiAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgc3VzcGVjdFBob25lLFxuICAgIHN1c3BlY3RFbWFpbCxcbiAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICBzdXNwZWN0SVAsXG4gIH0gPSBnZXRTdXNwZWN0SW5mbyhjbGllbnQpXG5cbiAgaWYgKG90aGVyU3VzcGVjdExhbmd1YWdlKSB7XG4gICAgc3VzcGVjdExhbmd1YWdlID0gc3VzcGVjdExhbmd1YWdlLmNvbmNhdChvdGhlclN1c3BlY3RMYW5ndWFnZSlcbiAgfVxuICBzdXNwZWN0TGFuZ3VhZ2UgPSBzdXNwZWN0TGFuZ3VhZ2UuZmlsdGVyKHMgPT4gcyAhPT0gJ090aGVyIGxhbmd1YWdlJylcblxuICByZXR1cm4gKFxuICAgIDxJMThuPlxuICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEgyXG4gICAgICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICAgICAgbWFyZ2luVG9wPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b209e1sxLCBudWxsLCAxXX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHJhbnM+QWJvdXQgdGhlIHN1c3BlY3Q8L1RyYW5zPnsnICd9XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgc2NhbW1lciBkZXRhaWxzJyl9XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgdG89XCIvcDEvc3VzcGVjdGluZm9cIlxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VHJhbnM+RWRpdDwvVHJhbnM+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9IMj5cblxuICAgICAgICAgIHtzdXNwZWN0TmFtZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5OYW1lPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0TmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtzdXNwZWN0RW1haWwgPyAoXG4gICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICA8VHJhbnM+RW1haWwgYWRkcmVzczwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdEVtYWlsfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAge3N1c3BlY3RQaG9uZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5QaG9uZSBudW1iZXI8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge3N1c3BlY3RQaG9uZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtzdXNwZWN0V2Vic2l0ZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5XZWJzaXRlPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0V2Vic2l0ZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtzdXNwZWN0QWRkcmVzcyA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgPFRyYW5zPk1haWxpbmcgYWRkcmVzczwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdEFkZHJlc3N9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3N1c3BlY3RJUCA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5JUCBhZGRyZXNzPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtzdXNwZWN0SVB9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAge3N1c3BlY3RMYW5ndWFnZSA/IChcbiAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIDxUcmFucz5MYW5ndWFnZSBvZiBjb3JyZXNwb25kZW5jZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7c3VzcGVjdExhbmd1YWdlLm1hcChpID0+IGkxOG4uXyhpKSkuam9pbignLCAnKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgPC9JMThuPlxuICApXG59XG5cbmNvbnN0IGZpbGVVcGxvYWRTdW1tYXJ5ID0gY2xpZW50ID0+IHtcbiAgY29uc3QgZmlsZXMgPSBnZXRGaWxlcyhjbGllbnQpXG4gIGNvbnN0IGZpbGVMaXN0ID0gZmlsZXMuam9pbignLCAnKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIMlxuICAgICAgICBmb250U2l6ZT17WzMsIG51bGwsIDRdfVxuICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgbWFyZ2luQm90dG9tPXtbMSwgbnVsbCwgMV19XG4gICAgICA+XG4gICAgICAgIDxUcmFucz5GaWxlcyBhdHRhY2hlZDwvVHJhbnM+eycgJ31cbiAgICAgICAgPEkxOG4+XG4gICAgICAgICAgeyh7IGkxOG4gfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtpMThuLl8oJ0VkaXQgZmlsZXMgYXR0YWNoZWQnKX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgICAgICB0bz1cIi9wMS91cGxvYWRmaWxlc1wiXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUcmFucz5FZGl0PC9UcmFucz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgIDwvSTE4bj5cbiAgICAgIDwvSDI+XG4gICAgICB7ZmlsZXMubGVuZ3RoID8gKFxuICAgICAgICA8VGV4dD5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgPFRyYW5zPkZpbGUgbmFtZTwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAge2ZpbGVMaXN0fVxuICAgICAgICA8L1RleHQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5jb25zdCBjb250YWN0SW5mb1N1bW1hcnkgPSBjbGllbnQgPT4ge1xuICBsZXQge1xuICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICBjb250YWN0SW5mb05hbWUsXG4gICAgY29udGFjdEluZm9FbWFpbCxcbiAgICBjb250YWN0SW5mb1Bob25lLFxuICB9ID0gZ2V0Q29udGFjdEluZm8oY2xpZW50KVxuXG4gIHJldHVybiAoXG4gICAgPEkxOG4+XG4gICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8SDJcbiAgICAgICAgICAgIGZvbnRTaXplPXtbMywgbnVsbCwgNF19XG4gICAgICAgICAgICBtYXJnaW5Ub3A9e1szLCBudWxsLCA0XX1cbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbT17WzEsIG51bGwsIDFdfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUcmFucz5Db250YWN0IGluZm9ybWF0aW9uPC9UcmFucz57JyAnfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17aTE4bi5fKCdFZGl0IGNvbnRhY3QgaW5mbycpfVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICAgIHRvPVwiL3AxL2NvbnRhY3RpbmZvXCJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYW5zPkVkaXQ8L1RyYW5zPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSDI+XG5cbiAgICAgICAgICB7Y29udGFjdEluZm9OYW1lID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPk5hbWU8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2NvbnRhY3RJbmZvTmFtZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIHtjb250YWN0SW5mb0VtYWlsID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkVtYWlsPC9UcmFucz46eycgJ31cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtjb250YWN0SW5mb0VtYWlsfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtjb250YWN0SW5mb1Bob25lID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlBob25lIG51bWJlcjwvVHJhbnM+OnsnICd9XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7Y29udGFjdEluZm9QaG9uZX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7dXNlcklzVGhlVmljdGltID8gKFxuICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgPFRyYW5zPkRpZCB0aGUgc2NhbSBoYXBwZW5lZCB0byB5b3U8L1RyYW5zPjp7JyAnfVxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAge2kxOG4uXyh1c2VySXNUaGVWaWN0aW0pfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0kxOG4+XG4gIClcbn1cblxuY29uc3QgcmFuZExldHRlciA9ICgpID0+IHtcbiAgY29uc3QgbGV0dGVycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicuc3BsaXQoJycpXG4gIHJldHVybiBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKV1cbn1cbmNvbnN0IHJhbmREaWdpdCA9ICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuXG5jb25zdCByYW5kb21pemVTdHJpbmcgPSBzID0+XG4gIHNcbiAgICA/IHNcbiAgICAgICAgLnJlcGxhY2UoL1thLXpdL2csICgpID0+IHJhbmRMZXR0ZXIoKSlcbiAgICAgICAgLnJlcGxhY2UoL1tBLVpdL2csICgpID0+IHJhbmRMZXR0ZXIoKS50b1VwcGVyQ2FzZSgpKVxuICAgICAgICAucmVwbGFjZSgvWzAtOV0vZywgKCkgPT4gcmFuZERpZ2l0KCkpXG4gICAgOiBzXG5cbmNvbnN0IHN1Ym1pdCA9IChjbGllbnQsIHN1Ym1pdFJlcG9ydCkgPT4ge1xuICBsZXQgc2NhbUluZm8gPSBnZXRTY2FtSW5mbyhjbGllbnQpXG4gIGxldCBsb3N0TW9uZXkgPSBnZXRMb3N0TW9uZXkoY2xpZW50KVxuICBsZXQgc3VzcGVjdEluZm8gPSBnZXRTdXNwZWN0SW5mbyhjbGllbnQpXG4gIGxldCBmaWxlcyA9IGdldEZpbGVzKGNsaWVudClcbiAgbGV0IGNvbnRhY3RJbmZvID0gZ2V0Q29udGFjdEluZm8oY2xpZW50KVxuICBjb25zdCBzdXJ2ZXlJbmZvID0gZ2V0U3VydmV5SW5mbyhjbGllbnQpXG5cbiAgbGV0IHtcbiAgICBzdXNwZWN0TmFtZSxcbiAgICBzdXNwZWN0QWRkcmVzcyxcbiAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgb3RoZXJTdXNwZWN0TGFuZ3VhZ2UsXG4gICAgc3VzcGVjdFBob25lLFxuICAgIHN1c3BlY3RFbWFpbCxcbiAgICBzdXNwZWN0V2Vic2l0ZSxcbiAgICBzdXNwZWN0SVAsXG4gIH0gPSBzdXNwZWN0SW5mb1xuICBzdXNwZWN0TmFtZSA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0TmFtZSlcbiAgc3VzcGVjdEFkZHJlc3MgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdEFkZHJlc3MpXG4gIHN1c3BlY3RQaG9uZSA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0UGhvbmUpXG4gIHN1c3BlY3RFbWFpbCA9IHJhbmRvbWl6ZVN0cmluZyhzdXNwZWN0RW1haWwpXG4gIHN1c3BlY3RXZWJzaXRlID0gcmFuZG9taXplU3RyaW5nKHN1c3BlY3RXZWJzaXRlKVxuICBzdXNwZWN0SVAgPSByYW5kb21pemVTdHJpbmcoc3VzcGVjdElQKVxuXG4gIGxldCB7XG4gICAgdXNlcklzVGhlVmljdGltLFxuICAgIGNvbnRhY3RJbmZvTmFtZSxcbiAgICBjb250YWN0SW5mb0VtYWlsLFxuICAgIGNvbnRhY3RJbmZvUGhvbmUsXG4gIH0gPSBjb250YWN0SW5mb1xuICBjb250YWN0SW5mb05hbWUgPSByYW5kb21pemVTdHJpbmcoY29udGFjdEluZm9OYW1lKVxuICBjb250YWN0SW5mb0VtYWlsID0gcmFuZG9taXplU3RyaW5nKGNvbnRhY3RJbmZvRW1haWwpXG4gIGNvbnRhY3RJbmZvUGhvbmUgPSByYW5kb21pemVTdHJpbmcoY29udGFjdEluZm9QaG9uZSlcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHNvdXJjZTogJ3AxJyxcbiAgICBzY2FtSW5mbyxcbiAgICBsb3N0TW9uZXksXG4gICAgc3VzcGVjdEluZm86IHtcbiAgICAgIHN1c3BlY3ROYW1lLFxuICAgICAgc3VzcGVjdEFkZHJlc3MsXG4gICAgICBzdXNwZWN0TGFuZ3VhZ2UsXG4gICAgICBvdGhlclN1c3BlY3RMYW5ndWFnZSxcbiAgICAgIHN1c3BlY3RQaG9uZSxcbiAgICAgIHN1c3BlY3RFbWFpbCxcbiAgICAgIHN1c3BlY3RXZWJzaXRlLFxuICAgICAgc3VzcGVjdElQLFxuICAgIH0sXG4gICAgZmlsZXMsXG4gICAgY29udGFjdEluZm86IHtcbiAgICAgIHVzZXJJc1RoZVZpY3RpbSxcbiAgICAgIGNvbnRhY3RJbmZvTmFtZSxcbiAgICAgIGNvbnRhY3RJbmZvRW1haWwsXG4gICAgICBjb250YWN0SW5mb1Bob25lLFxuICAgIH0sXG4gICAgc3VydmV5SW5mbyxcbiAgfVxuICBzdWJtaXRSZXBvcnQoeyB2YXJpYWJsZXM6IGRhdGEgfSlcbiAgbmF2aWdhdGUoJ3RoYW5reW91Jylcbn1cblxuZXhwb3J0IGNvbnN0IENvbmZpcm1hdGlvblBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxCYWNrQnV0dG9uIHJvdXRlPVwiL3AxL2NvbnRhY3RpbmZvXCI+XG4gICAgICAgIDxUcmFucz5jb250YWN0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgIDwvQmFja0J1dHRvbj5cbiAgICAgIDxTdGVwcyBhY3RpdmVTdGVwPXs2fSB0b3RhbFN0ZXBzPXs2fSAvPlxuICAgICAgPEgxPlxuICAgICAgICA8VHJhbnM+UmV2aWV3IHJlcG9ydCBpbmZvcm1hdGlvbjwvVHJhbnM+XG4gICAgICA8L0gxPlxuICAgICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIHtjbGllbnQgPT4ge1xuICAgICAgICAgIGNsaWVudC53cml0ZURhdGEoe1xuICAgICAgICAgICAgZGF0YTogeyBkb25lRm9ybXM6IHRydWUgfSxcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3NjYW1FdmVudFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge2xvc3RNb25leVN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge3N1c3BlY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgICAgICB7ZmlsZVVwbG9hZFN1bW1hcnkoY2xpZW50KX1cbiAgICAgICAgICAgICAge2NvbnRhY3RJbmZvU3VtbWFyeShjbGllbnQpfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuXG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgIG1iPVwiNHJlbVwiXG4gICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgICA8TXV0YXRpb24gbXV0YXRpb249e1NVQk1JVF9SRVBPUlRfTVVUQVRJT059PlxuICAgICAgICAgICAgICB7c3VibWl0UmVwb3J0ID0+IChcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc3VibWl0KGNsaWVudCwgc3VibWl0UmVwb3J0KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlN1Ym1pdCByZXBvcnQgJm5ic3A7IOKdrzwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTXV0YXRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiXG4gICAgICAgICAgbXQ9XCIxLjlyZW1cIlxuICAgICAgICAgIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJibGFja1wiIHRvPVwiL3AxXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iXX0= */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Gb0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyLCBINSB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWQnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4uL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBTdGVwcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RlcHBlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IGdldERvbmVGb3JtcywgZ2V0RmlsZXMgfSBmcm9tICcuLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuLi9pbWFnZXMvdXBsb2FkLnN2ZydcbmltcG9ydCB7IEJhY2tCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tidXR0b24nXG5cbmNsYXNzIEZpbGVVcGxvYWRJbnRlcm5hbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbGVzOiBnZXRGaWxlcyhwcm9wcy5jbGllbnQpLm1hcChuYW1lID0+ICh7IG5hbWUgfSkpLFxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiB0aGlzLnN0YXRlLmZpbGVzLmNvbmNhdChlLnRhcmdldC5maWxlc1swXSkgfSlcbiAgfVxuXG4gIHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gdGhpcy5zdGF0ZS5maWxlc1xuICAgIG5ld0ZpbGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IG5ld0ZpbGVzIH0pXG4gIH1cblxuICBzdWJtaXRBbmROYXZpZ2F0ZSA9IGNsaWVudCA9PiB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzLm1hcChmaWxlID0+IGZpbGUubmFtZSlcbiAgICBjb25zdCBkYXRhID0geyBmaWxlcyB9XG4gICAgY2xpZW50LndyaXRlRGF0YSh7IGRhdGEgfSkgLy8gVE9ETzogYWN0dWFsbHkgdXBsb2FkIGZpbGVzXG4gICAgbmF2aWdhdGUoZ2V0RG9uZUZvcm1zKGNsaWVudCkgPyAnY29uZmlybWF0aW9uJyA6ICdjb250YWN0aW5mb3F1ZXN0aW9uJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgICAgIDxCYWNrQnV0dG9uIHJvdXRlPVwiL3AxL3VwbG9hZGZpbGVzcXVlc3Rpb25cIj5cbiAgICAgICAgICA8VHJhbnM+cHJldmlvdXMgcGFnZTwvVHJhbnM+XG4gICAgICAgIDwvQmFja0J1dHRvbj5cbiAgICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezR9IHRvdGFsU3RlcHM9ezZ9IC8+XG4gICAgICAgIDxIMT5cbiAgICAgICAgICA8VHJhbnM+QXR0YWNoIHN1cHBvcnRpbmcgZmlsZXM8L1RyYW5zPlxuICAgICAgICA8L0gxPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICBJbmNsdWRlIGFueSBtZXNzYWdlcywgY29udmVyc2F0aW9ucywgcmVjZWlwdHMsIG9yIG90aGVyIGV2aWRlbmNlXG4gICAgICAgICAgICB0aGF0IHNob3dzIHdoYXQgaGFwcGVuZWQuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+UGxlYXNlIGF0dGFjaCBvbmUgZmlsZSBhdCBhIHRpbWUuPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgNV19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgNSwgNV19XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZpbGVVcGxvYWRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMS41cmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEuNXJlbVwiXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiMC42cmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A9XCIwLjZyZW1cIlxuICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgYWx0PVwidXBsb2FkIGljb25cIiBzcmM9e3VwbG9hZH0gLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8VHJhbnM+QWRkIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvRmlsZVVwbG9hZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxQPlxuICAgICAgICAgIDxUcmFucz4gPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8STE4bj5cbiAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgIHtpMThuLnBsdXJhbCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBvbmU6ICcjIGZpbGUgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgIG90aGVyOiAnIyBmaWxlcyBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9IMj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0kxOG4+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJsZWZ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luTGVmdD1cIjByZW1cIj57Zi5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxINT5EZXNjcmliZSB3aGF0IHRoaXMgZmlsZSBzaG93czwvSDU+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgd2lkdGg9XCI1MHB4IFwiIGhlaWdodD1cIjEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIC8vIGZsb2F0PVwicmlnaHRcIlxuXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXswfVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbXQ9XCIxcmVtXCJcbiAgICAgICAgICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbXQ9XCIxcmVtXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0QW5kTmF2aWdhdGUoY2xpZW50KX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0OiBDb250YWN0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9wMS9cIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5GaWxlVXBsb2FkSW50ZXJuYWwucHJvcFR5cGVzID0ge1xuICBjbGllbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGNvbnN0IEZpbGVVcGxvYWRQYWdlID0gKCkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiA8RmlsZVVwbG9hZEludGVybmFsIGNsaWVudD17Y2xpZW50fSAvPn1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcbiJdfQ== */"
};

var _ref2 =  false ? undefined : {
  name: "oujgny-FileUploadInternal",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:FileUploadInternal;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL0ZpbGVVcGxvYWRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlLd0IiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDEvRmlsZVVwbG9hZFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gJ0ByZWFjaC9yb3V0ZXInXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgSDEsIEgyLCBINSB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saW5rJ1xuaW1wb3J0IHsgRmlsZVVwbG9hZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZmlsZS11cGxvYWQnXG5pbXBvcnQgeyBUcmFja1BhZ2VWaWV3cyB9IGZyb20gJy4uL1RyYWNrUGFnZVZpZXdzJ1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBTdGVwcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3RlcHBlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IGdldERvbmVGb3JtcywgZ2V0RmlsZXMgfSBmcm9tICcuLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuLi9pbWFnZXMvdXBsb2FkLnN2ZydcbmltcG9ydCB7IEJhY2tCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL2JhY2tidXR0b24nXG5cbmNsYXNzIEZpbGVVcGxvYWRJbnRlcm5hbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbGVzOiBnZXRGaWxlcyhwcm9wcy5jbGllbnQpLm1hcChuYW1lID0+ICh7IG5hbWUgfSkpLFxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzOiB0aGlzLnN0YXRlLmZpbGVzLmNvbmNhdChlLnRhcmdldC5maWxlc1swXSkgfSlcbiAgfVxuXG4gIHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gdGhpcy5zdGF0ZS5maWxlc1xuICAgIG5ld0ZpbGVzLnNwbGljZShpbmRleCwgMSlcbiAgICB0aGlzLnNldFN0YXRlKHsgZmlsZXM6IG5ld0ZpbGVzIH0pXG4gIH1cblxuICBzdWJtaXRBbmROYXZpZ2F0ZSA9IGNsaWVudCA9PiB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLnN0YXRlLmZpbGVzLm1hcChmaWxlID0+IGZpbGUubmFtZSlcbiAgICBjb25zdCBkYXRhID0geyBmaWxlcyB9XG4gICAgY2xpZW50LndyaXRlRGF0YSh7IGRhdGEgfSkgLy8gVE9ETzogYWN0dWFsbHkgdXBsb2FkIGZpbGVzXG4gICAgbmF2aWdhdGUoZ2V0RG9uZUZvcm1zKGNsaWVudCkgPyAnY29uZmlybWF0aW9uJyA6ICdjb250YWN0aW5mb3F1ZXN0aW9uJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPFRyYWNrUGFnZVZpZXdzIC8+XG4gICAgICAgIDxCYWNrQnV0dG9uIHJvdXRlPVwiL3AxL3VwbG9hZGZpbGVzcXVlc3Rpb25cIj5cbiAgICAgICAgICA8VHJhbnM+cHJldmlvdXMgcGFnZTwvVHJhbnM+XG4gICAgICAgIDwvQmFja0J1dHRvbj5cbiAgICAgICAgPFN0ZXBzIGFjdGl2ZVN0ZXA9ezR9IHRvdGFsU3RlcHM9ezZ9IC8+XG4gICAgICAgIDxIMT5cbiAgICAgICAgICA8VHJhbnM+QXR0YWNoIHN1cHBvcnRpbmcgZmlsZXM8L1RyYW5zPlxuICAgICAgICA8L0gxPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICBJbmNsdWRlIGFueSBtZXNzYWdlcywgY29udmVyc2F0aW9ucywgcmVjZWlwdHMsIG9yIG90aGVyIGV2aWRlbmNlXG4gICAgICAgICAgICB0aGF0IHNob3dzIHdoYXQgaGFwcGVuZWQuXG4gICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8UD5cbiAgICAgICAgICA8VHJhbnM+UGxlYXNlIGF0dGFjaCBvbmUgZmlsZSBhdCBhIHRpbWUuPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgbWFyZ2luVG9wPXtbMiwgbnVsbCwgNV19XG4gICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgNSwgNV19XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXX1cbiAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEZpbGVVcGxvYWRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMS41cmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEuNXJlbVwiXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiMC42cmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmdUb3A9XCIwLjZyZW1cIlxuICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbWcgYWx0PVwidXBsb2FkIGljb25cIiBzcmM9e3VwbG9hZH0gLz5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8VHJhbnM+QWRkIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvRmlsZVVwbG9hZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxQPlxuICAgICAgICAgIDxUcmFucz4gPC9UcmFucz5cbiAgICAgICAgPC9QPlxuICAgICAgICA8aHIgLz5cblxuICAgICAgICA8STE4bj5cbiAgICAgICAgICB7KHsgaTE4biB9KSA9PiAoXG4gICAgICAgICAgICA8SDIgZm9udFNpemU9e1szLCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgIHtpMThuLnBsdXJhbCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBvbmU6ICcjIGZpbGUgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgIG90aGVyOiAnIyBmaWxlcyBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9IMj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0kxOG4+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tPXtbMiwgbnVsbCwgM119XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJsZWZ0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luTGVmdD1cIjByZW1cIj57Zi5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxINT5EZXNjcmliZSB3aGF0IHRoaXMgZmlsZSBzaG93czwvSDU+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgd2lkdGg9XCI1MHB4IFwiIGhlaWdodD1cIjEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIC8vIGZsb2F0PVwicmlnaHRcIlxuXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wPXswfVxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VHJhbnM+UmVtb3ZlIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NvbnRhaW5lcj5cblxuICAgICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgbXQ9XCIxcmVtXCJcbiAgICAgICAgICAgICAgICBtYj1cIjRyZW1cIlxuICAgICAgICAgICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdltuYW1lPSdidXR0b25saW5rLWNvbnRhaW5lciddIGEge1xuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgbXQ9XCIxcmVtXCI+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3VibWl0QW5kTmF2aWdhdGUoY2xpZW50KX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucz5OZXh0OiBDb250YWN0IGluZm9ybWF0aW9uPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBtdD1cIjEuOXJlbVwiIG1sPXtbJzNyZW0nLCAnMCcsICczcmVtJ119PlxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICB0bz1cIi9wMS9cIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+Q2FuY2VsIHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5GaWxlVXBsb2FkSW50ZXJuYWwucHJvcFR5cGVzID0ge1xuICBjbGllbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGNvbnN0IEZpbGVVcGxvYWRQYWdlID0gKCkgPT4gKFxuICA8QXBvbGxvQ29uc3VtZXI+XG4gICAge2NsaWVudCA9PiA8RmlsZVVwbG9hZEludGVybmFsIGNsaWVudD17Y2xpZW50fSAvPn1cbiAgPC9BcG9sbG9Db25zdW1lcj5cbilcbiJdfQ== */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFJhZGlvQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yYWRpby1idXR0b24nXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0Q29udGFjdEluZm8gfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5jb25zdCBSYWRpb0J1dHRvbkFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFJhZGlvQnV0dG9uKVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG5gXG5cbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmljdGltT3B0aW9ucyA9IFtpMThuTWFyaygnWWVzJyksIGkxOG5NYXJrKCdObycpXVxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBDb250YWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldENvbnRhY3RJbmZvKGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb05hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RnVsbCBuYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb05hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb0VtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsIGFkZHJlc3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9FbWFpbFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9QaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QaG9uZSBudW1iZXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSByZXBvcnRpbmcgYSBzY2FtIHRoYXQgaGFwcGVuZWQgdG8geW91PzwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIHZpY3RpbU9wdGlvbnMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VySXNUaGVWaWN0aW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgICAgICAgIG1iPVwiNHJlbVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvcDEvY29uZmlybWF0aW9uJyl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDogUmV2aWV3IHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIG10PVwiMS45cmVtXCJcbiAgICAgICAgICAgICAgICBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9wMS9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Db250YWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eq8i0xc1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQm1DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFJhZGlvQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yYWRpby1idXR0b24nXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0Q29udGFjdEluZm8gfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5jb25zdCBSYWRpb0J1dHRvbkFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFJhZGlvQnV0dG9uKVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG5gXG5cbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmljdGltT3B0aW9ucyA9IFtpMThuTWFyaygnWWVzJyksIGkxOG5NYXJrKCdObycpXVxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBDb250YWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldENvbnRhY3RJbmZvKGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb05hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RnVsbCBuYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb05hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb0VtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsIGFkZHJlc3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9FbWFpbFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9QaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QaG9uZSBudW1iZXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSByZXBvcnRpbmcgYSBzY2FtIHRoYXQgaGFwcGVuZWQgdG8geW91PzwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIHZpY3RpbU9wdGlvbnMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VySXNUaGVWaWN0aW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgICAgICAgIG1iPVwiNHJlbVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvcDEvY29uZmlybWF0aW9uJyl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDogUmV2aWV3IHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIG10PVwiMS45cmVtXCJcbiAgICAgICAgICAgICAgICBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9wMS9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Db250YWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
});

var victimOptions = [Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('Yes'), Object(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["i18nMark"])('No')];

var validate = function validate() {
  return {};
};

var _ref =  false ? undefined : {
  name: "16f3afe-ContactInfoForm",
  styles: "button,div[name='buttonlink-container'] a{padding:0.7rem 1.5rem;width:100%;text-align:center;}@media (max-width:640px){div[name='buttonlink-container'] a{padding:0.7rem 0;}}label:ContactInfoForm;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSXNCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL0NvbnRhY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tICdAcmVhY2gvcm91dGVyJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbnRhaW5lcidcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGluaydcbmltcG9ydCB7IFJhZGlvQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yYWRpby1idXR0b24nXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UZXh0SW5wdXQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0Q29udGFjdEluZm8gfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5jb25zdCBSYWRpb0J1dHRvbkFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFJhZGlvQnV0dG9uKVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG5gXG5cbmNvbnN0IEZpZWxkc2V0ID0gc3R5bGVkKCdmaWVsZHNldCcpYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbmBcblxuY29uc3QgdmljdGltT3B0aW9ucyA9IFtpMThuTWFyaygnWWVzJyksIGkxOG5NYXJrKCdObycpXVxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5cbmV4cG9ydCBjb25zdCBDb250YWN0SW5mb0Zvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldENvbnRhY3RJbmZvKGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IG9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb05hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNCwgbnVsbCwgNV19PlxuICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RnVsbCBuYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0SW5mb05hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9OYW1lXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb250YWN0SW5mb0VtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsIGFkZHJlc3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvRW1haWxcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9FbWFpbFwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGFjdEluZm9QaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QaG9uZSBudW1iZXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RJbmZvUGhvbmVcIlxuICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEluZm9QaG9uZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+QXJlIHlvdSByZXBvcnRpbmcgYSBzY2FtIHRoYXQgaGFwcGVuZWQgdG8geW91PzwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgIHZpY3RpbU9wdGlvbnMubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VySXNUaGVWaWN0aW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JhZGlvQnV0dG9uQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2kxOG4uXyhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0kxOG4+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICAgIG10PVwiMXJlbVwiXG4gICAgICAgICAgICAgIG1iPVwiNHJlbVwiXG4gICAgICAgICAgICAgIGRpc3BsYXk9e1snZmxleCcsICdibG9jaycsICdmbGV4J119XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgICAgZGl2W25hbWU9J2J1dHRvbmxpbmstY29udGFpbmVyJ10gYSB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgICAgICAgICAgICAgICBkaXZbbmFtZT0nYnV0dG9ubGluay1jb250YWluZXInXSBhIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43cmVtIDA7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q29udGFpbmVyIG5hbWU9XCJidXR0b25saW5rLWNvbnRhaW5lclwiIG10PVwiMXJlbVwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvcDEvY29uZmlybWF0aW9uJyl9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+TmV4dDogUmV2aWV3IHJlcG9ydDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9ubGluay1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIG10PVwiMS45cmVtXCJcbiAgICAgICAgICAgICAgICBtbD17WyczcmVtJywgJzAnLCAnM3JlbSddfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwiYmxhY2tcIiB0bz1cIi9wMS9cIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5DYW5jZWwgcmVwb3J0PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Db250YWN0SW5mb0Zvcm0ucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbiJdfQ== */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNxQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IFJhZGlvQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yYWRpby1idXR0b24nXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0TG9zdE1vbmV5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB7IEJ1dHRvbnNDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbnMtY29udGFpbmVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcbmNvbnN0IFRleHRJbnB1dEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRJbnB1dClcblxuY29uc3QgbWV0aG9kc09mUGF5bWVudCA9IFtcbiAgaTE4bk1hcmsoJ0Nhc2gnKSxcbiAgaTE4bk1hcmsoJ0NyZWRpdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdFLXRyYW5zZmVyJyksXG4gIGkxOG5NYXJrKCdHaWZ0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ090aGVyIG1ldGhvZCcpLFxuXVxuXG5jb25zdCBjdXJyZW5jaWVzID0gW1xuICBpMThuTWFyaygnQ2FuYWRpYW4gZG9sbGFyJyksXG4gIGkxOG5NYXJrKCdVLlMuIGRvbGxhcicpLFxuICBpMThuTWFyaygnRXVybycpLFxuICBpMThuTWFyaygnT3RoZXIgY3VycmVuY3knKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IE1vbmV5TG9zdEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldExvc3RNb25leShjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0QW1vdW50XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkFtb3VudCBvZiBtb25leTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DdXJyZW5jeTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgY3VycmVuY2llcy5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmFkaW9CdXR0b25BZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdEN1cnJlbmN5ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdEN1cnJlbmN5LmluZGV4T2YoJ090aGVyIGN1cnJlbmN5JykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyQ3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+T3RoZXIgY3VycmVuY3k8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE90aGVyQ3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlckN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SG93IGRpZCB5b3UgcGF5IHRoZSBzY2FtbWVyPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kc09mUGF5bWVudC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQuaW5kZXhPZignT3RoZXIgbWV0aG9kJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIG1ldGhvZCBvZiBwYXltZW50PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgIGNhbmNlbFJvdXRlPVwiL3AxL1wiXG4gICAgICAgICAgICAgIG5leHRQYWdlPVwiU2NhbW1lciBkZXRhaWxzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "e1bdcfe51",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL01vbmV5TG9zdEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNtQyIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy9wMS9mb3Jtcy9Nb25leUxvc3RGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IFRyYW5zIH0gZnJvbSAnQGxpbmd1aS9tYWNybydcbmltcG9ydCB7IEkxOG4sIGkxOG5NYXJrIH0gZnJvbSAnQGxpbmd1aS9yZWFjdCdcbmltcG9ydCB7IEZvcm0sIEZpZWxkIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCB7IFJhZGlvQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yYWRpby1idXR0b24nXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBBcG9sbG9Db25zdW1lciB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0TG9zdE1vbmV5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcbmltcG9ydCB7IEJ1dHRvbnNDb250YWluZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbnMtY29udGFpbmVyJ1xuXG5jb25zdCBDaGVja2JveEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKENoZWNrYm94KVxuY29uc3QgUmFkaW9CdXR0b25BZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihSYWRpb0J1dHRvbilcbmNvbnN0IFRleHRJbnB1dEFkYXB0ZXIgPSBmaW5hbEZvcm1BZGFwdGVyKFRleHRJbnB1dClcblxuY29uc3QgbWV0aG9kc09mUGF5bWVudCA9IFtcbiAgaTE4bk1hcmsoJ0Nhc2gnKSxcbiAgaTE4bk1hcmsoJ0NyZWRpdCBjYXJkJyksXG4gIGkxOG5NYXJrKCdFLXRyYW5zZmVyJyksXG4gIGkxOG5NYXJrKCdHaWZ0IGNhcmQnKSxcbiAgaTE4bk1hcmsoJ090aGVyIG1ldGhvZCcpLFxuXVxuXG5jb25zdCBjdXJyZW5jaWVzID0gW1xuICBpMThuTWFyaygnQ2FuYWRpYW4gZG9sbGFyJyksXG4gIGkxOG5NYXJrKCdVLlMuIGRvbGxhcicpLFxuICBpMThuTWFyaygnRXVybycpLFxuICBpMThuTWFyaygnT3RoZXIgY3VycmVuY3knKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IE1vbmV5TG9zdEZvcm0gPSAoeyBvblN1Ym1pdCB9KSA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IChcbiAgICAgIDxGb3JtXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e2dldExvc3RNb25leShjbGllbnQpfVxuICAgICAgICBvblN1Ym1pdD17ZGF0YSA9PiBvblN1Ym1pdChjbGllbnQsIGRhdGEpfVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIHJlbmRlcj17KHsgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsb3N0QW1vdW50XCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkFtb3VudCBvZiBtb25leTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwibG9zdEFtb3VudFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsb3N0QW1vdW50XCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DdXJyZW5jeTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICA8STE4bj5cbiAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgY3VycmVuY2llcy5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RDdXJyZW5jeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UmFkaW9CdXR0b25BZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIHt2YWx1ZXMubG9zdEN1cnJlbmN5ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdEN1cnJlbmN5LmluZGV4T2YoJ090aGVyIGN1cnJlbmN5JykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyQ3VycmVuY3lcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+T3RoZXIgY3VycmVuY3k8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE90aGVyQ3VycmVuY3lcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImxvc3RPdGhlckN1cnJlbmN5XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxGaWVsZHNldD5cbiAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SG93IGRpZCB5b3UgcGF5IHRoZSBzY2FtbWVyPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kc09mUGF5bWVudC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibG9zdE1ldGhvZHNPZlBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLmxvc3RNZXRob2RzT2ZQYXltZW50ICYmXG4gICAgICAgICAgICB2YWx1ZXMubG9zdE1ldGhvZHNPZlBheW1lbnQuaW5kZXhPZignT3RoZXIgbWV0aG9kJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIG1ldGhvZCBvZiBwYXltZW50PC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxvc3RPdGhlck1ldGhvZE9mUGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9zdE90aGVyTWV0aG9kT2ZQYXltZW50XCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgIGNhbmNlbFJvdXRlPVwiL3AxL1wiXG4gICAgICAgICAgICAgIG5leHRQYWdlPVwiU2NhbW1lciBkZXRhaWxzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5Nb25leUxvc3RGb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFNjYW1JbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5cbmNvbnN0IGhvd0NvbnRhY3RlZCA9IFtcbiAgaTE4bk1hcmsoJ1RlbGVwaG9uZScpLFxuICBpMThuTWFyaygnRW1haWwnKSxcbiAgaTE4bk1hcmsoJ1dlYnNpdGUnKSxcbiAgaTE4bk1hcmsoJ090aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5leHBvcnQgY2xhc3MgU2NhbUluZm9Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgbG9jYWxPblN1Ym1pdCA9IChjbGllbnQsIGRhdGEpID0+IHtcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzXG4gICAgb25TdWJtaXQoY2xpZW50LCBkYXRhKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRTY2FtSW5mbyhjbGllbnQpfVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2hhdCBoYXBwZW5lZD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGVuIGRpZCBpdCBzdGFydD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGFya0dyYXlcIiBtdD1cIjZweFwiIG1iPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Rm9yIGV4YW1wbGU6IEFwcmlsIDI4LCAyMDE5PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIndoZW5XZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SG93IGRpZCBpdCBzdGFydD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBob3dDb250YWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAgICAgIHt2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZCAmJlxuICAgICAgICAgICAgICAgIHZhbHVlcy5ob3dXZXJlWW91Q29udGFjdGVkLmluZGV4T2YoJ090aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgY2FuY2VsUm91dGU9XCIvcDEvXCJcbiAgICAgICAgICAgICAgICAgIG5leHRQYWdlPVwiTW9uZXkgbG9zdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cblxuU2NhbUluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_7___default()('fieldset', {
  target: "e5ctwc81",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ21DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1NjYW1JbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBmaW5hbEZvcm1BZGFwdGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmluYWxGb3JtQWRhcHRlcidcbmltcG9ydCB7IGdldFNjYW1JbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5cbmNvbnN0IGhvd0NvbnRhY3RlZCA9IFtcbiAgaTE4bk1hcmsoJ1RlbGVwaG9uZScpLFxuICBpMThuTWFyaygnRW1haWwnKSxcbiAgaTE4bk1hcmsoJ1dlYnNpdGUnKSxcbiAgaTE4bk1hcmsoJ090aGVyJyksXG5dXG5cbmNvbnN0IENoZWNrYm94U3R5bGUgPSBzdHlsZWQoJ2xhYmVsJylgXG4gIG1hcmdpbi1ib3R0b206IDhwdDtcbmBcblxuY29uc3QgRmllbGRzZXQgPSBzdHlsZWQoJ2ZpZWxkc2V0JylgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5jb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHt9XG59XG5leHBvcnQgY2xhc3MgU2NhbUluZm9Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgbG9jYWxPblN1Ym1pdCA9IChjbGllbnQsIGRhdGEpID0+IHtcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzXG4gICAgb25TdWJtaXQoY2xpZW50LCBkYXRhKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QXBvbGxvQ29uc3VtZXI+XG4gICAgICAgIHtjbGllbnQgPT4gKFxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzPXtnZXRTY2FtSW5mbyhjbGllbnQpfVxuICAgICAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gdGhpcy5sb2NhbE9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgICAgICByZW5kZXI9eyh7XG4gICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCxcbiAgICAgICAgICAgICAgLy8gcmVzZXQsXG4gICAgICAgICAgICAgIC8vIHN1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgIC8vIHByaXN0aW5lLFxuICAgICAgICAgICAgICB2YWx1ZXMsXG4gICAgICAgICAgICAgIC8vIGludmFsaWQsXG4gICAgICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2NhbURldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+V2hhdCBoYXBwZW5lZD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNjYW1EZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzY2FtRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3aGVuV2VyZVlvdUNvbnRhY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGVuIGRpZCBpdCBzdGFydD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGFya0dyYXlcIiBtdD1cIjZweFwiIG1iPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICA8VHJhbnM+Rm9yIGV4YW1wbGU6IEFwcmlsIDI4LCAyMDE5PC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2hlbldlcmVZb3VDb250YWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cIndoZW5XZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgPGxlZ2VuZD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SG93IGRpZCBpdCBzdGFydD88L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgICAgIHsoeyBpMThuIH0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBob3dDb250YWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94U3R5bGUga2V5PXtrZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3dXZXJlWW91Q29udGFjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveFN0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GaWVsZHNldD5cblxuICAgICAgICAgICAgICAgIHt2YWx1ZXMuaG93V2VyZVlvdUNvbnRhY3RlZCAmJlxuICAgICAgICAgICAgICAgIHZhbHVlcy5ob3dXZXJlWW91Q29udGFjdGVkLmluZGV4T2YoJ090aGVyJykgPiAtMSA/IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3RoZXJNZXRob2RPZkNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlck1ldGhvZE9mQ29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeSh2YWxpZGF0ZSh2YWx1ZXMpKSA9PT0gSlNPTi5zdHJpbmdpZnkoe30pID8gKFxuICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zPlBsZWFzZSBmaWxsIG91dCBhbGwgZmllbGRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgY2FuY2VsUm91dGU9XCIvcDEvXCJcbiAgICAgICAgICAgICAgICAgIG5leHRQYWdlPVwiTW9uZXkgbG9zdFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9BcG9sbG9Db25zdW1lcj5cbiAgICApXG4gIH1cbn1cblxuU2NhbUluZm9Gb3JtLnByb3BUeXBlcyA9IHtcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59XG4iXX0= */"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQnFDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTdXNwZWN0SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5cbmNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgaTE4bk1hcmsoJ0VuZ2xpc2gnKSxcbiAgaTE4bk1hcmsoJ0ZyZW5jaCcpLFxuICBpMThuTWFyaygnT3RoZXIgbGFuZ3VhZ2UnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IFN1c3BlY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0U3VzcGVjdEluZm8oY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdE5hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5OYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdEVtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsIGFkZHJlc3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RFbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0RW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RQaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QaG9uZSBudW1iZXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RQaG9uZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0UGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RXZWJzaXRlXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldlYnNpdGUgbGluazwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RBZGRyZXNzXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk1haWxpbmcgYWRkcmVzczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RJUFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JUCBhZGRyZXNzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0SVBcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdElQXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MYW5ndWFnZSBvZiBjb21tdW5pY2F0aW9uczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLnN1c3BlY3RMYW5ndWFnZSAmJlxuICAgICAgICAgICAgdmFsdWVzLnN1c3BlY3RMYW5ndWFnZS5pbmRleE9mKCdPdGhlciBsYW5ndWFnZScpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyU3VzcGVjdExhbmd1YWdlXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIGxhbmd1YWdlPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyU3VzcGVjdExhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBjYW5jZWxSb3V0ZT1cIi9wMS9cIlxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIlN1cHBvcnRpbmcgZmlsZXNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cblN1c3BlY3RJbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "e11k9m371",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm1DIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AxL2Zvcm1zL1N1c3BlY3RJbmZvRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ0BsaW5ndWkvbWFjcm8nXG5pbXBvcnQgeyBJMThuLCBpMThuTWFyayB9IGZyb20gJ0BsaW5ndWkvcmVhY3QnXG5pbXBvcnQgeyBGb3JtLCBGaWVsZCB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hlY2tib3gnXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBUZXh0SW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RleHRJbnB1dCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgZmluYWxGb3JtQWRhcHRlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZpbmFsRm9ybUFkYXB0ZXInXG5pbXBvcnQgeyBnZXRTdXNwZWN0SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3F1ZXJpZXNBbmRNdXRhdGlvbnMnXG5cbmNvbnN0IENoZWNrYm94QWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoQ2hlY2tib3gpXG5jb25zdCBUZXh0SW5wdXRBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0SW5wdXQpXG5cbmNvbnN0IGxhbmd1YWdlcyA9IFtcbiAgaTE4bk1hcmsoJ0VuZ2xpc2gnKSxcbiAgaTE4bk1hcmsoJ0ZyZW5jaCcpLFxuICBpMThuTWFyaygnT3RoZXIgbGFuZ3VhZ2UnKSxcbl1cblxuY29uc3QgQ2hlY2tib3hTdHlsZSA9IHN0eWxlZCgnbGFiZWwnKWBcbiAgbWFyZ2luLWJvdHRvbTogOHB0O1xuYFxuXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cblxuZXhwb3J0IGNvbnN0IFN1c3BlY3RJbmZvRm9ybSA9ICh7IG9uU3VibWl0IH0pID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0U3VzcGVjdEluZm8oY2xpZW50KX1cbiAgICAgICAgb25TdWJtaXQ9e2RhdGEgPT4gb25TdWJtaXQoY2xpZW50LCBkYXRhKX1cbiAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlfVxuICAgICAgICByZW5kZXI9eyh7IGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH0pID0+IChcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdE5hbWVcIj5cbiAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5OYW1lPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtUZXh0SW5wdXRBZGFwdGVyfVxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjI1cHhcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3VzcGVjdEVtYWlsXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPkVtYWlsIGFkZHJlc3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RFbWFpbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0RW1haWxcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RQaG9uZVwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5QaG9uZSBudW1iZXI8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgbmFtZT1cInN1c3BlY3RQaG9uZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJzdXNwZWN0UGhvbmVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RXZWJzaXRlXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPldlYnNpdGUgbGluazwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdFdlYnNpdGVcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RBZGRyZXNzXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPk1haWxpbmcgYWRkcmVzczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICBuYW1lPVwic3VzcGVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1c3BlY3RJUFwiPlxuICAgICAgICAgICAgICA8VGV4dCBtYXJnaW5Ub3A9e1s0LCBudWxsLCA1XX0+XG4gICAgICAgICAgICAgICAgPFRyYW5zPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZz5JUCBhZGRyZXNzPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0SVBcIlxuICAgICAgICAgICAgICAgIGlkPVwic3VzcGVjdElQXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRJbnB1dEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMDBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5MYW5ndWFnZSBvZiBjb21tdW5pY2F0aW9uczwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxJMThuPlxuICAgICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VzLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hTdHlsZSBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdXNwZWN0TGFuZ3VhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17Q2hlY2tib3hBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17aTE4bi5fKGtleSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvSTE4bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZpZWxkc2V0PlxuXG4gICAgICAgICAgICB7dmFsdWVzLnN1c3BlY3RMYW5ndWFnZSAmJlxuICAgICAgICAgICAgdmFsdWVzLnN1c3BlY3RMYW5ndWFnZS5pbmRleE9mKCdPdGhlciBsYW5ndWFnZScpID4gLTEgPyAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm90aGVyU3VzcGVjdExhbmd1YWdlXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zPk90aGVyIGxhbmd1YWdlPC9UcmFucz5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm90aGVyU3VzcGVjdExhbmd1YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdGhlclN1c3BlY3RMYW5ndWFnZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dElucHV0QWRhcHRlcn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwcHhcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICBidXR0b25MaW5rPXtmYWxzZX1cbiAgICAgICAgICAgICAgY2FuY2VsPXt0cnVlfVxuICAgICAgICAgICAgICBjYW5jZWxSb3V0ZT1cIi9wMS9cIlxuICAgICAgICAgICAgICBuZXh0UGFnZT1cIlN1cHBvcnRpbmcgZmlsZXNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgICl9XG4gIDwvQXBvbGxvQ29uc3VtZXI+XG4pXG5cblN1c3BlY3RJbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
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
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lingui/react */ "@lingui/react");
/* harmony import */ var _lingui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lingui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header/index.js");
/* harmony import */ var _TrackPageViews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TrackPageViews */ "./src/TrackPageViews.js");
/* harmony import */ var _components_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/stepper */ "./src/components/stepper/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/queriesAndMutations */ "./src/utils/queriesAndMutations.js");
/* harmony import */ var _ConfirmationSummary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConfirmationSummary */ "./src/p2/ConfirmationSummary.js");
/* harmony import */ var _forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/ConfirmationForm */ "./src/p2/forms/ConfirmationForm.js");
/* harmony import */ var _components_backbutton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/backbutton */ "./src/components/backbutton/index.js");


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

var submit = function submit(client, submitReportP2) {
  var timeFrame = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getTimeFrame"])(client);
  var whatHappened = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getWhatHappened"])(client);
  var scammerDetails = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getScammerDetails"])(client);
  var impact = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getImpact"])(client);
  var p2ContactInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getP2ContactInfo"])(client);
  var surveyInfo = Object(_utils_queriesAndMutations__WEBPACK_IMPORTED_MODULE_7__["getSurveyInfo"])(client);
  var fullName = p2ContactInfo.fullName,
      email = p2ContactInfo.email,
      phone = p2ContactInfo.phone,
      postalCode = p2ContactInfo.postalCode;
  fullName = randomizeString(fullName);
  email = randomizeString(email);
  phone = randomizeString(phone);
  postalCode = randomizeString(postalCode);
  var data = {
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
  submitReportP2({
    variables: data
  });
  Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])('nextsteps');
};

var ConfirmationPage = function ConfirmationPage() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_TrackPageViews__WEBPACK_IMPORTED_MODULE_4__["TrackPageViews"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_backbutton__WEBPACK_IMPORTED_MODULE_10__["BackButton"], {
    route: "/p2/contactinfo"
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "your contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_5__["Steps"], {
    activeStep: 6,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "confirmationPage.title",
    defaults: "Review your report"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ConfirmationSummary__WEBPACK_IMPORTED_MODULE_8__["ConfirmationSummary"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_forms_ConfirmationForm__WEBPACK_IMPORTED_MODULE_9__["ConfirmationForm"], {
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
    id: "the impact"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_stepper__WEBPACK_IMPORTED_MODULE_5__["Steps"], {
    activeStep: 5,
    totalSteps: 6
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "Leave your contact information"
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "We will use this to send you a confirmation email and to link your report to other reports in your area."
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
    id: "the suspect"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_stepper__WEBPACK_IMPORTED_MODULE_6__["Steps"], {
    activeStep: 4,
    totalSteps: 6
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["H1"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "What was the impact of the scam?"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_4__["P"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
    id: "You're not the only one affected by this scam. Help protect others by telling us how the scam affected you."
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
        defaults: "We've sent you an email with a summary of your report. Your reference number is  <0>#NC300234234</0>",
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
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "<0>Full name</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "fullName",
          id: "fullName",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "email"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "<0>Email address</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          name: "email",
          id: "email",
          component: TextInputAdapter,
          height: "25px",
          width: "300px"
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("label", {
          htmlFor: "postalCode"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_6__["Text"], {
          marginTop: [4, null, 5]
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_0__["Trans"], {
          id: "<0>Postal code</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], {
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCcUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0SW1wYWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IGhvd1dlcmVZb3VBZmZlY3RlZCA9IFtcbiAgaTE4bk1hcmsoJ0RldmljZSBvciBhY2NvdW50IGhhY2tlZCcpLFxuICBpMThuTWFyaygnSW5mb3JtYXRpb24gc3RvbGVuJyksXG4gIGkxOG5NYXJrKCdNb25leSBsb3N0JyksXG4gIGkxOG5NYXJrKCdSZXB1dGF0aW9uIGRhbWFnZWQnKSxcbiAgaTE4bk1hcmsoJ1NhZmV0eSB0aHJlYXRlbmVkJyksXG4gIGkxOG5NYXJrKCdXZWxsYmVpbmcgYWZmZWN0ZWQnKSxcbiAgaTE4bk1hcmsoJ05vIGltcGFjdCcpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmV4cG9ydCBjb25zdCBJbXBhY3RTdGF0ZW1lbnRJbmZvRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0SW1wYWN0KGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IHdhcyB0aGUgaW1wYWN0IG9mIHRoZSBzY2FtPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBob3dXZXJlWW91QWZmZWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VBZmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGFtYWdlXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRlbGwgdXMgbW9yZSBhYm91dCBob3cgaXQgaW1wYWN0ZWQgeW91Ljwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJkYXJrR3JheVwiIG10PVwiNnB4XCIgbWI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGU6IHRoZSBhbW91bnQgb2YgbW9uZXksIHRoZSBpbmZvcm1hdGlvbiB0YWtlbixcbiAgICAgICAgICAgICAgICAgICAgd2hhdCBlbHNlIHdhcyBhZmZlY3RlZFxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYW1hZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgIG5leHRQYWdlPVwiQ29udGFjdCBpbmZvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5JbXBhY3RTdGF0ZW1lbnRJbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
});

var Fieldset =
/*#__PURE__*/
_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('fieldset', {
  target: "eemyvxu1",
  label: "Fieldset"
})( false ? undefined : {
  name: "vtzyb",
  styles: "margin:0;padding:0;border:none;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL0ltcGFjdFN0YXRlbWVudEluZm9Gb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCbUMiLCJmaWxlIjoiL1VzZXJzL2FuaWsvcmVwb3J0LWEtY3liZXJjcmltZS9mcm9udGVuZC9zcmMvcDIvZm9ybXMvSW1wYWN0U3RhdGVtZW50SW5mb0Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoZWNrYm94J1xuaW1wb3J0IHsgQnV0dG9uc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy1jb250YWluZXInXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0J1xuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQtYXJlYSdcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0SW1wYWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcXVlcmllc0FuZE11dGF0aW9ucydcblxuY29uc3QgQ2hlY2tib3hBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihDaGVja2JveClcbmNvbnN0IFRleHRBcmVhQWRhcHRlciA9IGZpbmFsRm9ybUFkYXB0ZXIoVGV4dEFyZWEpXG5cbmNvbnN0IGhvd1dlcmVZb3VBZmZlY3RlZCA9IFtcbiAgaTE4bk1hcmsoJ0RldmljZSBvciBhY2NvdW50IGhhY2tlZCcpLFxuICBpMThuTWFyaygnSW5mb3JtYXRpb24gc3RvbGVuJyksXG4gIGkxOG5NYXJrKCdNb25leSBsb3N0JyksXG4gIGkxOG5NYXJrKCdSZXB1dGF0aW9uIGRhbWFnZWQnKSxcbiAgaTE4bk1hcmsoJ1NhZmV0eSB0aHJlYXRlbmVkJyksXG4gIGkxOG5NYXJrKCdXZWxsYmVpbmcgYWZmZWN0ZWQnKSxcbiAgaTE4bk1hcmsoJ05vIGltcGFjdCcpLFxuXVxuXG5jb25zdCBDaGVja2JveFN0eWxlID0gc3R5bGVkKCdsYWJlbCcpYFxuICBtYXJnaW4tYm90dG9tOiA4cHQ7XG5gXG5jb25zdCBGaWVsZHNldCA9IHN0eWxlZCgnZmllbGRzZXQnKWBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5gXG5cbmNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge31cbn1cbmV4cG9ydCBjb25zdCBJbXBhY3RTdGF0ZW1lbnRJbmZvRm9ybSA9IHByb3BzID0+IChcbiAgPEFwb2xsb0NvbnN1bWVyPlxuICAgIHtjbGllbnQgPT4gKFxuICAgICAgPEZvcm1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17Z2V0SW1wYWN0KGNsaWVudCl9XG4gICAgICAgIG9uU3VibWl0PXtkYXRhID0+IHByb3BzLm9uU3VibWl0KGNsaWVudCwgZGF0YSl9XG4gICAgICAgIHZhbGlkYXRlPXt2YWxpZGF0ZX1cbiAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEZpZWxkc2V0PlxuICAgICAgICAgICAgICA8bGVnZW5kPlxuICAgICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5XaGF0IHdhcyB0aGUgaW1wYWN0IG9mIHRoZSBzY2FtPzwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvbGVnZW5kPlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgICB7KHsgaTE4biB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBob3dXZXJlWW91QWZmZWN0ZWQubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFN0eWxlIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhvd1dlcmVZb3VBZmZlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtDaGVja2JveEFkYXB0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtpMThuLl8oa2V5KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3hTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9JMThuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmllbGRzZXQ+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGFtYWdlXCI+XG4gICAgICAgICAgICAgIDxUZXh0IG1hcmdpblRvcD17WzUsIG51bGwsIDZdfT5cbiAgICAgICAgICAgICAgICA8VHJhbnM+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPlRlbGwgdXMgbW9yZSBhYm91dCBob3cgaXQgaW1wYWN0ZWQgeW91Ljwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJkYXJrR3JheVwiIG10PVwiNnB4XCIgbWI9XCI4cHhcIj5cbiAgICAgICAgICAgICAgICAgIDxUcmFucz5cbiAgICAgICAgICAgICAgICAgICAgRm9yIGV4YW1wbGU6IHRoZSBhbW91bnQgb2YgbW9uZXksIHRoZSBpbmZvcm1hdGlvbiB0YWtlbixcbiAgICAgICAgICAgICAgICAgICAgd2hhdCBlbHNlIHdhcyBhZmZlY3RlZFxuICAgICAgICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkYW1hZ2VcIlxuICAgICAgICAgICAgICAgIGlkPVwiZGFtYWdlXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1RleHRBcmVhQWRhcHRlcn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICBjYW5jZWw9e3RydWV9XG4gICAgICAgICAgICAgIG5leHRQYWdlPVwiQ29udGFjdCBpbmZvXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApfVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuXG5JbXBhY3RTdGF0ZW1lbnRJbmZvRm9ybS5wcm9wVHlwZXMgPSB7XG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuIl19 */"
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
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>What was the impact of the scam?</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["I18n"], null, function (_ref2) {
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
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "<0>Tell us more about how it impacted you.</0>",
          components: [Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("strong", null)]
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_text__WEBPACK_IMPORTED_MODULE_8__["Text"], {
          color: "darkGray",
          mt: "6px",
          mb: "8px"
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_lingui_react__WEBPACK_IMPORTED_MODULE_4__["Trans"], {
          id: "For example: the amount of money, the information taken, what else was affected"
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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5STBCIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBIMiwgSDMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFVsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bm9yZGVyZWQtbGlzdCdcbmltcG9ydCB7IExpIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saXN0LWl0ZW0nXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0U2NhbW1lckRldGFpbHMgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuLi8uLi9pbWFnZXMvdXBsb2FkLnN2ZydcblxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xpZW50IH0gPSBwcm9wc1xuICBjb25zdCBjYWNoZWQgPSBnZXRTY2FtbWVyRGV0YWlscyhjbGllbnQpXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoY2FjaGVkLmZpbGVzLm1hcChmaWxlID0+ICh7IG5hbWU6IGZpbGUgfSkpKVxuICBjb25zdCBbZmlsZURlc2NyaXB0aW9ucywgc2V0RmlsZURlc2NyaXB0aW9uc10gPSB1c2VTdGF0ZShcbiAgICBjYWNoZWQuZmlsZURlc2NyaXB0aW9ucyxcbiAgKVxuICBjb25zdCBbc2NhbW1lckRldGFpbHMsIHNldFNjYW1tZXJEZXRhaWxzXSA9IHVzZVN0YXRlKGNhY2hlZC5zY2FtbWVyRGV0YWlscylcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxuICBpMThuTWFyaygnZmlsZVVwbG9hZC5yZW1vdmVkJylcbiAgaTE4bk1hcmsoJ2ZpbGVVcGxvYWQuYWRkZWQnKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKS5mb2N1cygpXG4gICAgfVxuICB9LCBbc3RhdHVzXSlcblxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3NjYW1tZXJEZXRhaWxzJykge1xuICAgICAgc2V0U2NhbW1lckRldGFpbHMoZS50YXJnZXQudmFsdWUpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZC5pbmRleE9mKCdmaWxlLWRlc2NyaXB0aW9uJykgPiAtMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuaWQuc3Vic3RyaW5nKDE3KSlcbiAgICAgIGxldCBuZXdGaWxlRGVzY3JpcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWxlRGVzY3JpcHRpb25zKSlcbiAgICAgIG5ld0ZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMobmV3RmlsZURlc2NyaXB0aW9ucylcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICBzZXRTdGF0dXMoJ2ZpbGVVcGxvYWQuYWRkZWQnKVxuICAgICAgc2V0RmlsZXMoZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSlcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMoZmlsZURlc2NyaXB0aW9ucy5jb25jYXQoJycpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gZmlsZXMuZmlsdGVyKChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleClcbiAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IGZpbGVEZXNjcmlwdGlvbnMuZmlsdGVyKFxuICAgICAgKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4LFxuICAgIClcbiAgICBzZXRGaWxlcyhuZXdGaWxlcylcbiAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgc2V0U3RhdHVzKCdmaWxlVXBsb2FkLnJlbW92ZWQnKVxuICB9XG5cbiAgY29uc3QgbG9jYWxTdWJtaXQgPSBjbGllbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzY2FtbWVyRGV0YWlscyxcbiAgICAgIGZpbGVzOiBmaWxlcy5tYXAoZiA9PiBmLm5hbWUpLFxuICAgICAgZmlsZURlc2NyaXB0aW9ucyxcbiAgICB9XG4gICAgcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKVxuICB9XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgb25TdWJtaXQ9eygpID0+IGxvY2FsU3VibWl0KGNsaWVudCl9XG4gICAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsc1wiPlRoaW5rIGFib3V0IGluY2x1ZGluZyB0aGluZ3Mgc3VjaCBhczo8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDxVbD5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmRldGFpbDFcIj5XaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT57JyAnfVxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsMlwiPldoZXJlIHRoZXkgYXNrZWQgeW91IHRvIHNlbmQgdGhpbmdzPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsM1wiPldoYXQgbGFuZ3VhZ2UgdGhleSB1c2VkIHRvIGNvbW11bmljYXRlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsNFwiPkFueSBzY3JlZW5zaG90cywgbWVzc2FnZXMsIG9yIHJlY2VpcHRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICA8L1VsPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+PFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5zdW1tYXJ5XCI+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFdoYXQgZG8geW91IGtub3cgYWJvdXQgd2hlcmUgdGhlIHNjYW0gY2FtZSBmcm9tP1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGFya0dyYXlcIiBtdD1cIjZweFwiIG1iPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwucmVtaW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciB0byBpbmNsdWRlIGFueSBlbWFpbCBhZGRyZXNzZXMsIHBob25lIG51bWJlcnMsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZSBsaW5rc1xuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGlucHV0PXt7IHZhbHVlOiBzY2FtbWVyRGV0YWlscywgb25DaGFuZ2UgfX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2FtbWVyRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICBpZD1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCA1LCA1XX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiMC42cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A9XCIwLjZyZW1cIlxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwidXBsb2FkIGljb25cIiBzcmM9e3VwbG9hZH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmFkZEZpbGVCdXR0b21cIj5BZGQgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0gbGluZUhlaWdodD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0gyPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5fKHN0YXR1cyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEgzIG1hcmdpblRvcD17WzQsIG51bGwsIDVdfSBmb250U2l6ZT17WzIsIG51bGwsIDRdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5maWxlRGVzY3JpcHRpb25cIj5EZXNjcmliZSB3aGF0IHRoaXMgZmlsZSBzaG93czwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IGZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5yZW1vdmVGaWxlQnV0dG9uXCI+UmVtb3ZlIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBuZXh0UGFnZT1cIkltcGFjdCBvZiBzY2FtXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICApXG59XG5cblNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xpZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IDxTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkIGNsaWVudD17Y2xpZW50fSB7Li4ucHJvcHN9IC8+fVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuIl19 */"
};

var _ref2 =  false ? undefined : {
  name: "5uezzw-ScammerDetailsFormWrapped",
  styles: ":focus{outline:0px solid transparent;}label:ScammerDetailsFormWrapped;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1S2dDIiwiZmlsZSI6Ii9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3AyL2Zvcm1zL1NjYW1tZXJEZXRhaWxzRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCB7IEFwb2xsb0NvbnN1bWVyIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdAbGluZ3VpL21hY3JvJ1xuaW1wb3J0IHsgSTE4biwgaTE4bk1hcmsgfSBmcm9tICdAbGluZ3VpL3JlYWN0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBCdXR0b25zQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9idXR0b25zLWNvbnRhaW5lcidcbmltcG9ydCB7IFRleHRBcmVhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90ZXh0LWFyZWEnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RleHQnXG5pbXBvcnQgeyBIMiwgSDMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCB7IFAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3BhcmFncmFwaCdcbmltcG9ydCB7IFVsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91bm9yZGVyZWQtbGlzdCdcbmltcG9ydCB7IExpIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saXN0LWl0ZW0nXG5pbXBvcnQgeyBGaWxlVXBsb2FkIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLXVwbG9hZCdcbmltcG9ydCB7IGZpbmFsRm9ybUFkYXB0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9maW5hbEZvcm1BZGFwdGVyJ1xuaW1wb3J0IHsgZ2V0U2NhbW1lckRldGFpbHMgfSBmcm9tICcuLi8uLi91dGlscy9xdWVyaWVzQW5kTXV0YXRpb25zJ1xuaW1wb3J0IHVwbG9hZCBmcm9tICcuLi8uLi9pbWFnZXMvdXBsb2FkLnN2ZydcblxuY29uc3QgVGV4dEFyZWFBZGFwdGVyID0gZmluYWxGb3JtQWRhcHRlcihUZXh0QXJlYSlcblxuZXhwb3J0IGNvbnN0IFNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgY2xpZW50IH0gPSBwcm9wc1xuICBjb25zdCBjYWNoZWQgPSBnZXRTY2FtbWVyRGV0YWlscyhjbGllbnQpXG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoY2FjaGVkLmZpbGVzLm1hcChmaWxlID0+ICh7IG5hbWU6IGZpbGUgfSkpKVxuICBjb25zdCBbZmlsZURlc2NyaXB0aW9ucywgc2V0RmlsZURlc2NyaXB0aW9uc10gPSB1c2VTdGF0ZShcbiAgICBjYWNoZWQuZmlsZURlc2NyaXB0aW9ucyxcbiAgKVxuICBjb25zdCBbc2NhbW1lckRldGFpbHMsIHNldFNjYW1tZXJEZXRhaWxzXSA9IHVzZVN0YXRlKGNhY2hlZC5zY2FtbWVyRGV0YWlscylcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxuICBpMThuTWFyaygnZmlsZVVwbG9hZC5yZW1vdmVkJylcbiAgaTE4bk1hcmsoJ2ZpbGVVcGxvYWQuYWRkZWQnKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0dXMpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKS5mb2N1cygpXG4gICAgfVxuICB9LCBbc3RhdHVzXSlcblxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3NjYW1tZXJEZXRhaWxzJykge1xuICAgICAgc2V0U2NhbW1lckRldGFpbHMoZS50YXJnZXQudmFsdWUpXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZC5pbmRleE9mKCdmaWxlLWRlc2NyaXB0aW9uJykgPiAtMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBOdW1iZXIoZS50YXJnZXQuaWQuc3Vic3RyaW5nKDE3KSlcbiAgICAgIGxldCBuZXdGaWxlRGVzY3JpcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmaWxlRGVzY3JpcHRpb25zKSlcbiAgICAgIG5ld0ZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMobmV3RmlsZURlc2NyaXB0aW9ucylcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmZpbGVzICYmIGUudGFyZ2V0LmZpbGVzWzBdKSB7XG4gICAgICBzZXRTdGF0dXMoJ2ZpbGVVcGxvYWQuYWRkZWQnKVxuICAgICAgc2V0RmlsZXMoZmlsZXMuY29uY2F0KGUudGFyZ2V0LmZpbGVzWzBdKSlcbiAgICAgIHNldEZpbGVEZXNjcmlwdGlvbnMoZmlsZURlc2NyaXB0aW9ucy5jb25jYXQoJycpKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJlbW92ZUZpbGUgPSBpbmRleCA9PiB7XG4gICAgbGV0IG5ld0ZpbGVzID0gZmlsZXMuZmlsdGVyKChfLCBmaWxlSW5kZXgpID0+IGluZGV4ICE9IGZpbGVJbmRleClcbiAgICBsZXQgbmV3RmlsZURlc2NyaXB0aW9ucyA9IGZpbGVEZXNjcmlwdGlvbnMuZmlsdGVyKFxuICAgICAgKF8sIGZpbGVJbmRleCkgPT4gaW5kZXggIT0gZmlsZUluZGV4LFxuICAgIClcbiAgICBzZXRGaWxlcyhuZXdGaWxlcylcbiAgICBzZXRGaWxlRGVzY3JpcHRpb25zKG5ld0ZpbGVEZXNjcmlwdGlvbnMpXG4gICAgc2V0U3RhdHVzKCdmaWxlVXBsb2FkLnJlbW92ZWQnKVxuICB9XG5cbiAgY29uc3QgbG9jYWxTdWJtaXQgPSBjbGllbnQgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBzY2FtbWVyRGV0YWlscyxcbiAgICAgIGZpbGVzOiBmaWxlcy5tYXAoZiA9PiBmLm5hbWUpLFxuICAgICAgZmlsZURlc2NyaXB0aW9ucyxcbiAgICB9XG4gICAgcHJvcHMub25TdWJtaXQoY2xpZW50LCBkYXRhKVxuICB9XG4gIHJldHVybiAoXG4gICAgPEFwb2xsb0NvbnN1bWVyPlxuICAgICAge2NsaWVudCA9PiAoXG4gICAgICAgIDxGb3JtXG4gICAgICAgICAgb25TdWJtaXQ9eygpID0+IGxvY2FsU3VibWl0KGNsaWVudCl9XG4gICAgICAgICAgcmVuZGVyPXsoeyBoYW5kbGVTdWJtaXQgfSkgPT4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxQPlxuICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsc1wiPlRoaW5rIGFib3V0IGluY2x1ZGluZyB0aGluZ3Mgc3VjaCBhczo8L1RyYW5zPlxuICAgICAgICAgICAgICA8L1A+XG4gICAgICAgICAgICAgIDxVbD5cbiAgICAgICAgICAgICAgICA8TGk+XG4gICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmRldGFpbDFcIj5XaG8gdGhlIHNjYW1tZXIgY2xhaW1lZCB0byBiZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgPC9MaT57JyAnfVxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsMlwiPldoZXJlIHRoZXkgYXNrZWQgeW91IHRvIHNlbmQgdGhpbmdzPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsM1wiPldoYXQgbGFuZ3VhZ2UgdGhleSB1c2VkIHRvIGNvbW11bmljYXRlPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICAgIDxMaT5cbiAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwuZGV0YWlsNFwiPkFueSBzY3JlZW5zaG90cywgbWVzc2FnZXMsIG9yIHJlY2VpcHRzPC9UcmFucz5cbiAgICAgICAgICAgICAgICA8L0xpPlxuICAgICAgICAgICAgICA8L1VsPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjYW1tZXJEZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPFRleHQgbWFyZ2luVG9wPXtbNSwgbnVsbCwgNl19PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+PFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5zdW1tYXJ5XCI+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIFdoYXQgZG8geW91IGtub3cgYWJvdXQgd2hlcmUgdGhlIHNjYW0gY2FtZSBmcm9tP1xuICAgICAgICAgICAgICAgICAgPC9UcmFucz48L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZGFya0dyYXlcIiBtdD1cIjZweFwiIG1iPVwiOHB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFucyBpZD1cInNjYW1tZXJEZXRhaWwucmVtaW5kZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciB0byBpbmNsdWRlIGFueSBlbWFpbCBhZGRyZXNzZXMsIHBob25lIG51bWJlcnMsIG9yXG4gICAgICAgICAgICAgICAgICAgICAgd2Vic2l0ZSBsaW5rc1xuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgIGlucHV0PXt7IHZhbHVlOiBzY2FtbWVyRGV0YWlscywgb25DaGFuZ2UgfX1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzY2FtbWVyRGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgICBpZD1cInNjYW1tZXJEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A9e1syLCBudWxsLCA1XX1cbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b209e1syLCA1LCA1XX1cbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9e1snZmxleC1zdGFydCcsICdjZW50ZXInLCAnZmxleC1zdGFydCddfVxuICAgICAgICAgICAgICAgIHRleHRBbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9e1snYXV0bycsICcxMDAlJywgJ2F1dG8nXX1cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PVwiMS41cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tPVwiMC42cmVtXCJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A9XCIwLjZyZW1cIlxuICAgICAgICAgICAgICAgICAgY3NzPXtjc3NgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwidXBsb2FkIGljb25cIiBzcmM9e3VwbG9hZH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VHJhbnMgaWQ9XCJzY2FtbWVyRGV0YWlsLmFkZEZpbGVCdXR0b21cIj5BZGQgZmlsZTwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9GaWxlVXBsb2FkPlxuICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPEkxOG4+XG4gICAgICAgICAgICAgICAgeyh7IGkxOG4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8SDIgZm9udFNpemU9e1s0LCBudWxsLCA1XX0gbGluZUhlaWdodD17WzQsIG51bGwsIDVdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5wbHVyYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uZTogJyMgZmlsZSBhdHRhY2hlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcjogJyMgZmlsZXMgYXR0YWNoZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L0gyPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzdGF0dXMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PXstMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNzcz17Y3NzYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aTE4bi5fKHN0YXR1cyl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9JMThuPlxuXG4gICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEgzIG1hcmdpblRvcD17WzQsIG51bGwsIDVdfSBmb250U2l6ZT17WzIsIG51bGwsIDRdfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgZmlsZS1kZXNjcmlwdGlvbi0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5maWxlRGVzY3JpcHRpb25cIj5EZXNjcmliZSB3aGF0IHRoaXMgZmlsZSBzaG93czwvVHJhbnM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3sgdmFsdWU6IGZpbGVEZXNjcmlwdGlvbnNbaW5kZXhdLCBvbkNoYW5nZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YGZpbGUtZGVzY3JpcHRpb24tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlLWRlc2NyaXB0aW9uLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17VGV4dEFyZWFBZGFwdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cImNyaW1zb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFRyYW5zIGlkPVwic2NhbW1lckRldGFpbC5yZW1vdmVGaWxlQnV0dG9uXCI+UmVtb3ZlIGZpbGU8L1RyYW5zPlxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgICAgIGJ1dHRvbkxpbms9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGNhbmNlbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBuZXh0UGFnZT1cIkltcGFjdCBvZiBzY2FtXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L0Fwb2xsb0NvbnN1bWVyPlxuICApXG59XG5cblNjYW1tZXJEZXRhaWxzRm9ybVdyYXBwZWQucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xpZW50OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBjb25zdCBTY2FtbWVyRGV0YWlsc0Zvcm0gPSBwcm9wcyA9PiAoXG4gIDxBcG9sbG9Db25zdW1lcj5cbiAgICB7Y2xpZW50ID0+IDxTY2FtbWVyRGV0YWlsc0Zvcm1XcmFwcGVkIGNsaWVudD17Y2xpZW50fSB7Li4ucHJvcHN9IC8+fVxuICA8L0Fwb2xsb0NvbnN1bWVyPlxuKVxuIl19 */"
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














var assets, publicDir;
var RAZZLE_SERVER_SIDE_API_URI = process.env.RAZZLE_SERVER_SIDE_API_URI;

if (false) {} else {
  assets = __webpack_require__(/*! ./build/assets.json */ "./build/assets.json");
  publicDir = "/Users/anik/report-a-cybercrime/frontend/public";
}

var server = express__WEBPACK_IMPORTED_MODULE_10___default()();
server.disable('x-powered-by').use(express__WEBPACK_IMPORTED_MODULE_10___default.a["static"](publicDir)).use(express_request_language__WEBPACK_IMPORTED_MODULE_11___default()({
  languages: ['en', 'fr']
})).get('/assets', function (_req, res) {
  res.status(200).send(JSON.stringify(assets));
}).get('/monitoring/alive', function (_req, res) {
  res.status(200).send('yes');
}).use('/public', express__WEBPACK_IMPORTED_MODULE_10___default.a["static"](__dirname + '/public')).use('/static', express__WEBPACK_IMPORTED_MODULE_10___default.a["static"]('static')).get('/monitoring/ready', function (_req, res) {
  res.status(200).send('yes');
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
  }, ";margin:0;", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontSize"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["colorStyle"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], ";", styled_system__WEBPACK_IMPORTED_MODULE_3__["display"], ";" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmlrL3JlcG9ydC1hLWN5YmVyY3JpbWUvZnJvbnRlbmQvc3JjL3V0aWxzL2FzQW5jaG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCSSIsImZpbGUiOiIvVXNlcnMvYW5pay9yZXBvcnQtYS1jeWJlcmNyaW1lL2Zyb250ZW5kL3NyYy91dGlscy9hc0FuY2hvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHNwYWNlLFxuICBmb250V2VpZ2h0LFxuICBjb2xvclN0eWxlLFxuICBkaXNwbGF5LFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJ1xuaW1wb3J0IHsgY2xlYW5Qcm9wcyB9IGZyb20gJy4vY2xlYW5Qcm9wcydcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGNvbnN0IGFzQW5jaG9yID0gQW5jaG9yVHlwZSA9PiB7XG4gIGNvbnN0IEFuY2hvciA9IHByb3BzID0+IDxBbmNob3JUeXBlIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvQW5jaG9yVHlwZT5cblxuICBBbmNob3IucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICB9XG5cbiAgY29uc3QgU3R5bGVkQW5jaG9yID0gc3R5bGVkKEFuY2hvciwge1xuICAgIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IGNsZWFuUHJvcHMocHJvcCksXG4gIH0pYFxuICAgIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTYW5zfTtcbiAgICBtYXJnaW46IDA7XG4gICAgJHtmb250U2l6ZX07XG4gICAgJHtsaW5lSGVpZ2h0fTtcbiAgICAke3NwYWNlfTtcbiAgICAke2NvbG9yU3R5bGV9O1xuICAgICR7Zm9udFdlaWdodH07XG4gICAgJHtkaXNwbGF5fTtcbiAgYFxuXG4gIFN0eWxlZEFuY2hvci5wcm9wVHlwZXMgPSB7XG4gICAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAgIC4uLmxpbmVIZWlnaHQucHJvcFR5cGVzLFxuICAgIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgICAuLi5jb2xvclN0eWxlLnByb3BUeXBlcyxcbiAgICAuLi5mb250V2VpZ2h0LnByb3BUeXBlcyxcbiAgICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbiAgfVxuXG4gIHJldHVybiBTdHlsZWRBbmNob3Jcbn1cbiJdfQ== */"));

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
module.exports = __webpack_require__(/*! /Users/anik/report-a-cybercrime/frontend/src */"./src/index.js");


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

/***/ })

/******/ });
//# sourceMappingURL=server.js.map