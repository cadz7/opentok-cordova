/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
      // Initialize API key, session, and token...
      // Think of a session as a room, and a token as the key to get in to the room
      // Sessions and tokens are generated on your server and passed down to the client
      var apiKey = "44923822";
      var sessionId = "1_MX40NDkyMzgyMn5-VGh1IEp1bCAzMSAyMDoxNjoxNyBQRFQgMjAxNH4wLjk4ODEyMzV-fg";
      var token = "T1==cGFydG5lcl9pZD00NDkyMzgyMiZzaWc9ZGRjMmZiOWIzNTM0NjQyY2I0NjRkMjVmYTZkYzk4YWRhOWZlNTQ0Njpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5Ea3lNemd5TW41LVZHaDFJRXAxYkNBek1TQXlNRG94TmpveE55QlFSRlFnTWpBeE5INHdMams0T0RFeU16Vi1mZyZjcmVhdGVfdGltZT0xNDA2ODYzMDEwJm5vbmNlPTAuNjUwODk5OTQzMjAyMjc4Mw==";

      // Initialize session, set up event listeners, and connect
      var session = OT.initSession(apiKey, sessionId);
 
      session.on("streamCreated", function(event) {
        session.subscribe(event.stream);
      });
     
      session.connect(token, function(error) {
        var publisher = OT.initPublisher();
        session.publish(publisher);
      });

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
