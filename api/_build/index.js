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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
var import_react2 = require("@remix-run/react");
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
    href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    style: { margin: 0 }
  }, children, /* @__PURE__ */ React.createElement(import_react2.LiveReload, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null)));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/skill/$title/$chapter.tsx
var chapter_exports = {};
__export(chapter_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => LessonScreen,
  loader: () => loader
});

// app/modules/Skill/index.tsx
var import_react21 = require("react");

// app/styles/close.svg
var close_default = "/build/_assets/close-D2E3HOMK.svg";

// app/components/lib.tsx
var import_react3 = require("@emotion/react");
var import_styled = __toESM(require("@emotion/styled"));
var import_react4 = require("@remix-run/react");
var HorizontalList = import_styled.default.ul((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 0,
  height: "100%",
  padding: "0 9px"
}));
var ListItem = (0, import_styled.default)("li")`
  height: 100%;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
var LessonsContainer = (0, import_styled.default)("section")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;
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
var MenuAppear = import_react3.keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%, 0);
  }
`;
var LessonBlockMenu = (0, import_styled.default)("div")`
  display: ${(props) => props.isOpened ? "block" : "none"};
  position: absolute;
  left: 50%;
  top: calc(100% + 20px);
  transform: translate(-50%);
  z-index: 1;
  animation-name: ${MenuAppear};
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
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
  width: 295px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;
var LessonBlockLink = (0, import_styled.default)(import_react4.Link)`
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
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  &:hover {
    filter: brightness(1.1);
  }
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
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  &:hover img {
    filter: brightness(1.1);
  }
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
    font-family: "Nunito";
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
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
var ProgressBar = (0, import_styled.default)("div")`
  width: 100%;
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
    transition: width 0.2s ease;
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
var LeaveLessonButton = (0, import_styled.default)("button")`
  margin-right: 21px;
  height: 16px;
  margin-top: -3px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: inherit;
`;
var LeaveLessonLink = (0, import_styled.default)(import_react4.Link)`
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
  border-radius: 10px;
  padding: 10px 12px;
  min-height: 170px;
  width: 100%;
  -webkit-appearance: none;
  resize: none;
  flex-grow: 1;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  line-height: 24px;
  color: #3c3c3c;
  font-size: 19px;
  font-family: "Nunito";
  font-weight: 400;
  letter-spacing: 1px;
`;
var LoginTitle = (0, import_styled.default)("h1")`
  font-size: 26px;
  margin: 10px 0 15px;
  font-family: Nunito;
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
  font-family: "Nunito", sans-serif;
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
  font-family: "Nunito", sans-serif;
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
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: ${(props) => props.hidden ? "none" : "block"};
  transition: filter 0.2s;
  &:hover:enabled {
    filter: brightness(1.1);
  }
  &:active:enabled {
    filter: brightness(1.1);
    height: 46px;
    transform: translateY(4px);
  }
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
  font-family: "Nunito";
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
  &:hover {
    opacity: 0.85;
  }
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
  font-family: "Nunito", sans-serif;
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
  font: 600 15px "Nunito";
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
  font: 600 15px "Nunito";
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
var MenuNavLink = (0, import_styled.default)(import_react4.NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Nunito";
  font-weight: 800;
  font-size: 15px;
  color: #afafaf;
  letter-spacing: 0.8px;
  display: flex;
  align-items: center;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.7) contrast(2.5);
  }
  &.active:hover {
    filter: none;
  }
`;
var ActiveLanguageButton = (0, import_styled.default)("button")`
  color: #3c3c3c;
  border: none;
  background-color: inherit;
  font-family: "Nunito";
  font-weight: 800;
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
  padding: 16px 20px;
  background-color: inherit;
  color: #3c3c3c;
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  text-align: left;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(175, 175, 175, 0.15);
  }
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
  font-family: "Nunito";
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
  font-family: "Nunito";
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 0;
  transition: filter 0.2s ease;
  &:hover {
    filter: brightness(0.7) contrast(2.5);
  }
`;
var PracticeLastAddedContainer = (0, import_styled.default)("div")`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: solid #e5e5e5;
  border-width: 2px 2px 4px;
  position: sticky;
  margin-bottom: 54px;
  bottom: 24px;
  background-color: #fff;
  &:hover {
    filter: brightness(0.9);
  }
`;
var PracticeLastAddedLink = (0, import_styled.default)(import_react4.Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  filter: inherit;
`;
var ErrorMessage = (0, import_styled.default)("p")`
  line-height: 20px;
  font-family: "Nunito", sans-serif;
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
  position: fixed;
`;
var ExpProgressTitle = (0, import_styled.default)("h2")`
  color: #3c3c3c;
  font-size: 24px;
  line-height: 26px;
  margin: 0 0 25px;
  font-family: Nunito;
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
  font-family: Nunito;
  margin: 0;
`;
var SkillsListContainer = (0, import_styled.default)("section")`
  width: 65%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 95px);
`;
var SkillsLineBlock = (0, import_styled.default)("div")`
  width: 100%;
  max-width: 440px;
  margin: 0 auto 38px auto;
`;
var LinkWithHover = (0, import_styled.default)("a")`
  &:hover {
    filter: brightness(1.3);
  }
`;

// app/modules/Constructor/components/lib.ts
var import_styled2 = __toESM(require("@emotion/styled"));
var import_react5 = require("@remix-run/react");
var ConstructorForm = (0, import_styled2.default)(import_react5.Form)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 95px);
`;
var ConstructorFormInner = (0, import_styled2.default)("section")`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  padding-left: 30px;
`;
var LessonTitleInput = (0, import_styled2.default)("input")`
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
var ConstructorMenu = (0, import_styled2.default)("div")`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  display: block;
  margin: 0 24px 24px;
  padding: 24px;
  width: 380px;
`;
var ScreenContainer = (0, import_styled2.default)("section")`
  position: absolute;
  top: 0;
  width: calc(100% - 60px);
  text-align: center;
  visibility: ${(props) => props.screen !== props.target ? "hidden" : "visible"};
`;
var ConstructorSidebar = (0, import_styled2.default)("section")`
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
var BtnClose = (0, import_styled2.default)("button")`
  position: absolute;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: none;
  background-color: inherit;
  padding: 0;
  left: 30px;
  bottom: -60px;
`;
var BtnCloseImage = (0, import_styled2.default)("img")`
  width: 16px;
  height: 16px;
  vertical-align: initial;
  transition: filter 0.2s ease;
  opacity: 0.3;
  &:hover {
    filter: brightness(0.7) contrast(2.5);
  }
`;
var VariantsList = (0, import_styled2.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
var VariantsItem = (0, import_styled2.default)("li")`
  min-width: 240px;
`;
var PairsList = (0, import_styled2.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 600px;
  margin: 0 auto;
`;

// app/components/Progress.tsx
var Progress = () => {
  const { progress, leave } = useSkill();
  return /* @__PURE__ */ React.createElement(ProgressBarContainer, null, progress === 0 ? /* @__PURE__ */ React.createElement(LeaveLessonLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement(BtnCloseImage, {
    src: close_default,
    alt: "Close the skill"
  })) : /* @__PURE__ */ React.createElement(LeaveLessonButton, {
    onClick: () => leave()
  }, /* @__PURE__ */ React.createElement(BtnCloseImage, {
    src: close_default,
    alt: "Close the skill"
  })), /* @__PURE__ */ React.createElement(ProgressBar, {
    progress
  }));
};
var Progress_default = Progress;

// app/modules/Skill/reducer.ts
var import_react6 = require("react");
var continueContent = (content, lessonSteps) => {
  const newContent = lessonSteps.shift();
  if (!newContent) {
    return content;
  }
  if (newContent.stepType !== "Pairs") {
    newContent.difficulty = null;
  }
  if ((newContent == null ? void 0 : newContent.variants.length) || (newContent == null ? void 0 : newContent.isToChoose)) {
    newContent.difficulty = "easy";
  }
  if (content == null ? void 0 : content.difficulty) {
    newContent.difficulty = content.difficulty;
  }
  return newContent;
};
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
    chapter: 1,
    languageId: "",
    difficulty: "easy"
  },
  lessonSteps: [],
  maxSteps: 0,
  skillState: { status: "idle", formDisabled: false, buttonDisabled: true },
  totalXP: 0
};
function skillReducer(state, action10) {
  const { content, stepNumber, maxSteps, lessonSteps, skillState } = state;
  const positiveState = __spreadProps(__spreadValues({}, state), {
    progress: stepNumber / maxSteps,
    skillState: {
      status: "right",
      formDisabled: true,
      buttonDisabled: false
    }
  });
  const negativeState = __spreadProps(__spreadValues({}, state), {
    lessonSteps: [...lessonSteps, content],
    stepNumber: stepNumber - 1,
    skillState: {
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
        skillState: __spreadProps(__spreadValues({}, skillState), {
          status: isResults ? "results" : "idle",
          formDisabled: false,
          buttonDisabled: isResults ? false : true
        })
      });
    case "SETUP" /* setup */:
      const { steps, totalXP } = action10;
      return __spreadProps(__spreadValues({}, basicState), {
        stepNumber: 1,
        lessonSteps: steps,
        maxSteps: steps.length,
        content: continueContent(basicState.content, steps),
        totalXP
      });
    case "RESULTS" /* results */:
      return __spreadProps(__spreadValues({}, state), {
        stepNumber: stepNumber + 1,
        skillState: __spreadProps(__spreadValues({}, skillState), { status: "results" })
      });
    case "SET_STATE_RIGHT" /* setStateRight */:
      return positiveState;
    case "SET_STATE_WRONG" /* setStateWrong */:
      return negativeState;
    case "SET_CHECK_DISABLED" /* setCheckDisabled */:
      const { disabled } = action10;
      return __spreadProps(__spreadValues({}, state), {
        skillState: __spreadProps(__spreadValues({}, skillState), { buttonDisabled: disabled })
      });
    case "UPDATE_STATE" /* updateState */:
      const { update } = action10;
      return __spreadValues(__spreadValues({}, state), update);
    case "SET_DIFFICULTY" /* setDifficulty */:
      const { difficulty } = action10;
      return __spreadProps(__spreadValues({}, state), { content: __spreadProps(__spreadValues({}, state.content), { difficulty }) });
    case "LEAVE" /* leave */:
      return __spreadProps(__spreadValues({}, state), { skillState: __spreadProps(__spreadValues({}, skillState), { status: "leaving" }) });
    case "RESET_STATUS" /* resetStatus */:
      return __spreadProps(__spreadValues({}, state), { skillState: __spreadProps(__spreadValues({}, skillState), { status: "idle" }) });
    default: {
      throw new Error(`Unsupported action: ${action10}`);
    }
  }
}
function useSkillReducer({
  initialState: initialState5 = basicState,
  reducer: reducer2 = skillReducer
} = {}) {
  const [state, dispatch] = (0, import_react6.useReducer)(reducer2, initialState5);
  const { content, progress, skillState, stepNumber, maxSteps, totalXP } = state;
  const continueSkill = () => dispatch({ type: "CONTINUE" /* continue */ });
  const setup = (steps, totalXP2) => dispatch({ type: "SETUP" /* setup */, steps, totalXP: totalXP2 });
  const showResults = () => dispatch({ type: "RESULTS" /* results */ });
  const setStateRight = () => dispatch({ type: "SET_STATE_RIGHT" /* setStateRight */ });
  const setStateWrong = () => dispatch({ type: "SET_STATE_WRONG" /* setStateWrong */ });
  const setCheckDisabled = (disabled) => dispatch({ type: "SET_CHECK_DISABLED" /* setCheckDisabled */, disabled });
  const updateState = (update) => dispatch({ type: "UPDATE_STATE" /* updateState */, update });
  const setDifficulty = (difficulty) => dispatch({ type: "SET_DIFFICULTY" /* setDifficulty */, difficulty });
  const leave = () => dispatch({ type: "LEAVE" /* leave */ });
  const resetStatus = () => dispatch({ type: "RESET_STATUS" /* resetStatus */ });
  return {
    content,
    progress,
    skillState,
    stepNumber,
    maxSteps,
    totalXP,
    continueSkill,
    setup,
    showResults,
    setStateRight,
    setStateWrong,
    setCheckDisabled,
    updateState,
    setDifficulty,
    leave,
    resetStatus
  };
}
var defaultSkillContextState = __spreadProps(__spreadValues({}, basicState), {
  setup: () => {
  },
  continueSkill: () => {
  },
  showResults: () => {
  },
  setStateRight: () => {
  },
  setStateWrong: () => {
  },
  setCheckDisabled: () => {
  },
  updateState: () => {
  },
  setDifficulty: () => {
  },
  leave: () => {
  },
  resetStatus: () => {
  }
});

// app/modules/Skill/index.tsx
var import_react22 = require("@remix-run/react");

// app/modules/Skill/components/Results.tsx
var import_react10 = __toESM(require("react"));

// app/hooks/useFocus.ts
var import_react7 = require("react");
var useFocus = (dependency) => {
  const ref = (0, import_react7.useRef)(null);
  (0, import_react7.useEffect)(() => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.focus();
  }, [dependency]);
  return ref;
};

// app/modules/Skill/components/lib.ts
var import_react8 = require("@emotion/react");
var import_styled3 = __toESM(require("@emotion/styled"));
var import_react9 = require("@remix-run/react");

// app/styles/right.svg
var right_default = "/build/_assets/right-SZKSLJM7.svg";

// app/styles/wrong.svg
var wrong_default = "/build/_assets/wrong-N2O2S4W4.svg";

// app/modules/Skill/components/lib.ts
var LessonContainer = (0, import_styled3.default)("section")`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
var LessonFooter = (0, import_styled3.default)("section")`
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
var LessonFooterInner = (0, import_styled3.default)("div")`
  max-width: 920px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
var LessonFooterMessage = (0, import_styled3.default)("div")`
  width: 100%;
  display: ${({ status }) => status === "right" || status === "wrong" ? "flex" : "none"};
  align-items: center;
`;
var LessonFooterTitle = (0, import_styled3.default)("h2")`
  margin: 0;
  font-family: "Nunito", sans-serif;
  line-height: 30px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.2px;
`;
var LessonFooterText = (0, import_styled3.default)("p")`
  margin: 5px 0 0 0;
  font-size: 17px;
  font-family: "Nunito";
  overflow-y: scroll;
  max-height: 60px;
`;
var LessonButton = (0, import_styled3.default)("button")`
  border: 0 solid transparent;
  background-color: ${(props) => props.stateWrong ? "#ff4b4b" : props.stateRight ? "#58cc02" : props.active ? "#78C83D" : props.skip ? "#fff" : "#E5E5E5"};
  color: ${(props) => props.active ? "#fff" : "#AFAFAF"};
  border-color: ${(props) => props.stateWrong ? "#ea2b2b" : props.stateRight ? "#58a700" : props.skip ? "#e5e5e5" : "white"};
  border-width: ${(props) => props.skip ? "2px" : 0};
  border-bottom-width: ${(props) => props.active || props.skip ? `4px` : "transparent"};
  border-bottom-color: ${(props) => props.skip ? "#e5e5e5" : props.stateWrong ? "#ea2b2b" : "#58a700"};
  height: 50px;
  width: 150px;
  cursor: ${(props) => props.active || props.skip ? "pointer" : "default"};
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: ${(props) => props.hidden ? "none" : "block"};
  transition: filter 0.2s;
  &:hover:enabled {
    filter: ${(props) => props.skip ? "brightness(.9)" : "brightness(1.1)"};
  }
  &:active:enabled {
    filter: ${(props) => props.skip ? "brightness(.9)" : "brightness(1.1)"};
    border-bottom-width: ${(props) => props.skip ? `2px` : "0"};
    height: 46px;
    transform: translateY(4px);
  }
`;
var ChangeDifficultyBtn = (0, import_styled3.default)("button")`
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  color: #afafaf;
  cursor: pointer;
  &:hover {
    filter: brightness(1.2);
  }
`;
var LessonAppear = import_react8.keyframes`
  0% {
    opacity: 0;
    transform: translateX(150px)
  }

  100% {
    opacity: 1;
    transform: translateX(0)
  }
`;
var LessonBody = (0, import_styled3.default)("div")`
  margin: 72px 29% 4%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: calc(100% - 240px);
  animation-name: ${LessonAppear};
  animation-duration: 0.2s;
`;
var LessonBodyTitle = (0, import_styled3.default)("h3")`
  font-family: "Nunito";
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
var LessonBodyMessage = (0, import_styled3.default)("div")`
  padding: 12px 15px 12px 21px;
  border: 2px solid #dedede;
  font-family: "Nunito";
  font-weight: 400;
  font-size: 18px;
  color: #4c4c4c;
  margin: 0 21px;
  position: relative;
  z-index: 1;
`;
var LessonBodyVariants = (0, import_styled3.default)("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
`;
var LessonBodyVariant = (0, import_styled3.default)("div")`
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
var LessonBodyWelcome = (0, import_styled3.default)("div")``;
var LessonBodyResults = (0, import_styled3.default)("div")``;
var VariantItem = (0, import_styled3.default)("button")`
  background-color: ${(props) => props.isFocused ? "rgb(221, 244, 255)" : "inherit"};
  height: 60px;
  border: 1px solid;
  border-color: ${(props) => props.isFocused ? "#84d8ff" : "#e5e5e5"};
  border-radius: 12px;
  border-width: 2px 2px 4px;
  cursor: ${(props) => props.isDisabled ? "default" : "pointer"};
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  text-align: center;
  color: ${(props) => props.isFocused ? "#1899d6" : props.isDisabled ? "#e5e5e5" : "#4b4b4b"};
  font-size: 19px;
  line-height: 1.4;
  padding: 12px 16px;
  width: 100%;
  transition: background-color 0.1s;
  outline: none;
  &:hover {
    background-color: ${(props) => props.isFocused ? "#ddf4ff" : props.isDisabled ? "inherit" : "#f7f7f7"};
  }
  &:active {
    transform: translateY(2px) translateZ(0);
  }
`;
var LessonTitle2 = (0, import_styled3.default)("h1")`
  font-size: 30px;
  font-family: "Nunito", sans-serif;
  line-height: 1.25;
  color: #3c3c3c;
  text-align: left;
  font-weight: 800;
  cursor: default;
  margin: 0;
`;
var LessonQuestion = (0, import_styled3.default)("p")`
  font-size: 19px;
  line-height: 39px;
  font-family: "Nunito", sans-serif;
  color: #3c3c3c;
  padding: 12px 24px;
  margin-left: 8px;
  background-color: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: default;
`;
var LessonQuestionTriangleContainer = (0, import_styled3.default)("div")`
  height: 10px;
  overflow: hidden;
  width: 20px;
  position: absolute;
  left: -5px;
  margin: 15px 0;
  top: calc(50% - 15px);
  transform: translateY(-50%) rotate(-90deg);
`;
var LessonQuestionTriangle = (0, import_styled3.default)("span")`
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
var messageIconAppear = import_react8.keyframes`

  50% {
    transform: scale(1.1)
  }

  75% {
    transform: scale(0.9)
  }

  100% {
    transform: scale(1)
  }
`;
var LessonFooterIcon = (0, import_styled3.default)("div")`
  border-radius: 98px;
  display: block;
  float: left;
  height: 80px;
  width: 80px;
  background: url(${({ status }) => status === "right" ? right_default : wrong_default});

  background-position: ${({ status }) => status === "right" ? "-145px -64px" : "-183px -65px"};
  background-color: #fff;
  display: block;
  animation-name: ${messageIconAppear};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
`;
var ResultsContainer = (0, import_styled3.default)("section")`
  display: flex;
  height: calc(100vh - 140px);
  justify-content: center;
  outline: none;
`;
var ResultsHiddenForm = (0, import_styled3.default)(import_react9.Form)`
  position: absolute;
  width: 1px;
  height: 1px;
  top: -1000px;
  left: -1000px;
`;
var ResultsTitle = (0, import_styled3.default)("h2")`
  margin: 25px 0;
  font-family: "Nunito";
  font-size: 24px;
  font-weight: 800;
  color: #3c3c3c;
`;
var ResultsDescription = (0, import_styled3.default)("span")`
  font-size: 19px;
  line-height: 1.4;
  color: #777;
  font-family: "Nunito";
`;
var ResultsBlock = (0, import_styled3.default)("div")`
  padding: 50px 100px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
`;
var PairsList2 = (0, import_styled3.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  margin: 30px 0 0;
  padding: 0;
`;
var PairsItem = (0, import_styled3.default)("li")`
  margin-bottom: 5px;
  position: relative;
  width: 48%;
`;

// app/styles/results.png
var results_default = "/build/_assets/results-IW73HFOZ.png";

// app/modules/Skill/components/Results.tsx
var Results = import_react10.default.forwardRef((props, ref) => {
  const { totalXP } = useSkill();
  const containerRef = useFocus();
  return /* @__PURE__ */ import_react10.default.createElement(ResultsContainer, {
    ref: containerRef,
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        props.onSubmit();
      }
    },
    tabIndex: 0
  }, /* @__PURE__ */ import_react10.default.createElement(ResultsHiddenForm, {
    method: "post",
    ref
  }, /* @__PURE__ */ import_react10.default.createElement("input", {
    type: "text",
    name: "exp",
    value: "16",
    readOnly: true
  })), /* @__PURE__ */ import_react10.default.createElement(ResultsBlock, null, /* @__PURE__ */ import_react10.default.createElement("img", {
    src: results_default,
    width: "140",
    alt: "Results picture"
  }), /* @__PURE__ */ import_react10.default.createElement(ResultsTitle, null, "You've earned ", totalXP + 10, " XP today"), /* @__PURE__ */ import_react10.default.createElement("span", null, /* @__PURE__ */ import_react10.default.createElement(ResultsDescription, null, "Practice Complete!"), /* @__PURE__ */ import_react10.default.createElement(ResultsDescription, {
    style: { color: "#ffc800", fontWeight: "700", marginLeft: "10px" }
  }, "+10 XP"))));
});

// app/modules/Skill/components/Footer.tsx
var import_react13 = require("@remix-run/react");

// app/styles/easier.svg
var easier_default = "/build/_assets/easier-J6XFH7BL.svg";

// app/styles/harder.svg
var harder_default = "/build/_assets/harder-YCUE4ZYE.svg";

// app/utils.ts
var import_react11 = require("@remix-run/react");
var import_react12 = require("react");
var isItemInArray = (arr, item) => {
  return !!arr.filter((arrItem) => arrItem === item).length;
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

// app/modules/Skill/components/Footer.tsx
function Footer({
  checkAnswer = () => {
  }
}) {
  const transition = (0, import_react13.useTransition)();
  const { skillState, content, continueSkill, setStateWrong, setDifficulty } = useSkill();
  const { answer, text, difficulty } = content;
  const { status, buttonDisabled } = skillState;
  const buttonText = transition.state === "submitting" ? "Saving..." : transition.state === "loading" ? "Saved!" : status === "right" ? "Next" : status !== "idle" ? "Continue" : "Check";
  const getFooterText = (text2, answer2) => {
    if (text2 && answer2.length) {
      if (answer2.length === 1) {
        return doesItemContainSign(text2.split(" ")[Number(answer2[0])]).newItem;
      }
      return text2;
    }
    return answer2.join(" ");
  };
  const handleContinue = () => {
    if (buttonText === "Saving..." || buttonText === "Saved!" || skillState.buttonDisabled) {
      return;
    }
    if (status === "idle") {
      return checkAnswer();
    }
    continueSkill();
  };
  const handleSkip = () => {
    setStateWrong();
  };
  return /* @__PURE__ */ React.createElement(LessonFooter, {
    status
  }, /* @__PURE__ */ React.createElement(LessonFooterInner, null, /* @__PURE__ */ React.createElement(LessonButton, {
    onClick: handleSkip,
    skip: true,
    hidden: status !== "idle" || content.stepType === "Pairs"
  }, "Skip"), difficulty && status === "idle" && /* @__PURE__ */ React.createElement(ChangeDifficultyBtn, {
    onClick: () => setDifficulty(difficulty === "easy" ? "hard" : "easy")
  }, /* @__PURE__ */ React.createElement("img", {
    src: difficulty === "easy" ? harder_default : easier_default,
    alt: difficulty,
    height: 19,
    width: 27,
    style: { marginRight: 10 }
  }), /* @__PURE__ */ React.createElement("p", null, "Make ", difficulty === "easy" ? "harder" : "easier")), /* @__PURE__ */ React.createElement(LessonFooterMessage, {
    status
  }, (status === "right" || status === "wrong") && /* @__PURE__ */ React.createElement(LessonFooterIcon, {
    status
  }), /* @__PURE__ */ React.createElement("div", {
    style: { marginLeft: 16, width: "calc(100% - 209px)" }
  }, /* @__PURE__ */ React.createElement(LessonFooterTitle, null, status === "wrong" ? "Right answer: " : "Great!"), status === "wrong" && /* @__PURE__ */ React.createElement(LessonFooterText, null, getFooterText(text, answer)))), /* @__PURE__ */ React.createElement(LessonButton, {
    active: !buttonDisabled,
    stateRight: status === "right",
    stateWrong: status === "wrong",
    onClick: handleContinue,
    disabled: buttonText === "Saving..." || buttonText === "Saved!" || buttonDisabled,
    style: {
      marginLeft: status === "results" || content.stepType === "Pairs" ? "auto" : 0
    }
  }, buttonText)));
}

// app/modules/Skill/components/Lesson.tsx
var import_react14 = __toESM(require("react"));
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
  const { skillState, continueSkill, setCheckDisabled } = useSkill();
  const { status, formDisabled, buttonDisabled } = skillState;
  const [userAnswer, setUserAnswer] = (0, import_react14.useState)(initialValue);
  const lessonRef = useFocus(status);
  (0, import_react14.useEffect)(() => {
    if (disabledCondition === null) {
      return;
    }
    if (disabledCondition(userAnswer)) {
      return setCheckDisabled(false);
    }
    return setCheckDisabled(true);
  }, [userAnswer]);
  const onKeyDownHandle = (event, callback) => {
    if (callback) {
      callback(event);
    }
    if (keyDownHandle) {
      keyDownHandle(event, setUserAnswer);
    }
    if (event.key !== "Enter" || buttonDisabled) {
      return;
    }
    event.preventDefault();
    if (status === "idle") {
      return checkAnswer(userAnswer);
    }
    return continueSkill();
  };
  (0, import_react14.useEffect)(() => {
    if (!formDisabled && setUserAnswer) {
      setUserAnswer(initialValue);
    }
  }, [formDisabled]);
  return /* @__PURE__ */ import_react14.default.createElement("div", {
    tabIndex: 0,
    onKeyDown: onKeyDownHandle,
    ref: lessonRef,
    style: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      outline: "none"
    }
  }, /* @__PURE__ */ import_react14.default.createElement(LessonBody, null, import_react14.default.Children.map(children, (child) => {
    return import_react14.default.cloneElement(child, __spreadValues({
      userAnswer,
      setUserAnswer,
      keyDownCheck: onKeyDownHandle,
      checkAnswer: (uAnswer) => checkAnswer(uAnswer, setUserAnswer)
    }, props));
  })), /* @__PURE__ */ import_react14.default.createElement(Footer, {
    checkAnswer: () => checkAnswer(userAnswer)
  }));
};

// app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx
var import_react17 = require("react");

// app/modules/Constructor/Levels/components/lib.tsx
var import_styled4 = __toESM(require("@emotion/styled"));
var StepContent = (0, import_styled4.default)("div")`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 60px 24px;
  min-height: 300px;
  margin-top: 20px;
`;
var StepHeader = (0, import_styled4.default)("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  position: relative;
`;
var ChooseStyle = (0, import_styled4.default)("div")`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  justify-content: center;
  align-items: self-end;
  margin: auto 0;
`;
var StyleButton = (0, import_styled4.default)("button")`
  padding: 35px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  font-family: "Nunito";
`;
var InsertWordsTextBlock = (0, import_styled4.default)("div")`
  min-height: 170px;
  flex-grow: 1;
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
  font-family: "Nunito";
  margin-top: 30px;
`;
var InsertWordsInput = (0, import_styled4.default)("input")`
  border: none;
  font-size: 19px;
  margin: 0 7px;
  width: ${(props) => props.length * 13}px;
  border-bottom: 2px solid #afafaf;
  cursor: ${(props) => props.isToChoose ? "pointer" : "text"};
  caret-color: #1caff6;
  padding: 0;
  &:disabled {
    background: inherit;
    cursor: default;
  }
  &:focus {
    border-bottom-color: #1caff6;
    outline: none;
  }
`;
var InsertWordsAnswerField = (0, import_styled4.default)("span")`
  margin: 0 7px;
  width: ${(props) => props.length * 13}px;
  border-bottom: 2px solid #afafaf;
`;
var VariantsList2 = (0, import_styled4.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
`;
var VariantsItem2 = (0, import_styled4.default)("li")`
  position: relative;
  margin-bottom: 8px;
  background-color: white;
`;
var VariantItemInput = (0, import_styled4.default)("input")`
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  border-width: 2px 2px 4px;
  position: relative;
  touch-action: manipulation;
  transform: translateZ(0);
  user-select: none;
  text-align: left;
  color: #4b4b4b;
  font-size: 19px;
  line-height: 1.4;
  padding: 12px 16px 12px 56px;
  width: 100%;
`;
var VariantItemNumber = (0, import_styled4.default)("span")`
  border: 2px solid #e5e5e5;
  border-color: ${(props) => props.isConnected ? "#78C83D" : props.isFocused ? "rgb(132, 216, 255)" : "#e5e5e5"};
  border-radius: 8px;
  color: ${(props) => props.isConnected ? "#78C83D" : props.isFocused ? "rgb(24, 153, 214)" : "#afafaf"};
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
  font-family: "Nunito";
`;
var SidebarList = (0, import_styled4.default)("ul")`
  margin-bottom: auto;
`;
var SidebarBtn = (0, import_styled4.default)("button")`
  color: #3c3c3c;
  display: block;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  padding: 15px 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// app/modules/Skill/components/InsertWords/lib.ts
var import_styled5 = __toESM(require("@emotion/styled"));
var PuzzleContainer = (0, import_styled5.default)("section")`
  width: 100%;
`;
var PuzzleList = (0, import_styled5.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 30px 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
`;
var PuzzleItem = (0, import_styled5.default)("li")`
  margin: 0 16px 8px 0;
  position: ${(props) => props.alreadyChoosen ? "absolute" : "relative"};
  top: ${(props) => props.alreadyChoosen ? "-1000px" : "0"};
`;
var VariantsContainer = (0, import_styled5.default)("section")`
  width: 100%;
  margin-top: 20px;
  outline: none;
`;
var VariantsList3 = (0, import_styled5.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
var VariantsItem3 = (0, import_styled5.default)("li")`
  position: relative;
  margin-bottom: 8px;
  width: 49%;
`;

// app/modules/Skill/components/InsertWords/Puzzle.tsx
function Puzzle({ values, setValues }) {
  const { content } = useSkill();
  const { answer: contentAnswer, text, difficulty, isToChoose } = content;
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
  const indexes = contentAnswer.length === 1 ? contentAnswer[0].split(",") : contentAnswer;
  const words = indexes.map((idx) => {
    const textItem = text == null ? void 0 : text.split(" ")[Number(idx)];
    return doesItemContainSign(textItem).newItem;
  });
  return isToChoose && difficulty === "easy" ? /* @__PURE__ */ React.createElement(PuzzleContainer, null, /* @__PURE__ */ React.createElement(PuzzleList, null, words.map((answer, idx) => {
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
  }))) : null;
}

// app/modules/Skill/components/InsertWords/Variants.tsx
var import_react15 = require("react");
function Variants({
  values,
  setValues,
  keyDownCheck
}) {
  const myRef = (0, import_react15.useRef)(null);
  const { content, skillState } = useSkill();
  const { variants, difficulty } = content;
  (0, import_react15.useEffect)(() => {
    if (skillState.status === "idle") {
      const timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null ? void 0 : _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]);
  const KeyDownHandler = (e) => {
    variants.forEach((variant, idx) => {
      if (Number(e.key) === idx + 1) {
        setValues([variant.value]);
      }
    });
  };
  return variants && difficulty === "easy" ? /* @__PURE__ */ React.createElement(VariantsContainer, {
    tabIndex: 0,
    ref: myRef,
    onKeyDown: (e) => keyDownCheck(e, (e2) => KeyDownHandler(e2))
  }, /* @__PURE__ */ React.createElement(VariantsList3, null, variants.map(({ value }, idx) => /* @__PURE__ */ React.createElement(VariantsItem3, {
    key: idx,
    onClick: () => setValues([value])
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    isFocused: value === values[0]
  }, idx + 1), /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: value === values[0]
  }, value))))) : null;
}

// app/modules/Skill/components/InsertWords/Text.tsx
var import_react16 = require("react");
function Text({ values, setValues }) {
  const { content, skillState } = useSkill();
  const { text, isToChoose, variants, answer, difficulty } = content;
  (0, import_react16.useEffect)(() => {
    if (!skillState.formDisabled) {
      setValues([...new Array(answer.length).fill(" ")]);
    }
  }, [skillState.formDisabled]);
  const myRef = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
    if (skillState.status === "idle" && !isToChoose && !variants.length) {
      const timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null ? void 0 : _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]);
  const handleChange = (evt, index) => {
    const target = evt.target;
    setValues((prevArray) => {
      const newArray = prevArray;
      newArray[index] = target.value;
      return [...newArray];
    });
  };
  const handleInputClick = (evt, index) => {
    const target = evt.target;
    if (target.value === " " || target.value.length === 0) {
      return;
    }
    target.blur();
    setValues((prevArray) => {
      prevArray[index] = " ";
      return [...prevArray];
    });
  };
  return /* @__PURE__ */ React.createElement("section", null, text == null ? void 0 : text.split(" ").map((textItem, textItemIndex) => {
    const { newItem, sign } = doesItemContainSign(textItem);
    if (answer.includes(textItemIndex.toString())) {
      return answer.map((indexItem, index) => {
        if (textItemIndex !== Number(indexItem)) {
          return null;
        }
        return /* @__PURE__ */ React.createElement(import_react16.Fragment, {
          key: index
        }, difficulty === "easy" && !!variants.length ? /* @__PURE__ */ React.createElement(InsertWordsInput, {
          type: "text",
          length: newItem.length,
          disabled: true,
          value: values[index],
          style: { color: "#fff" }
        }) : difficulty === "easy" && isToChoose ? /* @__PURE__ */ React.createElement(InsertWordsInput, {
          type: "text",
          length: newItem.length,
          value: values[index],
          onClick: (evt) => {
            handleInputClick(evt, index);
          },
          style: { cursor: "pointer" },
          readOnly: true
        }) : /* @__PURE__ */ React.createElement(InsertWordsInput, {
          type: "text",
          id: `input${0}`,
          isToChoose,
          length: newItem.length,
          value: values[index],
          onChange: (evt) => handleChange(evt, index),
          disabled: skillState.formDisabled,
          ref: answer.indexOf(indexItem) === 0 ? myRef : null
        }), /* @__PURE__ */ React.createElement("span", {
          style: { marginRight: 4 }
        }, sign));
      });
    }
    return /* @__PURE__ */ React.createElement("span", {
      style: { marginRight: 4 },
      key: `text${textItemIndex}`
    }, textItem);
  }));
}

// app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx
function InsertWordsScreen({
  userAnswer,
  setUserAnswer,
  keyDownCheck
}) {
  const { content, skillState } = useSkill();
  const { isToChoose, variants, answer, difficulty } = content;
  const initalValues = new Array(answer.length).fill(variants && difficulty === "easy" ? " " : "");
  const [values, setValues] = (0, import_react17.useState)(initalValues);
  (0, import_react17.useEffect)(() => {
    if (areArraysEqual(userAnswer, values) && !isToChoose) {
      return;
    }
    if (values.length !== answer.length) {
      return;
    }
    setUserAnswer(values);
  }, [values]);
  (0, import_react17.useEffect)(() => {
    if (isToChoose) {
      return;
    }
    if (userAnswer[0].length) {
      setValues([...userAnswer]);
    }
  }, [userAnswer]);
  (0, import_react17.useLayoutEffect)(() => {
    setValues(initalValues);
  }, [difficulty]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Add missing words"), /* @__PURE__ */ React.createElement(InsertWordsTextBlock, null, /* @__PURE__ */ React.createElement(Text, {
    values,
    setValues
  }), /* @__PURE__ */ React.createElement(Variants, {
    values,
    setValues,
    keyDownCheck
  }), /* @__PURE__ */ React.createElement(Puzzle, {
    values,
    setValues
  })));
}

// app/modules/Skill/components/InsertWords/index.tsx
function InsertWords() {
  const { content, setStateRight, setStateWrong } = useSkill();
  const initialUserAnswer = [""];
  const checkAnswer = (userAnswer) => {
    var _a;
    const answer = (_a = content.text) == null ? void 0 : _a.split(" ").filter((item, index) => {
      if (content.answer[0].split(",").find((it) => Number(it) === index)) {
        return item;
      }
    });
    const formattedAnswer = answer == null ? void 0 : answer.map((answerItem) => doesItemContainSign(answerItem).newItem);
    const { formatted } = doesArrayContainItems(formattedAnswer, userAnswer);
    if (content.difficulty === "easy" && content.isToChoose) {
      if (areArraysEqual(formattedAnswer, userAnswer)) {
        return setStateRight();
      }
      return setStateWrong();
    }
    if (areArraysEqual(formattedAnswer, formatted)) {
      return setStateRight();
    }
    return setStateWrong();
  };
  return content.stepType === "Insert" ? /* @__PURE__ */ React.createElement(Lesson, {
    disabledCondition: (userAnswer) => {
      const isEachFieldContented = userAnswer.filter((uA) => {
        if (uA !== " " && uA.length > 0) {
          return true;
        }
      });
      return isEachFieldContented.length === content.answer.length;
    },
    initialValue: initialUserAnswer,
    checkAnswer
  }, /* @__PURE__ */ React.createElement(InsertWordsScreen, null)) : null;
}

// app/modules/Skill/components/PairsScreen.tsx
var import_react18 = require("react");
function PairsScreen({
  variants,
  checkAnswer,
  userAnswer
}) {
  const [activeIdx, setActiveIdx] = (0, import_react18.useState)(-1);
  const isVariantDisabled = (idx) => {
    if (userAnswer.find((answerItem) => answerItem.includes((idx + 1).toString()))) {
      return true;
    }
    return false;
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Connect pairs"), /* @__PURE__ */ React.createElement(PairsList2, null, variants.map(({ value, isFocused }, idx) => /* @__PURE__ */ React.createElement(PairsItem, {
    key: idx,
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
    disabled: isVariantDisabled(idx),
    isDisabled: isVariantDisabled(idx),
    isFocused: isFocused || activeIdx === idx + 1
  }, value)))));
}

// app/modules/Skill/components/Pairs.tsx
function Pairs() {
  const { content, setStateRight, updateState, skillState } = useSkill();
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
        skillState: __spreadProps(__spreadValues({}, skillState), { buttonDisabled: true })
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

// app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx
var import_react19 = require("react");

// app/styles/duo.svg
var duo_default = "/build/_assets/duo-4STWGEJ4.svg";

// app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx
function QuestionAnswerScreen({
  userAnswer,
  setUserAnswer
}) {
  const { skillState, content } = useSkill();
  const myRef = (0, import_react19.useRef)(null);
  (0, import_react19.useEffect)(() => {
    if (skillState.status === "idle") {
      const timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null ? void 0 : _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Answer the question"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center", margin: "30px 0" }
  }, /* @__PURE__ */ React.createElement("img", {
    src: duo_default,
    alt: "Duo",
    height: 150,
    style: { marginBottom: -50 }
  }), /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(LessonQuestion, null, content.question), /* @__PURE__ */ React.createElement(LessonQuestionTriangleContainer, null, /* @__PURE__ */ React.createElement(LessonQuestionTriangle, null)))), /* @__PURE__ */ React.createElement(Textarea, {
    id: "answer",
    name: "answer",
    placeholder: "Enter your answer",
    value: userAnswer,
    onChange: (e) => setUserAnswer(e.target.value),
    disabled: skillState.formDisabled,
    ref: myRef,
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
      }
    }
  })));
}

// app/modules/Skill/components/QuestionAnswer/index.tsx
function QuestionAnswerPractice() {
  const { content, setStateWrong, setStateRight } = useSkill();
  const checkAnswer = (userAnswer) => {
    const { state, length } = doesArrayContainItems(content.answer, userAnswer.split(" "));
    if (!state) {
      return setStateWrong();
    }
    if (doesArrayContainItems(content.keywords, userAnswer.split(" ")).length === content.keywords.length && content.keywords.length) {
      return setStateRight();
    }
    if (length < content.answer.length * 0.8) {
      return setStateWrong();
    }
    return setStateRight();
  };
  return content.stepType === "Question" ? /* @__PURE__ */ React.createElement(Lesson, {
    checkAnswer,
    disabledCondition: (userAnswer) => userAnswer.length > 0
  }, /* @__PURE__ */ React.createElement(QuestionAnswerScreen, null)) : null;
}

// app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx
function VariantsScreen({
  question,
  variants,
  userAnswer,
  setUserAnswer
}) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Choose right variant"), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center", margin: "30px 0" }
  }, /* @__PURE__ */ React.createElement("img", {
    src: duo_default,
    alt: "Duo",
    height: 150,
    style: { marginBottom: -50 }
  }), /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(LessonQuestion, null, question), /* @__PURE__ */ React.createElement(LessonQuestionTriangleContainer, null, /* @__PURE__ */ React.createElement(LessonQuestionTriangle, null)))), /* @__PURE__ */ React.createElement(VariantsList2, null, variants.map(({ value }, idx) => /* @__PURE__ */ React.createElement(VariantsItem2, {
    key: idx,
    onClick: () => setUserAnswer(value)
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    isFocused: value === userAnswer
  }, idx + 1), /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: value === userAnswer
  }, value))))));
}

// app/modules/Skill/components/Variants.tsx
function VariantsPractice() {
  const { content, setStateRight, setStateWrong } = useSkill();
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

// app/modules/Skill/components/AreYouSureBlock/lib.tsx
var import_styled6 = __toESM(require("@emotion/styled"));
var import_react20 = require("@remix-run/react");
var Wrapper = (0, import_styled6.default)("div")`
  background: #fff;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 6;
`;
var Inner = (0, import_styled6.default)("div")`
  max-width: 1140px;
  padding: 40px 24px;
  margin: 0 auto;
`;
var Grid = (0, import_styled6.default)("div")`
  display: grid;
  grid-gap: 16px 40px;
  align-items: center;
  grid-template-areas:
    "title dismiss quit"
    "description dismiss quit";
  grid-template-columns: 1fr repeat(2, minmax(min-content, 172px));
`;
var Title = (0, import_styled6.default)("span")`
  font-size: 25px;
  grid-area: title;
  line-height: 30px;
  font-weight: 700;
  font-family: "Nunito";
`;
var Description = (0, import_styled6.default)("span")`
  font-size: 19px;
  grid-area: description;
  line-height: 24px;
  padding: 0;
  color: #777;
  font-family: "Nunito";
`;
var QuitButton = (0, import_styled6.default)(import_react20.Link)`
  border: 0 solid transparent;
  background-color: #1cb0f6;
  color: #fff;
  border-color: white;
  border-width: 0;
  border-bottom-width: 4px;
  border-bottom-color: #1899d6;
  height: 50px;
  width: 150px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  transition: filter 0.2s;
`;
var StayButton = (0, import_styled6.default)("button")`
  border: 0 solid transparent;
  background-color: #fff;
  color: #afafaf;
  border-color: #e5e5e5;
  border-width: 2px;
  border-bottom-width: 4px;
  border-bottom-color: #e5e5e5;
  height: 50px;
  width: 150px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Nunito";
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.8px;
  border-radius: 15px;
  padding: 0 20px;
  display: block;
  -webkit-transition: filter 0.2s;
  transition: filter 0.2s;
`;

// app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx
function AreYouSureBlock() {
  const { resetStatus } = useSkill();
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Inner, null, /* @__PURE__ */ React.createElement(Grid, null, /* @__PURE__ */ React.createElement(Title, null, "Are you sure you want to quit?"), /* @__PURE__ */ React.createElement(Description, null, "All progress in this session will be lost."), /* @__PURE__ */ React.createElement("div", {
    style: { marginRight: "-12px", gridArea: "dismiss" }
  }, /* @__PURE__ */ React.createElement(StayButton, {
    onClick: () => resetStatus()
  }, "Stay")), /* @__PURE__ */ React.createElement("div", {
    style: { marginRight: "-12px", gridArea: "quit" }
  }, /* @__PURE__ */ React.createElement(QuitButton, {
    to: "/"
  }, "Quit")))));
}

// app/modules/Skill/components/AreYouSureBlock/index.tsx
var AreYouSureBlock_default = AreYouSureBlock;

// app/modules/Skill/index.tsx
var SkillContext = (0, import_react21.createContext)(defaultSkillContextState);
SkillContext.displayName = "SkillContext";
function useSkill() {
  const context = (0, import_react21.useContext)(SkillContext);
  if (context === void 0) {
    throw new Error("useSkill must be used within a <Lesson />");
  }
  return context;
}
function Skill({
  steps,
  totalXP
}) {
  const resultsFormRef = (0, import_react21.createRef)();
  const value = useSkillReducer();
  const submit = (0, import_react22.useSubmit)();
  const { setup, skillState, continueSkill, resetStatus } = value;
  const { status } = skillState;
  (0, import_react21.useEffect)(() => {
    setup(steps, totalXP);
  }, []);
  const onContinue = () => {
    if (status === "results") {
      return submit(resultsFormRef.current, { replace: true });
    }
    return continueSkill();
  };
  return /* @__PURE__ */ React.createElement(SkillContext.Provider, {
    value: __spreadProps(__spreadValues({}, value), { continueSkill: onContinue })
  }, /* @__PURE__ */ React.createElement(LessonContainer, null, status === "results" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Results, {
    onSubmit: onContinue,
    ref: resultsFormRef
  }), /* @__PURE__ */ React.createElement(Footer, null)) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Progress_default, null), /* @__PURE__ */ React.createElement(QuestionAnswerPractice, null), /* @__PURE__ */ React.createElement(InsertWords, null), /* @__PURE__ */ React.createElement(VariantsPractice, null), /* @__PURE__ */ React.createElement(Pairs, null), status === "leaving" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Overlay, {
    active: true,
    onClick: resetStatus,
    style: { top: 0, zIndex: 5, pointerEvents: "auto" }
  }), /* @__PURE__ */ React.createElement(AreYouSureBlock_default, null)) : null)));
}

// app/db.server.ts
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

// app/session.server.ts
var import_node = require("@remix-run/node");
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/models/user.server.ts
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
  const today = getWeekDay();
  let user = await getUser(request);
  if (!user)
    throw new Error("User is undefined");
  if (!user.wasToday) {
    user = await updateUserStreak(user.id, true, user.streak + 1);
  }
  return await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: __spreadProps(__spreadValues({}, user.weeklyActivity), {
        [today]: user.weeklyActivity[today] + value
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
  currentWeek.forEach((day, index) => {
    if (i > 0 && index === 7 - i) {
      newWeek[day] = 0;
      i -= 1;
    }
  });
  return await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: __spreadValues({}, newWeek)
    }
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
async function getTodayTotalXP(request) {
  const today = getWeekDay();
  let user = await getUser(request);
  if (!user)
    throw new Error("User is undefined");
  const data = await prisma.user.findUnique({
    where: { id: user.id },
    select: {
      weeklyActivity: true
    }
  });
  if (!data)
    throw new Error("No weekly activity was found in getTodayTotalXP");
  return data.weeklyActivity[today];
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
  const lastUpdatedSkill = await prisma.skill.findFirst({
    where: {
      projectId: { in: languages.map(({ id }) => id) }
    },
    select: { updatedAt: true },
    orderBy: { updatedAt: "desc" }
  });
  if (!lastUpdatedSkill) {
    return 0;
  }
  return lastUpdatedSkill.updatedAt;
}

// app/models/skill.server.ts
async function getSkills(languageId) {
  return await prisma.skill.findMany({
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
async function updateCurrentChapter(skill) {
  const { currentChapter, chapters, id } = skill;
  const today = getTodayDate();
  return await prisma.skill.update({
    where: {
      id
    },
    data: {
      currentChapter: chapters !== currentChapter ? currentChapter + 1 : currentChapter,
      updatedAt: today
    }
  });
}
async function checkTitleUnique(projectId, title) {
  const skills = await prisma.skill.findMany({ where: { projectId } });
  return !!skills.find((skill) => skill.title === title);
}
async function getLastAddedSkill(projectId, neighbors = false) {
  const lastAddedSkill = await prisma.skill.findFirst({
    where: { projectId },
    orderBy: { createdAt: "desc" }
  });
  if (neighbors) {
    return await prisma.skill.findMany({
      where: { projectId, lineNumber: lastAddedSkill == null ? void 0 : lastAddedSkill.lineNumber }
    });
  }
  return lastAddedSkill;
}
async function deleteSkillById(id) {
  return await prisma.skill.delete({ where: { id } });
}
async function getSkillByTitle(title, projectId) {
  return await prisma.skill.findFirst({ where: { title, projectId } });
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/skill/$title/$chapter.tsx
var import_react23 = require("@remix-run/react");
var import_node2 = require("@remix-run/node");

// app/models/lesson.server.ts
function getSteps(lessons) {
  return lessons.map((_a) => {
    var _b = _a, { createdAt, updatedAt } = _b, rest = __objRest(_b, ["createdAt", "updatedAt"]);
    return __spreadProps(__spreadValues({}, rest), {
      difficulty: null
    });
  });
}
async function createLessons(data) {
  const batch = await prisma.lesson.createMany({ data });
  const IDs = await prisma.lesson.findMany({
    select: { id: true },
    orderBy: { createdAt: "desc" },
    take: batch.count
  });
  return IDs.map((idItem) => idItem.id);
}
async function deleteLessonsFromSkill(skillId) {
  const skill = await prisma.skill.findUnique({ where: { id: skillId } });
  return await prisma.lesson.deleteMany({
    where: { id: { in: skill == null ? void 0 : skill.lessonIDs } }
  });
}
async function getLessonsBySkillId(id) {
  const skill = await prisma.skill.findUnique({ where: { id } });
  return await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs } }
  });
}
async function getStepsForPracticing(activeLanguageId) {
  const lessons = await prisma.lesson.findMany({
    where: { languageId: activeLanguageId },
    orderBy: { createdAt: "desc" },
    take: 10
  });
  return getSteps(lessons);
}
async function getStepsForChapter(skillTitle, chapter, projectId) {
  const skill = await getSkillByTitle(skillTitle, projectId);
  if (!skill) {
    throw new Error("Skill is not found");
  }
  const lessons = await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs }, chapter }
  });
  return getSteps(lessons);
}
async function getStepsForPracticingSkill(skillTitle, projectId) {
  const skill = await getSkillByTitle(skillTitle, projectId);
  if (!skill) {
    throw new Error("Skill is not found");
  }
  const lessons = await prisma.lesson.findMany({
    where: { id: { in: skill.lessonIDs } }
  });
  return getSteps(lessons);
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/skill/$title/$chapter.tsx
function ErrorBoundary2() {
  const { title, chapter } = (0, import_react23.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading skill with the title ${title} and chapter ${chapter}. Sorry.`);
}
var action = async ({ request, params }) => {
  const activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage) {
    throw new Error("No active language found");
  }
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const title = params.title;
  const skill = await getSkillByTitle(title, activeLanguage.id);
  if (!skill) {
    throw new Error(`Skill with this title: ${title} is underfined`);
  }
  await updateCurrentChapter(skill);
  await increaseTodayExp(request, expData);
  return (0, import_node2.redirect)(`/${activeLanguage.title}/skills`);
};
var loader = async ({ request, params }) => {
  const activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage) {
    throw new Error(`No active language is found`);
  }
  const title = params.title;
  const chapter = Number(params.chapter);
  const steps = await getStepsForChapter(title, chapter, activeLanguage.id);
  const totalXP = await getTodayTotalXP(request);
  return (0, import_node2.json)({ steps, totalXP });
};
function LessonScreen() {
  const { steps, totalXP } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Skill, {
    steps,
    totalXP
  });
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/skill/$title/practice.tsx
var practice_exports = {};
__export(practice_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action2,
  default: () => LessonScreen2,
  loader: () => loader2
});
var import_react24 = require("@remix-run/react");
var import_node3 = require("@remix-run/node");
var action2 = async ({ request, params }) => {
  const activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage) {
    throw new Error("No active language found");
  }
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const title = params.title;
  const skill = await getSkillByTitle(title, activeLanguage.id);
  if (!skill) {
    throw new Error(`Skill with this title: ${title} is underfined`);
  }
  await updateCurrentChapter(skill);
  await increaseTodayExp(request, expData);
  return (0, import_node3.redirect)(`/${activeLanguage == null ? void 0 : activeLanguage.title}/skills`);
};
var loader2 = async ({ request, params }) => {
  const activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage) {
    throw new Error("No active language found");
  }
  const title = params.title;
  const skill = await getSkillByTitle(title, activeLanguage.id);
  if (!skill) {
    throw new Response("Skill is not found", { status: 404 });
  }
  const steps = await getStepsForPracticingSkill(skill.title, activeLanguage.id);
  const totalXP = await getTodayTotalXP(request);
  return (0, import_node3.json)({ steps, totalXP });
};
function LessonScreen2() {
  const { steps, totalXP } = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Skill, {
    steps,
    totalXP
  });
}
function CatchBoundary() {
  const caught = (0, import_react24.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement(ErrorMessage, null, caught.statusText);
  }
}
function ErrorBoundary3() {
  const { title } = (0, import_react24.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading skill by the title ${title}. Sorry.`);
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language.tsx
var language_exports = {};
__export(language_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action3,
  default: () => LanguagePage,
  links: () => links,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node");
var import_react27 = require("@remix-run/react");
var import_react28 = require("react");

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

// app/components/Projects.tsx
var import_react25 = require("react");
var import_react26 = require("@remix-run/react");
function Projects({
  onOverlay,
  languages
}) {
  const [showWindow, setShowWindow] = (0, import_react25.useState)(false);
  const [isNewLanguage, setIsNewLanguage] = (0, import_react25.useState)(false);
  const activeLanguage = languages == null ? void 0 : languages.find((item) => item.active);
  function showModal() {
    onOverlay(true);
    setShowWindow(true);
  }
  function hideModal() {
    onOverlay(false);
    setShowWindow(false);
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ActiveLanguageButton, {
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
  }, /* @__PURE__ */ React.createElement(import_react26.Form, {
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
  }, isNewLanguage ? /* @__PURE__ */ React.createElement(import_react26.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement(LanguagesInput, {
    type: "text",
    placeholder: "Enter title",
    name: "newLanguage",
    onChange: showModal,
    autoComplete: "off",
    required: true
  }), /* @__PURE__ */ React.createElement(LanguagesAddBtn, null, "+")) : /* @__PURE__ */ React.createElement(LanguagesItem, {
    type: "button",
    onClick: () => setIsNewLanguage(true),
    style: {
      color: "rgb(175, 175, 175)",
      fontSize: 14,
      padding: "13px 20px",
      borderBottom: "none"
    }
  }, "Add a new course")))));
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
  userData,
  languages,
  onOverlay
}) => {
  return /* @__PURE__ */ React.createElement(MenuContainer, null, /* @__PURE__ */ React.createElement("nav", {
    style: { width: "35%" }
  }, /* @__PURE__ */ React.createElement(HorizontalList, null, MENU.map(({ title, icon, activeIcon, link }) => /* @__PURE__ */ React.createElement(ListItem, {
    key: title
  }, /* @__PURE__ */ React.createElement(MenuNavLink, {
    to: `${link}`,
    className: "nav-link",
    prefetch: "render"
  }, ({ isActive }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(NavIcon, {
    src: isActive ? activeIcon : icon,
    alt: title
  }), title)))))), /* @__PURE__ */ React.createElement(HorizontalList, {
    style: { width: "40%" }
  }, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement(Projects, {
    languages,
    onOverlay
  })), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("img", {
    src: userData.wasToday ? streak_active_default : streak_default,
    alt: "streak",
    width: 25,
    height: 30,
    style: { marginRight: 6 }
  }), /* @__PURE__ */ React.createElement("b", {
    style: {
      fontFamily: "Nunito",
      color: userData.wasToday ? "#ff9600" : "#e5e5e5"
    }
  }, userData.streak)), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement(Logout, {
    type: "submit"
  }, "Logout")))));
};
var Menu_default = Menu;

// app/styles/index.css
var styles_default = "/build/_assets/index-N3DJ5BPL.css";

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language.tsx
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
  return (0, import_node4.redirect)(`/${project == null ? void 0 : project.title}/skills`);
}
var loader3 = async ({ request }) => {
  let user = await getUser(request);
  if (!user) {
    return (0, import_node4.redirect)("/login");
  }
  const userData = { streak: user.streak, wasToday: user.wasToday };
  const languages = await getLanguages(request);
  if (!languages) {
    throw new import_node4.Response("No languages were found", { status: 404 });
  }
  const activeLanguage = languages.find((item) => item.active);
  const today = getTodayDate();
  if (!activeLanguage) {
    throw new import_node4.Response(`Active language wasn't found`, { status: 404 });
  }
  const onLanguagePage = request.url.split("/").at(-1) === activeLanguage.title;
  if (onLanguagePage) {
    return (0, import_node4.redirect)(`/${activeLanguage.title}/skills`);
  }
  const lastActive = await getLastActivity(request);
  if (today - lastActive > 1 || lastActive === 0) {
    user = await updateUserStreak(user.id, false, 0);
    return (0, import_node4.json)({ userData, languages });
  }
  if (today - lastActive === 1) {
    user = await updateUserStreak(user.id, false, user.streak);
    return (0, import_node4.json)({ userData, languages });
  }
  if (!user.wasToday && lastActive === today) {
    user = await updateUserStreak(user.id, true, user.streak + 1);
    return (0, import_node4.json)({ userData, languages });
  }
  if (user.wasToday) {
    return (0, import_node4.json)({ userData, languages });
  }
  return (0, import_node4.json)({ userData, languages });
};
function LanguagePage() {
  const { userData, languages } = (0, import_react27.useLoaderData)();
  const [isOverlay, setIsOverlay] = (0, import_react28.useState)(false);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Menu_default, {
    userData,
    languages,
    onOverlay: setIsOverlay
  }), /* @__PURE__ */ React.createElement(Main, null, /* @__PURE__ */ React.createElement(import_react27.Outlet, null)), /* @__PURE__ */ React.createElement(Overlay, {
    active: isOverlay
  }));
}
function CatchBoundary2() {
  const caught = (0, import_react27.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement(ErrorMessage, null, caught.statusText);
  }
  return new Error("Something went wrong in language route");
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language/constructor/$skillId.tsx
var skillId_exports = {};
__export(skillId_exports, {
  action: () => action4,
  default: () => ConstructorEdit,
  loader: () => loader4
});
var import_react43 = require("@remix-run/react");
var import_node5 = require("@remix-run/node");

// app/modules/Constructor/index.tsx
var import_react42 = require("react");

// app/modules/Constructor/components/SkillInfo.tsx
var import_react29 = require("react");
function SkillInfo({
  title = "",
  actionData,
  lastAddedSkills = []
}) {
  var _a;
  const { setBasicInfoReady, currentScreen } = useConstructor();
  const [skillTitle, setSkillTitle] = (0, import_react29.useState)("");
  const [lineNumber, setLineNumber] = (0, import_react29.useState)(0);
  (0, import_react29.useEffect)(() => {
    if (title) {
      setSkillTitle(title);
    }
  }, []);
  (0, import_react29.useEffect)(() => {
    setBasicInfoReady(!!skillTitle.length);
  }, [skillTitle]);
  return /* @__PURE__ */ React.createElement(ScreenContainer, {
    screen: currentScreen,
    target: "Skill"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "formType",
    value: "repeat"
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "lineNumber",
    value: lineNumber
  }), /* @__PURE__ */ React.createElement(Legend, null, "Skill info"), /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: "0",
    style: { margin: "40px auto 0 auto" }
  }), /* @__PURE__ */ React.createElement(LessonTitleInput, {
    type: "text",
    name: "title",
    placeholder: "Enter skill title",
    value: skillTitle,
    onChange: (e) => setSkillTitle(e.target.value),
    required: true,
    autoFocus: true
  }), ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) && /* @__PURE__ */ React.createElement(ErrorMessage, {
    role: "alert",
    id: "title-error"
  }, actionData.errors.title), lastAddedSkills.length > 0 && /* @__PURE__ */ React.createElement("div", {
    style: { width: "100%", maxWidth: "440px", margin: "0 auto" }
  }, /* @__PURE__ */ React.createElement("h2", {
    style: { marginTop: 60 }
  }, "Position"), /* @__PURE__ */ React.createElement(LessonsBlock, null, lastAddedSkills.map((lastAdded) => /* @__PURE__ */ React.createElement(LessonsContainer, {
    key: lastAdded.id
  }, /* @__PURE__ */ React.createElement(LessonBlock, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    "aria-labelledby": lastAdded.title
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: (lastAdded.currentChapter / lastAdded.chapters * 100).toString()
  }, /* @__PURE__ */ React.createElement(LessonProgressInner, null)), /* @__PURE__ */ React.createElement(LessonTitle, null, lastAdded.title))))), lastAddedSkills.length < 3 && /* @__PURE__ */ React.createElement(LessonsContainer, {
    key: "312dsdf"
  }, /* @__PURE__ */ React.createElement(LessonBlock, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    "aria-labelledby": "121",
    onClick: () => setLineNumber(lastAddedSkills[0].lineNumber)
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: "0",
    style: { fontSize: "39px" }
  }, lastAddedSkills[0].lineNumber === lineNumber ? /* @__PURE__ */ React.createElement(LessonProgressInner, null) : "+"), /* @__PURE__ */ React.createElement(LessonTitle, null, skillTitle.length ? skillTitle : "Skill title"))))), /* @__PURE__ */ React.createElement(LessonBlock, null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    "aria-labelledby": "121",
    onClick: () => setLineNumber(lastAddedSkills[0].lineNumber + 1)
  }, /* @__PURE__ */ React.createElement(LessonProgress, {
    exp: "0",
    style: { fontSize: "39px" }
  }, lastAddedSkills[0].lineNumber + 1 === lineNumber ? /* @__PURE__ */ React.createElement(LessonProgressInner, null) : "+"), /* @__PURE__ */ React.createElement(LessonTitle, null, skillTitle.length ? skillTitle : "Skill title")))));
}

// app/modules/Constructor/Levels/reducer.ts
var import_nanoid = require("nanoid");
var import_react30 = require("react");
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
  currentScreen: "Skill",
  steps: [createStep({})],
  basicInfoReady: false,
  stepsReady: false
};
function constructorReducer(state, action10) {
  const { steps, chapters } = state;
  const { type } = action10;
  switch (type) {
    case "SETUP" /* setup */: {
      const { steps: steps2 } = action10;
      return __spreadProps(__spreadValues({}, state), {
        steps: steps2
      });
    }
    case "SET_STEP_TYPE" /* setStepType */: {
      const { stepType, id } = action10.payload;
      const newSteps = steps.map((step) => step.id === id ? __spreadProps(__spreadValues({}, step), { stepType }) : __spreadValues({}, step));
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "REMOVE_STEP_TYPE" /* removeStepType */: {
      const { id } = action10;
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
    case "SET_STEP_READY" /* setStepReady */: {
      const { isReady, number } = action10.payload;
      const newSteps = steps;
      newSteps[number].ready = isReady;
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps]
      });
    }
    case "SET_STEP_ACTIVE" /* setStepActive */: {
      const { id } = action10;
      const newSteps = steps.map((step) => {
        if (step.id === id) {
          return __spreadProps(__spreadValues({}, step), { active: true });
        }
        return __spreadProps(__spreadValues({}, step), { active: false });
      });
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_QUESTION" /* setQuestion */: {
      const { question, number } = action10.payload;
      let newSteps = steps;
      newSteps[number].question = question;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_ANSWER" /* setAnswer */: {
      const { answer, number } = action10.payload;
      let newSteps = steps;
      newSteps[number].answer = answer;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "SET_KEYWORDS" /* setKeywords */: {
      let { keywords, number } = action10.payload;
      let newSteps = steps;
      newSteps[number].keywords = keywords;
      return __spreadProps(__spreadValues({}, state), { steps: [...newSteps] });
    }
    case "ADD_STEP" /* addStep */: {
      const { chapter } = action10;
      const newSteps = steps.map((step) => __spreadProps(__spreadValues({}, step), { active: false }));
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps, createStep({ number: steps.length, chapter })]
      });
    }
    case "REMOVE_STEP" /* removeStep */: {
      const newSteps = steps.filter((item) => action10.id !== item.id).map((item, i) => __spreadProps(__spreadValues({}, item), { number: i }));
      return __spreadProps(__spreadValues({}, state), {
        steps: [...newSteps]
      });
    }
    case "ADD_CHAPTER" /* addChapter */: {
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
    case "CHANGE_CURRENT_SCREEN" /* changeCurrentScreen */: {
      const { currentScreen } = action10;
      return __spreadProps(__spreadValues({}, state), { currentScreen });
    }
    case "SET_BASIC_INFO_READY" /* setBasicInfoReady */: {
      const { isReady } = action10;
      return __spreadProps(__spreadValues({}, state), { basicInfoReady: isReady });
    }
    case "SET_STEPS_READY" /* setStepsReady */: {
      const { isReady } = action10;
      return __spreadProps(__spreadValues({}, state), { stepsReady: isReady });
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
}
function useConstructorReducer({
  initialState: initialState5 = basicState2,
  reducer: reducer2 = constructorReducer
} = {}) {
  const [state, dispatch] = (0, import_react30.useReducer)(reducer2, initialState5);
  const setup = (steps) => dispatch({ type: "SETUP" /* setup */, steps });
  const setStepType = (stepType, id) => dispatch({ type: "SET_STEP_TYPE" /* setStepType */, payload: { stepType, id } });
  const removeStep = (id) => dispatch({ type: "REMOVE_STEP" /* removeStep */, id });
  const removeStepType = (id) => dispatch({ type: "REMOVE_STEP_TYPE" /* removeStepType */, id });
  const setStepActive = (id) => dispatch({ type: "SET_STEP_ACTIVE" /* setStepActive */, id });
  const setQuestion = (question, number) => dispatch({ type: "SET_QUESTION" /* setQuestion */, payload: { question, number } });
  const setKeywords = (keywords, number) => dispatch({ type: "SET_KEYWORDS" /* setKeywords */, payload: { keywords, number } });
  const addChapter = () => dispatch({ type: "ADD_CHAPTER" /* addChapter */ });
  const addStep = (chapter) => dispatch({ type: "ADD_STEP" /* addStep */, chapter });
  const setStepReady = (isReady, number) => dispatch({ type: "SET_STEP_READY" /* setStepReady */, payload: { isReady, number } });
  const setAnswer = (answer, number) => dispatch({ type: "SET_ANSWER" /* setAnswer */, payload: { answer, number } });
  const changeCurrentScreen = (currentScreen) => dispatch({ type: "CHANGE_CURRENT_SCREEN" /* changeCurrentScreen */, currentScreen });
  const setBasicInfoReady = (isReady) => dispatch({ type: "SET_BASIC_INFO_READY" /* setBasicInfoReady */, isReady });
  const setStepsReady = (isReady) => dispatch({ type: "SET_STEPS_READY" /* setStepsReady */, isReady });
  return __spreadProps(__spreadValues({}, state), {
    setStepType,
    setup,
    removeStep,
    removeStepType,
    setStepActive,
    setQuestion,
    setAnswer,
    setKeywords,
    addChapter,
    addStep,
    setStepReady,
    changeCurrentScreen,
    setBasicInfoReady,
    setStepsReady
  });
}
var initialContext = __spreadProps(__spreadValues({}, basicState2), {
  setStepType: (stepType, id) => {
  },
  setup: (steps) => {
  },
  removeStep: (id) => {
  },
  removeStepType: (id) => {
  },
  setStepActive: (id) => {
  },
  setQuestion: (question, number) => {
  },
  setAnswer: (answer, number) => {
  },
  setKeywords: (keywords, number) => {
  },
  addChapter: () => {
  },
  addStep: (chapter) => {
  },
  setStepReady: (isReady, number) => {
  },
  changeCurrentScreen: (currentScreen) => {
  },
  setBasicInfoReady: (isReady) => {
  },
  setStepsReady: (isReady) => {
  }
});

// app/modules/Constructor/Levels/index.tsx
var import_react39 = require("react");

// app/modules/Constructor/Levels/components/Variants/index.tsx
var import_react31 = require("react");

// app/modules/Constructor/Levels/components/MatchingPairs/reducer.ts
var reducer = (state, action10) => {
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
          isConnected: !!newPairs.filter((pair) => pair.includes(`${variant.idx}`)).length
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

// app/modules/Constructor/Levels/components/Variants/index.tsx
var initialState = {
  variantsCount: 3,
  question: "",
  variants: [],
  number: 0,
  answer: "",
  stepType: ""
};
function Variants2({ state = initialState }) {
  const { number, answer, stepType, variantsCount = 3 } = state;
  const initialQuestion = state.question;
  const initialVariants = state.variants;
  const { setStepReady, setAnswer } = useConstructor();
  const [{ variants }, dispatch] = (0, import_react31.useReducer)(reducer, {
    variants: initialVariants,
    pairs: []
  });
  const [question, setQuestion] = (0, import_react31.useState)(initialQuestion);
  (0, import_react31.useEffect)(() => {
    if (variants.length === 0) {
      dispatch(variantsSetup(variantsCount));
    }
  }, [variantsCount]);
  (0, import_react31.useEffect)(() => {
    if (variants.filter((variant) => variant.value.length === 0).length) {
      return setStepReady(false, number);
    }
    if (variants.find((variant) => variant.isFocused || variant.value === answer[0])) {
      setStepReady(true, number);
    } else {
      return setStepReady(false, number);
    }
    if (question == null ? void 0 : question.length) {
      setStepReady(true, number);
    } else {
      setStepReady(false, number);
    }
  }, [variants, question]);
  return stepType === "Variants" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    value: answer
  }), /* @__PURE__ */ React.createElement("fieldset", {
    style: { padding: "0 25%" }
  }, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Choose right variant"), /* @__PURE__ */ React.createElement("div", {
    style: { marginTop: 30 }
  }, /* @__PURE__ */ React.createElement(Textarea, {
    name: `question${number}`,
    placeholder: "Type question",
    style: { minHeight: 100, marginBottom: 20 },
    value: question === null ? "" : question,
    onChange: (e) => setQuestion(e.target.value),
    required: true
  }), /* @__PURE__ */ React.createElement(VariantsList, null, variants.map((variant, index) => /* @__PURE__ */ React.createElement(VariantsItem, {
    key: variant.idx,
    style: { marginBottom: 5, width: "100%" }
  }, /* @__PURE__ */ React.createElement("label", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(VariantItemNumber, {
    onClick: (e) => {
      e.preventDefault();
      dispatch(variantChoose(index));
      setAnswer(variant.value, number);
    },
    isFocused: variant.isFocused || variant.value === answer[0]
  }, variant.idx), /* @__PURE__ */ React.createElement(VariantItemInput, {
    type: "text",
    name: `variant${number}`,
    placeholder: "Type variant",
    value: variant.value,
    onChange: (e) => {
      dispatch(variantSetValue(index, e.target.value));
      if (variant.isFocused) {
        setAnswer(e.target.value, number);
      }
    },
    required: true
  })))))))) : null;
}

// app/modules/Constructor/Levels/components/MatchingPairs/index.tsx
var import_react32 = require("react");
var initialState2 = {
  variantsCount: 4,
  initialVariants: [],
  number: 0,
  answer: [],
  stepType: ""
};
function MatchingPairs({ state = initialState2 }) {
  const {
    number,
    answer,
    stepType,
    variantsCount = 4,
    initialVariants = []
  } = state;
  const { setStepReady, setAnswer } = useConstructor();
  const [{ variants, pairs }, dispatch] = (0, import_react32.useReducer)(reducer, {
    variants: initialVariants,
    pairs: []
  });
  const isEditing = answer.length;
  (0, import_react32.useEffect)(() => {
    if (isEditing) {
      return dispatch(pairsSetup(answer.length, state.variants, answer));
    }
    dispatch(pairsSetup(variantsCount, initialVariants, answer));
  }, []);
  (0, import_react32.useEffect)(() => {
    if (pairs.length === variantsCount / 2) {
      setAnswer(pairs, number);
      setStepReady(true, number);
    }
    if (pairs.length !== variantsCount / 2) {
      setStepReady(false, number);
    }
  }, [pairs.length, pairs]);
  console.log("Variants: ", variants);
  return stepType === "Pairs" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("fieldset", {
    style: { maxWidth: 600, margin: "0 auto" }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    value: answer
  }), /* @__PURE__ */ React.createElement(LessonTitle2, null, "Connect pairs"), /* @__PURE__ */ React.createElement("div", {
    style: { marginTop: 30 }
  }, /* @__PURE__ */ React.createElement(PairsList, null, variants.map((variant) => /* @__PURE__ */ React.createElement("li", {
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
    onChange: (e) => dispatch(pairsType(e.target.value, variant.idx)),
    required: true
  })))), /* @__PURE__ */ React.createElement(LessonButton, {
    type: "button",
    onClick: () => dispatch({ type: "ADD_PAIR" }),
    active: true
  }, "Add pair"))))) : null;
}

// app/modules/Constructor/Levels/components/InsertWords/index.tsx
var import_react34 = require("react");

// app/modules/Constructor/Levels/components/InsertWords/Backend.tsx
function Backend({
  showText,
  setShowText,
  setChooseVariants,
  isChooseVariants,
  answer,
  setIndexes,
  indexes,
  text
}) {
  const words = text ? text.split(" ") : answer.split(" ");
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap" }
  }, /* @__PURE__ */ React.createElement("h3", null, "Mark words which should be hidden"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    style: { display: showText ? "block" : "none" },
    onClick: () => setShowText(false)
  }, "Edit text"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => setChooseVariants(!isChooseVariants)
  }, "Set variants"), words.map((item, idx) => {
    return /* @__PURE__ */ React.createElement("span", {
      style: {
        marginRight: 3,
        border: !!indexes.filter((i) => i === idx).length ? "1px solid #78C83D" : "none"
      },
      key: idx,
      onClick: () => {
        setIndexes((prevIndexes) => {
          if (idx === 0) {
            let wasRemoved = false;
            prevIndexes.forEach((i, ix) => {
              if (i === 0) {
                wasRemoved = true;
                prevIndexes.splice(ix, 1);
              }
            });
            if (wasRemoved)
              return [...prevIndexes];
            return [...prevIndexes, idx];
          }
          if (isItemInArray(prevIndexes, idx)) {
            prevIndexes.splice(prevIndexes.indexOf(idx), 1);
            return [...prevIndexes];
          }
          return [...prevIndexes, idx];
        });
        setShowText(true);
      }
    }, item);
  }));
}

// app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx
var import_react33 = require("react");
function ChooseMissingWords({ words, number }) {
  const [variants, setVariants] = (0, import_react33.useState)(() => words.length ? [...words] : [""]);
  return /* @__PURE__ */ React.createElement("div", {
    style: { width: "100%" }
  }, /* @__PURE__ */ React.createElement("ul", {
    style: {
      listStyleType: "none",
      padding: 0,
      margin: "30px 0",
      display: words.length > 1 ? "flex" : "block"
    }
  }, words.length === 1 ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: false,
    onClick: () => setVariants((prevVars) => [...prevVars, ""])
  }, "Add variant")), variants.map((variant, idx) => /* @__PURE__ */ React.createElement(VariantItemInput, {
    key: `insertwordvariant${idx}`,
    type: "text",
    name: `variant${number}`,
    placeholder: "type variant",
    defaultValue: variant,
    required: true
  }))) : words.map((word, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx,
    style: { position: "relative", marginBottom: 8, marginRight: 16 }
  }, /* @__PURE__ */ React.createElement(VariantItem, {
    type: "button",
    isFocused: false
  }, word)))));
}

// app/modules/Constructor/Levels/components/InsertWords/index.tsx
var initialState3 = {
  text: "",
  number: 0,
  answer: "",
  stepType: ""
};
function InsertWords2({ state = initialState3 }) {
  const { text, number, stepType } = state;
  const answer = "";
  const { setStepReady, setAnswer } = useConstructor();
  const [showText, setShowText] = (0, import_react34.useState)(false);
  const [isChooseVariants, setChooseVariants] = (0, import_react34.useState)(false);
  const [indexes, setIndexes] = (0, import_react34.useState)(state.answer ? state.answer[0].split(",") : []);
  const ref = useFocus();
  (0, import_react34.useEffect)(() => {
    setStepReady(!!indexes.length, number);
  }, [indexes.length]);
  (0, import_react34.useEffect)(() => {
    if (text) {
      setAnswer(text, number);
      const newWords = text.split(" ").filter((txt) => {
        const { newItem } = doesItemContainSign(txt);
        return isItemInArray(answer.split(" "), newItem);
      });
      setShowText(true);
    }
    setIndexes((prevIndexes) => {
      return prevIndexes.map((prevIndex) => Number(prevIndex));
    });
  }, []);
  const words2 = text ? text.split(" ") : state.answer.split(" ");
  const words = words2.filter((wordItem, idx) => {
    const word = indexes.filter((index) => Number(index) === idx)[0];
    if (word) {
      return wordItem;
    }
  });
  return stepType === "Insert" ? /* @__PURE__ */ React.createElement("fieldset", {
    style: { padding: "0 25%" }
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `answer${number}`,
    defaultValue: indexes
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: `isToChoose${number}`,
    defaultValue: isChooseVariants ? "1" : void 0
  }), /* @__PURE__ */ React.createElement(LessonTitle2, null, "Add missing words"), /* @__PURE__ */ React.createElement("div", {
    style: { marginTop: 30 }
  }, /* @__PURE__ */ React.createElement(Textarea, {
    name: `text${number}`,
    placeholder: "Type text",
    value: state.answer,
    onChange: (evt) => {
      setAnswer(evt.target.value, number);
    },
    ref,
    required: true
  }), /* @__PURE__ */ React.createElement(InsertWordsTextBlock, {
    showText,
    style: { marginTop: -176 }
  }, words2.map((item, idx) => {
    const { newItem, sign } = doesItemContainSign(item);
    if (!isItemInArray(indexes, idx)) {
      return /* @__PURE__ */ React.createElement("span", {
        style: { marginRight: 3 },
        key: idx
      }, item);
    }
    if (sign) {
      return /* @__PURE__ */ React.createElement(import_react34.Fragment, {
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
    text,
    answer: state.answer,
    indexes,
    setIndexes,
    showText: setShowText,
    setChooseVariants,
    setShowText,
    isChooseVariants
  }))) : null;
}

// app/modules/Constructor/Levels/components/Step.tsx
var import_react35 = __toESM(require("react"));

// app/modules/Constructor/components/CloseBtn.tsx
function CloseBtn({
  onClickHandler
}) {
  return /* @__PURE__ */ React.createElement(BtnClose, {
    type: "button",
    onClick: onClickHandler
  }, /* @__PURE__ */ React.createElement(BtnCloseImage, {
    src: close_default,
    alt: "Close"
  }));
}

// app/modules/Constructor/Levels/components/Step.tsx
var STEP_TYPES = ["Question", "Insert", "Variants", "Pairs"];
var Step = ({ data, index, children }) => {
  const { active, chapter, stepType, id, number } = data;
  const { removeStepType, setStepType } = useConstructor();
  return /* @__PURE__ */ import_react35.default.createElement("section", {
    className: `${!active && "visuallyHidden"}`
  }, /* @__PURE__ */ import_react35.default.createElement("input", {
    type: "hidden",
    name: "step",
    value: index
  }), /* @__PURE__ */ import_react35.default.createElement("input", {
    type: "hidden",
    name: `chapter`,
    value: chapter
  }), /* @__PURE__ */ import_react35.default.createElement("input", {
    type: "hidden",
    name: `type${number}`,
    value: stepType
  }), /* @__PURE__ */ import_react35.default.createElement(Legend, null, stepType ? stepType : "Choose type"), /* @__PURE__ */ import_react35.default.createElement(StepHeader, null, stepType !== "" && /* @__PURE__ */ import_react35.default.createElement(CloseBtn, {
    onClickHandler: () => removeStepType(id)
  })), /* @__PURE__ */ import_react35.default.createElement(StepContent, null, stepType === "" ? /* @__PURE__ */ import_react35.default.createElement(ChooseStyle, null, STEP_TYPES.map((type, idx) => /* @__PURE__ */ import_react35.default.createElement(StyleButton, {
    type: "button",
    onClick: () => setStepType(type, id),
    key: idx
  }, type))) : import_react35.default.Children.map(children, (child) => {
    if (child === null) {
      return;
    }
    return import_react35.default.cloneElement(child, {
      state: data
    });
  })));
};
var Step_default = Step;

// app/modules/Constructor/Levels/components/QuestionAnswer/index.tsx
var import_react38 = require("react");

// app/modules/Constructor/components/Keywords.tsx
var import_react37 = require("react");

// app/modules/Constructor/components/Keyword.tsx
var import_react36 = require("react");
var Keyword = ({
  onSet,
  children,
  initiallyActive
}) => {
  const [isActive, setIsActive] = (0, import_react36.useState)(initiallyActive);
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
  const [keywords, setKeywords] = (0, import_react37.useState)(initialKeywords);
  (0, import_react37.useEffect)(() => {
    onSet(keywords);
  }, [keywords]);
  const isEditing = Boolean(Array.isArray(answer));
  return /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexWrap: "wrap" }
  }, !isEditing && answer.split(" ").map((item, idx) => {
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

// app/modules/Constructor/Levels/components/QuestionAnswer/index.tsx
var initialState4 = {
  question: "",
  answer: "",
  number: 0,
  keywords: [""],
  stepType: ""
};
function QuestionAnswer({ state = initialState4 }) {
  const { question, answer, number, keywords, stepType } = state;
  const { setStepReady, setKeywords, setQuestion, setAnswer } = useConstructor();
  (0, import_react38.useEffect)(() => {
    if (question && answer) {
      return setStepReady(true, number);
    }
    return setStepReady(false, number);
  }, [question, answer]);
  (0, import_react38.useEffect)(() => {
    setKeywords(keywords, number);
  }, []);
  return stepType === "Question" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("fieldset", {
    style: { padding: "0 25%" }
  }, /* @__PURE__ */ React.createElement(LessonTitle2, null, "Answer the question"), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", alignItems: "center", margin: "30px 0" }
  }, /* @__PURE__ */ React.createElement("img", {
    src: duo_default,
    alt: "Duo",
    height: 150,
    style: { marginBottom: -50 }
  }), /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ React.createElement(LessonQuestion, null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: `question${number}`,
    placeholder: "Set question",
    style: {
      border: "none",
      width: "100%"
    },
    value: question === null ? "" : question,
    onChange: (evt) => setQuestion(evt.target.value, number),
    autoFocus: true,
    required: true
  })), /* @__PURE__ */ React.createElement(LessonQuestionTriangleContainer, null, /* @__PURE__ */ React.createElement(LessonQuestionTriangle, null)))), /* @__PURE__ */ React.createElement(Textarea, {
    name: `answer${number}`,
    placeholder: "Type answer",
    value: answer,
    onChange: (evt) => setAnswer(evt.target.value, number),
    required: true
  })), /* @__PURE__ */ React.createElement(TextareaLabel, {
    htmlFor: `keywords${number}`
  }, /* @__PURE__ */ React.createElement(LabelText, null, "Choose keywords"), /* @__PURE__ */ React.createElement(Keywords, {
    answer,
    initialKeywords: keywords,
    onSet: (kwords) => setKeywords(kwords, number)
  }), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    id: `keywords${number}`,
    name: `keywords${number}`,
    placeholder: "Type keywords",
    value: keywords.map((keyword) => doesItemContainSign(keyword).newItem),
    readOnly: true
  }))) : null;
}

// app/modules/Constructor/Levels/index.tsx
function Levels() {
  const { steps, setStepsReady, currentScreen } = useConstructor();
  (0, import_react39.useEffect)(() => {
    setStepsReady(!steps.find((step) => step.ready === false));
  }, [steps]);
  return /* @__PURE__ */ React.createElement(ScreenContainer, {
    screen: currentScreen,
    target: "Steps"
  }, steps.map((data, idx) => /* @__PURE__ */ React.createElement(Step_default, {
    data,
    index: idx,
    key: data.id
  }, data.stepType === "Question" ? /* @__PURE__ */ React.createElement(QuestionAnswer, null) : null, data.stepType === "Insert" ? /* @__PURE__ */ React.createElement(InsertWords2, null) : null, data.stepType === "Variants" ? /* @__PURE__ */ React.createElement(Variants2, null) : null, data.stepType === "Pairs" ? /* @__PURE__ */ React.createElement(MatchingPairs, null) : null)));
}

// app/modules/Constructor/Levels/components/Sidebar.tsx
var import_react40 = require("@remix-run/react");
var import_react41 = __toESM(require("react"));
var Sidebar = ({ children }) => {
  const {
    steps,
    currentScreen,
    chapters,
    changeCurrentScreen,
    stepsReady,
    basicInfoReady,
    setStepActive,
    removeStep,
    addChapter,
    addStep
  } = useConstructor();
  const transition = (0, import_react40.useTransition)();
  const submitText = transition.state === "submitting" ? "Saving" : "Save";
  const isSubmitActive = stepsReady === true && basicInfoReady === true;
  const isSubmitDisabled = stepsReady === false || basicInfoReady === false || submitText !== "Save";
  return /* @__PURE__ */ import_react41.default.createElement(ConstructorSidebar, null, /* @__PURE__ */ import_react41.default.createElement(SidebarList, null, /* @__PURE__ */ import_react41.default.createElement("li", null, /* @__PURE__ */ import_react41.default.createElement(SidebarBtn, {
    type: "button",
    onClick: () => {
      changeCurrentScreen("Skill");
    }
  }, "Skill Info")), chapters.map((chapter) => /* @__PURE__ */ import_react41.default.createElement("li", {
    key: `chapter-${chapter}`
  }, /* @__PURE__ */ import_react41.default.createElement(SidebarBtn, {
    type: "button",
    onClick: () => {
      changeCurrentScreen("Steps");
      setStepActive(steps[steps.length - 1].id);
    }
  }, "Chapter ", chapter), /* @__PURE__ */ import_react41.default.createElement("ul", null, steps.map((stepsItem, index) => stepsItem.chapter === chapter && /* @__PURE__ */ import_react41.default.createElement("li", {
    key: stepsItem.id
  }, /* @__PURE__ */ import_react41.default.createElement("button", {
    type: "button",
    onClick: () => {
      changeCurrentScreen("Steps");
      setStepActive(stepsItem.id);
    },
    style: {
      border: stepsItem.active ? "1px solid" : "none"
    }
  }, "Step ", index + 1), index > 0 ? /* @__PURE__ */ import_react41.default.createElement("button", {
    type: "button",
    onClick: () => {
      removeStep(stepsItem.id);
    }
  }, "Remove step") : null)), /* @__PURE__ */ import_react41.default.createElement("li", null, /* @__PURE__ */ import_react41.default.createElement("button", {
    type: "button",
    onClick: () => {
      addStep(chapter);
      if (currentScreen !== "Steps") {
        changeCurrentScreen("Steps");
      }
    }
  }, "Add step"))), /* @__PURE__ */ import_react41.default.createElement("button", {
    type: "button",
    onClick: () => {
      if (currentScreen !== "Steps") {
        changeCurrentScreen("Steps");
      }
      addChapter();
    }
  }, "Add chapter")))), children, /* @__PURE__ */ import_react41.default.createElement(FormButton, {
    type: "submit",
    active: isSubmitActive,
    disabled: isSubmitDisabled
  }, submitText));
};
var Sidebar_default = Sidebar;

// app/modules/Constructor/index.tsx
var ConstructorContext = (0, import_react42.createContext)(initialContext);
ConstructorContext.displayName = "ConstructorContext";
var useConstructor = () => {
  const state = (0, import_react42.useContext)(ConstructorContext);
  if (state === void 0) {
    throw new Error("useConstructor must be used within a <Constructor />");
  }
  return state;
};
function Constructor({
  data,
  actionData,
  lastAddedSkills
}) {
  const state = useConstructorReducer();
  const { currentScreen, setup, changeCurrentScreen } = state;
  (0, import_react42.useEffect)(() => {
    if (data) {
      setup(data.steps);
    }
  }, [data]);
  (0, import_react42.useEffect)(() => {
    var _a;
    if (((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) && currentScreen !== "Skill") {
      changeCurrentScreen("Skill");
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement(ConstructorContext.Provider, {
    value: state
  }, /* @__PURE__ */ React.createElement(ConstructorForm, {
    method: "post",
    autoComplete: "off"
  }, /* @__PURE__ */ React.createElement(ConstructorFormInner, null, /* @__PURE__ */ React.createElement(SkillInfo, {
    title: data == null ? void 0 : data.title,
    actionData,
    lastAddedSkills
  }), /* @__PURE__ */ React.createElement(Levels, null)), /* @__PURE__ */ React.createElement(Sidebar_default, null)));
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language/constructor/$skillId.tsx
var action4 = async ({ request, params }) => {
  const form = await request.formData();
  const title = form.get("title");
  const activeLanguage = await getActiveLanguage(request);
  const stepChapters = form.getAll("chapter");
  const skill = await prisma.skill.findUnique({
    where: { id: params.skillId }
  });
  if (title !== skill.title) {
    const isTitleUnique = await checkTitleUnique(activeLanguage.id, title);
    if (isTitleUnique) {
      return (0, import_node5.json)({
        errors: { title: "Title isn't unique" }
      }, { status: 400 });
    }
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
        const variants = variantValues.map((value, idx) => ({
          idx,
          value,
          isFocused: false
        }));
        answer = answer.trim().split(",").sort((a, b) => a - b);
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
  await deleteLessonsFromSkill(params.skillId);
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
  await prisma.skill.update({
    where: { id: params.skillId },
    data: __spreadValues({}, data)
  });
  return (0, import_node5.redirect)(`/`);
};
var loader4 = async ({ request, params }) => {
  const skill = await prisma.skill.findUnique({
    where: { id: params.skillId }
  });
  if (!skill) {
    throw new import_node5.Response("Skill is not found", { status: 404 });
  }
  const activeLanguage = await getActiveLanguage(request);
  const lastAddedSkills = await getLastAddedSkill(activeLanguage.id, true);
  const lessons = await getLessonsBySkillId(skill.id);
  const data = {
    title: skill.title,
    steps: lessons,
    lineNumber: skill.lineNumber
  };
  return { data, lastAddedSkills };
};
function ConstructorEdit() {
  const actionData = (0, import_react43.useActionData)();
  const { data, lastAddedSkills } = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Constructor, {
    data,
    lastAddedSkills,
    actionData
  });
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language/constructor/new.tsx
var new_exports = {};
__export(new_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action5,
  default: () => ConstructorNew,
  loader: () => loader5
});
var import_node6 = require("@remix-run/node");
var import_react44 = require("@remix-run/react");
function ErrorBoundary4() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading the constructor. Sorry.`);
}
var action5 = async ({ request, params }) => {
  const activeLanguage = await getActiveLanguage(request);
  const form = await request.formData();
  const title = form.get("title");
  let lineNumber = form.get("lineNumber");
  const lastAddedSkill = await getLastAddedSkill(activeLanguage.id);
  if (lastAddedSkill) {
    lineNumber = lineNumber === "0" ? ((lastAddedSkill == null ? void 0 : lastAddedSkill.lineNumber) + 1).toString() : lineNumber;
  }
  const stepChapters = form.getAll("chapter");
  const isTitleUnique = await checkTitleUnique(activeLanguage.id, title);
  if (isTitleUnique) {
    return (0, import_node6.json)({
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
    console.log("Steptype: ", stepType);
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
        answer = answer.trim().split(",").sort((a, b) => Number(a) - Number(b));
        const variants = variantValues.map((value, idx) => ({
          idx,
          value: doesItemContainSign(value).newItem,
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
  const skill = await prisma.skill.create({ data });
  return (0, import_node6.redirect)(`/skill/${skill.title}/1`);
};
var loader5 = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  const lastAddedSkills = await getLastAddedSkill(activeLanguage.id, true);
  return (0, import_node6.json)({ lastAddedSkills });
};
function ConstructorNew() {
  const actionData = (0, import_react44.useActionData)();
  const { lastAddedSkills } = (0, import_react44.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Constructor, {
    actionData,
    lastAddedSkills
  });
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action6,
  default: () => SkillsPage,
  loader: () => loader6
});
var import_node7 = require("@remix-run/node");

// app/components/WeeklyProgress.tsx
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
  return /* @__PURE__ */ React.createElement("div", {
    style: { position: "relative", display: "flex", flexGrow: "1" }
  }, /* @__PURE__ */ React.createElement(ExpProgressBlock, null, /* @__PURE__ */ React.createElement(ExpProgressTitle, null, "XP Progress"), /* @__PURE__ */ React.createElement("svg", {
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
    fill: exp > 50 ? "#ffc800" : "#fff",
    r: "3.75",
    stroke: "#ffc800",
    strokeWidth: "2",
    style: { transform: "scaleY(-1) translateY(-150px)" },
    key: x + y
  }, /* @__PURE__ */ React.createElement("title", null, exp, " XP"))))))));
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language/skills.tsx
var import_react48 = require("@remix-run/react");

// app/components/SkillsList.tsx
var import_nanoid2 = require("nanoid");

// app/components/Footer.tsx
function Footer2() {
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement(FooterLine, null), /* @__PURE__ */ React.createElement("div", {
    style: { paddingBottom: 28 }
  }, /* @__PURE__ */ React.createElement(FooterText, null, "Inspired by", " ", /* @__PURE__ */ React.createElement(LinkWithHover, {
    href: "https://www.duolingo.com",
    target: "_blank"
  }, "Duolingo"))));
}

// app/components/LessonItem.tsx
var import_react46 = require("react");

// app/styles/bin.svg
var bin_default = "/build/_assets/bin-RYGYRSXA.svg";

// app/hooks/useOnClickOutside.ts
var import_react45 = require("react");
function useOnClickOutside(ref, handler) {
  (0, import_react45.useEffect)(() => {
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
var import_react47 = require("@remix-run/react");
function LessonItem({
  id,
  title,
  currentChapter,
  chapters,
  editLink
}) {
  const [isOpened, setIsOpened] = (0, import_react46.useState)(false);
  const transition = (0, import_react47.useTransition)();
  const ref = (0, import_react46.useRef)(null);
  (0, import_react46.useEffect)(() => {
    if (transition.state === "loading") {
      setIsOpened(false);
    }
  }, [transition.state]);
  useOnClickOutside(ref, () => setIsOpened(false));
  const isDisabled = transition.state !== "idle";
  const exp = currentChapter / chapters * 100;
  const skillLink = `/skill/${title}/${currentChapter / chapters === 1 ? "practice" : currentChapter + 1}`;
  function toggleMenu() {
    setIsOpened(!isOpened);
  }
  const startButtonMessage = exp < 100 ? "Start +16 XP" : "Practice +16 XP";
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
  }, "Edit"), /* @__PURE__ */ React.createElement(import_react47.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "id",
    value: id
  }), /* @__PURE__ */ React.createElement(LessonBlockButton, {
    type: "submit",
    disabled: isDisabled,
    title: "Delete skill",
    name: "_action",
    value: "Delete skill"
  }, /* @__PURE__ */ React.createElement("img", {
    src: bin_default,
    alt: "delete",
    width: 20,
    height: 20
  })))), /* @__PURE__ */ React.createElement(LessonBlockLink, {
    to: skillLink
  }, startButtonMessage)))));
}

// app/styles/practice_last_added.svg
var practice_last_added_default = "/build/_assets/practice_last_added-HKEJVFEX.svg";

// app/components/PracticeLastAdded.tsx
function PracticeLastAdded() {
  return /* @__PURE__ */ React.createElement(PracticeLastAddedContainer, null, /* @__PURE__ */ React.createElement(PracticeLastAddedLink, {
    to: "/practice",
    title: "Practice"
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
  }, skills.length > 0 && /* @__PURE__ */ React.createElement(PracticeLastAdded, null)), /* @__PURE__ */ React.createElement(SkillsLineBlock, null, lineNumbers.map((lineNumber) => /* @__PURE__ */ React.createElement(LessonsBlock, {
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

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/$language/skills.tsx
function ErrorBoundary5() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "Issues during loading Skills route");
}
var action6 = async ({ request }) => {
  const data = await request.formData();
  const _a = Object.fromEntries(data), { _action } = _a, values = __objRest(_a, ["_action"]);
  if (_action === "Delete skill") {
    console.log("values: ", values);
    const id = values.id;
    if (!id) {
      throw new Error("Skill id wasn't found");
    }
    await deleteLessonsFromSkill(id);
    return await deleteSkillById(id);
  }
};
var loader6 = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  const user = await getUser(request);
  if (!user) {
    return (0, import_node7.redirect)("/login");
  }
  if (!activeLanguage) {
    throw new import_node7.Response(`We could not find the active language`, {
      status: 404
    });
  }
  const skills = await getSkills(activeLanguage.id);
  return (0, import_node7.json)({
    skills,
    activity: user.weeklyActivity,
    languageTitle: activeLanguage.title
  });
};
function SkillsPage() {
  const { skills, activity, languageTitle } = (0, import_react48.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    style: { display: "flex", width: "100%" }
  }, /* @__PURE__ */ React.createElement(SkillsList, {
    skills,
    languageTitle
  }), /* @__PURE__ */ React.createElement(WeeklyProgress, {
    activity
  }));
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/practice.tsx
var practice_exports2 = {};
__export(practice_exports2, {
  ErrorBoundary: () => ErrorBoundary6,
  action: () => action7,
  default: () => LessonScreen3,
  loader: () => loader7
});
var import_node8 = require("@remix-run/node");
var import_react49 = require("@remix-run/react");
function ErrorBoundary6() {
  const { lessonId } = (0, import_react49.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading lesson by the id ${lessonId}. Sorry.`);
}
var action7 = async ({ request }) => {
  const form = await request.formData();
  const expData = Number(form.get("exp"));
  const user = await getUser(request);
  if (!user) {
    return (0, import_node8.redirect)("/login");
  }
  const today = getWeekDay();
  const newUserActivity = user.weeklyActivity;
  newUserActivity[today] = newUserActivity[today] + 10;
  await prisma.user.update({
    where: {
      id: user == null ? void 0 : user.id
    },
    data: {
      weeklyActivity: __spreadValues({}, newUserActivity)
    }
  });
  return (0, import_node8.redirect)(`/`);
};
var loader7 = async ({ request }) => {
  const activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage) {
    throw new Error(`No active language has found`);
  }
  const steps = await getStepsForPracticing(activeLanguage.id);
  if (steps.length === 0) {
    throw new Error("Steps for practicing are not found");
  }
  const totalXP = await getTodayTotalXP(request);
  return (0, import_node8.json)({ steps, totalXP });
};
function LessonScreen3() {
  const { steps, totalXP } = (0, import_react49.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Skill, {
    steps,
    totalXP
  });
}

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action8,
  loader: () => loader8
});
var import_node9 = require("@remix-run/node");
var action8 = async ({ request }) => {
  return logout(request);
};
var loader8 = async () => {
  return (0, import_node9.redirect)("/");
};

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader9
});
var import_node10 = require("@remix-run/node");
var loader9 = async ({ request }) => {
  var _a;
  const user = await getUser(request);
  if (!user) {
    return (0, import_node10.redirect)("/login");
  }
  const languages = await getLanguages(request);
  const activeLanguageTitle = (_a = languages == null ? void 0 : languages.find((it) => it.active)) == null ? void 0 : _a.title;
  return (0, import_node10.redirect)(`/${activeLanguageTitle}/skills`);
};

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action9,
  default: () => LoginPage,
  loader: () => loader10,
  meta: () => meta
});
var import_node11 = require("@remix-run/node");
var import_react52 = require("@remix-run/react");

// app/components/Login.tsx
var import_react50 = require("@remix-run/react");
var import_react51 = require("react");
function Login({ isLogin, setIsLogin, actionData }) {
  var _a;
  const usernameRef = (0, import_react51.useRef)(null);
  const passwordRef = (0, import_react51.useRef)(null);
  (0, import_react51.useEffect)(() => {
    var _a2, _b, _c, _d;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.username) {
      (_b = usernameRef.current) == null ? void 0 : _b.focus();
    }
    if ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.password) {
      (_d = passwordRef.current) == null ? void 0 : _d.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement(import_react50.Form, {
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

// route:/Users/newll/Desktop/Projects/MyDuo/app/routes/login.tsx
var import_react53 = require("react");
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
    return (0, import_node11.json)({
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
var loader10 = async ({ request }) => {
  const userId = await getUserId(request);
  if (userId)
    return (0, import_node11.redirect)("/");
  return (0, import_node11.json)({});
};
function LoginPage() {
  var _a;
  const actionData = (0, import_react52.useActionData)();
  const transition = (0, import_react52.useTransition)();
  const [isLogin, setIsLogin] = (0, import_react53.useState)(actionData && ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) === "login" ? true : !actionData ? true : false);
  const buttonText = transition.state === "submitting" ? "loginning" : "login";
  return /* @__PURE__ */ React.createElement(LoginContainer, null, /* @__PURE__ */ React.createElement(LoginContinerInner, null, /* @__PURE__ */ React.createElement(Login, {
    isLogin,
    setIsLogin,
    actionData
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "ae182746", "entry": { "module": "/build/entry.client-45OAAF5J.js", "imports": ["/build/_shared/chunk-KZAWO74C.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-IEW54MEM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language": { "id": "routes/$language", "parentId": "root", "path": ":language", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language-KXII35YJ.js", "imports": ["/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-WD3XVBPK.js", "/build/_shared/chunk-P7M3VW2R.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": false }, "routes/$language/constructor/$skillId": { "id": "routes/$language/constructor/$skillId", "parentId": "routes/$language", "path": "constructor/:skillId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/constructor/$skillId-VOTOBZ7A.js", "imports": ["/build/_shared/chunk-GAB4M5DE.js", "/build/_shared/chunk-NHLHEKQA.js", "/build/_shared/chunk-BHUI3U4S.js", "/build/_shared/chunk-QPM6IN7H.js", "/build/_shared/chunk-5I46A727.js", "/build/_shared/chunk-HGHGZEQA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/$language/constructor/new": { "id": "routes/$language/constructor/new", "parentId": "routes/$language", "path": "constructor/new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/constructor/new-BN26CKKL.js", "imports": ["/build/_shared/chunk-GAB4M5DE.js", "/build/_shared/chunk-NHLHEKQA.js", "/build/_shared/chunk-BHUI3U4S.js", "/build/_shared/chunk-QPM6IN7H.js", "/build/_shared/chunk-5I46A727.js", "/build/_shared/chunk-HGHGZEQA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/$language/skills": { "id": "routes/$language/skills", "parentId": "routes/$language", "path": "skills", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$language/skills-5OA2NFDX.js", "imports": ["/build/_shared/chunk-QPM6IN7H.js", "/build/_shared/chunk-5I46A727.js", "/build/_shared/chunk-HGHGZEQA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-RDLBYRKD.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login": { "id": "routes/login", "parentId": "root", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/login-QWGP527N.js", "imports": ["/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-P7M3VW2R.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-AL7XM25L.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/practice": { "id": "routes/practice", "parentId": "root", "path": "practice", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/practice-L3DXY62J.js", "imports": ["/build/_shared/chunk-TBGBJLYJ.js", "/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-NHLHEKQA.js", "/build/_shared/chunk-BHUI3U4S.js", "/build/_shared/chunk-ME5PAYV3.js", "/build/_shared/chunk-HGHGZEQA.js", "/build/_shared/chunk-WD3XVBPK.js", "/build/_shared/chunk-P7M3VW2R.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/skill/$title/$chapter": { "id": "routes/skill/$title/$chapter", "parentId": "root", "path": "skill/:title/:chapter", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/skill/$title/$chapter-XVOHPWHB.js", "imports": ["/build/_shared/chunk-TBGBJLYJ.js", "/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-BHUI3U4S.js", "/build/_shared/chunk-5I46A727.js", "/build/_shared/chunk-HGHGZEQA.js", "/build/_shared/chunk-WD3XVBPK.js", "/build/_shared/chunk-P7M3VW2R.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/skill/$title/practice": { "id": "routes/skill/$title/practice", "parentId": "root", "path": "skill/:title/practice", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/skill/$title/practice-LZWTJUWS.js", "imports": ["/build/_shared/chunk-TBGBJLYJ.js", "/build/_shared/chunk-DFG4XZEI.js", "/build/_shared/chunk-BHUI3U4S.js", "/build/_shared/chunk-5I46A727.js", "/build/_shared/chunk-HGHGZEQA.js", "/build/_shared/chunk-WD3XVBPK.js", "/build/_shared/chunk-P7M3VW2R.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true } }, "url": "/build/manifest-AE182746.js" };

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
  "routes/$language/constructor/$skillId": {
    id: "routes/$language/constructor/$skillId",
    parentId: "routes/$language",
    path: "constructor/:skillId",
    index: void 0,
    caseSensitive: void 0,
    module: skillId_exports
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
//# sourceMappingURL=index.js.map
