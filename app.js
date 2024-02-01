"use strict";

const User = function (name) {
  this.name = name;
};

const anna = new User("Anna");
const nicolas = new User("Nicolas");
const currentuser = anna;

class Conversation {
  constructor() {
    this.users = [];
    this.messages = [];
  }
  addUser(users) {
    users.forEach(user => {
      if (this.users.includes(user)) {
        throw new Error("User already in conversation");
      }
      else if (!user instanceof User) {
        throw new Error("User must be an instance of User");
      }
      else {
        console.log(`BOUM ${user.name} !!! has been added to the conversation `);
        this.users.push(user);
      }
    });
  }
}

class Message {
  constructor(user, content) {
    this.user = user;
    this.content = content;
  }
  display() {
    const fill = document.querySelector(".conversation");
    const qui = currentuser === this.user ? "from-me" : "from-them";
    const html = `<div>
      <span class="${qui}">${this.user.name}</span>
      <p class ="${qui}">${this.content}</p>
      </div>`;
    fill.insertAdjacentHTML("beforeend", html);
  }
}


User.prototype.sendMessage = function(conversation, content){
  if (!conversation.users.includes(this)){
    throw new Error("User not in conversation");
  }
    const newMessage = new Message(this, content);
    conversation.messages.push(newMessage);
    newMessage.display();

  }
    


const conversationIMPORTANTE = new Conversation();
const conversationBALEINEV = new Conversation();
conversationIMPORTANTE.addUser([anna, nicolas]);
console.log(conversationIMPORTANTE.users);
anna.sendMessage(conversationIMPORTANTE, "Est-ce que Netlify fonctionne ???");
nicolas.sendMessage(conversationIMPORTANTE, "Si tu vois ça c'est que oui");
anna.sendMessage(conversationIMPORTANTE, "Trop bien alors ! Kakou kakou!!!!");