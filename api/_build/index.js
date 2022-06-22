var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// route:/Users/newll/Desktop/MyDuo/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
init_react();
var import_remix2 = __toESM(require_remix());
function Document({
  children,
  title = `MyDuo`
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1,user-scalable=no"
  }), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500;700&display=swap",
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

// route:/Users/newll/Desktop/MyDuo/app/routes/skill/$title/$chapter.tsx
var chapter_exports = {};
__export(chapter_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => LessonScreen,
  loader: () => loader
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/db.server.ts
init_react();
var import_client = require("@prisma/client");
var prisma;
if (false) {
  prisma = new import_client.PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new import_client.PrismaClient();
  }
  prisma = global.__db__;
  prisma.$connect();
}

// app/modules/Lesson/index.tsx
init_react();
var import_react13 = require("react");

// app/components/Progress.tsx
init_react();

// app/styles/close.svg
var close_default = "/build/_assets/close-D2E3HOMK.svg";

// app/components/lib.tsx
init_react();
var import_styled = __toESM(require("@emotion/styled"));
var import_react = require("@remix-run/react");
var HorizontalList = import_styled.default.ul((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 0,
  height: "100%",
  padding: "0 9px"
}));
var ListItem = import_styled.default.li((props) => ({
  height: "100%",
  margin: "0 15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative"
}));
var LessonsContainer = import_styled.default.section((props) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  position: "relative"
}));
var LessonsBlock = (0, import_styled.default)("div")`
  grid-column-gap: 12px;
  display: grid;
  grid-auto-columns: calc(33.33333% - 8px);
  grid-auto-flow: column;
  justify-content: center;
  padding: 16px 12px;
`;
var LessonBlock = (0, import_styled.default)("div")`
  width: 33%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var LessonBlockMenu = (0, import_styled.default)("div")`
  display: ${(props) => props.isOpened ? "block" : "none"};
  position: absolute;
  left: 50%;
  top: calc(100% + 20px);
  transform: translate(-50%);
  z-index: 1;
`;
var LessonBlockMenuTriangle = (0, import_styled.default)("div")`
  left: calc(50% - 15px);
  transform: translateX(-50%);
  margin: 0 15px;
  top: -8px;
  height: 10px;
  overflow: hidden;
  width: 20px;
  box-sizing: border-box;
  position: absolute;
`;
var LessonBlockMenuTriangleContent = (0, import_styled.default)("span")`
  background-color: #ce82ff;
  border: 0;
  position: absolute;
  content: "";
  border-radius: 2px;
  height: 14.14427px;
  left: 50%;
  transform: rotate(45deg);
  transform-origin: top left;
  width: 14.14427px;
`;
var LessonBlockInner = (0, import_styled.default)("div")`
  background-color: #ce82ff;
  color: #fff;
  padding: 16px;
  text-align: center;
  width: 300px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
var LessonBlockLink = (0, import_styled.default)(import_react.Link)`
  color: #ce82ff;
  background-color: #fff;
  flex-grow: 1;
  text-transform: uppercase;
  margin-top: 12px;
  border-width: 0 0 4px;
  padding: 13px 16px;
  font-size: 15px;
  line-height: 20px;
  border-color: inherit;
  border-radius: 18px;
  text-decoration: none;
  font-family: "Roboto";
  font-weight: 500;
  letter-spacing: 0.8px;
`;
var LessonBlockButton = (0, import_styled.default)("button")`
  color: #ce82ff;
  background-color: #fff;
  flex-grow: 1;
  text-transform: uppercase;
  margin-top: 12px;
  margin-left: 10px;
  border-width: 0 0 4px;
  padding: 13px 16px;
  font-size: 15px;
  line-height: 20px;
  border-color: inherit;
  border-radius: 18px;
  text-decoration: none;
  font-family: "Roboto";
  font-weight: 500;
  letter-spacing: 0.8px;
`;
var LessonBlockTitle = (0, import_styled.default)("div")`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 26px;
  padding-bottom: 20px;
  text-align: center;
  width: 100%;
  & span {
    height: 2px;
    background-color: #e5e5e5;
    flex-grow: 1;
  }
  & h2 {
    font-size: 24px;
    font-weight: 700;
    font-family: "Roboto";
    color: #4b4b4b;
    flex-grow: 0.3;
  }
`;
var LessonBlockItem = import_styled.default.a(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "33.33%",
  textDecoration: "none"
}));
var UserImage = import_styled.default.img({
  borderRadius: "100%"
}, (props) => ({ width: props.width, height: props.height }));
var ProgressBarContainer = (0, import_styled.default)("div")`
  width: 100%;
  margin-top: 1px;
  border-top: 1px solid #dbdddd;
  padding-top: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var ProgressBar = (0, import_styled.default)("div")`
  width: 61%;
  height: 16px;
  position: relative;
  background-color: #e5e5e5;
  position: relative;
  border-radius: 7px;
  &:before,
  &:after {
    content: "";
    display: block;
    width: ${(props) => props.progress * 100}%;
    height: 16px;
    background-color: #58cc02;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 7px;
  }
  &:after {
    height: 30%;
    top: 25%;
    left: 8px;
    right: 8px;
    width: calc(${(props) => props.progress * 100}% - 16px);
    background: white;
    opacity: 0.2;
  }
`;
var ProgressLeaveLesson = (0, import_styled.default)(import_react.Link)`
  margin-right: 21px;
  height: 16px;
  margin-top: -3px;
`;
var Input = (0, import_styled.default)("input")`
  background-color: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
`;
var Textarea = (0, import_styled.default)("textarea")`
  background-color: rgb(247, 247, 247);
  border: 2px solid rgb(229, 229, 229);
  border-color: rgb(229, 229, 229);
  border-radius: 10px;
  padding: 10px 12px;
  min-height: 200px;
  width: 100%;
  -webkit-appearance: none;
  resize: none;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  line-height: 24px;
  color: rgba(60, 60, 60, 0.8);
  font-size: 19px;
  font-family: "Roboto";
  font-weight: 400;
  letter-spacing: 1px;
`;
var LoginTitle = (0, import_styled.default)("h1")`
  font-size: 26px;
  margin: 10px 0 15px;
  font-family: Montserrat;
  font-weight: 700;
  text-align: center;
`;
var Fieldset = (0, import_styled.default)("fieldset")`
  margin-top: 20px;
`;
var InputTextLabel = (0, import_styled.default)("label")`
  width: 49%;
  margin-right: 1%;
`;
var TextareaLabel = (0, import_styled.default)("label")`
  width: 100%;
`;
var LabelText = (0, import_styled.default)("span")`
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  color: #4b4b4b;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  letter-spacing: 0.6px;
`;
var Legend = (0, import_styled.default)("legend")`
  color: #4b4b4b;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 14px;
  margin-top: 0;
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;
var FormButton = (0, import_styled.default)("button")`
  background-color: ${(props) => props.active ? "#78C83D" : props.disabled ? "#E5E5E5" : "#fff"};
  color: ${(props) => props.active ? "#fff" : props.disabled ? "#AFAFAF" : "#1cb0f6"};
  border: ${(props) => props.active ? "none" : "2px solid #e5e5e5"};
  height: 50px;
  box-shadow: ${(props) => props.active ? "0px -4px 0px 0px rgba(108, 164, 48, 1) inset" : "none"};
  cursor: ${(props) => props.disabled ? "default" : "pointer"};
  width: 150px;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.3px;
  border-radius: 15px;
`;
var KeywordTemplate = (0, import_styled.default)("span")`
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) => props.active && "1px solid blue"};
`;
var LessonProgress = (0, import_styled.default)("div")`
  animation: growProgressBar 3s 1 forwards;
  width: 106px;
  height: 106px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: radial-gradient(
      closest-side,
      white 85%,
      transparent 0 99.9%,
      white 0
    ),
    conic-gradient(#ffd900 calc(${(props) => props.exp} * 1%), #e5e5e5 0);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 700;
  font-family: "Roboto";
  color: #1cb0f6;
  position: relative;
`;
var LessonProgressInner = (0, import_styled.default)("div")`
  border-radius: 50%;
  height: 68%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 68%;
  background: #ce82ff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var Main = (0, import_styled.default)("main")`
  padding: 24px 10% 0;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
`;
var LessonTitle = (0, import_styled.default)("b")`
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
  display: block;
`;
var NavIcon = (0, import_styled.default)("img")`
  margin-right: 10px;
  width: 36px;
  height: 36px;
`;
var LoginContainer = (0, import_styled.default)("section")`
  padding: 30px;
  height: 100vh;
  left: 0;
  overflow-y: auto;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
`;
var LoginContinerInner = (0, import_styled.default)(`div`)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;
var LoginInput = (0, import_styled.default)("input")`
  background: transparent;
  flex-grow: 1;
  line-height: 27px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  outline: none;
  font-size: 100%;
  background: #f7f7f7;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  padding: 8px 16px;
  display: inline-flex;
  margin-top: 8px;
`;
var LoginButton = (0, import_styled.default)("button")`
  margin-top: 20px;
  width: 100%;
  letter-spacing: 0.8px;
  font: 700 15px "Roboto";
  padding: 0 16px;
  height: 50px;
  color: white;
  border: none;
  border-bottom: 4px solid rgba(133, 133, 133, 0.5);
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #1cb0f6;
`;
var LoginToggle = (0, import_styled.default)("label")`
  position: absolute;
  top: 0;
  right: 0;
  letter-spacing: 0.8px;
  font: 700 15px "Roboto";
  line-height: 1.2;
  padding: 0 16px;
  height: 50px;
  color: #1cb0f6;
  border: 1px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
var MenuContainer = (0, import_styled.default)("div")`
  height: 71px;
  width: 100vw;
  border-top: 1px solid #dadcde;
  border-bottom: 2px solid #dadcde;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
`;
var MenuNavLink = (0, import_styled.default)(import_react.NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Montserrat";
  font-weight: 700;
  color: #afafaf;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
`;
var ActiveLanguageButton = (0, import_styled.default)("button")`
  color: #3c3c3c;
  border: none;
  background-color: inherit;
  font-family: "Montserrat";
  font-weight: 700;
  letter-spacing: 0.8px;
  cursor: pointer;
`;
var ActiveLanguageContainer = (0, import_styled.default)("div")`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 200px;
  padding: 20px 0;
  z-index: 9;
`;
var LanguagesContainer = (0, import_styled.default)("div")`
  border: 2px solid #dadcde;
  border-radius: 15px;
  background-color: white;
`;
var LanguagesList = (0, import_styled.default)("ul")`
  display: flex;
  flex-direction: column;
`;
var LanguagesItem = (0, import_styled.default)("button")`
  border: none;
  border-bottom: 2px solid #dadcde;
  width: 100%;
  cursor: pointer;
  padding: 20px 20px;
  background-color: inherit;
  color: #3c3c3c;
  font-family: "Montserrat";
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
`;
var LanguagesInput = (0, import_styled.default)("input")`
  border: none;
  border-bottom: 2px solid #dadcde;
  border-radius: 0 0 10px 10px;
  width: 100%;
  cursor: pointer;
  padding: 20px 30px 20px 20px;
  background-color: inherit;
  color: #3c3c3c;
  font-family: "Montserrat";
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
`;
var LanguagesAddBtn = (0, import_styled.default)("button")`
  position: absolute;
  font-size: 30px;
  top: 7px;
  right: 15px;
  color: #afafaf;
`;
var Overlay = (0, import_styled.default)("div")`
  background: rgba(28, 97, 130, 0.1);
  bottom: 0;
  left: 0;
  opacity: ${(props) => props.active ? 1 : 0};
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 71px;
  transition: opacity 0.3s;
`;
var Logout = (0, import_styled.default)("button")`
  border: none;
  cursor: pointer;
  background-color: inherit;
  color: #afafaf;
  font-family: "Montserrat";
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 0;
`;
var PracticeLastAddedContainer = (0, import_styled.default)("div")`
  border-width: 2px 2px 4px;
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: solid #e5e5e5;
  position: sticky;
  margin-bottom: 54px;
  bottom: 24px;
`;
var PracticeLastAddedLink = (0, import_styled.default)(import_react.Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
var ErrorMessage = (0, import_styled.default)("p")`
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: #ea2b2b;
`;
var ExpProgressBlock = (0, import_styled.default)("section")`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  margin: 0 24px 24px;
  padding: 24px;
`;
var ExpProgressTitle = (0, import_styled.default)("h2")`
  color: #3c3c3c;
  font-size: 24px;
  line-height: 26px;
  margin: 0 0 25px;
  font-family: Montserrat;
  font-weight: 700;
`;
var FooterLine = (0, import_styled.default)("hr")`
  border: 0;
  border-top: 2px solid #e5e5e5;
  margin: 0 0 48px;
`;
var FooterText = (0, import_styled.default)("p")`
  text-align: center;
  color: #afafaf;
  font-family: Roboto;
  margin: 0;
`;
var SkillsListContainer = (0, import_styled.default)("section")`
  width: 65%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 95px);
`;
var TopicsLineBlock = (0, import_styled.default)("div")`
  width: 100%;
  max-width: 440px;
  margin: 0 auto 38px auto;
`;

// app/components/Progress.tsx
var Progress = () => {
  const { progress } = useSkill();
  return /* @__PURE__ */ React.createElement(ProgressBarContainer, null, /* @__PURE__ */ React.createElement(ProgressLeaveLesson, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: close_default,
    alt: "Close the topic",
    width: 16,
    height: 16,
    style: { verticalAlign: "initial" }
  })), /* @__PURE__ */ React.createElement(ProgressBar, {
    progress
  }));
};
var Progress_default = Progress;

// app/modules/Lesson/reducer.ts
init_react();
var import_react2 = require("react");
var continueContent = (content, lessonSteps) => lessonSteps.length > 0 ? lessonSteps.shift(0, 1) : content;
var basicState = {
  progress: 0,
  stepNumber: 0,
  content: {
    id: "",
    number: 0,
    answer: [""],
    stepType: "",
    question: "",
    text: "",
    keywords: [""],
    definition: "",
    variants: [],
    isToChoose: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    chapter: 1,
    languageId: ""
  },
  lessonSteps: [],
  maxSteps: 0,
  topicState: { status: "idle", formDisabled: false, buttonDisabled: true }
};
function skillReducer(state, action10) {
  const { content, stepNumber, maxSteps, lessonSteps, topicState } = state;
  const positiveState = __spreadProps(__spreadValues({}, state), {
    progress: stepNumber / maxSteps,
    topicState: {
      status: "right",
      formDisabled: true,
      buttonDisabled: false
    }
  });
  const negativeState = __spreadProps(__spreadValues({}, state), {
    lessonSteps: [...lessonSteps, content],
    stepNumber: stepNumber - 1,
    topicState: {
      status: "wrong",
      formDisabled: true,
      buttonDisabled: false
    }
  });
  switch (action10.type) {
    case "CONTINUE" /* continue */:
      const isResults = stepNumber === maxSteps;
      return __spreadProps(__spreadValues({}, state), {
        stepNumber: stepNumber + 1,
        content: continueContent(content, lessonSteps),
        topicState: __spreadProps(__spreadValues({}, topicState), {
          status: isResults ? "results" : "idle",
          formDisabled: false,
          buttonDisabled: isResults ? false : true
        })
      });
    case "SETUP" /* setup */:
      const { steps } = action10;
      return __spreadProps(__spreadValues({}, basicState), {
        stepNumber: 1,
        lessonSteps: steps,
        maxSteps: steps.length,
        content: steps.shift()
      });
    case "RESULTS" /* results */:
      return __spreadProps(__spreadValues({}, state), {
        stepNumber: stepNumber + 1,
        topicState: __spreadProps(__spreadValues({}, topicState), { status: "results" })
      });
    case "SET_STATE_RIGHT" /* setStateRight */:
      return positiveState;
    case "SET_STATE_WRONG" /* setStateWrong */:
      return negativeState;
    case "SET_CHECK_DISABLED" /* setCheckDisabled */:
      const { disabled } = action10;
      return __spreadProps(__spreadValues({}, state), {
        topicState: __spreadProps(__spreadValues({}, topicState), { buttonDisabled: disabled })
      });
    case "UPDATE_STATE" /* updateState */:
      const { update } = action10;
      return __spreadValues(__spreadValues({}, state), update);
    default: {
      throw new Error(`Unsupported action: ${action10}`);
    }
  }
}
function useSkillReducer({
  initialState = basicState,
  reducer: reducer3 = skillReducer
} = {}) {
  const [state, dispatch] = (0, import_react2.useReducer)(reducer3, initialState);
  const { content, progress, topicState, stepNumber, maxSteps } = state;
  const continueTopic = () => dispatch({ type: "CONTINUE" /* continue */ });
  const setup = (steps) => dispatch({ type: "SETUP" /* setup */, steps });
  const showResults = () => dispatch({ type: "RESULTS" /* results */ });
  const setStateRight = () => dispatch({ type: "SET_STATE_RIGHT" /* setStateRight */ });
  const setStateWrong = () => dispatch({ type: "SET_STATE_WRONG" /* setStateWrong */ });
  const setCheckDisabled = (disabled) => dispatch({ type: "SET_CHECK_DISABLED" /* setCheckDisabled */, disabled });
  const updateState = (update) => dispatch({ type: "UPDATE_STATE" /* updateState */, update });
  return {
    content,
    progress,
    topicState,
    stepNumber,
    maxSteps,
    continueTopic,
    setup,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    updateState
  };
}

// app/modules/Lesson/index.tsx
var import_react14 = require("@remix-run/react");

// app/modules/Lesson/components/Results.tsx
init_react();
var import_remix3 = __toESM(require_remix());

// app/modules/Lesson/components/lib.ts
init_react();
var import_styled2 = __toESM(require("@emotion/styled"));

// app/styles/right.svg
var right_default = "/build/_assets/right-SZKSLJM7.svg";

// app/styles/wrong.svg
var wrong_default = "/build/_assets/wrong-N2O2S4W4.svg";

// app/modules/Lesson/components/lib.ts
var LessonContainer = (0, import_styled2.default)("section")`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  outline: none;
`;
var LessonFooter = (0, import_styled2.default)("section")`
  padding: 0 40px;
  width: 100%;
  height: 140px;
  border-top: 2px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${({ status }) => status === "right" ? "#d7ffb8" : status === "wrong" ? "#ffdfe0" : "#fff"};
  color: ${({ status }) => status === "right" ? "#58a700" : status === "wrong" ? "#ea2b2b" : "#fff"};
`;
var LessonFooterInner = (0, import_styled2.default)("div")`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
var LessonFooterMessage = (0, import_styled2.default)("div")`
  width: 100%;
  display: ${({ status }) => status === "right" || status === "wrong" ? "flex" : "none"};
  align-items: center;
`;
var LessonFooterTitle = (0, import_styled2.default)("h2")`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  line-height: 30px;
  font-size: 24px;
  letter-spacing: 0.2px;
`;
var LessonFooterText = (0, import_styled2.default)("p")`
  margin: 5px 0 0 0;
  font-size: 17px;
  font-family: "Roboto";
  overflow-y: scroll;
  max-height: 60px;
`;
var LessonButton = (0, import_styled2.default)("button")`
  border: 0 solid transparent;
  background-color: ${(props) => props.stateWrong ? "#ff4b4b" : props.stateRight ? "#58cc02" : props.active ? "#78C83D" : props.skip ? "inherit" : "#E5E5E5"};
  color: ${(props) => props.active ? "#fff" : "#AFAFAF"};
  border-color: ${(props) => props.stateWrong ? "#ea2b2b" : props.stateRight ? "#58a700" : props.skip ? "#e5e5e5" : "white"};
  border-width: ${(props) => props.skip ? "2px" : 0};
  height: 50px;
  width: 150px;
  cursor: ${(props) => props.active || props.skip ? "pointer" : "default"};
  text-transform: uppercase;
  font-family: "Montserrat";
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: ${(props) => props.hidden ? "none" : "block"};
`;
var LessonBody = (0, import_styled2.default)("div")`
  // margin: 72px 29% 4% 32%; // 4% instead of 240px
  margin: 72px 30% 4%;
  flex-grow: 1;
  position: relative;
  max-height: calc(100% - 240px);
`;
var LessonBodyTitle = (0, import_styled2.default)("h3")`
  font-family: "Montserrat";
  font-size: 23px;
  font-weight: 700;
  color: #4b4b4b;
  text-align: center;
  margin-bottom: 13px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: #fff;
`;
var LessonBodyMessage = (0, import_styled2.default)("div")`
  padding: 12px 15px 12px 21px;
  border: 2px solid #dedede;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #4c4c4c;
  margin: 0 21px;
  position: relative;
  z-index: 1;
`;
var LessonBodyVariants = (0, import_styled2.default)("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
var LessonBodyVariant = (0, import_styled2.default)("div")`
  position: relative;
  border-radius: 15px;
  border: 2px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  cursor: pointer;
  padding: 18px 0;
  text-align: center;
  margin-top: 14px;
  border-color: ${(props) => props.active ? "#98D6FC" : props.stateRight ? "#B6EB7E" : props.stateWrong ? "#E9A8A6" : null};
  background-color: ${(props) => props.active ? "#E1F3FE" : "inherit"};
  color: ${(props) => props.active ? "#4897D1" : "inherit"};
`;
var LessonBodyWelcome = (0, import_styled2.default)("div")``;
var LessonBodyResults = (0, import_styled2.default)("div")``;
var VariantItem = (0, import_styled2.default)("button")`
  background-color: ${(props) => props.isFocused ? "rgb(221, 244, 255)" : "inherit"};
  height: 60px;
  border: 1px solid;
  border-color: ${(props) => props.isFocused ? "rgb(132, 216, 255)" : "#e5e5e5"};
  border-radius: 12px;
  border-width: 2px 2px 4px;
  outline: 0;
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  text-align: center;
  color: ${(props) => props.isFocused ? "rgb(24, 153, 214)" : "#4b4b4b"};
  font-size: 19px;
  line-height: 1.4;
  padding: 12px 16px;
  width: 100%;
`;
var LessonTitle2 = (0, import_styled2.default)("h1")`
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.25;
  color: #3c3c3c;
  text-align: left;
  font-weight: 700;
`;
var LessonQuestion = (0, import_styled2.default)("p")`
  font-size: 19px;
  line-height: 39px;
  font-family: "Montserrat", sans-serif;
  color: #3c3c3c;
  padding: 12px 24px;
  margin-left: 8px;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 15px;
  box-sizing: border-box;
`;
var LessonQuestionTriangleContainer = (0, import_styled2.default)("div")`
  height: 10px;
  overflow: hidden;
  width: 20px;
  position: absolute;
  left: -5px;
  margin: 15px 0;
  top: calc(50% - 15px);
  transform: translateY(-50%) rotate(-90deg);
`;
var LessonQuestionTriangle = (0, import_styled2.default)("span")`
  box-sizing: border-box;
  position: absolute;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 2px;
  content: "";
  height: 14.14427px;
  left: 50%;
  transform: rotate(45deg);
  transform-origin: top left;
  width: 14.14427px;
`;
var LessonFooterIcon = (0, import_styled2.default)("div")`
  border-radius: 98px;
  display: block;
  float: left;
  height: 80px;
  width: 80px;
  // background: url(${(props) => props.stateRight ? right_default : wrong_default});
  background: url(${({ status }) => status === "right" ? right_default : wrong_default});

  background-position: ${({ status }) => status === "right" ? "-145px -64px" : "-183px -65px"};
  background-color: #fff;
  display: block;
`;
var ResultsContainer = (0, import_styled2.default)("section")`
  display: flex;
  height: calc(100vh - 140px);
  justify-content: center;
`;
var ResultsTitle = (0, import_styled2.default)("h2")`
  margin: 0;
  font-family: "Montserrat";
`;
var ResultsLeftBlock = (0, import_styled2.default)("div")`
  padding: 50px 100px;
  width: calc(50% - 1px);
`;
var ResultsSeparateLine = (0, import_styled2.default)("div")`
  width: 4px;
  background-color: #e5e5e5;
`;

// app/modules/Lesson/components/Results.tsx
function Results({ refName }) {
  return /* @__PURE__ */ React.createElement(ResultsContainer, null, /* @__PURE__ */ React.createElement(ResultsLeftBlock, null, /* @__PURE__ */ React.createElement(ResultsTitle, null, "Right answers and mistakes")), /* @__PURE__ */ React.createElement(ResultsSeparateLine, null), /* @__PURE__ */ React.createElement(ResultsLeftBlock, null), /* @__PURE__ */ React.createElement(import_remix3.Form, {
    method: "post",
    ref: refName,
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      top: -1e3,
      left: -1e3
    }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "exp",
    value: "16",
    readOnly: true
  })));
}

// app/modules/Lesson/components/Footer.tsx
init_react();
var import_react3 = require("@remix-run/react");
function Footer({ checkAnswer }) {
  const transition = (0, import_react3.useTransition)();
  const { topicState, content, continueTopic } = useSkill();
  const { answer } = content;
  const { status, buttonDisabled } = topicState;
  const buttonText = transition.state === "submitting" ? "Saving..." : transition.state === "loading" ? "Saved!" : status === "right" ? "Next" : status !== "idle" ? "Continue" : "Check";
  const handleContinue = (evt) => {
    if (buttonText === "Saving..." || buttonText === "Saved!") {
      return evt.preventDefault();
    }
    if (status === "idle") {
      return checkAnswer();
    }
    continueTopic();
  };
  const handleSkip = () => {
    continueTopic();
  };
  return /* @__PURE__ */ React.createElement(LessonFooter, {
    status
  }, /* @__PURE__ */ React.createElement(LessonFooterInner, null, /* @__PURE__ */ React.createElement(LessonButton, {
    style: {},
    onClick: handleSkip,
    skip: true,
    hidden: status !== "idle"
  }, "Skip"), /* @__PURE__ */ React.createElement(LessonButton, {
    skip: true,
    hidden: status !== "idle",
    style: {
      borderWidth: 0,
      width: "auto"
    }
  }, "Use word bank"), /* @__PURE__ */ React.createElement(LessonFooterMessage, {
    status
  }, (status === "right" || status === "wrong") && /* @__PURE__ */ React.createElement(LessonFooterIcon, {
    status
  }), /* @__PURE__ */ React.createElement("div", {
    style: { marginLeft: 16, width: "calc(100% - 209px)" }
  }, /* @__PURE__ */ React.createElement(LessonFooterTitle, null, status === "wrong" ? "Right answer: " : "Great!"), /* @__PURE__ */ React.createElement(LessonFooterText, null, " ", answer.join(" ")))), /* @__PURE__ */ React.createElement(LessonButton, {
    active: !buttonDisabled,
    stateRight: status === "right",
    stateWrong: status === "wrong",
    onClick: (evt) => {
      if (buttonDisabled) {
        return;
      }
      handleContinue(evt);
    },
    disabled: buttonText === "Saving..." || buttonText === "Saved!",
    style: { marginLeft: status === "results" ? "auto" : 0 }
  }, buttonText)));
}

// app/modules/Lesson/components/InsertWords/index.tsx
init_react();

// app/utils.ts
init_react();
var import_react4 = require("@remix-run/react");
var import_react5 = require("react");
var useFocus = (dependency) => {
  const ref = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.focus();
  }, [dependency]);
  return ref;
};
var isItemInArray = (arr, item) => {
  return arr.find((arrItem) => arrItem === item);
};
var doesItemContainSign = (item) => {
  const newItem = item.split("").slice(0, -1).join("");
  switch (item.slice(-1)) {
    case ",": {
      return {
        newItem,
        sign: ","
      };
    }
    case ".": {
      return {
        newItem,
        sign: "."
      };
    }
    case "?": {
      return {
        newItem,
        sign: "?"
      };
    }
    case "!": {
      return {
        newItem,
        sign: "!"
      };
    }
    default: {
      return { newItem: item, sign: "" };
    }
  }
};
var doesArrayContainItems = (items, arr) => {
  const filtered = arr.filter((arrItem) => items.find((item) => item.trim().toLocaleLowerCase() === arrItem.trim().toLowerCase()));
  return {
    state: !!filtered.length,
    length: filtered.length,
    items: filtered,
    formatted: filtered.map((item) => item.trim())
  };
};
var getWeekDay = () => {
  return getShortWeekday(new Date());
};
function getShortWeekday(day) {
  return day.toLocaleDateString("en-US", {
    weekday: "short"
  });
}
var getCurrentWeek = () => {
  const week = [];
  for (let i = 6; i >= 0; i--) {
    const today = new Date();
    today.setDate(today.getDate() - i);
    week.push(getShortWeekday(today));
  }
  return week;
};
var areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    false;
  }
  const filtered = arr1.filter((arr1Item, idx) => arr1Item === arr2[idx]);
  return filtered.length === arr1.length;
};
var getTodayDate = () => {
  const today = new Date();
  return today.getFullYear() + today.getUTCMonth() + today.getDate();
};

// app/modules/Lesson/components/Lesson.tsx
init_react();
var import_react6 = __toESM(require("react"));
var Lesson = (_a) => {
  var _b = _a, {
    initialValue = "",
    disabledCondition,
    checkAnswer,
    keyDownHandle,
    children
  } = _b, props = __objRest(_b, [
    "initialValue",
    "disabledCondition",
    "checkAnswer",
    "keyDownHandle",
    "children"
  ]);
  const { topicState, continueTopic, setCheckDisabled } = useSkill();
  const { status, formDisabled, buttonDisabled } = topicState;
  const [userAnswer, setUserAnswer] = (0, import_react6.useState)(initialValue);
  const lessonRef = useFocus(status);
  (0, import_react6.useEffect)(() => {
    if (disabledCondition === null) {
      return;
    }
    if (disabledCondition(userAnswer)) {
      return setCheckDisabled(false);
    }
    return setCheckDisabled(true);
  }, [userAnswer]);
  const onKeyDownHandle = (event) => {
    if (keyDownHandle) {
      keyDownHandle(event, setUserAnswer);
    }
    if (event.key !== "Enter" || buttonDisabled) {
      return;
    }
    event.preventDefault();
    if (status === "idle" && checkAnswer) {
      return checkAnswer(userAnswer);
    }
    return continueTopic();
  };
  (0, import_react6.useEffect)(() => {
    if (!formDisabled && setUserAnswer) {
      setUserAnswer(initialValue);
    }
  }, [formDisabled]);
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    tabIndex: 0,
    onKeyDown: onKeyDownHandle,
    ref: lessonRef,
    style: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      flexGrow: 1
    }
  }, /* @__PURE__ */ import_react6.default.createElement(LessonBody, null, import_react6.default.Children.map(children, (child) => {
    return import_react6.default.cloneElement(child, __spreadValues({
      userAnswer,
      setUserAnswer,
      keyDownCheck: onKeyDownHandle,
      checkAnswer: (uAnswer) => checkAnswer(uAnswer, setUserAnswer)
    }, props));
  })), /* @__PURE__ */ import_react6.default.createElement(Footer, {
    checkAnswer: () => checkAnswer(userAnswer)
  }));
};

// app/modules/Lesson/components/InsertWords/InsertWordsScreen.tsx
init_react();
var import_react9 = require("react");

// app/modules/Constructor/Levels/components/lib.tsx
init_react();
var import_styled3 = __toESM(require("@emotion/styled"));
var StepContent = (0, import_styled3.default)("div")`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 60px 24px;
  min-height: 300px;
  margin-top: 20px;
`;
var StepHeader = (0, import_styled3.default)("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
`;
var ChooseStyle = (0, import_styled3.default)("div")`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  justify-content: center;
  align-items: self-end;
  margin: auto 0;
`;
var StyleButton = (0, import_styled3.default)("button")`
  padding: 15px;
  border: none;
  cursor: pointer;
  font-family: "Roboto";
`;
var InsertWordsTextBlock = (0, import_styled3.default)("div")`
  min-height: 200px;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  position: relative;
  z-index: ${(props) => props.showText ? "2" : "0"};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
  font-size: 19px;
  font-family: "Roboto";
  line-height: 40px;
`;
var InsertWordsInput = (0, import_styled3.default)("input")`
  outline: none;
  border: none;
  font-size: 19px;
  // margin: 0 7px -2px;
  margin: 9px 7px 0;
  width: ${(props) => props.length * 13}px;
  // width: ${(props) => props.length * 20}px;
  border-bottom: 2px solid #afafaf;
  cursor: ${(props) => props.isToChoose ? "pointer" : "text"};
  // text-align: center;
`;
var VariantItemInput = (0, import_styled3.default)("input")`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  outline: 0;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  text-align: center;
  color: #4b4b4b;
  font-size: 19px;
  line-height: 1.4;
  padding: 12px 16px;
  width: 100%;
`;
var VariantItemNumber = (0, import_styled3.default)("span")`
  border: 2px solid #e5e5e5;
  border-color: ${(props) => props.isConnected ? "green" : props.isFocused ? "rgb(132, 216, 255)" : "#e5e5e5"};
  border-radius: 8px;
  color: ${(props) => props.isConnected ? "green" : props.isFocused ? "rgb(24, 153, 214)" : "#afafaf"};
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 12px;
  left: 16px;
  z-index: 1;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
`;

// app/modules/Lesson/components/InsertWords/Puzzle.tsx
init_react();

// app/modules/Lesson/components/InsertWords/lib.ts
init_react();
var import_styled4 = __toESM(require("@emotion/styled"));
var PuzzleContainer = (0, import_styled4.default)("section")`
  width: 100%;
`;
var PuzzleList = (0, import_styled4.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 30px 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
`;
var PuzzleItem = (0, import_styled4.default)("li")`
  margin: 0 16px 8px 0;
  position: ${(props) => props.alreadyChoosen ? "absolute" : "relative"};
  top: ${(props) => props.alreadyChoosen ? "-1000px" : "0"};
`;
var VariantsContainer = (0, import_styled4.default)("section")`
  width: 100%;
  margin-top: 20px;
  outline: none;
`;
var VariantsList = (0, import_styled4.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
var VariantsItem = (0, import_styled4.default)("li")`
  position: relative;
  margin-bottom: 8px;
  width: 49%;
`;

// app/modules/Lesson/components/InsertWords/Puzzle.tsx
function Puzzle({
  contentAnswer,
  values,
  setValues
}) {
  const selectVariant = (variant) => {
    setValues((prevArray) => {
      const empty = prevArray.find((item) => {
        if (item === " " || item.length === 0 || !!item === false) {
          return item;
        }
      });
      const inx = prevArray.indexOf(empty);
      if (inx.toString() && inx !== -1) {
        const newArr = prevArray;
        newArr[inx] = variant;
        return [...newArr];
      }
      return [...prevArray, variant];
    });
  };
  return /* @__PURE__ */ React.createElement(PuzzleContainer, null, /* @__PURE__ */ React.createElement(PuzzleList, null, contentAnswer.map((answer, idx) => {
    const alreadyChoosen = !!values.find((value) => value === answer);
    return /* @__PURE__ */ React.createElement(PuzzleItem, {
      alreadyChoosen,
      key: idx
    }, /* @__PURE__ */ React.createElement(VariantItem, {
      type: "button",
      isFocused: false,
      onClick: () => selectVariant(answer),
      disabled: alreadyChoosen
    }, answer));
  })));
}

// app/modules/Lesson/components/InsertWords/Variants.tsx
init_react();
var import_react7 = require("react");
function Variants({
  variants,
  values,
  setValues,
  topicState,
  keyDownCheck
}) {
  const myRef = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    if (topicState.status === "idle") {
      const timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null ? void 0 : _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [topicState.status]);
  const KeyDownHandler = (e) => {
    variants.forEach((variant, idx) => {
      if (e.key == idx + 1) {
        setValues([variant.value]);
      }
    });
  };
  return /* @__PURE__ */ React.createElement(VariantsContainer, {
    tabIndex: 0,
    ref: myRef,
    onKeyDown: (e) => keyDownCheck(e, (e2) => KeyDownHandler(e2))
  }, /* @__PURE__ */ React.createElement(VariantsList, null, variants.map(({ value }, idx) => /* @__PURE__ */ React.createElement(VariantsItem, {
    key: idx,
    onClick: () => setValues([value])
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    isFocused: value === values[0]
  }, idx + 1), /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: value === values[0]
  }, value)))));
}

// app/modules/Lesson/components/InsertWords/Text.tsx
init_react();
var import_react8 = require("react");
function Text({
  text,
  contentAnswer,
  isToChoose,
  values,
  setValues,
  topicState,
  variants
}) {
  (0, import_react8.useEffect)(() => {
    if (!topicState.formDisabled) {
      setValues([...new Array(contentAnswer.length).fill(" ")]);
    }
  }, [topicState.formDisabled]);
  const myRef = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    if (topicState.status === "idle" && !isToChoose && !variants.length) {
      const timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null ? void 0 : _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [topicState.status]);
  const handleChange = (evt, index) => {
    setValues((prevArray) => {
      const newArray = prevArray;
      newArray[index] = evt.target.value;
      return [...newArray];
    });
  };
  const handleInputClick = (evt, index) => {
    const target = evt.currentTarget;
    if (target.value === "" || target.value === " ") {
      return;
    }
    if (isToChoose || variants) {
      target.blur();
      setValues((prevArray) => {
        prevArray[index] = " ";
        return [...prevArray];
      });
    }
  };
  let firstInput = 0;
  return /* @__PURE__ */ React.createElement(import_react8.Fragment, null, text.split(" ").map((textItem, idx) => {
    const { newItem, sign } = doesItemContainSign(textItem);
    if (contentAnswer.includes(newItem)) {
      return contentAnswer.map((answerItem, index) => {
        if (newItem !== answerItem) {
          return null;
        }
        firstInput = firstInput && index;
        return /* @__PURE__ */ React.createElement(import_react8.Fragment, {
          key: index
        }, /* @__PURE__ */ React.createElement(InsertWordsInput, {
          type: "text",
          id: `input${0}`,
          isToChoose,
          length: newItem.length,
          value: values[index],
          onChange: (evt) => handleChange(evt, index),
          onClick: (evt) => handleInputClick(evt, index),
          disabled: topicState.formDisabled,
          ref: firstInput === index ? myRef : null
        }), /* @__PURE__ */ React.createElement("span", {
          style: { marginRight: 4 }
        }, sign));
      });
    }
    return /* @__PURE__ */ React.createElement("span", {
      style: { marginRight: 4 },
      key: `text${idx}`
    }, textItem);
  }));
}

// app/modules/Lesson/components/InsertWords/InsertWordsScreen.tsx
function InsertWordsScreen({
  userAnswer,
  setUserAnswer,
  keyDownCheck
}) {
  const { content, topicState } = useSkill();
  const { text, isToChoose, variants, answer } = content;
  const [values, setValues] = (0, import_react9.useState)([...new Array(answer.length).fill(" ")]);
  (0, import_react9.useEffect)(() => {
    if (areArraysEqual(userAnswer, values) && !isToChoose) {
      return;
    }
    if (values.length !== answer.length) {
      return;
    }
    setUserAnswer(values);
  }, [values]);
  (0, import_react9.useEffect)(() => {
    if (isToChoose) {
      return;
    }
    if (userAnswer[0].length) {
      setValues([...userAnswer]);
    }
  }, [userAnswer]);
  return /* @__PURE__ */ React.createElement(import_react9.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Add missing words"), /* @__PURE__ */ React.createElement(InsertWordsTextBlock, null, /* @__PURE__ */ React.createElement(Text, {
    values,
    setValues,
    contentAnswer: answer,
    text,
    isToChoose,
    variants,
    topicState
  }), variants && /* @__PURE__ */ React.createElement(Variants, {
    values,
    variants,
    setValues,
    topicState,
    keyDownCheck
  }), isToChoose && /* @__PURE__ */ React.createElement(Puzzle, {
    values,
    setValues,
    contentAnswer: answer
  })));
}

// app/modules/Lesson/components/InsertWords/index.tsx
function InsertWords() {
  const { content, setStateRight, setStateWrong } = useSkill();
  const initialUserAnswer = [""];
  const checkAnswer = (userAnswer) => {
    const { formatted } = doesArrayContainItems(content.answer, userAnswer);
    if (areArraysEqual(content.answer, formatted)) {
      return setStateRight();
    }
    return setStateWrong();
  };
  return content.stepType === "Insert" ? /* @__PURE__ */ React.createElement(Lesson, {
    disabledCondition: (userAnswer) => {
      if (userAnswer.find((uA) => {
        if (uA === " " || uA === "") {
          return uA;
        }
      })) {
        return false;
      }
      return userAnswer.length === content.answer.length;
    },
    initialValue: initialUserAnswer,
    checkAnswer
  }, /* @__PURE__ */ React.createElement(InsertWordsScreen, null)) : null;
}

// app/modules/Lesson/components/Pairs.tsx
init_react();

// app/modules/Lesson/components/PairsScreen.tsx
init_react();
var import_react10 = require("react");
function PairsScreen({ variants, checkAnswer, userAnswer }) {
  const [activeIdx, setActiveIdx] = (0, import_react10.useState)(-1);
  const isVariantDisabled = (idx) => {
    return userAnswer.find((answerItem) => answerItem.includes((idx + 1).toString()));
  };
  return /* @__PURE__ */ React.createElement(import_react10.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Connect pairs"), /* @__PURE__ */ React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, variants.map(({ value, isFocused }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: { marginBottom: 5, position: "relative", width: "48%" },
    onClick: (evt) => {
      const target = evt.target;
      if (isVariantDisabled(idx)) {
        return;
      }
      if (activeIdx === -1) {
        return setActiveIdx(Number(target.id));
      }
      checkAnswer(`${activeIdx}${target.id}`);
      setActiveIdx(-1);
    }
  }, /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    id: (idx + 1).toString(),
    style: {
      cursor: isVariantDisabled(idx) ? "default" : "pointer",
      color: activeIdx === idx + 1 ? "#1899d6" : isVariantDisabled(idx) ? "#e5e5e5" : "#4b4b4b",
      borderColor: activeIdx === idx + 1 ? "#84d8ff" : isVariantDisabled(idx) ? "#e5e5e5" : "#e5e5e5",
      backgroundColor: activeIdx === idx + 1 ? "#ddf4ff" : "#fff"
    },
    disabled: isVariantDisabled(idx),
    isFocused
  }, value)))));
}

// app/modules/Lesson/components/Pairs.tsx
function Pairs() {
  const { content, setStateRight, updateState, topicState } = useSkill();
  const { answer, variants } = content;
  const initialValue = [""];
  const checkAnswer = (uAns, setUserAnswer) => {
    let spliceIdx = 0;
    if (answer.find((answerItem, idx) => {
      spliceIdx = idx;
      return answerItem === uAns || answerItem.split("").reverse().join("") === uAns;
    })) {
      const newContent = content;
      newContent.answer.splice(spliceIdx, 1);
      setUserAnswer((prevUserAnswer) => [...prevUserAnswer, uAns]);
      if (newContent.answer.length === 0) {
        return setStateRight();
      }
      return updateState({ content: newContent });
    } else {
      setUserAnswer((prevUserAnswer) => [...prevUserAnswer]);
      return updateState({
        topicState: __spreadProps(__spreadValues({}, topicState), { buttonDisabled: true })
      });
    }
  };
  return content.stepType === "Pairs" ? /* @__PURE__ */ React.createElement(Lesson, {
    initialValue,
    disabledCondition: null,
    checkAnswer
  }, /* @__PURE__ */ React.createElement(PairsScreen, {
    variants
  })) : null;
}

// app/modules/Lesson/components/QuestionAnswer/index.tsx
init_react();

// app/modules/Lesson/components/QuestionAnswer/QuestionAnswerScreen.tsx
init_react();
var import_react11 = require("react");

// app/styles/duo.svg
var duo_default = "/build/_assets/duo-4STWGEJ4.svg";

// app/modules/Lesson/components/QuestionAnswer/QuestionAnswerScreen.tsx
function QuestionAnswerScreen({
  question,
  userAnswer,
  setUserAnswer
}) {
  const { topicState } = useSkill();
  const myRef = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => {
    if (topicState.status === "idle") {
      const timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null ? void 0 : _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [topicState.status]);
  return /* @__PURE__ */ React.createElement(import_react11.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Answer the question"), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement("img", {
    src: duo_default,
    alt: "Duo",
    height: 150,
    style: { marginBottom: -60 }
  }), /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(LessonQuestion, null, question), /* @__PURE__ */ React.createElement(LessonQuestionTriangleContainer, null, /* @__PURE__ */ React.createElement(LessonQuestionTriangle, null)))), /* @__PURE__ */ React.createElement(Textarea, {
    id: "answer",
    name: "answer",
    placeholder: "Enter your answer",
    value: userAnswer,
    onChange: (e) => setUserAnswer(e.target.value),
    disabled: topicState.formDisabled,
    ref: myRef
  }));
}

// app/modules/Lesson/components/QuestionAnswer/index.tsx
function QuestionAnswerPractice() {
  const { content, setStateWrong, setStateRight, setCheckDisabled } = useSkill();
  const checkAnswer = (userAnswer) => {
    const { state, length } = doesArrayContainItems(content.answer, userAnswer.split(" "));
    if (!state) {
      return setStateWrong();
    }
    if (doesArrayContainItems(content.keywords, userAnswer.split(" ")).length === content.keywords.length) {
      if (length < content.answer.length) {
        return setStateRight();
      }
      return setStateRight();
    }
    if (length < content.answer.length * 0.8) {
      return setStateWrong();
    }
  };
  return content.stepType === "Question" ? /* @__PURE__ */ React.createElement(Lesson, {
    checkAnswer,
    disabledCondition: (userAnswer) => userAnswer.length > 0
  }, /* @__PURE__ */ React.createElement(QuestionAnswerScreen, {
    question: content.question
  })) : null;
}

// app/modules/Lesson/components/Variants.tsx
init_react();

// app/modules/Constructor/Levels/components/VariantsScreen.tsx
init_react();
var import_react12 = require("react");
function VariantsScreen({
  question,
  variants,
  userAnswer,
  setUserAnswer
}) {
  return /* @__PURE__ */ React.createElement(import_react12.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle, null, "Choose right variant"), /* @__PURE__ */ React.createElement("b", null, question), /* @__PURE__ */ React.createElement("ul", {
    style: { listStyleType: "none", padding: 0, margin: 0 }
  }, variants.map(({ value }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: { position: "relative", marginBottom: 8 },
    onClick: () => setUserAnswer(value)
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    isFocused: value === userAnswer
  }, idx + 1), /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: value === userAnswer
  }, value)))));
}

// app/modules/Lesson/components/Variants.tsx
function VariantsPractice({}) {
  const {
    content,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    topicState
  } = useSkill();
  const { question, variants, stepType } = content;
  const checkAnswer = (userAnswer) => {
    if (userAnswer === content.answer[0]) {
      return setStateRight();
    }
    return setStateWrong();
  };
  const handleOnKeyDown = (e, setUserAnswer) => {
    if (e.key === "1") {
      return setUserAnswer(variants[0].value);
    }
    if (e.key === "2") {
      return setUserAnswer(variants[1].value);
    }
    if (e.key === "3") {
      return setUserAnswer(variants[2].value);
    }
  };
  return stepType === "Variants" ? /* @__PURE__ */ React.createElement(Lesson, {
    disabledCondition: (userAnswer) => userAnswer.length,
    checkAnswer,
    keyDownHandle: handleOnKeyDown
  }, /* @__PURE__ */ React.createElement(VariantsScreen, {
    question,
    variants
  })) : null;
}

// app/modules/Lesson/index.tsx
var SkillContext = (0, import_react13.createContext)({});
SkillContext.displayName = "SkillContext";
function useSkill() {
  const context = (0, import_react13.useContext)(SkillContext);
  if (context === void 0) {
    throw new Error("useSkill must be used within a <Lesson />");
  }
  return context;
}
function Skill({ steps }) {
  const ref = (0, import_react13.useRef)(null);
  const sectionRef = (0, import_react13.useRef)(null);
  const {
    content,
    progress,
    topicState,
    stepNumber,
    maxSteps,
    setup,
    continueTopic,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    updateState
  } = useSkillReducer();
  const submit = (0, import_react14.useSubmit)();
  const transition = (0, import_react14.useTransition)();
  const submitting = transition.state !== "idle";
  (0, import_react13.useEffect)(() => {
    setup(steps);
  }, []);
  (0, import_react13.useEffect)(() => {
    var _a;
    if (topicState.status === "results") {
      return (_a = sectionRef.current) == null ? void 0 : _a.focus();
    }
  }, [topicState.status]);
  const onContinue = () => {
    if (topicState.status === "results") {
      if (submitting) {
        return;
      }
      return submit(ref.current, { replace: true });
    }
    return continueTopic();
  };
  const cox = {
    content,
    progress,
    topicState,
    stepNumber,
    maxSteps,
    setup,
    continueTopic: onContinue,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    updateState
  };
  return /* @__PURE__ */ React.createElement(SkillContext.Provider, {
    value: cox
  }, /* @__PURE__ */ React.createElement(LessonContainer, null, topicState.status === "results" ? /* @__PURE__ */ React.createElement("div", {
    ref: sectionRef,
    tabIndex: 0,
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        onContinue();
      }
    },
    style: { outline: "none" }
  }, /* @__PURE__ */ React.createElement(Results, {
    refName: ref
  }), /* @__PURE__ */ React.createElement(Footer, null)) : /* @__PURE__ */ React.createElement(import_react13.Fragment, null, /* @__PURE__ */ React.createElement(Progress_default, null), /* @__PURE__ */ React.createElement(QuestionAnswerPractice, null), /* @__PURE__ */ React.createElement(InsertWords, null), /* @__PURE__ */ React.createElement(VariantsPractice, null), /* @__PURE__ */ React.createElement(Pairs, null))));
}

// app/models/language.server.ts
init_react();

// app/session.server.ts
init_react();
var import_node = require("@remix-run/node");
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
init_react();
var import_bcryptjs = __toESM(require("bcryptjs"));
var emptyWeek = {
  Sun: 0,
  Mon: 0,
  Tue: 0,
  Wed: 0,
  Thu: 0,
  Fri: 0,
  Sat: 0
};
async function createUser(username, password) {
  const passwordHash = await import_bcryptjs.default.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      passwordHash,
      streak: 0,
      wasToday: false,
      weeklyActivity: __spreadValues({}, emptyWeek)
    }
  });
  await createInitialLanguage(user.id);
  return user;
}
async function updateUserStreak(id, wasToday, streak) {
  return prisma.user.update({
    where: { id },
    data: { wasToday, streak }
  });
}
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function verifyLogin(username, password) {
  const userWithPassword = await prisma.user.findUnique({
    where: { username }
  });
  if (!userWithPassword || !userWithPassword.passwordHash) {
    return null;
  }
  const isValid = await import_bcryptjs.default.compare(password, userWithPassword.passwordHash);
  if (!isValid) {
    return null;
  }
  const _a = userWithPassword, { passwordHash: _password } = _a, userWithoutPassword = __objRest(_a, ["passwordHash"]);
  return userWithoutPassword;
}
async function increaseTodayExp(request, value) {
  const user = await getUser(request);
  if (!user)
    throw new Error("User is undefined");
  return await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: __spreadProps(__spreadValues({}, user.weeklyActivity), {
        [`${getWeekDay()}`]: user.weeklyActivity[`${getWeekDay()}`] + value
      })
    }
  });
}
async function resetMultipleActivity(request, lastPracticed) {
  const today = getTodayDate();
  const user = await getUser(request);
  if (!user)
    throw new Error("User is undefined");
  const currentWeek = getCurrentWeek();
  const newWeek = user.weeklyActivity;
  let i = today - lastPracticed;
  if (i > 6) {
    return await prisma.user.update({
      where: { id: user.id },
      data: {
        weeklyActivity: __spreadValues({}, emptyWeek)
      }
    });
  }
  return await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: __spreadValues({}, newWeek)
    }
  });
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: false
  }
});
var USER_SESSION_KEY = "userId";
async function getSession(request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  const session = await getSession(request);
  const userId = session.get(USER_SESSION_KEY);
  return userId;
}
async function getUser(request) {
  const userId = await getUserId(request);
  if (userId === void 0)
    return null;
  const user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  redirectTo
}) {
  const session = await getSession(request);
  session.set(USER_SESSION_KEY, userId);
  return (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: 60 * 60 * 24 * 7
      })
    }
  });
}
async function logout(request) {
  const session = await getSession(request);
  return (0, import_node.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/models/language.server.ts
async function createInitialLanguage(userId) {
  return await prisma.language.create({
    data: { userId, active: true, title: "MyFirstLanguage" }
  });
}
async function createNewLanguage(request, title) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }
  await deactiveAllUserLanguages(userId);
  const language = await prisma.language.create({
    data: { userId, title, active: true }
  });
  return language;
}
async function deactiveAllUserLanguages(userId) {
  const languages = await prisma.language.updateMany({
    where: {
      userId
    },
    data: {
      active: false
    }
  });
  return languages;
}
async function setActiveLanguage(id) {
  const language = await prisma.language.findUnique({
    where: { id }
  });
  if (language) {
    await deactiveAllUserLanguages(language.userId);
  }
  await prisma.language.update({
    where: {
      id
    },
    data: {
      active: true
    }
  });
  return language;
}
async function getActiveLanguage(request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }
  try {
    const language = await prisma.language.findFirst({
      where: { userId, active: true }
    });
    return language;
  } catch {
    throw logout(request);
  }
}
async function getLanguages(request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }
  try {
    const languages = await prisma.language.findMany({
      where: { userId }
    });
    return languages;
  } catch {
    throw logout(request);
  }
}
async function whenLastPractice(request) {
  const languages = await getLanguages(request);
  const lastUpdatedTopic = await prisma.topic.findFirst({
    where: {
      projectId: { in: languages.map(({ id }) => id) }
    },
    select: { updatedAt: true },
    orderBy: { updatedAt: "desc" }
  });
  if (!lastUpdatedTopic) {
    return 0;
  }
  return lastUpdatedTopic.updatedAt;
}

// app/models/topic.server.ts
init_react();
async function updateCurrentChapter(topic) {
  const today = getTodayDate();
  return await prisma.topic.update({
    where: {
      title: topic.title
    },
    data: {
      currentChapter: topic.chapters !== topic.currentChapter ? topic.currentChapter + 1 : topic.currentChapter,
      updatedAt: today
    }
  });
}
async function checkTitleUnique(projectId, title) {
  const topics = await prisma.topic.findMany({ where: { projectId } });
  return !!topics.find((topic) => topic.title === title);
}
async function getLastAddedTopic(projectId, neighbors = false) {
  const lastAddedTopic = await prisma.topic.findFirst({
    where: { projectId },
    orderBy: { createdAt: "desc" }
  });
  if (neighbors) {
    return await prisma.topic.findMany({
      where: { projectId, lineNumber: lastAddedTopic == null ? void 0 : lastAddedTopic.lineNumber }
    });
  }
  return lastAddedTopic;
}

// route:/Users/newll/Desktop/MyDuo/app/routes/skill/$title/$chapter.tsx
function ErrorBoundary2() {
  const { title, chapter } = (0, import_remix4.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading skill with the title ${title} and chapter ${chapter}. Sorry.`);
}
var action = async ({ request, params }) => {
  const language = await getActiveLanguage(request);
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const title = params.title;
  const topic = await prisma.topic.findUnique({
    where: { title }
  });
  if (!topic) {
    throw new Error(`Skill with this title: ${title} is underfined`);
  }
  await updateCurrentChapter(topic);
  await increaseTodayExp(request, expData);
  return (0, import_remix4.redirect)(`/${language == null ? void 0 : language.title}/skills`);
};
var loader = async ({ params }) => {
  const topic = await prisma.topic.findFirst({
    where: { title: params.title }
  });
  if (!topic) {
    throw new Error("Skill is not found");
  }
  const lessons = await prisma.lesson.findMany({
    where: { id: { in: topic.lessonIDs }, chapter: Number(params.chapter) }
  });
  return lessons;
};
function LessonScreen() {
  const steps = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Skill, {
    steps
  });
}

// route:/Users/newll/Desktop/MyDuo/app/routes/skill/$title/practice.tsx
var practice_exports = {};
__export(practice_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action2,
  default: () => LessonScreen2,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
function ErrorBoundary3() {
  const { title } = (0, import_remix5.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading skill by the title ${title}. Sorry.`);
}
var action2 = async ({ request, params }) => {
  const language = await getActiveLanguage(request);
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const title = params.title;
  const topic = await prisma.topic.findUnique({
    where: { title }
  });
  if (!topic) {
    throw new Error(`Skill with this title: ${title} is underfined`);
  }
  await updateCurrentChapter(topic);
  await increaseTodayExp(request, expData);
  return (0, import_remix5.redirect)(`/${language == null ? void 0 : language.title}/skills`);
};
var loader2 = async ({ params }) => {
  const topic = await prisma.topic.findUnique({
    where: { title: params.title }
  });
  if (!topic) {
    throw new Error("Skill is not found");
  }
  const lessons = await prisma.lesson.findMany({
    where: { id: { in: topic.lessonIDs } }
  });
  return lessons;
};
function LessonScreen2() {
  const steps = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Skill, {
    steps
  });
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language.tsx
var language_exports = {};
__export(language_exports, {
  action: () => action3,
  default: () => ProjectPage,
  links: () => links,
  loader: () => loader3
});
init_react();
var import_node2 = require("@remix-run/node");
var import_react18 = __toESM(require("react"));
var import_remix6 = __toESM(require_remix());

// app/components/Menu.tsx
init_react();

// app/styles/study.svg
var study_default = "/build/_assets/study-IVNP72CR.svg";

// app/styles/shop.svg
var shop_default = "/build/_assets/shop-CXNB7XQS.svg";

// app/styles/study-active.svg
var study_active_default = "/build/_assets/study-active-FSDUXD4U.svg";

// app/styles/streak.svg
var streak_default = "/build/_assets/streak-6V23EBSZ.svg";

// app/styles/streak-active.svg
var streak_active_default = "/build/_assets/streak-active-KWRZ6YVX.svg";

// app/styles/shop-active.svg
var shop_active_default = "/build/_assets/shop-active-TP5GEMDP.svg";

// app/components/Menu.tsx
var import_react17 = require("react");

// app/components/Projects.tsx
init_react();
var import_react15 = require("react");
var import_react16 = require("@remix-run/react");
function Projects({
  onOverlay,
  languages
}) {
  const [showWindow, setShowWindow] = (0, import_react15.useState)(false);
  const [isNewLanguage, setIsNewLanguage] = (0, import_react15.useState)(false);
  const activeLanguage = languages == null ? void 0 : languages.find((item) => item.active);
  function showModal() {
    onOverlay(true);
    setShowWindow(true);
  }
  function hideModal() {
    onOverlay(false);
    setShowWindow(false);
  }
  return /* @__PURE__ */ React.createElement(import_react15.Fragment, null, /* @__PURE__ */ React.createElement(ActiveLanguageButton, {
    type: "button",
    onMouseEnter: showModal,
    onMouseLeave: hideModal
  }, activeLanguage == null ? void 0 : activeLanguage.title), /* @__PURE__ */ React.createElement(ActiveLanguageContainer, {
    onMouseEnter: showModal,
    onMouseLeave: hideModal
  }, showWindow && /* @__PURE__ */ React.createElement(LanguagesContainer, null, /* @__PURE__ */ React.createElement(LanguagesList, null, languages == null ? void 0 : languages.map((item, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: {
      backgroundColor: item.active ? "rgb(221, 244, 255)" : "inherit",
      order: item.active ? 0 : 1,
      borderRadius: item.active ? "10px 10px 0 0" : 0
    }
  }, /* @__PURE__ */ React.createElement(import_react16.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: item.id,
    readOnly: true
  }), /* @__PURE__ */ React.createElement(LanguagesItem, {
    type: "submit"
  }, item.title))))), /* @__PURE__ */ React.createElement("fieldset", {
    style: { position: "relative" }
  }, isNewLanguage ? /* @__PURE__ */ React.createElement(import_react16.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(LanguagesInput, {
    type: "text",
    placeholder: "Enter title",
    name: "newLanguage",
    onChange: showModal,
    required: true
  }), /* @__PURE__ */ React.createElement(LanguagesAddBtn, null, "+")) : /* @__PURE__ */ React.createElement(LanguagesItem, {
    type: "button",
    onClick: () => setIsNewLanguage(true)
  }, "Add new language")))));
}

// app/components/Menu.tsx
var MENU = [
  {
    title: "Study",
    link: "skills",
    icon: study_default,
    activeIcon: study_active_default
  },
  {
    title: "constructor",
    link: "constructor/new",
    icon: shop_default,
    activeIcon: shop_active_default
  }
];
var Menu = ({
  user,
  languages,
  onOverlay
}) => {
  return /* @__PURE__ */ React.createElement(MenuContainer, null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(HorizontalList, null, MENU.map(({ title, icon, activeIcon, link }) => /* @__PURE__ */ React.createElement(ListItem, {
    key: title
  }, /* @__PURE__ */ React.createElement(MenuNavLink, {
    to: `${link}`,
    className: "nav-link"
  }, ({ isActive }) => /* @__PURE__ */ React.createElement(import_react17.Fragment, null, /* @__PURE__ */ React.createElement(NavIcon, {
    src: isActive ? activeIcon : icon,
    alt: title
  }), title)))))), /* @__PURE__ */ React.createElement(HorizontalList, null, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement(Projects, {
    languages,
    onOverlay
  })), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("img", {
    src: (user == null ? void 0 : user.wasToday) ? streak_active_default : streak_default,
    alt: "streak",
    width: 25,
    height: 30,
    style: { marginRight: 6 }
  }), /* @__PURE__ */ React.createElement("b", {
    style: {
      fontFamily: "Roboto",
      color: (user == null ? void 0 : user.wasToday) ? "#ff9600" : "#e5e5e5"
    }
  }, user == null ? void 0 : user.streak)), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement("span", {
    style: { marginRight: 10 }
  }, user == null ? void 0 : user.username), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement(Logout, {
    type: "submit"
  }, "Logout"))))));
};
var Menu_default = Menu;

// app/models/lesson.server.ts
init_react();
async function createLessons(data) {
  const batch = await prisma.lesson.createMany({ data });
  const IDs = await prisma.lesson.findMany({
    select: { id: true },
    orderBy: { createdAt: "desc" },
    take: batch.count
  });
  return IDs.map((idItem) => idItem.id);
}
async function getTopics(languageId) {
  return await prisma.topic.findMany({
    take: 20,
    where: { projectId: languageId },
    select: {
      id: true,
      title: true,
      createdAt: true,
      chapters: true,
      currentChapter: true,
      lineNumber: true
    },
    orderBy: { createdAt: "desc" }
  });
}
async function getLastActivity(request) {
  const today = getTodayDate();
  const lastPracticed = await whenLastPractice(request);
  if (today - lastPracticed > 0) {
    await resetMultipleActivity(request, lastPracticed);
    return lastPracticed;
  }
  return today;
}
async function deleteTopicById(id) {
  return await prisma.topic.delete({ where: { id } });
}
async function deleteLessonsFromTopic(topicId) {
  const topic = await prisma.topic.findUnique({ where: { id: topicId } });
  return await prisma.lesson.deleteMany({
    where: { id: { in: topic == null ? void 0 : topic.lessonIDs } }
  });
}
async function getLessonsByTopicId(id) {
  const topic = await prisma.topic.findUnique({ where: { id } });
  return await prisma.lesson.findMany({
    where: { id: { in: topic.lessonIDs } }
  });
}

// app/styles/index.css
var styles_default = "/build/_assets/index-6SQCXJVG.css";

// route:/Users/newll/Desktop/MyDuo/app/routes/$language.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
async function action3({ request }) {
  const form = await request.formData();
  const id = form.get("id");
  const newLanguage = form.get("newLanguage");
  let project;
  if ((newLanguage == null ? void 0 : newLanguage.length) > 0) {
    project = await createNewLanguage(request, newLanguage);
  } else {
    project = await setActiveLanguage(id);
  }
  return (0, import_node2.redirect)(`/${project == null ? void 0 : project.title}/skills`);
}
var loader3 = async ({ request }) => {
  let user = await getUser(request);
  const languages = await getLanguages(request);
  const activeLanguage = languages == null ? void 0 : languages.find((item) => item.active);
  const today = getTodayDate();
  if (!user) {
    return (0, import_node2.redirect)("/login");
  }
  if (!activeLanguage) {
    throw new Error("Active language wasnt found");
  }
  const lastActive = await getLastActivity(request);
  if (today - lastActive > 1 || lastActive === 0) {
    user = await updateUserStreak(user.id, false, 0);
    return { user, languages };
  }
  if (today - lastActive === 1) {
    user = await updateUserStreak(user.id, false, user.streak);
    return { user, languages };
  }
  if (!user.wasToday && lastActive === today) {
    user = await updateUserStreak(user.id, true, user.streak + 1);
    return { user, languages };
  }
  if (user.wasToday) {
    return { user, languages };
  }
  if (!languages) {
    throw new Error("languages are not found");
  }
  return { user, languages };
};
function ProjectPage() {
  const { user, languages } = (0, import_remix6.useLoaderData)();
  const [isOverlay, setIsOverlay] = (0, import_react18.useState)(false);
  return /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(Menu_default, {
    user,
    languages,
    onOverlay: setIsOverlay
  }), /* @__PURE__ */ import_react18.default.createElement(Main, null, /* @__PURE__ */ import_react18.default.createElement(import_remix6.Outlet, null)), /* @__PURE__ */ import_react18.default.createElement(Overlay, {
    active: isOverlay
  }));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/constructor/$topicId.tsx
var topicId_exports = {};
__export(topicId_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action4,
  default: () => ConstructorEdit,
  loader: () => loader4
});
init_react();
var import_react30 = require("@remix-run/react");
var import_node3 = require("@remix-run/node");

// app/modules/Constructor/index.tsx
init_react();
var import_react29 = require("react");
var import_remix7 = __toESM(require_remix());

// app/modules/Constructor/components/TopicInfo.tsx
init_react();
var import_react19 = require("react");

// app/modules/Constructor/components/lib.ts
init_react();
var import_styled5 = __toESM(require("@emotion/styled"));
var LessonTitleInput = (0, import_styled5.default)("input")`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  border: none;
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
`;
var ConstructorMenu = (0, import_styled5.default)("div")`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  display: block;
  margin: 0 24px 24px;
  padding: 24px;
  width: 380px;
`;
var ScreenContainer = (0, import_styled5.default)("section")`
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
  visibility: ${(props) => props.screen !== props.target ? "hidden" : "visible"};
`;
var ConstructorSidebar = (0, import_styled5.default)("section")`
  max-width: 25%;
  display: flex;
  flex-direction: column;
  padding-bottom: 71px;
  position: relative;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  margin: 0 24px 24px;
  padding: 24px;
`;

// app/modules/Constructor/components/TopicInfo.tsx
function TopicInfo({
  title = "",
  setReady,
  screen,
  actionData,
  lastAddedTopics
}) {
  var _a;
  const [topicTitle, setLessonTitle] = (0, import_react19.useState)("");
  const [lineNumber, setLineNumber] = (0, import_react19.useState)(0);
  (0, import_react19.useEffect)(() => {
    if (title) {
      setLessonTitle(title);
    }
  }, []);
  (0, import_react19.useEffect)(() => {
    setReady(!!topicTitle.length);
  }, [topicTitle, setReady]);
  return /* @__PURE__ */ React.createElement(ScreenContainer, {
    screen,
    target: "Topic"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "formType",
    value: "repeat"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "lineNumber",
    value: lineNumber
  }), /* @__PURE__ */ React.createElement(Legend, null, "Topic info"), /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: "0",
    style: { margin: "40px auto 0 auto" }
  }), /* @__PURE__ */ React.createElement(LessonTitleInput, {
    type: "text",
    name: "title",
    placeholder: "Enter topic title",
    value: topicTitle,
    onChange: (e) => setLessonTitle(e.target.value),
    required: true,
    autoFocus: true
  }), ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) && /* @__PURE__ */ React.createElement(ErrorMessage, {
    role: "alert",
    id: "title-error"
  }, actionData.errors.title), lastAddedTopics.length > 0 && /* @__PURE__ */ React.createElement("div", {
    style: { width: "100%", maxWidth: "440px", margin: "0 auto" }
  }, /* @__PURE__ */ React.createElement("h2", {
    style: { marginTop: 60 }
  }, "Choose position for topic"), /* @__PURE__ */ React.createElement(LessonsBlock, null, lastAddedTopics.map((lastAdded) => /* @__PURE__ */ React.createElement(LessonsContainer, {
    key: lastAdded.id
  }, /* @__PURE__ */ React.createElement(LessonBlock, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    "aria-labelledby": lastAdded.title
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: (lastAdded.currentChapter / lastAdded.chapters * 100).toString()
  }, /* @__PURE__ */ React.createElement(LessonProgressInner, null)), /* @__PURE__ */ React.createElement(LessonTitle, null, lastAdded.title))))), lastAddedTopics.length < 3 && /* @__PURE__ */ React.createElement(LessonsContainer, {
    key: "312dsdf"
  }, /* @__PURE__ */ React.createElement(LessonBlock, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    "aria-labelledby": "121",
    onClick: () => setLineNumber(lastAddedTopics[0].lineNumber)
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: "0",
    style: { fontSize: "39px" }
  }, lastAddedTopics[0].lineNumber === lineNumber ? /* @__PURE__ */ React.createElement(LessonProgressInner, null) : "+"), /* @__PURE__ */ React.createElement(LessonTitle, null, topicTitle.length ? topicTitle : "Topic title"))))), /* @__PURE__ */ React.createElement(LessonBlock, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    "aria-labelledby": "121",
    onClick: () => setLineNumber(lastAddedTopics[0].lineNumber + 1)
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: "0",
    style: { fontSize: "39px" }
  }, lastAddedTopics[0].lineNumber + 1 === lineNumber ? /* @__PURE__ */ React.createElement(LessonProgressInner, null) : "+"), /* @__PURE__ */ React.createElement(LessonTitle, null, topicTitle.length ? topicTitle : "Topic title")))));
}

// app/modules/Constructor/Levels/reducer.ts
init_react();
var import_nanoid = require("nanoid");
var createStep = ({ number = 0, chapter = 1 }) => {
  return {
    active: true,
    question: "",
    id: (0, import_nanoid.nanoid)(),
    answer: "",
    number,
    keywords: [],
    stepType: "",
    ready: false,
    text: "",
    variants: [],
    chapter
  };
};
var basicState2 = {
  chapters: [1],
  currentScreen: "Topic",
  steps: [createStep({})]
};
var reducer = (state, action10) => {
  const { steps, chapters } = state;
  const { type } = action10;
  switch (type) {
    case "SET_DATA": {
      const { steps: steps2 } = action10.payload;
      return __spreadProps(__spreadValues({}, state), {
        steps: steps2
      });
    }
    case "SET_STEP_TYPE": {
      const { stepType, id } = action10.payload;
      const newSteps = steps.map((step) => step.id === id ? __spreadProps(__spreadValues({}, step), { stepType }) : __spreadValues({}, step));
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "REMOVE_STEP_TYPE": {
      const { id } = action10.payload;
      const newSteps = steps.map((step) => {
        if (step.id === id) {
          return __spreadProps(__spreadValues({}, step), {
            stepType: "",
            keywords: [],
            answer: "",
            ready: false
          });
        } else {
          return __spreadValues({}, step);
        }
      });
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_STEP_READY": {
      const { isReady, number } = action10.payload;
      const newSteps = steps;
      newSteps[number].ready = isReady;
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps]
      });
    }
    case "SET_STEP_ACTIVE": {
      const { id } = action10.payload;
      const newSteps = steps.map((step) => {
        if (step.id === id) {
          return __spreadProps(__spreadValues({}, step), { active: true });
        }
        return __spreadProps(__spreadValues({}, step), { active: false });
      });
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_QUESTION": {
      const { question, number } = action10.payload;
      let newSteps = steps;
      newSteps[number].question = question;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_ANSWER": {
      const { answer, number } = action10.payload;
      let newSteps = steps;
      newSteps[number].answer = answer;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_KEYWORDS": {
      let { keywords, number } = action10.payload;
      let newSteps = steps;
      newSteps[number].keywords = keywords;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "ADD_STEP": {
      const { chapter } = action10.payload;
      const newSteps = steps.map((step) => __spreadProps(__spreadValues({}, step), { active: false }));
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps, createStep({ number: steps.length, chapter })]
      });
    }
    case "REMOVE_STEP": {
      const newSteps = steps.filter((item) => action10.payload.id !== item.id).map((item, i) => __spreadProps(__spreadValues({}, item), { number: i }));
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps]
      });
    }
    case "ADD_CHAPTER": {
      const newChapter = chapters.length + 1;
      const newSteps = steps.map((step) => __spreadProps(__spreadValues({}, step), { active: false }));
      return __spreadProps(__spreadValues({}, state), {
        chapters: [...chapters, newChapter],
        steps: [
          ...newSteps,
          createStep({ number: steps.length, chapter: newChapter })
        ]
      });
    }
    case "CHANGE_CURRENT_SCREEN": {
      const { currentScreen } = action10.payload;
      return __spreadProps(__spreadValues({}, state), { currentScreen });
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
};

// app/modules/Constructor/Levels/actions.ts
init_react();
var actionCreator = (dispatch) => ({
  setStepType: (stepType, id) => dispatch({ type: "SET_STEP_TYPE", payload: { stepType, id } }),
  removeStepType: (id) => dispatch({ type: "REMOVE_STEP_TYPE", payload: { id } }),
  setAnswer: (answer, number) => dispatch({ type: "SET_ANSWER", payload: { answer, number } }),
  setKeywords: (keywords, number) => dispatch({ type: "SET_KEYWORDS", payload: { keywords, number } }),
  addStep: (chapter) => dispatch({ type: "ADD_STEP", payload: { chapter } }),
  removeStep: (id) => dispatch({ type: "REMOVE_STEP", payload: { id } }),
  setStepReady: (isReady, number) => dispatch({ type: "SET_STEP_READY", payload: { isReady, number } }),
  setData: (steps) => dispatch({ type: "SET_DATA", payload: { steps } }),
  setQuestion: (question, number) => dispatch({ type: "SET_QUESTION", payload: { question, number } }),
  addChapter: () => dispatch({ type: "ADD_CHAPTER" }),
  setStepActive: (id) => dispatch({ type: "SET_STEP_ACTIVE", payload: { id } }),
  changeCurrentScreen: (currentScreen) => dispatch({ type: "CHANGE_CURRENT_SCREEN", payload: { currentScreen } })
});
var actions_default = actionCreator;

// app/modules/Constructor/Levels/index.tsx
init_react();
var import_react27 = require("react");

// app/modules/Constructor/Levels/components/QuestionAnswer.tsx
init_react();
var import_react22 = require("react");

// app/modules/Constructor/components/Keywords.tsx
init_react();
var import_react21 = require("react");

// app/modules/Constructor/components/Keyword.tsx
init_react();
var import_react20 = require("react");
var Keyword = ({
  onSet,
  children,
  initiallyActive
}) => {
  const [isActive, setIsActive] = (0, import_react20.useState)(initiallyActive);
  return /* @__PURE__ */ React.createElement(KeywordTemplate, {
    active: isActive,
    onClick: () => {
      onSet(children);
      setIsActive(!isActive);
    }
  }, children);
};
var Keyword_default = Keyword;

// app/modules/Constructor/components/Keywords.tsx
function Keywords({
  answer,
  onSet,
  initialKeywords = []
}) {
  const [keywords, setKeywords] = (0, import_react21.useState)(initialKeywords);
  (0, import_react21.useEffect)(() => {
    onSet(keywords);
  }, [keywords]);
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap" }
  }, answer.split(" ").map((item, idx) => {
    if (item.includes(",")) {
      item = item.slice(0, -1);
    }
    return /* @__PURE__ */ React.createElement(Keyword_default, {
      key: idx,
      onSet: (word) => setKeywords((prevArr) => {
        if (isItemInArray(prevArr, item)) {
          prevArr.splice(prevArr.indexOf(word), 1);
          return [...prevArr];
        } else {
          return [...prevArr, word];
        }
      }),
      initiallyActive: !!keywords.find((keyword) => keyword === item)
    }, item);
  }));
}

// app/modules/Constructor/Levels/components/QuestionAnswer.tsx
function QuestionAnswer({
  question,
  setQuestion,
  number,
  answer,
  setAnswer,
  setReady,
  setKeywords,
  keywords
}) {
  (0, import_react22.useEffect)(() => {
    if (question && answer) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [question, answer]);
  (0, import_react22.useEffect)(() => {
    setKeywords(keywords);
  }, []);
  return /* @__PURE__ */ React.createElement(import_react22.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `type${number}`,
    value: "Question"
  }), /* @__PURE__ */ React.createElement("fieldset", {
    style: { padding: "0 25%" }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: `question${number}`,
    placeholder: "Set question",
    style: {
      border: "none",
      marginBottom: 10,
      width: "100%"
    },
    value: question === null ? "" : question,
    onChange: (evt) => setQuestion(evt.target.value),
    autoFocus: true,
    required: true
  }), /* @__PURE__ */ React.createElement(Textarea, {
    name: `answer${number}`,
    placeholder: "Type answer",
    value: answer,
    onChange: (evt) => setAnswer(evt.target.value),
    required: true
  })), /* @__PURE__ */ React.createElement(TextareaLabel, {
    htmlFor: `keywords${number}`
  }, /* @__PURE__ */ React.createElement(LabelText, null, "Choose keywords"), /* @__PURE__ */ React.createElement(Keywords, {
    answer,
    initialKeywords: keywords,
    onSet: setKeywords
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    id: `keywords${number}`,
    name: `keywords${number}`,
    placeholder: "Type keywords",
    value: keywords.map((keyword) => doesItemContainSign(keyword).newItem),
    readOnly: true
  })));
}

// app/modules/Constructor/Levels/components/Variants.tsx
init_react();
var import_react23 = require("react");

// app/modules/Constructor/Levels/components/MatchingPairs/reducer.ts
init_react();
var reducer2 = (state, action10) => {
  const { variants, pairs } = state;
  switch (action10.type) {
    case "SETUP": {
      const { variantsCount, variants: variants2, pairs: pairs2 } = action10.payload;
      const newVariants = [];
      if (variants2.length) {
        return __spreadProps(__spreadValues({}, state), { variants: [...variants2], pairs: pairs2 });
      }
      for (let i = 1; i <= variantsCount; i++) {
        newVariants.push({
          type: i - 1 < variantsCount / 2 ? "left" : "right",
          value: "",
          isFocused: false,
          idx: i,
          isConnected: false
        });
      }
      return __spreadProps(__spreadValues({}, state), { variants: newVariants });
    }
    case "VARIANTS_SETUP": {
      const { variantsCount } = action10.payload;
      const variants2 = [];
      for (let i = 1; i <= variantsCount; i++) {
        variants2.push({
          value: "",
          isFocused: false,
          isConnected: false,
          type: null,
          idx: i
        });
      }
      return __spreadProps(__spreadValues({}, state), { variants: variants2 });
    }
    case "VARIANT_SET_VALUE": {
      const { idx, value } = action10.payload;
      const newVariants = variants;
      newVariants[idx].value = value;
      return __spreadProps(__spreadValues({}, state), { variants: [...newVariants] });
    }
    case "TYPE": {
      const { value, idx } = action10.payload;
      const newVariants = variants;
      newVariants[newVariants.indexOf(newVariants.find((variant) => variant.idx === Number(idx)))].value = value;
      return __spreadProps(__spreadValues({}, state), { variants: [...newVariants] });
    }
    case "CHOOSE": {
      const { idx } = action10.payload;
      const variantItem = variants.find((variant) => variant.idx === Number(idx));
      if ((variantItem == null ? void 0 : variantItem.type) === "left") {
        const newVariants2 = variants.map((variant) => __spreadProps(__spreadValues({}, variant), {
          isFocused: variant.idx === Number(idx)
        }));
        return __spreadProps(__spreadValues({}, state), { variants: newVariants2 });
      }
      const newVariants = variants.map((variant) => __spreadProps(__spreadValues({}, variant), {
        isFocused: variant.idx === Number(idx)
      }));
      return __spreadProps(__spreadValues({}, state), { variants: newVariants });
    }
    case "VARIANT_CHOOSE": {
      const { idx } = action10.payload;
      const newVariants = variants.map((variant) => __spreadProps(__spreadValues({}, variant), {
        isFocused: false
      }));
      newVariants[idx].isFocused = true;
      return __spreadProps(__spreadValues({}, state), { variants: [...newVariants] });
    }
    case "CONNECT": {
      const { activeIdx, idx } = action10.payload;
      let newPairs = pairs;
      let exists = newPairs.find((item) => item.includes(`${activeIdx}`) || item.includes(`${idx}`));
      if (exists) {
        newPairs[newPairs.indexOf(exists)] = `${activeIdx}${idx}`;
      } else {
        newPairs.push(`${activeIdx}${idx}`);
      }
      return __spreadProps(__spreadValues({}, state), {
        variants: variants.map((variant) => __spreadProps(__spreadValues({}, variant), {
          isFocused: false,
          isConnected: newPairs.filter((pair) => pair.includes(`${variant.idx}`)).length
        })),
        pairs: newPairs
      });
    }
    case "ADD_PAIR": {
      const newVariants = variants;
      newVariants.push({
        value: "",
        isFocused: false,
        idx: newVariants.length + 1,
        isConnected: false,
        type: null
      });
      newVariants.push({
        value: "",
        isFocused: false,
        idx: newVariants.length + 1,
        isConnected: false,
        type: null
      });
      return __spreadProps(__spreadValues({}, state), { variants: [...newVariants] });
    }
    default: {
      throw new Error(`Omg we don't know this action type`);
    }
  }
};

// app/modules/Constructor/Levels/components/MatchingPairs/actions.ts
init_react();
var pairsSetup = (variantsCount, variants, pairs) => ({
  type: "SETUP",
  payload: { variantsCount, variants, pairs }
});
var variantsSetup = (variantsCount) => ({
  type: "VARIANTS_SETUP",
  payload: { variantsCount }
});
var variantSetValue = (idx, value) => ({
  type: "VARIANT_SET_VALUE",
  payload: { idx, value }
});
var pairsType = (value, idx) => ({
  type: "TYPE",
  payload: { value, idx }
});
var pairsChoose = (idx) => ({
  type: "CHOOSE",
  payload: {
    idx
  }
});
var variantChoose = (idx) => ({
  type: "VARIANT_CHOOSE",
  payload: { idx }
});
var pairsConnect = (activeIdx, idx) => ({
  type: "CONNECT",
  payload: { activeIdx, idx }
});

// app/modules/Constructor/Levels/components/Variants.tsx
function Variants2({
  initialQuestion = "",
  initialVariants = [],
  number,
  answer,
  setAnswer,
  setReady,
  variantsCount
}) {
  const [{ variants }, dispatch] = (0, import_react23.useReducer)(reducer2, {
    variants: initialVariants,
    pairs: []
  });
  const [question, setQuestion] = (0, import_react23.useState)(initialQuestion);
  (0, import_react23.useEffect)(() => {
    if (variants.length === 0) {
      dispatch(variantsSetup(variantsCount));
    }
  }, [variantsCount]);
  (0, import_react23.useEffect)(() => {
    if (variants.filter((variant) => variant.value.length === 0).length) {
      return setReady(false);
    }
    if (variants.find((variant) => variant.isFocused || variant.value === answer[0])) {
      setReady(true);
    } else {
      return setReady(false);
    }
    if (question == null ? void 0 : question.length) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [variants, question]);
  return /* @__PURE__ */ React.createElement(import_react23.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    value: answer
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `type${number}`,
    value: "Variants"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Read and Respond")), /* @__PURE__ */ React.createElement(Textarea, {
    name: `question${number}`,
    placeholder: "Type question",
    style: { minHeight: 100 },
    value: question === null ? "" : question,
    onChange: (e) => setQuestion(e.target.value),
    required: true
  }), /* @__PURE__ */ React.createElement("ul", null, variants.map((variant, index) => /* @__PURE__ */ React.createElement("li", {
    key: variant.idx,
    style: { marginBottom: 5 }
  }, /* @__PURE__ */ React.createElement("label", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    onClick: (e) => {
      e.preventDefault();
      dispatch(variantChoose(index));
      setAnswer(variant.value);
    },
    isFocused: variant.isFocused || variant.value === answer[0]
  }, variant.idx), /* @__PURE__ */ React.createElement(VariantItemInput, {
    type: "text",
    name: `variant${number}`,
    placeholder: "type first variant",
    autoComplete: "off",
    value: variant.value,
    onChange: (e) => {
      dispatch(variantSetValue(index, e.target.value));
      if (variant.isFocused) {
        setAnswer(e.target.value);
      }
    },
    required: true
  }))))));
}

// app/modules/Constructor/Levels/components/MatchingPairs/index.tsx
init_react();

// app/modules/Constructor/Levels/components/MatchingPairs/MatchingPairs.tsx
init_react();
var import_react24 = require("react");
function MatchingPairs({
  number,
  answer,
  setAnswer,
  variantsCount = 4,
  setReady,
  initialVariants = []
}) {
  const [{ variants, pairs }, dispatch] = (0, import_react24.useReducer)(reducer2, {
    variants: initialVariants,
    pairs: []
  });
  (0, import_react24.useEffect)(() => {
    dispatch(pairsSetup(variantsCount, initialVariants, answer));
  }, []);
  (0, import_react24.useEffect)(() => {
    if (pairs.length === variantsCount / 2) {
      setAnswer(pairs);
      setReady(true);
    }
    if (pairs.length !== variantsCount / 2) {
      setReady(false);
    }
  }, [pairs.length, pairs]);
  return /* @__PURE__ */ React.createElement(import_react24.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `type${number}`,
    value: "Pairs"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    value: answer
  }), /* @__PURE__ */ React.createElement("div", {
    style: { marginBottom: "20px" }
  }, /* @__PURE__ */ React.createElement("h2", null, "Create and Connect pairs")), /* @__PURE__ */ React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      maxWidth: 600,
      margin: "0 auto"
    }
  }, variants.map((variant) => /* @__PURE__ */ React.createElement("li", {
    key: variant.idx,
    style: { marginBottom: 5 }
  }, /* @__PURE__ */ React.createElement("label", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    onClick: (e) => {
      var _a;
      e.preventDefault();
      const activeIdx = (_a = variants.filter((variantItem) => variantItem.isFocused)[0]) == null ? void 0 : _a.idx;
      if (variants.filter((variantItem) => variantItem.isFocused).length === 1 || variant.isFocused) {
        dispatch(pairsConnect(activeIdx, variant.idx));
      } else {
        dispatch(pairsChoose(variant.idx));
      }
    },
    isConnected: variant.isConnected,
    isFocused: variant.isFocused
  }, variant.idx), /* @__PURE__ */ React.createElement(VariantItemInput, {
    type: "text",
    name: `variant${number}`,
    placeholder: "type first variant",
    value: variant.value,
    autoComplete: "off",
    onChange: (e) => dispatch(pairsType(e.target.value, variant.idx)),
    required: true
  })))), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => dispatch({ type: "ADD_PAIR" }),
    style: { display: "block", width: "100%" }
  }, "Add pair")));
}

// app/modules/Constructor/Levels/components/MatchingPairs/index.tsx
var MatchingPairs_default = MatchingPairs;

// app/modules/Constructor/Levels/components/InsertWords/index.tsx
init_react();

// app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx
init_react();
var import_react26 = require("react");

// app/modules/Constructor/Levels/components/InsertWords/Backend.tsx
init_react();
function Backend({
  showText,
  setShowText,
  setChooseVariants,
  isChooseVariants,
  answer,
  words,
  setWords
}) {
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap" }
  }, /* @__PURE__ */ React.createElement("h3", null, "Mark words which should be hidden"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    style: { display: showText ? "block" : "none" },
    onClick: () => setShowText(false)
  }, "Edit text"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setChooseVariants(!isChooseVariants)
  }, "Set variants"), answer.split(" ").map((item, idx) => {
    return /* @__PURE__ */ React.createElement("span", {
      style: {
        marginRight: 3,
        border: words.find((word) => word === item) ? "1px solid green" : "none"
      },
      key: idx,
      onClick: () => {
        setWords(() => {
          if (isItemInArray(words, item)) {
            words.splice(words.indexOf(item), 1);
            return [...words];
          }
          return [...words, item];
        });
        setShowText(true);
      }
    }, item);
  }));
}

// app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx
init_react();
var import_react25 = require("react");
function ChooseMissingWords({ words, number }) {
  const [variants, setVariants] = (0, import_react25.useState)(() => words.length ? [...words] : [""]);
  return /* @__PURE__ */ React.createElement("div", {
    style: { width: "100%" }
  }, /* @__PURE__ */ React.createElement("ul", {
    style: { listStyleType: "none", padding: 0, margin: 0 }
  }, words.length === 1 ? /* @__PURE__ */ React.createElement(import_react25.Fragment, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: false,
    onClick: () => setVariants((prevVars) => [...prevVars, ""])
  }, "Add variant")), variants.map((variant, idx) => /* @__PURE__ */ React.createElement(VariantItemInput, {
    key: `insertwordvariant${idx}`,
    type: "text",
    name: `variant${number}`,
    placeholder: "type variant",
    autoComplete: "off",
    defaultValue: variant,
    required: true
  }))) : words.map((word, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: { position: "relative", marginBottom: 8 }
  }, /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: false
  }, word)))));
}

// app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx
function InsertWords2({
  text,
  number,
  answer,
  setAnswer,
  setReady
}) {
  const [words, setWords] = (0, import_react26.useState)([]);
  const [showText, setShowText] = (0, import_react26.useState)(false);
  const [isChooseVariants, setChooseVariants] = (0, import_react26.useState)(false);
  const ref = useFocus();
  const defaultAnswer = words.map((word) => {
    const { newItem } = doesItemContainSign(word);
    return newItem + " ";
  }).join("");
  (0, import_react26.useEffect)(() => {
    setReady(!!words.length);
  }, [words.length]);
  (0, import_react26.useEffect)(() => {
    if (text) {
      setAnswer(text);
      const newWords = text.split(" ").filter((txt) => {
        const { newItem } = doesItemContainSign(txt);
        return isItemInArray(answer.split(" "), newItem);
      });
      setWords(newWords);
      setShowText(true);
    }
  }, []);
  return /* @__PURE__ */ React.createElement("fieldset", {
    style: { padding: "0 25%" }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    defaultValue: defaultAnswer
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `type${number}`,
    value: "Insert"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `isToChoose${number}`,
    defaultValue: isChooseVariants ? "1" : void 0
  }), /* @__PURE__ */ React.createElement(LessonTitle2, null, "Add missing words"), /* @__PURE__ */ React.createElement(Textarea, {
    name: `text${number}`,
    placeholder: "Type text",
    value: answer,
    onChange: (evt) => {
      setAnswer(evt.target.value);
    },
    ref,
    required: true
  }), /* @__PURE__ */ React.createElement(InsertWordsTextBlock, {
    showText,
    style: { marginTop: -206 }
  }, answer.split(" ").map((item, idx) => {
    const { newItem, sign } = doesItemContainSign(item);
    if (!isItemInArray(words, item)) {
      return /* @__PURE__ */ React.createElement("span", {
        style: { marginRight: 3 },
        key: idx
      }, item);
    }
    if (sign) {
      return /* @__PURE__ */ React.createElement(import_react26.Fragment, {
        key: idx
      }, /* @__PURE__ */ React.createElement(InsertWordsInput, {
        type: "text",
        length: newItem.length
      }), /* @__PURE__ */ React.createElement("span", null, sign));
    }
    return /* @__PURE__ */ React.createElement(InsertWordsInput, {
      type: "text",
      key: idx,
      length: newItem.length
    });
  }), isChooseVariants && /* @__PURE__ */ React.createElement(ChooseMissingWords, {
    words,
    number
  })), /* @__PURE__ */ React.createElement(Backend, {
    words,
    answer,
    setWords,
    showText: setShowText,
    setChooseVariants,
    setShowText,
    isChooseVariants
  }));
}

// app/modules/Constructor/Levels/components/InsertWords/index.tsx
var InsertWords_default = InsertWords2;

// app/modules/Constructor/Levels/components/ChooseStyleScreen.tsx
init_react();
function ChooseStyleScreen({ setStepType, id }) {
  return /* @__PURE__ */ React.createElement(ChooseStyle, null, /* @__PURE__ */ React.createElement(StyleButton, {
    type: "button",
    onClick: () => setStepType("Question", id)
  }, "Question / Answer"), /* @__PURE__ */ React.createElement(StyleButton, {
    type: "button",
    onClick: () => setStepType("Insert", id)
  }, "Insert words"), /* @__PURE__ */ React.createElement(StyleButton, {
    type: "button",
    onClick: () => setStepType("Variants", id)
  }, "Choose right variant"), /* @__PURE__ */ React.createElement(StyleButton, {
    type: "button",
    onClick: () => setStepType("Pairs", id)
  }, "Matching pairs"));
}

// app/modules/Constructor/Levels/index.tsx
function Levels({
  steps,
  setReady,
  screen,
  dispatch
}) {
  (0, import_react27.useEffect)(() => {
    setReady(!steps.find((step) => step.ready === false));
  }, [steps, setReady]);
  const {
    setAnswer,
    setKeywords,
    setStepType,
    setStepReady,
    removeStepType,
    setQuestion
  } = actions_default(dispatch);
  return /* @__PURE__ */ React.createElement(ScreenContainer, {
    screen,
    target: "Steps"
  }, steps.map(({
    active,
    question,
    number,
    keywords,
    answer,
    stepType,
    id,
    variants,
    ready,
    text,
    chapter
  }, idx) => /* @__PURE__ */ React.createElement("section", {
    className: `${!active && "visuallyHidden"}`,
    key: id
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "step",
    value: idx
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `chapter`,
    value: chapter
  }), /* @__PURE__ */ React.createElement(Legend, null, stepType ? stepType : "Choose type"), /* @__PURE__ */ React.createElement(StepHeader, null, stepType !== "" && /* @__PURE__ */ React.createElement("button", {
    type: "button",
    style: {
      position: "absolute",
      cursor: "pointer",
      width: 16,
      height: 16,
      border: "none",
      backgroundColor: "inherit",
      padding: 0,
      left: 30,
      bottom: -60
    },
    onClick: () => removeStepType(id)
  }, /* @__PURE__ */ React.createElement("img", {
    src: close_default,
    alt: "close",
    style: {
      width: "16px",
      height: "16px",
      verticalAlign: "initial"
    }
  }))), /* @__PURE__ */ React.createElement(StepContent, null, stepType === "" && /* @__PURE__ */ React.createElement(ChooseStyleScreen, {
    setStepType,
    id
  }), stepType === "Question" ? /* @__PURE__ */ React.createElement(QuestionAnswer, {
    question,
    number,
    answer: typeof answer !== "string" ? answer.join(" ") : answer,
    setQuestion: (question2) => setQuestion(question2, number),
    setAnswer: (answer2) => setAnswer(answer2, number),
    setKeywords: (keywords2) => setKeywords(keywords2, number),
    keywords,
    setReady: (isReady) => setStepReady(isReady, number)
  }) : stepType === "Insert" ? /* @__PURE__ */ React.createElement(InsertWords_default, {
    text,
    number,
    answer: typeof answer !== "string" ? answer.join(" ") : answer,
    setAnswer: (answer2) => setAnswer(answer2, number),
    setReady: (isReady) => setStepReady(isReady, number)
  }) : stepType === "Variants" ? /* @__PURE__ */ React.createElement(Variants2, {
    initialQuestion: question,
    initialVariants: variants,
    number,
    answer,
    setAnswer: (answer2) => setAnswer(answer2, number),
    setReady: (isReady) => setStepReady(isReady, number),
    variantsCount: 3
  }) : stepType === "Pairs" ? /* @__PURE__ */ React.createElement(MatchingPairs_default, {
    number,
    answer,
    setAnswer: (answer2) => setAnswer(answer2, number),
    variantsCount: 4,
    setReady: (isReady) => setStepReady(isReady, number),
    initialVariants: variants
  }) : null))));
}

// app/modules/Constructor/Levels/components/Sidebar.tsx
init_react();
var import_react28 = __toESM(require("react"));
var Sidebar = ({ children, chapters, steps, currentScreen, dispatch }) => {
  const {
    addChapter,
    addStep,
    removeStep,
    setStepActive,
    changeCurrentScreen
  } = actions_default(dispatch);
  return /* @__PURE__ */ import_react28.default.createElement(import_react28.Fragment, null, /* @__PURE__ */ import_react28.default.createElement("h2", null, "Sidebar"), /* @__PURE__ */ import_react28.default.createElement("ul", {
    style: { marginBottom: "auto" }
  }, /* @__PURE__ */ import_react28.default.createElement("li", null, /* @__PURE__ */ import_react28.default.createElement("button", {
    type: "button",
    onClick: () => {
      changeCurrentScreen("Topic");
    },
    style: {
      color: "#3c3c3c",
      display: "block",
      fontSize: 16,
      fontWeight: 700,
      overflow: "hidden",
      padding: "15px 20px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, "Topic Info")), chapters.map((chapter) => /* @__PURE__ */ import_react28.default.createElement("li", {
    key: `chapter-${chapter}`
  }, /* @__PURE__ */ import_react28.default.createElement("button", {
    type: "button",
    onClick: () => {
      changeCurrentScreen("Steps");
      setStepActive(steps[steps.length - 1].id);
    },
    style: {
      color: "#3c3c3c",
      display: "block",
      fontSize: 16,
      fontWeight: 700,
      overflow: "hidden",
      padding: "15px 20px",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, "Chapter ", chapter), /* @__PURE__ */ import_react28.default.createElement("ul", null, steps.map((stepsItem) => stepsItem.chapter === chapter && /* @__PURE__ */ import_react28.default.createElement("li", {
    key: stepsItem.id
  }, /* @__PURE__ */ import_react28.default.createElement("button", {
    type: "button",
    onClick: () => {
      changeCurrentScreen("Steps");
      setStepActive(stepsItem.id);
    }
  }, "Step ", stepsItem.number + 1), stepsItem.number > 0 ? /* @__PURE__ */ import_react28.default.createElement("button", {
    type: "button",
    onClick: () => {
      removeStep(stepsItem.id);
    }
  }, "Remove step") : null)), /* @__PURE__ */ import_react28.default.createElement("li", null, /* @__PURE__ */ import_react28.default.createElement("button", {
    type: "button",
    onClick: () => {
      addStep(chapter);
      if (currentScreen !== "Steps") {
        changeCurrentScreen("Steps");
      }
    }
  }, "Add step"))), /* @__PURE__ */ import_react28.default.createElement("button", {
    type: "button",
    onClick: () => {
      if (currentScreen !== "Steps") {
        changeCurrentScreen("Steps");
      }
      addChapter();
    }
  }, "Add chapter")))), children);
};
var Sidebar_default = Sidebar;

// app/modules/Constructor/index.tsx
function Constructor({
  data,
  actionData,
  lastAddedTopics
}) {
  const [basicInfoReady, setTopicInfoReady] = (0, import_react29.useState)(false);
  const [stepsReady, setStepsReady] = (0, import_react29.useState)(false);
  const [{ steps, chapters, currentScreen }, dispatch] = (0, import_react29.useReducer)(reducer, basicState2);
  const { setData, changeCurrentScreen } = actions_default(dispatch);
  const transition = (0, import_remix7.useTransition)();
  const submitText = transition.state === "submitting" ? "Saving" : "Save";
  const isSubmitActive = stepsReady === true && basicInfoReady === true;
  const isSubmitDisabled = stepsReady === false || basicInfoReady === false || submitText !== "Save";
  (0, import_react29.useEffect)(() => {
    if (data) {
      setData(data.steps);
    }
  }, [data]);
  (0, import_react29.useEffect)(() => {
    var _a;
    if (((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) && currentScreen !== "Topic") {
      changeCurrentScreen("Topic");
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement(import_remix7.Form, {
    method: "post",
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      height: "calc(100vh - 95px)"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      maxWidth: "70%",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      position: "relative",
      paddingLeft: 30
    }
  }, /* @__PURE__ */ React.createElement(TopicInfo, {
    title: data == null ? void 0 : data.title,
    setReady: (val) => setTopicInfoReady(val),
    screen: currentScreen,
    actionData,
    lastAddedTopics
  }), /* @__PURE__ */ React.createElement(Levels, {
    steps,
    setReady: (val) => setStepsReady(val),
    screen: currentScreen,
    dispatch
  })), /* @__PURE__ */ React.createElement(ConstructorSidebar, null, /* @__PURE__ */ React.createElement(Sidebar_default, {
    chapters,
    steps,
    currentScreen,
    dispatch
  }, /* @__PURE__ */ React.createElement(FormButton, {
    type: "submit",
    active: isSubmitActive,
    disabled: isSubmitDisabled
  }, submitText))));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/constructor/$topicId.tsx
var import_remix8 = __toESM(require_remix());
function ErrorBoundary4() {
  const { lessonId } = (0, import_react30.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading lesson by the id ${lessonId}. Sorry.`);
}
var action4 = async ({ request, params }) => {
  const today = new Date();
  const form = await request.formData();
  const title = form.get("title");
  const activeLanguage = await getActiveLanguage(request);
  const stepChapters = form.getAll("chapter");
  const topic = await prisma.topic.findUnique({
    where: { id: params.topicId }
  });
  if (title !== topic.title) {
    const isTitleUnique = await checkTitleUnique(activeLanguage.id, title);
    if (isTitleUnique) {
      return (0, import_remix8.json)({
        errors: { title: "Title isn't unique" }
      }, { status: 400 });
    }
  }
  const lessons = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
    let answer = form.get(`answer${index}`);
    answer = answer.trim().split(" ");
    const returnData = {
      stepType,
      number: index,
      chapter: Number(stepChapters[index]),
      languageId: activeLanguage.id
    };
    switch (stepType) {
      case "Question": {
        const question = form.get(`question${index}`);
        const keywords = form.get(`keywords${index}`);
        return __spreadProps(__spreadValues({}, returnData), {
          question,
          answer,
          keywords: keywords ? keywords.split(",") : []
        });
      }
      case "Insert": {
        const text = form.get(`text${index}`);
        const isToChoose = !!form.get(`isToChoose${index}`);
        const variantValues = form.getAll(`variant${index}`);
        const variants = variantValues.map((value, idx) => ({
          idx,
          value,
          isFocused: false
        }));
        return __spreadProps(__spreadValues({}, returnData), {
          answer,
          text: text.trim(),
          isToChoose: variants.length === 0 ? isToChoose : false,
          variants
        });
      }
      case "Variants": {
        const question = form.get(`question${index}`);
        const variants = form.getAll(`variant${index}`);
        return __spreadProps(__spreadValues({}, returnData), {
          answer,
          question,
          variants: variants.map((variant, idx) => ({
            value: variant,
            idx: idx + 1,
            isFocused: false
          }))
        });
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`);
        return __spreadProps(__spreadValues({}, returnData), {
          answer: answer[0].split(","),
          variants: variants.map((variant, idx) => ({
            value: variant,
            isFocused: false,
            isConnected: true,
            idx: idx + 1
          }))
        });
      }
      default: {
        return __spreadProps(__spreadValues({}, returnData), { answer });
      }
    }
  });
  await deleteLessonsFromTopic(params.topicId);
  const createdLessonsIDs = await createLessons(lessons);
  const data = {
    title,
    lessonIDs: createdLessonsIDs,
    chapters: Number(stepChapters[stepChapters.length - 1]),
    currentChapter: 0,
    level: 0,
    projectId: activeLanguage == null ? void 0 : activeLanguage.id,
    updatedAt: getTodayDate()
  };
  await prisma.topic.update({
    where: { id: params.topicId },
    data: __spreadValues({}, data)
  });
  return (0, import_node3.redirect)(`/`);
};
var loader4 = async ({ request, params }) => {
  const topic = await prisma.topic.findUnique({
    where: { id: params.topicId }
  });
  if (!topic) {
    throw new Error("lesson not found");
  }
  const activeLanguage = await getActiveLanguage(request);
  const lastAddedTopics = await getLastAddedTopic(activeLanguage.id, true);
  const lessons = await getLessonsByTopicId(topic.id);
  const data = {
    title: topic.title,
    steps: lessons,
    lineNumber: topic.lineNumber
  };
  return { data, lastAddedTopics };
};
function ConstructorEdit() {
  const actionData = (0, import_react30.useActionData)();
  const { data, lastAddedTopics } = (0, import_react30.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Constructor, {
    data,
    lastAddedTopics,
    actionData
  });
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/constructor/new.tsx
var new_exports = {};
__export(new_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action5,
  default: () => ConstructorNew,
  loader: () => loader5
});
init_react();
var import_remix9 = __toESM(require_remix());
function ErrorBoundary5() {
  const { lessonId } = (0, import_remix9.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading lesson by the id ${lessonId}. Sorry.`);
}
var action5 = async ({ request, params }) => {
  const activeLanguage = await getActiveLanguage(request);
  const form = await request.formData();
  const title = form.get("title");
  let lineNumber = form.get("lineNumber");
  const lastAddedTopic = await getLastAddedTopic(activeLanguage.id);
  if (lastAddedTopic) {
    lineNumber = lineNumber === "0" ? ((lastAddedTopic == null ? void 0 : lastAddedTopic.lineNumber) + 1).toString() : lineNumber;
  }
  const stepChapters = form.getAll("chapter");
  const isTitleUnique = await checkTitleUnique(activeLanguage.id, title);
  if (isTitleUnique) {
    return (0, import_remix9.json)({
      errors: { title: "Title isn't unique" }
    }, { status: 400 });
  }
  const lessons = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
    let answer = form.get(`answer${index}`);
    const returnData = {
      stepType,
      number: index,
      chapter: Number(stepChapters[index]),
      languageId: activeLanguage.id
    };
    switch (stepType) {
      case "Question": {
        const question = form.get(`question${index}`);
        const keywords = form.get(`keywords${index}`);
        answer = answer.trim().split(" ");
        return __spreadProps(__spreadValues({}, returnData), {
          question,
          answer,
          keywords: keywords ? keywords.split(",") : []
        });
      }
      case "Insert": {
        const text = form.get(`text${index}`);
        const isToChoose = !!form.get(`isToChoose${index}`);
        const variantValues = form.getAll(`variant${index}`);
        answer = answer.trim().split(" ");
        const variants = variantValues.map((value, idx) => ({
          idx,
          value,
          isFocused: false
        }));
        return __spreadProps(__spreadValues({}, returnData), {
          answer,
          text: text.trim(),
          isToChoose: variants.length === 0 ? isToChoose : false,
          variants
        });
      }
      case "Variants": {
        const question = form.get(`question${index}`);
        const variants = form.getAll(`variant${index}`);
        return __spreadProps(__spreadValues({}, returnData), {
          answer,
          question,
          variants: variants.map((variant, idx) => ({
            value: variant,
            idx: idx + 1,
            isFocused: false
          }))
        });
      }
      case "Pairs": {
        const variants = form.getAll(`variant${index}`);
        return __spreadProps(__spreadValues({}, returnData), {
          answer: answer.split(","),
          variants: variants.map((variant, idx) => ({
            value: variant,
            isFocused: false,
            isConnected: true,
            idx: idx + 1
          }))
        });
      }
      default: {
        return __spreadProps(__spreadValues({}, returnData), { answer });
      }
    }
  });
  const createdLessonsIDs = await createLessons(lessons);
  const data = {
    title,
    lessonIDs: createdLessonsIDs,
    chapters: Number(stepChapters[stepChapters.length - 1]),
    currentChapter: 0,
    level: 0,
    projectId: activeLanguage == null ? void 0 : activeLanguage.id,
    updatedAt: getTodayDate(),
    lineNumber: Number(lineNumber)
  };
  const topic = await prisma.topic.create({ data });
  return (0, import_remix9.redirect)(`/skill/${topic.title}/1`);
};
var loader5 = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  const lastAddedTopics = await getLastAddedTopic(activeLanguage.id, true);
  return { lastAddedTopics };
};
function ConstructorNew() {
  const actionData = (0, import_remix9.useActionData)();
  const { lastAddedTopics } = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Constructor, {
    actionData,
    lastAddedTopics
  });
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  ErrorBoundary: () => ErrorBoundary6,
  action: () => action6,
  default: () => SkillsPage,
  loader: () => loader6
});
init_react();

// app/components/WeeklyProgress.tsx
init_react();
var DAY_COORDS = [
  "0.5",
  "42.166666666666664,0",
  "83.83333333333333,0",
  "125.5,0",
  "167.16666666666666,0",
  "208.83333333333334,0",
  "250.5,0"
];
var EXP_VALUES = [
  { val: 0, coords: "0,150.5" },
  { val: 0, coords: "0,113" },
  { val: 0, coords: "0,75.5" },
  { val: 0, coords: "0,38" },
  { val: 0, coords: "0,0.5" }
];
var DOTS_X_COORDS = [
  "0.5",
  "41.666",
  "83.333",
  "125",
  "166.666",
  "208.333",
  "250"
];
function WeeklyProgress({
  activity
}) {
  const maxActivity = Math.max(...Object.values(activity));
  EXP_VALUES[1].val = Math.round(maxActivity / 3.5);
  EXP_VALUES[2].val = Math.round(maxActivity / 2);
  EXP_VALUES[3].val = Math.round(maxActivity / 1.2);
  EXP_VALUES[4].val = Math.round(maxActivity / 0.9);
  const days = getCurrentWeek();
  const dotsData = days.map((day, index) => ({
    x: DOTS_X_COORDS[index],
    y: maxActivity && activity[day] / EXP_VALUES[4].val * 150,
    exp: activity[day]
  }));
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ExpProgressBlock, null, /* @__PURE__ */ React.createElement(ExpProgressTitle, null, "XP Progress"), /* @__PURE__ */ React.createElement("svg", {
    direction: "ltr",
    height: "220",
    width: "340"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "translate(45, 35)"
  }, /* @__PURE__ */ React.createElement("g", null), /* @__PURE__ */ React.createElement("g", {
    transform: "translate(0, 150)",
    fill: "none",
    fontSize: "10",
    fontFamily: "sans-serif",
    textAnchor: "middle"
  }, days.map((day, index) => /* @__PURE__ */ React.createElement("g", {
    className: "tick",
    opacity: "1",
    transform: `translate(${DAY_COORDS[index]})`,
    key: day
  }, /* @__PURE__ */ React.createElement("text", {
    fill: "currentColor",
    y: "16",
    dy: "0.71em",
    color: "#cccac9",
    fontFamily: "din-round, sans-serif",
    fontSize: "17px"
  }, day)))), /* @__PURE__ */ React.createElement("g", {
    transform: "",
    fill: "none",
    fontSize: "10",
    fontFamily: "sans-serif",
    textAnchor: "end"
  }, /* @__PURE__ */ React.createElement("path", {
    className: "GNoB0",
    d: `M0,0L250,0L250,150L0,150Z`,
    fill: "#ffc800",
    fillOpacity: "0.1"
  }), /* @__PURE__ */ React.createElement("path", {
    className: "GNoB0",
    d: `M0,0${dotsData.map(({ x, y }, idx) => {
      if (idx === 0)
        return "M" + x + "," + y;
      return "L" + x + "," + y;
    })}L250,150L208.33333333333334,150L166.66666666666666,150L125,150L83.33333333333333,150L41.666666666666664,150L0,150Z`,
    fill: "#fff",
    fillOpacity: "1",
    style: { transform: "scaleY(-1) translateY(-150px)" }
  }), /* @__PURE__ */ React.createElement("path", {
    className: "QZq6Z",
    d: `${dotsData.map(({ x, y }, idx) => {
      if (idx === 0)
        return "M" + x + "," + y;
      return "L" + x + "," + y;
    })}`,
    fillOpacity: "0",
    stroke: "#ffc800",
    strokeOpacity: "0.5",
    strokeWidth: "2",
    style: { transform: "scaleY(-1) translateY(-150px)" }
  }), EXP_VALUES.map(({ val, coords }) => /* @__PURE__ */ React.createElement("g", {
    className: "tick",
    opacity: "1",
    transform: `translate(${coords})`,
    key: coords
  }, /* @__PURE__ */ React.createElement("line", {
    stroke: "#dedede",
    x2: "250",
    strokeOpacity: "0.5",
    strokeWidth: "2"
  }), /* @__PURE__ */ React.createElement("text", {
    fill: "currentColor",
    x: "-16",
    dy: "0.32em",
    color: "#cccac9",
    fontFamily: "din-round, sans-serif",
    fontSize: "17px"
  }, val)))), /* @__PURE__ */ React.createElement("g", null, dotsData.map(({ x, y, exp }) => /* @__PURE__ */ React.createElement("circle", {
    className: "_2Hihu",
    cx: x,
    cy: y,
    fill: "#ffc800",
    r: "3.75",
    stroke: "#ffc800",
    strokeWidth: "2",
    style: { transform: "scaleY(-1) translateY(-150px)" },
    key: x + y
  }, /* @__PURE__ */ React.createElement("title", null, exp, " XP"))))))));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/skills.tsx
var import_react33 = require("@remix-run/react");

// app/components/SkillsList.tsx
init_react();
var import_nanoid2 = require("nanoid");

// app/components/Footer.tsx
init_react();
function Footer2() {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement(FooterLine, null), /* @__PURE__ */ React.createElement("div", {
    style: { paddingBottom: 28 }
  }, /* @__PURE__ */ React.createElement(FooterText, null, "Inspired by", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://www.duolingo.com",
    target: "_blank"
  }, "Duolingo"))));
}

// app/components/LessonItem.tsx
init_react();
var import_react32 = require("react");
var import_remix10 = __toESM(require_remix());

// app/styles/bin.svg
var bin_default = "/build/_assets/bin-RYGYRSXA.svg";

// app/hooks/useOnClickOutside.ts
init_react();
var import_react31 = require("react");
function useOnClickOutside(ref, handler) {
  (0, import_react31.useEffect)(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// app/components/LessonItem.tsx
function LessonItem({
  id,
  title,
  currentChapter,
  chapters,
  editLink
}) {
  const [isOpened, setIsOpened] = (0, import_react32.useState)(false);
  const transition = (0, import_remix10.useTransition)();
  const ref = (0, import_react32.useRef)(null);
  (0, import_react32.useEffect)(() => {
    if (transition.state === "loading") {
      setIsOpened(false);
    }
  }, [transition.state]);
  useOnClickOutside(ref, () => setIsOpened(false));
  const isDisabled = transition.state !== "idle";
  const exp = (currentChapter / chapters * 100).toString();
  const topicLink = `/skill/${title}/${currentChapter / chapters === 1 ? "practice" : currentChapter + 1}`;
  function toggleMenu() {
    setIsOpened(!isOpened);
  }
  return /* @__PURE__ */ React.createElement(LessonsContainer, null, /* @__PURE__ */ React.createElement(LessonBlock, {
    ref
  }, /* @__PURE__ */ React.createElement("button", {
    key: id,
    "aria-labelledby": title,
    onClick: toggleMenu
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp
  }, /* @__PURE__ */ React.createElement(LessonProgressInner, null)), /* @__PURE__ */ React.createElement(LessonTitle, null, title)), /* @__PURE__ */ React.createElement(LessonBlockMenu, {
    isOpened
  }, /* @__PURE__ */ React.createElement(LessonBlockMenuTriangle, null, /* @__PURE__ */ React.createElement(LessonBlockMenuTriangleContent, null)), /* @__PURE__ */ React.createElement(LessonBlockInner, null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(LessonBlockLink, {
    to: editLink
  }, "Edit"), /* @__PURE__ */ React.createElement(import_remix10.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "lessonId",
    value: id
  }), /* @__PURE__ */ React.createElement(LessonBlockButton, {
    type: "submit",
    disabled: isDisabled
  }, /* @__PURE__ */ React.createElement("img", {
    src: bin_default,
    alt: "delete",
    width: 20,
    height: 20
  })))), /* @__PURE__ */ React.createElement(LessonBlockLink, {
    to: topicLink
  }, "Start +16 XP")))));
}

// app/components/PracticeLastAdded.tsx
init_react();

// app/styles/practice_last_added.svg
var practice_last_added_default = "/build/_assets/practice_last_added-HKEJVFEX.svg";

// app/components/PracticeLastAdded.tsx
function PracticeLastAdded() {
  return /* @__PURE__ */ React.createElement(PracticeLastAddedContainer, null, /* @__PURE__ */ React.createElement(PracticeLastAddedLink, {
    to: "/practice"
  }, /* @__PURE__ */ React.createElement("img", {
    src: practice_last_added_default,
    alt: "Practice last added lessons",
    height: 32,
    width: 38.7
  })));
}

// app/components/SkillsList.tsx
function SkillsList({
  skills,
  languageTitle
}) {
  const lineNumbers = [
    ...new Set(skills.map((dataItem) => dataItem.lineNumber))
  ];
  return /* @__PURE__ */ React.createElement(SkillsListContainer, null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexGrow: 1 }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "flex-end" }
  }, skills.length > 0 && /* @__PURE__ */ React.createElement(PracticeLastAdded, null)), /* @__PURE__ */ React.createElement(TopicsLineBlock, null, lineNumbers.map((lineNumber) => /* @__PURE__ */ React.createElement(LessonsBlock, {
    key: (0, import_nanoid2.nanoid)()
  }, skills.map((dataItem) => {
    if (dataItem.lineNumber === lineNumber) {
      return /* @__PURE__ */ React.createElement(LessonItem, __spreadProps(__spreadValues({
        key: dataItem.id
      }, dataItem), {
        editLink: `/${languageTitle}/constructor/${dataItem.id}`
      }));
    }
  }))))), /* @__PURE__ */ React.createElement(Footer2, null));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/skills.tsx
function ErrorBoundary6() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "Issues during loading Topics route");
}
var action6 = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("lessonId");
  if (!id) {
    throw new Error("Lesson ID wasnt found");
  }
  await deleteLessonsFromTopic(id);
  return await deleteTopicById(id);
};
var loader6 = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  const user = await getUser(request);
  if (!activeLanguage) {
    throw new Error(`We could not find the active language`);
  }
  const skills = await getTopics(activeLanguage.id);
  return {
    skills,
    activity: user == null ? void 0 : user.weeklyActivity,
    languageTitle: activeLanguage.title
  };
};
function SkillsPage() {
  const { skills, activity, languageTitle } = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    style: { display: "flex", width: "100%" }
  }, /* @__PURE__ */ React.createElement(SkillsList, {
    skills,
    languageTitle
  }), /* @__PURE__ */ React.createElement(WeeklyProgress, {
    activity
  }));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/practice.tsx
var practice_exports2 = {};
__export(practice_exports2, {
  ErrorBoundary: () => ErrorBoundary7,
  action: () => action7,
  default: () => LessonScreen3,
  loader: () => loader7
});
init_react();
var import_remix11 = __toESM(require_remix());
function ErrorBoundary7() {
  const { lessonId } = (0, import_remix11.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading lesson by the id ${lessonId}. Sorry.`);
}
var action7 = async ({ request }) => {
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const user = await getUser(request);
  const newUserActivity = user.weeklyActivity;
  newUserActivity[`${getWeekDay()}`] = newUserActivity[`${getWeekDay()}`] + 10;
  await prisma.user.update({
    where: {
      id: user == null ? void 0 : user.id
    },
    data: {
      weeklyActivity: __spreadValues({}, newUserActivity)
    }
  });
  return (0, import_remix11.redirect)(`/`);
};
var loader7 = async () => {
  const lessons = await prisma.lesson.findMany({
    orderBy: { createdAt: "desc" },
    take: 10
  });
  if (!lessons) {
    throw new Error("lesson not found");
  }
  return lessons;
};
function LessonScreen3() {
  const steps = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Skill, {
    steps
  });
}

// route:/Users/newll/Desktop/MyDuo/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action8,
  loader: () => loader8
});
init_react();
var import_remix12 = __toESM(require_remix());
var action8 = async ({ request }) => {
  return logout(request);
};
var loader8 = async () => {
  return (0, import_remix12.redirect)("/");
};

// route:/Users/newll/Desktop/MyDuo/app/routes/repeat.tsx
var repeat_exports = {};
__export(repeat_exports, {
  default: () => Repeat
});
init_react();
var import_remix13 = __toESM(require_remix());
function Repeat() {
  return /* @__PURE__ */ React.createElement(import_remix13.Outlet, null);
}

// route:/Users/newll/Desktop/MyDuo/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader9
});
init_react();
var import_remix14 = __toESM(require_remix());
var loader9 = async ({ request }) => {
  var _a;
  const user = await getUser(request);
  if (!user) {
    return (0, import_remix14.redirect)("/login");
  }
  const languages = await getLanguages(request);
  const activeLanguageTitle = (_a = languages == null ? void 0 : languages.find((it) => it.active)) == null ? void 0 : _a.title;
  return (0, import_remix14.redirect)(`/${activeLanguageTitle}/skills`);
};

// route:/Users/newll/Desktop/MyDuo/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action9,
  default: () => LoginPage,
  loader: () => loader10,
  meta: () => meta
});
init_react();
var import_node4 = require("@remix-run/node");
var import_react35 = require("@remix-run/react");

// app/components/Login.tsx
init_react();
var import_react34 = require("react");
var import_remix15 = __toESM(require_remix());
function Login({ isLogin, setIsLogin, actionData }) {
  var _a;
  const usernameRef = (0, import_react34.useRef)(null);
  const passwordRef = (0, import_react34.useRef)(null);
  (0, import_react34.useEffect)(() => {
    var _a2, _b, _c, _d;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.username) {
      (_b = usernameRef.current) == null ? void 0 : _b.focus();
    }
    if ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) {
      (_d = passwordRef.current) == null ? void 0 : _d.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement(import_remix15.Form, {
    method: "post",
    style: { width: "100%", maxWidth: 375 }
  }, /* @__PURE__ */ React.createElement(LoginTitle, null, isLogin ? "Login" : "Register"), /* @__PURE__ */ React.createElement(LoginToggle, {
    htmlFor: "register",
    style: { zIndex: isLogin ? 1 : -1 }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    id: "register",
    value: "register",
    onChange: () => setIsLogin(!isLogin),
    style: { visibility: "hidden", position: "absolute" },
    checked: !isLogin
  }), isLogin ? "Register" : "Login"), /* @__PURE__ */ React.createElement(LoginToggle, {
    htmlFor: "login",
    style: { zIndex: !isLogin ? 1 : -1 }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    id: "login",
    value: "login",
    onChange: () => setIsLogin(!isLogin),
    style: { visibility: "hidden", position: "absolute" },
    checked: isLogin
  }), isLogin ? "Register" : "Login"), /* @__PURE__ */ React.createElement("div", {
    style: { marginTop: 8 }
  }, /* @__PURE__ */ React.createElement(LoginInput, {
    type: "text",
    name: "username",
    placeholder: "Username",
    ref: usernameRef,
    id: "username",
    autoFocus: true,
    required: true
  }), /* @__PURE__ */ React.createElement(LoginInput, {
    name: "password",
    id: "password",
    type: "password",
    placeholder: "Password",
    ref: passwordRef,
    required: true
  }), ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.username) && /* @__PURE__ */ React.createElement(ErrorMessage, {
    role: "alert",
    id: "username-error"
  }, actionData.errors.username)), /* @__PURE__ */ React.createElement(LoginButton, {
    type: "submit"
  }, isLogin ? "Login" : "Register"));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/login.tsx
var import_react36 = require("react");
var loader10 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_node4.redirect)("/");
  return (0, import_node4.json)({});
};
var action9 = async ({ request }) => {
  const formData = await request.formData();
  const loginType = formData.get("loginType");
  const username = formData.get("username");
  const password = formData.get("password");
  const user = await verifyLogin(username, password);
  if (user) {
    return createUserSession({
      request,
      userId: user.id,
      redirectTo: "/"
    });
  }
  if (loginType === "login") {
    return (0, import_node4.json)({
      errors: { username: "Invalid username or password" },
      fields: { loginType: "login", password: "" }
    }, { status: 400 });
  }
  const newUser = await createUser(username, password);
  return createUserSession({
    request,
    userId: newUser.id,
    redirectTo: "/"
  });
};
var meta = () => {
  return {
    title: "Login"
  };
};
function LoginPage() {
  var _a;
  const actionData = (0, import_react35.useActionData)();
  const transition = (0, import_react35.useTransition)();
  const [isLogin, setIsLogin] = (0, import_react36.useState)(actionData && ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) === "login" ? true : !actionData ? true : false);
  const buttonText = transition.state === "submitting" ? "loginning" : "login";
  return /* @__PURE__ */ React.createElement(LoginContainer, null, /* @__PURE__ */ React.createElement(LoginContinerInner, null, /* @__PURE__ */ React.createElement(Login, {
    isLogin,
    setIsLogin,
    actionData
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "1cc4073f", "entry": { "module": "/build/entry.client-C4XZI2IH.js", "imports": ["/build/_shared/chunk-WMM5PY4G.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-A65OU334.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language": { "id": "routes/$language", "parentId": "root", "path": ":language", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language-BVRA7WW4.js", "imports": ["/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-HGHGZEQA.js", "/build/_shared/chunk-6H6WQFFR.js", "/build/_shared/chunk-UPL24HDX.js", "/build/_shared/chunk-IGJDGJCA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$language/constructor/$topicId": { "id": "routes/$language/constructor/$topicId", "parentId": "routes/$language", "path": "constructor/:topicId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/constructor/$topicId-X6YF7TXD.js", "imports": ["/build/_shared/chunk-DXFTQGRK.js", "/build/_shared/chunk-TEJ7EXYD.js", "/build/_shared/chunk-ZDINJ2UM.js", "/build/_shared/chunk-QPM6IN7H.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language/constructor/new": { "id": "routes/$language/constructor/new", "parentId": "routes/$language", "path": "constructor/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/constructor/new-FUYN4ZXW.js", "imports": ["/build/_shared/chunk-DXFTQGRK.js", "/build/_shared/chunk-TEJ7EXYD.js", "/build/_shared/chunk-ZDINJ2UM.js", "/build/_shared/chunk-QPM6IN7H.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language/skills": { "id": "routes/$language/skills", "parentId": "routes/$language", "path": "skills", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/skills-77EMPDDP.js", "imports": ["/build/_shared/chunk-QPM6IN7H.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BD67KWZ4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-VTH4IJF7.js", "imports": ["/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-IGJDGJCA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-X6KLJBK3.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/practice": { "id": "routes/practice", "parentId": "root", "path": "practice", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/practice-BVC77FLU.js", "imports": ["/build/_shared/chunk-4L5XHDPQ.js", "/build/_shared/chunk-ZDINJ2UM.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-UPL24HDX.js", "/build/_shared/chunk-IGJDGJCA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/repeat": { "id": "routes/repeat", "parentId": "root", "path": "repeat", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/repeat-OECQ5KHN.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/skill/$title/$chapter": { "id": "routes/skill/$title/$chapter", "parentId": "root", "path": "skill/:title/:chapter", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/skill/$title/$chapter-JNBY56T2.js", "imports": ["/build/_shared/chunk-4L5XHDPQ.js", "/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-TEJ7EXYD.js", "/build/_shared/chunk-ZDINJ2UM.js", "/build/_shared/chunk-6H6WQFFR.js", "/build/_shared/chunk-UPL24HDX.js", "/build/_shared/chunk-IGJDGJCA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/skill/$title/practice": { "id": "routes/skill/$title/practice", "parentId": "root", "path": "skill/:title/practice", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/skill/$title/practice-AEKVDJFT.js", "imports": ["/build/_shared/chunk-4L5XHDPQ.js", "/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-TEJ7EXYD.js", "/build/_shared/chunk-ZDINJ2UM.js", "/build/_shared/chunk-6H6WQFFR.js", "/build/_shared/chunk-UPL24HDX.js", "/build/_shared/chunk-IGJDGJCA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-1CC4073F.js" };

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
  "routes/skill/$title/$chapter": {
    id: "routes/skill/$title/$chapter",
    parentId: "root",
    path: "skill/:title/:chapter",
    index: void 0,
    caseSensitive: void 0,
    module: chapter_exports
  },
  "routes/skill/$title/practice": {
    id: "routes/skill/$title/practice",
    parentId: "root",
    path: "skill/:title/practice",
    index: void 0,
    caseSensitive: void 0,
    module: practice_exports
  },
  "routes/$language": {
    id: "routes/$language",
    parentId: "root",
    path: ":language",
    index: void 0,
    caseSensitive: void 0,
    module: language_exports
  },
  "routes/$language/constructor/$topicId": {
    id: "routes/$language/constructor/$topicId",
    parentId: "routes/$language",
    path: "constructor/:topicId",
    index: void 0,
    caseSensitive: void 0,
    module: topicId_exports
  },
  "routes/$language/constructor/new": {
    id: "routes/$language/constructor/new",
    parentId: "routes/$language",
    path: "constructor/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/$language/skills": {
    id: "routes/$language/skills",
    parentId: "routes/$language",
    path: "skills",
    index: void 0,
    caseSensitive: void 0,
    module: skills_exports
  },
  "routes/practice": {
    id: "routes/practice",
    parentId: "root",
    path: "practice",
    index: void 0,
    caseSensitive: void 0,
    module: practice_exports2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/repeat": {
    id: "routes/repeat",
    parentId: "root",
    path: "repeat",
    index: void 0,
    caseSensitive: void 0,
    module: repeat_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
