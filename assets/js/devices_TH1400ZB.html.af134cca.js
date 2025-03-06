"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[39837],{43651:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>s});var a=o(6254);const n={},i=(0,o(58079).A)(n,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"sinope-th1400zb",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#sinope-th1400zb"},[(0,a.Lk)("span",null,"Sinopé TH1400ZB")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TH1400ZB")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Sinop%C3%A9"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Sinopé")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee low volt thermostat")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (occupied_heating_setpoint, unoccupied_heating_setpoint, local_temperature, system_mode, pi_heating_demand, running_state), max_heat_setpoint_limit, min_heat_setpoint_limit, thermostat_occupancy, second_display_mode, thermostat_outdoor_temperature, outdoor_temperature_timeout, enable_outdoor_temperature, temperature_display_mode, time_format, backlight_auto_dim, keypad_lockout, connected_load, floor_control_mode, floor_max_heat_setpoint, floor_min_heat_setpoint, ambiant_max_heat_setpoint, floor_temperature_sensor, main_cycle_output, aux_cycle_output, pump_protection, aux_connected_load")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TH1400ZB.png",alt:"Sinopé TH1400ZB"})])],-1))])]),t[9]||(t[9]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="setting-outdoor-temperature" tabindex="-1"><a class="header-anchor" href="#setting-outdoor-temperature"><span>Setting outdoor temperature</span></a></h3><p>To set the <em>outdoor temperature</em> (value below the Out label on the thermostat display), you need to send the value to the following MQTT topic:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">zigbee2mqtt/&lt;FRIENDLY_NAME&gt;/set/thermostat_outdoor_temperature</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you want to automate the publishing of the outdoor temperature using Home Assistant, you may create an automation like this:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token string">&#39;Auto_Publish_Outdoor_Temprature&#39;</span></span>\n<span class="line">  <span class="token key atrule">alias</span><span class="token punctuation">:</span> <span class="token string">&#39;Publish outside temperature&#39;</span></span>\n<span class="line">  <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&#39;Automatically Publish the outdoor temperature to thermostats&#39;</span></span>\n<span class="line">  <span class="token key atrule">mode</span><span class="token punctuation">:</span> single</span>\n<span class="line">  <span class="token key atrule">trigger</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">platform</span><span class="token punctuation">:</span> state</span>\n<span class="line">    <span class="token key atrule">entity_id</span><span class="token punctuation">:</span> sensor.&lt;OUTDOOR_TEMPERATURE_SENSOR_NAME<span class="token punctuation">&gt;</span></span>\n<span class="line">  <span class="token key atrule">condition</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>\n<span class="line">  <span class="token key atrule">action</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish</span>\n<span class="line">    <span class="token key atrule">data</span><span class="token punctuation">:</span></span>\n<span class="line">      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set/thermostat_outdoor_temperature</span>\n<span class="line">      <span class="token key atrule">payload</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ states(&#39;sensor.&lt;OUTDOOR_TEMPERATURE_SENSOR_NAME&gt;&#39;) }}&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setting-outdoor-temperature-1" tabindex="-1"><a class="header-anchor" href="#setting-outdoor-temperature-1"><span>Setting outdoor temperature</span></a></h3><p>To enable time you need to send a blank message to the following MQTT topic:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">zigbee2mqtt/&lt;FRIENDLY_NAME&gt;/set/thermostat_time</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><em>Every time the above message is sent, Zigbee2MQTT will calculate the current time and send it to the thermostat.</em></p><p>If the thermostat loses power, you need to do this again. For Home Assistant users: if you want to avoid remembering to do this, you can add the following <code>action</code> to your <code>Auto_Publish_Outdoor_Temperature</code> automation (noted above).</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> mqtt.publish</span>\n<span class="line">    <span class="token key atrule">data</span><span class="token punctuation">:</span></span>\n<span class="line">      <span class="token key atrule">topic</span><span class="token punctuation">:</span> zigbee2mqtt/&lt;FRIENDLY_NAME<span class="token punctuation">&gt;</span>/set/thermostat_time</span>\n<span class="line">      <span class="token key atrule">payload</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',13)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>unoccupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>pi_heating_demand</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>36</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="max-heat-setpoint-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-heat-setpoint-limit-numeric"><span>Max heat setpoint limit (numeric)</span></a></h3><p>Maximum Heating set point limit. Value can be found in the published state on the <code>max_heat_setpoint_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_heat_setpoint_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_heat_setpoint_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>36</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-heat-setpoint-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-heat-setpoint-limit-numeric"><span>Min heat setpoint limit (numeric)</span></a></h3><p>Minimum Heating set point limit. Value can be found in the published state on the <code>min_heat_setpoint_limit</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_heat_setpoint_limit&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_heat_setpoint_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>36</code>. The unit of this value is <code>°C</code>.</p><h3 id="thermostat-occupancy-enum" tabindex="-1"><a class="header-anchor" href="#thermostat-occupancy-enum"><span>Thermostat occupancy (enum)</span></a></h3><p>Occupancy state of the thermostat. Value can be found in the published state on the <code>thermostat_occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_occupancy&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_occupancy&quot;: NEW_VALUE}</code>. The possible values are: <code>unoccupied</code>, <code>occupied</code>.</p><h3 id="second-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#second-display-mode-enum"><span>Second display mode (enum)</span></a></h3><p>Displays the outdoor temperature and then returns to the set point in &quot;auto&quot; mode, or clears in &quot;outdoor temp&quot; mode when expired.. Value can be found in the published state on the <code>second_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;second_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;second_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>auto</code>, <code>setpoint</code>, <code>outdoor temp</code>.</p><h3 id="thermostat-outdoor-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#thermostat-outdoor-temperature-numeric"><span>Thermostat outdoor temperature (numeric)</span></a></h3><p>Outdoor temperature for the secondary display. Value can be found in the published state on the <code>thermostat_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_outdoor_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-99.5</code> and the maximum value is <code>99.5</code>. The unit of this value is <code>°C</code>.</p><h3 id="outdoor-temperature-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-timeout-numeric"><span>Outdoor temperature timeout (numeric)</span></a></h3><p>Time in seconds after which the outdoor temperature is considered to have expired. Value can be found in the published state on the <code>outdoor_temperature_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;outdoor_temperature_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>30</code> and the maximum value is <code>64800</code>. The unit of this value is <code>s</code>. Besides the numeric values the following values are accepted: <code>15 min</code>, <code>30 min</code>, <code>1 hour</code>.</p><h3 id="enable-outdoor-temperature-binary" tabindex="-1"><a class="header-anchor" href="#enable-outdoor-temperature-binary"><span>Enable outdoor temperature (binary)</span></a></h3><p>DEPRECATED: Use second_display_mode or control via outdoor_temperature_timeout. Value can be found in the published state on the <code>enable_outdoor_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_outdoor_temperature&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable outdoor temperature is ON, if <code>OFF</code> OFF.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum"><span>Temperature display mode (enum)</span></a></h3><p>The temperature format displayed on the thermostat screen. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="time-format-enum" tabindex="-1"><a class="header-anchor" href="#time-format-enum"><span>Time format (enum)</span></a></h3><p>The time format featured on the thermostat display. Value can be found in the published state on the <code>time_format</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_format&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_format&quot;: NEW_VALUE}</code>. The possible values are: <code>24h</code>, <code>12h</code>.</p><h3 id="backlight-auto-dim-enum" tabindex="-1"><a class="header-anchor" href="#backlight-auto-dim-enum"><span>Backlight auto dim (enum)</span></a></h3><p>The display backlight behavior. Value can be found in the published state on the <code>backlight_auto_dim</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;backlight_auto_dim&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_auto_dim&quot;: NEW_VALUE}</code>. The possible values are: <code>on_demand</code>, <code>sensing</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum"><span>Keypad lockout (enum)</span></a></h3><p>Enables or disables the device’s buttons. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>.</p><h3 id="connected-load-numeric" tabindex="-1"><a class="header-anchor" href="#connected-load-numeric"><span>Connected load (numeric)</span></a></h3><p>The power in watts of the electrical load connected to the device. Value can be found in the published state on the <code>connected_load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;connected_load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;connected_load&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>20000</code>. The unit of this value is <code>W</code>.</p><h3 id="floor-control-mode-enum" tabindex="-1"><a class="header-anchor" href="#floor-control-mode-enum"><span>Floor control mode (enum)</span></a></h3><p>Control mode using floor or ambient temperature. Value can be found in the published state on the <code>floor_control_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_control_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;floor_control_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>ambiant</code>, <code>floor</code>.</p><h3 id="floor-max-heat-setpoint-numeric" tabindex="-1"><a class="header-anchor" href="#floor-max-heat-setpoint-numeric"><span>Floor max heat setpoint (numeric)</span></a></h3><p>The maximum floor temperature limit of the floor when in ambient control mode. Value can be found in the published state on the <code>floor_max_heat_setpoint</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_max_heat_setpoint&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;floor_max_heat_setpoint&quot;: NEW_VALUE}</code>. The minimal value is <code>7</code> and the maximum value is <code>36</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>off</code>.</p><h3 id="floor-min-heat-setpoint-numeric" tabindex="-1"><a class="header-anchor" href="#floor-min-heat-setpoint-numeric"><span>Floor min heat setpoint (numeric)</span></a></h3><p>The minimum floor temperature limit of the floor when in ambient control mode. Value can be found in the published state on the <code>floor_min_heat_setpoint</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_min_heat_setpoint&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;floor_min_heat_setpoint&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>34</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>off</code>.</p><h3 id="ambiant-max-heat-setpoint-numeric" tabindex="-1"><a class="header-anchor" href="#ambiant-max-heat-setpoint-numeric"><span>Ambiant max heat setpoint (numeric)</span></a></h3><p>The maximum ambient temperature limit when in floor control mode. Value can be found in the published state on the <code>ambiant_max_heat_setpoint</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;ambiant_max_heat_setpoint&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ambiant_max_heat_setpoint&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>36</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>off</code>.</p><h3 id="floor-temperature-sensor-enum" tabindex="-1"><a class="header-anchor" href="#floor-temperature-sensor-enum"><span>Floor temperature sensor (enum)</span></a></h3><p>The floor sensor. Value can be found in the published state on the <code>floor_temperature_sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;floor_temperature_sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;floor_temperature_sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>10k</code>, <code>12k</code>.</p><h3 id="main-cycle-output-enum" tabindex="-1"><a class="header-anchor" href="#main-cycle-output-enum"><span>Main cycle output (enum)</span></a></h3><p>The length of the control cycle according to the type of load connected to the thermostats. Value can be found in the published state on the <code>main_cycle_output</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;main_cycle_output&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;main_cycle_output&quot;: NEW_VALUE}</code>. The possible values are: <code>15_sec</code>, <code>5_min</code>, <code>10_min</code>, <code>15_min</code>, <code>20_min</code>, <code>30_min</code>.</p><h3 id="aux-cycle-output-enum" tabindex="-1"><a class="header-anchor" href="#aux-cycle-output-enum"><span>Aux cycle output (enum)</span></a></h3><p>The length of the control cycle according to the type of auxiliary load connected to the thermostats. Value can be found in the published state on the <code>aux_cycle_output</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;aux_cycle_output&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;aux_cycle_output&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>15_sec</code>, <code>5_min</code>, <code>10_min</code>, <code>15_min</code>, <code>20_min</code>, <code>30_min</code>.</p><h3 id="pump-protection-binary" tabindex="-1"><a class="header-anchor" href="#pump-protection-binary"><span>Pump protection (binary)</span></a></h3><p>This function prevents the seizure of the pump. Value can be found in the published state on the <code>pump_protection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pump_protection&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pump_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> pump protection is ON, if <code>OFF</code> OFF.</p><h3 id="aux-connected-load-numeric" tabindex="-1"><a class="header-anchor" href="#aux-connected-load-numeric"><span>Aux connected load (numeric)</span></a></h3><p>The power in watts of the heater connected to the auxiliary output of the thermostat. Value can be found in the published state on the <code>aux_connected_load</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;aux_connected_load&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;aux_connected_load&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>20000</code>. The unit of this value is <code>W</code>.</p>',47))])}]]),s=JSON.parse('{"path":"/devices/TH1400ZB.html","title":"Sinopé TH1400ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sinopé TH1400ZB control via MQTT","description":"Integrate your Sinopé TH1400ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Setting outdoor temperature","slug":"setting-outdoor-temperature","link":"#setting-outdoor-temperature","children":[]},{"level":3,"title":"Setting outdoor temperature","slug":"setting-outdoor-temperature-1","link":"#setting-outdoor-temperature-1","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Max heat setpoint limit (numeric)","slug":"max-heat-setpoint-limit-numeric","link":"#max-heat-setpoint-limit-numeric","children":[]},{"level":3,"title":"Min heat setpoint limit (numeric)","slug":"min-heat-setpoint-limit-numeric","link":"#min-heat-setpoint-limit-numeric","children":[]},{"level":3,"title":"Thermostat occupancy (enum)","slug":"thermostat-occupancy-enum","link":"#thermostat-occupancy-enum","children":[]},{"level":3,"title":"Second display mode (enum)","slug":"second-display-mode-enum","link":"#second-display-mode-enum","children":[]},{"level":3,"title":"Thermostat outdoor temperature (numeric)","slug":"thermostat-outdoor-temperature-numeric","link":"#thermostat-outdoor-temperature-numeric","children":[]},{"level":3,"title":"Outdoor temperature timeout (numeric)","slug":"outdoor-temperature-timeout-numeric","link":"#outdoor-temperature-timeout-numeric","children":[]},{"level":3,"title":"Enable outdoor temperature (binary)","slug":"enable-outdoor-temperature-binary","link":"#enable-outdoor-temperature-binary","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Time format (enum)","slug":"time-format-enum","link":"#time-format-enum","children":[]},{"level":3,"title":"Backlight auto dim (enum)","slug":"backlight-auto-dim-enum","link":"#backlight-auto-dim-enum","children":[]},{"level":3,"title":"Keypad lockout (enum)","slug":"keypad-lockout-enum","link":"#keypad-lockout-enum","children":[]},{"level":3,"title":"Connected load (numeric)","slug":"connected-load-numeric","link":"#connected-load-numeric","children":[]},{"level":3,"title":"Floor control mode (enum)","slug":"floor-control-mode-enum","link":"#floor-control-mode-enum","children":[]},{"level":3,"title":"Floor max heat setpoint (numeric)","slug":"floor-max-heat-setpoint-numeric","link":"#floor-max-heat-setpoint-numeric","children":[]},{"level":3,"title":"Floor min heat setpoint (numeric)","slug":"floor-min-heat-setpoint-numeric","link":"#floor-min-heat-setpoint-numeric","children":[]},{"level":3,"title":"Ambiant max heat setpoint (numeric)","slug":"ambiant-max-heat-setpoint-numeric","link":"#ambiant-max-heat-setpoint-numeric","children":[]},{"level":3,"title":"Floor temperature sensor (enum)","slug":"floor-temperature-sensor-enum","link":"#floor-temperature-sensor-enum","children":[]},{"level":3,"title":"Main cycle output (enum)","slug":"main-cycle-output-enum","link":"#main-cycle-output-enum","children":[]},{"level":3,"title":"Aux cycle output (enum)","slug":"aux-cycle-output-enum","link":"#aux-cycle-output-enum","children":[]},{"level":3,"title":"Pump protection (binary)","slug":"pump-protection-binary","link":"#pump-protection-binary","children":[]},{"level":3,"title":"Aux connected load (numeric)","slug":"aux-connected-load-numeric","link":"#aux-connected-load-numeric","children":[]}]}],"git":{"updatedTime":1741288259000},"filePathRelative":"devices/TH1400ZB.md"}')}}]);