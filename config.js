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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_48_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAzNyxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI4LFxuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgNTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICAzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIndDbkMyYjRwWm1lb2ZkSjVtZUtRU2Y0QUZua3RRSjAwa0hwTXprZERhems9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQzODQ3MjU3NDM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0QjlGQzY4MDNGN0E4MDYxOUIxNzQ3RjUyQTQ5OEI0MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MjU2ODJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNGdTUk92RWVRUE9OZUdhNldfVHlkZ1wiLFxuICBcInBob25lSWRcIjogXCI3OWVmNGRhNy04MWYzLTQzMDctOTlkNC1mMzM3OTgwZDJjYzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTI2LFxuICAgICAgMTY0LFxuICAgICAgMjE3LFxuICAgICAgODcsXG4gICAgICAyMSxcbiAgICAgIDc4LFxuICAgICAgMjMwLFxuICAgICAgNzcsXG4gICAgICAxMjQsXG4gICAgICA0NyxcbiAgICAgIDExOCxcbiAgICAgIDM1LFxuICAgICAgMjUyLFxuICAgICAgMTYsXG4gICAgICAyMjcsXG4gICAgICAyMTksXG4gICAgICAyMjUsXG4gICAgICAxMSxcbiAgICAgIDEwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMTE5LFxuICAgICAgNTYsXG4gICAgICAxNzQsXG4gICAgICA4NixcbiAgICAgIDUyLFxuICAgICAgMjQ2LFxuICAgICAgMzcsXG4gICAgICAxMjQsXG4gICAgICAxOTEsXG4gICAgICA5MixcbiAgICAgIDI0MCxcbiAgICAgIDgzLFxuICAgICAgMTI3LFxuICAgICAgMTQsXG4gICAgICA5NSxcbiAgICAgIDgwLFxuICAgICAgMTYxLFxuICAgICAgMjIwLFxuICAgICAgNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMdTZncXNDRU9qR3RMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVRL0padmRYcGJuMG5QT1Jnbkd5QlppK3l5ZWRaR3ZpV3pjOTlxdGsrR1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicFJINGdVTnJWQkdOY09rL3N5alhWOGxvTTZKR3dMNUJITTdHckpqRHBBQVhCc3dDTHByeGgyQmZFeVJFb1lZdG1vdmhlZFdCTTdmNE5rYWQ5cHAyQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnY3a0FqM1V2aFhVWUpWT1Jhc045RGdzcmphM0RlL045RExYeG9VY2NMWG9sQ1puQ241ZTBOdVA5NXFQZlU4dzNOWmlNSUZKc3R3YldmQ2tOSU9haHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNDM4NDcyNTc0MzY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI3MTE4MzU3MTg4ODU0OjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi4ayK4ayB4pek4oOf4pye8J2QhPCdkJHwnZCE8J2QjS4gUyDwnZCJ8J2QhPCdkIDwnZCG8J2QhPCdkJHil6Tig5/wn4608JOFglwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjQzODQ3MjU3NDM2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTI1Njc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzFiXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDMWIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3WEo2NmZZbjg0Wng2M1daWFljMWxGTDF2ZWw5QkhUVnBpbHFNMS9FZ29ZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyNzA4ODY5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTI1Njc5NjE1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "§",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ᬊᬁ◤⃟✞𝐄𝐑𝐄𝐍 𝐉𝐄𝐀𝐆𝐄𝐑◤⃟🎴𓅂",
  packname: process.env.PACK_NAME || "ᬊᬁ◤⃟✞𝐄𝐑𝐄𝐍 𝐉𝐄𝐀𝐆𝐄𝐑◤⃟🎴𓅂",
  botname : process.env.BOT_NAME  || "ᬊᬁ◤⃟✞𝐄𝐑𝐄𝐍 𝐉𝐄𝐀𝐆𝐄𝐑◤⃟🎴𓅂",
  ownername:process.env.OWNER_NAME|| "ᬊᬁ◤⃟✞𝐄𝐑𝐄𝐍 𝐉𝐄𝐀𝐆𝐄𝐑◤⃟🎴𓅂",


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
