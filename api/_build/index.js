var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Document({
  children,
  title = "MyDuo"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1,user-scalable=no"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 14,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 19,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { style: { margin: 0 }, children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: "Uh-oh!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "error-container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "App Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/skill/$title/practice.tsx
var practice_exports = {};
__export(practice_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => LessonScreen,
  loader: () => loader
});

// app/modules/Skill/index.tsx
var import_react20 = require("react");

// app/styles/close.svg
var close_default = "/build/_assets/close-D2E3HOMK.svg";

// app/components/lib.tsx
var import_react3 = require("@emotion/react"), import_styled = __toESM(require("@emotion/styled")), import_react4 = require("@remix-run/react"), HorizontalList = import_styled.default.ul((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: 0,
  height: "100%",
  padding: "0 9px"
})), ListItem = (0, import_styled.default)("li")`
  height: 100%;
  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`, LessonsContainer = (0, import_styled.default)("section")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`, LessonsBlock = (0, import_styled.default)("div")`
  grid-column-gap: 12px;
  display: grid;
  grid-auto-columns: calc(33.33333% - 8px);
  grid-auto-flow: column;
  justify-content: center;
  padding: 16px 12px;
`, LessonBlock = (0, import_styled.default)("div")`
  width: 33%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`, MenuAppear = import_react3.keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%, 0);
  }
`, LessonBlockMenu = (0, import_styled.default)("div")`
  display: ${(props) => props.isOpened ? "block" : "none"};
  position: absolute;
  left: 50%;
  top: calc(100% + 20px);
  transform: translate(-50%);
  z-index: 1;
  animation-name: ${MenuAppear};
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
`, LessonBlockMenuTriangle = (0, import_styled.default)("div")`
  left: calc(50% - 15px);
  transform: translateX(-50%);
  margin: 0 15px;
  top: -8px;
  height: 10px;
  overflow: hidden;
  width: 20px;
  box-sizing: border-box;
  position: absolute;
`, LessonBlockMenuTriangleContent = (0, import_styled.default)("span")`
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
`, LessonBlockInner = (0, import_styled.default)("div")`
  background-color: #ce82ff;
  color: #fff;
  padding: 16px;
  text-align: center;
  width: 295px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`, LessonBlockLink = (0, import_styled.default)(import_react4.Link)`
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
`, LessonBlockButton = (0, import_styled.default)("button")`
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
`, LessonBlockTitle = (0, import_styled.default)("div")`
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
`, LessonBlockItem = import_styled.default.a(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "33.33%",
  textDecoration: "none"
})), UserImage = import_styled.default.img(
  {
    borderRadius: "100%"
  },
  (props) => ({ width: props.width, height: props.height })
), ProgressBarContainer = (0, import_styled.default)("div")`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 50px 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`, ProgressBar = (0, import_styled.default)("div")`
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
`, LeaveLessonButton = (0, import_styled.default)("button")`
  margin-right: 21px;
  height: 16px;
  margin-top: -3px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: inherit;
`, LeaveLessonLink = (0, import_styled.default)(import_react4.Link)`
  margin-right: 21px;
  height: 16px;
  margin-top: -3px;
`, Input = (0, import_styled.default)("input")`
  background-color: #f7f7f7;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  padding: 10px 12px;
  width: 100%;
`, Textarea = (0, import_styled.default)("textarea")`
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
`, LoginTitle = (0, import_styled.default)("h1")`
  font-size: 26px;
  margin: 10px 0 15px;
  font-family: Nunito;
  font-weight: 700;
  text-align: center;
`, Fieldset = (0, import_styled.default)("fieldset")`
  margin-top: 20px;
`, InputTextLabel = (0, import_styled.default)("label")`
  width: 49%;
  margin-right: 1%;
`, TextareaLabel = (0, import_styled.default)("label")`
  width: 100%;
`, LabelText = (0, import_styled.default)("span")`
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
  color: #4b4b4b;
  font-size: 15px;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  letter-spacing: 0.6px;
`, Legend = (0, import_styled.default)("legend")`
  color: #4b4b4b;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.6;
  margin-bottom: 14px;
  margin-top: 0;
  text-align: center;
  font-family: "Nunito", sans-serif;
`, FormButton = (0, import_styled.default)("button")`
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
`, KeywordTemplate = (0, import_styled.default)("span")`
  margin-right: 10px;
  cursor: pointer;
  border: ${(props) => props.active && "1px solid blue"};
`, LessonProgress = (0, import_styled.default)("div")`
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
`, LessonProgressInner = (0, import_styled.default)("div")`
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
    opacity: ${(props) => props.isDisabled ? 1 : 0.85};
  }
`, Main = (0, import_styled.default)("main")`
  padding: 24px 10% 0;
  display: flex;
  justify-content: space-between;
  overflow-x: hidden;
`, LessonTitle = (0, import_styled.default)("b")`
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
  display: block;
`, NavIcon = (0, import_styled.default)("img")`
  margin-right: 10px;
  width: 36px;
  height: 36px;
`, LoginContainer = (0, import_styled.default)("section")`
  padding: 30px;
  height: 100vh;
  left: 0;
  overflow-y: auto;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
`, LoginContinerInner = (0, import_styled.default)("div")`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`, LoginInput = (0, import_styled.default)("input")`
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
`, LoginButton = (0, import_styled.default)("button")`
  width: 100%;
  letter-spacing: 0.8px;
  font: 700 15px "Nunito";
  padding: 0 16px;
  height: 50px;
  color: white;
  border: none;
  border-bottom: 4px solid rgba(133, 133, 133, 0.5);
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #1cb0f6;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    margin-top: 4px;
    border: none;
    height: 46px;
  }
`, LoginToggle = (0, import_styled.default)("label")`
  position: absolute;
  top: 0;
  right: 0;
  letter-spacing: 0.8px;
  font: 700 15px "Nunito";
  line-height: 1.2;
  padding: 0 16px;
  height: 50px;
  color: #1cb0f6;
  border: 2px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  border-radius: 16px;
  cursor: pointer;
  text-transform: uppercase;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    border-bottom-width: 2px;
  }
`, MenuContainer = (0, import_styled.default)("div")`
  height: 71px;
  width: 100vw;
  border-top: 1px solid #dadcde;
  border-bottom: 2px solid #dadcde;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
`, MenuNavLink = (0, import_styled.default)(import_react4.NavLink)`
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
`, ActiveLanguageButton = (0, import_styled.default)("button")`
  color: #3c3c3c;
  border: none;
  background-color: inherit;
  font-family: "Nunito";
  font-weight: 800;
  letter-spacing: 0.8px;
  cursor: pointer;
`, ActiveLanguageContainer = (0, import_styled.default)("div")`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 200px;
  padding: 20px 0;
  z-index: 9;
`, LanguagesContainer = (0, import_styled.default)("div")`
  border: 2px solid #dadcde;
  border-radius: 15px;
  background-color: white;
`, LanguagesList = (0, import_styled.default)("ul")`
  display: flex;
  flex-direction: column;
`, LanguagesItem = (0, import_styled.default)("button")`
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
`, LanguagesInput = (0, import_styled.default)("input")`
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
`, LanguagesAddBtn = (0, import_styled.default)("button")`
  position: absolute;
  font-size: 30px;
  top: 7px;
  right: 15px;
  color: #afafaf;
`, Overlay = (0, import_styled.default)("div")`
  background: rgba(28, 97, 130, 0.1);
  bottom: 0;
  left: 0;
  opacity: ${(props) => props.active ? 1 : 0};
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 71px;
  transition: opacity 0.3s;
  z-index: 3;
`, Logout = (0, import_styled.default)("button")`
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
`, PracticeLastAddedContainer = (0, import_styled.default)("div")`
  display: flex;
  align-items: flex-end;
`, PracticeLastAddedWrapper = (0, import_styled.default)("div")`
  height: 72px;
  width: 72px;
  border-radius: 50%;
  border: solid #e5e5e5;
  border-width: 2px 2px 4px;
  position: sticky;
  margin-bottom: 54px;
  bottom: 24px;
  background-color: #fff;
  transition: filter 0.1s ease;
  &:hover {
    filter: brightness(0.9);
  }
`, PracticeLastAddedLink = (0, import_styled.default)(import_react4.Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  filter: inherit;
`, ErrorMessage = (0, import_styled.default)("p")`
  line-height: 20px;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.3px;
  color: #ea2b2b;
`, SkillsListContainer = (0, import_styled.default)("section")`
  width: 65%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 95px);
`, SkillsLineBlock = (0, import_styled.default)("div")`
  width: 100%;
  max-width: 440px;
  margin: 0 auto 38px auto;
`;

// app/modules/Constructor/components/lib.ts
var import_styled2 = __toESM(require("@emotion/styled")), ConstructorFormInner = (0, import_styled2.default)("section")`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  padding-left: 30px;
  margin-bottom: 24px;
`, LessonTitleInput = (0, import_styled2.default)("input")`
  width: fit-content;
  margin: 0 auto;
  text-align: center;
  border: none;
  font-size: 17px;
  font-weight: 700;
  color: #3c3c3c;
  text-align: center;
  margin-top: 8px;
`, ConstructorMenu = (0, import_styled2.default)("div")`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  display: block;
  margin: 0 24px 24px;
  padding: 24px;
  width: 380px;
`, ScreenContainer = (0, import_styled2.default)("section")`
  position: absolute;
  top: 0;
  width: calc(100% - 60px);
  height: 100%;
  text-align: center;
  visibility: ${(props) => props.screen !== props.target ? "hidden" : "visible"};
`, ConstructorSidebar = (0, import_styled2.default)("section")`
  max-width: 25%;
  display: flex;
  flex-direction: column;
  padding-bottom: 71px;
  position: relative;
  background-color: #fff;
  // border: 2px solid #e5e5e5;
  border-radius: 16px;
  margin: 0 24px 24px;
  padding: 24px;
`, BtnClose = (0, import_styled2.default)("button")`
  position: absolute;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border: none;
  background-color: inherit;
  padding: 0;
  left: 30px;
  bottom: -60px;
`, BtnCloseImage = (0, import_styled2.default)("img")`
  width: 16px;
  height: 16px;
  vertical-align: initial;
  transition: filter 0.2s ease;
  opacity: 0.3;
  &:hover {
    filter: brightness(0.7) contrast(2.5);
  }
`, VariantsList = (0, import_styled2.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`, VariantsItem = (0, import_styled2.default)("li")`
  min-width: 240px;
`, PairsList = (0, import_styled2.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 600px;
  margin: 0 auto;
`, SkillPositionContainer = (0, import_styled2.default)("div")`
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
`, SettingsContainer = (0, import_styled2.default)("div")`
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

// app/components/Progress.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Progress = () => {
  let { progress, leave } = useSkill();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProgressBarContainer, { children: [
    progress === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LeaveLessonLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BtnCloseImage, { src: close_default, alt: "Close the skill" }, void 0, !1, {
      fileName: "app/components/Progress.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Progress.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LeaveLessonButton, { onClick: () => leave(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BtnCloseImage, { src: close_default, alt: "Close the skill" }, void 0, !1, {
      fileName: "app/components/Progress.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Progress.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProgressBar, { progress }, void 0, !1, {
      fileName: "app/components/Progress.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Progress.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}, Progress_default = Progress;

// app/modules/Skill/reducer.ts
var import_react5 = require("react"), continueContent = (content, lessonSteps) => {
  console.log("Continuing: ", lessonSteps);
  let newContent = lessonSteps.shift();
  return newContent ? (newContent.difficulty = content.difficulty ? content.difficulty : "easy", newContent.stepType === "Pairs" && (newContent.difficulty = null), newContent) : content;
};
var basicState = {
  progress: 0,
  content: {
    answer: "",
    stepType: "",
    difficulty: "easy",
    options: {}
  },
  lessonSteps: [],
  stepsAmount: 0,
  completedStepsAmount: 0,
  skillState: { status: "idle", formDisabled: !1, buttonDisabled: !0 },
  totalXP: 0
};
function skillReducer(state, action10) {
  let {
    content,
    stepsAmount,
    completedStepsAmount,
    lessonSteps,
    skillState
  } = state, positiveState = {
    ...state,
    skillState: {
      status: "right",
      formDisabled: !0,
      buttonDisabled: !1
    }
  }, negativeState = {
    ...state,
    lessonSteps: [...lessonSteps, content],
    skillState: {
      status: "wrong",
      formDisabled: !0,
      buttonDisabled: !1
    }
  };
  switch (action10.type) {
    case "CONTINUE" /* continue */:
      let isResults = lessonSteps.length === 0;
      return {
        ...state,
        content: continueContent(content, lessonSteps),
        skillState: {
          ...skillState,
          status: isResults ? "results" : "idle",
          formDisabled: !1,
          buttonDisabled: !isResults
        }
      };
    case "SETUP" /* setup */:
      let { steps, totalXP } = action10;
      return {
        ...basicState,
        lessonSteps: steps,
        stepsAmount: steps.length,
        content: continueContent(basicState.content, steps),
        totalXP
      };
    case "RESULTS" /* results */:
      return {
        ...state,
        skillState: { ...skillState, status: "results" }
      };
    case "SET_STATE_RIGHT" /* setStateRight */: {
      let newCompletedStepsAmount = completedStepsAmount + 1;
      return {
        ...positiveState,
        completedStepsAmount: newCompletedStepsAmount,
        progress: newCompletedStepsAmount / stepsAmount
      };
    }
    case "SET_STATE_WRONG" /* setStateWrong */:
      return negativeState;
    case "SET_CHECK_DISABLED" /* setCheckDisabled */:
      let { disabled } = action10;
      return {
        ...state,
        skillState: { ...skillState, buttonDisabled: disabled }
      };
    case "UPDATE_STATE" /* updateState */:
      let { update } = action10;
      return { ...state, ...update };
    case "SET_DIFFICULTY" /* setDifficulty */:
      let { difficulty } = action10;
      return { ...state, content: { ...state.content, difficulty } };
    case "LEAVE" /* leave */:
      return { ...state, skillState: { ...skillState, status: "leaving" } };
    case "RESET_STATUS" /* resetStatus */:
      return { ...state, skillState: { ...skillState, status: "idle" } };
    default:
      throw new Error(`Unsupported action: ${action10}`);
  }
}
function useSkillReducer({
  initialState: initialState3 = basicState,
  reducer: reducer2 = skillReducer
} = {}) {
  let [state, dispatch] = (0, import_react5.useReducer)(reducer2, initialState3), { content, progress, skillState, stepsAmount, totalXP } = state;
  return {
    content,
    progress,
    skillState,
    totalXP,
    continueSkill: () => dispatch({ type: "CONTINUE" /* continue */ }),
    setup: (steps, totalXP2) => dispatch({ type: "SETUP" /* setup */, steps, totalXP: totalXP2 }),
    showResults: () => dispatch({ type: "RESULTS" /* results */ }),
    setStateRight: () => dispatch({ type: "SET_STATE_RIGHT" /* setStateRight */ }),
    setStateWrong: () => dispatch({ type: "SET_STATE_WRONG" /* setStateWrong */ }),
    setCheckDisabled: (disabled) => dispatch({ type: "SET_CHECK_DISABLED" /* setCheckDisabled */, disabled }),
    updateState: (update) => dispatch({ type: "UPDATE_STATE" /* updateState */, update }),
    setDifficulty: (difficulty) => dispatch({ type: "SET_DIFFICULTY" /* setDifficulty */, difficulty }),
    leave: () => dispatch({ type: "LEAVE" /* leave */ }),
    resetStatus: () => dispatch({ type: "RESET_STATUS" /* resetStatus */ })
  };
}
var defaultSkillContextState = {
  ...basicState,
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
};

// app/modules/Skill/components/Results.tsx
var import_react9 = __toESM(require("react"));

// app/modules/Skill/components/lib.ts
var import_react6 = require("@emotion/react"), import_styled3 = __toESM(require("@emotion/styled")), import_react7 = require("@remix-run/react");

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
`, LessonFooter = (0, import_styled3.default)("section")`
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
`, LessonFooterInner = (0, import_styled3.default)("div")`
  max-width: 920px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`, LessonFooterMessage = (0, import_styled3.default)("div")`
  width: 100%;
  display: ${({ status }) => status === "right" || status === "wrong" ? "flex" : "none"};
  align-items: center;
`, LessonFooterTitle = (0, import_styled3.default)("h2")`
  margin: 0;
  font-family: "Nunito", sans-serif;
  line-height: 30px;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.2px;
`, LessonFooterText = (0, import_styled3.default)("p")`
  margin: 5px 0 0 0;
  font-size: 17px;
  font-family: "Nunito";
  overflow-y: scroll;
  max-height: 60px;
`, LessonButton = (0, import_styled3.default)("button")`
  border: 0 solid transparent;
  background-color: ${(props) => props.stateWrong ? "#ff4b4b" : props.stateRight ? "#58cc02" : props.active ? "#78C83D" : props.skip ? "#fff" : "#E5E5E5"};
  color: ${(props) => props.active ? "#fff" : "#AFAFAF"};
  border-color: ${(props) => props.stateWrong ? "#ea2b2b" : props.stateRight ? "#58a700" : props.skip ? "#e5e5e5" : "white"};
  border-width: ${(props) => props.skip ? "2px" : 0};
  border-bottom-width: ${(props) => props.active || props.skip ? "4px" : "transparent"};
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
    border-bottom-width: ${(props) => props.skip ? "2px" : "0"};
    height: 46px;
    transform: translateY(4px);
  }
`, ChangeDifficultyBtn = (0, import_styled3.default)("button")`
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
`, LessonAppear = import_react6.keyframes`
  0% {
    opacity: 0;
    transform: translateX(150px)
  }

  100% {
    opacity: 1;
    transform: translateX(0)
  }
`, LessonBody = (0, import_styled3.default)("div")`
  margin: 72px 29% 4%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: calc(100% - 240px);
  animation-name: ${LessonAppear};
  animation-duration: 0.2s;
`, LessonBodyTitle = (0, import_styled3.default)("h3")`
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
`, LessonBodyMessage = (0, import_styled3.default)("div")`
  padding: 12px 15px 12px 21px;
  border: 2px solid #dedede;
  font-family: "Nunito";
  font-weight: 400;
  font-size: 18px;
  color: #4c4c4c;
  margin: 0 21px;
  position: relative;
  z-index: 1;
`, LessonBodyVariants = (0, import_styled3.default)("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  bottom: 0;
`, LessonBodyVariant = (0, import_styled3.default)("div")`
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
`, LessonBodyWelcome = (0, import_styled3.default)("div")``, LessonBodyResults = (0, import_styled3.default)("div")``, VariantItem = (0, import_styled3.default)("button")`
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
`, LessonTitle2 = (0, import_styled3.default)("h1")`
  font-size: 30px;
  font-family: "Nunito", sans-serif;
  line-height: 1.25;
  color: #3c3c3c;
  text-align: left;
  font-weight: 800;
  cursor: default;
  margin: 0;
`, LessonQuestion = (0, import_styled3.default)("p")`
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
`, LessonQuestionTriangleContainer = (0, import_styled3.default)("div")`
  height: 10px;
  overflow: hidden;
  width: 20px;
  position: absolute;
  left: -5px;
  margin: 15px 0;
  top: calc(50% - 15px);
  transform: translateY(-50%) rotate(-90deg);
`, LessonQuestionTriangle = (0, import_styled3.default)("span")`
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
`, messageIconAppear = import_react6.keyframes`

  50% {
    transform: scale(1.1)
  }

  75% {
    transform: scale(0.9)
  }

  100% {
    transform: scale(1)
  }
`, LessonFooterIcon = (0, import_styled3.default)("div")`
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
`, ResultsContainer = (0, import_styled3.default)("section")`
  display: flex;
  height: calc(100vh - 140px);
  justify-content: center;
  outline: none;
`, ResultsHiddenForm = (0, import_styled3.default)(import_react7.Form)`
  position: absolute;
  width: 1px;
  height: 1px;
  top: -1000px;
  left: -1000px;
`, ResultsTitle = (0, import_styled3.default)("h2")`
  margin: 25px 0;
  font-family: "Nunito";
  font-size: 24px;
  font-weight: 800;
  color: #3c3c3c;
`, ResultsDescription = (0, import_styled3.default)("span")`
  font-size: 19px;
  line-height: 1.4;
  color: #777;
  font-family: "Nunito";
`, ResultsBlock = (0, import_styled3.default)("div")`
  padding: 50px 100px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
`, PairsList2 = (0, import_styled3.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  margin: 30px 0 0;
  padding: 0;
`, PairsItem = (0, import_styled3.default)("li")`
  margin-bottom: 5px;
  position: relative;
  width: 48%;
`;

// app/styles/results.png
var results_default = "/build/_assets/results-IW73HFOZ.png";

// app/hooks/useFocus.ts
var import_react8 = require("react"), useFocus = (dependency) => {
  let ref = (0, import_react8.useRef)(null);
  return (0, import_react8.useEffect)(() => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.focus();
  }, [dependency]), ref;
};

// app/modules/Skill/components/Results.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Results = import_react9.default.forwardRef((props, ref) => {
  let { totalXP } = useSkill(), containerRef = useFocus();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    ResultsContainer,
    {
      ref: containerRef,
      onKeyDown: (e) => {
        e.key === "Enter" && props.onSubmit();
      },
      tabIndex: 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ResultsHiddenForm, { method: "post", ref, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "exp", value: "16", readOnly: !0 }, void 0, !1, {
          fileName: "app/modules/Skill/components/Results.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/modules/Skill/components/Results.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ResultsBlock, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: results_default, width: "140", alt: "Results picture" }, void 0, !1, {
            fileName: "app/modules/Skill/components/Results.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ResultsTitle, { children: [
            "You've earned ",
            totalXP + 10,
            " XP today"
          ] }, void 0, !0, {
            fileName: "app/modules/Skill/components/Results.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ResultsDescription, { children: "Practice Complete!" }, void 0, !1, {
              fileName: "app/modules/Skill/components/Results.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              ResultsDescription,
              {
                style: { color: "#ffc800", fontWeight: "700", marginLeft: "10px" },
                children: "+10 XP"
              },
              void 0,
              !1,
              {
                fileName: "app/modules/Skill/components/Results.tsx",
                lineNumber: 45,
                columnNumber: 11
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/modules/Skill/components/Results.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/Skill/components/Results.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/modules/Skill/components/Results.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
});

// app/modules/Skill/components/Footer.tsx
var import_react12 = require("@remix-run/react");

// app/styles/easier.svg
var easier_default = "/build/_assets/easier-J6XFH7BL.svg";

// app/styles/harder.svg
var harder_default = "/build/_assets/harder-YCUE4ZYE.svg";

// app/utils.ts
var import_react10 = require("@remix-run/react"), import_react11 = require("react");
var isItemInArray = (arr, item) => !!arr.filter((arrItem) => arrItem === item).length;
var cleanWordFromSigns = (word) => {
  let newWord = word.split("").slice(0, -1).join("");
  switch (word.slice(-1)) {
    case ",":
      return {
        newWord,
        sign: ","
      };
    case ".":
      return {
        newWord,
        sign: "."
      };
    case "?":
      return {
        newWord,
        sign: "?"
      };
    case "!":
      return {
        newWord,
        sign: "!"
      };
    default:
      return { newWord: word, sign: "" };
  }
}, doesArrayContainItems = (items, arr) => {
  let filtered = arr.filter(
    (arrItem) => items.find(
      (item) => item.trim().toLocaleLowerCase() === arrItem.trim().toLowerCase()
    )
  );
  return {
    state: !!filtered.length,
    length: filtered.length,
    items: filtered,
    formatted: filtered.map((item) => item.trim())
  };
}, getWeekDay = () => getShortWeekday(new Date());
function getShortWeekday(day) {
  return day.toLocaleDateString("en-US", {
    weekday: "short"
  });
}
var getCurrentWeek = () => {
  let week = [];
  for (let i = 6; i >= 0; i--) {
    let today = new Date();
    today.setDate(today.getDate() - i), week.push(getShortWeekday(today));
  }
  return week;
}, areArraysEqual = (arr1, arr2) => (arr1.length, arr2.length, arr1.filter(
  (arr1Item, idx) => arr1Item.toLowerCase() === arr2[idx].toLowerCase()
).length === arr1.length), getTodayDate = () => {
  let today = new Date();
  return today.getFullYear() + today.getUTCMonth() + today.getDate();
};

// app/modules/Skill/components/Footer.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Footer({
  checkAnswer = () => {
  }
}) {
  let transition = (0, import_react12.useTransition)(), { skillState, content, continueSkill, setStateWrong, setDifficulty } = useSkill(), { answer, options, difficulty, stepType } = content, { text } = options, { status, buttonDisabled } = skillState, buttonText = transition.state === "submitting" ? "Saving..." : transition.state === "loading" ? "Saved!" : status === "right" ? "Next" : status !== "idle" ? "Continue" : "Check", getFooterText = (text2, answer2) => stepType === "Insert" ? answer2.length === 1 ? text2 == null ? void 0 : text2.split(" ")[answer2[0]] : text2 : stepType === "Question" || stepType === "Variants" ? answer2 : text2 && answer2.length ? answer2.length === 1 ? cleanWordFromSigns(text2.split(" ")[Number(answer2[0])]).newWord : text2 : answer2.join(" "), handleContinue = () => {
    if (!(buttonText === "Saving..." || buttonText === "Saved!" || skillState.buttonDisabled)) {
      if (status === "idle")
        return checkAnswer();
      continueSkill();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LessonFooter, { status, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LessonFooterInner, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      LessonButton,
      {
        onClick: () => {
          setStateWrong();
        },
        skip: !0,
        hidden: status !== "idle" || content.stepType === "Pairs",
        children: "Skip"
      },
      void 0,
      !1,
      {
        fileName: "app/modules/Skill/components/Footer.tsx",
        lineNumber: 81,
        columnNumber: 9
      },
      this
    ),
    difficulty && status === "idle" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      ChangeDifficultyBtn,
      {
        onClick: () => setDifficulty(difficulty === "easy" ? "hard" : "easy"),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "img",
            {
              src: difficulty === "easy" ? harder_default : easier_default,
              alt: difficulty,
              height: 19,
              width: 27,
              style: { marginRight: 10 }
            },
            void 0,
            !1,
            {
              fileName: "app/modules/Skill/components/Footer.tsx",
              lineNumber: 95,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
            "Make ",
            difficulty === "easy" ? "harder" : "easier"
          ] }, void 0, !0, {
            fileName: "app/modules/Skill/components/Footer.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/modules/Skill/components/Footer.tsx",
        lineNumber: 90,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LessonFooterMessage, { status, children: [
      (status === "right" || status === "wrong") && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LessonFooterIcon, { status }, void 0, !1, {
        fileName: "app/modules/Skill/components/Footer.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { marginLeft: 16, width: "calc(100% - 209px)" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LessonFooterTitle, { children: status === "wrong" ? "Right answer: " : "Great!" }, void 0, !1, {
          fileName: "app/modules/Skill/components/Footer.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        status === "wrong" && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(LessonFooterText, { children: getFooterText(text, answer) }, void 0, !1, {
          fileName: "app/modules/Skill/components/Footer.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/modules/Skill/components/Footer.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/Skill/components/Footer.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      LessonButton,
      {
        active: !buttonDisabled,
        stateRight: status === "right",
        stateWrong: status === "wrong",
        onClick: handleContinue,
        disabled: buttonText === "Saving..." || buttonText === "Saved!" || buttonDisabled,
        style: {
          marginLeft: status === "results" || content.stepType === "Pairs" ? "auto" : 0
        },
        children: buttonText
      },
      void 0,
      !1,
      {
        fileName: "app/modules/Skill/components/Footer.tsx",
        lineNumber: 120,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/modules/Skill/components/Footer.tsx",
    lineNumber: 80,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Skill/components/Footer.tsx",
    lineNumber: 79,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/Lesson.tsx
var import_react13 = __toESM(require("react"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Lesson = ({
  initialValue = "",
  disabledCondition,
  checkAnswer,
  keyDownHandle,
  children,
  ...props
}) => {
  let { skillState, continueSkill, setCheckDisabled } = useSkill(), { status, formDisabled, buttonDisabled } = skillState, [userAnswer, setUserAnswer] = (0, import_react13.useState)(initialValue), lessonRef = useFocus(status);
  (0, import_react13.useEffect)(() => {
    if (disabledCondition !== null)
      return disabledCondition(userAnswer) ? setCheckDisabled(!1) : setCheckDisabled(!0);
  }, [userAnswer]);
  let onKeyDownHandle = (event, callback) => {
    if (callback)
      return callback(event);
    if (keyDownHandle && keyDownHandle(event, setUserAnswer), !(event.key !== "Enter" || buttonDisabled))
      return event.preventDefault(), status === "idle" ? checkAnswer(userAnswer) : continueSkill();
  };
  return (0, import_react13.useEffect)(() => {
    !formDisabled && setUserAnswer && setUserAnswer(initialValue);
  }, [formDisabled]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      tabIndex: 0,
      onKeyDown: onKeyDownHandle,
      ref: lessonRef,
      style: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        outline: "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LessonBody, { children: import_react13.default.Children.map(children, (child) => import_react13.default.cloneElement(child, {
          userAnswer,
          setUserAnswer,
          keyDownCheck: onKeyDownHandle,
          checkAnswer: (uAnswer) => checkAnswer(uAnswer, setUserAnswer),
          ...props
        })) }, void 0, !1, {
          fileName: "app/modules/Skill/components/Lesson.tsx",
          lineNumber: 75,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Footer, { checkAnswer: () => checkAnswer(userAnswer) }, void 0, !1, {
          fileName: "app/modules/Skill/components/Lesson.tsx",
          lineNumber: 87,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/modules/Skill/components/Lesson.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  );
};

// app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx
var import_react16 = require("react");

// app/modules/Constructor/Levels/components/lib.tsx
var import_styled4 = __toESM(require("@emotion/styled")), StepContainer = (0, import_styled4.default)("section")`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`, StepContent = (0, import_styled4.default)("div")`
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  padding: 60px 24px;
  min-height: 300px;
  margin-top: 20px;
`, StepHeader = (0, import_styled4.default)("div")`
  display: flex;
  justify-content: space-between;
  position: relative;
`, ChooseStyle = (0, import_styled4.default)("div")`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  justify-content: center;
  align-items: self-end;
  margin: auto 0;
`, StyleButton = (0, import_styled4.default)("button")`
  padding: 35px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  font-family: "Nunito";
  transition: color 0.2s;
  &:hover {
    color: #1cb0f6;
  }
  &:active {
    color: #1cb0f6;
    filter: brightness(1.1);
  }
`, Button = (0, import_styled4.default)("button")`
  border: 0 solid transparent;
  background-color: #1cb0f6;
  color: #fff;
  border-color: white;
  border-width: 0;
  border-bottom-width: 4px;
  border-bottom-color: #1899d6;
  height: 50px;
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
  margin-right: 10px;
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    border-bottom-width: 0;
    margin-top: 4px;
    height: 46px;
  }
  &:disabled {
    background-color: #e5e5e5;
    color: #afafaf;
    border: 2px solid #e5e5e5;
    cursor: default;
    &:hover {
      filter: none;
    }
  }
`, InsertWordsTextBlock = (0, import_styled4.default)("div")`
  min-height: 170px;
  flex-grow: 1;
  width: 100%;
  padding: 10px 0;
  background-color: #fff;
  position: relative;
  z-index: ${(props) => props.isEditingText ? "0" : "2"};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  box-sizing: border-box;
  font-size: 19px;
  font-family: "Nunito";
  margin-top: 30px;
`, InsertWordsInput = (0, import_styled4.default)("input")`
  border: none;
  font-size: 19px;
  margin: 0 7px;
  width: ${(props) => props.length * 13 + 5}px;
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
`, InsertWordsAnswerField = (0, import_styled4.default)("span")`
  margin: 0 7px;
  width: ${(props) => props.length * 13}px;
  border-bottom: 2px solid #afafaf;
`, VariantsList2 = (0, import_styled4.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
`, VariantsItem2 = (0, import_styled4.default)("li")`
  position: relative;
  margin-bottom: 8px;
  background-color: white;
`, VariantItemInput = (0, import_styled4.default)("input")`
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
`, VariantItemNumber = (0, import_styled4.default)("span")`
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
`, SidebarList = (0, import_styled4.default)("ul")`
  margin-bottom: auto;
`, SidebarBtn = (0, import_styled4.default)("button")`
  color: #3c3c3c;
  display: block;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: ${(props) => props.isActive ? "#dadada" : "inherit"};
  border-radius: 16px;
  width: 100%;
  text-align: left;
  padding: 13px 20px;
  transition: background 0.07s;
  margin-bottom: 2px;
  &:hover {
    background: #dadada;
  }
`;

// app/modules/Skill/components/InsertWords/lib.ts
var import_styled5 = __toESM(require("@emotion/styled")), PuzzleContainer = (0, import_styled5.default)("section")`
  width: 100%;
`, PuzzleList = (0, import_styled5.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 30px 0 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: center;
`, PuzzleItem = (0, import_styled5.default)("li")`
  margin: 0 16px 8px 0;
  position: ${(props) => props.alreadyChoosen ? "absolute" : "relative"};
  top: ${(props) => props.alreadyChoosen ? "-1000px" : "0"};
`, VariantsContainer = (0, import_styled5.default)("section")`
  width: 100%;
  margin-top: 20px;
  outline: none;
`, VariantsList3 = (0, import_styled5.default)("ul")`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`, VariantsItem3 = (0, import_styled5.default)("li")`
  position: relative;
  margin-bottom: 8px;
  width: 49%;
`;

// app/modules/Skill/components/InsertWords/Puzzle.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Puzzle({ values, setValues }) {
  let { content } = useSkill(), { answer: contentAnswer, options } = content, { text } = options, insertText = text, selectVariant = (variant) => {
    setValues((prevArray) => {
      let empty = prevArray.find((item, idx) => {
        if (item === " " || item.length === 0 || !item)
          return { item, idx };
      }), inx = prevArray.indexOf(empty);
      if (inx.toString() && inx !== -1) {
        let newArr = prevArray;
        return newArr[inx] = variant, [...newArr];
      }
      return [...prevArray, variant];
    });
  }, words = (contentAnswer.length === 1, contentAnswer).map((idx) => {
    let textItem = insertText.split(" ")[Number(idx)];
    return cleanWordFromSigns(textItem).newWord;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PuzzleContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PuzzleList, { children: words.map((answer, idx) => {
    let alreadyChoosen = !!values.find((value) => value === answer);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PuzzleItem, { alreadyChoosen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      VariantItem,
      {
        type: "button",
        isFocused: !1,
        onClick: () => selectVariant(answer),
        disabled: alreadyChoosen,
        children: answer
      },
      void 0,
      !1,
      {
        fileName: "app/modules/Skill/components/InsertWords/Puzzle.tsx",
        lineNumber: 50,
        columnNumber: 15
      },
      this
    ) }, idx, !1, {
      fileName: "app/modules/Skill/components/InsertWords/Puzzle.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this);
  }) }, void 0, !1, {
    fileName: "app/modules/Skill/components/InsertWords/Puzzle.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Skill/components/InsertWords/Puzzle.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/InsertWords/Variants.tsx
var import_react14 = require("react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function generateVariants(text, answer) {
  let variants = [], words = text.split(" "), rightAnswer = words[answer[0]];
  return words.splice(answer[0], 1), variants.push(rightAnswer), words.length === 0 ? variants : [...variants, ...words];
}
function Variants({
  values,
  setValues,
  keyDownCheck
}) {
  let myRef = (0, import_react14.useRef)(null), { content, skillState } = useSkill(), { options, answer } = content, { text } = options, variants = generateVariants(text, answer);
  (0, import_react14.useEffect)(() => {
    if (skillState.status === "idle") {
      let timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null || _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]);
  let keyDownHandler = (e) => {
    variants.forEach((variant, idx) => {
      Number(e.key) === idx + 1 && setValues([variant]);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    VariantsContainer,
    {
      tabIndex: 0,
      ref: myRef,
      onKeyDown: (e) => keyDownCheck(e, (e2) => keyDownHandler(e2)),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VariantsList3, { children: variants.map((variant, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VariantsItem3, { onClick: () => setValues([variant]), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(VariantItemNumber, { isFocused: variant === values[0], children: idx + 1 }, void 0, !1, {
          fileName: "app/modules/Skill/components/InsertWords/Variants.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          VariantItem,
          {
            type: "button",
            isFocused: variant === values[0],
            disabled: skillState.status !== "idle",
            children: variant
          },
          void 0,
          !1,
          {
            fileName: "app/modules/Skill/components/InsertWords/Variants.tsx",
            lineNumber: 75,
            columnNumber: 13
          },
          this
        )
      ] }, idx, !0, {
        fileName: "app/modules/Skill/components/InsertWords/Variants.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)) }, void 0, !1, {
        fileName: "app/modules/Skill/components/InsertWords/Variants.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/modules/Skill/components/InsertWords/Variants.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  );
}

// app/modules/Skill/components/InsertWords/Text.tsx
var import_react15 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Text({ values, setValues }) {
  let { content, skillState } = useSkill(), { options, answer: correctIndexes, difficulty } = content, { text, variants, isToChoose } = options;
  (0, import_react15.useEffect)(() => {
    skillState.formDisabled || setValues([...new Array(correctIndexes.length).fill("")]);
  }, [skillState.formDisabled]);
  let inputRef = (0, import_react15.useRef)(null);
  (0, import_react15.useEffect)(() => {
    if (skillState.status === "idle" && !isToChoose && !(variants != null && variants.length)) {
      let timeout = setTimeout(() => {
        var _a;
        (_a = inputRef.current) == null || _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]), (0, import_react15.useEffect)(() => {
    if (difficulty === "hard") {
      let timeout = setTimeout(() => {
        var _a;
        (_a = inputRef.current) == null || _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [difficulty]);
  let handleChange = (evt, index) => {
    let target = evt.target;
    setValues((prevArray) => {
      let newArray = prevArray;
      return newArray[index] = target.value, [...newArray];
    });
  }, handleInputClick = (evt, index) => {
    let target = evt.target;
    target.value === " " || target.value.length === 0 || (target.blur(), setValues((prevArray) => (prevArray[index] = " ", [...prevArray])));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("section", { children: text == null ? void 0 : text.split(" ").map((textItem, textItemIndex) => {
    let { newWord, sign } = cleanWordFromSigns(textItem);
    return correctIndexes.filter((item) => item === textItemIndex).length ? correctIndexes.map((indexItem, index) => textItemIndex !== Number(indexItem) ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react15.Fragment, { children: [
      difficulty === "easy" && correctIndexes.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        InsertWordsInput,
        {
          type: "text",
          length: newWord.length,
          disabled: !0,
          value: values[index],
          style: { color: "#fff" }
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/InsertWords/Text.tsx",
          lineNumber: 80,
          columnNumber: 19
        },
        this
      ) : difficulty === "easy" && correctIndexes.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        InsertWordsInput,
        {
          type: "text",
          length: newWord.length,
          value: values[index],
          onClick: (evt) => {
            handleInputClick(evt, index);
          },
          style: { cursor: "pointer" },
          readOnly: !0
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/InsertWords/Text.tsx",
          lineNumber: 88,
          columnNumber: 19
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        InsertWordsInput,
        {
          type: "text",
          id: `input${0}`,
          isToChoose,
          length: newWord.length,
          value: values[index],
          onChange: (evt) => handleChange(evt, index),
          disabled: skillState.formDisabled,
          ref: correctIndexes.indexOf(indexItem) === 0 ? inputRef : null
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/InsertWords/Text.tsx",
          lineNumber: 99,
          columnNumber: 19
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { style: { marginRight: 4 }, children: sign }, void 0, !1, {
        fileName: "app/modules/Skill/components/InsertWords/Text.tsx",
        lineNumber: 113,
        columnNumber: 17
      }, this)
    ] }, index, !0, {
      fileName: "app/modules/Skill/components/InsertWords/Text.tsx",
      lineNumber: 78,
      columnNumber: 15
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { style: { marginRight: 4 }, children: textItem }, `text${textItemIndex}`, !1, {
      fileName: "app/modules/Skill/components/InsertWords/Text.tsx",
      lineNumber: 119,
      columnNumber: 11
    }, this);
  }) }, void 0, !1, {
    fileName: "app/modules/Skill/components/InsertWords/Text.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function InsertWordsScreen({
  userAnswer,
  setUserAnswer,
  keyDownCheck
}) {
  let { content, skillState } = useSkill(), { options, answer, difficulty } = content, { variants, isToChoose } = options, initalValues = new Array(answer.length).fill(
    variants && difficulty === "easy" ? " " : ""
  ), [values, setValues] = (0, import_react16.useState)(initalValues);
  return (0, import_react16.useEffect)(() => {
    areArraysEqual(userAnswer, values) && !isToChoose || values.length === answer.length && setUserAnswer(values);
  }, [values]), (0, import_react16.useEffect)(() => {
    isToChoose || userAnswer[0].length && setValues([...userAnswer]);
  }, [userAnswer]), (0, import_react16.useLayoutEffect)(() => {
    setValues(initalValues);
  }, [difficulty]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LessonTitle2, { children: "Add missing words" }, void 0, !1, {
      fileName: "app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(InsertWordsTextBlock, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Text, { values, setValues }, void 0, !1, {
        fileName: "app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      difficulty === "easy" && answer.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        Variants,
        {
          values,
          setValues,
          keyDownCheck
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx",
          lineNumber: 76,
          columnNumber: 11
        },
        this
      ) : null,
      difficulty === "easy" && answer.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Puzzle, { values, setValues }, void 0, !1, {
        fileName: "app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Skill/components/InsertWords/InsertWordsScreen.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/InsertWords/index.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function InsertWords() {
  let { content, setStateRight, setStateWrong } = useSkill(), { answer: correctIndexes, stepType, difficulty, options } = content, { text } = options, initialUserAnswer = [""];
  return text && stepType === "Insert" ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    Lesson,
    {
      disabledCondition: (userAnswer) => userAnswer.filter((uA) => {
        if (uA !== " " && uA.length > 0)
          return !0;
      }).length === correctIndexes.length,
      initialValue: initialUserAnswer,
      checkAnswer: (userAnswer) => {
        let correctAnswer = text.split(" ").filter(
          (item, index) => correctIndexes.filter((idx) => idx === index).length
        ).map((item) => cleanWordFromSigns(item).newWord.toLowerCase()), formattedUserAnswer = userAnswer.map(
          (answerItem) => cleanWordFromSigns(answerItem.trim()).newWord
        );
        return areArraysEqual(formattedUserAnswer, correctAnswer) ? setStateRight() : setStateWrong();
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        InsertWordsScreen,
        {
          userAnswer: [""],
          setUserAnswer: () => {
          },
          keyDownCheck: () => {
          }
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/InsertWords/index.tsx",
          lineNumber: 61,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/modules/Skill/components/InsertWords/index.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  ) : null;
}

// app/modules/Skill/components/PairsScreen.tsx
var import_react17 = require("react");
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function PairsScreen({
  variants,
  checkAnswer,
  userAnswer
}) {
  let [activeIdx, setActiveIdx] = (0, import_react17.useState)(-1), isVariantDisabled = (idx) => !!userAnswer.find((answerItem) => answerItem.includes((idx + 1).toString()));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(LessonTitle2, { children: "Connect pairs" }, void 0, !1, {
      fileName: "app/modules/Skill/components/PairsScreen.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PairsList2, { children: variants.map(({ value, isFocused }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      PairsItem,
      {
        onClick: (evt) => {
          let target = evt.target;
          if (!isVariantDisabled(idx)) {
            if (activeIdx === -1)
              return setActiveIdx(Number(target.id));
            checkAnswer(`${activeIdx}${target.id}`), setActiveIdx(-1);
          }
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          VariantItem,
          {
            type: "button",
            id: (idx + 1).toString(),
            disabled: isVariantDisabled(idx),
            isDisabled: isVariantDisabled(idx),
            isFocused: isFocused || activeIdx === idx + 1,
            children: value
          },
          void 0,
          !1,
          {
            fileName: "app/modules/Skill/components/PairsScreen.tsx",
            lineNumber: 47,
            columnNumber: 13
          },
          this
        )
      },
      idx,
      !1,
      {
        fileName: "app/modules/Skill/components/PairsScreen.tsx",
        lineNumber: 33,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/modules/Skill/components/PairsScreen.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Skill/components/PairsScreen.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/Pairs.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Pairs() {
  let { content, setStateRight, updateState, skillState } = useSkill(), { answer, variants } = content, initialValue = [""], checkAnswer = (uAns, setUserAnswer) => {
    let spliceIdx = 0;
    if (answer.find((answerItem, idx) => (spliceIdx = idx, answerItem === uAns || answerItem.split("").reverse().join("") === uAns))) {
      let newContent = content;
      return newContent.answer.splice(spliceIdx, 1), setUserAnswer((prevUserAnswer) => [...prevUserAnswer, uAns]), newContent.answer.length === 0 ? setStateRight() : updateState({ content: newContent });
    } else
      return setUserAnswer((prevUserAnswer) => [...prevUserAnswer]), updateState({
        skillState: { ...skillState, buttonDisabled: !0 }
      });
  };
  return content.stepType === "Pairs" ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    Lesson,
    {
      initialValue,
      disabledCondition: null,
      checkAnswer,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        PairsScreen,
        {
          userAnswer: [""],
          checkAnswer: () => {
          },
          variants
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/Pairs.tsx",
          lineNumber: 43,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/modules/Skill/components/Pairs.tsx",
      lineNumber: 38,
      columnNumber: 5
    },
    this
  ) : null;
}

// app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx
var import_react18 = require("react");

// app/styles/duo.svg
var duo_default = "/build/_assets/duo-4STWGEJ4.svg";

// app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function QuestionAnswerScreen({
  userAnswer,
  setUserAnswer
}) {
  let { skillState, content } = useSkill(), myRef = (0, import_react18.useRef)(null);
  return (0, import_react18.useEffect)(() => {
    if (skillState.status === "idle") {
      let timeout = setTimeout(() => {
        var _a;
        (_a = myRef.current) == null || _a.focus();
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [skillState.status]), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(LessonTitle2, { children: "Answer the question" }, void 0, !1, {
      fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        "div",
        {
          style: { display: "flex", alignItems: "center", margin: "30px 0" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: duo_default, alt: "Duo", height: 150, style: { marginBottom: -50 } }, void 0, !1, {
              fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { style: { position: "relative" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(LessonQuestion, { children: content.options.question }, void 0, !1, {
                fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(LessonQuestionTriangleContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(LessonQuestionTriangle, {}, void 0, !1, {
                fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
                lineNumber: 45,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
                lineNumber: 44,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        Textarea,
        {
          id: "answer",
          name: "answer",
          placeholder: "Enter your answer",
          value: userAnswer,
          onChange: (e) => setUserAnswer(e.target.value),
          disabled: skillState.formDisabled,
          ref: myRef,
          onKeyDown: (e) => {
            e.key === "Enter" && e.preventDefault();
          }
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswerScreen.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/QuestionAnswer/QuestionAnswer.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function QuestionAnswer() {
  let { content, setStateWrong, setStateRight } = useSkill(), { answer: correctAnswer, options } = content, { keywords } = options, checkAnswer = (userAnswer) => {
    if (keywords != null && keywords.length) {
      let userAnswerArray = userAnswer.split(" ").map((word) => cleanWordFromSigns(word).newWord);
      if (doesArrayContainItems(
        keywords,
        userAnswerArray
      ).length === keywords.length)
        return setStateRight();
    }
    return console.log({ correctAnswer, userAnswer }), correctAnswer.toLowerCase() === userAnswer.toLowerCase() ? setStateRight() : setStateWrong();
  };
  return content.stepType === "Question" ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    Lesson,
    {
      checkAnswer,
      disabledCondition: (userAnswer) => userAnswer.length > 0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(QuestionAnswerScreen, { userAnswer: "", setUserAnswer: () => {
      } }, void 0, !1, {
        fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswer.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/modules/Skill/components/QuestionAnswer/QuestionAnswer.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  ) : null;
}

// app/modules/Skill/components/QuestionAnswer/index.tsx
var QuestionAnswer_default = QuestionAnswer;

// app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function VariantsScreen({
  question,
  variants,
  userAnswer,
  setUserAnswer
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(LessonTitle2, { children: "Choose right variant" }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "div",
        {
          style: { display: "flex", alignItems: "center", margin: "30px 0" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: duo_default, alt: "Duo", height: 150, style: { marginBottom: -50 } }, void 0, !1, {
              fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { style: { position: "relative" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(LessonQuestion, { children: question }, void 0, !1, {
                fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
                lineNumber: 34,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(LessonQuestionTriangleContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(LessonQuestionTriangle, {}, void 0, !1, {
                fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
                lineNumber: 36,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
                lineNumber: 35,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
          lineNumber: 29,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(VariantsList2, { children: variants.map(({ value }, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(VariantsItem2, { onClick: () => setUserAnswer(value), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(VariantItemNumber, { isFocused: value === userAnswer, children: idx + 1 }, void 0, !1, {
          fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
          lineNumber: 44,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(VariantItem, { type: "button", isFocused: value === userAnswer, children: value }, void 0, !1, {
          fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ] }, idx, !0, {
        fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/Variants/VariantsScreen.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/Variants.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function VariantsPractice() {
  let { content, setStateRight, setStateWrong } = useSkill(), { options, stepType, answer } = content, { question, variants } = options;
  return stepType === "Variants" ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    Lesson,
    {
      disabledCondition: (userAnswer) => userAnswer.length,
      checkAnswer: (userAnswer) => (console.log({ answer, userAnswer }), userAnswer === answer ? setStateRight() : setStateWrong()),
      keyDownHandle: (e, setUserAnswer) => {
        if (e.key === "1")
          return setUserAnswer(variants[0].value);
        if (e.key === "2")
          return setUserAnswer(variants[1].value);
        if (e.key === "3")
          return setUserAnswer(variants[2].value);
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        VariantsScreen,
        {
          userAnswer: "",
          setUserAnswer: () => {
          },
          question,
          variants
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/components/Variants.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/modules/Skill/components/Variants.tsx",
      lineNumber: 37,
      columnNumber: 5
    },
    this
  ) : null;
}

// app/modules/Skill/components/AreYouSureBlock/lib.tsx
var import_styled6 = __toESM(require("@emotion/styled")), import_react19 = require("@remix-run/react"), Wrapper = (0, import_styled6.default)("div")`
  background: #fff;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 6;
`, Inner = (0, import_styled6.default)("div")`
  max-width: 1140px;
  padding: 40px 24px;
  margin: 0 auto;
`, Grid = (0, import_styled6.default)("div")`
  display: grid;
  grid-gap: 16px 40px;
  align-items: center;
  grid-template-areas:
    "title dismiss quit"
    "description dismiss quit";
  grid-template-columns: 1fr repeat(2, minmax(min-content, 172px));
`, Title = (0, import_styled6.default)("span")`
  font-size: 25px;
  grid-area: title;
  line-height: 30px;
  font-weight: 700;
  font-family: "Nunito";
`, Description = (0, import_styled6.default)("span")`
  font-size: 19px;
  grid-area: description;
  line-height: 24px;
  padding: 0;
  color: #777;
  font-family: "Nunito";
`, QuitButton = (0, import_styled6.default)(import_react19.Link)`
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
`, StayButton = (0, import_styled6.default)("button")`
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
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function AreYouSureBlock() {
  let { resetStatus } = useSkill();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Inner, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Grid, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: "Are you sure you want to quit?" }, void 0, !1, {
      fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Description, { children: "All progress in this session will be lost." }, void 0, !1, {
      fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { marginRight: "-12px", gridArea: "dismiss" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(StayButton, { onClick: () => resetStatus(), children: "Stay" }, void 0, !1, {
      fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { marginRight: "-12px", gridArea: "quit" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(QuitButton, { to: "/", children: "Quit" }, void 0, !1, {
      fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
    lineNumber: 17,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Skill/components/AreYouSureBlock/AreYouSureBlock.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/modules/Skill/components/AreYouSureBlock/index.tsx
var AreYouSureBlock_default = AreYouSureBlock;

// app/modules/Skill/index.tsx
var import_react21 = require("@remix-run/react"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), SkillContext = (0, import_react20.createContext)(
  defaultSkillContextState
);
SkillContext.displayName = "SkillContext";
function useSkill() {
  let context = (0, import_react20.useContext)(SkillContext);
  if (context === void 0)
    throw new Error("useSkill must be used within a <Lesson />");
  return context;
}
function Skill({
  steps,
  totalXP
}) {
  let resultsFormRef = (0, import_react20.createRef)(), value = useSkillReducer(), submit = (0, import_react21.useSubmit)(), { setup, skillState, continueSkill, resetStatus } = value, { status } = skillState;
  (0, import_react20.useEffect)(() => {
    setup(steps, totalXP);
  }, []);
  let onContinue = () => status === "results" ? submit(resultsFormRef.current, { replace: !0 }) : continueSkill();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(SkillContext.Provider, { value: { ...value, continueSkill: onContinue }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(LessonContainer, { children: status === "results" ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Results, { onSubmit: onContinue, ref: resultsFormRef }, void 0, !1, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Skill/index.tsx",
    lineNumber: 59,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Progress_default, {}, void 0, !1, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(QuestionAnswer_default, {}, void 0, !1, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(InsertWords, {}, void 0, !1, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(VariantsPractice, {}, void 0, !1, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Pairs, {}, void 0, !1, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this),
    status === "leaving" ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        Overlay,
        {
          active: !0,
          onClick: resetStatus,
          style: { top: 0, zIndex: 5, pointerEvents: "auto" }
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Skill/index.tsx",
          lineNumber: 72,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(AreYouSureBlock_default, {}, void 0, !1, {
        fileName: "app/modules/Skill/index.tsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/Skill/index.tsx",
      lineNumber: 71,
      columnNumber: 15
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/modules/Skill/index.tsx",
    lineNumber: 64,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/modules/Skill/index.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Skill/index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/session.server.ts
var import_node = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

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
  let passwordHash = await import_bcryptjs.default.hash(password, 10), user = await prisma.user.create({
    data: {
      username,
      passwordHash,
      streak: 0,
      wasToday: !1,
      weeklyActivity: {
        ...emptyWeek
      }
    }
  });
  return await createInitialLanguage(user.id), user;
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
  let userWithPassword = await prisma.user.findUnique({
    where: { username }
  });
  if (!userWithPassword || !userWithPassword.passwordHash || !await import_bcryptjs.default.compare(password, userWithPassword.passwordHash))
    return null;
  let { passwordHash: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}
async function increaseTodayExp(request, value) {
  let today = getWeekDay(), user = await getUser(request);
  if (!user)
    throw new Error("User is undefined");
  return user.wasToday || (user = await updateUserStreak(user.id, !0, user.streak + 1)), await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: {
        ...user.weeklyActivity,
        [today]: user.weeklyActivity[today] + value
      }
    }
  });
}
async function resetMultipleActivity(request, lastPracticed) {
  let today = getTodayDate(), user = await getUser(request);
  if (!user)
    throw new Error("User is undefined");
  let currentWeek = getCurrentWeek(), newWeek = user.weeklyActivity, i = today - lastPracticed;
  return i > 6 ? await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: {
        ...emptyWeek
      }
    }
  }) : (currentWeek.forEach((day, index) => {
    i > 0 && index === 7 - i && (newWeek[day] = 0, i -= 1);
  }), await prisma.user.update({
    where: { id: user.id },
    data: {
      weeklyActivity: {
        ...newWeek
      }
    }
  }));
}
async function getLastActivity(request) {
  let today = getTodayDate(), lastPracticed = await whenLastPractice(request);
  return today - lastPracticed > 0 ? (await resetMultipleActivity(request, lastPracticed), lastPracticed) : today;
}
async function getTodayTotalXP(request) {
  let today = getWeekDay(), user = await getUser(request);
  if (!user)
    throw new Error("User is undefined");
  let data = await prisma.user.findUnique({
    where: { id: user.id },
    select: {
      weeklyActivity: !0
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
    httpOnly: !0,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId";
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: 60 * 60 * 24 * 7
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return (0, import_node.redirect)("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}

// app/models/language.server.ts
async function createInitialLanguage(userId) {
  return await prisma.language.create({
    data: { userId, active: !0, title: "My First Language" }
  });
}
async function createNewLanguage(request, title) {
  let userId = await getUserId(request);
  return typeof userId != "string" ? null : (await deactiveAllUserLanguages(userId), await prisma.language.create({
    data: { userId, title, active: !0 }
  }));
}
async function deactiveAllUserLanguages(userId) {
  return await prisma.language.updateMany({
    where: {
      userId
    },
    data: {
      active: !1
    }
  });
}
async function setActiveLanguage(id) {
  let language = await prisma.language.findUnique({
    where: { id }
  });
  return language && await deactiveAllUserLanguages(language.userId), await prisma.language.update({
    where: {
      id
    },
    data: {
      active: !0
    }
  }), language;
}
async function getActiveLanguage(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await prisma.language.findFirst({
      where: { userId, active: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function getLanguages(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await prisma.language.findMany({
      where: { userId }
    });
  } catch {
    throw logout(request);
  }
}
async function whenLastPractice(request) {
  let languages = await getLanguages(request), lastUpdatedSkill = await prisma.skill.findFirst({
    where: {
      languageId: { in: languages.map(({ id }) => id) }
    },
    select: { updatedAt: !0 },
    orderBy: { updatedAt: "desc" }
  });
  return lastUpdatedSkill ? lastUpdatedSkill.updatedAt : 0;
}

// app/models/skill.server.ts
async function getSkills(languageId) {
  return await prisma.skill.findMany({
    take: 20,
    where: { languageId },
    select: {
      id: !0,
      title: !0,
      lessonsAmount: !0,
      stepIDs: !0,
      currentLesson: !0,
      lineNumber: !0
    },
    orderBy: { createdAt: "desc" }
  });
}
async function updateCurrentChapter(skill) {
  let { currentLesson, stepIDs, id } = skill, today = getTodayDate();
  return await prisma.skill.update({
    where: {
      id
    },
    data: {
      currentLesson: stepIDs.length !== currentLesson ? currentLesson + 1 : currentLesson,
      updatedAt: today
    }
  });
}
async function checkTitleUnique(languageId, title) {
  return !!(await prisma.skill.findMany({ where: { languageId } })).find((skill) => skill.title === title);
}
async function getLastAddedSkill(languageId) {
  return await prisma.skill.findFirst({
    where: { languageId },
    orderBy: { createdAt: "desc" },
    select: {
      lineNumber: !0,
      currentLesson: !0,
      stepIDs: !0,
      title: !0,
      id: !0
    }
  });
}
async function getLastAddedSkills(languageId) {
  let lastAddedSkill = await prisma.skill.findFirst({
    where: { languageId },
    orderBy: { createdAt: "desc" },
    select: {
      lineNumber: !0
    }
  });
  return await prisma.skill.findMany({
    where: { languageId, lineNumber: lastAddedSkill == null ? void 0 : lastAddedSkill.lineNumber },
    select: {
      lineNumber: !0,
      currentLesson: !0,
      stepIDs: !0,
      title: !0,
      id: !0
    }
  });
}
async function getAmountOfSkillsOnTheLastRow(languageId) {
  let lastAddedSkill = await prisma.skill.findFirst({
    where: { languageId },
    orderBy: { createdAt: "desc" },
    select: {
      lineNumber: !0
    }
  });
  return lastAddedSkill ? { count: await prisma.skill.count({
    where: { languageId, lineNumber: lastAddedSkill.lineNumber }
  }), lastLineNumber: lastAddedSkill.lineNumber } : null;
}
async function deleteSkillById(id) {
  return await prisma.skill.delete({ where: { id } });
}
async function getSkillByTitle(title, languageId) {
  return await prisma.skill.findFirst({ where: { title, languageId } });
}

// app/routes/skill/$title/practice.tsx
var import_react22 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/models/lesson.server.ts
function formatStepAnswer(stepType, answer) {
  switch (stepType) {
    case "Insert":
      return JSON.parse(answer);
    case "Question":
      return answer;
    default:
      return answer;
  }
}
function formatSteps(steps) {
  return steps.map(({ answer, options, ...rest }) => ({
    ...rest,
    difficulty: null,
    answer: formatStepAnswer(rest.stepType, answer),
    options: options ? JSON.parse(options) : {}
  }));
}
async function createSteps(data) {
  let batch = await prisma.step.createMany({ data });
  return (await prisma.step.findMany({
    select: { id: !0 },
    orderBy: { createdAt: "desc" },
    take: batch.count
  })).map((idItem) => idItem.id);
}
async function deleteStepsFromSkill(skillId) {
  let skill = await prisma.skill.findUnique({
    where: { id: skillId },
    select: { stepIDs: !0 }
  });
  if (!skill)
    throw new Error("Skill was not found when deleting steps from it");
  return await prisma.step.deleteMany({
    where: { id: { in: skill.stepIDs } }
  });
}
async function getStepsBySkillId(id) {
  let skill = await prisma.skill.findUnique({ where: { id } });
  return await prisma.step.findMany({
    where: { id: { in: skill.stepIDs } },
    select: {
      answer: !0,
      stepType: !0,
      options: !0,
      id: !0,
      parentLessonId: !0
    }
  });
}
async function getStepsForPracticing(activeLanguageId) {
  let steps = await prisma.step.findMany({
    where: { languageId: activeLanguageId },
    orderBy: { createdAt: "desc" },
    take: 10,
    select: { answer: !0, stepType: !0, options: !0 }
  });
  return formatSteps(steps);
}
async function getStepsForLesson(skillTitle, languageId) {
  let skill = await getSkillByTitle(skillTitle, languageId);
  if (!skill)
    throw new Error("Skill is not found");
  let steps = await prisma.step.findMany({
    where: { id: { in: skill.stepIDs } },
    select: {
      answer: !0,
      stepType: !0,
      options: !0,
      parentLessonId: !0
    }
  }), uniqueLessons = [];
  steps.forEach((step) => {
    uniqueLessons.indexOf(step.parentLessonId) === -1 && uniqueLessons.push(step.parentLessonId);
  });
  let currentLessonId = uniqueLessons[skill.currentLesson], filteredSteps = steps.filter(
    (step) => step.parentLessonId === currentLessonId
  );
  return formatSteps(filteredSteps);
}
async function getStepsForPracticingSkill(skillTitle, languageId) {
  let skill = await getSkillByTitle(skillTitle, languageId);
  if (!skill)
    throw new Error("Skill is not found");
  let steps = await prisma.step.findMany({
    where: { id: { in: skill.stepIDs } },
    select: { answer: !0, stepType: !0, options: !0 }
  });
  return formatSteps(steps);
}

// app/routes/skill/$title/practice.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), action = async ({ request, params }) => {
  let activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage)
    throw new Error("No active language found");
  let form = await request.formData(), expData = Number(form.get("exp")), title = params.title, skill = await getSkillByTitle(title, activeLanguage.id);
  if (!skill)
    throw new Error(`Skill with this title: ${title} is underfined`);
  return await updateCurrentChapter(skill), await increaseTodayExp(request, expData), (0, import_node2.redirect)(`/${activeLanguage == null ? void 0 : activeLanguage.title}/skills`);
}, loader = async ({ request, params }) => {
  let activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage)
    throw new Error("No active language found");
  let title = params.title, skill = await getSkillByTitle(title, activeLanguage.id);
  if (!skill)
    throw new Response("Skill is not found", { status: 404 });
  let steps = await getStepsForPracticingSkill(
    skill.title,
    activeLanguage.id
  ), totalXP = await getTodayTotalXP(request);
  return (0, import_node2.json)({ steps, totalXP });
};
function LessonScreen() {
  let { steps, totalXP } = (0, import_react22.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Skill, { steps, totalXP }, void 0, !1, {
    fileName: "app/routes/skill/$title/practice.tsx",
    lineNumber: 63,
    columnNumber: 10
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react22.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ErrorMessage, { children: caught.statusText }, void 0, !1, {
      fileName: "app/routes/skill/$title/practice.tsx",
      lineNumber: 70,
      columnNumber: 12
    }, this);
}
function ErrorBoundary2() {
  let { title } = (0, import_react22.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "error-container", children: `There was an error loading skill by the title ${title}. Sorry.` }, void 0, !1, {
    fileName: "app/routes/skill/$title/practice.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/routes/skill/$title/$lesson.tsx
var lesson_exports = {};
__export(lesson_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action2,
  default: () => LessonScreen2,
  loader: () => loader2
});
var import_react23 = require("@remix-run/react"), import_node3 = require("@remix-run/node");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ErrorBoundary3() {
  let { title, lesson } = (0, import_react23.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "error-container", children: `There was an error loading skill with the title ${title} and lesson ${lesson}. Sorry.` }, void 0, !1, {
    fileName: "app/routes/skill/$title/$lesson.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var action2 = async ({ request, params }) => {
  let activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage)
    throw new Error("No active language found");
  let form = await request.formData(), expData = Number(form.get("exp")), title = params.title, skill = await getSkillByTitle(title, activeLanguage.id);
  if (!skill)
    throw new Error(`Skill with this title: ${title} is underfined`);
  return await updateCurrentChapter(skill), await increaseTodayExp(request, expData), (0, import_node3.redirect)(`/${activeLanguage.title}/skills`);
}, loader2 = async ({ request, params }) => {
  let activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage)
    throw new Error("No active language is found");
  let title = params.title, steps = await getStepsForLesson(title, activeLanguage.id), totalXP = await getTodayTotalXP(request);
  return (0, import_node3.json)({ steps, totalXP });
};
function LessonScreen2() {
  let { steps, totalXP } = (0, import_react23.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Skill, { steps, totalXP }, void 0, !1, {
    fileName: "app/routes/skill/$title/$lesson.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}

// app/routes/$language.tsx
var language_exports = {};
__export(language_exports, {
  CatchBoundary: () => CatchBoundary2,
  action: () => action3,
  default: () => LanguagePage,
  links: () => links,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react26 = require("@remix-run/react"), import_react27 = require("react");

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
var import_react24 = require("react"), import_react25 = require("@remix-run/react");
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Projects({
  onOverlay,
  languages
}) {
  let [showWindow, setShowWindow] = (0, import_react24.useState)(!1), [isNewLanguage, setIsNewLanguage] = (0, import_react24.useState)(!1), activeLanguage = languages == null ? void 0 : languages.find((item) => item.active);
  function showModal() {
    onOverlay(!0), setShowWindow(!0);
  }
  function hideModal() {
    onOverlay(!1), setShowWindow(!1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      ActiveLanguageButton,
      {
        type: "button",
        onMouseEnter: showModal,
        onMouseLeave: hideModal,
        children: activeLanguage == null ? void 0 : activeLanguage.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/Projects.tsx",
        lineNumber: 38,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      ActiveLanguageContainer,
      {
        onMouseEnter: showModal,
        onMouseLeave: hideModal,
        children: showWindow && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LanguagesContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LanguagesList, { children: languages == null ? void 0 : languages.map((item, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            "li",
            {
              style: {
                backgroundColor: item.active ? "rgb(221, 244, 255)" : "inherit",
                order: item.active ? 0 : 1,
                borderRadius: item.active ? "10px 10px 0 0" : 0
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react25.Form, { method: "post", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("input", { type: "hidden", name: "id", value: item.id, readOnly: !0 }, void 0, !1, {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 65,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LanguagesItem, { type: "submit", children: item.title }, void 0, !1, {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 66,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/Projects.tsx",
                lineNumber: 64,
                columnNumber: 19
              }, this)
            },
            idx,
            !1,
            {
              fileName: "app/components/Projects.tsx",
              lineNumber: 54,
              columnNumber: 17
            },
            this
          )) }, void 0, !1, {
            fileName: "app/components/Projects.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("fieldset", { style: { position: "relative" }, children: isNewLanguage ? /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react25.Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
              LanguagesInput,
              {
                type: "text",
                placeholder: "Enter title",
                name: "newLanguage",
                onChange: showModal,
                autoComplete: "off",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/Projects.tsx",
                lineNumber: 74,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(LanguagesAddBtn, { children: "+" }, void 0, !1, {
              fileName: "app/components/Projects.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Projects.tsx",
            lineNumber: 73,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            LanguagesItem,
            {
              type: "button",
              onClick: () => setIsNewLanguage(!0),
              style: {
                color: "rgb(175, 175, 175)",
                fontSize: 14,
                padding: "13px 20px",
                borderBottom: "none"
              },
              children: "Add a new course"
            },
            void 0,
            !1,
            {
              fileName: "app/components/Projects.tsx",
              lineNumber: 85,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Projects.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Projects.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Projects.tsx",
        lineNumber: 46,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Projects.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/components/Menu.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), MENU = [
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
], Menu = ({
  userData,
  languages,
  onOverlay
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(MenuContainer, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("nav", { style: { width: "35%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(HorizontalList, { children: MENU.map(({ title, icon, activeIcon, link }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ListItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    MenuNavLink,
    {
      to: `${link}`,
      className: "nav-link",
      children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(NavIcon, { src: isActive ? activeIcon : icon, alt: title }, void 0, !1, {
          fileName: "app/components/Menu.tsx",
          lineNumber: 57,
          columnNumber: 21
        }, this),
        title
      ] }, void 0, !0, {
        fileName: "app/components/Menu.tsx",
        lineNumber: 56,
        columnNumber: 19
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Menu.tsx",
      lineNumber: 50,
      columnNumber: 15
    },
    this
  ) }, title, !1, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 49,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(HorizontalList, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ListItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Projects, { languages, onOverlay }, void 0, !1, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ListItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "img",
        {
          src: userData.wasToday ? streak_active_default : streak_default,
          alt: "streak",
          width: 25,
          height: 30,
          style: { marginRight: 6 }
        },
        void 0,
        !1,
        {
          fileName: "app/components/Menu.tsx",
          lineNumber: 71,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        "b",
        {
          style: {
            fontFamily: "Nunito",
            color: userData.wasToday ? "#ff9600" : "#e5e5e5"
          },
          children: userData.streak
        },
        void 0,
        !1,
        {
          fileName: "app/components/Menu.tsx",
          lineNumber: 78,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(ListItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Logout, { type: "submit", children: "Logout" }, void 0, !1, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 89,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Menu.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Menu.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Menu.tsx",
  lineNumber: 45,
  columnNumber: 5
}, this), Menu_default = Menu;

// app/styles/index.css
var styles_default = "/build/_assets/index-L6KCTCVG.css";

// app/routes/$language.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }];
async function action3({ request }) {
  let form = await request.formData(), id = form.get("id"), newLanguage = form.get("newLanguage"), project;
  return (newLanguage == null ? void 0 : newLanguage.length) > 0 ? project = await createNewLanguage(request, newLanguage) : project = await setActiveLanguage(id), (0, import_node4.redirect)(`/${project == null ? void 0 : project.title}/skills`);
}
var loader3 = async ({ request }) => {
  let user = await getUser(request);
  if (!user)
    return (0, import_node4.redirect)("/login");
  let userData = { streak: user.streak, wasToday: user.wasToday }, languages = await getLanguages(request);
  if (!languages)
    throw new import_node4.Response("No languages were found", { status: 404 });
  let activeLanguage = languages.find((item) => item.active), today = getTodayDate();
  if (!activeLanguage)
    throw new import_node4.Response("Active language wasn't found", { status: 404 });
  if (request.url.split("/").at(-1) === activeLanguage.title)
    return (0, import_node4.redirect)(`/${activeLanguage.title}/skills`);
  let lastActive = await getLastActivity(request);
  return today - lastActive > 1 || lastActive === 0 ? (user = await updateUserStreak(user.id, !1, 0), (0, import_node4.json)({ userData, languages })) : today - lastActive === 1 ? (user = await updateUserStreak(user.id, !1, user.streak), (0, import_node4.json)({ userData, languages })) : !user.wasToday && lastActive === today ? (user = await updateUserStreak(user.id, !0, user.streak + 1), (0, import_node4.json)({ userData, languages })) : user.wasToday ? (0, import_node4.json)({ userData, languages }) : (0, import_node4.json)({ userData, languages });
};
function LanguagePage() {
  let { userData, languages } = (0, import_react26.useLoaderData)(), [isOverlay, setIsOverlay] = (0, import_react27.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_jsx_dev_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      Menu_default,
      {
        userData,
        languages,
        onOverlay: setIsOverlay
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$language.tsx",
        lineNumber: 90,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Main, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react26.Outlet, {}, void 0, !1, {
      fileName: "app/routes/$language.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$language.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Overlay, { active: isOverlay }, void 0, !1, {
      fileName: "app/routes/$language.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$language.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  let caught = (0, import_react26.useCatch)();
  return caught.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ErrorMessage, { children: caught.statusText }, void 0, !1, {
    fileName: "app/routes/$language.tsx",
    lineNumber: 107,
    columnNumber: 12
  }, this) : new Error("Something went wrong in language route");
}

// app/routes/$language/constructor/$skillId.tsx
var skillId_exports = {};
__export(skillId_exports, {
  action: () => action4,
  default: () => ConstructorEdit,
  loader: () => loader4
});
var import_react39 = require("@remix-run/react"), import_node5 = require("@remix-run/node");

// app/modules/Constructor/index.tsx
var import_react37 = require("react");

// app/modules/Constructor/components/SkillInfo.tsx
var import_react28 = require("react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function SkillInfo({
  isEditingSkill,
  actionData
}) {
  var _a;
  let { setBasicInfoReady, currentScreen, skillTitle, setSkillTitle } = useConstructor();
  return (0, import_react28.useEffect)(() => {
    setBasicInfoReady(Boolean(skillTitle.length));
  }, [skillTitle]), /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ScreenContainer, { screen: currentScreen, target: "Skill", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(Legend, { children: "Skill info" }, void 0, !1, {
      fileName: "app/modules/Constructor/components/SkillInfo.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(LessonProgress, { exp: 0, style: { margin: "40px auto 0 auto" } }, void 0, !1, {
      fileName: "app/modules/Constructor/components/SkillInfo.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
      LessonTitleInput,
      {
        type: "text",
        name: "title",
        placeholder: "Enter skill title",
        value: skillTitle,
        onChange: (e) => setSkillTitle(e.target.value),
        required: !0,
        autoFocus: !isEditingSkill && !0
      },
      void 0,
      !1,
      {
        fileName: "app/modules/Constructor/components/SkillInfo.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ErrorMessage, { role: "alert", id: "title-error", children: actionData.errors.title }, void 0, !1, {
      fileName: "app/modules/Constructor/components/SkillInfo.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/components/SkillInfo.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/modules/Constructor/Levels/reducer.ts
var import_nanoid = require("nanoid"), import_react29 = require("react"), getBasicState = () => {
  let lessonId = (0, import_nanoid.nanoid)(), step = createStep(lessonId);
  return {
    lessons: [{ id: lessonId }],
    currentScreen: "Skill",
    steps: [step],
    basicInfoReady: !1,
    stepsReady: !1,
    activeStepId: step.id,
    activeLessonId: lessonId,
    skillTitle: "",
    skillLineNumber: 0
  };
}, createStep = (parentLessonId) => ({
  id: (0, import_nanoid.nanoid)(),
  answer: "",
  stepType: "",
  ready: !1,
  parentLessonId,
  options: {}
});
var basicState2 = getBasicState();
function constructorReducer(state, action10) {
  let { steps, lessons, activeStepId, activeLessonId } = state, { type } = action10;
  switch (type) {
    case "SETUP" /* setup */: {
      let { steps: steps2, title } = action10.data, firstStep = steps2[0], uniqueLessons = [];
      return steps2.forEach((step) => {
        Boolean(
          uniqueLessons.find((lesson) => lesson.id === step.parentLessonId)
        ) || uniqueLessons.push({ id: step.parentLessonId });
      }), {
        ...state,
        steps: steps2,
        activeLessonId: firstStep.parentLessonId,
        activeStepId: firstStep.id,
        lessons: uniqueLessons,
        skillTitle: title
      };
    }
    case "SET_STEP_TYPE" /* setStepType */: {
      let { stepType, id } = action10.payload, options = {};
      switch (stepType) {
        case "Question": {
          options = { question: "", keywords: [] };
          break;
        }
        case "Variants": {
          options = { question: "", variants: [] };
          break;
        }
      }
      let newSteps = steps.map(
        (step) => step.id === id ? { ...step, stepType, options } : { ...step }
      );
      return console.log({ newSteps }), { ...state, steps: [...newSteps] };
    }
    case "REMOVE_STEP_TYPE" /* removeStepType */: {
      let { id } = action10, newSteps = steps.map((step) => step.id === id ? {
        ...step,
        stepType: "",
        options: {},
        answer: "",
        ready: !1
      } : { ...step });
      return { ...state, steps: [...newSteps] };
    }
    case "SET_STEP_READY" /* setStepReady */: {
      let { isReady, stepId } = action10.payload, newSteps = steps.map((step) => step.id === stepId ? { ...step, ready: isReady } : { ...step });
      return {
        ...state,
        steps: [...newSteps]
      };
    }
    case "SET_STEP_ACTIVE" /* setStepActive */:
      return { ...state, activeStepId: action10.id };
    case "SET_QUESTION" /* setQuestion */: {
      let { question, number } = action10.payload, newSteps = steps;
      return newSteps[number].options.question = question, { ...state, steps: [...newSteps] };
    }
    case "SET_ANSWER" /* setAnswer */: {
      let { answer, stepId } = action10.payload, newSteps = steps.map((step) => step.id === stepId ? {
        ...step,
        answer
      } : { ...step });
      return { ...state, steps: [...newSteps] };
    }
    case "SET_KEYWORDS" /* setKeywords */: {
      let { keywords, number } = action10.payload, newSteps = steps;
      return newSteps[number].options.keywords = keywords, { ...state, steps: [...newSteps] };
    }
    case "ADD_STEP" /* addStep */: {
      let newStep = createStep(activeLessonId);
      return {
        ...state,
        steps: [...steps, newStep],
        activeStepId: newStep.id
      };
    }
    case "REMOVE_STEP" /* removeStep */: {
      let newSteps = steps, removeIdx = newSteps.indexOf(
        newSteps.find((step) => step.id === activeStepId)
      );
      newSteps.splice(removeIdx, 1);
      let lastStep = newSteps.at(-1);
      return {
        ...state,
        steps: [...newSteps],
        activeStepId: lastStep.id
      };
    }
    case "ADD_LESSON" /* addLesson */: {
      let lessonId = (0, import_nanoid.nanoid)(), newLesson = {
        id: lessonId
      }, newStep = createStep(lessonId), newSteps = steps.map((step) => ({ ...step }));
      return {
        ...state,
        lessons: [...lessons, newLesson],
        steps: [...newSteps, newStep],
        activeLessonId: lessonId,
        activeStepId: newStep.id
      };
    }
    case "CHANGE_CURRENT_SCREEN" /* changeCurrentScreen */: {
      let { currentScreen } = action10;
      return { ...state, currentScreen };
    }
    case "SET_LESSON_ACTIVE" /* setLessonActive */: {
      let { id } = action10, firstLessonStep = steps.find(
        (step) => step.parentLessonId === id
      );
      return {
        ...state,
        activeLessonId: id,
        activeStepId: firstLessonStep.id
      };
    }
    case "SET_BASIC_INFO_READY" /* setBasicInfoReady */: {
      let { isReady } = action10;
      return { ...state, basicInfoReady: isReady };
    }
    case "SET_STEPS_READY" /* setStepsReady */: {
      let { isReady } = action10;
      return { ...state, stepsReady: isReady };
    }
    case "SET_SKILL_TITLE" /* setSkillTitle */:
      return { ...state, skillTitle: action10.title };
    case "SET_SKILL_LINE_NUMBER" /* setSkillLineNumber */:
      return { ...state, skillLineNumber: action10.lineNumber };
    case "SET_STEP_OPTIONS" /* setStepOptions */: {
      let newSteps = steps.map((step) => step.id === activeStepId ? { ...step, options: action10.options } : { ...step });
      return { ...state, steps: [...newSteps] };
    }
    default:
      throw new Error(`We don't know this action type: ${type}`);
  }
}
function useConstructorReducer({
  initialState: initialState3 = basicState2,
  reducer: reducer2 = constructorReducer
} = {}) {
  let [state, dispatch] = (0, import_react29.useReducer)(reducer2, initialState3);
  return {
    ...state,
    setStepType: (stepType, id) => dispatch({ type: "SET_STEP_TYPE" /* setStepType */, payload: { stepType, id } }),
    setup: (data) => dispatch({ type: "SETUP" /* setup */, data }),
    removeStep: () => dispatch({ type: "REMOVE_STEP" /* removeStep */ }),
    removeStepType: (id) => dispatch({ type: "REMOVE_STEP_TYPE" /* removeStepType */, id }),
    setStepActive: (id) => dispatch({ type: "SET_STEP_ACTIVE" /* setStepActive */, id }),
    setQuestion: (question, number) => dispatch({ type: "SET_QUESTION" /* setQuestion */, payload: { question, number } }),
    setAnswer: (answer, stepId) => dispatch({ type: "SET_ANSWER" /* setAnswer */, payload: { answer, stepId } }),
    setKeywords: (keywords, number) => dispatch({ type: "SET_KEYWORDS" /* setKeywords */, payload: { keywords, number } }),
    addLesson: () => dispatch({ type: "ADD_LESSON" /* addLesson */ }),
    addStep: () => dispatch({ type: "ADD_STEP" /* addStep */ }),
    setStepReady: (isReady, stepId) => dispatch({ type: "SET_STEP_READY" /* setStepReady */, payload: { isReady, stepId } }),
    changeCurrentScreen: (currentScreen) => dispatch({ type: "CHANGE_CURRENT_SCREEN" /* changeCurrentScreen */, currentScreen }),
    setBasicInfoReady: (isReady) => dispatch({ type: "SET_BASIC_INFO_READY" /* setBasicInfoReady */, isReady }),
    setStepsReady: (isReady) => dispatch({ type: "SET_STEPS_READY" /* setStepsReady */, isReady }),
    setLessonActive: (id) => dispatch({ type: "SET_LESSON_ACTIVE" /* setLessonActive */, id }),
    setSkillTitle: (title) => dispatch({ type: "SET_SKILL_TITLE" /* setSkillTitle */, title }),
    setSkillLineNumber: (lineNumber) => dispatch({ type: "SET_SKILL_LINE_NUMBER" /* setSkillLineNumber */, lineNumber }),
    setStepOptions: (options) => dispatch({ type: "SET_STEP_OPTIONS" /* setStepOptions */, options })
  };
}
var initialContext = {
  ...basicState2,
  setStepType: (stepType, id) => {
  },
  setup: (data) => {
  },
  removeStep: () => {
  },
  removeStepType: (id) => {
  },
  setStepActive: (id) => {
  },
  setQuestion: (question, number) => {
  },
  setAnswer: (answer, stepId) => {
  },
  setKeywords: (keywords, number) => {
  },
  addLesson: () => {
  },
  addStep: () => {
  },
  setStepReady: (isReady, stepId) => {
  },
  changeCurrentScreen: (currentScreen) => {
  },
  setBasicInfoReady: (isReady) => {
  },
  setStepsReady: (isReady) => {
  },
  setLessonActive: (id) => {
  },
  setSkillTitle: (title) => {
  },
  setSkillLineNumber: (lineNumber) => {
  },
  setStepOptions: (options) => {
  }
};

// app/modules/Constructor/Levels/index.tsx
var import_react35 = require("react");

// app/modules/Constructor/Levels/components/Variants/Variants.tsx
var import_react30 = require("react");

// app/modules/Constructor/Levels/components/MatchingPairs/reducer.ts
var reducer = (state, action10) => {
  let { variants, pairs } = state;
  switch (action10.type) {
    case "SETUP": {
      let { variantsCount, variants: variants2, pairs: pairs2 } = action10.payload, newVariants = [];
      if (variants2.length)
        return { ...state, variants: [...variants2], pairs: pairs2 };
      for (let i = 1; i <= variantsCount; i++)
        newVariants.push({
          type: i - 1 < variantsCount / 2 ? "left" : "right",
          value: "",
          isFocused: !1,
          idx: i,
          isConnected: !1
        });
      return { ...state, variants: newVariants };
    }
    case "VARIANTS_SETUP": {
      let { variantsCount } = action10.payload, variants2 = [];
      for (let i = 1; i <= variantsCount; i++)
        variants2.push({
          value: "",
          isFocused: !1,
          isConnected: !1,
          type: null,
          idx: i
        });
      return { ...state, variants: variants2 };
    }
    case "VARIANT_SET_VALUE": {
      let { idx, value } = action10.payload, newVariants = variants;
      return newVariants[idx].value = value, { ...state, variants: [...newVariants] };
    }
    case "TYPE": {
      let { value, idx } = action10.payload, newVariants = variants;
      return newVariants[newVariants.indexOf(
        newVariants.find(
          (variant) => variant.idx === Number(idx)
        )
      )].value = value, { ...state, variants: [...newVariants] };
    }
    case "CHOOSE": {
      let { idx } = action10.payload, variantItem = variants.find(
        (variant) => variant.idx === Number(idx)
      );
      if ((variantItem == null ? void 0 : variantItem.type) === "left") {
        let newVariants2 = variants.map((variant) => ({
          ...variant,
          isFocused: variant.idx === Number(idx)
        }));
        return { ...state, variants: newVariants2 };
      }
      let newVariants = variants.map((variant) => ({
        ...variant,
        isFocused: variant.idx === Number(idx)
      }));
      return { ...state, variants: newVariants };
    }
    case "VARIANT_CHOOSE": {
      let { idx } = action10.payload, newVariants = variants.map((variant) => ({
        ...variant,
        isFocused: !1
      }));
      return newVariants[idx].isFocused = !0, { ...state, variants: [...newVariants] };
    }
    case "CONNECT": {
      let { activeIdx, idx } = action10.payload, newPairs = pairs, exists = newPairs.find(
        (item) => item.includes(`${activeIdx}`) || item.includes(`${idx}`)
      );
      return exists ? newPairs[newPairs.indexOf(exists)] = `${activeIdx}${idx}` : newPairs.push(`${activeIdx}${idx}`), {
        ...state,
        variants: variants.map((variant) => ({
          ...variant,
          isFocused: !1,
          isConnected: !!newPairs.filter(
            (pair) => pair.includes(`${variant.idx}`)
          ).length
        })),
        pairs: newPairs
      };
    }
    case "ADD_PAIR": {
      let newVariants = variants;
      return newVariants.push({
        value: "",
        isFocused: !1,
        idx: newVariants.length + 1,
        isConnected: !1,
        type: null
      }), newVariants.push({
        value: "",
        isFocused: !1,
        idx: newVariants.length + 1,
        isConnected: !1,
        type: null
      }), { ...state, variants: [...newVariants] };
    }
    default:
      throw new Error("Omg we don't know this action type");
  }
};

// app/modules/Constructor/Levels/components/MatchingPairs/actions.ts
var variantsSetup = (variantsCount) => ({
  type: "VARIANTS_SETUP",
  payload: { variantsCount }
}), variantSetValue = (idx, value) => ({
  type: "VARIANT_SET_VALUE",
  payload: { idx, value }
});
var variantChoose = (idx) => ({
  type: "VARIANT_CHOOSE",
  payload: { idx }
});

// app/modules/Constructor/Levels/components/Variants/Variants.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime"), initialState = {
  variantsCount: 3,
  question: "",
  variants: [],
  id: "",
  answer: "",
  stepType: "",
  options: {
    variants: [],
    question: ""
  }
};
function Variants2({ state = initialState }) {
  let { id, answer, stepType, variantsCount = 3, options } = state, { question, variants: initialVariants } = options, { setStepReady, setAnswer, setStepOptions } = useConstructor(), [{ variants }, dispatch] = (0, import_react30.useReducer)(reducer, {
    variants: initialVariants,
    pairs: []
  });
  (0, import_react30.useEffect)(() => {
    variants.length === 0 && dispatch(variantsSetup(variantsCount));
  }, [variantsCount]), (0, import_react30.useEffect)(() => {
    if (variants.filter((variant) => variant.value.length === 0).length)
      return setStepReady(!1, id);
    if (variants.find(
      (variant) => variant.isFocused || variant.value === answer[0]
    ))
      setStepReady(!0, id), setVariants(variants);
    else
      return setStepReady(!1, id);
    question.length ? (setStepReady(!0, id), setVariants(variants)) : setStepReady(!1, id);
  }, [variants, question]);
  function setQuestion(question2) {
    return setStepOptions({ ...options, question: question2 });
  }
  function setVariants(variants2) {
    return setStepOptions({ ...options, variants: variants2 });
  }
  return stepType === "Variants" ? /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(import_jsx_dev_runtime26.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("fieldset", { style: { padding: "0 25%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(LessonTitle2, { children: "Choose right variant" }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { style: { marginTop: 30 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        Textarea,
        {
          placeholder: "Type question",
          style: { minHeight: 100, marginBottom: 20 },
          value: question === null ? "" : question,
          onChange: (e) => setQuestion(e.target.value),
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(VariantsList, { children: variants.map((variant, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
        VariantsItem,
        {
          style: { marginBottom: 5, width: "100%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("label", { style: { position: "relative" }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              VariantItemNumber,
              {
                onClick: (e) => {
                  e.preventDefault(), dispatch(variantChoose(index)), setAnswer(variant.value, id);
                },
                isFocused: variant.isFocused || variant.value === answer[0],
                children: variant.idx
              },
              void 0,
              !1,
              {
                fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
                lineNumber: 110,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
              VariantItemInput,
              {
                type: "text",
                placeholder: "Type variant",
                value: variant.value,
                onChange: (e) => {
                  dispatch(variantSetValue(index, e.target.value)), variant.isFocused && setAnswer(e.target.value, id);
                },
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
                lineNumber: 120,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
            lineNumber: 109,
            columnNumber: 17
          }, this)
        },
        variant.idx,
        !1,
        {
          fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
          lineNumber: 105,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
    lineNumber: 91,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Constructor/Levels/components/Variants/Variants.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this) : null;
}

// app/modules/Constructor/Levels/components/Variants/index.tsx
var Variants_default = Variants2;

// app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx
var import_react32 = require("react");

// app/modules/Constructor/Levels/components/InsertWords/lib.tsx
var import_styled7 = __toESM(require("@emotion/styled")), WordsList = (0, import_styled7.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: none;
  align-items: center;
  margin-bottom: 30px;
`, WordsItem = (0, import_styled7.default)("li")`
  margin-left: 3px;
  margin-bottom: 3px;
  padding: 3px 6px;
  border: 1px solid #fff;
  border-color: ${(props) => props.isActive ? "#1cb0f6" : "#fff"};
  border-radius: 15px;
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover {
    border-color: #1cb0f6;
  }
`;

// app/modules/Constructor/Levels/components/InsertWords/Settings.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function getWordsOutOfText(text) {
  return text.split(" ").map(
    (word) => cleanWordFromSigns(word).newWord
  );
}
function Settings({
  isEditingText,
  setEditingText,
  setIndexes,
  indexes,
  text
}) {
  let words = text ? getWordsOutOfText(text) : [];
  function handleOnWordClick(wordIndex) {
    setIndexes((prevIndexes) => {
      if (wordIndex === 0) {
        let wasRemoved = !1;
        return prevIndexes.forEach((prevIndex, ix) => {
          prevIndex === 0 && (wasRemoved = !0, prevIndexes.splice(ix, 1));
        }), wasRemoved ? [...prevIndexes] : [...prevIndexes, wordIndex];
      }
      return isItemInArray(prevIndexes, wordIndex) ? (prevIndexes.splice(prevIndexes.indexOf(wordIndex), 1), [...prevIndexes]) : [...prevIndexes, wordIndex];
    }), setEditingText(!1);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SettingsContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(WordsList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("b", { style: { display: "block", padding: "4px 0", marginBottom: 3 }, children: [
        "Choose words to be hidden:",
        " "
      ] }, void 0, !0, {
        fileName: "app/modules/Constructor/Levels/components/InsertWords/Settings.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/modules/Constructor/Levels/components/InsertWords/Settings.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      words.map((word, wordIndex) => {
        var _a;
        let isActive = !!((_a = indexes.find((index) => index === wordIndex)) != null && _a.toString());
        return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          WordsItem,
          {
            isActive,
            onClick: () => handleOnWordClick(wordIndex),
            children: word
          },
          wordIndex,
          !1,
          {
            fileName: "app/modules/Constructor/Levels/components/InsertWords/Settings.tsx",
            lineNumber: 79,
            columnNumber: 13
          },
          this
        );
      })
    ] }, void 0, !0, {
      fileName: "app/modules/Constructor/Levels/components/InsertWords/Settings.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: { display: "flex", alignItems: "end", marginTop: "auto" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      Button,
      {
        type: "button",
        onClick: () => setEditingText(!0),
        disabled: isEditingText,
        children: "Edit text"
      },
      void 0,
      !1,
      {
        fileName: "app/modules/Constructor/Levels/components/InsertWords/Settings.tsx",
        lineNumber: 91,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/InsertWords/Settings.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/InsertWords/Settings.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

// app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx
var import_react31 = require("react");
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function ChooseMissingWords({ words }) {
  let [variants, setVariants] = (0, import_react31.useState)(
    () => words.length ? [...words] : [""]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    "ul",
    {
      style: {
        listStyleType: "none",
        padding: 0,
        margin: "30px 0",
        display: words.length > 1 ? "flex" : "block",
        flexWrap: "wrap"
      },
      children: words.length === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          VariantItem,
          {
            type: "button",
            isFocused: !1,
            onClick: () => setVariants((prevVars) => [...prevVars, ""]),
            children: "Add variant"
          },
          void 0,
          !1,
          {
            fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
            lineNumber: 24,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this),
        variants.map((variant, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          VariantItemInput,
          {
            type: "text",
            placeholder: "type variant",
            defaultValue: variant,
            required: !0
          },
          `insertwordvariant${idx}`,
          !1,
          {
            fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
            lineNumber: 33,
            columnNumber: 15
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this) : words.map((word, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
        "li",
        {
          style: { position: "relative", marginBottom: 8, marginRight: 16 },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(VariantItem, { type: "button", isFocused: !1, children: word }, void 0, !1, {
            fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        },
        idx,
        !1,
        {
          fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
          lineNumber: 45,
          columnNumber: 13
        },
        this
      ))
    },
    void 0,
    !1,
    {
      fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
      lineNumber: 12,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/modules/Constructor/Levels/components/InsertWords/ChooseMissingWords.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function InsertWords2() {
  let { steps, activeStepId } = useConstructor(), activeStep = steps.find((step) => step.id === activeStepId), { answer, id, stepType, options } = activeStep, defaultIndexes = answer ? JSON.parse(answer) : [], { setStepReady, setAnswer, setStepOptions } = useConstructor(), [isEditingText, setEditingText] = (0, import_react32.useState)(!0), [isChooseVariants, setChooseVariants] = (0, import_react32.useState)(!1), [indexes, setIndexes] = (0, import_react32.useState)(
    defaultIndexes.map((item) => Number(item))
  ), ref = useFocus();
  (0, import_react32.useEffect)(() => {
    setAnswer(JSON.stringify(indexes), id), setStepReady(!!indexes.length, id);
  }, [indexes.length]), (0, import_react32.useEffect)(() => {
    options.text && setEditingText(!1), setIndexes((prevIndexes) => prevIndexes.map((prevIndex) => Number(prevIndex)));
  }, []);
  let words = options.text ? options.text.split(" ") : answer.split(" "), filteredWords = words.filter((word, idx) => {
    if (indexes.find((index) => Number(index) === idx))
      return word;
  });
  return stepType === "Insert" ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react32.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(StepContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("fieldset", { style: { padding: "0 25%" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(LessonTitle2, { children: "Add missing words" }, void 0, !1, {
        fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { style: { marginTop: 30 }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          Textarea,
          {
            placeholder: "Type text and choose words which should be hidden",
            value: options.text,
            onChange: (evt) => setStepOptions({ text: evt.target.value }),
            ref,
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
            lineNumber: 59,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          InsertWordsTextBlock,
          {
            isEditingText,
            style: { marginTop: -176 },
            children: [
              words.map((item, idx) => {
                let { newWord, sign } = cleanWordFromSigns(item);
                return isItemInArray(indexes, idx) ? sign ? /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react32.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(InsertWordsInput, { type: "text", length: newWord.length }, void 0, !1, {
                    fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
                    lineNumber: 85,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { style: { marginRight: 7 }, children: sign }, void 0, !1, {
                    fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
                    lineNumber: 86,
                    columnNumber: 23
                  }, this)
                ] }, idx, !0, {
                  fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
                  lineNumber: 84,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                  InsertWordsInput,
                  {
                    type: "text",
                    length: newWord.length
                  },
                  idx,
                  !1,
                  {
                    fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
                    lineNumber: 92,
                    columnNumber: 19
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { style: { marginRight: 7 }, children: item }, idx, !1, {
                  fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
                  lineNumber: 76,
                  columnNumber: 21
                }, this);
              }),
              isChooseVariants && !isEditingText && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(ChooseMissingWords, { words: filteredWords }, void 0, !1, {
                fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
                lineNumber: 101,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
            lineNumber: 67,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      Settings,
      {
        text: options.text,
        answer,
        indexes,
        setIndexes,
        isEditingText,
        setChooseVariants,
        setEditingText,
        isChooseVariants
      },
      void 0,
      !1,
      {
        fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
        lineNumber: 108,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/InsertWords/InsertWords.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this) : null;
}

// app/modules/Constructor/Levels/components/InsertWords/index.tsx
var InsertWords_default = InsertWords2;

// app/modules/Constructor/Levels/components/Step.tsx
var import_react33 = __toESM(require("react"));

// app/constants.ts
var STEP_TYPES = ["Question", "Insert", "Variants"];

// app/modules/Constructor/components/CloseBtn.tsx
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function CloseBtn({
  onClickHandler
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(BtnClose, { type: "button", onClick: onClickHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(BtnCloseImage, { src: close_default, alt: "Close" }, void 0, !1, {
    fileName: "app/modules/Constructor/components/CloseBtn.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Constructor/components/CloseBtn.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/modules/Constructor/Levels/components/Step.tsx
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), Step = ({ data, index, children }) => {
  let { stepType, id } = data, { activeStepId, removeStepType, setStepType } = useConstructor();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(StepContainer, { className: `${activeStepId !== id && "visuallyHidden"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(Legend, { children: stepType || "Choose type" }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Step.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(StepHeader, { children: stepType !== "" && /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(CloseBtn, { onClickHandler: () => removeStepType(id) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Step.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Step.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    stepType === "" ? /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(StepContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(ChooseStyle, { children: STEP_TYPES.map((type, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(
      StyleButton,
      {
        type: "button",
        onClick: () => setStepType(type, id),
        children: type
      },
      idx,
      !1,
      {
        fileName: "app/modules/Constructor/Levels/components/Step.tsx",
        lineNumber: 34,
        columnNumber: 15
      },
      this
    )) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Step.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Step.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react33.Fragment, { children: import_react33.default.Children.map(children, (child) => {
      if (child !== null)
        return import_react33.default.cloneElement(child, {
          state: data
        });
    }) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/Step.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/Step.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}, Step_default = Step;

// app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx
var import_react34 = require("react");

// app/modules/Constructor/Levels/components/QuestionAnswer/lib.tsx
var import_styled8 = __toESM(require("@emotion/styled")), WordsList2 = (0, import_styled8.default)("ul")`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: none;
  align-items: center;
  margin-bottom: 30px;
`, WordsItem2 = (0, import_styled8.default)("li")`
  margin-left: 3px;
  margin-bottom: 3px;
  padding: 3px 6px;
  border: 1px solid #fff;
  border-color: ${(props) => props.isActive ? "#1cb0f6" : "#fff"};
  border-radius: 15px;
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover {
    border-color: #1cb0f6;
  }
`;

// app/modules/Constructor/Levels/components/QuestionAnswer/Settings.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Settings2({
  options,
  answer
}) {
  let { setStepOptions } = useConstructor(), { keywords } = options;
  function setKeywords(keywords2) {
    setStepOptions({ ...options, keywords: keywords2 });
  }
  function onWordHandler(word) {
    let newKeywords = keywords;
    return isItemInArray(keywords, word) ? (newKeywords.splice(newKeywords.indexOf(word), 1), setKeywords(newKeywords)) : setKeywords([...newKeywords, word]);
  }
  let isEditing = Boolean(Array.isArray(answer));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(SettingsContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(WordsList2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("b", { style: { display: "block", padding: "4px 0", marginBottom: 3 }, children: "Choose words to be enough for answer:" }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/Settings.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/Settings.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    !isEditing && answer.split(" ").map((answerItem, idx) => {
      if (answerItem.includes(",") && (answerItem = answerItem.slice(0, -1)), !!answerItem.length)
        return console.log({ keywords, answerItem }), /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          WordsItem2,
          {
            onClick: () => onWordHandler(answerItem),
            isActive: isItemInArray(keywords, answerItem),
            children: answerItem
          },
          idx,
          !1,
          {
            fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/Settings.tsx",
            lineNumber: 52,
            columnNumber: 15
          },
          this
        );
    })
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/Settings.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/Settings.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), initialState2 = {
  answer: "",
  id: "",
  stepType: "",
  options: {
    question: "",
    keywords: []
  }
};
function QuestionAnswer2({ state = initialState2 }) {
  let { options, answer, id, stepType } = state, { question } = options, { setStepReady, setStepOptions, setAnswer } = useConstructor();
  (0, import_react34.useEffect)(() => setStepReady(!!(question && answer), id), [question, answer]);
  function setQuestion(event) {
    setStepOptions({ ...options, question: event.target.value });
  }
  return stepType === "Question" ? /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_jsx_dev_runtime33.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(StepContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("fieldset", { style: { padding: "0 25%" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(LessonTitle2, { children: "Answer the question" }, void 0, !1, {
        fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        "div",
        {
          style: { display: "flex", alignItems: "center", margin: "30px 0" },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              "img",
              {
                src: duo_default,
                alt: "Duo",
                height: 150,
                style: { marginBottom: -50 }
              },
              void 0,
              !1,
              {
                fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
                lineNumber: 54,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { style: { position: "relative" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(LessonQuestion, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
                Textarea,
                {
                  placeholder: "Set question",
                  style: {
                    border: "none",
                    backgroundColor: "inherit",
                    width: "100%",
                    padding: 0,
                    minHeight: 0,
                    letterSpacing: 0
                  },
                  value: question === null ? "" : question,
                  onChange: setQuestion,
                  autoFocus: !0,
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
                  lineNumber: 62,
                  columnNumber: 17
                },
                this
              ) }, void 0, !1, {
                fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
                lineNumber: 61,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(LessonQuestionTriangleContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(LessonQuestionTriangle, {}, void 0, !1, {
                fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this) }, void 0, !1, {
                fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
                lineNumber: 78,
                columnNumber: 15
              }, this)
            ] }, void 0, !0, {
              fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
              lineNumber: 60,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
        Textarea,
        {
          placeholder: "Type answer",
          value: answer,
          onChange: (evt) => setAnswer(evt.target.value, id),
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
          lineNumber: 84,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Settings2, { answer, options }, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/QuestionAnswer/QuestionAnswer.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this) : null;
}

// app/modules/Constructor/Levels/components/QuestionAnswer/index.tsx
var QuestionAnswer_default2 = QuestionAnswer2;

// app/modules/Constructor/Levels/index.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function Levels() {
  let { steps, setStepsReady, currentScreen, activeStepId } = useConstructor();
  return (0, import_react35.useEffect)(() => {
    setStepsReady(!steps.find((step) => step.ready === !1));
  }, [steps]), /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(ScreenContainer, { screen: currentScreen, target: "Steps", children: steps.map((data, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Step_default, { data, index: idx, children: [
    data.stepType === "Question" && data.id === activeStepId ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(QuestionAnswer_default2, {}, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/index.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) : null,
    data.stepType === "Insert" && data.id === activeStepId ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(InsertWords_default, {}, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/index.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this) : null,
    data.stepType === "Variants" && data.id === activeStepId ? /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Variants_default, {}, void 0, !1, {
      fileName: "app/modules/Constructor/Levels/index.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this) : null
  ] }, data.id, !0, {
    fileName: "app/modules/Constructor/Levels/index.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/modules/Constructor/Levels/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/modules/Constructor/Levels/components/Sidebar.tsx
var import_react36 = require("@remix-run/react");
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), Sidebar = () => {
  let {
    steps,
    currentScreen,
    lessons,
    stepsReady,
    basicInfoReady,
    activeLessonId,
    activeStepId,
    changeCurrentScreen,
    setStepActive,
    setLessonActive,
    removeStep,
    addLesson,
    addStep
  } = useConstructor(), submitText = (0, import_react36.useFetcher)().state === "submitting" ? "Saving" : "Save", isSubmitActive = stepsReady === !0 && basicInfoReady === !0, isSubmitDisabled = stepsReady === !1 || basicInfoReady === !1 || submitText !== "Save", lessonSteps = steps.filter(
    (step) => step.parentLessonId === activeLessonId
  );
  return console.log("Initial render: ", { setLessonActive, setStepActive }), /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ConstructorSidebar, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(SidebarList, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        SidebarBtn,
        {
          type: "button",
          onClick: () => {
            changeCurrentScreen("Skill");
          },
          isActive: currentScreen === "Skill",
          children: "Skill Info"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
          lineNumber: 41,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      lessons.map((lesson, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        SidebarBtn,
        {
          type: "button",
          onClick: () => {
            console.log("On lesson click: ", { setLessonActive, lesson }), changeCurrentScreen("Steps"), setLessonActive(lesson.id);
          },
          isActive: lesson.id === activeLessonId && currentScreen === "Steps",
          children: [
            "Lesson ",
            idx + 1
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
          lineNumber: 53,
          columnNumber: 13
        },
        this
      ) }, lesson.id, !1, {
        fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => {
            console.log("On add Lesson: ", { changeCurrentScreen, addLesson }), currentScreen !== "Steps" && changeCurrentScreen("Steps"), addLesson();
          },
          children: "Add lesson"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
          lineNumber: 69,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(SidebarList, { children: [
      lessonSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("li", { style: { display: "flex" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "button",
          {
            type: "button",
            onClick: () => {
              changeCurrentScreen("Steps"), setStepActive(step.id);
            },
            style: {
              color: step.id === activeStepId && currentScreen === "Steps" ? "#1cb0f6" : "#3c3c3c"
            },
            children: [
              "Step ",
              index + 1
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
            lineNumber: 86,
            columnNumber: 13
          },
          this
        ),
        lessonSteps.length > 1 && step.id === activeStepId ? /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
          "button",
          {
            type: "button",
            onClick: () => {
              removeStep();
            },
            children: "x"
          },
          void 0,
          !1,
          {
            fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
            lineNumber: 102,
            columnNumber: 15
          },
          this
        ) : null
      ] }, step.id, !0, {
        fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
        "button",
        {
          type: "button",
          onClick: () => {
            addStep(), currentScreen !== "Steps" && changeCurrentScreen("Steps");
          },
          children: "Add step"
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
          lineNumber: 113,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      FormButton,
      {
        type: "submit",
        active: isSubmitActive,
        disabled: isSubmitDisabled,
        children: submitText
      },
      void 0,
      !1,
      {
        fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
        lineNumber: 126,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/modules/Constructor/Levels/components/Sidebar.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}, Sidebar_default = Sidebar;

// app/modules/Constructor/index.tsx
var import_react38 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), ConstructorContext = (0, import_react37.createContext)(initialContext);
ConstructorContext.displayName = "ConstructorContext";
var useConstructor = () => {
  let state = (0, import_react37.useContext)(ConstructorContext);
  if (state === void 0)
    throw new Error("useConstructor must be used within a <Constructor />");
  return state;
};
function Constructor({
  data,
  actionData
}) {
  let state = useConstructorReducer(), {
    currentScreen,
    setup,
    changeCurrentScreen,
    steps,
    skillTitle,
    skillLineNumber
  } = state, fetcher = (0, import_react38.useFetcher)();
  (0, import_react37.useEffect)(() => {
    data && setup(data);
  }, [data]), (0, import_react37.useEffect)(() => {
    var _a;
    ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) && currentScreen !== "Skill" && changeCurrentScreen("Skill");
  }, [actionData]);
  function onHandleSubmit(e) {
    e.preventDefault();
    let formattedSteps = steps.map(
      ({ ready, id, options, answer, ...rest }) => ({
        ...rest,
        answer: typeof answer == "string" ? answer.trim() : answer,
        options: JSON.stringify(options)
      })
    );
    fetcher.submit(
      {
        steps: JSON.stringify(formattedSteps),
        skillData: JSON.stringify({ skillTitle, skillLineNumber })
      },
      { method: "post" }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ConstructorContext.Provider, { value: state, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    fetcher.Form,
    {
      method: "post",
      autoComplete: "off",
      onSubmit: (e) => onHandleSubmit(e),
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "calc(100vh - 95px)"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(ConstructorFormInner, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(SkillInfo, { isEditingSkill: Boolean(data), actionData }, void 0, !1, {
            fileName: "app/modules/Constructor/index.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Levels, {}, void 0, !1, {
            fileName: "app/modules/Constructor/index.tsx",
            lineNumber: 87,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/modules/Constructor/index.tsx",
          lineNumber: 85,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Sidebar_default, {}, void 0, !1, {
          fileName: "app/modules/Constructor/index.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/modules/Constructor/index.tsx",
      lineNumber: 74,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/modules/Constructor/index.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/routes/$language/constructor/$skillId.tsx
var import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), action4 = async ({ request, params }) => {
  let form = await request.formData(), activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage)
    throw new Error("Active language is not found in editting the skill");
  let { ...values } = Object.fromEntries(form), stepsData = JSON.parse(values.steps), skillData = JSON.parse(values.skillData), { skillTitle, skillLineNumber } = skillData, lineNumber = skillLineNumber, lastAddedSkill = await getLastAddedSkill(activeLanguage.id);
  lastAddedSkill && (lineNumber = lineNumber === "0" ? ((lastAddedSkill == null ? void 0 : lastAddedSkill.lineNumber) + 1).toString() : lineNumber), await deleteStepsFromSkill(params.skillId);
  let createdStepIDs = await createSteps(stepsData), data = {
    title: skillTitle,
    stepIDs: createdStepIDs,
    currentLesson: 0,
    level: 0,
    updatedAt: getTodayDate(),
    lineNumber: Number(lineNumber)
  };
  return await prisma.skill.update({
    where: { id: params.skillId },
    data: { ...data }
  }), (0, import_node5.redirect)(`/${activeLanguage.title}/skills`);
}, loader4 = async ({ request, params }) => {
  let skill = await prisma.skill.findUnique({
    where: { id: params.skillId }
  });
  if (!skill)
    throw new import_node5.Response("Skill is not found", { status: 404 });
  let activeLanguage = await getActiveLanguage(request), lastAddedSkills = await getLastAddedSkills(activeLanguage.id), steps = await getStepsBySkillId(skill.id), data = {
    title: skill.title,
    steps: steps.map((step) => {
      let options = JSON.parse(
        step.options ? step.options : "{}"
      );
      return {
        ...step,
        options
      };
    }),
    lineNumber: skill.lineNumber
  };
  return (0, import_node5.json)({ data, lastAddedSkills });
};
function ConstructorEdit() {
  let actionData = (0, import_react39.useActionData)(), { data } = (0, import_react39.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(Constructor, { data, actionData }, void 0, !1, {
    fileName: "app/routes/$language/constructor/$skillId.tsx",
    lineNumber: 112,
    columnNumber: 10
  }, this);
}

// app/routes/$language/constructor/new.tsx
var new_exports = {};
__export(new_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action5,
  default: () => New
});
var import_node6 = require("@remix-run/node"), import_react40 = require("@remix-run/react"), import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function getRandomIntFromOneToThree() {
  return Math.floor(Math.random() * 3 + 1);
}
function ErrorBoundary4() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "error-container", children: "There was an error loading the constructor. Sorry." }, void 0, !1, {
    fileName: "app/routes/$language/constructor/new.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var action5 = async ({ request, params }) => {
  let activeLanguage = await getActiveLanguage(request), form = await request.formData(), { ...values } = Object.fromEntries(form), stepsData = JSON.parse(values.steps), skillData = JSON.parse(values.skillData), { skillTitle } = skillData, lineNumber = 0, amountData = await getAmountOfSkillsOnTheLastRow(activeLanguage.id);
  if (amountData && (amountData.count >= getRandomIntFromOneToThree() ? lineNumber = amountData.lastLineNumber + 1 : lineNumber = amountData.lastLineNumber), await checkTitleUnique(activeLanguage.id, skillTitle))
    return (0, import_node6.json)(
      {
        errors: { title: "Title isn't unique" }
      },
      { status: 400 }
    );
  let createdStepIDs = await createSteps(
    stepsData.map((step) => ({ ...step, languageId: activeLanguage.id }))
  ), uniqueLessons = [];
  stepsData.map((step) => {
    Boolean(
      uniqueLessons.find((lessonId) => lessonId === step.parentLessonId)
    ) || uniqueLessons.push(step.parentLessonId);
  });
  let lessonsAmount = uniqueLessons.length, data = {
    title: skillTitle,
    stepIDs: createdStepIDs,
    currentLesson: 0,
    lessonsAmount,
    level: 0,
    languageId: activeLanguage.id,
    updatedAt: getTodayDate(),
    lineNumber: Number(lineNumber)
  }, skill = await prisma.skill.create({ data });
  return (0, import_node6.redirect)(`/skill/${skill.title}/1`);
};
function New() {
  let actionData = (0, import_react40.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Constructor, { actionData: {} }, void 0, !1, {
    fileName: "app/routes/$language/constructor/new.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/$language/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action6,
  default: () => SkillsPage,
  loader: () => loader5
});
var import_node7 = require("@remix-run/node");

// app/modules/Common/components/WeeklyProgress/lib.tsx
var import_styled9 = __toESM(require("@emotion/styled")), ExpProgressBlock = (0, import_styled9.default)("section")`
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 16px;
  margin: 0 24px 24px;
  padding: 24px;
  position: fixed;
`, ExpProgressTitle = (0, import_styled9.default)("h2")`
  color: #3c3c3c;
  font-size: 24px;
  line-height: 26px;
  margin: 0 0 25px;
  font-family: Nunito;
  font-weight: 700;
`;

// app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), DAY_COORDS = [
  "0.5",
  "42.166666666666664,0",
  "83.83333333333333,0",
  "125.5,0",
  "167.16666666666666,0",
  "208.83333333333334,0",
  "250.5,0"
], EXP_VALUES = [
  { val: 0, coords: "0,150.5" },
  { val: 0, coords: "0,113" },
  { val: 0, coords: "0,75.5" },
  { val: 0, coords: "0,38" },
  { val: 0, coords: "0,0.5" }
], DOTS_X_COORDS = [
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
  let maxActivity = Math.max(...Object.values(activity));
  EXP_VALUES[1].val = Math.round(maxActivity / 3.5), EXP_VALUES[2].val = Math.round(maxActivity / 2), EXP_VALUES[3].val = Math.round(maxActivity / 1.2), EXP_VALUES[4].val = Math.round(maxActivity / 0.9);
  let days = getCurrentWeek(), dotsData = days.map((day, index) => ({
    x: DOTS_X_COORDS[index],
    y: maxActivity && activity[day] / EXP_VALUES[4].val * 150,
    exp: activity[day]
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { style: { position: "relative", display: "flex", flexGrow: "1" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ExpProgressBlock, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ExpProgressTitle, { children: "XP Progress" }, void 0, !1, {
      fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("svg", { direction: "ltr", height: "220", width: "340", children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("g", { transform: "translate(45, 35)", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("g", {}, void 0, !1, {
        fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
        "g",
        {
          transform: "translate(0, 150)",
          fill: "none",
          fontSize: "10",
          fontFamily: "sans-serif",
          textAnchor: "middle",
          children: days.map((day, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
            "g",
            {
              className: "tick",
              opacity: "1",
              transform: `translate(${DAY_COORDS[index]})`,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
                "text",
                {
                  fill: "currentColor",
                  y: "16",
                  dy: "0.71em",
                  color: "#cccac9",
                  fontFamily: "din-round, sans-serif",
                  fontSize: "17px",
                  children: day
                },
                void 0,
                !1,
                {
                  fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
                  lineNumber: 74,
                  columnNumber: 19
                },
                this
              )
            },
            day,
            !1,
            {
              fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
              lineNumber: 68,
              columnNumber: 17
            },
            this
          ))
        },
        void 0,
        !1,
        {
          fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
          lineNumber: 60,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
        "g",
        {
          transform: "",
          fill: "none",
          fontSize: "10",
          fontFamily: "sans-serif",
          textAnchor: "end",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
              "path",
              {
                className: "GNoB0",
                d: "M0,0L250,0L250,150L0,150Z",
                fill: "#ffc800",
                fillOpacity: "0.1"
              },
              void 0,
              !1,
              {
                fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
                lineNumber: 94,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
              "path",
              {
                className: "GNoB0",
                d: `M0,0${dotsData.map(({ x, y }, idx) => idx === 0 ? "M" + x + "," + y : "L" + x + "," + y)}L250,150L208.33333333333334,150L166.66666666666666,150L125,150L83.33333333333333,150L41.666666666666664,150L0,150Z`,
                fill: "#fff",
                fillOpacity: "1",
                style: { transform: "scaleY(-1) translateY(-150px)" }
              },
              void 0,
              !1,
              {
                fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
                lineNumber: 100,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
              "path",
              {
                className: "QZq6Z",
                d: `${dotsData.map(({ x, y }, idx) => idx === 0 ? "M" + x + "," + y : "L" + x + "," + y)}`,
                fillOpacity: "0",
                stroke: "#ffc800",
                strokeOpacity: "0.5",
                strokeWidth: "2",
                style: { transform: "scaleY(-1) translateY(-150px)" }
              },
              void 0,
              !1,
              {
                fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
                lineNumber: 111,
                columnNumber: 15
              },
              this
            ),
            EXP_VALUES.map(({ val, coords }) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
              "g",
              {
                className: "tick",
                opacity: "1",
                transform: `translate(${coords})`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
                    "line",
                    {
                      stroke: "#dedede",
                      x2: "250",
                      strokeOpacity: "0.5",
                      strokeWidth: "2"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
                      lineNumber: 130,
                      columnNumber: 19
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
                    "text",
                    {
                      fill: "currentColor",
                      x: "-16",
                      dy: "0.32em",
                      color: "#cccac9",
                      fontFamily: "din-round, sans-serif",
                      fontSize: "17px",
                      children: val
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
                      lineNumber: 136,
                      columnNumber: 19
                    },
                    this
                  )
                ]
              },
              coords,
              !0,
              {
                fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
                lineNumber: 124,
                columnNumber: 17
              },
              this
            ))
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
          lineNumber: 87,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("g", { children: dotsData.map(({ x, y, exp }) => /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
        "circle",
        {
          className: "_2Hihu",
          cx: x,
          cy: y,
          fill: exp > 50 ? "#ffc800" : "#fff",
          r: "3.75",
          stroke: "#ffc800",
          strokeWidth: "2",
          style: { transform: "scaleY(-1) translateY(-150px)" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("title", { children: [
            exp,
            " XP"
          ] }, void 0, !0, {
            fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
            lineNumber: 162,
            columnNumber: 19
          }, this)
        },
        x + y,
        !1,
        {
          fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
          lineNumber: 151,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/modules/Common/components/WeeklyProgress/WeeklyProgress.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/$language/skills.tsx
var import_react44 = require("@remix-run/react");

// app/components/SkillsList.tsx
var import_nanoid2 = require("nanoid");

// app/modules/Common/components/Footer/lib.tsx
var import_styled10 = __toESM(require("@emotion/styled")), FooterLine = (0, import_styled10.default)("hr")`
  border: 0;
  border-top: 2px solid #e5e5e5;
  margin: 0 0 48px;
`, FooterText = (0, import_styled10.default)("p")`
  text-align: center;
  color: #afafaf;
  font-family: Nunito;
  margin: 0;
`, LinkWithHover = (0, import_styled10.default)("a")`
  &:hover {
    filter: brightness(1.3);
  }
`;

// app/modules/Common/components/Footer/Footer.tsx
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function Footer2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("footer", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(FooterLine, {}, void 0, !1, {
      fileName: "app/modules/Common/components/Footer/Footer.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)("div", { style: { paddingBottom: 28 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(FooterText, { children: [
      "Inspired by",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(LinkWithHover, { href: "https://www.duolingo.com", target: "_blank", children: "Duolingo" }, void 0, !1, {
        fileName: "app/modules/Common/components/Footer/Footer.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/modules/Common/components/Footer/Footer.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/modules/Common/components/Footer/Footer.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/modules/Common/components/Footer/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/modules/Common/components/Footer/index.tsx
var Footer_default = Footer2;

// app/components/LessonItem.tsx
var import_react42 = require("react");

// app/styles/bin.svg
var bin_default = "/build/_assets/bin-RYGYRSXA.svg";

// app/hooks/useOnClickOutside.ts
var import_react41 = require("react");
function useOnClickOutside(ref, handler) {
  (0, import_react41.useEffect)(
    () => {
      let listener = (event) => {
        !ref.current || ref.current.contains(event.target) || handler(event);
      };
      return document.addEventListener("mousedown", listener), document.addEventListener("touchstart", listener), () => {
        document.removeEventListener("mousedown", listener), document.removeEventListener("touchstart", listener);
      };
    },
    [ref, handler]
  );
}

// app/components/LessonItem.tsx
var import_react43 = require("@remix-run/react"), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function LessonItem({
  id,
  title,
  currentLesson,
  lessonsAmount,
  editLink
}) {
  let [isOpened, setIsOpened] = (0, import_react42.useState)(!1), transition = (0, import_react43.useTransition)(), ref = (0, import_react42.useRef)(null);
  (0, import_react42.useEffect)(() => {
    transition.state === "loading" && setIsOpened(!1);
  }, [transition.state]), useOnClickOutside(ref, () => setIsOpened(!1));
  let isDisabled = transition.state !== "idle", exp = currentLesson / lessonsAmount * 100, skillLink = `/skill/${title}/${currentLesson / lessonsAmount === 1 ? "practice" : currentLesson + 1}`;
  function toggleMenu() {
    setIsOpened(!isOpened);
  }
  let startButtonMessage = exp < 100 ? "Start +16 XP" : "Practice +16 XP";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonsContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonBlock, { ref, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("button", { "aria-labelledby": title, onClick: toggleMenu, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonProgress, { exp, children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonProgressInner, {}, void 0, !1, {
        fileName: "app/components/LessonItem.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/LessonItem.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonTitle, { children: title }, void 0, !1, {
        fileName: "app/components/LessonItem.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, id, !0, {
      fileName: "app/components/LessonItem.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonBlockMenu, { isOpened, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonBlockMenuTriangle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonBlockMenuTriangleContent, {}, void 0, !1, {
        fileName: "app/components/LessonItem.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/LessonItem.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonBlockInner, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("div", { style: { display: "flex" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonBlockLink, { to: editLink, children: "Edit" }, void 0, !1, {
            fileName: "app/components/LessonItem.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_react43.Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("input", { type: "hidden", name: "id", value: id }, void 0, !1, {
              fileName: "app/components/LessonItem.tsx",
              lineNumber: 72,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
              LessonBlockButton,
              {
                type: "submit",
                disabled: isDisabled,
                title: "Delete skill",
                name: "_action",
                value: "Delete skill",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)("img", { src: bin_default, alt: "delete", width: 20, height: 20 }, void 0, !1, {
                  fileName: "app/components/LessonItem.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/LessonItem.tsx",
                lineNumber: 73,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/LessonItem.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/LessonItem.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(LessonBlockLink, { to: skillLink, children: startButtonMessage }, void 0, !1, {
          fileName: "app/components/LessonItem.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/LessonItem.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/LessonItem.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/LessonItem.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/LessonItem.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/styles/practice_last_added.svg
var practice_last_added_default = "/build/_assets/practice_last_added-HKEJVFEX.svg";

// app/components/PracticeLastAdded.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function PracticeLastAdded() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(PracticeLastAddedContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(PracticeLastAddedWrapper, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(PracticeLastAddedLink, { to: "/practice", title: "Practice", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    "img",
    {
      src: practice_last_added_default,
      alt: "Practice last added lessons",
      height: 32,
      width: 38.7
    },
    void 0,
    !1,
    {
      fileName: "app/components/PracticeLastAdded.tsx",
      lineNumber: 13,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/PracticeLastAdded.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/PracticeLastAdded.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/PracticeLastAdded.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/SkillsList.tsx
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function SkillsList({
  skills,
  languageTitle
}) {
  let lineNumbers = [
    ...new Set(skills.map((dataItem) => dataItem.lineNumber))
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(SkillsListContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)("div", { style: { display: "flex", flexGrow: 1 }, children: [
      skills.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(PracticeLastAdded, {}, void 0, !1, {
        fileName: "app/components/SkillsList.tsx",
        lineNumber: 29,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(SkillsLineBlock, { children: lineNumbers.map((lineNumber) => /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(LessonsBlock, { children: skills.map((dataItem) => {
        if (dataItem.lineNumber === lineNumber)
          return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
            LessonItem,
            {
              ...dataItem,
              editLink: `/${languageTitle}/constructor/${dataItem.id}`
            },
            dataItem.id,
            !1,
            {
              fileName: "app/components/SkillsList.tsx",
              lineNumber: 36,
              columnNumber: 21
            },
            this
          );
      }) }, (0, import_nanoid2.nanoid)(), !1, {
        fileName: "app/components/SkillsList.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/components/SkillsList.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SkillsList.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Footer_default, {}, void 0, !1, {
      fileName: "app/components/SkillsList.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SkillsList.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/$language/skills.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function ErrorBoundary5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("div", { className: "error-container", children: "Issues during loading Skills route" }, void 0, !1, {
    fileName: "app/routes/$language/skills.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var action6 = async ({ request }) => {
  let data = await request.formData(), { _action, ...values } = Object.fromEntries(data);
  if (_action === "Delete skill") {
    let id = values.id;
    if (!id)
      throw new Error("Skill id wasn't found");
    return await deleteStepsFromSkill(id), await deleteSkillById(id);
  }
}, loader5 = async ({ request }) => {
  let activeLanguage = await getActiveLanguage(request), user = await getUser(request);
  if (!user)
    return (0, import_node7.redirect)("/login");
  if (!activeLanguage)
    throw new import_node7.Response("We could not find the active language", {
      status: 404
    });
  let skills = await getSkills(activeLanguage.id);
  return (0, import_node7.json)({
    skills,
    activity: user.weeklyActivity,
    languageTitle: activeLanguage.title
  });
};
function SkillsPage() {
  let { skills, activity, languageTitle } = (0, import_react44.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)("section", { style: { display: "flex", width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(SkillsList, { skills, languageTitle }, void 0, !1, {
      fileName: "app/routes/$language/skills.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(WeeklyProgress, { activity }, void 0, !1, {
      fileName: "app/routes/$language/skills.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$language/skills.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

// app/routes/practice.tsx
var practice_exports2 = {};
__export(practice_exports2, {
  ErrorBoundary: () => ErrorBoundary6,
  action: () => action7,
  default: () => Practice,
  loader: () => loader6
});
var import_node8 = require("@remix-run/node"), import_react45 = require("@remix-run/react");
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function ErrorBoundary6() {
  let { lessonId } = (0, import_react45.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)("div", { className: "error-container", children: `There was an error loading lesson by the id ${lessonId}. Sorry.` }, void 0, !1, {
    fileName: "app/routes/practice.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var action7 = async ({ request }) => {
  let form = await request.formData(), expData = Number(form.get("exp")), user = await getUser(request);
  if (!user)
    return (0, import_node8.redirect)("/login");
  let today = getWeekDay(), newUserActivity = user.weeklyActivity;
  return newUserActivity[today] = newUserActivity[today] + 10, await prisma.user.update({
    where: {
      id: user == null ? void 0 : user.id
    },
    data: {
      weeklyActivity: { ...newUserActivity }
    }
  }), (0, import_node8.redirect)("/");
}, loader6 = async ({ request }) => {
  let activeLanguage = await getActiveLanguage(request);
  if (!activeLanguage)
    throw new Error("No active language has found");
  let steps = await getStepsForPracticing(activeLanguage.id);
  if (console.log("Steps: ", steps), steps.length === 0)
    throw new Error("Steps for practicing are not found");
  let totalXP = await getTodayTotalXP(request);
  return (0, import_node8.json)({ steps, totalXP });
};
function Practice() {
  let { steps, totalXP } = (0, import_react45.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(Skill, { steps, totalXP }, void 0, !1, {
    fileName: "app/routes/practice.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action8,
  loader: () => loader7
});
var import_node9 = require("@remix-run/node");
var action8 = async ({ request }) => logout(request), loader7 = async () => (0, import_node9.redirect)("/");

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader8
});
var import_node10 = require("@remix-run/node"), loader8 = async ({ request }) => {
  var _a;
  if (!await getUser(request))
    return (0, import_node10.redirect)("/login");
  let languages = await getLanguages(request), activeLanguageTitle = (_a = languages == null ? void 0 : languages.find((it) => it.active)) == null ? void 0 : _a.title;
  return (0, import_node10.redirect)(`/${activeLanguageTitle}/skills`);
};

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action9,
  default: () => LoginPage,
  loader: () => loader9,
  meta: () => meta
});
var import_node11 = require("@remix-run/node"), import_react46 = require("@remix-run/react");
var import_react47 = require("react"), import_jsx_dev_runtime46 = require("react/jsx-dev-runtime"), action9 = async ({ request }) => {
  let formData = await request.formData(), action10 = formData.get("action"), username = formData.get("username"), password = formData.get("password"), user = await verifyLogin(username, password);
  if (user)
    return createUserSession({
      request,
      userId: user.id,
      redirectTo: "/"
    });
  if (action10 === "register") {
    let newUser = await createUser(username, password);
    return await createUserSession({
      request,
      userId: newUser.id,
      redirectTo: "/"
    });
  }
  return (0, import_node11.json)(
    {
      errors: { username: "Invalid username or password" },
      fields: { action: "login", password: "" }
    },
    { status: 400 }
  );
}, meta = () => ({
  title: "Login"
}), loader9 = async ({ request }) => await getUserId(request) ? (0, import_node11.redirect)("/") : (0, import_node11.json)({});
function LoginPage() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react46.useActionData)(), transition = (0, import_react46.useTransition)(), [isLogin, setIsLogin] = (0, import_react47.useState)(
    actionData && ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.action) === "login" ? !0 : !actionData
  ), usernameRef = (0, import_react47.useRef)(null), passwordRef = (0, import_react47.useRef)(null);
  (0, import_react47.useEffect)(() => {
    var _a2, _b2, _c2, _d2;
    (_a2 = actionData == null ? void 0 : actionData.errors) != null && _a2.username && ((_b2 = usernameRef.current) == null || _b2.focus()), (_c2 = actionData == null ? void 0 : actionData.errors) != null && _c2.password && ((_d2 = passwordRef.current) == null || _d2.focus());
  }, [actionData]);
  let isLoginning = ((_b = transition.submission) == null ? void 0 : _b.formData.get("action")) === "login", isRegistering = ((_c = transition.submission) == null ? void 0 : _c.formData.get("action")) === "register", submitLoginText = isLoginning ? "Signing in..." : "Sign in", submitRegisterText = isRegistering ? "Signing up..." : "Sign up";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(LoginContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(LoginContinerInner, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_react46.Form, { method: "post", style: { width: "100%", maxWidth: 375 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(LoginTitle, { children: isLogin ? "Login" : "Register" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(LoginToggle, { htmlFor: "register", style: { zIndex: isLogin ? 1 : -1 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
        "input",
        {
          type: "radio",
          name: "action",
          id: "register",
          value: "register",
          onChange: () => setIsLogin(!isLogin),
          style: { visibility: "hidden", position: "absolute" },
          checked: !isLogin
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 110,
          columnNumber: 13
        },
        this
      ),
      isLogin ? "Sign up" : "Sign in"
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(LoginToggle, { htmlFor: "login", style: { zIndex: isLogin ? -1 : 1 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
        "input",
        {
          type: "radio",
          name: "action",
          id: "login",
          value: "login",
          onChange: () => setIsLogin(!isLogin),
          style: { visibility: "hidden", position: "absolute" },
          checked: isLogin
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 122,
          columnNumber: 13
        },
        this
      ),
      isLogin ? "Sign up" : "Sign in"
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 121,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { style: { marginTop: 8 }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
        LoginInput,
        {
          type: "text",
          name: "username",
          placeholder: "Username",
          ref: usernameRef,
          id: "username",
          autoFocus: !0,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 134,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
        LoginInput,
        {
          name: "password",
          id: "password",
          type: "password",
          placeholder: "Password",
          ref: passwordRef,
          required: !0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 144,
          columnNumber: 13
        },
        this
      ),
      ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.username) && /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(ErrorMessage, { role: "alert", id: "username-error", children: actionData.errors.username }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 154,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 133,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { style: { height: 50, marginTop: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(LoginButton, { type: "submit", children: isLogin ? submitLoginText : submitRegisterText }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 160,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 159,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 107,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "44322178", entry: { module: "/build/entry.client-K6CGFP7E.js", imports: ["/build/_shared/chunk-JVI2X3JW.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-U322HWBF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$language": { id: "routes/$language", parentId: "root", path: ":language", index: void 0, caseSensitive: void 0, module: "/build/routes/$language-TOVCD6O5.js", imports: ["/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-GLWAIFE6.js", "/build/_shared/chunk-7BU3RBR5.js", "/build/_shared/chunk-BGW22GDJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/$language/constructor/$skillId": { id: "routes/$language/constructor/$skillId", parentId: "routes/$language", path: "constructor/:skillId", index: void 0, caseSensitive: void 0, module: "/build/routes/$language/constructor/$skillId-SDV3726X.js", imports: ["/build/_shared/chunk-A5PMTVXH.js", "/build/_shared/chunk-WOBLJIZQ.js", "/build/_shared/chunk-Q72OY2FZ.js", "/build/_shared/chunk-DCURUL57.js", "/build/_shared/chunk-727OU6UJ.js", "/build/_shared/chunk-HS3CV63H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$language/constructor/new": { id: "routes/$language/constructor/new", parentId: "routes/$language", path: "constructor/new", index: void 0, caseSensitive: void 0, module: "/build/routes/$language/constructor/new-3L235VVZ.js", imports: ["/build/_shared/chunk-A5PMTVXH.js", "/build/_shared/chunk-WOBLJIZQ.js", "/build/_shared/chunk-Q72OY2FZ.js", "/build/_shared/chunk-DCURUL57.js", "/build/_shared/chunk-727OU6UJ.js", "/build/_shared/chunk-HS3CV63H.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/$language/skills": { id: "routes/$language/skills", parentId: "routes/$language", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/$language/skills-5SUDC67L.js", imports: ["/build/_shared/chunk-DCURUL57.js", "/build/_shared/chunk-727OU6UJ.js", "/build/_shared/chunk-HS3CV63H.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IBPJR7UM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-BLJSELXL.js", imports: ["/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-GLWAIFE6.js", "/build/_shared/chunk-BGW22GDJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-DOMDNNGV.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/practice": { id: "routes/practice", parentId: "root", path: "practice", index: void 0, caseSensitive: void 0, module: "/build/routes/practice-QRJVIDFD.js", imports: ["/build/_shared/chunk-GPOYFIFR.js", "/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-WOBLJIZQ.js", "/build/_shared/chunk-Q72OY2FZ.js", "/build/_shared/chunk-GLWAIFE6.js", "/build/_shared/chunk-HS3CV63H.js", "/build/_shared/chunk-7BU3RBR5.js", "/build/_shared/chunk-BGW22GDJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/skill/$title/$lesson": { id: "routes/skill/$title/$lesson", parentId: "root", path: "skill/:title/:lesson", index: void 0, caseSensitive: void 0, module: "/build/routes/skill/$title/$lesson-OPX7VL4X.js", imports: ["/build/_shared/chunk-GPOYFIFR.js", "/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-Q72OY2FZ.js", "/build/_shared/chunk-727OU6UJ.js", "/build/_shared/chunk-HS3CV63H.js", "/build/_shared/chunk-7BU3RBR5.js", "/build/_shared/chunk-BGW22GDJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/skill/$title/practice": { id: "routes/skill/$title/practice", parentId: "root", path: "skill/:title/practice", index: void 0, caseSensitive: void 0, module: "/build/routes/skill/$title/practice-INZBGNSA.js", imports: ["/build/_shared/chunk-GPOYFIFR.js", "/build/_shared/chunk-M2ND3YFM.js", "/build/_shared/chunk-Q72OY2FZ.js", "/build/_shared/chunk-727OU6UJ.js", "/build/_shared/chunk-HS3CV63H.js", "/build/_shared/chunk-7BU3RBR5.js", "/build/_shared/chunk-BGW22GDJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 } }, url: "/build/manifest-44322178.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/skill/$title/practice": {
    id: "routes/skill/$title/practice",
    parentId: "root",
    path: "skill/:title/practice",
    index: void 0,
    caseSensitive: void 0,
    module: practice_exports
  },
  "routes/skill/$title/$lesson": {
    id: "routes/skill/$title/$lesson",
    parentId: "root",
    path: "skill/:title/:lesson",
    index: void 0,
    caseSensitive: void 0,
    module: lesson_exports
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
    index: !0,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
