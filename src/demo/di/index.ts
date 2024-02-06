import { myContainer } from './inversify.config'
import { Warrior, TYPES } from './type'

const ninja = myContainer.get<Warrior>(TYPES.Warrior)

const expect = console.log

expect(ninja.fight()) // true
expect(ninja.sneak()) // true
