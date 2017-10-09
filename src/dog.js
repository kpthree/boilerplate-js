// @flow
class Dog {
  name: string
  constructor(name: string) {
    this.name = name
  }
  bark() {
    return `${this.name}`
  }
}

export default Dog
