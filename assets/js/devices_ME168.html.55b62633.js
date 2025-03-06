"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[66665],{40249:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>c});var d=o(6254);const a={},i=(0,o(58079).A)(a,[["render",function(e,t){const o=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[t[10]||(t[10]=(0,d.Lk)("h1",{id:"girier-me168",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#girier-me168"},[(0,d.Lk)("span",null,"Girier ME168")])],-1)),(0,d.Lk)("table",null,[t[6]||(t[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[t[2]||(t[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"ME168")],-1)),(0,d.Lk)("tr",null,[t[1]||(t[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(o,{to:"/supported-devices/#v=Girier"},{default:(0,d.k6)((()=>t[0]||(t[0]=[(0,d.eW)("Girier")]))),_:1})])]),t[3]||(t[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Thermostatic radiator valve")],-1)),t[4]||(t[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"battery, error, child_lock, running_mode, climate (system_mode, preset, running_state, current_heating_setpoint, local_temperature, local_temperature_calibration), window_detection, window_open, frost_protection, scale_protection, boost_time, boost_timeset_countdown, eco_temperature, comfort_temperature, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday")],-1)),t[5]||(t[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ME168.png",alt:"Girier ME168"})])],-1))])]),t[11]||(t[11]=(0,d.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>You can pair this device by setting device to manual mode by short press rotary button (until clock symbol is not displayed), setting temperature to &quot;OF&quot; by rotating left, then press and hold rotary button. Network symbol will start to blink.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4)),(0,d.Lk)("p",null,[t[8]||(t[8]=(0,d.eW)("This device supports OTA updates, for more information see ")),(0,d.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,d.k6)((()=>t[7]||(t[7]=[(0,d.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,d.eW)("."))]),t[12]||(t[12]=(0,d.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="error-numeric" tabindex="-1"><a class="header-anchor" href="#error-numeric"><span>Error (numeric)</span></a></h3><p>If NTC is damaged, &quot;Er&quot; will be on the TRV display.. Value can be found in the published state on the <code>error</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="running-mode-enum" tabindex="-1"><a class="header-anchor" href="#running-mode-enum"><span>Running mode (enum)</span></a></h3><p>Actual TRV running mode. Value can be found in the published state on the <code>running_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>auto</code>, <code>manual</code>, <code>off</code>, <code>eco</code>, <code>comfort</code>, <code>boost</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>system_mode</code>, <code>preset</code>, <code>running_state</code>, <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>4</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Basic modes. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Additional heat modes. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>eco</code>, <code>comfort</code>, <code>boost</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-30</code> and the maximum value is <code>30</code> with a step size of <code>1</code>.</li></ul><h3 id="window-detection-binary" tabindex="-1"><a class="header-anchor" href="#window-detection-binary"><span>Window detection (binary)</span></a></h3><p>Enables/disables window detection on the device. Value can be found in the published state on the <code>window_detection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> window detection is ON, if <code>OFF</code> OFF.</p><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary"><span>Window open (binary)</span></a></h3><p>Indicates if window is open. Value can be found in the published state on the <code>window_open</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> window open is ON, if <code>false</code> OFF.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>When the room temperature is lower than 5 °C, the valve opens; when the temperature rises to 8 °C, the valve closes.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="scale-protection-binary" tabindex="-1"><a class="header-anchor" href="#scale-protection-binary"><span>Scale protection (binary)</span></a></h3><p>If the heat sink is not fully opened within two weeks or is not used for a long time, the valve will be blocked due to silting up and the heat sink will not be able to be used. To ensure normal use of the heat sink, the controller will automatically open the valve fully every two weeks. It will run for 30 seconds per time with the screen displaying &quot;Ad&quot;, then return to its normal working state again.. Value can be found in the published state on the <code>scale_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;scale_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> scale protection is ON, if <code>OFF</code> OFF.</p><h3 id="boost-time-numeric" tabindex="-1"><a class="header-anchor" href="#boost-time-numeric"><span>Boost time (numeric)</span></a></h3><p>Boost running time. Value can be found in the published state on the <code>boost_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>min</code>.</p><h3 id="boost-timeset-countdown-numeric" tabindex="-1"><a class="header-anchor" href="#boost-timeset-countdown-numeric"><span>Boost timeset countdown (numeric)</span></a></h3><p>Boost time remaining. Value can be found in the published state on the <code>boost_timeset_countdown</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric"><span>Comfort temperature (numeric)</span></a></h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text"><span>Schedule monday (text)</span></a></h3><p>Schedule for monday, example: &quot;06:00/21.0 08:00/16.0 12:00/21.0 14:00/16.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text"><span>Schedule tuesday (text)</span></a></h3><p>Schedule for tuesday, example: &quot;06:00/21.0 08:00/16.0 12:00/21.0 14:00/16.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text"><span>Schedule wednesday (text)</span></a></h3><p>Schedule for wednesday, example: &quot;06:00/21.0 08:00/16.0 12:00/21.0 14:00/16.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text"><span>Schedule thursday (text)</span></a></h3><p>Schedule for thursday, example: &quot;06:00/21.0 08:00/16.0 12:00/21.0 14:00/16.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text"><span>Schedule friday (text)</span></a></h3><p>Schedule for friday, example: &quot;06:00/21.0 08:00/16.0 12:00/21.0 14:00/16.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text"><span>Schedule saturday (text)</span></a></h3><p>Schedule for saturday, example: &quot;06:00/21.0 08:00/16.0 12:00/21.0 14:00/16.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text"><span>Schedule sunday (text)</span></a></h3><p>Schedule for sunday, example: &quot;06:00/21.0 08:00/16.0 12:00/21.0 14:00/16.0 18:00/21.0 22:00/16.0&quot;. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p>',42))])}]]),c=JSON.parse('{"path":"/devices/ME168.html","title":"Girier ME168 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Girier ME168 control via MQTT","description":"Integrate your Girier ME168 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-12T08:59:10.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Error (numeric)","slug":"error-numeric","link":"#error-numeric","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Running mode (enum)","slug":"running-mode-enum","link":"#running-mode-enum","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Window detection (binary)","slug":"window-detection-binary","link":"#window-detection-binary","children":[]},{"level":3,"title":"Window open (binary)","slug":"window-open-binary","link":"#window-open-binary","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Scale protection (binary)","slug":"scale-protection-binary","link":"#scale-protection-binary","children":[]},{"level":3,"title":"Boost time (numeric)","slug":"boost-time-numeric","link":"#boost-time-numeric","children":[]},{"level":3,"title":"Boost timeset countdown (numeric)","slug":"boost-timeset-countdown-numeric","link":"#boost-timeset-countdown-numeric","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Comfort temperature (numeric)","slug":"comfort-temperature-numeric","link":"#comfort-temperature-numeric","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]}]}],"git":{"updatedTime":1741288259000},"filePathRelative":"devices/ME168.md"}')}}]);