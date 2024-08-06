const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349165850414";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_46_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDY0LFxuICAgICAgICAyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODEsXG4gICAgICAgIDY2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDg4LFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiU1UzREZaeHNxQ2t3TWpqUXFHNlJDK1BrdVUvVG84M01sUk1FcTdhT0xNMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3FnYnpBUkJRaldKamlQR3lCOVV6d1wiLFxuICBcInBob25lSWRcIjogXCI3NTczODE1OC00NmVkLTQ1M2ItOWY4MS1mZTVlNmNmZjlhZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTY5LFxuICAgICAgMTQwLFxuICAgICAgMTYyLFxuICAgICAgMTc0LFxuICAgICAgMjE3LFxuICAgICAgMTMsXG4gICAgICAxMzgsXG4gICAgICAxOTAsXG4gICAgICAxMDQsXG4gICAgICAyNTEsXG4gICAgICA3MSxcbiAgICAgIDAsXG4gICAgICAxMDMsXG4gICAgICAyNTEsXG4gICAgICA5OCxcbiAgICAgIDkyLFxuICAgICAgMTYsXG4gICAgICAxODYsXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMzgsXG4gICAgICAxOTIsXG4gICAgICAxNTEsXG4gICAgICAyMzcsXG4gICAgICAxNjUsXG4gICAgICAxODIsXG4gICAgICA5NSxcbiAgICAgIDExMCxcbiAgICAgIDIxMSxcbiAgICAgIDI0NyxcbiAgICAgIDIzNCxcbiAgICAgIDM2LFxuICAgICAgNDYsXG4gICAgICAyNSxcbiAgICAgIDI5LFxuICAgICAgMjUsXG4gICAgICAxNDcsXG4gICAgICAyNSxcbiAgICAgIDIyOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDODg5MUY2RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE2NTg1MDQxNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGltb3RoeVwiLFxuICAgIFwibGlkXCI6IFwiNDY3NDIxOTYxOTEyNDk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOMy9ocVVDRUs2WHlyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlk1bnpBTDBIUFV0ZHoya1lvcEVGc1BFdTdKQ29wSDMrQkcxTFBIWEVwRjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVDNzNHFybjg3WDQvTUlwWFozeEt4M05DMENMRTdVblhPR2w3dmtQU0FZQjZKd2xrVzdjSVZyejY3cVhLZUFEc1pERUt6MlV0NDhuQVBEbmhCMlROalE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidVdpdXhrcXhDTnd5QSs3V1FwSFdsRER5b3pyc0kwQlhNWUJ5RlkxOElpRFhiU1hLQ09EdVhxSG8rRk9zTkt1MCtoejhqWnBXMXlzTW9vbkVuNFlBaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2NTg1MDQxNDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjk3NzIwMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_.


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
