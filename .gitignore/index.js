const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

// Connection du bot:
// https://discordapp.com/oauth2/authorize?client_id=496008333812301825&permissions=8&scope=bot

bot.on('ready', async () => {
    console.log(`${bot.user.username} est connecté !`);
    bot.user.setActivity("Preparez vos commandes !", {type: "PLAYING"});
});

bot.on("message", async msg => {
    if(msg.author.bot) return;
    let prefix = "commande";
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(msg.channel.id == "579725031165132800"){
      if(cmd == "commande"){
        if(!args[0]){
          let sender = msg.author;
          msg.delete(0);
          let correctsyntax = new Discord.RichEmbed()
          .setTitle("Erreur syntaxique")
          .setDescription(`Proposition manquante !\nEssayez avec **\`proposition [votre idée/proposition]\`**`)
          .setColor("#f90000")
          sender.send(correctsyntax).then(msg => msg.delete(10000));
          return;
        }
        else{
          let sender = msg.author;
          let sayargs = args.join(" ");
          msg.delete(0);
          msg.channel.send(`${sender}... Envoie de la commande en cours <a:loading:496022340367417344>`).then(msg => msg.delete(3000));
          setTimeout(function(){
            let succesful = new Discord.RichEmbed()
            .setDescription("Votre commande a été envoyée avec succès, merci de votre achat, un vendeurs vas vous mp des que votre commande sera prete")
            .setColor("#38ff4b");
            sender.send(succesful).then(msg => msg.delete(10000));
            let embed = new Discord.RichEmbed()
            .setTitle("Nouvelle commande")
            .addField("Auteur", sender)
            .addField("Proposition", sayargs)
            .setColor("#28a8e2");
            bot.channels.get("598914321518428160").send(embed);
          }, 3000);
          return;
        }
      }
      else{
        let sender = msg.author;
        msg.delete(0);
        let correctsyntax = new Discord.RichEmbed()
        .setTitle("Erreur syntaxique")
        .setDescription(`Argument **${cmd}** incorrect !\nEssayez plutôt avec: \`commande\``)
        .setColor("#f90000")
        sender.send(correctsyntax).then(msg => msg.delete(10000));
        return;
      }
    }

    if(msg.channel.id == "598914321518428160"){
      let sayargs = args.join(" ");
      let sender = msg.author;
      msg.delete(0);
      msg.channel.send(`${sender}... Envoie de la commande en cours <a:loading:496022340367417344>`).then(msg => msg.delete(3000));
      if(cmd == "null"){
        setTimeout(function(){
          let embed = new Discord.RichEmbed()
          .setTitle(":tada: Nouvelle commande :tada:")
          .addField("commande", sayargs)
          .setColor("#28a8e2");
          bot.channels.get("598914321518428160").send(embed);
          return;
        }, 3000);
      }
      else{
        setTimeout(function(){
          let embed = new Discord.RichEmbed()
          .setTitle(":tada: Nouvelle commande :tada:")
          .addField("Auteur", cmd)
          .addField("commande", sayargs)
          .setColor("#28a8e2");
          bot.channels.get("598914321518428160").send(embed);
        }, 3000);
      }
    }
});

bot.login("NTk4OTEzODQ3NzI1OTE2MTcx.XShBkw.TBB45CaISnIys5piow4UmOeb6Z4");
