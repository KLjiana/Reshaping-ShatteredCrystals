let wearElytra = false
let quality = "minecraft:iron_"
const firearms = ["pointblank:glock17", '64x pointblank:ammo9mm', '64x pointblank:ammo9mm']
const armor = ["boots", "leggings", "chestplate", "helmet"]
ItemEvents.rightClicked(event => {
    const { player, item, server } = event
    const playerName = player.name.getString()

    if (item == "provefrom:xp_game_button") {
        item.count--
        server.runCommandSilent(`/execute in lostcities:lostcity run teleport ${playerName} ~ 160 ~`)
        player.setChestArmorItem("minecraft:elytra")
        for (let index = 0; index < 200; index++) {
            console.info(index + ' || ' + player.inventory.getItem(index))
        }
        event.server.schedule(100, () => {
            firearms.forEach(fire => player.inventory.add(fire))
            wearElytra = true
        })
    }
})
PlayerEvents.tick(event => {
    const { player } = event
    if (player.fallDistance == 0 && player.onGround && player.chestArmorItem == "minecraft:elytra" && wearElytra) {
        for (let index = 36; index <= 39; index++) {
            player.inventory.setItem(index, quality + armor[index-36])
        }
        wearElytra = false
    }
})