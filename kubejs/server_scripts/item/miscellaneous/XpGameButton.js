let wearElytra = false
let quality = "minecraft:iron_"
const firearms = ["pointblank:m1911a1", "64x pointblank:ammo45acp", "64x pointblank:ammo45acp"]
const armor = ["boots", "leggings", "chestplate", "helmet"]
ItemEvents.rightClicked(event => {
    console.info('touch')
    const { player, item, server } = event
    const playerName = player.name.getString()

    if (item == "newprovefrom:xp_game_button") {
        item.count--
        server.runCommandSilent(`/execute in lostcities:lostcity run teleport ${playerName} ~ 250 ~`)
        player.setChestArmorItem("minecraft:elytra")
        event.server.schedule(100, () => {
            console.info('give you')
            firearms.forEach(fire => player.inventory.add(fire))
            wearElytra = true
        })
    }
})
PlayerEvents.tick(event => {
    const { player } = event
    if (player.fallDistance == 0 && player.onGround && player.chestArmorItem == "minecraft:elytra" && wearElytra) {
        for (let index = 36; index <= 39; index++) {
            player.inventory.setItem(index, quality + armor[index - 36])
        }
        console.info('clean!')
        wearElytra = false
    }
})