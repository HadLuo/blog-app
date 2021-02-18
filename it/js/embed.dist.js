/*! livere.tower 2020-10-19, 2:04:35 PM */
var LivereTower = function() {
	"use strict";

	function serial(a) {
		return a + "-" + Math.floor(1e3 * Math.random())
	}

	function addEventListener(a, b, c) {
		c = c || window, (bound[a] || (bound[a] = [])).push(b), c.addEventListener ? c.addEventListener(a, b) : c.attachEvent &&
			c.attachEvent("on" + a, b)
	}

	function removeEventListener(a, b, c) {
		c = c || window, c.removeEventListener ? c.removeEventListener(a, b) : c.detachEvent && c.detachEvent("on" + a, b)
	}

	function isMobile() {
		var a = !1;
		return function(b) {
			(
				/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
				.test(b) ||
				/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
				.test(b.substr(0, 4))) && (a = !0)
		}(navigator.userAgent || navigator.vendor || window.opera), a
	}

	function postMessage(a, b) {
		if (a && b && !isRestrictIEVersion(7)) return a.postMessage(JSON.stringify(b), "*")
	}

	function animateScroll(a, b) {
		function c(a) {
			return a >= offset()
		}

		function d(a) {
			return a <= offset()
		}

		function e() {
			return clearInterval(get("timer"))
		}
		set("timer", setInterval(function() {
			return (b ? c(a) : d(a)) ? (clearInterval(get("timer")), set("timer", null)) : (setTimeout(e, 1e3), window.scrollTo(
				0, b ? offset() - 100 : offset() + 100))
		}, 1))
	}

	function isRestrictIEVersion(a) {
		if (a) {
			var b = (get("browser") ? get("browser") : setBrowser()).split(" ")[0],
				c = Number(get("browser").split(" ")[1]);
			return "MSIE" === b && !(c && c > a)
		}
	}

	function setBrowser() {
		return set("browser", function() {
			var a, b = navigator.userAgent,
				c = b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
			return /trident/i.test(c[1]) ? (a = /\brv[ :]+(\d+)/g.exec(b) || [], "IE " + (a[1] || "")) : "Chrome" === c[1] &&
				null != (a = b.match(/\bOPR\/(\d+)/)) ? "Opera " + a[1] : (c = c[2] ? [c[1], c[2]] : [navigator.appName,
					navigator.appVersion, "-?"
				], null != (a = b.match(/version\/(\d+)/i)) && c.splice(1, 1, a[1]), c.join(" "))
		}())
	}

	function isObjectPropertiesNull(a) {
		for (var b in a)
			if ("string" != typeof b || !a[b] && 0 !== a[b]) return !0;
		return !1
	}

	function hasProtocol(a) {
		return new RegExp("^(http|https)://", "i").test(a)
	}

	function search(a, b, c) {
		return a < 1 ? c : "object" == typeof c ? search(a - 1, b, c[b[b.length - a]]) : void 0
	}

	function get(a) {
		var b = variables[a],
			a = a.split(".");
		return "object" == typeof a && a.length > 1 && (b = search(a.length, a, variables)), b
	}

	function set(a, b) {
		if ("object" != typeof a || b) return variables[a] = b, get(a);
		for (var c in a) variables[c] = a[c]
	}

	function warning(a) {
		console.log(["WARN: ", a].join(""))
	}

	function error(a) {
		throw ["ERROR: ", a].join("")
	}

	function template(a, b) {
		var c = ["comment", "sidebar", "check"];
		if (a && !(c.indexOf(a) < 0)) return function(a, b) {
			var c = document.createElement("iframe"),
				d = get("baseURI") + a + "/" + b.id;
			return b.uuid = uuid, c.title = "livere-" + a, c.scrolling = "no", c.async = !0, c.frameBorder = 0, c.allowTransparency =
				"true", c.src = "check" === a ? "https://101.livere.co.kr/html/systemCheck.html" : concatURI(d, b, !0),
				isRestrictIEVersion(7) && (c.scrolling = "auto", c.height = "1000px"), c
		}(a, b)
	}

	function concatURI(a, b, c) {
		var d = "?";
		for (var e in b) b[e] && (d += "?" !== d ? "&" : "", d += e + "=" + encodeURIComponent(b[e]));
		return a + d + (c ? "" : "callback=?")
	}

	function offset() {
		return window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
	}

	function getCommentOffset() {
		var a = get("lv_comment"),
			b = a.ownerDocument,
			c = b.documentElement,
			d = a.getBoundingClientRect(),
			e = b.body,
			f = window,
			g = c.clientTop || e.clientTop || 0,
			h = c.clientLeft || e.clientLeft || 0,
			i = f.pageYOffset || e.scrollTop,
			j = f.pageXOffset || e.scrollLeft;
		return {
			top: d.top + i - g,
			left: d.left + j - h
		}
	}

	function getPosition(a) {
		for (var b = 0, c = 0; a;) {
			if ("BODY" == a.tagName) {
				var d = a.scrollLeft || document.documentElement.scrollLeft,
					e = a.scrollTop || document.documentElement.scrollTop;
				b += a.offsetLeft - d + a.clientLeft, c += a.offsetTop - e + a.clientTop
			} else b += a.offsetLeft - a.scrollLeft + a.clientLeft, c += a.offsetTop - a.scrollTop + a.clientTop;
			a = a.offsetParent
		}
		return {
			x: b,
			y: c
		}
	}

	function getWindowHeight() {
		var a = void 0 !== window.pageXOffset,
			b = "CSS1Compat" === (document.compatMode || "");
		a ? window.pageXOffset : b ? document.documentElement.scrollLeft : document.body.scrollLeft;
		return a ? window.pageYOffset : b ? document.documentElement.scrollTop : document.body.scrollTop
	}

	function request(a, b, c) {
		if (a) {
			var d = "undefined" != typeof XDomainRequest && -1 == navigator.appVersion.indexOf("MSIE 1");
			if (d) {
				var e = new XDomainRequest,
					f = a.split(":").slice(1);
				a = 0 === f.length ? a : f.join(":")
			} else var e = new XMLHttpRequest;
			if (e.open(b.method && b.method.toUpperCase() || "GET", a), d) e.onload = function() {
				c && "function" == typeof c && c(e.responseText)
			}, e.send(b.data);
			else {
				if (b.header) {
					for (var g in b.header) var h = b.header[g];
					e.setRequestHeader(g, h)
				}
				e.onreadystatechange = function() {
					4 == e.readyState && 200 == e.status ? c && "function" == typeof c && c(e.responseText) : 4 == e.readyState && e
						.status
				}, e.send(b.data)
			}
		}
	}

	function requestLog(a) {
		var b, c = config.parse(),
			d = atob(c.uid).split("/");
		try {
			b = unescape(decodeURIComponent(c.title))
		} catch (a) {
			b = c.title
		}
		var e = {
			title: b,
			url: c.site,
			consumer_seq: +d[0],
			livere_seq: +d[1],
			livere_referer: c.refer,
			sender: "tower",
			uuid: uuid
		};
		for (var f in e) a[f] = e[f];
		request("https://saluton.cizion.com/livere", {
			method: "post",
			header: {
				"Content-Type": "application/json"
			},
			data: JSON.stringify(a)
		})
	}

	function getConsumer(a, b) {
		var c = config.parse();
		request(LIVEREMEURL + "v1/consumer?consumerSeq=" + a + "&refer=" + c.refer, {
			method: "GET",
			header: {
				"Content-Type": "application/json"
			},
			dataType: "jsonp"
		}, function(d) {
			var e = d ? JSON.parse(d) : null;
			e && !0 === e.consumer.isMedia && (!1 === e.redisRepCheck ? (Object.assign(c, {
				consumerSeq: a,
				livereSeq: b
			}), c.title = c.titleString, createRep(c)) : !1 === e.redisMetaCheck && createMeta(c, b))
		})
	}

	function createRep(a) {
		var b = "";
		Object.keys(a).map(function(c) {
			a[c] = null === a[c] ? "" : a[c], b && (b += "&"), b += c + "=" + a[c]
		}), request(LIVEREMEURL + "v1/rep", {
			method: "POST",
			header: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			dataType: "jsonp",
			data: b
		}, function(b) {
			return createMeta(a, a.livereSeq), b
		})
	}

	function createMeta(a, b) {
		var c = {
				refer: a.refer,
				livereSeq: b,
				category: getMetaData("category"),
				keyword: getMetaData("keyword"),
				reporter: getMetaData("reporter")
			},
			d = "";
		Object.keys(c).map(function(a) {
			c[a] = null === c[a] ? "" : c[a], d && (d += "&"), d += a + "=" + c[a]
		}), request(LIVEREMEURL + "v1/meta", {
			method: "POST",
			header: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			dataType: "jsonp",
			data: d
		}, function(a) {
			return a
		})
	}

	function getMetaData(a) {
		var b, c, d = [];
		"category" === a ? b = ["article:section", "article:section2", "article:section3"] : "keyword" === a ? c = [
			"property='article:tag'", "name='news_keywords'", "name='keywords'"
		] : "reporter" === a && (b = ["dable:author", "article:author"], c = ["name='byl'", "name='author'",
			"name='writer'", "name='twitter:creator'"
		]), b ? b.map(function(a, b) {
			var c = document.querySelector('meta[property="' + a + '"]');
			d[b] = c ? c.getAttribute("content") : null
		}) : c.map(function(a, b) {
			var c = document.querySelector("meta[" + a + "]");
			d[b] = c ? c.getAttribute("content") : null
		});
		var e = "";
		return d.map(function(a) {
			a && (e = e ? e + "||" + a : a)
		}), e
	}

	function getUUID(a) {
		var b = localStorage.getItem("livereUUID");
		if (b) uuid = b, a();
		else {
			request(LIVEREMEURL + "uuid", {
				method: "GET",
				header: {
					"Content-Type": "application/json"
				},
				dataType: "jsonp"
			}, function(b) {
				var c = b && JSON.parse(b);
				c && c.uuid ? (localStorage.setItem("livereUUID", c.uuid), uuid = c.uuid, a()) : console.log(
					"failed to issue livere uuid")
			})
		}
	}
	var livere = {},
		widget = {},
		config = {},
		LIVEREMEURL, LIVEREMEURL_PROD = "https://was.livere.me/",
		LIVEREMEURL_STAG = "https://was-stag.livere.me/";
	LIVEREMEURL = location.search.indexOf("livereMode=stag") > -1 ? LIVEREMEURL_STAG : LIVEREMEURL_PROD;
	var variables = {},
		uuid, bound = {};
	livere.__version__ = "9.1", livere.init = function() {
		function a() {
			widget.ad.load();
			var a = {
				type: "livere_pv",
				action: "loading",
				extra: {
					useEagerLoading: d || !1
				}
			};
			if (c && (a.extra.forceEagerLoading = c), requestLog(a), d) return location.search.indexOf("redirectOrigin=true") >
				-1 ? widget.oauth.call(this) : livere.start.call(this);
			livere.loading.call(this)
		}
		var b = window.livereOptions || {};
		isRestrictIEVersion(9) && config.previousVersion.call(this);
		var c = !1,
			d = b.eagerLoading || c;
		livere.attachEvents.call(this), getUUID(a)
	}, livere.loading = function() {
		function a() {
			var c = getPosition(b);
			if (isNaN(window.innerHeight) || isNaN(getWindowHeight()) || c.y - getWindowHeight() - window.innerHeight < 100)
				return removeEventListener("scroll", a, d), location.search.indexOf("redirectOrigin=true") > -1 ? widget.oauth.call(
					this) : livere.start.call(this)
		}
		var b = document.querySelector("#lv-container"),
			c = window.livereOptions || {},
			d = document.querySelector(c.scrollEventTargetSelector);
		addEventListener("scroll", a, d), a()
	}, livere.start = function() {
		set({
			baseURI: LIVEREMEURL,
			mobile: isMobile(),
			common: config.parse()
		});
		var a = window.livereOptions || {},
			b = a.components || ["comment"];
		livere.load(isRestrictIEVersion(7) ? ["comment"] : b)
	}, livere.attachEvents = function() {
		var a = {
			comment: {
				requestCustomLivereOption: function(a, b) {
					widget.comment.sendCustomLivereOption()
				},
				loaded: function(a, b) {
					widget.comment.resize(a, b.height), widget.comment.updateParams(), widget.comment.insertTaboola(b.taboola)
				},
				resize: function(a, b) {
					return widget.comment.resize(a, b.height)
				},
				highlight: function(a, b) {
					return widget.comment.highlight(a, b.top)
				},
				attached: function() {
					var a = window.livereOptions || {},
						b = document.querySelector(a.scrollEventTargetSelector);
					return addEventListener("scroll", widget.comment.parentHeight, b), widget.comment.parentHeight()
				},
				detached: function() {
					var a = window.livereOptions || {},
						b = document.querySelector(a.scrollEventTargetSelector);
					return removeEventListener("scroll", widget.comment.parentHeight, b)
				},
				scrollTo: function(a, b) {
					var c = get("lv_comment").offsetTop,
						d = c + b.position;
					return window.scrollTo(0, Math.abs(d) - 50)
				},
				scrollToQuotation: function(a, b) {
					var c = get("lv_comment").offsetTop,
						d = get("quotation"),
						e = b.direction;
					return e ? (set("quotation", offset()), offset() > 5e3 ? window.scrollTo(0, c) : animateScroll(c, e)) : d >
						5e3 ? window.scrollTo(0, d) : animateScroll(d, e)
				},
				sidebar: function(a, b) {
					if (get("lv_utils")) return widget.sidebar.open(b);
					set("sidebarParams", b), livere.load(["sidebar"])
				},
				openCardReplyPopup: function(a, b) {
					return widget.sidebar.openCardReplyPopup(b)
				},
				actionSuccess: function(a, b) {
					return widget.sidebar.actionSuccess(b)
				},
				deleteSuccess: function(a, b) {
					return widget.sidebar.deleteSuccess(b)
				},
				hooker: function(a, b) {
					var c = window.livereHooks;
					if (c) {
						var d = {
							common: function(a) {
								return c[b.type] ? c[b.type].call(this, a) : null
							},
							created: function(a) {
								return d.common(a)
							},
							write: function(a) {
								return d.common(a)
							},
							modify: function(a) {
								return d.common(a)
							},
							remove: function(a) {
								return d.common(a)
							},
							like: function(a) {
								return d.common(a)
							},
							dislike: function(a) {
								return d.common(a)
							}
						};
						return d[b.type] ? d[b.type].call(this, b.data) : null
					}
				}
			},
			sidebar: {
				inited: function(b, c) {
					return a.sidebar.hooker(b, c)
				},
				requestOpen: function(a, b) {
					return widget.sidebar.open(get("sidebarParams"))
				},
				fail: function() {
					return a.sidebar.close(this)
				},
				state: function() {
					return widget.comment.state()
				},
				close: function(a) {
					return widget.sidebar.close()
				},
				updateBlock: function(a, b) {
					return widget.comment.updateBlock(b)
				},
				closeCardReplyPopup: function(a, b) {
					return widget.sidebar.closeCardReplyPopup()
				},
				requestAction: function(a, b) {
					return widget.comment.requestAction(b)
				},
				requestDeleteReply: function(a, b) {
					return widget.comment.requestDeleteReply(b)
				},
				modifyReplyInformation: function(a, b) {
					return widget.comment.modifyReplyInformation(b)
				},
				removeReply: function(a, b) {
					return widget.comment.removeReply(b)
				},
				notifyCountUpdate: function(a) {
					return widget.sidebar.notifyCountUpdate()
				},
				hooker: function(a, b) {
					var c = window.livereHooks;
					if (c) {
						var d = {
							inited: function(a) {
								return c.sidebarInit ? c.sidebarInit.call(this, a) : null
							}
						};
						return d[b.type] ? d[b.type].call(this, b.data) : null
					}
				}
			},
			utils: {
				hooker: function(a, b) {
					var c = window.livereHooks;
					if (c) {
						var d = {
							loginData: function(a) {
								return c.loginData ? c.loginData.call(this, a) : null
							},
							sessionData: function(a) {
								return c.sessionData ? c.sessionData.call(this, a) : null
							}
						};
						return d[b.type] ? d[b.type].call(this, b.data) : null
					}
				},
				livereLoggedIn: function() {
					return widget.sidebar.getLoginData()
				},
				cityLoggedIn: function() {
					return widget.sidebar.getCurrentSessionData()
				}
			},
			popup: {
				image: function(a, b) {
					return widget.sidebar.image(b)
				}
			},
			ad: {
				resize: function(a, b) {
					return widget.ad.resize(a, b.height)
				}
			}
		};
		return addEventListener("message", function(b) {
			if (b.data && "string" == typeof b.data && b.data.match(/^{.*}$/g)) {
				var c = JSON.parse(b.data),
					d = a[c.caller];
				return !!d && d[c.e](c.caller, c.params)
			}
		})
	}, livere.load = function(a) {
		var b = get("common");
		if (!(!a instanceof Array))
			for (var c = 0; c < a.length; c++) widget[a[c]] && widget[a[c]].draw(template(a[c], b))
	}, widget.check = function() {
		var a = {};
		return a.draw = function(a) {
			if (a) {
				var b = serial("lv-check");
				a.style.cssText = "min-width:100%;width:100px;*width:100%;height:250px;overflow:hidden;border:0;z-index:124212;",
					a.id = b, document.getElementById("lv-container").appendChild(a)
			}
		}, a
	}(), widget.comment = function() {
		var a = {};
		return a.state = function() {
			var a = get("lv_comment");
			if (a) return postMessage(a.contentWindow, {
				e: "state"
			})
		}, a.updateBlock = function(a) {
			return postMessage(get("lv_comment").contentWindow, {
				e: "updateBlock",
				params: a
			})
		}, a.highlight = function(a, b) {
			var c = get("lv_comment").offsetTop;
			return window.scrollTo(0, c + b)
		}, a.parentHeight = function(a) {
			var b = offset() - getCommentOffset().top + 30,
				c = document.documentElement.clientHeight,
				d = c / 2;
			return postMessage(get("lv_comment").contentWindow, {
				e: "position",
				params: {
					top: b > 0 ? b : 0,
					center: b > 0 ? b + d : d,
					bottom: c + offset() - 100
				}
			})
		}, a.draw = function(a) {
			function b(a) {
				return set("lv_comment", document.getElementById(a))
			}
			if (a) {
				var c = serial("lv-comment");
				return a.style.cssText =
					"min-width:100%;width:100px;*width:100%;height:500px;overflow:hidden;border:0;z-index:124212;", a.id = c,
					document.getElementById("lv-container").appendChild(a), b(c)
			}
		}, a.resize = function(a, b) {
			var c = window.livereOptions,
				d = c && void 0 !== c.bottomMargin && !isNaN(Number(c.bottomMargin)) && c.bottomMargin >= 0 ? c.bottomMargin :
				40;
			return get("lv_comment").style.height = b + d + "px"
		}, a.updateParams = function() {
			var a = document.querySelector('meta[property="og:description"]');
			if (a && a.content) return postMessage(get("lv_comment").contentWindow, {
				e: "updateParams",
				params: {
					description: a.content
				}
			})
		}, a.sendCustomLivereOption = function() {
			var a = window.livereOptions;
			return postMessage(get("lv_comment").contentWindow, {
				e: "getCustomLivereOption",
				params: {
					options: a
				}
			})
		}, a.insertTaboola = function(a) {
			if (a && void 0 !== a.status && !a.status) {
				var b = "taboola-livere";
				window._taboola = window._taboola || [], _taboola.push({
						article: "auto"
					}),
					function(a, b, c, d) {
						document.getElementById(d) || (a.async = 1, a.src = c, a.id = d, b.parentNode.insertBefore(a, b))
					}(document.createElement("script"), document.getElementsByTagName("script")[0], "//cdn.taboola.com/libtrc/" + a
						.accountId + "/loader.js", "tb_loader_script"), window.performance && "function" == typeof window.performance.mark &&
					window.performance.mark("tbl_ic");
				var c = document,
					d = c.querySelector("#lv-container"),
					e = c.createElement("div");
				e.id = b, d.parentNode.insertBefore(e, d.nextSibling), window._taboola = window._taboola || [], _taboola.push({
					mode: "thumbnails-a",
					container: b,
					placement: a.placement,
					target_type: "mix"
				}), window._taboola = window._taboola || [], _taboola.push({
					flush: !0
				})
			}
		}, a.updateBlock = function(a) {
			return postMessage(get("lv_comment").contentWindow, {
				e: "updateBlock",
				params: a
			})
		}, a.requestAction = function(a) {
			return postMessage(get("lv_comment").contentWindow, {
				e: "requestAction",
				params: a
			})
		}, a.requestDeleteReply = function(a) {
			return postMessage(get("lv_comment").contentWindow, {
				e: "requestDeleteReply",
				params: a
			})
		}, a.modifyReplyInformation = function(a) {
			return postMessage(get("lv_comment").contentWindow, {
				e: "modifyReplyInformation",
				params: a
			})
		}, a.removeReply = function(a) {
			return postMessage(get("lv_comment").contentWindow, {
				e: "removeReply",
				params: a
			})
		}, a.emitPositionEvent = function(a) {
			var b = get("lv_comment");
			if (b) {
				var c = getPosition(b);
				return postMessage(b.contentWindow, {
					e: "scroll",
					params: {
						relativeX: c.x,
						relativeY: c.y,
						screenHeight: window.innerHeight
					}
				})
			}
		}, a
	}(), widget.sidebar = function() {
		var a = {};
		return a.open = function(a) {
			function b(a) {
				var b = get("lv_utils");
				if (b) return b.style.height = "100%", b.style.display = "block", postMessage(b.contentWindow, {
					e: "open",
					params: a
				})
			}

			function c(a) {
				var b = get("common.id"),
					c = LIVEREMEURL + "sidebar/" + b;
				if (!a) return top.location.href = c;
				var d = concatURI(c, {
					uid: a.uid,
					code: a.code,
					member_group_seq: a.member_group_seq,
					path: a.path,
					memberGroupSeq: a.member_group_seq,
					refer: window.livereOptions && window.livereOptions.refer || window.refer || location.host + location.pathname,
					mode: "mobile",
					type: a.target,
					uuid: uuid
				}, !0);
				return top.location.href = d
			}
			return (get("mobile") ? c : b).call(this, a)
		}, a.image = function(a) {
			var b = get("lv_utils");
			if (b) return b.style.display = "block", postMessage(b.contentWindow, {
				e: "image",
				params: a
			})
		}, a.draw = function(b) {
			function c(a) {
				return set("lv_utils", document.getElementById(a))
			}
			if (b) {
				var d = serial("lv-utils");
				return b.style.cssText =
					"width:100%;overflow:hidden;border:0;position:fixed;left:0;top:0;z-index:2147483647;display:none", b.style.height =
					document.documentElement.clientHeight + "px", b.id = d, document.getElementsByTagName("body")[0].appendChild(b),
					a.attachEvent(), c(d)
			}
		}, a.openCardReplyPopup = function(a) {
			var b = get("lv_utils");
			return b.style.display = "block", postMessage(b.contentWindow, {
				e: "openCardReplyPopup",
				params: a
			})
		}, a.closeCardReplyPopup = function(a) {
			get("lv_utils").style.display = "none"
		}, a.actionSuccess = function(a) {
			return postMessage(get("lv_utils").contentWindow, {
				e: "actionSuccess",
				params: a
			})
		}, a.deleteSuccess = function(a) {
			var b = get("lv_utils");
			return b.style.display = "none", postMessage(b.contentWindow, {
				e: "deleteSuccess",
				params: a
			})
		}, a.attachEvent = function() {
			addEventListener("resize", widget.sidebar.resize)
		}, a.resize = function() {
			var a = get("lv_utils"),
				b = document.documentElement.clientHeight;
			a.style.height = b + "px", postMessage(a.contentWindow, {
				e: "resize",
				params: {
					height: b
				}
			})
		}, a.close = function() {
			return get("lv_utils").style.display = "none", removeEventListener("resize", widget.sidebar.resize), postMessage(
				get("lv_comment").contentWindow, {
					e: "setCurrentFocus"
				})
		}, a.getLoginData = function() {
			return postMessage(get("lv_utils").contentWindow, {
				e: "loginData"
			})
		}, a.getCurrentSessionData = function() {
			return postMessage(get("lv_utils").contentWindow, {
				e: "sessionData"
			})
		}, a.notifyCountUpdate = function() {
			return postMessage(get("lv_comment").contentWindow, {
				e: "notifyCountUpdate"
			})
		}, a
	}(), widget.ad = function() {
		var a = {};
		return a.draw = function(a) {
			function b(a) {
				return set("lv_ad", document.getElementById(a))
			}
			if (a) {
				var c = serial("lv-ad");
				return a.style.cssText = "min-width:100%;width:100px;height:0px;overflow:visible;border:0;z-index:124212;", a.id =
					c, document.getElementById("lv-container").appendChild(a), b(c)
			}
		}, a.load = function() {
			var a = config.parse(),
				b = atob(a.uid).split("/"),
				c = +b[0],
				d = +b[1],
				e = document.querySelector('meta[property="og:url"]'),
				f = options.site || (e ? e.getAttribute("content") : location.href);
			widget.ad.draw(widget.ad.template("ad", {
				consumerSeq: c,
				livereSeq: d,
				isMobile: isMobile(),
				site: f
			}))
		}, a.template = function(a, b) {
			var c = document.createElement("iframe"),
				d = LIVEREMEURL + a;
			return c.title = "livereAd", c.scrolling = "no", c.async = !0, c.frameBorder = 0, c.allowTransparency = "true", c
				.src = d + "?consumerSeq=" + b.consumerSeq + "&livereSeq=" + b.livereSeq + "&isMobile=" + b.isMobile + "&site=" +
				b.site + "&uuid=" + uuid, c
		}, a.resize = function(a, b) {
			return get("lv_ad").style.height = b + "px"
		}, a
	}(), widget.oauth = function() {
		! function(a, b) {
			var c, d = a.getElementsByTagName(b)[0];
			c = a.createElement(b), c.src = "https://api-city.livere.com/smartlogin", c.async = !0, d.parentNode.insertBefore(
				c, d)
		}(document, "script")
	}, config.previousVersion = function() {
		Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
				for (var c = b || 0, d = this.length; c < d; c++)
					if (this[c] === a) return c;
				return -1
			}),
			function() {
				var a = document.createStyleSheet(),
					b = function(b, c) {
						var d, e = document.all,
							f = e.length,
							g = [];
						for (a.addRule(b, "foo:bar"), d = 0; d < f && !("bar" === e[d].currentStyle.foo && (g.push(e[d]), g.length > c)); d +=
							1);
						return a.removeRule(0), g
					};
				document.querySelectorAll || document.querySelector || (document.querySelectorAll = function(a) {
					return b(a, 1 / 0)
				}, document.querySelector = function(a) {
					return b(a, 1)[0] || null
				})
			}(), "object" != typeof JSON && (JSON = {}),
			function() {
				function f(a) {
					return a < 10 ? "0" + a : a
				}

				function this_value() {
					return this.valueOf()
				}

				function quote(a) {
					return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
						var b = meta[a];
						return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
					}) + '"' : '"' + a + '"'
				}

				function str(a, b) {
					var c, d, e, f, g, h = gap,
						i = b[a];
					switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep &&
						(i = rep.call(b, a, i)), typeof i) {
						case "string":
							return quote(i);
						case "number":
							return isFinite(i) ? String(i) : "null";
						case "boolean":
						case "null":
							return String(i);
						case "object":
							if (!i) return "null";
							if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
								for (f = i.length, c = 0; c < f; c += 1) g[c] = str(c, i) || "null";
								return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(
									",") + "]", gap = h, e
							}
							if (rep && "object" == typeof rep)
								for (f = rep.length, c = 0; c < f; c += 1) "string" == typeof rep[c] && (d = rep[c], (e = str(d, i)) && g.push(
									quote(d) + (gap ? ": " : ":") + e));
							else
								for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i)) && g.push(quote(d) + (gap ? ": " :
									":") + e);
							return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") +
								"}", gap = h, e
					}
				}
				"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
						return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) +
							"T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
					}, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON =
					this_value);
				var cx, escapable, gap, indent, meta, rep;
				"function" != typeof JSON.stringify && (escapable =
					/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
					meta = {
						"\b": "\\b",
						"\t": "\\t",
						"\n": "\\n",
						"\f": "\\f",
						"\r": "\\r",
						'"': '\\"',
						"\\": "\\\\"
					}, JSON.stringify = function(a, b, c) {
						var d;
						if (gap = "", indent = "", "number" == typeof c)
							for (d = 0; d < c; d += 1) indent += " ";
						else "string" == typeof c && (indent = c);
						if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error(
							"JSON.stringify");
						return str("", {
							"": a
						})
					}), "function" != typeof JSON.parse && (cx =
					/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
					JSON.parse = function(text, reviver) {
						function walk(a, b) {
							var c, d, e = a[b];
							if (e && "object" == typeof e)
								for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[
									c]);
							return reviver.call(a, b, e)
						}
						var j;
						if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
								return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
							})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(
								/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
							return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
								"": j
							}, "") : j;
						throw new SyntaxError("JSON.parse")
					})
			}(), window.atob = function(a) {
				a = String(a);
				var b, c = 0,
					d = [],
					e = 0,
					f = 0;
				if (a = a.replace(/\s/g, ""), a.length % 4 == 0 && (a = a.replace(/=+$/, "")), a.length % 4 == 1) throw Error(
					"InvalidCharacterError");
				if (/[^+\/0-9A-Za-z]/.test(a)) throw Error("InvalidCharacterError");
				for (; c < a.length;) b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(c)),
					e = e << 6 | b, f += 6, 24 === f && (d.push(String.fromCharCode(e >> 16 & 255)), d.push(String.fromCharCode(e >>
						8 & 255)), d.push(String.fromCharCode(255 & e)), f = 0, e = 0), c += 1;
				return 12 === f ? (e >>= 4, d.push(String.fromCharCode(255 & e))) : 18 === f && (e >>= 2, d.push(String.fromCharCode(
					e >> 8 & 255)), d.push(String.fromCharCode(255 & e))), d.join("")
			}, Object.keys || (Object.keys = function(a) {
				if (a !== Object(a)) throw new TypeError("Object.keys called on a non-object");
				var b, c = [];
				for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
				return c
			})
	}, config.parse = function() {
		var a = document,
			b = a.querySelector("#lv-container"),
			c = window.livereOptions || {};
		if (b) {
			var d = a.querySelector('meta[property="og:image"]'),
				e = a.querySelector('meta[property="og:title"]'),
				f = a.querySelector('meta[property="og:url"]'),
				g = location.hash,
				h = g.match(/#highlight-comment=([0-9]{1,})/),
				i = {
					id: b.getAttribute("data-id"),
					refer: c.refer || window.refer || location.host + location.pathname
				};
			if (~location.host.indexOf("tistory.com") && hasProtocol(i.refer) && (i.refer = i.refer.replace(new RegExp(
					"^https?://", "i"), "http://")), !isObjectPropertiesNull(i)) {
				i.uid = b.getAttribute("data-uid") || null, i.site = c.site || (f ? f.getAttribute("content") : location.href);
				var j = (e ? e.getAttribute("content") : document.title) || "Welcome to the black parade";
				return i.title = encodeURIComponent(escape(j)), i.titleLength = j.length, i.logo = d ? d.getAttribute("content") :
					null, i.highlightSeq = h ? h[h.length - 1] : null, i.redirectOrigin = c.redirectOrigin || null, i.preview = !!c.preview &&
					c.preview, i
			}
		}
	};
	var options = window.livereOptions || {},
		scrollEventTarget = document.querySelector(options.scrollEventTargetSelector);
	return addEventListener("scroll", widget.comment.emitPositionEvent, scrollEventTarget), livere.reload = function() {
		var a, b, c = Object.keys(bound);
		for (a = 0; a < c.length; a++) {
			var d = c[a],
				e = bound[d];
			for (b = 0; b < e.length; b++) removeEventListener(d, e[b]);
			delete bound[d]
		}
		var f = document.querySelector("#lv-container"),
			g = get("lv_comment"),
			h = get("lv_utils");
		if (f && (g && f.removeChild(g), h && document.body.removeChild(h)), variables = {}, bound = {}, (window.livereOptions ||
				{}).eagerLoading) return location.search.indexOf("redirectOrigin=true") > -1 ? widget.oauth.call(this) : livere.start
			.call(this);
		livere.loading.call(this)
	}, livere.get = get, livere.set = set, livere.refresh = function() {
		return widget.comment.state()
	}, livere.common = {
		utils: {
			open: function() {
				return widget.sidebar.open()
			},
			getLoginData: function() {
				return widget.sidebar.getLoginData()
			},
			getCurrentSessionData: function() {
				return widget.sidebar.getCurrentSessionData()
			}
		}
	}, livere
}();
LivereTower.init();
