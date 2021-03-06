const utils = require("../library/utils.js")
const colors = require("../library/colors.js")
const fetch = require("node-fetch")
const talkedRecently = new Set()

exports.run = async(client, message, args) => {
    if (talkedRecently.has(message.author.id)) return message.channel.send(utils.BasicEmbed("Cooldown", colors.Yellow, "Please wait 1 minute before using this command again!"))
    talkedRecently.add(message.author.id);
    setTimeout(() => {
        talkedRecently.delete(message.author.id)
    }, utils.CD)
    tz = await fetch("https://hypixel-api.inventivetalent.org/api/skyblock/zoo/estimate")
        .then(res2 => res2.json())
        .then(json => json.estimateRelative)
    soj = await fetch("https://hypixel-api.inventivetalent.org/api/skyblock/winter/estimate")
        .then(res2 => res2.json())
        .then(json => json.estimateRelative)
    sf = await fetch("https://hypixel-api.inventivetalent.org/api/skyblock/spookyFestival/estimate")
        .then(res2 => res2.json())
        .then(json => json.estimateRelative)
    da = await fetch("https://hypixel-api.inventivetalent.org/api/skyblock/darkauction/estimate")
        .then(res2 => res2.json())
        .then(json => json.estimateRelative)
    mb = await fetch("https://hypixel-api.inventivetalent.org/api/skyblock/bosstimer/magma/estimatedSpawn")
        .then(res2 => res2.json())
        .then(json => json.estimateRelative)
    bi = await fetch("https://hypixel-api.inventivetalent.org/api/skyblock/bank/interest/estimate")
        .then(res2 => res2.json())
        .then(json => json.estimateRelative)
    ny = await fetch("https://hypixel-api.inventivetalent.org/api/skyblock/newyear/estimate")
        .then(res2 => res2.json())
        .then(json => json.estimateRelative)
    message.channel.send(utils.TimersEmbed(tz, soj, sf, da, mb, bi, ny))
}