// file inversify.config.ts

import { Container } from 'inversify'
import { Warrior, Weapon, ThrowableWeapon, TYPES } from './type'
import { Ninja, Katana, Shuriken } from './entities'

const myContainer = new Container()
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja)
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana)
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken)

export { myContainer }
