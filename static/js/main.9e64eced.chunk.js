(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){"use strict";t.r(a);t(64),t(89);var l=t(0),c=t.n(l),n=t(31),s=t.n(n),r=t(17),i=t.n(r),d=t(56),m=t(57),o=t(61),E=t(58),v=t(62),g=t(1),u=(t(111),t(55),t(59),t(60),t(32),Object(g.platform)(),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(o.a)(this,Object(E.a)(a).call(this,e))).go=function(e){t.setState({activePanel:e.currentTarget.dataset.to})},t.state={activePanel:"home",fetchedUser:null},t}return Object(v.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(a){switch(a.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:a.detail.data});break;default:console.log(a.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement("dvi",null,c.a.createElement("div",{class:"heading"},c.a.createElement("h1",{class:"title"},c.a.createElement("a",{href:"/"},"2048")),c.a.createElement("div",{class:"scores-container"},c.a.createElement("div",{class:"score-container"},"0"),c.a.createElement("div",{class:"best-container"},"2960"))),c.a.createElement("div",{class:"game-intro"},c.a.createElement("a",{class:"restart-button"},"New Game"),c.a.createElement("h2",{class:"subtitle"},"Play ",c.a.createElement("strong",null,"2048 Game")," Online"),c.a.createElement("div",{class:"above-game"},c.a.createElement("p",null,"Join the numbers and get to the ",c.a.createElement("strong",null,"2048 tile!")))),c.a.createElement("div",{class:"game-container"},c.a.createElement("div",{class:"game-message"},c.a.createElement("p",null),c.a.createElement("div",{class:"lower"},c.a.createElement("a",{class:"keep-playing-button"},"Keep playing"),c.a.createElement("a",{class:"retry-button"},"Try again"),c.a.createElement("div",{class:"score-sharing"}))),c.a.createElement("div",{class:"grid-container"},c.a.createElement("div",{class:"grid-row"},c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"})),c.a.createElement("div",{class:"grid-row"},c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"})),c.a.createElement("div",{class:"grid-row"},c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"})),c.a.createElement("div",{class:"grid-row"},c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}),c.a.createElement("div",{class:"grid-cell"}))),c.a.createElement("div",{class:"tile-container"},c.a.createElement("div",{class:"tile tile-4 tile-position-3-4 tile-new"},c.a.createElement("div",{class:"tile-inner"},"4")),c.a.createElement("div",{class:"tile tile-2 tile-position-4-1 tile-new"},c.a.createElement("div",{class:"tile-inner"},"2")))))}}]),a}(c.a.Component));i.a.send("VKWebAppInit",{}),s.a.render(c.a.createElement(u,null),document.getElementById("root"))},55:function(e,a,t){},59:function(e,a,t){e.exports=t.p+"static/media/persik.4e1ec840.png"},63:function(e,a,t){e.exports=t(112)}},[[63,1,2]]]);
//# sourceMappingURL=main.9e64eced.chunk.js.map