globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"19-yHADZo6lKl+mSNPU9098EiqzPCE\"",
		"mtime": "2026-06-13T13:20:12.003Z",
		"size": 25,
		"path": "../public/robots.txt"
	},
	"/assets/founder-2-yKFf51nu.jpg": {
		"type": "image/jpeg",
		"etag": "\"179ca-ryG6H4g5a0hQPFZ7TJhw+r6cPvM\"",
		"mtime": "2026-07-09T20:06:47.309Z",
		"size": 96714,
		"path": "../public/assets/founder-2-yKFf51nu.jpg"
	},
	"/assets/founder-1-k2Nh_vTm.jpg": {
		"type": "image/jpeg",
		"etag": "\"87ca-+LjTj/j5LeYJ+QCEBNXiyjGSN8Y\"",
		"mtime": "2026-07-09T20:06:47.309Z",
		"size": 34762,
		"path": "../public/assets/founder-1-k2Nh_vTm.jpg"
	},
	"/assets/about-VdV7gBS6.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d0ba-Nxo8EnTOXjJurq5i48g7Zh4zC9A\"",
		"mtime": "2026-07-09T20:06:47.307Z",
		"size": 118970,
		"path": "../public/assets/about-VdV7gBS6.jpg"
	},
	"/assets/founder-3-DnSDyJkp.jpg": {
		"type": "image/jpeg",
		"etag": "\"25cc8-j1e+nLaKZtjBWJ0LQ9V5kSTHt3s\"",
		"mtime": "2026-07-09T20:06:47.309Z",
		"size": 154824,
		"path": "../public/assets/founder-3-DnSDyJkp.jpg"
	},
	"/assets/gallery-birthday-DXK1VDif.jpg": {
		"type": "image/jpeg",
		"etag": "\"17ffc-UNHLxmQCdGQUhjv1FWIk0rFVT4o\"",
		"mtime": "2026-07-09T20:06:47.312Z",
		"size": 98300,
		"path": "../public/assets/gallery-birthday-DXK1VDif.jpg"
	},
	"/assets/gallery-dining-EQejlNwd.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ca65-mzILMOvabu49R9LroX4XiEVS0UY\"",
		"mtime": "2026-07-09T20:06:47.313Z",
		"size": 117349,
		"path": "../public/assets/gallery-dining-EQejlNwd.jpg"
	},
	"/assets/gallery-engagement-BDwS5xsv.jpg": {
		"type": "image/jpeg",
		"etag": "\"1987f-RkUvTytKYquI4963UjRbULqzNLA\"",
		"mtime": "2026-07-09T20:06:47.314Z",
		"size": 104575,
		"path": "../public/assets/gallery-engagement-BDwS5xsv.jpg"
	},
	"/assets/gallery-haldi-CRTf-3dk.jpg": {
		"type": "image/jpeg",
		"etag": "\"2577a-JejVV7rmCmqF4xNTZ1QgmBIg6oc\"",
		"mtime": "2026-07-09T20:06:47.317Z",
		"size": 153466,
		"path": "../public/assets/gallery-haldi-CRTf-3dk.jpg"
	},
	"/assets/gallery-babyshower-LiVBl400.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3892d-9j5ciE5lh0gTKdS50JHWXh5oB6o\"",
		"mtime": "2026-07-09T20:06:47.311Z",
		"size": 231725,
		"path": "../public/assets/gallery-babyshower-LiVBl400.jpeg"
	},
	"/assets/gallery-floral-BkvYp1hZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b0fd-tNzbFDzhO0KCAwul+yYggkod8u8\"",
		"mtime": "2026-07-09T20:06:47.315Z",
		"size": 110845,
		"path": "../public/assets/gallery-floral-BkvYp1hZ.jpg"
	},
	"/assets/gallery-mehndi-DKfpbFG4.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c7df-9srrq7SuMQGLfjmdB6eG66CtBQM\"",
		"mtime": "2026-07-09T20:06:47.318Z",
		"size": 247775,
		"path": "../public/assets/gallery-mehndi-DKfpbFG4.jpg"
	},
	"/assets/hero-Dp2L13R7.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bcbf-PtDZLVAvz8tswKxFYFzzNwDLtl4\"",
		"mtime": "2026-07-09T20:06:47.319Z",
		"size": 244927,
		"path": "../public/assets/hero-Dp2L13R7.jpg"
	},
	"/assets/gallery-wedding-CRlyKvkr.jpg": {
		"type": "image/jpeg",
		"etag": "\"2df2b-y2MAKfEpewmkyMI/p8dRkxPyZbI\"",
		"mtime": "2026-07-09T20:06:47.318Z",
		"size": 188203,
		"path": "../public/assets/gallery-wedding-CRlyKvkr.jpg"
	},
	"/assets/routes-Cx9ZJbNl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f164-WR+a29wpE1C8UuOIbGzf8EIefig\"",
		"mtime": "2026-07-09T20:06:47.307Z",
		"size": 258404,
		"path": "../public/assets/routes-Cx9ZJbNl.js"
	},
	"/assets/styles-BExWcgDF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17e55-Ld5pwIdFZGtjfDvTes2C2bUyk3E\"",
		"mtime": "2026-07-09T20:06:47.320Z",
		"size": 97877,
		"path": "../public/assets/styles-BExWcgDF.css"
	},
	"/assets/index--WFIhIwP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b5ec-eopvx5YZrHhjXg0A+vZHIuCjqLg\"",
		"mtime": "2026-07-09T20:06:47.306Z",
		"size": 308716,
		"path": "../public/assets/index--WFIhIwP.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_h3bbD3 = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_h3bbD3
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
