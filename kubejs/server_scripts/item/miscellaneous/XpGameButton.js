let wearElytra = false
let quality = "minecraft:iron_"
const firearms = ["pointblank:glock17", '64x pointblank:ammo9mm', '64x pointblank:ammo9mm']
ItemEvents.rightClicked(event => {
    const { player, item, server } = event
    const playerName = player.name.getString()

    if (item == "provefrom:xp_game_button") {
        item.count--
        server.runCommandSilent(`/execute in lostcities:lostcity run teleport ${playerName} ~ 160 ~`)
        player.setChestArmorItem("minecraft:elytra")
        //console.info(player.armorSlots)
        event.server.schedule(100, () => {
            firearms.forEach(fire => player.inventory.add(fire))
            wearElytra = true
        })
    }
})
PlayerEvents.tick(event => {
    const { player } = event
    if (player.fallDistance == 0 && player.onGround && player.chestArmorItem == "minecraft:elytra" && wearElytra) {
        player.setHeadArmorItem(quality + "helmet")
        player.setChestArmorItem(quality + "chestplate")
        player.setLegsArmorItem(quality + "leggings")
        player.setFeetArmorItem(quality + "boots")
        wearElytra = false
    }
})