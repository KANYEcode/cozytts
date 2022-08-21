# cozytts
Free TTS for cozy chat

# Setup
1. Install [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
    - violentmonkey or another userscript manager will also probably work
2. Install [the script](https://github.com/KANYEcode/cozytts/raw/main/cozytts.user.js)
    - Tampermonkey should prompt you to install the script, but if it opens a download screen then you can do the following instead:
    - In the Extensions menu, select Tampermonkey >> Dashboard >> Utilities >> Import from URL
    

# How to Use
- The script will run in the `.../chat?bold&bare` window
  - It will NOT run in the regular `.../chat` window
- TTS is triggered if the chat includes `@CHANNEL` e.g. `@wendell`
- A user can also try to select a language by putting it in square brackets, e.g. `[fr]` will try to use a French voice
  - The available voices depends on the streamer's browser. I found that Brave only has 4 included voices and Chrome seems to have 22. This may vary
- Currently does NOT do any animation or highlighting of the chat, i.e. it's voice only.  
  
  
# Voices
Possible voices include:

- Microsoft David - English (United States) en-US
- Microsoft Mark - English (United States) en-US
- Microsoft Zira - English (United States) en-US
- Google Deutsch de-DE
- Google US English en-US
- Google UK English Female en-GB
- Google UK English Male en-GB
- Google español es-ES
- Google español de Estados Unidos es-US
- Google français fr-FR
- Google हिन्दी hi-IN
- Google Bahasa Indonesia id-ID
- Google italiano it-IT
- Google 日本語 ja-JP
- Google 한국의 ko-KR
- Google Nederlands nl-NL
- Google polski pl-PL
- Google português do Brasil pt-BR
- Google русский ru-RU
- Google 普通话（中国大陆） zh-CN
- Google 粤語（香港） zh-HK
- Google 國語（臺灣） zh-TW
