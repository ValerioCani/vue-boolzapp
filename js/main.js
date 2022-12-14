var app = new Vue({
    el: '#app',
    data:{
        newMessage: "",
        profileSearch:"",
        contacts_array: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                    },
                    {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.', 
                avatar: '_5',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novit???',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                    }
                ],
            }
        ]
    },


    methods:{

        sent_received(index){
            let chatArray = this.contacts_array[index].messages;
            if(chatArray[chatArray.length - 1].status =='sent'){
                result='inviato';
            }else{
                result='ricevuto';
            };
            return result
        },

        lastdate(index){
            let chatArray = this.contacts_array[index].messages;
            let dateArray = chatArray[chatArray.length - 1].date.split(' ');
            return dateArray[0];
        },

        lasthours(index, position){
            let chatArray = this.contacts_array[index].messages;
            let currentmessage = '';
            if(position == -1){
                 currentmessage = chatArray[chatArray.length - 1];
            }else{
                 currentmessage = chatArray[position];
            };
            let timeArray = currentmessage.date.split(' ');
            let HoursArray = timeArray[1].split(':')
            return HoursArray[0]+':'+HoursArray[1]; 
        },

        displaymessages(index){

            let selectedCard = document.getElementsByClassName('selected');
            if(selectedCard.length>0){
                selectedCard[0].classList.remove('selected');
            }

            let chatArray = this.contacts_array[index].messages;
            let mainChat = document.getElementById('main-chat');
            let AllCards = document.getElementsByClassName('contacts-card');
            AllCards[index].classList.add('selected');
            mainChat.innerHTML = '';

            for(let i=0; i<chatArray.length; i++){
                const hours = this.lasthours(index, i);

                if(chatArray[i].status =='sent'){
                    mainChat.innerHTML += ` <div class="message sent-message">
                                                <p>${chatArray[i].message}</p>
                                                <h5>${hours}</h5>
                                            </div>`;
                }else{
                    mainChat.innerHTML += ` <div class="message received-message">
                                                <p>${chatArray[i].message}</p>
                                                <h5>${hours}</h5>
                                            </div>`;
                };
            };
            
        },

        displayprofile(index){
            let headChat = document.getElementById('head-chat');
            headChat.innerHTML = `  <img src="img/avatar${this.contacts_array[index].avatar}.jpg" alt="">
                                    <div class="chat-card-info">
                                        <h2>${this.contacts_array[index].name}</h2>
                                        <h5>ultimo messaggio ${this.sent_received(index)}</h5>
                                        <h5>il ${this.lastdate(index)} alle ${this.lasthours(index, -1)}</h5>
                                    </div>
                                    <div id="chat-icons">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        <i class="fa-solid fa-paperclip"></i>
                                        <i class="fa-solid fa-ellipsis-vertical"></i>
                                    </div>`;
        },

        sendmessage(){
            let DateTime = luxon.DateTime;
            let mainChat = document.getElementById('main-chat');
            let message = this.newMessage;
            if(!message.trim()==""){
                mainChat.innerHTML += ` <div class="message sent-message">
                                                    <p>${this.newMessage}</p>
                                                    <h5>${DateTime.now().toFormat('H:mm')}</h5>
                                                </div>`;
                this.newMessage = "";
                setTimeout(function(){
                    mainChat.innerHTML += ` <div class="message received-message">
                                                        <p>ok</p>
                                                        <h5>${DateTime.now().toFormat('H:mm')}</h5>
                                                    </div>`;
                    
                }, 1000);
            }
        },

        filterContacts(index){
            if(this.profileSearch==""){
                return true;
            }else if(this.contacts_array[index].name.toLowerCase().includes(this.profileSearch.toLowerCase())){
                return true;
            }else{
                return false;
            }

        }
    },

})




