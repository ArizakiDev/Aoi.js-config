module.exports = {
    name: "invites",
    code: `$title[$username's invite info]
    $thumbnail[$authorAvatar]
    $description[
    Total: $sum[$userInfo[real];$userInfo[fake]]
    vrai: $userInfo[real]
    fausse: $userInfo[fake] $color[#ff0b0b]`
}