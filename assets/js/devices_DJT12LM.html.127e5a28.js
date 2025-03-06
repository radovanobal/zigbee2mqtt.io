"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7860],{24290:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>l});var i=a(6254);const n=a.p+"assets/img/DJT12LM_pairing.2ac7efd1.png",o={},s=(0,a(58079).A)(o,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[10]||(t[10]=(0,i.Lk)("h1",{id:"aqara-djt12lm",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#aqara-djt12lm"},[(0,i.Lk)("span",null,"Aqara DJT12LM")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"DJT12LM")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Vibration sensor T1")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"report_interval, sensitivity_adjustment, battery, voltage, action")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DJT12LM.png",alt:"Aqara DJT12LM"})])],-1))])]),t[11]||(t[11]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Long press the reset button for more than 5 seconds, until the blue light blinks 3 times.</p><p><img src="'+n+'" alt="DJT12LM pairing"></p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',5)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[12]||(t[12]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="report-interval-enum" tabindex="-1"><a class="header-anchor" href="#report-interval-enum"><span>Report interval (enum)</span></a></h3><p>Reporting interval for the device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_interval&quot;: NEW_VALUE}</code>. The possible values are: <code>1s</code>, <code>5s</code>, <code>10s</code>.</p><h3 id="sensitivity-adjustment-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-adjustment-enum"><span>Sensitivity adjustment (enum)</span></a></h3><p>Sensitivity adjustment for the device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity_adjustment&quot;: NEW_VALUE}</code>. The possible values are: <code>high</code>, <code>medium</code>, <code>low</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>shake</code>, <code>triple_strike</code>, <code>movement</code>.</p>',11))])}]]),l=JSON.parse('{"path":"/devices/DJT12LM.html","title":"Aqara DJT12LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara DJT12LM control via MQTT","description":"Integrate your Aqara DJT12LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-06-10T16:45:59.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Report interval (enum)","slug":"report-interval-enum","link":"#report-interval-enum","children":[]},{"level":3,"title":"Sensitivity adjustment (enum)","slug":"sensitivity-adjustment-enum","link":"#sensitivity-adjustment-enum","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1741288259000},"filePathRelative":"devices/DJT12LM.md"}')}}]);