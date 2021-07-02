//引入其他类
import Snake from './Snake'
import Food from './Food'
import ScroePanel from './ScroePanel'
//创建游戏控制器类
class GameControl {
  snake: Snake;
  food: Food;
  scroePanel: ScroePanel;
  direction: string = '';
  isLive: boolean = true
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scroePanel = new ScroePanel(10, 2)

    this.init()
  }
  //游戏初始化方法
  init() {
    document.addEventListener('keydown', this.keydownHandler)
    this.run()
  }
  keydownHandler = (event: KeyboardEvent) => {
    this.direction = event.key
  }
  //ArrowUp
  //ArrowLeft
  //ArrowDown
  //ArrowRight
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'up':
        Y -= 10
        break
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break
      case 'ArrowRight':
      case 'Right':
        X += 10
        break
      case 'ArrowDown':
      case 'Down':
        Y += 10
        break
    }

    this.eatFood(X, Y)


    //复制时捕获异常
    try {
      this.snake.X = X;
      this.snake.Y = Y;

      this.snake.checkHeadBody()
    } catch (e) {
      this.isLive = false //停止游戏
      alert(e.message + 'GAMEOVER!')
    }




    // this.isLive && setTimeout(this.run.bind(this), 30)
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scroePanel.level - 1) * 30)
  }
  eatFood(X: number, Y: number) {
    if (this.food.X === X && this.food.Y === Y) { //吃到食物
      this.snake.addBody()
      this.food.change()
      this.scroePanel.addScroe()
    }
  }


}
export default GameControl