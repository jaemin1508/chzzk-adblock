// ==UserScript==
// @name         Chzzk AdBlock
// @namespace    https://github.com/jaemin1508/chzzk-adblock
// @version      2024-03-01
// @description  Client-Sided Ad Blocker
// @author       jaemin1508
// @match        https://chzzk.naver.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.gladsdk) {
        window.gladsdk.displayAd = function(){};
        window.gladsdk.destroyAdSlots();
    }
})();
