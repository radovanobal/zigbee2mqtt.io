"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30396],{47027:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>n});var i=t(6254);const l={},a=(0,t(58079).A)(l,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"chacon-zb-ersm-01",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#chacon-zb-ersm-01"},[(0,i.Lk)("span",null,"Chacon ZB-ERSM-01")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZB-ERSM-01")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Chacon"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("Chacon")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Roller shutter module")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), cover_mode, action")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB-ERSM-01.png",alt:"Chacon ZB-ERSM-01"})])],-1))])]),o[9]||(o[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>You have 3 possibilities of pairing:</p><ul><li>With Chacon/DiO radio controller (remote, switch…)</li><li>With DiO mobile app via Bluetooth</li><li>With Zigbee</li></ul><ul><li>You can pair a DiO controller and Zigbee on the same device.</li><li>You can pair a DiO controller and mobile app on the same device.</li><li>But you cannot pair mobile app and Zigbee on the same device</li></ul><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><ol><li>Open the roller shutter entirely</li><li>Activate calibration mode</li><li>Close the shutter by pushing the &quot;close&quot; button every 0.5 seconds until the shutter is totally closed</li><li>Exit calibration mode (now the closing time is set)</li><li>Activate calibration mode again</li><li>Open the shutter by pushing the &quot;open&quot; button every 0.5 seconds until the shutter is totally open</li><li>Exit calibration mode (now the opening time is set, calibration is done)</li></ol><p><strong>Caution</strong>: <em>In calibration mode, any shutter movement command lasts 1 second maximum. For continuous movement, the Zigbee Down/Close command must be sent approximately every 0.5 seconds.</em></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',9)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="cover-mode-composite" tabindex="-1"><a class="header-anchor" href="#cover-mode-composite"><span>Cover mode (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cover_mode&quot;: {&quot;reversed&quot;: VALUE, &quot;calibration&quot;: VALUE, &quot;maintenance&quot;: VALUE, &quot;led&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;cover_mode&quot;: &quot;&quot;}</code>.</p><ul><li><code>reversed</code> (binary): Reversal of the motor rotating direction allowed values: <code>true</code> or <code>false</code></li><li><code>calibration</code> (binary): Set the cover calibration mode allowed values: <code>true</code> or <code>false</code></li><li><code>maintenance</code> (binary): Set the cover maintenance mode, enabling will disable the cover motor allowed values: <code>true</code> or <code>false</code></li><li><code>led</code> (binary): Set the LED allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>open</code>, <code>close</code>, <code>stop</code>.</p>',9))])}]]),n=JSON.parse('{"path":"/devices/ZB-ERSM-01.html","title":"Chacon ZB-ERSM-01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Chacon ZB-ERSM-01 control via MQTT","description":"Integrate your Chacon ZB-ERSM-01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-31T20:32:44.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Calibration","slug":"calibration","link":"#calibration","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Cover mode (composite)","slug":"cover-mode-composite","link":"#cover-mode-composite","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1741288259000},"filePathRelative":"devices/ZB-ERSM-01.md"}')}}]);