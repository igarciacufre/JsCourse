<script>
    var att_config = {
        // =========================== USER DEFINED CONFIGURATION ===========================
        // Image header.
        topImage: "http://res.e.stark.dk/res/starkgr_mkt_prod1/67087565b17bc060f655579a54d5d3719ac5c70a6c89a92a11a658a519ee2366.png",
        // Max 80 characters!
        subtitle: "Tilmeld dig nyhedsbrevet",
        // Background image - Dimensions of Image: 400px wide x 500px high.
        imageUrl: "",
        // The button text
        buttonText: "Klik her",
        buttonLink: "https://t.e.stark.dk/lp/NewsLetterSignup",
        clickBackgroundToClose: true,
        delay: 3
        // =========================== END USER DEFINED CONFIGURATION ===========================
    };
    (function () {   
    adobe.target.trackEvent({
        "mbox" : "target-global-mbox",
        "params": {
            "profile.popUpSeen": "true"
        }
    });


        var title = null != att_config.title && att_config.title ? att_config.title : "",
            subtitle = null != att_config.subtitle && att_config.subtitle ? att_config.subtitle : "",
            buttonText = null != att_config.buttonText && att_config.buttonText ? att_config.buttonText : "",
            buttonLink = null != att_config.buttonLink && att_config.buttonLink ? att_config.buttonLink : "",
            template =
            '\n<div id="att_lightbox">\n  <div class="att_lightbox_background"></div>\n  <div class="att_popup">\n    <div class="att_lightbox_contents">' +
            '\n<img src="'+att_config.topImage+'" class="att_topimage"/>' +
            '\n<p class="att_lightbox_subhheader">' + subtitle + '</p>\n      <a href="'+buttonLink+'" class="att_lightbox_button" id="att_redAndClose_after_click" target="_blank"  rel="nofollow noopener">' + buttonText +
            '</a>\n      <a id="att_lightbox_close" href="#">Nie Tak</a>\n    </div>\n  </div>\n</div>\n',
            bgImage = null != att_config.imageUrl && att_config.imageUrl ?
            "background: #ffffff;" : "",
            style =
            "\n#att_lightbox {\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n.att_lightbox_background {\n  display: block;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: black;\n  opacity: 0.75;\n  z-index: 1000;\n  margin: 0;\n  padding: 0;\n}\n.att_popup * {\n  font-family: Helvetica, Arial, sans-serif;\n}\n.att_popup {\n  max-width: 500px;\n  max-height: 300px;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  z-index: 1001;\n  border-radius: 1px;\n  background-color: #fff;\n  " +
            bgImage +
            "\n  background-size: cover;\n  background-position: center;\n}\n\n.att_lightbox_contents {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  height: calc(100% - 40px);\n  width: calc(100% - 40px);\n}\n.att_lightbox_header {\n  text-align: center;\n  font-size: 28pt;\n  color: #221E1F;\n  margin: 0;\n  padding: 1rem;\n  line-height: 1.25;\n}\n.att_lightbox_subhheader {\n  font-size: 14pt;\n  text-align: center;\n  color: #221E1F;\n  line-height: 1.25;\n  font-weight: 400;\n  margin: 10px;\n  padding: 0;\n}\n.att_lightbox_button {\n  height: 42px;\n  width: auto;\n  min-width: 50%;\n  background-color: #f5821e;\n  color: white;\n  border-radius: 2px;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 11pt;\n  margin: 10px;\n}\n.att_lightbox_button:hover {\n  background-color: #f5a82e;\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button:active {\n  background-color: #f5a82e;\n  text-decoration: none;\n  cursor: pointer;\n}\n.att_lightbox_button[disabled=disabled],\n.att_lightbox_button:disabled {\n  background-color: #D8D8D8;\n  text-decoration: none;\n}\n#att_lightbox_close {\n  font-size: 12pt;\n  color: #4A4A4A;\n  text-align: center;\n  text-decoration: none;\n  margin: 10px;\n  font-weight: 300;\n}\n#att_lightbox_close:hover {\n  text-decoration: underline;\n}\n .att_topimage{\n width: 100%;\n max-width: 300px;\n height: auto;\n background: #ffffff;\n border-width: 0px;\n border-style: none\n}\n  @media (max-width: 801px) {\n  .att_popup {\n    margin: 20px;\n  }\n  .att_lightbox_left {\n    display: none\n  }\n}\n",
            handlers = function () {
                var t = null != att_config.delay && att_config.delay ? att_config.delay : 5;
                function n() {
                document.getElementById("att_lightbox").style.display = "none"
            }!1 !== att_config.delay && setTimeout(function () {
                att_config.fired || (document.getElementById("att_lightbox").style.display = "flex", att_config.fired = !0)
            }, 1e3 * t), document.getElementById("att_lightbox_close").addEventListener("click", function (t) {
                t.preventDefault(), n()
            }), document.querySelector(".att_lightbox_background").addEventListener("click", function (t) {
                att_config.clickBackgroundToClose && (t.preventDefault(), n())
            }), document.getElementById("att_redAndClose_after_click").addEventListener("click",function (t) {
                
                n();
            })
        };
        injector({
            template: template,
            style: style,
            handlers: handlers
        });dal
        "use strict";

        function injector(e) {
            var t = null != e.el && e.el ? e.el : document.body,
                l = document.createElement("div");
            e.templateClass && l.classList.add(e.templateClass), l.innerHTML = null != e.template && e.template ? e
                .template.replace(/(\r\n\t|\n|\r\t)/gm, "") : "", t.appendChild(l);
            var n = document.createElement("style");
            n.innerText = null != e.style && e.style ? e.style.replace(/(\r\n\t|\n|\r\t)/gm, "") : "", document.head
                .appendChild(n), null != e.handlers && "function" == typeof e.handlers && e.handlers()
        };

    })();
</script>