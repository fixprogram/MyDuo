var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/newll/Desktop/Projects/Keid/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
init_react();
var import_remix2 = __toESM(require_remix());
function Document({
  children,
  title = `Keid`
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,user-scalable=no"
  }), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: { margin: 0 }
  }, children, /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}

// route:/Users/newll/Desktop/Projects/Keid/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());
var loader = async ({ request }) => {
  return (0, import_remix3.redirect)(`/main`);
};

// route:/Users/newll/Desktop/Projects/Keid/app/routes/main.tsx
var main_exports = {};
__export(main_exports, {
  default: () => MainPage
});
init_react();
var import_ParentSize = __toESM(require("@visx/responsive/lib/components/ParentSize"));

// app/components/ZoomLayout.tsx
init_react();
var import_react = __toESM(require("react"));

// node_modules/d3-scale-chromatic/src/index.js
init_react();

// node_modules/d3-scale-chromatic/src/sequential-multi/rainbow.js
init_react();
var import_d3_color = require("d3-color");
var import_d3_interpolate = require("d3-interpolate");
var warm = (0, import_d3_interpolate.interpolateCubehelixLong)((0, import_d3_color.cubehelix)(-100, 0.75, 0.35), (0, import_d3_color.cubehelix)(80, 1.5, 0.8));
var cool = (0, import_d3_interpolate.interpolateCubehelixLong)((0, import_d3_color.cubehelix)(260, 0.75, 0.35), (0, import_d3_color.cubehelix)(80, 1.5, 0.8));
var c = (0, import_d3_color.cubehelix)();
function rainbow_default(t) {
  if (t < 0 || t > 1)
    t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
}

// app/components/ZoomLayout.tsx
var import_zoom = require("@visx/zoom");
var import_event = require("@visx/event");
var import_clip_path = require("@visx/clip-path");
var import_genPhyllotaxis = __toESM(require("@visx/mock-data/lib/generators/genPhyllotaxis"));
var import_scale = require("@visx/scale");

// app/components/zoomLib.tsx
init_react();
var import_styled = __toESM(require("@emotion/styled"));
var Button = (0, import_styled.default)("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;
`;
var ButtonLarge = (0, import_styled.default)("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;

  font-size: 12px;
  line-height: 1;
  padding: 4px;
`;
var ButtonZoom = (0, import_styled.default)("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;

  width: 26px;
  font-size: 22px;
`;
var ButtonBottom = (0, import_styled.default)("button")`
  margin: 0;
  text-align: center;
  border: none;
  background: #2f2f2f;
  color: #888;
  padding: 0 4px;
  border-top: 1px solid #0a0a0a;

  margin-bottom: 1rem;
`;
var Description = (0, import_styled.default)("p")`
  font-size: 12px;
  margin-right: 0.25rem;
`;
var Controls = (0, import_styled.default)("div")`
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
var MiniMap = (0, import_styled.default)("div")`
  position: absolute;
  bottom: 25px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// app/components/ZoomLayout.tsx
var bg = "#0a0a0a";
var points = [...new Array(1e3)];
var colorScale = (0, import_scale.scaleLinear)({ range: [0, 1], domain: [0, 1e3] });
var sizeScale = (0, import_scale.scaleLinear)({ domain: [0, 600], range: [0.5, 8] });
var initialTransform = {
  scaleX: 1.27,
  scaleY: 1.27,
  translateX: -211.62,
  translateY: 162.59,
  skewX: 0,
  skewY: 0
};
function ZoomLayout({ width, height }) {
  const [showMiniMap, setShowMiniMap] = (0, import_react.useState)(true);
  const generator = (0, import_genPhyllotaxis.default)({
    radius: 10,
    width,
    height
  });
  const phyllotaxis = points.map((d, i) => generator(i));
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_zoom.Zoom, {
    width,
    height,
    scaleXMin: 1 / 2,
    scaleXMax: 4,
    scaleYMin: 1 / 2,
    scaleYMax: 4,
    initialTransformMatrix: initialTransform
  }, (zoom) => /* @__PURE__ */ import_react.default.createElement("div", {
    className: "relative",
    style: { position: "relative" }
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    style: {
      cursor: zoom.isDragging ? "grabbing" : "grab",
      touchAction: "none",
      height: "100vh",
      width: "100vw"
    },
    ref: zoom.containerRef
  }, /* @__PURE__ */ import_react.default.createElement(import_clip_path.RectClipPath, {
    id: "zoom-clip",
    width,
    height
  }), /* @__PURE__ */ import_react.default.createElement("rect", {
    width,
    height,
    rx: 14,
    fill: bg
  }), /* @__PURE__ */ import_react.default.createElement("g", {
    transform: zoom.toString()
  }, phyllotaxis.map(({ x, y }, i) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, {
    key: `dot-${i}`
  }, /* @__PURE__ */ import_react.default.createElement("circle", {
    cx: x,
    cy: y,
    r: i > 500 ? sizeScale(1e3 - i) : sizeScale(i),
    fill: rainbow_default(colorScale(i) ?? 0)
  })))), /* @__PURE__ */ import_react.default.createElement("rect", {
    width,
    height,
    rx: 14,
    fill: "transparent",
    onTouchStart: zoom.dragStart,
    onTouchMove: zoom.dragMove,
    onTouchEnd: zoom.dragEnd,
    onMouseDown: zoom.dragStart,
    onMouseMove: zoom.dragMove,
    onMouseUp: zoom.dragEnd,
    onMouseLeave: () => {
      if (zoom.isDragging)
        zoom.dragEnd();
    },
    onDoubleClick: (event) => {
      const point = (0, import_event.localPoint)(event) || { x: 0, y: 0 };
      zoom.scale({ scaleX: 1.1, scaleY: 1.1, point });
    }
  }), showMiniMap && /* @__PURE__ */ import_react.default.createElement("g", {
    clipPath: "url(#zoom-clip)",
    transform: `
                    scale(0.25)
                    translate(${width * 4 - width - 60}, ${height * 4 - height - 60})
                  `
  }, /* @__PURE__ */ import_react.default.createElement("rect", {
    width,
    height,
    fill: "#1a1a1a"
  }), phyllotaxis.map(({ x, y }, i) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, {
    key: `dot-sm-${i}`
  }, /* @__PURE__ */ import_react.default.createElement("circle", {
    cx: x,
    cy: y,
    r: i > 500 ? sizeScale(1e3 - i) : sizeScale(i),
    fill: rainbow_default(colorScale(i) ?? 0)
  }))), /* @__PURE__ */ import_react.default.createElement("rect", {
    width,
    height,
    fill: "white",
    fillOpacity: 0.2,
    stroke: "white",
    strokeWidth: 4,
    transform: zoom.toStringInvert()
  }))), /* @__PURE__ */ import_react.default.createElement(Controls, null, /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    className: "btn btn-zoom",
    onClick: () => zoom.scale({ scaleX: 1.2, scaleY: 1.2 })
  }, "+"), /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    className: "btn btn-zoom btn-bottom",
    onClick: () => zoom.scale({ scaleX: 0.8, scaleY: 0.8 })
  }, "-"), /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    className: "btn btn-lg",
    onClick: zoom.center
  }, "Center"), /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    className: "btn btn-lg",
    onClick: zoom.reset
  }, "Reset"), /* @__PURE__ */ import_react.default.createElement("button", {
    type: "button",
    className: "btn btn-lg",
    onClick: zoom.clear
  }, "Clear")), /* @__PURE__ */ import_react.default.createElement(MiniMap, null, /* @__PURE__ */ import_react.default.createElement(ButtonLarge, {
    onClick: () => setShowMiniMap(!showMiniMap)
  }, showMiniMap ? "Hide" : "Show", " Mini Map")))));
}

// route:/Users/newll/Desktop/Projects/Keid/app/routes/main.tsx
function MainPage() {
  return /* @__PURE__ */ React.createElement(import_ParentSize.default, null, ({ height, width }) => /* @__PURE__ */ React.createElement(ZoomLayout, {
    height,
    width
  }));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "fd133793", "entry": { "module": "/build/entry.client-NBXC6VUH.js", "imports": ["/build/_shared/chunk-JHRMSISW.js", "/build/_shared/chunk-FYWBRZZO.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2EN62JNN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WEJANBQC.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/main": { "id": "routes/main", "parentId": "root", "path": "main", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/main-O5YWR2ZZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-FD133793.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/main": {
    id: "routes/main",
    parentId: "root",
    path: "main",
    index: void 0,
    caseSensitive: void 0,
    module: main_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
