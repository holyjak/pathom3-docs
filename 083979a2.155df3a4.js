(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var c=n(0),a=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),h=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=h(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=h(n),u=c,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:c,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return h}));var c=n(2),a=n(6),r=(n(0),n(101)),o={id:"cache",title:"Cache"},s={unversionedId:"cache",id:"cache",isDocsHomePage:!1,title:"Cache",description:"Pathom uses caching to optimize the speed of critical points in the resolution process.",source:"@site/docs/cache.mdx",slug:"/cache",permalink:"/docs/cache",editUrl:"https://github.com/wilkerlucio/pathom3-docs/edit/master/docs/cache.mdx",version:"current",sidebar:"docs",previous:{title:"Environment",permalink:"/docs/environment"},next:{title:"Placeholders",permalink:"/docs/placeholders"}},i=[{value:"What Pathom caches",id:"what-pathom-caches",children:[{value:"Planning computation",id:"planning-computation",children:[]},{value:"Resolver call",id:"resolver-call",children:[]}]},{value:"Cache lifecycle",id:"cache-lifecycle",children:[{value:"EQL Process",id:"eql-process",children:[]},{value:"Smart Maps",id:"smart-maps",children:[]}]},{value:"The cache protocol",id:"the-cache-protocol",children:[]},{value:"Persistent caching",id:"persistent-caching",children:[{value:"Using <code>core.cache</code>",id:"using-corecache",children:[]}]},{value:"Custom cache store per resolver",id:"custom-cache-store-per-resolver",children:[]},{value:"Disable cache",id:"disable-cache",children:[{value:"Turn cache off",id:"turn-cache-off",children:[]},{value:"Per resolver",id:"per-resolver",children:[]}]},{value:"Naming convention",id:"naming-convention",children:[]}],l={rightToc:i};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Pathom uses caching to optimize the speed of critical points in the resolution process."),Object(r.b)("h2",{id:"what-pathom-caches"},"What Pathom caches"),Object(r.b)("p",null,"There are two things that Pathom caches:"),Object(r.b)("h3",{id:"planning-computation"},"Planning computation"),Object(r.b)("p",null,"When there is a query, Pathom ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/planner"}),"computes the plan")," and then runs it."),Object(r.b)("p",null,"The plan can be simple or complex. It takes into consideration the query, indexes, and\navailable data. Given those are the same, it hits the cache."),Object(r.b)("p",null,"This cache is set in the key ",Object(r.b)("inlineCode",{parentName:"p"},"::pcp/plan-cache*")," in the environment. You can set it\nwith the helper ",Object(r.b)("inlineCode",{parentName:"p"},"pcp/with-plan-cache"),"."),Object(r.b)("p",null,"Here is an example to setup a durable cache for the planner, which I recommend as a\ngood default:"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-clojure"}),'(ns com.wsscode.pathom3.docs.demos.core.cache\n  (:require [com.wsscode.pathom3.connect.indexes :as pci]\n            [com.wsscode.pathom3.connect.operation :as pco]\n            [com.wsscode.pathom3.connect.planner :as pcp]\n            [com.wsscode.pathom3.interface.eql :as p.eql]))\n\n(pco/defresolver full-name [{::keys [first-name last-name]}]\n  {::full-name (str first-name " " last-name)})\n\n; setup with defonce to keep during reloads\n(defonce plan-cache* (atom {}))\n\n(def env\n  (-> (pci/register full-name)\n      (pcp/with-plan-cache plan-cache*)))\n\n(defn handle [tx]\n  (p.eql/process env tx))\n')),Object(r.b)("h3",{id:"resolver-call"},"Resolver call"),Object(r.b)("p",null,"Pathom caches the resolver result based on the resolver name, input, and parameters."),Object(r.b)("p",null,"This cache is set in the key ",Object(r.b)("inlineCode",{parentName:"p"},"::pcr/resolver-cache*")," in the environment. You can set it\nwith the helper ",Object(r.b)("inlineCode",{parentName:"p"},"pcr/with-resolver-cache"),"."),Object(r.b)("h2",{id:"cache-lifecycle"},"Cache lifecycle"),Object(r.b)("p",null,"By default, the environment has no cache, but the standard interfaces have their own\ncache definitions."),Object(r.b)("h3",{id:"eql-process"},"EQL Process"),Object(r.b)("p",null,"When you use the EQL interface, the runner automatically creates caches for planning\nand resolvers, these caches live for that transaction process and then are discarded."),Object(r.b)("h3",{id:"smart-maps"},"Smart Maps"),Object(r.b)("p",null,"Smart maps use a durable form of the cache by default. The smart maps add the caches\nat initialization, and they are persisted when variations of that Smart Map are created."),Object(r.b)("p",null,"This means, for example, when you ",Object(r.b)("inlineCode",{parentName:"p"},"assoc")," on a Smart Map, the new returned Smart Map still shares the same plan and resolver caches."),Object(r.b)("h2",{id:"the-cache-protocol"},"The cache protocol"),Object(r.b)("p",null,"In the namespace ",Object(r.b)("inlineCode",{parentName:"p"},"com.wsscode.pathom3.cache")," you can find the ",Object(r.b)("inlineCode",{parentName:"p"},"CacheStore")," protocol."),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-clojure"}),"(defprotocol CacheStore\n  (-cache-lookup-or-miss [this cache-key f])\n  (-cache-find [this cache-key]))\n")),Object(r.b)("p",null,"This protocol is implemented by Pathom to ",Object(r.b)("inlineCode",{parentName:"p"},"Atom")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Volatile"),", so you can use any\nof those as a cache-store."),Object(r.b)("h2",{id:"persistent-caching"},"Persistent caching"),Object(r.b)("p",null,"There are cases in which a persistent cache can same some processing time in the application."),Object(r.b)("p",null,"For example, a Pathom server handling API requests for serving some UI. This kind of\nservice tends to receive the same queries over and over. Instead of re-planning on every\nquery, you can use a more persistent cache to re-use this computation across requests."),Object(r.b)("p",null,"Here is an example of making such a configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-clojure"}),"; define the query, use atom to ensure proper concurrent access\n(defonce persistent-cache-plan* (atom {}))\n\n(def env\n  (-> (pci/register my-resolvers)\n      (pcp/with-plan-cache persistent-cache-plan*)))\n\n(defn handle-request [tx]\n  (p.eql/process env tx))\n")),Object(r.b)("p",null,"This way, Pathom will re-use that same cache."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(c.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(c.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(c.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(c.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(c.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are sure your application won't try to concurrently write to the cache, you can\nuse a ",Object(r.b)("inlineCode",{parentName:"p"},"(volatile! {})")," instead of the atom to gain some performance."))),Object(r.b)("p",null,"A concern with this approach is that this cache will grow forever, and depending on\nhow variadic the requests are, that can turn into an issue. To solve this, we can\nuse a more robust cache strategy."),Object(r.b)("h3",{id:"using-corecache"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},"core.cache")),Object(r.b)("p",null,"If you are running Pathom on the JVM, you use the excellent ",Object(r.b)("a",Object(c.a)({parentName:"p"},{href:"https://github.com/clojure/core.cache/"}),"core.cache"),"\nlibrary to implement more robust cache stores."),Object(r.b)("p",null,"To demonstrate it, we will make a persistent cache using a ",Object(r.b)("inlineCode",{parentName:"p"},"LRUCache")," from core.cached:"),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-clojure"}),'(ns com.wsscode.pathom3.docs.demos.core.cache\n  (:require [clojure.core.cache.wrapped :as cc]\n            [com.wsscode.pathom3.cache :as p.cache]\n            [com.wsscode.pathom3.connect.indexes :as pci]\n            [com.wsscode.pathom3.connect.operation :as pco]\n            [com.wsscode.pathom3.connect.planner :as pcp]\n            [com.wsscode.pathom3.interface.eql :as p.eql]))\n\n(pco/defresolver full-name [{::keys [first-name last-name]}]\n  {::full-name (str first-name " " last-name)})\n\n; create a new record type to use core.cache implementation\n(defrecord CoreCacheStore [cache-atom]\n  p.cache/CacheStore\n  (-cache-lookup-or-miss [_ cache-key f]\n    (cc/lookup-or-miss cache-atom cache-key (fn [_] (f))))\n\n  (-cache-find [_ cache-key]\n    (find @cache-atom cache-key)))\n\n; helper to start a new LRU cache\n(defn lru-cache [base threshold]\n  (-> (cc/lru-cache-factory base :threshold threshold)\n      (->CoreCacheStore)))\n\n; create a cache holds only the latest 100 read plans\n(defonce plan-cache* (lru-cache {} 100))\n\n(def env\n  (-> (pci/register full-name)\n      (pcp/with-plan-cache plan-cache*)))\n\n(defn handle [tx]\n  (p.eql/process env tx))\n')),Object(r.b)("h2",{id:"custom-cache-store-per-resolver"},"Custom cache store per resolver"),Object(r.b)("p",null,"You may want to have different caches for different resolvers, for this case you can\nset the ",Object(r.b)("inlineCode",{parentName:"p"},"::pco/cache-store")," configuration on your resolver, and it will try to use\nthe cache from the keyword mentioned there."),Object(r.b)("pre",null,Object(r.b)("code",Object(c.a)({parentName:"pre"},{className:"language-clojure"}),'(pco/defresolver on-custom-cache [{:keys [foo]}]\n  {::pco/cache-store ::my-cache*}\n  {:bar "baz"})\n\n(def env\n  (-> (pci/register on-custom-cache)\n      (assoc ::my-cache* (atom {}))))\n')),Object(r.b)("p",null,"You need to provide this custom cache, otherwise it will fallback to the default\nresolver cache."),Object(r.b)("h2",{id:"disable-cache"},"Disable cache"),Object(r.b)("p",null,"If you want to disable the cache, here is how."),Object(r.b)("h3",{id:"turn-cache-off"},"Turn cache off"),Object(r.b)("p",null,"To completely turn off a cache, set it with a ",Object(r.b)("inlineCode",{parentName:"p"},"nil")," value. This way, Pathom will keep the\n",Object(r.b)("inlineCode",{parentName:"p"},"nil")," value, and on an attempt to use the cache, it will skip it."),Object(r.b)("h3",{id:"per-resolver"},"Per resolver"),Object(r.b)("p",null,"You can disable the resolver cache per resolver. To do so, set ",Object(r.b)("inlineCode",{parentName:"p"},"::pco/cache? false")," in\nthe resolver configuration."),Object(r.b)("h2",{id:"naming-convention"},"Naming convention"),Object(r.b)("p",null,"Pathom uses the suffix ",Object(r.b)("inlineCode",{parentName:"p"},"-cache*")," for all cache attributes. Its recommend that users\nalso follow this pattern for reading consistency."))}h.isMDXComponent=!0}}]);