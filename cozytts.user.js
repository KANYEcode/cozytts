// ==UserScript==
// @name         Free Cozy TTS
// @namespace    Cozy.tv
// @version      0.0.1
// @description  TTS from cozy chat.
// @author       KANYE
// @match        https://cozy.tv/*/chat?*
// @icon         https://cozy.tv/public/cz_fav_128.png
// @grant        none
// @run-at       document-idle
// ==/UserScript==

// Chrome default voices, Brave only has 4.
// [
//   { name: "Microsoft David - English (United States)", lang: "en-US" },
//   { name: "Microsoft Mark - English (United States)", lang: "en-US" },
//   { name: "Microsoft Zira - English (United States)", lang: "en-US" },
//   { name: "Google Deutsch", lang: "de-DE" },
//   { name: "Google US English", lang: "en-US" },
//   { name: "Google UK English Female", lang: "en-GB" },
//   { name: "Google UK English Male", lang: "en-GB" },
//   { name: "Google español", lang: "es-ES" },
//   { name: "Google español de Estados Unidos", lang: "es-US" },
//   { name: "Google français", lang: "fr-FR" },
//   { name: "Google हिन्दी", lang: "hi-IN" },
//   { name: "Google Bahasa Indonesia", lang: "id-ID" },
//   { name: "Google italiano", lang: "it-IT" },
//   { name: "Google 日本語", lang: "ja-JP" },
//   { name: "Google 한국의", lang: "ko-KR" },
//   { name: "Google Nederlands", lang: "nl-NL" },
//   { name: "Google polski", lang: "pl-PL" },
//   { name: "Google português do Brasil", lang: "pt-BR" },
//   { name: "Google русский", lang: "ru-RU" },
//   { name: "Google 普通话（中国大陆）", lang: "zh-CN" },
//   { name: "Google 粤語（香港）", lang: "zh-HK" },
//   { name: "Google 國語（臺灣）", lang: "zh-TW" },
// ];
let voices = speechSynthesis.getVoices();

// Timeout is to let the chat, and speech load
setTimeout(() => {
  const channel = window.location.pathname.split("/")[1].toLowerCase();

  const say = (text, voice) => {
    const utt = new SpeechSynthesisUtterance(text);
    voices = speechSynthesis.getVoices();
    utt.voice = voices.find(
      (i) =>
        i.name.toLowerCase().includes(voice) ||
        i.lang.toLowerCase().includes(voice)
    );
    speechSynthesis.speak(utt);
  };

  const chats = document.querySelector(
    "div.relative.flex-grow.h-0 > div.flex.flex-col-reverse.h-full.p-2.pl-4.overflow-x-hidden.overflow-y-auto.text-gray-100.text-base"
  );

  const config = {
    attributes: false,
    childList: true,
    subtree: true,
  };

  const callback = (mutationList) => {
    for (const mutation of mutationList) {
      const newChats = [...mutation.addedNodes].map((node) => node.innerText);
      const filteredChats = newChats.filter((chat) =>
        chat.toLowerCase().includes(`@${channel}`)
      );
      const formattedChats = filteredChats.map((chat) =>
        chat.replace(":", " says ")
      );
      // console.log(newChats);
      formattedChats.forEach((chat) => {
        const voice = chat.match(/\[([^\]]*)\]/);
        if (voice) {
          chat = chat.replace(/\[([^\]]*)\]/g, "");
        }
        say(chat, voice?.[1]?.toLowerCase());
      });
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(chats, config);
}, 5000);
