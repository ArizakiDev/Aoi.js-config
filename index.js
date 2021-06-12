const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
    sharding: false,
    shardAmount: 2,
    mobile: false,
    token: "",
    prefix: [""],
    autoUpdate: true,
})
bot.loadCommands(`./commands/`)

bot.onMessage()
bot.onInviteCreate()

bot.banAddCommand({
    channel: "838463192568430672",
    code: `$mentioned[1] à été ban`
})
bot.banRemoveCommand({ //command
    channel: "838463192568430672", //channel where bot logs
    code: `$mentioned[1] à été déban` //your code
})
bot.channelCreateCommand({
    channel: "838463194296352828",
    code: `
    Channel créé:
    $newChannel[name]
    `
})
bot.musicStartCommand({
    channel: "$channelID",
    code: `Now Playing: $songInfo[title]`
})

bot.status({
    text: "Préfix : ",
    type: "COMPETING",
    time: 12
})

bot.status({
    text: "$serverCount Serveurs",
    type: "WATCHING",
    time: 20
})
