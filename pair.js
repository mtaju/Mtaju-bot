const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Mtaju_Grp,    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function Mtaju_Bots_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Mtaju_Grp = Mtaju_Grp({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Mtaju_Grp.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_MR_MTAJU.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Mtaju_Grp.ev.on('creds.update', saveCreds)
            Pair_Code_By_Mtaju_Grp.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Mtaju_Grp.sendMessage(Pair_Code_By_Mtaju_Grp.user.id, { text: 'mtaju' + b64data });

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
 await Pair_Code_By_Mtaju_Grp.sendMessage(Pair_Code_By_Mtaju_Grp.user.id,{text:MTAJU_TEXT},{quoted:session})

        await delay(100);
        await Pair_Code_By_Venocyber_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MTAJU_BOT_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await MTAJU_BOT_PAIR_CODE()
});
module.exports = router
