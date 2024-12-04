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
})({"84H5P":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "bebc91dccb5f5641";
module.bundle.HMR_BUNDLE_ID = "a24509c4f89fc0e6";
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

},{}],"3nx3e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>AbcProvider);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _abcStore = require("./helpers/abc-store");
var _messengerLink = require("./helpers/MessengerLink");
var _messengers = require("./helpers/Messengers");
var _providerUtils = require("../provider-utils");
var _utils = require("./helpers/utils");
var _abcApiJs = require("./abc-services/abc-api.js");
var _oztamBridge = require("./analytics/OztamBridge");
var _oztamBridgeDefault = parcelHelpers.interopDefault(_oztamBridge);
var _googleTagManager = require("./analytics/GoogleTagManager");
var _googleTagManagerDefault = parcelHelpers.interopDefault(_googleTagManager);
var _abcLogin = require("./abc-services/abc-login");
class AbcProvider {
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
        const { glassConfigure: { brand: devicePlatform, version: deviceOSVersion }, uuid: deviceId } = deviceInfo;
        const { connectionType: networkConnectionType } = glassContentOptions;
        console.info("[acc] ABC received startup data", {
            glassAssetLocator,
            glassAssetLocatorParsed: {
                gracenoteId,
                provider,
                providerId
            },
            glassContentOptions,
            deviceInfo
        });
        let channelCodesArray;
        try {
            channelCodesArray = JSON.parse(providerId);
        } catch (err) {
            throw new (0, _providerUtils.MLEError)("Could not parse ABC channel info from provider info", (0, _providerUtils.ErrorTypes).CHANNEL_MAP);
        }
        console.info(`[acc] Accedo version ${(0, _abcStore.Store).appVersion}, parent app version ${deviceInfo.appVersion}, player version ${deviceInfo.playerVersion}`);
        (0, _abcStore.Store).deviceId = deviceId;
        (0, _abcStore.Store).devicePlatform = devicePlatform;
        (0, _abcStore.Store).deviceFirmwareVersion = deviceOSVersion;
        if (networkConnectionType.toLowerCase() === "ethernet") (0, _abcStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).LAN;
        else if (networkConnectionType.toLowerCase() === "wifi") (0, _abcStore.Store).deviceNetworkConnection = (0, _utils.NetworkConnectionType).WIFI;
        // dont really need anything from login so we do it at the same time
        // as getSourceUrl for startup time. Can separate out later if need be
        const [, sourceInfo] = await Promise.all([
            (0, _abcLogin.tryLogin)(),
            (0, _abcApiJs.getSourceUrl)(channelCodesArray)
        ]);
        console.log("[acc] passing back url " + sourceInfo.sourceUrl);
        return {
            aampInitConfigOverrides: (0, _objectSpread._)({
                useAbsoluteTimeline: false
            }, (_this_config = this.config) === null || _this_config === void 0 ? void 0 : _this_config.aampInitConfigRemoteOverrides),
            streams: [
                {
                    url: sourceInfo.sourceUrl,
                    drmConfig: {
                        [(0, _abcStore.Store).preferredDrmSystem]: (0, _abcStore.Store).licenseAcquisitionUrl,
                        preferredKeysystem: (0, _abcStore.Store).preferredDrmSystem
                    },
                    requestHeaders: [
                        {
                            key: "customdata",
                            value: sourceInfo.drmLicenseKey,
                            isLicenseRequest: true
                        }
                    ]
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
        (0, _googleTagManagerDefault.default).init();
    }
    monitoringTeardown() {
        console.log("[acc] call monitoringTeardown");
        if (this.messengerLink && this.videoElement) this.messengerLink.unlinkVideoElementListeners(this.videoElement);
        (0, _messengers.Messengers).appTeardown$.send();
        Object.keys((0, _messengers.Messengers)).forEach((key)=>(0, _messengers.Messengers)[key].reset());
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","./helpers/abc-store":"yPJgY","./helpers/MessengerLink":"lt8Kx","./helpers/Messengers":"d0v0w","../provider-utils":"jTFkH","./helpers/utils":"GQ6yF","./abc-services/abc-api.js":"1TgsY","./analytics/OztamBridge":"6YJsW","./analytics/GoogleTagManager":"4GY6p","./abc-services/abc-login":"9dspL","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9kWBJ":[function(require,module,exports) {
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

},{"./_define_property.js":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"yPJgY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Store", ()=>Store);
var _utils = require("./utils");
var _packageJson = require("../package.json");
var _packageJsonDefault = parcelHelpers.interopDefault(_packageJson);
const abcStagConfigKey = "au.com.abc_USE_STAGING_CONFIG";
// run this in debugger to set staging config, then refresh page
// localStorage.setItem("au.com.abc_USE_STAGING_CONFIG", "true");
const useProdConfig = localStorage.getItem(abcStagConfigKey) !== "true";
const Store = {
    appVersion: (0, _packageJsonDefault.default).version,
    deviceId: "",
    devicePlatform: "",
    deviceFirmwareVersion: "",
    useProdConfig,
    deviceNetworkConnection: (0, _utils.NetworkConnectionType).UNKNOWN,
    preferredDrmSystem: "com.widevine.alpha",
    licenseAcquisitionUrl: "https://widevine.keyos.com/api/v4/getLicense",
    clientId: "dd497fc5-4e50-4604-b453-d70c9863f120",
    baseUrls: useProdConfig ? {
        channelMap: "https://iview.abc.net.au/foxtel-fac/channelMapping.json",
        api: "https://api.iview.abc.net.au",
        login: "https://mylogin-api.abc.net.au",
        seesaw: "https://api.seesaw.abc.net.au"
    } : {
        channelMap: "https://au-proxy.apac.ninja/abc-prod-api-proxy/foxtel-fac/channelMapping.json",
        api: "https://au-proxy.apac.ninja/abc-stage-api-proxy",
        login: "https://au-proxy.apac.ninja/abc-stage-login-proxy",
        seesaw: "https://au-proxy.apac.ninja/abc-stage-seesaw-proxy"
    },
    UserInfo: {
        uid: "<empty>",
        displayName: "<empty>",
        accountType: "<empty>",
        consent: "<empty>",
        email: "<empty>"
    },
    AuthTokens: {
        accessToken: "<empty>",
        refreshToken: "<empty>",
        expiresIn: "<empty>"
    }
};

},{"./utils":"GQ6yF","../package.json":"8SenH","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"GQ6yF":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8SenH":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"au.com.abc","version":"1.0.49","description":"","main":"index.js","scripts":{"test":"echo \\"Error: no test specified\\" && exit 1"},"author":"","license":"ISC","dependencies":{}}');

},{}],"lt8Kx":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","./utils":"GQ6yF","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"d0v0w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Messengers", ()=>Messengers);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _messenger = require("./Messenger");
var _utils = require("./utils");
class MessengersClass {
    constructor(){
        // ABC specific
        (0, _defineProperty._)(this, "streamReady$", new (0, _messenger.Messenger)(null));
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

},{"@swc/helpers/_/_define_property":"9kWBJ","./Messenger":"l6JAr","./utils":"GQ6yF","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"l6JAr":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"1TgsY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSourceUrl", ()=>getSourceUrl);
parcelHelpers.export(exports, "getDrmToken", ()=>getDrmToken);
var _abcStore = require("../helpers/abc-store");
var _messengers = require("../helpers/Messengers");
var _providerUtils = require("../../provider-utils");
const abcBaseUrl = (0, _abcStore.Store).baseUrls.api;
const getSourceUrl = async (channelCodesArray)=>{
    var _channelCodesArray_;
    let houseNumber;
    // Use the housenumber to get the matching channel
    const currentDate = new Date(); // Gets current time by default
    channelCodesArray.forEach((program)=>{
        if (program.start && program.end) {
            const [programStartHours, programStartMinutes] = program.start.split(":").map((res)=>{
                return Number(res);
            });
            const [programEndHours, programEndMinutes] = program.end.split(":").map((res)=>{
                return Number(res);
            });
            const currentTimestamp = currentDate.getUTCHours() + currentDate.getUTCMinutes() / 60;
            const programStartTime = programStartHours + programStartMinutes / 60;
            const programEndTime = programEndHours + programEndMinutes / 60;
            if (programStartTime < programEndTime) {
                if (currentTimestamp >= programStartTime && currentTimestamp < programEndTime) houseNumber = program.houseNumber;
            } else if (programStartTime > programEndTime) {
                if (currentTimestamp > programStartTime && currentTimestamp <= 24 || currentTimestamp < programEndTime && currentTimestamp >= 0) houseNumber = program.houseNumber;
            }
        }
    });
    // Set the house number to the first available program if none were overlapping the broadcast time
    if (!houseNumber) houseNumber = (_channelCodesArray_ = channelCodesArray[0]) === null || _channelCodesArray_ === void 0 ? void 0 : _channelCodesArray_.houseNumber;
    if (!houseNumber) throw new (0, _providerUtils.MLEError)("No available house number given data", (0, _providerUtils.ErrorTypes).CHANNEL_MAP);
    const abcChannelUrl = `${abcBaseUrl}/v3/video/${houseNumber}`;
    let matchingChannelData;
    try {
        const channelRequest = await fetch(abcChannelUrl);
        if (!channelRequest.ok) throw new Error();
        matchingChannelData = await channelRequest.json();
    } catch (err) {
        throw new (0, _providerUtils.MLEError)("Could not get channel data for provided house number", (0, _providerUtils.ErrorTypes).PROVIDER);
    }
    (0, _messengers.Messengers).streamReady$.send(matchingChannelData);
    if (matchingChannelData._embedded) {
        const videoData = matchingChannelData._embedded.playlist[0];
        const sourceUrl = videoData.streams.mpegdash[720] || videoData.streams.mpegdash[Object.keys(videoData["stream-labels"])[0]];
        const drmLicenseKey = await getDrmToken((0, _abcStore.Store).clientId, houseNumber);
        return {
            sourceUrl,
            drmLicenseKey: drmLicenseKey
        };
    } else throw new (0, _providerUtils.MLEError)("Could not retrieve video stream from the abc api.", (0, _providerUtils.ErrorTypes).PROVIDER);
};
const getDrmToken = async (clientId, houseNumber)=>{
    const jwtUrl = abcBaseUrl + "/v3/token/jwt";
    const drmTokenUrl = abcBaseUrl + "/v3/token/drm/" + houseNumber;
    const clientData = "clientId=" + clientId;
    try {
        const jwtTokenResponse = await fetch(jwtUrl, {
            method: "POST",
            headers: {
                "content-type": "application/x-www-form-urlencoded"
            },
            body: clientData
        });
        const jwtToken = (await jwtTokenResponse.json()).token;
        if (jwtToken) {
            const drmResponse = await fetch(drmTokenUrl, {
                headers: {
                    authorization: "Bearer " + jwtToken,
                    "content-type": "application/json; charset=utf-8"
                }
            });
            const drmLicenseKey = (await drmResponse.json()).license;
            if (drmLicenseKey) return drmLicenseKey;
            else throw Error("Faild to get drm license key from abc");
        } else throw Error("Failed to get jwt token from abc");
    } catch (err) {
        throw new (0, _providerUtils.MLEError)("Could not retrieve drm token from the abc api", (0, _providerUtils.ErrorTypes).PROVIDER);
    }
};

},{"../helpers/abc-store":"yPJgY","../helpers/Messengers":"d0v0w","../../provider-utils":"jTFkH","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"6YJsW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _oztamClient = require("./OztamClient");
var _utils = require("../helpers/utils");
var _messengers = require("../helpers/Messengers");
var _abcStore = require("../helpers/abc-store");
const AppVersion = (0, _abcStore.Store).appVersion;
const OztamBaseUrl = (0, _abcStore.Store).useProdConfig ? "https://deliver.oztam.com.au/api/meter" : "https://sdeliver.oztam.com.au/api/meter";
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
            var _channelData_analytics;
            if (!channelData) return;
            if (channelData === null || channelData === void 0 ? void 0 : (_channelData_analytics = channelData.analytics) === null || _channelData_analytics === void 0 ? void 0 : _channelData_analytics.oztam) {
                const oztam = channelData.analytics.oztam;
                const platformString = (0, _abcStore.Store).devicePlatform.toLowerCase() === "soip-pck" ? "Puck" : "TV";
                const oztamStaticConfig = {
                    vendorVersion: `ABC_Foxtel-${platformString}-Linear_${AppVersion}`,
                    connectionType: (0, _abcStore.Store).deviceNetworkConnection,
                    deviceId: (0, _abcStore.Store).deviceId,
                    baseUrl: OztamBaseUrl
                };
                const oztamStreamConfig = {
                    eventIdentificationData: {
                        publisherId: oztam.publisherId,
                        mediaId: oztam.mediaId,
                        mediaDuration: oztam.mediaDuration,
                        mediaType: "live",
                        protocolVersion: "1.1.0",
                        demo1: oztam.demo1
                    },
                    streamMetadata: {
                        channel: oztam.channel,
                        classification: oztam.classification,
                        seriesId: oztam.seriesId,
                        seriesName: oztam.seriesName,
                        episodeId: oztam.episodeId
                    }
                };
                if (!this.client) this.client = new (0, _oztamClient.OzTamClient)((0, _messengers.Messengers).oztamSessionId$.getCurrentValue());
                this.client.init(oztamStaticConfig, oztamStreamConfig);
                this.client.loadEvent();
            } else console.log("WARNING: OzTam data not provided by the api response.");
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
                    console.log("oztam resumed");
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
                console.log("oztam no longer playing");
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
        (0, _defineProperty._)(this, "onAppErrored", (error)=>{
            var _this_client;
            if (!error) return;
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

},{"@swc/helpers/_/_define_property":"9kWBJ","./OztamClient":"cUPPY","../helpers/utils":"GQ6yF","../helpers/Messengers":"d0v0w","../helpers/abc-store":"yPJgY","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"cUPPY":[function(require,module,exports) {
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

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/utils":"GQ6yF","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"8Y68S":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"4GY6p":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _defineProperty = require("@swc/helpers/_/_define_property");
var _objectSpread = require("@swc/helpers/_/_object_spread");
var _objectSpreadProps = require("@swc/helpers/_/_object_spread_props");
var _utils = require("../helpers/utils");
var _messengers = require("../helpers/Messengers");
var _abcStore = require("../helpers/abc-store");
const ABC_GTM_ID = "GTM-PB2GX";
const AppVersion = (0, _abcStore.Store).appVersion;
const gtmEnvironment = (0, _abcStore.Store).useProdConfig ? "production" : "staging";
class GoogleTagManager {
    constructor(){
        (0, _defineProperty._)(this, "channelData", null);
        (0, _defineProperty._)(this, "currentPlayerState", null);
        (0, _defineProperty._)(this, "currentTime", 0);
        (0, _defineProperty._)(this, "videoPlaybackStartTime", null);
        (0, _defineProperty._)(this, "videoPlaybackStarted", false);
        (0, _defineProperty._)(this, "gtmExtraProgressEventMarkers", [
            15,
            30
        ]);
        (0, _defineProperty._)(this, "lastRoundedElapsedTime", 0);
        (0, _defineProperty._)(this, "GA_EVENTS", {
            PLAY: "play",
            PROGRESS: "progress"
        });
        (0, _defineProperty._)(this, "listeners", []);
        (0, _defineProperty._)(this, "googleIframe", null);
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
                (0, _messengers.Messengers).appTeardown$.addReceiver(this.removeEventListeners)
            ];
        });
        (0, _defineProperty._)(this, "removeEventListeners", ()=>{
            this.listeners.forEach((receiver)=>receiver.unlisten());
            this.listeners = [];
        });
        (0, _defineProperty._)(this, "onAppTeardown", ()=>{
            this.removeEventListeners();
            this.googleIframe.contentDocument.cookie = "enable_analytics_staging=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
            this.channelData = null;
            this.currentPlayerState = null;
            this.currentTime = 0;
            this.videoPlaybackStartTime = null;
            this.videoPlaybackStarted = false;
            this.gtmExtraProgressEventMarkers = [
                15,
                30
            ];
        });
        (0, _defineProperty._)(this, "onTimeUpdate", (time)=>{
            // Set the video playback start time to calculate the elapsed time (video playback doesn't start at 0 seconds)
            if (this.videoPlaybackStarted && this.videoPlaybackStartTime === null) this.videoPlaybackStartTime = time;
            this.currentTime = time;
            // Monitor the progress events
            this.checkGTMProgressIntervals();
        });
        (0, _defineProperty._)(this, "checkGTMProgressIntervals", ()=>{
            // Sends a GTM progress event at 15s, 30s and 60s once then sends an event every 60s indefinitely
            if (this.videoPlaybackStartTime !== null) {
                const elapsedTime = Math.round(this.currentTime - this.videoPlaybackStartTime);
                if (elapsedTime === this.lastRoundedElapsedTime) return;
                this.lastRoundedElapsedTime = elapsedTime;
                if (this.channelData && (this.gtmExtraProgressEventMarkers.length !== 0 && this.gtmExtraProgressEventMarkers[0] <= elapsedTime || elapsedTime % 60 === 0)) try {
                    this.gtmProgressEvent(this.channelData.analytics.dataLayer, elapsedTime);
                    if (this.gtmExtraProgressEventMarkers.length) this.gtmExtraProgressEventMarkers.shift();
                } catch (e) {
                    console.log(Error("[acc] WARNING: Google Tag Manager progress event failed."));
                }
            }
        });
        (0, _defineProperty._)(this, "onChannelDataReceived", (channelData)=>{
            this.channelData = channelData;
        });
        (0, _defineProperty._)(this, "onPlayerStateChange", (playerState)=>{
            var _this_channelData;
            // Update the player state and send a GTM play event if player changes to playing state
            const previousPlayerState = this.currentPlayerState;
            this.currentPlayerState = playerState;
            if (this.currentPlayerState === (0, _utils.PlayerStates).Playing && previousPlayerState !== (0, _utils.PlayerStates).Playing && ((_this_channelData = this.channelData) === null || _this_channelData === void 0 ? void 0 : _this_channelData.analytics.dataLayer)) {
                this.videoPlaybackStarted = true;
                try {
                    this.gtmPlayEvent(this.channelData.analytics.dataLayer, 0);
                } catch (e) {
                    console.log(Error("[acc] WARNING: Google Tag Manager play event failed."));
                }
            }
        });
        (0, _defineProperty._)(this, "emitAnalyticsEvent", (data)=>{
            var _this_googleIframe_contentWindow, _this_googleIframe;
            if (!((_this_googleIframe = this.googleIframe) === null || _this_googleIframe === void 0 ? void 0 : (_this_googleIframe_contentWindow = _this_googleIframe.contentWindow) === null || _this_googleIframe_contentWindow === void 0 ? void 0 : _this_googleIframe_contentWindow.dataLayer)) return;
            console.log("[acc] ### Pushing GTM event", data.event);
            this.googleIframe.contentWindow.dataLayer.push(data);
        });
        (0, _defineProperty._)(this, "nestFromNamespace", (obj, separator = "_")=>{
            const result = {
                id: "",
                contentType: "",
                contentSource: "",
                uri: "",
                program: {
                    id: "",
                    name: ""
                },
                episode: {
                    id: "",
                    name: null
                },
                language: "",
                canonicalUrl: "",
                classification: "",
                mediaDuration: "",
                captionsAvailable: "",
                streamType: "",
                videoType: "",
                title: {
                    title: ""
                },
                categories: ""
            };
            Object.keys(obj).forEach((key)=>{
                // Accumulate
                let _result = result;
                const parts = key.split(separator);
                parts.forEach((namespace, index)=>{
                    if (index < parts.length - 1) {
                        _result[namespace] = _result[namespace] || {};
                        _result = _result[namespace];
                    } else _result[namespace] = obj[key];
                });
                return _result;
            });
            return result;
        });
        (0, _defineProperty._)(this, "processAnalyticsData", (analyticsData)=>{
            const keyModifiedData = Object.keys(analyticsData).reduce((acc, key)=>(0, _objectSpreadProps._)((0, _objectSpread._)({}, acc), {
                    [key.replace("d_", "")]: analyticsData[key]
                }), {
                id: "",
                contentType: "",
                contentSource: "",
                uri: "",
                program_name: "",
                program_id: "",
                episode_name: null,
                episode_id: "",
                language: "",
                canonicalUrl: "",
                classification: "",
                mediaDuration: "",
                captionsAvailable: "",
                streamType: "",
                videoType: "",
                title_title: "",
                categories: ""
            });
            const parsedData = this.nestFromNamespace(keyModifiedData);
            return Object.assign({}, {
                document: (0, _objectSpreadProps._)((0, _objectSpread._)({}, parsedData), {
                    embedded: {
                        [parsedData.uri]: parsedData
                    }
                })
            });
        });
        // Video events
        (0, _defineProperty._)(this, "gtmVideoEvent", (data, event)=>{
            const analyticsModel = this.processAnalyticsData(data.base);
            const baseModel = {
                event,
                events: data.events
            };
            this.emitAnalyticsEvent((0, _objectSpread._)({}, baseModel, analyticsModel));
        });
        (0, _defineProperty._)(this, "gtmPlayEvent", (analyticsData, time)=>{
            const data = {
                base: analyticsData,
                events: {
                    elapsedSeconds: time,
                    uri: analyticsData.d_uri
                }
            };
            this.gtmVideoEvent(data, this.GA_EVENTS.PLAY);
        });
        (0, _defineProperty._)(this, "gtmProgressEvent", (analyticsData, time)=>{
            const data = {
                base: analyticsData,
                events: {
                    elapsedSeconds: time,
                    uri: analyticsData.d_uri
                }
            };
            this.gtmVideoEvent(data, this.GA_EVENTS.PROGRESS);
        });
        // load google tag manager in separate iframe, we do not want to add ABC analytics for the entirety of
        // MLE by putting it in the parent index.html, nor can we append it in the child iframe because it
        // depends on the document onLoad function. So we add a grandchild to this happy family
        this.googleIframe = document.createElement("iframe");
        this.googleIframe.setAttribute("src", `./au.com.abc_GTM-iframe.html?gtmId=${ABC_GTM_ID}&appVersion=${AppVersion}&gtmEnvironment=${gtmEnvironment}`);
        this.googleIframe.width = 1920;
        this.googleIframe.height = 1080;
        this.googleIframe.style.visibility = "hidden";
        document.body.appendChild(this.googleIframe);
        if (!(0, _abcStore.Store).useProdConfig) this.googleIframe.contentDocument.cookie = "enable_analytics_staging=true; expires=Thu, 18 Dec 2028 12:00:00 UTC;";
    }
}
exports.default = new GoogleTagManager();

},{"@swc/helpers/_/_define_property":"9kWBJ","@swc/helpers/_/_object_spread":"lupAG","@swc/helpers/_/_object_spread_props":"8Y68S","../helpers/utils":"GQ6yF","../helpers/Messengers":"d0v0w","../helpers/abc-store":"yPJgY","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}],"9dspL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tryLogin", ()=>tryLogin);
var _providerUtils = require("../../provider-utils");
var _messengers = require("../helpers/Messengers");
var _abcStore = require("../helpers/abc-store");
const PRODUCT_ID = "iview";
const tryLogin = async ()=>{
    // Request for user info based on device ID
    const deviceId = (0, _abcStore.Store).deviceId;
    const deviceStatusRequest = await fetch(`${(0, _abcStore.Store).baseUrls.login}/latest/ctv/status?deviceId=${deviceId}&productId=${PRODUCT_ID}`);
    if (!deviceStatusRequest.ok) throw new (0, _providerUtils.MLEError)((0, _providerUtils.ErrorTypes).AUTH, `Auth status request fail`, deviceStatusRequest.status);
    const deviceStatusResponse = await deviceStatusRequest.json();
    if (deviceStatusRequest.status >= 400) throw new (0, _providerUtils.MLEError)((0, _providerUtils.ErrorTypes).AUTH, `Not logged in ${deviceStatusResponse === null || deviceStatusResponse === void 0 ? void 0 : deviceStatusResponse.error}`, deviceStatusRequest.status);
    const UID = deviceStatusResponse.UID;
    (0, _abcStore.Store).UserInfo = {
        uid: deviceStatusResponse.UID,
        displayName: deviceStatusResponse.displayName,
        accountType: deviceStatusResponse.accountType,
        consent: deviceStatusResponse.consent.isConsentGranted,
        email: deviceStatusResponse.email
    };
// Request for tokens based on user UID
// We dont use the tokens for anything
// so have commented this part out. Maybe we need these tokens later??
// const tokenRequest = await fetch(
//     `${Store.baseUrls.seesaw}/v2/token?UID=${UID}&source=${PRODUCT_ID}`
// );
// if (!tokenRequest.ok) {
//     throw new MLEError(
//         ErrorTypes.AUTH,
//         `Token request fail`,
//         tokenRequest.status
//     );
// }
// const tokenResponse = await tokenRequest.json();
// if (tokenRequest.status >= 400 || !tokenResponse.auth) {
//     throw new MLEError(
//         ErrorTypes.AUTH,
//         `Token request denied ${tokenResponse?.error}`,
//         tokenRequest.status
//     );
// }
// Store.AuthTokens = {
//     accessToken: tokenResponse.auth.access_token,
//     refreshToken: tokenResponse.auth.refresh_token,
//     expiresIn: tokenResponse.auth.expiry,
// };
};

},{"../../provider-utils":"jTFkH","../helpers/Messengers":"d0v0w","../helpers/abc-store":"yPJgY","@parcel/transformer-js/src/esmodule-helpers.js":"840Gs"}]},["84H5P"], null, "parcelRequire0a42")

//# sourceMappingURL=index.js.map
