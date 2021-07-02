class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.head = document.querySelector('.snake > div') as HTMLElement;
    this.element = document.querySelector('.snake')!;
    this.bodies = this.element.getElementsByTagName('div')!;
    // this.head = this.bodies[0] as HTMLElement;
  }
  get X() {
    return this.head.offsetLeft
  }
  get Y() {
    return this.head.offsetTop
  }
  set X(value) {
    if (value === this.X) {
      return
    }
    if (this.bodies[1] && value === (this.bodies[1] as HTMLElement).offsetLeft) {
      //如果发生了掉头,让蛇反方向继续移动
      if (value > this.X) { //向右掉头
        value = this.X - 10
      } else {       //向左掉头
        value = this.X + 10
      }
    }

    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    this.moveBody()
    this.head.style.left = value + 'px'

  }
  set Y(value) {
    if (value === this.Y) {
      return
    }
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了')
    }
    if (this.bodies[1] && value === (this.bodies[1] as HTMLElement).offsetTop) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px'


  }
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>') //在尾部添加一个div
  }
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';

    }
  }
  checkHeadBody() { //检查蛇头是否撞到自己
    for (let i = 1; i < this.bodies.length; i++) {
      let element = (this.bodies[i] as HTMLElement)
      if (element.offsetLeft === this.X && element.offsetTop === this.Y) {
        throw new Error('撞到自己了')
      }
    }
  }

}
export default Snake