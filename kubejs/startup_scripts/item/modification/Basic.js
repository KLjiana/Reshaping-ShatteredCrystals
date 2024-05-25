ItemEvents.modification(event => {
    event.modify(`#newprovefrom:ammo`, item => {
        item.maxStackSize = 999
        item.fireResistant = true
    })
})