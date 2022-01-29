/* Copyright (C) 2021 Queen Holi
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen-Holi
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2126, 14]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('Queen Holi')}${chalk.green.bold('Team')}
${chalk.white.italic('amazone String code recipient')}
${chalk.blue.bold('⛔️ Connecting to whatsapp, please wait.....')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('Queen Holi QR Code: '),
      'QUEEN HOLI;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'QUEEN HOLI;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~___________~* *'+ conn.user.name + ' ~___________~*\n\n*▪️ Successfully scanned♥️️*\n*▪️Thanks For using Queen Holi*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ Successfully scanned♥️️️*\n*▪️Thanks For using Queen Holi*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "\n\n Nigalkku sandesham pakarthan \n kaliyunnillegil,whatsapp parishodikkuka \n nigalude numberillekku  code ayachinnu!\n\n\n\n"
      ),
      chalk.green.bold(
        'If You Cant copy this code, please check your whatsapp log number✅️'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
