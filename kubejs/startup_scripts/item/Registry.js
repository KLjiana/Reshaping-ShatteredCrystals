StartupEvents.registry("item", event => {
    //普通的物品
    event
        .create("rsc:xp_game_button")
        .unstackable()
        .texture("minecraft:item/minecart")
        .translationKey("item.rsc.xp_game_button")


    //武器
    event
        .create("rsc:broadsword", "sword")
        .attackDamageBaseline(8-3)
        .speedBaseline(1.3-4)
        .maxDamage(1200)
        .translationKey("pitem.rsc.broadsword")

    event
        .create("rsc:longsplit", "sword")
        .attackDamageBaseline(12-3)
        .speedBaseline(1-4)
        .maxDamage(1200) 
        .translationKey("item.rsc.longsplit")
})