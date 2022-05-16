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

// route:/Users/newll/Desktop/MyDuo/app/routes/lesson/$lessonId.tsx
var lessonId_exports = {};
__export(lessonId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => LessonScreen,
  loader: () => loader
});
init_react();
var import_remix3 = __toESM(require_remix());

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
var import_react10 = require("react");

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
  padding: 0
}));
var ListItem = import_styled.default.li((props) => ({
  height: "100%",
  paddingLeft: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative"
}));
var LessonBlock = import_styled.default.section((props) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "52px",
  position: "relative"
}));
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
var H1Title = (0, import_styled.default)("h1")`
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
  width: 117px;
  height: 117px;
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
  padding: 0 10%;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 95px); // margin 24px + menu height 71px
`;
var LessonTitle = (0, import_styled.default)("b")`
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
`;
var NavIcon = (0, import_styled.default)("img")`
  margin-right: 10px;
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
`;

// app/components/Progress.tsx
var Progress = ({ progress }) => {
  return /* @__PURE__ */ React.createElement(ProgressBarContainer, null, /* @__PURE__ */ React.createElement(ProgressLeaveLesson, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: close_default,
    alt: "close",
    style: { width: "16px", height: "16px", verticalAlign: "initial" }
  })), /* @__PURE__ */ React.createElement(ProgressBar, {
    progress
  }));
};
var Progress_default = Progress;

// app/modules/Lesson/components/Body.tsx
init_react();
var import_react8 = require("react");

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
  background-color: ${(props) => props.stateRight ? "#d7ffb8" : props.stateWrong ? "#ffdfe0" : "#fff"};
  color: ${(props) => props.stateRight ? "#58a700" : props.stateWrong ? "#ea2b2b" : "#fff"};
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
  display: flex;
  align-items: center;
  visibility: ${(props) => props.stateRight ? "visible" : props.stateWrong ? "visible" : "hidden"};
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
  background-color: ${(props) => props.stateWrong ? "#ff4b4b" : props.stateRight ? "#58cc02" : props.active ? "#78C83D" : "#E5E5E5"};
  color: ${(props) => props.active ? "#fff" : "#AFAFAF"};
  border-color: ${(props) => props.stateWrong ? "#ea2b2b" : props.stateRight ? "#58a700" : "white"};
  height: 50px;
  width: 150px;
  cursor: ${(props) => props.active ? "pointer" : "default"};
  text-transform: uppercase;
  font-family: "Montserrat";
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
`;
var LessonBody = (0, import_styled2.default)("div")`
  margin: 72px 29% 4% 32%; // 4% instead of 240px
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
  background: url(${(props) => props.stateRight ? right_default : wrong_default});
  background-position: ${(props) => props.stateRight ? "-145px -64px" : "-183px -65px"};
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

// app/modules/Lesson/components/QuestionAnswer.tsx
init_react();
var import_react2 = require("react");

// app/styles/duo.svg
var duo_default = "/build/_assets/duo-4STWGEJ4.svg";

// app/modules/Lesson/components/QuestionAnswer.tsx
function QuestionAnswerPractice({
  answer,
  question,
  setAnswer,
  formDisabled
}) {
  const ref = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a;
    (_a = ref.current) == null ? void 0 : _a.focus();
  }, [formDisabled]);
  return /* @__PURE__ */ React.createElement(import_react2.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Answer the question"), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center" }
  }, /* @__PURE__ */ React.createElement("img", {
    src: duo_default,
    alt: "Duo",
    height: 150,
    style: { marginBottom: -60 }
  }), /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(LessonQuestion, null, question), /* @__PURE__ */ React.createElement(LessonQuestionTriangleContainer, null, /* @__PURE__ */ React.createElement(LessonQuestionTriangle, null)))), /* @__PURE__ */ React.createElement(Textarea, {
    id: `answer`,
    name: "answer",
    placeholder: "Enter answer",
    value: answer,
    onChange: (e) => setAnswer([e.target.value]),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    },
    disabled: formDisabled,
    ref
  }));
}

// app/modules/Lesson/components/InsertWords.tsx
init_react();
var import_react5 = require("react");

// app/modules/Constructor/Steps/components/lib.tsx
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
  margin-top: -206px;
  padding: 10px 12px;
  border: 1px solid #e5e5e5;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: relative;
  z-index: ${(props) => props.showText ? "2" : "0"};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
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

// app/utils.ts
init_react();
var import_react3 = require("@remix-run/react");
var import_react4 = require("react");
var useFocus = () => {
  const ref = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    var _a;
    (_a = ref.current) == null ? void 0 : _a.focus();
  }, []);
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
  return { state: !!filtered.length, length: filtered.length, items: filtered };
};

// app/modules/Lesson/components/InsertWords.tsx
function InsertWords({
  answer,
  text,
  contentAnswer,
  setAnswer,
  formDisabled
}) {
  const [values, setValues] = (0, import_react5.useState)([
    ...Array(contentAnswer.length).fill("")
  ]);
  (0, import_react5.useEffect)(() => {
    if (formDisabled === true) {
      return;
    }
    setValues([...Array(contentAnswer.length).fill("")]);
  }, [formDisabled]);
  (0, import_react5.useEffect)(() => {
    if (values.find((val) => val === "")) {
      return;
    }
    setAnswer(values);
  }, [values]);
  return /* @__PURE__ */ React.createElement(import_react5.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Add missing words"), /* @__PURE__ */ React.createElement(InsertWordsTextBlock, {
    style: {
      marginTop: 0,
      fontSize: 19,
      backgroundColor: "white",
      padding: 0,
      border: "none"
    }
  }, text.split(" ").map((item, idx) => {
    const { newItem, sign } = doesItemContainSign(item);
    if (contentAnswer.includes(newItem)) {
      return contentAnswer.map((it, index) => {
        if (newItem !== it) {
          return null;
        }
        return /* @__PURE__ */ React.createElement(import_react5.Fragment, {
          key: idx
        }, /* @__PURE__ */ React.createElement("input", {
          type: "text",
          id: `input${0}`,
          style: {
            width: `${newItem.length * 13}px`,
            margin: "0 7px -2px",
            border: "none",
            borderBottom: "2px solid #afafaf",
            fontSize: 19
          },
          value: values[index],
          onChange: (e) => {
            setValues((prevArray) => {
              prevArray[index] = e.target.value;
              return [...prevArray];
            });
          },
          disabled: formDisabled
        }), /* @__PURE__ */ React.createElement("span", {
          style: { marginRight: 4 }
        }, sign));
      });
    }
    return /* @__PURE__ */ React.createElement("span", {
      style: { marginRight: 4 },
      key: idx
    }, item);
  })));
}

// app/modules/Lesson/components/Variants.tsx
init_react();
var import_react6 = require("react");
function VariantsPractice({
  answer,
  content,
  setAnswer
}) {
  return /* @__PURE__ */ React.createElement(import_react6.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Choose right variant"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, content.definition)), /* @__PURE__ */ React.createElement("b", null, content.question), /* @__PURE__ */ React.createElement("ul", {
    style: { listStyleType: "none", padding: 0, margin: 0 }
  }, content.variants.map((variant, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: { position: "relative", marginBottom: 8 }
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    isFocused: variant.value === answer[0]
  }, idx + 1), /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    onClick: () => setAnswer([variant.value]),
    isFocused: variant.value === answer[0]
  }, variant.value)))));
}

// app/modules/Lesson/components/Pairs.tsx
init_react();
var import_react7 = require("react");
function Pairs({
  contentAnswer,
  variants,
  checkAnswer
}) {
  const [active, setActive] = (0, import_react7.useState)("");
  const isDisabled = (idx) => {
    return !contentAnswer.find((answerItem) => answerItem.includes(idx + 1));
  };
  return /* @__PURE__ */ React.createElement(import_react7.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Connect pairs"), /* @__PURE__ */ React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, variants.map((item, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: { marginBottom: 5, position: "relative", width: "48%" },
    onClick: (evt) => {
      const target = evt.target;
      if (isDisabled(idx)) {
        return;
      }
      if (!active) {
        return setActive(target.id);
      }
      checkAnswer([`${active}${target.id}`]);
      setActive("");
    }
  }, /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    id: (idx + 1).toString(),
    style: {
      cursor: isDisabled(idx) ? "default" : "pointer",
      color: active == idx + 1 ? "#1899d6" : isDisabled(idx) ? "#e5e5e5" : "#4b4b4b",
      borderColor: active == idx + 1 ? "#84d8ff" : isDisabled(idx) ? "#e5e5e5" : "#e5e5e5",
      backgroundColor: active == idx + 1 ? "#ddf4ff" : "#fff"
    },
    disabled: isDisabled(idx)
  }, item)))));
}

// app/modules/Lesson/components/Body.tsx
var Body = ({
  stepNumber,
  maxSteps,
  content,
  setAnswer,
  formDisabled,
  answer,
  checkAnswer
}) => {
  return /* @__PURE__ */ React.createElement(LessonBody, null, stepNumber === maxSteps + 1 ? /* @__PURE__ */ React.createElement(LessonBodyResults, null, "Results Screen") : /* @__PURE__ */ React.createElement(import_react8.Fragment, null, content.stepType === "Question" ? /* @__PURE__ */ React.createElement(QuestionAnswerPractice, {
    question: content.question,
    answer,
    setAnswer,
    formDisabled
  }) : content.stepType === "Insert" ? /* @__PURE__ */ React.createElement(InsertWords, {
    answer,
    text: content.text,
    contentAnswer: content.answer,
    setAnswer,
    formDisabled
  }) : content.stepType === "Variants" ? /* @__PURE__ */ React.createElement(VariantsPractice, {
    content,
    setAnswer,
    answer
  }) : content.stepType === "Pairs" ? /* @__PURE__ */ React.createElement(Pairs, {
    contentAnswer: content.answer,
    variants: content.variants,
    checkAnswer
  }) : null));
};
var Body_default = Body;

// app/modules/Lesson/reducer.ts
init_react();
var basicState = {
  disabled: false,
  progress: 0,
  stepNumber: 0,
  content: {},
  lessonSteps: [{}],
  maxSteps: 0,
  stateWrong: false,
  stateRight: false,
  formDisabled: false,
  nextStep: false
};
var continueContent = (content, lessonSteps) => lessonSteps.length > 0 ? lessonSteps.shift(0, 1) : content;
var reducer = (state, action8) => {
  const { content, stepNumber, maxSteps, lessonSteps } = state;
  switch (action8.type) {
    case "CONTINUE":
      return __spreadProps(__spreadValues({}, state), {
        stepNumber: stepNumber + 1,
        disabled: stepNumber === maxSteps ? false : true,
        content: continueContent(content, lessonSteps),
        formDisabled: false,
        stateRight: false,
        stateWrong: false,
        nextStep: false
      });
    case "CHECK_ANSWER":
      const negativeState = __spreadProps(__spreadValues({}, state), {
        stateWrong: true,
        formDisabled: true,
        disabled: false,
        lessonSteps: [...lessonSteps, content],
        stepNumber: stepNumber - 1,
        nextStep: true
      });
      const positiveState = __spreadProps(__spreadValues({}, state), {
        disabled: false,
        nextStep: true,
        stateRight: true,
        formDisabled: true,
        progress: stepNumber / maxSteps
      });
      const { answer } = action8.payload;
      switch (content.stepType) {
        case "Insert": {
          const { length } = doesArrayContainItems(content.answer, answer);
          if (length === content.answer.length) {
            return positiveState;
          }
          return negativeState;
        }
        case "Question": {
          if (doesArrayContainItems(content.keywords, answer[0].split(" ")).state) {
            return positiveState;
          }
          const { state: state2, length } = doesArrayContainItems(content.answer, answer[0].split(" "));
          if (!state2) {
            return negativeState;
          }
          if (length < content.answer.length * 0.8) {
            return negativeState;
          }
          return positiveState;
        }
        case "Variants": {
          if (content.answer[0] === answer[0]) {
            return positiveState;
          }
          return negativeState;
        }
        case "Pairs": {
          let idx;
          if (content.answer.find((answerItem, id) => {
            idx = id;
            return answerItem === answer[0] || answerItem.split("").reverse().join("") === answer[0];
          })) {
            const newContent = content;
            newContent.answer.splice(idx, 1);
            if (newContent.answer.length === 0) {
              return positiveState;
            }
            return __spreadProps(__spreadValues({}, state), {
              content: newContent,
              disabled: true
            });
          } else {
            return __spreadProps(__spreadValues({}, state), {
              disabled: true
            });
          }
        }
        default: {
          throw new Error(`We don't know this type: ${action8.type}`);
        }
      }
    case "CHANGE_DISABLED":
      return __spreadProps(__spreadValues({}, state), { disabled: action8.payload.isDisabled });
    case "RESULTS":
      return __spreadProps(__spreadValues({}, state), {
        stepNumber: stepNumber + 1,
        stateRight: false,
        stateWrong: false
      });
    case "SET_CASE":
      const { steps } = action8.payload;
      return __spreadProps(__spreadValues({}, basicState), {
        stepNumber: 1,
        lessonSteps: steps,
        maxSteps: steps.length,
        content: steps.shift(0, 1),
        disabled: true
      });
    default:
      throw new Error(`We don't know this case: ${action8.type}`);
  }
};

// app/modules/Lesson/actions.ts
init_react();
var actionCreator = (dispatch) => ({
  startPractice: () => dispatch({ type: "START" }),
  checkAnswer: (answer) => dispatch({ type: "CHECK_ANSWER", payload: { answer } }),
  continuePractice: () => dispatch({ type: "CONTINUE" }),
  finishPractice: () => dispatch({ type: "FINISH" }),
  showResultsPractice: () => dispatch({ type: "RESULTS" }),
  changeDisabled: (isDisabled) => dispatch({ type: "CHANGE_DISABLED", payload: { isDisabled } }),
  setCase: (steps) => dispatch({ type: "SET_CASE", payload: { steps } })
});
var actions_default = actionCreator;

// app/modules/Lesson/index.tsx
var import_react11 = require("@remix-run/react");

// app/modules/Lesson/components/Results.tsx
init_react();
function Results({ refName }) {
  return /* @__PURE__ */ React.createElement(ResultsContainer, null, /* @__PURE__ */ React.createElement(ResultsLeftBlock, null, /* @__PURE__ */ React.createElement(ResultsTitle, null, "Right answers and mistakes")), /* @__PURE__ */ React.createElement(ResultsSeparateLine, null), /* @__PURE__ */ React.createElement(ResultsLeftBlock, null), /* @__PURE__ */ React.createElement("form", {
    method: "POST",
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
var import_react9 = require("@remix-run/react");
function Footer({
  stateRight,
  stateWrong,
  isResult,
  answer,
  disabled,
  onContinue,
  setValue
}) {
  const transition = (0, import_react9.useTransition)();
  const buttonText = transition.state === "submitting" ? "Saving..." : transition.state === "loading" ? "Saved!" : stateRight ? "Next" : stateWrong || isResult ? "Continue" : "Check";
  const buttonDisabled = !disabled;
  return /* @__PURE__ */ React.createElement(LessonFooter, {
    stateRight,
    stateWrong
  }, /* @__PURE__ */ React.createElement(LessonFooterInner, null, /* @__PURE__ */ React.createElement(LessonFooterMessage, {
    stateRight,
    stateWrong
  }, (stateRight || stateWrong) && /* @__PURE__ */ React.createElement(LessonFooterIcon, {
    stateRight,
    stateWrong
  }), /* @__PURE__ */ React.createElement("div", {
    style: { marginLeft: 16, width: "calc(100% - 209px)" }
  }, /* @__PURE__ */ React.createElement(LessonFooterTitle, null, stateWrong ? "Right answer: " : "Great!"), stateWrong && /* @__PURE__ */ React.createElement(LessonFooterText, null, " ", answer.join(" ")))), /* @__PURE__ */ React.createElement(LessonButton, {
    active: buttonDisabled,
    stateRight,
    stateWrong,
    onClick: (e) => {
      if (buttonText === "Saving..." || buttonText === "Saved!") {
        e.preventDefault();
      }
      onContinue();
      if (stateRight || stateWrong) {
        setValue([""]);
      }
    },
    disabled: buttonText === "Saving..." || buttonText === "Saved!"
  }, buttonText)));
}

// app/modules/Lesson/index.tsx
function Lesson({
  data = { steps: [] }
}) {
  const ref = (0, import_react10.useRef)(null);
  const sectionRef = (0, import_react10.useRef)(null);
  const [
    {
      disabled,
      progress,
      content,
      stepNumber,
      maxSteps,
      stateRight,
      stateWrong,
      formDisabled,
      nextStep
    },
    dispatch
  ] = (0, import_react10.useReducer)(reducer, basicState);
  const [value, setValue] = (0, import_react10.useState)([""]);
  const {
    checkAnswer,
    showResultsPractice,
    continuePractice,
    changeDisabled,
    setCase
  } = actions_default(dispatch);
  const submit = (0, import_react11.useSubmit)();
  const transition = (0, import_react11.useTransition)();
  const submitting = transition.state !== "idle";
  let currentStep = stepNumber;
  (0, import_react10.useEffect)(() => {
    setCase(data.steps);
  }, []);
  (0, import_react10.useEffect)(() => {
    var _a, _b;
    if (stateRight || stateWrong) {
      return (_a = sectionRef.current) == null ? void 0 : _a.focus();
    }
    if (content.stepType === "Question") {
      return;
    }
    return (_b = sectionRef.current) == null ? void 0 : _b.focus();
  }, [stateRight, stateWrong]);
  const onContinue = () => {
    if (disabled) {
      return;
    }
    if (currentStep > -1 && currentStep <= maxSteps) {
      if (!nextStep && value[0] !== "") {
        checkAnswer(value);
      } else {
        continuePractice();
      }
    } else {
      currentStep === maxSteps ? showResultsPractice() : currentStep === maxSteps + 1 ? submit(ref.current, { replace: true }) : continuePractice();
    }
  };
  const setAnswer = (val) => {
    if (val[0] !== "") {
      changeDisabled(false);
    } else {
      changeDisabled(true);
    }
    setValue(val);
  };
  return /* @__PURE__ */ React.createElement(LessonContainer, {
    onKeyDown: (e) => {
      if (content.stepType === "Variants") {
        if (e.key === "1") {
          setAnswer([content.variants[0].value]);
        }
        if (e.key === "2") {
          setAnswer([content.variants[1].value]);
        }
        if (e.key === "3") {
          setAnswer([content.variants[2].value]);
        }
      }
      if (disabled) {
        return;
      }
      if (e.key !== "Enter") {
        return;
      }
      if (value[0] !== "" && !stateRight && !stateWrong) {
        return checkAnswer(value);
      }
      if (currentStep === maxSteps + 1) {
        if (submitting) {
          return;
        }
        onContinue();
      }
      if (stateRight || stateWrong) {
        e.preventDefault();
        onContinue();
        setValue([""]);
      }
    },
    tabIndex: 0,
    ref: sectionRef
  }, currentStep === maxSteps + 1 ? /* @__PURE__ */ React.createElement(Results, {
    refName: ref
  }) : /* @__PURE__ */ React.createElement(import_react10.Fragment, null, /* @__PURE__ */ React.createElement(Progress_default, {
    progress
  }), /* @__PURE__ */ React.createElement(Body_default, {
    stepNumber,
    maxSteps,
    content,
    answer: value,
    setAnswer,
    formDisabled,
    checkAnswer
  })), /* @__PURE__ */ React.createElement(Footer, {
    stateRight,
    stateWrong,
    isResult: currentStep === maxSteps + 1,
    setValue,
    answer: content.answer,
    onContinue,
    disabled
  }));
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
async function updateUserStreak(id, wasToday, streak) {
  return prisma.user.update({
    where: { id },
    data: { wasToday, streak }
  });
}
async function getUserById(id) {
  return prisma.user.findUnique({ where: { id } });
}
async function createUser(username, password) {
  const passwordHash = await import_bcryptjs.default.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      passwordHash,
      streak: 0,
      wasToday: false
    }
  });
  await prisma.language.create({
    data: { userId: user.id, active: true, title: "MyFirstLanguage" }
  });
  return user;
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

// route:/Users/newll/Desktop/MyDuo/app/routes/lesson/$lessonId.tsx
function ErrorBoundary2() {
  const { lessonId } = (0, import_remix3.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading lesson by the id ${lessonId}. Sorry.`);
}
var action = async ({ request, params }) => {
  const today = new Date();
  const language = await getActiveLanguage(request);
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const id = params.lessonId;
  const lesson = await prisma.lesson.findUnique({
    where: { id }
  });
  if (!lesson) {
    throw new Error(`Lesson with this id: ${id} is underfined`);
  }
  await prisma.lesson.update({
    where: {
      id
    },
    data: {
      exp: lesson.exp + expData,
      updatedAt: today.getDate().toString()
    }
  });
  return (0, import_remix3.redirect)(`/${language == null ? void 0 : language.title}/lessons`);
};
var loader = async ({ params }) => {
  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId }
  });
  if (!lesson) {
    throw new Error("lesson not found");
  }
  const data = { lesson };
  return data;
};
function LessonScreen() {
  const { lesson } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Lesson, {
    data: lesson
  });
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language.tsx
var language_exports = {};
__export(language_exports, {
  action: () => action2,
  default: () => ProjectPage,
  links: () => links,
  loader: () => loader2
});
init_react();
var import_node2 = require("@remix-run/node");
var import_react15 = __toESM(require("react"));
var import_remix4 = __toESM(require_remix());

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
var import_react14 = require("react");

// app/components/Projects.tsx
init_react();
var import_react12 = require("react");
var import_react13 = require("@remix-run/react");
function Projects({
  onOverlay,
  languages
}) {
  const [showWindow, setShowWindow] = (0, import_react12.useState)(false);
  const [isNewLanguage, setIsNewLanguage] = (0, import_react12.useState)(false);
  const activeLanguage = languages == null ? void 0 : languages.find((item) => item.active);
  return /* @__PURE__ */ React.createElement(import_react12.Fragment, null, /* @__PURE__ */ React.createElement(ActiveLanguageButton, {
    type: "button",
    onMouseEnter: () => {
      onOverlay(true);
      setShowWindow(true);
    },
    onMouseLeave: () => {
      onOverlay(false);
      setShowWindow(false);
    }
  }, activeLanguage == null ? void 0 : activeLanguage.title), /* @__PURE__ */ React.createElement(ActiveLanguageContainer, {
    onMouseEnter: () => {
      onOverlay(true);
      setShowWindow(true);
    },
    onMouseLeave: () => {
      onOverlay(false);
      setShowWindow(false);
    }
  }, showWindow && /* @__PURE__ */ React.createElement(LanguagesContainer, null, /* @__PURE__ */ React.createElement("ul", {
    style: { display: "flex", flexDirection: "column" }
  }, languages == null ? void 0 : languages.map((item, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: {
      backgroundColor: item.active ? "rgb(221, 244, 255)" : "inherit",
      order: item.active ? 0 : 1,
      borderRadius: item.active ? "10px 10px 0 0" : 0
    }
  }, /* @__PURE__ */ React.createElement(import_react13.Form, {
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
  }, isNewLanguage ? /* @__PURE__ */ React.createElement(import_react13.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(LanguagesInput, {
    type: "text",
    placeholder: "Type it's title",
    name: "newLanguage",
    onChange: () => {
      onOverlay(true);
      setShowWindow(true);
    },
    required: true
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    style: {
      position: "absolute",
      fontSize: 30,
      top: 7,
      right: 15,
      color: "#afafaf"
    }
  }, "+")) : /* @__PURE__ */ React.createElement(LanguagesItem, {
    type: "button",
    onClick: () => setIsNewLanguage(true)
  }, "Add new language")))));
}

// app/components/Menu.tsx
var MENU = [
  {
    title: "Study",
    link: "lessons",
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
    className: "nav-link",
    end: true
  }, ({ isActive }) => /* @__PURE__ */ React.createElement(import_react14.Fragment, null, /* @__PURE__ */ React.createElement(NavIcon, {
    src: isActive ? activeIcon : icon,
    width: 36,
    height: 36,
    alt: title
  }), title)))))), /* @__PURE__ */ React.createElement(HorizontalList, null, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement(Projects, {
    languages,
    onOverlay
  })), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("img", {
    src: (user == null ? void 0 : user.wasToday) ? streak_active_default : streak_default,
    alt: "streak",
    style: { width: 25, height: 30, marginRight: 6 }
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
async function getLessons(languageId) {
  return await prisma.lesson.findMany({
    take: 20,
    where: { projectId: languageId },
    select: { id: true, title: true, createdAt: true, exp: true },
    orderBy: { createdAt: "desc" }
  });
}
async function getLastActiveLesson(languageId) {
  const today = new Date();
  const todaysActivity = await prisma.lesson.findFirst({
    where: { projectId: languageId, updatedAt: today.getDate().toString() }
  });
  if (todaysActivity) {
    return todaysActivity;
  }
  const yesterdaysActivity = await prisma.lesson.findFirst({
    where: {
      projectId: languageId,
      updatedAt: (today.getDate() - 1).toString()
    }
  });
  if (yesterdaysActivity) {
    return yesterdaysActivity;
  }
  return null;
}
async function deleteLessonById(id) {
  return await prisma.lesson.delete({ where: { id } });
}

// app/styles/index.css
var styles_default = "/build/_assets/index-6SQCXJVG.css";

// route:/Users/newll/Desktop/MyDuo/app/routes/$language.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
async function action2({ request }) {
  const form = await request.formData();
  const id = form.get("id");
  const newLanguage = form.get("newLanguage");
  let project;
  if ((newLanguage == null ? void 0 : newLanguage.length) > 0) {
    project = await createNewLanguage(request, newLanguage);
  } else {
    project = await setActiveLanguage(id);
  }
  return (0, import_node2.redirect)(`/${project == null ? void 0 : project.title}/lessons`);
}
var loader2 = async ({ request }) => {
  const today = new Date();
  let user = await getUser(request);
  const languages = await getLanguages(request);
  const activeLanguage = languages == null ? void 0 : languages.find((item) => item.active);
  if (!user) {
    return (0, import_node2.redirect)("/login");
  }
  if (!activeLanguage) {
    throw new Error("Active language wasnt found");
  }
  const lastActive = await getLastActiveLesson(activeLanguage.id);
  if (!lastActive) {
    user = await updateUserStreak(user.id, false, 0);
  }
  if (Number(lastActive == null ? void 0 : lastActive.updatedAt) === today.getDate() - 1) {
    user = await updateUserStreak(user.id, false, user.streak);
    return { user, languages };
  }
  if (!(user == null ? void 0 : user.wasToday) && Number(lastActive == null ? void 0 : lastActive.updatedAt) === today.getDate()) {
    user = await updateUserStreak(user.id, true, user.streak + 1);
    return { user, languages };
  }
  if (!languages) {
    throw new Error("languages are not found");
  }
  return { user, languages };
};
function ProjectPage() {
  const { user, languages } = (0, import_remix4.useLoaderData)();
  const [isOverlay, setIsOverlay] = (0, import_react15.useState)(false);
  return /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(Menu_default, {
    user,
    languages,
    onOverlay: setIsOverlay
  }), /* @__PURE__ */ import_react15.default.createElement(Main, null, /* @__PURE__ */ import_react15.default.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ import_react15.default.createElement(Overlay, {
    active: isOverlay
  }));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/constructor/$lessonId.tsx
var lessonId_exports2 = {};
__export(lessonId_exports2, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action3,
  default: () => ConstructorEdit,
  loader: () => loader3
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/modules/Constructor/index.tsx
init_react();
var import_react24 = require("react");
var import_remix5 = __toESM(require_remix());

// app/modules/Constructor/components/BasicInfo.tsx
init_react();
var import_react16 = require("react");

// app/modules/Constructor/components/lib.ts
init_react();
var import_styled4 = __toESM(require("@emotion/styled"));
var LessonTitleInput = (0, import_styled4.default)("input")`
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
var ConstructorMenu = (0, import_styled4.default)("div")`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  display: block;
  margin: 0 24px 24px;
  padding: 24px;
  width: 380px;
`;

// app/modules/Constructor/components/BasicInfo.tsx
function BasicInfo({
  data,
  setReady,
  screen
}) {
  const [lessonTitle, setLessonTitle] = (0, import_react16.useState)(() => data ? data.title : "");
  (0, import_react16.useEffect)(() => {
    setReady(!!lessonTitle.length);
  }, [lessonTitle, setReady]);
  return /* @__PURE__ */ React.createElement("section", {
    style: {
      position: "absolute",
      top: 0,
      width: "100%",
      textAlign: "center",
      visibility: screen !== "Basic" ? "hidden" : "visible"
    }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "formType",
    value: "repeat",
    readOnly: true
  }), /* @__PURE__ */ React.createElement(Legend, null, "Basic info"), /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: "0",
    style: { margin: "40px auto 0 auto" }
  }), /* @__PURE__ */ React.createElement(LessonTitleInput, {
    type: "text",
    name: "title",
    placeholder: "Enter lesson title",
    style: { marginBottom: 40 },
    value: lessonTitle,
    onChange: (e) => setLessonTitle(e.target.value),
    required: true
  }));
}

// app/modules/Constructor/Steps/index.tsx
init_react();
var import_react23 = require("react");

// app/modules/Constructor/Steps/components/QuestionAnswer.tsx
init_react();
var import_react19 = require("react");

// app/modules/Constructor/components/Keywords.tsx
init_react();
var import_react18 = require("react");

// app/modules/Constructor/components/Keyword.tsx
init_react();
var import_react17 = require("react");
function Keyword({
  onSet,
  children
}) {
  const [isActive, setIsActive] = (0, import_react17.useState)(false);
  return /* @__PURE__ */ React.createElement(KeywordTemplate, {
    active: isActive,
    onClick: () => {
      onSet(children);
      setIsActive(!isActive);
    }
  }, children);
}

// app/modules/Constructor/components/Keywords.tsx
function Keywords({
  answer,
  onSet
}) {
  const [keywords, setKeywords] = (0, import_react18.useState)([]);
  (0, import_react18.useEffect)(() => {
    onSet(keywords);
  }, [keywords]);
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap" }
  }, answer.split(" ").map((item, idx) => {
    if (item.includes(",")) {
      item = item.slice(0, -1);
    }
    return /* @__PURE__ */ React.createElement(Keyword, {
      key: idx,
      onSet: (word) => setKeywords((prevArr) => {
        if (isItemInArray(prevArr, item)) {
          prevArr.splice(prevArr.indexOf(word), 1);
          return [...prevArr];
        } else {
          return [...prevArr, word];
        }
      })
    }, item);
  }));
}

// app/modules/Constructor/Steps/components/QuestionAnswer.tsx
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
  (0, import_react19.useEffect)(() => {
    if (question && answer) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [question, answer]);
  return /* @__PURE__ */ React.createElement(import_react19.Fragment, null, /* @__PURE__ */ React.createElement("input", {
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
    value: question,
    onChange: (evt) => setQuestion(evt.target.value),
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
    onSet: setKeywords
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    id: `keywords${number}`,
    name: `keywords${number}`,
    placeholder: "Type keywords",
    value: keywords,
    readOnly: true
  })));
}

// app/modules/Constructor/Steps/components/Variants.tsx
init_react();
var import_react20 = require("react");

// app/modules/Constructor/Steps/components/MatchingPairs/reducer.ts
init_react();
var basicState2 = {
  variants: [],
  pairs: []
};
var reducer2 = (state, action8) => {
  const { variants, pairs } = state;
  switch (action8.type) {
    case "SETUP": {
      const { variantsCount } = action8.payload;
      const variants2 = [];
      for (let i = 1; i <= variantsCount; i++) {
        variants2.push({
          type: i - 1 < variantsCount / 2 ? "left" : "right",
          value: "",
          isFocused: false,
          idx: i,
          isConnected: false
        });
      }
      return __spreadProps(__spreadValues({}, state), { variants: variants2 });
    }
    case "VARIANTS_SETUP": {
      const { variantsCount } = action8.payload;
      const variants2 = [];
      for (let i = 1; i <= variantsCount; i++) {
        variants2.push({
          value: "",
          isFocused: false,
          idx: i
        });
      }
      return __spreadProps(__spreadValues({}, state), { variants: variants2 });
    }
    case "VARIANT_SET_VALUE": {
      const { idx, value } = action8.payload;
      const newVariants = variants;
      newVariants[idx].value = value;
      return __spreadProps(__spreadValues({}, state), { variants: [...newVariants] });
    }
    case "TYPE": {
      const { value, idx } = action8.payload;
      const newVariants = variants;
      newVariants[newVariants.indexOf(newVariants.find((variant) => variant.idx === Number(idx)))].value = value;
      return __spreadProps(__spreadValues({}, state), { variants: [...newVariants] });
    }
    case "CHOOSE": {
      const { idx } = action8.payload;
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
      const { idx } = action8.payload;
      const newVariants = variants.map((variant) => __spreadProps(__spreadValues({}, variant), {
        isFocused: false
      }));
      newVariants[idx].isFocused = true;
      return __spreadProps(__spreadValues({}, state), { variants: [...newVariants] });
    }
    case "CONNECT": {
      const { activeIdx, idx } = action8.payload;
      let newPairs = pairs;
      let exists = newPairs.find((item) => item.includes(activeIdx) || item.includes(idx));
      if (exists) {
        newPairs[newPairs.indexOf(exists)] = `${activeIdx}${idx}`;
      } else {
        newPairs.push(`${activeIdx}${idx}`);
      }
      return __spreadProps(__spreadValues({}, state), {
        variants: variants.map((variant) => __spreadProps(__spreadValues({}, variant), {
          isFocused: false,
          isConnected: newPairs.filter((pair) => pair.includes(variant.idx.toString())).length
        })),
        pairs: newPairs
      });
    }
    default: {
      throw new Error(`Omg we don't know this action type`);
    }
  }
};

// app/modules/Constructor/Steps/components/MatchingPairs/actions.ts
init_react();
var pairsSetup = (variantsCount) => ({
  type: "SETUP",
  payload: { variantsCount }
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

// app/modules/Constructor/Steps/components/Variants.tsx
function Variants({
  initialQuestion = "",
  initialVariants = [],
  number,
  answer,
  setAnswer,
  setReady,
  variantsCount
}) {
  const [{ variants }, dispatch] = (0, import_react20.useReducer)(reducer2, {
    variants: initialVariants
  });
  const [question, setQuestion] = (0, import_react20.useState)(initialQuestion);
  (0, import_react20.useEffect)(() => {
    if (variants.length === 0) {
      dispatch(variantsSetup(variantsCount));
    }
  }, [variantsCount]);
  (0, import_react20.useEffect)(() => {
    if (variants.filter((variant) => variant.value.length === 0).length) {
      return setReady(false);
    }
    if (variants.find((variant) => variant.isFocused || variant.value === answer[0])) {
      setReady(true);
    } else {
      return setReady(false);
    }
    if (question.length) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [variants, question]);
  return /* @__PURE__ */ React.createElement(import_react20.Fragment, null, /* @__PURE__ */ React.createElement("input", {
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
    value: question,
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

// app/modules/Constructor/Steps/components/MatchingPairs/index.tsx
init_react();

// app/modules/Constructor/Steps/components/MatchingPairs/MatchingPairs.tsx
init_react();
var import_react21 = require("react");
function MatchingPairs({
  number,
  answer,
  setAnswer,
  variantsCount = 8,
  setReady
}) {
  const [{ variants, pairs }, dispatch] = (0, import_react21.useReducer)(reducer2, basicState2);
  (0, import_react21.useEffect)(() => {
    dispatch(pairsSetup(variantsCount));
  }, [variantsCount]);
  (0, import_react21.useEffect)(() => {
    if (pairs.length === variantsCount / 2) {
      setAnswer(pairs);
      setReady(true);
    }
    if (pairs.length !== variantsCount / 2) {
      setReady(false);
    }
  }, [pairs.length, pairs]);
  return /* @__PURE__ */ React.createElement(import_react21.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `type${number}`,
    value: "Pairs"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    value: answer
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Create and Connect pairs")), /* @__PURE__ */ React.createElement("ul", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly"
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
  }))))));
}

// app/modules/Constructor/Steps/components/MatchingPairs/index.tsx
var MatchingPairs_default = MatchingPairs;

// app/modules/Constructor/Steps/components/InsertWords.tsx
init_react();
var import_react22 = require("react");
function InsertWords2({
  number,
  answer,
  setAnswer,
  setReady
}) {
  const [words, setWords] = (0, import_react22.useState)([]);
  const [showText, setShowText] = (0, import_react22.useState)(false);
  const ref = useFocus();
  (0, import_react22.useEffect)(() => {
    setReady(!!words.length);
  }, [words.length]);
  return /* @__PURE__ */ React.createElement("fieldset", {
    style: { padding: "0 25%" }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    value: words.map((word) => {
      const { newItem } = doesItemContainSign(word);
      return newItem + " ";
    }).join("")
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `type${number}`,
    value: "Insert"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Type and choose to insert")), /* @__PURE__ */ React.createElement(Textarea, {
    name: `text${number}`,
    placeholder: "Type text",
    value: answer,
    onChange: (evt) => {
      setAnswer(evt.target.value);
    },
    ref,
    required: true
  }), /* @__PURE__ */ React.createElement(InsertWordsTextBlock, {
    showText
  }, answer.split(" ").map((item, idx) => {
    const { newItem, sign } = doesItemContainSign(item);
    if (!isItemInArray(words, item)) {
      return /* @__PURE__ */ React.createElement("span", {
        style: { marginRight: 3 },
        key: idx
      }, item);
    }
    if (sign) {
      return /* @__PURE__ */ React.createElement(import_react22.Fragment, {
        key: idx
      }, /* @__PURE__ */ React.createElement("input", {
        type: "text",
        style: {
          width: `${newItem.length * 13}px`,
          margin: "0 7px",
          border: "none",
          borderBottom: "1px solid #e5e5e5"
        }
      }), /* @__PURE__ */ React.createElement("span", null, sign));
    }
    return /* @__PURE__ */ React.createElement("input", {
      type: "text",
      key: idx,
      style: {
        width: `${newItem.length * 10}px`,
        margin: "0 7px",
        border: "none",
        borderBottom: "1px solid #e5e5e5"
      }
    });
  })), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap" }
  }, /* @__PURE__ */ React.createElement("h3", null, "Mark words which should be hidden"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    style: { display: showText ? "block" : "none" },
    onClick: () => setShowText(false)
  }, "Edit text"), answer.split(" ").map((item, idx) => {
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
  })));
}

// app/modules/Constructor/Steps/components/ChooseStyleScreen.tsx
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

// app/modules/Constructor/Steps/index.tsx
function Steps({
  activeStep,
  steps,
  setReady,
  screen,
  setStepType,
  removeStepType,
  setAnswer,
  setKeywords,
  setStepReady,
  setQuestion
}) {
  (0, import_react23.useEffect)(() => {
    setReady(!steps.find((step) => step.ready === false));
  }, [steps, setReady]);
  return /* @__PURE__ */ React.createElement("section", {
    style: {
      position: "absolute",
      width: "100%",
      top: 0,
      visibility: screen !== "Steps" ? "hidden" : "visible"
    }
  }, steps.map(({
    question,
    number,
    keywords,
    answer,
    stepType,
    id,
    variants,
    ready
  }, idx) => /* @__PURE__ */ React.createElement("section", {
    className: `${activeStep !== idx && "visuallyHidden"}`,
    key: id
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "step",
    value: idx
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
  }) : stepType === "Insert" ? /* @__PURE__ */ React.createElement(InsertWords2, {
    number,
    answer: typeof answer !== "string" ? answer.join(" ") : answer,
    setAnswer: (answer2) => setAnswer(answer2, number),
    setReady: (isReady) => setStepReady(isReady, number)
  }) : stepType === "Variants" ? /* @__PURE__ */ React.createElement(Variants, {
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
    variantsCount: 8,
    setReady: (isReady) => setStepReady(isReady, number)
  }) : null))));
}

// app/modules/Constructor/Steps/reducer.ts
init_react();
var import_nanoid = require("nanoid");
var basicState3 = {
  steps: [
    {
      question: "",
      id: (0, import_nanoid.nanoid)(),
      answer: "",
      number: 0,
      keywords: [],
      stepType: "",
      ready: false,
      text: "",
      variants: []
    }
  ]
};
var reducer3 = (state, action8) => {
  const { steps } = state;
  const { type } = action8;
  switch (type) {
    case "SET_STEP_TYPE": {
      const { stepType, id } = action8.payload;
      const newSteps = steps.map((step) => step.id === id ? __spreadProps(__spreadValues({}, step), { stepType }) : __spreadValues({}, step));
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "REMOVE_STEP_TYPE": {
      const { id } = action8.payload;
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
    case "SET_ANSWER": {
      const { answer, number } = action8.payload;
      let newSteps = steps;
      newSteps[number].answer = answer;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_KEYWORDS": {
      let { keywords, number } = action8.payload;
      let newSteps = steps;
      newSteps[number].keywords = keywords;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "ADD_STEP": {
      const newSteps = [
        ...steps,
        {
          question: "",
          number: steps.length,
          keywords: [],
          answer: "",
          ready: false,
          id: (0, import_nanoid.nanoid)(),
          stepType: ""
        }
      ];
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "REMOVE_STEP": {
      const newSteps = steps.filter((item) => action8.payload.id !== item.id).map((item, i) => __spreadProps(__spreadValues({}, item), { number: i }));
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps]
      });
    }
    case "SET_STEP_READY": {
      const { isReady, number } = action8.payload;
      const newSteps = steps;
      newSteps[number].ready = isReady;
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps]
      });
    }
    case "SET_DATA": {
      const { steps: steps2 } = action8.payload;
      return __spreadProps(__spreadValues({}, state), {
        steps: steps2
      });
    }
    case "SET_QUESTION": {
      const { question, number } = action8.payload;
      let newSteps = steps;
      newSteps[number].question = question;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
};

// app/modules/Constructor/Steps/actions.ts
init_react();
var actionCreator2 = (dispatch) => ({
  setStepType: (stepType, id) => dispatch({ type: "SET_STEP_TYPE", payload: { stepType, id } }),
  removeStepType: (id) => dispatch({ type: "REMOVE_STEP_TYPE", payload: { id } }),
  setAnswer: (answer, number) => dispatch({ type: "SET_ANSWER", payload: { answer, number } }),
  setKeywords: (keywords, number) => dispatch({ type: "SET_KEYWORDS", payload: { keywords, number } }),
  addStep: () => dispatch({ type: "ADD_STEP" }),
  removeStep: (id) => dispatch({ type: "REMOVE_STEP", payload: { id } }),
  setStepReady: (isReady, number) => dispatch({ type: "SET_STEP_READY", payload: { isReady, number } }),
  setData: (steps) => dispatch({ type: "SET_DATA", payload: { steps } }),
  setQuestion: (question, number) => dispatch({ type: "SET_QUESTION", payload: { question, number } })
});
var actions_default2 = actionCreator2;

// app/modules/Constructor/index.tsx
function Constructor({ data }) {
  const [basicInfoReady, setBasicInfoReady] = (0, import_react24.useState)(false);
  const [stepsReady, setStepsReady] = (0, import_react24.useState)(false);
  const [currentScreen, setCurrentScreen] = (0, import_react24.useState)("Basic");
  const [activeStep, setActiveStep] = (0, import_react24.useState)(-1);
  const [{ steps }, dispatch] = (0, import_react24.useReducer)(reducer3, basicState3);
  const {
    addStep,
    removeStep,
    setAnswer,
    setKeywords,
    setStepType,
    setStepReady,
    removeStepType,
    setData,
    setQuestion
  } = actions_default2(dispatch);
  const transition = (0, import_remix5.useTransition)();
  const submitText = transition.state === "submitting" ? "Saving" : "Save";
  (0, import_react24.useEffect)(() => {
    if (data) {
      setData(data.steps);
    }
  }, [data]);
  return /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post",
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      maxWidth: "70%",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement(BasicInfo, {
    data,
    setReady: (val) => setBasicInfoReady(val),
    screen: currentScreen
  }), /* @__PURE__ */ React.createElement(Steps, {
    steps,
    activeStep,
    setReady: (val) => setStepsReady(val),
    screen: currentScreen,
    setStepType: (type, id) => setStepType(type, id),
    removeStepType: (id) => removeStepType(id),
    setAnswer: (answer, number) => setAnswer(answer, number),
    setQuestion: (question, number) => setQuestion(question, number),
    setKeywords: (keywords, number) => {
      setKeywords(keywords, number);
    },
    setStepReady: (isReady, number) => {
      setStepReady(isReady, number);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    style: {
      maxWidth: "25%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: 71,
      position: "relative",
      background: "#fff",
      border: "2px solid #e5e5e5",
      borderRadius: "16px",
      margin: "0 24px 24px",
      padding: "24px"
    }
  }, /* @__PURE__ */ React.createElement("h2", null, "Sidebar"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      setCurrentScreen("Basic");
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
  }, "Basic Info")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      setCurrentScreen("Steps");
      setActiveStep(steps[steps.length - 1].number);
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
  }, "Steps"), /* @__PURE__ */ React.createElement("ul", null, steps.map((stepsItem) => /* @__PURE__ */ React.createElement("li", {
    key: stepsItem.id
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      setCurrentScreen("Steps");
      setActiveStep(stepsItem.number);
    }
  }, "Step ", stepsItem.number + 1), stepsItem.number > 0 ? /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      removeStep(stepsItem.id);
      setActiveStep(steps.length - 2);
    }
  }, "Remove step") : null))), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => {
      addStep();
      if (currentScreen !== "Steps") {
        setCurrentScreen("Steps");
      }
      setActiveStep(steps.length);
    }
  }, "Add step"))), /* @__PURE__ */ React.createElement(FormButton, {
    type: "submit",
    active: stepsReady === true && basicInfoReady === true,
    disabled: stepsReady === false || basicInfoReady === false || submitText !== "Save",
    style: { marginTop: "auto" }
  }, submitText)));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/constructor/$lessonId.tsx
var import_nanoid2 = require("nanoid");
function ErrorBoundary3() {
  const { lessonId } = (0, import_remix6.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading lesson by the id ${lessonId}. Sorry.`);
}
var action3 = async ({ request, params }) => {
  const today = new Date();
  const form = await request.formData();
  const title = form.get("title");
  const steps = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
    let answer = form.get(`answer${index}`);
    answer = answer.trim().split(" ");
    const id = (0, import_nanoid2.nanoid)();
    const returnData = { stepType, number: index, id };
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
        return __spreadProps(__spreadValues({}, returnData), {
          answer,
          text
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
        return __spreadProps(__spreadValues({}, returnData), { answer: answer[0].split(","), variants });
      }
      default: {
        return __spreadProps(__spreadValues({}, returnData), { answer });
      }
    }
  });
  const data = {
    title,
    steps,
    updatedAt: today.getDate().toString()
  };
  const updatedLesson = await prisma.lesson.update({
    where: { id: params.lessonId },
    data: __spreadValues({}, data)
  });
  return (0, import_remix6.redirect)(`/lesson/${updatedLesson.id}`);
};
var loader3 = async ({ params }) => {
  const lesson = await prisma.lesson.findUnique({
    where: { id: params.lessonId }
  });
  if (!lesson) {
    throw new Error("lesson not found");
  }
  const data = { lesson };
  return data;
};
function ConstructorEdit() {
  const { lesson } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Constructor, {
    data: lesson
  });
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/constructor/new.tsx
var new_exports = {};
__export(new_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action4,
  default: () => ConstructorNew
});
init_react();
var import_remix7 = __toESM(require_remix());
var import_nanoid3 = require("nanoid");
function ErrorBoundary4() {
  const { lessonId } = (0, import_remix7.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading lesson by the id ${lessonId}. Sorry.`);
}
var action4 = async ({ request, params }) => {
  const today = new Date();
  const activeProject = await getActiveLanguage(request);
  const form = await request.formData();
  const title = form.get("title");
  const steps = form.getAll("step").map((item, index) => {
    const stepType = form.get(`type${index}`);
    let answer = form.get(`answer${index}`);
    answer = answer.trim().split(" ");
    const id = (0, import_nanoid3.nanoid)();
    const returnData = { stepType, number: index, id };
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
        return __spreadProps(__spreadValues({}, returnData), {
          answer,
          text
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
        return __spreadProps(__spreadValues({}, returnData), { answer: answer[0].split(","), variants });
      }
      default: {
        return __spreadProps(__spreadValues({}, returnData), { answer });
      }
    }
  });
  const data = {
    title,
    steps,
    exp: 0,
    projectId: activeProject == null ? void 0 : activeProject.id,
    updatedAt: today.getDate().toString()
  };
  const lesson = await prisma.lesson.create({ data });
  return (0, import_remix7.redirect)(`/lesson/${lesson.id}`);
};
function ConstructorNew() {
  return /* @__PURE__ */ React.createElement(Constructor, null);
}

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/lessons.tsx
var lessons_exports = {};
__export(lessons_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action5,
  default: () => Repeats,
  loader: () => loader4
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_react25 = require("react");

// app/styles/bin.svg
var bin_default = "/build/_assets/bin-RYGYRSXA.svg";

// route:/Users/newll/Desktop/MyDuo/app/routes/$language/lessons.tsx
function ErrorBoundary5() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "I did a whoopsies.");
}
var action5 = async ({ request }) => {
  const data = await request.formData();
  const id = data.get("lessonId");
  if (!id) {
    throw new Error("Lesson ID wasnt found");
  }
  return await deleteLessonById(id);
};
var loader4 = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage) {
    throw new Error(`We could not find the active language`);
  }
  const data = await getLessons(activeLanguage.id);
  return { data, languageIitle: activeLanguage.title };
};
function Repeats() {
  const { data, languageIitle } = (0, import_remix8.useLoaderData)();
  const [openedLesson, setOpenedLesson] = (0, import_react25.useState)(-1);
  const transition = (0, import_remix8.useTransition)();
  const isDisabled = transition.state !== "idle";
  (0, import_react25.useEffect)(() => {
    if (transition.state === "loading") {
      setOpenedLesson(-1);
    }
  }, [transition.state]);
  return /* @__PURE__ */ React.createElement("section", {
    style: { width: "43%", marginLeft: "10%" }
  }, data == null ? void 0 : data.map(({ title, id, exp }, i) => /* @__PURE__ */ React.createElement(LessonBlock, {
    key: i
  }, /* @__PURE__ */ React.createElement("button", {
    key: id,
    "aria-labelledby": title,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "33.33%",
      textDecoration: "none"
    },
    onClick: () => {
      if (openedLesson !== i) {
        return setOpenedLesson(i);
      }
      return setOpenedLesson(-1);
    }
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp
  }, /* @__PURE__ */ React.createElement(LessonProgressInner, null, `${exp}%`)), /* @__PURE__ */ React.createElement(LessonTitle, null, title)), /* @__PURE__ */ React.createElement(LessonBlockMenu, {
    isOpened: openedLesson === i
  }, /* @__PURE__ */ React.createElement(LessonBlockMenuTriangle, null, /* @__PURE__ */ React.createElement(LessonBlockMenuTriangleContent, null)), /* @__PURE__ */ React.createElement(LessonBlockInner, null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex" }
  }, /* @__PURE__ */ React.createElement(LessonBlockLink, {
    to: `/${languageIitle}/constructor/${id}`
  }, "Edit"), /* @__PURE__ */ React.createElement(import_remix8.Form, {
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
    to: `/lesson/${id}`
  }, "Start +16 XP"))))));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action6,
  loader: () => loader5
});
init_react();
var import_remix9 = __toESM(require_remix());
var action6 = async ({ request }) => {
  return logout(request);
};
var loader5 = async () => {
  return (0, import_remix9.redirect)("/");
};

// route:/Users/newll/Desktop/MyDuo/app/routes/repeat.tsx
var repeat_exports = {};
__export(repeat_exports, {
  default: () => Repeat
});
init_react();
var import_remix10 = __toESM(require_remix());
function Repeat() {
  return /* @__PURE__ */ React.createElement(import_remix10.Outlet, null);
}

// route:/Users/newll/Desktop/MyDuo/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader6
});
init_react();
var import_remix11 = __toESM(require_remix());
var loader6 = async ({ request }) => {
  var _a;
  const user = await getUser(request);
  const languages = await getLanguages(request);
  if (!user) {
    return (0, import_remix11.redirect)("/login");
  }
  return (0, import_remix11.redirect)(`/${(_a = languages == null ? void 0 : languages.find((it) => it.active)) == null ? void 0 : _a.title}/lessons`);
};

// route:/Users/newll/Desktop/MyDuo/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action7,
  default: () => LoginPage,
  loader: () => loader7,
  meta: () => meta
});
init_react();
var import_node3 = require("@remix-run/node");
var import_react27 = require("@remix-run/react");

// app/components/Login.tsx
init_react();
var import_react26 = require("react");
var import_remix12 = __toESM(require_remix());
function Login({ isLogin, setIsLogin, actionData }) {
  var _a;
  const usernameRef = (0, import_react26.useRef)(null);
  const passwordRef = (0, import_react26.useRef)(null);
  (0, import_react26.useEffect)(() => {
    var _a2, _b, _c, _d;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.username) {
      (_b = usernameRef.current) == null ? void 0 : _b.focus();
    }
    if ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) {
      (_d = passwordRef.current) == null ? void 0 : _d.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement(import_remix12.Form, {
    method: "post",
    style: { width: "100%", maxWidth: 375 }
  }, /* @__PURE__ */ React.createElement(H1Title, null, isLogin ? "Login" : "Register"), /* @__PURE__ */ React.createElement(LoginToggle, {
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
  }), ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.username) && /* @__PURE__ */ React.createElement("p", {
    role: "alert",
    id: "username-error"
  }, actionData.errors.username)), /* @__PURE__ */ React.createElement(LoginButton, {
    type: "submit"
  }, isLogin ? "Login" : "Register"));
}

// route:/Users/newll/Desktop/MyDuo/app/routes/login.tsx
var import_react28 = require("react");
var loader7 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_node3.redirect)("/");
  return (0, import_node3.json)({});
};
var action7 = async ({ request }) => {
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
    return (0, import_node3.json)({
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
  const actionData = (0, import_react27.useActionData)();
  const transition = (0, import_react27.useTransition)();
  const [isLogin, setIsLogin] = (0, import_react28.useState)(actionData && ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) === "login" ? true : !actionData ? true : false);
  const buttonText = transition.state === "submitting" ? "loginning" : "login";
  return /* @__PURE__ */ React.createElement(LoginContainer, null, /* @__PURE__ */ React.createElement(LoginContinerInner, null, /* @__PURE__ */ React.createElement(Login, {
    isLogin,
    setIsLogin,
    actionData
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "28f40f7e", "entry": { "module": "/build/entry.client-VZJJF3NU.js", "imports": ["/build/_shared/chunk-6PAOBXQV.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-F7C45RC3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language": { "id": "routes/$language", "parentId": "root", "path": ":language", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language-UNPROYAR.js", "imports": ["/build/_shared/chunk-Q3S5S6TJ.js", "/build/_shared/chunk-HGHGZEQA.js", "/build/_shared/chunk-6H6WQFFR.js", "/build/_shared/chunk-CGTEMN5O.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$language/constructor/$lessonId": { "id": "routes/$language/constructor/$lessonId", "parentId": "routes/$language", "path": "constructor/:lessonId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/constructor/$lessonId-N3KVMEOT.js", "imports": ["/build/_shared/chunk-5BOMVZD7.js", "/build/_shared/chunk-4W5GYWLR.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language/constructor/new": { "id": "routes/$language/constructor/new", "parentId": "routes/$language", "path": "constructor/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/constructor/new-VDGRV75Y.js", "imports": ["/build/_shared/chunk-5BOMVZD7.js", "/build/_shared/chunk-4W5GYWLR.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language/lessons": { "id": "routes/$language/lessons", "parentId": "routes/$language", "path": "lessons", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/lessons-LUGLCXZH.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BD67KWZ4.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/lesson/$lessonId": { "id": "routes/lesson/$lessonId", "parentId": "root", "path": "lesson/:lessonId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/lesson/$lessonId-EIKUXC33.js", "imports": ["/build/_shared/chunk-4W5GYWLR.js", "/build/_shared/chunk-6H6WQFFR.js", "/build/_shared/chunk-CGTEMN5O.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-Q7V2RPK5.js", "imports": ["/build/_shared/chunk-Q3S5S6TJ.js", "/build/_shared/chunk-CGTEMN5O.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-X6KLJBK3.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/repeat": { "id": "routes/repeat", "parentId": "root", "path": "repeat", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/repeat-4B6DZ7OU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-28F40F7E.js" };

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
  "routes/lesson/$lessonId": {
    id: "routes/lesson/$lessonId",
    parentId: "root",
    path: "lesson/:lessonId",
    index: void 0,
    caseSensitive: void 0,
    module: lessonId_exports
  },
  "routes/$language": {
    id: "routes/$language",
    parentId: "root",
    path: ":language",
    index: void 0,
    caseSensitive: void 0,
    module: language_exports
  },
  "routes/$language/constructor/$lessonId": {
    id: "routes/$language/constructor/$lessonId",
    parentId: "routes/$language",
    path: "constructor/:lessonId",
    index: void 0,
    caseSensitive: void 0,
    module: lessonId_exports2
  },
  "routes/$language/constructor/new": {
    id: "routes/$language/constructor/new",
    parentId: "routes/$language",
    path: "constructor/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/$language/lessons": {
    id: "routes/$language/lessons",
    parentId: "routes/$language",
    path: "lessons",
    index: void 0,
    caseSensitive: void 0,
    module: lessons_exports
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
 * @remix-run/node v1.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map