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
})({"iTLMm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "bebc91dccb5f5641";
module.bundle.HMR_BUNDLE_ID = "d6963ae7d988f6f2";
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

},{}],"aZ3yp":[function(require,module,exports) {
/*! (C) 2024 Conviva, Inc. All rights reserved. Confidential and proprietary. */ !function(t, n) {
    "function" === typeof define && define.amd ? define(n) : module.exports = n(), "undefined" === typeof t || !t || t.Conviva || t.ConvivaLoading || (t.ConvivaLoading = !0, t.Conviva = n(), delete t.ConvivaLoading);
}(this, function() {
    var lt = {};
    return function() {
        "use strict";
        var n, s, V, k, o, r, F, e, u, g, a, f, c, I, B, H, G, j, K, W, Y, x, h, i, l, q, w, J, X, d, v, E, _, R, Q, p, A, T, S, O, N, Z, z, C, $, tt, nt, y, it, et, st, m, ot, D, P, b, M, rt, ut, L, ht, at, U = {};
        function ft() {
            var t, n = "";
            for("-" === s && r(n = "-"); s >= "0" && s <= "9";)n += s, r();
            if ("." === s) for(n += "."; r() && s >= "0" && s <= "9";)n += s;
            if ("e" === s || "E" === s) for(n += s, r(), "-" !== s && "+" !== s || (n += s, r()); s >= "0" && s <= "9";)n += s, r();
            if (t = +n, !isNaN(t)) return t;
            o("Bad number");
        }
        function t(t) {
            return t < 10 ? "0" + t : t;
        }
        function ct(t) {
            return E.lastIndex = 0, E.test(t) ? '"' + t.replace(E, function(t) {
                var n = Q[t];
                return "string" === typeof n ? n : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + t + '"';
        }
        g = lt.Constants = {
            version: "4.7.8",
            CUSTOMER_KEY: "customerKey",
            GATEWAY_URL: "gatewayUrl",
            LOG_LEVEL: "logLevel",
            ASSET_NAME: "Conviva.assetName",
            PLAYER_NAME: "Conviva.applicationName",
            APPLICATION_VERSION: "c3.app.version",
            IS_LIVE: "Conviva.streamType",
            ENCODED_FRAMERATE: "Conviva.encodedFrameRate",
            DEFAULT_RESOURCE: "Conviva.defaultResource",
            STREAM_URL: "Conviva.streamUrl",
            VIEWER_ID: "Conviva.viewerId",
            DURATION: "Conviva.duration",
            UTM_TRACKING_URL: "c3.cm.utmTrackingUrl",
            POD_INDEX: "podIndex",
            POD_POSITION: "podPosition",
            POD_DURATION: "podDuration",
            AD_TYPE: "adType",
            MODULE_NAME: "Conviva.moduleName",
            MODULE_VERSION: "Conviva.moduleVersion",
            FRAMEWORK_NAME: "Conviva.frameworkName",
            FRAMEWORK_VERSION: "Conviva.frameworkVersion",
            i: "Constants not yet configured",
            o: "Invalid : Did you report playback ended?",
            u: "Invalid : Did you report ad playback ended?",
            h: "Player cannot be null",
            l: "PlaybackAnlytics already built",
            v: "PlaybackAnlytics not yet built",
            Playback: {
                BITRATE: "BITRATE",
                AVG_BITRATE: "AVG_BITRATE",
                PLAY_HEAD_TIME: "PLAY_HEAD_TIME",
                RESOLUTION: "RESOLUTION",
                BUFFER_LENGTH: "BUFFER_LENGTH",
                PLAYER_STATE: "PLAYER_STATE",
                RENDERED_FRAMERATE: "RENDERED_FRAMERATE",
                SEEK_STARTED: "SEEK_STARTED",
                SEEK_ENDED: "SEEK_ENDED",
                CDN_IP: "CDN_IP",
                DROPPED_FRAMES_TOTAL: "DROPPED_FRAMES_TOTAL",
                DROPPED_FRAMES_COUNT: "DROPPED_FRAMES_COUNT",
                AUDIO_LANGUAGE: "AUDIO_LANGUAGE",
                SUBTITLES_LANGUAGE: "SUBTITLES_LANGUAGE",
                CLOSED_CAPTIONS_LANGUAGE: "CLOSED_CAPTIONS_LANGUAGE"
            },
            Network: {
                SIGNAL_STRENGTH: "SIGNAL_STRENGTH",
                LINK_ENCRYPTION: "LINK_ENCRYPTION",
                CONNECTION_TYPE: "CONNECTION_TYPE"
            },
            ErrorSeverity: {
                FATAL: 1,
                WARNING: 0
            },
            NO_SESSION_KEY: -2,
            AdPosition: {
                PREROLL: "Pre-roll",
                MIDROLL: "Mid-roll",
                POSTROLL: "Post-roll"
            },
            AdPlayer: {
                CONTENT: "CONTENT",
                SEPARATE: "SEPARATE"
            },
            DeviceType: {
                DESKTOP: "DESKTOP",
                CONSOLE: "Console",
                SETTOP: "Settop",
                MOBILE: "Mobile",
                TABLET: "Tablet",
                SMARTTV: "SmartTV"
            },
            AdType: {
                CLIENT_SIDE: "Client Side",
                SERVER_SIDE: "Server Side"
            },
            AdSlates: {
                BLACKOUT_SLATE: "Blackout slate",
                TECHNICAL_DIFFICULTIES_SLATE: "Technical Difficulties slate",
                COMMERCIAL_SLATE: "Commercial Break slate",
                OTHER_SLATE: "Other slate",
                VPAID: "VPAID",
                REGULAR: "Regular Ad"
            },
            AdServingType: {
                INLINE: "Inline",
                WRAPPER: "Wrapper"
            },
            DeviceCategory: {
                ANDROID_DEVICE: "AND",
                APPLE_DEVICE: "APL",
                CHROMECAST: "CHR",
                DESKTOP_APP: "DSKAPP",
                DEVICE_SIMULATOR: "SIMULATOR",
                LG_TV: "LGTV",
                NINTENDO: "NINTENDO",
                PLAYSTATION: "PS",
                ROKU: "RK",
                SAMSUNG_TV: "SAMSUNGTV",
                SMART_TV: "TV",
                SET_TOP_BOX: "STB",
                TIVO: "TIVO",
                WEB: "WEB",
                WINDOWS_DEVICE: "WIN",
                XBOX: "XB",
                KAIOS_DEVICE: "KAIOS"
            },
            LogLevel: {
                DEBUG: 0,
                INFO: 1,
                WARNING: 2,
                ERROR: 3,
                NONE: 4
            },
            PlayerState: {
                STOPPED: "STOPPED",
                PLAYING: "PLAYING",
                BUFFERING: "BUFFERING",
                PAUSED: "PAUSED",
                UNKNOWN: "UNKNOWN",
                NOT_MONITORED: "NOT_MONITORED"
            },
            Events: {
                USER_WAIT_STARTED: "Conviva.UserWaitStarted",
                USER_WAIT_ENDED: "Conviva.UserWaitEnded",
                BUMPER_VIDEO_STARTED: "Conviva.BumperVideoStarted",
                BUMPER_VIDEO_ENDED: "Conviva.BumperVideoEnded",
                AD_REQUESTED: "Conviva.AdRequested",
                AD_RESPONSE: "Conviva.AdResponse",
                AD_SLOT_STARTED: "Conviva.SlotStarted",
                AD_ATTEMPTED: "Conviva.AdAttempted",
                AD_SLOT_ENDED: "Conviva.SlotEnded",
                AD_IMPRESSION_START: "Conviva.AdImpression",
                AD_START: "Conviva.AdStart",
                AD_FIRST_QUARTILE: "Conviva.AdFirstQuartile",
                AD_MID_QUARTILE: "Conviva.AdMidQuartile",
                AD_THIRD_QUARTILE: "Conviva.AdThirdQuartile",
                AD_COMPLETE: "Conviva.AdComplete",
                AD_END: "Conviva.AdEnd",
                AD_IMPRESSION_END: "Conviva.AdImpressionEnd",
                AD_SKIPPED: "Conviva.AdSkipped",
                AD_ERROR: "Conviva.AdError",
                AD_PROGRESS: "Conviva.AdProgress",
                AD_CLOSE: "Conviva.AdClose",
                CONTENT_PAUSED: "Conviva.PauseContent",
                CONTENT_RESUMED: "Conviva.ResumeContent",
                POD_START: "Conviva.PodStart",
                POD_END: "Conviva.PodEnd"
            },
            ErrorType: {
                ERROR_UNKNOWN: "ERROR_UNKNOWN",
                ERROR_IO: "ERROR_IO",
                ERROR_TIMEOUT: "ERROR_TIMEOUT",
                ERROR_NULL_ASSET: "ERROR_NULL_ASSET",
                ERROR_MISSING_PARAMETER: "ERROR_MISSING_PARAMETER",
                ERROR_NO_AD_AVAILABLE: "ERROR_NO_AD_AVAILABLE",
                ERROR_PARSE: "ERROR_PARSE",
                ERROR_INVALID_VALUE: "ERROR_INVALID_VALUE",
                ERROR_INVALID_SLOT: "ERROR_INVALID_SLOT",
                ERROR_3P_COMPONENT: "ERROR_3P_COMPONENT",
                ERROR_UNSUPPORTED_3P_FEATURE: "ERROR_UNSUPPORTED_3P_FEATURE",
                ERROR_DEVICE_LIMIT: "ERROR_DEVICE_LIMIT",
                ERROR_UNMATCHED_SLOT_SIZE: "ERROR_UNMATCHED_SLOT_SIZE"
            },
            StreamType: {
                UNKNOWN: "UNKNOWN",
                LIVE: "LIVE",
                VOD: "VOD"
            },
            CallbackFunctions: {
                CONSOLE_LOG: "consoleLog",
                MAKE_REQUEST: "makeRequest",
                SAVE_DATA: "saveData",
                LOAD_DATA: "loadData",
                GET_EPOCH_TIME_IN_MS: "getEpochTimeInMs",
                CREATE_TIMER: "createTimer",
                GENERATE_HASH: "generateHash",
                BASE64_ENCODE: "base64Encode"
            },
            DeviceMetadata: {
                BRAND: "DeviceBrand",
                MANUFACTURER: "DeviceManufacturer",
                MODEL: "DeviceModel",
                TYPE: "DeviceType",
                VERSION: "DeviceVersion",
                OS_NAME: "OperatingSystemName",
                OS_VERSION: "OperatingSystemVersion",
                CATEGORY: "DeviceCategory",
                SCREEN_RESOLUTION_WIDTH: "ScreenWidth",
                SCREEN_RESOLUTION_HEIGHT: "ScreenHeight",
                SCREEN_RESOLUTION_SCALE_FACTOR: "ScaleFactor"
            },
            AD_PRELOAD_FEATURE: "adPreloading",
            AD_TAG_URL: "adTagUrl",
            IMASDK_CONTENT_PLAYER: "imaMainContentPlayer",
            CONVIVA_AD_MODULE: "convivaAdModule",
            CONVIVA_MODULE: "convivaModule",
            MEDIA_ELEMENT: "mediaElement",
            APP_TRACKER_EVENT: {
                TYPE: "convivaVideoEvent",
                INIT: "c3.sdk.init",
                VIDEO_ATTEMPT: "c3.video.attempt",
                VIDEO_END: "c3.video.end",
                VIDEO_PLAY: "c3.video.play",
                VIDEO_PAUSE: "c3.video.pause",
                VIDEO_BUFFERING: "c3.video.buffering",
                VIDEO_ERROR: "c3.video.error",
                SDK_CUSTOM_EVENT: "c3.sdk.custom_event",
                VIDEO_CUSTOM_EVENT: "c3.video.custom_event",
                AD_BREAK_START: "c3.ad.ad_break_start",
                AD_BREAK_END: "c3.ad.ad_break_end",
                VIDEO_METADATA_CHANGE: "c3.video.set_content_info",
                VIDEO_BITRATE_SWITCH: "c3.video.bitrate_switch"
            }
        }, (a = lt.Client = function() {
            var h = this;
            this._ = null, this.R = !1, this.version = a.version, this.p = null, this.A = null, this.T = null, this.S = -1, this.O = null, this.N = null, this.g = null, this.I = null, this.C = -1, this.m = !1, this.D = {}, this.P = function() {
                h.p;
            }, this.M = {}, this.L = null, this.U = null, this.V = null, this.k = function() {
                this.g.F("Client.makeIPV4IPV6GlobalSessions", function() {
                    var t;
                    h.I && null !== (t = h.I.get(y.B)) && t !== N.H && h.A && ((t = new c).custom["c3.IPV4IPV6GlobalSession"] = "T", t.custom["c3.domain"] = h.O.G.indexOf(f.j) > -1 ? f.j : f.K, h.W = h.A.Y(t, null), (t = new c).custom["c3.IPV4IPV6GlobalSession"] = "T", t.custom["c3.domain"] = h.O.q.indexOf(f.J) > -1 ? f.J : f.X, h.Z = h.A.Y(t, null));
                });
            }, this.$ = function(i) {
                h.g.F("Client.updateConnectionType", function() {
                    if (h.L = i, h.A) {
                        var t, n = h.A.tt();
                        for(t in n)n[t].nt(i);
                    }
                });
            }, this.it = function(i) {
                h.g.F("Client.updateLinkEncryption", function() {
                    if (h.U = i, h.A) {
                        var t, n = h.A.tt();
                        for(t in n)n[t].et(i);
                    }
                });
            }, this.ot = function(t) {
                h.g.F("Client.updateSignalStrength", function() {
                    h.V = t;
                });
            }, (function(t, n, i, e) {
                if (!(t instanceof f)) throw new Error("clientSettings parameter should be an instance of ClientSettings.");
                if (!(n instanceof x)) throw new Error("systemFactory parameter should be an instance of SystemFactory.");
                t.gatewayUrl !== f.rt + f.ut && t.gatewayUrl !== f.ht + f.ut || (this.R = !0), e && (this.version = e), this.O = t.ct(), this.T = n, this.T.lt("SDK", this.O, this.version), this.g = this.T.dt(this.version), this.g.F("Client.init", function() {
                    if (h.I = h.T.vt(), h.I.Et(), h.C = h.I.get(y._t), -1 !== h.C && void 0 !== h.C && null !== h.C || (h.C = P.Rt()), h.A = h.T.At(h, h.O, h.I), i) for(var t in i)switch(t){
                        case g.Network.CONNECTION_TYPE:
                            h.$(i[t]);
                            break;
                        case g.Network.LINK_ENCRYPTION:
                            h.it(i[t]);
                            break;
                        case g.Network.SIGNAL_STRENGTH:
                            h.ot(i[t]);
                    }
                    h.k();
                }, function(t) {
                    throw new Error("Client constructor failed: " + t.message);
                });
            }).apply(this, arguments), this.release = function() {
                this.m || this.g.F("Client.release", function() {
                    h.p, h.A.Tt(), h.A = null, h.S = -1, h.C = -1, h.g = null, h.O = null, h.N = null, h.T = null, h.m = !0;
                });
            }, this.createSession = function(t, n, i) {
                var e = a.NO_SESSION_KEY;
                return this.m || (!t || t instanceof c) && this.g.F("Client.createSession", function() {
                    e = h.A.St(t, C.Nt.Ot, n, (i ? g : h).version);
                }), e;
            }, this.createAdSession = function(i, e, s, o, r) {
                var u = a.NO_SESSION_KEY;
                return this.m || (!e || e instanceof c) && this.g.F("Client.createAdSession", function() {
                    var t, n;
                    e || (e = new c), m.gt(i) && i !== a.NO_SESSION_KEY && (t = h.A.It(i)) && (n = e.custom[g.APPLICATION_VERSION], t.wt && t.wt.Ct && (!e.viewerId && t.wt.Ct.viewerId && (e.viewerId = t.wt.Ct.viewerId), !e.applicationName && t.wt.Ct.applicationName && (e.applicationName = t.wt.Ct.applicationName), e.streamType === g.StreamType.UNKNOWN && t.wt.Ct.streamType !== g.StreamType.UNKNOWN && (e.streamType = t.wt.Ct.streamType), "undefined" !== typeof n && n || "undefined" !== typeof (n = t.wt.Ct.custom[g.APPLICATION_VERSION]) && n && (e.custom[g.APPLICATION_VERSION] = n)), e.custom["c3.csid"] = m.yt(t.C)), u = h.A.St(e, C.Nt.Dt, s, (o ? g : h).version, r);
                }), u;
            }, this.reportError = function(n, i, e) {
                this.m || !m.Pt(i) || e !== a.ErrorSeverity.FATAL && e !== a.ErrorSeverity.WARNING || this.g.F("Client.reportError", function() {
                    var t = h.A.It(n);
                    t && t.bt(i, e);
                });
            }, this.updateContentMetadata = function(i, e) {
                this.m || e instanceof c && this.g.F("Client.updateContentMetadata", function() {
                    var t, n = h.A.It(i);
                    n && (t = e.ct(), n.Mt(t));
                });
            }, this.detachPlayer = function(n) {
                this.m || this.g.F("Client.detachPlayer", function() {
                    var t = h.A.It(n);
                    t && t.Lt();
                });
            }, this.Ut = function(n) {
                this.m || this.g.F("Client.offFocus", function() {
                    var t = h.A.It(n);
                    t && t.Ut();
                });
            }, this.attachPlayer = function(n, i) {
                this.m || i instanceof I && this.g.F("Client.attachPlayer", function() {
                    var t = h.A.It(n);
                    t && t.Vt(i);
                });
            }, this.kt = function(n) {
                this.m || this.g.F("Client.onFocus", function() {
                    var t = h.A.It(n);
                    t && t.kt();
                });
            }, this.contentPreload = function(n) {
                this.m || this.g.F("Client.contentPreload", function() {
                    var t = h.A.It(n);
                    t && t.Ft();
                });
            }, this.contentStart = function(n) {
                this.m || this.g.F("Client.contentStart", function() {
                    var t = h.A.It(n);
                    t && t.Bt();
                });
            }, this.sendCustomEvent = function(i, e, s) {
                this.m || m.Pt(e) && (m.Ht(s), this.g.F("Client.sendCustomEvent", function() {
                    i === a.NO_SESSION_KEY && (h.S < 0 && (t = new c, h.S = h.A.Y(t, null)), i = h.S);
                    var t = m.Gt(s), n = h.A.jt(i);
                    n && n.Kt(e, t);
                }));
            }, this.adStart = function(n, i, e, s) {
                this.m || i !== a.AdStream.CONTENT && i !== a.AdStream.SEPARATE || e !== a.AdPlayer.CONTENT && e !== a.AdPlayer.SEPARATE || (s !== a.AdPosition.PREROLL && s !== a.AdPosition.MIDROLL && a.AdPosition.POSTROLL, this.g.F("Client.adStart", function() {
                    var t = h.A.It(n);
                    t && t.Wt(i, e, s);
                }));
            }, this.adEnd = function(n) {
                this.m || this.g.F("Client.adEnd", function() {
                    var t = h.A.It(n);
                    t && t.Yt();
                });
            }, this.cleanupSession = function(t) {
                this.m || t !== a.NO_SESSION_KEY && this.g.F("Client.cleanupSession", function() {
                    h.A.It(t) && h.A.xt(t);
                });
            }, this.getAttachedPlayer = function(n) {
                var i = null;
                return this.m || n !== a.NO_SESSION_KEY && this.g.F("Client.getAttachedPlayer", function() {
                    var t = h.A.It(n);
                    t && (i = t.qt());
                }), i;
            }, this.isPlayerAttached = function(t) {
                return !this.m && null !== this.getAttachedPlayer(t);
            }, this.getPlayerStateManager = function(t) {
                if (this.m) throw new Error("This instance of Conviva.Client has been released.");
                return new I(this.T, (t ? g : h).version);
            }, this.releasePlayerStateManager = function(t) {
                if (this.m) throw new Error("This instance of Conviva.Client has been released.");
                this.g.F("Client.releasePlayerStateManager", function() {
                    t instanceof I && t.release();
                });
            }, this.Jt = function() {
                return this.O;
            }, this.getId = function() {
                return this.C;
            }, this.getSessionId = function(n) {
                var i;
                return this.m ? g.NO_SESSION_KEY : (i = null, this.g.F("Client.getSessionId", function() {
                    var t = h.A.It(n);
                    t && (i = t.Xt());
                }), i);
            }, this.getClientId = function(n) {
                var i;
                return this.m ? null : (i = null, this.g.F("Client.getClientId", function() {
                    var t = h.A.It(n);
                    t && (i = t.Qt());
                }), i);
            }, this.Zt = function(n, i, e) {
                this.m || this.g.F("Client.updateCustomMetric", function() {
                    var t = h.A.It(n);
                    t && t.Zt(i, e);
                });
            }, this.setUniqueIdentifier = function(t, n) {
                if (this.m) throw new Error("This instance of Conviva.Client has been released.");
                if (!t || "undefined" === typeof t || "{}" === JSON.stringify(t)) throw new Error("Identifiers are not set. No action taken !!");
                for(var i in t)this.D[i] = t[i];
                n && (this.P = n);
            }, this.setUserPreferenceForDataCollection = function(t, n) {
                if (this.m) throw new Error("This instance of Conviva.Client has been released.");
                if (!t || "undefined" === typeof t || "{}" === JSON.stringify(t)) throw new Error("Identifiers are not set. No action taken !!");
                for(var i in t)"false" === t[i] ? this.M[i] = n ? y.$t.zt : y.$t.tn : this.M[i] = y.$t.nn;
            }, this.setUserPreferenceForDataDeletion = function(t) {
                if (this.m) throw new Error("This instance of Conviva.Client has been released.");
                if (!t || "undefined" === typeof t || "{}" === JSON.stringify(t)) throw new Error("Identifiers are not set. No action taken !!");
                for(var n in t)"true" === t[n] ? this.M[n] = y.$t.en : this.M[n] = y.$t.nn;
            }, this.getConfig = function() {
                if (this.m) throw new Error("This instance of Conviva.Client has been released.");
                return this.I;
            };
        }).version = "4.7.8L", a.NO_SESSION_KEY = g.NO_SESSION_KEY, a.AdPosition = {
            PREROLL: g.AdPosition.PREROLL,
            MIDROLL: g.AdPosition.MIDROLL,
            POSTROLL: g.AdPosition.POSTROLL
        }, a.AdStream = {
            CONTENT: g.AdPlayer.CONTENT,
            SEPARATE: g.AdPlayer.SEPARATE
        }, a.AdPlayer = {
            CONTENT: g.AdPlayer.CONTENT,
            SEPARATE: g.AdPlayer.SEPARATE
        }, a.ErrorSeverity = {
            FATAL: g.ErrorSeverity.FATAL,
            WARNING: g.ErrorSeverity.WARNING
        }, a.DeviceType = {
            DESKTOP: g.DeviceType.DESKTOP,
            CONSOLE: g.DeviceType.CONSOLE,
            SETTOP: g.DeviceType.SETTOP,
            MOBILE: g.DeviceType.MOBILE,
            TABLET: g.DeviceType.TABLET,
            SMARTTV: g.DeviceType.SMARTTV
        }, a.AdTechnology = {
            CLIENT_SIDE: g.AdType.CLIENT_SIDE,
            SERVER_SIDE: g.AdType.SERVER_SIDE
        }, a.AdType = {
            BLACKOUT_SLATE: g.AdSlates.BLACKOUT_SLATE,
            TECHNICAL_DIFFICULTIES_SLATE: g.AdSlates.TECHNICAL_DIFFICULTIES_SLATE,
            COMMERCIAL_SLATE: g.AdSlates.COMMERCIAL_SLATE,
            OTHER_SLATE: g.AdSlates.OTHER_SLATE,
            VPAID: g.AdSlates.VPAID,
            REGULAR: g.AdSlates.REGULAR
        }, a.AdServingType = {
            INLINE: g.AdServingType.INLINE,
            WRAPPER: g.AdServingType.WRAPPER
        }, a.DeviceCategory = {
            ANDROID_DEVICE: g.DeviceCategory.ANDROID_DEVICE,
            APPLE_DEVICE: g.DeviceCategory.APPLE_DEVICE,
            CHROMECAST: g.DeviceCategory.CHROMECAST,
            DESKTOP_APP: g.DeviceCategory.DESKTOP_APP,
            DEVICE_SIMULATOR: g.DeviceCategory.DEVICE_SIMULATOR,
            LG_TV: g.DeviceCategory.LG_TV,
            NINTENDO: g.DeviceCategory.NINTENDO,
            PLAYSTATION: g.DeviceCategory.PLAYSTATION,
            ROKU: g.DeviceCategory.ROKU,
            SAMSUNG_TV: g.DeviceCategory.SAMSUNG_TV,
            SMART_TV: g.DeviceCategory.SMART_TV,
            SET_TOP_BOX: g.DeviceCategory.SET_TOP_BOX,
            TIVO: g.DeviceCategory.TIVO,
            WEB: g.DeviceCategory.WEB,
            WINDOWS_DEVICE: g.DeviceCategory.WINDOWS_DEVICE,
            XBOX: g.DeviceCategory.XBOX,
            KAIOS_DEVICE: g.DeviceCategory.KAIOS_DEVICE
        }, (f = lt.ClientSettings = function() {
            var e = this;
            this.on = null, m.rn(this, "customerKey", function() {
                return this.on;
            }), m.un(this, "customerKey", function(t) {
                m.Pt(t) && (this.on = t);
            }), this.hn = f.fn, m.rn(this, "heartbeatInterval", function() {
                return this.hn;
            }), m.un(this, "heartbeatInterval", function(t) {
                var n;
                "number" === typeof t && (n = m.cn(t)) === t && (this.hn = n);
            }), this.ln = null, this.G = null, this.q = null, m.rn(this, "gatewayUrl", function() {
                return this.ln;
            }), m.un(this, "gatewayUrl", function(t) {
                var n;
                !m.Pt(t) || "https" !== (n = t.split("://"))[0] && "http" !== n[0] || -1 === t.indexOf(".com", t.length - 4) || (this.ln = t);
            }), (function(t) {
                if (!m.Pt(t)) throw new Error("customerKey must be valid");
                this.customerKey = t;
            }).apply(this, arguments), this.equals = function(t) {
                return this.customerKey === t.customerKey && this.gatewayUrl === t.gatewayUrl && this.heartbeatInterval === t.heartbeatInterval;
            }, this.ct = function() {
                var t = new f(this.customerKey);
                return t.gatewayUrl = function(t) {
                    if (m.Pt(t)) {
                        var n, i = t.split("://");
                        if ("https" === i[0] || "http" === i[0]) return i[1] !== f.ut && -1 !== i[1].indexOf(f.ut) ? (n = i[1].split(f.ut), e.G = "https://" + n[0] + f.j, e.q = "https://" + n[0] + f.J) : i[1] !== f.dn && -1 !== i[1].indexOf("testonly.conviva.com") ? (n = i[1].split("testonly.conviva.com"), e.G = "https://" + n[0] + f.K, e.q = "https://" + n[0] + f.X) : i[1] === f.dn ? (e.G = "https://" + e.customerKey + "." + f.K, e.q = "https://" + e.customerKey + "." + f.X) : (e.G = "https://" + e.customerKey + "." + f.j, e.q = "https://" + e.customerKey + "." + f.J, t = "https://" + e.customerKey + "." + f.ut), t;
                    }
                    return e.G = "https://" + e.customerKey + "." + f.j, e.q = "https://" + e.customerKey + "." + f.J, "https://" + e.customerKey + "." + f.ut;
                }(this.gatewayUrl), t.heartbeatInterval = this.heartbeatInterval, t.G = this.G, t.q = this.q, t;
            };
        }).sn = "https://conviva.testonly.conviva.com", f.vn = "https://cws.conviva.com", f.ut = "cws.conviva.com", f.j = "ipv4.cws.conviva.com", f.J = "ipv6.cws.conviva.com", f.dn = "conviva.testonly.conviva.com", f.K = "ipv4.testonly.conviva.com", f.X = "ipv6.testonly.conviva.com", f.rt = "https://", f.ht = "http://", f.En = 5, f.fn = 20, (c = lt.ContentMetadata = function() {
            this._n = null, m.rn(this, "assetName", function() {
                return this._n;
            }), m.un(this, "assetName", function(t) {
                "string" === typeof t && (this._n = t);
            }), this.Rn = {}, m.rn(this, "custom", function() {
                return this.Rn;
            }), m.un(this, "custom", function(t) {
                "object" === typeof t && (this.Rn = m.Gt(t));
            }), this.An = null, m.rn(this, "defaultResource", function() {
                return this.An;
            }), m.un(this, "defaultResource", function(t) {
                "string" === typeof t && (this.An = t);
            }), this.Tn = null, m.rn(this, "viewerId", function() {
                return this.Tn;
            }), m.un(this, "viewerId", function(t) {
                "string" === typeof t && (this.Tn = t);
            }), this.Sn = null, m.rn(this, "applicationName", function() {
                return this.Sn;
            }), m.un(this, "applicationName", function(t) {
                "string" === typeof t && (this.Sn = t);
            }), this.On = null, m.rn(this, "streamUrl", function() {
                return this.On;
            }), m.un(this, "streamUrl", function(t) {
                "string" === typeof t && (this.On = t);
            }), this.Nn = c.StreamType.UNKNOWN, m.rn(this, "streamType", function() {
                return this.Nn;
            }), m.un(this, "streamType", function(t) {
                t !== c.StreamType.UNKNOWN && t !== c.StreamType.VOD && t !== c.StreamType.LIVE || (this.Nn = t);
            }), this.gn = -1, m.rn(this, "duration", function() {
                return this.gn;
            }), m.un(this, "duration", function(t) {
                this.gn = b.In(t);
            }), this.wn = -1, m.rn(this, "encodedFrameRate", function() {
                return this.wn;
            }), m.un(this, "encodedFrameRate", function(t) {
                this.wn = b.In(t);
            }), (function() {}).apply(this, arguments), this.ct = function() {
                var t, n = new c;
                for(t in n.assetName = this.assetName, n.applicationName = this.applicationName, n.streamUrl = this.streamUrl, n.viewerId = this.viewerId, n.defaultResource = this.defaultResource, n.streamType = this.streamType, n.duration = this.duration, n.encodedFrameRate = this.encodedFrameRate, this.custom)n.custom[t] = this.custom[t];
                return n;
            };
        }).StreamType = {
            UNKNOWN: g.StreamType.UNKNOWN,
            LIVE: g.StreamType.LIVE,
            VOD: g.StreamType.VOD
        }, lt.ErrorType = {
            ERROR_UNKNOWN: g.ErrorType.ERROR_UNKNOWN,
            ERROR_IO: g.ErrorType.ERROR_IO,
            ERROR_TIMEOUT: g.ErrorType.ERROR_TIMEOUT,
            ERROR_NULL_ASSET: g.ErrorType.ERROR_NULL_ASSET,
            ERROR_MISSING_PARAMETER: g.ErrorType.ERROR_MISSING_PARAMETER,
            ERROR_NO_AD_AVAILABLE: g.ErrorType.ERROR_NO_AD_AVAILABLE,
            ERROR_PARSE: g.ErrorType.ERROR_PARSE,
            ERROR_INVALID_VALUE: g.ErrorType.ERROR_INVALID_VALUE,
            ERROR_INVALID_SLOT: g.ErrorType.ERROR_INVALID_SLOT,
            ERROR_3P_COMPONENT: g.ErrorType.ERROR_3P_COMPONENT,
            ERROR_UNSUPPORTED_3P_FEATURE: g.ErrorType.ERROR_UNSUPPORTED_3P_FEATURE,
            ERROR_DEVICE_LIMIT: g.ErrorType.ERROR_DEVICE_LIMIT,
            ERROR_UNMATCHED_SLOT_SIZE: g.ErrorType.ERROR_UNMATCHED_SLOT_SIZE
        }, lt.Events = {
            AD_REQUESTED: g.Events.AD_REQUESTED,
            AD_RESPONSE: g.Events.AD_RESPONSE,
            AD_SLOT_STARTED: g.Events.AD_SLOT_STARTED,
            AD_ATTEMPTED: g.Events.AD_ATTEMPTED,
            AD_SLOT_ENDED: g.Events.AD_SLOT_ENDED,
            AD_IMPRESSION_START: g.Events.AD_IMPRESSION_START,
            AD_START: g.Events.AD_START,
            AD_FIRST_QUARTILE: g.Events.AD_FIRST_QUARTILE,
            AD_MID_QUARTILE: g.Events.AD_MID_QUARTILE,
            AD_THIRD_QUARTILE: g.Events.AD_THIRD_QUARTILE,
            AD_COMPLETE: g.Events.AD_COMPLETE,
            AD_END: g.Events.AD_END,
            AD_IMPRESSION_END: g.Events.AD_IMPRESSION_END,
            AD_SKIPPED: g.Events.AD_SKIPPED,
            AD_ERROR: g.Events.AD_ERROR,
            AD_PROGRESS: g.Events.AD_PROGRESS,
            AD_CLOSE: g.Events.AD_CLOSE,
            CONTENT_PAUSED: g.Events.CONTENT_PAUSED,
            CONTENT_RESUMED: g.Events.CONTENT_RESUMED,
            POD_START: g.Events.POD_START,
            POD_END: g.Events.POD_END
        }, (I = lt.PlayerStateManager = function() {
            var e = this;
            e.Cn = null, e.yn = -2, e.Dn = -2, e.Pn = I.PlayerState.UNKNOWN, e.bn = {}, e.Mn = -2, e.wn = -2, e.gn = -2, e.Ln = null, e.Un = null, e.On = null, e.Vn = null, e.kn = null, e.Fn = -1, e.Bn = -1, e.L = null, e.U = null, e.Hn = null, e.Gn = [], e.m = !1, e.jn = null, e.Kn = null, e.Wn = null, this.release = function() {
                e.m || e.g.F("PlayerStateManager.release", function() {
                    e.Cn && e.Cn.Yn(), e.xn(), e.T = null, e.g = null, e.m = !0;
                });
            }, this.setPlayheadTime = function() {}, this.setBufferLength = function() {}, this.setRenderedFrameRate = function() {}, this.getEncodedFrameRate = function() {
                return e.wn;
            }, this.setEncodedFrameRate = function(n) {
                e.m || e.g.F("PlayerStateManager.setEncodedFrameRate", function() {
                    var t = b.In(n);
                    t >= -1 && (e.wn = t, e.Cn) && e.Cn.qn(e.wn);
                });
            }, this.getDuration = function() {
                return e.gn;
            }, this.setClientMeasureInterface = function(t) {
                m.Jn(t, new lt.ClientMeasureInterface, "ClientMeasureInterface"), this.Xn = t;
            }, this.getPHT = function() {
                return this.Xn && "function" === typeof this.Xn.getPHT ? this.Xn.getPHT() : I.DEFAULT_PHT;
            }, this.getBufferLength = function() {
                return this.Xn && "function" === typeof this.Xn.getBufferLength ? this.Xn.getBufferLength() : I.DEFAULT_BUFFER_LENGTH;
            }, this.getSignalStrength = function() {
                return this.Xn && "function" === typeof this.Xn.getSignalStrength ? this.Xn.getSignalStrength() : I.DEFAULT_SIGNAL_STRENGTH;
            }, this.getRenderedFrameRate = function() {
                return this.Xn && "function" === typeof this.Xn.getRenderedFrameRate ? this.Xn.getRenderedFrameRate() : I.DEFAULT_RENDERED_FRAME_RATE;
            }, this.setDuration = function(n) {
                e.m || e.g.F("PlayerStateManager.setDuration", function() {
                    var t = b.In(n);
                    t >= -1 && (e.gn = t, e.Cn) && e.Cn.Qn(e.gn);
                });
            }, this.getStreamUrl = function() {
                return e.On;
            }, this.setStreamUrl = function(t) {
                e.m || e.g.F("PlayerStateManager.setStreamUrl", function() {
                    t && (e.On = t, e.Cn) && e.Cn.Zn(e.On);
                });
            }, this.zn = function() {
                return e.Vn;
            }, this.$n = function() {
                return e.kn;
            }, this.setModuleNameAndVersion = function(t, n) {
                e.Vn = t, e.kn = n;
            }, this.ti = function() {
                return e.Un;
            }, this.setPlayerType = function(t) {
                e.m || e.g.F("PlayerStateManager.setPlayerType", function() {
                    e.Un = t, e.Cn && e.Cn.ni(e.Un);
                });
            }, this.ii = function() {
                return e.Ln;
            }, this.setPlayerVersion = function(t) {
                e.m || e.g.F("PlayerStateManager.setPlayerVersion", function() {
                    e.Ln = t, e.Cn && e.Cn.ei(e.Ln);
                });
            }, this.si = function() {
                return e.jn;
            }, this.setAudioLang = function(t) {
                e.m || e.g.F("PlayerStateManager.setAudioLang", function() {
                    e.jn = t, e.Cn && e.Cn.oi(e.jn);
                });
            }, this.ri = function() {
                return e.Kn;
            }, this.setSubtitleLang = function(t) {
                e.m || e.g.F("PlayerStateManager.setSubtitleLang", function() {
                    e.Kn = t, e.Cn && e.Cn.ui(e.Kn);
                });
            }, this.hi = function() {
                return e.Wn;
            }, this.setCcLang = function(t) {
                e.m || e.g.F("PlayerStateManager.setCCLang", function() {
                    e.Wn = t, e.Cn && e.Cn.ai(e.Wn);
                });
            }, this.setMonitoringNotifier = function(t) {
                return !e.m && !e.Cn && (e.Cn = t, e.p, !0);
            }, this.xn = function() {
                e.m || (e.Cn = null, e.p);
            }, this.fi = function() {
                e.setPlayerState(e.getPlayerState()), e.setBitrateKbps(e.ci()), e.setAvgBitrateKbps(e.li()), e.setDuration(e.getDuration()), e.setEncodedFrameRate(e.getEncodedFrameRate()), e.setStreamUrl(e.getStreamUrl()), e.setPlayerType(e.ti()), e.setPlayerVersion(e.ii()), e.setAudioLang(e.si()), e.setSubtitleLang(e.ri()), e.setCcLang(e.hi());
                for(var t = 0; t < e.Gn.length; t++){
                    var n = e.Gn[t];
                    e.di(n);
                }
                e.Gn = [];
            }, this.getPlayerState = function() {
                return e.Pn;
            }, this.setPlayerState = function(t) {
                e.m || e.g.F("PlayerStateManager.setPlayerState", function() {
                    I.vi(t) && (e.Pn = t, e.Cn) && e.Cn.Ei(e.Pn);
                });
            }, this.ci = function() {
                return e.yn;
            }, this.setBitrateKbps = function(n) {
                e.m || e.g.F("PlayerStateManager.setBitrateKbps", function() {
                    var t = b.In(n);
                    t >= -1 && (e.yn = t, e.Cn) && e.Cn._i(e.yn);
                });
            }, this.li = function() {
                return e.Dn;
            }, this.setAvgBitrateKbps = function(n) {
                e.m || e.g.F("PlayerStateManager.setAvgBitrateKbps", function() {
                    var t = b.In(n);
                    t >= -1 && (e.Dn = t, e.Cn) && e.Cn.Ri(e.Dn);
                });
            }, this.setPlayerSeekStart = function(t) {
                e.m || e.g.F("PlayerStateManager.setPlayerSeekStart()", function() {
                    e.Cn && e.Cn.pi(I.SEEK_ACTIONS_TYPE.SEEK_START, t);
                });
            }, this.setPlayerSeekEnd = function() {
                e.m || e.g.F("PlayerStateManager.setPlayerSeekEnd()", function() {
                    e.Cn && e.Cn.pi(I.SEEK_ACTIONS_TYPE.SEEK_END, -1);
                });
            }, this.setUserSeekButtonUp = function() {
                e.m || e.g.F("PlayerStateManager.setUserSeekButtonUp()", function() {
                    e.Cn && e.Cn.pi(I.SEEK_ACTIONS_TYPE.BUTTON_UP, -1);
                });
            }, this.setUserSeekButtonDown = function() {
                e.m || e.g.F("PlayerStateManager.setUserSeekButtonDown()", function() {
                    e.Cn && e.Cn.pi(I.SEEK_ACTIONS_TYPE.BUTTON_DOWN, -1);
                });
            }, this.setVideoResolutionWidth = function(n) {
                e.m || e.g.F("PlayerStateManager.setVideoResolutionWidth()", function() {
                    var t = b.In(n);
                    t > 0 && (e.Fn = t), e.Cn && e.Cn.Ai(e.Fn);
                });
            }, this.setVideoResolutionHeight = function(n) {
                e.m || e.g.F("PlayerStateManager.setVideoResolutionHeight()", function() {
                    var t = b.In(n);
                    t > 0 && (e.Bn = t), e.Cn && e.Cn.Ti(e.Bn);
                });
            }, this.setConnectionType = function(t) {
                e.m || e.g.F("PlayerStateManager.setConnectionType()", function() {
                    e.L = t, e.Cn && e.Cn.nt(e.L);
                });
            }, this.setLinkEncryption = function(t) {
                e.m || e.g.F("PlayerStateManager.setLinkEncryption()", function() {
                    e.U = t, e.Cn && e.Cn.et(e.U);
                });
            }, this.setSignalStrength = function() {}, this.di = function(t) {
                var n, i;
                e.Hn = t, e.Cn ? (n = t.errorCode, i = t.severity, e.Cn.Si(n, i)) : e.Gn.push(t);
            }, this.sendError = function(n, i) {
                e.m || e.g.F("PlayerStateManager.sendError", function() {
                    var t = new M(n, i);
                    e.di(t);
                });
            }, this.reset = function() {
                e.m || e.g.F("PlayerStateManager.reset", function() {
                    e.yn = -2, e.Dn = -2, e.Pn = I.PlayerState.UNKNOWN, e.bn = {}, e.Mn = -1, e.wn = -1, e.gn = -1, e.Ln = null, e.Un = null, e.On = null, e.Hn = null, e.Gn = [];
                });
            }, this.setCDNServerIP = function(t) {
                e.m || e.g.F("PlayerStateManager.setCDNServerIP", function() {
                    e.Cn && e.Cn.Oi(t);
                });
            }, this.Ni = function() {
                return e.gi;
            }, this.setDroppedFramesTotal = function(t) {
                e.m || e.g.F("PlayerStateManager.setDroppedFramesTotal", function() {
                    e.Cn && e.Cn.Ii(t);
                });
            }, this.setDroppedFramesCount = function(t) {
                e.m || e.g.F("PlayerStateManager.setDroppedFramesCount", function() {
                    e.Cn && e.Cn.wi(t);
                });
            }, this.Ci = function() {
                return e.Hn;
            }, (function(t, n) {
                e.T = t, e.g = e.T.dt(n);
            }).apply(e, arguments);
        }).PlayerState = {
            STOPPED: g.PlayerState.STOPPED,
            PLAYING: g.PlayerState.PLAYING,
            BUFFERING: g.PlayerState.BUFFERING,
            PAUSED: g.PlayerState.PAUSED,
            UNKNOWN: g.PlayerState.UNKNOWN,
            NOT_MONITORED: g.PlayerState.NOT_MONITORED
        }, I.vi = function(t) {
            return t === I.PlayerState.STOPPED || t === I.PlayerState.PLAYING || t === I.PlayerState.BUFFERING || t === I.PlayerState.PAUSED || t === I.PlayerState.UNKNOWN || t === I.PlayerState.NOT_MONITORED;
        }, I.SEEK_ACTIONS_TYPE = {
            SEEK_START: "pss",
            SEEK_END: "pse",
            BUTTON_UP: "bu",
            BUTTON_DOWN: "bd"
        }, I.DEFAULT_SIGNAL_STRENGTH = 1e3, I.DEFAULT_RENDERED_FRAME_RATE = -1, I.DEFAULT_BUFFER_LENGTH = -1, I.DEFAULT_PHT = -1, lt.ClientMeasureInterface = function() {
            this.getPHT = function() {}, this.getBufferLength = function() {}, this.getSignalStrength = function() {}, this.getRenderedFrameRate = function() {};
        }, B = lt.HttpInterface = function() {
            this.makeRequest = function() {}, this.release = function() {};
        }, H = lt.LoggingInterface = function() {
            this.consoleLog = function() {}, this.release = function() {};
        }, G = lt.MetadataInterface = function() {
            this.getBrowserName = function() {}, this.getBrowserVersion = function() {}, this.getDeviceBrand = function() {}, this.getDeviceManufacturer = function() {}, this.getDeviceModel = function() {}, this.getDeviceType = function() {}, this.getDeviceVersion = function() {}, this.getFrameworkName = function() {}, this.getFrameworkVersion = function() {}, this.getOperatingSystemName = function() {}, this.getOperatingSystemVersion = function() {}, this.getDeviceCategory = function() {}, this.getScreenWidth = function() {}, this.getScreenHeight = function() {}, this.getScaleFactor = function() {}, this.release = function() {};
        }, j = lt.StorageInterface = function() {
            this.saveData = function() {}, this.loadData = function() {}, this.release = function() {};
        }, K = lt.SystemInterface = function() {
            (function(t, n, i, e, s, o) {
                m.Jn(t, new W, "TimeInterface"), m.Jn(n, new Y, "TimerInterface"), m.Jn(i, new B, "HttpInterface"), m.Jn(e, new j, "StorageInterface"), m.Jn(s, new G, "MetadataInterface"), m.Jn(o, new H, "LoggingInterface"), this.yi = t, this.mi = n, this.Di = i, this.Pi = e, this.bi = s, this.Mi = o;
            }).apply(this, arguments), this.release = function() {
                this.yi && (this.yi.release(), this.yi = null), this.mi && (this.mi.release(), this.mi = null), this.Di && (this.Di.release(), this.Di = null), this.Pi && (this.Pi.release(), this.Pi = null), this.bi && (this.bi.release(), this.bi = null), this.Mi && (this.Mi.release(), this.Mi = null);
            };
        }, W = lt.TimeInterface = function() {
            this.getEpochTimeMs = function() {}, this.release = function() {};
        }, Y = lt.TimerInterface = function() {
            this.createTimer = function() {}, this.release = function() {};
        }, x = lt.SystemFactory = function() {
            var t = this;
            (function(t, n) {
                if (!(t instanceof K)) throw new Error("systemInterface parameter should be an instance of SystemInterface.");
                this.Li = t, this.yi = this.Li.yi, this.mi = this.Li.mi, this.Di = this.Li.Di, this.Pi = this.Li.Pi, this.bi = this.Li.bi, this.Mi = this.Li.Mi, n instanceof h ? this.O = n.ct() : this.O = new h;
            }).apply(this, arguments), this.lt = function(t, n, i) {
                this.Ui = t, this.Vi = n, this.ki = i;
            }, this.release = function() {
                this.Li.release(), this.Li = null, this.Ui = null, this.O = null, this.Fi = null;
            };
            var n = function() {
                return new ut(t.Mi, t.yi, t.Jt(), t.Fi, t.Ui);
            };
            this.buildLogger = function() {
                return n();
            }, this.At = function(t, n, i) {
                return new tt(t, n, i, this);
            }, this.Bi = function(t) {
                return new D(this.buildLogger(), this.Hi(), this.Vi, t);
            }, this.Gi = function() {
                return new nt(this.buildTimer(t.ki));
            }, this.ji = function() {
                var t = new at(this.buildLogger(), this.mi, new et(this.buildLogger(), null, this.Jt()));
                return new nt(t);
            }, this.Hi = function() {
                return new rt(this.buildLogger(), this.Di, this.ji(), this.Jt());
            }, this.dt = function(t) {
                return new et(this.buildLogger(), this.Bi(t), this.Jt());
            }, this.buildTime = function() {
                return new ht(this.yi, this.buildLogger());
            }, this.buildTimer = function(t) {
                return new at(this.buildLogger(), this.mi, this.dt(t));
            }, this.Ki = function() {
                return new U.Storage(this.buildLogger(), this.Pi, this.Gi(), this.Jt());
            }, this.vt = function() {
                return new y(this.buildLogger(), this.Ki(), this.Wi());
            }, this.Yi = function(t) {
                return new L(this.buildLogger(), this.bi, this.dt(t));
            }, this.xi = function() {
                return new N;
            }, this.qi = function(t, n) {
                return new st(t, this.buildLogger(), this.Hi(), this.Wi(), n);
            }, this.Ji = function(t, n, i, e, s) {
                var o = this.qi(n, e.custom["c3.domain"]);
                return new C(this.Xi(), t, n, this.buildLogger(), this.dt(s), this.buildTimer(s), o, this.xi(), this.buildTime(), this.Qi(), i, e, s);
            }, this.Zi = function(t, n, i, e, s, o, r) {
                t = this.Ji(t, n.ct(), i, o, r);
                return new $(e, s, i, this.Yi(r), t, this.dt(r), this.buildLogger());
            }, this.Xi = function() {
                return new it;
            }, this.Wi = function() {
                return new Z;
            }, this.Qi = function() {
                return this.Fi;
            }, this.Jt = function() {
                return this.O;
            }, this.Fi = new ot;
        }, (h = lt.SystemSettings = function() {
            this.zi = h.$i, m.rn(this, "logLevel", function() {
                return this.zi;
            }), m.un(this, "logLevel", function(t) {
                var n;
                "number" === typeof t && (n = m.cn(t)) === t && n >= h.LogLevel.DEBUG && n <= h.LogLevel.ERROR && (this.zi = n);
            }), this.te = h.ne, m.rn(this, "allowUncaughtExceptions", function() {
                return this.te;
            }), m.un(this, "allowUncaughtExceptions", function(t) {
                m.ie(t) && (this.te = t);
            }), this.ee = h.se, m.rn(this, "storageTimeout", function() {
                return this.ee;
            }), m.un(this, "storageTimeout", function(t) {
                var n;
                "number" === typeof t && (n = m.cn(t)) === t && (this.ee = n);
            }), this.oe = h.re, m.rn(this, "httpTimeout", function() {
                return this.oe;
            }), m.un(this, "httpTimeout", function(t) {
                var n;
                "number" === typeof t && (n = m.cn(t)) === t && (this.oe = n);
            }), (function() {}).apply(this, arguments), this.equals = function(t) {
                return this.logLevel === t.logLevel && this.allowUncaughtExceptions === t.allowUncaughtExceptions && this.storageTimeout === t.storageTimeout && this.httpTimeout === t.httpTimeout;
            }, this.ct = function() {
                var t = new h;
                return t.logLevel = this.logLevel, t.allowUncaughtExceptions = this.allowUncaughtExceptions, t.storageTimeout = this.storageTimeout, t.httpTimeout = this.httpTimeout, t;
            };
        }).LogLevel = {
            DEBUG: g.LogLevel.DEBUG,
            INFO: g.LogLevel.INFO,
            WARNING: g.LogLevel.WARNING,
            ERROR: g.LogLevel.ERROR,
            NONE: g.LogLevel.NONE
        }, h.ue = h.LogLevel.DEBUG, h.$i = h.LogLevel.NONE, h.he = !0, h.ne = !1, h.se = 10, h.re = 10, i = U.AdAnalytics = function() {
            var e = this;
            function n(t) {
                e.ae ? (m.Ht(t) > 0 && e.setAdInfo(t), e.ae.fe() || (e.ae.ce(e.le), e.ae.de(!0), e.getAdType() === g.AdType.SERVER_SIDE && e.reportAdMetric(g.Playback.BITRATE, e.le.ve()))) : e.p;
            }
            e.Ee = null, e.T = null, e._e = null, e.le = null, e.ae = null, e.Re = null, e.pe = null, e.Ae = null, (function(t, n, i) {
                e.Ee = t, e.Ae = i, e.T = n, i && (e.le = i.Te()), e._e = n.buildTimer(g.version), e.ae = new l(e.Ee, e._e), w.call(this);
            }).apply(this, arguments), this.setAdInfo = function(t) {
                m.Ht(t) <= 0 ? e.p : (e.p, e.ae && e.ae.Se(t));
            }, this.setAdPlayerInfo = function(t) {
                m.Ht(t) <= 0 ? e.p : (e.p, e.ae && e.ae.Se(t));
            }, this.reportAdMetric = function() {
                0 === arguments.length ? e.p : 1 === arguments.length ? e.Oe(arguments[0]) : 2 === arguments.length ? e.Oe(arguments[0], arguments[1]) : 3 === arguments.length ? e.Oe(arguments[0], arguments[1], arguments[2]) : 4 === arguments.length && e.Oe(arguments[0], arguments[1], arguments[2], arguments[3]);
            }, this.setCallback = function(t) {
                e.ae && e.ae.Ne(t);
            }, this.reportAdFailed = function(t, n) {
                e.ae ? (m.Ht(n) > 0 && e.setAdInfo(n), e.ae.fe() ? (e.p, e.reportAdError(t, a.ErrorSeverity.FATAL), e.reportAdEnded()) : (e.ae.ce(e.le), e.p, n = new M(t, a.ErrorSeverity.FATAL), e.ae.de(!0, n))) : e.p;
            }, this.reportAdLoaded = function(t) {
                e.p, n(t);
            }, this.reportAdStarted = function(t) {
                e.p, n(t);
            }, this.reportAdEnded = function() {
                e.ae ? (e.p, e.ae.fe() && (e.ae.ce(null), e.ae.de(!1))) : e.p;
            }, this.reportAdError = function(t, n) {
                e.ae ? (e.p, t = new M(t, n), e.ae.di(t)) : e.p;
            }, this.reportAdPlayerEvent = function(t, n) {
                if (m.Pt(t)) {
                    if (e.p, e.ae) switch(t){
                        case g.Events.USER_WAIT_STARTED:
                        case g.Events.BUMPER_VIDEO_STARTED:
                            e.ae.Lt();
                            break;
                        case g.Events.USER_WAIT_ENDED:
                        case g.Events.BUMPER_VIDEO_ENDED:
                            e.ae.Vt();
                            break;
                        default:
                            e.ae.ge(t, n);
                    }
                    else e.p;
                } else e.p;
            }, this.reportAdSkipped = function() {
                e.ae ? (e.p, e.reportAdPlayerEvent(g.Events.AD_SKIPPED), e.reportAdEnded()) : e.p;
            }, this.release = function() {
                e.p, e.ae && (e.ae.fe() && (e.ae.ce(null), e.ae.de(!1)), e.ae.Ne(null), e.ae.Ie(), e.ae = null), "undefined" !== typeof lt.AdProxyMonitor && e.pe && (lt.AdProxyMonitor.release(e.pe), e.pe = null);
            }, this.setAdListener = function(t, n) {
                t && ("undefined" !== typeof n && "undefined" !== typeof n.convivaModule ? lt.AdProxyMonitor = n.convivaModule.AdProxyMonitor : "undefined" !== typeof ConvivaModule && (lt.AdProxyMonitor = ConvivaModule.AdProxyMonitor), "undefined" !== typeof lt.AdProxyMonitor) && (!t && e.pe ? (lt.AdProxyMonitor.release(e.pe), e.pe = null) : t && e.pe ? (lt.AdProxyMonitor.release(e.pe), e.p, e.pe = lt.AdProxyMonitor.initConvivaDropIn(t, n, this, lt, e.T)) : t && !e.pe && (e.p, e.pe = lt.AdProxyMonitor.initConvivaDropIn(t, n, this, lt, e.T)));
            }, this.reportAdBreakStarted = function(t, n, i) {
                e.le && (e.p, e.we = t, e.Re = n, e.le.Ce(t, n, i));
            }, this.reportAdBreakEnded = function() {
                e.le && (e.p, e.we = null, e.Re = null, e.le.ye());
            }, this.getSessionId = function() {
                return e.le ? (e.p, e.ae.Xt()) : g.NO_SESSION_KEY;
            }, this.getClientId = function() {
                return e.le ? (e.p, e.ae.Qt()) : null;
            }, this.getPlayerMonitor = function() {
                return e.le;
            }, this.getAdPlayerMonitor = function() {
                return e.ae;
            }, this.getVideoAnalytics = function() {
                return e.Ae;
            }, this.getAdType = function() {
                return e.le ? e.le.we : null;
            }, this.me = function() {
                return e.le ? e.le.Re : null;
            }, i.prototype = Object.create(w.prototype), i.prototype.constructor = i;
        }, l = U.AdPlayerMonitorImpl = function() {
            var s = this;
            s.De = null, s.Pe = null, (function(t, n) {
                d.call(this, t, n);
            }).apply(this, arguments), this.ce = function(t) {
                this.be() !== t && (this.Me(), s.Pe = t || null);
            }, this.be = function() {
                return s.Pe;
            }, this.Le = function(t) {
                var n, i = this.be(), e = {};
                e.error = t, s.De && (s.Ue = s.De.getPlayerStateManager(!0), s.Ve(), s.Ue.setClientMeasureInterface(this), n = null, i && (n = i.ke()), s.Fe = s.De.createAdSession(n, s.Ct, s.Ue, !0, e), "undefined" !== typeof t) && (s.Be(), s.Ie());
            }, l.prototype = Object.create(d.prototype), l.prototype.constructor = l;
        }, q = lt.Analytics = {
            init: function() {
                if (this.Ee, arguments.length <= 0) throw new Error("customerKey must be valid");
                var t = null, n = null, i = null;
                if ("string" === typeof arguments[0] && !m.Pt(t = arguments[0])) throw new Error("customerKey must be valid");
                arguments.length >= 2 && "object" === typeof arguments[1] && (n = arguments[1]), arguments.length >= 3 && "object" === typeof arguments[2] && (i = arguments[2]);
                var t = new f(t), e = new h, i = (m.Ht(i) > 0 && (i[g.GATEWAY_URL] && (t.gatewayUrl = i[g.GATEWAY_URL]), i[g.LOG_LEVEL] >= 0) && (e.logLevel = i[g.LOG_LEVEL]), new lt.Impl.Html5Logging), s = new lt.Impl.Html5Storage, o = new lt.Impl.Html5Http, r = new lt.Impl.Html5Timer, u = new lt.Impl.Html5Time;
                this.bi || (this.bi = new lt.Impl.Html5Metadata), n && (n[g.CallbackFunctions.CONSOLE_LOG] && (i.consoleLog = n[g.CallbackFunctions.CONSOLE_LOG]), n[g.CallbackFunctions.MAKE_REQUEST] && (o.makeRequest = n[g.CallbackFunctions.MAKE_REQUEST]), n[g.CallbackFunctions.SAVE_DATA] && (s.saveData = n[g.CallbackFunctions.SAVE_DATA]), n[g.CallbackFunctions.LOAD_DATA] && (s.loadData = n[g.CallbackFunctions.LOAD_DATA]), n[g.CallbackFunctions.GET_EPOCH_TIME_IN_MS] && (u.getEpochTimeMs = n[g.CallbackFunctions.GET_EPOCH_TIME_IN_MS]), n[g.CallbackFunctions.CREATE_TIMER]) && (r.createTimer = n[g.CallbackFunctions.CREATE_TIMER]), this.Li = new K(u, r, o, s, this.bi, i), this.T = new x(this.Li, e), this.T.lt("Analytics", t), this.Ee = new a(t, this.T, this.He, q.version), this.Ee._ = new J(this.Ee, this), this.Ee._ && this.Ee._.Ge();
            },
            release: function() {
                var t = 0;
                if (this.je) {
                    for(t = 0; t < this.je.length; t++){
                        var n = this.je[t];
                        n && (n.release(), n.p = null, n._e = null, this.je.splice(t, 1), t--);
                    }
                    this.je = null;
                }
                if (this.Ke) {
                    for(t = 0; t < this.Ke.length; t++){
                        var i = this.Ke[t];
                        i && (i.release(), i.p = null, i._e = null, this.Ke.splice(t, 1), t--);
                    }
                    this.Ke = null;
                }
                this.T && (this.T.release(), this.T = null), this.Ee && (this.Ee.release(), this.Ee = null), this.Ee = null, this.p = null, this.Li = null, this.bi = null, this.He = null;
            },
            setUniqueIdentifier: function(t, n) {
                if (!this.Ee) throw new Error(g.i);
                this.Ee.setUniqueIdentifier(t, n);
            },
            setUserPreferenceForDataCollection: function(t, n) {
                if (!this.Ee) throw new Error(g.i);
                this.Ee.setUserPreferenceForDataCollection(t, n);
            },
            setUserPreferenceForDataDeletion: function(t) {
                if (!this.Ee) throw new Error(g.i);
                this.Ee.setUserPreferenceForDataDeletion(t);
            },
            reportAppEvent: function(t, n) {
                if (!this.Ee) throw new Error(g.i);
                this.Ee.sendCustomEvent(a.NO_SESSION_KEY, t, n);
            },
            reportAppBackgrounded: function() {
                if (!this.Ee) throw new Error(g.i);
                this.Ee.sendCustomEvent(a.NO_SESSION_KEY, "App.Backgrounded", null);
            },
            reportAppForegrounded: function() {
                if (!this.Ee) throw new Error(g.i);
                this.Ee.sendCustomEvent(a.NO_SESSION_KEY, "App.Foregrounded", null);
            },
            configureExistingClient: function(t) {
                if (!(t instanceof a)) throw new Error(g.i);
                this.Ee = t, this.T = this.Ee.T;
            },
            buildVideoAnalytics: function() {
                var t;
                if (this.Ee) return t = new v(this.Ee, this.T), this.Ke || (this.Ke = []), this.Ke.push(t), t;
                throw new Error(g.i);
            },
            buildAdAnalytics: function(t) {
                if (this.Ee) return t = new i(this.Ee, this.T, t || null), this.je || (this.je = []), this.je.push(t), t;
                throw new Error(g.i);
            },
            setDeviceMetadata: function(t) {
                var n, i, e;
                arguments.length <= 0 || 0 === m.Ht(t) || (this.bi || (this.bi = new lt.Impl.Html5Metadata), t[g.DeviceMetadata.BRAND] && (this.bi.getDeviceBrand = function() {
                    return t[g.DeviceMetadata.BRAND];
                }), t[g.DeviceMetadata.MANUFACTURER] && (this.bi.getDeviceManufacturer = function() {
                    return t[g.DeviceMetadata.MANUFACTURER];
                }), t[g.DeviceMetadata.MODEL] && (this.bi.getDeviceModel = function() {
                    return t[g.DeviceMetadata.MODEL];
                }), t[g.DeviceMetadata.TYPE] && (this.bi.getDeviceType = function() {
                    return t[g.DeviceMetadata.TYPE];
                }), t[g.DeviceMetadata.VERSION] && (this.bi.getDeviceVersion = function() {
                    return t[g.DeviceMetadata.VERSION];
                }), t[g.DeviceMetadata.OS_NAME] && (this.bi.getOperatingSystemName = function() {
                    return t[g.DeviceMetadata.OS_NAME];
                }), t[g.DeviceMetadata.OS_VERSION] && (this.bi.getOperatingSystemVersion = function() {
                    return t[g.DeviceMetadata.OS_VERSION];
                }), t[g.DeviceMetadata.CATEGORY] && (this.bi.getDeviceCategory = function() {
                    return t[g.DeviceMetadata.CATEGORY];
                }), n = t[g.DeviceMetadata.SCREEN_RESOLUTION_WIDTH], m.gt(n) && (this.bi.getScreenWidth = function() {
                    return n.toString();
                }), i = t[g.DeviceMetadata.SCREEN_RESOLUTION_HEIGHT], m.gt(i) && (this.bi.getScreenHeight = function() {
                    return i.toString();
                }), e = t[g.DeviceMetadata.SCREEN_RESOLUTION_SCALE_FACTOR], m.gt(e) && (this.bi.getScaleFactor = function() {
                    return e.toString();
                }));
            },
            reportDeviceMetric: function(t, n) {
                switch(this.He || (this.He = {}), t){
                    case g.Network.CONNECTION_TYPE:
                        m.Pt(n) && (this.He[t] = n, this.Ee) && this.Ee.$(this.He[g.Network.CONNECTION_TYPE]);
                        break;
                    case g.Network.LINK_ENCRYPTION:
                        m.Pt(n) && (this.He[t] = n, this.Ee) && this.Ee.it(this.He[g.Network.LINK_ENCRYPTION]);
                        break;
                    case g.Network.SIGNAL_STRENGTH:
                        var i = parseInt(n, 10);
                        m.gt(i) && I.DEFAULT_SIGNAL_STRENGTH !== i && (this.He[t] = i, this.Ee) && this.Ee.ot(i);
                }
            },
            version: "4.7.8"
        }, w = U.AnalyticsImpl = function() {
            var c = this;
            function l() {
                var t = !!c.ae, n = c.getAdType(), i = c.me();
                return n === g.AdType.SERVER_SIDE && i === g.AdPlayer.CONTENT ? w.Ye.We : n !== g.AdType.SERVER_SIDE || i !== g.AdPlayer.SEPARATE ? n === g.AdType.CLIENT_SIDE && i === g.AdPlayer.CONTENT || (n === g.AdType.CLIENT_SIDE && g.AdPlayer.SEPARATE, t) ? w.Ye.xe : w.Ye.qe : void 0;
            }
            function d(t, n, i) {
                t = parseInt(t, 10), n = parseInt(n, 10);
                isNaN(t) && isNaN(n) || (isNaN(t), isNaN(n), !c.ae || i !== w.Ye.xe && i !== w.Ye.We || c.ae.Je(t, n), !c.le) || i !== w.Ye.qe && i !== w.Ye.We || c.le.Je(t, n);
            }
            function v(t, n) {
                I.vi(t) && (!c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.Xe(t), c.le && n === w.Ye.qe || n === w.Ye.We) && c.le.Xe(t);
            }
            function E(t, n) {
                t = parseInt(t, 10);
                isNaN(t) || (!c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.Qe(t), !c.le) || n !== w.Ye.qe && n !== w.Ye.We || c.le.Qe(t);
            }
            function _(t, n) {
                t = parseInt(t, 10);
                isNaN(t) || (!c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.Ze(t), !c.le) || n !== w.Ye.qe && n !== w.Ye.We || c.le.Ze(t);
            }
            function R(t, n) {
                t = parseInt(t, 10);
                !c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.ze(!0, t), !c.le || n !== w.Ye.qe && n !== w.Ye.We || c.le.ze(!0, t);
            }
            function p(t) {
                !c.ae || t !== w.Ye.xe && t !== w.Ye.We || c.ae.ze(!1, -1), !c.le || t !== w.Ye.qe && t !== w.Ye.We || c.le.ze(!1, -1);
            }
            function A(t, n) {
                t = parseInt(t, 10);
                isNaN(t) || (!c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.$e(t), !c.le) || n !== w.Ye.qe && n !== w.Ye.We || c.le.$e(t);
            }
            function T(t, n) {
                t = parseInt(t, 10);
                isNaN(t) || (!c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.ts(t), !c.le) || n !== w.Ye.qe && n !== w.Ye.We || c.le.ts(t);
            }
            function S(t, n) {
                t = parseInt(t, 10);
                isNaN(t) || (!c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.ns(t), !c.le) || n !== w.Ye.qe && n !== w.Ye.We || c.le.ns(t);
            }
            function O(t, n) {
                var i;
                m.Pt(t) && (i = c.le.hi(), m.Pt(i) && "off" !== i && "off" !== t && N("off", n), !c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.es(t), !c.le || n !== w.Ye.qe && n !== w.Ye.We || c.le.es(t));
            }
            function N(t, n) {
                var i;
                m.Pt(t) && (i = c.le.ri(), m.Pt(i) && "off" !== i && "off" !== t && O("off", n), !c.ae || n !== w.Ye.xe && n !== w.Ye.We || c.ae.ss(t), !c.le || n !== w.Ye.qe && n !== w.Ye.We || c.le.ss(t));
            }
            (function() {}).apply(this, arguments), this.Oe = function(t, n, i, e) {
                switch(t){
                    case g.Playback.BITRATE:
                        e === w.Ye.xe ? A(n, w.Ye.xe) : A(n, l());
                        break;
                    case g.Playback.AVG_BITRATE:
                        e === w.Ye.xe ? T(n, w.Ye.xe) : T(n, l());
                        break;
                    case g.Playback.PLAY_HEAD_TIME:
                        e === w.Ye.xe ? E(n, w.Ye.xe) : E(n, l());
                        break;
                    case g.Playback.RESOLUTION:
                        e === w.Ye.xe ? d(n, i, w.Ye.xe) : d(n, i, l());
                        break;
                    case g.Playback.BUFFER_LENGTH:
                        e === w.Ye.xe ? _(n, w.Ye.xe) : _(n, l());
                        break;
                    case g.Playback.PLAYER_STATE:
                        e === w.Ye.xe ? v(n, w.Ye.xe) : v(n, l());
                        break;
                    case g.Playback.RENDERED_FRAMERATE:
                        e === w.Ye.xe ? S(n, w.Ye.xe) : S(n, l());
                        break;
                    case g.Playback.SEEK_STARTED:
                        arguments.length >= 2 && "CONVIVA" !== n ? R(n, l()) : i === w.Ye.xe ? R(-1, w.Ye.xe) : R(-1, l());
                        break;
                    case g.Playback.SEEK_ENDED:
                        i === w.Ye.xe ? p(w.Ye.xe) : p(l());
                        break;
                    case g.Playback.CDN_IP:
                        a = n, f = l(), m.Pt(a) && (!c.ae || f !== w.Ye.xe && f !== w.Ye.We || c.ae.os(a), !c.le || f !== w.Ye.qe && f !== w.Ye.We || c.le.os(a));
                        break;
                    case g.Playback.DROPPED_FRAMES_TOTAL:
                        f = n, a = l();
                        f = parseInt(f, 10), isNaN(f) || (!c.ae || a !== w.Ye.xe && a !== w.Ye.We || c.ae.rs(f), !c.le) || a !== w.Ye.qe && a !== w.Ye.We || c.le.rs(f);
                        break;
                    case g.Playback.DROPPED_FRAMES_COUNT:
                        var s = n, o = l();
                        s = parseInt(s, 10), isNaN(s) || (!c.ae || o !== w.Ye.xe && o !== w.Ye.We || c.ae.us(s), !c.le) || o !== w.Ye.qe && o !== w.Ye.We || c.le.us(s);
                        break;
                    case g.Playback.AUDIO_LANGUAGE:
                        o = n, s = l(), m.Pt(o) && (!c.ae || s !== w.Ye.xe && s !== w.Ye.We || c.ae.hs(o), !c.le || s !== w.Ye.qe && s !== w.Ye.We || c.le.hs(o));
                        break;
                    case g.Playback.SUBTITLES_LANGUAGE:
                        O(n, l());
                        break;
                    case g.Playback.CLOSED_CAPTIONS_LANGUAGE:
                        N(n, l());
                        break;
                    default:
                        r = t, u = n, h = l(), m.Pt(r) && u && (!c.ae || h !== w.Ye.xe && h !== w.Ye.We || c.ae.Zt(r, u), !c.le || h !== w.Ye.qe && h !== w.Ye.We || c.le.Zt(r, u));
                }
                var r, u, h, a, f;
            };
        }, U.AnalyticsImpl.Ye = {
            xe: 1,
            qe: 2,
            We: 3
        }, J = U.AppAnalyticsHandler = function() {
            var o = this;
            o.Ee = null, o.fs = null, o.cs = null, o.ls = null, o.wt = null, (function(t, n) {
                o.Ee = t, o.fs = n, "undefined" !== typeof document && document && (o.cs = document.createEvent("HTMLEvents"), o.cs.initEvent(g.APP_TRACKER_EVENT.TYPE, !0, !0));
            }).apply(this, arguments), this.Ge = function() {
                o.ds(g.APP_TRACKER_EVENT.INIT);
            }, this.vs = function() {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_ATTEMPT);
            }, this.Es = function() {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_END), o.wt = null;
            }, this._s = function(t) {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_PLAY, t);
            }, this.Rs = function(t) {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_PAUSE, t);
            }, this.ps = function(t) {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_ERROR, t);
            }, this.As = function(t) {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_BUFFERING, t);
            }, this.Ts = function(t) {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_BITRATE_SWITCH, t);
            }, this.Ss = function(t) {
                o.ds(g.APP_TRACKER_EVENT.VIDEO_METADATA_CHANGE, t);
            }, this.Os = function(t) {
                t = {
                    cen: t.name,
                    ced: t.data
                };
                o.ds(g.APP_TRACKER_EVENT.VIDEO_CUSTOM_EVENT, t);
            }, this.Ns = function(t) {
                t = {
                    cen: t.name,
                    ced: t.data
                };
                o.ds(g.APP_TRACKER_EVENT.SDK_CUSTOM_EVENT, t);
            }, this.gs = function(t) {
                o.ds(g.APP_TRACKER_EVENT.AD_BREAK_START, {
                    cen: "PodStart",
                    ced: t
                });
            }, this.Is = function() {
                o.ds(g.APP_TRACKER_EVENT.AD_BREAK_END, {
                    cen: "PodEnd"
                });
            }, this.ds = function(t, n) {
                try {
                    if (o.cs) {
                        if (o.ws(), o.cs.name = o.ls.name = t, o.cs.iid = o.ls.iid = o.Ee.getConfig().getIid(), o.cs.clid = o.ls.clid = o.Ee.getConfig().getClientId(), o.wt) {
                            var i = o.wt;
                            if (i.Cs() ? (o.cs.sid = o.ls.sid = i.ys.Xt(), o.cs.sst = o.ls.sst = i.Ds, o.cs.url = o.ls.url = i.On, o.cs.st = o.ls.st = i.Ps(), o.cs.an = o.ls.an = i._n, o.cs.pn = o.ls.pn = i.bs, o.cs.tags = o.ls.tags = JSON.stringify(i.Ct.Rn), o.cs.vid = o.ls.vid = i.Tn, i.Ms >= 0 && (o.cs.cl = o.ls.cl = i.Ms), o.cs.lv = o.ls.lv = i.Ls, o.cs.fw = o.ls.fw = i.Us(), o.cs.fwv = o.ls.fwv = i.Vs(), o.cs.mn = o.ls.mn = i.Vn, o.cs.mv = o.ls.mv = i.kn, i.yn >= 0 && (o.cs.br = o.ls.br = i.yn)) : i.ks() && (o.cs.sid = o.ls.sid = i.ys.Xt(), o.cs.sst = o.ls.sst = i.Ds, o.cs.st = o.ls.st = i.Ps(), o.cs.mn = o.ls.mn = i.Vn, o.cs.mv = o.ls.mv = i.kn), n) for(var e = Object.keys(n), s = 0; s < e.length; s++)"object" === typeof n[e[s]] ? o.cs[e[s]] = o.ls[e[s]] = JSON.stringify(n[e[s]]) : o.cs[e[s]] = o.ls[e[s]] = n[e[s]];
                        }
                        "undefined" !== typeof document && document && document.dispatchEvent(o.cs);
                    }
                } catch (t) {}
            }, this.ws = function() {
                if (null !== o.ls) for(var t = Object.keys(o.ls), n = 0; n < t.length; n++)delete o.cs[t[n]];
                o.ls = {};
            }, this.Fs = function(t, n, i) {
                try {
                    ((o.wt = i).Cs() || i.ks()) && (t === N.Bs ? n[N.Hs][N.Gs] ? n[N.Hs][N.Gs] === N.js ? o._s(n) : n[N.Hs][N.Gs] === N.Ks ? o.As(n) : n[N.Hs][N.Gs] === N.Ws && o.Rs(n) : n[N.Hs][N.Ys] ? o.Ts(n) : o.Ss(n) : t === N.xs ? o.ps({
                        err: n[N.qs],
                        ft: n[N.Js]
                    }) : t === N.Xs ? o.Es() : t === g.APP_TRACKER_EVENT.VIDEO_ATTEMPT ? o.vs() : t === N.Qs && (n[N.Zs] === g.Events.POD_START ? o.gs(n[N.zs]) : n[N.Zs] === g.Events.POD_END ? o.Is(n[N.zs]) : o.wt.Cs() ? o.Os({
                        name: n[N.Zs],
                        data: n[N.zs]
                    }) : o.Ns({
                        name: n[N.Zs],
                        data: n[N.zs]
                    })));
                } catch (t) {}
            };
        }, X = U.PlayerMonitor = function() {
            var e = this;
            this.$s = null, this.no = null, this.Ct = null, this.io = null, this.Pn = I.PlayerState.UNKNOWN, this.eo = -1, this.so = -1, this.Gn = [], this.oo = null, this.ro = null, this.uo = -2, this.ho = -2, this.Mn = -1, this.V = I.DEFAULT_SIGNAL_STRENGTH, this.ao = null, this.gi = null, this.U = null, this.L = null, this._e = null, this.fo = null, this.co = null, this.lo = null, this.do = null, this.we = null, this.Re = null, this.jn = null, this.Kn = null, this.Wn = null, (function(t) {
                e._e = t;
            }).apply(this, arguments), this.vo = function() {
                return e.Pn;
            }, this.Xe = function(t) {
                e.Pn !== t && (e.Me(), e.Pn = t, e.Eo());
            }, this._o = function() {
                return e.Ro;
            }, this.po = function() {
                return e.Ao;
            }, this.ze = function(t, n) {
                e.Me(), e.Ro = t, e.Ao = n, e.To();
            }, this.So = function() {
                return e.eo;
            }, this.Qe = function(t) {
                e.eo = t;
            }, this.Oo = function() {
                return e.so;
            }, this.Ze = function(t) {
                e.so = t;
            }, this.ve = function() {
                return e.uo;
            }, this.$e = function(t) {
                e.uo !== t && (e.uo = t, e.Eo());
            }, this.No = function() {
                return e.ho;
            }, this.ts = function(t) {
                e.ho !== t && (e.ho = t, e.Eo());
            }, this.Io = function() {
                return e.Mn;
            }, this.ns = function(t) {
                e.Mn = t;
            }, this.wo = function() {
                return e.ao;
            }, this.os = function(t) {
                e.ao = t, e.Eo();
            }, this.Ni = function() {
                return e.gi;
            }, this.rs = function(t) {
                e.gi = t, e.Eo();
            }, this.us = function(t) {
                e.Co(t);
            }, this.yo = function() {
                return e.V;
            }, this.si = function() {
                return e.jn;
            }, this.ri = function() {
                return e.Kn;
            }, this.hi = function() {
                return e.Wn;
            }, this.hs = function(t) {
                e.jn !== t && (e.jn = t, e.Eo());
            }, this.es = function(t) {
                e.Kn !== t && (e.Kn = t, e.Eo());
            }, this.ss = function(t) {
                e.Wn !== t && (e.Wn = t, e.Eo());
            }, this.mo = function() {
                return e.Do;
            }, this.Po = function() {
                return e.bo;
            }, this.Je = function(t, n) {
                n < 0 && (n = 0), e.Do === (t = t < 0 ? 0 : t) && e.bo === n || (e.Do = t, e.bo = n, e.Eo());
            }, this.Mo = function() {
                return e.no;
            }, this.Lo = function() {
                e.Mo() && (e.Ct = new c, e.io = {}, e.co = {}, e.Uo());
            }, this.Vo = function(t) {
                (e.no || t) && (this.Me(), e.no && (e.no = null, e.Lo()), t) && (e.no = m.ko(e.no, t), e.Lo());
            }, this.Se = function(t) {
                if (t) {
                    if (e.Ct) {
                        var n, i = !1;
                        for(n in t)if (e.Ct[n] !== t[n]) {
                            i = !0;
                            break;
                        }
                        i && (e.Me(), e.no = m.ko(t), e.Uo());
                    } else e.Vo(t);
                }
            }, this.Ne = function(t) {
                t ? e.lo !== t && (e.lo = t, e.Fo()) : (e.lo = null, e.Be());
            }, this.Me = function() {
                e.Bo || e.lo && (e.Bo = !0, e.lo(), e.Bo = !1);
            }, this.fe = function() {
                return e.$s;
            }, this.de = function(t, n) {
                e.$s !== t && (e.Me(), e.$s && (e.Ho(), e.Be(), e.Ie()), e.$s = t, e.$s) && e.Le(n);
            }, this.Go = function() {
                return e.oo;
            }, this.jo = function() {
                return e.ro || null;
            }, this.Ko = function() {
                return e.Gn;
            }, this.Wo = function() {
                e.Gn = [];
            }, this.di = function(t) {
                this.Me(), e.Gn.push(t), e.Si();
            }, this.ge = function(t, n) {
                e.Me(), e.oo = t, e.ro = n, e.Yo();
            }, this.xo = function() {
                e.Me();
            }, this.Fo = function() {
                e.Be(), e.fo = e._e.create(e.xo, 1e3, "PlayerMonitor.update");
            }, this.Be = function() {
                e.fo && (e.fo(), e.fo = null);
            }, this.Ce = function(t, n, i) {
                e.do = i, e.we = t, e.qo(), e.Re = n, e.we && g.AdType.CLIENT_SIDE === e.we && (e.Pn = g.PlayerState.UNKNOWN, e.Jo(e.we, n, i ? i[g.POD_POSITION] : null));
            }, this.ye = function() {
                e.we && g.AdType.CLIENT_SIDE === e.we && (e.Xo(), e.Pn = g.PlayerState.UNKNOWN), e.Qo(), e.we = null, e.Re = null;
            }, this.Zo = function() {
                return e.do;
            }, this.zo = function() {
                return e.we;
            }, this.getContentMetadata = function() {
                return this.Ct;
            }, this.Ie = function() {
                this.$s = null, this.no = null, this.Ct = null, this.io = null, this.Pn = I.PlayerState.UNKNOWN, this.eo = -1, this.so = -1, this.Gn = [], this.oo = null, this.ro = null, this.uo = -2, this.ho = -2, this.Mn = -1, this.V = I.DEFAULT_SIGNAL_STRENGTH, this.ao = null, this.gi = null, this.U = null, this.L = null, this._e = null, this.fo = null, this.co = null, this.lo = null, this.do = null, this.we = null, this.Re = null, this.jn = null, this.Kn = null, this.Wn = null, e.Ue = null, e.Fe = a.NO_SESSION_KEY;
            };
        }, d = U.PlayerMonitorImpl = function() {
            var o = this;
            o.De = null, o.Ue = null, o.Fe = a.NO_SESSION_KEY, (function(t, n) {
                X.call(this, n), o.De = t;
            }).apply(this, arguments), this.getPHT = function() {
                return o.So();
            }, this.getBufferLength = function() {
                return o.Oo();
            }, this.getRenderedFrameRate = function() {
                return o.Io();
            }, this.getSignalStrength = function() {
                return o.yo();
            }, this.To = function() {
                o.Ue && o._ContentSessionKey !== a.NO_SESSION_KEY && (o._o() ? o.Ue.setPlayerSeekStart(o.po()) : o.Ue.setPlayerSeekEnd());
            }, this.Eo = function() {
                o.Ue && (o.Ue.setPlayerState(o.vo()), o.ve() > 0 && o.Ue.setBitrateKbps(o.ve()), o.No() > 0 && o.Ue.setAvgBitrateKbps(o.No()), o.mo() > 0 && o.Ue.setVideoResolutionWidth(o.mo()), o.Po() > 0 && o.Ue.setVideoResolutionHeight(o.Po()), o.wo() && o.Ue.setCDNServerIP(o.wo()), m.gt(o.Ni()) && o.Ue.setDroppedFramesTotal(o.Ni()), m.Pt(o.si()) && o.Ue.setAudioLang(o.si()), m.Pt(o.ri()) && o.Ue.setSubtitleLang(o.ri()), m.Pt(o.hi())) && o.Ue.setCcLang(o.hi());
            }, this.Mt = function() {
                o.Fe !== a.NO_SESSION_KEY && o.De && o.De.updateContentMetadata(o.Fe, o.Ct);
            }, this.Ve = function() {
                if (o.Ue) {
                    o.co && m.Ht(o.co) > 0 && (o.co[g.MODULE_NAME] && o.co[g.MODULE_VERSION] && (t = o.co[g.MODULE_NAME], n = o.co[g.MODULE_VERSION], m.Pt(t)) && m.Pt(n) && o.Ue.setModuleNameAndVersion(t, n), o.co[g.FRAMEWORK_NAME] && (t = o.co[g.FRAMEWORK_NAME], m.Pt(t)) && o.Ue.setPlayerType(t), o.co[g.FRAMEWORK_VERSION]) && (n = o.co[g.FRAMEWORK_VERSION], m.Pt(n)) && o.Ue.setPlayerVersion(n);
                    var t, n, i = o.Ko();
                    o.Wo();
                    for(var e = 0; e < i.length; e++){
                        var s = i[e];
                        o.Ue.di(s);
                    }
                }
            }, this.Xo = function() {
                o.Ue && o.Fe !== a.NO_SESSION_KEY && (o.Eo(), this.$o());
            }, this.Vt = function() {
                o.Ue && o.Fe !== a.NO_SESSION_KEY && (o.Eo(), o.De.kt(o.Fe));
            }, this.$o = function() {
                o.De && o.Fe !== g.NO_SESSION_KEY && o.De.adEnd(o.Fe);
            }, this.Jo = function(t, n, i) {
                var e;
                o.Ue && o.Fe !== g.NO_SESSION_KEY && (e = null, g.AdType.CLIENT_SIDE === t ? e = a.AdStream.SEPARATE : g.AdType.SERVER_SIDE === t && (e = a.AdStream.CONTENT), o.tr(e, n, i));
            }, this.Lt = function() {
                o.Ue && o.Fe !== g.NO_SESSION_KEY && o.De.Ut(o.Fe);
            }, this.tr = function(t, n, i) {
                o.De && o.Fe !== g.NO_SESSION_KEY && o.De.adStart(o.Fe, t, n, i);
            }, this.Le = function() {
                if (o.De) {
                    o.Ue = o.De.getPlayerStateManager(!0), o.Ve(), o.Ue.setClientMeasureInterface(this);
                    try {
                        var t;
                        o.Ct && o.Ct.custom && !o.Ct.custom[g.UTM_TRACKING_URL] && (Array.prototype.filter || (Array.prototype.filter = function(t) {
                            if (void 0 === this || null === this) throw new TypeError;
                            var n = Object(this), i = n.length >>> 0;
                            if ("function" !== typeof t) throw new TypeError;
                            for(var e, s = [], o = arguments.length >= 2 ? arguments[1] : void 0, r = 0; r < i; r++)r in n && (e = n[r], t.call(o, e, r, n)) && s.push(e);
                            return s;
                        }), "" !== (t = m.nr().split("?").join("").split("&").filter(function(t) {
                            return 2 === t.split("=").length && t.split("=")[0].toLowerCase().indexOf("utm_") >= 0;
                        }).join("&"))) && (o.Ct.custom[g.UTM_TRACKING_URL] = t);
                    } catch (t) {
                        o.p.error("PlayerMonitorImpl _createSession : " + t);
                    }
                    o.Fe = o.De.createSession(o.Ct, o.Ue, !0);
                }
            }, this.Ho = function() {
                o.De && (o.Ue && (o.Ue.setPlayerState(g.PlayerState.STOPPED), o.Ue = null), o.Fe !== g.NO_SESSION_KEY) && (o.De.cleanupSession(o.Fe), o.Fe = g.NO_SESSION_KEY);
            }, this.Si = function() {
                if (o.De && o.Fe !== a.NO_SESSION_KEY) {
                    var t = o.Ko();
                    o.Wo();
                    for(var n = 0; n < t.length; n++){
                        var i = t[n];
                        o.De.reportError(o.Fe, i.ir(), i.er());
                    }
                }
            }, this.Yo = function() {
                o.Fe !== a.NO_SESSION_KEY && o.De && o.De.sendCustomEvent(o.Fe, o.Go(), o.jo());
            }, this.Uo = function() {
                var t, n = o.Mo(), i = !1, e = !1;
                for(t in n){
                    var s = n[t];
                    if (m.Pt(t) && null !== s && void 0 !== s) switch(t){
                        case g.STREAM_URL:
                            e = !0, o.Ct.streamUrl = s;
                            break;
                        case g.ASSET_NAME:
                            e = !0, o.Ct.assetName = s;
                            break;
                        case g.DEFAULT_RESOURCE:
                            e = !0, o.Ct.defaultResource = s;
                            break;
                        case g.VIEWER_ID:
                            e = !0, o.Ct.viewerId = s;
                            break;
                        case g.PLAYER_NAME:
                            e = !0, o.Ct.applicationName = s;
                            break;
                        case g.DURATION:
                            e = !0, o.Ct.duration = s;
                            break;
                        case g.IS_LIVE:
                            e = !0, o.Ct.streamType = s;
                            break;
                        case g.ENCODED_FRAMERATE:
                            e = !0, o.Ct.encodedFrameRate = s;
                            break;
                        case g.MODULE_NAME:
                        case g.MODULE_VERSION:
                        case g.FRAMEWORK_NAME:
                        case g.FRAMEWORK_VERSION:
                            i = !0, o.co[t] = s;
                            break;
                        default:
                            g.APPLICATION_VERSION;
                            e = !0, o.Ct.custom[t] = s;
                    }
                }
                i && this.Ve(), e && this.Mt();
            }, this.qo = function() {
                this.sr(g.Events.POD_START);
            }, this.Qo = function() {
                this.sr(g.Events.POD_END);
            }, this.sr = function(t) {
                var n, i, e;
                o.De && o.Fe !== g.NO_SESSION_KEY && (n = {}, (e = this.Zo()) && ((i = e[g.POD_POSITION]) && (n[g.POD_POSITION] = i), (i = e[g.POD_INDEX]) && (n[g.POD_INDEX] = i + ""), t === g.Events.POD_START) && (i = e[g.POD_DURATION]) && (n[g.POD_DURATION] = i + ""), (e = this.zo()) && (n[g.AD_TYPE] = e), o.De.sendCustomEvent(o.Fe, t, n));
            }, this.Co = function(t) {
                o.Ue.setDroppedFramesCount(t);
            }, this.rr = function(t) {
                this.Fe === g.NO_SESSION_KEY && t !== g.NO_SESSION_KEY && (this.Fe = t);
            }, this.ke = function() {
                return this.Fe;
            }, this.Xt = function() {
                return o.De.getSessionId(this.Fe);
            }, this.Qt = function() {
                return o.De.getClientId(this.Fe);
            }, this.Zt = function(t, n) {
                o.De.Zt(this.Fe, t, n);
            }, d.prototype = Object.create(X.prototype), d.prototype.constructor = d;
        }, lt.Impl = lt.Impl || {}, lt.Impl.Html5Http = function() {
            (function() {}).apply(this, arguments), this.makeRequest = function() {
                return this.makeRequestStandard.apply(this, arguments);
            }, this.makeRequestStandard = function(t, n, i, e, s, o) {
                var r = new XMLHttpRequest;
                return r.open(t, n, !0), e && r.overrideMimeType && (r.overrideMimeType = e), e && r.setRequestHeader && r.setRequestHeader("Content-Type", e), s > 0 && (r.timeout = s, r.ontimeout = function() {
                    r.ontimeout = r.onreadystatechange = null, o && o(!1, "timeout after " + s + " ms");
                }), r.onreadystatechange = function() {
                    4 === r.readyState && (r.ontimeout = r.onreadystatechange = null, 200 === r.status ? o && o(!0, r.responseText) : o && o(!1, "http status " + r.status));
                }, r.send(i), null;
            }, this.release = function() {};
        }, lt.Impl = lt.Impl || {}, lt.Impl.Html5Logging = function() {
            (function() {}).apply(this, arguments), this.consoleLog = function(t, n) {
                "undefined" !== typeof console && (console.log && n === h.LogLevel.DEBUG || n === h.LogLevel.INFO ? console.log(t) : console.warn && n === h.LogLevel.WARNING ? console.warn(t) : console.error && n === h.LogLevel.ERROR && console.error(t));
            }, this.release = function() {};
        }, lt.Impl = lt.Impl || {}, lt.Impl.Html5Metadata = function() {
            (function() {}).apply(this, arguments), this.getBrowserName = function() {
                return null;
            }, this.getBrowserVersion = function() {
                return null;
            }, this.getDeviceBrand = function() {
                return null;
            }, this.getDeviceManufacturer = function() {
                return null;
            }, this.getDeviceModel = function() {
                return null;
            }, this.getDeviceType = function() {
                return null;
            }, this.getDeviceVersion = function() {
                return null;
            }, this.getFrameworkName = function() {
                return null;
            }, this.getFrameworkVersion = function() {
                return null;
            }, this.getOperatingSystemName = function() {
                return null;
            }, this.getOperatingSystemVersion = function() {
                return null;
            }, this.getDeviceCategory = function() {
                return null;
            }, this.getScreenWidth = function() {
                return "undefined" !== typeof window && window && window.screen && window.screen.width ? window.screen.width.toString() : null;
            }, this.getScreenHeight = function() {
                return "undefined" !== typeof window && window && window.screen && window.screen.height ? window.screen.height.toString() : null;
            }, this.getScaleFactor = function() {
                return "undefined" !== typeof window && window && window.devicePixelRatio ? window.devicePixelRatio.toString() : null;
            }, this.release = function() {};
        }, lt.Impl = lt.Impl || {}, lt.Impl.Html5Storage = function() {
            (function() {}).apply(this, arguments), this.saveData = function(t, n, i, e) {
                t = t + "." + n;
                try {
                    localStorage.setItem(t, i), e(!0, null);
                } catch (t) {
                    e(!1, t.toString());
                }
            }, this.loadData = function(t, n, i) {
                t = t + "." + n;
                try {
                    i(!0, localStorage.getItem(t));
                } catch (t) {
                    i(!1, t.toString());
                }
            }, this.release = function() {};
        }, lt.Impl = lt.Impl || {}, lt.Impl.Html5Time = function() {
            (function() {}).apply(this, arguments), this.getEpochTimeMs = function() {
                return (new Date).getTime();
            }, this.release = function() {};
        }, lt.Impl = lt.Impl || {}, lt.Impl.Html5Timer = function() {
            (function() {}).apply(this, arguments), this.createTimer = function(t, n) {
                var i = setInterval(t, n);
                return function() {
                    -1 !== i && (clearInterval(i), i = -1);
                };
            }, this.release = function() {};
        }, v = U.VideoAnalytics = function() {
            var s = this;
            s.Ee = null, s.T = null, s._e = null, s.le = null, s.pe = null, this.release = function() {
                s.p, s.le && s.le.fe() && s.le.de(!1), "undefined" !== typeof lt.ProxyMonitor && s.pe && (lt.ProxyMonitor.release(s.pe), s.pe = null), s.le && (s.le.Ne(null), s.le.Ie(), s.le = null), s._e = null;
            }, (function(t, n) {
                s.Ee = t, s.T = n, s._e = n.buildTimer(g.version), s.le = new d(s.Ee, s._e), w.call(this);
            }).apply(this, arguments), this.reportPlaybackRequested = function(t) {
                s.p, s.le && (m.Ht(t) > 0 && s.setContentInfo(t), s.le.fe() || s.le.de(!0));
            }, this.reportPlaybackEnded = function() {
                s.p, s.le && s.le.fe() && (s.le.de(!1), "undefined" !== typeof lt.ProxyMonitor && s.pe && (lt.ProxyMonitor.release(s.pe), s.pe = null), s.le.Ne(null));
            }, this.reportPlaybackFailed = function(t, n) {
                s.le && (m.Ht(n) > 0 && s.setContentInfo(n), s.le.fe() || s.le.de(!0), s.p, s.reportPlaybackError(t, a.ErrorSeverity.FATAL), s.reportPlaybackEnded());
            }, this.setContentInfo = function(t) {
                m.Ht(t) <= 0 || s.le && (s.p, s.le.Se(t));
            }, this.setPlayerInfo = function(t) {
                m.Ht(t) <= 0 || s.le && (s.p, s.le.Se(t));
            }, this.reportPlaybackMetric = function() {
                0 !== arguments.length && (1 === arguments.length ? s.Oe(arguments[0]) : 2 === arguments.length ? s.Oe(arguments[0], arguments[1]) : 3 === arguments.length ? s.Oe(arguments[0], arguments[1], arguments[2]) : 4 === arguments.length && s.Oe(arguments[0], arguments[1], arguments[2], arguments[3]));
            }, this.reportPlaybackError = function(t, n) {
                s.le && m.Pt(t) && (s.p, t = new M(t, n), s.le.di(t));
            }, this.reportPlaybackEvent = function(t, n) {
                if (m.Pt(t) && s.le && (s.p, s.le)) switch(t){
                    case g.Events.USER_WAIT_STARTED:
                    case g.Events.BUMPER_VIDEO_STARTED:
                        s.le.Lt();
                        break;
                    case g.Events.USER_WAIT_ENDED:
                    case g.Events.BUMPER_VIDEO_ENDED:
                        s.le.Vt();
                        break;
                    default:
                        s.le.ge(t, n);
                }
            }, this.setCallback = function(t) {
                s.p, s.le && s.le.Ne(t);
            }, this.reportAdBreakStarted = function(t, n, i) {
                s.le && (s.p, s.le.Ce(t, n, i));
            }, this.reportAdBreakEnded = function() {
                s.le && (s.p, s.le.ye());
            }, this.setPlayer = function(t, n) {
                var i, e;
                void 0 !== t && (n && (i = n[g.CONVIVA_MODULE], e = n[g.MEDIA_ELEMENT]), "undefined" !== typeof i ? lt.ProxyMonitor = i.ProxyMonitor : "undefined" !== typeof ConvivaModule && (lt.ProxyMonitor = ConvivaModule.ProxyMonitor), "undefined" !== typeof lt.ProxyMonitor) && (s.p, !t && s.pe ? (lt.ProxyMonitor.release(s.pe), s.pe = null) : t ? (s.pe && lt.ProxyMonitor.release(s.pe), s.p, s.pe = "undefined" !== typeof e ? lt.ProxyMonitor.initConvivaDropIn(t, e, s.T, this, lt) : lt.ProxyMonitor.initConvivaDropIn(t, s.T, this, lt)) : "undefined" !== typeof e && (s.pe = lt.ProxyMonitor.initConvivaDropIn(t, e, s.T, this, lt)));
            }, this.setAdAnalytics = function(t) {
                t ? s.getAdType() && (s.getAdType() === g.AdType.SERVER_SIDE ? s.ae = t.getAdPlayerMonitor() : s.getAdType() === g.AdType.CLIENT_SIDE && s.p) : s.ae = null;
            }, this.configureExistingSession = function(t) {
                t !== g.NO_SESSION_KEY && s.le && (s.p, s.le.rr(t));
            }, this.getSessionId = function() {
                return s.le ? (s.p, s.le.Xt()) : g.NO_SESSION_KEY;
            }, this.getClientId = function() {
                return s.le ? (s.p, s.le.Qt()) : null;
            }, this.Te = function() {
                return s.p, this.le;
            }, this.getAdType = function() {
                return s.le ? s.le.we : null;
            }, this.me = function() {
                return s.le ? s.le.Re : null;
            }, v.prototype = Object.create(w.prototype), v.prototype.constructor = v;
        }, U.JsonParse = (k = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "	"
        }, o = function(t) {
            throw {
                name: "SyntaxError",
                message: t,
                at: n,
                text: V
            };
        }, r = function(t) {
            return t && t !== s && o("Expected '" + t + "' instead of '" + s + "'"), s = V.charAt(n), n += 1, s;
        }, F = function() {
            var t, n, i, e = "";
            if ('"' === s) for(; r();){
                if ('"' === s) return r(), e;
                if ("\\" === s) {
                    if (r(), "u" === s) {
                        for(n = i = 0; n < 4 && (t = parseInt(r(), 16), isFinite(t)); n += 1)i = 16 * i + t;
                        e += String.fromCharCode(i);
                    } else {
                        if ("string" !== typeof k[s]) break;
                        e += k[s];
                    }
                } else e += s;
            }
            o("Bad string");
        }, e = function() {
            for(; s && s <= " ";)r();
        }, u = function() {
            switch(e(), s){
                case "{":
                    var t, n = {};
                    if ("{" === s) {
                        if (r("{"), e(), "}" === s) return r("}"), n;
                        for(; s;){
                            if (t = F(), e(), r(":"), Object.hasOwnProperty.call(n, t) && o('Duplicate key "' + t + '"'), n[t] = u(), e(), "}" === s) return r("}"), n;
                            r(","), e();
                        }
                    }
                    return void o("Bad object");
                case "[":
                    var i = [];
                    if ("[" === s) {
                        if (r("["), e(), "]" === s) return r("]"), i;
                        for(; s;){
                            if (i.push(u()), e(), "]" === s) return r("]"), i;
                            r(","), e();
                        }
                    }
                    return void o("Bad array");
                case '"':
                    return F();
                case "-":
                    return ft();
                default:
                    return (s >= "0" && s <= "9" ? ft : function() {
                        switch(s){
                            case "t":
                                return r("t"), r("r"), r("u"), r("e"), !0;
                            case "f":
                                return r("f"), r("a"), r("l"), r("s"), r("e"), !1;
                            case "n":
                                return r("n"), r("u"), r("l"), r("l"), null;
                        }
                        o("Unexpected '" + s + "'");
                    })();
            }
        }, function(t, r) {
            return V = t, n = 0, s = " ", t = u(), e(), s && o("Syntax error"), "function" === typeof r ? function t(n, i) {
                var e, s, o = n[i];
                if (o && "object" === typeof o) for(e in o)Object.hasOwnProperty.call(o, e) && (void 0 !== (s = t(o, e)) ? o[e] = s : delete o[e]);
                return r.call(n, i, o);
            }({
                "": t
            }, "") : t;
        }), A = U.JSON2 = {}, "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + t(this.getUTCMonth() + 1) + "-" + t(this.getUTCDate()) + "T" + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds()) + "Z" : null;
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf();
        }), "function" !== typeof A.stringify && (E = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, Q = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, A.stringify = function(t, n, i) {
            var e;
            if (R = _ = "", "number" === typeof i) for(e = 0; e < i; e += 1)R += " ";
            else "string" === typeof i && (R = i);
            if (!(p = n) || "function" === typeof n || "object" === typeof n && "number" === typeof n.length) return function t(n, i) {
                var e, s, o, r, u, h = _, a = i[n];
                switch(a && "object" === typeof a && "function" === typeof a.toJSON && (a = a.toJSON(n)), typeof (a = "function" === typeof p ? p.call(i, n, a) : a)){
                    case "string":
                        return ct(a);
                    case "number":
                        return isFinite(a) ? String(a) : "null";
                    case "boolean":
                    case "null":
                        return String(a);
                    case "object":
                        if (!a) return "null";
                        if (_ += R, u = [], Object.prototype.toString.apply(a) === Object.prototype.toString.apply([])) {
                            for(r = a.length, e = 0; e < r; e += 1)u[e] = t(e, a) || "null";
                            o = 0 === u.length ? "[]" : _ ? "[\n" + _ + u.join(",\n" + _) + "\n" + h + "]" : "[" + u.join(",") + "]";
                        } else {
                            if (p && "object" === typeof p) for(r = p.length, e = 0; e < r; e += 1)"string" === typeof p[e] && (o = t(s = p[e], a)) && u.push(ct(s) + (_ ? ": " : ":") + o);
                            else for(s in a)Object.prototype.hasOwnProperty.call(a, s) && (o = t(s, a)) && u.push(ct(s) + (_ ? ": " : ":") + o);
                            o = 0 === u.length ? "{}" : _ ? "{\n" + _ + u.join(",\n" + _) + "\n" + h + "}" : "{" + u.join(",") + "}";
                        }
                        return _ = h, o;
                }
            }("", {
                "": t
            });
            throw new Error("JSON2.stringify");
        }), O = U.ur = {
            hr: "0123456789abcdef",
            ar: function(t) {
                for(var n = "", i = 7; i >= 0; i--)n += O.hr.charAt(t >> 4 * i & 15);
                return n;
            },
            cr: function(t) {
                for(var n = 1 + (t.length + 8 >> 6), i = new Array(16 * n), e = 0; e < 16 * n; e++)i[e] = 0;
                for(e = 0; e < t.length; e++)i[e >> 2] |= t.charCodeAt(e) << 24 - e % 4 * 8;
                return i[e >> 2] |= 128 << 24 - e % 4 * 8, i[16 * n - 1] = 8 * t.length, i;
            },
            lr: function(t, n) {
                var i = (65535 & t) + (65535 & n);
                return (t >> 16) + (n >> 16) + (i >> 16) << 16 | 65535 & i;
            },
            dr: function(t, n) {
                return t << n | t >>> 32 - n;
            },
            vr: function(t, n, i, e) {
                return t < 20 ? n & i | ~n & e : !(t < 40) && t < 60 ? n & i | n & e | i & e : n ^ i ^ e;
            },
            Er: function(t) {
                return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
            },
            _r: function(t) {
                for(var n = "", i = 0; i < t.length; i++)n += String.fromCharCode(t[i]);
                return O.Rr(n);
            },
            Rr: function(t) {
                if ("" === t) return "";
                for(var n, i = O.cr(t), e = new Array(80), s = 1732584193, o = -271733879, r = -1732584194, u = 271733878, h = -1009589776, a = 0; a < i.length; a += 16){
                    for(var f = s, c = o, l = r, d = u, v = h, E = 0; E < 80; E++)e[E] = E < 16 ? i[a + E] : O.dr(e[E - 3] ^ e[E - 8] ^ e[E - 14] ^ e[E - 16], 1), n = O.lr(O.lr(O.dr(s, 5), O.vr(E, o, r, u)), O.lr(O.lr(h, e[E]), O.Er(E))), h = u, u = r, r = O.dr(o, 30), o = s, s = n;
                    s = O.lr(s, f), o = O.lr(o, c), r = O.lr(r, l), u = O.lr(u, d), h = O.lr(h, v);
                }
                return O.ar(s) + O.ar(o) + O.ar(r) + O.ar(u) + O.ar(h);
            }
        }, (N = U.CwsProtocol = function() {
            this.pr = function(t, n, i, e) {
                return e.seq = t, e.st = n, e.t = i, e;
            }, this.Ar = function(t, n) {
                var i = N.Xs;
                return this.pr(t, n, i, {});
            };
        }).version = "2.6", N.Tr = "/0/wsg", N.H = "0", N.Sr = -1, N.Or = !1, N.Nr = 2, N.gr = -1, N.Ir = -1, N.wr = 1e3, N.Cr = "sdk.js.1", N.Bs = "CwsStateChangeEvent", N.xs = "CwsErrorEvent", N.Xs = "CwsSessionEndEvent", N.Qs = "CwsCustomEvent", N.yr = "CwsSeekEvent", N.mr = "CwsDataSamplesEvent", N.Dr = "ok", N.Pr = "err", N.Mr = "clid", N.Lr = "cfg", N.Ur = "evs", N.Vr = "maxhbinfos", N.kr = "slg", N.Fr = "hbi", N.Br = "gw", N.Hr = "fp", N.Gr = "csi_en", N.jr = "CwsSessionHb", N.Kr = "t", N.Wr = "st", N.Yr = "sst", N.qr = "lv", N.Jr = "seq", N.Xr = "cid", N.Qr = "clid", N.Zr = "clv", N.zr = "pver", N.$r = "iid", N.tu = "sid", N.nu = "vid", N.iu = "an", N.eu = "pn", N.su = "tags", N.ou = "sf", N.ru = "evs", N.uu = "lg", N.hu = "hbinfos", N.au = "sdk", N.fu = "pj", N.Gs = "ps", N.Ys = "br", N.cu = "avgbr", N.lu = "cl", N.du = "efps", N.vu = "afps", N.Eu = "rfpstot", N._u = "rfpscnt", N.Ru = "rs", N.pu = "pht", N.Au = "bl", N.Tu = "url", N.Su = "caps", N.Ou = "pm", N.Nu = "w", N.gu = "h", N.Iu = "ct", N.wu = "le", N.Cu = "dftot", N.yu = "dfcnt", N.mu = "al", N.Du = "sl", N.Pu = "cal", N.bu = "ss", N.Mu = "csi_n", N.Lu = "csi_t", N.Uu = "csi_l", N.Vu = "csi_v", N.ku = "csi_c", N.Fu = "sch", N.Bu = "br", N.Hu = "brv", N.Gu = "dvb", N.ju = "dvma", N.Ku = "dvm", N.Wu = "dvt", N.Yu = "dvv", N.xu = "sw", N.qu = "sh", N.Ju = "scf", N.Xu = "fw", N.Qu = "fwv", N.Zu = "cc", N.zu = "mn", N.$u = "mv", N.th = "os", N.nh = "osv", N.ih = "cat", N.eh = "caps", N.sh = "t", N.oh = "seq", N.rh = "st", N.uh = "act", N.hh = "skto", N.qs = "err", N.Js = "ft", N.Hs = "new", N.ah = "old", N.Zs = "name", N.zs = "attr", N.fh = "seq", N.lh = "err", N.dh = "rtt", N.Eh = "ad", N._h = "csi", N.Rh = function(t) {
            switch(t){
                case I.PlayerState.STOPPED:
                    return N.ph;
                case I.PlayerState.PLAYING:
                    return N.js;
                case I.PlayerState.BUFFERING:
                    return N.Ks;
                case I.PlayerState.PAUSED:
                    return N.Ws;
                case I.PlayerState.NOT_MONITORED:
                    return N.Ah;
                default:
                    return N.Th;
            }
        }, N.ph = 1, N.js = 3, N.Ks = 6, N.Ws = 12, N.Ah = 98, N.Th = 100, N.Sh = {
            Oh: 0,
            Ot: 1,
            Nh: 2,
            gh: 4
        }, N.Ih = {
            wh: 0
        }, Z = U.LibJSONInterface = function() {
            this.Ch = function(t) {
                var n = null;
                try {
                    n = A.stringify(t);
                } catch (t) {}
                return n;
            }, this.yh = function(t) {
                var n = null;
                try {
                    n = U.JsonParse(t);
                } catch (t) {
                    return n;
                }
                return n = m.mh(n) ? n : null;
            };
        }, z = U.CwsHeartbeat = function() {
            this.Dh = {}, (function() {}).apply(this, arguments), this.get = function() {
                return this.Dh;
            }, this.Ph = function(t, n) {
                this.Dh[t] = n;
            }, this.bh = function(t, n, i) {
                this.Dh[t] || (this.Dh[t] = {}), this.Dh[t][n] = i;
            }, this.Mh = function(t) {
                this.Ph(N.Kr, t);
            }, this.Lh = function(t) {
                this.Ph(N.Wr, t);
            }, this.Uh = function(t) {
                this.Ph(N.Yr, t);
            }, this.Vh = function(t) {
                this.Ph(N.qr, t);
            }, this.kh = function(t) {
                this.Ph(N.Jr, t);
            }, this.Fh = function(t) {
                this.Ph(N.Xr, t);
            }, this.Bh = function(t) {
                this.Ph(N.Qr, t);
            }, this.Hh = function(t) {
                this.Ph(N.Zr, t);
            }, this.Gh = function(t) {
                this.Ph(N.zr, t);
            }, this.jh = function(t) {
                this.Ph(N.eh, t);
            }, this.Kh = function(t) {
                this.Ph(N.tu, t);
            }, this.Wh = function(t) {
                this.Ph(N.$r, t);
            }, this.Yh = function(t) {
                this.Ph(N.nu, t);
            }, this.xh = function(t) {
                this.Ph(N.iu, t);
            }, this.qh = function(t) {
                this.Ph(N.eu, t);
            }, this.Jh = function(t) {
                this.Ph(N.su, t);
            }, this.Xh = function(t) {
                this.Ph(N.ou, t);
            }, this.Qh = function(t) {
                this.Ph(N.Su, t);
            }, this.Zh = function(t) {
                this.Ph(N.ru, t);
            }, this.zh = function(t) {
                this.Ph(N.au, t);
            }, this.$h = function(t) {
                this.Ph(N.uu, t);
            }, this.ta = function(t) {
                this.Ph(N.hu, t);
            }, this.Xe = function(t) {
                this.Ph(N.Gs, t);
            }, this.na = function(t) {
                this.Ph(N.fu, t);
            }, this.ia = function(t) {
                this.Ph(N.lu, t);
            }, this.ea = function(t) {
                this.Ph(N.Ys, t);
            }, this.sa = function(t) {
                this.Ph(N.cu, t);
            }, this.oa = function(t) {
                this.Ph(N.Ru, t);
            }, this.ra = function(t) {
                this.Ph(N.du, t);
            }, this.ua = function(t) {
                this.Ph(N.vu, t);
            }, this.ha = function(t) {
                this.Ph(N._u, t);
            }, this.aa = function(t) {
                this.Ph(N.Eu, t);
            }, this.fa = function(t) {
                this.bh(N.Ou, N.Fu, t);
            }, this.ca = function(t) {
                this.bh(N.Ou, N.Bu, t);
            }, this.la = function(t) {
                this.bh(N.Ou, N.Hu, t);
            }, this.da = function(t) {
                this.bh(N.Ou, N.Gu, t);
            }, this.va = function(t) {
                this.bh(N.Ou, N.ju, t);
            }, this.Ea = function(t) {
                this.bh(N.Ou, N.Ku, t);
            }, this._a = function(t) {
                this.bh(N.Ou, N.Wu, t);
            }, this.Ra = function(t) {
                this.bh(N.Ou, N.Yu, t);
            }, this.pa = function(t) {
                this.bh(N.Ou, N.Xu, t), this.Ph(N.Xu, t);
            }, this.Aa = function(t) {
                this.bh(N.Ou, N.Qu, t), this.Ph(N.Qu, t);
            }, this.Ta = function(t) {
                this.bh(N.Ou, N.th, t.toUpperCase());
            }, this.Sa = function(t) {
                this.bh(N.Ou, N.nh, t);
            }, this.Oa = function(t) {
                this.bh(N.Ou, N.ih, t);
            }, this.Na = function(t) {
                this.bh(N.Ou, N.xu, t);
            }, this.ga = function(t) {
                this.bh(N.Ou, N.qu, t);
            }, this.Ia = function(t) {
                this.bh(N.Ou, N.Ju, t);
            }, this.wa = function(t) {
                this.Ph(N.Cu, t);
            }, this.Co = function(t) {
                this.Ph(N.yu, t);
            }, this.Ca = function(t) {
                this.Ph(N.pu, t);
            }, this.ya = function(t) {
                this.Ph(N.Au, t);
            }, this.ma = function(t) {
                this.Ph(N.Tu, t);
            }, this.Da = function(t) {
                this.Ph(N.Nu, t);
            }, this.Pa = function(t) {
                this.Ph(N.gu, t);
            }, this.ba = function(t) {
                this.Ph(N.Iu, t);
            }, this.Ma = function(t) {
                this.Ph(N.wu, t);
            }, this.La = function() {
                this.Ph(N.Eh, !0);
            }, this.Ua = function(t) {
                this.Ph(N.bu, t);
            }, this.setModuleName = function(t) {
                this.bh(N.Zu, N.zu, t);
            }, this.Va = function(t) {
                this.bh(N.Zu, N.$u, t);
            }, this.ka = function(t) {
                this.Ph(N._h, t);
            }, this.Fa = function(t) {
                t && this.Ph(N.Mu, t);
            }, this.Ba = function(t) {
                t && this.Ph(N.Lu, t);
            }, this.Ha = function(t) {
                t && this.Ph(N.Uu, t);
            }, this.Ga = function(t) {
                t && this.Ph(N.Vu, t);
            }, this.ja = function(t) {
                t && this.Ph(N.ku, t);
            }, this.Ka = function(t) {
                this.Ph(N.mu, t);
            }, this.Wa = function(t) {
                this.Ph(N.Du, t);
            }, this.Ya = function(t) {
                this.Ph(N.Pu, t);
            };
        }, (C = U.CwsSession = function() {
            var _ = this;
            _.qa = null, _.Ct = null, _.Ds = 0, _.Ja = 0, _.Xa = N.Sh.Oh, _.Qa = N.Ih.wh, _.Za = [], _.za = -1, _.yn = -2, _.Dn = -2, _.gi = -1, _.$a = -1, _.tf = null, _.Pn = I.PlayerState.UNKNOWN, _.wn = -1, _.Ms = -1, _.On = null, _.Fn = -1, _.Bn = -1, _.Ue = null, _._n = null, _.Tn = null, _.bs = null, _.Ls = null, _.nf = {}, _.if = null, _.ef = null, _.sf = null, _.rf = null, _.uf = null, _.hf = null, _.af = null, _.ff = null, _.cf = null, _.lf = null, _.df = null, _.vf = null, _.Ef = null, _._f = null, _.Rf = null, _.Vn = null, _.kn = null, _.L = null, _.U = null, _.ao = null, _.pf = null, _.Af = !1, _.Tf = !1, _.Sf = !1, _.Of = !1, _.Nf = null, _.gf = 1e3, _.If = 0, _.wf = 0, _.Cf = {}, _.D = {}, _.yf = !1, _.mf = null, _.Df = null, _.Pf = null, _.bf = null, _.Mf = null, _.Lf = null, _.Uf = 12e4, _.Vf = N.Or, _.kf = !1, _.Ff = null, _.ki = null, _.jn = null, _.Kn = null, _.Wn = null, (function(t, n, i, e, s, o, r, u, h, a, f, c, l) {
                this.Bf = t, this.Ee = n, this.Vi = i, this.p = e, this.p.setModuleName("CwsSession"), this.g = s, this._e = o, this.Hf = r, this.Gf = u, this.jf = h, this.Fi = a, this.Kf = f, this.Ct = c, this.Ct && (_.wn = this.Ct.encodedFrameRate, _.On = this.Ct.streamUrl, _.Ms = this.Ct.duration), this.Kf && (_.Ff = _.Kf.get(y.B)), _.ki = l;
            }).apply(this, arguments), this.Tt = function() {
                this.Kf = null, this.Fi = null, this.N = null, this.jf = null, this.Gf = null, this.Hf = null, this._e = null, this.g = null, this.p = null, this.Vi = null, this.Ee = null, this.Bf.Wf(), this.Bf = null, this.pf = null, this.Sf = !0;
            }, this.Yf = function(t) {
                this.ys = t, this.xf = this.ys.xf, this.p.Kh(this.ys.C), this.Ds = this.jf.current(), this.Cs() || this.qf() ? (this.Xa += C.xa, _.p.info("start(): assetName=" + _.Ct.assetName)) : _.p.info("start()" + _.Jf());
            }, this.Xf = function() {
                this.Of = !0;
            }, this.Qf = function() {
                this.p.debug("initialize()"), (this.Cs() || this.qf() || this.ks()) && (this.Ee && this.Ee._ && this.Ee._.Fs(g.APP_TRACKER_EVENT.VIDEO_ATTEMPT, {}, this), _.Zf(), _.zf(), _.$f(), this.Cs() || this.qf()) && _.tc();
            }, this.nc = function() {
                this.p.debug("end(): schedule the last hb before session cleanup" + _.Jf()), this.ic(), this.ec(), this.sc(), this.oc();
            }, this.rc = function() {
                this.Of || (this.oc(), this.uc());
            }, this.ca = function(t) {
                var n = _.if;
                n !== t && t && (_.p.debug("Change browserName from " + n + " to " + t), _.if = t);
            }, this.la = function(t) {
                var n = _.ef;
                n !== t && t && (_.p.debug("Change browserVersion from " + n + " to " + t), _.ef = t);
            }, this.da = function(t) {
                var n = _.sf;
                n !== t && t && (_.p.debug("Change deviceBrand from " + n + " to " + t), _.sf = t);
            }, this.va = function(t) {
                var n = _.rf;
                n !== t && t && (_.p.debug("Change deviceManufacturer from " + n + " to " + t), _.rf = t);
            }, this.Ea = function(t) {
                var n = _.uf;
                n !== t && t && (_.p.debug("Change deviceModel from " + n + " to " + t), _.uf = t);
            }, this._a = function(t) {
                var n = _.hf;
                n !== t && t && (_.p.debug("Change deviceType from " + n + " to " + t), _.hf = t);
            }, this.Ra = function(t) {
                var n = _.af;
                n !== t && t && (_.p.debug("Change deviceVersion from " + n + " to " + t), _.af = t);
            }, this.Ta = function(t) {
                var n = _.lf;
                n !== t && t && (_.p.debug("Change operatingSystemName from " + n + " to " + t), _.lf = t);
            }, this.Sa = function(t) {
                var n = _.df;
                n !== t && t && (_.p.debug("Change operatingSystemVersion from " + n + " to " + t), _.df = t);
            }, this.Oa = function(t) {
                var n = _.vf;
                n !== t && t && (_.p.debug("Change deviceCategory from " + n + " to " + t), _.vf = t);
            }, this.Na = function(t) {
                var n = _.Ef;
                n !== t && t && (_.p.debug("Change screenWidth from " + n + " to " + t), _.Ef = t);
            }, this.ga = function(t) {
                var n = _._f;
                n !== t && t && (_.p.debug("Change screenHeight from " + n + " to " + t), _._f = t);
            }, this.Ia = function(t) {
                var n = _.vf;
                n !== t && t && (_.p.debug("Change scaleFactor from " + n + " to " + t), _.Rf = t);
            }, this.Us = function() {
                return _.ff;
            }, this.pa = function(t) {
                var n = _.ff;
                n !== t && t && (_.p.debug("Change frameworkName from " + n + " to " + t), _.ff = t);
            }, this.Vs = function() {
                return _.cf;
            }, this.Aa = function(t) {
                var n = _.cf;
                n !== t && t && (_.p.debug("Change frameworkVersion from " + n + " to " + t), _.cf = t);
            }, this.ma = function(t) {
                var n;
                _.Ct.streamUrl || (n = _.On) !== t && t && (_.p.debug("Change stream url from " + n + " to " + t), _.On = t);
            }, this.hc = function() {
                _.ec(), _.kf || (_.ac(), _.Lf = _._e.create(_.ac, _.Uf, "CwsSession.startCdnTimer"), _.p.debug("fetching cdn ip timer started"));
            }, this.ec = function() {
                _.Lf && (_.Lf(), _.fc(null, null, null, null, null), _.Lf = null);
            }, this.ac = function() {
                _.p.debug("detectCDNServerIp(): For " + _.On), _.Vf ? _.cc() : _.ec();
            }, this.cc = function() {
                try {
                    var t;
                    "function" === typeof XMLHttpRequest || "object" === typeof XMLHttpRequest ? ((t = new XMLHttpRequest).open("HEAD", _.On, !0), t.setRequestHeader("Pragma", "akamai-x-cache-on"), t.onreadystatechange = function() {
                        4 === this.readyState && (200 === this.status && (this.getAllResponseHeaders().indexOf("x-cache") >= 0 || this.getAllResponseHeaders().indexOf("X-Cache") >= 0) ? _.fc("Akamai", "header", "X-Cache", "" + this.getResponseHeader("X-Cache"), "" + this.status) : _.fc("null", "header", "null", "null", "" + this.status));
                    }, t.send()) : _.p.info("xmlhttpreq is not available here to fetch CDN Server Ip");
                } catch (t) {
                    _.p.info("Exception caught in makeAkamaiHeadRequest");
                }
            }, this.fc = function(t, n, i, e, s) {
                var o = {}, r = {};
                _.mf !== t && (null !== _.mf && (r[N.Mu] = _.mf), _.mf = t, null === _.mf ? o[N.Mu] = "null" : o[N.Mu] = _.mf), _.Df !== n && (null !== _.Df && (r[N.Lu] = _.Df), _.Df = n, null === _.Df ? o[N.Lu] = "null" : o[N.Lu] = _.Df), _.Pf !== i && (null !== _.Pf && (r[N.Uu] = _.Pf), _.Pf = i, null === _.Pf ? o[N.Uu] = "null" : o[N.Uu] = _.Pf), _.bf !== e && (null !== _.bf && (r[N.Vu] = _.bf), _.bf = e, null === _.bf ? o[N.Vu] = "null" : o[N.Vu] = _.bf), _.Mf !== s && (null !== _.Mf && (r[N.ku] = _.Mf), _.Mf = s, null === _.Mf ? o[N.ku] = "null" : o[N.ku] = _.Mf), "{}" !== JSON.stringify(o) && _.lc(o, r);
            }, this.dc = function(t) {
                var n = _.yn;
                n !== t && t > 0 && (_.p.info("Change bitrate from " + n + " to " + t), _.vc(n, t), _.yn = t);
            }, this.Ec = function(t) {
                var n = _.Dn;
                n !== t && t > 0 && (_.p.info("Change Avg bitrate from " + n + " to " + t), _._c(n, t), _.Dn = t);
            }, this.wa = function(t) {
                var n = _.gi;
                n !== t && t >= 0 && (_.p.info("Change dropped frames total from " + n + " to " + t), _.Rc(n, t), _.gi = t);
            }, this.Co = function(t) {
                var n = _.$a, i = t + (-1 === _.$a ? 0 : _.$a);
                n !== t && i >= 0 && (_.p.info("Change dropped frames count from " + n + " to " + i), _.Ac(n, i), _.$a = i);
            }, this.oa = function(t) {
                var n = _.tf;
                n !== t && t && (_.p.info("Change resource from " + n + " to " + t), _.tf = t);
            }, this.xh = function(t) {
                _._n !== t && t && (_.p.info("Change assetName from " + _._n + " to " + t), _._n = t);
            }, this.Vh = function(t) {
                var n = _.Ls;
                n !== t && m.ie(t) && (_.p.info("Change isLive from " + n + " to " + t), _.Ls = t);
            }, this.Yh = function(t) {
                var n = _.Tn;
                n !== t && t && (_.p.info("Change viewerId from " + n + " to " + t), _.Tn = t);
            }, this.qh = function(t) {
                var n = _.bs;
                n !== t && t && (_.p.info("Change playerName from " + n + " to " + t), _.bs = t);
            }, this.Jh = function(t) {
                var n = _.nf;
                !m.Tc(n, t) && t && (_.p.info("Change tags from " + m.Sc(n) + " to " + m.Sc(t)), _.nf = t);
            }, this.ra = function(t) {
                _.Ct.encodedFrameRate > 0 || (_.p.debug("setEncodedFrameRate(): " + t), _.wn = t);
            }, this.ia = function(t) {
                _.Ct.duration > 0 || (_.p.debug("setContentLength(): " + t), _.Ms = t);
            }, this.Xe = function(t) {
                var n;
                _.Tf || t !== I.PlayerState.PLAYING || (_.Tf = !0, m.Pt(_.Ct.viewerId) || _.p.error("Missing viewerId. viewerId should be updated before first frame is rendered."), m.Pt(_.Ct.streamType) && c.StreamType.UNKNOWN !== _.Ct.streamType || _.p.error("Missing streamType - Live or VOD. streamType should be updated before first frame is rendered."), m.Pt(_.Ct.applicationName)) || _.p.error("Missing applicationName. applicationName should be updated before first frame is rendered."), _.Pn !== t && (n = _.Pn, _.p.info("setPlayerState(): changing player state from " + n + " to " + t), _.Oc(n, t), _.Pn = t);
            }, this.Nc = function(t) {
                var n = _.Fn;
                n !== t && t > 0 && (_.p.debug("Change stream resolution width from " + n + " to " + t), _.gc(n, t), _.Fn = t);
            }, this.Ic = function(t) {
                var n = _.Bn;
                n !== t && t > 0 && (_.p.debug("Change stream resolution height from " + n + " to " + t), _.wc(n, t), _.Bn = t);
            }, this.ba = function(t) {
                var n = _.L;
                n !== t && t && (_.p.debug("Change network connection type from " + n + " to " + t), _.Cc(n, t), _.L = t);
            }, this.Ma = function(t) {
                var n = _.U;
                n !== t && t && (_.p.debug("Change network link encryption from " + n + " to " + t), _.yc(n, t), _.U = t);
            }, this.ka = function(t) {
                _.kf = !0, _.ec();
                var n = _.ao;
                n !== t && m.Pt(t) && (_.p.debug("Change CDN Server IP from " + n + " to " + t), _.mc(n, t), _.ao = t);
            }, this.Ka = function(t) {
                var n = _.jn;
                n !== t && m.Pt(t) && !_.ys.Dc && (_.p.info("Change Audio Lang from " + n + " to " + t), _.Pc(n, t), _.jn = t);
            }, this.Wa = function(t) {
                var n = _.Kn;
                n !== t && m.Pt(t) && !_.ys.bc && (_.p.info("Change Subtitle Lang from " + n + " to " + t), _.Mc(n, t), _.Kn = t);
            }, this.Ya = function(t) {
                var n = _.Wn;
                n !== t && m.Pt(t) && !_.ys.Lc && (_.p.info("Change Closed Caption Lang from " + n + " to " + t), _.Uc(n, t), _.Wn = t);
            }, this.Vc = function(t) {
                var n;
                _.p.debug("togglePauseJoin()"), _.Af === t ? _.p.debug("togglePauseJoin(): same value, ignoring") : (t = _.Af, n = !_.Af, _.kc(t, n), _.Af = !_.Af);
            }, this.Fc = function(t, n) {
                _.Bc(t, n);
            }, this.Hc = function(t, n) {
                var i, e;
                n[N.sh] = t, n[N.rh] = this.Ps(), n[N.oh] = this.Bf.Gc(), this.Ue && (i = b.jc(this.Ue.getPHT(), 0, null, -1), e = b.jc(this.Ue.getBufferLength(), 0, null, -1), i >= 0 && (n[N.pu] = i), e > 0) && (n[N.Au] = e), this.Bf.Kc(n), this.Ee._ && this.Ee._.Fs(t, n, this);
            }, this.Wc = function(t) {
                _.Ue = t, _.Ue ? _.Yc() : _.xc();
            }, this.ic = function() {
                var t = this.Gf.Ar(this.qc(), this.Ps());
                this.Ee._ && this.Ee._.Fs(N.Xs, {}, this), this.Bf.Kc(t);
            }, this.Bc = function(t, n) {
                var i = {};
                i[N.qs] = t, i[N.Js] = n, this.Hc(N.xs, i);
            }, this.vc = function(t, n) {
                var i = {}, e = {};
                t > 0 && (e[N.Ys] = t), i[N.Ys] = n, this.lc(i, e);
            }, this._c = function(t, n) {
                var i = {}, e = {};
                t > 0 && (e[N.cu] = t), i[N.cu] = n, this.lc(i, e);
            }, this.Jc = function(t, n) {
                var i = {};
                i[N.uh] = t, n >= 0 && (i[N.hh] = n), this.Hc(N.yr, i);
            }, this.gc = function(t, n) {
                var i = {}, e = {};
                -1 !== t && (e[N.Nu] = t), i[N.Nu] = n, this.lc(i, e);
            }, this.wc = function(t, n) {
                var i = {}, e = {};
                -1 !== t && (e[N.gu] = t), i[N.gu] = n, this.lc(i, e);
            }, this.Cc = function(t, n) {
                var i = {}, e = {};
                null !== t && (e[N.Iu] = t), i[N.Iu] = n, this.lc(i, e);
            }, this.yc = function(t, n) {
                var i = {}, e = {};
                null !== t && (e[N.wu] = t), i[N.wu] = n, this.lc(i, e);
            }, this.mc = function(t, n) {
                var i = {}, e = {};
                m.Pt(t) && (e[N._h] = t), i[N._h] = n, this.lc(i, e);
            }, this.Rc = function(t, n) {
                var i = {}, e = {};
                t >= 0 && (e[N.Cu] = t), i[N.Cu] = n, this.lc(i, e);
            }, this.Ac = function(t, n) {
                var i = {}, e = {};
                t >= 0 && (e[N.yu] = t), i[N.yu] = n, this.lc(i, e);
            }, this.Pc = function(t, n) {
                var i = {}, e = {};
                t !== n && ("string" === typeof t && (e[N.mu] = t), i[N.mu] = n), this.lc(i, e);
            }, this.Mc = function(t, n) {
                var i = {}, e = {};
                t !== n && ("string" === typeof t && (e[N.Du] = t), i[N.Du] = n), this.lc(i, e);
            }, this.Uc = function(t, n) {
                var i = {}, e = {};
                t !== n && ("string" === typeof t && (e[N.Pu] = t), i[N.Pu] = n), this.lc(i, e);
            }, this.kc = function(t, n) {
                var i = {}, e = {};
                e[N.fu] = t, i[N.fu] = n, this.lc(i, e);
            }, this.Oc = function(t, n) {
                var i = {}, e = {};
                i[N.Gs] = N.Rh(n), e[N.Gs] = N.Rh(t), this.lc(i, e);
            }, this.lc = function(t, n) {
                var i = {};
                i[N.Hs] = t, n && m.Ht(n) > 0 && (i[N.ah] = n), this.Hc(N.Bs, i);
            }, this.Xc = function(t, n) {
                var i = {};
                i[N.Zs] = t, m.Ht(n) > 0 && (i[N.zs] = n), this.Hc(N.Qs, i);
            }, this.sc = function() {
                _.qa && (_.qa(), _.qa = null);
            }, this.uc = function() {
                _.sc();
                var t = 1e3 * _.Vi.heartbeatInterval;
                _.qa = _._e.create(_.oc, t, "Session.sendHeartbeat:" + this.xf);
            }, this.xc = function() {
                _.Nf && (_.Nf(), _.Nf = null);
            }, this.Yc = function() {
                _.xc(), _.Nf = _._e.create(_.Qc, _.gf, "Session.startRfpsTimer");
            }, this.Zc = function() {
                var t = {
                    err: "pending"
                };
                t.seq = _.Ja - 1, t.sentAt = _.Ps(), t.rtt = -1, _.Za.push(t);
                for(var n = 0; n < _.Za.length; n++)"ok" === (t = _.Za[n]).err && (_.Za.splice(n, 1), n--);
            }, this.zc = function(t, n) {
                for(var i = 0; i < _.Za.length; i++){
                    var e = _.Za[i];
                    e.seq === t && (e.rtt = _.Ps() - e.sentAt, e.err = n);
                }
            }, this.$c = function(t) {
                for(var n = 0; n < _.Za.length; n++){
                    var i = _.Za[n];
                    i.seq === t && (i.rtt = _.Ps() - i.sentAt, i.err = "ok");
                }
            }, this.tl = function() {
                for(var t, n, i = _.Kf.get(y.nl), e = [], s = -1, o = 0; o < _.Za.length; o++)if ("ok" === (n = _.Za[o]).err) {
                    s = n.seq;
                    break;
                }
                for(var r = 0; r < _.Za.length; r++)((t = (n = _.Za[r]).seq) < _.Ja - i || t < s) && e.push(r);
                for(var u = [], h = 0; h < _.Za.length; h++)t = (n = _.Za[h]).seq, e.indexOf(h) < 0 && u.push(_.Za[h]);
                _.Za = u;
            }, this.il = function() {
                _.tl();
                for(var t = [], n = 0; n < _.Za.length; n++){
                    var i = _.Za[n], e = {};
                    e[N.fh] = i.seq, e[N.dh] = i.rtt, e[N.lh] = i.err, t.push(e);
                }
                return t;
            }, this.el = function() {
                var t, n = -1, i = -1, e = _.Bf.Wf();
                if (_.ks() && 0 === e.length) return null;
                var s = new z, o = (s.Mh(N.jr), s.Fh(_.Vi.customerKey), s.Bh(_.Kf.get(y.B)), s.Kh(_.ys.C), s.kh(_.Ja), s.Gh(N.version), g.version);
                if (_.ki && (o = _.ki), s.Hh(o), s.Wh(_.Ee.C), s.jh(0), _.Ee.L ? s.ba(_.Ee.L) : _.L && s.ba(_.L), _.Ee.U ? s.Ma(_.Ee.U) : _.U && s.Ma(_.U), m.Pt(_.ao) && s.ka(_.ao), s.fa(N.Cr), _.if && s.ca(_.if), _.ef && s.la(_.ef), _.sf && s.da(_.sf), _.rf && s.va(_.rf), _.uf && s.Ea(_.uf), _.hf && s._a(_.hf), _.af && s.Ra(_.af), _.lf && s.Ta(_.lf), _.df && s.Sa(_.df), _.vf && s.Oa(_.vf), _.ff && s.pa(_.ff), _.cf && s.Aa(_.cf), _.Ef && !isNaN(_.Ef) && s.Na(parseInt(_.Ef, 10)), _._f && !isNaN(_._f) && s.ga(parseInt(_._f, 10)), _.Rf && !isNaN(_.Rf) ? s.Ia(parseFloat(_.Rf)) : (_.Ef && !isNaN(_.Ef) || _._f && !isNaN(_._f)) && s.Ia(1), _.Ue && (_.Vn = _.Ue.zn(), _.Vn && s.setModuleName(_.Vn), _.kn = _.Ue.$n(), _.kn && s.Va(_.kn), _.Ue.ti() && (_.ff = _.Ue.ti(), s.pa(_.ff)), _.Ue.ii()) && (_.cf = _.Ue.ii(), s.Aa(_.cf)), _.Tn && s.Yh(_.Tn), m.Ht(_.nf) > 0 && s.Jh(_.nf), _.Cs() || _.qf()) {
                    _.qf() && s.La(), _._n && s.xh(_._n), s.Xh(_.Xa);
                    o = N.Rh(_.Pn), o = (s.Xe(o), s.na(_.Af), _.bs && s.qh(_.bs), m.ie(_.Ls) && s.Vh(_.Ls), _.Ms > 0 && s.ia(_.Ms), _.yn > 0 && s.ea(_.yn), _.Dn > 0 && s.sa(_.Dn), null !== _.tf && s.oa(_.tf), _.wn > 0 && s.ra(_.wn), _.Ue && (n = b.jc(_.Ue.getPHT(), 0, null, -1), i = b.jc(_.Ue.getBufferLength(), 0, null, -1)), m.gt(_.Ee.V) ? t = _.Ee.V : _.Ue && (t = _.Ue.getSignalStrength()), n >= 0 && s.Ca(n), i > 0 && s.ya(i), _.sl());
                    if (o > 0 && s.ua(o), _.wf > 0 && s.aa(b.jc(_.wf, 0, null, -1)), _.If > 0 && s.ha(b.jc(_.If, 0, null, -1)), t !== I.DEFAULT_SIGNAL_STRENGTH && s.Ua(t), _.On && s.ma(_.On), _.Fn > 0 && s.Da(_.Fn), _.Bn > 0 && s.Pa(_.Bn), _.gi > -1 && s.wa(_.gi), _.$a > -1 && (s.Co(_.$a), _.$a > 0) && (_.Ac(_.$a, 0), _.$a = 0), _.jn && s.Ka(_.jn), _.Kn && s.Wa(_.Kn), _.Wn && s.Ya(_.Wn), "undefined" !== typeof _.pf) for(var r in _.pf)s.Ph(r, _.pf[r]);
                } else s.Xh(N.Sh.Oh);
                return e.length > 0 && s.Zh(e), s.Qh(_.Qa), s.zh(!0), _.Kf.get(y.ol) && s.$h(_.Fi.Wf()), _.Kf.get(y.nl) > 0 && (n = _.il()).length > 0 && s.ta(n), 0 === _.Ja && (s = _.rl(s)), (s = 0 !== _.Ja ? _.ul(s) : s).Uh(_.Ds), s.Lh(_.Ps()), _.Vf && (s.Fa(_.mf), s.Ba(_.Df), s.Ha(_.Pf), s.Ga(_.bf), s.ja(_.Mf)), _.Ja++, s.get();
            }, this.ul = function(t) {
                var n, i = _.D, e = {};
                for(n in t.Dh.tags)Object.prototype.hasOwnProperty.call(i, n) || (e[n] = t.Dh.tags[n]);
                t.Dh.tags = e, _.D = {};
                for(var s = 0; s < _.Cf.length; s++)Object.prototype.hasOwnProperty.call(_.Ee.D, _.Cf[s]) ? Object.prototype.hasOwnProperty.call(_.Ee.M, _.Cf[s]) ? _.Ee.M[_.Cf[s]] === y.$t.tn ? (_.D[y.hl + "" + _.Cf[s]] = y.$t.tn, _.Ee.P("End-user chose to opt-out of personal data collection")) : _.Ee.M[_.Cf[s]] === y.$t.en ? (_.D[y.hl + "" + _.Cf[s]] = y.$t.en, _.Ee.P("End-user chose to opt-out of personal data collection")) : _.Ee.M[_.Cf[s]] === y.$t.zt ? (_.D[y.hl + "" + _.Cf[s]] = y.$t.zt, _.Ee.P("End-user used privacy settings and chose to opt-out of personal data collection")) : (_.D[y.hl + "" + _.Cf[s]] = _.Ee.D[_.Cf[s]], _.Ee.P("Data collection successful")) : (_.D[y.hl + "" + _.Cf[s]] = _.Ee.D[_.Cf[s]], _.Ee.P("Data collection successful")) : _.D[y.hl + "" + _.Cf[s]] = y.$t.al;
                var o, r = {};
                for(o in i){
                    var u = o.split(".");
                    "{}" !== JSON.stringify(_.Cf) && -1 !== _.Cf.indexOf("" + u[2]) || i[y.hl + "" + u[2]] === y.$t.fl || (_.Ee.P("Data collection restricted from Conviva back-end"), _.D[y.hl + "" + u[2]] = y.$t.fl, r[y.hl + "" + u[2]] = y.$t.fl);
                }
                if ("{}" !== JSON.stringify(_.D)) {
                    var h, a = m.ll(_.D);
                    for(h in t.Dh.tags)a[h] = t.Dh.tags[h];
                    if (t.Dh.tags = a, !m.Tc(i, _.D)) {
                        var f = {};
                        if ("{}" !== JSON.stringify(r) && (f[N.su] = r), "{}" !== JSON.stringify(i)) {
                            for(var c in i)_.D[c] && i[c] !== _.D[c] && (f[N.su] || (f[N.su] = {}), f[N.su][c] = _.D[c]);
                            for(var l in _.D)Object.prototype.hasOwnProperty.call(i, l) && i[l] === _.D[l] || (f[N.su] || (f[N.su] = {}), f[N.su][l] = _.D[l]);
                        }
                        "{}" === JSON.stringify(i) && (f[N.su] = _.D);
                        var d, v, E = {};
                        E[N.Hs] = f, E[N.sh] = N.Bs, E[N.rh] = _.Ps(), E[N.oh] = _.Bf.Gc(), _.Ue && (d = b.jc(_.Ue.getPHT(), 0, null, -1), v = b.jc(_.Ue.getBufferLength(), 0, null, -1), d >= 0 && (E[N.pu] = d), v > 0) && (E[N.Au] = v), t.Dh.evs || (t.Dh.evs = []), t.Dh.evs.push(E);
                    }
                }
                return t;
            }, this.rl = function(t) {
                var n = _.dl();
                if ("{}" !== JSON.stringify(n)) {
                    var i, e = m.ll(n);
                    for(i in t.Dh.tags)e[i] = t.Dh.tags[i];
                    t.Dh.tags = e;
                    var s, o = {}, n = (o[N.su] = n, {});
                    n[N.Hs] = o, n[N.sh] = N.Bs, n[N.rh] = _.Ps(), n[N.oh] = _.Bf.Gc(), _.Ue && (o = b.jc(_.Ue.getPHT(), 0, null, -1), s = b.jc(_.Ue.getBufferLength(), 0, null, -1), o >= 0 && (n[N.pu] = o), s > 0) && (n[N.Au] = s), t.Dh.evs || (t.Dh.evs = []), t.Dh.evs.push(n);
                }
                return t;
            }, this.dl = function() {
                var t = {};
                if ("undefined" !== typeof navigator && navigator) {
                    if (t["c3.fp.cookie"] = "undefined" !== typeof navigator.cookieEnabled && navigator.cookieEnabled ? "" + navigator.cookieEnabled : "", t["c3.fp.memory"] = "undefined" !== typeof navigator.deviceMemory && navigator.deviceMemory ? "" + navigator.deviceMemory : "", t["c3.fp.hwConc"] = "undefined" !== typeof navigator.hardwareConcurrency && navigator.hardwareConcurrency ? "" + navigator.hardwareConcurrency : "", t["c3.fp.java"] = "" + ("function" !== typeof navigator.javaEnabled) ? "false" : navigator.javaEnabled(), t["c3.fp.lang"] = "undefined" !== typeof navigator.language && navigator.language ? "" + navigator.language : "", t["c3.fp.langs"] = "undefined" !== typeof navigator.languages && navigator.languages && navigator.languages.length > 0 ? "" + navigator.languages.toString() : "", t["c3.fp.maxTp"] = "undefined" !== typeof navigator.maxTouchPoints && navigator.maxTouchPoints ? "" + navigator.maxTouchPoints : "", t["c3.fp.plugins"] = "", "undefined" !== typeof navigator.plugins && navigator.plugins && navigator.plugins.length > 0) for(var n = 0; n < navigator.plugins.length; n++)t["c3.fp.plugins"] += navigator.plugins[n].name + ",";
                    if (t["c3.fp.mime"] = "", "undefined" !== typeof navigator.mimeTypes && navigator.mimeTypes && navigator.mimeTypes.length > 0) for(var i = 0; i < navigator.mimeTypes.length; i++)t["c3.fp.mime"] += navigator.mimeTypes[i].type + ",";
                    t["c3.fp.sysLang"] = "undefined" !== typeof navigator.systemLanguage && navigator.systemLanguage ? "" + navigator.systemLanguage : "", t["c3.fp.platform"] = "undefined" !== typeof navigator.platform && navigator.platform ? "" + navigator.platform : "", t["c3.fp.product"] = "undefined" !== typeof navigator.product && navigator.product ? "" + navigator.product : "", t["c3.fp.productSub"] = "undefined" !== typeof navigator.productSub && navigator.productSub ? "" + navigator.productSub : "", t["c3.fp.vendor"] = "undefined" !== typeof navigator.vendor && navigator.vendor ? "" + navigator.vendor : "", t["c3.fp.vendorSub"] = "undefined" !== typeof navigator.vendorSub && navigator.vendorSub ? "" + navigator.vendorSub : "";
                    var e = _.vl();
                    "" !== e && (t["c3.fp.canvFp"] = e);
                }
                return "undefined" !== typeof window && window && ("undefined" !== typeof window.screen && window.screen && (t["c3.fp.availHeight"] = "undefined" !== typeof window.screen.availHeight && window.screen.availHeight ? "" + window.screen.availHeight : "", t["c3.fp.availWidth"] = "undefined" !== typeof window.screen.availWidth && window.screen.availWidth ? "" + window.screen.availWidth : "", t["c3.fp.height"] = "undefined" !== typeof window.screen.height && window.screen.height ? "" + window.screen.height : "", t["c3.fp.width"] = "undefined" !== typeof window.screen.width && window.screen.width ? "" + window.screen.width : "", t["c3.fp.colorDepth"] = "undefined" !== typeof window.screen.colorDepth && window.screen.colorDepth ? "" + window.screen.colorDepth : "", t["c3.fp.deviceXDPI"] = "undefined" !== typeof window.screen.deviceXDPI && window.screen.deviceXDPI ? "" + window.screen.deviceXDPI : "", t["c3.fp.deviceYDPI"] = "undefined" !== typeof window.screen.deviceYDPI && window.screen.deviceYDPI ? "" + window.screen.deviceYDPI : ""), t["c3.fp.dpi"] = "undefined" !== typeof window.devicePixelRatio && window.devicePixelRatio ? "" + window.devicePixelRatio : "", t["c3.fp.secure"] = "boolean" === typeof window.isSecureContext ? "" + window.isSecureContext : ""), t;
            }, this.vl = function() {
                try {
                    if ("undefined" !== typeof document && document) {
                        var t, n, i = document.createElement("CANVAS");
                        if ("undefined" !== typeof i && i && "function" === typeof i.getContext) return t = i.getContext("2d"), n = "conviva", t.textBaseline = "top", t.font = "14px Arial", t.textBaseline = "alphabetic", t.fillStyle = "#f40", t.fillRect("undefined" !== typeof navigator.plugins && navigator.plugins ? navigator.plugins.length : 0, "undefined" !== typeof navigator.mimeTypes && navigator.mimeTypes ? navigator.mimeTypes.length : 0, "undefined" !== typeof navigator.product && navigator.product ? navigator.product.length : 0, "undefined" !== typeof navigator.vendor && navigator.vendor ? navigator.vendor.length : 0), t.fillStyle = "#069", t.fillText(n, "undefined" !== typeof navigator.maxTouchPoints && navigator.maxTouchPoints >= 0 ? navigator.maxTouchPoints : 0, "undefined" !== typeof navigator.product && navigator.product ? navigator.product.length : 0), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, "undefined" !== typeof navigator.deviceMemory && navigator.deviceMemory ? navigator.deviceMemory : 0, "undefined" !== typeof navigator.hardwareConcurrency && navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 0), O.Rr(i.toDataURL());
                    }
                    return "";
                } catch (t) {
                    return "";
                }
            }, this.oc = function() {
                var t;
                _.Sf || (t = _.el()) && _.El(t);
            }, this.Qc = function() {
                var t;
                _.Pn === I.PlayerState.PLAYING && _.Ue && (t = _.Ue.getRenderedFrameRate()) > 0 && (_.wf += t, _.If++);
            }, this.sl = function() {
                return _.wf > 0 && _.If > 0 || (this.Qc(), _.wf > 0 && _.If > 0) ? m._l.Cast(+_.wf / _.If) : I.DEFAULT_RENDERED_FRAME_RATE;
            }, this.El = function(t) {
                _.Zc();
                var i = _.Ja - 1;
                _.p.info("postHeartbeat(): Send HB[" + i + "]" + _.Jf());
                _.Hf.Rl(t, function(t, n) {
                    _.pl(t, n, i);
                });
            }, this.pl = function(i, e, s) {
                _.Sf || _.g.F("onHeartbeatResponse", function() {
                    var t, n;
                    i ? e ? (_.p.debug("onHeartbeatResponse(): received valid response for HB[" + s + "]"), _.$c(s), (t = e[N.Mr]) && t !== (n = _.Kf.get(y.B)) && (_.p.debug("onHeartbeatResponse(): setting the client id to " + t + " (from gateway)"), _.Kf.set(y.B, t), _.Kf.Al(), n === N.H) && t !== N.H && _.Ee.k(), (n = e[N.Pr]) && n !== N.Dr && _.p.error("onHeartbeatResponse(): error from gateway: " + n), "object" === typeof (t = e[N.Lr]) && ((n = t[N.Vr]) >= 0 && _.Kf.get(y.nl) !== n && (_.p.debug("onHeartbeatResponse(): setting Maximum Heartbeat Infos to " + n + " (from gateway)"), _.Kf.set(y.nl, n)), n = t[N.kr], (n = !!m.ie(n) && n) !== _.Kf.get(y.ol) && (_.p.debug("onHeartbeatResponse(): turning " + (n ? "on" : "off") + " sending of logs"), _.Kf.set(y.ol, n)), n = t[N.Fr], m.gt(n) && (n = m._l.Cast(n)) !== _.Vi.heartbeatInterval && (_.p.debug("onHeartbeatResponse(): received hbIntervalMs from gateway: " + n), _.Vi.heartbeatInterval = n, _.qa) && _.uc(), (n = t[N.Br]) && n !== _.Vi.gatewayUrl && (_.p.debug("onHeartbeatResponse(): received gatewayUrl from gateway: " + n), _.Vi.gatewayUrl = n), _.Tl() || (_.Cf = {}, (n = t[N.Hr]) && (_.yf || (_.yf = !0), _.p.debug("onHeartbeatResponse(): received fp from gateway: " + n), _.Cf = n.split(",")), _.Vf = t[N.Gr], m.ie(_.Vf) && (_.Vf ? (_.p.debug("onHeartbeatResponse(): enabling the CDN Server IP collection"), _.Lf || _.hc()) : _.ec())))) : _.p.warning("onHeartbeatResponse(): decoded heartbeat response is null.") : (m.Pt(n = e) ? m.Sl(n, "HTTP timeout") ? _.p.warning("onHeartbeatResponse(): " + n) : _.p.error("onHeartbeatResponse(): failed to send heartbeat: " + n) : (n = $.Ol, _.p.error("onHeartbeatResponse(): " + n)), _.zc(s, n));
                });
            }, this.Ps = function() {
                return m._l.Cast(_.jf.current() - _.Ds);
            }, this.qc = function() {
                return this.Bf.Gc();
            }, this.Jf = function() {
                return this.ks() ? " (global session)" : "";
            }, this.ks = function() {
                return this.xf === C.Nt.Oh;
            }, this.Tl = function() {
                return this.xf === C.Nt.Oh && "T" === this.nf["c3.IPV4IPV6GlobalSession"];
            }, this.Cs = function() {
                return this.xf === C.Nt.Ot;
            }, this.qf = function() {
                return this.xf === C.Nt.Dt;
            }, this.Mt = function(t) {
                _.Nl(t), _.Zf();
            }, this.Nl = function(t) {
                var n = {}, i = {};
                if (m.Pt(t.assetName) && !_.ys.gl && (_.Ct.assetName !== t.assetName ? (_.Ct.assetName && (n[N.iu] = _.Ct.assetName), i[N.iu] = t.assetName, _.Ct.assetName = t.assetName) : _.p.warning("mergeContentMetadata(): assetName was not changed.")), m.Pt(t.applicationName) && (_.Ct.applicationName !== t.applicationName ? (_.Ct.applicationName && (n[N.eu] = _.Ct.applicationName), i[N.eu] = t.applicationName, _.Ct.applicationName = t.applicationName) : _.p.warning("mergeContentMetadata(): applicationName was not changed.")), m.Pt(t.streamUrl) && !_.ys.Il && (_.Ct.streamUrl !== t.streamUrl ? (_.Ct.streamUrl && (n[N.Tu] = _.Ct.streamUrl), i[N.Tu] = t.streamUrl, _.Ct.streamUrl = t.streamUrl, _.On = _.Ct.streamUrl) : _.p.warning("mergeContentMetadata(): streamUrl was not changed.")), m.Pt(t.viewerId) && (_.Ct.viewerId !== t.viewerId ? (_.Ct.viewerId && (n[N.nu] = _.Ct.viewerId), i[N.nu] = t.viewerId, _.Ct.viewerId = t.viewerId) : _.p.warning("mergeContentMetadata(): viewerId was not changed.")), m.Pt(t.defaultResource) && !_.ys.wl && (_.Ct.defaultResource !== t.defaultResource ? (_.Ct.defaultResource && (n[N.Ru] = _.Ct.defaultResource), i[N.Ru] = t.defaultResource, _.Ct.defaultResource = t.defaultResource) : _.p.warning("mergeContentMetadata(): defaultResource was not changed.")), m.gt(t.duration) && t.duration > 0 && !_.ys.Cl && (_.Ct.duration !== t.duration ? (_.Ms > 0 && (n[N.lu] = _.Ms), i[N.lu] = t.duration, _.Ct.duration = t.duration, _.Ms = _.Ct.duration) : _.p.warning("mergeContentMetadata(): duration was not changed.")), m.gt(t.encodedFrameRate) && t.encodedFrameRate > 0 && !_.ys.yl && (_.Ct.encodedFrameRate !== t.encodedFrameRate ? (_.Ct.encodedFrameRate > -1 && (n[N.du] = _.Ct.encodedFrameRate), i[N.du] = t.encodedFrameRate, _.Ct.encodedFrameRate = t.encodedFrameRate, _.wn = _.Ct.encodedFrameRate) : _.p.warning("mergeContentMetadata(): encodedFrameRate was not changed.")), t.streamType !== c.StreamType.UNKNOWN && (_.Ct.streamType !== t.streamType ? (_.Ct.streamType !== c.StreamType.UNKNOWN && (_.Ct.streamType === c.StreamType.LIVE ? n[N.qr] = !0 : n[N.qr] = !1), t.streamType === c.StreamType.LIVE ? i[N.qr] = !0 : i[N.qr] = !1, _.Ct.streamType = t.streamType) : _.p.warning("mergeContentMetadata(): streamType was not changed.")), m.Ht(t.custom) > 0) {
                    var e, s = {}, o = {};
                    for(e in t.custom)_.Ct.custom[e] !== t.custom[e] ? (s[e] = t.custom[e], _.Ct.custom[e] && (o[e] = _.Ct.custom[e]), _.Ct.custom[e] = t.custom[e]) : _.p.info("mergeContentMetadata(): custom." + e + " was not changed.");
                    m.Ht(s) > 0 ? (m.Ht(o) > 0 && (n[N.su] = o), i[N.su] = s) : _.p.warning("mergeContentMetadata(): custom was not changed.");
                }
                m.Ht(i) > 0 && this.lc(i, n);
            }, this.Zf = function() {
                var t;
                _.p.debug("setStatesFromContentMetadata()"), _.Ct.defaultResource && this.oa(_.Ct.defaultResource), _.Ct.streamUrl && this.ma(_.Ct.streamUrl), _.Ct.duration > 0 && this.ia(_.Ct.duration), _.Ct.encodedFrameRate > 0 && this.ra(_.Ct.encodedFrameRate), _.Ct.streamType !== c.StreamType.UNKNOWN && (t = _.Ct.streamType === c.StreamType.LIVE, this.Vh(t)), _.Ct.assetName && this.xh(_.Ct.assetName), _.Ct.viewerId && this.Yh(_.Ct.viewerId), (_.Ct.applicationName || _.Ct.playerName) && this.qh(_.Ct.applicationName || _.Ct.playerName), m.Ht(_.Ct.custom) > 0 && this.Jh(_.Ct.custom);
            }, this.zf = function() {
                var t = {};
                if (this.ks() || (_.Ct.assetName ? t[N.iu] = _.Ct.assetName : _.p.warning("enqueueEventForContentMetadata(): assetName was not set."), _.Ct.applicationName ? t[N.eu] = _.Ct.applicationName : _.p.warning("enqueueEventForContentMetadata(): applicationName was not set."), _.Ct.streamUrl ? t[N.Tu] = _.Ct.streamUrl : _.p.warning("enqueueEventForContentMetadata(): streamUrl was not set."), _.Ct.viewerId ? t[N.nu] = _.Ct.viewerId : _.p.warning("enqueueEventForContentMetadata(): viewerId was not set."), _.Ct.defaultResource ? t[N.Ru] = _.Ct.defaultResource : _.p.warning("enqueueEventForContentMetadata(): defaultResource was not set."), _.Ct.duration > -1 ? t[N.lu] = _.Ct.duration : _.p.warning("enqueueEventForContentMetadata(): duration was not set."), _.Ct.encodedFrameRate > -1 ? t[N.du] = _.Ct.encodedFrameRate : _.p.warning("enqueueEventForContentMetadata(): encodedFrameRate was not set."), _.Ct.streamType !== c.StreamType.UNKNOWN ? _.Ct.streamType === c.StreamType.LIVE ? t[N.qr] = !0 : t[N.qr] = !1 : _.p.warning("enqueueEventForContentMetadata(): streamType was not set.")), m.Ht(_.Ct.custom) > 0) for(var n in t[N.su] = {}, _.Ct.custom)t[N.su][n] = _.Ct.custom[n];
                else this.ks() || _.p.warning("enqueueEventForContentMetadata(): custom tags were not set.");
                m.Ht(t) > 0 && this.lc(t, null);
            }, this.tc = function() {
                _.Ct && m.Pt(_.Ct.assetName) || _.p.warning("Missing assetName during session creation"), _.Ct && m.Pt(_.Ct.defaultResource) || _.p.warning("Missing resource during session creation"), _.Ct && m.Pt(_.Ct.streamUrl) || _.p.warning("Missing streamUrl during session creation"), (!_.Ct || _.Ct.encodedFrameRate <= 0) && _.p.warning("Missing encodedFrameRate during session creation"), _.Ct && m.Pt(_.Ct.viewerId) || _.p.warning("Missing viewerId during session creation"), _.Ct && _.Ct.streamType && c.StreamType.UNKNOWN !== _.Ct.streamType || _.p.warning("Missing streamType during session creation"), _.Ct && m.Pt(_.Ct.applicationName) || _.p.warning("Missing applicationName during session creation"), (!_.Ct || _.Ct.duration <= 0) && _.p.warning("Missing duration during session creation");
            }, this.Zt = function(t, n) {
                _.pf || (_.pf = {}), _.pf[t] = n;
            }, this.$f = function() {
                var t = {};
                _.Ee && _.Ee.L && (t[N.Iu] = _.Ee.L, _.L = _.Ee.L), _.Ee && _.Ee.U && (t[N.wu] = _.Ee.U, _.U = _.Ee.U), m.Ht(t) > 0 && this.lc(t, null);
            };
        }).xa = N.Sh.Ot + N.Sh.Nh + N.Sh.gh, C.Nt = {
            Ot: "Video",
            Oh: "Global",
            Dt: "Ad"
        }, ($ = U.Session = function() {
            var e = this;
            e.Ue = null, e.C = 0, e.xf = C.Nt.Ot, e.ml = !1, e.Sf = !1, e.Dl = !1, e.Pl = null, e.Re = null, e.bl = null, e.Ml = !1, e.Ll = I.PlayerState.NOT_MONITORED, e.Ul = !1, e.Vl = !1, e.kl = !1, e.yl = !1, e.Fl = !1, e.bc = !1, e.Lc = !1, e.Dc = !1, e.gl = !1, e.Il = !1, e.Bl = !1, e.Cl = !1, e.wl = !1, e.Hl = !1, (function(t, n, i, e, s, o, r) {
                this.C = t, this.xf = n, this.Kf = i, this.Gl = e, this.wt = s, this.g = o, this.p = r;
            }).apply(e, arguments), this.Yf = function(t, n) {
                e.wt.Yf(this), t && e.Vt(t), e.Kf.jl() ? e.Kl(n) : e.Kf.Wl(function() {
                    e.Kl(n);
                });
            }, this.cleanup = function() {
                e.ml = !0, e.wt.Xf(), e.Kf.jl() ? e.Yl() : e.Kf.Wl(function() {
                    e.Yl();
                });
            }, this.xl = function() {
                (e.Cs() || e.qf()) && e.Ue && e.ql(), e.g = null, e.Ee = null, e.Kf = null, e.Gl = null, e.wt.Tt(), e.wt = null, e.Sf = !0;
            }, this.Yl = function() {
                e.wt.nc(), e.xl();
            }, this.Kl = function(t) {
                e.wt.Qf(), e.Jl(), t ? (e.bt(t.ir(), t.er()), e.wt.Xe(I.PlayerState.STOPPED), e.wt.nc(), e.xl()) : e.wt.rc();
            }, this.Jl = function() {
                var t = e.Gl.get(), n = t[L.BROWSER_NAME], n = (n && e.wt.ca(n), t[L.BROWSER_VERSION]), n = (n && e.wt.la(n), t[L.DEVICE_BRAND]), n = (n && e.wt.da(n), t[L.DEVICE_MANUFACTURER]), n = (n && e.wt.va(n), t[L.DEVICE_MODEL]), n = (n && e.wt.Ea(n), t[L.DEVICE_TYPE]), n = (n && e.wt._a(n), t[L.DEVICE_VERSION]), n = (n && e.wt.Ra(n), t[L.FRAMEWORK_NAME]), n = (n && e.wt.pa(n), t[L.FRAMEWORK_VERSION]), n = (n && e.wt.Aa(n), t[L.OPERATING_SYSTEM_NAME]), n = (n && e.wt.Ta(n), t[L.OPERATING_SYSTEM_VERSION]), n = (n && e.wt.Sa(n), t[L.DEVICE_CATEGORY]), n = (n && e.wt.Oa(n), t[L.SCREEN_WIDTH]), n = (n && e.wt.Na(n), t[L.SCREEN_HEIGHT]), n = (n && e.wt.ga(n), t[L.SCALE_FACTOR]);
                n && e.wt.Ia(n);
            }, this.Ei = function(t) {
                e.wt.Pn === t || (e.wt.Pn === I.PlayerState.NOT_MONITORED && t !== I.PlayerState.NOT_MONITORED && (e.Ll = t), e.Ml) || e.wt.Xe(t);
            }, this._i = function(t) {
                e.Ul || e.wt.dc(t);
            }, this.Ri = function(t) {
                e.Ul || e.wt.Ec(t);
            }, this.Ii = function(t) {
                e.Vl || e.wt.wa(t);
            }, this.wi = function(t) {
                e.Vl || e.wt.Co(t);
            }, this.pi = function(t, n) {
                !m.gt(n) && e.Hl && (n = -1), e.wt.Jc(t, n);
            }, this.qn = function(t) {
                t > 0 && (e.yl || e.wt.ra(t));
            }, this.Qn = function(t) {
                t > 0 && (e.Cl || e.wt.ia(t));
            }, this.Zn = function(t) {
                e.wt.ma(t);
            }, this.Ai = function(t) {
                e.wt.Nc(t);
            }, this.Ti = function(t) {
                e.wt.Ic(t);
            }, this.nt = function(t) {
                e.wt.ba(t);
            }, this.et = function(t) {
                e.wt.Ma(t);
            }, this.ni = function(t) {
                e.wt.Us() || e.wt.pa(t);
            }, this.ei = function(t) {
                e.wt.Vs() || e.wt.Aa(t);
            }, this.Oi = function(t) {
                e.wt.ka(t);
            }, this.oi = function(t) {
                e.wt.Ka(t);
            }, this.ui = function(t) {
                e.wt.Wa(t);
            }, this.ai = function(t) {
                e.wt.Ya(t);
            }, this.Si = function(t, n) {
                e.bt(t, n);
            }, this.Yn = function() {
                e.ql();
            }, this.Wt = function(t, n, i) {
                e.Dl || (e.Dl = !0, e.Pl = t, e.Re = n, e.bl = i, e.wt.Vc(!0), e.Pl === a.AdStream.CONTENT || e.Re === a.AdPlayer.SEPARATE ? (e.wt.Pn !== I.PlayerState.NOT_MONITORED && (e.Ll = e.wt.Pn), e.wt.Xe(I.PlayerState.NOT_MONITORED), e.Ml = !0) : e.Pl === a.AdStream.SEPARATE && e.Re === a.AdPlayer.CONTENT && (e.wt.Pn !== I.PlayerState.NOT_MONITORED && (e.Ll = e.wt.Pn), e.wt.Xe(I.PlayerState.NOT_MONITORED), e.Ml = !0, e.Ul = !0, e.Vl = !0, e.yl = !0, e.kl = !0, e.bc = !0, e.Lc = !0, e.Dc = !0, e.gl = !0, e.Il = !0, e.Bl = !0, e.Cl = !0, e.wl = !0, e.Hl = !0));
            }, this.Yt = function() {
                e.Dl && (e.wt.Vc(!1), e.Pl === a.AdStream.CONTENT || e.Re === a.AdPlayer.SEPARATE ? e.Xl || (e.Ml = !1, e.wt.Xe(e.Ll)) : e.Pl === a.AdStream.SEPARATE && e.Re === a.AdPlayer.CONTENT && (e.Ul = !1, e.Vl = !1, e.yl = !1, e.kl = !1, e.Fl = !1, e.Xl || (e.Ml = !1, e.wt.Xe(e.Ll)), e.bc = !1, e.Lc = !1, e.Dc = !1, e.gl = !1, e.Il = !1, e.Bl = !1, e.Cl = !1, e.wl = !1, e.Hl = !1), e.Dl = !1, e.Pl = e.Re = e.bl = null);
            }, this.Lt = function() {
                e.Ue && e.Ue && (e.g.F("Session.detachPlayer", function() {
                    e.Ue.xn();
                }), e.Ue = null, e.wt.Wc(null), e.wt.Xe(I.PlayerState.NOT_MONITORED));
            }, this.ql = function() {
                e.Ue && (e.g.F("Session.releasePlayerStateManager", function() {
                    e.Ue.xn();
                }), e.Ue = null, e.wt.Wc(null), e.wt.Xe(I.PlayerState.NOT_MONITORED));
            }, this.Ut = function() {
                e.wt.Vc(!0), e.wt.Pn !== I.PlayerState.NOT_MONITORED && (e.Ll = e.wt.Pn), e.wt.Xe(I.PlayerState.NOT_MONITORED), e.Ml = !0;
            }, this.Vt = function(t) {
                e.Ue || t instanceof I && e.g.F("Session.attachPlayer()", function() {
                    t.setMonitoringNotifier(e, e.C) && (t.fi(), e.Ue = t, e.wt.Wc(e.Ue));
                });
            }, this.kt = function() {
                e.wt.Vc(!1), e.Ul = !1, e.Vl = !1, e.Ql = !1, e.kl = !1, e.Fl = !1, e.bc = !1, e.Lc = !1, e.Dc = !1, e.gl = !1, e.Il = !1, e.Bl = !1, e.Cl = !1, e.wl = !1, e.Hl = !1, e.Xl || (e.Ml = !1, e.Ll !== I.PlayerState.NOT_MONITORED && e.wt.Xe(e.Ll));
            }, this.qt = function() {
                return e.Ue;
            }, this.Ft = function() {
                e.Xl || (e.Xl = !0, e.Ml = !0);
            }, this.Bt = function() {
                e.Xl && (e.Xl = !1, e.Dl || (e.Ml = !1, e.Ll !== I.PlayerState.NOT_MONITORED && e.wt.Xe(e.Ll)));
            }, this.bt = function(t, n) {
                !m.Pt(t) || n !== a.ErrorSeverity.FATAL && n !== a.ErrorSeverity.WARNING || e.Fl || (n = n === a.ErrorSeverity.FATAL, e.wt.Fc(t, n));
            }, this.Mt = function(t) {
                e.g.F("Session.updateContentMetadata", function() {
                    e.wt.Mt(t);
                });
            }, this.Kt = function(t, n) {
                e.wt.Xc(t, n);
            }, this.ks = function() {
                return e.xf === C.Nt.Oh;
            }, this.Cs = function() {
                return e.xf === C.Nt.Ot;
            }, this.qf = function() {
                return e.xf === C.Nt.Dt;
            }, this.Jf = function() {
                return e.ks() ? " (global session)" : "";
            }, this.Xt = function() {
                return this.C;
            }, this.Qt = function() {
                var t = null;
                return t = e.Kf.jl() ? e.Kf.get(y.B) : t;
            }, this.Zt = function(t, n) {
                e.wt.Zt(t, n);
            };
        }).Ol = "received no response (or a bad response) to heartbeat POST request", tt = U.SessionFactory = function() {
            var o = this;
            o.Fi = null, o.Zl = 0, o.zl = null, (function(t, n, i, e) {
                o.Ee = t, o.Vi = n, o.Kf = i, o.T = e, o.Zl = 0, o.zl = {};
            }).apply(o, arguments), this.Tt = function() {
                for(var t in o.Fi = null, o.zl)o.zl[t].cleanup();
                o.zl = null, o.Zl = 0;
            }, this.$l = function() {
                var t = o.Zl;
                return o.Zl++, t;
            }, this.St = function(t, n, i, e, s) {
                return t || (t = new c), o.td(t, n, i, e, s);
            }, this.Y = function(t) {
                return o.td(t, C.Nt.Oh, void 0, g.version);
            }, this.nd = function() {
                return P.ed();
            }, this.td = function(t, n, i, e, s) {
                n = o.T.Zi(o.Ee, o.Vi, o.Kf, o.nd(), n, t.ct(), e), t = o.$l();
                return "undefined" !== typeof s && "undefined" !== typeof s.error ? n.Yf(i, s.error) : (o.sd(t, n), n.Yf(i)), t;
            }, this.jt = function(t) {
                t = o.zl[t];
                return t;
            }, this.It = function(t) {
                t = this.jt(t);
                return t = !t || t.Cs() || t.qf() ? t : null;
            }, this.sd = function(t, n) {
                o.zl[t] = n;
            }, this.od = function(t) {
                delete o.zl[t];
            }, this.xt = function(t) {
                var n = o.jt(t);
                o.od(t), n.cleanup();
            }, this.tt = function() {
                return o.zl;
            };
        }, nt = U.rd = function(t) {
            this._e = t, this.ud = function(i, t, n) {
                var e = !1;
                this._e.createOnce(function() {
                    e || i((e = !0, false), n + " (" + t + " ms)");
                }, t, "CallbackWithTimeout.wrap");
                return function(t, n) {
                    e || (e = !0, i(t, n));
                };
            };
        }, (y = U.Config = function(t, n, i) {
            var e = this;
            this.ad = n, this.fd = i, this.ld = {
                clientId: N.H,
                iid: N.Sr,
                sendLogs: !1,
                maxHbInfos: N.Nr
            }, this.I = m.ll(this.ld), this.dd = !1, this.vd = !1, this.Ed = [], this.jl = function() {
                return this.dd;
            }, this.Et = function() {
                this.ad.Et(y.hd, function(t, n) {
                    t && e._d(n), e.dd = !0, e.Rd();
                });
            }, this._d = function(t) {
                var n, t = this.fd.yh(t);
                t ? t && (n = t[y.pd], t = t[y._t], n && n !== N.H && "" !== n && "null" !== n ? this.I[y.B] = n : (this.I[y.B] = this.Ad(), this.Al()), t !== N.Sr) && "" !== t && "null" !== t && (this.I[y._t] = t) : (this.I[y.B] = this.Ad(), this.Al(), this.vd = !0);
            }, this.Td = function() {
                var t = {};
                return t[y.pd] = this.I.clientId, this.fd.Ch(t);
            }, this.Al = function() {
                this.ad.Al(y.hd, this.Td(), function(t, n) {});
            }, this.Wl = function(t) {
                this.jl() ? t() : this.Ed.push(t);
            }, this.get = function(t) {
                return this.dd ? this.I[t] : null;
            }, this.set = function(t, n) {
                this.dd && (this.I[t] = n);
            }, this.Rd = function() {
                for(var t; "undefined" !== typeof (t = this.Ed.shift());)t();
            }, this.getClientId = function() {
                return this.I.clientId;
            }, this.Ad = function() {
                try {
                    var t = 2147483647;
                    return Math.floor(Math.random() * t).toString() + "." + Math.floor(Math.random() * t).toString() + "." + Math.floor(Math.random() * t).toString() + "." + Math.floor(Math.random() * t).toString();
                } catch (t) {
                    this.p.debug("error caught in _generateClid()");
                }
                return "0";
            }, this.getIid = function() {
                return this.I.iid;
            };
        }).hd = "sdkConfig", y.pd = "clId", y._t = "iid", y.B = "clientId", y.ol = "sendLogs", y.nl = "maxHbInfos", y.hl = "c3.fp.", y.$t = {
            al: "0",
            Sd: "1",
            tn: "2",
            zt: "3",
            fl: "4",
            en: "5",
            nn: "6"
        }, it = U.EventQueue = function() {
            this.Od = [], this.Nd = 0, this.Kc = function(t) {
                this.Od.push(t);
            }, this.Gc = function() {
                var t = this.Nd;
                return this.Nd++, t;
            }, this.Wf = function() {
                var t = this.Od;
                return this.Od = [], t;
            };
        }, et = U.ExceptionCatcher = function(t, n, i) {
            this.gd = n, this.N = i, this.F = function(n, t, i) {
                try {
                    t();
                } catch (t) {
                    if (i) i(t);
                    else {
                        if (this.N.allowUncaughtExceptions) throw t;
                        this.Id(n, t);
                    }
                }
            }, this.Id = function(t, n) {
                t = "Uncaught exception: " + t + ": " + n.toString();
                if (this.gd) try {
                    this.gd.Rl(t);
                } catch (t) {}
            };
        }, st = U.GatewayControl = function(t, n, i, e, s) {
            var o = this;
            this.Vi = t, this.wd = i, this.fd = e, this.Cd = s, this.Rl = function(t, e) {
                var n = (this.Cd ? this.Cd.indexOf("ipv4") > -1 ? this.Vi.G : this.Vi.q : this.Vi.gatewayUrl) + N.Tr;
                this.wd.yd("POST", n, this.fd.Ch(t), "application/json", function(t, n) {
                    var i;
                    t ? (i = o.fd.yh(n), e(t, i)) : e(t, n);
                });
            };
        }, m = U.Lang = {
            md: function(t) {
                return m.Pt(t) && t && "undefined" !== t && "null" !== t;
            },
            Gt: function(t) {
                var n, i, e = {};
                for(n in t)m.md(n) && (i = t[n], m.md(i)) && (e[n] = i);
                return e;
            },
            Jn: function(t, n, i) {
                if (!t) throw new Error("Expected " + i + " implementation is null.");
                for(var e in n)if ("function" !== typeof t[e]) throw new Error("Expected method " + e + " in " + i + " implementation.");
            },
            Ht: function(t) {
                var n, i = 0;
                for(n in t)Object.prototype.hasOwnProperty.call(t, n) && i++;
                return i;
            },
            yt: function(t) {
                return "" + t;
            },
            Dd: function(t) {
                return Math.floor(t);
            },
            cn: function(t) {
                return Math.abs(m.Dd(t));
            },
            Pd: function(t) {
                return Boolean(t);
            },
            Pt: function(t) {
                return "string" === typeof t && "" !== t;
            },
            Sl: function(t, n) {
                return "string" === typeof t && "string" === typeof n && "function" === typeof t.indexOf && 0 === t.indexOf(n);
            },
            ie: function(t) {
                return "boolean" === typeof t;
            },
            bd: function(t) {
                return escape(t);
            },
            mh: function(t) {
                return "object" === typeof t;
            },
            Sc: function(t) {
                var n, i = "";
                for(n in t)i += n + "=" + t[n];
                return "Object{" + i + "}";
            },
            Md: function(t) {
                var n, i = m.ll(t);
                for(n in i)i[n] || delete i[n];
                return i;
            },
            ll: function(t) {
                var n, i = {};
                for(n in t)i[n] = t[n];
                return i;
            },
            Tc: function(t, n) {
                if (typeof t !== typeof n) return !1;
                if (t instanceof Object && n instanceof Object) {
                    if (m.Ht(t) !== m.Ht(n)) return !1;
                    for(var i in t)if (!(t[i] === n[i])) return !1;
                    return !0;
                }
                return t === n;
            },
            ko: function() {
                for(var t = {}, n = 0; n < arguments.length; n++)for(var i in arguments[n])arguments[n][i] && (t[i] = arguments[n][i]);
                return t;
            },
            gt: function(t) {
                return "number" === typeof t && Math.round(t) === t;
            },
            Ld: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t);
            },
            Ud: function(t, n) {
                if (t !== n) {
                    if (!t || !n) return !1;
                    if (t.length !== n.length) return !1;
                    for(var i = 0; i < t.length; ++i)if (m.Ld(t[i]) && m.Ld(n[i])) {
                        if (!m.Ud(t[i], n[i])) return !1;
                    } else if (t[i] !== n[i]) return !1;
                }
                return !0;
            },
            Vd: function() {
                return "undefined" !== typeof Object.defineProperty && function() {
                    try {
                        return Object.defineProperty({}, "x", {}), !0;
                    } catch (t) {
                        return !1;
                    }
                }();
            },
            rn: function(t, n, i) {
                if (m.Vd()) Object.defineProperty(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    get: i
                });
                else {
                    if ("undefined" === typeof t.__defineGetter__) throw new Error("JavaScript runtime must support either Object.defineProperty or __defineGetter__");
                    t.__defineGetter__(n, i);
                }
            },
            un: function(t, n, i) {
                if (m.Vd()) Object.defineProperty(t, n, {
                    configurable: !0,
                    set: i
                });
                else {
                    if ("undefined" === typeof t.__defineSetter__) throw new Error("JavaScript runtime must support either Object.defineProperty or __defineSetter__");
                    t.__defineSetter__(n, i);
                }
            }
        }, (T = {
            two32: 4294967296
        }).kd = T.two32 - 1, T.Fd = 0, m.Bd = T, m.Bd.Cast = function(t) {
            t = parseInt(t, 10);
            return t > T.kd ? t = t % T.two32 : t < T.Fd && (t = T.two32 - (t = -t % T.two32)), t;
        }, m.Bd.Hd = function(t) {
            t = parseInt(t, 10);
            return t <= T.kd && t >= T.Fd;
        }, S = {
            kd: 2147483647,
            Fd: -2147483648
        }, m._l = S, m._l.Cast = function(t) {
            t = parseInt(t, 10);
            return t > S.kd ? t = t % S.kd : t < S.Fd && (t = S.kd - (t = -t % S.kd)), t;
        }, m._l.Hd = function(t) {
            t = parseInt(t, 10);
            return t <= S.kd && t >= S.Fd;
        }, m.nr = function() {
            return "undefined" !== typeof window && window && window.location && window.location.search ? window.location.search : "";
        }, m.Gd = function() {
            return document && document.referrer ? document.referrer : "";
        }, ot = U.LogBuffer = function() {
            this.jd = [], this.lr = function(t) {
                this.jd.length >= 32 && this.jd.shift(), this.jd.push(t);
            }, this.Wf = function() {
                var t = this.jd;
                return this.jd = [], t;
            };
        }, (D = U.Ping = function(t, n, i, e) {
            this.Wd = !1, this.Yd = null, this.p = t, this.p.setModuleName("Ping"), this.wd = n, this.Vi = i, this.ki = e, this.Rl = function(t) {
                this.Wd || (this.Wd = !0, t = this.xd() + "&d=" + m.bd(t.toString()), this.p.error("send(): " + t), this.wd.yd("GET", t, null, null, null), this.Wd = !1);
            }, this.xd = function() {
                if (!this.Yd) {
                    var t = D.qd + "?comp=" + D.Kd + "&clv=" + (this.ki || a.version);
                    if (this.Vi && (t += "&cid=" + this.Vi.customerKey), t += "&sch=" + N.Cr, !this.Vi) return t;
                    this.Yd = t;
                }
                return this.Yd;
            };
        }).Kd = "sdkjs", D.qd = "https://pings.conviva.com/ping.ping", P = U.Jd = {
            Xd: 4294967295,
            Qd: 2147483647,
            Zd: -2147483648,
            ed: function() {
                return Math.floor(Math.random() * P.Xd) + P.Zd;
            },
            Rt: function() {
                return Math.floor(Math.random() * P.Xd);
            }
        }, b = U.zd = {
            jc: function(t, n, i, e) {
                return isNaN(t) || "number" !== typeof t || t === e ? e : (e = m.Dd(t), b.$d(e, n, i));
            },
            $d: function(t, n, i) {
                return m.gt(i) && t > i ? t = i : m.gt(n) && t < n && (t = n), t;
            },
            In: function(t) {
                return t = -1 !== t && -2 !== t ? b.jc(t, 0, null, -1) : t;
            }
        }, M = U.StreamerError = function() {
            var i = this;
            i.errorCode = null, i.severity = a.ErrorSeverity.FATAL, (function(t, n) {
                i.errorCode = t, i.severity = n;
            }).apply(i, arguments), this.ir = function() {
                return i.errorCode;
            }, this.er = function() {
                return i.severity;
            };
        }, rt = U.HttpClient = function(t, n, i, e) {
            this.Di = n, this.tv = i, this.N = e, this.yd = function(t, n, i, e, s) {
                var o = 1e3 * this.N.httpTimeout, r = null;
                s && (r = this.tv.ud(s, o, "HTTP timeout")), this.Di.makeRequest(t, n, i, e, o, r);
            };
        }, (ut = U.Logger = function(t, n, i, e, s) {
            this.Mi = t, this.yi = n, this.O = i, this.Fi = e, this.Ui = s, this.debug = function(t) {
                this.log(t, h.LogLevel.DEBUG);
            }, this.info = function(t) {
                this.log(t, h.LogLevel.INFO);
            }, this.warning = function(t) {
                this.log(t, h.LogLevel.WARNING);
            }, this.error = function(t) {
                this.log(t, h.LogLevel.ERROR);
            }, this.log = function(t, n) {
                t = this.iv(t, n);
                this.Fi.lr(t), this.O.logLevel <= n && this.Mi.consoleLog(t, n);
            }, this.ev = function(t) {
                return "[" + this.Vn + "] " + t;
            }, this.sv = function(t) {
                return "[" + this.Ui + "] " + t;
            }, this.ov = function(t) {
                return "[Conviva] " + t;
            }, this.rv = function(t) {
                return "[" + (this.yi.getEpochTimeMs() / 1e3).toFixed(3).toString() + "] " + t;
            }, this.uv = function(t, n) {
                return "[" + ut.nv(n) + "] " + t;
            }, this.hv = function(t) {
                return t = this.av ? "sid=" + this.av + " " + t : t;
            }, this.Kh = function(t) {
                this.av = t;
            }, this.setModuleName = function(t) {
                this.Vn = t;
            }, this.iv = function(t, n) {
                return this.ov(this.rv(this.uv(this.sv(this.ev(this.hv(t))), n)));
            };
        }).nv = function(t) {
            var n;
            switch(t){
                case h.LogLevel.ERROR:
                    n = "ERROR";
                    break;
                case h.LogLevel.WARNING:
                    n = "WARNING";
                    break;
                case h.LogLevel.INFO:
                    n = "INFO";
                    break;
                case h.LogLevel.DEBUG:
                    n = "DEBUG";
            }
            return n;
        }, U.Storage = function(t, n, i, e) {
            this.Pi = n, this.tv = i, this.N = e, this.Et = function(t, n) {
                n = this.tv.ud(n, 1e3 * this.N.storageTimeout, "storage load timeout");
                this.Pi.loadData(U.Storage.fv, t, n);
            }, this.Al = function(t, n, i) {
                i = this.tv.ud(i, 1e3 * this.N.storageTimeout, "storage save timeout");
                this.Pi.saveData(U.Storage.fv, t, n, i);
            };
        }, U.Storage.fv = "Conviva", (L = U.SystemMetadata = function(t, n, i) {
            this.bi = n, this.g = i, this.cv = null, this.get = function() {
                return this.cv || this.retrieve(), this.cv;
            }, this.retrieve = function() {
                var t, n = {}, e = (n[L.BROWSER_NAME] = this.bi.getBrowserName, n[L.BROWSER_VERSION] = this.bi.getBrowserVersion, n[L.DEVICE_BRAND] = this.bi.getDeviceBrand, n[L.DEVICE_MANUFACTURER] = this.bi.getDeviceManufacturer, n[L.DEVICE_MODEL] = this.bi.getDeviceModel, n[L.DEVICE_TYPE] = this.bi.getDeviceType, n[L.DEVICE_VERSION] = this.bi.getDeviceVersion, n[L.FRAMEWORK_NAME] = this.bi.getFrameworkName, n[L.FRAMEWORK_VERSION] = this.bi.getFrameworkVersion, n[L.OPERATING_SYSTEM_NAME] = this.bi.getOperatingSystemName, n[L.OPERATING_SYSTEM_VERSION] = this.bi.getOperatingSystemVersion, n[L.DEVICE_CATEGORY] = this.bi.getDeviceCategory, n[L.SCREEN_WIDTH] = this.bi.getScreenWidth, n[L.SCREEN_HEIGHT] = this.bi.getScreenHeight, n[L.SCALE_FACTOR] = this.bi.getScaleFactor, this);
                for(t in n)!function(n, i) {
                    e.g.F("Session.getSystemMetadataSchema(): " + n, function() {
                        var t = i[n];
                        i[n] = t.call(e.bi);
                    });
                }(t, n), m.Pt(n[t]) || delete n[t];
                var i = !1;
                if ("undefined" !== typeof n[L.DEVICE_TYPE]) {
                    for(var s in a.DeviceType)if (n[L.DEVICE_TYPE] === a.DeviceType[s]) {
                        i = !0;
                        break;
                    }
                    i || delete n[L.DEVICE_TYPE];
                }
                if (i = !1, "undefined" !== typeof n[L.DEVICE_CATEGORY]) {
                    for(var o in a.DeviceCategory)if (n[L.DEVICE_CATEGORY] === a.DeviceCategory[o]) {
                        i = !0;
                        break;
                    }
                    i || delete n[L.DEVICE_CATEGORY];
                }
                this.cv = m.Md(n);
            };
        }).BROWSER_NAME = "browserName", L.BROWSER_VERSION = "browserVersion", L.DEVICE_BRAND = "deviceBrand", L.DEVICE_MANUFACTURER = "deviceManufacturer", L.DEVICE_MODEL = "deviceModel", L.DEVICE_TYPE = "deviceType", L.DEVICE_VERSION = "deviceVersion", L.FRAMEWORK_NAME = "frameworkName", L.FRAMEWORK_VERSION = "frameworkVersion", L.OPERATING_SYSTEM_NAME = "operatingSystemName", L.OPERATING_SYSTEM_VERSION = "operatingSystemVersion", L.DEVICE_CATEGORY = "deviceCategory", L.SCREEN_WIDTH = "screenWidth", L.SCREEN_HEIGHT = "screenHeight", L.SCALE_FACTOR = "scaleFactor", ht = U.Time = function(t, n) {
            this.yi = t, this.p = n, this.current = function() {
                var t = this.yi.getEpochTimeMs();
                return m.gt(t), t;
            };
        }, at = U.Timer = function(t, n, i) {
            var s = this;
            this.mi = n, this.g = i, this.create = function(t, n, i) {
                return this.createTimer(function() {
                    s.g.F(i, function() {
                        t();
                    });
                }, n, i);
            }, this.createOnce = function(t, n, i) {
                var e = {
                    cancel: null
                };
                return e.cancel = this.createTimer(function() {
                    s.g.F(i, function() {
                        e && "function" === typeof e.cancel && (e.cancel(), e.cancel = null, e = null), t();
                    });
                }, n, i), e.cancel;
            }, this.createTimer = function(t, n, i) {
                return this.mi.createTimer(t, n, i);
            };
        };
    }(), lt;
});

},{}]},["iTLMm"], null, "parcelRequire0a42")

//# sourceMappingURL=conviva.js.map
