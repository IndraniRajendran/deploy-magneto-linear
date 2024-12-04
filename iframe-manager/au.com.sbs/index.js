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
})({"acGu7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "bebc91dccb5f5641";
module.bundle.HMR_BUNDLE_ID = "56c4af97c08ac444";
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

},{}],"14UVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SbsProvider);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _sbsStore = require("./helpers/sbs-store");
var _messengerLink = require("./helpers/MessengerLink");
var _messengers = require("./helpers/Messengers");
var _providerUtils = require("../provider-utils");
var _utils = require("./helpers/utils");
var _sbsApi = require("./sbs-services/sbs-api");
var _oztamBridge = require("./analytics/OztamBridge");
var _oztamBridgeDefault = parcelHelpers.interopDefault(_oztamBridge);
var _adobeAnalytics = require("./analytics/AdobeAnalytics");
var _adobeAnalyticsDefault = parcelHelpers.interopDefault(_adobeAnalytics);
var _convivaBridge = require("./analytics/ConvivaBridge");
var _convivaBridgeDefault = parcelHelpers.interopDefault(_convivaBridge);
var _liveGoogleDai = require("./sbs-services/live-google-dai");
var _liveGoogleDaiDefault = parcelHelpers.interopDefault(_liveGoogleDai);
var _sbsProgramTracker = require("./sbs-services/sbs-program-tracker");
const sessionTokenKeyProd = "SBS-SESSION-TOKEN-V2";
class SbsProvider {
    /**
     * @typedef {import('../../app/get-asset').GetAssetRequest} GetAssetRequest
     * @typedef {import('../../app/get-asset').GetAssetResponse} GetAssetResponse
     */ /**
     * @param {GetAssetRequest} args requested asset and device information
     * @returns {GetAssetResponse} streams for the requested asset
     */ async getAsset({ authToken, glassAssetLocator, glassContentOptions, deviceInfo }) {
        var _this_config;
        let gracenoteId = getFileName(glassAssetLocator.pathname);
        const provider = glassAssetLocator.searchParams.get("provider");
        const providerId = glassAssetLocator.searchParams.get("providerid");
        const { glassConfigure: { brand: devicePlatform, osVersion: deviceOSVersion, model: deviceModel }, uuid: deviceId } = deviceInfo;
        const { connectionType: networkConnectionType } = glassContentOptions;
        let sbsAuthData;
        try {
            sbsAuthData = JSON.parse(atob(authToken));
        } catch (e) {
            throw new (0, _providerUtils.MLEError)("Could not parse SBS auth data", (0, _providerUtils.ErrorTypes).GENERIC);
        }
        console.info("[acc] SBS received startup data", {
            sbsAuthData,
            glassAssetLocator,
            glassAssetLocatorParsed: {
                provider,
                providerId
            },
            glassContentOptions,
            deviceInfo
        });
        let mpxID;
        try {
            const channelInfo = JSON.parse(providerId);
            if (!channelInfo.mpxID) throw new Error();
            mpxID = channelInfo.mpxID;
        } catch (err) {
            throw new (0, _providerUtils.MLEError)("Could not parse SBS mpxID from providerId", (0, _providerUtils.ErrorTypes).CHANNEL_MAP);
        }
        console.info(`[acc] Accedo version ${(0, _sbsStore.Store).appVersion}, parent app version ${deviceInfo.appVersion}, player version ${deviceInfo.playerVersion}`);
        if (!mpxID) throw new (0, _providerUtils.MLEError)("No valid mpxID, exiting ", (0, _providerUtils.ErrorTypes).GENERIC);
        // Can use either prod or staging session token
        const sessionToken = sbsAuthData[sessionTokenKeyProd] || sbsAuthData[`${sessionTokenKeyProd}_Q`];
        console.log("[acc] SBS auth data", sbsAuthData);
        if (!sessionToken) throw new (0, _providerUtils.MLEError)("No auth data provided, exiting ", (0, _providerUtils.ErrorTypes).AUTH);
        (0, _sbsStore.Store).sessionToken = sessionToken;
        (0, _sbsStore.Store).deviceId = deviceId;
        (0, _sbsStore.Store).devicePlatform = devicePlatform;
        (0, _sbsStore.Store).deviceModel = "Xi1"; // hardcode for now while deviceModel doesn't match firebolt model
        (0, _sbsStore.Store).deviceFirmwareVersion = deviceOSVersion;
        (0, _sbsStore.Store).appIsRunning = true;
        if (networkConnectionType.toLowerCase() === "ethernet") (0, _sbsStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).LAN;
        else if (networkConnectionType.toLowerCase() === "wifi") (0, _sbsStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).WIFI;
        const sourceUrl = await (0, _sbsApi.getSourceUrl)(mpxID);
        console.log(`[acc] passing back url ${sourceUrl}`);
        return {
            aampInitConfigOverrides: (0, _objectSpread._)({
                enableLiveLatencyCorrection: true
            }, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.aampInitConfigRemoteOverrides),
            streams: [
                {
                    url: sourceUrl
                }
            ]
        };
    }
    monitoringSetup(videoElement) {
        console.log("[acc] call monitoringSetup");
        if (!this.messengerLink) this.messengerLink = new (0, _messengerLink.MessengerLink)((0, _messengers.Messengers));
        this.videoElement = videoElement;
        this.messengerLink.unlinkVideoElementListeners(this.videoElement);
        this.messengerLink.linkVideoElementListeners(this.videoElement);
        // expect modules to destroy themselves when appTeardown$ fires
        (0, _oztamBridgeDefault.default).init();
        (0, _adobeAnalyticsDefault.default).init();
        (0, _convivaBridgeDefault.default).init();
        (0, _liveGoogleDaiDefault.default).init();
    }
    monitoringTeardown() {
        console.log("[acc] call monitoringTeardown");
        if (this.messengerLink && this.videoElement) this.messengerLink.unlinkVideoElementListeners(this.videoElement);
        (0, _messengers.Messengers).appTeardown$.send();
        Object.keys((0, _messengers.Messengers)).forEach((key)=>(0, _messengers.Messengers)[key].reset());
        (0, _sbsStore.Store).appIsRunning = false;
    }
    constructor(config){
        (0, _defineProperty._)(this, "config", void 0);
        (0, _defineProperty._)(this, "messengerLink", void 0);
        (0, _defineProperty._)(this, "videoElement", void 0);
        this.config = config;
    }
}
function getFileName(url) {
    if (url) return url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
    return "";
}

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","./helpers/sbs-store":"iioOr","./helpers/MessengerLink":"3CCh3","./helpers/Messengers":"3yiy2","../provider-utils":"jTFkH","./helpers/utils":"bowyB","./sbs-services/sbs-api":"advKM","./analytics/OztamBridge":"dMlqF","./analytics/AdobeAnalytics":"8FMzj","./analytics/ConvivaBridge":"652Xv","./sbs-services/live-google-dai":"2D8Pe","./sbs-services/sbs-program-tracker":"9cpbv","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9kWBJ":[function(require,module,exports) {
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

},{}],"lupAG":[function(require,module,exports) {
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

},{"./_define_property.js":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"iioOr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Store", ()=>Store);
var _utils = require("./utils");
var _packageJson = require("../package.json");
var _packageJsonDefault = parcelHelpers.interopDefault(_packageJson);
const APP_INSTALL_DATE_STORAGE_KEY = "au.com.sbs_MLE_install_date";
const sbsStagingConfigKey = "au.com.sbs_USE_STAGING_CONFIG";
// run this in debugger to set staging config, then reload
// localStorage.setItem("au.com.sbs_USE_STAGING_CONFIG", "true");
const useProdConfig = localStorage.getItem(sbsStagingConfigKey) !== "true";
const Store = {
    sessionToken: "",
    memberId: "",
    appInstallDate: "",
    appVersion: (0, _packageJsonDefault.default).version,
    deviceId: "",
    devicePlatform: "",
    deviceModel: "",
    deviceMake: "foxtel",
    deviceFirmwareVersion: "",
    appIsRunning: true,
    useProdConfig,
    deviceNetworkConnection: (0, _utils.NetworkConnectionType).UNKNOWN,
    baseApiUrl: useProdConfig ? "https://sbsondemandctv.sbs.com.au" : "https://au-proxy.apac.ninja/sbs-prod-api-proxy",
    tvEpgUrl: "https://tv-epg.pr.sbsod.com/guides-v2",
    catalogueUrl: useProdConfig ? "https://catalogue.pr.sbsod.com" : "https://catalogue.stg.sbsod.com",
    getAppInstallDate: ()=>{
        let storedDate = localStorage.getItem(APP_INSTALL_DATE_STORAGE_KEY);
        if (!storedDate) {
            storedDate = new Date().toISOString();
            localStorage.setItem(APP_INSTALL_DATE_STORAGE_KEY, storedDate);
        }
        return storedDate;
    }
};

},{"./utils":"bowyB","../package.json":"3y6Bf","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"bowyB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NetworkConnectionType", ()=>NetworkConnectionType);
parcelHelpers.export(exports, "PlayerStates", ()=>PlayerStates);
parcelHelpers.export(exports, "OztamEventType", ()=>OztamEventType);
parcelHelpers.export(exports, "generateUUID", ()=>generateUUID);
parcelHelpers.export(exports, "AsyncFunctionQueue", ()=>AsyncFunctionQueue);
var _defineProperty = require("@swc/helpers/_/_define_property");
class NetworkConnectionType {
}
(0, _defineProperty._)(NetworkConnectionType, "WIFI", "WIFI");
(0, _defineProperty._)(NetworkConnectionType, "LAN", "LAN");
(0, _defineProperty._)(NetworkConnectionType, "UNKNOWN", "Unknown");
class PlayerStates {
}
(0, _defineProperty._)(PlayerStates, "Playing", "Playing");
(0, _defineProperty._)(PlayerStates, "Paused", "Paused");
(0, _defineProperty._)(PlayerStates, "Buffering", "Buffering");
(0, _defineProperty._)(PlayerStates, "Seeking", "Seeking");
(0, _defineProperty._)(PlayerStates, "Initialising", "Initialising");
class OztamEventType {
}
(0, _defineProperty._)(OztamEventType, "LOAD", "LOAD");
(0, _defineProperty._)(OztamEventType, "BEGIN", "BEGIN");
(0, _defineProperty._)(OztamEventType, "PROGRESS", "PROGRESS");
(0, _defineProperty._)(OztamEventType, "COMPLETE", "COMPLETE");
(0, _defineProperty._)(OztamEventType, "AD_BEGIN", "AD_BEGIN");
(0, _defineProperty._)(OztamEventType, "AD_COMPLETE", "AD_COMPLETE");
const generateUUID = ()=>{
    // Public Domain/MIT
    let d = new Date().getTime(); //Timestamp
    let d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1000 || 0; //Time in microseconds since page-load or 0 if unsupported
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        let r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === "x" ? r : r & 0x3 | 0x8).toString(16);
    });
};
class AsyncFunctionQueue {
    pushFunction(fn) {
        this._functionQueue.push(fn);
        this._tryStartQueueProcessing();
    }
    constructor(){
        (0, _defineProperty._)(this, "_functionQueue", []);
        (0, _defineProperty._)(this, "_functionRunningInProgress", false);
        (0, _defineProperty._)(this, "_tryStartQueueProcessing", async ()=>{
            if (this._functionRunningInProgress || !this._functionQueue.length) return;
            this._functionRunningInProgress = true;
            await this._functionQueue.shift()();
            this._functionRunningInProgress = false;
            this._tryStartQueueProcessing();
        });
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"3y6Bf":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"au.com.sbs","version":"1.0.49","description":"","main":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"author":"","license":"ISC","dependencies":{}}');

},{}],"3CCh3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessengerLink", ()=>MessengerLink);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _utils = require("./utils");
class MessengerLink {
    constructor(Messengers){
        (0, _defineProperty._)(this, "Messengers", void 0);
        (0, _defineProperty._)(this, "videoElement", void 0);
        // player events
        (0, _defineProperty._)(this, "onBitrateChange", (bitrateObj)=>{
            this.Messengers.bitrateChange$.send(bitrateObj.detail.bitRate, bitrateObj.detail.framerate);
        });
        (0, _defineProperty._)(this, "onTimeUpdate", ()=>this.Messengers.timeUpdate$.send(this.videoElement.currentTime));
        (0, _defineProperty._)(this, "onId3Metadata", (id3Obj)=>this.Messengers.id3Metadata$.send(id3Obj));
        (0, _defineProperty._)(this, "onManifestTimedMetadata", (metadataObj)=>this.Messengers.timedMetadata$.send(metadataObj));
        (0, _defineProperty._)(this, "onError", ()=>this.Messengers.playerError$.send(this.videoElement.error));
        (0, _defineProperty._)(this, "onAppHidden", (detailObj)=>this.Messengers.appHiddenWithoutAudio$.send(detailObj.detail.blocked));
        // player states
        (0, _defineProperty._)(this, "onInitialising", ()=>this.Messengers.playerState$.send((0, _utils.PlayerStates).Initialising));
        (0, _defineProperty._)(this, "onPlaying", ()=>this.Messengers.playerState$.send((0, _utils.PlayerStates).Playing));
        (0, _defineProperty._)(this, "onPause", ()=>this.Messengers.playerState$.send((0, _utils.PlayerStates).Paused));
        (0, _defineProperty._)(this, "onWaiting", ()=>this.Messengers.playerState$.send((0, _utils.PlayerStates).Buffering));
        (0, _defineProperty._)(this, "onSeeking", ()=>this.Messengers.playerState$.send((0, _utils.PlayerStates).Seeking));
        (0, _defineProperty._)(this, "linkVideoElementListeners", (videoElement)=>{
            videoElement.addEventListener("timeupdate", this.onTimeUpdate);
            videoElement.addEventListener("bitrateChanged", this.onBitrateChange);
            videoElement.addEventListener("id3Metadata", this.onId3Metadata);
            videoElement.addEventListener("timedMetadata", this.onManifestTimedMetadata);
            videoElement.addEventListener("error", this.onError);
            videoElement.addEventListener("blocked", this.onAppHidden);
            videoElement.addEventListener("loadedmetadata", this.onInitialising);
            videoElement.addEventListener("playing", this.onPlaying);
            videoElement.addEventListener("pause", this.onPause);
            videoElement.addEventListener("waiting", this.onWaiting);
            videoElement.addEventListener("seeking", this.onSeeking);
            this.videoElement = videoElement;
        });
        (0, _defineProperty._)(this, "unlinkVideoElementListeners", (videoElement)=>{
            videoElement.removeEventListener("timeupdate", this.onTimeUpdate);
            videoElement.removeEventListener("bitrateChanged", this.onBitrateChange);
            videoElement.removeEventListener("id3Metadata", this.onId3Metadata);
            videoElement.removeEventListener("timedMetadata", this.onManifestTimedMetadata);
            videoElement.removeEventListener("error", this.onError);
            videoElement.removeEventListener("blocked", this.onAppHidden);
            videoElement.removeEventListener("loadedmetadata", this.onInitialising);
            videoElement.removeEventListener("playing", this.onPlaying);
            videoElement.removeEventListener("pause", this.onPause);
            videoElement.removeEventListener("waiting", this.onWaiting);
            videoElement.removeEventListener("seeking", this.onSeeking);
            this.videoElement = null;
        });
        this.Messengers = Messengers;
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","./utils":"bowyB","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"3yiy2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messengers", ()=>Messengers);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _messenger = require("./Messenger");
var _utils = require("./utils");
class MessengersClass {
    constructor(){
        // SBS specific
        (0, _defineProperty._)(this, "streamReady$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "programChange$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "googleDaiResponse$", new (0, _messenger.Messenger)(null));
        // player
        (0, _defineProperty._)(this, "playerState$", new (0, _messenger.Messenger)((0, _utils.PlayerStates).Initialising));
        (0, _defineProperty._)(this, "timeUpdate$", new (0, _messenger.Messenger)(0));
        (0, _defineProperty._)(this, "bitrateChange$", new (0, _messenger.Messenger)(0));
        (0, _defineProperty._)(this, "id3Metadata$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "playerError$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "timedMetadata$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "appHiddenWithoutAudio$", new (0, _messenger.Messenger)(false));
        // ads
        (0, _defineProperty._)(this, "currentAd$", new (0, _messenger.Messenger)(null));
        // other
        (0, _defineProperty._)(this, "appTeardown$", new (0, _messenger.Messenger)(undefined));
        (0, _defineProperty._)(this, "oztamSessionId$", new (0, _messenger.Messenger)((0, _utils.generateUUID)()));
    }
}
const Messengers = new MessengersClass();

},{"@swc/helpers/_/_define_property":"9kWBJ","./Messenger":"ivAW8","./utils":"bowyB","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"ivAW8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messenger", ()=>Messenger);
var _defineProperty = require("@swc/helpers/_/_define_property");
class Receiver {
    constructor(action){
        (0, _defineProperty._)(this, "teardownFunctions", []);
        (0, _defineProperty._)(this, "addTeardown", (teardownFn)=>{
            this.teardownFunctions.push(teardownFn);
        });
        (0, _defineProperty._)(this, "callAction", (value)=>this.action(value));
        (0, _defineProperty._)(this, "unlisten", ()=>{
            this.teardownFunctions.forEach((teardownFn)=>teardownFn());
            this.teardownFunctions = [];
        });
        this.action = action;
    }
}
class PartialMessenger {
    addReceiver(receiverAction, immediatelySendData = false) {
        const newReceiver = new Receiver(receiverAction);
        if (this.messengerLink) {
            const linkTeardownFunction = this.messengerLink(newReceiver, immediatelySendData);
            newReceiver.addTeardown(linkTeardownFunction);
        }
        newReceiver.addTeardown(()=>{
            this.receivers = this.receivers.filter((receiver)=>receiver !== newReceiver);
        });
        this.receivers.push(newReceiver);
        return newReceiver;
    }
    pipe(...fns) {
        const aggregateOfAll = (source)=>fns.reduce((observableSoFar, operatorFunction)=>operatorFunction(observableSoFar), source);
        return aggregateOfAll(this);
    }
    constructor(messengerLink){
        (0, _defineProperty._)(this, "receivers", []);
        this.messengerLink = messengerLink;
    }
}
class Messenger extends PartialMessenger {
    constructor(state){
        super(undefined);
        (0, _defineProperty._)(this, "initialValue", void 0);
        (0, _defineProperty._)(this, "state", void 0);
        (0, _defineProperty._)(this, "addReceiver", (receiverAction, immediatelySendData = false)=>{
            const newReceiver = super.addReceiver(receiverAction);
            if (immediatelySendData) newReceiver.callAction(this.state);
            return newReceiver;
        });
        (0, _defineProperty._)(this, "send", (data)=>{
            this.state = data;
            this.receivers.forEach((receiver)=>{
                receiver.callAction(data);
            });
        });
        (0, _defineProperty._)(this, "reset", ()=>{
            this.send(this.initialValue);
        });
        (0, _defineProperty._)(this, "getCurrentValue", ()=>this.state);
        this.initialValue = state;
        this.state = state;
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"jTFkH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ErrorTypes", ()=>ErrorTypes);
parcelHelpers.export(exports, "MLEError", ()=>MLEError);
parcelHelpers.export(exports, "setTokenInDeviceStorage", ()=>setTokenInDeviceStorage);
var _defineProperty = require("@swc/helpers/_/_define_property");
class ErrorTypes {
}
(0, _defineProperty._)(ErrorTypes, "GENERIC", "GENERIC");
(0, _defineProperty._)(ErrorTypes, "AUTH", "AUTH");
(0, _defineProperty._)(ErrorTypes, "PROVIDER", "PROVIDER");
(0, _defineProperty._)(ErrorTypes, "CHANNEL_MAP", "CHANNEL_MAP");
class MLEError extends Error {
    getDetail() {
        return null;
    }
    getMediaFailedPayload() {
        return {
            error: {
                major: 20000,
                minor: 110,
                desc: `${this.type}|${this.message}|${this.status}`
            }
        };
    }
    constructor(message, type, status){
        super(message);
        (0, _defineProperty._)(this, "type", void 0);
        (0, _defineProperty._)(this, "status", void 0);
        this.message = message;
        this.type = type;
        this.status = status;
    }
}
const setTokenInDeviceStorage = async (storageKey, encodedTokenString)=>{
    // eslint-disable-next-line no-console
    console.log(`Updating token for ${storageKey}`);
    return await fetch(`http://localhost:9005/as/system/token/${storageKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: encodedTokenString
        })
    });
};

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"advKM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSourceUrl", ()=>getSourceUrl);
parcelHelpers.export(exports, "getProgramInfo", ()=>getProgramInfo);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _sbsStore = require("../helpers/sbs-store");
var _providerUtils = require("../../provider-utils");
var _messengers = require("../helpers/Messengers");
var _sbsValidators = require("./sbs-validators");
class FetchError extends Error {
    constructor(message, status){
        super(message);
        (0, _defineProperty._)(this, "status", void 0);
        this.status = status;
        Object.setPrototypeOf(this, FetchError.prototype);
    }
}
const AppVersion = (0, _sbsStore.Store).appVersion;
const baseUrl = (0, _sbsStore.Store).baseApiUrl;
const catalogueBaseUrl = (0, _sbsStore.Store).catalogueUrl;
const getDAIBody = (adTag)=>{
    const customParamsString = Object.keys(adTag.customParameters).map((key)=>`${key}=${encodeURIComponent(adTag.customParameters[key])}`).join("&");
    const targetingParams = {
        iu: adTag.iu,
        sid: (0, _messengers.Messengers).oztamSessionId$.getCurrentValue(),
        cust_params: encodeURIComponent(customParamsString),
        description_url: encodeURIComponent(adTag.description_url),
        npa: String(0),
        ppid: encodeURIComponent(adTag.ppid),
        url: encodeURIComponent(adTag.description_url)
    };
    const daiString = Object.keys(targetingParams).map((key)=>`${key}=${targetingParams[key]}`).join("&");
    return daiString;
};
const tryGoogleProvider = async (daiProvider, adTag)=>{
    try {
        const daiString = getDAIBody(adTag);
        const daiUrl = `https://dai.google.com/linear/v1/hls/event/${daiProvider.videoId}/stream`;
        const daiResponse = await fetch(daiUrl, {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: daiString
        }).then((res)=>{
            if (res.ok) return res;
            throw new FetchError(res.statusText, res.status);
        }).then((res)=>res.json());
        if ((0, _sbsValidators.isValidGoogleDAIResponse)(daiResponse)) {
            (0, _messengers.Messengers).googleDaiResponse$.send(daiResponse);
            return daiResponse.stream_manifest;
        } else throw new Error("Invalid DAI response");
    } catch (err) {
        let message = err.message;
        if (err instanceof Error) {
            if (err.message === "Invalid DAI response") err.message = "No stream manifest url returned by google DAI";
            else err.message = "Generic error requesting google DAI or parsing ad tag to make request";
        }
        throw new (0, _providerUtils.MLEError)(message, (0, _providerUtils.ErrorTypes).PROVIDER, err.status);
    }
};
const getSourceUrl = async (mpxID)=>{
    const authHeader = "Basic " + btoa((0, _sbsStore.Store).sessionToken + ":tv");
    const deviceId = (0, _sbsStore.Store).deviceId;
    const platform = "Xi1"; // hardcode to match On Demand app until Firebolt gets sunsetted;
    const uniqueId = `${deviceId}-3.20.0-${Date.now()}`;
    let channelApiEndpoint = `${baseUrl}/api/v3/video_stream?id=${mpxID}&context=tv&make=${(0, _sbsStore.Store).deviceMake}&model=${platform}&version=3.20.0&uniqueid=${uniqueId}&deviceadid=${deviceId}&deviceadidoptout=0`;
    // DE-MUXED streams: audio=demuxed in query string
    //    without audio=demuxed query string parameter
    //        -> we are getting a muxed stream
    //    with audio=demuxed query string parameter
    //        -> we are getting a de-muxed stream instead
    //        ... in case de-muxed stream does not exist for a specific asset, API will still return a muxed stream
    channelApiEndpoint += `&audio=demuxed`;
    console.log("[acc] Requesting demuxed stream:", channelApiEndpoint);
    const channelDataPromise = async ()=>{
        const fetchResponse = await fetch(channelApiEndpoint, {
            headers: {
                Authorization: authHeader
            }
        });
        if (!fetchResponse.ok) throw new FetchError(fetchResponse.statusText, fetchResponse.status);
        return await fetchResponse.json();
    };
    let channelData;
    let programData;
    try {
        var _channelData_adTag_customParameters, _channelData_conviva;
        const [channelApiResponse, program] = await Promise.all([
            channelDataPromise(),
            getProgramInfo(mpxID)
        ]);
        if (!(0, _sbsValidators.isValidChannelResponse)(channelApiResponse)) throw new Error("Invalid channel response");
        channelData = channelApiResponse;
        if (channelData.error) {
            if (channelData.error === "You must be signed in") throw new Error("Not Logged In");
            else if (channelData.error === "not found") throw new Error("MpxID not found on SBS API");
            else throw new Error(channelData.error);
        }
        programData = program;
        const memberId = ((_channelData_adTag_customParameters = channelData.adTag.customParameters) === null || _channelData_adTag_customParameters === void 0 ? void 0 : _channelData_adTag_customParameters.uid) || ((_channelData_conviva = channelData.conviva) === null || _channelData_conviva === void 0 ? void 0 : _channelData_conviva.viewerId);
        if (memberId) (0, _sbsStore.Store).memberId = memberId;
    } catch (err) {
        var _err_message;
        let type = (0, _providerUtils.ErrorTypes).PROVIDER;
        let message = "Generic error requesting TV channel " + err.message;
        let status = err instanceof FetchError ? err.status : undefined;
        if (err.message === "Not Logged In") message = "SBS auth token is invalid", type = (0, _providerUtils.ErrorTypes).AUTH;
        if (err.message === "MpxID not found on SBS API") {
            type = (0, _providerUtils.ErrorTypes).CHANNEL_MAP;
            message = err.message;
        }
        if (err.message === "Api Return Error") message = "Error returned by TV Channel response in JSON (not signed in, etc)";
        else if (err.message === "Missing Provider") message = "No GoogleDAIProvider object on TV Channel response";
        else if (err.message === "Failed to fetch" || ((_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.includes("Allow-Origin"))) {
            message = "CORS or network error requesting TV channel";
            status = 0;
        }
        throw new (0, _providerUtils.MLEError)(message, type, status);
    }
    try {
        var _channelData_streamProviders;
        // nested try catches :(
        let foundError = new Error("Empty Providers");
        if ((_channelData_streamProviders = channelData.streamProviders) === null || _channelData_streamProviders === void 0 ? void 0 : _channelData_streamProviders.length) // goal is to try each in order, if it fails move to next.
        for (const provider of channelData.streamProviders){
            if (provider.type === "GoogleDAIProvider") {
                try {
                    (0, _messengers.Messengers).streamReady$.send((0, _objectSpreadProps._)((0, _objectSpread._)({}, channelData), {
                        mpxMediaId: mpxID,
                        chosenProvider: provider,
                        programData
                    }));
                    return await tryGoogleProvider(provider, channelData.adTag);
                } catch (err) {
                    foundError = err;
                }
                break;
            } else if (provider.videoEncoding === "hls" && provider.contentUrl) {
                (0, _messengers.Messengers).streamReady$.send((0, _objectSpreadProps._)((0, _objectSpread._)({}, channelData), {
                    mpxMediaId: mpxID,
                    chosenProvider: provider,
                    programData
                }));
                return provider.contentUrl;
            }
        }
        // should have returned a url by now, time to error
        throw foundError;
    } catch (err) {
        let status = err instanceof FetchError ? err.status : undefined;
        let message = "Generic error requesting google DAI or parsing ad tag to make reqest";
        if (err.message === "No Manifest") message = "No stream manifest url returned by google DAI";
        else if (err.message === "Empty Providers") message = "Could not find vavlid stream provider in API response";
        throw new (0, _providerUtils.MLEError)(message, (0, _providerUtils.ErrorTypes).PROVIDER, status);
    }
};
const getProgramInfo = async (mpxId)=>{
    try {
        const liveResponse = await fetch((0, _sbsStore.Store).tvEpgUrl);
        if (!liveResponse.ok) throw new Error(liveResponse);
        const liveJson = await liveResponse.json();
        const matchingChannel = liveJson.items.find((item)=>String(item.channel.mpxMediaID) === String(mpxId));
        if (!matchingChannel) throw new Error("No matching channel when getting program info");
        const matchingEntry = matchingChannel.entries.find((entry)=>{
            const { start, end } = entry.availability || {};
            const nowMs = Date.now();
            return nowMs > new Date(start).getTime() && nowMs < new Date(end).getTime();
        });
        return matchingEntry;
    } catch (err) {
        console.warn("[acc] Error retrieving live program data", err);
        return null;
    }
};

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/sbs-store":"iioOr","../../provider-utils":"jTFkH","../helpers/Messengers":"3yiy2","./sbs-validators":"lAGRb","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8Y68S":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"lAGRb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isValidGoogleDAIResponse", ()=>isValidGoogleDAIResponse);
parcelHelpers.export(exports, "isValidChannelResponse", ()=>isValidChannelResponse);
const isValidGoogleDAIResponse = (response)=>{
    return typeof response === "object" && !!(response === null || response === void 0 ? void 0 : response.stream_manifest);
};
const isValidChannelResponse = (response)=>{
    return !!(typeof response === "object" && ((response === null || response === void 0 ? void 0 : response.error) || response.oztam || response.adTag || response.streamProviders));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"dMlqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _oztamClient = require("./OztamClient");
var _sbsStore = require("../helpers/sbs-store");
var _utils = require("../helpers/utils");
var _messengers = require("../helpers/Messengers");
const AppVersion = (0, _sbsStore.Store).appVersion;
const OztamBaseUrl = (0, _sbsStore.Store).useProdConfig ? "https://deliver.oztam.com.au/api/meter" : "https://sdeliver.oztam.com.au/api/meter";
const PROGRESS_INTERVAL_SECONDS = 60;
const SESSION_UPDATER_TIMER_SECONDS = 600;
class OztamBridge {
    constructor(){
        (0, _defineProperty._)(this, "client", null);
        (0, _defineProperty._)(this, "currentTime", -1);
        (0, _defineProperty._)(this, "sessionStarted", false);
        (0, _defineProperty._)(this, "playerState", (0, _utils.PlayerStates).Initialising);
        (0, _defineProperty._)(this, "progressInterval", 0);
        (0, _defineProperty._)(this, "isAppHiddenFromView", false);
        // session 10 minute pause
        (0, _defineProperty._)(this, "sessionRefreshHandler", null);
        (0, _defineProperty._)(this, "justRegeneratedSessionId", false);
        // when tuning to a channel with parental PIN we will
        // get hidden true then false after the LOAD event has
        // been fired. In that case do not resend the LOAD event
        // unless the session updater has run
        (0, _defineProperty._)(this, "hasStartedTrackingProgressDuringAppLaunch", false);
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "init", ()=>{
            this.removeEventListeners(); // in case monitoringTeardown isn't called
            this.addListeners();
        });
        (0, _defineProperty._)(this, "addListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).streamReady$.addReceiver(this.onChannelDataReceived, true),
                (0, _messengers.Messengers).playerState$.addReceiver(this.onPlayerStateChange, true),
                (0, _messengers.Messengers).timeUpdate$.addReceiver(this.onTimeUpdate),
                (0, _messengers.Messengers).playerError$.addReceiver(this.onAppErrored),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onAppTeardown),
                (0, _messengers.Messengers).appHiddenWithoutAudio$.addReceiver(this.onAppHidden),
                (0, _messengers.Messengers).oztamSessionId$.addReceiver(this.onSessionIdChange)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "onChannelDataReceived", (channelData)=>{
            if (!(channelData === null || channelData === void 0 ? void 0 : channelData.oztam)) return;
            const { oztam: { publisherId, videoId: mediaId, duration: mediaDuration, channel, mediaProperties: { classification, seriesName, seriesId, episodeId, episodeName } } } = channelData;
            const userId = (0, _sbsStore.Store).memberId || "empty";
            const platformString = (0, _sbsStore.Store).devicePlatform.toLowerCase() === "soip-pck" ? "Puck" : "TV";
            const oztamStaticConfig = {
                vendorVersion: `SBS_Foxtel-${platformString}-Linear_${AppVersion}`,
                connectionType: (0, _sbsStore.Store).deviceNetworkConnection,
                deviceId: (0, _sbsStore.Store).deviceId,
                userId: userId,
                baseUrl: OztamBaseUrl
            };
            const oztamStreamConfig = {
                eventIdentificationData: {
                    publisherId,
                    mediaId,
                    mediaDuration,
                    mediaType: "live",
                    protocolVersion: "1.1.0",
                    demo1: userId
                },
                streamMetadata: {
                    channel,
                    classification,
                    seriesId,
                    seriesName,
                    episodeId,
                    episodeName
                }
            };
            if (!this.client) this.client = new (0, _oztamClient.OzTamClient)((0, _messengers.Messengers).oztamSessionId$.getCurrentValue());
            this.client.init(oztamStaticConfig, oztamStreamConfig);
            this.client.loadEvent();
        });
        (0, _defineProperty._)(this, "onTimeUpdate", (time)=>{
            this.currentTime = time;
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (playerState)=>{
            const previousState = this.playerState;
            this.playerState = playerState;
            if (this.isAppHiddenFromView) return;
            if (playerState === (0, _utils.PlayerStates).Playing && previousState !== (0, _utils.PlayerStates).Playing) {
                if (this.sessionStarted) {
                    var _this_client;
                    // Resume playing content after pause, seek etc
                    console.log("[acc] oztam resumed");
                    this.startProgressInterval();
                    (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.setLastPosition(this.currentTime);
                }
                if (this.justRegeneratedSessionId) {
                    var _this_client1, _this_client2;
                    // first playing event after regenerate -> send load & begin
                    this.justRegeneratedSessionId = false;
                    (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.loadEvent(this.currentTime);
                    (_this_client2 = this.client) === null || _this_client2 === void 0 ? void 0 : _this_client2.beginEvent(this.currentTime);
                    this.startProgressInterval();
                } else if (!this.sessionStarted) {
                    var _this_client3;
                    (_this_client3 = this.client) === null || _this_client3 === void 0 ? void 0 : _this_client3.beginEvent(this.currentTime);
                    this.startProgressInterval();
                    this.sessionStarted = true;
                }
            }
            // Log progress from last interval to when stream was paused
            // or seeked, buffering
            if (playerState !== (0, _utils.PlayerStates).Playing && previousState === (0, _utils.PlayerStates).Playing) {
                var _this_client4;
                console.log("[acc] oztam no longer playing");
                (_this_client4 = this.client) === null || _this_client4 === void 0 ? void 0 : _this_client4.progressEvent(this.currentTime);
                this.clearProgressInterval();
            }
        });
        (0, _defineProperty._)(this, "onAppHidden", (isHidden)=>{
            if (this.isAppHiddenFromView === isHidden) return;
            this.isAppHiddenFromView = isHidden;
            console.log("[acc] change hidden state in oztam", isHidden);
            if (this.isAppHiddenFromView) {
                var // partial progress
                _this_client;
                // change to hidden
                if (this.sessionStarted) (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.progressEvent(this.currentTime);
                this.clearProgressInterval();
                if (this.sessionStarted || !this.hasStartedTrackingProgressDuringAppLaunch) this.setupSessionUpdater();
            } else {
                var // resume existing session
                _this_client1;
                // change to foreground
                if (!this.sessionStarted) {
                    var // Only send load event if we've already tracked and are re-starting
                    // a session
                    // Handles case where load event fired on startup and then
                    // again when hidden set to false
                    _this_client2, // begin as new session
                    _this_client3;
                    // probably was hidden long enough to regenerate session ID
                    if (this.hasStartedTrackingProgressDuringAppLaunch) (_this_client2 = this.client) === null || _this_client2 === void 0 ? void 0 : _this_client2.loadEvent(this.currentTime);
                    (_this_client3 = this.client) === null || _this_client3 === void 0 ? void 0 : _this_client3.beginEvent(this.currentTime);
                    this.sessionStarted = true;
                } else (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.setLastPosition(this.currentTime);
                this.startProgressInterval();
            }
        });
        (0, _defineProperty._)(this, "clearSessionUpdater", ()=>{
            if (this.sessionRefreshHandler) {
                console.log("[acc] oztam clear updater...");
                clearTimeout(this.sessionRefreshHandler);
                this.sessionRefreshHandler = null;
            }
        });
        (0, _defineProperty._)(this, "setupSessionUpdater", ()=>{
            this.clearSessionUpdater();
            console.log("[acc] oztam setting up updater...");
            this.sessionRefreshHandler = window.setTimeout(()=>{
                // should be cleared if we are unpaused or setting pro
                console.log("[acc] oztam updater updating Session ID!!");
                (0, _messengers.Messengers).oztamSessionId$.send((0, _utils.generateUUID)());
                this.justRegeneratedSessionId = true;
                this.sessionStarted = false;
                // set this flag so we send out another load event
                // with updated session id
                // in case we are hidden and transition to foreground
                this.hasStartedTrackingProgressDuringAppLaunch = true;
            }, SESSION_UPDATER_TIMER_SECONDS * 1000);
        });
        (0, _defineProperty._)(this, "onSessionIdChange", (sessionId)=>{
            var _this_client;
            (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.setSessionID(sessionId);
        });
        (0, _defineProperty._)(this, "startProgressInterval", ()=>{
            this.clearProgressInterval();
            this.clearSessionUpdater();
            this.hasStartedTrackingProgressDuringAppLaunch = true;
            this.progressInterval = window.setInterval(()=>{
                var _this_client;
                (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.progressEvent(this.currentTime);
            }, PROGRESS_INTERVAL_SECONDS * 1000);
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            var _this_client, _this_client1;
            if (!this.isAppHiddenFromView) (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.progressEvent(this.currentTime);
            (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.setLastPosition(0);
            this.clearProgressInterval();
            this.clearSessionUpdater();
            // reset session ID after but before listener is
            // removed that sets on client
            (0, _messengers.Messengers).oztamSessionId$.send((0, _utils.generateUUID)());
            this.removeEventListeners();
            this.currentTime = -1;
            this.sessionStarted = false;
            this.playerState = (0, _utils.PlayerStates).Initialising;
            this.isAppHiddenFromView = false;
            this.justRegeneratedSessionId = false;
            this.hasStartedTrackingProgressDuringAppLaunch = false;
        });
        (0, _defineProperty._)(this, "onAppErrored", ()=>{
            var _this_client;
            (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.progressEvent(this.currentTime);
            this.clearProgressInterval();
            this.clearSessionUpdater();
        });
        (0, _defineProperty._)(this, "clearProgressInterval", ()=>{
            clearInterval(this.progressInterval);
        });
    }
}
exports.default = new OztamBridge();

},{"@swc/helpers/_/_define_property":"9kWBJ","./OztamClient":"lB2gk","../helpers/sbs-store":"iioOr","../helpers/utils":"bowyB","../helpers/Messengers":"3yiy2","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"lB2gk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OzTamClient", ()=>OzTamClient);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../helpers/utils");
const roundPosition = (pos)=>Math.round(pos * 10) / 10;
class OzTamClient {
    constructor(sessionId){
        (0, _defineProperty._)(this, "timezoneOffset", Math.abs(new Date().getTimezoneOffset()));
        (0, _defineProperty._)(this, "baseUrl", "");
        (0, _defineProperty._)(this, "oztamUserId", "");
        (0, _defineProperty._)(this, "vendorVersion", "");
        (0, _defineProperty._)(this, "deviceId", "");
        (0, _defineProperty._)(this, "connectionType", (0, _utils.NetworkConnectionType).UNKNOWN);
        (0, _defineProperty._)(this, "streamConfig", null);
        (0, _defineProperty._)(this, "lastStartPosition", 0);
        (0, _defineProperty._)(this, "eventDispatcherHandler", null);
        (0, _defineProperty._)(this, "sessionId", "<empty>");
        (0, _defineProperty._)(this, "isLive", true);
        (0, _defineProperty._)(this, "ptsEpochDifference", 0);
        (0, _defineProperty._)(this, "stopRecordingEvents", false);
        (0, _defineProperty._)(this, "eventDispatchQueue", new (0, _utils.AsyncFunctionQueue)());
        (0, _defineProperty._)(this, "setSessionID", (sessionId)=>{
            this.sessionId = sessionId;
        });
        (0, _defineProperty._)(this, "init", async (staticConfig, streamConfig)=>{
            this.baseUrl = staticConfig.baseUrl;
            if (staticConfig.userId) this.oztamUserId = staticConfig.userId;
            this.vendorVersion = staticConfig.vendorVersion;
            this.deviceId = staticConfig.deviceId;
            this.connectionType = staticConfig.connectionType;
            this.streamConfig = streamConfig;
        });
        (0, _defineProperty._)(this, "setPtsEpochDiff", (diff)=>{
            this.ptsEpochDifference = diff;
        });
        (0, _defineProperty._)(this, "loadEvent", (position = 0)=>{
            this.generateOztamEvent((0, _utils.OztamEventType).LOAD, position, position);
        });
        (0, _defineProperty._)(this, "beginEvent", (timeAtBeginning)=>{
            this.lastStartPosition = timeAtBeginning;
            this.generateOztamEvent((0, _utils.OztamEventType).BEGIN, timeAtBeginning, timeAtBeginning);
        });
        (0, _defineProperty._)(this, "completeEvent", (position)=>{
            this.generateOztamEvent((0, _utils.OztamEventType).COMPLETE, this.lastStartPosition, position);
            this.lastStartPosition = 0;
        });
        (0, _defineProperty._)(this, "setLastPosition", (position)=>{
            this.lastStartPosition = position;
        });
        (0, _defineProperty._)(this, "progressEvent", (position)=>{
            if (position !== this.lastStartPosition) {
                this.generateOztamEvent((0, _utils.OztamEventType).PROGRESS, this.lastStartPosition, position);
                this.lastStartPosition = position;
            }
        });
        (0, _defineProperty._)(this, "adBeginEvent", (adStartTime)=>{
            this.generateOztamEvent((0, _utils.OztamEventType).AD_BEGIN, this.lastStartPosition, this.lastStartPosition);
        });
        (0, _defineProperty._)(this, "adCompleteEvent", (adCompleteTime)=>{
            this.generateOztamEvent((0, _utils.OztamEventType).AD_COMPLETE, adCompleteTime, adCompleteTime);
        });
        (0, _defineProperty._)(this, "setStopRecordingEvents", (stop)=>{
            this.stopRecordingEvents = stop;
        });
        (0, _defineProperty._)(this, "generateOztamEvent", (eventType, fromPosition, toPosition)=>{
            if (this.stopRecordingEvents) return;
            const eventTimestamp = new Date();
            const event = {
                timestamp: eventTimestamp.toISOString(),
                event: eventType,
                fromPosition: 0,
                toPosition: 0
            };
            let boundedPosition = Math.max(0, toPosition);
            boundedPosition = Math.min(fromPosition + 60, boundedPosition);
            event.fromPosition = roundPosition(fromPosition);
            event.toPosition = roundPosition(boundedPosition);
            if (this.isLive) {
                const positionDifference = event.toPosition - event.fromPosition;
                if (this.ptsEpochDifference) {
                    event.toPosition = roundPosition(event.toPosition + this.ptsEpochDifference);
                    event.timestamp = new Date(event.toPosition * 1000).toISOString();
                } else // use epoch time if pts epoch difference isn't able to be set
                event.toPosition = roundPosition(eventTimestamp.getTime() / 1000);
                event.fromPosition = roundPosition(event.toPosition - positionDifference);
            }
            const meterEvent = this.generateMeterEvent(event);
            this.sendEvent(meterEvent);
        });
        (0, _defineProperty._)(this, "generateMeterEvent", (oztamEvent)=>{
            if (!this.streamConfig) {
                console.error("video data required for ozTeam event");
                return null;
            }
            const { eventIdentificationData, streamMetadata } = this.streamConfig;
            const shouldAppendProperties = [
                (0, _utils.OztamEventType).LOAD,
                (0, _utils.OztamEventType).BEGIN
            ].includes(oztamEvent.event);
            const meterEvent = (0, _objectSpreadProps._)((0, _objectSpread._)({
                protocolVersion: "1.1.1",
                vendorVersion: this.vendorVersion,
                plugin: "native",
                timestamp: new Date().toISOString(),
                timezoneOffset: this.timezoneOffset,
                sessionId: this.sessionId,
                userAgent: {
                    deviceType: "tv"
                }
            }, eventIdentificationData), {
                events: [
                    oztamEvent
                ]
            });
            if (shouldAppendProperties) meterEvent.properties = (0, _objectSpread._)({
                connectionType: this.connectionType,
                deviceId: this.deviceId,
                demo1: this.oztamUserId
            }, streamMetadata);
            return meterEvent;
        });
        (0, _defineProperty._)(this, "sendEvent", (meterEvent)=>{
            this.eventDispatchQueue.pushFunction(async ()=>{
                await this._dispatchMeterEvent(meterEvent);
            });
        });
        (0, _defineProperty._)(this, "_dispatchMeterEvent", async (meterEvent)=>{
            if (!meterEvent) return;
            const options = {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8"
                },
                body: JSON.stringify(meterEvent)
            };
            console.log(`[acc] Oztam dispatch meter event ${meterEvent.events[0].event} from ${meterEvent.events[0].fromPosition} to ${meterEvent.events[0].toPosition} diff ${meterEvent.events[0].toPosition - meterEvent.events[0].fromPosition}`);
            try {
                const oztamRequest = await fetch(this.baseUrl, options);
                if (!oztamRequest.ok) throw oztamRequest;
            } catch (error) {
                console.error(error);
            }
        });
        if (sessionId) this.sessionId = sessionId;
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/utils":"bowyB","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8FMzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _sbsStore = require("../helpers/sbs-store");
var _utils = require("../helpers/utils");
var _messengers = require("../helpers/Messengers");
const AppVersion = (0, _sbsStore.Store).appVersion;
const majorVersion = AppVersion.split(".")[0] || "0";
const baseUrl = (0, _sbsStore.Store).baseApiUrl;
class AdobeAnalytics {
    constructor(){
        (0, _defineProperty._)(this, "originalEnvironmentData", {
            browser: {
                userAgent: navigator.userAgent
            },
            platform: {
                appBuild: "1",
                appName: "on demand ctv",
                appVersion: AppVersion,
                deviceLanguage: "en",
                deviceName: "foxtel fac",
                deviceType: "CTV",
                firmware: "<empty>",
                firmwareYear: "",
                resolution: "1920 X 1080",
                installDate: (0, _sbsStore.Store).getAppInstallDate(),
                modelNumber: "<empty>",
                playerName: "stb.foxtelFac.v3"
            }
        });
        (0, _defineProperty._)(this, "environmentData", this.originalEnvironmentData);
        (0, _defineProperty._)(this, "originalUserData", {
            userInfo: {
                userID: "",
                loggedIn: false
            }
        });
        (0, _defineProperty._)(this, "userData", this.originalUserData);
        (0, _defineProperty._)(this, "originalPageData", {
            attributes: {
                content: {
                    title: "",
                    program: ""
                }
            },
            category: {
                primaryCategory: "ondemand",
                siteSubSection1: "MLELanding",
                siteSubSection2: "",
                siteSubSection3: "",
                siteSubSection4: ""
            },
            pageInfo: {
                clickSource: {},
                campaign: {},
                destinationURL: location.origin + location.pathname,
                language: "en",
                originalReferrerURL: "",
                pageID: "",
                pageName: "s:ondemand:ctv:MLELanding",
                previousPageName: "",
                previousPageURL: "",
                referralURL: "",
                siteName: `ondemand:ctv.foxtelmle.v1`,
                title: ""
            }
        });
        (0, _defineProperty._)(this, "pageData", this.originalPageData);
        (0, _defineProperty._)(this, "videoData", null);
        (0, _defineProperty._)(this, "hasPlayed", false);
        (0, _defineProperty._)(this, "currentAd", null);
        (0, _defineProperty._)(this, "chapterNumber", 0);
        (0, _defineProperty._)(this, "libraryLoaded", false);
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "init", ()=>{
            this.originalEnvironmentData.platform.modelNumber = (0, _sbsStore.Store).deviceModel;
            this.originalEnvironmentData.platform.firmware = (0, _sbsStore.Store).deviceFirmwareVersion;
            this.environmentData = this.originalEnvironmentData;
            this.removeEventListeners(); // in case monitoringTeardown isn't called
            this.prepareWindowOnInit();
            this.addListeners();
        });
        (0, _defineProperty._)(this, "prepareWindowOnInit", ()=>{
            this.updateWindowStaticProperties();
            // this.addEvent("appState", "appStarted");
            // for some reason the library's sub-library errors if we don't set these
            // not sure if we can ignore but we add them to be safe
            window.ctvEnv = "dev";
            window.ctvMake = (0, _sbsStore.Store).deviceMake;
        });
        (0, _defineProperty._)(this, "addListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).streamReady$.addReceiver(this.onChannelDataReceived, true),
                (0, _messengers.Messengers).playerState$.addReceiver(this.onPlayerStateChange),
                (0, _messengers.Messengers).currentAd$.addReceiver(this.onAdChange),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.appTeardown)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "appTeardown", ()=>{
            this.removeEventListeners();
            this.hasPlayed = false;
            this.currentAd = null;
            this.pageData = this.originalPageData;
            this.environmentData = this.originalEnvironmentData;
            this.userData = this.originalUserData;
            this.chapterNumber = 0;
            this.videoData = null;
            console.log("[acc] Cleaned up adobe analytics");
        });
        // window variables need to be set before we load the SDK, so we load here
        (0, _defineProperty._)(this, "loadEnsightenScript", async ()=>{
            try {
                if (!this.libraryLoaded) // if (Store.useProdConfig) {
                // always load prod sdk - staging sdk throws errors and doesn't send some events...
                await require("334e776b1a6aea1b");
                this.libraryLoaded = true;
            } catch (err) {
                console.error("[acc] error loading adobe sdk", err);
            }
        });
        (0, _defineProperty._)(this, "onChannelDataReceived", async (data)=>{
            if (!data) return;
            if (!(0, _sbsStore.Store).appIsRunning) return; // in case we teardown while script is loading
            this.userData = {
                userInfo: {
                    userID: (0, _sbsStore.Store).memberId || "<empty>",
                    loggedIn: true
                }
            };
            this.pageData = (0, _objectSpreadProps._)((0, _objectSpread._)({}, this.pageData), {
                category: (0, _objectSpreadProps._)((0, _objectSpread._)({}, this.pageData.category), {
                    siteSubSection1: "video",
                    siteSubSection2: data.mpxMediaId
                }),
                pageInfo: (0, _objectSpreadProps._)((0, _objectSpread._)({}, this.pageData.pageInfo), {
                    pageName: `s:ondemand:ctv:video:${data.mpxMediaId}`,
                    previousPageName: "s:ondemand:ctv:MLELanding"
                })
            });
            this.updateWindowStaticProperties();
            const videoItem = data.videoItem;
            if (videoItem === null || videoItem === void 0 ? void 0 : videoItem.name) {
                var _videoItem_pilat, _videoItem_partOfSeries, _taxonomy_channel, _videoItem_displayTitles_episodePromotion, _videoItem_displayTitles, _videoItem_inLanguage, _taxonomy_genre, _taxonomy_subGenre, _taxonomy_collection, _taxonomy_theme, _taxonomy_tone;
                const videoId = videoItem.id.substring(videoItem.id.lastIndexOf("/") + 1);
                let pilatId = "0";
                if (typeof videoItem.pilat === "string") pilatId = pilatId.substring(pilatId.lastIndexOf("/") + 1);
                else if ((_videoItem_pilat = videoItem.pilat) === null || _videoItem_pilat === void 0 ? void 0 : _videoItem_pilat.id) pilatId = videoItem.pilat.id;
                const taxonomy = (0, _objectSpread._)({
                    genre: [],
                    subGenre: [],
                    collection: [],
                    theme: [],
                    tone: []
                }, videoItem.taxonomy);
                const videoType = taxonomy.useType || videoItem.type || "";
                let ccEnabled = "off";
                var _videoItem_partOfSeries_name;
                this.videoData = {
                    videoInfo: {
                        videoName: videoItem.name,
                        mpxID: videoId,
                        pilatID: pilatId,
                        duration: videoItem.duration || null,
                        player: this.originalEnvironmentData.platform.playerName,
                        mediaPart: `${this.chapterNumber}.0`,
                        subtitle: ccEnabled,
                        streamType: "live"
                    },
                    attribute: {
                        contentType: `video:${videoType.toLowerCase()}`,
                        programName: (_videoItem_partOfSeries_name = (_videoItem_partOfSeries = videoItem.partOfSeries) === null || _videoItem_partOfSeries === void 0 ? void 0 : _videoItem_partOfSeries.name) !== null && _videoItem_partOfSeries_name !== void 0 ? _videoItem_partOfSeries_name : videoItem.name,
                        channel: ((_taxonomy_channel = taxonomy.channel) === null || _taxonomy_channel === void 0 ? void 0 : _taxonomy_channel[0].name) || "",
                        episodeNumber: videoItem.episodeNumber || "",
                        episodeTitle: (videoItem === null || videoItem === void 0 ? void 0 : (_videoItem_displayTitles = videoItem.displayTitles) === null || _videoItem_displayTitles === void 0 ? void 0 : (_videoItem_displayTitles_episodePromotion = _videoItem_displayTitles.episodePromotion) === null || _videoItem_displayTitles_episodePromotion === void 0 ? void 0 : _videoItem_displayTitles_episodePromotion.title) || "",
                        seasonNumber: videoItem.partOfSeason ? videoItem.partOfSeason.seasonNumber : "",
                        language: ((_videoItem_inLanguage = videoItem.inLanguage) === null || _videoItem_inLanguage === void 0 ? void 0 : _videoItem_inLanguage.map((lang)=>lang.name)) || [],
                        countryOfOrigin: videoItem.country ? videoItem.country.name : "",
                        classification: videoItem.contentRating || "",
                        awardNomination: "",
                        genre: ((_taxonomy_genre = taxonomy.genre) === null || _taxonomy_genre === void 0 ? void 0 : _taxonomy_genre.map((val)=>val.name)) || [],
                        subGenre: ((_taxonomy_subGenre = taxonomy.subGenre) === null || _taxonomy_subGenre === void 0 ? void 0 : _taxonomy_subGenre.map((val)=>val.name)) || [],
                        collection: ((_taxonomy_collection = taxonomy.collection) === null || _taxonomy_collection === void 0 ? void 0 : _taxonomy_collection.map((val)=>val.name)) || [],
                        category: "",
                        theme: ((_taxonomy_theme = taxonomy.theme) === null || _taxonomy_theme === void 0 ? void 0 : _taxonomy_theme.map((val)=>val.name)) || [],
                        tone: ((_taxonomy_tone = taxonomy.tone) === null || _taxonomy_tone === void 0 ? void 0 : _taxonomy_tone.map((val)=>val.name)) || [],
                        keywords: "",
                        subject: ""
                    }
                };
                this.addEvent("videoMilestone", "videoLoaded", {
                    environment: this.environmentData,
                    user: this.userData,
                    page: this.pageData,
                    video: this.videoData
                });
            }
        });
        (0, _defineProperty._)(this, "addEvent", (eventName, action, additionalInfo)=>{
            var _additionalInfo_video;
            if (additionalInfo === null || additionalInfo === void 0 ? void 0 : (_additionalInfo_video = additionalInfo.video) === null || _additionalInfo_video === void 0 ? void 0 : _additionalInfo_video.videoInfo) additionalInfo.video.videoInfo.mediaPart = `${this.chapterNumber}.0`;
            const newEvent = {
                additionalInfo,
                event: eventName,
                eventAttribute: {
                    action
                }
            };
            if (Array.isArray(window.digitalData.events)) {
                window.digitalData.events.push(newEvent);
                console.log("[acc] Adobe pushed new event", eventName, action);
            }
        });
        (0, _defineProperty._)(this, "updateWindowStaticProperties", ()=>{
            var _window_digitalData;
            window.digitalData = {
                events: ((_window_digitalData = window.digitalData) === null || _window_digitalData === void 0 ? void 0 : _window_digitalData.events) || [],
                page: this.pageData,
                user: this.userData,
                environment: this.environmentData,
                version: "1.0",
                sbsVersion: {
                    variant: "ODCTV",
                    version: "1.0",
                    dataLayerLibrary: AppVersion
                }
            };
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (playerState)=>{
            if (playerState === (0, _utils.PlayerStates).Playing && !this.hasPlayed) {
                this.addEvent("videoMilestone", "videoStart", {
                    page: this.pageData,
                    user: this.userData,
                    environment: this.environmentData,
                    video: this.videoData
                });
                this.hasPlayed = true;
            }
        });
        (0, _defineProperty._)(this, "buildAdEvent", (ad)=>({
                adInfo: {
                    adId: ad.adId,
                    adTitle: ad.title || "",
                    creativeDurationInSeconds: ad.duration || -1,
                    creativeId: ad.creativeAdId || ""
                }
            }));
        (0, _defineProperty._)(this, "onAdChange", (ad)=>{
            const prevAd = this.currentAd;
            this.currentAd = ad;
            console.log("Adobe ad change", ad);
            if (prevAd) {
                const prevAdEvent = this.buildAdEvent(prevAd);
                this.addEvent("adEvents", "adCompleted", {
                    page: this.pageData,
                    user: this.userData,
                    video: this.videoData,
                    environment: this.environmentData,
                    ad: prevAdEvent
                });
            }
            if (this.currentAd) {
                const newAdEvent = this.buildAdEvent(this.currentAd);
                this.addEvent("adEvents", "adStarted", {
                    page: this.pageData,
                    user: this.userData,
                    video: this.videoData,
                    environment: this.environmentData,
                    ad: newAdEvent
                });
            }
            if (prevAd && !this.currentAd) {
                // Ad break end
                this.chapterNumber += 1;
                this.addEvent("videoMilestone", "videoChapterStarted", {
                    user: this.userData,
                    page: this.pageData,
                    environment: this.environmentData,
                    video: this.videoData
                });
            }
        });
        this.prepareWindowOnInit();
        this.loadEnsightenScript();
    }
}
exports.default = new AdobeAnalytics();

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/sbs-store":"iioOr","../helpers/utils":"bowyB","../helpers/Messengers":"3yiy2","334e776b1a6aea1b":"cC5IO","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"cC5IO":[function(require,module,exports) {
module.exports = require("a55473ba744f393")(require("bc1067db411dbe22").getBundleURL("7rRFy") + "lib/ensighten-sdk-prod.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("bb8MD"));

},{"a55473ba744f393":"ji2nZ","bc1067db411dbe22":"1ulQJ"}],"652Xv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _messengers = require("../helpers/Messengers");
var _sbsStore = require("../helpers/sbs-store");
var _utils = require("../helpers/utils");
const AppVersion = (0, _sbsStore.Store).appVersion;
const ConvivaPlayerName = `ctv.foxtellinear.v0`;
const convivaProdConstants = {
    key: "b800410803a4659ffcd7b9b6577a907110b7aa21",
    gatewayUrl: "https://cws.conviva.com",
    debug: false
};
const convivaStageConstants = {
    key: "d793177943f56c9e4795b0ba62b873c61132016f",
    gatewayUrl: "https://sbs-test1.testonly.conviva.com",
    debug: true
};
const convivaConstants = (0, _sbsStore.Store).useProdConfig ? convivaProdConstants : convivaStageConstants;
class ConvivaBridge {
    constructor(){
        (0, _defineProperty._)(this, "conviva", null);
        (0, _defineProperty._)(this, "videoAnalytics", null);
        (0, _defineProperty._)(this, "clientSettings", {});
        (0, _defineProperty._)(this, "currentAd", null);
        (0, _defineProperty._)(this, "adBreakCounter", 0);
        (0, _defineProperty._)(this, "streamProviderIsGoogleDAI", false);
        (0, _defineProperty._)(this, "contentTags", {});
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "init", async ()=>{
            if (!this.conviva) {
                try {
                    window.Conviva = await require("a78d3a36b7b25bf1");
                } catch (e) {
                    console.error("[acc] could not import conviva", e);
                }
                if (!(0, _sbsStore.Store).appIsRunning) return; // in case we teardown while script is loading
                if (window.Conviva) this.conviva = window.Conviva;
                else {
                    console.warn("[acc] No Conviva on window");
                    return;
                }
                this.clientSettings = new this.conviva.ClientSettings(convivaConstants.key);
                this.clientSettings.gatewayUrl = convivaConstants.gatewayUrl;
            // clientSettings.logLevel = 0;
            }
            this.conviva.Analytics.init(convivaConstants.key, null, this.clientSettings);
            this.videoAnalytics = this.conviva.Analytics.buildVideoAnalytics();
            // Set Device Metadata - should be called after Conviva.Analytics.init
            const deviceMetadata = {};
            deviceMetadata[Conviva.Constants.DeviceMetadata.BRAND] = "Foxtel";
            deviceMetadata[Conviva.Constants.DeviceMetadata.MANUFACTURER] = "Foxtel";
            deviceMetadata[Conviva.Constants.DeviceMetadata.MODEL] = (0, _sbsStore.Store).deviceModel;
            deviceMetadata[Conviva.Constants.DeviceMetadata.TYPE] = Conviva.Client.DeviceType.SETTOP;
            deviceMetadata[Conviva.Constants.DeviceMetadata.VERSION] = "n/a";
            deviceMetadata[Conviva.Constants.DeviceMetadata.OS_NAME] = "LINUX"; // Recommended by conviva
            deviceMetadata[Conviva.Constants.DeviceMetadata.OS_VERSION] = (0, _sbsStore.Store).deviceFirmwareVersion;
            deviceMetadata[Conviva.Constants.DeviceMetadata.CATEGORY] = Conviva.Client.DeviceCategory.SET_TOP_BOX;
            deviceMetadata[Conviva.Constants.DeviceMetadata.SCREEN_RESOLUTION_WIDTH] = 1920;
            deviceMetadata[Conviva.Constants.DeviceMetadata.SCREEN_RESOLUTION_HEIGHT] = 1080;
            deviceMetadata[Conviva.Constants.DeviceMetadata.SCREEN_RESOLUTION_SCALE_FACTOR] = 1;
            this.conviva.Analytics.setDeviceMetadata(deviceMetadata);
            this.removeEventListeners(); // in case monitoringTeardown isn't called
            this.addEventListeners();
        });
        (0, _defineProperty._)(this, "addEventListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).streamReady$.addReceiver(this.onChannelDataReceived, true),
                (0, _messengers.Messengers).googleDaiResponse$.addReceiver(this.onDaiDataReceived, true),
                (0, _messengers.Messengers).programChange$.addReceiver(this.onProgramChange),
                (0, _messengers.Messengers).bitrateChange$.addReceiver(this.onBitrateChange, true),
                (0, _messengers.Messengers).currentAd$.addReceiver(this.onAdChange),
                (0, _messengers.Messengers).playerState$.addReceiver(this.onPlayerStateChange),
                (0, _messengers.Messengers).playerError$.addReceiver(this.onPlayerError),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onTeardown)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "onTeardown", ()=>{
            var _this_conviva_Analytics, _this_conviva;
            this.removeEventListeners();
            this.currentAd = null;
            this.adBreakCounter = 0;
            this.contentTags = {};
            (_this_conviva = this.conviva) === null || _this_conviva === void 0 ? void 0 : (_this_conviva_Analytics = _this_conviva.Analytics) === null || _this_conviva_Analytics === void 0 ? void 0 : _this_conviva_Analytics.release();
        });
        (0, _defineProperty._)(this, "onChannelDataReceived", (channelData)=>{
            var _program_genres, _this_videoAnalytics, _this_videoAnalytics1, // https://pulse.conviva.com/learning-center/content/sensor_developer_center/sensor_integration/javascript/javascript_stream_sensor.htm?Highlight=ENCODED_FRAMERATE#5HandleUserActions
            _this_conviva_Analytics;
            if (!channelData || !this.conviva) return;
            const { chosenProvider: chosenStreamProvider, conviva: channelConviva, programData } = channelData;
            const program = (programData === null || programData === void 0 ? void 0 : programData.program) || {};
            this.streamProviderIsGoogleDAI = chosenStreamProvider.type === "GoogleDAIProvider";
            // Stream URL for DAI Provider will be updated in onDaiDataReceived 
            const streamUrl = this.streamProviderIsGoogleDAI ? "" : chosenStreamProvider.contentUrl;
            var _program_seasonNumber, _program_episodeNumber;
            this.contentTags = {
                [this.conviva.Constants.STREAM_URL]: streamUrl || "N/A",
                [this.conviva.Constants.ASSET_NAME]: channelConviva.assetName || "N/A",
                [this.conviva.Constants.IS_LIVE]: this.conviva.Constants.StreamType.LIVE,
                [this.conviva.Constants.PLAYER_NAME]: ConvivaPlayerName,
                [this.conviva.Constants.APPLICATION_VERSION]: AppVersion,
                [this.conviva.Constants.VIEWER_ID]: channelConviva.viewerId || "N/A",
                [this.conviva.Constants.DEFAULT_RESOURCE]: channelConviva.cdn || "N/A",
                [this.conviva.Constants.FRAMEWORK_NAME]: "Google IMA",
                [this.conviva.Constants.FRAMEWORK_VERSION]: "NA",
                [this.conviva.Constants.ENCODED_FRAMERATE]: 25,
                streamUrl: streamUrl,
                assetName: channelConviva.assetName,
                "c3.cm.id": channelConviva.contentId,
                isLive: "true",
                contentType: "Live-Linear",
                playerName: ConvivaPlayerName,
                "c3.app.version": AppVersion,
                viewerId: channelConviva.viewerId,
                contentLength: channelConviva.streamDuration || "N/A",
                "c3.cm.channel": channelConviva.channel,
                "c3.cm.contentType": "Live-Linear",
                "c3.cm.categoryType": channelConviva.category || "N/A",
                "c3.cm.seriesName": program.seriesTitle || channelConviva.show,
                "c3.cm.seasonNumber": String((_program_seasonNumber = program.seasonNumber) !== null && _program_seasonNumber !== void 0 ? _program_seasonNumber : channelConviva.season),
                "c3.cm.showTitle": program.title || channelConviva.episodeName || channelConviva.show,
                "c3.cm.episodeNumber": String((_program_episodeNumber = program.episodeNumber) !== null && _program_episodeNumber !== void 0 ? _program_episodeNumber : channelConviva.episodeNumber),
                "c3.cm.genre": ((_program_genres = program.genres) === null || _program_genres === void 0 ? void 0 : _program_genres[0]) || channelConviva.genre || "N/A",
                "c3.cm.genreList": channelConviva.subGenre,
                cdn: channelConviva.cdn || "N/A",
                googleDaiStreamId: this.streamProviderIsGoogleDAI && chosenStreamProvider.videoId || ""
            };
            (_this_videoAnalytics = this.videoAnalytics) === null || _this_videoAnalytics === void 0 ? void 0 : _this_videoAnalytics.setContentInfo(this.contentTags);
            (_this_videoAnalytics1 = this.videoAnalytics) === null || _this_videoAnalytics1 === void 0 ? void 0 : _this_videoAnalytics1.reportPlaybackRequested(this.contentTags);
            (_this_conviva_Analytics = this.conviva.Analytics) === null || _this_conviva_Analytics === void 0 ? void 0 : _this_conviva_Analytics.reportDeviceMetric(this.conviva.Constants.Network.CONNECTION_TYPE, (0, _sbsStore.Store).deviceNetworkConnection === (0, _utils.NetworkConnectionType).WIFI ? "WiFi" : "Ethernet");
        });
        (0, _defineProperty._)(this, "onDaiDataReceived", (daiResponse)=>{
            var _this_videoAnalytics;
            if (!daiResponse || !this.conviva) return;
            // Update streamUrl with the manifest url
            this.contentTags[this.conviva.Constants.STREAM_URL] = daiResponse.stream_manifest || "N/A";
            (_this_videoAnalytics = this.videoAnalytics) === null || _this_videoAnalytics === void 0 ? void 0 : _this_videoAnalytics.setContentInfo(this.contentTags);
        });
        (0, _defineProperty._)(this, "onProgramChange", (programData)=>{
            var _program_genres, _this_videoAnalytics;
            if (!programData) return;
            const program = (programData === null || programData === void 0 ? void 0 : programData.program) || {};
            console.log("[acc] Conviva program changed to", program === null || program === void 0 ? void 0 : program.seriesTitle);
            const { start, end } = (programData === null || programData === void 0 ? void 0 : programData.availability) || {};
            const durationInMs = new Date(end).getTime() - new Date(start).getTime();
            if (durationInMs > 0) {
                // Update with program duration (in seconds)
                const durationInSec = ~~(durationInMs / 1000);
                this.contentTags[this.conviva.Constants.DURATION] = durationInSec;
            }
            this.contentTags["c3.cm.seriesName"] = program.seriesTitle;
            var _program_seasonNumber;
            this.contentTags["c3.cm.seasonNumber"] = String((_program_seasonNumber = program.seasonNumber) !== null && _program_seasonNumber !== void 0 ? _program_seasonNumber : "");
            this.contentTags["c3.cm.showTitle"] = program.title;
            var _program_episodeNumber;
            this.contentTags["c3.cm.episodeNumber"] = String((_program_episodeNumber = program.episodeNumber) !== null && _program_episodeNumber !== void 0 ? _program_episodeNumber : "");
            this.contentTags["c3.cm.genre"] = ((_program_genres = program.genres) === null || _program_genres === void 0 ? void 0 : _program_genres[0]) || "N/A";
            (_this_videoAnalytics = this.videoAnalytics) === null || _this_videoAnalytics === void 0 ? void 0 : _this_videoAnalytics.setContentInfo(this.contentTags);
        });
        (0, _defineProperty._)(this, "onBitrateChange", (bitrateBps, framerate)=>{
            /*
            For this event we only have these available data:
                Event Payload:
                    sessionId
                    time
                    bitRate
                    description
                    width
                    height
                    framerate
                    position
                    cappedProfile
                    displayWidth
                    displayHeight
                Documentation info from - https://code.rdkcentral.com/r/plugins/gitiles/rdk/components/generic/aamp/+/refs/heads/stable2/AAMP-UVE-API.md#universal-video-engine-uve-events-bitratechanged
        */ if (bitrateBps) {
                var _this_conviva, _this_videoAnalytics;
                console.log("[acc] bitrate change in conviva", bitrateBps);
                (_this_videoAnalytics = this.videoAnalytics) === null || _this_videoAnalytics === void 0 ? void 0 : _this_videoAnalytics.reportPlaybackMetric((_this_conviva = this.conviva) === null || _this_conviva === void 0 ? void 0 : _this_conviva.Constants.Playback.BITRATE, bitrateBps / 1000);
            }
            if (framerate) {
                var _this_conviva1, _this_videoAnalytics1;
                console.log("[acc] report framerate (RENDERED_FRAMERATE) to conviva", framerate);
                (_this_videoAnalytics1 = this.videoAnalytics) === null || _this_videoAnalytics1 === void 0 ? void 0 : _this_videoAnalytics1.reportPlaybackMetric((_this_conviva1 = this.conviva) === null || _this_conviva1 === void 0 ? void 0 : _this_conviva1.Constants.Playback.RENDERED_FRAMERATE, framerate);
            }
        });
        (0, _defineProperty._)(this, "onAdChange", (ad)=>{
            const prevAd = this.currentAd;
            this.currentAd = ad;
            if (!this.conviva) return;
            if (!prevAd && this.currentAd) {
                var _this_videoAnalytics;
                // AD break start
                const adType = this.conviva.Constants.AdType.SERVER_SIDE;
                const adAttributes = {};
                this.adBreakCounter += 1;
                // values only show up in touchstone if they are strings
                adAttributes.podPosition = this.conviva.Constants.AdPosition.MIDROLL;
                adAttributes.podIndex = this.adBreakCounter.toString();
                adAttributes.absoluteIndex = "-1";
                adAttributes["c3.ad.system"] = "NA";
                adAttributes["c3.ad.adStitcher"] = this.streamProviderIsGoogleDAI ? "Google DAI" : "";
                adAttributes["c3.ad.technology"] = "Server Side";
                if (ad) {
                    adAttributes.podDuration = String(ad.adBreakDuration || -1);
                    adAttributes["c3.ad.id"] = String(ad.adBreakId || "empty");
                    adAttributes["c3.ad.position"] = "Mid-roll";
                    adAttributes["c3.ad.isSlate"] = String(!!ad.isSlate);
                    adAttributes["c3.ad.firstAdSystem"] = "NA";
                    adAttributes["c3.ad.firstAdId"] = "NA";
                    adAttributes["c3.ad.firstCreativeId"] = "NA";
                }
                (_this_videoAnalytics = this.videoAnalytics) === null || _this_videoAnalytics === void 0 ? void 0 : _this_videoAnalytics.reportAdBreakStarted(adType, this.conviva.Constants.AdPlayer.CONTENT, adAttributes);
            } else if (prevAd && !this.currentAd) {
                var _this_videoAnalytics1, _this_videoAnalytics2;
                (_this_videoAnalytics1 = this.videoAnalytics) === null || _this_videoAnalytics1 === void 0 ? void 0 : _this_videoAnalytics1.reportAdBreakEnded();
                (_this_videoAnalytics2 = this.videoAnalytics) === null || _this_videoAnalytics2 === void 0 ? void 0 : _this_videoAnalytics2.reportPlaybackMetric(this.conviva.Constants.Playback.PLAYER_STATE, this.conviva.Constants.PlayerState.PLAYING);
            }
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (state)=>{
            if (!this.currentAd) switch(state){
                case (0, _utils.PlayerStates).Buffering:
                    var _this_conviva, _this_conviva1, _this_videoAnalytics;
                    (_this_videoAnalytics = this.videoAnalytics) === null || _this_videoAnalytics === void 0 ? void 0 : _this_videoAnalytics.reportPlaybackMetric((_this_conviva = this.conviva) === null || _this_conviva === void 0 ? void 0 : _this_conviva.Constants.Playback.PLAYER_STATE, (_this_conviva1 = this.conviva) === null || _this_conviva1 === void 0 ? void 0 : _this_conviva1.Constants.PlayerState.BUFFERING);
                    break;
                case (0, _utils.PlayerStates).Stopped:
                case (0, _utils.PlayerStates).Ended:
                    var _this_conviva2, _this_conviva3, _this_videoAnalytics1;
                    (_this_videoAnalytics1 = this.videoAnalytics) === null || _this_videoAnalytics1 === void 0 ? void 0 : _this_videoAnalytics1.reportPlaybackMetric((_this_conviva2 = this.conviva) === null || _this_conviva2 === void 0 ? void 0 : _this_conviva2.Constants.Playback.PLAYER_STATE, (_this_conviva3 = this.conviva) === null || _this_conviva3 === void 0 ? void 0 : _this_conviva3.Constants.PlayerState.STOPPED);
                    break;
                case (0, _utils.PlayerStates).Paused:
                    var _this_conviva4, _this_conviva5, _this_videoAnalytics2;
                    (_this_videoAnalytics2 = this.videoAnalytics) === null || _this_videoAnalytics2 === void 0 ? void 0 : _this_videoAnalytics2.reportPlaybackMetric((_this_conviva4 = this.conviva) === null || _this_conviva4 === void 0 ? void 0 : _this_conviva4.Constants.Playback.PLAYER_STATE, (_this_conviva5 = this.conviva) === null || _this_conviva5 === void 0 ? void 0 : _this_conviva5.Constants.PlayerState.PAUSED);
                    break;
                case (0, _utils.PlayerStates).Playing:
                    var _this_conviva6, _this_conviva7, _this_videoAnalytics3;
                    (_this_videoAnalytics3 = this.videoAnalytics) === null || _this_videoAnalytics3 === void 0 ? void 0 : _this_videoAnalytics3.reportPlaybackMetric((_this_conviva6 = this.conviva) === null || _this_conviva6 === void 0 ? void 0 : _this_conviva6.Constants.Playback.PLAYER_STATE, (_this_conviva7 = this.conviva) === null || _this_conviva7 === void 0 ? void 0 : _this_conviva7.Constants.PlayerState.PLAYING);
                    break;
            }
        });
        (0, _defineProperty._)(this, "onPlayerError", (errorData)=>{
            try {
                var _this_conviva, _this_videoAnalytics, _this_videoAnalytics1;
                // always seems to be fatal with this AAMP event
                const isFatal = true;
                const errorMessage = errorData === null || errorData === void 0 ? void 0 : errorData.message;
                (_this_videoAnalytics = this.videoAnalytics) === null || _this_videoAnalytics === void 0 ? void 0 : _this_videoAnalytics.reportPlaybackError(errorMessage, (_this_conviva = this.conviva) === null || _this_conviva === void 0 ? void 0 : _this_conviva.Constants.ErrorSeverity[isFatal ? "FATAL" : "WARNING"]);
                (_this_videoAnalytics1 = this.videoAnalytics) === null || _this_videoAnalytics1 === void 0 ? void 0 : _this_videoAnalytics1.reportPlaybackFailed(`Code ${errorData === null || errorData === void 0 ? void 0 : errorData.code} ${errorMessage}`);
            } catch (err) {
                console.error(err);
            }
        });
    }
}
exports.default = new ConvivaBridge();

},{"@swc/helpers/_/_define_property":"9kWBJ","../helpers/Messengers":"3yiy2","../helpers/sbs-store":"iioOr","../helpers/utils":"bowyB","a78d3a36b7b25bf1":"cvgvI","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"cvgvI":[function(require,module,exports) {
module.exports = require("cc580367c397b206")(require("8ce28432072adc87").getBundleURL("7rRFy") + "lib/conviva.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("aZ3yp"));

},{"cc580367c397b206":"ji2nZ","8ce28432072adc87":"1ulQJ"}],"2D8Pe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _messengers = require("../helpers/Messengers");
class LiveGoogleDai {
    constructor(){
        (0, _defineProperty._)(this, "currentAd", null);
        (0, _defineProperty._)(this, "currentTime", -1);
        (0, _defineProperty._)(this, "adPollInterval", null);
        (0, _defineProperty._)(this, "currentLiveAdBreakData", null);
        (0, _defineProperty._)(this, "trackingUrl", "");
        (0, _defineProperty._)(this, "futureStreamEvents", []);
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "init", ()=>{
            this.removeListeners(); // remove in case monitoringTeardown isn't called
            this.addListeners();
        });
        (0, _defineProperty._)(this, "addListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).timeUpdate$.addReceiver(this.onTimeUpdate),
                (0, _messengers.Messengers).googleDaiResponse$.addReceiver(this.onDaiResponseUpdated, true),
                (0, _messengers.Messengers).id3Metadata$.addReceiver(this.onID3TagDataReceived),
                (0, _messengers.Messengers).timedMetadata$.addReceiver(this.onTimedMetadataEvent),
                (0, _messengers.Messengers).currentAd$.addReceiver(this.onAdChange),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onAppTeardown)
            ];
        });
        (0, _defineProperty._)(this, "removeListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            if (this.adPollInterval) clearInterval(this.adPollInterval);
            this.removeListeners();
        });
        (0, _defineProperty._)(this, "onAdChange", (ad)=>{
            if (ad) console.log(`[acc] ad change - ${ad.isSlate ? "slate" : ad.positionInBreak}/${ad.totalInBreak} (${ad.duration}s)`);
            else console.log(`[acc] ad break over`);
            this.currentAd = ad;
        });
        (0, _defineProperty._)(this, "sendTrackingEvent", (id)=>{
            if (this.trackingUrl && id) fetch(`${this.trackingUrl}${id}`).catch();
        });
        (0, _defineProperty._)(this, "checkForLiveAd", ()=>{
            this.futureStreamEvents.sort((ev1, ev2)=>ev1.timestamp - ev2.timestamp);
            let nextTag = this.futureStreamEvents[0];
            while((nextTag === null || nextTag === void 0 ? void 0 : nextTag.timestamp) < this.currentTime){
                this.futureStreamEvents.shift();
                if (nextTag.type === "id3Tag") {
                    const googleData = this.matchTagToAd(nextTag);
                    if (googleData) {
                        const { trackingEvent, ad } = googleData;
                        if (trackingEvent) // console.log(
                        //     "[acc] ad tracking event",
                        //     trackingEvent.name
                        // );
                        this.sendTrackingEvent(trackingEvent.trackingId);
                        if (ad && !this.areTheseTheSameAd(this.currentAd, ad)) (0, _messengers.Messengers).currentAd$.send(ad);
                    } else if (this.currentAd) // content id3 tag so we assume this wont happen in ad breaks and can
                    // exit ad break. Alternative way is to rely on CUE-IN tag (below)
                    (0, _messengers.Messengers).currentAd$.send(null);
                } else if (nextTag.type === "cueIn") {
                    if (this.currentAd) // may not have content id3 tags so may need to rely on CUE-IN
                    // tag in manifest
                    (0, _messengers.Messengers).currentAd$.send(null);
                }
                nextTag = this.futureStreamEvents[0];
            }
        });
        (0, _defineProperty._)(this, "onTimeUpdate", (time)=>{
            this.currentTime = time;
            this.checkForLiveAd();
        });
        (0, _defineProperty._)(this, "areTheseTheSameAd", (ad1, ad2)=>{
            if (!ad1 && !ad2) return true;
            if (!ad1 || !ad2) return false;
            return ad1.adBreakId === ad2.adBreakId && ad1.positionInBreak === ad2.positionInBreak;
        });
        (0, _defineProperty._)(this, "matchTagToAd", ({ rawTag, tagTimestamp })=>{
            const googleIdx = rawTag.indexOf("google");
            if (googleIdx > -1 && this.currentLiveAdBreakData) {
                const googleTag = rawTag.slice(googleIdx);
                const matchingKey = Object.keys(this.currentLiveAdBreakData.tags).find((key)=>googleTag.startsWith(key));
                if (matchingKey) {
                    var _this_currentLiveAdBreakData_tags_matchingKey;
                    const adKey = (_this_currentLiveAdBreakData_tags_matchingKey = this.currentLiveAdBreakData.tags[matchingKey]) === null || _this_currentLiveAdBreakData_tags_matchingKey === void 0 ? void 0 : _this_currentLiveAdBreakData_tags_matchingKey.ad;
                    if (adKey && this.currentLiveAdBreakData.ads[adKey]) {
                        const matchingAd = this.currentLiveAdBreakData.ads[adKey];
                        const matchingAdBreak = this.currentLiveAdBreakData.ad_breaks[matchingAd.ad_break_id];
                        const formattedAd = {
                            adId: matchingAd.ad_id || "",
                            adBreakId: matchingAd.ad_break_id,
                            positionInBreak: matchingAd.position,
                            duration: matchingAd.duration,
                            totalInBreak: matchingAdBreak.ads,
                            adBreakDuration: matchingAdBreak.expected_duration,
                            title: matchingAd.slate ? "Slate ad" : matchingAd.title,
                            isSlate: matchingAd.slate,
                            creativeAdId: matchingAd.creative_ad_id
                        };
                        const tagType = this.currentLiveAdBreakData.tags[matchingKey].type;
                        let trackingEvent;
                        if (tagType !== "progress") trackingEvent = {
                            time: tagTimestamp,
                            trackingId: googleTag,
                            name: tagType
                        };
                        return {
                            ad: formattedAd,
                            trackingEvent
                        };
                    }
                }
            }
        });
        (0, _defineProperty._)(this, "onID3TagDataReceived", (aampId3Data)=>{
            const { presentationTime, timeScale, data } = aampId3Data.detail;
            const id3TagTime = presentationTime / timeScale;
            let rawTag = "";
            data.forEach((charCode)=>{
                const char = String.fromCharCode(charCode);
                rawTag += char;
            });
            const id3Data = {
                rawTag,
                timestamp: id3TagTime,
                type: "id3Tag"
            };
            this.futureStreamEvents.push(id3Data);
            this.checkForLiveAd();
        });
        (0, _defineProperty._)(this, "onTimedMetadataEvent", (aampTimedMetadataEvent)=>{
            var _aampTimedMetadataEvent_detail_timedMetadata, _aampTimedMetadataEvent_detail;
            if (!(aampTimedMetadataEvent === null || aampTimedMetadataEvent === void 0 ? void 0 : (_aampTimedMetadataEvent_detail = aampTimedMetadataEvent.detail) === null || _aampTimedMetadataEvent_detail === void 0 ? void 0 : (_aampTimedMetadataEvent_detail_timedMetadata = _aampTimedMetadataEvent_detail.timedMetadata) === null || _aampTimedMetadataEvent_detail_timedMetadata === void 0 ? void 0 : _aampTimedMetadataEvent_detail_timedMetadata.name)) return;
            const { detail: { timedMetadata: { time: timestampMs, content, name } } } = aampTimedMetadataEvent;
            // only do ad break end cue in events
            // We may not get 'complete' tracking events (on slate) or content ID3 tags
            // so this is the only other way we gather whether an ad break is done
            // For ad break start we can rely on presence of google ID3 tags
            if (name === "#EXT-X-CUE" && content === "IN" || name === "#EXT-X-CUE-IN") this.futureStreamEvents.push({
                timestamp: timestampMs / 1000,
                type: "cueIn"
            });
        });
        (0, _defineProperty._)(this, "checkServerAds", (pollUrl)=>{
            fetch(pollUrl).then((res)=>res.json()).then((res)=>{
                this.currentLiveAdBreakData = res;
                this.checkForLiveAd();
            }).catch((err)=>{
                console.error("Error on google dai ad poll check", err);
            });
        });
        (0, _defineProperty._)(this, "onDaiResponseUpdated", (daiResponse)=>{
            if (!daiResponse) return;
            this.trackingUrl = daiResponse.media_verification_url;
            if (this.adPollInterval) clearInterval(this.adPollInterval);
            this.checkServerAds(daiResponse.metadata_url);
            this.adPollInterval = window.setInterval(()=>this.checkServerAds(daiResponse.metadata_url), (daiResponse.polling_frequency || 10) * 1000);
        });
    }
}
exports.default = new LiveGoogleDai();

},{"@swc/helpers/_/_define_property":"9kWBJ","../helpers/Messengers":"3yiy2","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9cpbv":[function(require,module,exports) {
var _sbsApi = require("./sbs-api");
var _messengers = require("../helpers/Messengers");
let programCheckTimeout = null;
let currentProgramData = null;
let currentMpxID = null;
const DEFAULT_PROGRAM_POLL_MS = 60000;
const getTimeTillProgramEndMs = (programData)=>{
    try {
        let remainingTimeSeconds = -1;
        const { start, end } = programData.availability || {};
        const nowMs = Date.now();
        const startRemainingSeconds = Math.round((new Date(start).getTime() - nowMs) / 1000) + 1;
        const endRemainingSeconds = Math.round((new Date(end).getTime() - nowMs) / 1000);
        if (startRemainingSeconds >= 0 && (remainingTimeSeconds > startRemainingSeconds || remainingTimeSeconds === -1)) remainingTimeSeconds = startRemainingSeconds;
        if (endRemainingSeconds >= 0 && (remainingTimeSeconds > endRemainingSeconds || remainingTimeSeconds === -1)) remainingTimeSeconds = endRemainingSeconds;
        return remainingTimeSeconds > 0 ? remainingTimeSeconds * 1000 : remainingTimeSeconds;
    } catch (err) {
        console.warn("[acc] Could not parse program time, ", err);
        return -1;
    }
};
const checkProgramChangedAfterMs = (timeMs)=>{
    // add arbitrary 5 second to increase likelihood we're actually within next program bounds
    const checkTimeoutLengthMs = timeMs > 0 ? timeMs + 5000 : DEFAULT_PROGRAM_POLL_MS;
    console.log(`[acc] Will check for program change in ${timeMs / 1000} seconds`);
    if (programCheckTimeout) clearTimeout(programCheckTimeout);
    programCheckTimeout = window.setTimeout(async ()=>{
        try {
            const updatedProgramData = await (0, _sbsApi.getProgramInfo)(currentMpxID);
            if (updatedProgramData && updatedProgramData.program.id !== (currentProgramData === null || currentProgramData === void 0 ? void 0 : currentProgramData.program.id)) {
                currentProgramData = updatedProgramData;
                (0, _messengers.Messengers).programChange$.send(currentProgramData);
                checkProgramChangedAfterMs(getTimeTillProgramEndMs(currentProgramData));
            } else {
                console.log("[acc] program not changed or no program exists");
                checkProgramChangedAfterMs(DEFAULT_PROGRAM_POLL_MS);
            }
        } catch (err) {
            console.warn("[acc] Error polling program change", err);
            checkProgramChangedAfterMs(DEFAULT_PROGRAM_POLL_MS);
        }
    }, checkTimeoutLengthMs);
};
const onStreamReady = async (channel)=>{
    if (!channel) return;
    currentMpxID = channel.mpxMediaId;
    currentProgramData = channel.programData;
    const timeTillEndMs = getTimeTillProgramEndMs(currentProgramData);
    checkProgramChangedAfterMs(timeTillEndMs);
};
(0, _messengers.Messengers).streamReady$.addReceiver(onStreamReady);
(0, _messengers.Messengers).appTeardown$.addReceiver(()=>{
    if (programCheckTimeout) clearTimeout(programCheckTimeout);
});

},{"./sbs-api":"advKM","../helpers/Messengers":"3yiy2"}]},["acGu7"], null, "parcelRequire0a42")

//# sourceMappingURL=index.js.map
