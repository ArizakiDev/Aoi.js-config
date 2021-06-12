module.exports = {
    name: "infobot",
    code: `$title[**information sur le bot**] $description[> nom du bot : $client[name]

    > id du bot : $client[id]
    
    > tag du bot : $client[tag]
    
    > présence du bot : $client[presence]
    
    > status du bot : $client[activity]] $image[$client[avatar] $color[#ff0b0b]]`
}