// file entities.ts

import { injectable, inject } from 'inversify'
import 'reflect-metadata'
import { Weapon, ThrowableWeapon, Warrior, TYPES } from './type'

@injectable()
class Katana implements Weapon {
  public hit() {
    return 'cut!'
  }
}

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw() {
    return 'hit!'
  }
}

@injectable()
class Ninja implements Warrior {
  private _katana: Weapon
  private _shuriken: ThrowableWeapon

  public constructor(@inject(TYPES.Weapon) katana: Weapon, @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon) {
    this._katana = katana
    this._shuriken = shuriken
  }

  public fight() {
    return this._katana.hit()
  }
  public sneak() {
    return this._shuriken.throw()
  }
}

export { Ninja, Katana, Shuriken }
