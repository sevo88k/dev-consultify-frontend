! function(a) {
	var b = function() {
			window.asyncWebshims || (window.asyncWebshims = {
				cfg: [],
				ready: []
			})
		},
		c = function() {
			window.jQuery && (a(jQuery), a = function() {
				return window.webshims
			})
		};
	window.webshims = {
		setOptions: function() {
			b(), window.asyncWebshims.cfg.push(arguments)
		},
		ready: function() {
			b(), window.asyncWebshims.ready.push(arguments)
		},
		activeLang: function(a) {
			b(), window.asyncWebshims.lang = a
		},
		polyfill: function(a) {
			b(), window.asyncWebshims.polyfill = a
		},
		_curScript: function() {
			var a, b, c, d, e, f = document.currentScript;
			if (!f) {
				try {
					throw new Error("")
				} catch (g) {
					for (c = (g.sourceURL || g.stack || "").split("\n"), e = /(?:fil|htt|wid|abo|app|res)(.)+/i, b = 0; b < c.length; b++)
						if (d = c[b].match(e)) {
							c = d[0].replace(/[\:\s\(]+[\d\:\)\(\s]+$/, "");
							break
						}
				}
				for (a = document.scripts || document.getElementsByTagName("script"), b = 0; b < a.length && (!a[b].getAttribute("src") || (f = a[b], "interactive" != a[b].readyState && c != a[b].src)); b++);
			}
			return f
		}()
	}, window.webshim = window.webshims, window.webshims.timer = setInterval(c, 0), c(), "function" == typeof define && define.amd && define("polyfiller", ["jquery"], a)
}(function(a) {
	"use strict";

	function b(a) {
		return document.createElement(a)
	}
	var c, d, e = window.navigator,
		f = window.webshims,
		g = "dom-support",
		h = a.event.special,
		i = a([]),
		j = window.asyncWebshims,
		k = {},
		l = window.Object,
		m = function(a) {
			return a + "\n//# sourceURL=" + this.url
		},
		n = function(a) {
			return q.enhanceAuto || "auto" != a ? a : !1
		},
		o = {
			matchmedia: "matchMedia",
			xhr2: "filereader",
			promise: "es6",
			URL: "url"
		},
		p = "capture" in b("input");
	clearInterval(f.timer), k.advancedObjectProperties = k.objectAccessor = k.ES5 = !!("create" in l && "seal" in l), !k.ES5 || "toJSON" in Date.prototype || (k.ES5 = !1), d = a.support.hrefNormalized === !1 ? f._curScript.getAttribute("src", 4) : f._curScript.src, d = d.split("?")[0].slice(0, d.lastIndexOf("/") + 1) + "shims/", a.extend(f, {
		version: "1.16.0",
		cfg: {
			enhanceAuto: window.Audio && (!window.matchMedia || matchMedia("(min-device-width: 321px)").matches),
			waitReady: !0,
			loadStyles: !0,
			wsdoc: document,
			wspopover: {
				appendTo: "auto",
				hideOnBlur: !0
			},
			ajax: {
				crossDomain: !0
			},
			loadScript: function(b, c) {
				a.ajax(a.extend({}, q.ajax, {
					url: b,
					success: c,
					dataType: "script",
					cache: !0,
					global: !1,
					dataFilter: m
				}))
			},
			basePath: d
		},
		support: k,
		bugs: {},
		modules: {},
		features: {},
		featureList: [],
		setOptions: function(b, c) {
			"string" == typeof b && arguments.length > 1 ? q[b] = a.isPlainObject(c) ? a.extend(!0, q[b] || {}, c) : c : "object" == typeof b && a.extend(!0, q, b)
		},
		_getAutoEnhance: n,
		addPolyfill: function(b, c) {
			c = c || {};
			var d = c.f || b;
			r[d] || (r[d] = [], f.featureList.push(d), q[d] = {}), r[d].push(b), c.options = a.extend(q[d], c.options), y(b, c), c.methodNames && a.each(c.methodNames, function(a, b) {
				f.addMethodName(b)
			})
		},
		polyfill: function() {
			return function(a) {
				a || (a = f.featureList), "string" == typeof a && (a = a.split(" "));
				return f._polyfill(a)
			}
		}(),
		_polyfill: function(b) {
			var d, e, f = [];
			c.run || (d = -1 !== a.inArray("forms-ext", b), c(), e = d && !v["form-number-date-ui"].test() || !p && -1 !== a.inArray("mediacapture", b), d && -1 == a.inArray("forms", b) && b.push("forms"), q.loadStyles && w.loadCSS("styles/shim" + (e ? "-ext" : "") + ".css")), q.waitReady && (a.readyWait++, t(b, function() {
				a.ready(!0)
			})), a.each(b, function(a, b) {
				return b = o[b] || b, r[b] ? (b !== r[b][0] && t(r[b], function() {
					s(b, !0)
				}), void(f = f.concat(r[b]))) : void s(b, !0)
			}), x(f), a.each(b, function(a, b) {
				var c = q[b];
				c && ("mediaelement" == b && (c.replaceUI = n(c.replaceUI)) && c.plugins.unshift("mediacontrols"), c.plugins && c.plugins.length && x(q[b].plugins))
			})
		},
		reTest: function() {
			var b, c = function(c, d) {
				var e = v[d],
					f = d + "Ready";
				!e || e.loaded || (e.test && a.isFunction(e.test) ? e.test([]) : e.test) || (h[f] && delete h[f], r[e.f], b.push(d))
			};
			return function(d) {
				"string" == typeof d && (d = d.split(" ")), b = [], a.each(d, c), x(b)
			}
		}(),
		isReady: function(b, c) {
			if (b += "Ready", c) {
				if (h[b] && h[b].add) return !0;
				h[b] = a.extend(h[b] || {}, {
					add: function(a) {
						a.handler.call(this, b)
					}
				}), a(document).triggerHandler(b)
			}
			return !(!h[b] || !h[b].add) || !1
		},
		ready: function(b, c) {
			var d = arguments[2];
			if ("string" == typeof b && (b = b.split(" ")), d || (b = a.map(a.grep(b, function(a) {
					return !s(a)
				}), function(a) {
					return a + "Ready"
				})), !b.length) return void c(a, f, window, document);
			var e = b.shift(),
				g = function() {
					t(b, c, !0)
				};
			a(document).one(e, g)
		},
		capturingEvents: function(b, c) {
			document.addEventListener && ("string" == typeof b && (b = [b]), a.each(b, function(b, d) {
				var e = function(b) {
					return b = a.event.fix(b), c && f.capturingEventPrevented && f.capturingEventPrevented(b), a.event.dispatch.call(this, b)
				};
				h[d] = h[d] || {}, h[d].setup || h[d].teardown || a.extend(h[d], {
					setup: function() {
						this.addEventListener(d, e, !0)
					},
					teardown: function() {
						this.removeEventListener(d, e, !0)
					}
				})
			}))
		},
		register: function(b, c) {
			var d = v[b];
			if (!d) return void f.error("can't find module: " + b);
			d.loaded = !0;
			var e = function() {
				c(a, f, window, document, void 0, d.options), s(b, !0)
			};
			d.d && d.d.length ? t(d.d, e) : e()
		},
		c: {},
		loader: {
			addModule: function(b, c) {
				v[b] = c, c.name = c.name || b, c.c || (c.c = []), a.each(c.c, function(a, c) {
					f.c[c] || (f.c[c] = []), f.c[c].push(b)
				})
			},
			loadList: function() {
				var b = [],
					c = function(c, d) {
						"string" == typeof d && (d = [d]), a.merge(b, d), w.loadScript(c, !1, d)
					},
					d = function(c, d) {
						if (s(c) || -1 != a.inArray(c, b)) return !0;
						var e, f = v[c];
						return f ? (e = f.test && a.isFunction(f.test) ? f.test(d) : f.test, e ? (s(c, !0), !0) : !1) : !0
					},
					e = function(b, c) {
						if (b.d && b.d.length) {
							var e = function(b, e) {
								d(e, c) || -1 != a.inArray(e, c) || c.push(e)
							};
							a.each(b.d, function(b, c) {
								v[c] ? v[c].loaded || e(b, c) : r[c] && (a.each(r[c], e), t(r[c], function() {
									s(c, !0)
								}))
							}), b.noAutoCallback || (b.noAutoCallback = !0)
						}
					};
				return function(g) {
					var h, i, j, k, l = [],
						m = function(d, e) {
							return k = e, a.each(f.c[e], function(c, d) {
								return -1 == a.inArray(d, l) || -1 != a.inArray(d, b) ? (k = !1, !1) : void 0
							}), k ? (c("combos/" + k, f.c[k]), !1) : void 0
						};
					for (i = 0; i < g.length; i++) h = v[g[i]], h && !d(h.name, g) && (h.css && q.loadStyles && w.loadCSS(h.css), h.loadInit && h.loadInit(), e(h, g), h.loaded || l.push(h.name), h.loaded = !0);
					for (i = 0, j = l.length; j > i; i++) k = !1, h = l[i], -1 == a.inArray(h, b) && ("noCombo" != q.debug && a.each(v[h].c, m), k || c(v[h].src || h, h))
				}
			}(),
			makePath: function(a) {
				return -1 != a.indexOf("//") || 0 === a.indexOf("/") ? a : (-1 == a.indexOf(".") && (a += ".js"), q.addCacheBuster && (a += q.addCacheBuster), q.basePath + a)
			},
			loadCSS: function() {
				var b, c = {};
				return function(d) {
					d = this.makePath(d), c[d] || (b = b || a("link, style")[0] || a("script")[0], c[d] = 1, a('<link rel="stylesheet" />').insertBefore(b).attr({
						href: d
					}))
				}
			}(),
			loadScript: function() {
				var b = {};
				return function(c, d, e, f) {
					if (f || (c = w.makePath(c)), !b[c]) {
						var g = function() {
							d && d(), e && ("string" == typeof e && (e = e.split(" ")), a.each(e, function(a, b) {
								v[b] && (v[b].afterLoad && v[b].afterLoad(), s(v[b].noAutoCallback ? b + "FileLoaded" : b, !0))
							}))
						};
						b[c] = 1, q.loadScript(c, g, a.noop)
					}
				}
			}()
		}
	});
	var q = f.cfg,
		r = f.features,
		s = f.isReady,
		t = f.ready,
		u = f.addPolyfill,
		v = f.modules,
		w = f.loader,
		x = w.loadList,
		y = w.addModule,
		z = f.bugs,
		A = [],
		B = {
			warn: 1,
			error: 1
		},
		C = a.fn,
		D = b("video");
	f.addMethodName = function(a) {
			a = a.split(":");
			var b = a[1];
			1 == a.length ? (b = a[0], a = a[0]) : a = a[0], C[a] = function() {
				return this.callProp(b, arguments)
			}
		}, C.callProp = function(b, c) {
			var d;
			return c || (c = []), this.each(function() {
				var e = a.prop(this, b);
				if (e && e.apply) {
					if (d = e.apply(this, c), void 0 !== d) return !1
				} else f.warn(b + " is not a method of " + this)
			}), void 0 !== d ? d : this
		}, f.activeLang = function() {
			"language" in e || (e.language = e.browserLanguage || "");
			var b = a.attr(document.documentElement, "lang") || e.language;
			return t("webshimLocalization", function() {
					f.activeLang(b)
				}),
				function(a) {
					if (a)
						if ("string" == typeof a) b = a;
						else if ("object" == typeof a) {
						var c = arguments,
							d = this;
						t("webshimLocalization", function() {
							f.activeLang.apply(d, c)
						})
					}
					return b
				}
		}(), f.errorLog = [], a.each(["log", "error", "warn", "info"], function(a, b) {
			f[b] = function(a) {
				(B[b] && q.debug !== !1 || q.debug) && (f.errorLog.push(a), window.console && console.log && console[console[b] ? b : "log"](a))
			}
		}),
		function() {
			a.isDOMReady = a.isReady;
			var b = function() {
				a.isDOMReady = !0, s("DOM", !0), setTimeout(function() {
					s("WINDOWLOAD", !0)
				}, 9999)
			};
			c = function() {
				if (!c.run) {
					if (!a.isDOMReady && q.waitReady) {
						var d = a.ready;
						a.ready = function(a) {
							return a !== !0 && document.body && b(), d.apply(this, arguments)
						}, a.ready.promise = d.promise
					}
					q.readyEvt ? a(document).one(q.readyEvt, b) : a(b)
				}
				c.run = !0
			}, a(window).on("load", function() {
				b(), setTimeout(function() {
					s("WINDOWLOAD", !0)
				}, 9)
			});
			var d = [],
				e = function() {
					1 == this.nodeType && f.triggerDomUpdate(this)
				};
			a.extend(f, {
				addReady: function(a) {
					var b = function(b, c) {
						f.ready("DOM", function() {
							a(b, c)
						})
					};
					d.push(b), q.wsdoc && b(q.wsdoc, i)
				},
				triggerDomUpdate: function(b) {
					if (!b || !b.nodeType) return void(b && b.jquery && b.each(function() {
						f.triggerDomUpdate(this)
					}));
					var c = b.nodeType;
					if (1 == c || 9 == c) {
						var e = b !== document ? a(b) : i;
						a.each(d, function(a, c) {
							c(b, e)
						})
					}
				}
			}), C.clonePolyfill = C.clone, C.htmlPolyfill = function(b) {
				if (!arguments.length) return a(this.clonePolyfill()).html();
				var c = C.html.call(this, b);
				return c === this && a.isDOMReady && this.each(e), c
			}, C.jProp = function() {
				return this.pushStack(a(C.prop.apply(this, arguments) || []))
			}, a.each(["after", "before", "append", "prepend", "replaceWith"], function(b, c) {
				C[c + "Polyfill"] = function(b) {
					return b = a(b), C[c].call(this, b), a.isDOMReady && b.each(e), this
				}
			}), a.each(["insertAfter", "insertBefore", "appendTo", "prependTo", "replaceAll"], function(b, c) {
				C[c.replace(/[A-Z]/, function(a) {
					return "Polyfill" + a
				})] = function() {
					return C[c].apply(this, arguments), a.isDOMReady && f.triggerDomUpdate(this), this
				}
			}), C.updatePolyfill = function() {
				return a.isDOMReady && f.triggerDomUpdate(this), this
			}, a.each(["getNativeElement", "getShadowElement", "getShadowFocusElement"], function(a, b) {
				C[b] = function() {
					return this.pushStack(this)
				}
			})
		}(), l.create && (f.objectCreate = function(b, c, d) {
			var e = l.create(b);
			return d && (e.options = a.extend(!0, {}, e.options || {}, d), d = e.options), e._create && a.isFunction(e._create) && e._create(d), e
		}), y("swfmini", {
			test: function() {
				return window.swfobject && !window.swfmini && (window.swfmini = window.swfobject), "swfmini" in window
			},
			c: [16, 7, 2, 8, 1, 12, 23]
		}), v.swfmini.test(), y("sizzle", {
			test: a.expr.filters
		}), u("es5", {
			test: !(!k.ES5 || !Function.prototype.bind),
			d: ["sizzle"]
		}), u("dom-extend", {
			f: g,
			noAutoCallback: !0,
			d: ["es5"],
			c: [16, 7, 2, 15, 30, 3, 8, 4, 9, 10, 25, 31, 34]
		}), b("picture"), u("picture", {
			test: "picturefill" in window || !!window.HTMLPictureElement || "respimage" in window,
			d: ["matchMedia"],
			c: [18],
			loadInit: function() {
				s("picture", !0)
			}
		}), u("matchMedia", {
			test: !(!window.matchMedia || !matchMedia("all").addListener),
			c: [18]
		}), u("sticky", {
			test: -1 != (a(b("b")).attr("style", "position: -webkit-sticky; position: sticky").css("position") || "").indexOf("sticky"),
			d: ["es5", "matchMedia"]
		}), u("es6", {
			test: !!(Math.imul && Number.MIN_SAFE_INTEGER && l.is && window.Promise && Promise.all),
			d: ["es5"]
		}), u("geolocation", {
			test: "geolocation" in e,
			options: {
				destroyWrite: !0
			},
			c: [21]
		}),
		function() {
			u("canvas", {
				src: "excanvas",
				test: "getContext" in b("canvas"),
				options: {
					type: "flash"
				},
				noAutoCallback: !0,
				loadInit: function() {
					var a = this.options.type;
					!a || -1 === a.indexOf("flash") || v.swfmini.test() && !swfmini.hasFlashPlayerVersion("9.0.0") || (this.src = "flash" == a ? "FlashCanvas/flashcanvas" : "FlashCanvasPro/flashcanvas")
				},
				methodNames: ["getContext"],
				d: [g]
			})
		}();
	var E = "getUserMedia" in e;
	u("usermedia-core", {
			f: "usermedia",
			test: E && !!window.URL,
			d: ["url", g]
		}), u("usermedia-shim", {
			f: "usermedia",
			test: !!(E || e.webkitGetUserMedia || e.mozGetUserMedia || e.msGetUserMedia),
			d: ["url", "mediaelement", g]
		}), u("mediacapture", {
			test: p,
			d: ["swfmini", "usermedia", g, "filereader", "forms", "canvas"]
		}),
		function() {
			var c, d, h = "form-shim-extend",
				i = "formvalidation",
				j = "form-number-date-api",
				l = !1,
				m = !1,
				o = !1,
				p = {},
				r = b("progress"),
				s = b("output"),
				t = function() {
					var d, f, g = "1(",
						j = b("input");
					if (f = a('<fieldset><textarea required="" /></fieldset>')[0], k.inputtypes = p, a.each(["range", "date", "datetime-local", "month", "color", "number"], function(a, b) {
							j.setAttribute("type", b), p[b] = j.type == b && (j.value = g) && j.value != g
						}), k.datalist = !!("options" in b("datalist") && window.HTMLDataListElement), k[i] = "checkValidity" in j, k.fieldsetelements = "elements" in f, k.fieldsetdisabled = "disabled" in f) {
						try {
							f.querySelector(":invalid") && (f.disabled = !0, d = !f.querySelector(":invalid") && f.querySelector(":disabled"))
						} catch (n) {}
						k.fieldsetdisabled = !!d
					}
					if (k[i] && (m = !(k.fieldsetdisabled && k.fieldsetelements && "value" in r && "value" in s), o = m && /Android/i.test(e.userAgent), l = window.opera || z.bustedValidity || m || !k.datalist, !l && p.number)) {
						l = !0;
						try {
							j.type = "number", j.value = "", j.stepUp(), l = "1" != j.value
						} catch (q) {}
					}
					return z.bustedValidity = l, c = k[i] && !l ? "form-native-extend" : h, t = a.noop, !1
				},
				w = function(b) {
					var c = !0;
					return b._types || (b._types = b.types.split(" ")), a.each(b._types, function(a, b) {
						return b in p && !p[b] ? (c = !1, !1) : void 0
					}), c
				};
			f.validationMessages = f.validityMessages = {
				langSrc: "i18n/formcfg-",
				availableLangs: "ar bg ca cs el es fa fi fr he hi hu it ja lt nl no pl pt pt-BR pt-PT ru sv zh-CN zh-TW".split(" ")
			}, f.formcfg = a.extend({}, f.validationMessages), f.inputTypes = {}, u("form-core", {
				f: "forms",
				test: t,
				d: ["es5"],
				options: {
					placeholderType: "value",
					messagePopover: {},
					list: {
						popover: {
							constrainWidth: !0
						}
					},
					iVal: {
						sel: ".ws-validate",
						handleBubble: "hide",
						recheckDelay: 400
					}
				},
				methodNames: ["setCustomValidity", "checkValidity", "setSelectionRange"],
				c: [16, 7, 2, 8, 1, 15, 30, 3, 31]
			}), d = q.forms, u("form-native-extend", {
				f: "forms",
				test: function(b) {
					return t(), !k[i] || l || -1 == a.inArray(j, b || []) || v[j].test()
				},
				d: ["form-core", g, "form-message"],
				c: [6, 5, 14, 29]
			}), u(h, {
				f: "forms",
				test: function() {
					return t(), k[i] && !l
				},
				d: ["form-core", g, "sizzle"],
				c: [16, 15, 28]
			}), u(h + "2", {
				f: "forms",
				test: function() {
					return t(), k[i] && !m
				},
				d: [h],
				c: [27]
			}), u("form-message", {
				f: "forms",
				test: function(a) {
					return t(), !(d.customMessages || !k[i] || l || !v[c].test(a))
				},
				d: [g],
				c: [16, 7, 15, 30, 3, 8, 4, 14, 28]
			}), u(j, {
				f: "forms-ext",
				options: {
					types: "date time range number"
				},
				test: function() {
					t();
					var a = !l;
					return a && (a = w(this.options)), a
				},
				methodNames: ["stepUp", "stepDown"],
				d: ["forms", g],
				c: [6, 5, 17, 14, 28, 29, 33]
			}), y("range-ui", {
				options: {},
				noAutoCallback: !0,
				test: function() {
					return !!C.rangeUI
				},
				d: ["es5"],
				c: [6, 5, 9, 10, 17, 11]
			}), u("form-number-date-ui", {
				f: "forms-ext",
				test: function() {
					var a = this.options;
					return a.replaceUI = n(a.replaceUI), t(), !a.replaceUI && o && (a.replaceUI = !0), !a.replaceUI && w(a)
				},
				d: ["forms", g, j, "range-ui"],
				options: {
					widgets: {
						calculateWidth: !0,
						animate: !0
					}
				},
				c: [6, 5, 9, 10, 17, 11]
			}), u("form-datalist", {
				f: "forms",
				test: function() {
					return t(), o && (d.customDatalist = !0), k.datalist && !d.fD
				},
				d: ["form-core", g],
				c: [16, 7, 6, 2, 9, 15, 30, 31, 28, 33]
			})
		}();
	var F = "FileReader" in window && "FormData" in window;
	return u("filereader-xhr", {
			f: "filereader",
			test: F,
			d: [g, "swfmini"],
			c: [25, 27]
		}), u("canvas-blob", {
			f: "filereader",
			methodNames: ["toBlob"],
			test: !(F && !b("canvas").toBlob)
		}), u("details", {
			test: "open" in b("details"),
			d: [g],
			options: {
				text: "Details"
			},
			c: [21, 22]
		}), u("url", {
			test: function() {
				var a = !1;
				try {
					a = new URL("b", "http://a"), a = !(!a.searchParams || "http://a/b" != a.href)
				} catch (b) {}
				return a
			},
			d: ["es5"]
		}),
		function() {
			f.mediaelement = {};
			var c = b("track");
			if (k.mediaelement = "canPlayType" in D, k.texttrackapi = "addTextTrack" in D, k.track = "kind" in c, b("audio"), !(z.track = !k.texttrackapi)) try {
				z.track = !("oncuechange" in D.addTextTrack("metadata"))
			} catch (d) {}
			u("mediaelement-core", {
				f: "mediaelement",
				noAutoCallback: !0,
				options: {
					jme: {},
					plugins: [],
					vars: {},
					params: {},
					attrs: {},
					changeSWF: a.noop
				},
				methodNames: ["play", "pause", "canPlayType", "mediaLoad:load"],
				d: ["swfmini"],
				c: [16, 7, 2, 8, 1, 12, 13, 23]
			}), u("mediaelement-jaris", {
				f: "mediaelement",
				d: ["mediaelement-core", g],
				test: function() {
					var a = this.options;
					return !k.mediaelement || f.mediaelement.loadSwf ? !1 : (a.preferFlash && !v.swfmini.test() && (a.preferFlash = !1), !(a.preferFlash && swfmini.hasFlashPlayerVersion("11.3")))
				},
				c: [21, 25]
			}), u("track", {
				options: {
					positionDisplay: !0,
					override: z.track
				},
				test: function() {
					var a = this.options;
					return a.override = n(a.override), !a.override && !z.track
				},
				d: ["mediaelement", g],
				methodNames: ["addTextTrack"],
				c: [21, 12, 13, 22, 34]
			}), y("jmebase", {
				src: "jme/base",
				c: [98, 99, 97]
			}), a.each([
				["mediacontrols", {
					c: [98, 99],
					css: "jme/controls.css"
				}],
				["playlist", {
					c: [98, 97]
				}],
				["alternate-media"]
			], function(b, c) {
				y(c[0], a.extend({
					src: "jme/" + c[0],
					d: ["jmebase"]
				}, c[1]))
			}), y("track-ui", {
				d: ["track", g]
			})
		}(), u("feature-dummy", {
			test: !0,
			loaded: !0,
			c: A
		}), f.$ = a, a.webshims = f, a.webshim = webshim, f.callAsync = function() {
			f.callAsync = a.noop, j && (j.cfg && (j.cfg.length || (j.cfg = [
				[j.cfg]
			]), a.each(j.cfg, function(a, b) {
				f.setOptions.apply(f, b)
			})), j.ready && a.each(j.ready, function(a, b) {
				f.ready.apply(f, b)
			}), j.lang && f.activeLang(j.lang), "polyfill" in j && f.polyfill(j.polyfill)), f.isReady("jquery", !0)
		}, f.callAsync(), f
});