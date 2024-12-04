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
})({"hToTX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "bebc91dccb5f5641";
module.bundle.HMR_BUNDLE_ID = "7ef964a4a049ef66";
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

},{}],"bqj8e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SevenProvider);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _sevenStore = require("./helpers/seven-store");
var _messengerLink = require("./helpers/MessengerLink");
var _messengers = require("./helpers/Messengers");
var _utils = require("./helpers/utils");
var _providerUtils = require("../provider-utils");
var _sevenApi = require("./seven-services/seven-api");
var _sevenAuth = require("./seven-services/seven-auth");
var _newRelicAnalytics = require("./analytics/NewRelicAnalytics");
var _newRelicAnalyticsDefault = parcelHelpers.interopDefault(_newRelicAnalytics);
var _snowplowBridge = require("./analytics/SnowplowBridge");
var _snowplowBridgeDefault = parcelHelpers.interopDefault(_snowplowBridge);
var _muxAnalytics = require("./analytics/MuxAnalytics");
var _muxAnalyticsDefault = parcelHelpers.interopDefault(_muxAnalytics);
class SevenProvider {
    /**
     * @typedef {import('../../app/get-asset').GetAssetRequest} GetAssetRequest
     * @typedef {import('../../app/get-asset').GetAssetResponse} GetAssetResponse
     */ /**
     * @param {GetAssetRequest} args requested asset and device information
     * @returns {GetAssetResponse} streams for the requested asset
     */ async getAsset({ authToken, glassAssetLocator, glassContentOptions, deviceInfo }) {
        var _this_config;
        const start = performance.now();
        let gracenoteId = getFileName(glassAssetLocator.pathname);
        const provider = glassAssetLocator.searchParams.get("provider");
        let providerId = glassAssetLocator.searchParams.get("providerid");
        const { glassConfigure: { brand: deviceBrand, osVersion: deviceOSVersion, model: deviceModel }, uuid: deviceId } = deviceInfo;
        const { connectionType: networkConnectionType } = glassContentOptions;
        try {
            const sevenAuthData = JSON.parse(atob(authToken));
            const { refresh_token } = sevenAuthData;
            if (!refresh_token) throw new Error();
            (0, _sevenStore.Store).Auth.refresh_token = refresh_token;
        } catch (e) {
            throw new (0, _providerUtils.MLEError)("Could not parse Seven auth data", (0, _providerUtils.ErrorTypes).GENERIC);
        }
        console.info("[acc] SEVEN received startup data", {
            glassAssetLocator,
            authToken,
            glassAssetLocatorParsed: {
                provider,
                providerId
            },
            glassContentOptions,
            deviceInfo
        });
        let channelId;
        try {
            const channelInfo = JSON.parse(providerId);
            if (!channelInfo.channelId) throw new Error();
            channelId = channelInfo.channelId;
        } catch (err) {
            throw new (0, _providerUtils.MLEError)("Could not parse Seven channelID", (0, _providerUtils.ErrorTypes).CHANNEL_MAP);
        }
        console.info(`[acc] Accedo version ${(0, _sevenStore.Store).appVersion}, parent app version ${deviceInfo.appVersion}, player version ${deviceInfo.playerVersion}`);
        (0, _sevenStore.Store).deviceId = deviceId;
        (0, _sevenStore.Store).deviceBrand = deviceBrand;
        (0, _sevenStore.Store).devicePlatform = "SoIP"; // hardcode till firebolt is sunsetted
        (0, _sevenStore.Store).deviceModel = "Xi1"; // hardcode till firebolt is sunsetted
        (0, _sevenStore.Store).deviceFirmwareVersion = deviceOSVersion;
        (0, _sevenStore.Store).appIsRunning = true;
        if (networkConnectionType.toLowerCase() === "ethernet") (0, _sevenStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).LAN;
        else if (networkConnectionType.toLowerCase() === "wifi") (0, _sevenStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).WIFI;
        // Expect subpromises to throw their own MLEErrors
        await (0, _sevenApi.getAndStoreConfig)();
        await Promise.all([
            (0, _sevenApi.getAndStoreRegion)(),
            (0, _sevenAuth.tryPerformTokenRefresh)()
        ]);
        await (0, _sevenAuth.getAndStoreUserInfo)();
        const sourceInfo = await (0, _sevenApi.getSevenPlaybackData)(channelId);
        console.log(`[acc] passing back url ${sourceInfo.sourceUrl} after ${(performance.now() - start) / 1000}s`);
        return {
            aampInitConfigOverrides: (0, _objectSpread._)({
                setLicenseCaching: false
            }, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.aampInitConfigRemoteOverrides),
            streams: [
                {
                    url: sourceInfo.sourceUrl,
                    drmConfig: sourceInfo.drmLicenseUrl ? {
                        [(0, _sevenStore.Store).preferredDrmSystem]: sourceInfo.drmLicenseUrl,
                        preferredKeysystem: (0, _sevenStore.Store).preferredDrmSystem
                    } : undefined,
                    requestHeaders: sourceInfo.requestHeaders
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
        (0, _snowplowBridgeDefault.default).init();
        (0, _muxAnalyticsDefault.default).init();
        (0, _newRelicAnalyticsDefault.default).init();
    }
    monitoringTeardown() {
        console.log("[acc] call monitoringTeardown");
        if (this.messengerLink && this.videoElement) this.messengerLink.unlinkVideoElementListeners(this.videoElement);
        (0, _messengers.Messengers).appTeardown$.send();
        Object.keys((0, _messengers.Messengers)).forEach((key)=>(0, _messengers.Messengers)[key].reset());
        (0, _sevenStore.Store).appIsRunning = false;
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","./helpers/seven-store":"h8xnN","./helpers/MessengerLink":"9zMae","./helpers/Messengers":"h1Nk9","./helpers/utils":"k30on","../provider-utils":"jTFkH","./seven-services/seven-api":"d9m8c","./seven-services/seven-auth":"7wlKc","./analytics/NewRelicAnalytics":"bu898","./analytics/SnowplowBridge":"26cot","./analytics/MuxAnalytics":"ltnmy","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9kWBJ":[function(require,module,exports) {
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

},{"./_define_property.js":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"h8xnN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Store", ()=>Store);
var _utils = require("./utils");
var _utils1 = require("../helpers/utils");
var _packageJson = require("../package.json");
var _packageJsonDefault = parcelHelpers.interopDefault(_packageJson);
const adIdKey = "au.com.seven_MLE_AD_ID";
const sevenStagingConfigKey = "au.com.seven_USE_STAGING_CONFIG";
// run this in debugger to set staging config, then reload
// localStorage.setItem("au.com.seven_USE_STAGING_CONFIG", "true");
const useProdConfig = localStorage.getItem(sevenStagingConfigKey) !== "true";
let backupAdId = (0, _utils1.generateUUID)();
let generateOztamSessionId = "";
const Store = {
    appVersion: (0, _packageJsonDefault.default).version,
    deviceId: "",
    deviceModel: "",
    deviceBrand: "",
    devicePlatform: "",
    deviceMake: "foxtelglass",
    deviceFirmwareVersion: "",
    appIsRunning: true,
    preferredDrmSystem: "com.widevine.alpha",
    useProdConfig,
    Api: {
        configBase: useProdConfig ? "https://config.swm.digital" : "https://config-staging.inferno.digital",
        regSource: "7plus",
        platformId: "foxtel",
        platformVersion: "6.0.0",
        apiVersion: "4.8",
        apiKey: useProdConfig ? "CJSy6SIdYbDiD4YYnLLC1C7rcLWS4tlmtQlRDIoi9tUcf" : "Dh4H9pKXnCi07UzmbLnvWHbAG57jxqCMeogzNJbpSDp"
    },
    deviceNetworkConnection: (0, _utils.NetworkConnectionType).UNKNOWN,
    AppConfig: null,
    RegionData: {
        regionKey: "<empty>",
        marketKey: "<empty>",
        postcode: "<empty>",
        ipAddress: "<empty>",
        userMarket: "<empty>",
        isLocationVerified: false
    },
    UserInfo: {
        email: "<empty>",
        firstname: "<empty>",
        lastname: "<empty>",
        subject: "<empty>"
    },
    Auth: {
        access_token: "",
        expires_in: -1,
        refresh_token: ""
    },
    getOzTamId: ()=>{
        return generateOztamSessionId;
    },
    setOzTamId: (sessionId)=>{
        if (!sessionId) sessionId = (0, _utils1.generateUUID)();
        generateOztamSessionId = sessionId;
    },
    getAdId: ()=>{
        if (!localStorage) return backupAdId;
        let storedId = localStorage.getItem(adIdKey);
        if (storedId) return storedId;
        localStorage.setItem(adIdKey, backupAdId);
        return backupAdId;
    },
    // AFL feature flags
    isAflGeoEnabled: true,
    isUpdatedAuth2ApiEnabled: true,
    isLocationApiEnabled: true,
    isPlaybackLocationVerificationEnabled: true
};

},{"./utils":"k30on","../helpers/utils":"k30on","../package.json":"gSday","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"k30on":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"gSday":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"au.com.seven","version":"1.0.49","description":"","main":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"author":"","license":"ISC","dependencies":{"@snowplow/browser-tracker":"^3.14.0"}}');

},{}],"9zMae":[function(require,module,exports) {
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
            this.Messengers.bitrateChange$.send(bitrateObj.detail.bitRate);
        });
        (0, _defineProperty._)(this, "onTimeUpdate", ()=>this.Messengers.timeUpdate$.send(this.videoElement.currentTime));
        (0, _defineProperty._)(this, "onId3Metadata", (id3Obj)=>{
            var _id3Obj_detail_data, _id3Obj_detail, _id3Obj_detail1;
            this.Messengers.id3Metadata$.send(id3Obj);
            // TODO remove after AAMP does their testing
            let rawTag = "";
            (_id3Obj_detail = id3Obj.detail) === null || _id3Obj_detail === void 0 ? void 0 : (_id3Obj_detail_data = _id3Obj_detail.data) === null || _id3Obj_detail_data === void 0 ? void 0 : _id3Obj_detail_data.forEach((charCode)=>{
                const char = String.fromCharCode(charCode);
                rawTag += char;
            });
            rawTag = rawTag.replace(/[^a-zA-z0-9.:]/g, "");
            console.debug(`[acc] %%% ID3 Event emitted, timestamp ${(((_id3Obj_detail1 = id3Obj.detail) === null || _id3Obj_detail1 === void 0 ? void 0 : _id3Obj_detail1.presentationTime) / 1000).toFixed(2)} ${rawTag}`);
        });
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

},{"@swc/helpers/_/_define_property":"9kWBJ","./utils":"k30on","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"h1Nk9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messengers", ()=>Messengers);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _messenger = require("./Messenger");
var _utils = require("./utils");
class MessengersClass {
    constructor(){
        // SEVEN specific
        (0, _defineProperty._)(this, "streamReady$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "playbackData$", new (0, _messenger.Messenger)(null));
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

},{"@swc/helpers/_/_define_property":"9kWBJ","./Messenger":"i8eRF","./utils":"k30on","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"i8eRF":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"d9m8c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeSevenAPIRequest", ()=>makeSevenAPIRequest);
parcelHelpers.export(exports, "makeSevenPlaybackAPIRequest", ()=>makeSevenPlaybackAPIRequest);
parcelHelpers.export(exports, "getSevenPlaybackData", ()=>getSevenPlaybackData);
parcelHelpers.export(exports, "getAndStoreRegion", ()=>getAndStoreRegion);
parcelHelpers.export(exports, "getAndStoreConfig", ()=>getAndStoreConfig);
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _messengers = require("../helpers/Messengers");
var _sevenStore = require("../helpers/seven-store");
var _providerUtils = require("../../provider-utils");
var _featureFlagHelper = require("./featureFlag-helper");
var _utils = require("../helpers/utils");
const LIVE_STREAM_TYPE = "application/vnd.apple.mpegurl";
const proxyUrl = "https://au-proxy.apac.ninja/seven-proxy";
const isUpdatedAuth2ApiEnabled = (0, _sevenStore.Store).isUpdatedAuth2ApiEnabled;
const isAflGeoEnabled = (0, _sevenStore.Store).isAflGeoEnabled;
const makeSevenAPIRequest = async (url, fetchInit)=>{
    const newFetchInit = (0, _objectSpreadProps._)((0, _objectSpread._)({}, fetchInit), {
        headers: (0, _objectSpread._)({}, fetchInit === null || fetchInit === void 0 ? void 0 : fetchInit.headers)
    });
    if (!(0, _sevenStore.Store).useProdConfig) {
        newFetchInit.headers["Target-URL"] = encodeURI(url);
        return await fetch(proxyUrl, newFetchInit);
    }
    return await fetch(url, newFetchInit);
};
const makeSevenPlaybackAPIRequest = async (url, fetchInit = {})=>{
    const newFetchInit = (0, _objectSpreadProps._)((0, _objectSpread._)({}, fetchInit), {
        headers: (0, _objectSpread._)({}, fetchInit.headers)
    });
    try {
        // Use proxy URL if not in production config
        const response = await ((0, _sevenStore.Store).useProdConfig ? fetch(url, newFetchInit) : fetch(proxyUrl, (0, _objectSpreadProps._)((0, _objectSpread._)({}, newFetchInit), {
            headers: (0, _objectSpreadProps._)((0, _objectSpread._)({}, newFetchInit.headers), {
                "Target-URL": encodeURI(url)
            })
        })));
        if (!response.ok) {
            const error = await getErrorResponse(response);
            console.warn("API request not ok:", JSON.stringify(error));
            return {
                error: response.status,
                errorJson: error
            };
        }
        return await response.json();
    } catch (e) {
        console.error("Fetch error:", e);
        return {
            error: "Fetch error",
            details: e.message
        };
    }
};
const getErrorResponse = async (response)=>{
    try {
        return await response.json();
    } catch (e) {
        console.warn("Failed to parse error response as JSON:", e);
        return {
            error: "Unknown error"
        }; // Fallback in case parsing fails
    }
};
const buildVideoUrl = (skeletonUrl, options)=>{
    const { isDrmEnabled, isDrmMockingEnabled } = options || {};
    // @TODO change advertId to use PSID id once Samsung confirmed
    (0, _sevenStore.Store).setOzTamId((0, _utils.generateUUID)());
    const deviceId = (0, _sevenStore.Store).deviceId;
    const postcode = (0, _sevenStore.Store).RegionData.postcode;
    const deliveryId = "ssaibeacon";
    let videoUrl = skeletonUrl.replace("{ppId}", "").replace("{deliveryId}", deliveryId).replace("[advertid]", deviceId).replace("[postcode]", postcode).replace("[deviceId]", deviceId);
    const ozidParam = `${skeletonUrl.indexOf("?") >= 0 ? "&" : "?"}ozid=`;
    videoUrl += ozidParam + (0, _sevenStore.Store).getOzTamId();
    if (isDrmMockingEnabled) videoUrl = (0, _featureFlagHelper.getLivePlaybackSourceMockHelper)(videoUrl);
    // Append DRM params to video service request.
    if (isDrmEnabled) videoUrl += `&cp.containerFormat=ts|cmaf&cp.drmSystems=widevine&cp.encryptionType=cenc&cp.drmAuth=true`;
    return videoUrl;
};
const getSevenPlaybackData = async (channelCode)=>{
    const apiBaseUrl = (0, _sevenStore.Store).AppConfig.endpoints.BASE_URL;
    const sevenChannelUrl = `${apiBaseUrl}player/live/${channelCode}?platform-id=${(0, _sevenStore.Store).Api.platformId}&market-id=${(0, _sevenStore.Store).RegionData.marketKey}&api-version=${(0, _sevenStore.Store).Api.apiVersion}&signedUp=True&platform-version=${(0, _sevenStore.Store).Api.platformId}`;
    let skeletonUrl;
    try {
        const channelRequest = await makeSevenAPIRequest(sevenChannelUrl);
        if (!channelRequest.ok) throw channelRequest;
        const channelResponse = await channelRequest.json();
        const videoData = channelResponse.videoPlayer;
        if (!videoData) throw new Error("No matching video in channel response");
        if (videoData.videoUrl) {
            skeletonUrl = videoData.videoUrl;
            (0, _messengers.Messengers).streamReady$.send(videoData);
        } else throw new Error("Channel videoUrl not found");
    } catch (err) {
        if (err.status === 404) throw new (0, _providerUtils.MLEError)(`Could not find channel with code ${channelCode} on 7Plus API`, (0, _providerUtils.ErrorTypes).CHANNEL_MAP, err.status);
        throw new (0, _providerUtils.MLEError)(err.message, (0, _providerUtils.ErrorTypes).PROVIDER, err.status);
    }
    const { LIVE_DRM_ENABLED, LIVE_DRM_MOCKING_ENABLED } = (0, _sevenStore.Store).AppConfig.config;
    const isDrmEnabled = LIVE_DRM_ENABLED !== null && LIVE_DRM_ENABLED !== void 0 ? LIVE_DRM_ENABLED : false;
    const isDrmMockingEnabled = LIVE_DRM_MOCKING_ENABLED !== null && LIVE_DRM_MOCKING_ENABLED !== void 0 ? LIVE_DRM_MOCKING_ENABLED : false;
    const videoUrl = buildVideoUrl(skeletonUrl, {
        isDrmEnabled,
        isDrmMockingEnabled
    });
    try {
        var _playbackResponse_media, _matchingSource_key_systems_authorization, _matchingSource_key_systems, _matchingSource_key_systems_Store_preferredDrmSystem, _matchingSource_key_systems1;
        const playbackResponse = await makeSevenPlaybackAPIRequest(videoUrl, {
            headers: {
                Authorization: "Bearer " + (0, _sevenStore.Store).Auth.access_token
            }
        });
        if (playbackResponse === null || playbackResponse === void 0 ? void 0 : playbackResponse.error) throw playbackResponse;
        let matchingSource;
        if (isDrmEnabled && (playbackResponse === null || playbackResponse === void 0 ? void 0 : (_playbackResponse_media = playbackResponse.media) === null || _playbackResponse_media === void 0 ? void 0 : _playbackResponse_media.stream_type_drm)) matchingSource = playbackResponse.media.sources.find((channel)=>channel.encryption_type === "cenc");
        else matchingSource = playbackResponse.media.sources.find((channel)=>channel.type === LIVE_STREAM_TYPE);
        if (!matchingSource) throw new Error("Could not find matching live object");
        (0, _messengers.Messengers).playbackData$.send({
            matchingSource,
            playbackResponse
        });
        const licenseAuthorizationToken = (_matchingSource_key_systems = matchingSource["key_systems"]) === null || _matchingSource_key_systems === void 0 ? void 0 : (_matchingSource_key_systems_authorization = _matchingSource_key_systems.authorization) === null || _matchingSource_key_systems_authorization === void 0 ? void 0 : _matchingSource_key_systems_authorization.token;
        const licenseRequestHeaders = [
            {
                key: "Authorization",
                value: `Bearer ${licenseAuthorizationToken}`,
                isLicenseRequest: true
            },
            {
                key: "Content-Type",
                value: "application/octet-stream",
                isLicenseRequest: true
            }
        ];
        return (0, _objectSpread._)({
            sourceUrl: matchingSource.src,
            drmLicenseUrl: (_matchingSource_key_systems1 = matchingSource["key_systems"]) === null || _matchingSource_key_systems1 === void 0 ? void 0 : (_matchingSource_key_systems_Store_preferredDrmSystem = _matchingSource_key_systems1[(0, _sevenStore.Store).preferredDrmSystem]) === null || _matchingSource_key_systems_Store_preferredDrmSystem === void 0 ? void 0 : _matchingSource_key_systems_Store_preferredDrmSystem.license_url
        }, licenseAuthorizationToken && {
            requestHeaders: licenseRequestHeaders
        });
    } catch (err) {
        // check for AFL location verification error
        if ((0, _featureFlagHelper.shouldHandleLocationOrWrongChannelError)(err)) {
            // need to set geoRestricted Flag to true and naviate to sign in page
            (0, _providerUtils.setTokenInDeviceStorage)("au.com.seven", btoa(JSON.stringify({
                refresh_token: (0, _sevenStore.Store).Auth.refresh_token,
                access_token: (0, _sevenStore.Store).Auth.access_token,
                geoRestricted: true
            })));
            throw new (0, _providerUtils.MLEError)("Could not play the 7Plus video geo hard block", (0, _providerUtils.ErrorTypes).AUTH, err.status);
        } else {
            console.error("errs:" + err);
            throw new (0, _providerUtils.MLEError)(err.message, (0, _providerUtils.ErrorTypes).PROVIDER, err.status);
        }
    }
};
const getAndStoreRegion = async ()=>{
    var _Store_getAppConfig;
    let regionUrl;
    const isLocationApiEnabled = (0, _sevenStore.Store).isLocationApiEnabled;
    if (isLocationApiEnabled) regionUrl = (0, _sevenStore.Store).AppConfig.endpoints.LOCATION_URL;
    else regionUrl = (0, _sevenStore.Store).AppConfig.endpoints.GEO_LOCATION_URL;
    regionUrl = regionUrl.replace("{deviceId}", (0, _sevenStore.Store).deviceId);
    const regionRequest = await makeSevenAPIRequest(regionUrl);
    let regionResponse;
    if (!regionRequest.ok) regionResponse = isLocationApiEnabled ? {
        market_id: Number((0, _sevenStore.Store) === null || (0, _sevenStore.Store) === void 0 ? void 0 : (_Store_getAppConfig = (0, _sevenStore.Store).getAppConfig()) === null || _Store_getAppConfig === void 0 ? void 0 : _Store_getAppConfig.config.DEFAULT_REGION) || -1,
        postcode: "",
        suburb: "",
        user_market: "",
        verified: false
    } : {
        _id: Number((0, _sevenStore.Store).AppConfig.config.DEFAULT_REGION),
        postcode: "",
        place_name: "",
        ip_address: ""
    };
    else regionResponse = await regionRequest.json();
    if (isLocationApiEnabled) (0, _sevenStore.Store).RegionData = {
        regionKey: regionResponse.suburb,
        marketKey: regionResponse.market_id.toString(),
        postcode: regionResponse.postcode,
        userMarket: regionResponse.user_market,
        isLocationVerified: regionResponse.verified
    };
    else (0, _sevenStore.Store).RegionData = {
        regionKey: regionResponse.place_name,
        marketKey: regionResponse._id.toString(),
        postcode: regionResponse.postcode,
        ipAddress: regionResponse.ip_address
    };
};
const getAndStoreConfig = async ()=>{
    let jsonVersion = isAflGeoEnabled && isUpdatedAuth2ApiEnabled ? "1.0" : "0.3";
    const getConfigUrl = `${(0, _sevenStore.Store).Api.configBase}/${(0, _sevenStore.Store).Api.platformId}/${jsonVersion}.json?version=${(0, _sevenStore.Store).Api.platformVersion}`;
    const configRequest = await makeSevenAPIRequest(getConfigUrl);
    if (!configRequest.ok) throw new (0, _providerUtils.MLEError)("App config request failed", (0, _providerUtils.ErrorTypes).PROVIDER, configRequest.status);
    const configResponse = await configRequest.json();
    (0, _sevenStore.Store).AppConfig = configResponse;
};

},{"@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/Messengers":"h1Nk9","../helpers/seven-store":"h8xnN","../../provider-utils":"jTFkH","./featureFlag-helper":"kg6LL","../helpers/utils":"k30on","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8Y68S":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"kg6LL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageTypes", ()=>StorageTypes);
parcelHelpers.export(exports, "getLocalStorageItem", ()=>getLocalStorageItem);
parcelHelpers.export(exports, "setLocalStorageItem", ()=>setLocalStorageItem);
parcelHelpers.export(exports, "removeLocalStorageItem", ()=>removeLocalStorageItem);
parcelHelpers.export(exports, "getLivePlaybackSourceMockHelper", ()=>getLivePlaybackSourceMockHelper);
parcelHelpers.export(exports, "shouldHandleLocationOrWrongChannelError", ()=>shouldHandleLocationOrWrongChannelError);
var _sevenStore = require("../helpers/seven-store");
const StorageTypes = {
    IsContentRestricted: "djp.contentrestricted",
    LiveDrmExpiryDuration: "djp.duration",
    MockMarketId: "djp.marketid",
    MockRestrictionPrompt: "djp.contentstarttime"
};
const getLocalStorageItem = (key)=>localStorage.getItem(key);
const setLocalStorageItem = (key, value)=>{
    localStorage.setItem(key, value);
};
const removeLocalStorageItem = (key)=>{
    localStorage.removeItem(key);
};
const getLivePlaybackSourceMockHelper = (videoUrl)=>{
    const isLiveDrmMockingEnabled = (0, _sevenStore.Store).AppConfig && (0, _sevenStore.Store).AppConfig.config ? (0, _sevenStore.Store).AppConfig.config.LIVE_DRM_ENABLED : false;
    if (!isLiveDrmMockingEnabled) return videoUrl;
    let modifiedVideoUrl = videoUrl;
    const { IsContentRestricted, LiveDrmExpiryDuration, MockMarketId, MockRestrictionPrompt } = StorageTypes;
    const geoMockingLocalStorageKeys = [
        IsContentRestricted,
        LiveDrmExpiryDuration,
        MockMarketId,
        MockRestrictionPrompt
    ];
    geoMockingLocalStorageKeys.forEach((localStorageKey)=>{
        const paramValue = getLocalStorageItem(localStorageKey);
        if (paramValue) modifiedVideoUrl += `&${localStorageKey}=${paramValue}`;
    });
    return modifiedVideoUrl;
};
const shouldHandleLocationOrWrongChannelError = (error)=>{
    var _error_errorJson;
    const isFeatureEnabled = (0, _sevenStore.Store).isAflGeoEnabled && (0, _sevenStore.Store).isPlaybackLocationVerificationEnabled;
    const errorMessage = [
        "location_verification_required",
        "channel_not_in_market"
    ].includes(error === null || error === void 0 ? void 0 : (_error_errorJson = error.errorJson) === null || _error_errorJson === void 0 ? void 0 : _error_errorJson.error);
    return isFeatureEnabled && errorMessage && (error === null || error === void 0 ? void 0 : error.error) === 403;
};

},{"../helpers/seven-store":"h8xnN","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"7wlKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tryPerformTokenRefresh", ()=>tryPerformTokenRefresh);
parcelHelpers.export(exports, "getAndStoreUserInfo", ()=>getAndStoreUserInfo);
var _messengers = require("../helpers/Messengers");
var _sevenStore = require("../helpers/seven-store");
var _providerUtils = require("../../provider-utils");
var _sevenApi = require("./seven-api");
const tryPerformTokenRefresh = async (retry_count)=>{
    const refreshToken = (0, _sevenStore.Store).Auth.refresh_token;
    var url = `${(0, _sevenStore.Store).AppConfig.endpoints.signIn.TOKEN}?platform-id=${(0, _sevenStore.Store).Api.platformId}&platform-version=${(0, _sevenStore.Store).Api.platformVersion}`;
    var postBody = `PlatformId=${(0, _sevenStore.Store).Api.platformId}&RegSource=${(0, _sevenStore.Store).Api.regSource}&refreshToken=${refreshToken}`;
    try {
        const newTokenRequest = await (0, _sevenApi.makeSevenAPIRequest)(url, {
            method: "POST",
            body: postBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-swm-apikey": (0, _sevenStore.Store).Api.apiKey
            }
        });
        if (!newTokenRequest.ok) throw newTokenRequest;
        const newTokenResponse = await newTokenRequest.json();
        (0, _sevenStore.Store).Auth = newTokenResponse;
        setupRefreshTimer(newTokenResponse);
        // set in sky storage, no need to await or catch errors
        (0, _providerUtils.setTokenInDeviceStorage)("au.com.seven", btoa(JSON.stringify({
            refresh_token: (0, _sevenStore.Store).Auth.refresh_token,
            access_token: (0, _sevenStore.Store).Auth.access_token,
            expires_in: newTokenResponse.expires_in,
            token_type: newTokenResponse.token_type
        })));
    } catch (err) {
        console.warn("[acc] error refreshing seven auth", err);
        if (retry_count <= 2) return await tryPerformTokenRefresh(retry_count + 1);
        else {
            // geoRestricted flag set to false for sign in flow
            (0, _providerUtils.setTokenInDeviceStorage)("au.com.seven", btoa(JSON.stringify({
                "geoRestricted": false
            })));
            throw new (0, _providerUtils.MLEError)("Could not perform 7Plus Auth refresh", (0, _providerUtils.ErrorTypes).AUTH, err.status);
        }
    }
};
let refreshTimeout;
const setupRefreshTimer = ()=>{
    refreshTimeout = setTimeout(async ()=>{
        console.log("[acc] 7Plus refreshing token...");
        await tryPerformTokenRefresh();
    }, (0, _sevenStore.Store).Auth.expires_in * 1000);
};
(0, _messengers.Messengers).appTeardown$.addReceiver(()=>{
    if (refreshTimeout) clearInterval(refreshTimeout);
});
const getAndStoreUserInfo = async ()=>{
    var _Store_AppConfig_endpoints_signIn, _Store_AppConfig_endpoints;
    const userInfoBaseUrl = (_Store_AppConfig_endpoints = (0, _sevenStore.Store).AppConfig.endpoints) === null || _Store_AppConfig_endpoints === void 0 ? void 0 : (_Store_AppConfig_endpoints_signIn = _Store_AppConfig_endpoints.signIn) === null || _Store_AppConfig_endpoints_signIn === void 0 ? void 0 : _Store_AppConfig_endpoints_signIn.USERINFO;
    if (!userInfoBaseUrl) throw new (0, _providerUtils.MLEError)("No user info url in config", (0, _providerUtils.ErrorTypes).PROVIDER);
    const userInfoUrl = `${userInfoBaseUrl}?platform-id=${(0, _sevenStore.Store).Api.platformId}&platform-version=${(0, _sevenStore.Store).Api.platformVersion}`;
    const postBody = `PlatformId=${(0, _sevenStore.Store).Api.platformId}&RegSource=${(0, _sevenStore.Store).Api.regSource}`;
    try {
        const userInfoRequest = await (0, _sevenApi.makeSevenAPIRequest)(userInfoUrl, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "x-swm-apikey": (0, _sevenStore.Store).Api.apiKey,
                Authorization: "Bearer " + (0, _sevenStore.Store).Auth.access_token
            },
            method: "POST",
            body: postBody
        });
        if (!userInfoRequest.ok) throw userInfoRequest;
        const userInfo = await userInfoRequest.json();
        if (!userInfo.subject) throw new (0, _providerUtils.MLEError)("No gigyaID found in user info response", (0, _providerUtils.ErrorTypes).PROVIDER);
        (0, _sevenStore.Store).UserInfo = userInfo;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

},{"../helpers/Messengers":"h1Nk9","../helpers/seven-store":"h8xnN","../../provider-utils":"jTFkH","./seven-api":"d9m8c","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"bu898":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _messengers = require("../helpers/Messengers");
var _sevenStore = require("../helpers/seven-store");
class NewRelicBridge {
    constructor(){
        (0, _defineProperty._)(this, "newRelicIframeId", "au-com-seven_NewRelic");
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "init", async ()=>{
            this.loadNewRelicLibrary();
            this.addEventListeners();
        });
        (0, _defineProperty._)(this, "addEventListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onAppTeardown)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "loadNewRelicLibrary", ()=>{
            if (document.getElementById(this.newRelicIframeId)) return;
            try {
                // load newrelic in separate iframe, we do not want to add Seven analytics for the entirety of
                // MLE by putting it in the parent index.html, nor can we append it in the child iframe because it
                // depends on the document onLoad function. So we add a grandchild iframe
                // https://accedobroadband.jira.com/browse/FOXTEL-521?focusedCommentId=1712867
                const iframe = document.createElement("iframe");
                iframe.setAttribute("id", this.newRelicIframeId);
                const iframeSource = (0, _sevenStore.Store).useProdConfig ? "au.com.seven_NewRelic-Iframe-prod.html" : "au.com.seven_NewRelic-Iframe-staging.html";
                iframe.setAttribute("src", iframeSource);
                document.body.appendChild(iframe);
                console.log("[acc] Loaded newrelic iframe");
            } catch (e) {
                console.warn("[acc] Error loading new relic library", e);
            }
        });
        (0, _defineProperty._)(this, "unloadNewRelicLibrary", ()=>{
            const iframe = document.getElementById(this.newRelicIframeId);
            if (!iframe) {
                console.warn("No newrelic iframe found to unload");
                return;
            }
            console.log("[acc] unloading newrelic iframe...");
            iframe.setAttribute("src", "");
            iframe.remove();
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            this.unloadNewRelicLibrary();
            this.removeEventListeners();
        });
    }
}
exports.default = new NewRelicBridge();

},{"@swc/helpers/_/_define_property":"9kWBJ","../helpers/Messengers":"h1Nk9","../helpers/seven-store":"h8xnN","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"26cot":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _snowplowClient = require("./SnowplowClient");
var _messengers = require("../helpers/Messengers");
var _utils = require("../helpers/utils");
var _sevenStore = require("../helpers/seven-store");
const SESSION_UPDATER_TIMER_SECONDS = 600;
class SnowplowBridge {
    constructor(){
        (0, _defineProperty._)(this, "client", null);
        (0, _defineProperty._)(this, "snowplowLoadFired", false);
        (0, _defineProperty._)(this, "currentAd", null);
        (0, _defineProperty._)(this, "playerState", (0, _utils.PlayerStates).Stopped);
        (0, _defineProperty._)(this, "adBreakOngoing", false);
        (0, _defineProperty._)(this, "channelData", null);
        (0, _defineProperty._)(this, "playingSource", null);
        (0, _defineProperty._)(this, "isAppHiddenFromView", false);
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "sessionRefreshHandler", null);
        (0, _defineProperty._)(this, "justRegeneratedSessionId", false);
        (0, _defineProperty._)(this, "hasStartedTrackingProgressDuringAppLaunch", false);
        (0, _defineProperty._)(this, "init", ()=>{
            if (!this.client) this.client = new (0, _snowplowClient.SnowplowClient)();
            this.client.track("APPLICATION.LAUNCH");
            this.removeEventListeners(); // in case monitoringTeardown isn't called
            this.addEventListeners();
        });
        (0, _defineProperty._)(this, "addEventListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).streamReady$.addReceiver(this.onChannelDataReceived, true),
                (0, _messengers.Messengers).playbackData$.addReceiver(this.onPlaybackDataReceived, true),
                (0, _messengers.Messengers).timeUpdate$.addReceiver(this.onTimeUpdate),
                (0, _messengers.Messengers).currentAd$.addReceiver(this.onAdChange),
                (0, _messengers.Messengers).playerState$.addReceiver(this.onPlayerStateChange),
                (0, _messengers.Messengers).playerError$.addReceiver(this.onPlayerErrored),
                (0, _messengers.Messengers).appHiddenWithoutAudio$.addReceiver(this.onAppHidden),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onAppTeardown),
                (0, _messengers.Messengers).oztamSessionId$.addReceiver(this.onSessionIdChange)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "onChannelDataReceived", (channelData)=>{
            if (channelData) this.channelData = channelData;
        });
        (0, _defineProperty._)(this, "onPlaybackDataReceived", (playbackInfo)=>{
            this.playingSource = playbackInfo.matchingSource;
        });
        (0, _defineProperty._)(this, "onSessionIdChange", ()=>{
            (0, _sevenStore.Store).setOzTamId();
            this.sendStreamBeginSequence();
        });
        (0, _defineProperty._)(this, "sendStreamBeginSequence", ()=>{
            var _this_client, _this_channelData, _this_playingSource, _this_client1, _this_channelData1, _this_client2, _this_client3;
            (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.track("UX.SCREEN_ENTER", {
                screenName: "PLAYER"
            });
            (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.track("PLAYER.LIVE_LOAD", {
                mediaId: (_this_channelData = this.channelData) === null || _this_channelData === void 0 ? void 0 : _this_channelData.analytics.mediaId,
                url: (_this_playingSource = this.playingSource) === null || _this_playingSource === void 0 ? void 0 : _this_playingSource.src
            });
            (_this_client2 = this.client) === null || _this_client2 === void 0 ? void 0 : _this_client2.track("PLAYER.LIVE_START", {
                playerChannelName: (_this_channelData1 = this.channelData) === null || _this_channelData1 === void 0 ? void 0 : _this_channelData1.analytics.channelName
            });
            (_this_client3 = this.client) === null || _this_client3 === void 0 ? void 0 : _this_client3.track("PLAYER.LIVE_PLAY");
        });
        (0, _defineProperty._)(this, "onTimeUpdate", (time)=>{
            if (!this.sessionStarted) this.sessionStarted = true;
            this.client.updatePlayerTime(time);
        });
        (0, _defineProperty._)(this, "clearSessionUpdater", ()=>{
            if (this.sessionRefreshHandler) {
                console.log("[acc] oztam clear updater...");
                clearTimeout(this.sessionRefreshHandler);
                this.sessionRefreshHandler = null;
                this.hasStartedTrackingProgressDuringAppLaunch = true;
            }
        });
        (0, _defineProperty._)(this, "setupSessionUpdater", ()=>{
            this.clearSessionUpdater();
            console.log("[acc] oztam setting up updater...");
            this.sessionRefreshHandler = window.setTimeout(()=>{
                // should be cleared if we are unpaused or setting pro
                console.log("[acc] oztam updater updating Session ID!!");
                (0, _sevenStore.Store).setOzTamId();
                this.justRegeneratedSessionId = true;
                this.sessionStarted = false;
                // // set this flag so we send out another load event
                // // with updated session id
                // // in case we are hidden and transition to foreground
                this.hasStartedTrackingProgressDuringAppLaunch = true;
            }, SESSION_UPDATER_TIMER_SECONDS * 1000);
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (playerState)=>{
            const previousState = this.playerState;
            this.playerState = playerState;
            if (this.isAppHiddenFromView) return;
            if (playerState === (0, _utils.PlayerStates).Playing && previousState !== (0, _utils.PlayerStates).Playing) {
                if (!this.currentAd && this.snowplowLoadFired && this.sessionStarted) {
                    var // Resume playing content after pause, seek etc
                    _this_client;
                    (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.track("PLAYER.RESUME");
                    this.clearSessionUpdater();
                }
                if (!this.snowplowLoadFired || this.justRegeneratedSessionId) {
                    this.sendStreamBeginSequence();
                    this.snowplowLoadFired = true;
                }
            }
            // Log progress from last interval to when stream was paused
            // or seeked, buffering
            if (playerState !== (0, _utils.PlayerStates).Playing && previousState === (0, _utils.PlayerStates).Playing && !this.currentAd && this.sessionStarted) {
                var _this_client1;
                console.log("[acc] oztam no longer playing - paused");
                (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.track("PLAYER.PAUSED");
                this.setupSessionUpdater();
            }
        });
        (0, _defineProperty._)(this, "getCurrentTime", ()=>Math.round(new Date().getTime() / 1000));
        (0, _defineProperty._)(this, "onAdChange", (currentAd)=>{
            this.currentAd = currentAd;
            if (this.isAppHiddenFromView) return;
            if (!this.adBreakOngoing && this.currentAd !== null) {
                var _this_client;
                (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.track("PLAYER.LIVE_ADBEGIN");
                this.adBreakOngoing = true;
            } else if (this.adBreakOngoing && this.currentAd) {
                var _this_client1, _this_client2;
                (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.track("PLAYER.LIVE_ADCOMPLETE");
                (_this_client2 = this.client) === null || _this_client2 === void 0 ? void 0 : _this_client2.track("PLAYER.LIVE_ADBEGIN");
            } else if (this.adBreakOngoing && this.currentAd == null) {
                var _this_client3;
                (_this_client3 = this.client) === null || _this_client3 === void 0 ? void 0 : _this_client3.track("PLAYER.LIVE_ADCOMPLETE");
                this.adBreakOngoing = false;
            }
        });
        (0, _defineProperty._)(this, "onAppHidden", (isHidden)=>{
            if (this.isAppHiddenFromView === isHidden) return;
            this.isAppHiddenFromView = isHidden;
            console.log("[acc] change hidden state in oztam", isHidden);
            if (this.isAppHiddenFromView) {
                if (this.snowplowLoadFired) {
                    var _this_client;
                    (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.track("PLAYER.PAUSED");
                    if (this.sessionStarted || !this.hasStartedTrackingProgressDuringAppLaunch) this.setupSessionUpdater();
                }
            } else {
                var _this_client1;
                // change to foreground
                if (this.snowplowLoadFired) (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.track("PLAYER.RESUME");
                else if (this.playerState === (0, _utils.PlayerStates).Playing) {
                    this.sendStreamBeginSequence();
                    this.snowplowLoadFired = true;
                }
            }
        });
        (0, _defineProperty._)(this, "onPlayerErrored", (errorType)=>{
            var _this_client;
            if (this.snowplowLoadFired) (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.track("PLAYER.STOP");
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            var _this_client, _this_client1;
            if (this.snowplowLoadFired) (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.track("PLAYER.STOP");
            (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.onAppTeardown();
            this.removeEventListeners();
            this.sessionStarted = false;
            this.justRegeneratedSessionId = false;
            this.hasStartedTrackingProgressDuringAppLaunch = false;
            this.currentAd = null;
            this.snowplowLoadFired = null;
            this.isAppHiddenFromView = false;
            this.playerState = (0, _utils.PlayerStates).Stopped;
            this.adBreakOngoing = false;
            this.channelData = null;
            this.playingSource = null;
        });
    }
}
exports.default = new SnowplowBridge();

},{"@swc/helpers/_/_define_property":"9kWBJ","./SnowplowClient":"bpCML","../helpers/Messengers":"h1Nk9","../helpers/utils":"k30on","../helpers/seven-store":"h8xnN","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"bpCML":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EVENTS", ()=>EVENTS);
parcelHelpers.export(exports, "SnowplowClient", ()=>SnowplowClient);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _browserTracker = require("@snowplow/browser-tracker");
var _sevenStore = require("../helpers/seven-store");
const EVENTS = {
    APPLICATION: {
        LAUNCH: "application.launch"
    },
    UX: {
        SCREEN_ENTER: "ux.screen.enter"
    },
    PLAYER: {
        AD_STATICIMP: "player.ad.staticimp",
        LIVE_LOAD: "player.load.live",
        LIVE_START: "player.start.live",
        LIVE_PLAY: "player.play.live",
        LIVE_PROGRESS: "player.progress.live",
        PAUSED: "player.paused",
        RESUME: "player.resume",
        LIVE_ADBEGIN: "player.adbegin.live",
        LIVE_ADCOPLETE: "player.adcomplete.live",
        STOP: "player.stop"
    }
};
const UX_SCREENS = {
    PLAYER: {
        name: "Player",
        path: "/player"
    }
};
const getUnstructEventObject = (enrichedEvent)=>({
        schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
        data: {
            schema: "iglu:com.infernosp/player/jsonschema/1-0-0",
            data: enrichedEvent
        }
    });
class SnowplowClient {
    constructor(){
        (0, _defineProperty._)(this, "initialized", false);
        (0, _defineProperty._)(this, "isVideoPlaying", false);
        (0, _defineProperty._)(this, "progressStartEvents", [
            "RESUME",
            "LIVE_PLAY"
        ]);
        (0, _defineProperty._)(this, "progressHaltEvents", [
            "STOP",
            "PAUSED"
        ]);
        (0, _defineProperty._)(this, "progressInterval", null);
        (0, _defineProperty._)(this, "PROGRESS_HEARTBEAT_INTERVAL", 54) // In seconds
        ;
        (0, _defineProperty._)(this, "newSessionId", "");
        (0, _defineProperty._)(this, "analytics_version", "2.1.0");
        (0, _defineProperty._)(this, "currentVideo", {
            sessionId: "",
            mediaId: "",
            contentLength: 0,
            url: "",
            type: "",
            playerChannelName: ""
        });
        (0, _defineProperty._)(this, "currentTime", -1);
        (0, _defineProperty._)(this, "lastTime", -1);
        (0, _defineProperty._)(this, "playerCurrentTime", -1);
        (0, _defineProperty._)(this, "lastPlayerCurrentTime", -1);
        (0, _defineProperty._)(this, "getBaseParams", (event_)=>{
            var _Store_RegionData;
            const event = event_ || {};
            // really just oztam vendor version
            const platformString = (0, _sevenStore.Store).deviceBrand.toLowerCase() === "soip-pck" ? "Puck" : "TV";
            event.device_platform = `foxtel`; // FOXTEL-593
            event.device_type = "tv";
            event.device_model = platformString;
            event.device_os = "Foxtel";
            event.device_os_version = (0, _sevenStore.Store).deviceModel; // FOXTEL-595
            event.device_postcode = Number((_Store_RegionData = (0, _sevenStore.Store).RegionData) === null || _Store_RegionData === void 0 ? void 0 : _Store_RegionData.postcode);
            event.device_connection_type = (0, _sevenStore.Store).deviceNetworkConnection;
            event.app_access = "tv";
            event.app_id = "foxtel";
            event.app_name = "7plus-linear";
            event.app_version = (0, _sevenStore.Store).appVersion;
            event.device_id = (0, _sevenStore.Store).deviceId;
            // set advertising_id to undefined to match the 7 rebuild app which passes undefined.
            // If set to an actual ad id value
            // then Snowplow picks it up as the device ID and oztam fails cert. ¯\_(ツ)_/¯
            event.advertising_id = undefined; // Store.getAdId();
            event.device_screen_width = 1920;
            event.device_screen_height = 1080;
            console.debug("[acc] snowplow event", event);
            return event;
        });
        (0, _defineProperty._)(this, "getApplicationEvent", (eventName)=>{
            const eventList = {
                "application.install": 1,
                "application.upgrade": 2,
                "application.launch": 3,
                "application.exit": 4,
                "application.suspend": 5,
                "application.resume": 6
            };
            return {
                category: "application",
                action: eventName,
                property: this.analytics_version,
                value: eventList[eventName],
                context: this.getContext({
                    application_plugin: "native",
                    event_group: "application",
                    event_id: eventList[eventName],
                    event_name: eventName
                })
            };
        });
        (0, _defineProperty._)(this, "getPlayerParams", (event_, opts, eventName)=>{
            var _this_deviceInfo, _this_deviceInfo1;
            const event = event_;
            event.user_id = (0, _sevenStore.Store).UserInfo.subject;
            event.player_video_session_id = this.currentVideo.sessionId;
            event.player_screen_width = (_this_deviceInfo = this.deviceInfo) === null || _this_deviceInfo === void 0 ? void 0 : _this_deviceInfo.screenWidth;
            event.player_screen_height = (_this_deviceInfo1 = this.deviceInfo) === null || _this_deviceInfo1 === void 0 ? void 0 : _this_deviceInfo1.screenHeight;
            event.player_stream_quality = "SD";
            event.stream_url = this.currentVideo.url;
            console.log("mediaID:::" + this.currentVideo.mediaId);
            event.player_media_id = this.currentVideo.mediaId;
            event.player_media_type = this.currentVideo.type;
            event.player_from_position = this.lastTime;
            event.player_to_position = this.currentTime;
            if (event.player_from_position === -1) event.player_from_position = 0;
            if (event.player_to_position === -1) event.player_to_position = 0;
            // case where we go to screensaver and get no events except time stops updating
            // we cannot rely on clock times here so have to fake a partial progress
            const diffInClockTimes = event.player_to_position - event.player_from_position;
            const diffInPlayerTimes = this.playerCurrentTime - this.lastPlayerCurrentTime;
            // arbitrary 5 second difference to tell a large difference between player and clock times
            if (diffInClockTimes - diffInPlayerTimes > 5) event.player_to_position = event.player_from_position + diffInPlayerTimes;
            if (eventName === "LIVE_START" || eventName === "LIVE_PLAY") event.player_channel_name = this.currentVideo.playerChannelName;
            else if (eventName === "AD_STATICIMP") {
                event.ad_creative_id = opts.creativeId || "";
                event.ad_lineitem_id = opts.lineitemId || "";
                event.duration = opts.duration || "";
            }
            return event;
        });
        (0, _defineProperty._)(this, "getUXParams", (event, opts, eventName)=>{
            const { containerType, containerValue, description = "", elementContainerIndex, elementTag, screenName, screenPath } = opts;
            const uxScreen = UX_SCREENS[screenName];
            const localUxScreenName = uxScreen && uxScreen.name;
            const localUxScreenPath = uxScreen && uxScreen.path;
            // Add GigyaId as user_id
            event.user_id = (0, _sevenStore.Store).UserInfo.subject;
            event.adblocker_used = false;
            event.screen_width = 1920;
            event.screen_height = 1080;
            event.screen_name = localUxScreenName || screenName;
            event.screen_path = screenPath || localUxScreenPath;
            event.ux_element_tag = elementTag;
            event.ux_element_container_type = containerType;
            event.ux_element_container_value = containerValue;
            event.ux_element_container_index = elementContainerIndex;
            // Update screen path
            if (screenName === "LIVE_PLAYER") {
                event.screen_name = event.screen_name.replace("{{channel}}", description);
                event.screen_path = event.screen_path.replace("{{channel}}", description);
            }
            if (eventName === "ux.screen.enter") // ux.screen.enter events
            event.referring_link = ""; // no deeplink URL/URI
            return event;
        });
        (0, _defineProperty._)(this, "getUXEvent", (eventName, opts)=>{
            const eventList = {
                "ux.screen.enter": 701
            };
            const uxParams = this.getUXParams({
                event_group: "ux",
                event_id: eventList[eventName],
                event_name: eventName
            }, opts, eventName);
            return {
                category: "ux",
                action: eventName,
                event_id: eventList[eventName],
                event_name: eventName,
                property: this.analytics_version,
                value: eventList[eventName],
                context: this.getContext(uxParams)
            };
        });
        (0, _defineProperty._)(this, "getPlayerEvent", (eventName, opts)=>{
            const eventList = {
                "player.start.live": 201,
                "player.play.live": 202,
                "player.stop": 203,
                "player.progress.live": 206,
                "player.adbegin.live": 213,
                "player.adcomplete.live": 215,
                "player.load.live": 216,
                "player.resume": 225,
                "player.paused": 226,
                "player.ad.staticimp": 250
            };
            if (eventName === "LIVE_LOAD") {
                console.log("sessionId:::" + opts.mediaId);
                this.currentVideo.sessionId = (0, _sevenStore.Store).getOzTamId();
                this.currentVideo.mediaId = opts.mediaId;
                this.currentVideo.url = opts.url;
                this.currentVideo.type = eventName.split("_")[0].toUpperCase();
                this.isVideoPlaying = false;
                this.currentTime = -1;
                this.lastTime = -1;
            } else if (eventName === "LIVE_START") this.currentVideo.playerChannelName = opts.playerChannelName;
            if (this.progressStartEvents.indexOf(eventName) > -1) {
                clearInterval(this.progressInterval);
                this.progressInterval = setInterval(()=>{
                    this.trackProgress();
                }, this.PROGRESS_HEARTBEAT_INTERVAL * 1000);
                if (this.currentTime > -1) this.lastTime = this.currentTime;
                else this.lastTime = this.getCurrentTime();
            } else if (this.progressHaltEvents.indexOf(eventName) > -1 && this.progressInterval) {
                this.trackProgress();
                clearInterval(this.progressInterval);
                this.progressInterval = null;
            }
            if (eventName === "PAUSED") this.isVideoPlaying = false;
            else if (eventName === "RESUME" || eventName === "LIVE_PLAY") this.isVideoPlaying = true;
            const playerParams = this.getPlayerParams({
                event_group: "player",
                event_id: eventList[EVENTS.PLAYER[eventName]],
                event_name: EVENTS.PLAYER[eventName]
            }, opts, eventName);
            return {
                category: "player",
                action: EVENTS.PLAYER[eventName],
                property: this.analytics_version,
                value: eventList[EVENTS.PLAYER[eventName]],
                context: this.getContext(playerParams)
            };
        });
        (0, _defineProperty._)(this, "getEvent", (eventType, eventName, opts)=>{
            const event = EVENTS[eventType][eventName];
            switch(eventType){
                case "APPLICATION":
                    return this.getApplicationEvent(event);
                case "PLAYER":
                    return this.getPlayerEvent(eventName, opts);
                case "UX":
                    return this.getUXEvent(event, opts);
                default:
                    return null;
            }
        });
        (0, _defineProperty._)(this, "getCurrentTime", ()=>Math.round(new Date().getTime() / 1000));
        (0, _defineProperty._)(this, "updatePlayerTime", (playerTime)=>{
            this.playerCurrentTime = Math.round(playerTime);
            if (this.lastPlayerCurrentTime < 0) this.lastPlayerCurrentTime = this.playerCurrentTime;
        });
        (0, _defineProperty._)(this, "setSessionID", (sessionId)=>{
            this.newSessionId = sessionId;
        });
        (0, _defineProperty._)(this, "getContext", (event)=>{
            const enrichedEvent = this.getBaseParams(event);
            if (enrichedEvent === null) throw new Error("baseSeedMethod must return event!");
            // Setting up basic timestamps & version
            const dateTimeNow = new Date();
            enrichedEvent.device_timestamp = Number(dateTimeNow);
            enrichedEvent.device_timezone_offset = Math.abs(dateTimeNow.getTimezoneOffset());
            enrichedEvent.analytics_version = this.analytics_version;
            this.newSessionId = (0, _sevenStore.Store).getOzTamId();
            enrichedEvent.app_session_id = this.newSessionId;
            const payload = getUnstructEventObject(enrichedEvent);
            return [
                payload
            ];
        });
        (0, _defineProperty._)(this, "trackProgress", ()=>{
            this.currentTime = this.getCurrentTime();
            if (this.lastPlayerCurrentTime !== this.playerCurrentTime) this.track(`PLAYER.${this.currentVideo.type}_PROGRESS`);
            this.lastTime = this.currentTime;
            this.lastPlayerCurrentTime = this.playerCurrentTime;
        });
        (0, _defineProperty._)(this, "getSessionId", (hasLoadFired)=>{
            if (hasLoadFired) return this.currentVideo.sessionId;
            this.newSessionId = (0, _sevenStore.Store).getOzTamId();
            return this.newSessionId;
        });
        (0, _defineProperty._)(this, "track", (event_, opts_)=>{
            var _EVENTS_eventType;
            const event = event_.split(".");
            const opts = (0, _objectSpreadProps._)((0, _objectSpread._)({}, opts_), {
                gigyaId: (0, _sevenStore.Store).UserInfo.subject
            });
            if (event.length !== 2) return;
            const eventType = event[0];
            const eventName = event[1];
            if ((_EVENTS_eventType = EVENTS[eventType]) === null || _EVENTS_eventType === void 0 ? void 0 : _EVENTS_eventType[eventName]) {
                if (eventName === "PAUSE" && !this.isVideoPlaying || eventName === "RESUME" && this.isVideoPlaying || eventName === "LIVE_PROGRESS" && !this.isVideoPlaying) return;
                const event = this.getEvent(eventType, eventName, opts);
                (0, _browserTracker.trackStructEvent)(event);
            }
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            this.trackProgress();
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
                this.progressInterval = null;
            }
            this.isVideoPlaying = false;
            this.newSessionId = "";
            this.currentVideo = {
                sessionId: "",
                mediaId: "",
                contentLength: 0,
                url: "",
                type: "",
                playerChannelName: ""
            };
            this.currentTime = -1;
            this.lastTime = -1;
            this.playerCurrentTime = -1;
            this.lastPlayerCurrentTime = -1;
        });
        if (!this.initialized) {
            (0, _browserTracker.newTracker)("7plus", (0, _sevenStore.Store).AppConfig.endpoints.SNOWPLOW_URL, {
                appId: "7plus",
                platform: "tv"
            });
            console.debug("[acc] Snowplow Analytics: configured");
        }
        this.initialized = true;
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","@snowplow/browser-tracker":"6O3YL","../helpers/seven-store":"h8xnN","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"6O3YL":[function(require,module,exports) {
/*!
 * Browser tracker for Snowplow v3.16.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "version", ()=>(0, _trackerCore.version));
parcelHelpers.export(exports, "addGlobalContexts", ()=>addGlobalContexts);
parcelHelpers.export(exports, "addPlugin", ()=>addPlugin);
parcelHelpers.export(exports, "clearGlobalContexts", ()=>clearGlobalContexts);
parcelHelpers.export(exports, "clearUserData", ()=>clearUserData);
parcelHelpers.export(exports, "crossDomainLinker", ()=>crossDomainLinker);
parcelHelpers.export(exports, "disableActivityTracking", ()=>disableActivityTracking);
parcelHelpers.export(exports, "disableActivityTrackingCallback", ()=>disableActivityTrackingCallback);
parcelHelpers.export(exports, "disableAnonymousTracking", ()=>disableAnonymousTracking);
parcelHelpers.export(exports, "discardBrace", ()=>discardBrace);
parcelHelpers.export(exports, "discardHashTag", ()=>discardHashTag);
parcelHelpers.export(exports, "enableActivityTracking", ()=>enableActivityTracking);
parcelHelpers.export(exports, "enableActivityTrackingCallback", ()=>enableActivityTrackingCallback);
parcelHelpers.export(exports, "enableAnonymousTracking", ()=>enableAnonymousTracking);
parcelHelpers.export(exports, "flushBuffer", ()=>flushBuffer);
parcelHelpers.export(exports, "newSession", ()=>newSession);
parcelHelpers.export(exports, "newTracker", ()=>newTracker);
parcelHelpers.export(exports, "preservePageViewId", ()=>preservePageViewId);
parcelHelpers.export(exports, "removeGlobalContexts", ()=>removeGlobalContexts);
parcelHelpers.export(exports, "setBufferSize", ()=>setBufferSize);
parcelHelpers.export(exports, "setCollectorUrl", ()=>setCollectorUrl);
parcelHelpers.export(exports, "setCookiePath", ()=>setCookiePath);
parcelHelpers.export(exports, "setCustomUrl", ()=>setCustomUrl);
parcelHelpers.export(exports, "setDocumentTitle", ()=>setDocumentTitle);
parcelHelpers.export(exports, "setOptOutCookie", ()=>setOptOutCookie);
parcelHelpers.export(exports, "setReferrerUrl", ()=>setReferrerUrl);
parcelHelpers.export(exports, "setUserId", ()=>setUserId);
parcelHelpers.export(exports, "setUserIdFromCookie", ()=>setUserIdFromCookie);
parcelHelpers.export(exports, "setUserIdFromLocation", ()=>setUserIdFromLocation);
parcelHelpers.export(exports, "setUserIdFromReferrer", ()=>setUserIdFromReferrer);
parcelHelpers.export(exports, "setVisitorCookieTimeout", ()=>setVisitorCookieTimeout);
parcelHelpers.export(exports, "trackPageView", ()=>trackPageView);
parcelHelpers.export(exports, "trackSelfDescribingEvent", ()=>trackSelfDescribingEvent);
parcelHelpers.export(exports, "trackStructEvent", ()=>trackStructEvent);
parcelHelpers.export(exports, "updatePageActivity", ()=>updatePageActivity);
var _browserTrackerCore = require("@snowplow/browser-tracker-core");
var _trackerCore = require("@snowplow/tracker-core");
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * Expires current session and starts a new session.
 *
 * @param trackers - The tracker identifiers which will have their session refreshed
 */ function newSession(trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.newSession();
    });
}
/**
 * Override referrer
 *
 * @param url - Custom Referrer which will be used as override
 * @param trackers - The tracker identifiers which will be configured
 */ function setReferrerUrl(url, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setReferrerUrl(url);
    });
}
/**
 * Override url
 *
 * @param url - Custom URL which will be used as override
 * @param trackers - The tracker identifiers which will be configured
 */ function setCustomUrl(url, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setCustomUrl(url);
    });
}
/**
 * Override document.title
 *
 * @param title - Document title which will be used as override
 * @param trackers - The tracker identifiers which will be configured
 */ function setDocumentTitle(title, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setDocumentTitle(title);
    });
}
/**
 * Strip hash tag (or anchor) from URL
 *
 * @param enable - Whether to enable stripping of hash
 * @param trackers - The tracker identifiers which will be configured
 */ function discardHashTag(enable, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.discardHashTag(enable);
    });
}
/**
 * Strip braces from URL
 *
 * @param enable - Whther to enable stripping of braces
 * @param trackers - The tracker identifiers which will be configured
 */ function discardBrace(enable, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.discardBrace(enable);
    });
}
/**
 * Set first-party cookie path
 *
 * @param path - The path which will be used when setting cookies
 * @param trackers - The tracker identifiers which will be configured
 */ function setCookiePath(path, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setCookiePath(path);
    });
}
/**
 * Set visitor cookie timeout (in seconds)
 *
 * @param timeout - The timeout until cookies will expire
 * @param trackers - The tracker identifiers which will be configured
 */ function setVisitorCookieTimeout(timeout, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setVisitorCookieTimeout(timeout);
    });
}
/**
 * Enable querystring decoration for links pasing a filter
 *
 * @param crossDomainLinker - Function used to determine which links to decorate
 * @param trackers - The tracker identifiers which will be configured
 */ function crossDomainLinker(crossDomainLinkerCriterion, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.crossDomainLinker(crossDomainLinkerCriterion);
    });
}
/**
 * Enables page activity tracking (sends page pings to the Collector regularly).
 *
 * @param configuration - The activity tracking configuration
 * @param trackers - The tracker identifiers which will be configured
 */ function enableActivityTracking(configuration, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.enableActivityTracking(configuration);
    });
}
/**
 * Enables page activity tracking (replaces collector ping with callback).
 *
 * @param configuration - The activity tracking callback configuration
 * @param trackers - The tracker identifiers which will be configured
 */ function enableActivityTrackingCallback(configuration, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.enableActivityTrackingCallback(configuration);
    });
}
/**
 * Disables page activity tracking.
 *
 * @param trackers - The tracker identifiers the activity tracking will be disabled.
 */ function disableActivityTracking(trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.disableActivityTracking();
    });
}
/**
 * Disables page activity tracking callback.
 *
 * @param trackers - The tracker identifiers the activity tracking callback will be disabled.
 */ function disableActivityTrackingCallback(trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.disableActivityTrackingCallback();
    });
}
/**
 * Triggers the activityHandler manually to allow external user defined activity. i.e. While watching a video
 *
 * @param trackers - The tracker identifiers which will be updated
 */ function updatePageActivity(trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.updatePageActivity();
    });
}
/**
 * Sets the opt out cookie.
 *
 * @param name - of the opt out cookie
 * @param trackers - The tracker identifiers which will be configured
 */ function setOptOutCookie(name, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setOptOutCookie(name);
    });
}
/**
 * Set the business-defined user ID for this user.
 *
 * @param userId - The business-defined user ID
 * @param trackers - The tracker identifiers which will be configured
 */ function setUserId(userId, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setUserId(userId);
    });
}
/**
 * Set the business-defined user ID for this user using the location querystring.
 *
 * @param querystringField - Name of a querystring name-value pair
 * @param trackers - The tracker identifiers which will be configured
 */ function setUserIdFromLocation(querystringField, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setUserIdFromLocation(querystringField);
    });
}
/**
 * Set the business-defined user ID for this user using the referrer querystring.
 *
 * @param querystringField - Name of a querystring name-value pair
 * @param trackers - The tracker identifiers which will be configured
 */ function setUserIdFromReferrer(querystringField, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setUserIdFromReferrer(querystringField);
    });
}
/**
 * Set the business-defined user ID for this user to the value of a cookie.
 *
 * @param cookieName - Name of the cookie whose value will be assigned to businessUserId
 * @param trackers - The tracker identifiers which will be configured
 */ function setUserIdFromCookie(cookieName, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setUserIdFromCookie(cookieName);
    });
}
/**
 * Specify the Snowplow collector URL. Specific http or https to force it
 * or leave it off to match the website protocol.
 *
 * @param collectorUrl - The collector URL, with or without protocol
 * @param trackers - The tracker identifiers which will be configured
 */ function setCollectorUrl(collectorUrl, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setCollectorUrl(collectorUrl);
    });
}
/**
 * Set the buffer size
 * Can be useful if you want to stop batching requests to ensure events start
 * sending closer to event creation
 *
 * @param newBufferSize - The value with which to update the bufferSize to
 * @param trackers - The tracker identifiers which will be flushed
 */ function setBufferSize(newBufferSize, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.setBufferSize(newBufferSize);
    });
}
/**
 * Send all events in the outQueue
 * Only need to use this when sending events with a bufferSize of at least 2
 *
 * @param configuration - The configuration to use following flushing the buffer
 * @param trackers - The tracker identifiers which will be flushed
 */ function flushBuffer(configuration, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.flushBuffer(configuration);
    });
}
/**
 * Track a visit to a web page
 *
 * @param event - The Page View Event properties
 * @param trackers - The tracker identifiers which the event will be sent to
 */ function trackPageView(event, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.trackPageView(event);
    });
}
/**
 * Track a structured event
 * A classic style of event tracking, allows for easier movement between analytics
 * systems. A loosely typed event, creating a Self Describing event is preferred, but
 * useful for interoperability.
 *
 * @param event - The Structured Event properties
 * @param trackers - The tracker identifiers which the event will be sent to
 */ function trackStructEvent(event, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.core.track((0, _trackerCore.buildStructEvent)(event), event.context, event.timestamp);
    });
}
/**
 * Track a self-describing event happening on this page.
 * A custom event type, allowing for an event to be tracked using your own custom schema
 * and a data object which conforms to the supplied schema
 *
 * @param event - The event information
 * @param trackers - The tracker identifiers which the event will be sent to
 */ function trackSelfDescribingEvent(event, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.core.track((0, _trackerCore.buildSelfDescribingEvent)({
            event: event.event
        }), event.context, event.timestamp);
    });
}
/**
 * All provided contexts will be sent with every event
 *
 * @param contexts - An array of contexts or conditional contexts
 * @param trackers - The tracker identifiers which the global contexts will be added to
 */ function addGlobalContexts(contexts, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.core.addGlobalContexts(contexts);
    });
}
/**
 * All provided contexts will no longer be sent with every event
 *
 * @param contexts - An array of contexts or conditional contexts
 * @param trackers - The tracker identifiers which the global contexts will be remove from
 */ function removeGlobalContexts(contexts, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.core.removeGlobalContexts(contexts);
    });
}
/**
 * Clear all global contexts that are sent with events
 *
 * @param trackers - The tracker identifiers which the global contexts will be cleared from
 */ function clearGlobalContexts(trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.core.clearGlobalContexts();
    });
}
/**
 * Stop regenerating `pageViewId` (available from `web_page` context)
 *
 * @param trackers - The tracker identifiers which the event will preserve their Page View Ids
 */ function preservePageViewId(trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.preservePageViewId();
    });
}
/**
 * Disables anonymous tracking if active (ie. tracker initialized with `anonymousTracking`)
 * For stateStorageStrategy override, uses supplied value first,
 * falls back to one defined in initial config, otherwise uses cookieAndLocalStorage.
 *
 * @param configuration - The configuration for disabling anonymous tracking
 * @param trackers - The tracker identifiers which the event will be sent to
 */ function disableAnonymousTracking(configuration, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.disableAnonymousTracking(configuration);
    });
}
/**
 * Enables anonymous tracking (ie. tracker initialized without `anonymousTracking`)
 *
 * @param configuration - The configuration for enabling anonymous tracking
 * @param trackers - The tracker identifiers which the event will be sent to
 */ function enableAnonymousTracking(configuration, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.enableAnonymousTracking(configuration);
    });
}
/**
 * Clears all cookies and local storage containing user and session identifiers
 *
 * @param trackers - The tracker identifiers which the event will be sent to
 */ function clearUserData(configuration, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.clearUserData(configuration);
    });
}
/**
 * Add a plugin into the plugin collection after trackers have already been initialised
 *
 * @param configuration - The plugin to add
 * @param trackers - The tracker identifiers which the plugin will be added to
 */ function addPlugin(configuration, trackers) {
    (0, _browserTrackerCore.dispatchToTrackers)(trackers, function(t) {
        t.addPlugin(configuration);
    });
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var state = typeof window !== "undefined" ? (0, _browserTrackerCore.createSharedState)() : undefined;
/**
 * Initialise a new tracker
 *
 * @param trackerId - The tracker id - also known as tracker namespace
 * @param endpoint - Collector endpoint in the form collector.mysite.com
 * @param configuration - The initialisation options of the tracker
 */ function newTracker(trackerId, endpoint, configuration) {
    if (configuration === void 0) configuration = {};
    if (state) return (0, _browserTrackerCore.addTracker)(trackerId, trackerId, "js-".concat((0, _trackerCore.version)), endpoint, state, configuration);
    else return undefined;
}

},{"@snowplow/browser-tracker-core":"enuw0","@snowplow/tracker-core":"1ScGP","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"enuw0":[function(require,module,exports) {
/*!
 * Core functionality for Snowplow Browser trackers v3.16.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SharedState", ()=>SharedState);
parcelHelpers.export(exports, "addEventListener", ()=>addEventListener);
parcelHelpers.export(exports, "addTracker", ()=>addTracker);
parcelHelpers.export(exports, "allTrackerNames", ()=>allTrackerNames);
parcelHelpers.export(exports, "allTrackers", ()=>allTrackers);
parcelHelpers.export(exports, "attemptDeleteLocalStorage", ()=>attemptDeleteLocalStorage);
parcelHelpers.export(exports, "attemptGetLocalStorage", ()=>attemptGetLocalStorage);
parcelHelpers.export(exports, "attemptGetSessionStorage", ()=>attemptGetSessionStorage);
parcelHelpers.export(exports, "attemptWriteLocalStorage", ()=>attemptWriteLocalStorage);
parcelHelpers.export(exports, "attemptWriteSessionStorage", ()=>attemptWriteSessionStorage);
parcelHelpers.export(exports, "cookie", ()=>cookie);
parcelHelpers.export(exports, "createSharedState", ()=>createSharedState);
parcelHelpers.export(exports, "decorateQuerystring", ()=>decorateQuerystring);
parcelHelpers.export(exports, "deleteCookie", ()=>deleteCookie);
parcelHelpers.export(exports, "dispatchToTrackers", ()=>dispatchToTrackers);
parcelHelpers.export(exports, "dispatchToTrackersInCollection", ()=>dispatchToTrackersInCollection);
parcelHelpers.export(exports, "findRootDomain", ()=>findRootDomain);
parcelHelpers.export(exports, "fixupDomain", ()=>fixupDomain);
parcelHelpers.export(exports, "fixupTitle", ()=>fixupTitle);
parcelHelpers.export(exports, "fixupUrl", ()=>fixupUrl);
parcelHelpers.export(exports, "fromQuerystring", ()=>fromQuerystring);
parcelHelpers.export(exports, "getCookiesWithPrefix", ()=>getCookiesWithPrefix);
parcelHelpers.export(exports, "getCssClasses", ()=>getCssClasses);
parcelHelpers.export(exports, "getFilterByClass", ()=>getFilterByClass);
parcelHelpers.export(exports, "getFilterByName", ()=>getFilterByName);
parcelHelpers.export(exports, "getHostName", ()=>getHostName);
parcelHelpers.export(exports, "getReferrer", ()=>getReferrer);
parcelHelpers.export(exports, "getTracker", ()=>getTracker);
parcelHelpers.export(exports, "getTrackers", ()=>getTrackers);
parcelHelpers.export(exports, "hasLocalStorage", ()=>hasLocalStorage);
parcelHelpers.export(exports, "hasSessionStorage", ()=>hasSessionStorage);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isInteger", ()=>isInteger);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isValueInArray", ()=>isValueInArray);
parcelHelpers.export(exports, "localStorageAccessible", ()=>localStorageAccessible);
parcelHelpers.export(exports, "parseAndValidateFloat", ()=>parseAndValidateFloat);
parcelHelpers.export(exports, "parseAndValidateInt", ()=>parseAndValidateInt);
parcelHelpers.export(exports, "trackerExists", ()=>trackerExists);
var _trackerCore = require("@snowplow/tracker-core");
var _tslib = require("tslib");
var _sha1 = require("sha1");
var _sha1Default = parcelHelpers.interopDefault(_sha1);
var _uuid = require("uuid");
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * Attempt to get a value from localStorage
 *
 * @param string - key
 * @returns string The value obtained from localStorage, or
 *                undefined if localStorage is inaccessible
 */ function attemptGetLocalStorage(key) {
    try {
        var localStorageAlias = window.localStorage, exp = localStorageAlias.getItem(key + ".expires");
        if (exp === null || +exp > Date.now()) return localStorageAlias.getItem(key);
        else {
            localStorageAlias.removeItem(key);
            localStorageAlias.removeItem(key + ".expires");
        }
        return undefined;
    } catch (e) {
        return undefined;
    }
}
/**
 * Attempt to write a value to localStorage
 *
 * @param string - key
 * @param string - value
 * @param number - ttl Time to live in seconds, defaults to 2 years from Date.now()
 * @returns boolean Whether the operation succeeded
 */ function attemptWriteLocalStorage(key, value, ttl) {
    if (ttl === void 0) ttl = 63072000;
    try {
        var localStorageAlias = window.localStorage, t = Date.now() + ttl * 1000;
        localStorageAlias.setItem("".concat(key, ".expires"), t.toString());
        localStorageAlias.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Attempt to delete a value from localStorage
 *
 * @param string - key
 * @returns boolean Whether the operation succeeded
 */ function attemptDeleteLocalStorage(key) {
    try {
        var localStorageAlias = window.localStorage;
        localStorageAlias.removeItem(key);
        localStorageAlias.removeItem(key + ".expires");
        return true;
    } catch (e) {
        return false;
    }
}
/**
 * Attempt to get a value from sessionStorage
 *
 * @param string - key
 * @returns string The value obtained from sessionStorage, or
 *                undefined if sessionStorage is inaccessible
 */ function attemptGetSessionStorage(key) {
    try {
        return window.sessionStorage.getItem(key);
    } catch (e) {
        return undefined;
    }
}
/**
 * Attempt to write a value to sessionStorage
 *
 * @param string - key
 * @param string - value
 * @returns boolean Whether the operation succeeded
 */ function attemptWriteSessionStorage(key, value) {
    try {
        window.sessionStorage.setItem(key, value);
        return true;
    } catch (e) {
        return false;
    }
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * Checks if an object is a string
 * @param str - The object to check
 */ function isString(str) {
    if (str && typeof str.valueOf() === "string") return true;
    return false;
}
/**
 * Checks if an object is an integer
 * @param int - The object to check
 */ function isInteger(int) {
    return Number.isInteger && Number.isInteger(int) || typeof int === "number" && isFinite(int) && Math.floor(int) === int;
}
/**
 * Checks if the input parameter is a function
 * @param func - The object to check
 */ function isFunction(func) {
    if (func && typeof func === "function") return true;
    return false;
}
/**
 * Cleans up the page title
 */ function fixupTitle(title) {
    if (!isString(title)) {
        title = title.text || "";
        var tmp = document.getElementsByTagName("title");
        if (tmp && tmp[0] != null) title = tmp[0].text;
    }
    return title;
}
/**
 * Extract hostname from URL
 */ function getHostName(url) {
    // scheme : // [username [: password] @] hostname [: port] [/ [path] [? query] [# fragment]]
    var e = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"), matches = e.exec(url);
    return matches ? matches[1] : url;
}
/**
 * Fix-up domain
 */ function fixupDomain(domain) {
    var dl = domain.length;
    // remove trailing '.'
    if (domain.charAt(--dl) === ".") domain = domain.slice(0, dl);
    // remove leading '*'
    if (domain.slice(0, 2) === "*.") domain = domain.slice(1);
    return domain;
}
/**
 * Get page referrer. In the case of a single-page app,
 * if the URL changes without the page reloading, pass
 * in the old URL. It will be returned unless overriden
 * by a "refer(r)er" parameter in the querystring.
 *
 * @param string - oldLocation Optional.
 * @returns string The referrer
 */ function getReferrer(oldLocation) {
    var windowAlias = window, fromQs = fromQuerystring("referrer", windowAlias.location.href) || fromQuerystring("referer", windowAlias.location.href);
    // Short-circuit
    if (fromQs) return fromQs;
    // In the case of a single-page app, return the old URL
    if (oldLocation) return oldLocation;
    try {
        if (windowAlias.top) return windowAlias.top.document.referrer;
        else if (windowAlias.parent) return windowAlias.parent.document.referrer;
    } catch (_a) {}
    return document.referrer;
}
/**
 * Cross-browser helper function to add event handler
 */ function addEventListener(element, eventType, eventHandler, options) {
    if (element.addEventListener) {
        element.addEventListener(eventType, eventHandler, options);
        return true;
    }
    // IE Support
    if (element.attachEvent) return element.attachEvent("on" + eventType, eventHandler);
    element["on" + eventType] = eventHandler;
}
/**
 * Return value from name-value pair in querystring
 */ function fromQuerystring(field, url) {
    var match = new RegExp("^[^#]*[?&]" + field + "=([^&#]*)").exec(url);
    if (!match) return null;
    return decodeURIComponent(match[1].replace(/\+/g, " "));
}
/**
 * Add a name-value pair to the querystring of a URL
 *
 * @param string - url URL to decorate
 * @param string - name Name of the querystring pair
 * @param string - value Value of the querystring pair
 */ function decorateQuerystring(url, name, value) {
    var initialQsParams = name + "=" + value;
    var hashSplit = url.split("#");
    var qsSplit = hashSplit[0].split("?");
    var beforeQuerystring = qsSplit.shift();
    // Necessary because a querystring may contain multiple question marks
    var querystring = qsSplit.join("?");
    if (!querystring) querystring = initialQsParams;
    else {
        // Whether this is the first time the link has been decorated
        var initialDecoration = true;
        var qsFields = querystring.split("&");
        for(var i = 0; i < qsFields.length; i++)if (qsFields[i].substr(0, name.length + 1) === name + "=") {
            initialDecoration = false;
            qsFields[i] = initialQsParams;
            querystring = qsFields.join("&");
            break;
        }
        if (initialDecoration) querystring = initialQsParams + "&" + querystring;
    }
    hashSplit[0] = beforeQuerystring + "?" + querystring;
    return hashSplit.join("#");
}
/**
 * Finds the root domain
 */ function findRootDomain(sameSite, secure) {
    var windowLocationHostnameAlias = window.location.hostname, cookiePrefix = "_sp_root_domain_test_", cookieName = cookiePrefix + new Date().getTime(), cookieValue = "_test_value_" + new Date().getTime();
    var locationParts = windowLocationHostnameAlias.split(".");
    for(var idx = locationParts.length - 2; idx >= 0; idx--){
        var currentDomain = locationParts.slice(idx).join(".");
        cookie(cookieName, cookieValue, 0, "/", currentDomain, sameSite, secure);
        if (cookie(cookieName) === cookieValue) {
            // Clean up created cookie(s)
            deleteCookie(cookieName, currentDomain, sameSite, secure);
            var cookieNames = getCookiesWithPrefix(cookiePrefix);
            for(var i = 0; i < cookieNames.length; i++)deleteCookie(cookieNames[i], currentDomain, sameSite, secure);
            return currentDomain;
        }
    }
    // Cookies cannot be read
    return windowLocationHostnameAlias;
}
/**
 * Checks whether a value is present within an array
 *
 * @param val - The value to check for
 * @param array - The array to check within
 * @returns boolean Whether it exists
 */ function isValueInArray(val, array) {
    for(var i = 0; i < array.length; i++){
        if (array[i] === val) return true;
    }
    return false;
}
/**
 * Deletes an arbitrary cookie by setting the expiration date to the past
 *
 * @param cookieName - The name of the cookie to delete
 * @param domainName - The domain the cookie is in
 */ function deleteCookie(cookieName, domainName, sameSite, secure) {
    cookie(cookieName, "", -1, "/", domainName, sameSite, secure);
}
/**
 * Fetches the name of all cookies beginning with a certain prefix
 *
 * @param cookiePrefix - The prefix to check for
 * @returns array The cookies that begin with the prefix
 */ function getCookiesWithPrefix(cookiePrefix) {
    var cookies = document.cookie.split("; ");
    var cookieNames = [];
    for(var i = 0; i < cookies.length; i++)if (cookies[i].substring(0, cookiePrefix.length) === cookiePrefix) cookieNames.push(cookies[i]);
    return cookieNames;
}
/**
 * Get and set the cookies associated with the current document in browser
 * This implementation always returns a string, returns the cookie value if only name is specified
 *
 * @param name - The cookie name (required)
 * @param value - The cookie value
 * @param ttl - The cookie Time To Live (seconds)
 * @param path - The cookies path
 * @param domain - The cookies domain
 * @param samesite - The cookies samesite attribute
 * @param secure - Boolean to specify if cookie should be secure
 * @returns string The cookies value
 */ function cookie(name, value, ttl, path, domain, samesite, secure) {
    if (arguments.length > 1) return document.cookie = name + "=" + encodeURIComponent(value !== null && value !== void 0 ? value : "") + (ttl ? "; Expires=" + new Date(+new Date() + ttl * 1000).toUTCString() : "") + (path ? "; Path=" + path : "") + (domain ? "; Domain=" + domain : "") + (samesite ? "; SameSite=" + samesite : "") + (secure ? "; Secure" : "");
    return decodeURIComponent((("; " + document.cookie).split("; " + name + "=")[1] || "").split(";")[0]);
}
/**
 * Parses an object and returns either the
 * integer or undefined.
 *
 * @param obj - The object to parse
 * @returns the result of the parse operation
 */ function parseAndValidateInt(obj) {
    var result = parseInt(obj);
    return isNaN(result) ? undefined : result;
}
/**
 * Parses an object and returns either the
 * number or undefined.
 *
 * @param obj - The object to parse
 * @returns the result of the parse operation
 */ function parseAndValidateFloat(obj) {
    var result = parseFloat(obj);
    return isNaN(result) ? undefined : result;
}
/**
 * Convert a criterion object to a filter function
 *
 * @param object - criterion Either {allowlist: [array of allowable strings]}
 *                             or {denylist: [array of allowable strings]}
 *                             or {filter: function (elt) {return whether to track the element}
 * @param boolean - byClass Whether to allowlist/denylist based on an element's classes (for forms)
 *                        or name attribute (for fields)
 */ function getFilterByClass(criterion) {
    // If the criterion argument is not an object, add listeners to all elements
    if (criterion == null || typeof criterion !== "object" || Array.isArray(criterion)) return function() {
        return true;
    };
    var inclusive = Object.prototype.hasOwnProperty.call(criterion, "allowlist");
    var specifiedClassesSet = getSpecifiedClassesSet(criterion);
    return getFilter(criterion, function(elt) {
        return checkClass(elt, specifiedClassesSet) === inclusive;
    });
}
/**
 * Convert a criterion object to a filter function
 *
 * @param object - criterion Either {allowlist: [array of allowable strings]}
 *                             or {denylist: [array of allowable strings]}
 *                             or {filter: function (elt) {return whether to track the element}
 */ function getFilterByName(criterion) {
    // If the criterion argument is not an object, add listeners to all elements
    if (criterion == null || typeof criterion !== "object" || Array.isArray(criterion)) return function() {
        return true;
    };
    var inclusive = criterion.hasOwnProperty("allowlist");
    var specifiedClassesSet = getSpecifiedClassesSet(criterion);
    return getFilter(criterion, function(elt) {
        return elt.name in specifiedClassesSet === inclusive;
    });
}
/**
 * List the classes of a DOM element without using elt.classList (for compatibility with IE 9)
 */ function getCssClasses(elt) {
    return elt.className.match(/\S+/g) || [];
}
/**
 * Check whether an element has at least one class from a given list
 */ function checkClass(elt, classList) {
    var classes = getCssClasses(elt);
    for(var _i = 0, classes_1 = classes; _i < classes_1.length; _i++){
        var className = classes_1[_i];
        if (classList[className]) return true;
    }
    return false;
}
function getFilter(criterion, fallbackFilter) {
    if (criterion.hasOwnProperty("filter") && criterion.filter) return criterion.filter;
    return fallbackFilter;
}
function getSpecifiedClassesSet(criterion) {
    // Convert the array of classes to an object of the form {class1: true, class2: true, ...}
    var specifiedClassesSet = {};
    var specifiedClasses = criterion.allowlist || criterion.denylist;
    if (specifiedClasses) {
        if (!Array.isArray(specifiedClasses)) specifiedClasses = [
            specifiedClasses
        ];
        for(var i = 0; i < specifiedClasses.length; i++)specifiedClassesSet[specifiedClasses[i]] = true;
    }
    return specifiedClassesSet;
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * Checks whether sessionStorage is available, in a way that
 * does not throw a SecurityError in Firefox if "always ask"
 * is enabled for cookies (https://github.com/snowplow/snowplow/issues/163).
 */ function hasSessionStorage() {
    try {
        return !!window.sessionStorage;
    } catch (e) {
        return true; // SecurityError when referencing it means it exists
    }
}
/*
 * Checks whether localStorage is available, in a way that
 * does not throw a SecurityError in Firefox if "always ask"
 * is enabled for cookies (https://github.com/snowplow/snowplow/issues/163).
 */ function hasLocalStorage() {
    try {
        return !!window.localStorage;
    } catch (e) {
        return true; // SecurityError when referencing it means it exists
    }
}
/*
 * Checks whether localStorage is accessible
 * sets and removes an item to handle private IOS5 browsing
 * (http://git.io/jFB2Xw)
 */ function localStorageAccessible() {
    var mod = "modernizr";
    if (!hasLocalStorage()) return false;
    try {
        var ls = window.localStorage;
        ls.setItem(mod, mod);
        ls.removeItem(mod);
        return true;
    } catch (e) {
        return false;
    }
}
var WEB_PAGE_SCHEMA = "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0";
var BROWSER_CONTEXT_SCHEMA = "iglu:com.snowplowanalytics.snowplow/browser_context/jsonschema/1-0-0";
var CLIENT_SESSION_SCHEMA = "iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2";
var PAYLOAD_DATA_SCHEMA = "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4";
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * Object handling sending events to a collector.
 * Instantiated once per tracker instance.
 *
 * @param id - The Snowplow function name (used to generate the localStorage key)
 * @param sharedSate - Stores reference to the outbound queue so it can unload the page when all queues are empty
 * @param useLocalStorage - Whether to use localStorage at all
 * @param eventMethod - if null will use 'beacon' otherwise can be set to 'post', 'get', or 'beacon' to force.
 * @param postPath - The path where events are to be posted
 * @param bufferSize - How many events to batch in localStorage before sending them all
 * @param maxPostBytes - Maximum combined size in bytes of the event JSONs in a POST request
 * @param maxGetBytes - Maximum size in bytes of the complete event URL string in a GET request. 0 for no limit.
 * @param useStm - Whether to add timestamp to events
 * @param maxLocalStorageQueueSize - Maximum number of queued events we will attempt to store in local storage
 * @param connectionTimeout - Defines how long to wait before aborting the request
 * @param anonymousTracking - Defines whether to set the SP-Anonymous header for anonymous tracking on GET and POST
 * @param customHeaders - Allows custom headers to be defined and passed on XMLHttpRequest requests
 * @param withCredentials - Sets the value of the withCredentials flag on XMLHttpRequest (GET and POST) requests
 * @param retryStatusCodes – Failure HTTP response status codes from Collector for which sending events should be retried (they can override the `dontRetryStatusCodes`)
 * @param dontRetryStatusCodes – Failure HTTP response status codes from Collector for which sending events should not be retried
 * @param idService - Id service full URL. This URL will be added to the queue and will be called using a GET method.
 * @returns object OutQueueManager instance
 */ function OutQueueManager(id, sharedSate, useLocalStorage, eventMethod, postPath, bufferSize, maxPostBytes, maxGetBytes, useStm, maxLocalStorageQueueSize, connectionTimeout, anonymousTracking, customHeaders, withCredentials, retryStatusCodes, dontRetryStatusCodes, idService) {
    var executingQueue = false, configCollectorUrl, outQueue = [], idServiceCalled = false;
    //Force to lower case if its a string
    eventMethod = typeof eventMethod === "string" ? eventMethod.toLowerCase() : eventMethod;
    // Use the Beacon API if eventMethod is set true, 'true', or 'beacon'.
    var isBeaconRequested = eventMethod === true || eventMethod === "beacon" || eventMethod === "true", // Fall back to POST or GET for browsers which don't support Beacon API
    isBeaconAvailable = Boolean(isBeaconRequested && window.navigator && window.navigator.sendBeacon && !hasWebKitBeaconBug(window.navigator.userAgent)), useBeacon = isBeaconAvailable && isBeaconRequested, // Use GET if specified
    isGetRequested = eventMethod === "get", // Don't use XhrHttpRequest for browsers which don't support CORS XMLHttpRequests (e.g. IE <= 9)
    useXhr = Boolean(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest()), // Use POST if specified
    usePost = !isGetRequested && useXhr && (eventMethod === "post" || isBeaconRequested), // Resolve all options and capabilities and decide path
    path = usePost ? postPath : "/i", // Different queue names for GET and POST since they are stored differently
    queueName = "snowplowOutQueue_".concat(id, "_").concat(usePost ? "post2" : "get");
    // Ensure we don't set headers when beacon is the requested eventMethod as we might fallback to POST
    // and end up sending them in older browsers which don't support beacon leading to inconsistencies
    if (isBeaconRequested) customHeaders = {};
    // Get buffer size or set 1 if unable to buffer
    bufferSize = useLocalStorage && localStorageAccessible() && usePost && bufferSize || 1;
    if (useLocalStorage) // Catch any JSON parse errors or localStorage that might be thrown
    try {
        var localStorageQueue = window.localStorage.getItem(queueName);
        outQueue = localStorageQueue ? JSON.parse(localStorageQueue) : [];
    } catch (e) {}
    // Initialize to and empty array if we didn't get anything out of localStorage
    if (!Array.isArray(outQueue)) outQueue = [];
    // Used by pageUnloadGuard
    sharedSate.outQueues.push(outQueue);
    if (useXhr && bufferSize > 1) sharedSate.bufferFlushers.push(function(sync) {
        if (!executingQueue) executeQueue(sync);
    });
    /*
     * Convert a dictionary to a querystring
     * The context field is the last in the querystring
     */ function getQuerystring(request) {
        var querystring = "?", lowPriorityKeys = {
            co: true,
            cx: true
        }, firstPair = true;
        for(var key in request)if (request.hasOwnProperty(key) && !lowPriorityKeys.hasOwnProperty(key)) {
            if (!firstPair) querystring += "&";
            else firstPair = false;
            querystring += encodeURIComponent(key) + "=" + encodeURIComponent(request[key]);
        }
        for(var contextKey in lowPriorityKeys)if (request.hasOwnProperty(contextKey) && lowPriorityKeys.hasOwnProperty(contextKey)) querystring += "&" + contextKey + "=" + encodeURIComponent(request[contextKey]);
        return querystring;
    }
    /*
     * Convert numeric fields to strings to match payload_data schema
     */ function getBody(request) {
        var cleanedRequest = Object.keys(request).map(function(k) {
            return [
                k,
                request[k]
            ];
        }).reduce(function(acc, _a) {
            var key = _a[0], value = _a[1];
            acc[key] = value.toString();
            return acc;
        }, {});
        return {
            evt: cleanedRequest,
            bytes: getUTF8Length(JSON.stringify(cleanedRequest))
        };
    }
    /**
     * Count the number of bytes a string will occupy when UTF-8 encoded
     * Taken from http://stackoverflow.com/questions/2848462/count-bytes-in-textarea-using-javascript/
     *
     * @param string - s
     * @returns number Length of s in bytes when UTF-8 encoded
     */ function getUTF8Length(s) {
        var len = 0;
        for(var i = 0; i < s.length; i++){
            var code = s.charCodeAt(i);
            if (code <= 0x7f) len += 1;
            else if (code <= 0x7ff) len += 2;
            else if (code >= 0xd800 && code <= 0xdfff) {
                // Surrogate pair: These take 4 bytes in UTF-8 and 2 chars in UCS-2
                // (Assume next char is the other [valid] half and just skip it)
                len += 4;
                i++;
            } else if (code < 0xffff) len += 3;
            else len += 4;
        }
        return len;
    }
    var postable = function(queue) {
        return typeof queue[0] === "object" && "evt" in queue[0];
    };
    /**
     * Send event as POST request right away without going to queue. Used when the request surpasses maxGetBytes or maxPostBytes
     * @param body POST request body
     * @param configCollectorUrl full collector URL with path
     */ function sendPostRequestWithoutQueueing(body, configCollectorUrl) {
        var xhr = initializeXMLHttpRequest(configCollectorUrl, true, false);
        xhr.send(encloseInPayloadDataEnvelope(attachStmToEvent([
            body.evt
        ])));
    }
    /*
     * Queue for submission to the collector and start processing queue
     */ function enqueueRequest(request, url) {
        configCollectorUrl = url + path;
        var eventTooBigWarning = function(bytes, maxBytes) {
            return (0, _trackerCore.LOG).warn("Event (" + bytes + "B) too big, max is " + maxBytes);
        };
        if (usePost) {
            var body = getBody(request);
            if (body.bytes >= maxPostBytes) {
                eventTooBigWarning(body.bytes, maxPostBytes);
                sendPostRequestWithoutQueueing(body, configCollectorUrl);
                return;
            } else outQueue.push(body);
        } else {
            var querystring = getQuerystring(request);
            if (maxGetBytes > 0) {
                var requestUrl = createGetUrl(querystring);
                var bytes = getUTF8Length(requestUrl);
                if (bytes >= maxGetBytes) {
                    eventTooBigWarning(bytes, maxGetBytes);
                    if (useXhr) {
                        var body = getBody(request);
                        var postUrl = url + postPath;
                        sendPostRequestWithoutQueueing(body, postUrl);
                    }
                    return;
                }
            }
            outQueue.push(querystring);
        }
        var savedToLocalStorage = false;
        if (useLocalStorage) savedToLocalStorage = attemptWriteLocalStorage(queueName, JSON.stringify(outQueue.slice(0, maxLocalStorageQueueSize)));
        // If we're not processing the queue, we'll start.
        if (!executingQueue && (!savedToLocalStorage || outQueue.length >= bufferSize)) executeQueue();
    }
    /*
     * Run through the queue of requests, sending them one at a time.
     * Stops processing when we run out of queued requests, or we get an error.
     */ function executeQueue(sync) {
        if (sync === void 0) sync = false;
        // Failsafe in case there is some way for a bad value like "null" to end up in the outQueue
        while(outQueue.length && typeof outQueue[0] !== "string" && typeof outQueue[0] !== "object")outQueue.shift();
        if (!outQueue.length) {
            executingQueue = false;
            return;
        }
        // Let's check that we have a URL
        if (!isString(configCollectorUrl)) throw "No collector configured";
        executingQueue = true;
        if (idService && !idServiceCalled) {
            var xhr_1 = initializeXMLHttpRequest(idService, false, sync);
            idServiceCalled = true;
            xhr_1.timeout = connectionTimeout;
            xhr_1.onreadystatechange = function() {
                if (xhr_1.readyState === 4) executeQueue();
            };
            xhr_1.send();
            return;
        }
        if (useXhr) {
            // Keep track of number of events to delete from queue
            var chooseHowManyToSend = function(queue) {
                var numberToSend = 0, byteCount = 0;
                while(numberToSend < queue.length){
                    byteCount += queue[numberToSend].bytes;
                    if (byteCount >= maxPostBytes) break;
                    else numberToSend += 1;
                }
                return numberToSend;
            };
            var url = void 0, xhr_2, numberToSend_1;
            if (postable(outQueue)) {
                url = configCollectorUrl;
                xhr_2 = initializeXMLHttpRequest(url, true, sync);
                numberToSend_1 = chooseHowManyToSend(outQueue);
            } else {
                url = createGetUrl(outQueue[0]);
                xhr_2 = initializeXMLHttpRequest(url, false, sync);
                numberToSend_1 = 1;
            }
            // Time out POST requests after connectionTimeout
            var xhrTimeout_1 = setTimeout(function() {
                xhr_2.abort();
                executingQueue = false;
            }, connectionTimeout);
            var removeEventsFromQueue_1 = function(numberToSend) {
                for(var deleteCount = 0; deleteCount < numberToSend; deleteCount++)outQueue.shift();
                if (useLocalStorage) attemptWriteLocalStorage(queueName, JSON.stringify(outQueue.slice(0, maxLocalStorageQueueSize)));
            };
            // The events (`numberToSend` of them), have been sent, so we remove them from the outQueue
            // We also call executeQueue() again, to let executeQueue() check if we should keep running through the queue
            var onPostSuccess_1 = function(numberToSend) {
                removeEventsFromQueue_1(numberToSend);
                executeQueue();
            };
            xhr_2.onreadystatechange = function() {
                if (xhr_2.readyState === 4 && xhr_2.status >= 200) {
                    clearTimeout(xhrTimeout_1);
                    if (xhr_2.status < 300) onPostSuccess_1(numberToSend_1);
                    else {
                        if (!shouldRetryForStatusCode(xhr_2.status)) {
                            (0, _trackerCore.LOG).error("Status ".concat(xhr_2.status, ", will not retry."));
                            removeEventsFromQueue_1(numberToSend_1);
                        }
                        executingQueue = false;
                    }
                }
            };
            if (!postable(outQueue)) // If not postable then it's a GET so just send it
            xhr_2.send();
            else {
                var batch = outQueue.slice(0, numberToSend_1);
                if (batch.length > 0) {
                    var beaconStatus = false;
                    var eventBatch = batch.map(function(x) {
                        return x.evt;
                    });
                    if (useBeacon) {
                        var blob = new Blob([
                            encloseInPayloadDataEnvelope(attachStmToEvent(eventBatch))
                        ], {
                            type: "application/json"
                        });
                        try {
                            beaconStatus = navigator.sendBeacon(url, blob);
                        } catch (error) {
                            beaconStatus = false;
                        }
                    }
                    // When beaconStatus is true, we can't _guarantee_ that it was successful (beacon queues asynchronously)
                    // but the browser has taken it out of our hands, so we want to flush the queue assuming it will do its job
                    if (beaconStatus === true) onPostSuccess_1(numberToSend_1);
                    else xhr_2.send(encloseInPayloadDataEnvelope(attachStmToEvent(eventBatch)));
                }
            }
        } else if (!anonymousTracking && !postable(outQueue)) {
            // We can't send with this technique if anonymous tracking is on as we can't attach the header
            var image = new Image(1, 1), loading_1 = true;
            image.onload = function() {
                if (!loading_1) return;
                loading_1 = false;
                outQueue.shift();
                if (useLocalStorage) attemptWriteLocalStorage(queueName, JSON.stringify(outQueue.slice(0, maxLocalStorageQueueSize)));
                executeQueue();
            };
            image.onerror = function() {
                if (!loading_1) return;
                loading_1 = false;
                executingQueue = false;
            };
            image.src = createGetUrl(outQueue[0]);
            setTimeout(function() {
                if (loading_1 && executingQueue) {
                    loading_1 = false;
                    executeQueue();
                }
            }, connectionTimeout);
        } else executingQueue = false;
    }
    function shouldRetryForStatusCode(statusCode) {
        // success, don't retry
        if (statusCode >= 200 && statusCode < 300) return false;
        // retry if status code among custom user-supplied retry codes
        if (retryStatusCodes.includes(statusCode)) return true;
        // retry if status code *not* among the don't retry codes
        return !dontRetryStatusCodes.includes(statusCode);
    }
    /**
     * Open an XMLHttpRequest for a given endpoint with the correct credentials and header
     *
     * @param string - url The destination URL
     * @returns object The XMLHttpRequest
     */ function initializeXMLHttpRequest(url, post, sync) {
        var xhr = new XMLHttpRequest();
        if (post) {
            xhr.open("POST", url, !sync);
            xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
        } else xhr.open("GET", url, !sync);
        xhr.withCredentials = withCredentials;
        if (anonymousTracking) xhr.setRequestHeader("SP-Anonymous", "*");
        for(var header in customHeaders)if (Object.prototype.hasOwnProperty.call(customHeaders, header)) xhr.setRequestHeader(header, customHeaders[header]);
        return xhr;
    }
    /**
     * Enclose an array of events in a self-describing payload_data JSON string
     *
     * @param array - events Batch of events
     * @returns string payload_data self-describing JSON
     */ function encloseInPayloadDataEnvelope(events) {
        return JSON.stringify({
            schema: PAYLOAD_DATA_SCHEMA,
            data: events
        });
    }
    /**
     * Attaches the STM field to outbound POST events.
     *
     * @param events - the events to attach the STM to
     */ function attachStmToEvent(events) {
        var stm = new Date().getTime().toString();
        for(var i = 0; i < events.length; i++)events[i]["stm"] = stm;
        return events;
    }
    /**
     * Creates the full URL for sending the GET request. Will append `stm` if enabled
     *
     * @param nextRequest - the query string of the next request
     */ function createGetUrl(nextRequest) {
        if (useStm) return configCollectorUrl + nextRequest.replace("?", "?stm=" + new Date().getTime() + "&");
        return configCollectorUrl + nextRequest;
    }
    return {
        enqueueRequest: enqueueRequest,
        executeQueue: function() {
            if (!executingQueue) executeQueue();
        },
        setUseLocalStorage: function(localStorage) {
            useLocalStorage = localStorage;
        },
        setAnonymousTracking: function(anonymous) {
            anonymousTracking = anonymous;
        },
        setCollectorUrl: function(url) {
            configCollectorUrl = url + path;
        },
        setBufferSize: function(newBufferSize) {
            bufferSize = newBufferSize;
        }
    };
    function hasWebKitBeaconBug(useragent) {
        return isIosVersionLessThanOrEqualTo(13, useragent) || isMacosxVersionLessThanOrEqualTo(10, 15, useragent) && isSafari(useragent);
        function isIosVersionLessThanOrEqualTo(major, useragent) {
            var match = useragent.match("(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/");
            if (match && match.length) return parseInt(match[0]) <= major;
            return false;
        }
        function isMacosxVersionLessThanOrEqualTo(major, minor, useragent) {
            var match = useragent.match("(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/");
            if (match && match.length) return parseInt(match[0]) <= major || parseInt(match[0]) === major && parseInt(match[1]) <= minor;
            return false;
        }
        function isSafari(useragent) {
            return useragent.match("Version/.* Safari/") && !isChromiumBased(useragent);
        }
        function isChromiumBased(useragent) {
            return useragent.match("Chrom(e|ium)");
        }
    }
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * Extract parameter from URL
 */ function getParameter(url, name) {
    // scheme : // [username [: password] @] hostname [: port] [/ [path] [? query] [# fragment]]
    var e = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)"), matches = e.exec(url);
    if (matches && (matches === null || matches === void 0 ? void 0 : matches.length) > 1) return fromQuerystring(name, matches[1]);
    return null;
}
/*
 * Fix-up URL when page rendered from search engine cache or translated page.
 */ function fixupUrl(hostName, href, referrer) {
    var _a;
    if (hostName === "translate.googleusercontent.com") {
        // Google
        if (referrer === "") referrer = href;
        href = (_a = getParameter(href, "u")) !== null && _a !== void 0 ? _a : "";
        hostName = getHostName(href);
    } else if (hostName === "cc.bingj.com" || // Bing & Yahoo
    hostName === "webcache.googleusercontent.com" // Google
    ) {
        href = document.links[0].href;
        hostName = getHostName(href);
    }
    return [
        hostName,
        href,
        referrer
    ];
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * Indices of cookie values
 */ var cookieDisabledIndex = 0, domainUserIdIndex = 1, createTsIndex = 2, visitCountIndex = 3, nowTsIndex = 4, lastVisitTsIndex = 5, sessionIdIndex = 6, previousSessionIdIndex = 7, firstEventIdIndex = 8, firstEventTsInMsIndex = 9, eventIndexIndex = 10;
function emptyIdCookie() {
    var idCookie = [
        "1",
        "",
        0,
        0,
        0,
        undefined,
        "",
        "",
        "",
        undefined,
        0
    ];
    return idCookie;
}
/**
 * Parses the cookie values from its string representation.
 *
 * @param id Cookie value as string
 * @param domainUserId Domain user ID to be used in case of empty cookie string
 * @returns Parsed ID cookie tuple
 */ function parseIdCookie(id, domainUserId, memorizedSessionId, memorizedVisitCount) {
    var now = new Date(), nowTs = Math.round(now.getTime() / 1000), tmpContainer;
    if (id) {
        tmpContainer = id.split(".");
        // cookies enabled
        tmpContainer.unshift("0");
    } else tmpContainer = [
        // cookies disabled
        "1",
        // Domain user ID
        domainUserId,
        // Creation timestamp - seconds since Unix epoch
        nowTs,
        // visitCount - 0 = no previous visit
        memorizedVisitCount,
        // Current visit timestamp
        nowTs,
        // Last visit timestamp - blank meaning no previous visit
        "",
        // Session ID
        memorizedSessionId
    ];
    if (!tmpContainer[sessionIdIndex] || tmpContainer[sessionIdIndex] === "undefined") // session id
    tmpContainer[sessionIdIndex] = (0, _uuid.v4)();
    if (!tmpContainer[previousSessionIdIndex] || tmpContainer[previousSessionIdIndex] === "undefined") // previous session id
    tmpContainer[previousSessionIdIndex] = "";
    if (!tmpContainer[firstEventIdIndex] || tmpContainer[firstEventIdIndex] === "undefined") // firstEventId - blank meaning no previous event
    tmpContainer[firstEventIdIndex] = "";
    if (!tmpContainer[firstEventTsInMsIndex] || tmpContainer[firstEventTsInMsIndex] === "undefined") // firstEventTs - blank meaning no previous event
    tmpContainer[firstEventTsInMsIndex] = "";
    if (!tmpContainer[eventIndexIndex] || tmpContainer[eventIndexIndex] === "undefined") // eventIndex – 0 = no previous event
    tmpContainer[eventIndexIndex] = 0;
    var parseIntOr = function(value, defaultValue) {
        var parsed = parseInt(value);
        return isNaN(parsed) ? defaultValue : parsed;
    };
    var parseIntOrUndefined = function(value) {
        return value ? parseIntOr(value, undefined) : undefined;
    };
    var parsed = [
        tmpContainer[cookieDisabledIndex],
        tmpContainer[domainUserIdIndex],
        parseIntOr(tmpContainer[createTsIndex], nowTs),
        parseIntOr(tmpContainer[visitCountIndex], memorizedVisitCount),
        parseIntOr(tmpContainer[nowTsIndex], nowTs),
        parseIntOrUndefined(tmpContainer[lastVisitTsIndex]),
        tmpContainer[sessionIdIndex],
        tmpContainer[previousSessionIdIndex],
        tmpContainer[firstEventIdIndex],
        parseIntOrUndefined(tmpContainer[firstEventTsInMsIndex]),
        parseIntOr(tmpContainer[eventIndexIndex], 0)
    ];
    return parsed;
}
/**
 * Initializes the domain user ID if not already present in the cookie. Sets an empty string if anonymous tracking.
 *
 * @param idCookie Parsed cookie
 * @param configAnonymousTracking Whether anonymous tracking is enabled
 * @returns Domain user ID
 */ function initializeDomainUserId(idCookie, configAnonymousTracking) {
    var domainUserId;
    if (idCookie[domainUserIdIndex]) domainUserId = idCookie[domainUserIdIndex];
    else if (!configAnonymousTracking) {
        domainUserId = (0, _uuid.v4)();
        idCookie[domainUserIdIndex] = domainUserId;
    } else {
        domainUserId = "";
        idCookie[domainUserIdIndex] = domainUserId;
    }
    return domainUserId;
}
/**
 * Starts a new session with a new ID.
 * Sets the previous session, last visit timestamp, and increments visit count if cookies enabled.
 * First event references are reset and will be updated in `updateFirstEventInIdCookie`.
 *
 * @param idCookie Parsed cookie
 * @param options.configStateStorageStrategy Cookie storage strategy
 * @param options.configAnonymousTracking If anonymous tracking is enabled
 * @param options.memorizedVisitCount Visit count to be used if cookies not enabled
 * @param options.onSessionUpdateCallback Session callback triggered on every session update
 * @returns New session ID
 */ function startNewIdCookieSession(idCookie, options) {
    if (options === void 0) options = {
        memorizedVisitCount: 1
    };
    var memorizedVisitCount = options.memorizedVisitCount;
    // If cookies are enabled, base visit count and session ID on the cookies
    if (cookiesEnabledInIdCookie(idCookie)) {
        // Store the previous session ID
        idCookie[previousSessionIdIndex] = idCookie[sessionIdIndex];
        // Set lastVisitTs to currentVisitTs
        idCookie[lastVisitTsIndex] = idCookie[nowTsIndex];
        // Increment the session ID
        idCookie[visitCountIndex]++;
    } else idCookie[visitCountIndex] = memorizedVisitCount;
    // Create a new sessionId
    var sessionId = (0, _uuid.v4)();
    idCookie[sessionIdIndex] = sessionId;
    // Reset event index and first event references
    idCookie[eventIndexIndex] = 0;
    idCookie[firstEventIdIndex] = "";
    idCookie[firstEventTsInMsIndex] = undefined;
    return sessionId;
}
/**
 * Update now timestamp in cookie.
 *
 * @param idCookie Parsed cookie
 */ function updateNowTsInIdCookie(idCookie) {
    idCookie[nowTsIndex] = Math.round(new Date().getTime() / 1000);
}
/**
 * Updates the first event references according to the event payload if first event in session.
 *
 * @param idCookie Parsed cookie
 * @param payloadBuilder Event payload builder
 */ function updateFirstEventInIdCookie(idCookie, payloadBuilder) {
    // Update first event references if new session or not present
    if (idCookie[eventIndexIndex] === 0) {
        var payload = payloadBuilder.build();
        idCookie[firstEventIdIndex] = payload["eid"];
        var ts = payload["dtm"] || payload["ttm"];
        idCookie[firstEventTsInMsIndex] = ts ? parseInt(ts) : undefined;
    }
}
/**
 * Increments event index counter.
 *
 * @param idCookie Parsed cookie
 */ function incrementEventIndexInIdCookie(idCookie) {
    idCookie[eventIndexIndex] += 1;
}
/**
 * Serializes parsed cookie to string representation.
 *
 * @param idCookie Parsed cookie
 * @returns String cookie value
 */ function serializeIdCookie(idCookie) {
    idCookie.shift();
    return idCookie.join(".");
}
/**
 * Transforms the parsed cookie into a client session context entity.
 *
 * @param idCookie Parsed cookie
 * @param configStateStorageStrategy Cookie storage strategy
 * @param configAnonymousTracking If anonymous tracking is enabled
 * @returns Client session context entity
 */ function clientSessionFromIdCookie(idCookie, configStateStorageStrategy, configAnonymousTracking) {
    var firstEventTsInMs = idCookie[firstEventTsInMsIndex];
    var clientSession = {
        userId: configAnonymousTracking ? "00000000-0000-0000-0000-000000000000" // TODO: use uuid.NIL when we upgrade to uuid v8.3
         : idCookie[domainUserIdIndex],
        sessionId: idCookie[sessionIdIndex],
        eventIndex: idCookie[eventIndexIndex],
        sessionIndex: idCookie[visitCountIndex],
        previousSessionId: configAnonymousTracking ? null : idCookie[previousSessionIdIndex] || null,
        storageMechanism: configStateStorageStrategy == "localStorage" ? "LOCAL_STORAGE" : "COOKIE_1",
        firstEventId: idCookie[firstEventIdIndex] || null,
        firstEventTimestamp: firstEventTsInMs ? new Date(firstEventTsInMs).toISOString() : null
    };
    return clientSession;
}
function sessionIdFromIdCookie(idCookie) {
    return idCookie[sessionIdIndex];
}
function domainUserIdFromIdCookie(idCookie) {
    return idCookie[domainUserIdIndex];
}
function visitCountFromIdCookie(idCookie) {
    return idCookie[visitCountIndex];
}
function cookiesEnabledInIdCookie(idCookie) {
    return idCookie[cookieDisabledIndex] === "0";
}
function eventIndexFromIdCookie(idCookie) {
    return idCookie[eventIndexIndex];
}
/* Separator used for dimension values e.g. widthxheight */ var DIMENSION_SEPARATOR = "x";
function getBrowserProperties() {
    return {
        viewport: floorDimensionFields(detectViewport()),
        documentSize: floorDimensionFields(detectDocumentSize()),
        resolution: floorDimensionFields(detectScreenResolution()),
        colorDepth: screen.colorDepth,
        devicePixelRatio: window.devicePixelRatio,
        cookiesEnabled: window.navigator.cookieEnabled,
        online: window.navigator.onLine,
        browserLanguage: navigator.language || navigator.userLanguage,
        documentLanguage: document.documentElement.lang,
        webdriver: window.navigator.webdriver,
        deviceMemory: window.navigator.deviceMemory,
        hardwareConcurrency: window.navigator.hardwareConcurrency
    };
}
/**
 * Gets the current viewport.
 *
 * Code based on:
 * - http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
 * - http://responsejs.com/labs/dimensions/
 */ function detectViewport() {
    var width, height;
    if ("innerWidth" in window) {
        width = window["innerWidth"];
        height = window["innerHeight"];
    } else {
        var e = document.documentElement || document.body;
        width = e["clientWidth"];
        height = e["clientHeight"];
    }
    if (width >= 0 && height >= 0) return width + DIMENSION_SEPARATOR + height;
    else return null;
}
/**
 * Gets the dimensions of the current
 * document.
 *
 * Code based on:
 * - http://andylangton.co.uk/articles/javascript/get-viewport-size-javascript/
 */ function detectDocumentSize() {
    var de = document.documentElement, be = document.body, // document.body may not have rendered, so check whether be.offsetHeight is null
    bodyHeight = be ? Math.max(be.offsetHeight, be.scrollHeight) : 0;
    var w = Math.max(de.clientWidth, de.offsetWidth, de.scrollWidth);
    var h = Math.max(de.clientHeight, de.offsetHeight, de.scrollHeight, bodyHeight);
    return isNaN(w) || isNaN(h) ? "" : w + DIMENSION_SEPARATOR + h;
}
function detectScreenResolution() {
    return screen.width + DIMENSION_SEPARATOR + screen.height;
}
function floorDimensionFields(field) {
    return field && field.split(DIMENSION_SEPARATOR).map(function(dimension) {
        return Math.floor(Number(dimension));
    }).join(DIMENSION_SEPARATOR);
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * The Snowplow Tracker
 *
 * @param trackerId - The unique identifier of the tracker
 * @param namespace - The namespace of the tracker object
 * @param version - The current version of the JavaScript Tracker
 * @param endpoint - The collector endpoint to send events to, with or without protocol
 * @param sharedState - An object containing state which is shared across tracker instances
 * @param trackerConfiguration - Dictionary of configuration options
 */ function Tracker(trackerId, namespace, version, endpoint, sharedState, trackerConfiguration) {
    if (trackerConfiguration === void 0) trackerConfiguration = {};
    var browserPlugins = [];
    var newTracker = function(trackerId, namespace, version, endpoint, state, trackerConfiguration) {
        /************************************************************
         * Private members
         ************************************************************/ var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        //use POST if eventMethod isn't present on the newTrackerConfiguration
        trackerConfiguration.eventMethod = (_a = trackerConfiguration.eventMethod) !== null && _a !== void 0 ? _a : "post";
        var getStateStorageStrategy = function(config) {
            var _a;
            return (_a = config.stateStorageStrategy) !== null && _a !== void 0 ? _a : "cookieAndLocalStorage";
        }, getAnonymousSessionTracking = function(config) {
            var _a, _b;
            if (typeof config.anonymousTracking === "boolean") return false;
            return (_b = ((_a = config.anonymousTracking) === null || _a === void 0 ? void 0 : _a.withSessionTracking) === true, _b !== void 0) ? _b : false;
        }, getAnonymousServerTracking = function(config) {
            var _a, _b;
            if (typeof config.anonymousTracking === "boolean") return false;
            return (_b = ((_a = config.anonymousTracking) === null || _a === void 0 ? void 0 : _a.withServerAnonymisation) === true, _b !== void 0) ? _b : false;
        }, getAnonymousTracking = function(config) {
            return !!config.anonymousTracking;
        }, isBrowserContextAvailable = (_c = (_b = trackerConfiguration === null || trackerConfiguration === void 0 ? void 0 : trackerConfiguration.contexts) === null || _b === void 0 ? void 0 : _b.browser) !== null && _c !== void 0 ? _c : false, isWebPageContextAvailable = (_e = (_d = trackerConfiguration === null || trackerConfiguration === void 0 ? void 0 : trackerConfiguration.contexts) === null || _d === void 0 ? void 0 : _d.webPage) !== null && _e !== void 0 ? _e : true;
        // Get all injected plugins
        browserPlugins.push(getBrowserDataPlugin());
        /* When including the Web Page context, we add the relevant internal plugins */ if (isWebPageContextAvailable) browserPlugins.push(getWebPagePlugin());
        if (isBrowserContextAvailable) browserPlugins.push(getBrowserContextPlugin());
        browserPlugins.push.apply(browserPlugins, (_f = trackerConfiguration.plugins) !== null && _f !== void 0 ? _f : []);
        var core = (0, _trackerCore.trackerCore)({
            base64: trackerConfiguration.encodeBase64,
            corePlugins: browserPlugins,
            callback: sendRequest
        }), // Aliases
        documentCharset = document.characterSet || document.charset, // Current URL and Referrer URL
        locationArray = fixupUrl(window.location.hostname, window.location.href, getReferrer()), domainAlias = fixupDomain(locationArray[0]), locationHrefAlias = locationArray[1], configReferrerUrl = locationArray[2], customReferrer, // Platform defaults to web for this tracker
        configPlatform = (_g = trackerConfiguration.platform) !== null && _g !== void 0 ? _g : "web", // Snowplow collector URL
        configCollectorUrl = asCollectorUrl(endpoint), // Custom path for post requests (to get around adblockers)
        configPostPath = (_h = trackerConfiguration.postPath) !== null && _h !== void 0 ? _h : "/com.snowplowanalytics.snowplow/tp2", // Site ID
        configTrackerSiteId = (_j = trackerConfiguration.appId) !== null && _j !== void 0 ? _j : "", // Document URL
        configCustomUrl, // Document title
        lastDocumentTitle = document.title, // Custom title
        lastConfigTitle, // Controls whether activity tracking page ping event timers are reset on page view events
        resetActivityTrackingOnPageView = (_k = trackerConfiguration.resetActivityTrackingOnPageView) !== null && _k !== void 0 ? _k : true, // Disallow hash tags in URL. TODO: Should this be set to true by default?
        configDiscardHashTag, // Disallow brace in URL.
        configDiscardBrace, // First-party cookie name prefix
        configCookieNamePrefix = (_l = trackerConfiguration.cookieName) !== null && _l !== void 0 ? _l : "_sp_", // First-party cookie domain
        // User agent defaults to origin hostname
        configCookieDomain = (_m = trackerConfiguration.cookieDomain) !== null && _m !== void 0 ? _m : undefined, // First-party cookie path
        // Default is user agent defined.
        configCookiePath = "/", // First-party cookie samesite attribute
        configCookieSameSite = (_o = trackerConfiguration.cookieSameSite) !== null && _o !== void 0 ? _o : "None", // First-party cookie secure attribute
        configCookieSecure = (_p = trackerConfiguration.cookieSecure) !== null && _p !== void 0 ? _p : true, // Do Not Track browser feature
        dnt = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack, // Do Not Track
        configDoNotTrack = typeof trackerConfiguration.respectDoNotTrack !== "undefined" ? trackerConfiguration.respectDoNotTrack && (dnt === "yes" || dnt === "1") : false, // Opt out of cookie tracking
        configOptOutCookie, // Life of the visitor cookie (in seconds)
        configVisitorCookieTimeout = (_q = trackerConfiguration.cookieLifetime) !== null && _q !== void 0 ? _q : 63072000, // Life of the session cookie (in seconds)
        configSessionCookieTimeout = (_r = trackerConfiguration.sessionCookieTimeout) !== null && _r !== void 0 ? _r : 1800, // Allows tracking user session (using cookies or local storage), can only be used with anonymousTracking
        configAnonymousSessionTracking = getAnonymousSessionTracking(trackerConfiguration), // Will send a header to server to prevent returning cookie and capturing IP
        configAnonymousServerTracking = getAnonymousServerTracking(trackerConfiguration), // Sets tracker to work in anonymous mode without accessing client storage
        configAnonymousTracking = getAnonymousTracking(trackerConfiguration), // Strategy defining how to store the state: cookie, localStorage, cookieAndLocalStorage or none
        configStateStorageStrategy = getStateStorageStrategy(trackerConfiguration), // Last activity timestamp
        lastActivityTime, // The last time an event was fired on the page - used to invalidate session if cookies are disabled
        lastEventTime = new Date().getTime(), // How are we scrolling?
        minXOffset, maxXOffset, minYOffset, maxYOffset, // Domain hash value
        domainHash, // Domain unique user ID
        domainUserId, // ID for the current session
        memorizedSessionId, // Index for the current session - kept in memory in case cookies are disabled
        memorizedVisitCount = 1, // Business-defined unique user ID
        businessUserId, // Manager for local storage queue
        outQueue = OutQueueManager(trackerId, state, configStateStorageStrategy == "localStorage" || configStateStorageStrategy == "cookieAndLocalStorage", trackerConfiguration.eventMethod, configPostPath, (_s = trackerConfiguration.bufferSize) !== null && _s !== void 0 ? _s : 1, (_t = trackerConfiguration.maxPostBytes) !== null && _t !== void 0 ? _t : 40000, (_u = trackerConfiguration.maxGetBytes) !== null && _u !== void 0 ? _u : 0, (_v = trackerConfiguration.useStm) !== null && _v !== void 0 ? _v : true, (_w = trackerConfiguration.maxLocalStorageQueueSize) !== null && _w !== void 0 ? _w : 1000, (_x = trackerConfiguration.connectionTimeout) !== null && _x !== void 0 ? _x : 5000, configAnonymousServerTracking, (_y = trackerConfiguration.customHeaders) !== null && _y !== void 0 ? _y : {}, (_z = trackerConfiguration.withCredentials) !== null && _z !== void 0 ? _z : true, (_0 = trackerConfiguration.retryStatusCodes) !== null && _0 !== void 0 ? _0 : [], ((_1 = trackerConfiguration.dontRetryStatusCodes) !== null && _1 !== void 0 ? _1 : []).concat([
            400,
            401,
            403,
            410,
            422
        ]), trackerConfiguration.idService), // Whether pageViewId should be regenerated after each trackPageView. Affect web_page context
        preservePageViewId = false, // Whether first trackPageView was fired and pageViewId should not be changed anymore until reload
        pageViewSent = false, // Activity tracking config for callback and page ping variants
        activityTrackingConfig = {
            enabled: false,
            installed: false,
            configurations: {}
        }, configSessionContext = (_3 = (_2 = trackerConfiguration.contexts) === null || _2 === void 0 ? void 0 : _2.session) !== null && _3 !== void 0 ? _3 : false, toOptoutByCookie, onSessionUpdateCallback = trackerConfiguration.onSessionUpdateCallback, manualSessionUpdateCalled = false;
        if (trackerConfiguration.hasOwnProperty("discoverRootDomain") && trackerConfiguration.discoverRootDomain) configCookieDomain = findRootDomain(configCookieSameSite, configCookieSecure);
        var _4 = getBrowserProperties(), browserLanguage = _4.browserLanguage, resolution = _4.resolution, colorDepth = _4.colorDepth, cookiesEnabled = _4.cookiesEnabled;
        // Set up unchanging name-value pairs
        core.setTrackerVersion(version);
        core.setTrackerNamespace(namespace);
        core.setAppId(configTrackerSiteId);
        core.setPlatform(configPlatform);
        core.addPayloadPair("cookie", cookiesEnabled ? "1" : "0");
        core.addPayloadPair("cs", documentCharset);
        core.addPayloadPair("lang", browserLanguage);
        core.addPayloadPair("res", resolution);
        core.addPayloadPair("cd", colorDepth);
        /*
         * Initialize tracker
         */ updateDomainHash();
        initializeIdsAndCookies();
        if (trackerConfiguration.crossDomainLinker) decorateLinks(trackerConfiguration.crossDomainLinker);
        /**
         * Recalculate the domain, URL, and referrer
         */ function refreshUrl() {
            locationArray = fixupUrl(window.location.hostname, window.location.href, getReferrer());
            // If this is a single-page app and the page URL has changed, then:
            //   - if the new URL's querystring contains a "refer(r)er" parameter, use it as the referrer
            //   - otherwise use the old URL as the referer
            if (locationArray[1] !== locationHrefAlias) configReferrerUrl = getReferrer(locationHrefAlias);
            domainAlias = fixupDomain(locationArray[0]);
            locationHrefAlias = locationArray[1];
        }
        /**
         * Decorate the querystring of a single link
         *
         * @param event - e The event targeting the link
         */ function linkDecorationHandler(evt) {
            var timestamp = new Date().getTime();
            var elt = evt.currentTarget;
            if (elt === null || elt === void 0 ? void 0 : elt.href) elt.href = decorateQuerystring(elt.href, "_sp", domainUserId + "." + timestamp);
        }
        /**
         * Enable querystring decoration for links pasing a filter
         * Whenever such a link is clicked on or navigated to via the keyboard,
         * add "_sp={{duid}}.{{timestamp}}" to its querystring
         *
         * @param crossDomainLinker - Function used to determine which links to decorate
         */ function decorateLinks(crossDomainLinker) {
            for(var i = 0; i < document.links.length; i++){
                var elt = document.links[i];
                if (!elt.spDecorationEnabled && crossDomainLinker(elt)) {
                    addEventListener(elt, "click", linkDecorationHandler, true);
                    addEventListener(elt, "mousedown", linkDecorationHandler, true);
                    // Don't add event listeners more than once
                    elt.spDecorationEnabled = true;
                }
            }
        }
        /*
         * Removes hash tag from the URL
         *
         * URLs are purified before being recorded in the cookie,
         * or before being sent as GET parameters
         */ function purify(url) {
            var targetPattern;
            if (configDiscardHashTag) {
                targetPattern = new RegExp("#.*");
                url = url.replace(targetPattern, "");
            }
            if (configDiscardBrace) {
                targetPattern = new RegExp("[{}]", "g");
                url = url.replace(targetPattern, "");
            }
            return url;
        }
        /*
         * Extract scheme/protocol from URL
         */ function getProtocolScheme(url) {
            var e = new RegExp("^([a-z]+):"), matches = e.exec(url);
            return matches ? matches[1] : null;
        }
        /*
         * Resolve relative reference
         *
         * Note: not as described in rfc3986 section 5.2
         */ function resolveRelativeReference(baseUrl, url) {
            var protocol = getProtocolScheme(url), i;
            if (protocol) return url;
            if (url.slice(0, 1) === "/") return getProtocolScheme(baseUrl) + "://" + getHostName(baseUrl) + url;
            baseUrl = purify(baseUrl);
            if ((i = baseUrl.indexOf("?")) >= 0) baseUrl = baseUrl.slice(0, i);
            if ((i = baseUrl.lastIndexOf("/")) !== baseUrl.length - 1) baseUrl = baseUrl.slice(0, i + 1);
            return baseUrl + url;
        }
        /*
         * Send request
         */ function sendRequest(request) {
            if (!(configDoNotTrack || toOptoutByCookie)) outQueue.enqueueRequest(request.build(), configCollectorUrl);
        }
        /*
         * Get cookie name with prefix and domain hash
         */ function getSnowplowCookieName(baseName) {
            return configCookieNamePrefix + baseName + "." + domainHash;
        }
        /*
         * Cookie getter.
         */ function getSnowplowCookieValue(cookieName) {
            var fullName = getSnowplowCookieName(cookieName);
            if (configStateStorageStrategy == "localStorage") return attemptGetLocalStorage(fullName);
            else if (configStateStorageStrategy == "cookie" || configStateStorageStrategy == "cookieAndLocalStorage") return cookie(fullName);
            return undefined;
        }
        /*
         * Update domain hash
         */ function updateDomainHash() {
            refreshUrl();
            domainHash = (0, _sha1Default.default)((configCookieDomain || domainAlias) + (configCookiePath || "/")).slice(0, 4); // 4 hexits = 16 bits
        }
        /*
         * Process all "activity" events.
         * For performance, this function must have low overhead.
         */ function activityHandler() {
            var now = new Date();
            lastActivityTime = now.getTime();
        }
        /*
         * Process all "scroll" events.
         */ function scrollHandler() {
            updateMaxScrolls();
            activityHandler();
        }
        /*
         * Returns [pageXOffset, pageYOffset]
         */ function getPageOffsets() {
            var documentElement = document.documentElement;
            if (documentElement) return [
                documentElement.scrollLeft || window.pageXOffset,
                documentElement.scrollTop || window.pageYOffset
            ];
            return [
                0,
                0
            ];
        }
        /*
         * Quick initialization/reset of max scroll levels
         */ function resetMaxScrolls() {
            var offsets = getPageOffsets();
            var x = offsets[0];
            minXOffset = x;
            maxXOffset = x;
            var y = offsets[1];
            minYOffset = y;
            maxYOffset = y;
        }
        /*
         * Check the max scroll levels, updating as necessary
         */ function updateMaxScrolls() {
            var offsets = getPageOffsets();
            var x = offsets[0];
            if (x < minXOffset) minXOffset = x;
            else if (x > maxXOffset) maxXOffset = x;
            var y = offsets[1];
            if (y < minYOffset) minYOffset = y;
            else if (y > maxYOffset) maxYOffset = y;
        }
        /*
         * Prevents offsets from being decimal or NaN
         * See https://github.com/snowplow/snowplow-javascript-tracker/issues/324
         */ function cleanOffset(offset) {
            return Math.round(offset);
        }
        /**
         * Sets or renews the session cookie.
         * Responsible for calling the `onSessionUpdateCallback` callback.
         * @returns {boolean} If the value persisted in cookies or LocalStorage
         */ function setSessionCookie() {
            var cookieName = getSnowplowCookieName("ses");
            var cookieValue = "*";
            return persistValue(cookieName, cookieValue, configSessionCookieTimeout);
        }
        /**
         * @mutates idCookie
         * @param {ParsedIdCookie} idCookie
         * @returns {boolean} If the value persisted in cookies or LocalStorage
         */ function setDomainUserIdCookie(idCookie) {
            var cookieName = getSnowplowCookieName("id");
            var cookieValue = serializeIdCookie(idCookie);
            return persistValue(cookieName, cookieValue, configVisitorCookieTimeout);
        }
        /**
         * no-op if anonymousTracking enabled, will still set cookies if anonymousSessionTracking is enabled
         * Sets a cookie based on the storage strategy:
         * - if 'localStorage': attempts to write to local storage
         * - if 'cookie' or 'cookieAndLocalStorage': writes to cookies
         * - otherwise: no-op
         * @param {string} name Name/key of the value to persist
         * @param {string} value
         * @param {number} timeout Used as the expiration date for cookies or as a TTL to be checked on LocalStorage
         * @returns {boolean} If the operation was successful or not
         */ function persistValue(name, value, timeout) {
            if (configAnonymousTracking && !configAnonymousSessionTracking) return false;
            if (configStateStorageStrategy == "localStorage") return attemptWriteLocalStorage(name, value, timeout);
            else if (configStateStorageStrategy == "cookie" || configStateStorageStrategy == "cookieAndLocalStorage") {
                cookie(name, value, timeout, configCookiePath, configCookieDomain, configCookieSameSite, configCookieSecure);
                return document.cookie.indexOf("".concat(name, "=")) !== -1 ? true : false;
            }
            return false;
        }
        /**
         * Clears all cookie and local storage for id and ses values
         */ function clearUserDataAndCookies(configuration) {
            var idname = getSnowplowCookieName("id");
            var sesname = getSnowplowCookieName("ses");
            attemptDeleteLocalStorage(idname);
            attemptDeleteLocalStorage(sesname);
            deleteCookie(idname, configCookieDomain, configCookieSameSite, configCookieSecure);
            deleteCookie(sesname, configCookieDomain, configCookieSameSite, configCookieSecure);
            if (!(configuration === null || configuration === void 0 ? void 0 : configuration.preserveSession)) {
                memorizedSessionId = (0, _uuid.v4)();
                memorizedVisitCount = 1;
            }
            if (!(configuration === null || configuration === void 0 ? void 0 : configuration.preserveUser)) {
                domainUserId = configAnonymousTracking ? "" : (0, _uuid.v4)();
                businessUserId = null;
            }
        }
        /**
         * Toggle Anonymous Tracking
         */ function toggleAnonymousTracking(configuration) {
            if (configuration && configuration.stateStorageStrategy) {
                trackerConfiguration.stateStorageStrategy = configuration.stateStorageStrategy;
                configStateStorageStrategy = getStateStorageStrategy(trackerConfiguration);
            }
            configAnonymousTracking = getAnonymousTracking(trackerConfiguration);
            configAnonymousSessionTracking = getAnonymousSessionTracking(trackerConfiguration);
            configAnonymousServerTracking = getAnonymousServerTracking(trackerConfiguration);
            outQueue.setUseLocalStorage(configStateStorageStrategy == "localStorage" || configStateStorageStrategy == "cookieAndLocalStorage");
            outQueue.setAnonymousTracking(configAnonymousServerTracking);
        }
        /*
         * Load the domain user ID and the session ID
         * Set the cookies (if cookies are enabled)
         */ function initializeIdsAndCookies() {
            if (configAnonymousTracking && !configAnonymousSessionTracking) return;
            var sesCookieSet = configStateStorageStrategy != "none" && !!getSnowplowCookieValue("ses");
            var idCookie = loadDomainUserIdCookie();
            domainUserId = initializeDomainUserId(idCookie, configAnonymousTracking);
            if (!sesCookieSet) memorizedSessionId = startNewIdCookieSession(idCookie);
            else memorizedSessionId = sessionIdFromIdCookie(idCookie);
            memorizedVisitCount = visitCountFromIdCookie(idCookie);
            if (configStateStorageStrategy != "none") {
                setSessionCookie();
                // Update currentVisitTs
                updateNowTsInIdCookie(idCookie);
                setDomainUserIdCookie(idCookie);
            }
        }
        /*
         * Load visitor ID cookie
         */ function loadDomainUserIdCookie() {
            if (configStateStorageStrategy == "none") return emptyIdCookie();
            var id = getSnowplowCookieValue("id") || undefined;
            return parseIdCookie(id, domainUserId, memorizedSessionId, memorizedVisitCount);
        }
        /**
         * Adds the protocol in front of our collector URL
         *
         * @param string - collectorUrl The collector URL with or without protocol
         * @returns string collectorUrl The tracker URL with protocol
         */ function asCollectorUrl(collectorUrl) {
            if (collectorUrl.indexOf("http") === 0) return collectorUrl;
            return ("https:" === document.location.protocol ? "https" : "http") + "://" + collectorUrl;
        }
        /**
         * Initialize new `pageViewId` if it shouldn't be preserved.
         * Should be called when `trackPageView` is invoked
         */ function resetPageView() {
            if (!preservePageViewId || state.pageViewId == null) state.pageViewId = (0, _uuid.v4)();
        }
        /**
         * Safe function to get `pageViewId`.
         * Generates it if it wasn't initialized by other tracker
         */ function getPageViewId() {
            if (state.pageViewId == null) state.pageViewId = (0, _uuid.v4)();
            return state.pageViewId;
        }
        /**
         * Safe function to get `tabId`.
         * Generates it if it is not yet initialized. Shared between trackers.
         */ function getTabId() {
            if (configStateStorageStrategy === "none" || configAnonymousTracking || !isWebPageContextAvailable) return null;
            var SESSION_STORAGE_TAB_ID = "_sp_tab_id";
            var tabId = attemptGetSessionStorage(SESSION_STORAGE_TAB_ID);
            if (!tabId) {
                attemptWriteSessionStorage(SESSION_STORAGE_TAB_ID, (0, _uuid.v4)());
                tabId = attemptGetSessionStorage(SESSION_STORAGE_TAB_ID);
            }
            return tabId || null;
        }
        /**
         * Put together a web page context with a unique UUID for the page view
         *
         * @returns web_page context
         */ function getWebPagePlugin() {
            return {
                contexts: function() {
                    return [
                        {
                            schema: WEB_PAGE_SCHEMA,
                            data: {
                                id: getPageViewId()
                            }
                        }
                    ];
                }
            };
        }
        function getBrowserContextPlugin() {
            return {
                contexts: function() {
                    return [
                        {
                            schema: BROWSER_CONTEXT_SCHEMA,
                            data: (0, _tslib.__assign)((0, _tslib.__assign)({}, getBrowserProperties()), {
                                tabId: getTabId()
                            })
                        }
                    ];
                }
            };
        }
        /*
         * Attaches common web fields to every request (resolution, url, referrer, etc.)
         * Also sets the required cookies.
         */ function getBrowserDataPlugin() {
            var anonymizeOr = function(value) {
                return configAnonymousTracking ? null : value;
            };
            var anonymizeSessionOr = function(value) {
                return configAnonymousSessionTracking ? value : anonymizeOr(value);
            };
            return {
                beforeTrack: function(payloadBuilder) {
                    var existingSession = getSnowplowCookieValue("ses"), idCookie = loadDomainUserIdCookie();
                    var isFirstEventInSession = eventIndexFromIdCookie(idCookie) === 0;
                    if (configOptOutCookie) toOptoutByCookie = !!cookie(configOptOutCookie);
                    else toOptoutByCookie = false;
                    if (configDoNotTrack || toOptoutByCookie) {
                        clearUserDataAndCookies();
                        return;
                    }
                    // If cookies are enabled, base visit count and session ID on the cookies
                    if (cookiesEnabledInIdCookie(idCookie)) {
                        // New session?
                        if (!existingSession && configStateStorageStrategy != "none") memorizedSessionId = startNewIdCookieSession(idCookie);
                        else memorizedSessionId = sessionIdFromIdCookie(idCookie);
                        memorizedVisitCount = visitCountFromIdCookie(idCookie);
                    } else if (new Date().getTime() - lastEventTime > configSessionCookieTimeout * 1000) {
                        memorizedVisitCount++;
                        memorizedSessionId = startNewIdCookieSession(idCookie, {
                            memorizedVisitCount: memorizedVisitCount
                        });
                    }
                    // Update cookie
                    updateNowTsInIdCookie(idCookie);
                    updateFirstEventInIdCookie(idCookie, payloadBuilder);
                    incrementEventIndexInIdCookie(idCookie);
                    var _a = getBrowserProperties(), viewport = _a.viewport, documentSize = _a.documentSize;
                    payloadBuilder.add("vp", viewport);
                    payloadBuilder.add("ds", documentSize);
                    payloadBuilder.add("vid", anonymizeSessionOr(memorizedVisitCount));
                    payloadBuilder.add("sid", anonymizeSessionOr(memorizedSessionId));
                    payloadBuilder.add("duid", anonymizeOr(domainUserIdFromIdCookie(idCookie))); // Always load from cookie as this is better etiquette than in-memory values
                    payloadBuilder.add("uid", anonymizeOr(businessUserId));
                    refreshUrl();
                    payloadBuilder.add("refr", purify(customReferrer || configReferrerUrl));
                    // Add the page URL last as it may take us over the IE limit (and we don't always need it)
                    payloadBuilder.add("url", purify(configCustomUrl || locationHrefAlias));
                    var clientSession = clientSessionFromIdCookie(idCookie, configStateStorageStrategy, configAnonymousTracking);
                    if (configSessionContext && (!configAnonymousTracking || configAnonymousSessionTracking)) addSessionContextToPayload(payloadBuilder, clientSession);
                    // Update cookies
                    if (configStateStorageStrategy != "none") {
                        setDomainUserIdCookie(idCookie);
                        var sessionIdentifierPersisted = setSessionCookie();
                        if ((!existingSession || isFirstEventInSession) && sessionIdentifierPersisted && onSessionUpdateCallback && !manualSessionUpdateCalled) {
                            onSessionUpdateCallback(clientSession);
                            manualSessionUpdateCalled = false;
                        }
                    }
                    lastEventTime = new Date().getTime();
                }
            };
        }
        function addSessionContextToPayload(payloadBuilder, clientSession) {
            var sessionContext = {
                schema: CLIENT_SESSION_SCHEMA,
                data: clientSession
            };
            payloadBuilder.addContextEntity(sessionContext);
        }
        /**
         * Expires current session and starts a new session.
         */ function newSession() {
            // If cookies are enabled, base visit count and session ID on the cookies
            var idCookie = loadDomainUserIdCookie();
            // When cookies are enabled
            if (cookiesEnabledInIdCookie(idCookie)) {
                // When cookie/local storage is enabled - make a new session
                if (configStateStorageStrategy != "none") memorizedSessionId = startNewIdCookieSession(idCookie);
                else memorizedSessionId = sessionIdFromIdCookie(idCookie);
                memorizedVisitCount = visitCountFromIdCookie(idCookie);
            } else {
                memorizedVisitCount++;
                memorizedSessionId = startNewIdCookieSession(idCookie, {
                    memorizedVisitCount: memorizedVisitCount
                });
            }
            updateNowTsInIdCookie(idCookie);
            // Update cookies
            if (configStateStorageStrategy != "none") {
                var clientSession = clientSessionFromIdCookie(idCookie, configStateStorageStrategy, configAnonymousTracking);
                setDomainUserIdCookie(idCookie);
                var sessionIdentifierPersisted = setSessionCookie();
                if (sessionIdentifierPersisted && onSessionUpdateCallback) {
                    manualSessionUpdateCalled = true;
                    onSessionUpdateCallback(clientSession);
                }
            }
            lastEventTime = new Date().getTime();
        }
        /**
         * Combine an array of unchanging contexts with the result of a context-creating function
         *
         * @param staticContexts - Array of custom contexts
         * @param contextCallback - Function returning an array of contexts
         */ function finalizeContexts(staticContexts, contextCallback) {
            return (staticContexts || []).concat(contextCallback ? contextCallback() : []);
        }
        function logPageView(_a) {
            var title = _a.title, context = _a.context, timestamp = _a.timestamp, contextCallback = _a.contextCallback;
            refreshUrl();
            if (pageViewSent) // Do not reset pageViewId if previous events were not page_view
            resetPageView();
            pageViewSent = true;
            // So we know what document.title was at the time of trackPageView
            lastDocumentTitle = document.title;
            lastConfigTitle = title;
            // Fixup page title
            var pageTitle = fixupTitle(lastConfigTitle || lastDocumentTitle);
            // Log page view
            core.track((0, _trackerCore.buildPageView)({
                pageUrl: purify(configCustomUrl || locationHrefAlias),
                pageTitle: pageTitle,
                referrer: purify(customReferrer || configReferrerUrl)
            }), finalizeContexts(context, contextCallback), timestamp);
            // Send ping (to log that user has stayed on page)
            var now = new Date();
            var installingActivityTracking = false;
            if (activityTrackingConfig.enabled && !activityTrackingConfig.installed) {
                activityTrackingConfig.installed = true;
                installingActivityTracking = true;
                // Add mousewheel event handler, detect passive event listeners for performance
                var detectPassiveEvents_1 = {
                    update: function update() {
                        if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
                            var passive_1 = false;
                            var options = Object.defineProperty({}, "passive", {
                                get: function get() {
                                    passive_1 = true;
                                },
                                set: function set() {}
                            });
                            // note: have to set and remove a no-op listener instead of null
                            // (which was used previously), because Edge v15 throws an error
                            // when providing a null callback.
                            // https://github.com/rafrex/detect-passive-events/pull/3
                            var noop = function noop() {};
                            window.addEventListener("testPassiveEventSupport", noop, options);
                            window.removeEventListener("testPassiveEventSupport", noop, options);
                            detectPassiveEvents_1.hasSupport = passive_1;
                        }
                    }
                };
                detectPassiveEvents_1.update();
                // Detect available wheel event
                var wheelEvent = "onwheel" in document.createElement("div") ? "wheel" // Modern browsers support "wheel"
                 : document.onmousewheel !== undefined ? "mousewheel" // Webkit and IE support at least "mousewheel"
                 : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
                if (Object.prototype.hasOwnProperty.call(detectPassiveEvents_1, "hasSupport")) addEventListener(document, wheelEvent, activityHandler, {
                    passive: true
                });
                else addEventListener(document, wheelEvent, activityHandler);
                // Capture our initial scroll points
                resetMaxScrolls();
                // Add event handlers; cross-browser compatibility here varies significantly
                // @see http://quirksmode.org/dom/events
                var documentHandlers = [
                    "click",
                    "mouseup",
                    "mousedown",
                    "mousemove",
                    "keypress",
                    "keydown",
                    "keyup",
                    "touchend",
                    "touchstart"
                ];
                var windowHandlers = [
                    "resize",
                    "focus",
                    "blur"
                ];
                var listener = function(_, handler) {
                    if (handler === void 0) handler = activityHandler;
                    return function(ev) {
                        return addEventListener(document, ev, handler);
                    };
                };
                documentHandlers.forEach(listener(document));
                windowHandlers.forEach(listener(window));
                listener(window, scrollHandler)("scroll");
            }
            if (activityTrackingConfig.enabled && (resetActivityTrackingOnPageView || installingActivityTracking)) {
                // Periodic check for activity.
                lastActivityTime = now.getTime();
                var key = void 0;
                for(key in activityTrackingConfig.configurations){
                    var config = activityTrackingConfig.configurations[key];
                    if (config) {
                        //Clear page ping heartbeat on new page view
                        window.clearInterval(config.activityInterval);
                        scheduleActivityInterval(config, context, contextCallback);
                    }
                }
            }
        }
        function scheduleActivityInterval(config, context, contextCallback) {
            var executePagePing = function(cb, context) {
                refreshUrl();
                cb({
                    context: context,
                    pageViewId: getPageViewId(),
                    minXOffset: minXOffset,
                    minYOffset: minYOffset,
                    maxXOffset: maxXOffset,
                    maxYOffset: maxYOffset
                });
                resetMaxScrolls();
            };
            var timeout = function() {
                var now = new Date();
                // There was activity during the heart beat period;
                // on average, this is going to overstate the visitDuration by configHeartBeatTimer/2
                if (lastActivityTime + config.configMinimumVisitLength > now.getTime()) executePagePing(config.callback, finalizeContexts(context, contextCallback));
                config.activityInterval = window.setInterval(heartbeat, config.configHeartBeatTimer);
            };
            var heartbeat = function() {
                var now = new Date();
                // There was activity during the heart beat period;
                // on average, this is going to overstate the visitDuration by configHeartBeatTimer/2
                if (lastActivityTime + config.configHeartBeatTimer > now.getTime()) executePagePing(config.callback, finalizeContexts(context, contextCallback));
            };
            if (config.configMinimumVisitLength === 0) config.activityInterval = window.setInterval(heartbeat, config.configHeartBeatTimer);
            else config.activityInterval = window.setTimeout(timeout, config.configMinimumVisitLength);
        }
        /**
         * Configure the activity tracking and ensures integer values for min visit and heartbeat
         */ function configureActivityTracking(configuration) {
            var minimumVisitLength = configuration.minimumVisitLength, heartbeatDelay = configuration.heartbeatDelay, callback = configuration.callback;
            if (isInteger(minimumVisitLength) && isInteger(heartbeatDelay)) return {
                configMinimumVisitLength: minimumVisitLength * 1000,
                configHeartBeatTimer: heartbeatDelay * 1000,
                callback: callback
            };
            (0, _trackerCore.LOG).error("Activity tracking minimumVisitLength & heartbeatDelay must be integers");
            return undefined;
        }
        /**
         * Log that a user is still viewing a given page by sending a page ping.
         * Not part of the public API - only called from logPageView() above.
         */ function logPagePing(_a) {
            var context = _a.context, minXOffset = _a.minXOffset, minYOffset = _a.minYOffset, maxXOffset = _a.maxXOffset, maxYOffset = _a.maxYOffset;
            var newDocumentTitle = document.title;
            if (newDocumentTitle !== lastDocumentTitle) {
                lastDocumentTitle = newDocumentTitle;
                lastConfigTitle = undefined;
            }
            core.track((0, _trackerCore.buildPagePing)({
                pageUrl: purify(configCustomUrl || locationHrefAlias),
                pageTitle: fixupTitle(lastConfigTitle || lastDocumentTitle),
                referrer: purify(customReferrer || configReferrerUrl),
                minXOffset: cleanOffset(minXOffset),
                maxXOffset: cleanOffset(maxXOffset),
                minYOffset: cleanOffset(minYOffset),
                maxYOffset: cleanOffset(maxYOffset)
            }), context);
        }
        function disableActivityTrackingAction(actionKey) {
            var callbackConfiguration = activityTrackingConfig.configurations[actionKey];
            if ((callbackConfiguration === null || callbackConfiguration === void 0 ? void 0 : callbackConfiguration.configMinimumVisitLength) === 0) window.clearTimeout(callbackConfiguration === null || callbackConfiguration === void 0 ? void 0 : callbackConfiguration.activityInterval);
            else window.clearInterval(callbackConfiguration === null || callbackConfiguration === void 0 ? void 0 : callbackConfiguration.activityInterval);
            activityTrackingConfig.configurations[actionKey] = undefined;
        }
        var apiMethods = {
            getDomainSessionIndex: function() {
                return memorizedVisitCount;
            },
            getPageViewId: getPageViewId,
            getTabId: getTabId,
            newSession: newSession,
            getCookieName: function(basename) {
                return getSnowplowCookieName(basename);
            },
            getUserId: function() {
                return businessUserId;
            },
            getDomainUserId: function() {
                return loadDomainUserIdCookie()[1];
            },
            getDomainUserInfo: function() {
                return loadDomainUserIdCookie();
            },
            setReferrerUrl: function(url) {
                customReferrer = url;
            },
            setCustomUrl: function(url) {
                refreshUrl();
                configCustomUrl = resolveRelativeReference(locationHrefAlias, url);
            },
            setDocumentTitle: function(title) {
                // So we know what document.title was at the time of trackPageView
                lastDocumentTitle = document.title;
                lastConfigTitle = title;
            },
            discardHashTag: function(enableFilter) {
                configDiscardHashTag = enableFilter;
            },
            discardBrace: function(enableFilter) {
                configDiscardBrace = enableFilter;
            },
            setCookiePath: function(path) {
                configCookiePath = path;
                updateDomainHash();
            },
            setVisitorCookieTimeout: function(timeout) {
                configVisitorCookieTimeout = timeout;
            },
            crossDomainLinker: function(crossDomainLinkerCriterion) {
                decorateLinks(crossDomainLinkerCriterion);
            },
            enableActivityTracking: function(configuration) {
                if (!activityTrackingConfig.configurations.pagePing) {
                    activityTrackingConfig.enabled = true;
                    activityTrackingConfig.configurations.pagePing = configureActivityTracking((0, _tslib.__assign)((0, _tslib.__assign)({}, configuration), {
                        callback: logPagePing
                    }));
                }
            },
            enableActivityTrackingCallback: function(configuration) {
                if (!activityTrackingConfig.configurations.callback) {
                    activityTrackingConfig.enabled = true;
                    activityTrackingConfig.configurations.callback = configureActivityTracking(configuration);
                }
            },
            disableActivityTracking: function() {
                disableActivityTrackingAction("pagePing");
            },
            disableActivityTrackingCallback: function() {
                disableActivityTrackingAction("callback");
            },
            updatePageActivity: function() {
                activityHandler();
            },
            setOptOutCookie: function(name) {
                configOptOutCookie = name;
            },
            setUserId: function(userId) {
                businessUserId = userId;
            },
            setUserIdFromLocation: function(querystringField) {
                refreshUrl();
                businessUserId = fromQuerystring(querystringField, locationHrefAlias);
            },
            setUserIdFromReferrer: function(querystringField) {
                refreshUrl();
                businessUserId = fromQuerystring(querystringField, configReferrerUrl);
            },
            setUserIdFromCookie: function(cookieName) {
                businessUserId = cookie(cookieName);
            },
            setCollectorUrl: function(collectorUrl) {
                configCollectorUrl = asCollectorUrl(collectorUrl);
                outQueue.setCollectorUrl(configCollectorUrl);
            },
            setBufferSize: function(newBufferSize) {
                outQueue.setBufferSize(newBufferSize);
            },
            flushBuffer: function(configuration) {
                if (configuration === void 0) configuration = {};
                outQueue.executeQueue();
                if (configuration.newBufferSize) outQueue.setBufferSize(configuration.newBufferSize);
            },
            trackPageView: function(event) {
                if (event === void 0) event = {};
                logPageView(event);
            },
            preservePageViewId: function() {
                preservePageViewId = true;
            },
            disableAnonymousTracking: function(configuration) {
                trackerConfiguration.anonymousTracking = false;
                toggleAnonymousTracking(configuration);
                initializeIdsAndCookies();
                outQueue.executeQueue(); // There might be some events in the queue we've been unable to send in anonymous mode
            },
            enableAnonymousTracking: function(configuration) {
                var _a;
                trackerConfiguration.anonymousTracking = (_a = configuration && (configuration === null || configuration === void 0 ? void 0 : configuration.options)) !== null && _a !== void 0 ? _a : true;
                toggleAnonymousTracking(configuration);
                // Reset the page view, if not tracking the session, so can't stitch user into new events on the page view id
                if (!configAnonymousSessionTracking) resetPageView();
            },
            clearUserData: clearUserDataAndCookies
        };
        return (0, _tslib.__assign)((0, _tslib.__assign)({}, apiMethods), {
            id: trackerId,
            namespace: namespace,
            core: core,
            sharedState: state
        });
    };
    // Initialise the tracker
    var partialTracker = newTracker(trackerId, namespace, version, endpoint, sharedState, trackerConfiguration), tracker = (0, _tslib.__assign)((0, _tslib.__assign)({}, partialTracker), {
        addPlugin: function(configuration) {
            var _a, _b;
            tracker.core.addPlugin(configuration);
            (_b = (_a = configuration.plugin).activateBrowserPlugin) === null || _b === void 0 || _b.call(_a, tracker);
        }
    });
    // Initialise each plugin with the tracker
    browserPlugins.forEach(function(p) {
        var _a;
        (_a = p.activateBrowserPlugin) === null || _a === void 0 || _a.call(p, tracker);
    });
    return tracker;
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var namedTrackers = {};
/**
 * Dispatch function to all specified trackers
 *
 * @param trackers - An optional list of trackers to send the event to, or will send to all trackers
 * @param fn - The function which will run against each tracker
 */ function dispatchToTrackers(trackers, fn) {
    try {
        getTrackers(trackers !== null && trackers !== void 0 ? trackers : allTrackerNames()).forEach(fn);
    } catch (ex) {
        (0, _trackerCore.LOG).error("Function failed", ex);
    }
}
/**
 * Dispatch function to all specified trackers from the supplied collection
 *
 * @param trackers - An optional list of trackers to send the event to, or will send to all trackers
 * @param trackerCollection - The collection which the trackers will be selected from
 * @param fn - The function which will run against each tracker
 */ function dispatchToTrackersInCollection(trackers, trackerCollection, fn) {
    try {
        getTrackersFromCollection(trackers !== null && trackers !== void 0 ? trackers : Object.keys(trackerCollection), trackerCollection).forEach(fn);
    } catch (ex) {
        (0, _trackerCore.LOG).error("Function failed", ex);
    }
}
/**
 * Checks if a tracker has been created for a particular identifier
 * @param trackerId - The unique identifier of the tracker
 */ function trackerExists(trackerId) {
    return namedTrackers.hasOwnProperty(trackerId);
}
/**
 * Creates a Tracker and adds it to the internal collection
 * @param trackerId - The unique identifier of the tracker
 * @param namespace - The namespace of the tracker, tracked with each event as `tna`
 * @param version - The current version of the tracker library
 * @param endpoint - The endpoint to send events to
 * @param sharedState - The instance of shared state to use for this tracker
 * @param configuration - The configuration to use for this tracker instance
 */ function addTracker(trackerId, namespace, version, endpoint, sharedState, configuration) {
    if (!namedTrackers.hasOwnProperty(trackerId)) {
        namedTrackers[trackerId] = Tracker(trackerId, namespace, version, endpoint, sharedState, configuration);
        return namedTrackers[trackerId];
    }
    return null;
}
/**
 * Gets a single instance of the internal tracker object
 * @param trackerId - The unique identifier of the tracker
 * @returns The tracker instance, or null if not found
 */ function getTracker(trackerId) {
    if (namedTrackers.hasOwnProperty(trackerId)) return namedTrackers[trackerId];
    (0, _trackerCore.LOG).warn(trackerId + " not configured");
    return null;
}
/**
 * Gets an array of tracker instances based on the list of identifiers
 * @param trackerIds - An array of unique identifiers of the trackers
 * @returns The tracker instances, or empty list if none found
 */ function getTrackers(trackerIds) {
    return getTrackersFromCollection(trackerIds, namedTrackers);
}
/**
 * Gets all the trackers as a object, keyed by their unique identifiers
 */ function allTrackers() {
    return namedTrackers;
}
/**
 * Returns all the unique tracker identifiers
 */ function allTrackerNames() {
    return Object.keys(namedTrackers);
}
function getTrackersFromCollection(trackerIds, trackerCollection) {
    var trackers = [];
    for(var _i = 0, trackerIds_1 = trackerIds; _i < trackerIds_1.length; _i++){
        var id = trackerIds_1[_i];
        if (trackerCollection.hasOwnProperty(id)) trackers.push(trackerCollection[id]);
        else (0, _trackerCore.LOG).warn(id + " not configured");
    }
    return trackers;
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * A set of variables which are shared among all initialised trackers
 */ var SharedState = /** @class */ function() {
    function SharedState() {
        /* List of request queues - one per Tracker instance */ this.outQueues = [];
        this.bufferFlushers = [];
        /* DOM Ready */ this.hasLoaded = false;
        this.registeredOnLoadHandlers = [];
    }
    return SharedState;
}();
function createSharedState() {
    var sharedState = new SharedState(), documentAlias = document, windowAlias = window;
    /*
     * Handle page visibility event
     * Works everywhere except IE9
     */ function visibilityChangeHandler() {
        if (documentAlias.visibilityState == "hidden") // Flush all POST queues
        sharedState.bufferFlushers.forEach(function(flusher) {
            flusher(false);
        });
    }
    function flushBuffers() {
        // Flush all POST queues
        sharedState.bufferFlushers.forEach(function(flusher) {
            flusher(false);
        });
    }
    /*
     * Handler for onload event
     */ function loadHandler() {
        var i;
        if (!sharedState.hasLoaded) {
            sharedState.hasLoaded = true;
            for(i = 0; i < sharedState.registeredOnLoadHandlers.length; i++)sharedState.registeredOnLoadHandlers[i]();
        }
        return true;
    }
    /*
     * Add onload or DOM ready handler
     */ function addReadyListener() {
        if (documentAlias.addEventListener) documentAlias.addEventListener("DOMContentLoaded", function ready() {
            documentAlias.removeEventListener("DOMContentLoaded", ready, false);
            loadHandler();
        });
        else if (documentAlias.attachEvent) documentAlias.attachEvent("onreadystatechange", function ready() {
            if (documentAlias.readyState === "complete") {
                documentAlias.detachEvent("onreadystatechange", ready);
                loadHandler();
            }
        });
        // fallback
        addEventListener(windowAlias, "load", loadHandler, false);
    }
    /************************************************************
     * Constructor
     ************************************************************/ // initialize the Snowplow singleton
    if (documentAlias.visibilityState) // Flush for mobile and modern browsers
    addEventListener(documentAlias, "visibilitychange", visibilityChangeHandler, false);
    // Last attempt at flushing in beforeunload
    addEventListener(windowAlias, "beforeunload", flushBuffers, false);
    if (document.readyState === "loading") addReadyListener();
    else loadHandler();
    return sharedState;
}

},{"@snowplow/tracker-core":"1ScGP","tslib":"5HimZ","sha1":"4FjsI","uuid":"gRk6H","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"1ScGP":[function(require,module,exports) {
/*!
 * Core functionality for Snowplow JavaScript trackers v3.16.0 (http://bit.ly/sp-js)
 * Copyright 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LOG", ()=>LOG);
parcelHelpers.export(exports, "LOG_LEVEL", ()=>LOG_LEVEL);
parcelHelpers.export(exports, "buildAdClick", ()=>buildAdClick);
parcelHelpers.export(exports, "buildAdConversion", ()=>buildAdConversion);
parcelHelpers.export(exports, "buildAdImpression", ()=>buildAdImpression);
parcelHelpers.export(exports, "buildAddToCart", ()=>buildAddToCart);
parcelHelpers.export(exports, "buildConsentGranted", ()=>buildConsentGranted);
parcelHelpers.export(exports, "buildConsentWithdrawn", ()=>buildConsentWithdrawn);
parcelHelpers.export(exports, "buildEcommerceTransaction", ()=>buildEcommerceTransaction);
parcelHelpers.export(exports, "buildEcommerceTransactionItem", ()=>buildEcommerceTransactionItem);
parcelHelpers.export(exports, "buildFormFocusOrChange", ()=>buildFormFocusOrChange);
parcelHelpers.export(exports, "buildFormSubmission", ()=>buildFormSubmission);
parcelHelpers.export(exports, "buildLinkClick", ()=>buildLinkClick);
parcelHelpers.export(exports, "buildPagePing", ()=>buildPagePing);
parcelHelpers.export(exports, "buildPageView", ()=>buildPageView);
parcelHelpers.export(exports, "buildRemoveFromCart", ()=>buildRemoveFromCart);
parcelHelpers.export(exports, "buildScreenView", ()=>buildScreenView);
parcelHelpers.export(exports, "buildSelfDescribingEvent", ()=>buildSelfDescribingEvent);
parcelHelpers.export(exports, "buildSiteSearch", ()=>buildSiteSearch);
parcelHelpers.export(exports, "buildSocialInteraction", ()=>buildSocialInteraction);
parcelHelpers.export(exports, "buildStructEvent", ()=>buildStructEvent);
parcelHelpers.export(exports, "getRuleParts", ()=>getRuleParts);
parcelHelpers.export(exports, "getSchemaParts", ()=>getSchemaParts);
parcelHelpers.export(exports, "globalContexts", ()=>globalContexts);
parcelHelpers.export(exports, "isConditionalContextProvider", ()=>isConditionalContextProvider);
parcelHelpers.export(exports, "isContextCallbackFunction", ()=>isContextCallbackFunction);
parcelHelpers.export(exports, "isContextPrimitive", ()=>isContextPrimitive);
parcelHelpers.export(exports, "isFilterProvider", ()=>isFilterProvider);
parcelHelpers.export(exports, "isJson", ()=>isJson);
parcelHelpers.export(exports, "isNonEmptyJson", ()=>isNonEmptyJson);
parcelHelpers.export(exports, "isRuleSet", ()=>isRuleSet);
parcelHelpers.export(exports, "isRuleSetProvider", ()=>isRuleSetProvider);
parcelHelpers.export(exports, "isSelfDescribingJson", ()=>isSelfDescribingJson);
parcelHelpers.export(exports, "isStringArray", ()=>isStringArray);
parcelHelpers.export(exports, "isValidRule", ()=>isValidRule);
parcelHelpers.export(exports, "isValidRuleSetArg", ()=>isValidRuleSetArg);
parcelHelpers.export(exports, "matchSchemaAgainstRule", ()=>matchSchemaAgainstRule);
parcelHelpers.export(exports, "matchSchemaAgainstRuleSet", ()=>matchSchemaAgainstRuleSet);
parcelHelpers.export(exports, "payloadBuilder", ()=>payloadBuilder);
parcelHelpers.export(exports, "payloadJsonProcessor", ()=>payloadJsonProcessor);
parcelHelpers.export(exports, "pluginContexts", ()=>pluginContexts);
parcelHelpers.export(exports, "resolveDynamicContext", ()=>resolveDynamicContext);
parcelHelpers.export(exports, "trackerCore", ()=>trackerCore);
parcelHelpers.export(exports, "validateVendor", ()=>validateVendor);
parcelHelpers.export(exports, "validateVendorParts", ()=>validateVendorParts);
parcelHelpers.export(exports, "version", ()=>version);
var _tslib = require("tslib");
var _uuid = require("uuid");
var version$1 = "3.16.0";
/*
 * Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io)
 * and Contributors (http://phpjs.org/authors)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /**
 * Decodes a url safe Base 64 encoded string
 * @remarks See: {@link http://tools.ietf.org/html/rfc4648#page-7}
 * @param data - String to decode
 * @returns The decoded string
 */ function base64urldecode(data) {
    if (!data) return data;
    var padding = 4 - data.length % 4;
    switch(padding){
        case 2:
            data += "==";
            break;
        case 3:
            data += "=";
            break;
    }
    var b64Data = data.replace(/-/g, "+").replace(/_/g, "/");
    return base64decode(b64Data);
}
/**
 * Encodes a string into a url safe Base 64 encoded string
 * @remarks See: {@link http://tools.ietf.org/html/rfc4648#page-7}
 * @param data - String to encode
 * @returns The url safe Base 64 string
 */ function base64urlencode(data) {
    if (!data) return data;
    var enc = base64encode(data);
    return enc.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
/**
 * Encode string as base64.
 * Any type can be passed, but will be stringified
 *
 * @param data - string to encode
 * @returns base64-encoded string
 */ function base64encode(data) {
    // discuss at: http://phpjs.org/functions/base64_encode/
    // original by: Tyler Akins (http://rumkin.com)
    // improved by: Bayron Guevara
    // improved by: Thunder.m
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Rafał Kukawski (http://kukawski.pl)
    // bugfixed by: Pellentesque Malesuada
    // example 1: base64_encode('Kevin van Zonneveld');
    // returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    // example 2: base64_encode('a');
    // returns 2: 'YQ=='
    // example 3: base64_encode('✓ à la mode');
    // returns 3: '4pyTIMOgIGxhIG1vZGU='
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0;
    var tmp_arr = [];
    if (!data) return data;
    data = unescape(encodeURIComponent(data));
    do {
        // pack three octets into four hexets
        o1 = data.charCodeAt(i++);
        o2 = data.charCodeAt(i++);
        o3 = data.charCodeAt(i++);
        bits = o1 << 16 | o2 << 8 | o3;
        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;
        // use hexets to index into b64, and append result to encoded string
        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    }while (i < data.length);
    var enc = tmp_arr.join("");
    var r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
}
/**
 * Decode base64 to string
 *
 * @param data - base64 to string
 * @returns decoded string
 */ function base64decode(encodedData) {
    //  discuss at: http://locutus.io/php/base64_decode/
    // original by: Tyler Akins (http://rumkin.com)
    // improved by: Thunder.m
    // improved by: Kevin van Zonneveld (http://kvz.io)
    // improved by: Kevin van Zonneveld (http://kvz.io)
    //    input by: Aman Gupta
    //    input by: Brett Zamir (http://brett-zamir.me)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // bugfixed by: Pellentesque Malesuada
    // bugfixed by: Kevin van Zonneveld (http://kvz.io)
    // improved by: Indigo744
    //   example 1: base64_decode('S2V2aW4gdmFuIFpvbm5ldmVsZA==')
    //   returns 1: 'Kevin van Zonneveld'
    //   example 2: base64_decode('YQ==')
    //   returns 2: 'a'
    //   example 3: base64_decode('4pyTIMOgIGxhIG1vZGU=')
    //   returns 3: '✓ à la mode'
    // decodeUTF8string()
    // Internal function to decode properly UTF8 string
    // Adapted from Solution #1 at https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
    var decodeUTF8string = function(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(str.split("").map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    };
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "";
    var tmpArr = [];
    if (!encodedData) return encodedData;
    encodedData += "";
    do {
        // unpack four hexets into three octets using index points in b64
        h1 = b64.indexOf(encodedData.charAt(i++));
        h2 = b64.indexOf(encodedData.charAt(i++));
        h3 = b64.indexOf(encodedData.charAt(i++));
        h4 = b64.indexOf(encodedData.charAt(i++));
        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;
        if (h3 === 64) tmpArr[ac++] = String.fromCharCode(o1);
        else if (h4 === 64) tmpArr[ac++] = String.fromCharCode(o1, o2);
        else tmpArr[ac++] = String.fromCharCode(o1, o2, o3);
    }while (i < encodedData.length);
    dec = tmpArr.join("");
    return decodeUTF8string(dec.replace(/\0+$/, ""));
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function payloadBuilder() {
    var dict = {}, allJson = [], jsonForProcessing = [], contextEntitiesForProcessing = [];
    var processor;
    var add = function(key, value) {
        if (value != null && value !== "") // null also checks undefined
        dict[key] = value;
    };
    var addDict = function(dict) {
        for(var key in dict)if (Object.prototype.hasOwnProperty.call(dict, key)) add(key, dict[key]);
    };
    var addJson = function(keyIfEncoded, keyIfNotEncoded, json) {
        if (json && isNonEmptyJson(json)) {
            var jsonWithKeys = {
                keyIfEncoded: keyIfEncoded,
                keyIfNotEncoded: keyIfNotEncoded,
                json: json
            };
            jsonForProcessing.push(jsonWithKeys);
            allJson.push(jsonWithKeys);
        }
    };
    var addContextEntity = function(entity) {
        contextEntitiesForProcessing.push(entity);
    };
    return {
        add: add,
        addDict: addDict,
        addJson: addJson,
        addContextEntity: addContextEntity,
        getPayload: function() {
            return dict;
        },
        getJson: function() {
            return allJson;
        },
        withJsonProcessor: function(jsonProcessor) {
            processor = jsonProcessor;
        },
        build: function() {
            processor === null || processor === void 0 || processor(this, jsonForProcessing, contextEntitiesForProcessing);
            return dict;
        }
    };
}
/**
 * A helper to build a Snowplow request from a set of name-value pairs, provided using the add methods.
 * Will base64 encode JSON, if desired, on build
 *
 * @returns The request builder, with add and build methods
 */ function payloadJsonProcessor(encodeBase64) {
    return function(payloadBuilder, jsonForProcessing, contextEntitiesForProcessing) {
        var add = function(json, keyIfEncoded, keyIfNotEncoded) {
            var str = JSON.stringify(json);
            if (encodeBase64) payloadBuilder.add(keyIfEncoded, base64urlencode(str));
            else payloadBuilder.add(keyIfNotEncoded, str);
        };
        var getContextFromPayload = function() {
            var payload = payloadBuilder.getPayload();
            if (encodeBase64 ? payload.cx : payload.co) return JSON.parse(encodeBase64 ? base64urldecode(payload.cx) : payload.co);
            return undefined;
        };
        var combineContexts = function(originalContext, newContext) {
            var context = originalContext || getContextFromPayload();
            if (context) context.data = context.data.concat(newContext.data);
            else context = newContext;
            return context;
        };
        var context = undefined;
        for(var _i = 0, jsonForProcessing_1 = jsonForProcessing; _i < jsonForProcessing_1.length; _i++){
            var json = jsonForProcessing_1[_i];
            if (json.keyIfEncoded === "cx") context = combineContexts(context, json.json);
            else add(json.json, json.keyIfEncoded, json.keyIfNotEncoded);
        }
        jsonForProcessing.length = 0;
        if (contextEntitiesForProcessing.length) {
            var newContext = {
                schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                data: (0, _tslib.__spreadArray)([], contextEntitiesForProcessing, true)
            };
            context = combineContexts(context, newContext);
            contextEntitiesForProcessing.length = 0;
        }
        if (context) add(context, "cx", "co");
    };
}
/**
 * Is property a non-empty JSON?
 * @param property - Checks if object is non-empty json
 */ function isNonEmptyJson(property) {
    if (!isJson(property)) return false;
    for(var key in property){
        if (Object.prototype.hasOwnProperty.call(property, key)) return true;
    }
    return false;
}
/**
 * Is property a JSON?
 * @param property - Checks if object is json
 */ function isJson(property) {
    return typeof property !== "undefined" && property !== null && (property.constructor === ({}).constructor || property.constructor === [].constructor);
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var label = "Snowplow: ";
var LOG_LEVEL;
(function(LOG_LEVEL) {
    LOG_LEVEL[LOG_LEVEL["none"] = 0] = "none";
    LOG_LEVEL[LOG_LEVEL["error"] = 1] = "error";
    LOG_LEVEL[LOG_LEVEL["warn"] = 2] = "warn";
    LOG_LEVEL[LOG_LEVEL["debug"] = 3] = "debug";
    LOG_LEVEL[LOG_LEVEL["info"] = 4] = "info";
})(LOG_LEVEL || (LOG_LEVEL = {}));
var LOG = logger();
function logger(logLevel) {
    if (logLevel === void 0) logLevel = LOG_LEVEL.warn;
    function setLogLevel(level) {
        if (LOG_LEVEL[level]) logLevel = level;
        else logLevel = LOG_LEVEL.warn;
    }
    /**
     * Log errors, with or without error object
     */ function error(message, error) {
        var extraParams = [];
        for(var _i = 2; _i < arguments.length; _i++)extraParams[_i - 2] = arguments[_i];
        if (logLevel >= LOG_LEVEL.error && typeof console !== "undefined") {
            var logMsg = label + message + "\n";
            if (error) console.error.apply(console, (0, _tslib.__spreadArray)([
                logMsg + "\n",
                error
            ], extraParams, false));
            else console.error.apply(console, (0, _tslib.__spreadArray)([
                logMsg
            ], extraParams, false));
        }
    }
    /**
     * Log warnings, with or without error object
     */ function warn(message, error) {
        var extraParams = [];
        for(var _i = 2; _i < arguments.length; _i++)extraParams[_i - 2] = arguments[_i];
        if (logLevel >= LOG_LEVEL.warn && typeof console !== "undefined") {
            var logMsg = label + message;
            if (error) console.warn.apply(console, (0, _tslib.__spreadArray)([
                logMsg + "\n",
                error
            ], extraParams, false));
            else console.warn.apply(console, (0, _tslib.__spreadArray)([
                logMsg
            ], extraParams, false));
        }
    }
    /**
     * Log debug messages
     */ function debug(message) {
        var extraParams = [];
        for(var _i = 1; _i < arguments.length; _i++)extraParams[_i - 1] = arguments[_i];
        if (logLevel >= LOG_LEVEL.debug && typeof console !== "undefined") console.debug.apply(console, (0, _tslib.__spreadArray)([
            label + message
        ], extraParams, false));
    }
    /**
     * Log info messages
     */ function info(message) {
        var extraParams = [];
        for(var _i = 1; _i < arguments.length; _i++)extraParams[_i - 1] = arguments[_i];
        if (logLevel >= LOG_LEVEL.info && typeof console !== "undefined") console.info.apply(console, (0, _tslib.__spreadArray)([
            label + message
        ], extraParams, false));
    }
    return {
        setLogLevel: setLogLevel,
        warn: warn,
        error: error,
        debug: debug,
        info: info
    };
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * Contains helper functions to aid in the addition and removal of Global Contexts
 */ function globalContexts() {
    var globalPrimitives = [];
    var conditionalProviders = [];
    /**
     * Returns all applicable global contexts for a specified event
     * @param event - The event to check for applicable global contexts for
     * @returns An array of contexts
     */ var assembleAllContexts = function(event) {
        var eventSchema = getUsefulSchema(event);
        var eventType = getEventType(event);
        var contexts = [];
        var generatedPrimitives = generatePrimitives(globalPrimitives, event, eventType, eventSchema);
        contexts.push.apply(contexts, generatedPrimitives);
        var generatedConditionals = generateConditionals(conditionalProviders, event, eventType, eventSchema);
        contexts.push.apply(contexts, generatedConditionals);
        return contexts;
    };
    return {
        getGlobalPrimitives: function() {
            return globalPrimitives;
        },
        getConditionalProviders: function() {
            return conditionalProviders;
        },
        addGlobalContexts: function(contexts) {
            var acceptedConditionalContexts = [];
            var acceptedContextPrimitives = [];
            for(var _i = 0, contexts_1 = contexts; _i < contexts_1.length; _i++){
                var context = contexts_1[_i];
                if (isConditionalContextProvider(context)) acceptedConditionalContexts.push(context);
                else if (isContextPrimitive(context)) acceptedContextPrimitives.push(context);
            }
            globalPrimitives = globalPrimitives.concat(acceptedContextPrimitives);
            conditionalProviders = conditionalProviders.concat(acceptedConditionalContexts);
        },
        clearGlobalContexts: function() {
            conditionalProviders = [];
            globalPrimitives = [];
        },
        removeGlobalContexts: function(contexts) {
            var _loop_1 = function(context) {
                if (isConditionalContextProvider(context)) conditionalProviders = conditionalProviders.filter(function(item) {
                    return JSON.stringify(item) !== JSON.stringify(context);
                });
                else if (isContextPrimitive(context)) globalPrimitives = globalPrimitives.filter(function(item) {
                    return JSON.stringify(item) !== JSON.stringify(context);
                });
            };
            for(var _i = 0, contexts_2 = contexts; _i < contexts_2.length; _i++){
                var context = contexts_2[_i];
                _loop_1(context);
            }
        },
        getApplicableContexts: function(event) {
            return assembleAllContexts(event);
        }
    };
}
function pluginContexts(plugins) {
    /**
     * Add common contexts to every event
     *
     * @param array - additionalContexts List of user-defined contexts
     * @returns userContexts combined with commonContexts
     */ return {
        addPluginContexts: function(additionalContexts) {
            var combinedContexts = additionalContexts ? (0, _tslib.__spreadArray)([], additionalContexts, true) : [];
            plugins.forEach(function(plugin) {
                try {
                    if (plugin.contexts) combinedContexts.push.apply(combinedContexts, plugin.contexts());
                } catch (ex) {
                    LOG.error("Error adding plugin contexts", ex);
                }
            });
            return combinedContexts;
        }
    };
}
/**
 * Find dynamic context generating functions and return their results to be merged into the static contexts
 * Combine an array of unchanging contexts with the result of a context-creating function
 *
 * @param dynamicOrStaticContexts - Array of custom context Objects or custom context generating functions
 * @param Parameters - to pass to dynamic context callbacks
 * @returns An array of Self Describing JSON context
 */ function resolveDynamicContext(dynamicOrStaticContexts) {
    var _a;
    var extraParams = [];
    for(var _i = 1; _i < arguments.length; _i++)extraParams[_i - 1] = arguments[_i];
    return (_a = dynamicOrStaticContexts === null || dynamicOrStaticContexts === void 0 ? void 0 : dynamicOrStaticContexts.map(function(context) {
        if (typeof context === "function") try {
            return context.apply(void 0, extraParams);
        } catch (e) {
            //TODO: provide warning
            return undefined;
        }
        else return context;
    }).filter(Boolean)) !== null && _a !== void 0 ? _a : [];
}
/**
 * Slices a schema into its composite parts. Useful for ruleset filtering.
 * @param input - A schema string
 * @returns The vendor, schema name, major, minor and patch information of a schema string
 */ function getSchemaParts(input) {
    var re = new RegExp("^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$");
    var matches = re.exec(input);
    if (matches !== null) return matches.slice(1, 6);
    return undefined;
}
/**
 * Validates the vendor section of a schema string contains allowed wildcard values
 * @param parts - Array of parts from a schema string
 * @returns Whether the vendor validation parts are a valid combination
 */ function validateVendorParts(parts) {
    if (parts[0] === "*" || parts[1] === "*") return false; // no wildcard in first or second part
    if (parts.slice(2).length > 0) {
        var asterisk = false;
        for(var _i = 0, _a = parts.slice(2); _i < _a.length; _i++){
            var part = _a[_i];
            if (part === "*") // mark when we've found a wildcard
            asterisk = true;
            else if (asterisk) // invalid if alpha parts come after wildcard
            return false;
        }
        return true;
    } else if (parts.length == 2) return true;
    return false;
}
/**
 * Validates the vendor part of a schema string is valid for a rule set
 * @param input - Vendor part of a schema string
 * @returns Whether the vendor validation string is valid
 */ function validateVendor(input) {
    var parts = input.split(".");
    if (parts && parts.length > 1) return validateVendorParts(parts);
    return false;
}
/**
 * Checks for validity of input and returns all the sections of a schema string that are used to match rules in a ruleset
 * @param input - A Schema string
 * @returns The sections of a schema string that are used to match rules in a ruleset
 */ function getRuleParts(input) {
    var re = new RegExp("^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$");
    var matches = re.exec(input);
    if (matches !== null && validateVendor(matches[1])) return matches.slice(1, 6);
    return undefined;
}
/**
 * Ensures the rules specified in a schema string of a ruleset are valid
 * @param input - A Schema string
 * @returns if there rule is valid
 */ function isValidRule(input) {
    var ruleParts = getRuleParts(input);
    if (ruleParts) {
        var vendor = ruleParts[0];
        return ruleParts.length === 5 && validateVendor(vendor);
    }
    return false;
}
/**
 * Check if a variable is an Array containing only strings
 * @param input - The variable to validate
 * @returns True if the input is an array containing only strings
 */ function isStringArray(input) {
    return Array.isArray(input) && input.every(function(x) {
        return typeof x === "string";
    });
}
/**
 * Validates whether a rule set is an array of valid ruleset strings
 * @param input - The Array of rule set arguments
 * @returns True is the input is an array of valid rules
 */ function isValidRuleSetArg(input) {
    if (isStringArray(input)) return input.every(function(x) {
        return isValidRule(x);
    });
    else if (typeof input === "string") return isValidRule(input);
    return false;
}
/**
 * Check if a variable is a valid, non-empty Self Describing JSON
 * @param input - The variable to validate
 * @returns True if a valid Self Describing JSON
 */ function isSelfDescribingJson(input) {
    var sdj = input;
    if (isNonEmptyJson(sdj)) {
        if ("schema" in sdj && "data" in sdj) return typeof sdj.schema === "string" && typeof sdj.data === "object";
    }
    return false;
}
/**
 * Validates if the input object contains the expected properties of a ruleset
 * @param input - The object containing a rule set
 * @returns True if a valid rule set
 */ function isRuleSet(input) {
    var ruleSet = input;
    var ruleCount = 0;
    if (input != null && typeof input === "object" && !Array.isArray(input)) {
        if (Object.prototype.hasOwnProperty.call(ruleSet, "accept")) {
            if (isValidRuleSetArg(ruleSet["accept"])) ruleCount += 1;
            else return false;
        }
        if (Object.prototype.hasOwnProperty.call(ruleSet, "reject")) {
            if (isValidRuleSetArg(ruleSet["reject"])) ruleCount += 1;
            else return false;
        }
        // if either 'reject' or 'accept' or both exists,
        // we have a valid ruleset
        return ruleCount > 0 && ruleCount <= 2;
    }
    return false;
}
/**
 * Validates if the function can be a valid context generator function
 * @param input - The function to be validated
 */ function isContextCallbackFunction(input) {
    return typeof input === "function" && input.length <= 1;
}
/**
 * Validates if the function can be a valid context primitive function or self describing json
 * @param input - The function or orbject to be validated
 * @returns True if either a Context Generator or Self Describing JSON
 */ function isContextPrimitive(input) {
    return isContextCallbackFunction(input) || isSelfDescribingJson(input);
}
/**
 * Validates if an array is a valid shape to be a Filter Provider
 * @param input - The Array of Context filter callbacks
 */ function isFilterProvider(input) {
    if (Array.isArray(input)) {
        if (input.length === 2) {
            if (Array.isArray(input[1])) return isContextCallbackFunction(input[0]) && input[1].every(isContextPrimitive);
            return isContextCallbackFunction(input[0]) && isContextPrimitive(input[1]);
        }
    }
    return false;
}
/**
 * Validates if an array is a valid shape to be an array of rule sets
 * @param input - The Array of Rule Sets
 */ function isRuleSetProvider(input) {
    if (Array.isArray(input) && input.length === 2) {
        if (!isRuleSet(input[0])) return false;
        if (Array.isArray(input[1])) return input[1].every(isContextPrimitive);
        return isContextPrimitive(input[1]);
    }
    return false;
}
/**
 * Checks if an input array is either a filter provider or a rule set provider
 * @param input - An array of filter providers or rule set providers
 * @returns Whether the array is a valid {@link ConditionalContextProvider}
 */ function isConditionalContextProvider(input) {
    return isFilterProvider(input) || isRuleSetProvider(input);
}
/**
 * Checks if a given schema matches any rules within the provided rule set
 * @param ruleSet - The rule set containing rules to match schema against
 * @param schema - The schema to be matched against the rule set
 */ function matchSchemaAgainstRuleSet(ruleSet, schema) {
    var rejectCount = 0;
    var acceptCount = 0;
    var acceptRules = ruleSet["accept"];
    if (Array.isArray(acceptRules)) {
        if (ruleSet.accept.some(function(rule) {
            return matchSchemaAgainstRule(rule, schema);
        })) acceptCount++;
    } else if (typeof acceptRules === "string") {
        if (matchSchemaAgainstRule(acceptRules, schema)) acceptCount++;
    }
    var rejectRules = ruleSet["reject"];
    if (Array.isArray(rejectRules)) {
        if (ruleSet.reject.some(function(rule) {
            return matchSchemaAgainstRule(rule, schema);
        })) rejectCount++;
    } else if (typeof rejectRules === "string") {
        if (matchSchemaAgainstRule(rejectRules, schema)) rejectCount++;
    }
    if (acceptCount > 0 && rejectCount === 0) return true;
    else if (acceptCount === 0 && rejectCount > 0) return false;
    return false;
}
/**
 * Checks if a given schema matches a specific rule from a rule set
 * @param rule - The rule to match schema against
 * @param schema - The schema to be matched against the rule
 */ function matchSchemaAgainstRule(rule, schema) {
    if (!isValidRule(rule)) return false;
    var ruleParts = getRuleParts(rule);
    var schemaParts = getSchemaParts(schema);
    if (ruleParts && schemaParts) {
        if (!matchVendor(ruleParts[0], schemaParts[0])) return false;
        for(var i = 1; i < 5; i++){
            if (!matchPart(ruleParts[i], schemaParts[i])) return false;
        }
        return true; // if it hasn't failed, it passes
    }
    return false;
}
function matchVendor(rule, vendor) {
    // rule and vendor must have same number of elements
    var vendorParts = vendor.split(".");
    var ruleParts = rule.split(".");
    if (vendorParts && ruleParts) {
        if (vendorParts.length !== ruleParts.length) return false;
        for(var i = 0; i < ruleParts.length; i++){
            if (!matchPart(vendorParts[i], ruleParts[i])) return false;
        }
        return true;
    }
    return false;
}
function matchPart(rule, schema) {
    // parts should be the string nested between slashes in the URI: /example/
    return rule && schema && rule === "*" || rule === schema;
}
// Returns the "useful" schema, i.e. what would someone want to use to identify events.
// For some events this is the 'e' property but for unstructured events, this is the
// 'schema' from the 'ue_px' field.
function getUsefulSchema(sb) {
    var eventJson = sb.getJson();
    for(var _i = 0, eventJson_1 = eventJson; _i < eventJson_1.length; _i++){
        var json = eventJson_1[_i];
        if (json.keyIfEncoded === "ue_px" && typeof json.json["data"] === "object") {
            var schema = json.json["data"]["schema"];
            if (typeof schema == "string") return schema;
        }
    }
    return "";
}
function getEventType(payloadBuilder) {
    var eventType = payloadBuilder.getPayload()["e"];
    return typeof eventType === "string" ? eventType : "";
}
function buildGenerator(generator, event, eventType, eventSchema) {
    var contextGeneratorResult = undefined;
    try {
        // try to evaluate context generator
        var args = {
            event: event.getPayload(),
            eventType: eventType,
            eventSchema: eventSchema
        };
        contextGeneratorResult = generator(args);
        // determine if the produced result is a valid SDJ
        if (Array.isArray(contextGeneratorResult) && contextGeneratorResult.every(isSelfDescribingJson)) return contextGeneratorResult;
        else if (isSelfDescribingJson(contextGeneratorResult)) return contextGeneratorResult;
        else return undefined;
    } catch (error) {
        contextGeneratorResult = undefined;
    }
    return contextGeneratorResult;
}
function normalizeToArray(input) {
    if (Array.isArray(input)) return input;
    return Array.of(input);
}
function generatePrimitives(contextPrimitives, event, eventType, eventSchema) {
    var _a;
    var normalizedInputs = normalizeToArray(contextPrimitives);
    var partialEvaluate = function(primitive) {
        var result = evaluatePrimitive(primitive, event, eventType, eventSchema);
        if (result && result.length !== 0) return result;
        return undefined;
    };
    var generatedContexts = normalizedInputs.map(partialEvaluate);
    return (_a = []).concat.apply(_a, generatedContexts.filter(function(c) {
        return c != null && c.filter(Boolean);
    }));
}
function evaluatePrimitive(contextPrimitive, event, eventType, eventSchema) {
    if (isSelfDescribingJson(contextPrimitive)) return [
        contextPrimitive
    ];
    else if (isContextCallbackFunction(contextPrimitive)) {
        var generatorOutput = buildGenerator(contextPrimitive, event, eventType, eventSchema);
        if (isSelfDescribingJson(generatorOutput)) return [
            generatorOutput
        ];
        else if (Array.isArray(generatorOutput)) return generatorOutput;
    }
    return undefined;
}
function evaluateProvider(provider, event, eventType, eventSchema) {
    if (isFilterProvider(provider)) {
        var filter = provider[0];
        var filterResult = false;
        try {
            var args = {
                event: event.getPayload(),
                eventType: eventType,
                eventSchema: eventSchema
            };
            filterResult = filter(args);
        } catch (error) {
            filterResult = false;
        }
        if (filterResult === true) return generatePrimitives(provider[1], event, eventType, eventSchema);
    } else if (isRuleSetProvider(provider)) {
        if (matchSchemaAgainstRuleSet(provider[0], eventSchema)) return generatePrimitives(provider[1], event, eventType, eventSchema);
    }
    return [];
}
function generateConditionals(providers, event, eventType, eventSchema) {
    var _a;
    var normalizedInput = normalizeToArray(providers);
    var partialEvaluate = function(provider) {
        var result = evaluateProvider(provider, event, eventType, eventSchema);
        if (result && result.length !== 0) return result;
        return undefined;
    };
    var generatedContexts = normalizedInput.map(partialEvaluate);
    return (_a = []).concat.apply(_a, generatedContexts.filter(function(c) {
        return c != null && c.filter(Boolean);
    }));
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * Transform optional/old-behavior number timestamp into`Timestamp` ADT
 *
 * @param timestamp - optional number or timestamp object
 * @returns correct timestamp object
 */ function getTimestamp(timestamp) {
    if (timestamp == null) return {
        type: "dtm",
        value: new Date().getTime()
    };
    else if (typeof timestamp === "number") return {
        type: "dtm",
        value: timestamp
    };
    else if (timestamp.type === "ttm") // We can return timestamp here, but this is safer fallback
    return {
        type: "ttm",
        value: timestamp.value
    };
    else return {
        type: "dtm",
        value: timestamp.value || new Date().getTime()
    };
}
/**
 * Create a tracker core object
 *
 * @param base64 - Whether to base 64 encode contexts and self describing event JSONs
 * @param corePlugins - The core plugins to be processed with each event
 * @param callback - Function applied to every payload dictionary object
 * @returns Tracker core
 */ function trackerCore(configuration) {
    if (configuration === void 0) configuration = {};
    function newCore(base64, corePlugins, callback) {
        var pluginContextsHelper = pluginContexts(corePlugins), globalContextsHelper = globalContexts();
        var encodeBase64 = base64, payloadPairs = {}; // Dictionary of key-value pairs which get added to every payload, e.g. tracker version
        /**
         * Wraps an array of custom contexts in a self-describing JSON
         *
         * @param contexts - Array of custom context self-describing JSONs
         * @returns Outer JSON
         */ function completeContexts(contexts) {
            if (contexts && contexts.length) return {
                schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                data: contexts
            };
            return undefined;
        }
        /**
         * Adds all global contexts to a contexts array
         *
         * @param pb - PayloadData
         * @param contexts - Custom contexts relating to the event
         */ function attachGlobalContexts(pb, contexts) {
            var applicableContexts = globalContextsHelper.getApplicableContexts(pb);
            var returnedContexts = [];
            if (contexts && contexts.length) returnedContexts.push.apply(returnedContexts, contexts);
            if (applicableContexts && applicableContexts.length) returnedContexts.push.apply(returnedContexts, applicableContexts);
            return returnedContexts;
        }
        /**
         * Gets called by every trackXXX method
         * Adds context and payloadPairs name-value pairs to the payload
         * Applies the callback to the built payload
         *
         * @param pb - Payload
         * @param context - Custom contexts relating to the event
         * @param timestamp - Timestamp of the event
         * @returns Payload after the callback is applied
         */ function track(pb, context, timestamp) {
            pb.withJsonProcessor(payloadJsonProcessor(encodeBase64));
            pb.add("eid", (0, _uuid.v4)());
            pb.addDict(payloadPairs);
            var tstamp = getTimestamp(timestamp);
            pb.add(tstamp.type, tstamp.value.toString());
            var allContexts = attachGlobalContexts(pb, pluginContextsHelper.addPluginContexts(context));
            var wrappedContexts = completeContexts(allContexts);
            if (wrappedContexts !== undefined) pb.addJson("cx", "co", wrappedContexts);
            corePlugins.forEach(function(plugin) {
                try {
                    if (plugin.beforeTrack) plugin.beforeTrack(pb);
                } catch (ex) {
                    LOG.error("Plugin beforeTrack", ex);
                }
            });
            if (typeof callback === "function") callback(pb);
            var finalPayload = pb.build();
            corePlugins.forEach(function(plugin) {
                try {
                    if (plugin.afterTrack) plugin.afterTrack(finalPayload);
                } catch (ex) {
                    LOG.error("Plugin afterTrack", ex);
                }
            });
            return finalPayload;
        }
        /**
         * Set a persistent key-value pair to be added to every payload
         *
         * @param key - Field name
         * @param value - Field value
         */ function addPayloadPair(key, value) {
            payloadPairs[key] = value;
        }
        var core = {
            track: track,
            addPayloadPair: addPayloadPair,
            getBase64Encoding: function() {
                return encodeBase64;
            },
            setBase64Encoding: function(encode) {
                encodeBase64 = encode;
            },
            addPayloadDict: function(dict) {
                for(var key in dict)if (Object.prototype.hasOwnProperty.call(dict, key)) payloadPairs[key] = dict[key];
            },
            resetPayloadPairs: function(dict) {
                payloadPairs = isJson(dict) ? dict : {};
            },
            setTrackerVersion: function(version) {
                addPayloadPair("tv", version);
            },
            setTrackerNamespace: function(name) {
                addPayloadPair("tna", name);
            },
            setAppId: function(appId) {
                addPayloadPair("aid", appId);
            },
            setPlatform: function(value) {
                addPayloadPair("p", value);
            },
            setUserId: function(userId) {
                addPayloadPair("uid", userId);
            },
            setScreenResolution: function(width, height) {
                addPayloadPair("res", width + "x" + height);
            },
            setViewport: function(width, height) {
                addPayloadPair("vp", width + "x" + height);
            },
            setColorDepth: function(depth) {
                addPayloadPair("cd", depth);
            },
            setTimezone: function(timezone) {
                addPayloadPair("tz", timezone);
            },
            setLang: function(lang) {
                addPayloadPair("lang", lang);
            },
            setIpAddress: function(ip) {
                addPayloadPair("ip", ip);
            },
            setUseragent: function(useragent) {
                addPayloadPair("ua", useragent);
            },
            addGlobalContexts: function(contexts) {
                globalContextsHelper.addGlobalContexts(contexts);
            },
            clearGlobalContexts: function() {
                globalContextsHelper.clearGlobalContexts();
            },
            removeGlobalContexts: function(contexts) {
                globalContextsHelper.removeGlobalContexts(contexts);
            }
        };
        return core;
    }
    var base64 = configuration.base64, corePlugins = configuration.corePlugins, callback = configuration.callback, plugins = corePlugins !== null && corePlugins !== void 0 ? corePlugins : [], partialCore = newCore(base64 !== null && base64 !== void 0 ? base64 : true, plugins, callback), core = (0, _tslib.__assign)((0, _tslib.__assign)({}, partialCore), {
        addPlugin: function(configuration) {
            var _a, _b;
            var plugin = configuration.plugin;
            plugins.push(plugin);
            (_a = plugin.logger) === null || _a === void 0 || _a.call(plugin, LOG);
            (_b = plugin.activateCorePlugin) === null || _b === void 0 || _b.call(plugin, core);
        }
    });
    plugins === null || plugins === void 0 || plugins.forEach(function(plugin) {
        var _a, _b;
        (_a = plugin.logger) === null || _a === void 0 || _a.call(plugin, LOG);
        (_b = plugin.activateCorePlugin) === null || _b === void 0 || _b.call(plugin, core);
    });
    return core;
}
/**
 * Build a self-describing event
 * A custom event type, allowing for an event to be tracked using your own custom schema
 * and a data object which conforms to the supplied schema
 *
 * @param event - Contains the properties and schema location for the event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildSelfDescribingEvent(event) {
    var _a = event.event, schema = _a.schema, data = _a.data, pb = payloadBuilder();
    var ueJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
        data: {
            schema: schema,
            data: data
        }
    };
    pb.add("e", "ue");
    pb.addJson("ue_px", "ue_pr", ueJson);
    return pb;
}
/**
 * Build a Page View Event
 * Represents a Page View, which is typically fired as soon as possible when a web page
 * is loaded within the users browser. Often also fired on "virtual page views" within
 * Single Page Applications (SPA).
 *
 * @param event - Contains the properties for the Page View event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildPageView(event) {
    var pageUrl = event.pageUrl, pageTitle = event.pageTitle, referrer = event.referrer, pb = payloadBuilder();
    pb.add("e", "pv"); // 'pv' for Page View
    pb.add("url", pageUrl);
    pb.add("page", pageTitle);
    pb.add("refr", referrer);
    return pb;
}
/**
 * Build a Page Ping Event
 * Fires when activity tracking is enabled in the browser.
 * Tracks same information as the last tracked Page View and includes scroll
 * information from the current page view
 *
 * @param event - Contains the properties for the Page Ping event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildPagePing(event) {
    var pageUrl = event.pageUrl, pageTitle = event.pageTitle, referrer = event.referrer, minXOffset = event.minXOffset, maxXOffset = event.maxXOffset, minYOffset = event.minYOffset, maxYOffset = event.maxYOffset, pb = payloadBuilder();
    pb.add("e", "pp"); // 'pp' for Page Ping
    pb.add("url", pageUrl);
    pb.add("page", pageTitle);
    pb.add("refr", referrer);
    if (minXOffset && !isNaN(Number(minXOffset))) pb.add("pp_mix", minXOffset.toString());
    if (maxXOffset && !isNaN(Number(maxXOffset))) pb.add("pp_max", maxXOffset.toString());
    if (minYOffset && !isNaN(Number(minYOffset))) pb.add("pp_miy", minYOffset.toString());
    if (maxYOffset && !isNaN(Number(maxYOffset))) pb.add("pp_may", maxYOffset.toString());
    return pb;
}
/**
 * Build a Structured Event
 * A classic style of event tracking, allows for easier movement between analytics
 * systems. A loosely typed event, creating a Self Describing event is preferred, but
 * useful for interoperability.
 *
 * @param event - Contains the properties for the Structured event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildStructEvent(event) {
    var category = event.category, action = event.action, label = event.label, property = event.property, value = event.value, pb = payloadBuilder();
    pb.add("e", "se"); // 'se' for Structured Event
    pb.add("se_ca", category);
    pb.add("se_ac", action);
    pb.add("se_la", label);
    pb.add("se_pr", property);
    pb.add("se_va", value == null ? undefined : value.toString());
    return pb;
}
/**
 * Build an Ecommerce Transaction Event
 * Allows for tracking common ecommerce events, this event is usually used when
 * a consumer completes a transaction.
 *
 * @param event - Contains the properties for the Ecommerce Transactoion event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildEcommerceTransaction(event) {
    var orderId = event.orderId, total = event.total, affiliation = event.affiliation, tax = event.tax, shipping = event.shipping, city = event.city, state = event.state, country = event.country, currency = event.currency, pb = payloadBuilder();
    pb.add("e", "tr"); // 'tr' for Transaction
    pb.add("tr_id", orderId);
    pb.add("tr_af", affiliation);
    pb.add("tr_tt", total);
    pb.add("tr_tx", tax);
    pb.add("tr_sh", shipping);
    pb.add("tr_ci", city);
    pb.add("tr_st", state);
    pb.add("tr_co", country);
    pb.add("tr_cu", currency);
    return pb;
}
/**
 * Build an Ecommerce Transaction Item Event
 * Related to the {@link buildEcommerceTransaction}
 * Each Ecommerce Transaction may contain one or more EcommerceTransactionItem events
 *
 * @param event - Contains the properties for the Ecommerce Transaction Item event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildEcommerceTransactionItem(event) {
    var orderId = event.orderId, sku = event.sku, price = event.price, name = event.name, category = event.category, quantity = event.quantity, currency = event.currency, pb = payloadBuilder();
    pb.add("e", "ti"); // 'tr' for Transaction Item
    pb.add("ti_id", orderId);
    pb.add("ti_sk", sku);
    pb.add("ti_nm", name);
    pb.add("ti_ca", category);
    pb.add("ti_pr", price);
    pb.add("ti_qu", quantity);
    pb.add("ti_cu", currency);
    return pb;
}
/**
 * Build a Scren View Event
 * Similar to a Page View but less focused on typical web properties
 * Often used for mobile applications as the user is presented with
 * new views as they performance navigation events
 *
 * @param event - Contains the properties for the Screen View event. One or more properties must be included.
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildScreenView(event) {
    var name = event.name, id = event.id;
    return buildSelfDescribingEvent({
        event: {
            schema: "iglu:com.snowplowanalytics.snowplow/screen_view/jsonschema/1-0-0",
            data: removeEmptyProperties({
                name: name,
                id: id
            })
        }
    });
}
/**
 * Build a Link Click Event
 * Used when a user clicks on a link on a webpage, typically an anchor tag <a>
 *
 * @param event - Contains the properties for the Link Click event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildLinkClick(event) {
    var targetUrl = event.targetUrl, elementId = event.elementId, elementClasses = event.elementClasses, elementTarget = event.elementTarget, elementContent = event.elementContent;
    var eventJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
        data: removeEmptyProperties({
            targetUrl: targetUrl,
            elementId: elementId,
            elementClasses: elementClasses,
            elementTarget: elementTarget,
            elementContent: elementContent
        })
    };
    return buildSelfDescribingEvent({
        event: eventJson
    });
}
/**
 * Build a Ad Impression Event
 * Used to track an advertisement impression
 *
 * @remarks
 * If you provide the cost field, you must also provide one of 'cpa', 'cpc', and 'cpm' for the costModel field.
 *
 * @param event - Contains the properties for the Ad Impression event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildAdImpression(event) {
    var impressionId = event.impressionId, costModel = event.costModel, cost = event.cost, targetUrl = event.targetUrl, bannerId = event.bannerId, zoneId = event.zoneId, advertiserId = event.advertiserId, campaignId = event.campaignId;
    var eventJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
        data: removeEmptyProperties({
            impressionId: impressionId,
            costModel: costModel,
            cost: cost,
            targetUrl: targetUrl,
            bannerId: bannerId,
            zoneId: zoneId,
            advertiserId: advertiserId,
            campaignId: campaignId
        })
    };
    return buildSelfDescribingEvent({
        event: eventJson
    });
}
/**
 * Build a Ad Click Event
 * Used to track an advertisement click
 *
 * @remarks
 * If you provide the cost field, you must also provide one of 'cpa', 'cpc', and 'cpm' for the costModel field.
 *
 * @param event - Contains the properties for the Ad Click event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildAdClick(event) {
    var targetUrl = event.targetUrl, clickId = event.clickId, costModel = event.costModel, cost = event.cost, bannerId = event.bannerId, zoneId = event.zoneId, impressionId = event.impressionId, advertiserId = event.advertiserId, campaignId = event.campaignId;
    var eventJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
        data: removeEmptyProperties({
            targetUrl: targetUrl,
            clickId: clickId,
            costModel: costModel,
            cost: cost,
            bannerId: bannerId,
            zoneId: zoneId,
            impressionId: impressionId,
            advertiserId: advertiserId,
            campaignId: campaignId
        })
    };
    return buildSelfDescribingEvent({
        event: eventJson
    });
}
/**
 * Build a Ad Conversion Event
 * Used to track an advertisement click
 *
 * @remarks
 * If you provide the cost field, you must also provide one of 'cpa', 'cpc', and 'cpm' for the costModel field.
 *
 * @param event - Contains the properties for the Ad Conversion event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildAdConversion(event) {
    var conversionId = event.conversionId, costModel = event.costModel, cost = event.cost, category = event.category, action = event.action, property = event.property, initialValue = event.initialValue, advertiserId = event.advertiserId, campaignId = event.campaignId;
    var eventJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
        data: removeEmptyProperties({
            conversionId: conversionId,
            costModel: costModel,
            cost: cost,
            category: category,
            action: action,
            property: property,
            initialValue: initialValue,
            advertiserId: advertiserId,
            campaignId: campaignId
        })
    };
    return buildSelfDescribingEvent({
        event: eventJson
    });
}
/**
 * Build a Social Interaction Event
 * Social tracking will be used to track the way users interact
 * with Facebook, Twitter and Google + widgets
 * e.g. to capture “like this” or “tweet this” events.
 *
 * @param event - Contains the properties for the Social Interaction event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildSocialInteraction(event) {
    var action = event.action, network = event.network, target = event.target;
    var eventJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
        data: removeEmptyProperties({
            action: action,
            network: network,
            target: target
        })
    };
    return buildSelfDescribingEvent({
        event: eventJson
    });
}
/**
 * Build a Add To Cart Event
 * For tracking users adding items from a cart
 * on an ecommerce site.
 *
 * @param event - Contains the properties for the Add To Cart event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildAddToCart(event) {
    var sku = event.sku, quantity = event.quantity, name = event.name, category = event.category, unitPrice = event.unitPrice, currency = event.currency;
    return buildSelfDescribingEvent({
        event: {
            schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
            data: removeEmptyProperties({
                sku: sku,
                quantity: quantity,
                name: name,
                category: category,
                unitPrice: unitPrice,
                currency: currency
            })
        }
    });
}
/**
 * Build a Remove From Cart Event
 * For tracking users removing items from a cart
 * on an ecommerce site.
 *
 * @param event - Contains the properties for the Remove From Cart event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildRemoveFromCart(event) {
    var sku = event.sku, quantity = event.quantity, name = event.name, category = event.category, unitPrice = event.unitPrice, currency = event.currency;
    return buildSelfDescribingEvent({
        event: {
            schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
            data: removeEmptyProperties({
                sku: sku,
                quantity: quantity,
                name: name,
                category: category,
                unitPrice: unitPrice,
                currency: currency
            })
        }
    });
}
/**
 * Build a Form Focus or Change Form Event based on schema property
 * When a user focuses on a form element or when a user makes a
 * change to a form element.
 *
 * @param event - Contains the properties for the Form Focus or Change Form event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildFormFocusOrChange(event) {
    var event_schema = "";
    var schema = event.schema, formId = event.formId, elementId = event.elementId, nodeName = event.nodeName, elementClasses = event.elementClasses, value = event.value, type = event.type;
    var event_data = {
        formId: formId,
        elementId: elementId,
        nodeName: nodeName,
        elementClasses: elementClasses,
        value: value
    };
    if (schema === "change_form") {
        event_schema = "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0";
        event_data.type = type;
    } else if (schema === "focus_form") {
        event_schema = "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0";
        event_data.elementType = type;
    }
    return buildSelfDescribingEvent({
        event: {
            schema: event_schema,
            data: removeEmptyProperties(event_data, {
                value: true
            })
        }
    });
}
/**
 * Build a Form Submission Event
 * Used to track when a user submits a form
 *
 * @param event - Contains the properties for the Form Submission event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildFormSubmission(event) {
    var formId = event.formId, formClasses = event.formClasses, elements = event.elements;
    return buildSelfDescribingEvent({
        event: {
            schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
            data: removeEmptyProperties({
                formId: formId,
                formClasses: formClasses,
                elements: elements
            })
        }
    });
}
/**
 * Build a Site Search Event
 * Used when a user performs a search action on a page
 *
 * @param event - Contains the properties for the Site Search event
 * @returns PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track}
 */ function buildSiteSearch(event) {
    var terms = event.terms, filters = event.filters, totalResults = event.totalResults, pageResults = event.pageResults;
    return buildSelfDescribingEvent({
        event: {
            schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
            data: removeEmptyProperties({
                terms: terms,
                filters: filters,
                totalResults: totalResults,
                pageResults: pageResults
            })
        }
    });
}
/**
 * Build a Consent Withdrawn Event
 * Used for tracking when a user withdraws their consent
 *
 * @param event - Contains the properties for the Consent Withdrawn event
 * @returns An object containing the PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track} and a 'consent_document' context
 */ function buildConsentWithdrawn(event) {
    var all = event.all, id = event.id, version = event.version, name = event.name, description = event.description;
    var documentJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
        data: removeEmptyProperties({
            id: id,
            version: version,
            name: name,
            description: description
        })
    };
    return {
        event: buildSelfDescribingEvent({
            event: {
                schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                data: removeEmptyProperties({
                    all: all
                })
            }
        }),
        context: [
            documentJson
        ]
    };
}
/**
 * Build a Consent Granted Event
 * Used for tracking when a user grants their consent
 *
 * @param event - Contains the properties for the Consent Granted event
 * @returns An object containing the PayloadBuilder to be sent to {@link @snowplow/tracker-core#TrackerCore.track} and a 'consent_document' context
 */ function buildConsentGranted(event) {
    var expiry = event.expiry, id = event.id, version = event.version, name = event.name, description = event.description;
    var documentJson = {
        schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
        data: removeEmptyProperties({
            id: id,
            version: version,
            name: name,
            description: description
        })
    };
    return {
        event: buildSelfDescribingEvent({
            event: {
                schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                data: removeEmptyProperties({
                    expiry: expiry
                })
            }
        }),
        context: [
            documentJson
        ]
    };
}
/**
 * Returns a copy of a JSON with undefined and null properties removed
 *
 * @param event - JSON object to clean
 * @param exemptFields - Set of fields which should not be removed even if empty
 * @returns A cleaned copy of eventJson
 */ function removeEmptyProperties(event, exemptFields) {
    if (exemptFields === void 0) exemptFields = {};
    var ret = {};
    for(var k in event)if (exemptFields[k] || event[k] !== null && typeof event[k] !== "undefined") ret[k] = event[k];
    return ret;
}
/*
 * Copyright (c) 2022 Snowplow Analytics Ltd, 2010 Anthon Pang
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ var version = version$1;

},{"tslib":"5HimZ","uuid":"gRk6H","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"5HimZ":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"gRk6H":[function(require,module,exports) {
var v1 = require("40f062bad8f423a0");
var v4 = require("7e7406e3d43b896b");
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
module.exports = uuid;

},{"40f062bad8f423a0":"58uYX","7e7406e3d43b896b":"3sGO4"}],"58uYX":[function(require,module,exports) {
var rng = require("a6ef1024f45de4f3");
var bytesToUuid = require("87d0faf6f996c332");
// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
var _nodeId;
var _clockseq;
// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;
// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];
    options = options || {};
    var node = options.node || _nodeId;
    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;
    // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        var seedBytes = rng();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();
    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;
    // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;
    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;
    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;
    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;
    // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;
    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;
    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;
    // `clock_seq_low`
    b[i++] = clockseq & 0xff;
    // `node`
    for(var n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf ? buf : bytesToUuid(b);
}
module.exports = v1;

},{"a6ef1024f45de4f3":"gBhbe","87d0faf6f996c332":"86hr7"}],"gBhbe":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef
    module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
    };
} else {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    module.exports = function mathRNG() {
        for(var i = 0, r; i < 16; i++){
            if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
            rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
        return rnds;
    };
}

},{}],"86hr7":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ var byteToHex = [];
for(var i = 0; i < 256; ++i)byteToHex[i] = (i + 0x100).toString(16).substr(1);
function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex;
    // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
    return [
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        "-",
        bth[buf[i++]],
        bth[buf[i++]],
        "-",
        bth[buf[i++]],
        bth[buf[i++]],
        "-",
        bth[buf[i++]],
        bth[buf[i++]],
        "-",
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]],
        bth[buf[i++]]
    ].join("");
}
module.exports = bytesToUuid;

},{}],"3sGO4":[function(require,module,exports) {
var rng = require("58d19ed3111f3805");
var bytesToUuid = require("ef30c3fbc6e5692e");
function v4(options, buf, offset) {
    var i = buf && offset || 0;
    if (typeof options == "string") {
        buf = options === "binary" ? new Array(16) : null;
        options = null;
    }
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    // Copy bytes to buffer, if provided
    if (buf) for(var ii = 0; ii < 16; ++ii)buf[i + ii] = rnds[ii];
    return buf || bytesToUuid(rnds);
}
module.exports = v4;

},{"58d19ed3111f3805":"gBhbe","ef30c3fbc6e5692e":"86hr7"}],"4FjsI":[function(require,module,exports) {
var Buffer = require("c58266cb2fb5375").Buffer;
(function() {
    var crypt = require("b91a671279e1a49f"), utf8 = require("8a74ae63e65a4cd7").utf8, bin = require("8a74ae63e65a4cd7").bin, // The core
    sha1 = function(message) {
        // Convert to byte array
        if (message.constructor == String) message = utf8.stringToBytes(message);
        else if (typeof Buffer !== "undefined" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(message)) message = Array.prototype.slice.call(message, 0);
        else if (!Array.isArray(message)) message = message.toString();
        // otherwise assume byte array
        var m = crypt.bytesToWords(message), l = message.length * 8, w = [], H0 = 1732584193, H1 = -271733879, H2 = -1732584194, H3 = 271733878, H4 = -1009589776;
        // Padding
        m[l >> 5] |= 0x80 << 24 - l % 32;
        m[(l + 64 >>> 9 << 4) + 15] = l;
        for(var i = 0; i < m.length; i += 16){
            var a = H0, b = H1, c = H2, d = H3, e = H4;
            for(var j = 0; j < 80; j++){
                if (j < 16) w[j] = m[i + j];
                else {
                    var n = w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16];
                    w[j] = n << 1 | n >>> 31;
                }
                var t = (H0 << 5 | H0 >>> 27) + H4 + (w[j] >>> 0) + (j < 20 ? (H1 & H2 | ~H1 & H3) + 1518500249 : j < 40 ? (H1 ^ H2 ^ H3) + 1859775393 : j < 60 ? (H1 & H2 | H1 & H3 | H2 & H3) - 1894007588 : (H1 ^ H2 ^ H3) - 899497514);
                H4 = H3;
                H3 = H2;
                H2 = H1 << 30 | H1 >>> 2;
                H1 = H0;
                H0 = t;
            }
            H0 += a;
            H1 += b;
            H2 += c;
            H3 += d;
            H4 += e;
        }
        return [
            H0,
            H1,
            H2,
            H3,
            H4
        ];
    }, // Public API
    api = function(message, options) {
        var digestbytes = crypt.wordsToBytes(sha1(message));
        return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
    };
    api._blocksize = 16;
    api._digestsize = 20;
    module.exports = api;
})();

},{"c58266cb2fb5375":"9BBmc","b91a671279e1a49f":"45hzn","8a74ae63e65a4cd7":"5LxxE"}],"9BBmc":[function(require,module,exports) {
"use strict";

},{}],"45hzn":[function(require,module,exports) {
(function() {
    var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
        // Bit-wise rotation left
        rotl: function(n, b) {
            return n << b | n >>> 32 - b;
        },
        // Bit-wise rotation right
        rotr: function(n, b) {
            return n << 32 - b | n >>> b;
        },
        // Swap big-endian to little-endian and vice versa
        endian: function(n) {
            // If number given, swap endian
            if (n.constructor == Number) return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
            // Else, assume array and swap all items
            for(var i = 0; i < n.length; i++)n[i] = crypt.endian(n[i]);
            return n;
        },
        // Generate an array of any length of random bytes
        randomBytes: function(n) {
            for(var bytes = []; n > 0; n--)bytes.push(Math.floor(Math.random() * 256));
            return bytes;
        },
        // Convert a byte array to big-endian 32-bit words
        bytesToWords: function(bytes) {
            for(var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)words[b >>> 5] |= bytes[i] << 24 - b % 32;
            return words;
        },
        // Convert big-endian 32-bit words to a byte array
        wordsToBytes: function(words) {
            for(var bytes = [], b = 0; b < words.length * 32; b += 8)bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
            return bytes;
        },
        // Convert a byte array to a hex string
        bytesToHex: function(bytes) {
            for(var hex = [], i = 0; i < bytes.length; i++){
                hex.push((bytes[i] >>> 4).toString(16));
                hex.push((bytes[i] & 0xF).toString(16));
            }
            return hex.join("");
        },
        // Convert a hex string to a byte array
        hexToBytes: function(hex) {
            for(var bytes = [], c = 0; c < hex.length; c += 2)bytes.push(parseInt(hex.substr(c, 2), 16));
            return bytes;
        },
        // Convert a byte array to a base-64 string
        bytesToBase64: function(bytes) {
            for(var base64 = [], i = 0; i < bytes.length; i += 3){
                var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
                for(var j = 0; j < 4; j++)if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));
                else base64.push("=");
            }
            return base64.join("");
        },
        // Convert a base-64 string to a byte array
        base64ToBytes: function(base64) {
            // Remove non-base-64 characters
            base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
            for(var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4){
                if (imod4 == 0) continue;
                bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
            }
            return bytes;
        }
    };
    module.exports = crypt;
})();

},{}],"5LxxE":[function(require,module,exports) {
var charenc = {
    // UTF-8 encoding
    utf8: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
            return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
        },
        // Convert a byte array to a string
        bytesToString: function(bytes) {
            return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
        }
    },
    // Binary encoding
    bin: {
        // Convert a string to a byte array
        stringToBytes: function(str) {
            for(var bytes = [], i = 0; i < str.length; i++)bytes.push(str.charCodeAt(i) & 0xFF);
            return bytes;
        },
        // Convert a byte array to a string
        bytesToString: function(bytes) {
            for(var str = [], i = 0; i < bytes.length; i++)str.push(String.fromCharCode(bytes[i]));
            return str.join("");
        }
    }
};
module.exports = charenc;

},{}],"ltnmy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _muxAnalytics = require("../lib/mux-analytics");
var _sevenStore = require("../helpers/seven-store");
var _messengers = require("../helpers/Messengers");
var _utils = require("../helpers/utils");
// custom javascript implementation
// https://docs-legacy.mux.com/guides/data/custom-javascript-integration
class MuxClient {
    constructor(){
        (0, _defineProperty._)(this, "envKey", null);
        (0, _defineProperty._)(this, "playbackData", null);
        (0, _defineProperty._)(this, "playbackSource", null);
        (0, _defineProperty._)(this, "playerState", null);
        (0, _defineProperty._)(this, "muxPlayerId", "mux-mle");
        (0, _defineProperty._)(this, "currentTimeMs", 0);
        (0, _defineProperty._)(this, "hasPlayed", false);
        (0, _defineProperty._)(this, "currentAd", null);
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "init", async ()=>{
            var _Store_AppConfig_config_mux, _Store_AppConfig_config, _Store_AppConfig, _Store_AppConfig_config_mux1, _Store_AppConfig_config1, _Store_AppConfig1;
            if (!window.mux) {
                console.warn("[acc] No mux analytics on window");
                return;
            }
            const muxEnabled = (_Store_AppConfig = (0, _sevenStore.Store).AppConfig) === null || _Store_AppConfig === void 0 ? void 0 : (_Store_AppConfig_config = _Store_AppConfig.config) === null || _Store_AppConfig_config === void 0 ? void 0 : (_Store_AppConfig_config_mux = _Store_AppConfig_config.mux) === null || _Store_AppConfig_config_mux === void 0 ? void 0 : _Store_AppConfig_config_mux.MUX_ENABLED;
            const muxKey = (_Store_AppConfig1 = (0, _sevenStore.Store).AppConfig) === null || _Store_AppConfig1 === void 0 ? void 0 : (_Store_AppConfig_config1 = _Store_AppConfig1.config) === null || _Store_AppConfig_config1 === void 0 ? void 0 : (_Store_AppConfig_config_mux1 = _Store_AppConfig_config1.mux) === null || _Store_AppConfig_config_mux1 === void 0 ? void 0 : _Store_AppConfig_config_mux1.MUX_PROPERTY_KEY;
            if (muxEnabled && muxKey) {
                this.envKey = muxKey;
                this.removeEventListeners(); // in case monitoringTeardown isn't called
                this.addEventListeners();
            } else console.warn("[acc] No mux key or enabled flag in config, doing nothing");
        });
        (0, _defineProperty._)(this, "addEventListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).playbackData$.addReceiver(this.onPlaybackDataReceived, true),
                (0, _messengers.Messengers).playerState$.addReceiver(this.onPlayerStateChange),
                (0, _messengers.Messengers).timeUpdate$.addReceiver(this.onTimeUpdate),
                (0, _messengers.Messengers).playerError$.addReceiver(this.onPlayerError),
                (0, _messengers.Messengers).currentAd$.addReceiver(this.onAdChange),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onAppTeardown)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "muxEmit", (eventName, data)=>{
            if (!window.mux) {
                console.warn("[acc] No mux analytics library on window");
                return;
            }
            window.mux.emit(this.muxPlayerId, eventName, data);
        });
        (0, _defineProperty._)(this, "onPlaybackDataReceived", (playbackData)=>{
            var _this_playbackData, _this_playbackData1, _this_playbackData_media, _this_playbackData2, _this_playbackData_media1, _this_playbackData3, _this_playbackData4;
            if (!window.mux || !playbackData) return;
            // start mux once
            this.playbackData = playbackData.playbackResponse;
            this.playbackSource = playbackData.matchingSource;
            // reset things
            this.hasPlayed = false;
            this.currentTimeMs = 0;
            const initTime = Date.now();
            const region = (0, _sevenStore.Store).RegionData.regionKey;
            const muxOptions = {
                debug: false,
                data: {
                    env_key: this.envKey,
                    player_init_time: initTime,
                    viewer_user_id: (0, _sevenStore.Store).UserInfo.subject,
                    sub_property_id: "7mle",
                    player_name: "7mle Foxtel",
                    player_version: `7mle Foxtel ${(0, _sevenStore.Store).appVersion}`,
                    video_id: (_this_playbackData = this.playbackData) === null || _this_playbackData === void 0 ? void 0 : _this_playbackData.media.id,
                    video_stream_type: "live",
                    video_content_type: "linear",
                    video_title: `${(_this_playbackData1 = this.playbackData) === null || _this_playbackData1 === void 0 ? void 0 : _this_playbackData1.media.name}|${region}`,
                    page_type: "watchpage",
                    experiment_name: "Connected TV",
                    video_language_code: "en",
                    video_series: ((_this_playbackData2 = this.playbackData) === null || _this_playbackData2 === void 0 ? void 0 : (_this_playbackData_media = _this_playbackData2.media) === null || _this_playbackData_media === void 0 ? void 0 : _this_playbackData_media.custom_fields.content_showname) || "",
                    video_cdn: ((_this_playbackData3 = this.playbackData) === null || _this_playbackData3 === void 0 ? void 0 : (_this_playbackData_media1 = _this_playbackData3.media) === null || _this_playbackData_media1 === void 0 ? void 0 : _this_playbackData_media1.stream_type_cdn) || "",
                    video_duration: (_this_playbackData4 = this.playbackData) === null || _this_playbackData4 === void 0 ? void 0 : _this_playbackData4.media.duration,
                    video_stream_type: "live",
                    video_content_type: "linear",
                    viewer_device_name: `Foxtel-${(0, _sevenStore.Store).devicePlatform}`,
                    viewer_device_category: "Foxtel",
                    viewer_device_model: (0, _sevenStore.Store).deviceModel || ""
                },
                getPlayheadTime: ()=>{
                    return this.currentTimeMs;
                },
                getStateData: ()=>{
                    return {
                        player_is_paused: this.playerState !== (0, _utils.PlayerStates).Playing,
                        player_width: window.innerWidth,
                        player_height: window.innerHeight,
                        player_is_fullscreen: true,
                        player_autoplay_on: true,
                        video_source_url: this.playbackSource.src
                    };
                }
            };
            console.log("[acc] MUX Client: init monitor", muxOptions.data.player_name);
            window.mux.init(this.muxPlayerId, muxOptions);
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (playerState)=>{
            const prevState = this.playerState;
            this.playerState = playerState;
            if (playerState === (0, _utils.PlayerStates).Playing) {
                if (!this.hasPlayed) {
                    this.muxEmit("playerready");
                    if (prevState === (0, _utils.PlayerStates).Seeking) // simulate seeked event since it is not defined
                    // but required by mux
                    this.muxEmit("seeked");
                    this.muxEmit("play");
                    this.hasPlayed = true;
                }
                this.muxEmit("playing");
            } else if (playerState === (0, _utils.PlayerStates).Seeking) this.muxEmit("seeking");
        });
        (0, _defineProperty._)(this, "onTimeUpdate", (time)=>{
            this.currentTimeMs = time * 1000;
            this.muxEmit("timeupdate", {
                player_playhead_time: this.currentTimeMs
            });
        });
        (0, _defineProperty._)(this, "onAdChange", (ad)=>{
            const prevAd = this.currentAd;
            this.currentAd = ad;
            if (prevAd) this.muxEmit("adended");
            if (this.currentAd) {
                if (!prevAd) this.muxEmit("adbreakstart");
                this.muxEmit("adplay");
                this.muxEmit("adplaying");
            } else if (prevAd) this.muxEmit("adbreakend");
        });
        (0, _defineProperty._)(this, "onPlayerError", (error)=>{
            if (error) this.muxEmit("error", {
                player_error_code: -1,
                player_error_message: error.message
            });
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            if (this.hasPlayed) this.muxEmit("destroy");
            this.removeEventListeners();
            this.currentTimeMs = 0;
            this.hasPlayed = false;
            this.currentAd = null;
            this.playbackData = null;
            this.playbackSource = null;
            this.playerState = null;
        });
    }
}
exports.default = new MuxClient();

},{"@swc/helpers/_/_define_property":"9kWBJ","../lib/mux-analytics":"h8JBk","../helpers/seven-store":"h8xnN","../helpers/Messengers":"h1Nk9","../helpers/utils":"k30on","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"h8JBk":[function(require,module,exports) {
/*!
 * mux-embed
 * @version 4.15.0
 * @copyright 2022 Mux, Inc
 */ !function() {
    var e, t;
    e = this, t = function() {
        return function() {
            var e = {
                80: function(e, t, r) {
                    e.exports = r(728).default;
                },
                728: function(e, t, r) {
                    "use strict";
                    r.d(t, {
                        default: function() {
                            return Vt;
                        }
                    });
                    var n = r(48), a = r.n(n), i = function() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" === e ? t : 3 & t | 8).toString(16);
                        });
                    }, o = function() {
                        return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
                    }, s = function(e) {
                        return e && void 0 !== e.nodeName ? (e.muxId || (e.muxId = e.id || o()), e.muxId) : e;
                    }, u = function(e) {
                        var t;
                        e && void 0 !== e.nodeName ? e = s(t = e) : t = document.querySelector(e);
                        var r = t && t.nodeName ? t.nodeName.toLowerCase() : "";
                        return [
                            t,
                            e,
                            r
                        ];
                    }, l = r(640), c = r.n(l), d = c().methodFactory;
                    c().methodFactory = function(e, t, r) {
                        var n = d(e, t, r);
                        return function() {
                            for(var e = [
                                "[mux]"
                            ], t = 0; t < arguments.length; t++)e.push(arguments[t]);
                            n.apply(void 0, e);
                        };
                    }, c().setLevel(c().getLevel());
                    var f = c();
                    function p() {
                        return "1" === (a().doNotTrack || a().navigator && a().navigator.doNotTrack);
                    }
                    var h = {
                        now: function() {
                            var e = a().performance, t = e && e.timing, r = t && t.navigationStart, n = "number" == typeof r && "function" == typeof e.now ? r + e.now() : Date.now();
                            return Math.round(n);
                        }
                    }, _ = r(678), v = r.n(_), m = function(e) {
                        return y(e)[0];
                    }, y = function(e) {
                        if ("string" != typeof e || "" === e) return [
                            "localhost"
                        ];
                        var t, r = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4];
                        return r && (t = (r.match(/[^\.]+\.[^\.]+$/) || [])[0]), [
                            r,
                            t
                        ];
                    }, b = {
                        exists: function() {
                            var e = a().performance;
                            return void 0 !== (e && e.timing);
                        },
                        domContentLoadedEventEnd: function() {
                            var e = a().performance, t = e && e.timing;
                            return t && t.domContentLoadedEventEnd;
                        },
                        navigationStart: function() {
                            var e = a().performance, t = e && e.timing;
                            return t && t.navigationStart;
                        }
                    };
                    function g(e, t, r) {
                        r = void 0 === r ? 1 : r, e[t] = e[t] || 0, e[t] += r;
                    }
                    var w = [
                        "x-cdn",
                        "content-type",
                        "x-request-id"
                    ];
                    function T(e) {
                        var t = {};
                        return (e = e || "").trim().split(/[\r\n]+/).forEach(function(e) {
                            if (e) {
                                var r = e.split(": "), n = r.shift();
                                n && (w.indexOf(n.toLowerCase()) >= 0 || 0 === n.toLowerCase().indexOf("x-litix-")) && (t[n] = r.join(": "));
                            }
                        }), t;
                    }
                    var k = function(e) {
                        var t = {};
                        for(var r in e){
                            var n = e[r];
                            -1 !== n["DATA-ID"].search("io.litix.data.") && (t[n["DATA-ID"].replace("io.litix.data.", "")] = n.VALUE);
                        }
                        return t;
                    };
                    function E(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter(function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), r.push.apply(r, n);
                        }
                        return r;
                    }
                    function x(e) {
                        for(var t = 1; t < arguments.length; t++){
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? E(Object(r), !0).forEach(function(t) {
                                D(e, t, r[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                        }
                        return e;
                    }
                    function D(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e;
                    }
                    var S = function(e) {
                        if (!e) return {};
                        var t = b.navigationStart(), r = e.loading, n = r ? r.start : e.trequest, a = r ? r.first : e.tfirst, i = r ? r.end : e.tload;
                        return {
                            bytesLoaded: e.total,
                            requestStart: Math.round(t + n),
                            responseStart: Math.round(t + a),
                            responseEnd: Math.round(t + i)
                        };
                    }, O = function(e) {
                        if (e && "function" == typeof e.getAllResponseHeaders) return T(e.getAllResponseHeaders());
                    }, q = function(e, t) {
                        if (!e || "function" != typeof e.getRequests) return {};
                        var r = e.getRequests({
                            state: "executed"
                        });
                        if (0 === r.length) return {};
                        var n, a = r[r.length - 1], i = m(a.url), o = a.url, s = a.bytesLoaded, u = new Date(a.requestStartDate).getTime(), l = new Date(a.firstByteDate).getTime(), c = new Date(a.requestEndDate).getTime(), d = isNaN(a.duration) ? 0 : a.duration, f = "function" == typeof t.getMetricsFor ? t.getMetricsFor(a.mediaType).HttpList : t.getDashMetrics().getHttpRequests(a.mediaType);
                        return f.length > 0 && (n = T(f[f.length - 1]._responseHeaders || "")), {
                            requestStart: u,
                            requestResponseStart: l,
                            requestResponseEnd: c,
                            requestBytesLoaded: s,
                            requestResponseHeaders: n,
                            requestMediaDuration: d,
                            requestHostname: i,
                            requestUrl: o
                        };
                    }, P = function(e, t) {
                        var r = t.getQualityFor(e), n = t.getCurrentTrackFor(e).bitrateList;
                        return n ? {
                            currentLevel: r,
                            renditionWidth: n[r].width || null,
                            renditionHeight: n[r].height || null,
                            renditionBitrate: n[r].bandwidth
                        } : {};
                    };
                    function A(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var R = 0, I = function() {
                        function e() {
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e);
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "on",
                                value: function(e, t, r) {
                                    return t._eventEmitterGuid = t._eventEmitterGuid || ++R, this._listeners = this._listeners || {}, this._listeners[e] = this._listeners[e] || [], r && (t = t.bind(r)), this._listeners[e].push(t), t;
                                }
                            },
                            {
                                key: "off",
                                value: function(e, t) {
                                    var r = this._listeners && this._listeners[e];
                                    r && r.forEach(function(e, n) {
                                        e._eventEmitterGuid === t._eventEmitterGuid && r.splice(n, 1);
                                    });
                                }
                            },
                            {
                                key: "one",
                                value: function(e, t, r) {
                                    var n = this;
                                    t._eventEmitterGuid = t._eventEmitterGuid || ++R;
                                    var a = function a() {
                                        n.off(e, a), t.apply(r || this, arguments);
                                    };
                                    a._eventEmitterGuid = t._eventEmitterGuid, this.on(e, a);
                                }
                            },
                            {
                                key: "emit",
                                value: function(e, t) {
                                    var r = this;
                                    if (this._listeners) {
                                        t = t || {};
                                        var n = this._listeners["before*"] || [], a = this._listeners[e] || [], i = this._listeners["after" + e] || [], o = function(t, n) {
                                            (t = t.slice()).forEach(function(t) {
                                                t.call(r, {
                                                    type: e
                                                }, n);
                                            });
                                        };
                                        o(n, t), o(a, t), o(i, t);
                                    }
                                }
                            }
                        ], r && A(t.prototype, r), n && A(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }(), L = I;
                    function j(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var N = function() {
                        function e(t) {
                            var r = this;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.pm = t, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, t.on("playing", function() {
                                r._playheadShouldBeProgressing = !0;
                            }), t.on("play", this._startPlaybackHeartbeatInterval.bind(this)), t.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), t.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), t.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), t.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), t.on("seeking", this._startPlaybackHeartbeatInterval.bind(this)), t.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), t.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), t.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), t.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), t.on("seeked", function() {
                                t.data.player_is_paused ? r._stopPlaybackHeartbeatInterval() : r._startPlaybackHeartbeatInterval();
                            }), t.on("timeupdate", function() {
                                null !== r._playbackHeartbeatInterval && t.emit("playbackheartbeat");
                            }), t.on("devicesleep", function(e, n) {
                                null !== r._playbackHeartbeatInterval && (a().clearInterval(r._playbackHeartbeatInterval), t.emit("playbackheartbeatend", {
                                    viewer_time: n.viewer_time
                                }), r._playbackHeartbeatInterval = null);
                            });
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "_startPlaybackHeartbeatInterval",
                                value: function() {
                                    var e = this;
                                    null === this._playbackHeartbeatInterval && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = a().setInterval(function() {
                                        e.pm.emit("playbackheartbeat");
                                    }, this.pm.playbackHeartbeatTime));
                                }
                            },
                            {
                                key: "_stopPlaybackHeartbeatInterval",
                                value: function() {
                                    this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (a().clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
                                }
                            }
                        ], j(t.prototype, r), n && j(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }();
                    function C(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function H(e, t, r) {
                        return t && C(e.prototype, t), r && C(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var M = H(function e(t) {
                        var r = this;
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), t.on("viewinit", function() {
                            r.viewErrored = !1;
                        }), t.on("error", function() {
                            try {
                                var e = t.errorTranslator({
                                    player_error_code: t.data.player_error_code,
                                    player_error_message: t.data.player_error_message
                                });
                                e ? (t.data.player_error_code = e.player_error_code, t.data.player_error_message = e.player_error_message, r.viewErrored = !0) : (delete t.data.player_error_code, delete t.data.player_error_message);
                            } catch (e) {
                                t.mux.log.warn("Exception in error translator callback.", e), r.viewErrored = !0;
                            }
                        });
                    });
                    function B(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var U = function() {
                        function e(t) {
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.pm = t, this._watchTimeTrackerLastCheckedTime = null, t.on("playbackheartbeat", this._updateWatchTime.bind(this)), t.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "_updateWatchTime",
                                value: function(e, t) {
                                    var r = t.viewer_time;
                                    null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = r), g(this.pm.data, "view_watch_time", r - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = r;
                                }
                            },
                            {
                                key: "_clearWatchTimeState",
                                value: function(e, t) {
                                    this._updateWatchTime(e, t), this._watchTimeTrackerLastCheckedTime = null;
                                }
                            }
                        ], B(t.prototype, r), n && B(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }();
                    function F(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var G = function() {
                        function e(t) {
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.pm = t, this._playbackTimeTrackerLastPlayheadPosition = -1, t.on("playbackheartbeat", this._updatePlaybackTime.bind(this)), t.on("playbackheartbeatend", this._clearPlaybackTimeState.bind(this)), t.on("seeking", this._clearPlaybackTimeState.bind(this));
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "_updatePlaybackTime",
                                value: function() {
                                    var e = this.pm.data.player_playhead_time;
                                    if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && e > this._playbackTimeTrackerLastPlayheadPosition) {
                                        var t = e - this._playbackTimeTrackerLastPlayheadPosition;
                                        t <= 1e3 && g(this.pm.data, "view_content_playback_time", t);
                                    }
                                    this._playbackTimeTrackerLastPlayheadPosition = e;
                                }
                            },
                            {
                                key: "_clearPlaybackTimeState",
                                value: function() {
                                    this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1;
                                }
                            }
                        ], F(t.prototype, r), n && F(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }();
                    function W(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var Q = function() {
                        function e(t) {
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.pm = t;
                            var r = this._updatePlayheadTime.bind(this);
                            t.on("playbackheartbeat", r), t.on("playbackheartbeatend", r), t.on("timeupdate", r), t.on("destroy", function() {
                                t.off("timeupdate", r);
                            });
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "_updateMaxPlayheadPosition",
                                value: function() {
                                    this.pm.data.view_max_playhead_position = void 0 === this.pm.data.view_max_playhead_position ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
                                }
                            },
                            {
                                key: "_updatePlayheadTime",
                                value: function(e, t) {
                                    var r = this, n = function() {
                                        r.pm.currentFragmentPDT && r.pm.currentFragmentStart && (r.pm.data.player_program_time = r.pm.currentFragmentPDT + r.pm.data.player_playhead_time - r.pm.currentFragmentStart);
                                    };
                                    if (t && t.player_playhead_time) this.pm.data.player_playhead_time = t.player_playhead_time, n(), this._updateMaxPlayheadPosition();
                                    else if (this.pm.getPlayheadTime) {
                                        var a = this.pm.getPlayheadTime();
                                        void 0 !== a && (this.pm.data.player_playhead_time = a, n(), this._updateMaxPlayheadPosition());
                                    }
                                }
                            }
                        ], W(t.prototype, r), n && W(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }();
                    function V(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function J(e, t, r) {
                        return t && V(e.prototype, t), r && V(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var z = J(function e(t) {
                        if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), !t.disableRebufferTracking) {
                            var r, n = function(e, t) {
                                a(t), r = void 0;
                            }, a = function(e) {
                                if (r) {
                                    var n = e.viewer_time - r;
                                    g(t.data, "view_rebuffer_duration", n), r = e.viewer_time;
                                }
                                t.data.view_watch_time >= 0 && t.data.view_rebuffer_count > 0 && (t.data.view_rebuffer_frequency = t.data.view_rebuffer_count / t.data.view_watch_time, t.data.view_rebuffer_percentage = t.data.view_rebuffer_duration / t.data.view_watch_time);
                            };
                            t.on("playbackheartbeat", function(e, t) {
                                return a(t);
                            }), t.on("rebufferstart", function(e, a) {
                                r || (g(t.data, "view_rebuffer_count", 1), r = a.viewer_time, t.one("rebufferend", n));
                            }), t.on("viewinit", function() {
                                r = void 0, t.off("rebufferend", n);
                            });
                        }
                    });
                    function K(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var X = function() {
                        function e(t) {
                            var r = this;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.pm = t, t.disableRebufferTracking || t.disablePlayheadRebufferTracking || (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, t.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), t.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), t.on("seeking", function() {
                                r._cleanupRebufferTracker(null, {
                                    viewer_time: h.now()
                                });
                            }));
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "_checkIfRebuffering",
                                value: function(e, t) {
                                    if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) this._cleanupRebufferTracker(e, t);
                                    else if (null !== this._lastCheckedTime) {
                                        if (this._lastPlayheadTime === this.pm.data.player_playhead_time) {
                                            var r = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                            "number" == typeof this.pm.sustainedRebufferThreshold && r >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = !0, this.pm.emit("rebufferstart", {
                                                viewer_time: this._lastPlayheadTimeUpdatedTime
                                            }))), this._lastCheckedTime = t.viewer_time;
                                        } else this._cleanupRebufferTracker(e, t, !0);
                                    } else this._prepareRebufferTrackerState(t.viewer_time);
                                }
                            },
                            {
                                key: "_clearRebufferTrackerState",
                                value: function() {
                                    this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
                                }
                            },
                            {
                                key: "_prepareRebufferTrackerState",
                                value: function(e) {
                                    this._lastCheckedTime = e, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e;
                                }
                            },
                            {
                                key: "_cleanupRebufferTracker",
                                value: function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                    if (this._rebuffering) this._rebuffering = !1, this.pm.emit("rebufferend", {
                                        viewer_time: t.viewer_time
                                    });
                                    else {
                                        if (null === this._lastCheckedTime) return;
                                        var n = this.pm.data.player_playhead_time - this._lastPlayheadTime, a = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                                        "number" == typeof this.pm.minimumRebufferDuration && n > 0 && a - n > this.pm.minimumRebufferDuration && (this.pm.emit("rebufferstart", {
                                            viewer_time: this._lastPlayheadTimeUpdatedTime
                                        }), this.pm.emit("rebufferend", {
                                            viewer_time: this._lastPlayheadTimeUpdatedTime + a - n
                                        }));
                                    }
                                    r ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState();
                                }
                            }
                        ], r && K(t.prototype, r), n && K(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }(), Y = X;
                    function $(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var Z = function() {
                        function e(t) {
                            var r = this;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.pm = t, t.on("viewinit", function() {
                                var e = t.data, n = e.view_id;
                                if (!e.view_program_changed) {
                                    var a = function(e, a) {
                                        var i = a.viewer_time;
                                        "playing" === e.type && void 0 === t.data.view_time_to_first_frame ? r.calculateTimeToFirstFrame(i || h.now(), n) : "adplaying" !== e.type || void 0 !== t.data.view_time_to_first_frame && !r._inPrerollPosition() || r.calculateTimeToFirstFrame(i || h.now(), n);
                                    };
                                    t.one("playing", a), t.one("adplaying", a), t.one("viewend", function() {
                                        t.off("playing", a), t.off("adplaying", a);
                                    });
                                }
                            });
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "_inPrerollPosition",
                                value: function() {
                                    return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
                                }
                            },
                            {
                                key: "calculateTimeToFirstFrame",
                                value: function(e, t) {
                                    t === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, {
                                        viewer_time: e
                                    }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.NAVIGATION_START && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.NAVIGATION_START));
                                }
                            }
                        ], $(t.prototype, r), n && $(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }();
                    function ee(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function te(e, t, r) {
                        return t && ee(e.prototype, t), r && ee(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var re = te(function e(t) {
                        var r = this;
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), t.on("viewinit", function() {
                            r._lastPlayheadPosition = -1;
                        }), [
                            "pause",
                            "rebufferstart",
                            "seeking",
                            "error",
                            "adbreakstart",
                            "hb"
                        ].forEach(function(e) {
                            t.on(e, function() {
                                if (r._lastPlayheadPosition >= 0 && t.data.player_playhead_time >= 0 && r._lastPlayerWidth >= 0 && r._lastSourceWidth > 0 && r._lastPlayerHeight >= 0 && r._lastSourceHeight > 0) {
                                    var e = t.data.player_playhead_time - r._lastPlayheadPosition;
                                    if (e < 0) return void (r._lastPlayheadPosition = -1);
                                    var n = Math.min(r._lastPlayerWidth / r._lastSourceWidth, r._lastPlayerHeight / r._lastSourceHeight), a = Math.max(0, n - 1), i = Math.max(0, 1 - n);
                                    t.data.view_max_upscale_percentage = Math.max(t.data.view_max_upscale_percentage || 0, a), t.data.view_max_downscale_percentage = Math.max(t.data.view_max_downscale_percentage || 0, i), g(t.data, "view_total_content_playback_time", e), g(t.data, "view_total_upscaling", a * e), g(t.data, "view_total_downscaling", i * e);
                                }
                                r._lastPlayheadPosition = -1;
                            });
                        }), [
                            "playing",
                            "hb"
                        ].forEach(function(e) {
                            t.on(e, function() {
                                r._lastPlayheadPosition = t.data.player_playhead_time, r._lastPlayerWidth = t.data.player_width, r._lastPlayerHeight = t.data.player_height, r._lastSourceWidth = t.data.video_source_width, r._lastSourceHeight = t.data.video_source_height;
                            });
                        });
                    });
                    function ne(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function ae(e, t, r) {
                        return t && ne(e.prototype, t), r && ne(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var ie = ae(function e(t) {
                        var r = this;
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), this.isSeeking = !1, t.on("seeking", function(e, n) {
                            v()(t.data, n), r._lastSeekingTime = h.now(), !1 === r.isSeeking && (r.isSeeking = !0, t.send("seeking"));
                        }), t.on("seeked", function() {
                            r.isSeeking = !1;
                            var e = r._lastSeekingTime || h.now(), n = h.now() - e;
                            g(t.data, "view_seek_count", 1), g(t.data, "view_seek_duration", n);
                            var a = t.data.view_max_seek_time || 0;
                            t.data.view_max_seek_time = Math.max(a, n);
                        }), t.on("viewend", function() {
                            r.isSeeking = !1;
                        });
                    });
                    function oe(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, i = [], o = !0, s = !1;
                                try {
                                    for(r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    s = !0, a = e;
                                } finally{
                                    try {
                                        o || null == r.return || r.return();
                                    } finally{
                                        if (s) throw a;
                                    }
                                }
                                return i;
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return se(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? se(e, t) : void 0;
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function se(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                        return n;
                    }
                    function ue(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    var le = function(e, t) {
                        e.push(t), e.sort(function(e, t) {
                            return e.viewer_time - t.viewer_time;
                        });
                    }, ce = [
                        "adbreakstart",
                        "adrequest",
                        "adresponse",
                        "adplay",
                        "adplaying",
                        "adpause",
                        "adended",
                        "adbreakend",
                        "aderror"
                    ], de = function() {
                        function e(t) {
                            var r = this;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, e), this.pm = t, t.on("viewinit", function() {
                                r.isAdBreak = !1, r._currentAdRequestNumber = 0, r._currentAdResponseNumber = 0, r._adRequests = [], r._adResponses = [], r._adHasPlayed = !1, r._wouldBeNewAdPlay = !0, r._prerollPlayTime = void 0;
                            }), ce.forEach(function(e) {
                                return t.on(e, r._updateAdData.bind(r));
                            });
                            var n = function() {
                                r.isAdBreak = !1;
                            };
                            t.on("adbreakstart", function() {
                                r.isAdBreak = !0;
                            }), t.on("play", n), t.on("playing", n), t.on("viewend", n), t.on("adrequest", function(e, n) {
                                n = v()({
                                    ad_request_id: "generatedAdRequestId" + r._currentAdRequestNumber++
                                }, n), le(r._adRequests, n), g(t.data, "view_ad_request_count"), r.inPrerollPosition() && (t.data.view_preroll_requested = !0, r._adHasPlayed || g(t.data, "view_preroll_request_count"));
                            }), t.on("adresponse", function(e, n) {
                                n = v()({
                                    ad_request_id: "generatedAdRequestId" + r._currentAdResponseNumber++
                                }, n), le(r._adResponses, n);
                                var a = r.findAdRequest(n.ad_request_id);
                                a && g(t.data, "view_ad_request_time", Math.max(0, n.viewer_time - a.viewer_time));
                            }), t.on("adplay", function(e, n) {
                                r._adHasPlayed = !0, r._wouldBeNewAdPlay && (r._wouldBeNewAdPlay = !1, g(t.data, "view_ad_played_count")), r.inPrerollPosition() && !t.data.view_preroll_played && (t.data.view_preroll_played = !0, r._adRequests.length > 0 && (t.data.view_preroll_request_time = Math.max(0, n.viewer_time - r._adRequests[0].viewer_time)), t.data.view_start && (t.data.view_startup_preroll_request_time = Math.max(0, n.viewer_time - t.data.view_start)), r._prerollPlayTime = n.viewer_time);
                            }), t.on("adplaying", function(e, n) {
                                r.inPrerollPosition() && void 0 === t.data.view_preroll_load_time && void 0 !== r._prerollPlayTime && (t.data.view_preroll_load_time = n.viewer_time - r._prerollPlayTime, t.data.view_startup_preroll_load_time = n.viewer_time - r._prerollPlayTime);
                            }), t.on("adended", function() {
                                r._wouldBeNewAdPlay = !0;
                            }), t.on("aderror", function() {
                                r._wouldBeNewAdPlay = !0;
                            });
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "inPrerollPosition",
                                value: function() {
                                    return void 0 === this.pm.data.view_content_playback_time || this.pm.data.view_content_playback_time <= 1e3;
                                }
                            },
                            {
                                key: "findAdRequest",
                                value: function(e) {
                                    for(var t = 0; t < this._adRequests.length; t++)if (this._adRequests[t].ad_request_id === e) return this._adRequests[t];
                                }
                            },
                            {
                                key: "_updateAdData",
                                value: function(e, t) {
                                    if (this.inPrerollPosition()) {
                                        if (!this.pm.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
                                            var r = oe(y(t.ad_tag_url), 2), n = r[0], a = r[1];
                                            this.pm.data.view_preroll_ad_tag_domain = a, this.pm.data.view_preroll_ad_tag_hostname = n;
                                        }
                                        if (!this.pm.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
                                            var i = oe(y(t.ad_asset_url), 2), o = i[0], s = i[1];
                                            this.pm.data.view_preroll_ad_asset_domain = s, this.pm.data.view_preroll_ad_asset_hostname = o;
                                        }
                                    }
                                }
                            }
                        ], ue(t.prototype, r), n && ue(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }();
                    function fe(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function pe(e, t, r) {
                        return t && fe(e.prototype, t), r && fe(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var he = pe(function e(t) {
                        var r, n;
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e);
                        var i = function() {
                            t.disableRebufferTracking || r && (g(t.data, "view_waiting_rebuffer_duration", h.now() - r), r = !1, a().clearInterval(n));
                        }, o = !1, s = function() {
                            o = !1, i();
                        };
                        t.on("waiting", function() {
                            o && (t.disableRebufferTracking || (g(t.data, "view_waiting_rebuffer_count", 1), r = h.now(), n = a().setInterval(function() {
                                if (r) {
                                    var e = h.now();
                                    g(t.data, "view_waiting_rebuffer_duration", e - r), r = e;
                                }
                            }, 250)));
                        }), t.on("playing", function() {
                            i(), o = !0;
                        }), t.on("pause", s), t.on("seeking", s);
                    });
                    function _e(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function ve(e, t, r) {
                        return t && _e(e.prototype, t), r && _e(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var me = ve(function e(t) {
                        var r = this;
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e);
                        var n = function() {
                            r.lastWallClockTime = h.now(), t.on("before*", a);
                        }, a = function(e) {
                            var n = h.now(), a = r.lastWallClockTime;
                            r.lastWallClockTime = n, n - a > 3e4 && (t.emit("devicesleep", {
                                viewer_time: a
                            }), v()(t.data, {
                                viewer_time: a
                            }), t.send("devicesleep"), t.emit("devicewake", {
                                viewer_time: n
                            }), v()(t.data, {
                                viewer_time: n
                            }), t.send("devicewake"));
                        };
                        t.one("playbackheartbeat", n), t.on("playbackheartbeatend", function() {
                            t.off("before*", a), t.one("playbackheartbeat", n);
                        });
                    }), ye = r(375), be = r(655), ge = r.n(be), we = "muxData", Te = function() {
                        var e;
                        try {
                            e = ye.parse(ge().get(we) || "");
                        } catch (t) {
                            e = {};
                        }
                        return e;
                    }, ke = function(e) {
                        try {
                            ge().set(we, ye.stringify(e), {
                                expires: 7300
                            });
                        } catch (e) {}
                    }, Ee = function() {
                        var e = Te();
                        return e.mux_viewer_id = e.mux_viewer_id || i(), e.msn = e.msn || Math.random(), ke(e), {
                            mux_viewer_id: e.mux_viewer_id,
                            mux_sample_number: e.msn
                        };
                    };
                    function xe(e, t) {
                        var r = t.beaconCollectionDomain, n = t.beaconDomain;
                        if (r) return "https://" + r;
                        var a = n || "litix.io";
                        return (e = e || "inferred").match(/^[a-z0-9]+$/) ? "https://" + e + "." + a : "https://img.litix.io/a.gif";
                    }
                    var De = function() {
                        var e;
                        switch(Se()){
                            case "cellular":
                                e = "cellular";
                                break;
                            case "ethernet":
                                e = "wired";
                                break;
                            case "wifi":
                                e = "wifi";
                                break;
                            case void 0:
                                break;
                            default:
                                e = "other";
                        }
                        return e;
                    }, Se = function() {
                        var e = a().navigator, t = e && (e.connection || e.mozConnection || e.webkitConnection);
                        return t && t.type;
                    };
                    De.getConnectionFromAPI = Se;
                    var Oe = De, qe = Ae({
                        a: "env",
                        b: "beacon",
                        c: "custom",
                        d: "ad",
                        e: "event",
                        f: "experiment",
                        i: "internal",
                        m: "mux",
                        n: "response",
                        p: "player",
                        q: "request",
                        r: "retry",
                        s: "session",
                        t: "timestamp",
                        u: "viewer",
                        v: "video",
                        w: "page",
                        x: "view",
                        y: "sub"
                    }), Pe = Ae({
                        ad: "ad",
                        ag: "aggregate",
                        ap: "api",
                        al: "application",
                        ar: "architecture",
                        as: "asset",
                        au: "autoplay",
                        av: "average",
                        bi: "bitrate",
                        br: "break",
                        bw: "browser",
                        by: "bytes",
                        ca: "cached",
                        cb: "cancel",
                        cd: "code",
                        cg: "category",
                        ch: "changed",
                        cn: "config",
                        co: "count",
                        ce: "counter",
                        cp: "complete",
                        cr: "creative",
                        ct: "content",
                        cu: "current",
                        cx: "connection",
                        dg: "downscaling",
                        dm: "domain",
                        dn: "cdn",
                        do: "downscale",
                        du: "duration",
                        dv: "device",
                        ec: "encoding",
                        ed: "edge",
                        en: "end",
                        eg: "engine",
                        em: "embed",
                        er: "error",
                        es: "errorcode",
                        et: "errortext",
                        ee: "event",
                        ev: "events",
                        ex: "expires",
                        ep: "experiments",
                        fi: "first",
                        fm: "family",
                        ft: "format",
                        fp: "fps",
                        fq: "frequency",
                        fr: "frame",
                        fs: "fullscreen",
                        hb: "holdback",
                        he: "headers",
                        ho: "host",
                        hn: "hostname",
                        ht: "height",
                        id: "id",
                        ii: "init",
                        in: "instance",
                        ip: "ip",
                        is: "is",
                        ke: "key",
                        la: "language",
                        lb: "labeled",
                        le: "level",
                        li: "live",
                        ld: "loaded",
                        lo: "load",
                        ls: "lists",
                        lt: "latency",
                        ma: "max",
                        md: "media",
                        me: "message",
                        mf: "manifest",
                        mi: "mime",
                        ml: "midroll",
                        mm: "min",
                        mn: "manufacturer",
                        mo: "model",
                        mx: "mux",
                        ne: "newest",
                        nm: "name",
                        no: "number",
                        on: "on",
                        os: "os",
                        pa: "paused",
                        pb: "playback",
                        pd: "producer",
                        pe: "percentage",
                        pf: "played",
                        pg: "program",
                        ph: "playhead",
                        pi: "plugin",
                        pl: "preroll",
                        pn: "playing",
                        po: "poster",
                        pr: "preload",
                        ps: "position",
                        pt: "part",
                        py: "property",
                        ra: "rate",
                        rd: "requested",
                        re: "rebuffer",
                        rf: "rendition",
                        rm: "remote",
                        ro: "ratio",
                        rp: "response",
                        rq: "request",
                        rs: "requests",
                        sa: "sample",
                        se: "session",
                        sk: "seek",
                        sm: "stream",
                        so: "source",
                        sq: "sequence",
                        sr: "series",
                        st: "start",
                        su: "startup",
                        sv: "server",
                        sw: "software",
                        ta: "tag",
                        tc: "tech",
                        te: "text",
                        tg: "target",
                        th: "throughput",
                        ti: "time",
                        tl: "total",
                        to: "to",
                        tt: "title",
                        ty: "type",
                        ug: "upscaling",
                        up: "upscale",
                        ur: "url",
                        us: "user",
                        va: "variant",
                        vd: "viewed",
                        vi: "video",
                        ve: "version",
                        vw: "view",
                        vr: "viewer",
                        wd: "width",
                        wa: "watch",
                        wt: "waiting"
                    });
                    function Ae(e) {
                        var t = {};
                        for(var r in e)e.hasOwnProperty(r) && (t[e[r]] = r);
                        return t;
                    }
                    function Re(e) {
                        var t = {}, r = {};
                        return Object.keys(e).forEach(function(n) {
                            var a = !1;
                            if (e.hasOwnProperty(n) && void 0 !== e[n]) {
                                var i = n.split("_"), o = i[0], s = qe[o];
                                s || (f.info("Data key word `" + i[0] + "` not expected in " + n), s = o + "_"), i.splice(1).forEach(function(e) {
                                    "url" === e && (a = !0), Pe[e] ? s += Pe[e] : Number(e) && Math.floor(Number(e)) === Number(e) ? s += e : (f.info("Data key word `" + e + "` not expected in " + n), s += "_" + e + "_");
                                }), a ? r[s] = e[n] : t[s] = e[n];
                            }
                        }), v()(t, r);
                    }
                    var Ie = {
                        maxBeaconSize: 300,
                        maxQueueLength: 3600,
                        baseTimeBetweenBeacons: 1e4,
                        maxPayloadKBSize: 500
                    }, Le = [
                        "hb",
                        "requestcompleted",
                        "requestfailed",
                        "requestcanceled"
                    ], je = "https://img.litix.io", Ne = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this._beaconUrl = e || je, this._eventQueue = [], this._postInFlight = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = v()({}, Ie, t);
                    };
                    Ne.prototype.queueEvent = function(e, t) {
                        var r = v()({}, t);
                        return (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) && (this._eventQueue.push(r), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength);
                    }, Ne.prototype.flushEvents = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && 1 === this._eventQueue.length ? this._eventQueue.pop() : (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
                    }, Ne.prototype.destroy = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.destroyed = !0, e ? this._clearBeaconQueue() : this.flushEvents(), a().clearTimeout(this._sendTimeout);
                    }, Ne.prototype._clearBeaconQueue = function() {
                        var e = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, t = this._eventQueue.slice(e);
                        e > 0 && v()(t[t.length - 1], Re({
                            mux_view_message: "event queue truncated"
                        }));
                        var r = this._createPayload(t);
                        Ce(this._beaconUrl, r, !0, function() {});
                    }, Ne.prototype._sendBeaconQueue = function() {
                        var e = this;
                        if (!this._postInFlight) {
                            var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
                            this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0;
                            var r = this._createPayload(t), n = h.now();
                            Ce(this._beaconUrl, r, !1, function(r, a) {
                                a ? (e._eventQueue = t.concat(e._eventQueue), e._failureCount += 1, f.info("Error sending beacon: " + a)) : e._failureCount = 0, e._roundTripTime = h.now() - n, e._postInFlight = !1;
                            });
                        }
                    }, Ne.prototype._getNextBeaconTime = function() {
                        if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
                        var e = Math.pow(2, this._failureCount - 1);
                        return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons;
                    }, Ne.prototype._startBeaconSending = function() {
                        var e = this;
                        a().clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = a().setTimeout(function() {
                            e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending();
                        }, this._getNextBeaconTime()));
                    }, Ne.prototype._createPayload = function(e) {
                        var t, r, n, a = this, i = {
                            transmission_timestamp: Math.round(h.now())
                        };
                        this._roundTripTime && (i.rtt_ms = Math.round(this._roundTripTime));
                        var o = function() {
                            t = JSON.stringify({
                                metadata: i,
                                events: r || e
                            }), n = t.length / 1024;
                        }, s = function() {
                            return n <= a._options.maxPayloadKBSize;
                        };
                        return o(), s() || (f.info("Payload size is too big (" + n + " kb). Removing unnecessary events."), r = e.filter(function(e) {
                            return -1 === Le.indexOf(e.e);
                        }), o()), s() || (f.info("Payload size still too big (" + n + " kb). Cropping fields.."), r.forEach(function(e) {
                            for(var t in e){
                                var r = e[t];
                                "string" == typeof r && r.length > 51200 && (e[t] = r.substring(0, 51200));
                            }
                        }), o()), t;
                    };
                    var Ce = function(e, t, r, n) {
                        if (r && navigator && navigator.sendBeacon && navigator.sendBeacon(e, t)) n();
                        else if (a().fetch) a().fetch(e, {
                            method: "POST",
                            body: t,
                            headers: {
                                "Content-Type": "text/plain"
                            },
                            keepalive: !0
                        }).then(function(e) {
                            return n(null, e.ok ? null : "Error");
                        }).catch(function(e) {
                            return n(null, e);
                        });
                        else {
                            if (a().XMLHttpRequest) {
                                var i = new (a()).XMLHttpRequest;
                                return i.onreadystatechange = function() {
                                    if (4 === i.readyState) return n(null, 200 !== i.status ? "error" : void 0);
                                }, i.open("POST", e), i.setRequestHeader("Content-Type", "text/plain"), void i.send(t);
                            }
                            n();
                        }
                    }, He = Ne;
                    function Me(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, i = [], o = !0, s = !1;
                                try {
                                    for(r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    s = !0, a = e;
                                } finally{
                                    try {
                                        o || null == r.return || r.return();
                                    } finally{
                                        if (s) throw a;
                                    }
                                }
                                return i;
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Be(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Be(e, t) : void 0;
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function Be(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                        return n;
                    }
                    function Ue(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t && (n = n.filter(function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })), r.push.apply(r, n);
                        }
                        return r;
                    }
                    function Fe(e) {
                        for(var t = 1; t < arguments.length; t++){
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ue(Object(r), !0).forEach(function(t) {
                                Ve(e, t, r[t]);
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ue(Object(r)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                        }
                        return e;
                    }
                    function Ge(e) {
                        return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, Ge(e);
                    }
                    function We(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }
                    function Qe(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function Ve(e, t, r) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r, e;
                    }
                    var Je = [
                        "env_key",
                        "view_id",
                        "view_sequence_number",
                        "player_sequence_number",
                        "beacon_domain",
                        "player_playhead_time",
                        "viewer_time",
                        "mux_api_version",
                        "event",
                        "video_id",
                        "player_instance_id"
                    ], ze = [
                        "viewstart",
                        "error",
                        "ended",
                        "viewend"
                    ], Ke = function() {
                        function e(t, r) {
                            var n, i, o, s, u, l, c, d, f, p, h, _, v, m, y, b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            We(this, e), Ve(this, "previousBeaconData", null), Ve(this, "lastEventTime", 0), Ve(this, "rateLimited", !1), this.mux = t, this.envKey = r, this.options = b, this.eventQueue = new He(xe(this.envKey, this.options)), this.sampleRate = null !== (n = this.options.sampleRate) && void 0 !== n ? n : 1, this.disableCookies = null !== (i = this.options.disableCookies) && void 0 !== i && i, this.respectDoNotTrack = null !== (o = this.options.respectDoNotTrack) && void 0 !== o && o, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.pageLevelData = {
                                mux_api_version: this.mux.API_VERSION,
                                mux_embed: this.mux.NAME,
                                mux_embed_version: this.mux.VERSION,
                                viewer_application_name: null === (s = this.options.platform) || void 0 === s ? void 0 : s.name,
                                viewer_application_version: null === (u = this.options.platform) || void 0 === u ? void 0 : u.version,
                                viewer_application_engine: null === (l = this.options.platform) || void 0 === l ? void 0 : l.layout,
                                viewer_device_name: null === (c = this.options.platform) || void 0 === c ? void 0 : c.product,
                                viewer_device_category: "",
                                viewer_device_manufacturer: null === (d = this.options.platform) || void 0 === d ? void 0 : d.manufacturer,
                                viewer_os_family: null === (f = this.options.platform) || void 0 === f || null === (p = f.os) || void 0 === p ? void 0 : p.family,
                                viewer_os_architecture: null === (h = this.options.platform) || void 0 === h || null === (_ = h.os) || void 0 === _ ? void 0 : _.architecture,
                                viewer_os_version: null === (v = this.options.platform) || void 0 === v || null === (m = v.os) || void 0 === m ? void 0 : m.version,
                                viewer_connection_type: Oe(),
                                page_url: null === a() || void 0 === a() || null === (y = a().location) || void 0 === y ? void 0 : y.href
                            }, this.viewerData = this.disableCookies ? {} : Ee();
                        }
                        var t, r, n;
                        return t = e, r = [
                            {
                                key: "send",
                                value: function(e, t) {
                                    var r;
                                    if (e) {
                                        if (this.respectDoNotTrack && p()) return f.info("Not sending `" + e + "` because Do Not Track is enabled");
                                        if (!t || "object" !== Ge(t)) return f.error("A data object was expected in send() but was not provided");
                                        var n, a, o = this.disableCookies ? {} : (n = Te(), a = h.now(), n.session_start && (n.sst = n.session_start, delete n.session_start), n.session_id && (n.sid = n.session_id, delete n.session_id), n.session_expires && (n.sex = n.session_expires, delete n.session_expires), (!n.sex || n.sex < a) && (n.sid = i(), n.sst = a), n.sex = a + 15e5, ke(n), {
                                            session_id: n.sid,
                                            session_start: n.sst,
                                            session_expires: n.sex
                                        }), s = Fe(Fe(Fe(Fe(Fe({}, this.pageLevelData), t), o), this.viewerData), {}, {
                                            event: e,
                                            env_key: this.envKey
                                        });
                                        s.user_id && (s.viewer_user_id = s.user_id, delete s.user_id);
                                        var u = (null !== (r = s.mux_sample_number) && void 0 !== r ? r : 0) >= this.sampleRate, l = Re(this._deduplicateBeaconData(e, s));
                                        if (this.lastEventTime = this.mux.utils.now(), u) return f.info("Not sending event due to sample rate restriction", e, s, l);
                                        if (this.envKey || f.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", e, s, l), !this.rateLimited) {
                                            if (f.info("Sending event", e, s, l), this.rateLimited = !this.eventQueue.queueEvent(e, l), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0);
                                            else if (this.mux.WINDOW_HIDDEN && "hb" === e ? this.eventQueue.flushEvents(!0) : ze.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return s.event = "eventrateexceeded", l = Re(s), this.eventQueue.queueEvent(s.event, l), f.error("Beaconing disabled due to rate limit.");
                                        }
                                    }
                                }
                            },
                            {
                                key: "destroy",
                                value: function() {
                                    this.eventQueue.destroy(!1);
                                }
                            },
                            {
                                key: "_deduplicateBeaconData",
                                value: function(e, t) {
                                    var r = this, n = {}, a = t.view_id;
                                    if (!a || "viewstart" === e || "viewend" === e || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5) n = Fe({}, t), a && (this.previousBeaconData = n), a && "viewend" === e && (this.previousBeaconData = null);
                                    else {
                                        var i = 0 === e.indexOf("request");
                                        Object.entries(t).forEach(function(t) {
                                            var a = Me(t, 2), o = a[0], s = a[1];
                                            r.previousBeaconData && (s !== r.previousBeaconData[o] || Je.indexOf(o) > -1 || r.objectHasChanged(i, o, s, r.previousBeaconData[o]) || r.eventRequiresKey(e, o)) && (n[o] = s, r.previousBeaconData[o] = s);
                                        });
                                    }
                                    return n;
                                }
                            },
                            {
                                key: "objectHasChanged",
                                value: function(e, t, r, n) {
                                    return !(!e || 0 !== t.indexOf("request_") || "request_response_headers" !== t && "object" === Ge(r) && "object" === Ge(n) && Object.keys(r || {}).length === Object.keys(n || {}).length);
                                }
                            },
                            {
                                key: "eventRequiresKey",
                                value: function(e, t) {
                                    return "renditionchange" === e && 0 === t.indexOf("video_source_");
                                }
                            }
                        ], Qe(t.prototype, r), n && Qe(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e;
                    }();
                    function Xe(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function Ye(e, t, r) {
                        return t && Xe(e.prototype, t), r && Xe(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var $e = Ye(function e(t) {
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e);
                        var r = 0, n = 0, a = 0, i = 0, o = 0, s = 0, u = 0;
                        t.on("requestcompleted", function(e, s) {
                            var u, l, c = s.request_start, d = s.request_response_start, f = s.request_response_end, p = s.request_bytes_loaded;
                            if (i++, d ? (u = d - c, l = f - d) : l = f - c, l > 0 && p > 0) {
                                var h = p / l * 8e3;
                                o++, n += p, a += l, t.data.view_min_request_throughput = Math.min(t.data.view_min_request_throughput || 1 / 0, h), t.data.view_average_request_throughput = n / a * 8e3, t.data.view_request_count = i, u > 0 && (r += u, t.data.view_max_request_latency = Math.max(t.data.view_max_request_latency || 0, u), t.data.view_average_request_latency = r / o);
                            }
                        }), t.on("requestfailed", function(e, r) {
                            i++, s++, t.data.view_request_count = i, t.data.view_request_failed_count = s;
                        }), t.on("requestcanceled", function(e, r) {
                            i++, u++, t.data.view_request_count = i, t.data.view_request_canceled_count = u;
                        });
                    });
                    function Ze(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function et(e, t, r) {
                        return t && Ze(e.prototype, t), r && Ze(e, r), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), e;
                    }
                    var tt = et(function e(t) {
                        var r = this;
                        !function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), t.on("before*", function(e, n) {
                            var a = n.viewer_time, i = h.now(), o = r._lastEventTime;
                            if (r._lastEventTime = i, o && i - o > 36e5) {
                                var s = Object.keys(t.data).reduce(function(e, r) {
                                    return 0 === r.indexOf("video_") ? v()(e, function(e, t, r) {
                                        return t in e ? Object.defineProperty(e, t, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : e[t] = r, e;
                                    }({}, r, t.data[r])) : e;
                                }, {});
                                t.mux.log.info("Received event after at least an hour inactivity, creating a new view"), t.emit("viewinit", v()({
                                    viewer_time: a
                                }, s)), t.playbackHeartbeat._playheadShouldBeProgressing && "play" !== e.type && "adbreakstart" !== e.type && (t.emit("play", {
                                    viewer_time: a
                                }), "playing" !== e.type && t.emit("playing", {
                                    viewer_time: a
                                }));
                            }
                        });
                    });
                    function rt(e) {
                        return rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, rt(e);
                    }
                    function nt(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, i = [], o = !0, s = !1;
                                try {
                                    for(r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    s = !0, a = e;
                                } finally{
                                    try {
                                        o || null == r.return || r.return();
                                    } finally{
                                        if (s) throw a;
                                    }
                                }
                                return i;
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return at(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? at(e, t) : void 0;
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function at(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                        return n;
                    }
                    function it(e, t) {
                        for(var r = 0; r < t.length; r++){
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    function ot(e, t) {
                        return ot = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                            return e.__proto__ = t, e;
                        }, ot(e, t);
                    }
                    function st(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                            } catch (e) {
                                return !1;
                            }
                        }();
                        return function() {
                            var r, n = ct(e);
                            if (t) {
                                var a = ct(this).constructor;
                                r = Reflect.construct(n, arguments, a);
                            } else r = n.apply(this, arguments);
                            return ut(this, r);
                        };
                    }
                    function ut(e, t) {
                        if (t && ("object" === rt(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return lt(e);
                    }
                    function lt(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e;
                    }
                    function ct(e) {
                        return ct = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e);
                        }, ct(e);
                    }
                    var dt = [
                        "viewstart",
                        "ended",
                        "loadstart",
                        "pause",
                        "play",
                        "playing",
                        "ratechange",
                        "waiting",
                        "adplay",
                        "adpause",
                        "adended",
                        "aderror",
                        "adplaying",
                        "adrequest",
                        "adresponse",
                        "adbreakstart",
                        "adbreakend",
                        "adfirstquartile",
                        "admidpoint",
                        "adthirdquartile",
                        "rebufferstart",
                        "rebufferend",
                        "seeked",
                        "error",
                        "hb",
                        "requestcompleted",
                        "requestfailed",
                        "requestcanceled",
                        "renditionchange"
                    ], ft = function(e) {
                        !function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && ot(e, t);
                        }(s, e);
                        var t, r, n, o = st(s);
                        function s(e, t, r) {
                            var n;
                            !function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            }(this, s), (n = o.call(this)).DOM_CONTENT_LOADED_EVENT_END = b.domContentLoadedEventEnd(), n.NAVIGATION_START = b.navigationStart(), n.mux = e, n.id = t, (r = v()({
                                debug: !1,
                                minimumRebufferDuration: 250,
                                sustainedRebufferThreshold: 1e3,
                                playbackHeartbeatTime: 25,
                                beaconDomain: "litix.io",
                                sampleRate: 1,
                                disableCookies: !1,
                                respectDoNotTrack: !1,
                                disableRebufferTracking: !1,
                                disablePlayheadRebufferTracking: !1,
                                errorTranslator: function(e) {
                                    return e;
                                }
                            }, r)).data = r.data || {}, r.data.property_key && (r.data.env_key = r.data.property_key, delete r.data.property_key), f.setLevel(r.debug ? "debug" : "warn"), n.getPlayheadTime = r.getPlayheadTime, n.getStateData = r.getStateData || function() {
                                return {};
                            }, n.getAdData = r.getAdData || function() {}, n.minimumRebufferDuration = r.minimumRebufferDuration, n.sustainedRebufferThreshold = r.sustainedRebufferThreshold, n.playbackHeartbeatTime = r.playbackHeartbeatTime, n.disableRebufferTracking = r.disableRebufferTracking, n.disableRebufferTracking && n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), n.disablePlayheadRebufferTracking = r.disablePlayheadRebufferTracking, n.errorTranslator = r.errorTranslator, n.playbackEventDispatcher = new Ke(e, r.data.env_key, r), n.data = {
                                player_instance_id: i(),
                                mux_sample_rate: r.sampleRate,
                                beacon_domain: r.beaconCollectionDomain ? r.beaconCollectionDomain : r.beaconDomain
                            }, n.data.view_sequence_number = 1, n.data.player_sequence_number = 1, n.oldEmit = n.emit, n.emit = function(e, t) {
                                t = v()({
                                    viewer_time: this.mux.utils.now()
                                }, t), this.oldEmit(e, t);
                            };
                            var a = (function() {
                                void 0 === this.data.view_start && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"));
                            }).bind(lt(n));
                            n.on("viewinit", function(e, t) {
                                this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), v()(this.data, t), this._initializeViewData(), this.one("play", a), this.one("adbreakstart", a);
                            });
                            var u = (function(e) {
                                this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e);
                            }).bind(lt(n));
                            if (n.on("videochange", function(e, t) {
                                u(t);
                            }), n.on("programchange", function(e, t) {
                                this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), u(v()(t, {
                                    view_program_changed: !0
                                })), a(), this.emit("play"), this.emit("playing");
                            }), n.on("fragmentchange", function(e, t) {
                                this.currentFragmentPDT = t.currentFragmentPDT, this.currentFragmentStart = t.currentFragmentStart;
                            }), n.on("destroy", n.destroy), "undefined" != typeof window && "function" == typeof window.addEventListener && "function" == typeof window.removeEventListener) {
                                var l = function() {
                                    var e = void 0 !== n.data.view_start;
                                    n.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState, e && n.mux.WINDOW_HIDDEN && (n.data.player_is_paused || n.emit("hb"));
                                };
                                window.addEventListener("visibilitychange", l, !1);
                                var c = function(e) {
                                    e.persisted || n.destroy();
                                };
                                window.addEventListener("pagehide", c, !1), n.on("destroy", function() {
                                    window.removeEventListener("visibilitychange", l), window.removeEventListener("pagehide", c);
                                });
                            }
                            return n.on("playerready", function(e, t) {
                                v()(this.data, t);
                            }), dt.forEach(function(e) {
                                n.on(e, function(t, r) {
                                    0 !== e.indexOf("ad") && this._updateStateData(), v()(this.data, r), this._sanitizeData();
                                }), n.on("after" + e, function() {
                                    ("error" !== e || this.errorTracker.viewErrored) && this.send(e);
                                });
                            }), n.on("viewend", function(e, t) {
                                v()(n.data, t);
                            }), n.one("playerready", function(e) {
                                var t = this.mux.utils.now();
                                this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
                            }), n.longResumeTracker = new tt(lt(n)), n.errorTracker = new M(lt(n)), new me(lt(n)), n.seekingTracker = new ie(lt(n)), n.playheadTime = new Q(lt(n)), n.playbackHeartbeat = new N(lt(n)), new re(lt(n)), n.watchTimeTracker = new U(lt(n)), new G(lt(n)), n.adTracker = new de(lt(n)), new Y(lt(n)), new z(lt(n)), new Z(lt(n)), new he(lt(n)), new $e(lt(n)), r.hlsjs && n.addHLSJS(r), r.dashjs && n.addDashJS(r), n.emit("viewinit", r.data), n;
                        }
                        return t = s, r = [
                            {
                                key: "destroy",
                                value: function() {
                                    this._destroyed || (this._destroyed = !0, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
                                }
                            },
                            {
                                key: "send",
                                value: function(e) {
                                    var t = v()({}, this.data);
                                    if (void 0 === t.video_source_is_live && (t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? t.video_source_is_live = !0 : (t.player_source_duration > 0 || t.video_source_duration > 0) && (t.video_source_is_live = !1)), t.video_source_is_live || [
                                        "player_program_time",
                                        "player_manifest_newest_program_time",
                                        "player_live_edge_program_time",
                                        "player_program_time",
                                        "video_holdback",
                                        "video_part_holdback",
                                        "video_target_duration",
                                        "video_part_target_duration"
                                    ].forEach(function(e) {
                                        t[e] = void 0;
                                    }), t.video_source_url = t.video_source_url || t.player_source_url, t.video_source_url) {
                                        var r = nt(y(t.video_source_url), 2), n = r[0], a = r[1];
                                        t.video_source_domain = a, t.video_source_hostname = n;
                                    }
                                    delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat();
                                }
                            },
                            {
                                key: "_updateStateData",
                                value: function() {
                                    v()(this.data, this.getStateData()), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
                                }
                            },
                            {
                                key: "_sanitizeData",
                                value: function() {
                                    var e = this;
                                    [
                                        "player_width",
                                        "player_height",
                                        "video_source_width",
                                        "video_source_height",
                                        "player_playhead_time",
                                        "video_source_bitrate"
                                    ].forEach(function(t) {
                                        var r = parseInt(e.data[t], 10);
                                        e.data[t] = isNaN(r) ? void 0 : r;
                                    }), [
                                        "player_source_url",
                                        "video_source_url"
                                    ].forEach(function(t) {
                                        if (e.data[t]) {
                                            var r = e.data[t].toLowerCase();
                                            0 !== r.indexOf("data:") && 0 !== r.indexOf("blob:") || (e.data[t] = "MSE style URL");
                                        }
                                    });
                                }
                            },
                            {
                                key: "_resetVideoData",
                                value: function(e, t) {
                                    var r = this;
                                    Object.keys(this.data).forEach(function(e) {
                                        0 === e.indexOf("video_") && delete r.data[e];
                                    });
                                }
                            },
                            {
                                key: "_resetViewData",
                                value: function() {
                                    var e = this;
                                    Object.keys(this.data).forEach(function(t) {
                                        0 === t.indexOf("view_") && delete e.data[t];
                                    }), this.data.view_sequence_number = 1;
                                }
                            },
                            {
                                key: "_resetErrorData",
                                value: function(e, t) {
                                    delete this.data.player_error_code, delete this.data.player_error_message;
                                }
                            },
                            {
                                key: "_initializeViewData",
                                value: function() {
                                    var e = this, t = this.data.view_id = i(), r = function() {
                                        t === e.data.view_id && g(e.data, "player_view_count", 1);
                                    };
                                    this.data.player_is_paused ? this.one("play", r) : r();
                                }
                            },
                            {
                                key: "_restartHeartBeat",
                                value: function() {
                                    var e = this;
                                    window.clearTimeout(this._heartBeatTimeout), this.errorTracker.viewErrored || (this._heartBeatTimeout = window.setTimeout(function() {
                                        e.data.player_is_paused || e.emit("hb");
                                    }, 1e4));
                                }
                            },
                            {
                                key: "addHLSJS",
                                value: function(e) {
                                    e.hlsjs ? this.hlsjs ? this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, function(e, t, r) {
                                        var n = arguments.length > 4 ? arguments[4] : void 0, a = e.log, i = e.utils.secondsToMs, o = function(e) {
                                            var t, r = parseInt(n.version);
                                            return 1 === r && null !== e.programDateTime && (t = e.programDateTime), 0 === r && null !== e.pdt && (t = e.pdt), t;
                                        };
                                        if (b.exists()) {
                                            var s = function(r, n) {
                                                return e.emit(t, r, n);
                                            }, u = function(e, t) {
                                                var r = t.levels, n = t.audioTracks, a = t.url, i = t.stats, o = t.networkDetails, u = t.sessionData, l = {}, c = {};
                                                r.forEach(function(e, t) {
                                                    l[t] = {
                                                        width: e.width,
                                                        height: e.height,
                                                        bitrate: e.bitrate,
                                                        attrs: e.attrs
                                                    };
                                                }), n.forEach(function(e, t) {
                                                    c[t] = {
                                                        name: e.name,
                                                        language: e.lang,
                                                        bitrate: e.bitrate
                                                    };
                                                });
                                                var d = S(i), f = d.bytesLoaded, p = d.requestStart, h = d.responseStart, _ = d.responseEnd;
                                                s("requestcompleted", x(x({}, k(u)), {}, {
                                                    request_event_type: e,
                                                    request_bytes_loaded: f,
                                                    request_start: p,
                                                    request_response_start: h,
                                                    request_response_end: _,
                                                    request_type: "manifest",
                                                    request_hostname: m(a),
                                                    request_response_headers: O(o),
                                                    request_rendition_lists: {
                                                        media: l,
                                                        audio: c,
                                                        video: {}
                                                    }
                                                }));
                                            };
                                            r.on(n.Events.MANIFEST_LOADED, u);
                                            var l = function(e, t) {
                                                var r = t.details, n = t.level, a = t.networkDetails, u = t.stats, l = S(u), c = l.bytesLoaded, d = l.requestStart, f = l.responseStart, p = l.responseEnd, h = r.fragments[r.fragments.length - 1], _ = o(h) + i(h.duration);
                                                s("requestcompleted", {
                                                    request_event_type: e,
                                                    request_bytes_loaded: c,
                                                    request_start: d,
                                                    request_response_start: f,
                                                    request_response_end: p,
                                                    request_current_level: n,
                                                    request_type: "manifest",
                                                    request_hostname: m(r.url),
                                                    request_response_headers: O(a),
                                                    video_holdback: r.holdBack && i(r.holdBack),
                                                    video_part_holdback: r.partHoldBack && i(r.partHoldBack),
                                                    video_part_target_duration: r.partTarget && i(r.partTarget),
                                                    video_target_duration: r.targetduration && i(r.targetduration),
                                                    video_source_is_live: r.live,
                                                    player_manifest_newest_program_time: isNaN(_) ? void 0 : _
                                                });
                                            };
                                            r.on(n.Events.LEVEL_LOADED, l);
                                            var c = function(e, t) {
                                                var r = t.details, n = t.networkDetails, a = t.stats, i = S(a), o = i.bytesLoaded, u = i.requestStart, l = i.responseStart, c = i.responseEnd;
                                                s("requestcompleted", {
                                                    request_event_type: e,
                                                    request_bytes_loaded: o,
                                                    request_start: u,
                                                    request_response_start: l,
                                                    request_response_end: c,
                                                    request_type: "manifest",
                                                    request_hostname: m(r.url),
                                                    request_response_headers: O(n)
                                                });
                                            };
                                            r.on(n.Events.AUDIO_TRACK_LOADED, c);
                                            var d = function(e, t) {
                                                var n = t.stats, a = t.networkDetails, i = t.frag;
                                                n = n || i.stats;
                                                var o = S(n), u = o.bytesLoaded, l = o.requestStart, c = o.responseStart, d = o.responseEnd, f = O(a), p = null == f ? void 0 : f["x-request-id"], h = {
                                                    request_event_type: e,
                                                    request_bytes_loaded: u,
                                                    request_start: l,
                                                    request_response_start: c,
                                                    request_response_end: d,
                                                    request_hostname: a ? m(a.responseURL) : void 0,
                                                    request_id: p,
                                                    request_response_headers: f,
                                                    request_media_duration: i.duration,
                                                    request_url: null == a ? void 0 : a.responseURL
                                                };
                                                "main" === i.type ? (h.request_type = "media", h.request_current_level = i.level, h.request_video_width = (r.levels[i.level] || {}).width, h.request_video_height = (r.levels[i.level] || {}).height, h.request_labeled_bitrate = (r.levels[i.level] || {}).bitrate) : h.request_type = i.type, s("requestcompleted", h);
                                            };
                                            r.on(n.Events.FRAG_LOADED, d);
                                            var f = function(e, t) {
                                                var r = t.frag, n = r.start, a = {
                                                    currentFragmentPDT: o(r),
                                                    currentFragmentStart: i(n)
                                                };
                                                s("fragmentchange", a);
                                            };
                                            r.on(n.Events.FRAG_CHANGED, f);
                                            var p = function(e, t) {
                                                var r = t.type, a = t.details, i = t.response, o = t.fatal, u = t.context, l = t.frag;
                                                if (a === n.ErrorDetails.MANIFEST_LOAD_ERROR || a === n.ErrorDetails.MANIFEST_LOAD_TIMEOUT || a === n.ErrorDetails.FRAG_LOAD_ERROR || a === n.ErrorDetails.FRAG_LOAD_TIMEOUT || a === n.ErrorDetails.LEVEL_LOAD_ERROR || a === n.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                                                    var c = l && l.url || u && u.url || "";
                                                    s("requestfailed", {
                                                        request_error: a,
                                                        request_url: c,
                                                        request_hostname: m(c),
                                                        request_type: a === n.ErrorDetails.FRAG_LOAD_ERROR || a === n.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest",
                                                        request_error_code: i && i.code,
                                                        request_error_text: i && i.text
                                                    });
                                                }
                                                o && s("error", {
                                                    player_error_code: r,
                                                    player_error_message: a
                                                });
                                            };
                                            r.on(n.Events.ERROR, p);
                                            var h = function(e, t) {
                                                var r = t.frag, n = r && r._url || "";
                                                s("requestcanceled", {
                                                    request_event_type: e,
                                                    request_url: n,
                                                    request_type: "media",
                                                    request_hostname: m(n)
                                                });
                                            };
                                            r.on(n.Events.FRAG_LOAD_EMERGENCY_ABORTED, h);
                                            var _ = function(e, t) {
                                                var n = t.level, i = r.levels[n];
                                                if (i && i.attrs && i.attrs.BANDWIDTH) {
                                                    var o, u = i.attrs.BANDWIDTH, l = parseFloat(i.attrs["FRAME-RATE"]);
                                                    isNaN(l) || (o = l), u ? s("renditionchange", {
                                                        video_source_fps: o,
                                                        video_source_bitrate: u,
                                                        video_source_width: i.width,
                                                        video_source_height: i.height
                                                    }) : a.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
                                                }
                                            };
                                            r.on(n.Events.LEVEL_SWITCHED, _), r._stopMuxMonitor = function() {
                                                r.off(n.Events.MANIFEST_LOADED, u), r.off(n.Events.LEVEL_LOADED, l), r.off(n.Events.AUDIO_TRACK_LOADED, c), r.off(n.Events.FRAG_LOADED, d), r.off(n.Events.FRAG_CHANGED, f), r.off(n.Events.ERROR, p), r.off(n.Events.FRAG_LOAD_EMERGENCY_ABORTED, h), r.off(n.Events.LEVEL_SWITCHED, _), r.off(n.Events.DESTROYING, r._stopMuxMonitor), delete r._stopMuxMonitor;
                                            }, r.on(n.Events.DESTROYING, r._stopMuxMonitor);
                                        } else a.warn("performance timing not supported. Not tracking HLS.js.");
                                    }(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls)) : this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
                                }
                            },
                            {
                                key: "removeHLSJS",
                                value: function() {
                                    var e;
                                    this.hlsjs && ((e = this.hlsjs) && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor(), this.hlsjs = void 0);
                                }
                            },
                            {
                                key: "addDashJS",
                                value: function(e) {
                                    e.dashjs ? this.dashjs ? this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e.dashjs, function(e, t, r) {
                                        var n = e.log;
                                        if (r && r.on) {
                                            var i = function(r, n) {
                                                return e.emit(t, r, n);
                                            }, o = function(e) {
                                                var t = e.type, r = (e.data || {}).url;
                                                i("requestcompleted", {
                                                    request_event_type: t,
                                                    request_start: 0,
                                                    request_response_start: 0,
                                                    request_response_end: 0,
                                                    request_bytes_loaded: -1,
                                                    request_type: "manifest",
                                                    request_hostname: m(r),
                                                    request_url: r
                                                });
                                            };
                                            r.on("manifestLoaded", o);
                                            var s = {}, u = function(e) {
                                                var t = e.type, n = e.fragmentModel, a = (e.chunk || {}).mediaInfo || {}, o = a.type, u = a.bitrateList, l = {};
                                                (u = u || []).forEach(function(e, t) {
                                                    l[t] = {}, l[t].width = e.width, l[t].height = e.height, l[t].bitrate = e.bandwidth, l[t].attrs = {};
                                                }), "video" === o ? s.video = l : "audio" === o ? s.audio = l : s.media = l;
                                                var c = q(n, r), d = c.requestStart, f = c.requestResponseStart, p = c.requestResponseEnd, h = c.requestResponseHeaders, _ = c.requestMediaDuration, v = c.requestHostname, m = c.requestUrl;
                                                i("requestcompleted", {
                                                    request_event_type: t,
                                                    request_start: d,
                                                    request_response_start: f,
                                                    request_response_end: p,
                                                    request_bytes_loaded: -1,
                                                    request_type: o + "_init",
                                                    request_response_headers: h,
                                                    request_hostname: v,
                                                    request_url: m,
                                                    request_media_duration: _,
                                                    request_rendition_lists: s
                                                });
                                            };
                                            r.on("initFragmentLoaded", u);
                                            var l = function(e) {
                                                var t = e.type, n = e.fragmentModel, a = e.chunk || {}, o = a.mediaInfo, s = a.start, u = (o || {}).type, l = q(n, r), c = l.requestStart, d = l.requestResponseStart, f = l.requestResponseEnd, p = l.requestBytesLoaded, h = l.requestResponseHeaders, _ = l.requestMediaDuration, v = l.requestHostname, m = l.requestUrl, y = P(u, r), b = y.currentLevel, g = y.renditionWidth, w = y.renditionHeight, T = y.renditionBitrate;
                                                i("requestcompleted", {
                                                    request_event_type: t,
                                                    request_start: c,
                                                    request_response_start: d,
                                                    request_response_end: f,
                                                    request_bytes_loaded: p,
                                                    request_type: u,
                                                    request_response_headers: h,
                                                    request_hostname: v,
                                                    request_url: m,
                                                    request_media_start_time: s,
                                                    request_media_duration: _,
                                                    request_current_level: b,
                                                    request_labeled_bitrate: T,
                                                    request_video_width: g,
                                                    request_video_height: w
                                                });
                                            };
                                            r.on("mediaFragmentLoaded", l);
                                            var c = {
                                                video: void 0,
                                                audio: void 0,
                                                totalBitrate: void 0
                                            }, d = function() {
                                                if (c.video && "number" == typeof c.video.bitrate) {
                                                    if (c.video.width && c.video.height) {
                                                        var e = c.video.bitrate;
                                                        return c.audio && "number" == typeof c.audio.bitrate && (e += c.audio.bitrate), e !== c.totalBitrate ? (c.totalBitrate = e, {
                                                            video_source_bitrate: e,
                                                            video_source_height: c.video.height,
                                                            video_source_width: c.video.width
                                                        }) : void 0;
                                                    }
                                                    n.warn("have bitrate info for video but missing width/height");
                                                }
                                            }, f = function(e, t, a) {
                                                if ("number" == typeof e.newQuality) {
                                                    var o = e.mediaType;
                                                    if ("audio" === o || "video" === o) {
                                                        var s = r.getBitrateInfoListFor(o).find(function(t) {
                                                            return t.qualityIndex === e.newQuality;
                                                        });
                                                        if (s && "number" == typeof s.bitrate) {
                                                            c[o] = s;
                                                            var u = d();
                                                            u && i("renditionchange", u);
                                                        } else n.warn("missing bitrate info for ".concat(o));
                                                    }
                                                } else n.warn("missing evt.newQuality in qualityChangeRendered event", e);
                                            };
                                            r.on("qualityChangeRendered", f);
                                            var p = function(e) {
                                                var t = e.error, r = e.event, n = (r = r || {}).request || {}, o = a().event && a().event.currentTarget || {};
                                                i("requestfailed", {
                                                    request_error: t + "_" + r.id + "_" + n.type,
                                                    request_url: r.url,
                                                    request_hostname: m(r.url),
                                                    request_type: n.mediaType,
                                                    request_error_code: o.status,
                                                    request_error_type: o.statusText
                                                });
                                            };
                                            r.on("error", p), r._stopMuxMonitor = function() {
                                                r.off("manifestLoaded", o), r.off("initFragmentLoaded", u), r.off("mediaFragmentLoaded", l), r.off("qualityChangeRendered", f), r.off("error", p), delete r._stopMuxMonitor;
                                            };
                                        } else n.warn("Invalid dash.js player reference. Monitoring blocked.");
                                    }(this.mux, this.id, e.dashjs)) : this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
                                }
                            },
                            {
                                key: "removeDashJS",
                                value: function() {
                                    var e;
                                    this.dashjs && ((e = this.dashjs) && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor(), this.dashjs = void 0);
                                }
                            }
                        ], r && it(t.prototype, r), n && it(t, n), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), s;
                    }(L), pt = ft, ht = r(153), _t = r.n(ht);
                    function vt(e) {
                        return vt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, vt(e);
                    }
                    function mt(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, i = [], o = !0, s = !1;
                                try {
                                    for(r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    s = !0, a = e;
                                } finally{
                                    try {
                                        o || null == r.return || r.return();
                                    } finally{
                                        if (s) throw a;
                                    }
                                }
                                return i;
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return yt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yt(e, t) : void 0;
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function yt(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                        return n;
                    }
                    var bt, gt = [
                        "loadstart",
                        "pause",
                        "play",
                        "playing",
                        "seeking",
                        "seeked",
                        "timeupdate",
                        "ratechange",
                        "stalled",
                        "waiting",
                        "error",
                        "ended"
                    ], wt = {
                        1: "MEDIA_ERR_ABORTED",
                        2: "MEDIA_ERR_NETWORK",
                        3: "MEDIA_ERR_DECODE",
                        4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                    };
                    a() && a().WeakMap && (bt = new WeakMap);
                    var Tt = "#EXT-X-TARGETDURATION", kt = "#EXT-X-PART-INF", Et = "#EXT-X-SERVER-CONTROL", xt = "#EXTINF", Dt = "#EXT-X-PROGRAM-DATE-TIME", St = "#EXT-X-VERSION", Ot = "#EXT-X-SESSION-DATA", qt = function(e) {
                        return this.buffer = "", this.manifest = {
                            segments: [],
                            serverControl: {},
                            sessionData: {}
                        }, this.currentUri = {}, this.process(e), this.manifest;
                    };
                    qt.prototype.process = function(e) {
                        var t;
                        for(this.buffer += e, t = this.buffer.indexOf("\n"); t > -1; t = this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1);
                    }, qt.prototype.processLine = function(e) {
                        var t = e.indexOf(":"), r = Nt(e, t), n = r[0], a = 2 === r.length ? Rt(r[1]) : void 0;
                        if ("#" !== n[0]) this.currentUri.uri = n, this.manifest.segments.push(this.currentUri), this.manifest.targetDuration && !("duration" in this.currentUri) && (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
                        else switch(n){
                            case Tt:
                                if (!isFinite(a) || a < 0) return;
                                this.manifest.targetDuration = a, this.setHoldBack();
                                break;
                            case kt:
                                Pt(this.manifest, r), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
                                break;
                            case Et:
                                Pt(this.manifest, r), this.setHoldBack();
                                break;
                            case xt:
                                0 === a ? this.currentUri.duration = .01 : a > 0 && (this.currentUri.duration = a);
                                break;
                            case Dt:
                                var i = a, o = new Date(i);
                                this.manifest.dateTimeString || (this.manifest.dateTimeString = i, this.manifest.dateTimeObject = o), this.currentUri.dateTimeString = i, this.currentUri.dateTimeObject = o;
                                break;
                            case St:
                                Pt(this.manifest, r);
                                break;
                            case Ot:
                                var s = Ct(r[1]), u = k(s);
                                v()(this.manifest.sessionData, u);
                        }
                    }, qt.prototype.setHoldBack = function() {
                        var e = this.manifest, t = e.serverControl, r = e.targetDuration, n = e.partTargetDuration;
                        if (t) {
                            var a = "holdBack", i = "partHoldBack", o = r && 3 * r, s = n && 2 * n;
                            r && !t.hasOwnProperty(a) && (t[a] = o), o && t[a] < o && (t[a] = o), n && !t.hasOwnProperty(i) && (t[i] = 3 * n), n && t[i] < s && (t[i] = s);
                        }
                    };
                    var Pt = function(e, t) {
                        var r, n = At(t[0].replace("#EXT-X-", ""));
                        jt(t[1]) ? (r = {}, r = v()(Lt(t[1]), r)) : r = Rt(t[1]), e[n] = r;
                    }, At = function(e) {
                        return e.toLowerCase().replace(/-(\w)/g, function(e) {
                            return e[1].toUpperCase();
                        });
                    }, Rt = function(e) {
                        if ("yes" === e.toLowerCase() || "no" === e.toLowerCase()) return "yes" === e.toLowerCase();
                        var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
                        return isNaN(t) ? e : t;
                    }, It = function(e) {
                        var t = {}, r = e.split("=");
                        return r.length > 1 && (t[At(r[0])] = Rt(r[1])), t;
                    }, Lt = function(e) {
                        for(var t = e.split(","), r = {}, n = 0; t.length > n; n++){
                            var a = t[n], i = It(a);
                            r = v()(i, r);
                        }
                        return r;
                    }, jt = function(e) {
                        return e.indexOf("=") > -1;
                    }, Nt = function(e, t) {
                        return -1 === t ? [
                            e
                        ] : [
                            e.substring(0, t),
                            e.substring(t + 1)
                        ];
                    }, Ct = function(e) {
                        var t = {};
                        if (e) {
                            var r = e.search(",");
                            return [
                                e.slice(0, r),
                                e.slice(r + 1)
                            ].forEach(function(e, r) {
                                for(var n = e.replace(/['"]+/g, "").split("="), a = 0; a < n.length; a++)"DATA-ID" === n[a] && (t["DATA-ID"] = n[1 - a]), "VALUE" === n[a] && (t.VALUE = n[1 - a]);
                            }), {
                                data: t
                            };
                        }
                    }, Ht = qt, Mt = {
                        safeCall: function(e, t, r, n) {
                            var a = n;
                            if (e && "function" == typeof e[t]) try {
                                a = e[t].apply(e, r);
                            } catch (e) {
                                f.info("safeCall error", e);
                            }
                            return a;
                        },
                        safeIncrement: g,
                        getComputedStyle: function(e, t) {
                            var r;
                            if (e && t && a() && "function" == typeof a().getComputedStyle) return bt && bt.has(e) && (r = bt.get(e)), r || (r = a().getComputedStyle(e, null), bt && bt.set(e, r)), r.getPropertyValue(t);
                        },
                        secondsToMs: function(e) {
                            return Math.floor(1e3 * e);
                        },
                        assign: v(),
                        headersStringToObject: T,
                        extractHostnameAndDomain: y,
                        extractHostname: m,
                        manifestParser: Ht,
                        generateShortID: o,
                        generateUUID: i,
                        now: h.now
                    }, Bt = {
                        PLAYER_READY: "playerready",
                        VIEW_INIT: "viewinit",
                        VIDEO_CHANGE: "videochange",
                        PLAY: "play",
                        PAUSE: "pause",
                        PLAYING: "playing",
                        TIME_UPDATE: "timeupdate",
                        SEEKING: "seeking",
                        SEEKED: "seeked",
                        REBUFFER_START: "rebufferstart",
                        REBUFFER_END: "rebufferend",
                        ERROR: "error",
                        ENDED: "ended",
                        RENDITION_CHANGE: "renditionchange",
                        ORIENTATION_CHANGE: "orientationchange",
                        AD_REQUEST: "adrequest",
                        AD_RESPONSE: "adresponse",
                        AD_BREAK_START: "adbreakstart",
                        AD_PLAY: "adplay",
                        AD_PLAYING: "adplaying",
                        AD_PAUSE: "adpause",
                        AD_FIRST_QUARTILE: "adfirstquartile",
                        AD_MID_POINT: "admidpoint",
                        AD_THIRD_QUARTILE: "adthirdquartile",
                        AD_ENDED: "adended",
                        AD_BREAK_END: "adbreakend",
                        AD_ERROR: "aderror",
                        REQUEST_COMPLETED: "requestcompleted",
                        REQUEST_FAILED: "requestfailed",
                        REQUEST_CANCELLED: "requestcanceled"
                    };
                    function Ut(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e;
                        }(e) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, a, i = [], o = !0, s = !1;
                                try {
                                    for(r = r.call(e); !(o = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                } catch (e) {
                                    s = !0, a = e;
                                } finally{
                                    try {
                                        o || null == r.return || r.return();
                                    } finally{
                                        if (s) throw a;
                                    }
                                }
                                return i;
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Ft(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ft(e, t) : void 0;
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function Ft(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for(var r = 0, n = new Array(t); r < t; r++)n[r] = e[r];
                        return n;
                    }
                    var Gt = {}, Wt = function e(t) {
                        var r = arguments;
                        "string" == typeof t ? e.hasOwnProperty(t) ? a().setTimeout(function() {
                            r = Array.prototype.splice.call(r, 1), e[t].apply(null, r);
                        }, 0) : f.warn("`" + t + "` is an unknown task") : "function" == typeof t ? a().setTimeout(function() {
                            t(e);
                        }, 0) : f.warn("`" + t + "` is invalid.");
                    }, Qt = {
                        loaded: h.now(),
                        NAME: "mux-embed",
                        VERSION: "4.15.0",
                        API_VERSION: "2.1",
                        PLAYER_TRACKED: !1,
                        monitor: function(e, t) {
                            return function(e, t, r) {
                                var n = mt(u(t), 3), a = n[0], i = n[1], o = n[2], s = e.log, l = e.utils.getComputedStyle, c = e.utils.secondsToMs;
                                if (!a) return s.error("No element was found with the `" + i + "` query selector.");
                                if ("video" !== o && "audio" !== o) return s.error("The element of `" + i + "` was not a media element.");
                                a.mux && (a.mux.destroy(), delete a.mux, s.warn("Already monitoring this video element, replacing existing event listeners")), (r = v()({
                                    automaticErrorTracking: !0
                                }, r)).data = v()({
                                    player_software: "HTML5 Video Element",
                                    player_mux_plugin_name: "VideoElementMonitor",
                                    player_mux_plugin_version: e.VERSION
                                }, r.data), r.getPlayheadTime = function() {
                                    return c(a.currentTime);
                                }, r.getStateData = function() {
                                    var e = this.hlsjs && this.hlsjs.url, t = this.dashjs && vt("function" === this.dashjs.getSource) && this.dashjs.getSource(), n = {
                                        player_is_paused: a.paused,
                                        player_playhead_time: c(a.currentTime),
                                        player_width: parseInt(l(a, "width")),
                                        player_height: parseInt(l(a, "height")),
                                        player_autoplay_on: a.autoplay,
                                        player_preload_on: a.preload,
                                        player_language_code: a.lang,
                                        player_is_fullscreen: _t() && !!(_t().fullscreenElement || _t().webkitFullscreenElement || _t().mozFullScreenElement || _t().msFullscreenElement),
                                        video_poster_url: a.poster,
                                        video_source_url: e || t || a.currentSrc,
                                        video_source_duration: c(a.duration),
                                        video_source_height: a.videoHeight,
                                        video_source_width: a.videoWidth
                                    }, i = r.getPlayheadTime();
                                    if (a.getStartDate && i > 0) {
                                        var o = a.getStartDate();
                                        if (o && "function" == typeof o.getTime && o.getTime()) {
                                            var s = o.getTime();
                                            if (n.player_program_time = s + i, a.seekable.length > 0) {
                                                var u = s + a.seekable.end(a.seekable.length - 1);
                                                n.player_live_edge_program_time = u;
                                            }
                                        }
                                    }
                                    return n;
                                }, a.mux = a.mux || {}, a.mux.deleted = !1, a.mux.emit = function(t, r) {
                                    e.emit(i, t, r);
                                };
                                var d = function() {
                                    s.error("The monitor for this video element has already been destroyed.");
                                };
                                a.mux.destroy = function() {
                                    Object.keys(a.mux.listeners).forEach(function(e) {
                                        a.removeEventListener(e, a.mux.listeners[e], !1);
                                    }), delete a.mux.listeners, a.mux.destroy = d, a.mux.swapElement = d, a.mux.emit = d, a.mux.addHLSJS = d, a.mux.addDashJS = d, a.mux.removeHLSJS = d, a.mux.removeDashJS = d, a.mux.deleted = !0, e.emit(i, "destroy");
                                }, a.mux.swapElement = function(t) {
                                    var r = mt(u(t), 3), n = r[0], i = r[1], o = r[2];
                                    return n ? "video" !== o && "audio" !== o ? e.log.error("The element of `" + i + "` was not a media element.") : (n.muxId = a.muxId, delete a.muxId, n.mux = n.mux || {}, n.mux.listeners = v()({}, a.mux.listeners), delete a.mux.listeners, Object.keys(n.mux.listeners).forEach(function(e) {
                                        a.removeEventListener(e, n.mux.listeners[e], !1), n.addEventListener(e, n.mux.listeners[e], !1);
                                    }), n.mux.swapElement = a.mux.swapElement, n.mux.destroy = a.mux.destroy, delete a.mux, void (a = n)) : e.log.error("No element was found with the `" + i + "` query selector.");
                                }, a.mux.addHLSJS = function(t) {
                                    e.addHLSJS(i, t);
                                }, a.mux.addDashJS = function(t) {
                                    e.addDashJS(i, t);
                                }, a.mux.removeHLSJS = function() {
                                    e.removeHLSJS(i);
                                }, a.mux.removeDashJS = function() {
                                    e.removeDashJS(i);
                                }, e.init(i, r), e.emit(i, "playerready"), a.paused || (e.emit(i, "play"), a.readyState > 2 && e.emit(i, "playing")), a.mux.listeners = {}, gt.forEach(function(t) {
                                    ("error" !== t || r.automaticErrorTracking) && (a.mux.listeners[t] = function() {
                                        var r = {};
                                        if ("error" === t) {
                                            if (!a.error) return;
                                            if (1 === a.error.code) return;
                                            r.player_error_code = a.error.code, r.player_error_message = wt[a.error.code] || a.error.message;
                                        }
                                        e.emit(i, t, r);
                                    }, a.addEventListener(t, a.mux.listeners[t], !1));
                                });
                            }(Wt, e, t);
                        },
                        destroyMonitor: function(e) {
                            var t = Ut(u(e), 1)[0];
                            t && t.mux && "function" == typeof t.mux.destroy ? t.mux.destroy() : f.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
                        },
                        addHLSJS: function(e, t) {
                            var r = s(e);
                            Gt[r] ? Gt[r].addHLSJS(t) : f.error("A monitor for `" + r + "` has not been initialized.");
                        },
                        addDashJS: function(e, t) {
                            var r = s(e);
                            Gt[r] ? Gt[r].addDashJS(t) : f.error("A monitor for `" + r + "` has not been initialized.");
                        },
                        removeHLSJS: function(e) {
                            var t = s(e);
                            Gt[t] ? Gt[t].removeHLSJS() : f.error("A monitor for `" + t + "` has not been initialized.");
                        },
                        removeDashJS: function(e) {
                            var t = s(e);
                            Gt[t] ? Gt[t].removeDashJS() : f.error("A monitor for `" + t + "` has not been initialized.");
                        },
                        init: function(e, t) {
                            p() && t && t.respectDoNotTrack && f.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
                            var r = s(e);
                            Gt[r] = new pt(Wt, r, t);
                        },
                        emit: function(e, t, r) {
                            var n = s(e);
                            Gt[n] ? (Gt[n].emit(t, r), "destroy" === t && delete Gt[n]) : f.error("A monitor for `" + n + "` has not been initialized.");
                        },
                        checkDoNotTrack: p,
                        log: f,
                        utils: Mt,
                        events: Bt,
                        WINDOW_HIDDEN: !1,
                        WINDOW_UNLOADING: !1
                    };
                    Object.assign(Wt, Qt), void 0 !== a() && "function" == typeof a().addEventListener && a().addEventListener("pagehide", function(e) {
                        e.persisted || (Wt.WINDOW_UNLOADING = !0);
                    }, !1);
                    var Vt = Wt;
                },
                655: function(e, t, r) {
                    var n, a;
                    function i(e) {
                        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        }, i(e);
                    /*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */ }
                    !function(o) {
                        var s = !1;
                        if (void 0 === (a = "function" == typeof (n = o) ? n.call(t, r, t, e) : n) || (e.exports = a), s = !0, "object" === i(t) && (e.exports = o(), s = !0), !s) {
                            var u = window.Cookies, l = window.Cookies = o();
                            l.noConflict = function() {
                                return window.Cookies = u, l;
                            };
                        }
                    }(function() {
                        var e = function() {
                            for(var e = 0, t = {}; e < arguments.length; e++){
                                var r = arguments[e];
                                for(var n in r)t[n] = r[n];
                            }
                            return t;
                        };
                        return function t(r) {
                            function n(t, a, i) {
                                var o;
                                if ("undefined" != typeof document) {
                                    if (arguments.length > 1) {
                                        if ("number" == typeof (i = e({
                                            path: "/"
                                        }, n.defaults, i)).expires) {
                                            var s = new Date;
                                            s.setMilliseconds(s.getMilliseconds() + 864e5 * i.expires), i.expires = s;
                                        }
                                        try {
                                            o = JSON.stringify(a), /^[\{\[]/.test(o) && (a = o);
                                        } catch (e) {}
                                        return a = r.write ? r.write(a, t) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [
                                            t,
                                            "=",
                                            a,
                                            i.expires ? "; expires=" + i.expires.toUTCString() : "",
                                            i.path ? "; path=" + i.path : "",
                                            i.domain ? "; domain=" + i.domain : "",
                                            i.secure ? "; secure" : ""
                                        ].join("");
                                    }
                                    t || (o = {});
                                    for(var u = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, c = 0; c < u.length; c++){
                                        var d = u[c].split("="), f = d.slice(1).join("=");
                                        '"' === f.charAt(0) && (f = f.slice(1, -1));
                                        try {
                                            var p = d[0].replace(l, decodeURIComponent);
                                            if (f = r.read ? r.read(f, p) : r(f, p) || f.replace(l, decodeURIComponent), this.json) try {
                                                f = JSON.parse(f);
                                            } catch (e) {}
                                            if (t === p) {
                                                o = f;
                                                break;
                                            }
                                            t || (o[p] = f);
                                        } catch (e) {}
                                    }
                                    return o;
                                }
                            }
                            return n.set = n, n.get = function(e) {
                                return n.call(n, e);
                            }, n.getJSON = function() {
                                return n.apply({
                                    json: !0
                                }, [].slice.call(arguments));
                            }, n.defaults = {}, n.remove = function(t, r) {
                                n(t, "", e(r, {
                                    expires: -1
                                }));
                            }, n.withConverter = t, n;
                        }(function() {});
                    });
                },
                153: function(e, t, r) {
                    var n, a = void 0 !== r.g ? r.g : "undefined" != typeof window ? window : {}, i = r(558);
                    "undefined" != typeof document ? n = document : (n = a["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = a["__GLOBAL_DOCUMENT_CACHE@4"] = i), e.exports = n;
                },
                48: function(e, t, r) {
                    var n;
                    n = "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}, e.exports = n;
                },
                678: function(e) {
                    var t = 9007199254740991, r = "[object Arguments]", n = "[object Function]", a = "[object GeneratorFunction]", i = /^(?:0|[1-9]\d*)$/;
                    function o(e, t, r) {
                        switch(r.length){
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2]);
                        }
                        return e.apply(t, r);
                    }
                    var s, u, l = Object.prototype, c = l.hasOwnProperty, d = l.toString, f = l.propertyIsEnumerable, p = (s = Object.keys, u = Object, function(e) {
                        return s(u(e));
                    }), h = Math.max, _ = !f.call({
                        valueOf: 1
                    }, "valueOf");
                    function v(e, t) {
                        var n = w(e) || function(e) {
                            return function(e) {
                                return function(e) {
                                    return !!e && "object" == typeof e;
                                }(e) && T(e);
                            }(e) && c.call(e, "callee") && (!f.call(e, "callee") || d.call(e) == r);
                        }(e) ? function(e, t) {
                            for(var r = -1, n = Array(e); ++r < e;)n[r] = t(r);
                            return n;
                        }(e.length, String) : [], a = n.length, i = !!a;
                        for(var o in e)!t && !c.call(e, o) || i && ("length" == o || y(o, a)) || n.push(o);
                        return n;
                    }
                    function m(e, t, r) {
                        var n = e[t];
                        c.call(e, t) && g(n, r) && (void 0 !== r || t in e) || (e[t] = r);
                    }
                    function y(e, r) {
                        return !!(r = null == r ? t : r) && ("number" == typeof e || i.test(e)) && e > -1 && e % 1 == 0 && e < r;
                    }
                    function b(e) {
                        var t = e && e.constructor;
                        return e === ("function" == typeof t && t.prototype || l);
                    }
                    function g(e, t) {
                        return e === t || e != e && t != t;
                    }
                    var w = Array.isArray;
                    function T(e) {
                        return null != e && function(e) {
                            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= t;
                        }(e.length) && !function(e) {
                            var t = k(e) ? d.call(e) : "";
                            return t == n || t == a;
                        }(e);
                    }
                    function k(e) {
                        var t = typeof e;
                        return !!e && ("object" == t || "function" == t);
                    }
                    var E, x = (E = function(e, t) {
                        if (_ || b(t) || T(t)) !function(e, t, r, n) {
                            r || (r = {});
                            for(var a = -1, i = t.length; ++a < i;){
                                var o = t[a], s = n ? n(r[o], e[o], o, r, e) : void 0;
                                m(r, o, void 0 === s ? e[o] : s);
                            }
                        }(t, function(e) {
                            return T(e) ? v(e) : function(e) {
                                if (!b(e)) return p(e);
                                var t = [];
                                for(var r in Object(e))c.call(e, r) && "constructor" != r && t.push(r);
                                return t;
                            }(e);
                        }(t), e);
                        else for(var r in t)c.call(t, r) && m(e, r, t[r]);
                    }, function(e, t) {
                        return t = h(void 0 === t ? e.length - 1 : t, 0), function() {
                            for(var r = arguments, n = -1, a = h(r.length - t, 0), i = Array(a); ++n < a;)i[n] = r[t + n];
                            n = -1;
                            for(var s = Array(t + 1); ++n < t;)s[n] = r[n];
                            return s[t] = i, o(e, this, s);
                        };
                    }(function(e, t) {
                        var r = -1, n = t.length, a = n > 1 ? t[n - 1] : void 0, i = n > 2 ? t[2] : void 0;
                        for(a = E.length > 3 && "function" == typeof a ? (n--, a) : void 0, i && function(e, t, r) {
                            if (!k(r)) return !1;
                            var n = typeof t;
                            return !!("number" == n ? T(r) && y(t, r.length) : "string" == n && (t in r)) && g(r[t], e);
                        }(t[0], t[1], i) && (a = n < 3 ? void 0 : a, n = 1), e = Object(e); ++r < n;){
                            var o = t[r];
                            o && E(e, o, r, a);
                        }
                        return e;
                    }));
                    e.exports = x;
                },
                640: function(e, t, r) {
                    var n, a;
                    !function(i, o) {
                        "use strict";
                        n = function() {
                            var e = function() {}, t = "undefined", r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent), n = [
                                "trace",
                                "debug",
                                "info",
                                "warn",
                                "error"
                            ];
                            function a(e, t) {
                                var r = e[t];
                                if ("function" == typeof r.bind) return r.bind(e);
                                try {
                                    return Function.prototype.bind.call(r, e);
                                } catch (t) {
                                    return function() {
                                        return Function.prototype.apply.apply(r, [
                                            e,
                                            arguments
                                        ]);
                                    };
                                }
                            }
                            function i() {
                                console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [
                                    console,
                                    arguments
                                ])), console.trace && console.trace();
                            }
                            function o(n) {
                                return "debug" === n && (n = "log"), typeof console !== t && ("trace" === n && r ? i : void 0 !== console[n] ? a(console, n) : void 0 !== console.log ? a(console, "log") : e);
                            }
                            function s(t, r) {
                                for(var a = 0; a < n.length; a++){
                                    var i = n[a];
                                    this[i] = a < t ? e : this.methodFactory(i, t, r);
                                }
                                this.log = this.debug;
                            }
                            function u(e, r, n) {
                                return function() {
                                    typeof console !== t && (s.call(this, r, n), this[e].apply(this, arguments));
                                };
                            }
                            function l(e, t, r) {
                                return o(e) || u.apply(this, arguments);
                            }
                            function c(e, r, a) {
                                var i, o = this;
                                r = null == r ? "WARN" : r;
                                var u = "loglevel";
                                function c(e) {
                                    var r = (n[e] || "silent").toUpperCase();
                                    if (typeof window !== t && u) {
                                        try {
                                            return void (window.localStorage[u] = r);
                                        } catch (e) {}
                                        try {
                                            window.document.cookie = encodeURIComponent(u) + "=" + r + ";";
                                        } catch (e) {}
                                    }
                                }
                                function d() {
                                    var e;
                                    if (typeof window !== t && u) {
                                        try {
                                            e = window.localStorage[u];
                                        } catch (e) {}
                                        if (typeof e === t) try {
                                            var r = window.document.cookie, n = r.indexOf(encodeURIComponent(u) + "=");
                                            -1 !== n && (e = /^([^;]+)/.exec(r.slice(n))[1]);
                                        } catch (e) {}
                                        return void 0 === o.levels[e] && (e = void 0), e;
                                    }
                                }
                                function f() {
                                    if (typeof window !== t && u) {
                                        try {
                                            return void window.localStorage.removeItem(u);
                                        } catch (e) {}
                                        try {
                                            window.document.cookie = encodeURIComponent(u) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                                        } catch (e) {}
                                    }
                                }
                                "string" == typeof e ? u += ":" + e : "symbol" == typeof e && (u = void 0), o.name = e, o.levels = {
                                    TRACE: 0,
                                    DEBUG: 1,
                                    INFO: 2,
                                    WARN: 3,
                                    ERROR: 4,
                                    SILENT: 5
                                }, o.methodFactory = a || l, o.getLevel = function() {
                                    return i;
                                }, o.setLevel = function(r, n) {
                                    if ("string" == typeof r && void 0 !== o.levels[r.toUpperCase()] && (r = o.levels[r.toUpperCase()]), !("number" == typeof r && r >= 0 && r <= o.levels.SILENT)) throw "log.setLevel() called with invalid level: " + r;
                                    if (i = r, !1 !== n && c(r), s.call(o, r, e), typeof console === t && r < o.levels.SILENT) return "No console available for logging";
                                }, o.setDefaultLevel = function(e) {
                                    r = e, d() || o.setLevel(e, !1);
                                }, o.resetLevel = function() {
                                    o.setLevel(r, !1), f();
                                }, o.enableAll = function(e) {
                                    o.setLevel(o.levels.TRACE, e);
                                }, o.disableAll = function(e) {
                                    o.setLevel(o.levels.SILENT, e);
                                };
                                var p = d();
                                null == p && (p = r), o.setLevel(p, !1);
                            }
                            var d = new c, f = {};
                            d.getLogger = function(e) {
                                if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                                var t = f[e];
                                return t || (t = f[e] = new c(e, d.getLevel(), d.methodFactory)), t;
                            };
                            var p = typeof window !== t ? window.log : void 0;
                            return d.noConflict = function() {
                                return typeof window !== t && window.log === d && (window.log = p), d;
                            }, d.getLoggers = function() {
                                return f;
                            }, d.default = d, d;
                        }, void 0 === (a = "function" == typeof n ? n.call(t, r, t, e) : n) || (e.exports = a);
                    }();
                },
                375: function(e, t) {
                    "use strict";
                    var r = Object.prototype.hasOwnProperty;
                    function n(e) {
                        try {
                            return decodeURIComponent(e.replace(/\+/g, " "));
                        } catch (e) {
                            return null;
                        }
                    }
                    function a(e) {
                        try {
                            return encodeURIComponent(e);
                        } catch (e) {
                            return null;
                        }
                    }
                    t.stringify = function(e, t) {
                        t = t || "";
                        var n, i, o = [];
                        for(i in "string" != typeof t && (t = "?"), e)if (r.call(e, i)) {
                            if ((n = e[i]) || null != n && !isNaN(n) || (n = ""), i = a(i), n = a(n), null === i || null === n) continue;
                            o.push(i + "=" + n);
                        }
                        return o.length ? t + o.join("&") : "";
                    }, t.parse = function(e) {
                        for(var t, r = /([^=?#&]+)=?([^&]*)/g, a = {}; t = r.exec(e);){
                            var i = n(t[1]), o = n(t[2]);
                            null === i || null === o || i in a || (a[i] = o);
                        }
                        return a;
                    };
                },
                558: function() {}
            }, t = {};
            function r(n) {
                var a = t[n];
                if (void 0 !== a) return a.exports;
                var i = t[n] = {
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, r), i.exports;
            }
            return r.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default;
                } : function() {
                    return e;
                };
                return r.d(t, {
                    a: t
                }), t;
            }, r.d = function(e, t) {
                for(var n in t)r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                });
            }, r.g = function() {
                if ("object" == typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")();
                } catch (e) {
                    if ("object" == typeof window) return window;
                }
            }(), r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, r(80);
        }();
    }, module.exports = t();
    window.mux = t();
}();

},{}]},["hToTX"], null, "parcelRequire0a42")

//# sourceMappingURL=index.js.map
