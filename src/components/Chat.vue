<template>
  <div name="chat">
    <div :state="state" v-if="!state">
      <h3>{{$t('message.chat')}}</h3>
      <form @submit.prevent="setUsername">
        <input type="text" placeholder="Username..." v-model="username" />
        <input type="submit" value="Join" />
      </form>
    </div>
    <div :state="state" v-if="state">
      <b-list-group>
        <b-list-group-item variant="secondary" v-for="message in messages" :key="message.count" class="bnav1">
          <b>{{ message.user }}:</b> {{ message.message }}
        </b-list-group-item>
      </b-list-group>
      <br><br>
      <form @submit.prevent="sendMessage">
        <input type="text" placeholder="Message..." v-model="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
  import io from 'socket.io-client';
  var socket = null;
  var component= null;
export default {

  name: 'chat',
  data() {
    return {
        messages: [],
        message: '',
        username: '',
        state:'',
        count:''
    }
  },

      methods: {
        sendMessage: function () {
          this.$socket.emit('message', this.message);
          this.message = '';
        },
        setUsername: function () {
          component=this;
          this.$socket.emit('join', this.username);
          this.username = '';
          this.state = 1;
        },
        continueWithoutUsername: function () {
          this.$socket.emit('join', null);
          this.state = 1;
        },

    forceRerender() {
      //console.log("forceRerender");
      // update items
      this.updateItems();
    },

    updateItems() {
      // Updates Text and Links
    }
      },
      created: function () {
        socket = io('http://localhost:3000/');
      },
      mounted: function () {
        socket.on('message', function (message) {
          //console.log(this);
          component.messages.push(message);
          component.count++;
          // this needs to be done AFTER vue updates the page!!
          //component.$nextTick(function () {
            //var messageBox = document.getElementById('chatbox');
            //messageBox.scrollTop = messageBox.scrollHeight;
         // });
        });
      }
}
</script>
