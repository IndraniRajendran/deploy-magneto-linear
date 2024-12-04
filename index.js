// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5nxYn":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "bebc91dccb5f5641";
module.bundle.HMR_BUNDLE_ID = "c75d535b7e64cba1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hlHXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>init);
/**
 * Fetches config on resources matching the device's partnerId.  If there, and finds version override,
 * loads that script and passes configuration to the new app's init function.
 * If any error, or no config or same version, hit our callback that should reference our app's main function.
 *
 * @typedef {import('./utils/as-messaging').WebSocketMessageConfigure} WebSocketMessageConfigure
 *
 * @param {WebSocket}               webSocket               websocket to be passed to main or new version
 * @param {WebSocketMessageConfigure} glassConfigureObject       Configuration Object from websocket that contains mac address and details of environment
 * @param {requestCallback}         callbackIfNoOverrides   Callback to hit if no different script to load.
 */ parcelHelpers.export(exports, "loadLatestVersionFromGlassConfigureObject", ()=>loadLatestVersionFromGlassConfigureObject);
var _packageJson = require("../package.json"); // eslint-disable-line import/no-unused-modules
var _configs = require("./utils/configs");
var _utils = require("./utils/utils");
var _asMessaging = require("./utils/as-messaging");
var _main = require("./app/main");
var _mainDefault = parcelHelpers.interopDefault(_main);
// Always print the running script name + version.
console.info(`${(0, _packageJson.name)} version ${(0, _packageJson.version)} loaded`); // eslint-disable-line no-console
if (module.hot) {
    module.hot.dispose(function hotReloadDispose(data) {
        // module is about to be replaced.
        // You can save data that should be accessible to the new asset in `data`
        console.error("dispose");
        data.updated = Date.now();
    });
    module.hot.accept(function hotReloadAccept() {
        console.error("accept");
        // module or one of its dependencies was just updated.
        // data stored in `dispose` is available in `module.hot.data`
        const { updated } = module.hot.data;
        console.log("RELOADED", updated); // eslint-disable-line no-console
        window.location.reload(true);
    });
}
function init({ preloadedWebSocket, preloadedGlassConfigureObject, preloadedPartnerGlassConfigureObject } = {}) {
    const webSocket = preloadedWebSocket || new WebSocket("ws://localhost:9031");
    if (preloadedGlassConfigureObject) (0, _mainDefault.default)({
        webSocket,
        glassConfigureObject: preloadedGlassConfigureObject,
        partnerConfig: preloadedPartnerGlassConfigureObject
    });
    else {
        webSocket.onopen = function onOpen() {
            console.log("WebSocket connection established"); // eslint-disable-line no-console
        };
        webSocket.onmessage = function onMessage(event) {
            const request = JSON.parse(event.data);
            const { msgType, msgData } = request;
            const logFunction = msgType === (0, _asMessaging.MSG_TYPES).CONFIGURE ? "debug" : "log";
            console[logFunction](`WebSocket request received from AS to index ${JSON.stringify(request)}`); // eslint-disable-line no-console
            if (msgType === (0, _asMessaging.MSG_TYPES).CONFIGURE) {
                // if `configure` doesn't have partnerId, ignore it
                if (msgData.accountId && msgData.estbMacAddress && msgData.partnerId) // regardless if we use it or not, we're going to fetch remote config.
                // Remote config in the future may grow to have some other options for "prior-to-booting" things.
                loadLatestVersionFromGlassConfigureObject(webSocket, msgData, (0, _mainDefault.default));
                else console.warn("AS 'configure' message ignored, waiting for another containing accountId, estbMacAddress and partnerId");
            } else if (msgType === (0, _asMessaging.MSG_TYPES).GET_STATE) // While we're still loading things, this reply keeps further instructions away from us.
            // We may wish to use further instructions from a differently loaded bundle.
            (0, _asMessaging.sendApplicationServicesMessage)((0, _asMessaging.MSG_TYPES).GET_STATE_RETURN, {
                state: "loadingPpConfig"
            }, webSocket, request);
            else console.warn("Loader: Previous WebSocket message not handled prior to loader finishing", msgType, msgData);
        };
    }
}
// We expose this on the dom, so if another version is calling us, it can call us.
window.streamotionGlass = {
    init,
    version: (0, _packageJson.version)
};
async function loadLatestVersionFromGlassConfigureObject(webSocket, glassConfigureObject, callbackIfNoOverrides) {
    const { partnerId } = glassConfigureObject;
    const partnerConfigUrl = (0, _configs.getPartnerIdConfig)(partnerId);
    let overrideVersion;
    fetch((0, _utils.addProxyIp)(partnerConfigUrl)).then((response)=>{
        if (response.ok) return response.json();
        else throw `Unable to get partner config. ${partnerConfigUrl} ${response.status} ${response.statusText}`;
    }).then((partnerConfig)=>{
        var resolve, reject, e, error;
        return callbackIfNoOverrides({
            webSocket,
            glassConfigureObject,
            partnerConfig
        });
    }).catch((error)=>{
        console.error("loadLatestVersionFromGlassConfigureObject Error in Fetch Partner Config", error);
        callbackIfNoOverrides({
            webSocket,
            glassConfigureObject
        });
    });
}

},{"../package.json":"2yJRh","./utils/configs":"aVOlA","./utils/utils":"fvIy3","./utils/as-messaging":"auBlN","./app/main":"5eXaN","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"2yJRh":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"@fsa-streamotion/streamotion-glass-integrated-player","version":"0.6.1","description":"Magneto Integrated Player","author":"Streamotion Engineering","license":"UNLICENSED","engines":{"node":"^14.0.0","npm":"^8.0.0"},"files":["dist"],"browserslist":["safari >= 11.0.3"],"scripts":{"start":"rimraf dist && parcel serve --port 8080 src/index.html --open --target default","prepare":"rimraf dist && rimraf .parcel-cache && mkdir dist && parcel build src/index.html --public-url REPLACE_RELATIVE","prepare-js-only":"rimraf dist && rimraf .parcel-cache && mkdir dist && parcel build src/index.js --public-url REPLACE_RELATIVE","test":"npm run lint && jest","test-watch":"jest --watch","lint":"eslint --ext .js src","postinstall":"cd src/iframe-manager/magneto && npm ci && cd ../au.com.abc && npm ci && cd ../au.com.sbs && npm ci && cd ../au.com.nine && npm ci && cd ../au.com.ten && npm ci && cd ../au.com.seven && npm ci"},"alias":{"buffer":false,"crypto":false},"dependencies":{"@parcel/transformer-css":"^2.10.3","@parcel/watcher":"^2.4.1","uuid":"^9.0.0"},"devDependencies":{"@babel/core":"^7.18.10","@babel/eslint-parser":"^7.18.9","@babel/preset-env":"^7.24.5","@parcel/babel-preset-env":"^2.12.0","@parcel/transformer-sass":"^2.10.3","babel-jest":"^29.7.0","eslint":"^7.32.0","eslint-plugin-compat":"^4.2.0","eslint-plugin-filenames":"^1.3.2","eslint-plugin-import":"^2.25.2","eslint-plugin-jsdoc":"^37.0.3","eslint-plugin-node":"^11.1.0","events":"^3.3.0","jest":"^29.7.0","jest-environment-jsdom":"^29.7.0","jsdom":"^24.0.0","parcel":"^2.10.3","parcel-reporter-static-files-copy":"^1.5.3","process":"^0.11.10","rimraf":"^3.0.2","stream-browserify":"^3.0.0","string_decoder":"^1.3.0"},"staticFiles":[{"staticPath":"src/iframe-manager/au.com.seven/static","staticOutPath":"iframe-manager"},{"staticPath":"src/iframe-manager/au.com.abc/static","staticOutPath":"iframe-manager"}]}');

},{}],"aVOlA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getPartnerIdConfig", ()=>getPartnerIdConfig);
parcelHelpers.export(exports, "getGlassIntegratedPlayerScriptUrlFromVersion", ()=>getGlassIntegratedPlayerScriptUrlFromVersion);
parcelHelpers.export(exports, "getGlassIntegratedPlayerIframeManagerScriptUrlFromVersion", ()=>getGlassIntegratedPlayerIframeManagerScriptUrlFromVersion);
const getPartnerIdConfig = (partnerId)=>`https://resources.streamotion.com.au/glass/integrated-player/partner-configs/${partnerId}.json`;
const getGlassIntegratedPlayerScriptUrlFromVersion = (version)=>{
    if (version.indexOf("-qa") > -1 || version.indexOf("-pr") > -1) return `https://resources.streamotion.com.au/glass/integrated-player/builds/qa/${version}/dist/index.js`;
    else return `https://resources.streamotion.com.au/glass/integrated-player/builds/version/${version}/dist/index.js`;
};
const getGlassIntegratedPlayerIframeManagerScriptUrlFromVersion = (version)=>{
    if (version.indexOf("-qa") > -1) return `https://resources.streamotion.com.au/glass/integrated-player/builds/qa/${version}/dist/iframe-manager/index.js`;
    else return `https://resources.streamotion.com.au/glass/integrated-player/builds/version/${version}/dist/iframe-manager/index.js`;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"840Gs":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fvIy3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addProxyIp", ()=>addProxyIp);
parcelHelpers.export(exports, "getVideoPositionFromContentPosition", ()=>getVideoPositionFromContentPosition);
const PROXY_IP = window.localStorage.getItem("PROXY_IP") || "";
function addProxyIp(url, proxyIp = PROXY_IP) {
    if (proxyIp && url && !url.includes(proxyIp)) return `${proxyIp}${url}`;
    return url;
}
function getVideoPositionFromContentPosition(contentPositionMilliseconds, adBreaks) {
    let videoPositionMilliseconds = contentPositionMilliseconds;
    for (const adBreak of adBreaks){
        for (const ad of adBreak.ads)if (ad.startTime < videoPositionMilliseconds) videoPositionMilliseconds += ad.duration;
    }
    return videoPositionMilliseconds;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"auBlN":[function(require,module,exports) {
// Application Services (messaging, web sockets)
/**
 * @typedef {Object} WebSocketMessageConfigure
 * @property {string} accountId                         - User Account Id
 * @property {string} appName                           - EPG Application Name
 * @property {string} appVersion                        - EPG Application Version
 * @property {string} brand                             - Brand
 * @property {string} category                          - Category
 * @property {string} countryCode                       - Country Code
 * @property {string} estbMacAddress                    - Device Mac Address
 * @property {string} manufacturer                      - Manufacturer
 * @property {string} model                             - Model
 * @property {string} osName                            - Operating System Name
 * @property {string} osVersion                         - Operating System Version
 * @property {string} partnerId                         - Partner Id
 * @property {Object} ppConfigOverride                  - Overrides
 * @property {string} ppConfigOverride.licenseServerUrl - Licence Server for..... comcast?
 * @property {string} xboServiceAccountId               - No idea.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MSG_TYPES", ()=>MSG_TYPES);
/**
 * Handle formatting replies to ApplicationService over given WebSocket
 *
 * @param {String}    msgType              String/Name of event to send.
 * @param {Object}    msgData              Object to send back over websocket
 * @param {WebSocket} webSocket            WebSocket to ApplicationService.
 * @param {Object}    [request=undefined]  Previous request payload, to return in reply.
 */ parcelHelpers.export(exports, "sendApplicationServicesMessage", ()=>sendApplicationServicesMessage);
const MSG_TYPES = {
    PP_API_CALL: "ppApiCall",
    PP_API_RETURN: "ppApiReturn",
    PP_API_EVENT: "ppApiEvent",
    PP_API_REGISTER_ALL: "ppRegisterAll",
    CONFIGURE: "configure",
    GET_STATE: "getState",
    GET_STATE_RETURN: "getStateReturn",
    GET_VERSION: "getVersion",
    GET_VERSION_RETURN: "getVersionReturn",
    MIRROR_MSG: "mirrorMsg",
    RELOAD: "reload"
};
function sendApplicationServicesMessage(msgType, msgData, webSocket, request) {
    const messageObject = {
        msgType,
        msgData
    };
    if (request) {
        messageObject.reqId = request.reqId;
        messageObject.senderId = request.senderId;
    }
    const logFunction = msgData.eventName === "MediaFailed" ? "debug" : "log";
    console[logFunction](`WebSocket response sent to AS ${JSON.stringify(messageObject)}`); // eslint-disable-line no-console
    webSocket.send(JSON.stringify(messageObject));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"5eXaN":[function(require,module,exports) {
/* eslint-disable no-console */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>mainApplication);
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _packageJson = require("../../package.json"); // eslint-disable-line import/no-unused-modules
var _asMessaging = require("../utils/as-messaging");
var _iframe = require("../utils/iframe");
var _constants = require("../utils/constants");
var _player = require("./player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _ppHandler = require("./pp-handler");
var _ppHandlerDefault = parcelHelpers.interopDefault(_ppHandler);
var _systemTokenStorage = require("./system-token-storage");
window.isConsoleEnabled = window.localStorage.getItem("CONSOLE_ENABLED") || false;
if (!window.isConsoleEnabled) {
    console.warn('Integrated Player/JSPP console logging is partially disabled. To enable all console log: navigate to port 10000 and send command `localStorage.setItem("CONSOLE_ENABLED", "true")` then `location.reload()`');
    for (const logFunction of [
        "log",
        "info"
    ])// eslint-disable-next-line no-console, no-empty-function
    console[logFunction] = ()=>{};
}
async function mainApplication({ webSocket, glassConfigureObject = {}, partnerConfig = {} }) {
    const { partnerId, estbMacAddress } = glassConfigureObject;
    const mountEl$ = document.querySelector("#mount") || document.createElement("div");
    const iframeManager$ = document.querySelector("#streamotionGlassIframeManager");
    // Preload our iframe manager to use default no-provider (magneto/foxtel)
    (0, _iframe.changeIframeSource)(iframeManager$, `${(0, _constants.IFRAME_MANAGER_URL_PATH)}?partnerId=${partnerId}&estbMacAddress=${estbMacAddress}&provider=`);
    const player = new (0, _playerDefault.default)({
        initConfigOverrides: {}
    });
    console.log(`AAMP version ${player.version} created`);
    console.info(`${(0, _packageJson.name)} version ${(0, _packageJson.version)} running main thread`); // eslint-disable-line no-console
    console.log(`OS ${glassConfigureObject.osVersion}\nconfigure`, {
        glassConfigureObject,
        partnerConfig
    }); // eslint-disable-line no-console
    const uuid = await (0, _systemTokenStorage.setupDeviceUuid)();
    mountEl$.innerHTML = 'Press <a style="text-shadow: 2px 2px #91c742";>Home</a> and select an asset.';
    mountEl$.style.display = "block";
    webSocket.onclose = function onClose(event) {
        if (event.wasClean) console.log("WebSocket connection closed cleanly", {
            event
        }); // eslint-disable-line no-console
        else console.error("WebSocket connection died", {
            event
        });
    };
    webSocket.onerror = function onError(error) {
        console.error("WebSocketError", error);
    };
    webSocket.onmessage = function onMessage(event) {
        var _request_msgData, _request_msgData1;
        const request = JSON.parse(event.data);
        const { msgType } = request;
        const logFunction = ((_request_msgData = request.msgData) === null || _request_msgData === void 0 ? void 0 : _request_msgData.fnName) === "setAsset" || ((_request_msgData1 = request.msgData) === null || _request_msgData1 === void 0 ? void 0 : _request_msgData1.fnName) === "stop" ? "debug" : "log";
        console[logFunction](`WebSocket request received from AS to main ${JSON.stringify(request)}`); // eslint-disable-line no-console
        switch(msgType){
            case (0, _asMessaging.MSG_TYPES).GET_STATE:
                (0, _asMessaging.sendApplicationServicesMessage)("getStateReturn", {
                    state: "ready"
                }, webSocket, request);
                break;
            case (0, _asMessaging.MSG_TYPES).PP_API_REGISTER_ALL:
                player.setCallbackOnEvents((eventName, payload)=>{
                    (0, _asMessaging.sendApplicationServicesMessage)("ppApiEvent", {
                        eventName,
                        eventData: (0, _objectSpread._)({
                            type: eventName
                        }, payload)
                    }, webSocket, request);
                });
                break;
            case (0, _asMessaging.MSG_TYPES).PP_API_CALL:
                (0, _ppHandlerDefault.default)({
                    request,
                    player,
                    deviceInfo: {
                        appName: "magneto-integrated-player",
                        appVersion: (0, _packageJson.version),
                        glassConfigure: glassConfigureObject,
                        playerName: player.name,
                        playerVersion: player.version,
                        uuid
                    },
                    webSocket,
                    iframeManager$
                });
                break;
            default:
                console.warn("msgType not supported ", request);
                break;
        }
    };
}

},{"@swc/helpers/_/_object_spread":"lupAG","../../package.json":"2yJRh","../utils/as-messaging":"auBlN","../utils/iframe":"iuXJD","../utils/constants":"b0RZX","./player":"l4XuH","./pp-handler":"1Oh83","./system-token-storage":"3lArq","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"lupAG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_spread", ()=>_object_spread);
parcelHelpers.export(exports, "_", ()=>_object_spread);
var _definePropertyJs = require("./_define_property.js");
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, _definePropertyJs._define_property)(target, key, source[key]);
        });
    }
    return target;
}

},{"./_define_property.js":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9kWBJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_define_property", ()=>_define_property);
parcelHelpers.export(exports, "_", ()=>_define_property);
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"iuXJD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "changeIframeSource", ()=>changeIframeSource);
parcelHelpers.export(exports, "waitForKeyValueOnObject", ()=>waitForKeyValueOnObject);
async function changeIframeSource(iframeElement, newUrl, reuseIfUrlUnchanged = true) {
    return new Promise((resolve, reject)=>{
        // Warning: iframeElement.src is absolute, newUrl is relative
        // If the provider is the same as the current one, resolve the promise without reloading
        if (reuseIfUrlUnchanged && getProvider(iframeElement.src) === getProvider(newUrl)) {
            resolve();
            return;
        }
        // provider is changing
        // Set up event listeners for load and error events
        function onLoad() {
            removeEventListeners();
            resolve();
        }
        function onError() {
            removeEventListeners();
            reject(new Error("Error loading the updated URL"));
        }
        function removeEventListeners() {
            iframeElement.removeEventListener("load", onLoad);
            iframeElement.removeEventListener("error", onError);
        }
        // Add event listeners
        iframeElement.addEventListener("load", onLoad);
        iframeElement.addEventListener("error", onError);
        // Change the iframe source
        iframeElement.src = newUrl;
    });
}
function getProvider(path) {
    var _this;
    return (_this = new URLSearchParams(path.substring(path.indexOf("?")))) === null || _this === void 0 ? void 0 : _this.get("provider");
}
async function waitForKeyValueOnObject(objectToWatch, valueName, timeoutInSeconds = 0) {
    return new Promise((resolve, reject)=>{
        const timestampWhenStartedWaitingForProvider = Date.now();
        const waitForKeyValueCheckFunction = ()=>{
            const timeDifferenceInSeconds = (Date.now() - timestampWhenStartedWaitingForProvider) / 1000;
            if (timeoutInSeconds && timeDifferenceInSeconds > timeoutInSeconds) return reject(`waitForKeyValueOnObject ${valueName} timeout of ${timeoutInSeconds}s`);
            setTimeout(()=>{
                if (objectToWatch[valueName]) resolve();
                else waitForKeyValueCheckFunction();
            });
        };
        waitForKeyValueCheckFunction();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"b0RZX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IFRAME_MANAGER_URL_PATH", ()=>IFRAME_MANAGER_URL_PATH);
parcelHelpers.export(exports, "IFRAME_MANAGER_TIMEOUT_LOADING_PROVIDER_IN_SECONDS", ()=>IFRAME_MANAGER_TIMEOUT_LOADING_PROVIDER_IN_SECONDS);
parcelHelpers.export(exports, "PLAYBACK_STATES", ()=>PLAYBACK_STATES);
parcelHelpers.export(exports, "RECOVERABLE_HTTP_STATUS_CODES", ()=>RECOVERABLE_HTTP_STATUS_CODES);
const IFRAME_MANAGER_URL_PATH = "./iframe-manager/index.html";
const IFRAME_MANAGER_TIMEOUT_LOADING_PROVIDER_IN_SECONDS = 10;
const PLAYBACK_STATES = {
    0: "idle",
    1: "initializing",
    2: "initialized",
    3: "preparing",
    4: "prepared",
    5: "buffering",
    6: "paused",
    7: "seeking",
    8: "playing",
    9: "stopping",
    10: "stopped",
    11: "complete",
    12: "error",
    13: "released",
    14: "blocked"
};
const RECOVERABLE_HTTP_STATUS_CODES = {
    408: "Request Timeout",
    429: "Too Many Requests",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"l4XuH":[function(require,module,exports) {
/* eslint-disable no-warning-comments */ /* eslint-disable no-console */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Player);
var _classPrivateFieldGet = require("@swc/helpers/_/_class_private_field_get");
var _classPrivateFieldInit = require("@swc/helpers/_/_class_private_field_init");
var _classPrivateFieldSet = require("@swc/helpers/_/_class_private_field_set");
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _objectWithoutProperties = require("@swc/helpers/_/_object_without_properties");
var _constants = require("../../utils/constants");
var _utils = require("../../utils/utils");
var _newRelicLog = require("../../utils/new-relic-log");
var _newRelicLogDefault = parcelHelpers.interopDefault(_newRelicLog);
var _integratedPlayerError = require("../../utils/integrated-player-error");
var _integratedPlayerErrorDefault = parcelHelpers.interopDefault(_integratedPlayerError);
var _trackSelection = require("./track-selection");
function parseJson(input) {
    if (input === undefined) return undefined;
    return JSON.parse(input);
}
var _videoAdBreaks = /*#__PURE__*/ new WeakMap();
class Player {
    selectNextSource() {
        var _this_recoverySettings, _this_recoverySettings1, _this_recoverySettings2;
        if (((_this_recoverySettings = this.recoverySettings) === null || _this_recoverySettings === void 0 ? void 0 : _this_recoverySettings.minimumUninterruptedPlayback) && this.sourceFirstFramePlayedAtTimestamp) {
            const timeSinceLastRecovery = new Date() - this.sourceFirstFramePlayedAtTimestamp;
            if (timeSinceLastRecovery < this.recoverySettings.minimumUninterruptedPlayback) {
                console.log(`MIPA-192 11 stream recovered ${(timeSinceLastRecovery / 1000).toFixed(1)}s ago and has been interrupted, attempt the next stream (minimumUninterruptedPlayback=${(this.recoverySettings.minimumUninterruptedPlayback / 1000).toFixed(1)}s)`);
                this.sourceIndex++;
                this.sourceRetryCount = 0;
                this.sourceFirstFramePlayedAtTimestamp = null;
                return true;
            }
        }
        if (((_this_recoverySettings1 = this.recoverySettings) === null || _this_recoverySettings1 === void 0 ? void 0 : _this_recoverySettings1.sourceRetryCountMax) && this.sourceRetryCount < ((_this_recoverySettings2 = this.recoverySettings) === null || _this_recoverySettings2 === void 0 ? void 0 : _this_recoverySettings2.sourceRetryCountMax)) {
            console.log("MIPA-192 12 attempt the same stream (retry)");
            this.sourceRetryCount++;
        // sourceFirstFramePlayedAtTimestamp remains stashed and might be overwritten if first frame (of the current source retry) plays
        } else {
            console.log("MIPA-192 13 sourceRetryCountMax exceeded, attempt the next stream");
            this.sourceIndex++;
            this.sourceRetryCount = 0;
            this.sourceFirstFramePlayedAtTimestamp = null;
        }
        return true;
    }
    manifestUpdated() {
        try {
            const manifest = this.aampMediaPlayer.getManifest();
            if (manifest) {
                const xmlDoc = new DOMParser().parseFromString(manifest, "text/xml");
                const mpd = xmlDoc.querySelector("MPD");
                this.videoElement.isLive = mpd.attributes.getNamedItem("type").value === "dynamic";
            }
        } catch (error) {
            console.warn("manifestUpdated", error);
        }
    }
    get name() {
        return "AAMP";
    }
    get version() {
        return this.aampMediaPlayer.version;
    }
    fireVideoElementEvent(eventName, payload) {
        this.videoElement.currentTime = this.aampMediaPlayer.getCurrentPosition();
        this.videoElement.dispatchEvent(new CustomEvent(eventName, payload));
    }
    forceFatalError(payload) {
        // none of these errors result in auto-recovery
        let handled = false;
        if (payload.source === "VimondPlayerEventsAdapter") {
            var _payload_error;
            console.error("forceFatalError() Vimond Player Events error has ended this video session", payload.error);
            this.reportError({
                code: payload.error.code,
                description: `Vimond Player Events error ${payload.error.title} ${payload.error.detail}`
            });
            const minor = ((_payload_error = payload.error) === null || _payload_error === void 0 ? void 0 : _payload_error.title) === "SESSION_KICKED" ? 111 : 101;
            this.fireMediaFailed(new (0, _integratedPlayerErrorDefault.default)({
                desc: `Vimond Player Events error ${payload.error.title} ${payload.error.detail}`,
                major: 20000,
                minor
            }, {
                response: payload.response
            }));
            this.stop();
            handled = true;
        }
        if (handled === false) console.warn("forceFatalError() not handled", payload);
    }
    getContentPosition(videoPosition) {
        let contentPosition = videoPosition, durationOfPastPods = 0;
        if (this.videoAdBreaks) for (const videoAdBreak of this.videoAdBreaks){
            const [firstVideoAd] = videoAdBreak.ads;
            const [lastVideoAd] = videoAdBreak.ads.slice(-1);
            if (!firstVideoAd || !lastVideoAd) {
                console.warn("firstVideoAd or lastVideoAd are falsey", firstVideoAd, lastVideoAd);
                break;
            }
            if (videoPosition < firstVideoAd.startTime) break;
            // pod has started
            if (videoPosition <= lastVideoAd.startTime + lastVideoAd.duration) {
                // pod is current
                contentPosition = firstVideoAd.startTime - durationOfPastPods;
                break;
            } else {
                // pod is in the past
                const durationOfVideoAdBreak = lastVideoAd.startTime + lastVideoAd.duration - firstVideoAd.startTime;
                durationOfPastPods += durationOfVideoAdBreak;
                contentPosition = videoPosition - durationOfPastPods;
            }
        }
        return contentPosition;
    }
    getTimeline(replyFunction = null) {
        if (!this.reportAdsToASEnabled) return [];
        if (this.videoAdBreaks) return this.videoAdBreaks;
        if (replyFunction) // stash reply function, for when videoAdBreaks is set
        this.videoAdBreaksReplyFunction = replyFunction;
        // videoAdBreaks not yet populated
        console.warn("getTimeline() received before this.videoAdBreaks has been set");
        return null;
    }
    play() {
        this.aampMediaPlayer.setPlaybackRate(1);
        return true;
    }
    pause() {
        if (this.isTrickplayEnabled) {
            if (this.isLinearReviewBufferEnabled && this.skewedStart > 0 && 1000 * this.aampMediaPlayer.getCurrentPosition() - this.tuneStartOffsetMilliseconds <= this.skewedStart + 1000) {
                console.warn("MIPA-52 cannot pause near lower limit of linear review buffer");
                return false;
            }
            this.aampMediaPlayer.setPlaybackRate(0);
            return true;
        }
        return false;
    }
    /**
     * @callback reportErrorObject dictated by AS' playbackFailed payload
     * @param {string} code error code
     * @param {string} description error description
     */ /**
     * report error to provider and their analytics libraries
     *
     * @param {reportErrorObject} payload options
     */ reportError(payload) {
        const { code, description } = payload, rest = (0, _objectWithoutProperties._)(payload, [
            "code",
            "description"
        ]);
        // Youbora adapter requires this error object
        this.videoElement.error = {
            code,
            message: description,
            metadata: rest
        };
        this.videoElement.dispatchEvent(new CustomEvent("error", {
            detail: payload
        }));
    }
    setAampPlaybackRate(speed) {
        this.aampMediaPlayer.setPlaybackRate(speed);
    }
    setBlock(isBlocked) {
        this.aampMediaPlayer.setVideoMute(isBlocked);
        this.aampMediaPlayer.setVolume(isBlocked ? 0 : 100);
        this.videoElement.dispatchEvent(new CustomEvent("blocked", {
            detail: {
                blocked: isBlocked
            }
        }));
        return true;
    }
    setCallbackOnEvents(callbackOnEvents) {
        this.callbackOnEvents = callbackOnEvents;
    }
    fireMediaFailed(error) {
        const mediaFailedPayload = error.getMediaFailedPayload ? error.getMediaFailedPayload() : error;
        const detail = error.getDetail ? error.getDetail() : null;
        this.callbackOnEvents("MediaFailed", mediaFailedPayload);
        (0, _newRelicLogDefault.default)("MediaFailed", (0, _objectSpreadProps._)((0, _objectSpread._)({}, this.newRelicLogFields), {
            detail,
            mediaFailedPayload
        }));
    }
    setPosition(positionMilliseconds) {
        if (this.isAdPlaying) // ad is playing, cannot trickplay
        return this.trickplayResponseEnum.BlockedByAd;
        else if (!this.isTrickplayEnabled) // cannot trickplay
        return this.trickplayResponseEnum.TrickplayDisabled;
        const positionSeconds = (this.tuneStartOffsetMilliseconds + positionMilliseconds) / 1000;
        this.aampMediaPlayer.seek(positionSeconds);
        return this.trickplayResponseEnum.Success;
    }
    /**
     * @param {Array.streamObject} sources list of streams to attempt to play
     * @param {object} contentOptions from setAsset
     * @param {object} initConfig specific changes to initConfig required for this asset
     * @param {object} recoverySettings configure retry logic
     */ setSources(sources, contentOptions = {}, initConfig = {}, recoverySettings = {}) {
        this.isTrickplayEnabled = !!(initConfig === null || initConfig === void 0 ? void 0 : initConfig.enableSeekableRange);
        const aampConfiguration = (0, _objectSpread._)({}, this.aampInitConfigCommon, initConfig);
        // this.aampMediaPlayer.resetConfiguration(); // this clears everything, including audio/text preferences
        console.debug(`calling AAMP.initConfig() with ${JSON.stringify(aampConfiguration)}`);
        this.aampMediaPlayer.initConfig(aampConfiguration);
        console.debug(`AAMP.getConfiguration() returns ${this.aampMediaPlayer.getConfiguration()}`);
        this.contentOptions = contentOptions;
        this.sourceObjects = sources;
        this.sessionIndex = -1;
        this.sourceIndex = 0;
        this.sourceRetryCount = 0;
        this.recoverySettings = recoverySettings;
        this.attemptNextSource({
            description: "streams object is empty"
        });
    }
    setSpeed(speed) {
        if (speed === 1) {
            this.setAampPlaybackRate(speed);
            return this.trickplayResponseEnum.Success;
        }
        if (this.isAdPlaying) // ad is playing, cannot trickplay
        return this.trickplayResponseEnum.BlockedByAd;
        else if (!this.isTrickplayEnabled) // cannot trickplay
        return this.trickplayResponseEnum.TrickplayDisabled;
        if (speed < 0 && this.isLinearReviewBufferEnabled) {
            if (1000 * this.aampMediaPlayer.getCurrentPosition() - this.tuneStartOffsetMilliseconds <= this.skewedStart + 1000) {
                console.warn("MIPA-52 cannot rewind near lower limit of linear review buffer");
                return this.trickplayResponseEnum.TrickplayDisabled;
            }
            this.setLinearReviewBufferScheduledPause();
        }
        this.setAampPlaybackRate(speed);
        return this.trickplayResponseEnum.Success;
    }
    setLinearReviewBufferScheduledPause() {
        // set a scheduled pause at the lower limit of the live window
        const scheduledPausePositionSeconds = (this.skewedStart + this.tuneStartOffsetMilliseconds) / 1000;
        console.info("MIPA-52 scheduled pause set at ", scheduledPausePositionSeconds, " seconds");
        this.isScheduledPauseSet = true;
        this.aampMediaPlayer.pause(scheduledPausePositionSeconds);
    }
    /**
     * @callback requestHeaderObject
     * @param {string} key header name
     * @param {string} value header value
     * @param {boolean} isLicenseRequest is for license requests only
     */ /**
     * @param {string} source manifest/stream url
     * @param {object} drmConfig DRM options fed to AAMP.setDRMConfig()
     * @param {Array.requestHeaderObject} requestHeaders custom headers fed to AAMP.addCustomHTTPHeader()
     * @param {integer} resumePositionMilliseconds seek(resumePositionMilliseconds) performed before load()
     * @param {boolean} autoPlay if false, stream is buffered but does not play until play() is called
     * @param {object} tuneParams fed to AAMP.load(), see AAMP documentation
     */ // eslint-disable-next-line max-params
    setSrc(source, drmConfig = {}, requestHeaders = [], resumePositionMilliseconds = null, autoPlay = true, tuneParams = {}) {
        this.aampMediaPlayer.stop();
        this.resetVideoSession();
        this.aampMediaPlayer.setDRMConfig((0, _objectSpread._)({}, this.defaultDrmConfig, drmConfig));
        console.log("MIPA-188/FOXTEL-783 removeCustomHTTPHeader() then set new ones");
        this.aampMediaPlayer.removeCustomHTTPHeader();
        requestHeaders.forEach(({ key, value, isLicenseRequest })=>{
            this.aampMediaPlayer.addCustomHTTPHeader(key, value, isLicenseRequest);
        });
        if (typeof resumePositionMilliseconds === "number") {
            this.startPositionMilliseconds = resumePositionMilliseconds;
            this.aampMediaPlayer.seek(this.startPositionMilliseconds / 1000);
        }
        this.currentSrc = source;
        this.videoElement.currentSrc = source;
        this.aampMediaPlayer.load(source, autoPlay, tuneParams);
    }
    async setSrcFromSourceIndex(resumePositionOverride) {
        var _this_recoverySettings;
        // a.k.a playNextStream()
        this.sessionIndex++;
        const source = this.sourceObjects[this.sourceIndex]; // streamObject
        const sourceIndexMax = this.sourceObjects.length - 1;
        const sourceRetryCountMax = ((_this_recoverySettings = this.recoverySettings) === null || _this_recoverySettings === void 0 ? void 0 : _this_recoverySettings.sourceRetryCountMax) || 0;
        const isInitialAttempt = this.sourceIndex === 0 && this.sourceRetryCount === 0;
        const isFinalAttempt = this.sourceIndex === sourceIndexMax && (sourceRetryCountMax > 0 ? this.sourceRetryCount === sourceRetryCountMax : true);
        const tuneParams = {
            contentType: this.contentOptions.assetType,
            isInitialAttempt,
            isFinalAttempt,
            sessionId: `${this.sessionIndex}|${new Date().toISOString()}`
        };
        if (source) {
            const resumePositionMilliseconds = resumePositionOverride || this.contentOptions.resumePosition;
            if (typeof source.requestHeadersFunction === "function") try {
                // given DRM keys are shared between streams from the same asset
                // then /license requests are only made during video start
                source.requestHeaders = await source.requestHeadersFunction() || [];
            } catch (error) {
                console.error("could not fetch requestHeaders, attempt the stream anyway", error);
            }
            console.debug(`attempting stream ${this.sourceIndex}/${sourceIndexMax} (retry ${this.sourceRetryCount}/${sourceRetryCountMax}) sessionId=${tuneParams.sessionId} resumePosition=${resumePositionMilliseconds === null || resumePositionMilliseconds === void 0 ? void 0 : resumePositionMilliseconds.toFixed(0)}ms ${JSON.stringify(source)}`);
            this.setSrc(source.url, source.drmConfig, source.requestHeaders, resumePositionMilliseconds, source.autoPlay, tuneParams);
        } else if (this.sourceIndex > sourceIndexMax) throw "no more streams available";
        else throw `no source available at ${this.sourceIndex}`;
    }
    attemptNextSource(playbackFailedPayload, resumePositionOverride = null) {
        this.setSrcFromSourceIndex(resumePositionOverride).catch((error)=>{
            this.handlePlaybackFailed(error, playbackFailedPayload);
        });
    }
    handlePlaybackFailed(error, playbackFailedPayload) {
        console.error(error);
        this.fireMediaFailed({
            error: {
                desc: playbackFailedPayload === null || playbackFailedPayload === void 0 ? void 0 : playbackFailedPayload.description,
                major: playbackFailedPayload === null || playbackFailedPayload === void 0 ? void 0 : playbackFailedPayload.code
            }
        });
        this.videoElement.dispatchEvent(new CustomEvent("ended", playbackFailedPayload));
    }
    setIsEnabled(isEnabled) {
        this.isEnabled = isEnabled;
        if (isEnabled) this.videoElement.perceivedVideoStartBeginEpoch = new Date().getTime();
    }
    get videoAdBreaks() {
        return (0, _classPrivateFieldGet._)(this, _videoAdBreaks);
    }
    set videoAdBreaks(videoAdBreaks) {
        (0, _classPrivateFieldSet._)(this, _videoAdBreaks, videoAdBreaks);
        if (videoAdBreaks) {
            if (this.videoAdBreaksReplyFunction) {
                this.videoAdBreaksReplyFunction(videoAdBreaks);
                this.videoAdBreaksReplyFunction = null;
            }
            // MIPA-122 startPos workaround
            if (this.startPositionMilliseconds > 0) {
                const videoPositionMilliseconds = (0, _utils.getVideoPositionFromContentPosition)(this.startPositionMilliseconds, videoAdBreaks);
                if (videoPositionMilliseconds > this.startPositionMilliseconds) {
                    console.info(`adBreak/s are skewing video resumePosition of ${this.startPositionMilliseconds}ms, causing a double seek. ${videoPositionMilliseconds - this.startPositionMilliseconds}ms of ads occur before resumePosition`);
                    this.aampMediaPlayer.seek(videoPositionMilliseconds / 1000);
                }
            }
        }
    }
    setVolume(volume) {
        this.aampMediaPlayer.setVolume(volume);
        return true;
    }
    stop() {
        this.aampMediaPlayer.stop();
        this.resetAssetSession();
        return true;
    }
    /*
    reset for a new video session, which includes:
    - attempting the same manifest (i.e. retry)
    - attempting a new manifest
    Video session starts at AAMP.load()
    Video session ends at AAMP stop
    */ resetVideoSession() {
        this.hasFirstFramePlayed = false;
        this.videoElement.error = null;
        this.videoElement.playbackRate = 0;
        this.videoElement.currentTime = null;
        this.videoElement.duration = null;
        this.videoElement.videoFramerate = null;
        this.videoElement.videoBitrate = null;
        this.videoElement.videoHeight = null;
        this.videoElement.videoWidth = null;
        this.previousPlayState = null;
        this.previousSpeedChange = null;
    }
    /*
    reset for a new asset session
    Asset session starts at 'setAsset' message from AS
    Asset session ends at 'stop' message from AS
    */ resetAssetSession() {
        this.resetVideoSession();
        this.videoElement.currentOffsetTime = null;
        console.log("MIPA-188/FOXTEL-783 removeCustomHTTPHeader()");
        this.aampMediaPlayer.removeCustomHTTPHeader();
        this.isEnabled = false;
        this.setBlock(false);
        this.contentOptions = null;
        this.sourceIndex = 0;
        this.sourceRetryCount = 0;
        this.sourceObjects = null;
        this.videoAdBreaks = null;
        this.videoAdBreaksReplyFunction = null;
        this.adPositionTracking = {};
        this.isLinearReviewBufferEnabled = null;
        this.tuneStartOffsetMilliseconds = null;
        this.skewedStart = null;
    }
    /* audio track selection functions */ getAvailableAudioTracks() {
        const tracks = parseJson(this.aampMediaPlayer.getAvailableAudioTracks(true)) || [];
        return tracks.map((0, _trackSelection.audioTrackMapFunction));
    }
    getCurrentAudioTrack() {
        const trackInfo = parseJson(this.aampMediaPlayer.getAudioTrackInfo()) || [];
        const [returnVal] = trackInfo.map((0, _trackSelection.audioTrackMapFunction));
        return returnVal;
    }
    // ["deu,eng","anyrole","AUDIO-DESCRIPTIONS"]
    setPreferredAudioLanguage([languages, rendition, accessibility]) {
        console.log("setPreferredAudioLanguage() audio preferences before", parseJson(this.aampMediaPlayer.getPreferredAudioProperties()), parseJson(this.aampMediaPlayer.getAudioTrackInfo()));
        const result = this.aampMediaPlayer.setPreferredAudioLanguage(languages, rendition, accessibility ? "description" : null);
        // const audioTrackPreferenceObject = {
        //     accessibility: (accessibility) ? 'description' : null,
        //     // label:'',
        //     languages,
        //     rendition,
        // };
        // const result = this.aampMediaPlayer.setPreferredAudioLanguage(JSON.stringify(audioTrackPreferenceObject));
        console.log("setPreferredAudioLanguage() audio preferences after", parseJson(this.aampMediaPlayer.getPreferredAudioProperties()), parseJson(this.aampMediaPlayer.getAudioTrackInfo()));
        console.debug(`setPreferredAudioLanguage() AAMP.getConfiguration() returns ${this.aampMediaPlayer.getConfiguration()}`);
        return result;
    }
    /* text track selection functions */ getAvailableTextTracks() {
        const tracks = parseJson(this.aampMediaPlayer.getAvailableTextTracks(true)) || [];
        return tracks.map((0, _trackSelection.textTrackMapFunction));
    }
    getCurrentTextTrack() {
        let returnVal = null;
        if (this.isCaptionsEnabled) {
            const trackInfo = parseJson(this.aampMediaPlayer.getTextTrackInfo());
            if (trackInfo) [returnVal] = trackInfo.map((0, _trackSelection.textTrackMapFunction));
            else {
                const allTracks = parseJson(this.aampMediaPlayer.getAvailableTextTracks(true));
                if (allTracks && allTracks.length > 0) [returnVal] = allTracks.map((0, _trackSelection.textTrackMapFunction));
            }
        }
        return returnVal;
    }
    setTextTrack([language, type]) {
        const tracks = this.getAvailableTextTracks();
        console.log("setPreferredTextLanguage() text preferences before", tracks, parseJson(this.aampMediaPlayer.getPreferredTextProperties()), parseJson(this.aampMediaPlayer.getTextTrackInfo()));
        const result = this.aampMediaPlayer.setPreferredTextLanguage(JSON.stringify({
            languages: [
                language,
                "eng"
            ],
            type
        }));
        console.log("setPreferredTextLanguage() text preferences after", result, parseJson(this.aampMediaPlayer.getPreferredTextProperties()), parseJson(this.aampMediaPlayer.getTextTrackInfo()));
        console.debug(`setPreferredTextLanguage() AAMP.getConfiguration() returns ${this.aampMediaPlayer.getConfiguration()}`);
        return result;
    }
    setTextTrackEnabled(isCaptionsEnabled) {
        this.isCaptionsEnabled = isCaptionsEnabled;
        this.aampMediaPlayer.setClosedCaptionStatus(isCaptionsEnabled);
        this.videoElement.dispatchEvent(new CustomEvent("tracksChanged", {
            detail: {
                tracks: {
                    text: this.getCurrentTextTrack()
                }
            }
        }));
        return true;
    }
    constructor({ initConfigOverrides = {} } = {}){
        (0, _defineProperty._)(this, "aampMediaPlayer", null);
        (0, _defineProperty._)(this, "currentSrc", null);
        (0, _defineProperty._)(this, "isEnabled", false);
        (0, _classPrivateFieldInit._)(this, _videoAdBreaks, {
            writable: true,
            value: null
        });
        (0, _defineProperty._)(this, "isCaptionsEnabled", false);
        (0, _defineProperty._)(this, "isTrickplayEnabled", true);
        (0, _defineProperty._)(this, "reportAdsToASEnabled", true);
        (0, _defineProperty._)(this, "sourceObjects", []);
        // recovery state variables
        (0, _defineProperty._)(this, "sourceIndex", 0) // integer number, index of the stream currently being attempted
        ;
        (0, _defineProperty._)(this, "sourceRetryCount", 0) // integer number, number of attempts performed for the current sourceIndex, 0 first try, 1 first retry, 2 second retry
        ;
        (0, _defineProperty._)(this, "sourceFirstFramePlayedAtTimestamp", null) // epoch time of last successful recovery for this source, when sourceIndex changes, this value is reset
        ;
        (0, _defineProperty._)(this, "recoverySettings", {
            sourceRetryCountMax: 0,
            minimumUninterruptedPlayback: 0
        });
        (0, _defineProperty._)(this, "isScheduledPauseSet", false);
        (0, _defineProperty._)(this, "hasFirstFramePlayed", false);
        (0, _defineProperty._)(this, "previousPlayState", null);
        (0, _defineProperty._)(this, "defaultDrmConfig", {
            preferredKeysystem: "com.microsoft.playready"
        });
        (0, _defineProperty._)(this, "trickplayResponseEnum", {
            Success: 1,
            TrickplayDisabled: 0,
            BlockedByAd: -1
        });
        this.aampMediaPlayer = new window.AAMPMediaPlayer();
        this.aampMediaPlayer.setVideoZoom("none");
        this.videoElement = document.createElement("EventTarget");
        this.videoElement.addEventListener("forceFatalError", (payload)=>{
            this.forceFatalError(payload.detail);
        });
        this.videoElement.addRequestHeaders = (requestHeaders)=>{
            requestHeaders.forEach(({ key, value, isLicenseRequest })=>{
                // console.log(`videoElement addRequestHeaders() addCustomHTTPHeader(${key}, ${value}, ${isLicenseRequest})`);
                this.aampMediaPlayer.addCustomHTTPHeader(key, value, isLicenseRequest);
            });
        };
        this.videoElement.getDroppedFrames = ()=>{
            var _this_aampMediaPlayer;
            const [pq] = parseJson((_this_aampMediaPlayer = this.aampMediaPlayer) === null || _this_aampMediaPlayer === void 0 ? void 0 : _this_aampMediaPlayer.getVideoPlaybackQuality()) || [];
            return pq === null || pq === void 0 ? void 0 : pq.dropped;
        };
        // AS Event messages
        this.aampMediaPlayer.addEventListener("drmMetadata", (payload)=>{
            this.callbackOnEvents("DRMMetadata", {
                drmMetadataInfo: {
                    [payload.description]: payload.code
                }
            });
            this.videoElement.dispatchEvent(new CustomEvent("drmMetadata", {
                detail: {
                    payload
                }
            }));
        });
        this.aampMediaPlayer.addEventListener("playbackProgressUpdate", (payload)=>{
            this.videoElement.currentOffsetTime = (payload.positionMiliseconds - payload.startMiliseconds) / 1000;
            this.videoElement.currentTime = Math.round(payload.positionMiliseconds) / 1000;
            this.videoElement.duration = Math.round(payload.endMiliseconds) / 1000;
            this.videoElement.liveLatency = Math.round(payload.liveLatency) / 1000;
            this.videoElement.playbackRate = payload.currentPlayRate; // payload.playbackSpeed doesn't take liveLatencyCorrection into account, payload.currentPlayRate does
            this.videoElement.bufferedSeconds = Math.round(payload.videoBufferedMiliseconds) / 1000;
            this.videoElement.networkBandwidth = payload.networkBandwidth;
            this.videoElement.dispatchEvent(new CustomEvent("timeupdate"));
            if (window.isConsoleEnabled) {
                if (this.videoElement.epochOffsetSeconds) {
                    const positionEpochSeconds = payload.positionMiliseconds + this.videoElement.epochOffsetSeconds * 1000;
                    const liveLatencyCalculated = (new Date() - new Date(positionEpochSeconds)) / 1000;
                    const logFunction = liveLatencyCalculated > 10800 ? "warn" : "log";
                    console[logFunction](`video position is ${liveLatencyCalculated.toFixed(1)}s behind live edge, AAMP says ${(payload.liveLatency / 1000).toFixed(1)}s behind live edge, ${(payload.videoBufferedMiliseconds / 1000).toFixed(0)}s buffered`);
                } else console.log(`video position has ${(payload.endMiliseconds - payload.positionMiliseconds).toFixed(0)}s left, ${(payload.videoBufferedMiliseconds / 1000).toFixed(0)}s buffered`);
                const [pq] = parseJson(this.aampMediaPlayer.getVideoPlaybackQuality());
                if (pq && pq.dropped > 0) console.warn(`dropped frames ${this.aampMediaPlayer.getVideoPlaybackQuality()}`);
            }
            this.isLinearReviewBufferEnabled = this.contentOptions.assetType === "LINEAR" && this.isTrickplayEnabled;
            const linearReviewBufferDepth = window.localStorage.getItem("LINEAR_REVIEW_BUFFER_MS") || 3600000;
            if (this.isLinearReviewBufferEnabled && !this.tuneStartOffsetMilliseconds) {
                const linearReviewBufferHeadstart = 0; // used for local testing only
                this.tuneStartOffsetMilliseconds = payload.positionMiliseconds - linearReviewBufferHeadstart;
                console.info(`MIPA-52 Linear Review Buffer enabled, stash tuneStartOffsetMilliseconds=${this.tuneStartOffsetMilliseconds}, linearReviewBufferDepth=${linearReviewBufferDepth}`);
            }
            if (this.contentOptions.assetType === "IVOD" || this.contentOptions.assetType === "LIVOD") // MIPA-104 these are live events, but they should be reported to AS as VODs
            this.tuneStartOffsetMilliseconds = payload.startMiliseconds;
            const skewedEnd = payload.endMiliseconds - this.tuneStartOffsetMilliseconds;
            const skewedPosition = payload.positionMiliseconds - this.tuneStartOffsetMilliseconds;
            const skewedStart = this.isLinearReviewBufferEnabled ? Math.max(0, skewedEnd - linearReviewBufferDepth) : payload.startMiliseconds - this.tuneStartOffsetMilliseconds;
            this.skewedStart = skewedStart;
            if (this.isLinearReviewBufferEnabled) {
                if (skewedStart > skewedPosition) console.warn(`skewedPosition ${skewedPosition} behind skewedStart (${skewedStart}, ${skewedEnd}) by ${Math.round((skewedStart - skewedPosition) / 10) / 100} seconds`);
                else if (skewedPosition > skewedEnd) console.warn(`skewedPosition ${skewedPosition} ahead of skewedEnd (${skewedStart}, ${skewedEnd}) by ${Math.round((skewedPosition - skewedEnd) / 10) / 100} seconds`);
                if (this.tuneStartOffsetMilliseconds && payload.playbackSpeed < 0) this.setLinearReviewBufferScheduledPause();
                if (payload.playbackSpeed === 0 && skewedPosition <= skewedStart) {
                    console.warn("MIPA-52 while paused, the lower limit of the linear review buffer has been reached");
                    this.aampMediaPlayer.play();
                }
            }
            this.callbackOnEvents("MediaProgress", {
                // the spelling of `Miliseconds` is as per the device response and documentation
                position: skewedPosition,
                contentOnlyPositionMsec: this.tuneStartOffsetMilliseconds ? null : this.getContentPosition(payload.positionMiliseconds),
                startposition: skewedStart,
                endposition: skewedEnd,
                playbackSpeed: payload.playbackSpeed
            });
            if (this.reportAdsToASEnabled && this.videoAdBreaks) {
                var _currentVideoAdBreak_ads_;
                const position = payload.positionMiliseconds;
                let currentVideoAdBreak, currentVideoAd;
                for (const videoAdBreak of this.videoAdBreaks){
                    currentVideoAd = videoAdBreak.ads.find((ad)=>ad && ad.startTime <= position && position < ad.startTime + ad.duration);
                    if (currentVideoAd) {
                        currentVideoAdBreak = videoAdBreak;
                        break;
                    }
                }
                this.isAdPlaying = currentVideoAdBreak && currentVideoAd;
                if (this.adPositionTracking.previousVideoAdBreak !== currentVideoAdBreak) {
                    if (currentVideoAdBreak) // new pod/adBreak has started
                    this.callbackOnEvents("AdBreakStart", {
                        videoAdBreak: currentVideoAdBreak
                    });
                    if (this.adPositionTracking.previousVideoAdBreak) // pod/adBreak has finished
                    // eslint-disable-next-line no-return-assign
                    // this.adPositionTracking.previousVideoAdBreak.ads.map((ad) => ad.watched = true); // MIPA-88
                    this.callbackOnEvents("AdBreakComplete", {
                        videoAdBreak: this.adPositionTracking.previousVideoAdBreak
                    });
                }
                if (this.isAdPlaying) // ad is currently playing
                this.callbackOnEvents("AdProgress", {
                    position: payload.positionMiliseconds - ((_currentVideoAdBreak_ads_ = currentVideoAdBreak.ads[0]) === null || _currentVideoAdBreak_ads_ === void 0 ? void 0 : _currentVideoAdBreak_ads_.startTime),
                    progress: Math.round((payload.positionMiliseconds - currentVideoAd.startTime) / currentVideoAd.duration * 100),
                    rate: this.aampMediaPlayer.getPlaybackRate(),
                    videoAd: currentVideoAd
                });
                this.adPositionTracking = {
                    previousVideoAdBreak: currentVideoAdBreak,
                    previousVideoAd: currentVideoAd
                };
            } else this.isAdPlaying = false;
        });
        this.aampMediaPlayer.addEventListener("bitrateChanged", (payload)=>{
            this.callbackOnEvents("BitrateChanged", {
                bitRate: payload.bitRate,
                changeReason: payload.description,
                height: payload.height,
                width: payload.width
            });
            this.videoElement.videoFramerate = payload.framerate;
            this.videoElement.videoBitrate = payload.bitRate;
            this.videoElement.videoHeight = payload.height;
            this.videoElement.videoWidth = payload.width;
            this.videoElement.dispatchEvent(new CustomEvent("bitrateChanged", {
                detail: payload
            }));
        });
        this.aampMediaPlayer.addEventListener("id3Metadata", (payload)=>{
            this.videoElement.dispatchEvent(new CustomEvent("id3Metadata", {
                detail: payload
            }));
        // try {
        //     console.warn('id3Metadata event',
        //         // eslint-disable-next-line no-control-regex
        //         String.fromCharCode(...payload.data).replaceAll(/[\x00-\x1f]/g, ''),
        //         payload);
        // } catch (error) {
        //     console.warn('could not parse id3 data', error);
        // }
        });
        this.aampMediaPlayer.setSubscribedTags([
            "#EXT-X-CUE",
            "#EXT-X-CUE-OUT",
            "#EXT-X-CUE-IN"
        ]);
        this.aampMediaPlayer.addEventListener("timedMetadata", (payload)=>{
            this.videoElement.dispatchEvent(new CustomEvent("timedMetadata", {
                detail: payload
            }));
        // SCTE35 markers arrive here
        // initConfig.enableSCTE35PresentationTime: true,
        // console.warn('timedMetadata 01', payload.timedMetadata);
        // console.warn('timedMetadata 02', parseJson(payload.timedMetadata.content));
        });
        this.aampMediaPlayer.addEventListener("playbackSpeedChanged", (payload)=>{
            var _this_previousSpeedChange, _this_previousSpeedChange1;
            this.videoElement.playbackRate = payload.speed;
            if (payload.speed === 0 && this.isScheduledPauseSet) {
                this.isScheduledPauseSet = false;
                console.warn("MIPA-52 02 lower limit of linear review buffer was reached and scheduled pause was triggered");
                this.aampMediaPlayer.play();
                return; // maybe don't send "pause" to AS as pause symbol may show
            }
            if (payload.speed >= 0 && this.isScheduledPauseSet) {
                console.info("MIPA-52 scheduled pause reset");
                this.aampMediaPlayer.pause(-1);
                this.isScheduledPauseSet = false;
            }
            if (((_this_previousSpeedChange = this.previousSpeedChange) === null || _this_previousSpeedChange === void 0 ? void 0 : _this_previousSpeedChange.speed) === 1 && payload.speed !== 1) {
                console.log(`playbackSpeedChanged() paused at ${(this.aampMediaPlayer.getCurrentPosition() + this.videoElement.epochOffsetSeconds).toFixed(1)} seconds (expected Oztam toPosition)`);
                this.fireVideoElementEvent("pause");
            } else if (((_this_previousSpeedChange1 = this.previousSpeedChange) === null || _this_previousSpeedChange1 === void 0 ? void 0 : _this_previousSpeedChange1.speed) !== 1 && payload.speed === 1) {
                console.log(`playbackSpeedChanged() playing at ${(this.aampMediaPlayer.getCurrentPosition() + this.videoElement.epochOffsetSeconds).toFixed(1)} seconds  (expected Oztam fromPosition)`);
                if (Math.abs(this.previousSpeedChange.positionSeconds - this.aampMediaPlayer.getCurrentPosition()) > 1) {
                    console.log("playbackSpeedChanged() seek has occured");
                    this.fireVideoElementEvent("seeked");
                }
                this.fireVideoElementEvent("playing");
            }
            this.previousSpeedChange = (0, _objectSpreadProps._)((0, _objectSpread._)({}, payload), {
                positionSeconds: this.aampMediaPlayer.getCurrentPosition()
            });
            this.callbackOnEvents("PlaybackSpeedChanged", {
                playbackSpeed: payload.speed,
                reason: payload.reason
            });
        });
        this.aampMediaPlayer.addEventListener("speedsChanged", (payload)=>{
            this.callbackOnEvents("PlaybackSpeedsChanged", (0, _objectSpread._)({}, payload));
        });
        this.aampMediaPlayer.addEventListener("watermarkSessionUpdate", (payload)=>{
            this.callbackOnEvents("WatermarkSessionUpdate", (0, _objectSpread._)({}, payload));
        });
        this.aampMediaPlayer.addEventListener("playbackCompleted", (payload)=>{
            this.callbackOnEvents("MediaEnded", (0, _objectSpread._)({}, payload));
        });
        this.aampMediaPlayer.addEventListener("playbackStateChanged", (payload)=>{
            const playState = (0, _constants.PLAYBACK_STATES)[payload.state];
            console.log("AAMP event received", "playbackStateChanged", new Date().toISOString(), playState, payload);
            if (playState) {
                if (this.isScheduledPauseSet && playState === "paused") // when schedule pause is triggered
                // then inhibit PlayStateChanged event, we don't want to show the paused animation
                return;
                this.callbackOnEvents("PlayStateChanged", {
                    playState
                });
                if (playState === "playing") {
                    const isFirstPlaying = !this.hasFirstFramePlayed;
                    if (isFirstPlaying) {
                        // first frame is playing, video start / recovery is successful
                        this.sourceRetryCount = 0;
                        this.sourceFirstFramePlayedAtTimestamp = new Date();
                        console.log(`MIPA-192 00 sourceFirstFramePlayedAtTimestamp set to ${this.sourceFirstFramePlayedAtTimestamp.toISOString()}`);
                        this.previousSpeedChange = {
                            speed: 1,
                            positionSeconds: this.aampMediaPlayer.getCurrentPosition()
                        };
                        this.fireVideoElementEvent("playing", {
                            detail: {
                                isFirstPlaying
                            }
                        });
                    }
                    this.hasFirstFramePlayed = true;
                    this.videoElement.currentTime = this.aampMediaPlayer.getCurrentPosition();
                }
            }
            if (playState === "initializing") this.fireVideoElementEvent("play", {
                detail: {
                    stream: this.sourceObjects[this.sourceIndex],
                    recovery: {
                        settings: this.recoverySettings,
                        state: {
                            sourceIndex: this.sourceIndex,
                            sourceIndexMax: this.sourceObjects.length - 1,
                            sourceRetryCount: this.sourceRetryCount
                        }
                    }
                }
            });
            else if (playState === "initialized") {
                this.manifestUpdated();
                this.fireVideoElementEvent("loadedmetadata");
                console.log("initialized", "manifest parsed", {
                    getAvailableVideoTracks: parseJson(this.aampMediaPlayer.getAvailableVideoTracks()),
                    getAvailableAudioTracks: parseJson(this.aampMediaPlayer.getAvailableAudioTracks(true)),
                    getAvailableTextTracks: parseJson(this.aampMediaPlayer.getAvailableTextTracks(true)),
                    getAvailableThumbnailTracks: parseJson(this.aampMediaPlayer.getAvailableThumbnailTracks())
                }, "tracks selected", {
                    getAudioTrackInfo: parseJson(this.aampMediaPlayer.getAudioTrackInfo()),
                    getTextTrackInfo: parseJson(this.aampMediaPlayer.getTextTrackInfo())
                });
                this.videoElement.dispatchEvent(new CustomEvent("tracksChanged", {
                    detail: {
                        tracks: {
                            audio: parseJson(this.aampMediaPlayer.getAudioTrackInfo())
                        }
                    }
                }));
            } else if (playState === "preparing" || playState === "buffering") this.videoElement.dispatchEvent(new CustomEvent("waiting"));
            else if (playState === "prepared") this.videoElement.duration = this.aampMediaPlayer.getDurationSec();
            else if (playState === "buffering") this.fireVideoElementEvent("waiting");
            else if (playState === "seeking") this.fireVideoElementEvent("seeking");
            else if (playState === "idle") // if current state is idle and previous state was 'complete`, then ignore, do not send ended
            {
                if (this.previousPlayState !== "complete") this.videoElement.dispatchEvent(new CustomEvent("ended", payload));
            } else if (playState === "complete") this.videoElement.dispatchEvent(new CustomEvent("ended", payload));
            this.previousPlayState = playState;
        });
        this.aampMediaPlayer.addEventListener("seeked", (payload)=>{
            this.fireVideoElementEvent("seeked", {
                detail: payload
            });
        });
        this.aampMediaPlayer.addEventListener("mediaMetadata", (payload)=>{
            this.videoElement.hasBeenLive = payload.isLive;
            this.videoElement.epochOffsetSeconds = payload.programStartTime;
            this.callbackOnEvents("MediaOpened", {
                mediaType: payload.isLive ? "live" : "vod",
                availableAudioLanguages: payload.languages,
                playbackSpeeds: payload.playbackSpeeds,
                // openingLatency: -1, // not required
                width: payload.width,
                height: payload.height,
                hasDrm: payload.hasDrm
            });
        });
        this.aampMediaPlayer.addEventListener("playbackFailed", (payload)=>{
            if (payload.responseData === "undefined") delete payload.responseData;
            if (payload.responseData) try {
                // attempt to parse responseData, the response payload from /license
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(payload.responseData, "text/xml");
                [
                    "faultstring",
                    "faultactor",
                    "StatusCode",
                    "CustomData"
                ].forEach((tagName)=>{
                    var _xmlDoc_getElementsByTagName__childNodes_, _xmlDoc_getElementsByTagName_;
                    payload[`responseData.${tagName}`] = (_xmlDoc_getElementsByTagName_ = xmlDoc.getElementsByTagName(tagName)[0]) === null || _xmlDoc_getElementsByTagName_ === void 0 ? void 0 : (_xmlDoc_getElementsByTagName__childNodes_ = _xmlDoc_getElementsByTagName_.childNodes[0]) === null || _xmlDoc_getElementsByTagName__childNodes_ === void 0 ? void 0 : _xmlDoc_getElementsByTagName__childNodes_.nodeValue;
                });
            } catch (e) {
                console.warn(`couldn't parse responseData ${payload.responseData}`, e);
            }
            this.reportError(payload);
            console.error("AAMP event received", "playbackFailed", this.hasFirstFramePlayed ? "mid-stream video playback failure" : "video start failure", payload);
            // attempt auto-recovery by trying current stream or the next stream
            try {
                var _this_sourceFirstFramePlayedAtTimestamp;
                /* save current content position
                - [x] Binge VOD
                - [x] Binge trailer, non-DRM
                - [x] Binge VOD with inserted ads (SSAI=true)
                - [x] Binge VOD with inserted ads (SSAI=true) and error occurs during adBreak, do we restart the adBreak? Yes.
                - [x] LINEAR (SSAI=false) on live edge
                - [x] LINEAR (SSAI=false) a few minutes behind live
                - [x] LINEAR with replaced ads (SSAI=true) and error occurs during adBreak on live edge
                - [ ] LINEAR with replaced ads (SSAI=true) and error occurs during adBreak a few minutes behind live
                - [x] LIVOD still live
                - [x] LIVOD finished
                - [x] IVOD still live
                - [x] IVOD finished
                */ const resumePositionOverride = this.getContentPosition(this.videoElement.currentOffsetTime * 1000);
                this.selectNextSource();
                console.log(`MIPA-192 01 sourceIndex=${this.sourceIndex} sourceRetryCount=${this.sourceRetryCount} sourceFirstFramePlayedAtTimestamp=${(_this_sourceFirstFramePlayedAtTimestamp = this.sourceFirstFramePlayedAtTimestamp) === null || _this_sourceFirstFramePlayedAtTimestamp === void 0 ? void 0 : _this_sourceFirstFramePlayedAtTimestamp.toISOString()} resumePositionOverride=${resumePositionOverride}`);
                this.attemptNextSource(payload, resumePositionOverride);
            } catch (error) {
                this.handlePlaybackFailed(error, payload);
            }
        });
        this.aampMediaPlayer.addEventListener("enteringLive", (payload)=>{
            this.callbackOnEvents("AampEnteringLive", (0, _objectSpread._)({}, payload));
        });
        this.aampMediaPlayer.addEventListener("contentGap", (payload)=>{
            this.callbackOnEvents("ContentGap", {
                startTimeMsec: payload.time,
                durationMsec: payload.duration
            });
        });
        this.aampMediaPlayer.addEventListener("bufferingChanged", (payload)=>{
            const msgName = payload.buffering ? "BufferComplete" : "BufferStart";
            this.callbackOnEvents(msgName, (0, _objectSpread._)({}, payload));
            if (payload.buffering) // resuming after a buffer underrun
            this.fireVideoElementEvent("playing");
            else // paused due to buffer underrun
            this.fireVideoElementEvent("waiting");
        });
        // end AS Event messages
        this.aampInitConfigCommon = (0, _objectSpread._)({
            earlyProcessing: true,
            enableCMCD: true,
            enableLiveLatencyCorrection: false,
            minLatencyCorrectionPlaybackRate: 0.97,
            maxLatencyCorrectionPlaybackRate: 1.03,
            enableSeekableRange: false,
            limitResolution: true,
            nativeCCRendering: false,
            persistBitrateOverSeek: true,
            persistHighNetworkBandwidth: true,
            progressReportingInterval: 0.5,
            propagateUriParameters: false,
            reportVideoPTS: true,
            useAbsoluteTimeline: true,
            userAgent: navigator.userAgent,
            seekMidFragment: true,
            // fragmentRetryLimit: 2, // appears to have no impact
            // initFragmentRetryCount: 2, // appears to have no impact, might have an impact on video start only???
            // DRM fields
            configRuntimeDRM: false,
            dashMaxDrmSessions: 10,
            playreadyOutputProtection: true,
            sendLicenseResponseHeaders: true,
            setLicenseCaching: true,
            sendUserAgentInLicense: true
        }, initConfigOverrides);
        const PROXY_IP = window.localStorage.getItem("PROXY_AAMP_DISABLED") ? "" : window.localStorage.getItem("PROXY_IP") || "";
        if (PROXY_IP) Object.assign(this.aampInitConfigCommon, {
            sslVerifyPeer: false,
            networkProxy: PROXY_IP,
            licenseProxy: PROXY_IP
        });
        // this.aampMediaPlayer.setTextStyleOptions(JSON.stringify({
        //     // default white black red green blue yellow magenta cyan
        //     textEdgeColor:         'red',
        //     textForegroundColor:   'green',
        //     textBackgroundColor:   'blue',
        //     windowBorderEdgeColor: 'magenta',
        //     windowFillColor:       'cyan',
        //     // auto none raised depressed uniform drop_shadow_left drop_shadow_right
        //     textEdgeStyle:         'raised',
        //     windowBorderEdgeStyle: 'uniform',
        //     // auto solid flash translucent transparent
        //     textForegroundOpacity: 'solid',
        //     textBackgroundOpacity: 'flash',
        //     windowFillOpacity:     'translucent',
        //     // auto small standard medium large extra_large
        //     penSize:               'small',
        //     // auto default monospaced_serif proportional_serif monospaced_sanserif proportional_sanserif casual cursive smallcaps
        //     fontStyle:             'cursive',
        //     // auto false true
        //     penItalicized:         'true',
        //     penUnderline:          'true',
        // }));
        const eventNames = {
            adResolved: {
                level: "log"
            },
            anomalyReport: {
                level: "",
                text: false
            },
            audioTracksChanged: {
                level: "log"
            },
            bitrateChanged: {
                level: "log",
                text: false
            },
            blocked: {
                level: "log"
            },
            bufferingChanged: {
                level: "log"
            },
            bulkTimedMetadata: {
                level: "log"
            },
            contentGap: {
                level: "log"
            },
            contentProtectionDataUpdate: {
                level: "log"
            },
            decoderAvailable: {
                level: "log"
            },
            drmMessage: {
                level: "log"
            },
            drmMetadata: {
                level: "log"
            },
            enteringLive: {
                level: "log"
            },
            httpResponseHeader: {
                level: "log"
            },
            id3Metadata: {
                level: "log"
            },
            // manifestRefresh: {level: ''},
            mediaMetadata: {
                level: "log"
            },
            metricsData: {
                level: "log"
            },
            needManifest: {
                level: "log"
            },
            placementStart: {
                level: "log"
            },
            placementEnd: {
                level: "log"
            },
            placementError: {
                level: "log"
            },
            placementProgress: {
                level: "log"
            },
            playbackCompleted: {
                level: "log"
            },
            playbackFailed: {
                level: ""
            },
            playbackProgressUpdate: {
                level: "log",
                text: true
            },
            playbackSpeedChanged: {
                level: "log"
            },
            playbackStarted: {
                level: "log"
            },
            playbackStateChanged: {
                level: "",
                text: true
            },
            playlistIndexed: {
                level: "log"
            },
            reservationEnd: {
                level: "log"
            },
            reservationStart: {
                level: "log"
            },
            seeked: {
                level: "log"
            },
            speedsChanged: {
                level: "log"
            },
            textTracksChanged: {
                level: "log"
            },
            timedMetadata: {
                level: "log"
            },
            tuneProfiling: {
                level: "log"
            },
            tuneMetricsData: {
                level: ""
            },
            // vttCueDataListener: {}, // intentionally removed MIPA-110
            watermarkSessionUpdate: {
                level: "log"
            }
        };
        for(const eventName in eventNames)this.aampMediaPlayer.addEventListener(eventName, (payload)=>{
            if (eventNames[eventName].level) console[eventNames[eventName].level]("AAMP event received", eventName, payload);
        });
        this.aampMediaPlayer.addEventListener("anomalyReport", (payload)=>{
            let level;
            switch(payload.severity){
                case 0:
                    level = "error";
                    break;
                case 1:
                    level = "warn";
                    break;
                case 2:
                    level = "info";
                    break;
                default:
                    level = "log";
                    break;
            }
            console[level]("AAMP event received", "anomalyReport", payload);
            this.videoElement.dispatchEvent(new CustomEvent("anomalyReport", {
                detail: {
                    anomalyReport: payload
                }
            }));
        });
        this.aampMediaPlayer.addEventListener("manifestRefresh", (payload)=>{
            console.log("AAMP event received", "manifestRefresh", payload);
            this.manifestUpdated();
        });
        this.aampMediaPlayer.addEventListener("tuneMetricsData", (payload)=>{
            const tuneMetricsData = parseJson(payload.tuneMetricsData);
            console.log("AAMP event received", "tuneMetricsData", tuneMetricsData);
            this.videoElement.dispatchEvent(new CustomEvent("tuneMetricsData", {
                detail: {
                    tuneMetricsData
                }
            }));
        });
    }
}

},{"@swc/helpers/_/_class_private_field_get":"1IlWr","@swc/helpers/_/_class_private_field_init":"ep5qS","@swc/helpers/_/_class_private_field_set":"wXvan","@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","@swc/helpers/_/_object_without_properties":"3Xacv","../../utils/constants":"b0RZX","../../utils/utils":"fvIy3","../../utils/new-relic-log":"1mCWG","../../utils/integrated-player-error":"5jMEP","./track-selection":"93m8f","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"1IlWr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_class_private_field_get", ()=>_class_private_field_get);
parcelHelpers.export(exports, "_", ()=>_class_private_field_get);
var _classApplyDescriptorGetJs = require("./_class_apply_descriptor_get.js");
var _classExtractFieldDescriptorJs = require("./_class_extract_field_descriptor.js");
function _class_private_field_get(receiver, privateMap) {
    var descriptor = (0, _classExtractFieldDescriptorJs._class_extract_field_descriptor)(receiver, privateMap, "get");
    return (0, _classApplyDescriptorGetJs._class_apply_descriptor_get)(receiver, descriptor);
}

},{"./_class_apply_descriptor_get.js":"a3a5M","./_class_extract_field_descriptor.js":"kd9VU","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"a3a5M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_class_apply_descriptor_get", ()=>_class_apply_descriptor_get);
parcelHelpers.export(exports, "_", ()=>_class_apply_descriptor_get);
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);
    return descriptor.value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"kd9VU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_class_extract_field_descriptor", ()=>_class_extract_field_descriptor);
parcelHelpers.export(exports, "_", ()=>_class_extract_field_descriptor);
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"ep5qS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_class_private_field_init", ()=>_class_private_field_init);
parcelHelpers.export(exports, "_", ()=>_class_private_field_init);
var _checkPrivateRedeclarationJs = require("./_check_private_redeclaration.js");
function _class_private_field_init(obj, privateMap, value) {
    (0, _checkPrivateRedeclarationJs._check_private_redeclaration)(obj, privateMap);
    privateMap.set(obj, value);
}

},{"./_check_private_redeclaration.js":"jc4wT","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"jc4wT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_check_private_redeclaration", ()=>_check_private_redeclaration);
parcelHelpers.export(exports, "_", ()=>_check_private_redeclaration);
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"wXvan":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_class_private_field_set", ()=>_class_private_field_set);
parcelHelpers.export(exports, "_", ()=>_class_private_field_set);
var _classApplyDescriptorSetJs = require("./_class_apply_descriptor_set.js");
var _classExtractFieldDescriptorJs = require("./_class_extract_field_descriptor.js");
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = (0, _classExtractFieldDescriptorJs._class_extract_field_descriptor)(receiver, privateMap, "set");
    (0, _classApplyDescriptorSetJs._class_apply_descriptor_set)(receiver, descriptor, value);
    return value;
}

},{"./_class_apply_descriptor_set.js":"6hL8c","./_class_extract_field_descriptor.js":"kd9VU","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"6hL8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_class_apply_descriptor_set", ()=>_class_apply_descriptor_set);
parcelHelpers.export(exports, "_", ()=>_class_apply_descriptor_set);
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
        descriptor.value = value;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8Y68S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_spread_props", ()=>_object_spread_props);
parcelHelpers.export(exports, "_", ()=>_object_spread_props);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"3Xacv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_without_properties", ()=>_object_without_properties);
parcelHelpers.export(exports, "_", ()=>_object_without_properties);
var _objectWithoutPropertiesLooseJs = require("./_object_without_properties_loose.js");
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = (0, _objectWithoutPropertiesLooseJs._object_without_properties_loose)(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}

},{"./_object_without_properties_loose.js":"8bwu7","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8bwu7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_object_without_properties_loose", ()=>_object_without_properties_loose);
parcelHelpers.export(exports, "_", ()=>_object_without_properties_loose);
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"1mCWG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>sendNewRelicLog);
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _utils = require("./utils");
async function sendNewRelicLog(message, attributes) {
    const requestBody = (0, _objectSpread._)({
        hostname: "jspp.resources.streamotion.com.au",
        logtype: "jspp",
        message,
        timestamp: new Date().toISOString()
    }, attributes);
    fetch((0, _utils.addProxyIp)("https://log-api.newrelic.com/log/v1"), {
        method: "POST",
        headers: {
            "Api-Key": "f476a78d10f213e60031a460a952d58dFFFFNRAL",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    }).catch((error)=>{
        console.error("New Relic log failed to send", error);
    });
}

},{"@swc/helpers/_/_object_spread":"lupAG","./utils":"fvIy3","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"5jMEP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>IntegratedPlayerError);
class IntegratedPlayerError extends Error {
    getDetail() {
        return this.detail;
    }
    getMediaFailedPayload() {
        return {
            error: {
                major: this.major,
                minor: this.minor,
                desc: this.description
            }
        };
    }
    constructor(integratedPlayerErrorPayload, detail){
        super(integratedPlayerErrorPayload.desc);
        this.major = integratedPlayerErrorPayload.major;
        this.minor = integratedPlayerErrorPayload.minor;
        this.description = integratedPlayerErrorPayload.desc;
        this.detail = detail;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"93m8f":[function(require,module,exports) {
// inputs include AAMP.getAvailableAudioTracks and AAMP.getAudioTrackInfo
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audioTrackMapFunction", ()=>audioTrackMapFunction);
parcelHelpers.export(exports, "textTrackMapFunction", ()=>textTrackMapFunction);
const englishLanguageStrings = [
    "en",
    "eng",
    "und"
];
const audioTrackMapFunction = ({ accessibility, codec, language, name, rendition })=>({
        codec,
        description: name,
        language: englishLanguageStrings.includes(language) ? "eng" : language,
        role: rendition,
        accessibilityType: accessibility ? "description" : null
    });
const textTrackMapFunction = ({ codec, language, name, rendition, type })=>({
        codec,
        description: name,
        language: englishLanguageStrings.includes(language) ? "eng" : language,
        role: rendition,
        type
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"1Oh83":[function(require,module,exports) {
/* eslint-disable no-console */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ppApiHandler);
parcelHelpers.export(exports, "getPpApiReturnReplyFunction", ()=>getPpApiReturnReplyFunction);
var _asMessaging = require("../utils/as-messaging");
var _integratedPlayerError = require("../utils/integrated-player-error");
var _integratedPlayerErrorDefault = parcelHelpers.interopDefault(_integratedPlayerError);
var _getAsset = require("./get-asset");
var _getAssetDefault = parcelHelpers.interopDefault(_getAsset);
async function ppApiHandler({ player, request, deviceInfo, webSocket, iframeManager$ }) {
    const { msgData } = request;
    const ppFunctionName = msgData.fnName;
    const ppApiReturnReplyFunction = getPpApiReturnReplyFunction(webSocket, ppFunctionName, request);
    let result = false;
    switch(ppFunctionName){
        case "getAvailableAudioTracks":
            ppApiReturnReplyFunction(player.getAvailableAudioTracks());
            break;
        case "getAvailableTextTracks":
            ppApiReturnReplyFunction(player.getAvailableTextTracks());
            break;
        case "getCurrentAudioTrack":
            ppApiReturnReplyFunction(player.getCurrentAudioTrack());
            break;
        case "getCurrentTextTrack":
            ppApiReturnReplyFunction(player.getCurrentTextTrack());
            break;
        case "getTimeline":
            // eslint-disable-next-line no-case-declarations
            const timeline = player.getTimeline(ppApiReturnReplyFunction);
            if (timeline) ppApiReturnReplyFunction(timeline);
            break;
        case "pause":
            if (player.pause()) ppApiReturnReplyFunction(true);
            else ppApiReturnReplyFunction(-301);
            break;
        case "setAsset":
            player.setIsEnabled(true);
            document.querySelector("#mount").style.display = "none";
            ppApiReturnReplyFunction(true); // AS messaging quirk, if this line is performed after setSources AS doesn't send the pause message
            if (window.mediaFailedTimeout) clearTimeout(window.mediaFailedTimeout);
            try {
                var _iframeManager$_contentWindow_provider;
                (_iframeManager$_contentWindow_provider = iframeManager$.contentWindow.provider) === null || _iframeManager$_contentWindow_provider === void 0 ? void 0 : _iframeManager$_contentWindow_provider.monitoringTeardown();
                if (!msgData.fnArgs[0].match(/^https?:\/\/magneto\.com\//gm)) throw `invalid locator ${msgData.fnArgs[0]}`;
                const [locator, contentOptions] = msgData.fnArgs;
                player.newRelicLogFields = {
                    deviceInfo,
                    provider: new URL(locator).searchParams.get("provider") || "magneto",
                    setAsset: {
                        locator,
                        contentOptions
                    }
                };
                const providerAsset = await (0, _getAssetDefault.default)({
                    msgData,
                    deviceInfo,
                    iframeManager$
                });
                if (!player.isEnabled) {
                    console.log("stop received, ignore this request MIPA-182");
                    return;
                }
                iframeManager$.contentWindow.provider.setVideoAdBreaksCallback = (videoAdBreaks, error = null)=>{
                    if (error) {
                        player.fireMediaFailed(new (0, _integratedPlayerErrorDefault.default)({
                            major: 20000,
                            minor: 103,
                            desc: "adTrackingUrl failed to return"
                        }, {
                            response: error
                        }));
                        player.reportError({
                            code: "20000|103",
                            description: `adTrackingUrl failed to return: ${error}`
                        });
                        return;
                    }
                    // eslint-disable-next-line no-console
                    console.info(`setVideoAdBreaksCallback() ${JSON.stringify(videoAdBreaks)}`);
                    player.videoAdBreaks = videoAdBreaks;
                    // stream can now start playback (or buffer then start)
                    player.play();
                };
                iframeManager$.contentWindow.provider.monitoringSetup(player.videoElement);
                player.setSources(providerAsset.streams, msgData.fnArgs[1], providerAsset === null || providerAsset === void 0 ? void 0 : providerAsset.aampInitConfigOverrides, providerAsset.recoverySettings);
            } catch (e) {
                var _msgData_fnArgs_, _error_getMediaFailedPayload_error, _error_getMediaFailedPayload;
                let error = e;
                if (!e.getMediaFailedPayload) {
                    console.error("uncaught error", e);
                    error = new (0, _integratedPlayerErrorDefault.default)({
                        major: 20000,
                        minor: 100,
                        desc: `uncaught error: ${e}`
                    }, {
                        response: e,
                        responseString: `${e}`
                    });
                }
                // report error to AS
                if ((msgData === null || msgData === void 0 ? void 0 : (_msgData_fnArgs_ = msgData.fnArgs[1]) === null || _msgData_fnArgs_ === void 0 ? void 0 : _msgData_fnArgs_.assetType) === "LINEAR" && ((_error_getMediaFailedPayload = error.getMediaFailedPayload()) === null || _error_getMediaFailedPayload === void 0 ? void 0 : (_error_getMediaFailedPayload_error = _error_getMediaFailedPayload.error) === null || _error_getMediaFailedPayload_error === void 0 ? void 0 : _error_getMediaFailedPayload_error.major) === 20000) {
                    console.log("MIPA-165 delaying error", error);
                    // eslint-disable-next-line require-atomic-updates
                    window.mediaFailedTimeout = setTimeout(()=>{
                        console.log("MIPA-165 firing delayed error", error);
                        player.fireMediaFailed(error);
                    }, 2000);
                } else player.fireMediaFailed(error);
            }
            break;
        case "setBlock":
            ppApiReturnReplyFunction(player.setBlock(msgData.fnArgs[0]));
            break;
        case "setDimensionsOfVideo":
            ppApiReturnReplyFunction(true);
            break;
        case "setPosition":
            result = player.setPosition(msgData.fnArgs[0]);
            if (result === player.trickplayResponseEnum.Success) ppApiReturnReplyFunction(true);
            else if (result === player.trickplayResponseEnum.BlockedByAd) player.callbackOnEvents("MediaWarning", {
                error: {
                    major: 70,
                    minor: null,
                    description: "seek not allowed by current segment",
                    isWarning: true
                }
            });
            else if (result === player.trickplayResponseEnum.TrickplayDisabled) ppApiReturnReplyFunction(-302);
            else console.warn("unexpected response to setSpeed");
            break;
        case "setPreferredAudioLanguage":
            ppApiReturnReplyFunction(player.setPreferredAudioLanguage(msgData.fnArgs));
            break;
        case "setSpeed":
            result = player.setSpeed(msgData.fnArgs[0]);
            if (result === player.trickplayResponseEnum.Success) ppApiReturnReplyFunction(true);
            else if (result === player.trickplayResponseEnum.BlockedByAd) player.callbackOnEvents("MediaWarning", {
                error: {
                    major: 70,
                    minor: null,
                    description: "speed change not allowed by current segment",
                    isWarning: true
                }
            });
            else if (result === player.trickplayResponseEnum.TrickplayDisabled) ppApiReturnReplyFunction(-301);
            else console.warn("unexpected response to setSpeed");
            break;
        case "setTextTrack":
            ppApiReturnReplyFunction(player.setTextTrack(msgData.fnArgs));
            break;
        case "setTextTrackEnabled":
            ppApiReturnReplyFunction(player.setTextTrackEnabled(msgData.fnArgs[0]));
            break;
        case "setVolume":
            ppApiReturnReplyFunction(player.setVolume(msgData.fnArgs[0] * 100));
            break;
        case "stop":
            var _iframeManager$_contentWindow_provider1;
            ppApiReturnReplyFunction(player.stop());
            (_iframeManager$_contentWindow_provider1 = iframeManager$.contentWindow.provider) === null || _iframeManager$_contentWindow_provider1 === void 0 ? void 0 : _iframeManager$_contentWindow_provider1.monitoringTeardown();
            break;
        case "updateSessionActivity":
            break;
        default:
            console.warn(`ppApiHandler ppFunctionName ${ppFunctionName} not supported, msgData=${JSON.stringify(msgData)}`);
    }
}
function getPpApiReturnReplyFunction(webSocket, fnName, request) {
    return function ppApiReturnReplyFunction(returnVal) {
        if (typeof returnVal == "boolean") // eslint-disable-next-line no-param-reassign
        returnVal = returnVal === true ? 0 : -1;
        const payload = {
            returnVal
        };
        (0, _asMessaging.sendApplicationServicesMessage)("ppApiReturn", payload, webSocket, request);
    };
}

},{"../utils/as-messaging":"auBlN","../utils/integrated-player-error":"5jMEP","./get-asset":"1TzfN","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"1TzfN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getProviderAsset);
var _constants = require("../utils/constants");
var _iframe = require("../utils/iframe");
var _systemTokenStorage = require("./system-token-storage");
async function getProviderAsset({ msgData, deviceInfo, iframeManager$ }) {
    const { partnerId, estbMacAddress } = deviceInfo.glassConfigure;
    const [locatorString, glassContentOptions] = msgData.fnArgs;
    const { authToken: glassAuthToken } = glassContentOptions;
    delete glassContentOptions.authToken; // every provider gets contentOptions, only permitted providers get authToken/XSCT
    const locator = new URL(locatorString);
    const provider = locator.searchParams.get("provider");
    return (0, _iframe.changeIframeSource)(iframeManager$, `${(0, _constants.IFRAME_MANAGER_URL_PATH)}?partnerId=${partnerId}&estbMacAddress=${estbMacAddress}&provider=${provider || ""}`).then(()=>(0, _iframe.waitForKeyValueOnObject)(iframeManager$.contentWindow, "provider", (0, _constants.IFRAME_MANAGER_TIMEOUT_LOADING_PROVIDER_IN_SECONDS))).then(()=>(0, _systemTokenStorage.getTokenForProvider)(provider, glassAuthToken)).then((authToken)=>iframeManager$.contentWindow.provider.getAsset({
            authToken,
            glassAssetLocator: locator,
            glassContentOptions,
            deviceInfo
        })).catch((error)=>{
        error.provider = provider;
        throw error;
    });
} /**
 * provider.getAsset() request
 *
 * @typedef {object} GetAssetRequest
 * @property {string} authToken auth token for provider
 * @property {string} glassAssetLocator locator uri for the requested asset
 * @property {object} glassContentOptions additional fields for the requested asset
 * @property {deviceInfo} deviceInfo device information
 *
 * @typedef {object} deviceInfo
 * @property {string} appName name of the Integrated Player
 * @property {string} appVersion version of the Integrated Player
 * @property {WebSocketMessageConfigure} glassConfigure configure object from Sky AS
 * @property {string} playerName name of AAMP
 * @property {string} playerVersion version of AAMP (will be tied to OS version, available in glassConfigure)
 * @property {string} uuid device UUID for use with Oztam, etc (currently created by Integrated Player)
 *
 * @typedef {import('../utils/as-messaging').WebSocketMessageConfigure} WebSocketMessageConfigure
 */  /**
 * provider.getAsset() response
 *
 * @typedef {Object} GetAssetResponse
 * @property {object} aampInitConfigOverrides see AAMP config https://code.rdkcentral.com/r/plugins/gitiles/rdk/components/generic/aamp/+/refs/heads/stable2/AAMP-UVE-API.md#configuration
 * @property {streamObject[]} streams list of streams to attempt to play
 *
 * @typedef {Object} streamObject
 * @property {string} url manifest/stream url
 * @property {object} drmConfig see AAMP.setDrmConfig() https://code.rdkcentral.com/r/plugins/gitiles/rdk/components/generic/aamp/+/refs/heads/stable2/AAMP-UVE-API.md#setdrmconfig_config
 * @property {requestHeaderObject[]} requestHeaders see AAMP.addCustomHTTPHeader() https://code.rdkcentral.com/r/plugins/gitiles/rdk/components/generic/aamp/+/refs/heads/stable2/AAMP-UVE-API.md#addcustomhttpheader_headername_headervalue_islicenserequest
 * @property {function} requestHeadersFunction called when attempting or re-attempting a source. Supersedes `requestHeaders` field.
 *
 * @typedef requestHeaderObject
 * @property {string} key header name
 * @property {string} value header value
 * @property {boolean} isLicenseRequest is for license requests only
 */ 

},{"../utils/constants":"b0RZX","../utils/iframe":"iuXJD","./system-token-storage":"3lArq","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"3lArq":[function(require,module,exports) {
/* eslint-disable no-bitwise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Providers", ()=>Providers);
parcelHelpers.export(exports, "getTokenForProvider", ()=>getTokenForProvider);
parcelHelpers.export(exports, "setupDeviceUuid", ()=>setupDeviceUuid);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _uuid = require("uuid");
var _integratedPlayerError = require("../utils/integrated-player-error");
var _integratedPlayerErrorDefault = parcelHelpers.interopDefault(_integratedPlayerError);
class Providers {
}
(0, _defineProperty._)(Providers, "ABC", "au.com.abc");
(0, _defineProperty._)(Providers, "SBS", "au.com.sbs");
(0, _defineProperty._)(Providers, "NINE", "au.com.nine");
(0, _defineProperty._)(Providers, "SEVEN", "au.com.seven");
(0, _defineProperty._)(Providers, "TEN", "au.com.ten");
(0, _defineProperty._)(Providers, "UUID", "au.com.device.uuid");
async function getTokenForProvider(provider, glassAuthToken = null) {
    // first party provider gets glassAuthToken (XSCT)
    if (provider === null) return glassAuthToken;
    // third party provider fetches  from token storage
    return fetch(`http://localhost:9005/as/system/token/${provider}`).then((response)=>{
        if (response.ok && response.status === 200) return response.json();
        else throw new (0, _integratedPlayerErrorDefault.default)({
            major: 20000,
            minor: 110,
            desc: "no valid 3rd party authorization token"
        });
    }).then((body)=>{
        if (body.token) return body.token;
        else throw new (0, _integratedPlayerErrorDefault.default)({
            major: 20000,
            minor: 110,
            desc: "no valid 3rd party authorization token"
        });
    });
}
async function setTokenForProvider(provider, token) {
    return fetch(`http://localhost:9005/as/system/token/${provider}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token
        })
    }).then((response)=>{
        if (response.ok && response.status === 200) return token;
        else throw new (0, _integratedPlayerErrorDefault.default)({
            desc: "3rd party token could not be set"
        });
    });
}
async function setupDeviceUuid() {
    try {
        return await getTokenForProvider(Providers.UUID);
    } catch (e) {
        const token = await setTokenForProvider(Providers.UUID, (0, _uuid.v4)()).catch((error)=>{
            console.error("could not set Device UUID", error);
        });
        // eslint-disable-next-line no-console
        console.info("Device UUID created", token);
        return token;
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","uuid":"8AAWV","../utils/integrated-player-error":"5jMEP","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8AAWV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"9tN9G","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":false,"./stringify.js":false,"./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9tN9G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"dKqC4","./rng.js":"bIE74","./stringify.js":"8juis","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"dKqC4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"bIE74":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8juis":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"bmu2B","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"bmu2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"9Krih","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9Krih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}]},["5nxYn","hlHXS"], "hlHXS", "parcelRequire0a42")

//# sourceMappingURL=index.js.map
