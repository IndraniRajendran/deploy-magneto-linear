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
})({"j1MJY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "bebc91dccb5f5641";
module.bundle.HMR_BUNDLE_ID = "d9a7920d8dff32a8";
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

},{}],"fk4Mj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>TenProvider);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _tenStore = require("./helpers/ten-store");
var _messengerLink = require("./helpers/MessengerLink");
var _messengers = require("./helpers/Messengers");
var _providerUtils = require("../provider-utils");
var _utils = require("./helpers/utils");
var _tenApi = require("./ten-services/ten-api");
var _tenAuth = require("./ten-services/ten-auth");
var _liveGoogleDai = require("./ten-services/live-google-dai");
var _liveGoogleDaiDefault = parcelHelpers.interopDefault(_liveGoogleDai);
var _tealiumBridge = require("./analytics/TealiumBridge");
var _tealiumBridgeDefault = parcelHelpers.interopDefault(_tealiumBridge);
var _oztamBridge = require("./analytics/OztamBridge");
var _oztamBridgeDefault = parcelHelpers.interopDefault(_oztamBridge);
class TenProvider {
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
        const { glassConfigure: { brand: deviceBrand, version: deviceOSVersion, model: deviceModel }, uuid: deviceId } = deviceInfo;
        const { connectionType: networkConnectionType } = glassContentOptions;
        let channelId;
        let stateCode;
        try {
            var _channelInfo_region;
            const channelInfo = JSON.parse(providerId);
            if (!channelInfo.id) throw new Error();
            channelId = channelInfo.id;
            if ([
                "nsw",
                "qld",
                "wa",
                "nt",
                "sa",
                "act",
                "vic",
                "tas"
            ].includes((_channelInfo_region = channelInfo.region) === null || _channelInfo_region === void 0 ? void 0 : _channelInfo_region.toLowerCase())) stateCode = channelInfo.region.toUpperCase();
        } catch (err) {
            throw new (0, _providerUtils.MLEError)("Could not parse 10Play channelID", (0, _providerUtils.ErrorTypes).CHANNEL_MAP);
        }
        let refreshToken, alternativeToken, fmsResponse, fmsResponseTimestamp;
        try {
            const tenAuthData = JSON.parse(atob(authToken));
            const { refreshToken: inputRefreshToken, alternativeToken: inputAltToken, fmsResponse: fmsRes, fmsResponseTimestamp: fmsResTimestamp } = tenAuthData;
            if (!inputAltToken || !inputRefreshToken) throw new Error();
            refreshToken = inputRefreshToken;
            alternativeToken = inputAltToken;
            fmsResponse = fmsRes;
            fmsResponseTimestamp = fmsResTimestamp;
        } catch (e) {
            throw new (0, _providerUtils.MLEError)("Could not parse TEN auth data", (0, _providerUtils.ErrorTypes).GENERIC);
        }
        console.info("[acc] TEN received startup data", {
            authData: {
                refreshToken,
                alternativeToken
            },
            glassAssetLocator,
            glassAssetLocatorParsed: {
                provider,
                providerId
            },
            glassContentOptions,
            deviceInfo
        });
        console.info(`[acc] Accedo version ${(0, _tenStore.Store).appVersion}, parent app version ${deviceInfo.appVersion}, player version ${deviceInfo.playerVersion}`);
        (0, _tenStore.Store).deviceId = deviceId;
        (0, _tenStore.Store).deviceBrand = deviceBrand;
        (0, _tenStore.Store).devicePlatform = "SoIP"; // hardcode until firebolt is sunsetted
        (0, _tenStore.Store).deviceModel = "Xi1"; // hardcode until firebolt is sunsetted
        (0, _tenStore.Store).deviceFirmwareVersion = deviceOSVersion;
        (0, _tenStore.Store).appIsRunning = true;
        (0, _tenStore.Store).fmsResponse = fmsResponse;
        (0, _tenStore.Store).fmsResponseTimestamp = fmsResponseTimestamp;
        if (networkConnectionType.toLowerCase() === "ethernet") (0, _tenStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).LAN;
        else if (networkConnectionType.toLowerCase() === "wifi") (0, _tenStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).WIFI;
        // init tealium here so API startup errors can be tracked
        (0, _tealiumBridgeDefault.default).init();
        // need app config for user endpoint
        // Expect errors to be thrown from subpromises
        await Promise.all([
            (0, _tenApi.tryGetAndSetUserRegion)(stateCode),
            (0, _tenApi.getAndSetAppConfig)(),
            (0, _tenApi.tryGetAndSetIpaddress)()
        ]);
        // App config request has given us a Tealium API base url
        (0, _tealiumBridgeDefault.default).refreshApiBase();
        await (0, _tenAuth.authApiBundle)(refreshToken, alternativeToken);
        const liveData = await (0, _tenApi.getPlaybackInfo)(channelId);
        // need user info, app config and playback info to get source url
        const sourceUrl = await (0, _tenApi.getSourceUrlFromGoogle)(liveData);
        console.log(`[acc] passing back url ${sourceUrl} after ${(performance.now() - start) / 1000}s`);
        return {
            aampInitConfigOverrides: (0, _objectSpread._)({}, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.aampInitConfigRemoteOverrides),
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
        (0, _liveGoogleDaiDefault.default).init();
        (0, _oztamBridgeDefault.default).init();
    }
    monitoringTeardown() {
        console.log("[acc] call monitoringTeardown");
        if (this.messengerLink && this.videoElement) this.messengerLink.unlinkVideoElementListeners(this.videoElement);
        (0, _messengers.Messengers).appTeardown$.send();
        Object.keys((0, _messengers.Messengers)).forEach((key)=>(0, _messengers.Messengers)[key].reset());
        (0, _tenStore.Store).appIsRunning = false;
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","./helpers/ten-store":"koGVC","./helpers/MessengerLink":"e8t11","./helpers/Messengers":"jglQH","../provider-utils":"jTFkH","./helpers/utils":"5u5wB","./ten-services/ten-api":"fjPlo","./ten-services/ten-auth":"85FFm","./ten-services/live-google-dai":"aIbeQ","./analytics/TealiumBridge":"euX8m","./analytics/OztamBridge":"223vq","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9kWBJ":[function(require,module,exports) {
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

},{"./_define_property.js":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"koGVC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Store", ()=>Store);
var _utils = require("./utils");
var _packageJson = require("../package.json");
var _packageJsonDefault = parcelHelpers.interopDefault(_packageJson);
const tenStagingConfigKey = "au.com.ten_USE_STAGING_CONFIG";
// run this in debugger to set staging config, then reload
// localStorage.setItem("au.com.ten_USE_STAGING_CONFIG", "true");
const useProdConfig = localStorage.getItem(tenStagingConfigKey) !== "true";
const Store = {
    auth: {
        // matches token refresh response type
        accessToken: "",
        alternativeToken: "",
        expiresAt: -1,
        expiresIn: -1,
        memberEmailHash: "",
        memberId: "",
        n10adId: "",
        refreshToken: ""
    },
    appVersion: (0, _packageJsonDefault.default).version,
    deviceId: "",
    deviceModel: "",
    deviceBrand: "",
    devicePlatform: "",
    deviceMake: "foxtelglass",
    deviceFirmwareVersion: "",
    appIsRunning: true,
    useProdConfig,
    deviceNetworkConnection: (0, _utils.NetworkConnectionType).UNKNOWN,
    ApiConfig: useProdConfig ? {
        apiBaseUrl: "https://10play.com.au",
        apiKey: "8e6bfd4e4e797fe9888277a25f21b401",
        regionServiceUrl: "https://10play.com.au/geo-web",
        bvodRequestUrl: "https://realtime-demos.oztam.com.au",
        fmsRequestUrl: "https://fms.viacomcbs.digital/lookup",
        apiVersionTag: "v1",
        systemName: "foxtel-glass",
        manufacturer: "ctv_foxtel",
        ozTamUrl: "https://deliver.oztam.com.au/api/meter"
    } : {
        apiBaseUrl: "https://test.10play.com.au",
        apiKey: "8e6bfd4e4e797fe9888277a25f21b401",
        regionServiceUrl: "https://test.10play.com.au/geo-web",
        bvodRequestUrl: "https://realtime-demos.oztam.com.au",
        fmsRequestUrl: "https://fms.viacomcbs.digital/lookup",
        apiVersionTag: "v1",
        systemName: "foxtel-glass",
        manufacturer: "ctv_foxtel",
        ozTamUrl: "https://sdeliver.oztam.com.au/api/meter"
    },
    AppConfig: null,
    ipAddress: {
        ip: "0.0.0.0",
        status: "unknown"
    },
    isFreewheelEnabled: ()=>{
        const { "freewheel enabled": freewheelEnabled } = Store.AppConfig.experiments || {};
        const isFreeWheelEnabled = (freewheelEnabled === null || freewheelEnabled === void 0 ? void 0 : freewheelEnabled.enabled) || true;
        return isFreeWheelEnabled;
    },
    UserInfo: null,
    region: {
        allow: false,
        state: "NSW"
    }
};

},{"./utils":"5u5wB","../package.json":"GjrMk","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"5u5wB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FetchError", ()=>FetchError);
parcelHelpers.export(exports, "NetworkConnectionType", ()=>NetworkConnectionType);
parcelHelpers.export(exports, "PlayerStates", ()=>PlayerStates);
parcelHelpers.export(exports, "OztamEventType", ()=>OztamEventType);
parcelHelpers.export(exports, "generateUUID", ()=>generateUUID);
parcelHelpers.export(exports, "AsyncFunctionQueue", ()=>AsyncFunctionQueue);
var _defineProperty = require("@swc/helpers/_/_define_property");
class FetchError extends Error {
    constructor(message, status){
        super(message);
        (0, _defineProperty._)(this, "status", void 0);
        this.status = status;
        Object.setPrototypeOf(this, FetchError.prototype);
    }
}
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"GjrMk":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"au.com.ten","version":"1.0.49","description":"","main":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"author":"","license":"ISC","dependencies":{}}');

},{}],"e8t11":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","./utils":"5u5wB","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"jglQH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messengers", ()=>Messengers);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _messenger = require("./Messenger");
var _utils = require("./utils");
class MessengersClass {
    constructor(){
        // TEN specific
        (0, _defineProperty._)(this, "streamReady$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "googleDaiResponse$", new (0, _messenger.Messenger)(null));
        (0, _defineProperty._)(this, "tealiumTrackError$", new (0, _messenger.Messenger)(null));
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
        (0, _defineProperty._)(this, "setBVODParams$", new (0, _messenger.Messenger)([]));
    }
}
const Messengers = new MessengersClass();

},{"@swc/helpers/_/_define_property":"9kWBJ","./Messenger":"2R5ws","./utils":"5u5wB","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"2R5ws":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"fjPlo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendTenApiRequest", ()=>sendTenApiRequest);
parcelHelpers.export(exports, "getLiveChannelData", ()=>getLiveChannelData);
parcelHelpers.export(exports, "getPlaybackInfo", ()=>getPlaybackInfo);
parcelHelpers.export(exports, "getSourceUrlFromGoogle", ()=>getSourceUrlFromGoogle);
parcelHelpers.export(exports, "tryGetAndSetIpaddress", ()=>tryGetAndSetIpaddress);
parcelHelpers.export(exports, "tryGetAndSetUserRegion", ()=>tryGetAndSetUserRegion);
parcelHelpers.export(exports, "getAndSetAppConfig", ()=>getAndSetAppConfig);
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _cryptoJs = require("../lib/crypto-js");
var _cryptoJsDefault = parcelHelpers.interopDefault(_cryptoJs);
var _tenStore = require("../helpers/ten-store");
var _providerUtils = require("../../provider-utils");
var _tenAdParametersJs = require("./ten-ad-parameters.js");
var _messengersJs = require("../helpers/Messengers.js");
var _tenVozRequestJs = require("./ten-voz-request.js");
var _tealiumClientJs = require("../analytics/TealiumClient.js");
const HmacSHA256 = (0, _cryptoJsDefault.default).HmacSHA256;
const Hex = (0, _cryptoJsDefault.default).enc.Hex;
let playbackResponse;
let playbackAuthToken;
const sendTenApiRequest = async (url, method = "GET", header = {}, requestBody = null, returnResponseDataAndHeaders = false)=>{
    const key = Hex.parse((0, _tenStore.Store).ApiConfig.apiKey);
    const timestamp = Date.now().toString();
    const signature = Hex.stringify(HmacSHA256(`${timestamp}:${url}`, key));
    const signatureText = `${timestamp}_${signature}`;
    const token = (0, _tenStore.Store).auth.accessToken;
    let tokenHeader = {};
    if (token) tokenHeader = {
        Authorization: `Bearer ${token}`
    };
    const headers = {
        "X-N10-SIG": signatureText,
        "Content-Type": "application/json"
    };
    const options = {
        method,
        headers: (0, _objectSpread._)({}, headers, tokenHeader, header)
    };
    if (requestBody) options.body = JSON.stringify(requestBody);
    const tenRequest = await fetch(url, options);
    if (!tenRequest.ok) throw tenRequest;
    const responseData = await tenRequest.json();
    if (returnResponseDataAndHeaders) return {
        responseData,
        headers: tenRequest.headers
    };
    else return responseData;
};
const getLiveChannelData = async (channelId)=>{
    const liveTvEndpoint = (0, _tenStore.Store).AppConfig.liveTvEndpoint;
    let apiResponse;
    try {
        apiResponse = await sendTenApiRequest(liveTvEndpoint);
    } catch (err) {
        console.warn("[acc]", err);
        throw new (0, _providerUtils.MLEError)("Could not retrieve live channel from 10 API", (0, _providerUtils.ErrorTypes).PROVIDER, err.status);
    }
    return apiResponse.find((liveObj)=>liveObj.channel.id === channelId);
};
const getPlaybackInfo = async (channelId)=>{
    const matchingChannel = await getLiveChannelData(channelId);
    if (!matchingChannel) throw new (0, _providerUtils.MLEError)("Could not find matching live channel", (0, _providerUtils.ErrorTypes).CHANNEL_MAP);
    const liveShow = matchingChannel.liveShow;
    const playbackEndpoint = liveShow.playbackApiEndpoint;
    const isFreeWheelEnabled = (0, _tenStore.Store).isFreewheelEnabled();
    try {
        if (isFreeWheelEnabled) {
            const header = {
                "TP-AcceptFeature": "v1/fw;",
                "TP-Platform": "UAP"
            };
            const [, playbackData] = await Promise.all([
                (0, _tenVozRequestJs.sendVozStreamingRequest)(matchingChannel),
                sendTenApiRequest(playbackEndpoint, "GET", header, null, true)
            ]);
            playbackAuthToken = playbackData.headers.get("x-dai-auth");
            playbackResponse = playbackData.responseData;
        } else playbackResponse = await sendTenApiRequest(playbackEndpoint);
    } catch (error) {
        (0, _messengersJs.Messengers).tealiumTrackError$.send({
            errorCode: (0, _tealiumClientJs.TealiumErrorCode).FetchVideoPlayback,
            errorContext: (0, _tealiumClientJs.TealiumErrorContext).API,
            errorDetail: JSON.stringify(error),
            errorSource: playbackEndpoint,
            errorMessage: error.message
        });
        throw new (0, _providerUtils.MLEError)("Error retrieving live channel playback info", (0, _providerUtils.ErrorTypes).PROVIDER, error.status);
    }
    let liveStreamId = "<empty>";
    if (matchingChannel.channel.id === "TenShake" && liveShow.publisherId) liveStreamId = liveShow.publisherId;
    else if (playbackEndpoint) {
        const idOnEndpoint = playbackEndpoint.substring(playbackEndpoint.lastIndexOf("/") + 1);
        if (idOnEndpoint) liveStreamId = idOnEndpoint;
    }
    // set here so the ten shake logic is done once, can get in oztam etc
    matchingChannel.liveStreamId = liveStreamId;
    (0, _messengersJs.Messengers).streamReady$.send(matchingChannel);
    return {
        daiAssetKey: playbackResponse.dai.assetKey,
        liveShow,
        liveStreamId
    };
};
const getSourceUrlFromGoogle = async ({ daiAssetKey, liveStreamId, liveShow })=>{
    let postBody;
    const isFreeWheelEnabled = (0, _tenStore.Store).isFreewheelEnabled();
    const { fwLiveAdTag } = (0, _tenStore.Store).AppConfig.adsConfig || "";
    if (isFreeWheelEnabled) postBody = await (0, _tenAdParametersJs.buildFreewheelAdUrl)(fwLiveAdTag, liveShow.genre, (0, _messengersJs.Messengers).oztamSessionId$.getCurrentValue(), playbackAuthToken, liveStreamId);
    else {
        const adTagParameter = (0, _tenStore.Store).AppConfig.adsConfig.daiAdTagParameter;
        postBody = (0, _tenAdParametersJs.buildGoogleAdUrl)(adTagParameter, liveStreamId, liveShow.genre, (0, _messengersJs.Messengers).oztamSessionId$.getCurrentValue());
    }
    try {
        const daiUrl = `https://dai.google.com/linear/v1/hls/event/${daiAssetKey}/stream`;
        const daiRequest = await fetch(daiUrl, {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: postBody
        });
        const daiResponse = await daiRequest.json();
        (0, _messengersJs.Messengers).googleDaiResponse$.send(daiResponse);
        return daiResponse.stream_manifest;
    } catch (err) {
        (0, _messengersJs.Messengers).tealiumTrackError$.send({
            errorCode: (0, _tealiumClientJs.TealiumErrorCode).DaiLive,
            errorContext: (0, _tealiumClientJs.TealiumErrorContext).STREAM,
            errorDetail: JSON.stringify(err),
            errorSource: `assetKey: ${daiAssetKey}`,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            errorMessage: err.message
        });
        throw new (0, _providerUtils.MLEError)("Error retrieving Google DAI stream", (0, _providerUtils.ErrorTypes).PROVIDER, err.status);
    }
};
const tryGetAndSetIpaddress = async (foxtelRegionCode)=>{
    const ipAddressEndpoint = `${(0, _tenStore.Store).ApiConfig.apiBaseUrl}/whatismyip`;
    try {
        const ipAddressResponse = await sendTenApiRequest(ipAddressEndpoint);
        (0, _tenStore.Store).ipAddress = ipAddressResponse;
    } catch (e) {
        console.log(`[acc] Oztam failed to get IP, continuing with ${(0, _tenStore.Store).ipAddress.ip}`);
    }
};
const tryGetAndSetUserRegion = async (foxtelRegionCode)=>{
    if (foxtelRegionCode) {
        (0, _tenStore.Store).region = {
            allow: true,
            state: foxtelRegionCode
        };
        return;
    }
    try {
        const regionData = await sendTenApiRequest((0, _tenStore.Store).ApiConfig.regionServiceUrl);
        (0, _tenStore.Store).region = regionData;
    } catch (error) {
        console.warn("[acc] could not get region, using NSW as fallback", error.toString());
    }
};
const getAndSetAppConfig = async ()=>{
    const queryParams = `SystemName=${(0, _tenStore.Store).ApiConfig.systemName}&manufacturer=${(0, _tenStore.Store).ApiConfig.manufacturer}`;
    const configUrl = `${(0, _tenStore.Store).ApiConfig.apiBaseUrl}/api/${(0, _tenStore.Store).ApiConfig.apiVersionTag}/config?${queryParams}`;
    try {
        const appConfig = await sendTenApiRequest(configUrl);
        (0, _tenStore.Store).AppConfig = appConfig;
    } catch (err) {
        (0, _messengersJs.Messengers).tealiumTrackError$.send({
            errorCode: (0, _tealiumClientJs.TealiumErrorCode).FetchAppConfig,
            errorContext: (0, _tealiumClientJs.TealiumErrorContext).API,
            errorDetail: JSON.stringify(err),
            errorSource: configUrl,
            errorMessage: ""
        });
        throw new (0, _providerUtils.MLEError)("Could not initialize with Ten App Config", (0, _providerUtils.ErrorTypes).PROVIDER, err.status);
    }
};

},{"@swc/helpers/_/_object_spread":"lupAG","../lib/crypto-js":"d0zm1","../helpers/ten-store":"koGVC","../../provider-utils":"jTFkH","./ten-ad-parameters.js":"jqtDd","../helpers/Messengers.js":"jglQH","./ten-voz-request.js":"bcz9h","../analytics/TealiumClient.js":"jraqm","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"d0zm1":[function(require,module,exports) {
/**
 * Minified by jsDelivr using Terser v5.7.1.
 * Original file: /npm/crypto-js@4.1.1/crypto-js.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */ var global = arguments[3];
!function(t, e) {
    module.exports = exports = e();
}(this, function() {
    var t, e, r, i, n, o, s, a, c = c || function(t, e) {
        var r;
        if ("undefined" != typeof window && window.crypto && (r = window.crypto), "undefined" != typeof self && self.crypto && (r = self.crypto), "undefined" != typeof globalThis && globalThis.crypto && (r = globalThis.crypto), !r && "undefined" != typeof window && window.msCrypto && (r = window.msCrypto), !r && "undefined" != typeof global && global.crypto && (r = global.crypto), !r && true) try {
            r = require("5336a9016045a2ce");
        } catch (t) {}
        var i = function() {
            if (r) {
                if ("function" == typeof r.getRandomValues) try {
                    return r.getRandomValues(new Uint32Array(1))[0];
                } catch (t) {}
                if ("function" == typeof r.randomBytes) try {
                    return r.randomBytes(4).readInt32LE();
                } catch (t) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
        }, n = Object.create || function() {
            function t() {}
            return function(e) {
                var r;
                return t.prototype = e, r = new t, t.prototype = null, r;
            };
        }(), o = {}, s = o.lib = {}, a = s.Base = {
            extend: function(t) {
                var e = n(this);
                return t && e.mixIn(t), e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                    e.$super.init.apply(this, arguments);
                }), e.init.prototype = e, e.$super = this, e;
            },
            create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments), t;
            },
            init: function() {},
            mixIn: function(t) {
                for(var e in t)t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString);
            },
            clone: function() {
                return this.init.prototype.extend(this);
            }
        }, c = s.WordArray = a.extend({
            init: function(t, e) {
                t = this.words = t || [], this.sigBytes = null != e ? e : 4 * t.length;
            },
            toString: function(t) {
                return (t || l).stringify(this);
            },
            concat: function(t) {
                var e = this.words, r = t.words, i = this.sigBytes, n = t.sigBytes;
                if (this.clamp(), i % 4) for(var o = 0; o < n; o++){
                    var s = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    e[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8;
                }
                else for(var a = 0; a < n; a += 4)e[i + a >>> 2] = r[a >>> 2];
                return this.sigBytes += n, this;
            },
            clamp: function() {
                var e = this.words, r = this.sigBytes;
                e[r >>> 2] &= 4294967295 << 32 - r % 4 * 8, e.length = t.ceil(r / 4);
            },
            clone: function() {
                var t = a.clone.call(this);
                return t.words = this.words.slice(0), t;
            },
            random: function(t) {
                for(var e = [], r = 0; r < t; r += 4)e.push(i());
                return new c.init(e, t);
            }
        }), h = o.enc = {}, l = h.Hex = {
            stringify: function(t) {
                for(var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++){
                    var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
                }
                return i.join("");
            },
            parse: function(t) {
                for(var e = t.length, r = [], i = 0; i < e; i += 2)r[i >>> 3] |= parseInt(t.substr(i, 2), 16) << 24 - i % 8 * 4;
                return new c.init(r, e / 2);
            }
        }, f = h.Latin1 = {
            stringify: function(t) {
                for(var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n++){
                    var o = e[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                    i.push(String.fromCharCode(o));
                }
                return i.join("");
            },
            parse: function(t) {
                for(var e = t.length, r = [], i = 0; i < e; i++)r[i >>> 2] |= (255 & t.charCodeAt(i)) << 24 - i % 4 * 8;
                return new c.init(r, e);
            }
        }, u = h.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(f.stringify(t)));
                } catch (t) {
                    throw new Error("Malformed UTF-8 data");
                }
            },
            parse: function(t) {
                return f.parse(unescape(encodeURIComponent(t)));
            }
        }, d = s.BufferedBlockAlgorithm = a.extend({
            reset: function() {
                this._data = new c.init, this._nDataBytes = 0;
            },
            _append: function(t) {
                "string" == typeof t && (t = u.parse(t)), this._data.concat(t), this._nDataBytes += t.sigBytes;
            },
            _process: function(e) {
                var r, i = this._data, n = i.words, o = i.sigBytes, s = this.blockSize, a = o / (4 * s), h = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * s, l = t.min(4 * h, o);
                if (h) {
                    for(var f = 0; f < h; f += s)this._doProcessBlock(n, f);
                    r = n.splice(0, h), i.sigBytes -= l;
                }
                return new c.init(r, l);
            },
            clone: function() {
                var t = a.clone.call(this);
                return t._data = this._data.clone(), t;
            },
            _minBufferSize: 0
        }), p = (s.Hasher = d.extend({
            cfg: a.extend(),
            init: function(t) {
                this.cfg = this.cfg.extend(t), this.reset();
            },
            reset: function() {
                d.reset.call(this), this._doReset();
            },
            update: function(t) {
                return this._append(t), this._process(), this;
            },
            finalize: function(t) {
                return t && this._append(t), this._doFinalize();
            },
            blockSize: 16,
            _createHelper: function(t) {
                return function(e, r) {
                    return new t.init(r).finalize(e);
                };
            },
            _createHmacHelper: function(t) {
                return function(e, r) {
                    return new p.HMAC.init(t, r).finalize(e);
                };
            }
        }), o.algo = {});
        return o;
    }(Math);
    return e = (t = c).lib, r = e.Base, i = e.WordArray, (n = t.x64 = {}).Word = r.extend({
        init: function(t, e) {
            this.high = t, this.low = e;
        }
    }), n.WordArray = r.extend({
        init: function(t, e) {
            t = this.words = t || [], this.sigBytes = null != e ? e : 8 * t.length;
        },
        toX32: function() {
            for(var t = this.words, e = t.length, r = [], n = 0; n < e; n++){
                var o = t[n];
                r.push(o.high), r.push(o.low);
            }
            return i.create(r, this.sigBytes);
        },
        clone: function() {
            for(var t = r.clone.call(this), e = t.words = this.words.slice(0), i = e.length, n = 0; n < i; n++)e[n] = e[n].clone();
            return t;
        }
    }), function() {
        if ("function" == typeof ArrayBuffer) {
            var t = c.lib.WordArray, e = t.init;
            (t.init = function(t) {
                if (t instanceof ArrayBuffer && (t = new Uint8Array(t)), (t instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array) && (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)), t instanceof Uint8Array) {
                    for(var r = t.byteLength, i = [], n = 0; n < r; n++)i[n >>> 2] |= t[n] << 24 - n % 4 * 8;
                    e.call(this, i, r);
                } else e.apply(this, arguments);
            }).prototype = t;
        }
    }(), function() {
        var t = c, e = t.lib.WordArray, r = t.enc;
        r.Utf16 = r.Utf16BE = {
            stringify: function(t) {
                for(var e = t.words, r = t.sigBytes, i = [], n = 0; n < r; n += 2){
                    var o = e[n >>> 2] >>> 16 - n % 4 * 8 & 65535;
                    i.push(String.fromCharCode(o));
                }
                return i.join("");
            },
            parse: function(t) {
                for(var r = t.length, i = [], n = 0; n < r; n++)i[n >>> 1] |= t.charCodeAt(n) << 16 - n % 2 * 16;
                return e.create(i, 2 * r);
            }
        };
        function i(t) {
            return t << 8 & 4278255360 | t >>> 8 & 16711935;
        }
        r.Utf16LE = {
            stringify: function(t) {
                for(var e = t.words, r = t.sigBytes, n = [], o = 0; o < r; o += 2){
                    var s = i(e[o >>> 2] >>> 16 - o % 4 * 8 & 65535);
                    n.push(String.fromCharCode(s));
                }
                return n.join("");
            },
            parse: function(t) {
                for(var r = t.length, n = [], o = 0; o < r; o++)n[o >>> 1] |= i(t.charCodeAt(o) << 16 - o % 2 * 16);
                return e.create(n, 2 * r);
            }
        };
    }(), function() {
        var t = c, e = t.lib.WordArray;
        t.enc.Base64 = {
            stringify: function(t) {
                var e = t.words, r = t.sigBytes, i = this._map;
                t.clamp();
                for(var n = [], o = 0; o < r; o += 3)for(var s = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < r; a++)n.push(i.charAt(s >>> 6 * (3 - a) & 63));
                var c = i.charAt(64);
                if (c) for(; n.length % 4;)n.push(c);
                return n.join("");
            },
            parse: function(t) {
                var r = t.length, i = this._map, n = this._reverseMap;
                if (!n) {
                    n = this._reverseMap = [];
                    for(var o = 0; o < i.length; o++)n[i.charCodeAt(o)] = o;
                }
                var s = i.charAt(64);
                if (s) {
                    var a = t.indexOf(s);
                    -1 !== a && (r = a);
                }
                return function(t, r, i) {
                    for(var n = [], o = 0, s = 0; s < r; s++)if (s % 4) {
                        var a = i[t.charCodeAt(s - 1)] << s % 4 * 2 | i[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                        n[o >>> 2] |= a << 24 - o % 4 * 8, o++;
                    }
                    return e.create(n, o);
                }(t, r, n);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
    }(), function() {
        var t = c, e = t.lib.WordArray;
        t.enc.Base64url = {
            stringify: function(t, e = !0) {
                var r = t.words, i = t.sigBytes, n = e ? this._safe_map : this._map;
                t.clamp();
                for(var o = [], s = 0; s < i; s += 3)for(var a = (r[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (r[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | r[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, c = 0; c < 4 && s + .75 * c < i; c++)o.push(n.charAt(a >>> 6 * (3 - c) & 63));
                var h = n.charAt(64);
                if (h) for(; o.length % 4;)o.push(h);
                return o.join("");
            },
            parse: function(t, r = !0) {
                var i = t.length, n = r ? this._safe_map : this._map, o = this._reverseMap;
                if (!o) {
                    o = this._reverseMap = [];
                    for(var s = 0; s < n.length; s++)o[n.charCodeAt(s)] = s;
                }
                var a = n.charAt(64);
                if (a) {
                    var c = t.indexOf(a);
                    -1 !== c && (i = c);
                }
                return function(t, r, i) {
                    for(var n = [], o = 0, s = 0; s < r; s++)if (s % 4) {
                        var a = i[t.charCodeAt(s - 1)] << s % 4 * 2 | i[t.charCodeAt(s)] >>> 6 - s % 4 * 2;
                        n[o >>> 2] |= a << 24 - o % 4 * 8, o++;
                    }
                    return e.create(n, o);
                }(t, i, o);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
    }(), function(t) {
        var e = c, r = e.lib, i = r.WordArray, n = r.Hasher, o = e.algo, s = [];
        !function() {
            for(var e = 0; e < 64; e++)s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0;
        }();
        var a = o.MD5 = n.extend({
            _doReset: function() {
                this._hash = new i.init([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878
                ]);
            },
            _doProcessBlock: function(t, e) {
                for(var r = 0; r < 16; r++){
                    var i = e + r, n = t[i];
                    t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                }
                var o = this._hash.words, a = t[e + 0], c = t[e + 1], d = t[e + 2], p = t[e + 3], _ = t[e + 4], v = t[e + 5], y = t[e + 6], g = t[e + 7], B = t[e + 8], w = t[e + 9], k = t[e + 10], m = t[e + 11], S = t[e + 12], x = t[e + 13], b = t[e + 14], A = t[e + 15], H = o[0], z = o[1], C = o[2], D = o[3];
                H = h(H, z, C, D, a, 7, s[0]), D = h(D, H, z, C, c, 12, s[1]), C = h(C, D, H, z, d, 17, s[2]), z = h(z, C, D, H, p, 22, s[3]), H = h(H, z, C, D, _, 7, s[4]), D = h(D, H, z, C, v, 12, s[5]), C = h(C, D, H, z, y, 17, s[6]), z = h(z, C, D, H, g, 22, s[7]), H = h(H, z, C, D, B, 7, s[8]), D = h(D, H, z, C, w, 12, s[9]), C = h(C, D, H, z, k, 17, s[10]), z = h(z, C, D, H, m, 22, s[11]), H = h(H, z, C, D, S, 7, s[12]), D = h(D, H, z, C, x, 12, s[13]), C = h(C, D, H, z, b, 17, s[14]), H = l(H, z = h(z, C, D, H, A, 22, s[15]), C, D, c, 5, s[16]), D = l(D, H, z, C, y, 9, s[17]), C = l(C, D, H, z, m, 14, s[18]), z = l(z, C, D, H, a, 20, s[19]), H = l(H, z, C, D, v, 5, s[20]), D = l(D, H, z, C, k, 9, s[21]), C = l(C, D, H, z, A, 14, s[22]), z = l(z, C, D, H, _, 20, s[23]), H = l(H, z, C, D, w, 5, s[24]), D = l(D, H, z, C, b, 9, s[25]), C = l(C, D, H, z, p, 14, s[26]), z = l(z, C, D, H, B, 20, s[27]), H = l(H, z, C, D, x, 5, s[28]), D = l(D, H, z, C, d, 9, s[29]), C = l(C, D, H, z, g, 14, s[30]), H = f(H, z = l(z, C, D, H, S, 20, s[31]), C, D, v, 4, s[32]), D = f(D, H, z, C, B, 11, s[33]), C = f(C, D, H, z, m, 16, s[34]), z = f(z, C, D, H, b, 23, s[35]), H = f(H, z, C, D, c, 4, s[36]), D = f(D, H, z, C, _, 11, s[37]), C = f(C, D, H, z, g, 16, s[38]), z = f(z, C, D, H, k, 23, s[39]), H = f(H, z, C, D, x, 4, s[40]), D = f(D, H, z, C, a, 11, s[41]), C = f(C, D, H, z, p, 16, s[42]), z = f(z, C, D, H, y, 23, s[43]), H = f(H, z, C, D, w, 4, s[44]), D = f(D, H, z, C, S, 11, s[45]), C = f(C, D, H, z, A, 16, s[46]), H = u(H, z = f(z, C, D, H, d, 23, s[47]), C, D, a, 6, s[48]), D = u(D, H, z, C, g, 10, s[49]), C = u(C, D, H, z, b, 15, s[50]), z = u(z, C, D, H, v, 21, s[51]), H = u(H, z, C, D, S, 6, s[52]), D = u(D, H, z, C, p, 10, s[53]), C = u(C, D, H, z, k, 15, s[54]), z = u(z, C, D, H, c, 21, s[55]), H = u(H, z, C, D, B, 6, s[56]), D = u(D, H, z, C, A, 10, s[57]), C = u(C, D, H, z, y, 15, s[58]), z = u(z, C, D, H, x, 21, s[59]), H = u(H, z, C, D, _, 6, s[60]), D = u(D, H, z, C, m, 10, s[61]), C = u(C, D, H, z, d, 15, s[62]), z = u(z, C, D, H, w, 21, s[63]), o[0] = o[0] + H | 0, o[1] = o[1] + z | 0, o[2] = o[2] + C | 0, o[3] = o[3] + D | 0;
            },
            _doFinalize: function() {
                var e = this._data, r = e.words, i = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                r[n >>> 5] |= 128 << 24 - n % 32;
                var o = t.floor(i / 4294967296), s = i;
                r[15 + (n + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), r[14 + (n + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), e.sigBytes = 4 * (r.length + 1), this._process();
                for(var a = this._hash, c = a.words, h = 0; h < 4; h++){
                    var l = c[h];
                    c[h] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);
                }
                return a;
            },
            clone: function() {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(), t;
            }
        });
        function h(t, e, r, i, n, o, s) {
            var a = t + (e & r | ~e & i) + n + s;
            return (a << o | a >>> 32 - o) + e;
        }
        function l(t, e, r, i, n, o, s) {
            var a = t + (e & i | r & ~i) + n + s;
            return (a << o | a >>> 32 - o) + e;
        }
        function f(t, e, r, i, n, o, s) {
            var a = t + (e ^ r ^ i) + n + s;
            return (a << o | a >>> 32 - o) + e;
        }
        function u(t, e, r, i, n, o, s) {
            var a = t + (r ^ (e | ~i)) + n + s;
            return (a << o | a >>> 32 - o) + e;
        }
        e.MD5 = n._createHelper(a), e.HmacMD5 = n._createHmacHelper(a);
    }(Math), function() {
        var t = c, e = t.lib, r = e.WordArray, i = e.Hasher, n = t.algo, o = [], s = n.SHA1 = i.extend({
            _doReset: function() {
                this._hash = new r.init([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520
                ]);
            },
            _doProcessBlock: function(t, e) {
                for(var r = this._hash.words, i = r[0], n = r[1], s = r[2], a = r[3], c = r[4], h = 0; h < 80; h++){
                    if (h < 16) o[h] = 0 | t[e + h];
                    else {
                        var l = o[h - 3] ^ o[h - 8] ^ o[h - 14] ^ o[h - 16];
                        o[h] = l << 1 | l >>> 31;
                    }
                    var f = (i << 5 | i >>> 27) + c + o[h];
                    f += h < 20 ? 1518500249 + (n & s | ~n & a) : h < 40 ? 1859775393 + (n ^ s ^ a) : h < 60 ? (n & s | n & a | s & a) - 1894007588 : (n ^ s ^ a) - 899497514, c = a, a = s, s = n << 30 | n >>> 2, n = i, i = f;
                }
                r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + s | 0, r[3] = r[3] + a | 0, r[4] = r[4] + c | 0;
            },
            _doFinalize: function() {
                var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                return e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (i + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), e[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash;
            },
            clone: function() {
                var t = i.clone.call(this);
                return t._hash = this._hash.clone(), t;
            }
        });
        t.SHA1 = i._createHelper(s), t.HmacSHA1 = i._createHmacHelper(s);
    }(), function(t) {
        var e = c, r = e.lib, i = r.WordArray, n = r.Hasher, o = e.algo, s = [], a = [];
        !function() {
            function e(e) {
                for(var r = t.sqrt(e), i = 2; i <= r; i++)if (!(e % i)) return !1;
                return !0;
            }
            function r(t) {
                return 4294967296 * (t - (0 | t)) | 0;
            }
            for(var i = 2, n = 0; n < 64;)e(i) && (n < 8 && (s[n] = r(t.pow(i, .5))), a[n] = r(t.pow(i, 1 / 3)), n++), i++;
        }();
        var h = [], l = o.SHA256 = n.extend({
            _doReset: function() {
                this._hash = new i.init(s.slice(0));
            },
            _doProcessBlock: function(t, e) {
                for(var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], c = r[4], l = r[5], f = r[6], u = r[7], d = 0; d < 64; d++){
                    if (d < 16) h[d] = 0 | t[e + d];
                    else {
                        var p = h[d - 15], _ = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3, v = h[d - 2], y = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                        h[d] = _ + h[d - 7] + y + h[d - 16];
                    }
                    var g = i & n ^ i & o ^ n & o, B = (i << 30 | i >>> 2) ^ (i << 19 | i >>> 13) ^ (i << 10 | i >>> 22), w = u + ((c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25)) + (c & l ^ ~c & f) + a[d] + h[d];
                    u = f, f = l, l = c, c = s + w | 0, s = o, o = n, n = i, i = w + (B + g) | 0;
                }
                r[0] = r[0] + i | 0, r[1] = r[1] + n | 0, r[2] = r[2] + o | 0, r[3] = r[3] + s | 0, r[4] = r[4] + c | 0, r[5] = r[5] + l | 0, r[6] = r[6] + f | 0, r[7] = r[7] + u | 0;
            },
            _doFinalize: function() {
                var e = this._data, r = e.words, i = 8 * this._nDataBytes, n = 8 * e.sigBytes;
                return r[n >>> 5] |= 128 << 24 - n % 32, r[14 + (n + 64 >>> 9 << 4)] = t.floor(i / 4294967296), r[15 + (n + 64 >>> 9 << 4)] = i, e.sigBytes = 4 * r.length, this._process(), this._hash;
            },
            clone: function() {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(), t;
            }
        });
        e.SHA256 = n._createHelper(l), e.HmacSHA256 = n._createHmacHelper(l);
    }(Math), function() {
        var t = c, e = t.lib.WordArray, r = t.algo, i = r.SHA256, n = r.SHA224 = i.extend({
            _doReset: function() {
                this._hash = new e.init([
                    3238371032,
                    914150663,
                    812702999,
                    4144912697,
                    4290775857,
                    1750603025,
                    1694076839,
                    3204075428
                ]);
            },
            _doFinalize: function() {
                var t = i._doFinalize.call(this);
                return t.sigBytes -= 4, t;
            }
        });
        t.SHA224 = i._createHelper(n), t.HmacSHA224 = i._createHmacHelper(n);
    }(), function() {
        var t = c, e = t.lib.Hasher, r = t.x64, i = r.Word, n = r.WordArray, o = t.algo;
        function s() {
            return i.create.apply(i, arguments);
        }
        var a = [
            s(1116352408, 3609767458),
            s(1899447441, 602891725),
            s(3049323471, 3964484399),
            s(3921009573, 2173295548),
            s(961987163, 4081628472),
            s(1508970993, 3053834265),
            s(2453635748, 2937671579),
            s(2870763221, 3664609560),
            s(3624381080, 2734883394),
            s(310598401, 1164996542),
            s(607225278, 1323610764),
            s(1426881987, 3590304994),
            s(1925078388, 4068182383),
            s(2162078206, 991336113),
            s(2614888103, 633803317),
            s(3248222580, 3479774868),
            s(3835390401, 2666613458),
            s(4022224774, 944711139),
            s(264347078, 2341262773),
            s(604807628, 2007800933),
            s(770255983, 1495990901),
            s(1249150122, 1856431235),
            s(1555081692, 3175218132),
            s(1996064986, 2198950837),
            s(2554220882, 3999719339),
            s(2821834349, 766784016),
            s(2952996808, 2566594879),
            s(3210313671, 3203337956),
            s(3336571891, 1034457026),
            s(3584528711, 2466948901),
            s(113926993, 3758326383),
            s(338241895, 168717936),
            s(666307205, 1188179964),
            s(773529912, 1546045734),
            s(1294757372, 1522805485),
            s(1396182291, 2643833823),
            s(1695183700, 2343527390),
            s(1986661051, 1014477480),
            s(2177026350, 1206759142),
            s(2456956037, 344077627),
            s(2730485921, 1290863460),
            s(2820302411, 3158454273),
            s(3259730800, 3505952657),
            s(3345764771, 106217008),
            s(3516065817, 3606008344),
            s(3600352804, 1432725776),
            s(4094571909, 1467031594),
            s(275423344, 851169720),
            s(430227734, 3100823752),
            s(506948616, 1363258195),
            s(659060556, 3750685593),
            s(883997877, 3785050280),
            s(958139571, 3318307427),
            s(1322822218, 3812723403),
            s(1537002063, 2003034995),
            s(1747873779, 3602036899),
            s(1955562222, 1575990012),
            s(2024104815, 1125592928),
            s(2227730452, 2716904306),
            s(2361852424, 442776044),
            s(2428436474, 593698344),
            s(2756734187, 3733110249),
            s(3204031479, 2999351573),
            s(3329325298, 3815920427),
            s(3391569614, 3928383900),
            s(3515267271, 566280711),
            s(3940187606, 3454069534),
            s(4118630271, 4000239992),
            s(116418474, 1914138554),
            s(174292421, 2731055270),
            s(289380356, 3203993006),
            s(460393269, 320620315),
            s(685471733, 587496836),
            s(852142971, 1086792851),
            s(1017036298, 365543100),
            s(1126000580, 2618297676),
            s(1288033470, 3409855158),
            s(1501505948, 4234509866),
            s(1607167915, 987167468),
            s(1816402316, 1246189591)
        ], h = [];
        !function() {
            for(var t = 0; t < 80; t++)h[t] = s();
        }();
        var l = o.SHA512 = e.extend({
            _doReset: function() {
                this._hash = new n.init([
                    new i.init(1779033703, 4089235720),
                    new i.init(3144134277, 2227873595),
                    new i.init(1013904242, 4271175723),
                    new i.init(2773480762, 1595750129),
                    new i.init(1359893119, 2917565137),
                    new i.init(2600822924, 725511199),
                    new i.init(528734635, 4215389547),
                    new i.init(1541459225, 327033209)
                ]);
            },
            _doProcessBlock: function(t, e) {
                for(var r = this._hash.words, i = r[0], n = r[1], o = r[2], s = r[3], c = r[4], l = r[5], f = r[6], u = r[7], d = i.high, p = i.low, _ = n.high, v = n.low, y = o.high, g = o.low, B = s.high, w = s.low, k = c.high, m = c.low, S = l.high, x = l.low, b = f.high, A = f.low, H = u.high, z = u.low, C = d, D = p, E = _, R = v, M = y, F = g, P = B, W = w, O = k, I = m, U = S, K = x, X = b, L = A, j = H, T = z, N = 0; N < 80; N++){
                    var q, Z, V = h[N];
                    if (N < 16) Z = V.high = 0 | t[e + 2 * N], q = V.low = 0 | t[e + 2 * N + 1];
                    else {
                        var G = h[N - 15], J = G.high, Q = G.low, Y = (J >>> 1 | Q << 31) ^ (J >>> 8 | Q << 24) ^ J >>> 7, $ = (Q >>> 1 | J << 31) ^ (Q >>> 8 | J << 24) ^ (Q >>> 7 | J << 25), tt = h[N - 2], et = tt.high, rt = tt.low, it = (et >>> 19 | rt << 13) ^ (et << 3 | rt >>> 29) ^ et >>> 6, nt = (rt >>> 19 | et << 13) ^ (rt << 3 | et >>> 29) ^ (rt >>> 6 | et << 26), ot = h[N - 7], st = ot.high, at = ot.low, ct = h[N - 16], ht = ct.high, lt = ct.low;
                        Z = (Z = (Z = Y + st + ((q = $ + at) >>> 0 < $ >>> 0 ? 1 : 0)) + it + ((q += nt) >>> 0 < nt >>> 0 ? 1 : 0)) + ht + ((q += lt) >>> 0 < lt >>> 0 ? 1 : 0), V.high = Z, V.low = q;
                    }
                    var ft, ut = O & U ^ ~O & X, dt = I & K ^ ~I & L, pt = C & E ^ C & M ^ E & M, _t = D & R ^ D & F ^ R & F, vt = (C >>> 28 | D << 4) ^ (C << 30 | D >>> 2) ^ (C << 25 | D >>> 7), yt = (D >>> 28 | C << 4) ^ (D << 30 | C >>> 2) ^ (D << 25 | C >>> 7), gt = (O >>> 14 | I << 18) ^ (O >>> 18 | I << 14) ^ (O << 23 | I >>> 9), Bt = (I >>> 14 | O << 18) ^ (I >>> 18 | O << 14) ^ (I << 23 | O >>> 9), wt = a[N], kt = wt.high, mt = wt.low, St = j + gt + ((ft = T + Bt) >>> 0 < T >>> 0 ? 1 : 0), xt = yt + _t;
                    j = X, T = L, X = U, L = K, U = O, K = I, O = P + (St = (St = (St = St + ut + ((ft = ft + dt) >>> 0 < dt >>> 0 ? 1 : 0)) + kt + ((ft = ft + mt) >>> 0 < mt >>> 0 ? 1 : 0)) + Z + ((ft = ft + q) >>> 0 < q >>> 0 ? 1 : 0)) + ((I = W + ft | 0) >>> 0 < W >>> 0 ? 1 : 0) | 0, P = M, W = F, M = E, F = R, E = C, R = D, C = St + (vt + pt + (xt >>> 0 < yt >>> 0 ? 1 : 0)) + ((D = ft + xt | 0) >>> 0 < ft >>> 0 ? 1 : 0) | 0;
                }
                p = i.low = p + D, i.high = d + C + (p >>> 0 < D >>> 0 ? 1 : 0), v = n.low = v + R, n.high = _ + E + (v >>> 0 < R >>> 0 ? 1 : 0), g = o.low = g + F, o.high = y + M + (g >>> 0 < F >>> 0 ? 1 : 0), w = s.low = w + W, s.high = B + P + (w >>> 0 < W >>> 0 ? 1 : 0), m = c.low = m + I, c.high = k + O + (m >>> 0 < I >>> 0 ? 1 : 0), x = l.low = x + K, l.high = S + U + (x >>> 0 < K >>> 0 ? 1 : 0), A = f.low = A + L, f.high = b + X + (A >>> 0 < L >>> 0 ? 1 : 0), z = u.low = z + T, u.high = H + j + (z >>> 0 < T >>> 0 ? 1 : 0);
            },
            _doFinalize: function() {
                var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                return e[i >>> 5] |= 128 << 24 - i % 32, e[30 + (i + 128 >>> 10 << 5)] = Math.floor(r / 4294967296), e[31 + (i + 128 >>> 10 << 5)] = r, t.sigBytes = 4 * e.length, this._process(), this._hash.toX32();
            },
            clone: function() {
                var t = e.clone.call(this);
                return t._hash = this._hash.clone(), t;
            },
            blockSize: 32
        });
        t.SHA512 = e._createHelper(l), t.HmacSHA512 = e._createHmacHelper(l);
    }(), function() {
        var t = c, e = t.x64, r = e.Word, i = e.WordArray, n = t.algo, o = n.SHA512, s = n.SHA384 = o.extend({
            _doReset: function() {
                this._hash = new i.init([
                    new r.init(3418070365, 3238371032),
                    new r.init(1654270250, 914150663),
                    new r.init(2438529370, 812702999),
                    new r.init(355462360, 4144912697),
                    new r.init(1731405415, 4290775857),
                    new r.init(2394180231, 1750603025),
                    new r.init(3675008525, 1694076839),
                    new r.init(1203062813, 3204075428)
                ]);
            },
            _doFinalize: function() {
                var t = o._doFinalize.call(this);
                return t.sigBytes -= 16, t;
            }
        });
        t.SHA384 = o._createHelper(s), t.HmacSHA384 = o._createHmacHelper(s);
    }(), function(t) {
        var e = c, r = e.lib, i = r.WordArray, n = r.Hasher, o = e.x64.Word, s = e.algo, a = [], h = [], l = [];
        !function() {
            for(var t = 1, e = 0, r = 0; r < 24; r++){
                a[t + 5 * e] = (r + 1) * (r + 2) / 2 % 64;
                var i = (2 * t + 3 * e) % 5;
                t = e % 5, e = i;
            }
            for(t = 0; t < 5; t++)for(e = 0; e < 5; e++)h[t + 5 * e] = e + (2 * t + 3 * e) % 5 * 5;
            for(var n = 1, s = 0; s < 24; s++){
                for(var c = 0, f = 0, u = 0; u < 7; u++){
                    if (1 & n) {
                        var d = (1 << u) - 1;
                        d < 32 ? f ^= 1 << d : c ^= 1 << d - 32;
                    }
                    128 & n ? n = n << 1 ^ 113 : n <<= 1;
                }
                l[s] = o.create(c, f);
            }
        }();
        var f = [];
        !function() {
            for(var t = 0; t < 25; t++)f[t] = o.create();
        }();
        var u = s.SHA3 = n.extend({
            cfg: n.cfg.extend({
                outputLength: 512
            }),
            _doReset: function() {
                for(var t = this._state = [], e = 0; e < 25; e++)t[e] = new o.init;
                this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function(t, e) {
                for(var r = this._state, i = this.blockSize / 2, n = 0; n < i; n++){
                    var o = t[e + 2 * n], s = t[e + 2 * n + 1];
                    o = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), s = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), (z = r[n]).high ^= s, z.low ^= o;
                }
                for(var c = 0; c < 24; c++){
                    for(var u = 0; u < 5; u++){
                        for(var d = 0, p = 0, _ = 0; _ < 5; _++)d ^= (z = r[u + 5 * _]).high, p ^= z.low;
                        var v = f[u];
                        v.high = d, v.low = p;
                    }
                    for(u = 0; u < 5; u++){
                        var y = f[(u + 4) % 5], g = f[(u + 1) % 5], B = g.high, w = g.low;
                        for(d = y.high ^ (B << 1 | w >>> 31), p = y.low ^ (w << 1 | B >>> 31), _ = 0; _ < 5; _++)(z = r[u + 5 * _]).high ^= d, z.low ^= p;
                    }
                    for(var k = 1; k < 25; k++){
                        var m = (z = r[k]).high, S = z.low, x = a[k];
                        x < 32 ? (d = m << x | S >>> 32 - x, p = S << x | m >>> 32 - x) : (d = S << x - 32 | m >>> 64 - x, p = m << x - 32 | S >>> 64 - x);
                        var b = f[h[k]];
                        b.high = d, b.low = p;
                    }
                    var A = f[0], H = r[0];
                    A.high = H.high, A.low = H.low;
                    for(u = 0; u < 5; u++)for(_ = 0; _ < 5; _++){
                        var z = r[k = u + 5 * _], C = f[k], D = f[(u + 1) % 5 + 5 * _], E = f[(u + 2) % 5 + 5 * _];
                        z.high = C.high ^ ~D.high & E.high, z.low = C.low ^ ~D.low & E.low;
                    }
                    z = r[0];
                    var R = l[c];
                    z.high ^= R.high, z.low ^= R.low;
                }
            },
            _doFinalize: function() {
                var e = this._data, r = e.words, n = (this._nDataBytes, 8 * e.sigBytes), o = 32 * this.blockSize;
                r[n >>> 5] |= 1 << 24 - n % 32, r[(t.ceil((n + 1) / o) * o >>> 5) - 1] |= 128, e.sigBytes = 4 * r.length, this._process();
                for(var s = this._state, a = this.cfg.outputLength / 8, c = a / 8, h = [], l = 0; l < c; l++){
                    var f = s[l], u = f.high, d = f.low;
                    u = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8), d = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8), h.push(d), h.push(u);
                }
                return new i.init(h, a);
            },
            clone: function() {
                for(var t = n.clone.call(this), e = t._state = this._state.slice(0), r = 0; r < 25; r++)e[r] = e[r].clone();
                return t;
            }
        });
        e.SHA3 = n._createHelper(u), e.HmacSHA3 = n._createHmacHelper(u);
    }(Math), /** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/ function(t) {
        var e = c, r = e.lib, i = r.WordArray, n = r.Hasher, o = e.algo, s = i.create([
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            7,
            4,
            13,
            1,
            10,
            6,
            15,
            3,
            12,
            0,
            9,
            5,
            2,
            14,
            11,
            8,
            3,
            10,
            14,
            4,
            9,
            15,
            8,
            1,
            2,
            7,
            0,
            6,
            13,
            11,
            5,
            12,
            1,
            9,
            11,
            10,
            0,
            8,
            12,
            4,
            13,
            3,
            7,
            15,
            14,
            5,
            6,
            2,
            4,
            0,
            5,
            9,
            7,
            12,
            2,
            10,
            14,
            1,
            3,
            8,
            11,
            6,
            15,
            13
        ]), a = i.create([
            5,
            14,
            7,
            0,
            9,
            2,
            11,
            4,
            13,
            6,
            15,
            8,
            1,
            10,
            3,
            12,
            6,
            11,
            3,
            7,
            0,
            13,
            5,
            10,
            14,
            15,
            8,
            12,
            4,
            9,
            1,
            2,
            15,
            5,
            1,
            3,
            7,
            14,
            6,
            9,
            11,
            8,
            12,
            2,
            10,
            0,
            4,
            13,
            8,
            6,
            4,
            1,
            3,
            11,
            15,
            0,
            5,
            12,
            2,
            13,
            9,
            7,
            10,
            14,
            12,
            15,
            10,
            4,
            1,
            5,
            8,
            7,
            6,
            2,
            13,
            14,
            0,
            3,
            9,
            11
        ]), h = i.create([
            11,
            14,
            15,
            12,
            5,
            8,
            7,
            9,
            11,
            13,
            14,
            15,
            6,
            7,
            9,
            8,
            7,
            6,
            8,
            13,
            11,
            9,
            7,
            15,
            7,
            12,
            15,
            9,
            11,
            7,
            13,
            12,
            11,
            13,
            6,
            7,
            14,
            9,
            13,
            15,
            14,
            8,
            13,
            6,
            5,
            12,
            7,
            5,
            11,
            12,
            14,
            15,
            14,
            15,
            9,
            8,
            9,
            14,
            5,
            6,
            8,
            6,
            5,
            12,
            9,
            15,
            5,
            11,
            6,
            8,
            13,
            12,
            5,
            12,
            13,
            14,
            11,
            8,
            5,
            6
        ]), l = i.create([
            8,
            9,
            9,
            11,
            13,
            15,
            15,
            5,
            7,
            7,
            8,
            11,
            14,
            14,
            12,
            6,
            9,
            13,
            15,
            7,
            12,
            8,
            9,
            11,
            7,
            7,
            12,
            7,
            6,
            15,
            13,
            11,
            9,
            7,
            15,
            11,
            8,
            6,
            6,
            14,
            12,
            13,
            5,
            14,
            13,
            13,
            7,
            5,
            15,
            5,
            8,
            11,
            14,
            14,
            6,
            14,
            6,
            9,
            12,
            9,
            12,
            5,
            15,
            8,
            8,
            5,
            12,
            9,
            12,
            5,
            14,
            6,
            8,
            13,
            6,
            5,
            15,
            13,
            11,
            11
        ]), f = i.create([
            0,
            1518500249,
            1859775393,
            2400959708,
            2840853838
        ]), u = i.create([
            1352829926,
            1548603684,
            1836072691,
            2053994217,
            0
        ]), d = o.RIPEMD160 = n.extend({
            _doReset: function() {
                this._hash = i.create([
                    1732584193,
                    4023233417,
                    2562383102,
                    271733878,
                    3285377520
                ]);
            },
            _doProcessBlock: function(t, e) {
                for(var r = 0; r < 16; r++){
                    var i = e + r, n = t[i];
                    t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
                }
                var o, c, d, w, k, m, S, x, b, A, H, z = this._hash.words, C = f.words, D = u.words, E = s.words, R = a.words, M = h.words, F = l.words;
                m = o = z[0], S = c = z[1], x = d = z[2], b = w = z[3], A = k = z[4];
                for(r = 0; r < 80; r += 1)H = o + t[e + E[r]] | 0, H += r < 16 ? p(c, d, w) + C[0] : r < 32 ? _(c, d, w) + C[1] : r < 48 ? v(c, d, w) + C[2] : r < 64 ? y(c, d, w) + C[3] : g(c, d, w) + C[4], H = (H = B(H |= 0, M[r])) + k | 0, o = k, k = w, w = B(d, 10), d = c, c = H, H = m + t[e + R[r]] | 0, H += r < 16 ? g(S, x, b) + D[0] : r < 32 ? y(S, x, b) + D[1] : r < 48 ? v(S, x, b) + D[2] : r < 64 ? _(S, x, b) + D[3] : p(S, x, b) + D[4], H = (H = B(H |= 0, F[r])) + A | 0, m = A, A = b, b = B(x, 10), x = S, S = H;
                H = z[1] + d + b | 0, z[1] = z[2] + w + A | 0, z[2] = z[3] + k + m | 0, z[3] = z[4] + o + S | 0, z[4] = z[0] + c + x | 0, z[0] = H;
            },
            _doFinalize: function() {
                var t = this._data, e = t.words, r = 8 * this._nDataBytes, i = 8 * t.sigBytes;
                e[i >>> 5] |= 128 << 24 - i % 32, e[14 + (i + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t.sigBytes = 4 * (e.length + 1), this._process();
                for(var n = this._hash, o = n.words, s = 0; s < 5; s++){
                    var a = o[s];
                    o[s] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8);
                }
                return n;
            },
            clone: function() {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(), t;
            }
        });
        function p(t, e, r) {
            return t ^ e ^ r;
        }
        function _(t, e, r) {
            return t & e | ~t & r;
        }
        function v(t, e, r) {
            return (t | ~e) ^ r;
        }
        function y(t, e, r) {
            return t & r | e & ~r;
        }
        function g(t, e, r) {
            return t ^ (e | ~r);
        }
        function B(t, e) {
            return t << e | t >>> 32 - e;
        }
        e.RIPEMD160 = n._createHelper(d), e.HmacRIPEMD160 = n._createHmacHelper(d);
    }(Math), function() {
        var t = c, e = t.lib.Base, r = t.enc.Utf8;
        t.algo.HMAC = e.extend({
            init: function(t, e) {
                t = this._hasher = new t.init, "string" == typeof e && (e = r.parse(e));
                var i = t.blockSize, n = 4 * i;
                e.sigBytes > n && (e = t.finalize(e)), e.clamp();
                for(var o = this._oKey = e.clone(), s = this._iKey = e.clone(), a = o.words, c = s.words, h = 0; h < i; h++)a[h] ^= 1549556828, c[h] ^= 909522486;
                o.sigBytes = s.sigBytes = n, this.reset();
            },
            reset: function() {
                var t = this._hasher;
                t.reset(), t.update(this._iKey);
            },
            update: function(t) {
                return this._hasher.update(t), this;
            },
            finalize: function(t) {
                var e = this._hasher, r = e.finalize(t);
                return e.reset(), e.finalize(this._oKey.clone().concat(r));
            }
        });
    }(), function() {
        var t = c, e = t.lib, r = e.Base, i = e.WordArray, n = t.algo, o = n.SHA1, s = n.HMAC, a = n.PBKDF2 = r.extend({
            cfg: r.extend({
                keySize: 4,
                hasher: o,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t);
            },
            compute: function(t, e) {
                for(var r = this.cfg, n = s.create(r.hasher, t), o = i.create(), a = i.create([
                    1
                ]), c = o.words, h = a.words, l = r.keySize, f = r.iterations; c.length < l;){
                    var u = n.update(e).finalize(a);
                    n.reset();
                    for(var d = u.words, p = d.length, _ = u, v = 1; v < f; v++){
                        _ = n.finalize(_), n.reset();
                        for(var y = _.words, g = 0; g < p; g++)d[g] ^= y[g];
                    }
                    o.concat(u), h[0]++;
                }
                return o.sigBytes = 4 * l, o;
            }
        });
        t.PBKDF2 = function(t, e, r) {
            return a.create(r).compute(t, e);
        };
    }(), function() {
        var t = c, e = t.lib, r = e.Base, i = e.WordArray, n = t.algo, o = n.MD5, s = n.EvpKDF = r.extend({
            cfg: r.extend({
                keySize: 4,
                hasher: o,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t);
            },
            compute: function(t, e) {
                for(var r, n = this.cfg, o = n.hasher.create(), s = i.create(), a = s.words, c = n.keySize, h = n.iterations; a.length < c;){
                    r && o.update(r), r = o.update(t).finalize(e), o.reset();
                    for(var l = 1; l < h; l++)r = o.finalize(r), o.reset();
                    s.concat(r);
                }
                return s.sigBytes = 4 * c, s;
            }
        });
        t.EvpKDF = function(t, e, r) {
            return s.create(r).compute(t, e);
        };
    }(), c.lib.Cipher || function(t) {
        var e = c, r = e.lib, i = r.Base, n = r.WordArray, o = r.BufferedBlockAlgorithm, s = e.enc, a = (s.Utf8, s.Base64), h = e.algo.EvpKDF, l = r.Cipher = o.extend({
            cfg: i.extend(),
            createEncryptor: function(t, e) {
                return this.create(this._ENC_XFORM_MODE, t, e);
            },
            createDecryptor: function(t, e) {
                return this.create(this._DEC_XFORM_MODE, t, e);
            },
            init: function(t, e, r) {
                this.cfg = this.cfg.extend(r), this._xformMode = t, this._key = e, this.reset();
            },
            reset: function() {
                o.reset.call(this), this._doReset();
            },
            process: function(t) {
                return this._append(t), this._process();
            },
            finalize: function(t) {
                return t && this._append(t), this._doFinalize();
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function() {
                function t(t) {
                    return "string" == typeof t ? B : y;
                }
                return function(e) {
                    return {
                        encrypt: function(r, i, n) {
                            return t(i).encrypt(e, r, i, n);
                        },
                        decrypt: function(r, i, n) {
                            return t(i).decrypt(e, r, i, n);
                        }
                    };
                };
            }()
        }), f = (r.StreamCipher = l.extend({
            _doFinalize: function() {
                return this._process(!0);
            },
            blockSize: 1
        }), e.mode = {}), u = r.BlockCipherMode = i.extend({
            createEncryptor: function(t, e) {
                return this.Encryptor.create(t, e);
            },
            createDecryptor: function(t, e) {
                return this.Decryptor.create(t, e);
            },
            init: function(t, e) {
                this._cipher = t, this._iv = e;
            }
        }), d = f.CBC = function() {
            var t = u.extend();
            function e(t, e, r) {
                var i, n = this._iv;
                n ? (i = n, this._iv = undefined) : i = this._prevBlock;
                for(var o = 0; o < r; o++)t[e + o] ^= i[o];
            }
            return t.Encryptor = t.extend({
                processBlock: function(t, r) {
                    var i = this._cipher, n = i.blockSize;
                    e.call(this, t, r, n), i.encryptBlock(t, r), this._prevBlock = t.slice(r, r + n);
                }
            }), t.Decryptor = t.extend({
                processBlock: function(t, r) {
                    var i = this._cipher, n = i.blockSize, o = t.slice(r, r + n);
                    i.decryptBlock(t, r), e.call(this, t, r, n), this._prevBlock = o;
                }
            }), t;
        }(), p = (e.pad = {}).Pkcs7 = {
            pad: function(t, e) {
                for(var r = 4 * e, i = r - t.sigBytes % r, o = i << 24 | i << 16 | i << 8 | i, s = [], a = 0; a < i; a += 4)s.push(o);
                var c = n.create(s, i);
                t.concat(c);
            },
            unpad: function(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e;
            }
        }, _ = (r.BlockCipher = l.extend({
            cfg: l.cfg.extend({
                mode: d,
                padding: p
            }),
            reset: function() {
                var t;
                l.reset.call(this);
                var e = this.cfg, r = e.iv, i = e.mode;
                this._xformMode == this._ENC_XFORM_MODE ? t = i.createEncryptor : (t = i.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t ? this._mode.init(this, r && r.words) : (this._mode = t.call(i, this, r && r.words), this._mode.__creator = t);
            },
            _doProcessBlock: function(t, e) {
                this._mode.processBlock(t, e);
            },
            _doFinalize: function() {
                var t, e = this.cfg.padding;
                return this._xformMode == this._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), e.unpad(t)), t;
            },
            blockSize: 4
        }), r.CipherParams = i.extend({
            init: function(t) {
                this.mixIn(t);
            },
            toString: function(t) {
                return (t || this.formatter).stringify(this);
            }
        })), v = (e.format = {}).OpenSSL = {
            stringify: function(t) {
                var e = t.ciphertext, r = t.salt;
                return (r ? n.create([
                    1398893684,
                    1701076831
                ]).concat(r).concat(e) : e).toString(a);
            },
            parse: function(t) {
                var e, r = a.parse(t), i = r.words;
                return 1398893684 == i[0] && 1701076831 == i[1] && (e = n.create(i.slice(2, 4)), i.splice(0, 4), r.sigBytes -= 16), _.create({
                    ciphertext: r,
                    salt: e
                });
            }
        }, y = r.SerializableCipher = i.extend({
            cfg: i.extend({
                format: v
            }),
            encrypt: function(t, e, r, i) {
                i = this.cfg.extend(i);
                var n = t.createEncryptor(r, i), o = n.finalize(e), s = n.cfg;
                return _.create({
                    ciphertext: o,
                    key: r,
                    iv: s.iv,
                    algorithm: t,
                    mode: s.mode,
                    padding: s.padding,
                    blockSize: t.blockSize,
                    formatter: i.format
                });
            },
            decrypt: function(t, e, r, i) {
                return i = this.cfg.extend(i), e = this._parse(e, i.format), t.createDecryptor(r, i).finalize(e.ciphertext);
            },
            _parse: function(t, e) {
                return "string" == typeof t ? e.parse(t, this) : t;
            }
        }), g = (e.kdf = {}).OpenSSL = {
            execute: function(t, e, r, i) {
                i || (i = n.random(8));
                var o = h.create({
                    keySize: e + r
                }).compute(t, i), s = n.create(o.words.slice(e), 4 * r);
                return o.sigBytes = 4 * e, _.create({
                    key: o,
                    iv: s,
                    salt: i
                });
            }
        }, B = r.PasswordBasedCipher = y.extend({
            cfg: y.cfg.extend({
                kdf: g
            }),
            encrypt: function(t, e, r, i) {
                var n = (i = this.cfg.extend(i)).kdf.execute(r, t.keySize, t.ivSize);
                i.iv = n.iv;
                var o = y.encrypt.call(this, t, e, n.key, i);
                return o.mixIn(n), o;
            },
            decrypt: function(t, e, r, i) {
                i = this.cfg.extend(i), e = this._parse(e, i.format);
                var n = i.kdf.execute(r, t.keySize, t.ivSize, e.salt);
                return i.iv = n.iv, y.decrypt.call(this, t, e, n.key, i);
            }
        });
    }(), c.mode.CFB = function() {
        var t = c.lib.BlockCipherMode.extend();
        function e(t, e, r, i) {
            var n, o = this._iv;
            o ? (n = o.slice(0), this._iv = void 0) : n = this._prevBlock, i.encryptBlock(n, 0);
            for(var s = 0; s < r; s++)t[e + s] ^= n[s];
        }
        return t.Encryptor = t.extend({
            processBlock: function(t, r) {
                var i = this._cipher, n = i.blockSize;
                e.call(this, t, r, n, i), this._prevBlock = t.slice(r, r + n);
            }
        }), t.Decryptor = t.extend({
            processBlock: function(t, r) {
                var i = this._cipher, n = i.blockSize, o = t.slice(r, r + n);
                e.call(this, t, r, n, i), this._prevBlock = o;
            }
        }), t;
    }(), c.mode.CTR = (o = c.lib.BlockCipherMode.extend(), s = o.Encryptor = o.extend({
        processBlock: function(t, e) {
            var r = this._cipher, i = r.blockSize, n = this._iv, o = this._counter;
            n && (o = this._counter = n.slice(0), this._iv = void 0);
            var s = o.slice(0);
            r.encryptBlock(s, 0), o[i - 1] = o[i - 1] + 1 | 0;
            for(var a = 0; a < i; a++)t[e + a] ^= s[a];
        }
    }), o.Decryptor = s, o), /** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */ c.mode.CTRGladman = function() {
        var t = c.lib.BlockCipherMode.extend();
        function e(t) {
            if (255 == (t >> 24 & 255)) {
                var e = t >> 16 & 255, r = t >> 8 & 255, i = 255 & t;
                255 === e ? (e = 0, 255 === r ? (r = 0, 255 === i ? i = 0 : ++i) : ++r) : ++e, t = 0, t += e << 16, t += r << 8, t += i;
            } else t += 16777216;
            return t;
        }
        var r = t.Encryptor = t.extend({
            processBlock: function(t, r) {
                var i = this._cipher, n = i.blockSize, o = this._iv, s = this._counter;
                o && (s = this._counter = o.slice(0), this._iv = void 0), function(t) {
                    0 === (t[0] = e(t[0])) && (t[1] = e(t[1]));
                }(s);
                var a = s.slice(0);
                i.encryptBlock(a, 0);
                for(var c = 0; c < n; c++)t[r + c] ^= a[c];
            }
        });
        return t.Decryptor = r, t;
    }(), c.mode.OFB = function() {
        var t = c.lib.BlockCipherMode.extend(), e = t.Encryptor = t.extend({
            processBlock: function(t, e) {
                var r = this._cipher, i = r.blockSize, n = this._iv, o = this._keystream;
                n && (o = this._keystream = n.slice(0), this._iv = void 0), r.encryptBlock(o, 0);
                for(var s = 0; s < i; s++)t[e + s] ^= o[s];
            }
        });
        return t.Decryptor = e, t;
    }(), c.mode.ECB = ((a = c.lib.BlockCipherMode.extend()).Encryptor = a.extend({
        processBlock: function(t, e) {
            this._cipher.encryptBlock(t, e);
        }
    }), a.Decryptor = a.extend({
        processBlock: function(t, e) {
            this._cipher.decryptBlock(t, e);
        }
    }), a), c.pad.AnsiX923 = {
        pad: function(t, e) {
            var r = t.sigBytes, i = 4 * e, n = i - r % i, o = r + n - 1;
            t.clamp(), t.words[o >>> 2] |= n << 24 - o % 4 * 8, t.sigBytes += n;
        },
        unpad: function(t) {
            var e = 255 & t.words[t.sigBytes - 1 >>> 2];
            t.sigBytes -= e;
        }
    }, c.pad.Iso10126 = {
        pad: function(t, e) {
            var r = 4 * e, i = r - t.sigBytes % r;
            t.concat(c.lib.WordArray.random(i - 1)).concat(c.lib.WordArray.create([
                i << 24
            ], 1));
        },
        unpad: function(t) {
            var e = 255 & t.words[t.sigBytes - 1 >>> 2];
            t.sigBytes -= e;
        }
    }, c.pad.Iso97971 = {
        pad: function(t, e) {
            t.concat(c.lib.WordArray.create([
                2147483648
            ], 1)), c.pad.ZeroPadding.pad(t, e);
        },
        unpad: function(t) {
            c.pad.ZeroPadding.unpad(t), t.sigBytes--;
        }
    }, c.pad.ZeroPadding = {
        pad: function(t, e) {
            var r = 4 * e;
            t.clamp(), t.sigBytes += r - (t.sigBytes % r || r);
        },
        unpad: function(t) {
            var e = t.words, r = t.sigBytes - 1;
            for(r = t.sigBytes - 1; r >= 0; r--)if (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
                t.sigBytes = r + 1;
                break;
            }
        }
    }, c.pad.NoPadding = {
        pad: function() {},
        unpad: function() {}
    }, function(t) {
        var e = c, r = e.lib.CipherParams, i = e.enc.Hex;
        e.format.Hex = {
            stringify: function(t) {
                return t.ciphertext.toString(i);
            },
            parse: function(t) {
                var e = i.parse(t);
                return r.create({
                    ciphertext: e
                });
            }
        };
    }(), function() {
        var t = c, e = t.lib.BlockCipher, r = t.algo, i = [], n = [], o = [], s = [], a = [], h = [], l = [], f = [], u = [], d = [];
        !function() {
            for(var t = [], e = 0; e < 256; e++)t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            var r = 0, c = 0;
            for(e = 0; e < 256; e++){
                var p = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4;
                p = p >>> 8 ^ 255 & p ^ 99, i[r] = p, n[p] = r;
                var _ = t[r], v = t[_], y = t[v], g = 257 * t[p] ^ 16843008 * p;
                o[r] = g << 24 | g >>> 8, s[r] = g << 16 | g >>> 16, a[r] = g << 8 | g >>> 24, h[r] = g;
                g = 16843009 * y ^ 65537 * v ^ 257 * _ ^ 16843008 * r;
                l[p] = g << 24 | g >>> 8, f[p] = g << 16 | g >>> 16, u[p] = g << 8 | g >>> 24, d[p] = g, r ? (r = _ ^ t[t[t[y ^ _]]], c ^= t[t[c]]) : r = c = 1;
            }
        }();
        var p = [
            0,
            1,
            2,
            4,
            8,
            16,
            32,
            64,
            128,
            27,
            54
        ], _ = r.AES = e.extend({
            _doReset: function() {
                if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for(var t = this._keyPriorReset = this._key, e = t.words, r = t.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), o = this._keySchedule = [], s = 0; s < n; s++)s < r ? o[s] = e[s] : (h = o[s - 1], s % r ? r > 6 && s % r == 4 && (h = i[h >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[255 & h]) : (h = i[(h = h << 8 | h >>> 24) >>> 24] << 24 | i[h >>> 16 & 255] << 16 | i[h >>> 8 & 255] << 8 | i[255 & h], h ^= p[s / r | 0] << 24), o[s] = o[s - r] ^ h);
                    for(var a = this._invKeySchedule = [], c = 0; c < n; c++){
                        s = n - c;
                        if (c % 4) var h = o[s];
                        else h = o[s - 4];
                        a[c] = c < 4 || s <= 4 ? h : l[i[h >>> 24]] ^ f[i[h >>> 16 & 255]] ^ u[i[h >>> 8 & 255]] ^ d[i[255 & h]];
                    }
                }
            },
            encryptBlock: function(t, e) {
                this._doCryptBlock(t, e, this._keySchedule, o, s, a, h, i);
            },
            decryptBlock: function(t, e) {
                var r = t[e + 1];
                t[e + 1] = t[e + 3], t[e + 3] = r, this._doCryptBlock(t, e, this._invKeySchedule, l, f, u, d, n);
                r = t[e + 1];
                t[e + 1] = t[e + 3], t[e + 3] = r;
            },
            _doCryptBlock: function(t, e, r, i, n, o, s, a) {
                for(var c = this._nRounds, h = t[e] ^ r[0], l = t[e + 1] ^ r[1], f = t[e + 2] ^ r[2], u = t[e + 3] ^ r[3], d = 4, p = 1; p < c; p++){
                    var _ = i[h >>> 24] ^ n[l >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[255 & u] ^ r[d++], v = i[l >>> 24] ^ n[f >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[255 & h] ^ r[d++], y = i[f >>> 24] ^ n[u >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[255 & l] ^ r[d++], g = i[u >>> 24] ^ n[h >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[255 & f] ^ r[d++];
                    h = _, l = v, f = y, u = g;
                }
                _ = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & u]) ^ r[d++], v = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & h]) ^ r[d++], y = (a[f >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ r[d++], g = (a[u >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ r[d++];
                t[e] = _, t[e + 1] = v, t[e + 2] = y, t[e + 3] = g;
            },
            keySize: 8
        });
        t.AES = e._createHelper(_);
    }(), function() {
        var t = c, e = t.lib, r = e.WordArray, i = e.BlockCipher, n = t.algo, o = [
            57,
            49,
            41,
            33,
            25,
            17,
            9,
            1,
            58,
            50,
            42,
            34,
            26,
            18,
            10,
            2,
            59,
            51,
            43,
            35,
            27,
            19,
            11,
            3,
            60,
            52,
            44,
            36,
            63,
            55,
            47,
            39,
            31,
            23,
            15,
            7,
            62,
            54,
            46,
            38,
            30,
            22,
            14,
            6,
            61,
            53,
            45,
            37,
            29,
            21,
            13,
            5,
            28,
            20,
            12,
            4
        ], s = [
            14,
            17,
            11,
            24,
            1,
            5,
            3,
            28,
            15,
            6,
            21,
            10,
            23,
            19,
            12,
            4,
            26,
            8,
            16,
            7,
            27,
            20,
            13,
            2,
            41,
            52,
            31,
            37,
            47,
            55,
            30,
            40,
            51,
            45,
            33,
            48,
            44,
            49,
            39,
            56,
            34,
            53,
            46,
            42,
            50,
            36,
            29,
            32
        ], a = [
            1,
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            15,
            17,
            19,
            21,
            23,
            25,
            27,
            28
        ], h = [
            {
                0: 8421888,
                268435456: 32768,
                536870912: 8421378,
                805306368: 2,
                1073741824: 512,
                1342177280: 8421890,
                1610612736: 8389122,
                1879048192: 8388608,
                2147483648: 514,
                2415919104: 8389120,
                2684354560: 33280,
                2952790016: 8421376,
                3221225472: 32770,
                3489660928: 8388610,
                3758096384: 0,
                4026531840: 33282,
                134217728: 0,
                402653184: 8421890,
                671088640: 33282,
                939524096: 32768,
                1207959552: 8421888,
                1476395008: 512,
                1744830464: 8421378,
                2013265920: 2,
                2281701376: 8389120,
                2550136832: 33280,
                2818572288: 8421376,
                3087007744: 8389122,
                3355443200: 8388610,
                3623878656: 32770,
                3892314112: 514,
                4160749568: 8388608,
                1: 32768,
                268435457: 2,
                536870913: 8421888,
                805306369: 8388608,
                1073741825: 8421378,
                1342177281: 33280,
                1610612737: 512,
                1879048193: 8389122,
                2147483649: 8421890,
                2415919105: 8421376,
                2684354561: 8388610,
                2952790017: 33282,
                3221225473: 514,
                3489660929: 8389120,
                3758096385: 32770,
                4026531841: 0,
                134217729: 8421890,
                402653185: 8421376,
                671088641: 8388608,
                939524097: 512,
                1207959553: 32768,
                1476395009: 8388610,
                1744830465: 2,
                2013265921: 33282,
                2281701377: 32770,
                2550136833: 8389122,
                2818572289: 514,
                3087007745: 8421888,
                3355443201: 8389120,
                3623878657: 0,
                3892314113: 33280,
                4160749569: 8421378
            },
            {
                0: 1074282512,
                16777216: 16384,
                33554432: 524288,
                50331648: 1074266128,
                67108864: 1073741840,
                83886080: 1074282496,
                100663296: 1073758208,
                117440512: 16,
                134217728: 540672,
                150994944: 1073758224,
                167772160: 1073741824,
                184549376: 540688,
                201326592: 524304,
                218103808: 0,
                234881024: 16400,
                251658240: 1074266112,
                8388608: 1073758208,
                25165824: 540688,
                41943040: 16,
                58720256: 1073758224,
                75497472: 1074282512,
                92274688: 1073741824,
                109051904: 524288,
                125829120: 1074266128,
                142606336: 524304,
                159383552: 0,
                176160768: 16384,
                192937984: 1074266112,
                209715200: 1073741840,
                226492416: 540672,
                243269632: 1074282496,
                260046848: 16400,
                268435456: 0,
                285212672: 1074266128,
                301989888: 1073758224,
                318767104: 1074282496,
                335544320: 1074266112,
                352321536: 16,
                369098752: 540688,
                385875968: 16384,
                402653184: 16400,
                419430400: 524288,
                436207616: 524304,
                452984832: 1073741840,
                469762048: 540672,
                486539264: 1073758208,
                503316480: 1073741824,
                520093696: 1074282512,
                276824064: 540688,
                293601280: 524288,
                310378496: 1074266112,
                327155712: 16384,
                343932928: 1073758208,
                360710144: 1074282512,
                377487360: 16,
                394264576: 1073741824,
                411041792: 1074282496,
                427819008: 1073741840,
                444596224: 1073758224,
                461373440: 524304,
                478150656: 0,
                494927872: 16400,
                511705088: 1074266128,
                528482304: 540672
            },
            {
                0: 260,
                1048576: 0,
                2097152: 67109120,
                3145728: 65796,
                4194304: 65540,
                5242880: 67108868,
                6291456: 67174660,
                7340032: 67174400,
                8388608: 67108864,
                9437184: 67174656,
                10485760: 65792,
                11534336: 67174404,
                12582912: 67109124,
                13631488: 65536,
                14680064: 4,
                15728640: 256,
                524288: 67174656,
                1572864: 67174404,
                2621440: 0,
                3670016: 67109120,
                4718592: 67108868,
                5767168: 65536,
                6815744: 65540,
                7864320: 260,
                8912896: 4,
                9961472: 256,
                11010048: 67174400,
                12058624: 65796,
                13107200: 65792,
                14155776: 67109124,
                15204352: 67174660,
                16252928: 67108864,
                16777216: 67174656,
                17825792: 65540,
                18874368: 65536,
                19922944: 67109120,
                20971520: 256,
                22020096: 67174660,
                23068672: 67108868,
                24117248: 0,
                25165824: 67109124,
                26214400: 67108864,
                27262976: 4,
                28311552: 65792,
                29360128: 67174400,
                30408704: 260,
                31457280: 65796,
                32505856: 67174404,
                17301504: 67108864,
                18350080: 260,
                19398656: 67174656,
                20447232: 0,
                21495808: 65540,
                22544384: 67109120,
                23592960: 256,
                24641536: 67174404,
                25690112: 65536,
                26738688: 67174660,
                27787264: 65796,
                28835840: 67108868,
                29884416: 67109124,
                30932992: 67174400,
                31981568: 4,
                33030144: 65792
            },
            {
                0: 2151682048,
                65536: 2147487808,
                131072: 4198464,
                196608: 2151677952,
                262144: 0,
                327680: 4198400,
                393216: 2147483712,
                458752: 4194368,
                524288: 2147483648,
                589824: 4194304,
                655360: 64,
                720896: 2147487744,
                786432: 2151678016,
                851968: 4160,
                917504: 4096,
                983040: 2151682112,
                32768: 2147487808,
                98304: 64,
                163840: 2151678016,
                229376: 2147487744,
                294912: 4198400,
                360448: 2151682112,
                425984: 0,
                491520: 2151677952,
                557056: 4096,
                622592: 2151682048,
                688128: 4194304,
                753664: 4160,
                819200: 2147483648,
                884736: 4194368,
                950272: 4198464,
                1015808: 2147483712,
                1048576: 4194368,
                1114112: 4198400,
                1179648: 2147483712,
                1245184: 0,
                1310720: 4160,
                1376256: 2151678016,
                1441792: 2151682048,
                1507328: 2147487808,
                1572864: 2151682112,
                1638400: 2147483648,
                1703936: 2151677952,
                1769472: 4198464,
                1835008: 2147487744,
                1900544: 4194304,
                1966080: 64,
                2031616: 4096,
                1081344: 2151677952,
                1146880: 2151682112,
                1212416: 0,
                1277952: 4198400,
                1343488: 4194368,
                1409024: 2147483648,
                1474560: 2147487808,
                1540096: 64,
                1605632: 2147483712,
                1671168: 4096,
                1736704: 2147487744,
                1802240: 2151678016,
                1867776: 4160,
                1933312: 2151682048,
                1998848: 4194304,
                2064384: 4198464
            },
            {
                0: 128,
                4096: 17039360,
                8192: 262144,
                12288: 536870912,
                16384: 537133184,
                20480: 16777344,
                24576: 553648256,
                28672: 262272,
                32768: 16777216,
                36864: 537133056,
                40960: 536871040,
                45056: 553910400,
                49152: 553910272,
                53248: 0,
                57344: 17039488,
                61440: 553648128,
                2048: 17039488,
                6144: 553648256,
                10240: 128,
                14336: 17039360,
                18432: 262144,
                22528: 537133184,
                26624: 553910272,
                30720: 536870912,
                34816: 537133056,
                38912: 0,
                43008: 553910400,
                47104: 16777344,
                51200: 536871040,
                55296: 553648128,
                59392: 16777216,
                63488: 262272,
                65536: 262144,
                69632: 128,
                73728: 536870912,
                77824: 553648256,
                81920: 16777344,
                86016: 553910272,
                90112: 537133184,
                94208: 16777216,
                98304: 553910400,
                102400: 553648128,
                106496: 17039360,
                110592: 537133056,
                114688: 262272,
                118784: 536871040,
                122880: 0,
                126976: 17039488,
                67584: 553648256,
                71680: 16777216,
                75776: 17039360,
                79872: 537133184,
                83968: 536870912,
                88064: 17039488,
                92160: 128,
                96256: 553910272,
                100352: 262272,
                104448: 553910400,
                108544: 0,
                112640: 553648128,
                116736: 16777344,
                120832: 262144,
                124928: 537133056,
                129024: 536871040
            },
            {
                0: 268435464,
                256: 8192,
                512: 270532608,
                768: 270540808,
                1024: 268443648,
                1280: 2097152,
                1536: 2097160,
                1792: 268435456,
                2048: 0,
                2304: 268443656,
                2560: 2105344,
                2816: 8,
                3072: 270532616,
                3328: 2105352,
                3584: 8200,
                3840: 270540800,
                128: 270532608,
                384: 270540808,
                640: 8,
                896: 2097152,
                1152: 2105352,
                1408: 268435464,
                1664: 268443648,
                1920: 8200,
                2176: 2097160,
                2432: 8192,
                2688: 268443656,
                2944: 270532616,
                3200: 0,
                3456: 270540800,
                3712: 2105344,
                3968: 268435456,
                4096: 268443648,
                4352: 270532616,
                4608: 270540808,
                4864: 8200,
                5120: 2097152,
                5376: 268435456,
                5632: 268435464,
                5888: 2105344,
                6144: 2105352,
                6400: 0,
                6656: 8,
                6912: 270532608,
                7168: 8192,
                7424: 268443656,
                7680: 270540800,
                7936: 2097160,
                4224: 8,
                4480: 2105344,
                4736: 2097152,
                4992: 268435464,
                5248: 268443648,
                5504: 8200,
                5760: 270540808,
                6016: 270532608,
                6272: 270540800,
                6528: 270532616,
                6784: 8192,
                7040: 2105352,
                7296: 2097160,
                7552: 0,
                7808: 268435456,
                8064: 268443656
            },
            {
                0: 1048576,
                16: 33555457,
                32: 1024,
                48: 1049601,
                64: 34604033,
                80: 0,
                96: 1,
                112: 34603009,
                128: 33555456,
                144: 1048577,
                160: 33554433,
                176: 34604032,
                192: 34603008,
                208: 1025,
                224: 1049600,
                240: 33554432,
                8: 34603009,
                24: 0,
                40: 33555457,
                56: 34604032,
                72: 1048576,
                88: 33554433,
                104: 33554432,
                120: 1025,
                136: 1049601,
                152: 33555456,
                168: 34603008,
                184: 1048577,
                200: 1024,
                216: 34604033,
                232: 1,
                248: 1049600,
                256: 33554432,
                272: 1048576,
                288: 33555457,
                304: 34603009,
                320: 1048577,
                336: 33555456,
                352: 34604032,
                368: 1049601,
                384: 1025,
                400: 34604033,
                416: 1049600,
                432: 1,
                448: 0,
                464: 34603008,
                480: 33554433,
                496: 1024,
                264: 1049600,
                280: 33555457,
                296: 34603009,
                312: 1,
                328: 33554432,
                344: 1048576,
                360: 1025,
                376: 34604032,
                392: 33554433,
                408: 34603008,
                424: 0,
                440: 34604033,
                456: 1049601,
                472: 1024,
                488: 33555456,
                504: 1048577
            },
            {
                0: 134219808,
                1: 131072,
                2: 134217728,
                3: 32,
                4: 131104,
                5: 134350880,
                6: 134350848,
                7: 2048,
                8: 134348800,
                9: 134219776,
                10: 133120,
                11: 134348832,
                12: 2080,
                13: 0,
                14: 134217760,
                15: 133152,
                2147483648: 2048,
                2147483649: 134350880,
                2147483650: 134219808,
                2147483651: 134217728,
                2147483652: 134348800,
                2147483653: 133120,
                2147483654: 133152,
                2147483655: 32,
                2147483656: 134217760,
                2147483657: 2080,
                2147483658: 131104,
                2147483659: 134350848,
                2147483660: 0,
                2147483661: 134348832,
                2147483662: 134219776,
                2147483663: 131072,
                16: 133152,
                17: 134350848,
                18: 32,
                19: 2048,
                20: 134219776,
                21: 134217760,
                22: 134348832,
                23: 131072,
                24: 0,
                25: 131104,
                26: 134348800,
                27: 134219808,
                28: 134350880,
                29: 133120,
                30: 2080,
                31: 134217728,
                2147483664: 131072,
                2147483665: 2048,
                2147483666: 134348832,
                2147483667: 133152,
                2147483668: 32,
                2147483669: 134348800,
                2147483670: 134217728,
                2147483671: 134219808,
                2147483672: 134350880,
                2147483673: 134217760,
                2147483674: 134219776,
                2147483675: 0,
                2147483676: 133120,
                2147483677: 2080,
                2147483678: 131104,
                2147483679: 134350848
            }
        ], l = [
            4160749569,
            528482304,
            33030144,
            2064384,
            129024,
            8064,
            504,
            2147483679
        ], f = n.DES = i.extend({
            _doReset: function() {
                for(var t = this._key.words, e = [], r = 0; r < 56; r++){
                    var i = o[r] - 1;
                    e[r] = t[i >>> 5] >>> 31 - i % 32 & 1;
                }
                for(var n = this._subKeys = [], c = 0; c < 16; c++){
                    var h = n[c] = [], l = a[c];
                    for(r = 0; r < 24; r++)h[r / 6 | 0] |= e[(s[r] - 1 + l) % 28] << 31 - r % 6, h[4 + (r / 6 | 0)] |= e[28 + (s[r + 24] - 1 + l) % 28] << 31 - r % 6;
                    h[0] = h[0] << 1 | h[0] >>> 31;
                    for(r = 1; r < 7; r++)h[r] = h[r] >>> 4 * (r - 1) + 3;
                    h[7] = h[7] << 5 | h[7] >>> 27;
                }
                var f = this._invSubKeys = [];
                for(r = 0; r < 16; r++)f[r] = n[15 - r];
            },
            encryptBlock: function(t, e) {
                this._doCryptBlock(t, e, this._subKeys);
            },
            decryptBlock: function(t, e) {
                this._doCryptBlock(t, e, this._invSubKeys);
            },
            _doCryptBlock: function(t, e, r) {
                this._lBlock = t[e], this._rBlock = t[e + 1], u.call(this, 4, 252645135), u.call(this, 16, 65535), d.call(this, 2, 858993459), d.call(this, 8, 16711935), u.call(this, 1, 1431655765);
                for(var i = 0; i < 16; i++){
                    for(var n = r[i], o = this._lBlock, s = this._rBlock, a = 0, c = 0; c < 8; c++)a |= h[c][((s ^ n[c]) & l[c]) >>> 0];
                    this._lBlock = s, this._rBlock = o ^ a;
                }
                var f = this._lBlock;
                this._lBlock = this._rBlock, this._rBlock = f, u.call(this, 1, 1431655765), d.call(this, 8, 16711935), d.call(this, 2, 858993459), u.call(this, 16, 65535), u.call(this, 4, 252645135), t[e] = this._lBlock, t[e + 1] = this._rBlock;
            },
            keySize: 2,
            ivSize: 2,
            blockSize: 2
        });
        function u(t, e) {
            var r = (this._lBlock >>> t ^ this._rBlock) & e;
            this._rBlock ^= r, this._lBlock ^= r << t;
        }
        function d(t, e) {
            var r = (this._rBlock >>> t ^ this._lBlock) & e;
            this._lBlock ^= r, this._rBlock ^= r << t;
        }
        t.DES = i._createHelper(f);
        var p = n.TripleDES = i.extend({
            _doReset: function() {
                var t = this._key.words;
                if (2 !== t.length && 4 !== t.length && t.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                var e = t.slice(0, 2), i = t.length < 4 ? t.slice(0, 2) : t.slice(2, 4), n = t.length < 6 ? t.slice(0, 2) : t.slice(4, 6);
                this._des1 = f.createEncryptor(r.create(e)), this._des2 = f.createEncryptor(r.create(i)), this._des3 = f.createEncryptor(r.create(n));
            },
            encryptBlock: function(t, e) {
                this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e);
            },
            decryptBlock: function(t, e) {
                this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e);
            },
            keySize: 6,
            ivSize: 2,
            blockSize: 2
        });
        t.TripleDES = i._createHelper(p);
    }(), function() {
        var t = c, e = t.lib.StreamCipher, r = t.algo, i = r.RC4 = e.extend({
            _doReset: function() {
                for(var t = this._key, e = t.words, r = t.sigBytes, i = this._S = [], n = 0; n < 256; n++)i[n] = n;
                n = 0;
                for(var o = 0; n < 256; n++){
                    var s = n % r, a = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                    o = (o + i[n] + a) % 256;
                    var c = i[n];
                    i[n] = i[o], i[o] = c;
                }
                this._i = this._j = 0;
            },
            _doProcessBlock: function(t, e) {
                t[e] ^= n.call(this);
            },
            keySize: 8,
            ivSize: 0
        });
        function n() {
            for(var t = this._S, e = this._i, r = this._j, i = 0, n = 0; n < 4; n++){
                r = (r + t[e = (e + 1) % 256]) % 256;
                var o = t[e];
                t[e] = t[r], t[r] = o, i |= t[(t[e] + t[r]) % 256] << 24 - 8 * n;
            }
            return this._i = e, this._j = r, i;
        }
        t.RC4 = e._createHelper(i);
        var o = r.RC4Drop = i.extend({
            cfg: i.cfg.extend({
                drop: 192
            }),
            _doReset: function() {
                i._doReset.call(this);
                for(var t = this.cfg.drop; t > 0; t--)n.call(this);
            }
        });
        t.RC4Drop = e._createHelper(o);
    }(), function() {
        var t = c, e = t.lib.StreamCipher, r = t.algo, i = [], n = [], o = [], s = r.Rabbit = e.extend({
            _doReset: function() {
                for(var t = this._key.words, e = this.cfg.iv, r = 0; r < 4; r++)t[r] = 16711935 & (t[r] << 8 | t[r] >>> 24) | 4278255360 & (t[r] << 24 | t[r] >>> 8);
                var i = this._X = [
                    t[0],
                    t[3] << 16 | t[2] >>> 16,
                    t[1],
                    t[0] << 16 | t[3] >>> 16,
                    t[2],
                    t[1] << 16 | t[0] >>> 16,
                    t[3],
                    t[2] << 16 | t[1] >>> 16
                ], n = this._C = [
                    t[2] << 16 | t[2] >>> 16,
                    4294901760 & t[0] | 65535 & t[1],
                    t[3] << 16 | t[3] >>> 16,
                    4294901760 & t[1] | 65535 & t[2],
                    t[0] << 16 | t[0] >>> 16,
                    4294901760 & t[2] | 65535 & t[3],
                    t[1] << 16 | t[1] >>> 16,
                    4294901760 & t[3] | 65535 & t[0]
                ];
                this._b = 0;
                for(r = 0; r < 4; r++)a.call(this);
                for(r = 0; r < 8; r++)n[r] ^= i[r + 4 & 7];
                if (e) {
                    var o = e.words, s = o[0], c = o[1], h = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h;
                    n[0] ^= h, n[1] ^= f, n[2] ^= l, n[3] ^= u, n[4] ^= h, n[5] ^= f, n[6] ^= l, n[7] ^= u;
                    for(r = 0; r < 4; r++)a.call(this);
                }
            },
            _doProcessBlock: function(t, e) {
                var r = this._X;
                a.call(this), i[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, i[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, i[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, i[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
                for(var n = 0; n < 4; n++)i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8), t[e + n] ^= i[n];
            },
            blockSize: 4,
            ivSize: 2
        });
        function a() {
            for(var t = this._X, e = this._C, r = 0; r < 8; r++)n[r] = e[r];
            e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < n[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < n[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < n[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < n[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < n[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < n[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < n[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < n[7] >>> 0 ? 1 : 0;
            for(r = 0; r < 8; r++){
                var i = t[r] + e[r], s = 65535 & i, a = i >>> 16, c = ((s * s >>> 17) + s * a >>> 15) + a * a, h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                o[r] = c ^ h;
            }
            t[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, t[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, t[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, t[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, t[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, t[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, t[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, t[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        t.Rabbit = e._createHelper(s);
    }(), function() {
        var t = c, e = t.lib.StreamCipher, r = t.algo, i = [], n = [], o = [], s = r.RabbitLegacy = e.extend({
            _doReset: function() {
                var t = this._key.words, e = this.cfg.iv, r = this._X = [
                    t[0],
                    t[3] << 16 | t[2] >>> 16,
                    t[1],
                    t[0] << 16 | t[3] >>> 16,
                    t[2],
                    t[1] << 16 | t[0] >>> 16,
                    t[3],
                    t[2] << 16 | t[1] >>> 16
                ], i = this._C = [
                    t[2] << 16 | t[2] >>> 16,
                    4294901760 & t[0] | 65535 & t[1],
                    t[3] << 16 | t[3] >>> 16,
                    4294901760 & t[1] | 65535 & t[2],
                    t[0] << 16 | t[0] >>> 16,
                    4294901760 & t[2] | 65535 & t[3],
                    t[1] << 16 | t[1] >>> 16,
                    4294901760 & t[3] | 65535 & t[0]
                ];
                this._b = 0;
                for(var n = 0; n < 4; n++)a.call(this);
                for(n = 0; n < 8; n++)i[n] ^= r[n + 4 & 7];
                if (e) {
                    var o = e.words, s = o[0], c = o[1], h = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), l = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), f = h >>> 16 | 4294901760 & l, u = l << 16 | 65535 & h;
                    i[0] ^= h, i[1] ^= f, i[2] ^= l, i[3] ^= u, i[4] ^= h, i[5] ^= f, i[6] ^= l, i[7] ^= u;
                    for(n = 0; n < 4; n++)a.call(this);
                }
            },
            _doProcessBlock: function(t, e) {
                var r = this._X;
                a.call(this), i[0] = r[0] ^ r[5] >>> 16 ^ r[3] << 16, i[1] = r[2] ^ r[7] >>> 16 ^ r[5] << 16, i[2] = r[4] ^ r[1] >>> 16 ^ r[7] << 16, i[3] = r[6] ^ r[3] >>> 16 ^ r[1] << 16;
                for(var n = 0; n < 4; n++)i[n] = 16711935 & (i[n] << 8 | i[n] >>> 24) | 4278255360 & (i[n] << 24 | i[n] >>> 8), t[e + n] ^= i[n];
            },
            blockSize: 4,
            ivSize: 2
        });
        function a() {
            for(var t = this._X, e = this._C, r = 0; r < 8; r++)n[r] = e[r];
            e[0] = e[0] + 1295307597 + this._b | 0, e[1] = e[1] + 3545052371 + (e[0] >>> 0 < n[0] >>> 0 ? 1 : 0) | 0, e[2] = e[2] + 886263092 + (e[1] >>> 0 < n[1] >>> 0 ? 1 : 0) | 0, e[3] = e[3] + 1295307597 + (e[2] >>> 0 < n[2] >>> 0 ? 1 : 0) | 0, e[4] = e[4] + 3545052371 + (e[3] >>> 0 < n[3] >>> 0 ? 1 : 0) | 0, e[5] = e[5] + 886263092 + (e[4] >>> 0 < n[4] >>> 0 ? 1 : 0) | 0, e[6] = e[6] + 1295307597 + (e[5] >>> 0 < n[5] >>> 0 ? 1 : 0) | 0, e[7] = e[7] + 3545052371 + (e[6] >>> 0 < n[6] >>> 0 ? 1 : 0) | 0, this._b = e[7] >>> 0 < n[7] >>> 0 ? 1 : 0;
            for(r = 0; r < 8; r++){
                var i = t[r] + e[r], s = 65535 & i, a = i >>> 16, c = ((s * s >>> 17) + s * a >>> 15) + a * a, h = ((4294901760 & i) * i | 0) + ((65535 & i) * i | 0);
                o[r] = c ^ h;
            }
            t[0] = o[0] + (o[7] << 16 | o[7] >>> 16) + (o[6] << 16 | o[6] >>> 16) | 0, t[1] = o[1] + (o[0] << 8 | o[0] >>> 24) + o[7] | 0, t[2] = o[2] + (o[1] << 16 | o[1] >>> 16) + (o[0] << 16 | o[0] >>> 16) | 0, t[3] = o[3] + (o[2] << 8 | o[2] >>> 24) + o[1] | 0, t[4] = o[4] + (o[3] << 16 | o[3] >>> 16) + (o[2] << 16 | o[2] >>> 16) | 0, t[5] = o[5] + (o[4] << 8 | o[4] >>> 24) + o[3] | 0, t[6] = o[6] + (o[5] << 16 | o[5] >>> 16) + (o[4] << 16 | o[4] >>> 16) | 0, t[7] = o[7] + (o[6] << 8 | o[6] >>> 24) + o[5] | 0;
        }
        t.RabbitLegacy = e._createHelper(s);
    }(), c;
});

},{"5336a9016045a2ce":"9BBmc"}],"9BBmc":[function(require,module,exports) {
"use strict";

},{}],"jqtDd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAdParameters", ()=>getAdParameters);
parcelHelpers.export(exports, "buildFreewheelAdUrl", ()=>buildFreewheelAdUrl);
parcelHelpers.export(exports, "buildGoogleAdUrl", ()=>buildGoogleAdUrl);
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _tenStore = require("../helpers/ten-store");
var _messengers = require("../helpers/Messengers");
const getAdParameters = ()=>{
    var _Store_region;
    const baseParameters = {
        ge: "",
        gr: "",
        ppid: "",
        postcode: "",
        timeStamp: Math.floor(Date.now() / 1000),
        region: ((_Store_region = (0, _tenStore.Store).region) === null || _Store_region === void 0 ? void 0 : _Store_region.state) || "nsw",
        deviceId: (0, _tenStore.Store).deviceId,
        is_lat: "0",
        idtype: "dpid"
    };
    if (!(0, _tenStore.Store).UserInfo) return baseParameters;
    const { ge, gr, n10adId, postcode, memberId } = (0, _tenStore.Store).UserInfo;
    const ppid = n10adId || memberId || "";
    return (0, _objectSpreadProps._)((0, _objectSpread._)({}, baseParameters), {
        ge,
        gr,
        ppid,
        postcode
    });
};
const getFreewheelBVODParams = ()=>{
    const bvodResponseParams = (0, _messengers.Messengers).setBVODParams$.getCurrentValue();
    if (!(bvodResponseParams === null || bvodResponseParams === void 0 ? void 0 : bvodResponseParams.length)) return "";
    return bvodResponseParams.reduce((acc, curr, idx)=>{
        const { BvodId, BvodIdSalt, Demo } = curr || {};
        const count = idx + 1;
        const bvodIdSaltValue = (BvodIdSalt === null || BvodIdSalt === void 0 ? void 0 : BvodIdSalt.toLowerCase()) === "none" || !BvodIdSalt ? "" : BvodIdSalt;
        const oztamKeyValue = {
            [`imafw_oztam_${count}`]: BvodId,
            [`imafw_oztam_${count}salted`]: bvodIdSaltValue,
            [`imafw_oztam_${count}demo`]: Demo
        };
        let oztamString = "";
        Object.keys(oztamKeyValue).forEach((key)=>{
            const value = oztamKeyValue[key];
            if (value !== "none") oztamString += `&${key}=${encodeURIComponent(value)}`;
        });
        return `${acc}${oztamString}`;
    }, "");
};
const buildFreewheelAdUrl = async (urlFrame, genre, ozTamSessionId, authToken, assetId)=>{
    let adUrl = urlFrame;
    const tfcd = (genre === null || genre === void 0 ? void 0 : genre.toLowerCase()) === "kids" ? 1 : 0;
    const { ge, gr, postcode, deviceId, is_lat } = getAdParameters();
    const region = (0, _tenStore.Store).region.state || "NSW";
    adUrl = adUrl.replace("\r\n ", "");
    adUrl = adUrl.replace(";", "&");
    adUrl = adUrl.replace(":", `${encodeURIComponent(":")}`);
    adUrl = adUrl.replace(/\[TFCD\]/g, String(tfcd));
    adUrl = adUrl.replace("%%ADVERTISING_IDENTIFIER_PLAIN%%", deviceId);
    adUrl = adUrl.replace("%%ADVERTISING_IDENTIFIER_IS_LAT%%", is_lat);
    adUrl += `&imafw__fw_h_x_country=AU&imafw__fw_content_id=${assetId}`;
    adUrl += "&imafw_mode=LIVE&imafw_vdty=VARIABLE";
    if (postcode) adUrl += `&imafw__fw_h_x_postal_code=${String(postcode)}`;
    const { fms_params } = (0, _tenStore.Store).fmsResponse;
    adUrl = adUrl.replace(/\[GE\]/g, ge !== null ? String(ge) : "");
    adUrl = adUrl.replace(/\[GR\]/g, gr !== null ? String(gr) : "");
    adUrl = adUrl.replace(/\[PCODE\]/g, postcode !== null ? String(postcode) : "");
    adUrl = adUrl.replace(/\[STATE\]/g, region !== null ? String(region) : "");
    adUrl = adUrl.replace(/\[OZTAM_SESSION_ID\]/g, ozTamSessionId !== null ? String(ozTamSessionId) : "");
    adUrl = adUrl.replace(/\[SUB\]/g, fms_params ? String(fms_params.imafw_fms_userid) : "");
    const custParams = (0, _objectSpreadProps._)((0, _objectSpread._)({
        imafw_tfcd: tfcd
    }, fms_params), {
        imafw_genre: genre
    });
    const fwBvodParams = getFreewheelBVODParams();
    adUrl += fwBvodParams;
    Object.keys(custParams).forEach((key)=>{
        const value = String(custParams[key]);
        adUrl += `&${key}=${encodeURIComponent(value)}`;
    });
    if (authToken) adUrl += `&auth-token=${encodeURIComponent(authToken)}`;
    return adUrl;
};
const buildGoogleAdUrl = (urlFrame, videoAltId, genre, ozTamSessionId)=>{
    let adUrl = urlFrame;
    const tfcd = (genre === null || genre === void 0 ? void 0 : genre.toLowerCase()) === "kids" ? 1 : 0;
    const { ge, gr, ppid, timeStamp, region, postcode, deviceId, is_lat, idtype } = getAdParameters();
    adUrl = adUrl.replace(/\[TFCD\]/g, String(tfcd));
    adUrl = adUrl.replace(/\[PPID\]/g, ppid !== null && ppid !== void 0 ? ppid : "");
    adUrl = adUrl.replace(/\[GE\]/g, ge !== null ? String(ge) : "");
    adUrl = adUrl.replace(/\[GR\]/g, gr !== null ? String(gr) : "");
    adUrl = adUrl.replace("&vid=[VID]", videoAltId != null ? `&vid=${videoAltId}` : "");
    adUrl = adUrl.replace("&c=[TIMESTAMP]", `&c=${timeStamp}`);
    adUrl = adUrl.replace("%%ADVERTISING_IDENTIFIER_PLAIN%%", deviceId); // &rdid=
    adUrl = adUrl.replace("%%ADVERTISING_IDENTIFIER_IS_LAT%%", is_lat); // &is_lat=
    adUrl = adUrl.replace("%%ADVERTISING_IDENTIFIER_TYPE%%", idtype); // &idtype=
    if (ozTamSessionId) {
        if (adUrl.match(/\[OZTAM_SESSION_ID\]/g)) adUrl = adUrl.replace(/\[OZTAM_SESSION_ID\]/g, ozTamSessionId);
        else adUrl += `%26session%3D${ozTamSessionId}`;
    }
    if ([
        "nsw",
        "wa",
        "act",
        "nt",
        "sa",
        "tas",
        "vic",
        "qld"
    ].includes(region.toLowerCase())) adUrl += `%26state%3D${region.toLowerCase()}`;
    if (postcode && /^\d{4}$/.exec(postcode)) adUrl += `%26pcode%3D${postcode}`;
    return adUrl;
};

},{"@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/ten-store":"koGVC","../helpers/Messengers":"jglQH","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8Y68S":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"bcz9h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sendVozStreamingRequest", ()=>sendVozStreamingRequest);
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _tenStore = require("../helpers/ten-store");
var _messengers = require("../helpers/Messengers");
var _tenApi = require("./ten-api");
const PublisherName = "TEN";
const BVOD_N10_TOKEN_KEY = "BVOD_N10_ACCESS_TOKEN";
const BVOD = {
    SIGN_JWT: "/sign_jwt",
    AUTH: "/auth",
    NO_AUTH: "/get_demo/noauth"
};
const N10_UNIQUE_BVOD_API_KEY = "///adjust.bouncing.flame";
const sendVozStreamingRequest = async (liveData)=>{
    try {
        var _Store_ipAddress, _Store_auth, _Messengers_oztamSessionId$, _Messengers_setBVODParams$;
        const ipAddress = ((_Store_ipAddress = (0, _tenStore.Store).ipAddress) === null || _Store_ipAddress === void 0 ? void 0 : _Store_ipAddress.ip) || "0.0.0.0";
        const UserInfo = (0, _tenStore.Store).UserInfo;
        if (!(UserInfo === null || UserInfo === void 0 ? void 0 : UserInfo.OzTamId) || !((_Store_auth = (0, _tenStore.Store).auth) === null || _Store_auth === void 0 ? void 0 : _Store_auth.accessToken)) {
            console.error("No access token or OzTam ID found.");
            return;
        }
        const { liveShow } = liveData || {};
        if (!(liveShow === null || liveShow === void 0 ? void 0 : liveShow.id) || !liveShow.publisherId) {
            console.error("Invalid live data provided:", liveData);
            return;
        }
        const body = {
            MediaId: liveShow.id,
            PublisherName,
            PublisherId: liveShow.publisherId,
            SessionId: ((_Messengers_oztamSessionId$ = (0, _messengers.Messengers).oztamSessionId$) === null || _Messengers_oztamSessionId$ === void 0 ? void 0 : _Messengers_oztamSessionId$.getCurrentValue()) || "",
            RegistrationId: UserInfo.OzTamId,
            IpAddress: ipAddress,
            DeviceId: (0, _tenStore.Store).deviceId || "",
            MediaType: "live",
            DeviceType: "tv",
            UserAgent: navigator.userAgent || "",
            Genre: liveShow.genre || "unknown",
            TimeStamp: new Date().toISOString(),
            Logging: "string"
        };
        let bvodResponse;
        try {
            bvodResponse = await makeBvodParameterRequest(body);
            if (!(bvodResponse === null || bvodResponse === void 0 ? void 0 : bvodResponse.length)) {
                console.warn("[OzTamClient] Voz streaming request failed, retrying in 20ms...");
                bvodResponse = await makeBvodParameterRequest(body);
            }
        } catch (err) {
            console.error("[OzTamClient] Error making BVOD parameter request:", err);
        }
        if (bvodResponse === null || bvodResponse === void 0 ? void 0 : bvodResponse.length) (_Messengers_setBVODParams$ = (0, _messengers.Messengers).setBVODParams$) === null || _Messengers_setBVODParams$ === void 0 ? void 0 : _Messengers_setBVODParams$.send(bvodResponse);
    } catch (err) {
        console.error("[sendVozStreamingRequest] Unexpected error:", err);
    }
};
const makeBvodAuthenticationRequest = async (requestType, requestBody, accessToken = "")=>{
    var _Store_ApiConfig;
    const bvodRequestUrl = (_Store_ApiConfig = (0, _tenStore.Store).ApiConfig) === null || _Store_ApiConfig === void 0 ? void 0 : _Store_ApiConfig.bvodRequestUrl;
    if (!bvodRequestUrl) {
        console.error("[makeBvodAuthenticationRequest] BVOD request URL is not configured.");
        return null;
    }
    try {
        const response = await fetch(`${bvodRequestUrl}${BVOD[requestType]}`, {
            method: "POST",
            headers: (0, _objectSpread._)({
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                "publisher-id": (requestBody === null || requestBody === void 0 ? void 0 : requestBody.PublisherId) || ""
            }, requestType === "AUTH" && {
                Authorization: `Bearer ${accessToken}`
            }, requestType === "SIGN_JWT" && {
                "api-key": N10_UNIQUE_BVOD_API_KEY
            }),
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            console.error(`[makeBvodAuthenticationRequest] HTTP error: ${response.status}`);
            return null;
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("[makeBvodAuthenticationRequest] Failed:", err);
        return null;
    }
};
const makeBvodParameterRequest = async (requestBody)=>{
    try {
        let accessToken = localStorage.getItem(BVOD_N10_TOKEN_KEY);
        if (!accessToken) {
            console.info("[makeBvodParameterRequest] No access token found, fetching new one...");
            const tokenResponse = await makeBvodAuthenticationRequest("SIGN_JWT", requestBody);
            if (!(tokenResponse === null || tokenResponse === void 0 ? void 0 : tokenResponse.access_token)) {
                console.error("[makeBvodParameterRequest] Failed to obtain new access token.");
                return [];
            }
            accessToken = tokenResponse.access_token;
            localStorage.setItem(BVOD_N10_TOKEN_KEY, accessToken);
        }
        const bvodIdentities = await makeBvodAuthenticationRequest("AUTH", requestBody, accessToken);
        if (!bvodIdentities) console.warn("[makeBvodParameterRequest] Failed to authenticate BVOD request.");
        return bvodIdentities || [];
    } catch (err) {
        console.error("[makeBvodParameterRequest] Error occurred:", err);
        localStorage.removeItem(BVOD_N10_TOKEN_KEY);
        return [];
    }
};

},{"@swc/helpers/_/_object_spread":"lupAG","../helpers/ten-store":"koGVC","../helpers/Messengers":"jglQH","./ten-api":"fjPlo","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"jraqm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TealiumErrorContext", ()=>TealiumErrorContext);
parcelHelpers.export(exports, "TealiumErrorCode", ()=>TealiumErrorCode);
parcelHelpers.export(exports, "TealiumClient", ()=>TealiumClient);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _dateTimeHelper = require("../helpers/DateTimeHelper");
var _tenStore = require("../helpers/ten-store");
var _utils = require("../helpers/utils");
const TealiumErrorContext = {
    API: "API",
    STREAM: "ST",
    DEEPLINK: "DL",
    PAUSEAD: "RE"
};
const TealiumErrorCode = {
    // API
    OztamPostRequest: "OztamPostRequest",
    FetchAdobeECID: "10PlayFetchAdobeECID",
    FetchPauseAd: "10PlayFetchPauseAd",
    FetchUser: "10PlayFetchUser",
    FetchVideoMetadata: "10PlayFetchVideoMetadata",
    FetchVideoPlayback: "10PlayFetchVideoPlayback",
    FetchLiveTv: "10PlayFetchLiveTv",
    FetchNews: "10PlayFetchNews",
    FetchShow: "10PlayFetchShow",
    FetchActivationCode: "10PlayFetchActivationCode",
    FetchWatchHistory: "10PlayFetchWatchHistory",
    FetchMyShow: "10PlayFetchMyShow",
    PostMyShow: "10PlayPostMyShow",
    FetchAppConfig: "10PlayFetchAppConfig",
    RefreshToken: "10PlayRefreshToken",
    GeneralGetRequest: "10PlayGetRequest",
    GeneralPostRequest: "10PlayPostRequest",
    // STREAM
    DaiLive: "DaiLive",
    Dai: "Dai",
    Hls: "Hls",
    // DEEPLINK
    DLShow: "Show",
    DLVideo: "Video",
    DLLiveVideo: "LiveVideo",
    DLLiveTV: "LiveTV",
    // PAUSEAD
    PauseAdFetch: "Fetch"
};
const SESSION_ID_KEY = "au.com.ten_tealium-session-timestamp";
const ADOBE_ECID_KEY = "au.com.ten_adobe-ecid";
const AppVersion = (0, _tenStore.Store).appVersion;
const PathToTealiumEvent = {
    shows: "shows_index_screen",
    news: "news_screen",
    "live-tv": "live_tv_screen",
    show: "show_screen",
    setting: "settings_screen",
    home: "home_screen"
};
const TealiumEventToAppSection = {
    shows_index_screen: "shows",
    news_screen: "news",
    live_tv_screen: "livetv",
    show_screen: "shows",
    settings_screen: "setting",
    home_screen: "home"
};
const getAppLaunchEventProps = (isLaunch = true)=>({
        tealium_event: `app_${isLaunch ? "launch" : "exit"}`,
        call_type: "view",
        appSection: "applaunch"
    });
class TealiumClient {
    constructor(){
        (0, _defineProperty._)(this, "sessionInactivityTimer", null);
        (0, _defineProperty._)(this, "timeToReachInactivityMs", 1800000);
        (0, _defineProperty._)(this, "apiBase", "https://collect.tealiumiq.com/event?tealium_account=10&tealium_profile=main&tealium_datasource=amtjqx&deviceModel=&platform=foxtel-glass&device=&deviceManufacturer=&appName=10play&adDeviceType=dpid&") // fallback, to be overridden
        ;
        (0, _defineProperty._)(this, "hasTriedToRequestAdobeEcid", false);
        (0, _defineProperty._)(this, "adobeEcidEndpointNoTs", "https://dpm.demdex.net/id?d_visid_ver=2&d_rtbd=json&d_ver=2&d_orgid=508F0C3A53DB1A8A0A490D4D%40AdobeOrg");
        (0, _defineProperty._)(this, "eventDispatchQueue", new (0, _utils.AsyncFunctionQueue)());
        (0, _defineProperty._)(this, "init", ()=>{
            var _Store_AppConfig_account_tealium, _Store_AppConfig_account, _Store_AppConfig;
            const configApiBase = (_Store_AppConfig = (0, _tenStore.Store).AppConfig) === null || _Store_AppConfig === void 0 ? void 0 : (_Store_AppConfig_account = _Store_AppConfig.account) === null || _Store_AppConfig_account === void 0 ? void 0 : (_Store_AppConfig_account_tealium = _Store_AppConfig_account.tealium) === null || _Store_AppConfig_account_tealium === void 0 ? void 0 : _Store_AppConfig_account_tealium.restApiEndpoint;
            this.apiBase = configApiBase || this.apiBase;
            this.resetSessionTimer();
            this.sendEvent(getAppLaunchEventProps());
        });
        (0, _defineProperty._)(this, "setApiBase", (apiBase)=>{
            this.apiBase = apiBase;
        });
        (0, _defineProperty._)(this, "onExit", ()=>this.sendEvent(getAppLaunchEventProps(false)));
        (0, _defineProperty._)(this, "onVideoEvent", (eventName, showInfo)=>{
            const videoData = (0, _objectSpread._)({
                tealium_event: eventName,
                call_type: "link"
            }, showInfo);
            this.sendEvent(videoData);
        });
        (0, _defineProperty._)(this, "onErrorEvent", (errorObj)=>{
            const errorData = (0, _objectSpread._)({
                tealium_event: "uap_error",
                call_type: "view"
            }, errorObj);
            this.sendEvent(errorData);
        });
        (0, _defineProperty._)(this, "getPathBase", (path)=>{
            const pathParts = path.split("/");
            const mainSection = pathParts[1] || "mle-home";
            return mainSection.toLowerCase();
        });
        (0, _defineProperty._)(this, "resetSessionTimer", ()=>{
            if (!localStorage.getItem(SESSION_ID_KEY)) // start session if cleared or nonexistent
            localStorage.setItem(SESSION_ID_KEY, String(Date.now()));
            // reset timer
            if (this.sessionInactivityTimer) clearTimeout(this.sessionInactivityTimer);
            this.sessionInactivityTimer = window.setTimeout(this.clearSession, this.timeToReachInactivityMs);
        });
        (0, _defineProperty._)(this, "clearSession", ()=>{
            localStorage.removeItem(SESSION_ID_KEY);
            if (this.sessionInactivityTimer) clearTimeout(this.sessionInactivityTimer);
            this.sessionInactivityTimer = null;
        });
        (0, _defineProperty._)(this, "objToQueryParamList", (obj)=>Object.keys(obj).map((key)=>{
                var _obj_key;
                return `${key}=${(_obj_key = obj[key]) !== null && _obj_key !== void 0 ? _obj_key : ""}`;
            }).join("&"));
        (0, _defineProperty._)(this, "getDateData", ()=>{
            const unixTimestamp = Date.now();
            return {
                tealium_timestamp_local: (0, _dateTimeHelper.getTealiumLocalTimestamp)(unixTimestamp),
                tealium_timestamp_epoch: Math.round(unixTimestamp / 1000),
                tealium_timestamp_utc: (0, _dateTimeHelper.getTealiumUTCTimestamp)(unixTimestamp)
            };
        });
        (0, _defineProperty._)(this, "getMemberData", ()=>{
            const userInfo = (0, _tenStore.Store).UserInfo;
            const baseMemberData = {
                memberLoginStatus: !!userInfo ? "logged-in" : "logged-out"
            };
            if (!userInfo) return baseMemberData;
            return (0, _objectSpreadProps._)((0, _objectSpread._)({}, baseMemberData), {
                memberId: userInfo.memberId,
                memberEmailHashed: userInfo.memberEmailHash,
                memberAge: userInfo.age,
                memberGender: userInfo.gender,
                memberPostcode: userInfo.postcode,
                memberFavouriteGenre: userInfo.favoriteGenre,
                n10adId: userInfo["10adId"]
            });
        });
        (0, _defineProperty._)(this, "getDeviceData", async ()=>{
            const userSessionStart = localStorage.getItem("tealium-session-timestamp") || // assume inactivity timer to be reset every event and therefore
            // every time this function runs
            "no-session-timestamp-found";
            let adobeEcid = localStorage.getItem(ADOBE_ECID_KEY);
            if (!adobeEcid) {
                if (!this.hasTriedToRequestAdobeEcid) try {
                    // only try once
                    this.hasTriedToRequestAdobeEcid = true;
                    const adobeRequest = await fetch(`${this.adobeEcidEndpointNoTs}&ts=${Date.now()}`);
                    const adobeResponse = await adobeRequest.json();
                    const ecid = adobeResponse.d_mid;
                    localStorage.setItem(ADOBE_ECID_KEY, ecid);
                    adobeEcid = ecid;
                } catch (err) {
                    this.onErrorEvent({
                        errorCode: TealiumErrorCode.FetchAdobeECID,
                        errorType: TealiumErrorContext.API,
                        errorDetail: JSON.stringify(err),
                        errorSource: this.adobeEcidEndpointNoTs,
                        errorMessage: ""
                    });
                    adobeEcid = "error-setting-ecid";
                    console.warn("[acc] Error setting adobe ecid for tealium", err);
                }
                else adobeEcid = "error-setting-ecid";
            }
            const deviceId = (0, _tenStore.Store).deviceId;
            const modelId = (0, _tenStore.Store).deviceModel;
            const boxName = (0, _tenStore.Store).devicePlatform;
            return {
                app_version: AppVersion,
                deviceIdAdobe: adobeEcid,
                deviceId: deviceId || "none-found",
                tealium_environment: "dev",
                deviceModel: boxName || "none-found",
                deviceModelId: modelId || "none-found",
                tealium_visitor_id: deviceId || "none-found",
                tealium_session_id: userSessionStart,
                adOptOut: "0"
            };
        });
        (0, _defineProperty._)(this, "sendEvent", (eventData)=>{
            this.resetSessionTimer();
            // Add date & member data here as it is more accurate
            // Need to add device data in dispatch fn as it can be async
            // and it makes more sense to bundle in the async dispatch
            const enhancedEvent = (0, _objectSpread._)({}, this.getDateData(), this.getMemberData(), eventData);
            this.eventDispatchQueue.pushFunction(async ()=>{
                await this._dispatchEvent(enhancedEvent);
            });
        });
        (0, _defineProperty._)(this, "_dispatchEvent", async (eventData)=>{
            const deviceData = await this.getDeviceData();
            const fullQueryParams = this.objToQueryParamList((0, _objectSpread._)({}, deviceData, eventData));
            // console.log(
            //     `[acc] Tealium sent event ${eventData.tealium_event}`,
            //     eventData
            // );
            try {
                await fetch(`${this.apiBase}${fullQueryParams}`);
            } catch (err) {
                console.warn("[acc] tealium api request error", err);
            }
        });
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/DateTimeHelper":"5EGWX","../helpers/ten-store":"koGVC","../helpers/utils":"5u5wB","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"5EGWX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTealiumLocalTimestamp", ()=>getTealiumLocalTimestamp);
parcelHelpers.export(exports, "getTealiumUTCTimestamp", ()=>getTealiumUTCTimestamp);
var _index = require("../lib/timezone/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _timezones = require("../lib/timezone/timezones");
var _tenStore = require("./ten-store");
const getRegionZoneObj = ()=>{
    const { state: region } = (0, _tenStore.Store).region;
    const timezoneMap = {
        nsw: (0, _timezones.NSW),
        wa: (0, _timezones.West),
        act: (0, _timezones.ACT),
        nt: (0, _timezones.North),
        sa: (0, _timezones.South),
        tas: (0, _timezones.Tasmania),
        vic: (0, _timezones.Victoria),
        qld: (0, _timezones.Queensland)
    };
    return timezoneMap[region.toLowerCase()] || timezoneMap.nsw;
};
const getTealiumLocalTimestamp = (unix)=>{
    const timezone = getRegionZoneObj();
    const timezoneKey = Object.keys(timezone.zones)[0];
    const dateObj = (0, _indexDefault.default)(timezone);
    return dateObj(unix, timezoneKey, "%Y-%m-%dT%H:%M:%S");
};
const getTealiumUTCTimestamp = (unix)=>{
    const dateObj = (0, _indexDefault.default)("UTC");
    return dateObj(unix, "", "%Y-%m-%dT%H:%M:%S");
};

},{"../lib/timezone/index":"896Zz","../lib/timezone/timezones":"gKd61","./ten-store":"koGVC","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"896Zz":[function(require,module,exports) {
!function(e) {
    (0, module.exports) ? module.exports = e() : "function" == typeof define ? define(e) : this.tz = e();
}(function() {
    function e(e, t, n) {
        var r, o = t.day[1];
        do r = new Date(Date.UTC(n, t.month, Math.abs(o++)));
        while (t.day[0] < 7 && r.getUTCDay() != t.day[0]);
        return (r = {
            clock: t.clock,
            sort: r.getTime(),
            rule: t,
            save: 6e4 * t.save,
            offset: e.offset
        })[r.clock] = r.sort + 6e4 * t.time, r.posix ? r.wallclock = r[r.clock] + (e.offset + t.saved) : r.posix = r[r.clock] - (e.offset + t.saved), r;
    }
    function t(t, n, r) {
        var o, u, i, l, a, c, s, f = t[t.zone], T = [], h = new Date(r).getUTCFullYear(), $ = 1;
        for(o = 1, u = f.length; o < u && !(f[o][n] <= r); o++);
        if ((i = f[o]).rules) {
            for(c = t[i.rules], s = h + 1; s >= h - $; --s)for(o = 0, u = c.length; o < u; o++)c[o].from <= s && s <= c[o].to ? T.push(e(i, c[o], s)) : c[o].to < s && 1 == $ && ($ = s - c[o].to);
            for(T.sort(function(e, t) {
                return e.sort - t.sort;
            }), o = 0, u = T.length; o < u; o++)r >= T[o][n] && T[o][T[o].clock] > i[T[o].clock] && (l = T[o]);
        }
        return l && ((a = /^(.*)\/(.*)$/.exec(i.format)) ? l.abbrev = a[l.save ? 2 : 1] : l.abbrev = i.format.replace(/%s/, l.rule.letter)), l || i;
    }
    function n(e, n) {
        return "UTC" == e.zone ? n : (e.entry = t(e, "posix", n), n + e.entry.offset + e.entry.save);
    }
    function r(e, n) {
        var r, o;
        return "UTC" == e.zone ? n : (e.entry = r = t(e, "wallclock", n), 0 < (o = n - r.wallclock) && o < r.save ? null : n - r.offset - r.save);
    }
    function o(e, t, o) {
        var u, l = +(o[1] + 1), c = o[2] * l, s = i.indexOf(o[3].toLowerCase());
        if (s > 9) t += c * a[s - 10];
        else {
            if (u = new Date(n(e, t)), s < 7) for(; c;)u.setUTCDate(u.getUTCDate() + l), u.getUTCDay() == s && (c -= l);
            else 7 == s ? u.setUTCFullYear(u.getUTCFullYear() + c) : 8 == s ? u.setUTCMonth(u.getUTCMonth() + c) : u.setUTCDate(u.getUTCDate() + c);
            null == (t = r(e, u.getTime())) && (t = r(e, u.getTime() + 864e5 * l) - 864e5 * l);
        }
        return t;
    }
    var u = {
        clock: function() {
            return +new Date;
        },
        zone: "UTC",
        entry: {
            abbrev: "UTC",
            offset: 0,
            save: 0
        },
        UTC: 1,
        z: function(e, t, n, r) {
            var o, u, i = this.entry.offset + this.entry.save, l = Math.abs(i / 1e3), a = [], c = 3600;
            for(o = 0; o < 3; o++)a.push(("0" + Math.floor(l / c)).slice(-2)), l %= c, c /= 60;
            return "^" != n || i ? ("^" == n && (r = 3), 3 == r ? (u = (u = a.join(":")).replace(/:00$/, ""), "^" != n && (u = u.replace(/:00$/, ""))) : r ? (u = a.slice(0, r + 1).join(":"), "^" == n && (u = u.replace(/:00$/, ""))) : u = a.slice(0, 2).join(""), u = (u = (i < 0 ? "-" : "+") + u).replace(/([-+])(0)/, {
                _: " $1",
                "-": "$1"
            }[n] || "$1$2")) : "Z";
        },
        "%": function(e) {
            return "%";
        },
        n: function(e) {
            return "\n";
        },
        t: function(e) {
            return "	";
        },
        U: function(e) {
            return c(e, 0);
        },
        W: function(e) {
            return c(e, 1);
        },
        V: function(e) {
            return s(e)[0];
        },
        G: function(e) {
            return s(e)[1];
        },
        g: function(e) {
            return s(e)[1] % 100;
        },
        j: function(e) {
            return Math.floor((e.getTime() - Date.UTC(e.getUTCFullYear(), 0)) / 864e5) + 1;
        },
        s: function(e) {
            return Math.floor(e.getTime() / 1e3);
        },
        C: function(e) {
            return Math.floor(e.getUTCFullYear() / 100);
        },
        N: function(e) {
            return e.getTime() % 1e3 * 1e6;
        },
        m: function(e) {
            return e.getUTCMonth() + 1;
        },
        Y: function(e) {
            return e.getUTCFullYear();
        },
        y: function(e) {
            return e.getUTCFullYear() % 100;
        },
        H: function(e) {
            return e.getUTCHours();
        },
        M: function(e) {
            return e.getUTCMinutes();
        },
        S: function(e) {
            return e.getUTCSeconds();
        },
        e: function(e) {
            return e.getUTCDate();
        },
        d: function(e) {
            return e.getUTCDate();
        },
        u: function(e) {
            return e.getUTCDay() || 7;
        },
        w: function(e) {
            return e.getUTCDay();
        },
        l: function(e) {
            return e.getUTCHours() % 12 || 12;
        },
        I: function(e) {
            return e.getUTCHours() % 12 || 12;
        },
        k: function(e) {
            return e.getUTCHours();
        },
        Z: function(e) {
            return this.entry.abbrev;
        },
        a: function(e) {
            return this[this.locale].day.abbrev[e.getUTCDay()];
        },
        A: function(e) {
            return this[this.locale].day.full[e.getUTCDay()];
        },
        h: function(e) {
            return this[this.locale].month.abbrev[e.getUTCMonth()];
        },
        b: function(e) {
            return this[this.locale].month.abbrev[e.getUTCMonth()];
        },
        B: function(e) {
            return this[this.locale].month.full[e.getUTCMonth()];
        },
        P: function(e) {
            return this[this.locale].meridiem[Math.floor(e.getUTCHours() / 12)].toLowerCase();
        },
        p: function(e) {
            return this[this.locale].meridiem[Math.floor(e.getUTCHours() / 12)];
        },
        R: function(e, t) {
            return this.convert([
                t,
                "%H:%M"
            ]);
        },
        T: function(e, t) {
            return this.convert([
                t,
                "%H:%M:%S"
            ]);
        },
        D: function(e, t) {
            return this.convert([
                t,
                "%m/%d/%y"
            ]);
        },
        F: function(e, t) {
            return this.convert([
                t,
                "%Y-%m-%d"
            ]);
        },
        x: function(e, t) {
            return this.convert([
                t,
                this[this.locale].date
            ]);
        },
        r: function(e, t) {
            return this.convert([
                t,
                this[this.locale].time12 || "%I:%M:%S"
            ]);
        },
        X: function(e, t) {
            return this.convert([
                t,
                this[this.locale].time24
            ]);
        },
        c: function(e, t) {
            return this.convert([
                t,
                this[this.locale].dateTime
            ]);
        },
        convert: function e(t) {
            if (!t.length) return "1.0.23";
            var u, i, a, c, s, f = Object.create(this), T = [];
            for(u = 0; u < t.length; u++)if (Array.isArray(c = t[u])) u || isNaN(c[1]) ? c.splice.apply(t, [
                u--,
                1
            ].concat(c)) : s = c;
            else if (isNaN(c)) {
                if ("string" == (a = typeof c)) ~c.indexOf("%") ? f.format = c : u || "*" != c ? !u && (a = /^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?(Z|(([+-])(\d{2}(:\d{2}){0,2})))?)?$/.exec(c)) ? ((s = []).push.apply(s, a.slice(1, 8)), a[9] ? (s.push(a[10] + 1), s.push.apply(s, a[11].split(/:/))) : a[8] && s.push(1)) : /^\w{2,3}_\w{2}$/.test(c) ? f.locale = c : (a = l.exec(c)) ? T.push(a) : f.zone = c : s = c;
                else if ("function" == a) {
                    if (a = c.call(f)) return a;
                } else if (/^\w{2,3}_\w{2}$/.test(c.name)) f[c.name] = c;
                else if (c.zones) {
                    for(a in c.zones)f[a] = c.zones[a];
                    for(a in c.rules)f[a] = c.rules[a];
                }
            } else u || (s = c);
            if (f[f.locale] || delete f.locale, f[f.zone] || delete f.zone, null != s) {
                if ("*" == s) s = f.clock();
                else if (Array.isArray(s)) {
                    for(u = 0, a = [], i = !s[7]; u < 11; u++)a[u] = +(s[u] || 0);
                    --a[1], s = Date.UTC.apply(Date.UTC, a) + -a[7] * (36e5 * a[8] + 6e4 * a[9] + 1e3 * a[10]);
                } else s = Math.floor(s);
                if (!isNaN(s)) {
                    if (i && (s = r(f, s)), null == s) return s;
                    for(u = 0, i = T.length; u < i; u++)s = o(f, s, T[u]);
                    return f.format ? (a = new Date(n(f, s)), f.format.replace(/%([-0_^]?)(:{0,3})(\d*)(.)/g, function(e, t, n, r, o) {
                        var u, i, l = "0";
                        if (u = f[o]) {
                            for(e = String(u.call(f, a, s, t, n.length)), "_" == (t || u.style) && (l = " "), i = "-" == t ? 0 : u.pad || 0; e.length < i;)e = l + e;
                            for(i = "-" == t ? 0 : r || u.pad; e.length < i;)e = l + e;
                            "N" == o && i < e.length && (e = e.slice(0, i)), "^" == t && (e = e.toUpperCase());
                        }
                        return e;
                    })) : s;
                }
            }
            return function() {
                return f.convert(arguments);
            };
        },
        locale: "en_US",
        en_US: {
            date: "%m/%d/%Y",
            time24: "%I:%M:%S %p",
            time12: "%I:%M:%S %p",
            dateTime: "%a %d %b %Y %I:%M:%S %p %Z",
            meridiem: [
                "AM",
                "PM"
            ],
            month: {
                abbrev: "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|"),
                full: "January|February|March|April|May|June|July|August|September|October|November|December".split("|")
            },
            day: {
                abbrev: "Sun|Mon|Tue|Wed|Thu|Fri|Sat".split("|"),
                full: "Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday".split("|")
            }
        }
    }, i = "Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|year|month|day|hour|minute|second|millisecond", l = RegExp("^\\s*([+-])(\\d+)\\s+(" + i + ")s?\\s*$", "i"), a = [
        36e5,
        6e4,
        1e3,
        1
    ];
    function c(e, t) {
        var n, r, o;
        return r = new Date(Date.UTC(e.getUTCFullYear(), 0)), n = Math.floor((e.getTime() - r.getTime()) / 864e5), r.getUTCDay() == t ? o = 0 : 8 == (o = 7 - r.getUTCDay() + t) && (o = 1), n >= o ? Math.floor((n - o) / 7) + 1 : 0;
    }
    function s(e) {
        var t, n, r;
        return (n = e.getUTCFullYear(), t = new Date(Date.UTC(n, 0)).getUTCDay(), r = c(e, 1) + (t > 1 && t <= 4 ? 1 : 0)) ? 53 != r || 4 == t || 3 == t && 29 == new Date(n, 1, 29).getDate() ? [
            r,
            e.getUTCFullYear()
        ] : [
            1,
            e.getUTCFullYear() + 1
        ] : (n = e.getUTCFullYear() - 1, [
            r = 4 == (t = new Date(Date.UTC(n, 0)).getUTCDay()) || 3 == t && 29 == new Date(n, 1, 29).getDate() ? 53 : 52,
            e.getUTCFullYear() - 1
        ]);
    }
    return i = i.toLowerCase().split("|"), "delmHMSUWVgCIky".replace(/./g, function(e) {
        u[e].pad = 2;
    }), u.N.pad = 9, u.j.pad = 3, u.k.style = "_", u.l.style = "_", u.e.style = "_", function() {
        return u.convert(arguments);
    };
});

},{}],"gKd61":[function(require,module,exports) {
exports.NSW = {
    "zones": {
        "Australia/NSW": [
            "z",
            {
                "wallclock": 31536000000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": 31500000000,
                "save": 0,
                "rules": "AN"
            },
            {
                "wallclock": -2364076800000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": -2364113092000,
                "save": 0,
                "rules": "Aus"
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 36292000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "AN": [
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 9,
                "day": [
                    0,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2001,
                "to": 2007,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2007,
                "to": 2007,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2006,
                "to": 2006,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1996,
                "to": 2005,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2000,
                "to": 2000,
                "month": 7,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1987,
                "to": 1999,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1990,
                "to": 1995,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1989,
                "month": 2,
                "day": [
                    0,
                    15
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1986,
                "month": 9,
                "day": [
                    7,
                    19
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1971,
                "to": 1985,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1983,
                "to": 1985,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1982,
                "to": 1982,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1973,
                "to": 1981,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1972,
                "to": 1972,
                "month": 1,
                "day": [
                    7,
                    27
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ],
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};
exports.ACT = {
    "zones": {
        "Australia/ACT": [
            "z",
            {
                "wallclock": 31536000000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": 31500000000,
                "save": 0,
                "rules": "AN"
            },
            {
                "wallclock": -2364076800000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": -2364113092000,
                "save": 0,
                "rules": "Aus"
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 36292000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "AN": [
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 9,
                "day": [
                    0,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2001,
                "to": 2007,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2007,
                "to": 2007,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2006,
                "to": 2006,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1996,
                "to": 2005,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2000,
                "to": 2000,
                "month": 7,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1987,
                "to": 1999,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1990,
                "to": 1995,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1989,
                "month": 2,
                "day": [
                    0,
                    15
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1986,
                "month": 9,
                "day": [
                    7,
                    19
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1971,
                "to": 1985,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1983,
                "to": 1985,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1982,
                "to": 1982,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1973,
                "to": 1981,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1972,
                "to": 1972,
                "month": 1,
                "day": [
                    7,
                    27
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ],
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};
exports.North = {
    "zones": {
        "Australia/North": [
            "z",
            {
                "wallclock": -2230156800000,
                "format": "AC%sT",
                "abbrev": "ACST",
                "offset": 34200000,
                "posix": -2230189200000,
                "save": 0,
                "rules": "Aus"
            },
            {
                "wallclock": -2364076800000,
                "format": "ACST",
                "abbrev": "ACST",
                "offset": 32400000,
                "posix": -2364108200000,
                "save": 0
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 31400000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};
exports.South = {
    "zones": {
        "Australia/South": [
            "z",
            {
                "wallclock": 31536000000,
                "format": "AC%sT",
                "abbrev": "ACST",
                "offset": 34200000,
                "posix": 31501800000,
                "save": 0,
                "rules": "AS"
            },
            {
                "wallclock": -2230156800000,
                "format": "AC%sT",
                "abbrev": "ACST",
                "offset": 34200000,
                "posix": -2230189200000,
                "save": 0,
                "rules": "Aus"
            },
            {
                "wallclock": -2364076800000,
                "format": "ACST",
                "abbrev": "ACST",
                "offset": 32400000,
                "posix": -2364110060000,
                "save": 0
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 33260000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "AS": [
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 9,
                "day": [
                    0,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1987,
                "to": 2007,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2007,
                "to": 2007,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2006,
                "to": 2006,
                "month": 3,
                "day": [
                    7,
                    2
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1995,
                "to": 2005,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1994,
                "to": 1994,
                "month": 2,
                "day": [
                    7,
                    20
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1993,
                "to": 1993,
                "month": 2,
                "day": [
                    7,
                    7
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1992,
                "to": 1992,
                "month": 2,
                "day": [
                    7,
                    22
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1991,
                "to": 1991,
                "month": 2,
                "day": [
                    7,
                    3
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1990,
                "month": 2,
                "day": [
                    0,
                    15
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1986,
                "month": 9,
                "day": [
                    7,
                    19
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1971,
                "to": 1985,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1973,
                "to": 1985,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1972,
                "to": 1972,
                "month": 1,
                "day": [
                    7,
                    27
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ],
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};
exports.West = {
    "zones": {
        "Australia/West": [
            "z",
            {
                "wallclock": -836438400000,
                "format": "AW%sT",
                "abbrev": "AWST",
                "offset": 28800000,
                "posix": -836467200000,
                "save": 0,
                "rules": "AW"
            },
            {
                "wallclock": -2337897600000,
                "format": "AW%sT",
                "abbrev": "AWST",
                "offset": 28800000,
                "posix": -2337925404000,
                "save": 0,
                "rules": "Aus"
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 27804000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "AW": [
            {
                "from": 2007,
                "to": 2009,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2007,
                "to": 2008,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2006,
                "to": 2006,
                "month": 11,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1992,
                "to": 1992,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1991,
                "to": 1991,
                "month": 10,
                "day": [
                    7,
                    17
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1984,
                "to": 1984,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1983,
                "to": 1983,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1975,
                "to": 1975,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1974,
                "to": 1974,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            }
        ],
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};
exports.Victoria = {
    "zones": {
        "Australia/Victoria": [
            "z",
            {
                "wallclock": 31536000000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": 31500000000,
                "save": 0,
                "rules": "AV"
            },
            {
                "wallclock": -2364076800000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": -2364111592000,
                "save": 0,
                "rules": "Aus"
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 34792000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "AV": [
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 9,
                "day": [
                    0,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2001,
                "to": 2007,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2007,
                "to": 2007,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2006,
                "to": 2006,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1995,
                "to": 2005,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2000,
                "to": 2000,
                "month": 7,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1988,
                "to": 1999,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1991,
                "to": 1994,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1990,
                "month": 2,
                "day": [
                    0,
                    15
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1987,
                "month": 9,
                "day": [
                    0,
                    15
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1971,
                "to": 1985,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1973,
                "to": 1985,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1972,
                "to": 1972,
                "month": 1,
                "day": [
                    0,
                    -29
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ],
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};
exports.Tasmania = {
    "zones": {
        "Australia/Tasmania": [
            "z",
            {
                "wallclock": -94694400000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": -94730400000,
                "save": 0,
                "rules": "AT"
            },
            {
                "wallclock": -1669852800000,
                "format": "AE%sT",
                "abbrev": "AEDT",
                "offset": 36000000,
                "posix": -1669892400000,
                "save": 3600000,
                "rules": "Aus"
            },
            {
                "wallclock": -1680472800000,
                "format": "AEDT",
                "abbrev": "AEDT",
                "offset": 36000000,
                "posix": -1680508800000,
                "save": 3600000
            },
            {
                "wallclock": -2345760000000,
                "format": "AEST",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": -2345795356000,
                "save": 0
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 35356000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "AT": [
            {
                "from": 2001,
                "to": 1.7976931348623157e+308,
                "month": 9,
                "day": [
                    0,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 2008,
                "to": 1.7976931348623157e+308,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2007,
                "to": 2007,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2006,
                "to": 2006,
                "month": 3,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1991,
                "to": 2005,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 2000,
                "to": 2000,
                "month": 7,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1991,
                "to": 1999,
                "month": 9,
                "day": [
                    0,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1987,
                "to": 1990,
                "month": 2,
                "day": [
                    0,
                    15
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1988,
                "to": 1990,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1987,
                "to": 1987,
                "month": 9,
                "day": [
                    0,
                    22
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1984,
                "to": 1986,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1986,
                "to": 1986,
                "month": 9,
                "day": [
                    0,
                    15
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1968,
                "to": 1985,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1982,
                "to": 1983,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1973,
                "to": 1981,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1972,
                "to": 1972,
                "month": 1,
                "day": [
                    0,
                    -29
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1969,
                "to": 1971,
                "month": 2,
                "day": [
                    0,
                    8
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1968,
                "to": 1968,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1967,
                "to": 1967,
                "month": 9,
                "day": [
                    0,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            }
        ],
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};
exports.Queensland = {
    "zones": {
        "Australia/Queensland": [
            "z",
            {
                "wallclock": 31536000000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": 31500000000,
                "save": 0,
                "rules": "AQ"
            },
            {
                "wallclock": -2366755200000,
                "format": "AE%sT",
                "abbrev": "AEST",
                "offset": 36000000,
                "posix": -2366791928000,
                "save": 0,
                "rules": "Aus"
            },
            {
                "wallclock": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "format": "LMT",
                "abbrev": "LMT",
                "offset": 36728000,
                "posix": -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,
                "save": 0
            }
        ]
    },
    "rules": {
        "AQ": [
            {
                "from": 1990,
                "to": 1992,
                "month": 2,
                "day": [
                    0,
                    1
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1989,
                "to": 1991,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1972,
                "to": 1972,
                "month": 1,
                "day": [
                    0,
                    -29
                ],
                "time": 180,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1971,
                "to": 1971,
                "month": 9,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            }
        ],
        "Aus": [
            {
                "from": 1943,
                "to": 1944,
                "month": 2,
                "day": [
                    0,
                    -31
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1943,
                "to": 1943,
                "month": 9,
                "day": [
                    7,
                    3
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 2,
                "day": [
                    7,
                    29
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            },
            {
                "from": 1942,
                "to": 1942,
                "month": 8,
                "day": [
                    7,
                    27
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 0,
                "day": [
                    7,
                    1
                ],
                "time": 1,
                "clock": "wallclock",
                "save": 60,
                "letter": "D",
                "saved": 0
            },
            {
                "from": 1917,
                "to": 1917,
                "month": 2,
                "day": [
                    7,
                    25
                ],
                "time": 120,
                "clock": "wallclock",
                "save": 0,
                "letter": "S",
                "saved": 3600000
            }
        ]
    }
};

},{}],"85FFm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refreshAuth", ()=>refreshAuth);
parcelHelpers.export(exports, "tryGetAndSetUserInfo", ()=>tryGetAndSetUserInfo);
parcelHelpers.export(exports, "authApiBundle", ()=>authApiBundle);
var _tealiumClient = require("../analytics/TealiumClient");
var _messengers = require("../helpers/Messengers");
var _tenStore = require("../helpers/ten-store");
var _tenFmsRequest = require("./ten-fms-request");
var _providerUtils = require("../../provider-utils");
var _tenApi = require("./ten-api");
let refreshTimeout;
const refreshAuth = async (refreshToken, alternativeToken, retryCount = 0)=>{
    let postBody = {
        refreshToken: refreshToken,
        alternativeToken: alternativeToken
    };
    const maxRetries = 2;
    const refreshTokenUrl = (0, _tenStore.Store).AppConfig.authConfig.refreshToken;
    try {
        if (refreshTokenUrl) {
            const refreshTokenResponse = await (0, _tenApi.sendTenApiRequest)(refreshTokenUrl, "POST", {}, postBody);
            if (refreshTokenResponse.refreshToken && refreshTokenResponse.accessToken && refreshTokenResponse.alternativeToken) {
                (0, _tenStore.Store).auth = refreshTokenResponse;
                // If another part of initialization errors between here and the FMS request,
                // our new refresh token will not be stored, and the user will be logged out.
                // If the cached FMS data has not yet expired, we do not need to make another request to update Sky storage.
                // So, we end up updating Sky storage twice only in the case that FMS data needed to be updated, and the app initialized successfully.
                await (0, _providerUtils.setTokenInDeviceStorage)("au.com.ten", btoa(JSON.stringify({
                    refreshToken: (0, _tenStore.Store).auth.refreshToken,
                    alternativeToken: (0, _tenStore.Store).auth.alternativeToken,
                    fmsResponse: (0, _tenStore.Store).fmsResponse,
                    fmsResponseTimestamp: (0, _tenStore.Store).fmsResponseTimestamp
                })));
                retryCount = 0;
                // Set the refresh timeout for the next token refresh
                refreshTimeout = window.setTimeout(()=>{
                    refreshAuth((0, _tenStore.Store).auth.refreshToken, (0, _tenStore.Store).auth.alternativeToken);
                }, refreshTokenResponse.expiresIn * 1000);
            } else throw new (0, _providerUtils.MLEError)("Invalid refresh response.", (0, _providerUtils.ErrorTypes).AUTH, refreshTokenResponse.status);
        }
    } catch (err) {
        if (retryCount < maxRetries) return await refreshAuth(refreshToken, alternativeToken, retryCount + 1);
        else {
            console.log("[acc] Authentication refresh failed!");
            (0, _messengers.Messengers).tealiumTrackError$.send({
                errorCode: (0, _tealiumClient.TealiumErrorCode).RefreshToken,
                errorContext: (0, _tealiumClient.TealiumErrorContext).API,
                errorDetail: JSON.stringify(err),
                errorSource: refreshToken,
                errorMessage: ""
            });
            throw err;
        }
    }
};
const tryGetAndSetUserInfo = async ()=>{
    const userEndpoint = (0, _tenStore.Store).AppConfig.userEndpoints.fetchUserApiEndpoint;
    try {
        const userInfo = await (0, _tenApi.sendTenApiRequest)(userEndpoint);
        (0, _tenStore.Store).UserInfo = userInfo;
    } catch (err) {
        console.warn("[acc] could not get user info, ad tracking will be affected", err.toString());
        (0, _messengers.Messengers).tealiumTrackError$.send({
            errorCode: (0, _tealiumClient.TealiumErrorCode).FetchUser,
            errorContext: (0, _tealiumClient.TealiumErrorContext).API,
            errorDetail: JSON.stringify(err),
            errorSource: userEndpoint,
            errorMessage: err.message
        });
    }
};
const authApiBundle = async (refreshToken, alternativeToken)=>{
    try {
        await refreshAuth(refreshToken, alternativeToken);
    } catch (err) {
        throw new (0, _providerUtils.MLEError)("Could not perform TEN auth refresh", (0, _providerUtils.ErrorTypes).AUTH, err.status);
    }
    await tryGetAndSetUserInfo();
    await (0, _tenFmsRequest.fetchFMSResponse)();
};
(0, _messengers.Messengers).appTeardown$.addReceiver(()=>{
    if (refreshTimeout) clearTimeout(refreshTimeout);
});

},{"../analytics/TealiumClient":"jraqm","../helpers/Messengers":"jglQH","../helpers/ten-store":"koGVC","./ten-fms-request":"g440I","../../provider-utils":"jTFkH","./ten-api":"fjPlo","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"g440I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCachedFMSResponse", ()=>getCachedFMSResponse);
parcelHelpers.export(exports, "fetchFMSResponse", ()=>fetchFMSResponse);
var _tenApi = require("./ten-api");
var _providerUtils = require("../../provider-utils");
var _tenAdParameters = require("./ten-ad-parameters");
var _tenStore = require("../helpers/ten-store");
const REQUEST_TIMEOUT_MS = 10000;
const getUser = ()=>{
    const userInfo = (0, _tenStore.Store) || {};
    return {
        memberEmailHash: userInfo.auth.memberEmailHash || "",
        n10adId: userInfo.auth.n10adId || "",
        memberId: userInfo.auth.memberId || "",
        userId: userInfo.auth.UserId || ""
    };
};
const fmsRequestParameters = async ()=>{
    const adParams = (0, _tenAdParameters.getAdParameters)();
    const ipResponse = (0, _tenStore.Store).ipAddress;
    const platform = (0, _tenStore.Store).devicePlatform;
    const { idtype, is_lat } = adParams;
    const manufacturer = (0, _tenStore.Store).ApiConfig.manufacturer;
    const { memberEmailHash, n10adId, memberId } = getUser();
    return {
        app: {
            bundle: `Tenplay_${manufacturer}-${platform}`,
            region: "AU",
            googledai: 1,
            coppa: 0
        },
        device: {
            lat: Number(is_lat),
            ip: ipResponse.ip,
            ua: navigator.userAgent
        },
        identifiers: {
            emailhash: memberEmailHash,
            subscriberid: memberId,
            userid: n10adId,
            ifa: null,
            ifatype: idtype
        }
    };
};
const getCachedFMSResponse = ()=>{
    const cachedFMSData = (0, _tenStore.Store).fmsResponse;
    // Check if any cached data exists
    if (!cachedFMSData) return null;
    // Check the most recent FMS data
    const cachedFMSTimestamp = Number((0, _tenStore.Store).fmsResponseTimestamp);
    const fmsIdTTLMs = cachedFMSData.fms_id_ttl * 1000;
    if (Date.now() - cachedFMSTimestamp < fmsIdTTLMs) return cachedFMSData;
    return null;
};
const cacheFMSResponse = (data)=>{
    (0, _tenStore.Store).fmsResponse = data;
    (0, _tenStore.Store).fmsResponseTimestamp = Date.now().toString();
    (0, _providerUtils.setTokenInDeviceStorage)("au.com.ten", btoa(JSON.stringify({
        refreshToken: (0, _tenStore.Store).auth.refreshToken,
        alternativeToken: (0, _tenStore.Store).auth.alternativeToken,
        fmsResponse: (0, _tenStore.Store).fmsResponse,
        fmsResponseTimestamp: (0, _tenStore.Store).fmsResponseTimestamp
    })));
};
const fetchFMSResponse = async ()=>{
    const cachedFMSResponse = getCachedFMSResponse();
    if (cachedFMSResponse) {
        console.log(" cached FMS data available, not making a new call");
        return cachedFMSResponse;
    }
    const fmsRequestUrl = (0, _tenStore.Store).ApiConfig.fmsRequestUrl;
    const { memberEmailHash, n10adId, userId } = getUser();
    const fallbackIds = memberEmailHash || n10adId || userId;
    const params = await fmsRequestParameters();
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), REQUEST_TIMEOUT_MS);
    try {
        const response = await fetch(fmsRequestUrl, {
            method: "POST",
            body: JSON.stringify(params),
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (response.ok) {
            const data = await response.json();
            cacheFMSResponse(data);
            return data;
        } else throw new Error("Invalid response.");
    } catch (err) {
        if (err.name === "AbortError") console.error("Request was aborted due to timeout.");
        console.error(err);
        return {
            imafw__fw_vcid2: fallbackIds
        };
    }
};

},{"./ten-api":"fjPlo","../../provider-utils":"jTFkH","./ten-ad-parameters":"jqtDd","../helpers/ten-store":"koGVC","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"aIbeQ":[function(require,module,exports) {
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
            this.futureStreamEvents = [];
            this.currentTime = -1;
            this.currentAd = null;
            this.currentLiveAdBreakData = null;
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
            // We likely get all our ad info before a time updated
            // if joining during an ad
            if (this.currentTime < 0 && (nextTag === null || nextTag === void 0 ? void 0 : nextTag.type) === "id3Tag") {
                // 🚨 Race condition alert 🚨
                // If joining during an ad, analytics might expect an ad event
                // to fire before playback starts. But there could be a case
                // where the google ad poll json takes longer than the stream
                // to start, so we will get playback then an ad start event afterwards
                // But since we need the json to get ad info anyways then
                // we can't really get an ad event based on indexOf(google). Oh well
                // just something to note
                const googleData = this.matchTagToAd(nextTag);
                if ((googleData === null || googleData === void 0 ? void 0 : googleData.ad) && !this.areTheseTheSameAd(this.currentAd, googleData.ad)) (0, _messengers.Messengers).currentAd$.send(googleData.ad);
            }
            while((nextTag === null || nextTag === void 0 ? void 0 : nextTag.timestamp) < this.currentTime){
                this.futureStreamEvents.shift();
                if (nextTag.type === "id3Tag") {
                    const googleData = this.matchTagToAd(nextTag);
                    if (googleData) {
                        const { trackingEvent, ad } = googleData;
                        if (trackingEvent) this.sendTrackingEvent(trackingEvent.trackingId);
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
            if (time < this.currentTime) console.warn(`[acc] Player went ${this.currentTime - time} seconds back in time, this should not happen`);
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
                            adSystem: matchingAd.ad_system,
                            positionInBreak: matchingAd.position,
                            duration: matchingAd.duration,
                            totalInBreak: matchingAdBreak.ads,
                            adBreakDuration: matchingAdBreak.expected_duration,
                            title: matchingAd.slate ? "Slate ad" : matchingAd.title,
                            isSlate: matchingAd.slate,
                            creativeAdId: matchingAd.creative_ad_id,
                            creativeId: matchingAd.creative_id,
                            wrappers: matchingAd.wrappers
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

},{"@swc/helpers/_/_define_property":"9kWBJ","../helpers/Messengers":"jglQH","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"euX8m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _messengers = require("../helpers/Messengers");
var _utils = require("../helpers/utils");
var _tenStore = require("../helpers/ten-store");
var _tenApi = require("../ten-services/ten-api");
var _tealiumClient = require("./TealiumClient");
const NONE_FOUND = "none-found";
const NA = "na";
const EXPANDED = "expand";
const ACCEPT_INVITATION = "acceptInvitation";
const AD_TYPE = {
    INNOVID: "video_ad_innovid",
    PAUSE: "video_ad_pause",
    INTERACTIVE_PAUSE: "video_ad_intpause",
    PREROLL: "video_ad_preroll",
    MIDROLL: "video_ad_midroll"
};
const AD_EVT_TYPE = {
    START: "ad_start",
    END: "ad_end",
    SELECT: "adSelect"
};
const currentEpochTimestamp = ()=>Math.floor(Date.now() / 1000);
const isInnovidAd = (daiAd)=>{
    var _daiAd_adSystem;
    return daiAd === null || daiAd === void 0 ? void 0 : (_daiAd_adSystem = daiAd.adSystem) === null || _daiAd_adSystem === void 0 ? void 0 : _daiAd_adSystem.toLowerCase().includes("innovid");
};
const toLowerWithoutSpaces = (str)=>typeof str !== "string" ? str : str.toLowerCase().trim().split(" ").join("");
class TealiumBridge {
    constructor(){
        (0, _defineProperty._)(this, "tealium", new (0, _tealiumClient.TealiumClient)());
        (0, _defineProperty._)(this, "playerValuesCache", {});
        (0, _defineProperty._)(this, "playerState", (0, _utils.PlayerStates).Initialising);
        (0, _defineProperty._)(this, "currentAd", null);
        (0, _defineProperty._)(this, "hasPlayed", false);
        (0, _defineProperty._)(this, "liveUpdateInterval", null);
        (0, _defineProperty._)(this, "currentTime", 0);
        (0, _defineProperty._)(this, "oztamSessionId", "");
        (0, _defineProperty._)(this, "lastAdStartTime", 0);
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "init", ()=>{
            this.removeEventListeners(); // in case monitoringTeardown isn't called
            this.tealium.init();
            this.addListeners();
        });
        (0, _defineProperty._)(this, "refreshApiBase", ()=>{
            var _Store_AppConfig_account_tealium, _Store_AppConfig_account, _Store_AppConfig;
            const apiBase = (_Store_AppConfig = (0, _tenStore.Store).AppConfig) === null || _Store_AppConfig === void 0 ? void 0 : (_Store_AppConfig_account = _Store_AppConfig.account) === null || _Store_AppConfig_account === void 0 ? void 0 : (_Store_AppConfig_account_tealium = _Store_AppConfig_account.tealium) === null || _Store_AppConfig_account_tealium === void 0 ? void 0 : _Store_AppConfig_account_tealium.restApiEndpoint;
            if (apiBase) this.tealium.setApiBase(apiBase);
        });
        (0, _defineProperty._)(this, "addListeners", ()=>{
            this.listeners = [
                ...this.listeners,
                (0, _messengers.Messengers).oztamSessionId$.addReceiver(this.onOztamSessionIdChange, true),
                (0, _messengers.Messengers).playerState$.addReceiver(this.onPlayerStateChange, true),
                (0, _messengers.Messengers).streamReady$.addReceiver(this.onChannelDataReceived, true),
                (0, _messengers.Messengers).currentAd$.addReceiver(this.onAdStateChange),
                (0, _messengers.Messengers).timeUpdate$.addReceiver(this.onTimeUpdate),
                (0, _messengers.Messengers).tealiumTrackError$.addReceiver(this.onAppErrorReported),
                (0, _messengers.Messengers).playerError$.addReceiver(this.onPlayerError),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onAppTeardown)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            this.removeEventListeners();
            this.tealium.onVideoEvent("video_exit", this.playerValuesCache);
            this.tealium.onExit();
            this.playerValuesCache = {};
            this.currentAd = null;
            this.hasPlayed = false;
            if (this.liveUpdateInterval) clearInterval(this.liveUpdateInterval);
            this.liveUpdateInterval = null;
            this.currentTime = 0;
            this.oztamSessionId = "";
            this.lastAdStartTime = 0;
            this.playerState = (0, _utils.PlayerStates).Initialising;
        });
        (0, _defineProperty._)(this, "onOztamSessionIdChange", (oztamSessionId)=>{
            this.oztamSessionId = oztamSessionId;
            this.playerValuesCache = (0, _objectSpread._)({}, this.playerValuesCache, this.oztamSessionId && {
                oztamSessionId: this.oztamSessionId
            });
        });
        (0, _defineProperty._)(this, "sendVideoLoadEvent", ()=>{
            this.tealium.onVideoEvent("video_load", this.playerValuesCache);
        });
        (0, _defineProperty._)(this, "onChannelDataReceived", (channelData)=>{
            if (!channelData) return;
            this.setLivePlayerValues(channelData);
            this.liveUpdateInterval = window.setInterval(async ()=>{
                try {
                    const liveChannelData = await (0, _tenApi.getLiveChannelData)(this.playerValuesCache.showChannel);
                    if (liveChannelData) {
                        let hasCurrentLiveShowChanged;
                        if (liveChannelData === null || liveChannelData === void 0 ? void 0 : liveChannelData.liveShow.id) {
                            const { id: showId, title } = liveChannelData.liveShow;
                            hasCurrentLiveShowChanged = this.playerValuesCache.showId && showId !== this.playerValuesCache.showId || this.playerValuesCache.showName && title !== this.playerValuesCache.showName;
                        }
                        this.setLivePlayerValues(liveChannelData);
                        if (hasCurrentLiveShowChanged) {
                            await this.tealium.onVideoEvent("video_start", this.playerValuesCache);
                            await this.tealium.onVideoEvent("video_segment_view", this.playerValuesCache);
                        }
                    }
                } catch (err) {}
            }, 60000);
            this.sendVideoLoadEvent();
        });
        (0, _defineProperty._)(this, "setLivePlayerValues", (liveObject)=>{
            const region = (0, _tenStore.Store).region.state;
            const liveVideo = liveObject;
            const { endTime, startTime, id } = (liveVideo === null || liveVideo === void 0 ? void 0 : liveVideo.liveShow) || {};
            const showId = id || NONE_FOUND;
            this.playerValuesCache = (0, _objectSpread._)({
                showId,
                showAlias: toLowerWithoutSpaces(liveVideo.liveShow.title),
                showChannel: liveVideo.channel.id,
                showContentFormatType: "Live",
                showContentId: showId,
                showContentVideoId: showId,
                showGenre: liveVideo.liveShow.genre || NONE_FOUND,
                showName: liveVideo.liveShow.title,
                showProgramClassification: liveVideo.liveShow.ratings,
                showContentName: liveVideo.liveShow.title,
                isMemberGatedLive: String(!!liveVideo.memberGated),
                showContentMarket: region,
                oztamPublisherId: liveVideo.liveShow.publisherId,
                videoDuration: Math.abs(endTime - startTime) || NONE_FOUND
            }, this.oztamSessionId && {
                oztamSessionId: this.oztamSessionId
            });
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (playerState)=>{
            if (!this.hasPlayed && playerState === (0, _utils.PlayerStates).Playing) {
                this.hasPlayed = true;
                this.tealium.onVideoEvent("video_start", (0, _objectSpreadProps._)((0, _objectSpread._)({}, this.playerValuesCache), {
                    upNextPlay: false
                }));
                if (!this.currentAd) this.tealium.onVideoEvent("video_segment_view", this.playerValuesCache);
            }
        });
        (0, _defineProperty._)(this, "getCreativeAdId", (ad)=>{
            var _ad_wrappers;
            const creativeId = (ad === null || ad === void 0 ? void 0 : ad.creativeId) || (ad === null || ad === void 0 ? void 0 : ad.creativeAdId) || (ad === null || ad === void 0 ? void 0 : ad.adId);
            if (creativeId) return creativeId;
            const wrapper = ad === null || ad === void 0 ? void 0 : (_ad_wrappers = ad.wrappers) === null || _ad_wrappers === void 0 ? void 0 : _ad_wrappers.find((wrapper)=>(wrapper === null || wrapper === void 0 ? void 0 : wrapper.creative_id) || (wrapper === null || wrapper === void 0 ? void 0 : wrapper.ad_id));
            return (wrapper === null || wrapper === void 0 ? void 0 : wrapper.creative_id) || (wrapper === null || wrapper === void 0 ? void 0 : wrapper.ad_id) || NONE_FOUND;
        });
        (0, _defineProperty._)(this, "getAdEventValues", (ad, adEventValues, customAdType)=>{
            const isInnovidAdEvent = ad && isInnovidAd(ad);
            const baseAdTypeStr = isInnovidAdEvent ? AD_TYPE.INNOVID : adEventValues.adType;
            return (0, _objectSpread._)((0, _objectSpreadProps._)((0, _objectSpread._)({}, adEventValues), {
                adType: customAdType && (AD_TYPE === null || AD_TYPE === void 0 ? void 0 : AD_TYPE[customAdType]) || baseAdTypeStr,
                adAssetId: this.getCreativeAdId(ad)
            }), isInnovidAdEvent && {
                adBrandName: NA,
                adCampaign: NA,
                adIndustry: NA
            });
        });
        (0, _defineProperty._)(this, "onAdStateChange", (currentAd)=>{
            const previousAd = this.currentAd;
            const adEventValues = (0, _objectSpread._)({
                adType: AD_TYPE.MIDROLL
            }, this.playerValuesCache);
            const previousAdEventValues = previousAd && this.getAdEventValues(previousAd, (0, _objectSpreadProps._)((0, _objectSpread._)({}, adEventValues), {
                adFinishTime: currentEpochTimestamp()
            }));
            const currentAdEventValues = currentAd && this.getAdEventValues(currentAd, (0, _objectSpreadProps._)((0, _objectSpread._)({}, adEventValues), {
                adStartTime: currentEpochTimestamp()
            }));
            if (previousAd && currentAd) {
                if (this.lastAdStartTime) {
                    previousAdEventValues.adWatchedDurationSec = currentEpochTimestamp() - this.lastAdStartTime;
                    this.lastAdStartTime = 0;
                }
                this.tealium.onVideoEvent(AD_EVT_TYPE.END, previousAdEventValues);
                this.tealium.onVideoEvent(AD_EVT_TYPE.START, currentAdEventValues);
                this.lastAdStartTime = currentAdEventValues.adStartTime;
            } else if (previousAd && !currentAd) {
                if (this.lastAdStartTime) {
                    previousAdEventValues.adWatchedDurationSec = currentEpochTimestamp() - this.lastAdStartTime;
                    this.lastAdStartTime = 0;
                }
                this.tealium.onVideoEvent(AD_EVT_TYPE.END, previousAdEventValues);
                this.tealium.onVideoEvent("video_segment_view", this.playerValuesCache);
            } else if (!previousAd && currentAd) {
                this.tealium.onVideoEvent(AD_EVT_TYPE.START, currentAdEventValues);
                this.lastAdStartTime = currentAdEventValues.adStartTime;
            }
            this.currentAd = currentAd;
        });
        (0, _defineProperty._)(this, "onTimeUpdate", (time)=>{
            this.currentTime = time;
        });
        (0, _defineProperty._)(this, "onAppErrorReported", (tealiumErrorData)=>{
            if (!tealiumErrorData) return;
            const { errorCode, errorContext, errorSource, errorDetail, errorMessage } = tealiumErrorData;
            const modError = (0, _objectSpread._)({
                errorCode: `${errorContext}:${errorCode}`,
                errorType: errorContext,
                errorDetail,
                errorSource: errorSource || window.location.pathname
            }, errorMessage ? {
                errorMessage
            } : {});
            this.tealium.onErrorEvent(modError);
        });
        (0, _defineProperty._)(this, "onPlayerError", (errorData)=>{
            // always seems to be fatal with this AAMP event
            const errorMessage = `Parent error ${errorData === null || errorData === void 0 ? void 0 : errorData.code}: ${errorData === null || errorData === void 0 ? void 0 : errorData.message}`;
            (0, _messengers.Messengers).tealiumTrackError$.send({
                errorCode: (0, _tealiumClient.TealiumErrorCode).Hls,
                errorContext: (0, _tealiumClient.TealiumErrorContext).STREAM,
                errorDetail: errorMessage,
                errorSource: "",
                errorMessage: errorMessage
            });
        });
    }
}
exports.default = new TealiumBridge();

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/Messengers":"jglQH","../helpers/utils":"5u5wB","../helpers/ten-store":"koGVC","../ten-services/ten-api":"fjPlo","./TealiumClient":"jraqm","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"223vq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _oztamClient = require("./OztamClient");
var _tenStore = require("../helpers/ten-store");
var _utils = require("../helpers/utils");
var _messengers = require("../helpers/Messengers");
var _tenApi = require("../ten-services/ten-api");
const AppVersion = (0, _tenStore.Store).appVersion;
const PROGRESS_INTERVAL_SECONDS = 60;
const SESSION_UPDATER_TIMER_SECONDS = 600;
class OztamBridge {
    constructor(){
        (0, _defineProperty._)(this, "client", null);
        (0, _defineProperty._)(this, "currentTime", -1);
        (0, _defineProperty._)(this, "sessionStarted", false);
        (0, _defineProperty._)(this, "currentAd", null);
        (0, _defineProperty._)(this, "playerState", (0, _utils.PlayerStates).Stopped);
        (0, _defineProperty._)(this, "sessionStartedInAdBreak", false);
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
                (0, _messengers.Messengers).playerState$.addReceiver(this.onPlayerStateChange, true),
                (0, _messengers.Messengers).streamReady$.addReceiver(this.onChannelDataReceived, true),
                (0, _messengers.Messengers).timeUpdate$.addReceiver(this.onTimeUpdate),
                (0, _messengers.Messengers).currentAd$.addReceiver(this.onAdChange),
                (0, _messengers.Messengers).playerError$.addReceiver(this.onAppErrored),
                (0, _messengers.Messengers).id3Metadata$.addReceiver(this.onFragTagParsed),
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.onAppTeardown),
                (0, _messengers.Messengers).appHiddenWithoutAudio$.addReceiver(this.onAppHidden),
                (0, _messengers.Messengers).oztamSessionId$.addReceiver(this.onSessionIdChange)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            var _this_client, _this_client1;
            if (!this.isAppHiddenFromView && !this.adBreakOngoing) (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.progressEvent(this.currentTime);
            (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.setLastPosition(0);
            this.clearProgressInterval();
            this.clearSessionUpdater();
            // reset session ID after but before listener is
            // removed that sets on client
            (0, _messengers.Messengers).oztamSessionId$.send((0, _utils.generateUUID)());
            this.removeEventListeners();
            this.sessionStarted = false;
            this.adBreakOngoing = false;
            this.isAppHiddenFromView = false;
            this.justRegeneratedSessionId = false;
            this.sessionStartedInAdBreak = false;
            this.currentTime = -1;
            this.currentAd = null;
            this.hasStartedTrackingProgressDuringAppLaunch = false;
            this.playerState = (0, _utils.PlayerStates).Initialising;
        });
        (0, _defineProperty._)(this, "onChannelDataReceived", async (channelData)=>{
            if (!(channelData === null || channelData === void 0 ? void 0 : channelData.liveShow)) return;
            const ipAddress = (0, _tenStore.Store).ipAddress.ip;
            const { liveShow: { publisherId, title: programName, id: seriesId, title: seriesName, genre }, channel: { id: channelId } } = channelData;
            const platformString = (0, _tenStore.Store).deviceBrand.toLowerCase() === "soip-pck" ? "Puck" : "TV";
            const oztamStaticConfig = {
                vendorVersion: `Tenplay_Foxtel-${platformString}-Linear_${AppVersion}`,
                connectionType: (0, _tenStore.Store).deviceNetworkConnection,
                deviceId: (0, _tenStore.Store).deviceId,
                baseUrl: (0, _tenStore.Store).ApiConfig.ozTamUrl,
                ipAddress: ipAddress,
                userId: (0, _tenStore.Store).UserInfo.OzTamId
            };
            const oztamStreamConfig = {
                eventIdentificationData: {
                    publisherId,
                    mediaId: channelData.liveStreamId,
                    mediaDuration: 0,
                    mediaType: "live"
                },
                streamMetadata: {
                    channel: channelId,
                    seriesId,
                    seriesName,
                    programName,
                    genre
                }
            };
            if (!this.client) this.client = new (0, _oztamClient.OzTamClient)((0, _messengers.Messengers).oztamSessionId$.getCurrentValue(), (0, _messengers.Messengers));
            this.client.init(oztamStaticConfig, oztamStreamConfig);
            this.client.loadEvent();
        });
        (0, _defineProperty._)(this, "onTimeUpdate", (time)=>{
            this.currentTime = time;
            if (!this.sessionStarted) this.tryToBegin();
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (playerState)=>{
            const previousState = this.playerState;
            this.playerState = playerState;
            if (this.isAppHiddenFromView) return;
            if (playerState === (0, _utils.PlayerStates).Playing && previousState !== (0, _utils.PlayerStates).Playing) {
                if (!this.currentAd && this.sessionStarted) {
                    var _this_client;
                    // Resume playing content after pause, seek etc
                    console.log("[acc] oztam resumed");
                    this.startProgressInterval();
                    (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.setLastPosition(this.currentTime);
                }
                if (this.justRegeneratedSessionId) {
                    // first playing event after regenerate -> send load & begin
                    this.justRegeneratedSessionId = false;
                    this.loadEvent(this.currentTime);
                    this.tryToBegin();
                } else if (!this.sessionStarted) // if start in ad break let ad begin event go first
                this.tryToBegin();
            }
            // Log progress from last interval to when stream was paused
            // or seeked, buffering
            if (playerState !== (0, _utils.PlayerStates).Playing && previousState === (0, _utils.PlayerStates).Playing && !this.currentAd && this.sessionStarted) {
                var _this_client1;
                console.log("[acc] oztam no longer playing");
                (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.progressEvent(this.currentTime);
                this.clearProgressInterval();
                this.setupSessionUpdater();
            }
        });
        (0, _defineProperty._)(this, "onAdChange", (currentAd)=>{
            const previousAd = this.currentAd;
            this.currentAd = currentAd;
            if (this.isAppHiddenFromView) return;
            // AD CHANGE IN BREAK
            if (previousAd && this.currentAd) {
                var _this_client, _this_client1, _this_client2;
                (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.adCompleteEvent(this.currentTime);
                (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.progressEvent(this.currentTime);
                (_this_client2 = this.client) === null || _this_client2 === void 0 ? void 0 : _this_client2.adBeginEvent(this.currentTime);
            // AD BREAK END
            } else if (previousAd && !this.currentAd) {
                var _this_client3, _this_client4;
                (_this_client3 = this.client) === null || _this_client3 === void 0 ? void 0 : _this_client3.adCompleteEvent(this.currentTime);
                (_this_client4 = this.client) === null || _this_client4 === void 0 ? void 0 : _this_client4.progressEvent(this.currentTime);
                this.startProgressInterval();
            // AD BREAK START
            } else if (!previousAd && this.currentAd) {
                if (!this.sessionStarted) this.tryToBegin();
                else {
                    var _this_client5, _this_client6;
                    (_this_client5 = this.client) === null || _this_client5 === void 0 ? void 0 : _this_client5.progressEvent(this.currentTime);
                    (_this_client6 = this.client) === null || _this_client6 === void 0 ? void 0 : _this_client6.adBeginEvent(this.currentTime);
                    this.clearProgressInterval();
                }
            }
        });
        (0, _defineProperty._)(this, "tryToBegin", (restartExistingSession = false)=>{
            if (this.isAppHiddenFromView || this.playerState !== (0, _utils.PlayerStates).Playing || this.currentTime <= 0) return;
            if (!this.sessionStarted || restartExistingSession) {
                var _this_client;
                if (!restartExistingSession) (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.beginEvent(this.currentTime);
                if (!!this.currentAd) this.client.adBeginEvent(this.currentTime);
                else this.startProgressInterval();
                this.sessionStarted = true;
            }
        });
        (0, _defineProperty._)(this, "onFragTagParsed", (aampId3Data)=>{
            const { presentationTime, timeScale, data } = aampId3Data.detail;
            const id3TagTime = presentationTime / timeScale;
            let rawTag = "";
            data.forEach((charCode)=>{
                const char = String.fromCharCode(charCode);
                rawTag += char;
            });
            if (rawTag) {
                const isAdTag = rawTag.includes("google");
                if (isAdTag) {
                    if (!this.sessionStarted) this.sessionStartedInAdBreak = true;
                } else if (!this.sessionStartedInAdBreak) {
                    var // from what we remember, ten wanted to not track at all if we dont have timing sorted
                    _this_client;
                    // only set a pts epoch diff if we start in content
                    // otherwise we won't know the correct starting value
                    // and will jump back in time when content resumes
                    const isoDateString = rawTag.replace(/[^a-zA-Z0-9:\-.]|(ID3)|(TDRL)/g, "");
                    const tagUnixTime = new Date(isoDateString.toUpperCase()).getTime() / 1000;
                    if (tagUnixTime) {
                        var _this_client1, _this_client2;
                        (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.setPtsEpochDiff(tagUnixTime - id3TagTime);
                        (_this_client2 = this.client) === null || _this_client2 === void 0 ? void 0 : _this_client2.setStopRecordingEvents(false);
                    } else (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.setStopRecordingEvents(true);
                }
            }
        });
        (0, _defineProperty._)(this, "onAppHidden", (isHidden)=>{
            if (this.isAppHiddenFromView === isHidden) return;
            this.isAppHiddenFromView = isHidden;
            console.log("[acc] change hidden state in oztam", isHidden);
            // change to hidden
            if (this.isAppHiddenFromView) {
                var // partial progress
                _this_client;
                if (this.sessionStarted && !this.adBreakOngoing) (_this_client = this.client) === null || _this_client === void 0 ? void 0 : _this_client.progressEvent(this.currentTime);
                this.clearProgressInterval();
                if (this.sessionStarted || !this.hasStartedTrackingProgressDuringAppLaunch) this.setupSessionUpdater();
            } else // change to foreground
            if (!this.sessionStarted) {
                var // Only send load event if we've already tracked and are re-starting
                // a sessionn
                // Handles case where load event fired on startup and then
                // again when hidden set to false
                _this_client1;
                // probably was hidden long enough to regenerate session ID
                if (this.hasStartedTrackingProgressDuringAppLaunch) (_this_client1 = this.client) === null || _this_client1 === void 0 ? void 0 : _this_client1.loadEvent(this.currentTime);
                // begin as new session
                this.tryToBegin();
            } else {
                var // un-hidden within same session, try to begin means starting
                // again in ad break or content, pass true to bypass begin event
                _this_client2;
                (_this_client2 = this.client) === null || _this_client2 === void 0 ? void 0 : _this_client2.setLastPosition(this.currentTime);
                this.tryToBegin(true);
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

},{"@swc/helpers/_/_define_property":"9kWBJ","./OztamClient":"diFva","../helpers/ten-store":"koGVC","../helpers/utils":"5u5wB","../helpers/Messengers":"jglQH","../ten-services/ten-api":"fjPlo","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"diFva":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OzTamClient", ()=>OzTamClient);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../helpers/utils");
var _tealiumClient = require("./TealiumClient");
const roundPosition = (pos)=>Math.round(pos * 10) / 10;
class OzTamClient {
    constructor(sessionId, messengers){
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
        (0, _defineProperty._)(this, "messengers", null);
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
            const isLoadOrBegin = [
                (0, _utils.OztamEventType).LOAD,
                (0, _utils.OztamEventType).BEGIN
            ].includes(event.event);
            if (!isLoadOrBegin) {
                let boundedPosition = Math.max(0, toPosition);
                boundedPosition = Math.min(fromPosition + 60, boundedPosition);
                event.fromPosition = roundPosition(fromPosition);
                event.toPosition = roundPosition(boundedPosition);
            }
            if (this.isLive && !isLoadOrBegin) {
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
                this.messengers.tealiumTrackError$.send({
                    errorCode: (0, _tealiumClient.TealiumErrorCode).OztamPostRequest,
                    errorDetail: JSON.stringify(error),
                    errorMessage: error.message,
                    errorSource: this.baseUrl,
                    errorContext: (0, _tealiumClient.TealiumErrorContext).API
                });
            }
        });
        this.messengers = messengers;
        if (sessionId) this.sessionId = sessionId;
    }
}

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/utils":"5u5wB","./TealiumClient":"jraqm","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}]},["j1MJY"], null, "parcelRequire0a42")

//# sourceMappingURL=index.js.map
