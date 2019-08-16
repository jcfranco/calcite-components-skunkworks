var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './core-2b8c2af5.js';
import { S as SPACE, E as ENTER, R as RIGHT, L as LEFT } from './keys-60e1baeb.js';
import { g as guid } from './guid-3edb1b93.js';
import { n as nodeListToArray, g as getElementDir } from './dom-6bb56f1f.js';
var CalciteTab = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Show this tab
         */
        this.isActive = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         */
        this.guid = "calcite-tab-title-" + guid();
        this.calciteTabRegister = createEvent(this, "calciteTabRegister", 7);
        this.calciteTabUnregister = createEvent(this, "calciteTabUnregister", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_1.prototype.render = function () {
        var id = this.el.id || this.guid;
        return (h(Host, { id: id, "aria-labeledby": this.labeledBy, "aria-expanded": this.isActive ? "true" : "false", role: "tabpanel" }, h("section", null, h("slot", null))));
    };
    class_1.prototype.componentDidLoad = function () {
        this.calciteTabRegister.emit();
    };
    class_1.prototype.componentDidUnload = function () {
        this.calciteTabUnregister.emit();
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    class_1.prototype.tabChangeHandler = function (event) {
        var _this = this;
        // to allow `<calcite-tabs>` to be nested we need to make sure this
        // `calciteTabChange` event was actually fired from a title that is a
        // child of the `<calcite-tabs>` that is the a parent of this tab.
        if (event.target.closest("calcite-tabs") !==
            this.el.closest("calcite-tabs")) {
            return;
        }
        if (this.tab) {
            this.isActive = this.tab === event.detail.tab;
        }
        else {
            this.getTabIndex().then(function (index) {
                _this.isActive = index === event.detail.tab;
            });
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the index of this tab within the tab array
     */
    class_1.prototype.getTabIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(Array.prototype.indexOf.call(nodeListToArray(this.el.parentElement.children).filter(function (e) { return e.matches("calcite-tab"); }), this.el))];
            });
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    class_1.prototype.updateAriaInfo = function (tabIds, titleIds) {
        if (tabIds === void 0) { tabIds = []; }
        if (titleIds === void 0) { titleIds = []; }
        this.labeledBy = titleIds[tabIds.indexOf(this.el.id)] || null;
        return Promise.resolve();
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}:host([is-active]) section,calcite-tab[is-active]{display:block}section{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var CalciteTabNav = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.calciteTabChange = createEvent(this, "calciteTabChange", 7);
    }
    class_2.prototype.selectedTabChanged = function () {
        if (localStorage &&
            this.storageId &&
            this.selectedTab !== undefined &&
            this.selectedTab !== null) {
            localStorage.setItem("calcite-tab-nav-" + this.storageId, JSON.stringify(this.selectedTab));
        }
        this.calciteTabChange.emit({
            tab: this.selectedTab
        });
    };
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_2.prototype.componentWillLoad = function () {
        var storageKey = "calcite-tab-nav-" + this.storageId;
        if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
            this.selectedTab = JSON.parse(localStorage.getItem(storageKey));
            this.calciteTabChange.emit({
                tab: this.selectedTab
            });
        }
    };
    class_2.prototype.render = function () {
        return (h(Host, { role: "tablist" }, h("nav", { class: "tab-nav" }, h("slot", null))));
    };
    class_2.prototype.componentDidRender = function () {
        var _this = this;
        // if every tab title is active select the first tab.
        if (this.tabTitles.length &&
            this.tabTitles.every(function (title) { return !title.isActive; }) &&
            !this.selectedTab) {
            this.tabTitles[0].getTabIdentifier().then(function (tab) {
                _this.calciteTabChange.emit({
                    tab: tab
                });
            });
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Events Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    class_2.prototype.focusPreviousTabHandler = function (e) {
        var currentIndex = this.getIndexOfTabTitle(e.target);
        var previousTab = this.tabTitles[currentIndex - 1] ||
            this.tabTitles[this.tabTitles.length - 1];
        previousTab.focus();
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    class_2.prototype.focusNextTabHandler = function (e) {
        var currentIndex = this.getIndexOfTabTitle(e.target);
        var nextTab = this.tabTitles[currentIndex + 1] || this.tabTitles[0];
        nextTab.focus();
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    class_2.prototype.activateTabHandler = function (e) {
        if (e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
        else {
            this.selectedTab = this.getIndexOfTabTitle(e.target);
        }
        e.stopPropagation();
        e.preventDefault();
    };
    /**
     * @internal
     */
    class_2.prototype.globalTabChangeHandler = function (e) {
        if (this.syncId &&
            e.target !== this.el &&
            e.target.syncId === this.syncId &&
            this.selectedTab !== e.detail.tab) {
            this.selectedTab = e.detail.tab;
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    class_2.prototype.getIndexOfTabTitle = function (el) {
        return this.tabTitles.indexOf(el);
    };
    Object.defineProperty(class_2.prototype, "tabTitles", {
        get: function () {
            return this.el.shadowRoot
                ? this.el.shadowRoot.querySelector("slot").assignedElements()
                : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "selectedTab": ["selectedTabChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_2, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}.tab-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:var(--calcite-tabs-layout);justify-content:var(--calcite-tabs-layout);overflow:auto}::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-start);margin-left:var(--calcite-tabs-tab-margin-end)}:host([dir=rtl]) ::slotted(calcite-tab-title){margin-right:var(--calcite-tabs-tab-margin-end);margin-left:var(--calcite-tabs-tab-margin-start)}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var CalciteTabTitle = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Show this tab title as selected
         */
        this.isActive = false;
        /**
         * @internal
         */
        this.guid = "calcite-tab-title-" + guid();
        this.calciteTabsActivate = createEvent(this, "calciteTabsActivate", 7);
        this.calciteTabsFocusNext = createEvent(this, "calciteTabsFocusNext", 7);
        this.calciteTabsFocusPrevious = createEvent(this, "calciteTabsFocusPrevious", 7);
        this.calciteTabTitleRegister = createEvent(this, "calciteTabTitleRegister", 7);
        this.calciteTabTitleUnregister = createEvent(this, "calciteTabTitleUnregister", 7);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_3.prototype.componentWillLoad = function () {
        if (this.tab && this.isActive) {
            this.calciteTabsActivate.emit({
                tab: this.tab
            });
        }
    };
    class_3.prototype.render = function () {
        var id = this.el.id || this.guid;
        return (h(Host, { id: id, "aria-controls": this.controls, "aria-expanded": this.isActive ? "true" : "false", role: "tab", tabindex: "0" }, h("a", null, h("slot", null))));
    };
    class_3.prototype.componentDidLoad = function () {
        this.calciteTabTitleRegister.emit();
    };
    class_3.prototype.componentDidUnload = function () {
        this.calciteTabTitleUnregister.emit();
    };
    //--------------------------------------------------------------------------
    //
    //  Events Listeners
    //
    //--------------------------------------------------------------------------
    class_3.prototype.tabChangeHandler = function (event) {
        var _this = this;
        if (this.tab) {
            this.isActive = this.tab === event.detail.tab;
        }
        else {
            this.getTabIndex().then(function (index) {
                _this.isActive = index === event.detail.tab;
            });
        }
    };
    class_3.prototype.onClick = function () {
        this.calciteTabsActivate.emit({
            tab: this.tab
        });
    };
    class_3.prototype.keyDownHandler = function (e) {
        switch (e.keyCode) {
            case SPACE:
            case ENTER:
                this.calciteTabsActivate.emit({
                    tab: this.tab
                });
                e.preventDefault();
                break;
            case RIGHT:
                if (getElementDir(this.el) === "ltr") {
                    this.calciteTabsFocusNext.emit();
                }
                else {
                    this.calciteTabsFocusPrevious.emit();
                }
                break;
            case LEFT:
                if (getElementDir(this.el) === "ltr") {
                    this.calciteTabsFocusPrevious.emit();
                }
                else {
                    this.calciteTabsFocusNext.emit();
                }
                break;
        }
    };
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /**
     * Return the index of this title within the nav
     */
    class_3.prototype.getTabIndex = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"), this.el))];
            });
        });
    };
    /**
     * @internal
     */
    class_3.prototype.getTabIdentifier = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.tab ? Promise.resolve(this.tab) : this.getTabIndex()];
            });
        });
    };
    /**
     * @internal
     */
    class_3.prototype.updateAriaInfo = function (tabIds, titleIds) {
        if (tabIds === void 0) { tabIds = []; }
        if (titleIds === void 0) { titleIds = []; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    Object.defineProperty(class_3.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}:host{-ms-flex:0 1 var(--calcite-tabs-tab-basis);flex:0 1 var(--calcite-tabs-tab-basis);outline:none}:host(:active) a,:host(:focus) a,:host(:hover) a{outline:none;text-decoration:none;color:var(--calcite-tabs-color-active);border-bottom-color:var(--calcite-tabs-border-hover)}:host([is-active]) a{color:var(--calcite-tabs-color-active);border-bottom-color:var(--calcite-tabs-border-active)}a{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:.875rem;line-height:1.5;padding:.5rem 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom:3px solid transparent;cursor:pointer;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;color:var(--calcite-tabs-color);outline:none;width:100%;display:block;text-align:var(--calcite-tabs-tab-text-align)}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var CalciteTabs = /** @class */ (function () {
    function class_4(hostRef) {
        registerInstance(this, hostRef);
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        /**
         * Select theme (light or dark)
         */
        this.theme = "light";
        /**
         * Align tab titles to the edge or fully justify them across the tab nav ("center")
         */
        this.layout = "inline";
        //--------------------------------------------------------------------------
        //
        //  Events
        //
        //--------------------------------------------------------------------------
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab-titles>`s to match up ARIA
         * attributes.
         */
        this.titles = [];
        /**
         * @internal
         *
         * Stores an array of ids of `<calcite-tab>`s to match up ARIA attributes.
         */
        this.tabs = [];
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    class_4.prototype.render = function () {
        var dir = getElementDir(this.el);
        return (h(Host, { dir: dir }, h("div", null, h("slot", { name: "tab-nav" }), h("section", null, h("slot", null)))));
    };
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     */
    class_4.prototype.calciteTabTitleRegister = function (e) {
        this.titles = this.titles.concat([e.target]);
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_4.prototype.calciteTabTitleUnregister = function (e) {
        this.titles = this.titles.filter(function (el) { return el !== e.target; });
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_4.prototype.calciteTabRegister = function (e) {
        this.tabs = this.tabs.concat([e.target]);
        this.registryHandler();
        e.stopPropagation();
    };
    /**
     * @internal
     */
    class_4.prototype.calciteTabUnregister = function (e) {
        this.tabs = this.tabs.filter(function (el) { return el !== e.target; });
        this.registryHandler();
        e.stopPropagation();
    };
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    /**
     * @internal
     *
     * Matches up elements from the internal `tabs` and `titles` to automatically
     * update the ARIA attributes and link `<calcite-tab>` and
     * `<calcite-tab-title>` components.
     */
    class_4.prototype.registryHandler = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tabIds, titleIds, tabDomIndexes, titleDomIndexes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.tabs.some(function (e) { return e.tab; }) || this.titles.some(function (e) { return e.tab; }))) return [3 /*break*/, 1];
                        // if we are using `tab` based identifiers sort by `tab` to account for
                        // possible out of order tabs and get the id of each tab
                        tabIds = this.tabs
                            .sort(function (a, b) { return a.tab.localeCompare(b.tab); })
                            .map(function (e) { return e.id; });
                        titleIds = this.titles
                            .sort(function (a, b) { return a.tab.localeCompare(b.tab); })
                            .map(function (e) { return e.id; });
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, Promise.all(this.tabs.map(function (el) { return el.getTabIndex(); }))];
                    case 2:
                        tabDomIndexes = _a.sent();
                        return [4 /*yield*/, Promise.all(this.titles.map(function (el) { return el.getTabIndex(); }))];
                    case 3:
                        titleDomIndexes = _a.sent();
                        // once we have the DOM order as a source of truth we can build the
                        // matching tabIds and titleIds arrays
                        tabIds = tabDomIndexes.reduce(function (ids, indexInDOM, registryIndex) {
                            ids[indexInDOM] = _this.tabs[registryIndex].id;
                            return ids;
                        }, []);
                        titleIds = titleDomIndexes.reduce(function (ids, indexInDOM, registryIndex) {
                            ids[indexInDOM] = _this.titles[registryIndex].id;
                            return ids;
                        }, []);
                        _a.label = 4;
                    case 4:
                        // pass all our new aria information to each `<calcite-tab>` and
                        // `<calcite-tab-title>` which will check if they can update their internal
                        // `controlled` or `labeledBy` states and re-render if necessary
                        this.tabs.forEach(function (el) { return el.updateAriaInfo(tabIds, titleIds); });
                        this.titles.forEach(function (el) { return el.updateAriaInfo(tabIds, titleIds); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(class_4.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_4, "style", {
        get: function () { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}:host,calcite-tab[is-active]{display:block}:host{--calcite-tabs-color:#2b2b2b;--calcite-tabs-border:#eaeaea;--calcite-tabs-border-hover:#dfdfdf;--calcite-tabs-color-active:#151515;--calcite-tabs-border-active:#007ac2;--calcite-tabs-layout:flex-start;--calcite-tabs-tab-basis:auto;--calcite-tabs-tab-text-align:start;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:0}:host([theme=dark]){--calcite-tabs-color:#f3f3f3;--calcite-tabs-border:#404040;--calcite-tabs-border-hover:#757575;--calcite-tabs-color-active:#f8f8f8;--calcite-tabs-border-active:#fff}:host([dir=rtl]){--calcite-tabs-tab-margin-start:0;--calcite-tabs-tab-margin-end:1.25rem}:host([layout=center]){--calcite-tabs-layout:center;--calcite-tabs-tab-basis:200px;--calcite-tabs-tab-text-align:center;--calcite-tabs-tab-margin-start:1.25rem;--calcite-tabs-tab-margin-end:1.25rem}section{border-top:1px solid var(--calcite-tabs-border)}"; },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());
export { CalciteTab as calcite_tab, CalciteTabNav as calcite_tab_nav, CalciteTabTitle as calcite_tab_title, CalciteTabs as calcite_tabs };
