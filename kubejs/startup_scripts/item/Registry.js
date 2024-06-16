StartupEvents.registry("item", event => {
    //普通的物品
    event
        .create("newprovefrom:xp_game_button")
        .unstackable()
        .texture("minecraft:item/minecart")
        .translationKey("item.newprovefrom.xp_game_button")


    //武器
    event
        .create("newprovefrom:broadsword", "sword")
        .attackDamageBaseline(8-3)
        .speedBaseline(1.3-4)
        .maxDamage(1200)
        .translationKey("pitem.newprovefrom.broadsword")

    event
        .create("newprovefrom:longsplit", "sword")
        .attackDamageBaseline(12-3)
        .speedBaseline(1-4)
        .maxDamage(1200) 
        .translationKey("item.newprovefrom.longsplit")
})