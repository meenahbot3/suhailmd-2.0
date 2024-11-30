const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349067353975";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_59_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICA0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI4LFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOU9rUVYvWkJmZ3BNZDE1MkhKRFl2YWVSWFNDSXBteVBKMGVLcjB6bnJZRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDY3MzUzOTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENDEyMkU1MEQ3QzU0NEMyNTg5QzgzNkU5RDE5MDJFNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMwMDc1NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZC1NbVRuUEhSMnF5TFlvdWpZb3RKd1wiLFxuICBcInBob25lSWRcIjogXCI5MDI0ODYzYi00YjBhLTQyZjctYWQwOS1jN2I4NjQwNmY5NmZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxOCxcbiAgICAgIDExMSxcbiAgICAgIDIzMyxcbiAgICAgIDQwLFxuICAgICAgMTUsXG4gICAgICAyMTAsXG4gICAgICAyMzAsXG4gICAgICAxNjksXG4gICAgICAxNjQsXG4gICAgICAyNTMsXG4gICAgICA3MixcbiAgICAgIDI0MSxcbiAgICAgIDE5MCxcbiAgICAgIDcxLFxuICAgICAgNjEsXG4gICAgICAxMjEsXG4gICAgICAyMTEsXG4gICAgICA4OSxcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDY4LFxuICAgICAgMTgyLFxuICAgICAgNTUsXG4gICAgICAyOSxcbiAgICAgIDE4NCxcbiAgICAgIDE1MixcbiAgICAgIDc4LFxuICAgICAgMTMwLFxuICAgICAgMTEsXG4gICAgICAxNzYsXG4gICAgICA4MyxcbiAgICAgIDE0NixcbiAgICAgIDksXG4gICAgICAxNTcsXG4gICAgICAxNSxcbiAgICAgIDk4LFxuICAgICAgMTk2LFxuICAgICAgMTUsXG4gICAgICAyMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVRFNFZSVkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNjczNTM5NzU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ0cmVhdHMgYnkgbWVlbmFoXCIsXG4gICAgXCJsaWRcIjogXCIyNjc4Njg1NTM5MDgzNzU6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTZpdCtVQkVNbXhycm9HR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJtTFRnYWx6VkJrbjgvelBSanB0WlVsTDdKZlJCTEFWZ2x2L0FDdkVnNmo4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitNT3hkUStnaGFUejNTNXFkQXVNak01K1JjWU5WRWI5UEtiQlp6d3pjemdrcnJrT1BpSHZ1OExEWnRoNEFILzRrS1BlTTdpYThwUE9PRTdBaGc2T0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJuOW1EdU40enFrTmlER2EvVWNhVXd5Sk9BUXQ1U3Y5OE1xdUU3NzM2RnpibXNrU3liM3k3bVFDSTdPU2lPZXNxUFZ6a04yQ1FBSmFGOC9DVW5teUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjczNTM5NzU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMDA3NTY1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTHFXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMcVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoSlNFa2ZnY3hxemU2QlROeE1FQmdFVDNrNjd6dU5DeUJVUWtXRHY3MWM0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ4MTE1MzM1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5MDQxNzM2MzExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
