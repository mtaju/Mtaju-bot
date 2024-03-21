const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Mtaju_Grp,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Mtaju_Grp_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Mtaju_Grp = Mtaju_grp({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Mtaju_Grp.ev.on('creds.update', saveCreds)
			Qr_Code_By_Mtaju_Grp.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Mtaju_Grp.sendMessage(Qr_Code_By_Venocyber_Tech.user.id, { text: '' + b64data });
	
				   let MTAJU_BOTS_TEXT = `
:*_Qr Code By Lazack 28_*
:*_Mr Mtaju the boss_*
______________________________________
: *_Pair Code Connected by MTAJU BOTS_*
: *_Lazack 28 made this_*
______________________________________
════◇
| *『 YO HAVE SCANNED SESSION ID OF MTAJU BOTS』*
| _This is used both in all mtaju's bot join the groups._
•••••••••••••••••••••••••••
════◇
|  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
|❒ *Group:* https://chat.whatsapp.com/CX3mGQf5zJt4iYyIC3Ato8
|❒ *Master:* _https://wa.me/message/S4444FEFY35KH1
|❒ *Repo:* _https://github.com/Lazack28_
|❒ *Group 1:* _https://chat.whatsapp.com/KYmevXcP6Ki89fpqbQHoEf_
|❒ *Group 2:* _https://chat.whatsapp.com/CX3mGQf5zJt4iYyIC3Ato8_
|❒ *channel:* _https://whatsapp.com/channel/0029VaFytPbAojYm7RIs6l1x_
•••••••••••••••••••••••••••••
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_MTAJU_GROUP.sendMessage(Qr_Code_By_MTAJU_GROUP.user.id,{text:MTAJU_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Mtaju_Grp.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					MTAJU_BOTS_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await MTAJU_BOTS_QR_CODE()
});
module.exports = router
