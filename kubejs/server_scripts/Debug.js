// packmode: debug
// 只要我想，随时写😋

const $Entity = Java.loadClass('net.minecraft.world.entity.Entity'); // 反射Java类
/**
 * @type {Internal.Class<Internal.Entity>}
 */
const entityClass = $Entity.__javaObject__; // 获取AccessibleObject
const portalTime = entityClass.getDeclaredField('f_19818_'); // 获取'f_19818_'即'portalTime'字段
portalTime.accessible = true; // 设置访问权限

// 写一些调试用的小工具（谁会想当码字苦力啊！

// 一键获取箱子里的物品，快速打tag）
PlayerEvents.chestClosed(event => {
    event.inventory.allItems.forEach(item => {
        console.info(`event.add('rsc:ammo',${item.toItemString()})`)
    })
    event.server.tell('tag over!')
    console.log(portalTime.get(event.entity)) // 传入Entity实例以获取该实例的portalTime字段值
})
