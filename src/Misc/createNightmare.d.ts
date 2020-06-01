interface Setup {
  createNightmare(base?: NightMareBase): string
}

interface NightMareBase {
  figure?: {
    type: string
    prefix: string
    gender: string
  }
  location?: string
}
