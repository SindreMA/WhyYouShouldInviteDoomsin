(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["10f809f0"],{3235:function(e,t,a){"use strict";var r=a("9024"),n=a.n(r);n.a},"8b24":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center"},[a("br"),e.AllRuns&&e.details?a("div",{staticClass:"flex justify-around defaultFont"},[a("q-img",{staticClass:"profileImg",attrs:{src:"https://render-eu.worldofwarcraft.com/character/silvermoon/77/141071949-main.jpg"}}),a("div",{staticClass:"infoContainer"},[a("h1",[e._v("Why you should invite Doomsin?")]),a("p",[e._v("BFA M+ runs completed: "),a("strong",[e._v(e._s(e.AllRuns.length))])]),a("p",[e._v("Spent over "),a("strong",[e._v(e._s(Math.round(e.totalTime/1e3/60/60)))]),e._v(" hours  in mythic+")]),a("p",[e._v("BFA M+ score: "),a("strong",[e._v(e._s(Math.round(10*e.characters.filter(function(e){return"doomsin"==e.player})[0].data.score)/10))])]),a("p",[e._v("BFA Raid Progress: "),a("strong",[e._v(e._s(e.getProgress))])]),a("rioRank",{attrs:{region:"eu",realm:"silvermoon",player:"Doomsin"}}),a("p",[e._v("This player is also the creator of the website "),a("a",{attrs:{href:"https://Bestkeystone.com/#/"}},[e._v("BestKeystone.com")])]),a("br"),a("br"),a("a",{attrs:{href:"https://bestkeystone.com/#/lookup?characters=eu.silvermoon.Doomsin"}},[e._v("Click here to show details")])],1)],1):a("div",[a("q-spinner-bars",{attrs:{color:"primary",size:"20em"}})],1)])},n=[],o=(a("7f7f"),a("bc3a")),s=a.n(o),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"RioRank"}},[a("h5",[e.playerRank&&e.GetWorstPlayerRank?a("div",[e._v("\n      This player has higher m+ score than "+e._s(Math.floor(100*(100-(e.playerRank-1)/e.GetWorstPlayerRank*100))/100)+"% of the m+ playerbase\n    "),a("q-tooltip",[e._v("\n      Includes all characters that have done atleast one m+\n      "),a("br"),e._v("\n      Amount of players: "+e._s(e.GetWorstPlayerRank)+"\n    ")])],1):a("div",[e._v("\n      Fetching Rank\n         "),a("q-spinner-bars",{attrs:{color:"primary",size:"2em"}})],1)])])},l=[],c={props:["region","realm","player"],data:function(){return{playerRank:0,GetWorstPlayerRank:null}},watch:{GetWorstPlayerRank:function(){this.GetPlayerPercent()}},methods:{GetPlayerPercent:function(){var e=this;s.a.get("https://cors-anywhere.herokuapp.com/https://raider.io/api/v1/characters/profile?region="+e.region+"&realm="+e.realm+"&name="+e.player+"&fields=mythic_plus_ranks").then(function(t){e.playerRank=t.data.mythic_plus_ranks.overall.world}).catch(function(e){console.log(e)})},fetchWorstPlayer:function(){var e=this;s.a.get("https://cors-anywhere.herokuapp.com/https://raider.io/api/mythic-plus/rankings/characters?region=world&season=season-bfa-3&class=all&role=all&page=1").then(function(t){s.a.get("https://cors-anywhere.herokuapp.com/https://raider.io/api/mythic-plus/rankings/characters?region=world&season=season-bfa-3&class=all&role=all&page="+t.data.rankings.ui.lastPage).then(function(t){var a=t.data.rankings.rankedCharacters;e.GetWorstPlayerRank=a[a.length-1].rank}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}},computed:{},created:function(){this.GetWorstPlayerRank?this.GetPlayerPercent():this.fetchWorstPlayer()}},h=c,u=(a("c1f3"),a("2877")),p=Object(u["a"])(h,i,l,!1,null,null,null),f=p.exports,m={name:"PageIndex",data:function(){return{details:null,totalTime:0,AllRuns:[],characters:[{region:"eu",realm:"grim-batol",player:"ipfeely"},{region:"eu",realm:"grim-batol",player:"guildfirst"},{region:"eu",realm:"grim-batol",player:"sindrema"},{region:"eu",realm:"grim-batol",player:"skiltpadde"},{region:"eu",realm:"grim-batol",player:"nu"},{region:"eu",realm:"silvermoon",player:"doomsin"},{region:"eu",realm:"silvermoon",player:"goodfriend"},{region:"eu",realm:"silvermoon",player:"adamsdpssuck"}]}},methods:{},components:{rioRank:f},computed:{getProgress:function(){if(this.details){console.log();var e=this.details.progression.raids[this.details.progression.raids.length-1],t=0,a=0,r=0;if(e){if(e.bosses.forEach(function(e){0!=e.heroicKills&&a++,0!=e.normalKills&&r++,0!=e.mythicKills&&t++}),0!=t)return"".concat(t,"/").concat(e.bosses.length,"M");if(0!=a)return"".concat(a,"/").concat(e.bosses.length,"HC");if(0!=r)return"".concat(r,"/").concat(e.bosses.length,"NM")}}}},created:function(){var e=this;this.characters.forEach(function(t){s.a.get("https://api2.bestkeystone.com/api/Player/search?character=".concat(t.player)).then(function(a){var r=a.data.filter(function(e){return e.name.toLowerCase()==t.player&&e.realm==t.realm&&e.region==t.region});if(0!=r.length){var n=r[0].id;s.a.get("https://api2.bestkeystone.com/api/Player?id=".concat(n,"&region=").concat(t.region)).then(function(a){t.data=a.data,a.data.runs.forEach(function(t){e.AllRuns.push(t),e.totalTime+=t.clear_time})}).catch(function(e){console.log(e)})}}).catch(function(e){console.log(e)})}),s.a.get("https://api2.bestkeystone.com/api/Player/Details?character=Doomsin&realm=silvermoon&region=eu").then(function(t){e.details=t.data}).catch(function(e){return console.log(e)})}},d=m,g=(a("3235"),Object(u["a"])(d,r,n,!1,null,"dd0692ea",null));t["default"]=g.exports},9024:function(e,t,a){},c1f3:function(e,t,a){"use strict";var r=a("d0f9"),n=a.n(r);n.a},d0f9:function(e,t,a){}}]);